import test from "node:test";
import assert from "node:assert/strict";
import { detectLocale, LOCALE_KEY } from "../src/i18n/locale.ts";

function withBrowser(languages: string[], saved?: string) {
  const navigatorDescriptor = Object.getOwnPropertyDescriptor(
    globalThis,
    "navigator",
  );
  const storageDescriptor = Object.getOwnPropertyDescriptor(
    globalThis,
    "localStorage",
  );
  Object.defineProperty(globalThis, "navigator", {
    value: { languages },
    configurable: true,
  });
  Object.defineProperty(globalThis, "localStorage", {
    value: {
      getItem: (key: string) => (key === LOCALE_KEY ? (saved ?? null) : null),
      setItem: () => undefined,
    },
    configurable: true,
  });
  return () => {
    if (navigatorDescriptor)
      Object.defineProperty(globalThis, "navigator", navigatorDescriptor);
    else delete (globalThis as { navigator?: unknown }).navigator;
    if (storageDescriptor)
      Object.defineProperty(globalThis, "localStorage", storageDescriptor);
    else delete (globalThis as { localStorage?: unknown }).localStorage;
  };
}

test("saved preference wins over the browser language", () => {
  const restore = withBrowser(["zh-CN"], "en-US");
  try {
    assert.equal(detectLocale(), "en-US");
  } finally {
    restore();
  }
});

test("Chinese browsers default to Chinese and other languages to English", () => {
  let restore = withBrowser(["zh-CN"]);
  try {
    assert.equal(detectLocale(), "zh-CN");
  } finally {
    restore();
  }
  restore = withBrowser(["en-GB"]);
  try {
    assert.equal(detectLocale(), "en-US");
  } finally {
    restore();
  }
  restore = withBrowser(["ja-JP"]);
  try {
    assert.equal(detectLocale(), "en-US");
  } finally {
    restore();
  }
});

test("an invalid saved value falls back to browser detection", () => {
  const restore = withBrowser(["zh-Hant"], "fr-FR");
  try {
    assert.equal(detectLocale(), "zh-CN");
  } finally {
    restore();
  }
});
