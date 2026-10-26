import r from "oa";
import n from "bk";
const SYMBOL_IS_CUSTOM_ = Symbol.for("__is_custom__");
export function Jl(e) {
  return e.entryType === "element";
}
export function M8(e) {
  return !!(e == null ? undefined : e[SYMBOL_IS_CUSTOM_]);
}
export function a$(e) {
  return Jl(e) && !M8(e);
}
export function C(e, element) {
  return n._(r._({}, e), {
    element,
    toJSON: () =>
      JSON.stringify(
        n._(r._({}, e), {
          is_custom: true,
        }),
      ),
    [SYMBOL_IS_CUSTOM_]: true,
  });
}
export function zI(e) {
  const t = new PerformanceObserver((t) => {
    e(t.getEntries().filter(a$));
  });
  t.observe({
    type: "element",
    buffered: true,
  });
  return t;
}
