import * as ChildProcess from "node:child_process";

import type { DesktopLocalFontFace } from "@synara/contracts";

const MAX_LOCAL_FONT_FACES = 20_000;
const MAX_OUTPUT_BYTES = 4 * 1024 * 1024;

const MAC_LOCAL_FONTS_SCRIPT = String.raw`
ObjC.import("AppKit");
var manager = $.NSFontManager.sharedFontManager;
var families = ObjC.deepUnwrap(manager.availableFontFamilies) || [];
var faces = [];
families.forEach(function (family) {
  var members = ObjC.deepUnwrap(manager.availableMembersOfFontFamily(family)) || [];
  members.forEach(function (member) {
    var postscriptName = String(member[0] || "");
    var style = String(member[1] || "Regular");
    if (!postscriptName) return;
    faces.push({
      family: String(family || ""),
      fullName: postscriptName,
      postscriptName: postscriptName,
      style: style
    });
  });
});
JSON.stringify(faces);
`;

let macLocalFontFacesPromise: Promise<DesktopLocalFontFace[]> | null = null;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function parseLocalFontFaces(value: unknown): DesktopLocalFontFace[] {
  if (!Array.isArray(value)) return [];

  const faces: DesktopLocalFontFace[] = [];
  for (const item of value.slice(0, MAX_LOCAL_FONT_FACES)) {
    if (!item || typeof item !== "object") continue;
    const record = item as Record<string, unknown>;
    if (
      !isNonEmptyString(record.family) ||
      !isNonEmptyString(record.fullName) ||
      !isNonEmptyString(record.postscriptName) ||
      !isNonEmptyString(record.style)
    ) {
      continue;
    }
    faces.push({
      family: record.family.trim(),
      fullName: record.fullName.trim(),
      postscriptName: record.postscriptName.trim(),
      style: record.style.trim(),
    });
  }
  return faces;
}

async function queryMacLocalFontFaces(): Promise<DesktopLocalFontFace[]> {
  const stdout = await new Promise<string>((resolve, reject) => {
    ChildProcess.execFile(
      "/usr/bin/osascript",
      ["-l", "JavaScript", "-e", MAC_LOCAL_FONTS_SCRIPT],
      { encoding: "utf8", maxBuffer: MAX_OUTPUT_BYTES, timeout: 10_000 },
      (error, output) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(output);
      },
    );
  });

  return parseLocalFontFaces(JSON.parse(stdout) as unknown);
}

export async function listDesktopLocalFontFaces(): Promise<DesktopLocalFontFace[]> {
  if (process.platform !== "darwin") return [];
  macLocalFontFacesPromise ??= queryMacLocalFontFaces().catch((error) => {
    macLocalFontFacesPromise = null;
    throw error;
  });
  return macLocalFontFacesPromise;
}
