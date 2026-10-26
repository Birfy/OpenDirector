import i from "Ut";
export function K(e) {
  if (e) {
    const t = new i.DAHistoryOption();
    t.storyId = e.storyId;
    return t;
  }
}
export function x(e) {
  if (e) {
    return {
      storyId: String(e.storyId),
    };
  }
}
