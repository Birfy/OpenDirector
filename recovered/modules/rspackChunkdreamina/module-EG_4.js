const i = /^\/ai-tool\/generate\/?$/;
const n = /^(?:0|[1-9]\d*)$/;
export function w(e) {
  let t;
  let a;
  let r;
  let staticView;
  let s;
  const { request } = e;
  return {
    lang: "",
    ssrEnabled: false,
    staticView: ((staticView =
      (r = (a =
        (t = request.url) instanceof URL
          ? t
          : new URL(
              t != null ? t : "",
              "https://dreamina.invalid",
            )).searchParams.get("workspace")) === null ||
      r === "" ||
      r === "undefined"
        ? "new_conversation"
        : "feed"),
    (s = r !== null && n.test(r) ? Number(r) : undefined),
    {
      isGeneratePath: i.test(a.pathname),
      forceCsr: a.searchParams.get("csr") === "true",
      staticView,
      workspaceId: s !== undefined && Number.isSafeInteger(s) ? s : undefined,
    }).staticView,
    mainFrame2026SidebarCollapsed: false,
  };
}
