export function s(mode) {
  return () =>
    Promise.resolve({
      lang: "",
      i18nData: {},
      mode,
      localizationVariant: "v0",
      mainFrame2026SidebarCollapsed: false,
    });
}
