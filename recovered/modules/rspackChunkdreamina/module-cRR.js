import r from "NY";
import n from "oa";
import a from "z8";
import o from "bT";
const s = o.lazy(() =>
  r._(function* () {
    return {
      default: (yield Promise.all([
        require.e("9ed"),
        require.e("mo4"),
        require.e("46qd"),
        require.e("1sx"),
        require.e("lue"),
      ]).then(require.bind(require, "bCP"))).AssetSelectorDialog,
    };
  })(),
);
export function I(e) {
  if (e.open) {
    return a.jsx(o.Suspense, {
      fallback: null,
      children: a.jsx(s, n._({}, e)),
    });
  }
  return null;
}
