import n from "NY";
import r from "z8";
import a from "bT";
import { O } from "./module-bh.js";
export const y = () => Promise.resolve().then(require.bind(require, "H0x"));
const c = a.lazy(() =>
  n._(function* () {
    return {
      default: (yield y()).DocxViewer,
    };
  })(),
);
export var f = a.memo(function (e) {
  const { label, url } = e;
  if (url) {
    return r.jsx(O, {
      label,
      className: "compact-preview-adaptive-SKTqBr",
      children: r.jsx(a.Suspense, {
        children: r.jsx(c, {
          url,
          compact: true,
        }),
      }),
    });
  }
  return null;
});
