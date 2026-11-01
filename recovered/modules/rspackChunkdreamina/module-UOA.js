import a from "z8";
import r from "bT";
import _o from "xb";
import { R } from "./module-Du8.js";
import { Z } from "./module-X0.js";
import { G, f as f_1 } from "./module-Lt.js";
export var U = r.memo(function (e) {
  const { typeSelect, submitButton, extraActions, className, children } = e;
  const m = r.useContext(R);
  const { appearance, collapsed } = m;
  return a.jsxs("div", {
    className: _o("toolbar-cobXSJ", className, {
      "collapsed-e7icMD": collapsed,
      "main-frame-2026-PeeU5A": f_1(appearance),
      "main-frame-2026-oversea-jryNuU": G(m),
    }),
    children: [
      a.jsxs(Z, {
        className: "toolbar-settings-Kz0lK8",
        contentClassName: "toolbar-settings-content-R61ikH",
        children: [typeSelect, children],
      }),
      a.jsxs("div", {
        className: "toolbar-actions-z_qZdq",
        children: [extraActions, submitButton],
      }),
    ],
  });
});
