import r from "Egb";
export function j(e) {
  let t;
  let i;
  let r;
  const n = new URLSearchParams(e);
  const toolId = (i = n.get("toolId")) == null ? undefined : i.trim();
  const o = (t = n.get("type")) != null ? t : "default";
  if (
    !(
      !toolId ||
      (o !== "default" && o !== "custom") ||
      ["toolId", "type", "panel_key"].some((e) => n.getAll(e).length > 1)
    )
  ) {
    return {
      toolId,
      type: o,
      panelKey:
        ((r = n.get("panel_key")) == null ? undefined : r.trim()) || undefined,
    };
  }
}
export function c(e) {
  const t = new URLSearchParams({
    toolId: e.toolId,
    type: e.type,
  });
  if (e.panelKey) {
    t.set("panel_key", e.panelKey);
  }
  return "".concat(r.EN, "/tools?").concat(t);
}
