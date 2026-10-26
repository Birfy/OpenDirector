import _i from "fyk";
import o from "bT";
import l from "wnX";
import u from "d8L";
import c from "dMH";
import { FI } from "./module-rJ.js";
let r;
const DContext = o.createContext({
  isGroup: false,
  shape: "circle",
  size: "small",
});
const Group = o.forwardRef(function (e, t) {
  const e_style = e.style;
  const e_className = e.className;
  const e_shape = e.shape;
  const e_size = e.size;
  const size = e_size === undefined ? "medium" : e_size;
  const e_zIndexOrder = e.zIndexOrder;
  const v = e_zIndexOrder === undefined ? "desc" : e_zIndexOrder;
  const e_children = e.children;
  const prefixCls = o.useContext(FI).prefixCls;
  const p = o.Children.toArray(e_children);
  const p_length = p.length;
  const ERef = o.useRef(null);
  o.useImperativeHandle(t, function () {
    return {
      dom: ERef.current,
    };
  });
  return o.createElement(
    "div",
    {
      ref: ERef,
      style: e_style === undefined ? {} : e_style,
      className: l.xF(
        e_className === undefined ? "" : e_className,
        prefixCls + "-avatar-group",
        prefixCls + "-avatar-group-size-" + size,
        "group-" + size,
      ),
    },
    o.createElement(
      DContext.Provider,
      {
        value: {
          isGroup: true,
          shape: e_shape === undefined ? "circle" : e_shape,
          size,
        },
      },
      p.map((e, t) => {
        const props = (e || {}).props;
        const style = _i(
          {
            zIndex: v === "asc" ? t + 1 : p_length - t,
          },
          props.style,
        );
        return o.cloneElement(
          e,
          _i({}, props, {
            style,
          }),
        );
      }),
    ),
  );
});
r = u.d;
const v = o.forwardRef(function (e, t) {
  const prefixCls = o.useContext(FI).prefixCls;
  const f = o.useContext(DContext);
  const f_shape = f.shape;
  const f_size = f.size;
  const f_isGroup = f.isGroup;
  const e_shape = e.shape;
  const g =
    e_shape === undefined
      ? e.shape || (f_isGroup ? f_shape : "circle")
      : e_shape;
  const e_size = e.size;
  const b =
    e_size === undefined ? e.size || (f_isGroup ? f_size : "small") : e_size;
  const e_src = e.src;
  const e_decoration = e.decoration;
  const C = e_decoration === undefined ? null : e_decoration;
  const e_textAvatar = e.textAvatar;
  const w = e_textAvatar === undefined ? "" : e_textAvatar;
  const e_avatarStyle = e.avatarStyle;
  const e_autoFixFontSize = e.autoFixFontSize;
  const N = e_autoFixFontSize === undefined || e_autoFixFontSize;
  const e_autoFixFontOffset = e.autoFixFontOffset;
  const R = e_autoFixFontOffset === undefined ? 2 : e_autoFixFontOffset;
  const e_avatarName = e.avatarName;
  const I = e_avatarName === undefined ? "" : e_avatarName;
  const e_avatarDesc = e.avatarDesc;
  const V = e_avatarDesc === undefined ? "" : e_avatarDesc;
  const e_children = e.children;
  const O = e_children === undefined ? null : e_children;
  const e_renderInfo = e.renderInfo;
  const M = e_renderInfo === undefined ? null : e_renderInfo;
  const e_className = e.className;
  const e_style = e.style;
  const e_imageProps = e.imageProps;
  const e_defaultOverLap = e.defaultOverLap;
  const e_onClickDecoration = e.onClickDecoration;
  const e_onClick = e.onClick;
  const qRef = o.useRef(null);
  const jRef = o.useRef(null);
  const YRef = o.useRef(null);
  const B = o.useState(1);
  const G = B[0];
  const U = B[1];
  o.useImperativeHandle(t, function () {
    return {
      dom: qRef.current,
    };
  });
  const Z = !O && e_src !== undefined;
  const Q = !O && !Z && w;
  const K = !O && !Z && !Q;
  o.useEffect(
    function () {
      (() => {
        if (Q && N && jRef && YRef) {
          let e;
          let t;
          const n = (
            ((e = jRef.current) == null
              ? undefined
              : e.getBoundingClientRect()) || {}
          ).width;
          const r = n === undefined ? 0 : n;
          const i = (
            ((t = YRef.current) == null
              ? undefined
              : t.getBoundingClientRect()) || {}
          ).width;
          const a = i === undefined ? 0 : i;
          if (r !== 0 && a !== 0) {
            const o = r - 2 * R;
            if (a > o) {
              U((o / a) * G);
            }
          }
        }
      })();
    },
    [w],
  );
  return o.createElement(
    "div",
    {
      ref: qRef,
      style: e_style === undefined ? {} : e_style,
      className: l.xF(
        prefixCls + "-avatar-wrapper",
        e_className === undefined ? "" : e_className,
        b,
        g,
        prefixCls + "-avatar-wrapper-shape-" + g,
        {
          [prefixCls +
          "-avatar-wrapper-with-info " +
          prefixCls +
          "-avatar-wrapper-with-info-size-" +
          b +
          " with-info"]: !!I,
        },
      ),
      onClick: e_onClick,
    },
    o.createElement(
      "div",
      {
        className: l.xF(
          prefixCls + "-avatar",
          prefixCls + "-avatar-size-" + b,
          b,
          prefixCls + "-avatar-shape-" + g,
          g,
          {
            [prefixCls + "-text-avatar " + prefixCls + "-avatar-mode-text"]: Q,
            [prefixCls + "-image-avatar " + prefixCls + "-avatar-mode-image"]:
              Z,
            [prefixCls + "-avatar-default-overlap default-overlap"]: K,
          },
        ),
        style: e_avatarStyle === undefined ? {} : e_avatarStyle,
        ref: jRef,
      },
      O,
      K &&
        (e_defaultOverLap === undefined
          ? o.createElement(c.A, {
              className:
                prefixCls +
                "-avatar-default " +
                prefixCls +
                "-avatar-default-icon-size-" +
                b,
            })
          : e_defaultOverLap),
      Z &&
        e_src &&
        o.createElement(
          r,
          _i(
            {
              className: prefixCls + "-avatar-img",
              src: e_src,
            },
            e_imageProps === undefined ? {} : e_imageProps,
          ),
        ),
      Q &&
        o.createElement(
          "span",
          {
            className:
              prefixCls +
              "-avatar-text " +
              prefixCls +
              "-avatar-text-size-" +
              b,
            ref: YRef,
            style: {
              transform: "scale(" + G + ")",
            },
          },
          w,
        ),
      C &&
        o.createElement(
          "div",
          {
            className: prefixCls + "-avatar-decoration",
            onClick: e_onClickDecoration,
          },
          C,
        ),
    ),
    M,
    !M &&
      I &&
      o.createElement(
        "div",
        {
          className: l.xF(prefixCls + "-avatar-info"),
        },
        o.createElement(
          "div",
          {
            className:
              prefixCls +
              "-avatar-name " +
              prefixCls +
              "-avatar-name-size-" +
              b,
          },
          I,
        ),
        V &&
          o.createElement(
            "div",
            {
              className:
                prefixCls +
                "-avatar-desc " +
                prefixCls +
                "-avatar-desc-size-" +
                b,
            },
            V,
          ),
      ),
  );
});
l.DU(v, {
  Group,
});
