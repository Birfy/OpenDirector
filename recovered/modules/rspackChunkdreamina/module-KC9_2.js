import a from "oa";
import t from "HX";
export function o(e, state) {
  e.navigate(t.Du.Explore, {
    state,
  });
}
export function W(e, l) {
  o(
    e,
    a._(
      {
        kind: "category-scene",
      },
      l,
    ),
  );
}
