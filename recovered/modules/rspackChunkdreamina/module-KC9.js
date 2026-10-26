import i from "oa";
import a from "HX";
function o(e, state) {
  e.navigate(a.Du.Explore, {
    state,
  });
}
export { o };
export function W(e, t) {
  o(
    e,
    i._(
      {
        kind: "category-scene",
      },
      t,
    ),
  );
}
