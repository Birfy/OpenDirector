const s = new Set([
  "image",
  "video",
  "music",
  "document",
  "infinite_canvas",
  "ai_canvas",
  "novel_project",
]);
export function BU(e) {
  if (e != null && e !== "") {
    return String(e);
  }
}
export function k3(e, t) {
  return (
    (e == null ? undefined : e.teamId) === (t == null ? undefined : t.teamId) &&
    (e == null ? undefined : e.teamMemberUserId) ===
      (t == null ? undefined : t.teamMemberUserId)
  );
}
export function cp(e) {
  return !!(e && s.has(e));
}
Object.defineProperty(exports, "eI", {
  enumerable: true,
  get: () => "0",
});
