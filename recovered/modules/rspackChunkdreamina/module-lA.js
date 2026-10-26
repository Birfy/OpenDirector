import r from "oa";
import o from "bk";
import i from "qa";
import l from "z8";
import s from "bT";
import a from "Ed8";
import { A as A_1 } from "./module-GZU_2.js";
import { A as A_2 } from "./module-to_4.js";
import { A as A_3 } from "./module-Plb.js";
import { A as A_4 } from "./module-tTg.js";
import { A as A_5 } from "./module-Ix_2.js";
import { Et } from "./module-V9.js";
import { A as A_6 } from "./module-Ww_2.js";
import { Do, xy, yd } from "./module-K6G.js";
import { QO } from "./module-mY_2.js";
import { A as A_7 } from "./module-mb_2.js";
import { D as D_1 } from "./module-kkV.js";
import { A as A_8 } from "./module-k6B.js";
import { A as A_9 } from "./module-Sc_2.js";
function j(e, t) {
  let n = 10 ** t;
  return (Math.round(e * n) / n).toFixed(t);
}
a.Ay.enableBoundaryChecking(false);
let O = {
  max: Infinity,
  min: -Infinity,
  step: 1,
  mode: "embed",
  parser: (e) => e.replace(/[^\w\.-]+/g, ""),
};
export let A = s.forwardRef(function (e, t) {
  let n;
  let C;
  let { getPrefixCls, size, componentConfig } = s.useContext(QO);
  let k = A_8(
    e,
    O,
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
  } = k;
  let et = i._(k, [
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
  let [ei, setEi] = s.useState("defaultValue" in k ? defaultValue : undefined);
  let es =
    typeof (C = "value" in k ? k.value : ei) === "string" &&
    parseString &&
    C !== ""
      ? Number(C)
      : C;
  let [ea, setEa] = s.useState("");
  let [eu, setEu] = s.useState(false);
  let [ep, setEp] = s.useState(false);
  let eh = es === "" || es == null;
  let emRef = s.useRef(null);
  let evRef = s.useRef(null);
  let egRef = s.useRef(false);
  s.useImperativeHandle(t, () => evRef.current, []);
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
  let ex = s.useCallback(
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
          return Number(j(t, eo));
        }
        return t;
      }
    },
    [min, max, eo],
  );
  s.useEffect(() => () => eb(), []);
  s.useEffect(() => {
    egRef.current = false;
  }, [k.value]);
  s.useEffect(() => {
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
      r = a.Ay[t](es, step);
    }
    ey(ex(r), D_1.arrow);
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
  let ej = s.useMemo(() => {
    let e;
    e = ep
      ? parser
        ? `${parser(ea)}`
        : ea
      : Et(es) && Et(eo)
        ? j(es, eo)
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
                let r = a.Ay.digitLength(n);
                let o = a.Ay.float2Fixed(n)
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
  s.useEffect(() => {
    if (evRef.current && unit) {
      evRef.current.dom.style.minWidth = "0.5ch";
    }
  }, [unit]);
  s.useEffect(() => {
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
    let nRef = s.useRef(null);
    s.useLayoutEffect(() => {
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
    l.jsx(
      "div",
      o._(
        r._(
          {
            className: A_6(`${en}-step-button`, {
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
  return l.jsx(
    A_7,
    o._(
      r._(
        {
          _ignorePropsFromGlobal: true,
          role: "spinbutton",
          "aria-valuemax": max,
          "aria-valuemin": min,
          "aria-valuenow": es,
        },
        A_9(et, ["allowClear"]),
        eC,
      ),
      {
        style,
        className: A_6(
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
          l.jsx("div", {
            className: `${en}-prefix`,
            children: prefix,
          }),
        suffix: l.jsxs(l.Fragment, {
          children: [
            eP &&
              l.jsxs("div", {
                className: `${en}-step-layer`,
                children: [
                  e$("plus", icons && icons.up ? icons.up : l.jsx(A_1, {})),
                  e$(
                    "minus",
                    icons && icons.down ? icons.down : l.jsx(A_2, {}),
                  ),
                ],
              }),
            unit &&
              l.jsx("div", {
                className: `${en}-unit`,
                children: unit,
              }),
            suffix &&
              l.jsx("div", {
                className: `${en}-suffix`,
                children: suffix,
              }),
            disabled &&
              disableTips &&
              l.jsx(A_5, {
                content: disableTips,
                position: "br",
                children: l.jsx("div", {
                  className: `${en}-disable-tips`,
                }),
              }),
          ],
        }),
        addBefore:
          eN &&
          e$("minus", icons && icons.minus ? icons.minus : l.jsx(A_4, {})),
        addAfter:
          eN && e$("plus", icons && icons.plus ? icons.plus : l.jsx(A_3, {})),
      },
    ),
  );
});
A.displayName = "InputNumber";
