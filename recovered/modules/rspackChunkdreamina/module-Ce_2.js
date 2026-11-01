import i from "oa";
import l from "bk";
import s from "qa";
import a from "z8";
import c from "bT";
import u from "Ed8";
import { A as A_1 } from "./module-el_4.js";
import { A as A_2 } from "./module-zYa.js";
import { A as A_3 } from "./module-qiY.js";
import h from "fyk";
import "U4";
import { V } from "./module-Mt_2.js";
import { A as A_4 } from "./module-I7V.js";
import { Et } from "./module-NnE_2.js";
import { A as A_5 } from "./module-d1.js";
import { Do, xy, yd } from "./module-Kg.js";
import { QO } from "./module-tMn.js";
import { A as A_6 } from "./module-AK3.js";
import { A as A_7 } from "./module-oO_3.js";
import { A } from "./module-MA.js";
let r;
let o;
const w = c.forwardRef(function (e, ref) {
  const prefixCls = c.useContext(V).prefixCls;
  const r = prefixCls === undefined ? "lv" : prefixCls;
  const e_spin = e.spin;
  const e_className = e.className;
  const l = {
    "aria-hidden": true,
    focusable: false,
    ref,
    ...e,
    className: `${e_className ? e_className + " " : ""}`
      .concat(r, "-icon ")
      .concat(r, "-icon-minus"),
  };
  if (e_spin) {
    l.className = "".concat(l.className, " ").concat(r, "-icon-loading");
  }
  delete l.spin;
  delete l.isIcon;
  return c.createElement(
    "svg",
    h(
      {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "4",
        viewBox: "0 0 48 48",
      },
      l,
    ),
    c.createElement("path", {
      d: "M5 24h38",
    }),
  );
});
w.defaultProps = {
  isIcon: true,
};
w.displayName = "IconMinus";
r = o || (o = {});
r.input = "input";
r.arrow = "arrow";
function E(e, t) {
  let n = 10 ** t;
  return (Math.round(e * n) / n).toFixed(t);
}
u.Ay.enableBoundaryChecking(false);
let _ = {
  max: Infinity,
  min: -Infinity,
  step: 1,
  mode: "embed",
  parser: (e) => e.replace(/[^\w\.-]+/g, ""),
};
let M = c.forwardRef(function (e, t) {
  let n;
  let r;
  let { getPrefixCls, size, componentConfig } = c.useContext(QO);
  let g = A_7(
    e,
    _,
    componentConfig == null ? undefined : componentConfig.InputNumber,
  );
  let {
    className,
    style,
    defaultValue,
    disabled,
    disableTips,
    error,
    readOnly,
    placeholder,
    hideControl,
    suffix,
    prefix,
    unit,
    icons,
    mode,
    size: size_1,
    step,
    precision,
    min,
    max,
    parseString = true,
    parser,
    formatter,
    onBlur,
    onFocus,
    onChange,
    onKeyDown,
  } = g;
  let et = s._(g, [
    "className",
    "style",
    "defaultValue",
    "disabled",
    "disableTips",
    "error",
    "readOnly",
    "placeholder",
    "hideControl",
    "suffix",
    "prefix",
    "unit",
    "icons",
    "mode",
    "size",
    "step",
    "precision",
    "min",
    "max",
    "parseString",
    "parser",
    "formatter",
    "onBlur",
    "onFocus",
    "onChange",
    "onKeyDown",
  ]);
  let en = getPrefixCls("input-number");
  let size_2 = size_1 || size;
  let eo = (() => {
    if (Et(precision)) {
      let e = `${step}`.split(".")[1];
      return Math.max((e && e.length) || 0, precision);
    }
    return null;
  })();
  let [ei, setEi] = c.useState("defaultValue" in g ? defaultValue : undefined);
  let es =
    typeof (r = "value" in g ? g.value : ei) === "string" &&
    parseString &&
    r !== ""
      ? Number(r)
      : r;
  let [ea, setEa] = c.useState("");
  let [eu, setEu] = c.useState(false);
  let [ep, setEp] = c.useState(false);
  let eh = es === "" || es == null;
  let emRef = c.useRef(null);
  let evRef = c.useRef(null);
  let egRef = c.useRef(false);
  c.useImperativeHandle(t, () => evRef.current, []);
  let ey = (e, t) => {
    setEi(e);
    let n = Et(Number(e)) ? Number(e) : undefined;
    if (n !== es && onChange) {
      onChange(n, t);
    }
  };
  let eb = () => {
    if (emRef.current) {
      clearTimeout(emRef.current);
    }
    emRef.current = null;
  };
  let ex = c.useCallback(
    (e) => {
      let t = Number(e);
      if (e || e === 0) {
        if (!Et(t)) {
          t = e === "-" ? e : "";
        }
      } else {
        t = undefined;
      }
      if (Number(t) < min) {
        t = min;
      }
      if (Number(t) > max) {
        t = max;
      }
      if (Et(t)) {
        if (Et(eo)) {
          return Number(E(t, eo));
        }
        return t;
      }
    },
    [min, max, eo],
  );
  c.useEffect(() => () => eb(), []);
  c.useEffect(() => {
    egRef.current = false;
  }, [g.value]);
  c.useEffect(() => {
    let e = (Et(min) && Number(es) < min) || (Et(max) && Number(es) > max);
    if (e && egRef.current) {
      ey(ex(es));
    }
    setEu(e);
  }, [min, max, es, ex]);
  let ew = (e, t, n = false) => {
    e.persist();
    e.preventDefault();
    setEp(false);
    if (disabled || readOnly) {
      return;
    }
    let r = -Infinity === min ? 0 : min;
    if (!eh) {
      r = u.Ay[t](es, step);
    }
    ey(ex(r), o.arrow);
    if (evRef.current) {
      evRef.current.focus();
    }
    if (n) {
      let t = emRef.current === null;
      emRef.current = setTimeout(
        () => e.target.dispatchEvent(e.nativeEvent),
        t ? 1000 : 200,
      );
    }
  };
  let ej = c.useMemo(() => {
    let e;
    e = ep
      ? parser
        ? `${parser(ea)}`
        : ea
      : Et(es) && Et(eo)
        ? E(es, eo)
        : es == null
          ? ""
          : ((e) => {
              let t = e.toString();
              if (Number.isNaN(Number(e)) || !t.includes("e")) {
                return t;
              }
              try {
                let t = Number(e) < 0;
                let n = Math.abs(Number(e));
                let r = u.Ay.digitLength(n);
                let o = u.Ay.float2Fixed(n)
                  .toString()
                  .replace(/e\+(\d+)/i, (e, t) =>
                    Array(Number(t)).fill(0).join(""),
                  );
                return `${t ? "-" : ""}${
                  r === 0
                    ? o
                    : o.replace(RegExp(`\\d{1,${r}}$`), (e) => {
                        let t = `${Array(r).fill(0).join("")}${e}`.slice(-r);
                        return `${o.length <= r ? 0 : ""}.${t}`;
                      })
                }`;
              } catch (e) {}
              return t;
            })(es);
    if (formatter) {
      return formatter(e, {
        userTyping: ep,
        input: ea,
      });
    }
    return e;
  }, [es, ea, ep, eo, parser, formatter]);
  c.useEffect(() => {
    if (evRef.current && unit) {
      evRef.current.dom.style.minWidth = "0.5ch";
    }
  }, [unit]);
  c.useEffect(() => {
    if (!evRef.current || !unit) {
      return;
    }
    let dom = evRef.current.dom;
    let t = ((e) => {
      let t = String(e);
      let t_length = t.length;
      for (let e of t) {
        if (e === "." || e === "1") {
          t_length -= 0.5;
        }
      }
      return t_length;
    })(ej);
    dom.style.width = `${t}ch`;
  }, [unit, ej]);
  let eO = (({ inputElement, inputValue }) => {
    let nRef = c.useRef(null);
    c.useLayoutEffect(() => {
      try {
        let r = nRef.current;
        if (inputElement && inputValue && Et(r)) {
          let n = Math.max(0, inputValue.length - r);
          inputElement.setSelectionRange(n, n);
        }
      } catch (err) {
        console.warn("Failed to reset input selection range position", err);
      }
    }, [inputValue]);
    return (e) => {
      let { selectionEnd, value } = e.target;
      if (Et(selectionEnd)) {
        nRef.current = value.length - selectionEnd;
      }
    };
  })({
    inputElement: (n = evRef.current) == null ? undefined : n.dom,
    inputValue: ej,
  });
  let eC = {
    onChange: (e, t) => {
      setEp(true);
      e = e.trim().replace(/\u3002/g, ".");
      let n = parser ? parser(e) : e;
      if (Et(Number(n)) || n === "-" || !n || n === ".") {
        setEa(e);
        ey(ex(n));
        eO(t);
      }
    },
    onKeyDown: (e) => {
      e.stopPropagation();
      let { key } = e;
      if (key === yd.key) {
        ew(e, "minus");
      } else if (key === Do.key) {
        ew(e, "plus");
      } else if (key === xy.key) {
        var n;
        if ((n = evRef.current) != null) {
          n.blur();
        }
      }
      eb();
      if (onKeyDown) {
        onKeyDown(e);
      }
    },
    onFocus: (e) => {
      var t;
      var n;
      egRef.current = true;
      setEa(
        (n = evRef.current) == null || (t = n.dom) == null
          ? undefined
          : t.value,
      );
      if (onFocus) {
        onFocus(e);
      }
    },
    onBlur: (e) => {
      ey(ex(es));
      setEp(false);
      if (onBlur) {
        onBlur(e);
      }
    },
  };
  let eN = !hideControl && mode === "button";
  let eP = !hideControl && !readOnly && mode === "embed";
  let e$ = (e, children) =>
    a.jsx(
      "div",
      l._(
        i._(
          {
            className: A_5(`${en}-step-button`, {
              [`${en}-step-button-disabled`]:
                disabled ||
                (e === "plus"
                  ? Number(es) >= Number(max)
                  : Number(es) <= Number(min)),
            }),
          },
          readOnly
            ? {}
            : {
                onMouseDown: (t) => ew(t, e, true),
                onMouseLeave: eb,
                onMouseUp: eb,
              },
        ),
        {
          children,
        },
      ),
    );
  return a.jsx(
    A_6,
    l._(
      i._(
        {
          _ignorePropsFromGlobal: true,
          role: "spinbutton",
          "aria-valuemax": max,
          "aria-valuemin": min,
          "aria-valuenow": es,
        },
        A(et, ["allowClear"]),
        eC,
      ),
      {
        style,
        className: A_5(
          en,
          `${en}-mode-${mode}`,
          `${en}-size-${size_2}`,
          {
            [`${en}-readonly`]: readOnly,
            [`${en}-illegal-value`]: !eh && eu,
          },
          className,
        ),
        ref: evRef,
        size: size_2,
        error,
        disabled,
        readOnly,
        value: ej,
        placeholder,
        prefix:
          prefix &&
          a.jsx("div", {
            className: `${en}-prefix`,
            children: prefix,
          }),
        suffix: a.jsxs(a.Fragment, {
          children: [
            eP &&
              a.jsxs("div", {
                className: `${en}-step-layer`,
                children: [
                  e$("plus", icons && icons.up ? icons.up : a.jsx(A_1, {})),
                  e$(
                    "minus",
                    icons && icons.down ? icons.down : a.jsx(A_2, {}),
                  ),
                ],
              }),
            unit &&
              a.jsx("div", {
                className: `${en}-unit`,
                children: unit,
              }),
            suffix &&
              a.jsx("div", {
                className: `${en}-suffix`,
                children: suffix,
              }),
            disabled &&
              disableTips &&
              a.jsx(A_4, {
                content: disableTips,
                position: "br",
                children: a.jsx("div", {
                  className: `${en}-disable-tips`,
                }),
              }),
          ],
        }),
        addBefore:
          eN && e$("minus", icons && icons.minus ? icons.minus : a.jsx(w, {})),
        addAfter:
          eN && e$("plus", icons && icons.plus ? icons.plus : a.jsx(A_3, {})),
      },
    ),
  );
});
M.displayName = "InputNumber";
var T = M;
export { T as A };
