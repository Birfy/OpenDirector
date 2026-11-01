import n from "NY";
import r from "z8";
import a from "bT";
import { O } from "./module-bh.js";
export const P = () => Promise.resolve().then(require.bind(require, "oEs"));
const c = a.lazy(() =>
  n._(function* () {
    return {
      default: (yield P()).MarkdownViewer,
    };
  })(),
);
export var e = a.memo(function (e) {
  const { label, url } = e;
  if (url) {
    return r.jsx(O, {
      label,
      className: "compact-preview-adaptive-dSyAFV",
      children: r.jsx(a.Suspense, {
        fallback: r.jsx("div", {
          className: "loading-placeholder-Jmc7wY",
        }),
        children: r.jsx(c, {
          url,
          className: "markdown-preview-v_x2iV",
        }),
      }),
    });
  }
  return null;
});
