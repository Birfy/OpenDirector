import n from "NY";
import r from "z8";
import a from "bT";
import { O } from "./module-bh.js";
export const u = () => Promise.resolve().then(require.bind(require, "PP"));
const c = a.lazy(() =>
  n._(function* () {
    return {
      default: (yield u()).PdfViewer,
    };
  })(),
);
export var L = a.memo(function (e) {
  const { label, url } = e;
  if (url) {
    return r.jsx(O, {
      label,
      className: "compact-preview-adaptive-Bjp9A1",
      children: r.jsx(a.Suspense, {
        children: r.jsx(c, {
          url,
          compact: true,
          pageLimit: 1,
        }),
      }),
    });
  }
  return null;
});
