import r from "oa";
import o from "bk";
import i from "z8";
import l from "bT";
import { A as A_1 } from "./module-Ww_2.js";
import { Gv, cy } from "./module-V9.js";
import { QO } from "./module-mY_2.js";
import { A as A_2 } from "./module-k6B.js";
import { t as t_1 } from "./module-rT.js";
function c(e) {
  let { style, width = "60%", rows = 3, className, prefixCls } = e;
  let c = A_1(`${prefixCls}-text`, className);
  let children = [];
  for (let e = 0; e < rows; e++) {
    let d;
    children.push(
      i.jsx(
        "li",
        {
          className: `${prefixCls}-text-row`,
          style: {
            width:
              ((d = e),
              cy(width) ? width[d] : rows - 1 === d ? width : undefined),
          },
        },
        e,
      ),
    );
  }
  return i.jsx("ul", {
    className: c,
    style,
    children,
  });
}
function u(e) {
  let {
    style,
    shape = "square",
    size,
    position = "left",
    className,
    prefixCls,
  } = e;
  let c = A_1(
    `${prefixCls}-image`,
    {
      [`${prefixCls}-image-${position}`]: position,
      [`${prefixCls}-image-${shape}`]: shape,
      [`${prefixCls}-image-${size}`]: size,
    },
    className,
  );
  return i.jsx("div", {
    className: c,
    style,
  });
}
function h(e) {
  if (Gv(e)) {
    return e;
  }
  return {};
}
let m = {
  text: true,
  loading: true,
};
export let A = l.forwardRef(function (e, ref) {
  let { getPrefixCls, componentConfig, rtl } = l.useContext(QO);
  let g = A_2(
    e,
    m,
    componentConfig == null ? undefined : componentConfig.Skeleton,
  );
  let { style, className, animation, loading, image, text, children } = g;
  let N = h(image);
  let P = h(text);
  let prefixCls = getPrefixCls("skeleton");
  let k = A_1(
    prefixCls,
    {
      [`${prefixCls}-animate`]: animation,
      [`${prefixCls}-rtl`]: rtl,
    },
    className,
  );
  function A() {
    return (
      image &&
      i.jsx("div", {
        className: `${prefixCls}-header`,
        children: i.jsx(
          u,
          r._(
            {
              prefixCls,
            },
            N,
          ),
        ),
      })
    );
  }
  return i.jsx(l.Fragment, {
    children: loading
      ? i.jsxs(
          "div",
          o._(r._({}, t_1(g)), {
            className: k,
            style,
            ref,
            children: [
              N.position !== "right" && A(),
              text &&
                i.jsx("div", {
                  className: `${prefixCls}-content`,
                  children: i.jsx(
                    c,
                    r._(
                      {
                        prefixCls,
                      },
                      P,
                    ),
                  ),
                }),
              N.position === "right" && A(),
            ],
          }),
        )
      : children,
  });
});
A.displayName = "Skeleton";
