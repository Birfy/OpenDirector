import _r from "fyk";
import a from "bT";
import o from "wnX";
import { Wb } from "./module-rJ.js";
export const A = a.forwardRef(function (e, t) {
  const e_className = e.className;
  const r = e_className === undefined ? "" : e_className;
  const e_style = e.style;
  const e_data = e.data;
  const e_columns = e.columns;
  const d = e_columns === undefined ? 3 : e_columns;
  const e_border = e.border;
  const v = e_border !== undefined && e_border;
  const e_gutter = e.gutter;
  const h = e_gutter === undefined ? 0 : e_gutter;
  const e_shape = e.shape;
  const g = e_shape === undefined ? "square" : e_shape;
  const e_direction = e.direction;
  const b = e_direction === undefined ? "vertical" : e_direction;
  const e_isSliding = e.isSliding;
  const x = e_isSliding !== undefined && e_isSliding;
  const CRef = a.useRef(null);
  a.useImperativeHandle(t, function () {
    return {
      dom: CRef.current,
    };
  });
  const k = (e, t, n, r) => {
    const l = !x && t.length % d;
    let u = t;
    if (l) {
      const c = Array(d - l).fill({
        img: null,
        title: "",
      });
      u = t.concat(c);
    }
    return a.createElement(
      "div",
      {
        className: e + "-rows",
        key: r,
      },
      u.map((t, l) => {
        const t_img = t.img;
        const t_title = t.title;
        const t_content = t.content;
        const t_className = t.className;
        const t_onClick = t.onClick;
        const t_itemStyle = t.itemStyle;
        const t_renderGrid = t.renderGrid;
        if (t_renderGrid) {
          return t_renderGrid(t, l, r);
        }
        const marginBottom =
          r + 1 === n
            ? 0
            : typeof h === "number"
              ? h
              : (h == null ? undefined : h.y) || 0;
        const marginRight =
          l + 1 === u.length
            ? 0
            : typeof h === "number"
              ? h
              : (h == null ? undefined : h.x) || 0;
        return a.createElement(
          "div",
          {
            key: l,
            style: _r(
              {
                marginBottom,
                marginRight,
              },
              t_itemStyle,
            ),
            onClick: function () {
              if (t_onClick) {
                t_onClick(t);
              }
            },
            className: o.xF(
              e + "-rows-item",
              {
                horizontal: b === "horizontal",
                border: v && h === 0,
              },
              t_className,
            ),
          },
          typeof t_img === "string"
            ? a.createElement("img", {
                src: t_img,
                className:
                  e + "-rows-item-icon " + (g === "circle" ? "circle" : ""),
              })
            : t_img,
          t_title || t_content
            ? a.createElement(
                "div",
                {
                  className: e + "-rows-item-text",
                },
                t_title
                  ? a.createElement(
                      "span",
                      {
                        className: e + "-rows-item-title",
                      },
                      t_title,
                    )
                  : null,
                t_content
                  ? a.createElement(
                      "span",
                      {
                        className: e + "-rows-item-content",
                      },
                      t_content,
                    )
                  : null,
              )
            : null,
          (l + 1) % d != 0
            ? a.createElement("i", {
                className: "vertical-border",
              })
            : null,
          (r + 1) % n != 0
            ? a.createElement("i", {
                className: "horizontal-border",
              })
            : null,
        );
      }),
    );
  };
  const w = (e, t) => {
    const n = t.length || 1;
    return a.createElement(
      a.Fragment,
      null,
      t.map((t, r) => k(e, t, n, r)),
    );
  };
  return a.createElement(Wb, null, function (e) {
    const t = e.prefixCls + "-grid";
    const n = (e_data == null ? undefined : e_data.length) || 0;
    if (n === 0) {
      return null;
    }
    for (var i = 0, l = []; i < n;) {
      l.push(e_data.slice(i, x ? (i += n) : (i += d)));
    }
    return a.createElement(
      "div",
      {
        className: o.xF(t, r, x ? "sliding" : ""),
        style: e_style,
        ref: CRef,
      },
      w(t, l),
    );
  });
});
