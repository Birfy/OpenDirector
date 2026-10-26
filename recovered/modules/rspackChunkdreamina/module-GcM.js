import r from "oa";
import o from "bk";
import i from "qa";
import l from "z8";
import s from "bT";
import a from "fyk";
import "U4";
import { V } from "./module-Mt_2.js";
import { A } from "./module-d1.js";
import { QO } from "./module-tMn.js";
import { A as A_1 } from "./module-oO_3.js";
const m = s.forwardRef(function (e, t) {
  const prefixCls = s.useContext(V).prefixCls;
  const r = prefixCls === undefined ? "lv" : prefixCls;
  const e_spin = e.spin;
  const e_className = e.className;
  const l = {
    "aria-hidden": true,
    focusable: false,
    ref: t,
    ...e,
    className: `${e_className ? e_className + " " : ""}`
      .concat(r, "-icon ")
      .concat(r, "-icon-empty-color"),
  };
  if (e_spin) {
    l.className = "".concat(l.className, " ").concat(r, "-icon-loading");
  }
  delete l.spin;
  delete l.isIcon;
  return s.createElement(
    "svg",
    a(
      {
        fill: "none",
        viewBox: "0 0 48 48",
        stroke: "currentColor",
      },
      l,
    ),
    s.createElement("rect", {
      width: "35.825",
      height: "29.594",
      x: "11.269",
      y: "12.427",
      fill: "var(--lvv-color-main-02)",
      strokeWidth: "0",
      rx: "2",
      transform: "rotate(7.839 11.27 12.427)",
    }),
    s.createElement("path", {
      fill: "var(--lvv-color-text-secondary)",
      strokeWidth: "0",
      d: "M12.6 15h28.8c.424 0 .831.17 1.131.472.3.302.469.712.469 1.14v25.777c0 .427-.169.837-.469 1.14-.3.301-.707.471-1.131.471H12.6c-.424 0-.831-.17-1.131-.472a1.617 1.617 0 0 1-.469-1.14V16.612c0-.427.169-.837.469-1.14.3-.301.707-.471 1.131-.471Zm27.2 17.722h-5.466a8.043 8.043 0 0 1-2.95 3.52 7.962 7.962 0 0 1-8.768 0 8.043 8.043 0 0 1-2.95-3.52H14.2v8.056h25.6v-8.056Zm0-3.222V18.222H14.2V29.5h8a4.85 4.85 0 0 0 1.406 3.418A4.783 4.783 0 0 0 27 34.333c1.273 0 2.494-.509 3.394-1.415A4.85 4.85 0 0 0 31.8 29.5h8Z",
    }),
    s.createElement("path", {
      stroke: "var(--lvv-color-text-secondary)",
      d: "M40.3 32.722v-.5H34.006l-.13.301a7.544 7.544 0 0 1-2.768 3.301 7.462 7.462 0 0 1-8.216 0 7.544 7.544 0 0 1-2.768-3.3l-.13-.302H13.7v9.056h26.6v-8.556ZM11.823 43.176l-.352.35.352-.35a1.117 1.117 0 0 1-.323-.787V16.61c0-.296.117-.579.323-.787.207-.208.486-.324.777-.324h28.8c.29 0 .57.116.777.324.206.208.323.491.323.787V42.39c0 .296-.117.579-.323.787a1.095 1.095 0 0 1-.777.324H12.6c-.29 0-.57-.116-.777-.324ZM39.8 30h.5V17.722H13.7V30h8.023a5.348 5.348 0 0 0 1.528 3.27A5.283 5.283 0 0 0 27 34.833a5.283 5.283 0 0 0 3.749-1.563A5.348 5.348 0 0 0 32.277 30H39.8Z",
    }),
    s.createElement("path", {
      stroke: "var(--lvv-color-text-secondary)",
      strokeLinecap: "round",
      strokeWidth: "3",
      d: "m12.553 9.796-1.294-4.83M6.617 16.044l-4.83-1.294M20.509 9.617l2.113-4.532",
    }),
  );
});
m.defaultProps = {
  isIcon: true,
};
m.displayName = "IconEmptyColor";
let b = s.forwardRef(function (e, t) {
  let { getPrefixCls, locale, componentConfig } = s.useContext(QO);
  let u = A_1(
    e,
    {},
    componentConfig == null ? undefined : componentConfig.Empty,
  );
  let { style, className, description, icon, imgSrc } = u;
  let x = i._(u, ["style", "className", "description", "icon", "imgSrc"]);
  let w = getPrefixCls("empty");
  let className_1 = A(w, className);
  let { noData } = locale.Empty;
  let alt = typeof description === "string" ? description : "empty";
  return l.jsx(
    "div",
    o._(
      r._(
        {
          ref: t,
          className: className_1,
          style,
        },
        x,
      ),
      {
        children: l.jsxs("div", {
          className: `${w}-wrapper`,
          children: [
            l.jsx("div", {
              className: `${w}-image`,
              children: imgSrc
                ? l.jsx("img", {
                    alt,
                    src: imgSrc,
                  })
                : icon || l.jsx(m, {}),
            }),
            l.jsx("div", {
              className: `${w}-description`,
              children: description || noData,
            }),
          ],
        }),
      },
    ),
  );
});
b.displayName = "Empty";
var x = s.memo(b);
export { x as A };
