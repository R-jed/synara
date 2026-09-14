// FILE: ThemePackEditor.fonts.browser.tsx
// Purpose: Browser regression for installed-font search and selection in Appearance.
// Layer: Focused component integration test

import "../index.css";

import { page, userEvent } from "vitest/browser";
import { beforeEach, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";

const harness = vi.hoisted(() => ({
  queryLocalFontFamilies: vi.fn(),
}));

vi.mock("../lib/localFonts", () => ({
  queryLocalFontFamilies: harness.queryLocalFontFamilies,
}));

import { useTheme } from "../hooks/useTheme";
import { ThemePackEditor } from "./ThemePackEditor";

const FONT_FAMILIES = [
  {
    family: "Arial",
    faces: [
      {
        family: "Arial",
        fullName: "Arial Regular",
        postscriptName: "ArialMT",
        style: "Regular",
      },
      {
        family: "Arial",
        fullName: "Arial Bold",
        postscriptName: "Arial-BoldMT",
        style: "Bold",
      },
    ],
  },
  {
    family: "Inter",
    faces: [
      {
        family: "Inter",
        fullName: "Inter Regular",
        postscriptName: "Inter-Regular",
        style: "Regular",
      },
    ],
  },
] as const;

function FontPickerHarness() {
  const { darkTheme, systemUiFont } = useTheme();
  return (
    <>
      <ThemePackEditor variant="dark" isActive mode="dark" />
      <output data-testid="selected-ui-font">
        {systemUiFont ? "system" : (darkTheme.theme.fonts.ui ?? "none")}
      </output>
      <output data-testid="selected-ui-face">
        {darkTheme.theme.fonts.uiFace?.style ?? "auto"}
      </output>
    </>
  );
}

beforeEach(() => {
  localStorage.removeItem("synara:theme");
  harness.queryLocalFontFamilies.mockReset().mockResolvedValue(FONT_FAMILIES);
});

it("filters installed fonts without persisting the query and supports keyboard family selection", async () => {
  await render(<FontPickerHarness />);

  await vi.waitFor(() => expect(harness.queryLocalFontFamilies).toHaveBeenCalledOnce());
  expect(document.querySelector('[data-testid="selected-ui-font"]')?.textContent).toBe("system");

  const input = page.getByRole("combobox", { name: "Dark theme UI font", exact: true });
  await input.click();
  await input.fill("ari");

  await expect.element(page.getByRole("option", { name: "Arial" })).toBeVisible();
  expect(document.querySelector('[data-testid="selected-ui-font"]')?.textContent).toBe("system");

  const inputElement = document.querySelector(
    '[aria-label="Dark theme UI font"]',
  ) as HTMLInputElement | null;
  inputElement?.focus();
  await userEvent.keyboard("{ArrowDown}");
  await userEvent.keyboard("{Enter}");
  await vi.waitFor(() =>
    expect(document.querySelector('[data-testid="selected-ui-font"]')?.textContent).toBe("Arial"),
  );

  const faceSelect = page.getByRole("combobox", {
    name: "Dark theme UI font Font face",
    exact: true,
  });
  await faceSelect.click();
  await page.getByRole("option", { name: "Bold" }).click();
  await vi.waitFor(() =>
    expect(document.querySelector('[data-testid="selected-ui-face"]')?.textContent).toBe("Bold"),
  );
});
