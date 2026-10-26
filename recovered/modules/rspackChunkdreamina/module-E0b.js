import r from "Wl";
export function R(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : r.T7();
  if (t) {
    return e;
  }
  return {
    categories: e.categories.filter((e) => !e.hasShortDramaEntry),
  };
}
