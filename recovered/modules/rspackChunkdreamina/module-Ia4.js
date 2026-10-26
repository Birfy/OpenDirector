import r from "oa";
import n from "bk";
import i from "qa";
import s from "z8";
import o from "bT";
import _l from "xb";
import { q } from "./module-LUO.js";
import "Vx";
import u from "Ix";
import m from "Qey";
import p from "yw";
import h from "pr";
import { A } from "./module-nh.js";
import "eO";
import v from "lA";
const b = o.memo(function (e) {
  const {
    label,
    value,
    className,
    disabled,
    error,
    errorMessageId,
    style,
    onChange,
    onBlur,
  } = e;
  const prefix = o.useMemo(
    () =>
      s.jsx("span", {
        className: "label-aOY4qL",
        children: label,
      }),
    [label],
  );
  return s.jsx("div", {
    className: _l("container-QR5zDI", className),
    style,
    children: s.jsx(v.A, {
      "aria-label":
        label === "W"
          ? m.Ay.t("octo_director_stage_intrinsic_geometry_width", {}, "宽度")
          : label === "H"
            ? m.Ay.t(
                "octo_director_stage_intrinsic_geometry_height",
                {},
                "高度",
              )
            : label,
      className: "input-F0aadB",
      value,
      disabled,
      error,
      "aria-invalid": error || undefined,
      "aria-describedby": error ? errorMessageId : undefined,
      precision: 0,
      hideControl: true,
      onChange,
      onBlur,
      prefix,
    }),
  });
});
const f = o.memo(function (e) {
  const {
    width,
    height,
    maintainAspectRatio,
    disabled,
    onWidthChange,
    onHeightChange,
    onAspectRatioMaintainChange,
    onBlur,
    validationError,
  } = e;
  const _ = o.useId();
  const onClick = o.useCallback(() => {
    if (!(disabled || onAspectRatioMaintainChange == null)) {
      onAspectRatioMaintainChange(!maintainAspectRatio);
    }
  }, [onAspectRatioMaintainChange, maintainAspectRatio, disabled]);
  const content = o.useMemo(() => {
    if (maintainAspectRatio) {
      return m.Ay.t("web_new_canvas2_ratio_unbind", {}, "解绑比例");
    }
    return m.Ay.t("web_new_canvas2_ratio_fixed", {}, "约束比例");
  }, [maintainAspectRatio]);
  const triggerProps = o.useMemo(
    () => ({
      focusDelay: 120,
    }),
    [],
  );
  return s.jsxs("div", {
    className: "container-ButrC3",
    children: [
      s.jsxs("div", {
        className: "input-group-o_oor7",
        children: [
          s.jsx(b, {
            label: "W",
            value: width,
            disabled,
            error:
              (validationError == null ? undefined : validationError.axis) ===
              "width",
            errorMessageId: _,
            onChange: onWidthChange,
            onBlur,
          }),
          s.jsx(u.A, {
            content,
            disabled,
            triggerProps,
            children: s.jsx("div", {
              className: _l("lock-button-bSp2D6", {
                "disabled-w2dBzM": disabled,
              }),
              role: "button",
              tabIndex: disabled ? -1 : 0,
              "aria-disabled": disabled,
              "aria-label": m.Ay.t(
                "web_canva_frame_lock_ratio",
                {},
                "约束比例",
              ),
              "aria-pressed": maintainAspectRatio,
              onKeyDown: h.q,
              onClick,
              children: maintainAspectRatio
                ? s.jsx(p.AQQ, {
                    size: 20,
                  })
                : s.jsx(p.Nv9, {
                    size: 20,
                  }),
            }),
          }),
          s.jsx(b, {
            label: "H",
            value: height,
            disabled,
            error:
              (validationError == null ? undefined : validationError.axis) ===
              "height",
            errorMessageId: _,
            onChange: onHeightChange,
            onBlur,
          }),
          s.jsx("div", {
            className: "pixel-ZvKSbN",
            children: "PX",
          }),
        ],
      }),
      s.jsx(A, {
        id: _,
        message: validationError == null ? undefined : validationError.message,
      }),
    ],
  });
});
export var F = o.memo(function (e) {
  const {
    width,
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    aspectRatio,
    maintainAspectRatio,
    validate,
    disabled,
    className,
    onChange,
    onAspectRatioMaintainChange,
  } = e;
  const y = i._(e, [
    "width",
    "height",
    "minWidth",
    "maxWidth",
    "minHeight",
    "maxHeight",
    "aspectRatio",
    "maintainAspectRatio",
    "validate",
    "disabled",
    "className",
    "onChange",
    "onAspectRatioMaintainChange",
  ]);
  const [k, setK] = o.useState(null);
  const [N, setN] = o.useState(width);
  const [C, setC] = o.useState(height);
  const [validationError, setValidationError] = o.useState();
  const W = o.useMemo(() => {
    if (!aspectRatio) {
      return 1;
    }
    var [e, t] = aspectRatio.split(":").map(Number);
    if (e && t) {
      return e / t;
    }
    return 1;
  }, [aspectRatio]);
  o.useEffect(() => {
    setN(width);
  }, [width]);
  o.useEffect(() => {
    setC(height);
  }, [height]);
  const onWidthChange = o.useCallback(
    (e) => {
      if (e !== undefined) {
        if (validate && C !== undefined) {
          var t = validate(e, C);
          setValidationError(
            t
              ? {
                  axis: "width",
                  message: t,
                }
              : undefined,
          );
          setK("width");
          setN(e);
          return;
        }
        var a = q(e, minWidth, maxWidth);
        setK("width");
        setN(a);
      }
    },
    [C, maxWidth, minWidth, validate],
  );
  const onHeightChange = o.useCallback(
    (e) => {
      if (e !== undefined) {
        if (validate && N !== undefined) {
          var t = validate(N, e);
          setValidationError(
            t
              ? {
                  axis: "height",
                  message: t,
                }
              : undefined,
          );
          setK("height");
          setC(e);
          return;
        }
        var a = q(e, minHeight, maxHeight);
        setK("height");
        setC(a);
      }
    },
    [N, maxHeight, minHeight, validate],
  );
  const onBlur = o.useCallback(() => {
    setValidationError(undefined);
    if (k && N !== undefined && C !== undefined) {
      var e;
      var r;
      var n;
      var i = q(N, minWidth, maxWidth);
      var s = q(C, minHeight, maxHeight);
      if (!maintainAspectRatio) {
        if (validate == null ? undefined : validate(i, s)) {
          setN(width);
          setC(height);
          setK(null);
          return;
        }
        setN(i);
        setC(s);
        onChange(i, s);
        return;
      }
      var o = k === "width";
      var c = o ? i : s;
      var h = o ? minHeight : minWidth;
      var b = o ? maxHeight : maxWidth;
      r = (e = k === "width") ? c : c * W;
      n = e ? c / W : c;
      if (e && n > b) {
        r = (n = b) * W;
      }
      if (e && n < h) {
        r = (n = h) * W;
      }
      if (!e && r > b) {
        n = (r = b) / W;
      }
      if (!e && r < h) {
        n = (r = h) / W;
      }
      var { width: width_1, height: height_1 } = {
        width: Math.floor(r),
        height: Math.floor(n),
      };
      var w = q(width_1, minWidth, maxWidth);
      var y = q(height_1, minHeight, maxHeight);
      if (validate == null ? undefined : validate(w, y)) {
        setN(width);
        setC(height);
        setK(null);
        return;
      }
      setN(w);
      setC(y);
      onChange(w, y);
    }
  }, [
    N,
    C,
    k,
    maintainAspectRatio,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    W,
    onChange,
    validate,
    width,
    height,
  ]);
  return s.jsx(
    "div",
    n._(r._({}, y), {
      className: _l("container-DgQBrg", className),
      children: s.jsx(f, {
        width: N,
        height: C,
        maintainAspectRatio,
        disabled,
        validationError,
        onWidthChange,
        onHeightChange,
        onAspectRatioMaintainChange,
        onBlur,
      }),
    }),
  );
});
