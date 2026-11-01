import _r from "fyk";
import _a from "i0l";
import l from "bT";
import u from "wnX";
import c from "ng";
import { Wb } from "./module-rJ.js";
function d(e, t, n = []) {
  return !n.some((n) => e[n] !== t[n]);
}
const f = [
  "currentTs",
  "className",
  "visible",
  "onOk",
  "onChange",
  "onValueChange",
  "mode",
  "typeArr",
  "minTs",
  "maxTs",
  "formatter",
  "valueFilter",
  "columnsProcessor",
  "touchToStop",
  "useUTC",
];
const v = ["year", "month", "date", "hour", "minute", "second"];
const m = function (e) {
  if (e < 10) {
    return "0" + e;
  }
  return String(e);
};
const h = Date.now() - 311040000000;
const p = Date.now() + 311040000000;
const g = Date.now();
const E = l.forwardRef(function (e, t) {
  const e_currentTs = e.currentTs;
  const e_className = e.className;
  const a = e_className === undefined ? "" : e_className;
  const e_visible = e.visible;
  const visible = e_visible !== undefined && e_visible;
  const e_onOk = e.onOk;
  const e_onChange = e.onChange;
  const e_onValueChange = e.onValueChange;
  const e_mode = e.mode;
  const w = e_mode === undefined ? "datetime" : e_mode;
  const e_typeArr = e.typeArr;
  const T = e_typeArr === undefined ? [] : e_typeArr;
  const e_minTs = e.minTs;
  const S = e_minTs === undefined ? h : e_minTs;
  const e_maxTs = e.maxTs;
  const D = e_maxTs === undefined ? p : e_maxTs;
  const e_formatter = e.formatter;
  const A = e_formatter === undefined ? m : e_formatter;
  const e_valueFilter = e.valueFilter;
  const L = e_valueFilter === undefined ? () => true : e_valueFilter;
  const e_columnsProcessor = e.columnsProcessor;
  const e_touchToStop = e.touchToStop;
  const e_useUTC = e.useUTC;
  const P = e_useUTC !== undefined && e_useUTC;
  const W = _a(e, f);
  const H = Math.min(
    D,
    Math.max(S, e_currentTs === undefined ? g : e_currentTs),
  );
  const z = l.useState([[]]);
  const data = z[0];
  const J = z[1];
  const q = l.useState([]);
  const value = q[0];
  const Y = q[1];
  const BRef = l.useRef(en(H));
  const GRef = l.useRef(en(S));
  const URef = l.useRef(en(D));
  const Z = l.useMemo(
    function () {
      if (T && T.length) {
        return T;
      }
      let e = [];
      switch (w) {
        case "date":
          e = v.slice(0, 3);
          break;
        case "time":
          e = v.slice(3);
          break;
        default:
          e = v;
      }
      return e;
    },
    [w, T],
  );
  const QRef = l.useRef(null);
  function K() {
    const dateObj = {};
    v.forEach((t) => {
      dateObj[t] = ((e, t) => {
        const n = ((e, t) => {
          switch (e) {
            case "month":
              return [1, 12];
            case "date":
              if (t.month === 2) {
                if (t.year % 4 == 0) {
                  return [1, 29];
                }
                return [1, 28];
              }
              if ([1, 3, 5, 7, 8, 10, 12].indexOf(t.month) !== -1) {
                return [1, 31];
              }
              return [1, 30];
            case "hour":
              return [0, 23];
            case "minute":
            case "second":
              return [0, 59];
            default:
              return [];
          }
        })(e, t);
        let r = [];
        if (e === "year") {
          r = [GRef.current.year, URef.current.year];
        } else {
          const i = v.slice(0, v.indexOf(e));
          r = n;
          if (d(t, GRef.current, i)) {
            r[0] = GRef.current[e];
          }
          if (d(t, URef.current, i)) {
            r[r.length - 1] = URef.current[e];
          }
        }
        return ((e, t) => {
          const n = t[0];
          const r = n === undefined ? 0 : n;
          const i = t[1];
          for (var a = i === undefined ? 0 : i, o = [], l = r; l <= a; l += 1) {
            if (L(e, l)) {
              const u = A(l, e);
              o.push({
                label: u === undefined ? m(l) : u,
                value: l,
              });
            }
          }
          return o;
        })(e, r);
      })(t, BRef.current);
    });
    let columns = Z.map((t) => dateObj[t]);
    if (e_columnsProcessor) {
      columns = e_columnsProcessor(columns, BRef.current);
    }
    return {
      columns,
      dateObj,
    };
  }
  function $(e) {
    return Z.map((t, n) => {
      let r;
      const i = e[n] || [];
      const a = i.findIndex((e) => e.value === BRef.current[t]);
      if ((r = i[Math.max(a, 0)]) == null) {
        return undefined;
      }
      return r.value;
    });
  }
  function ee() {
    const columns = K().columns;
    const t = $(columns);
    J(function () {
      return columns;
    });
    Y(function () {
      return t;
    });
  }
  function et(e, t) {
    let n;
    let r;
    let i;
    if ((n = e) === undefined) {
      n = {};
    }
    i = (r = new u.ZI(t, P)).getDate();
    if (!isNaN(n.year)) {
      r.setFullYear(n.year);
    }
    if (!isNaN(n.month)) {
      r.setDate(1);
      r.setMonth(n.month - 1);
    }
    r.setDate(isNaN(n.date) ? i : n.date);
    if (!isNaN(n.hour)) {
      r.setHours(n.hour);
    }
    if (!isNaN(n.minute)) {
      r.setMinutes(n.minute);
    }
    if (!isNaN(n.second)) {
      r.setSeconds(n.second);
    }
    return r.getTime();
  }
  function en(e) {
    let t;
    return {
      year: (t = new u.ZI(e, P)).getFullYear(),
      month: t.getMonth() + 1,
      date: t.getDate(),
      hour: t.getHours(),
      minute: t.getMinutes(),
      second: t.getSeconds(),
    };
  }
  function onPickerChange(e, t) {
    const n = Z[t];
    const r = {};
    e.forEach((e, t) => {
      r[Z[t]] = e;
    });
    if (~Z.slice(0, Z.length - 1).indexOf(n)) {
      BRef.current = r;
      const i = K();
      const a = i.columns;
      const o = i.dateObj;
      Z.forEach((e) => {
        if (o[e].findIndex((t) => t.value === r[e]) < 0) {
          r[e] = o[e][o[e].length - 1].value;
        }
      });
      const l = $(a);
      J(a);
      Y(l);
    }
    if (e_onValueChange) {
      e_onValueChange(et(r, H), r, t);
    }
  }
  function onOk(e) {
    const t = {};
    e.forEach((e, n) => {
      t[Z[n]] = e;
    });
    const n = et(t, H);
    if (e_onOk) {
      e_onOk(n, t);
    }
    if (e_onChange) {
      e_onChange(n, t);
    }
  }
  l.useImperativeHandle(t, function () {
    return {
      dom: QRef.current ? QRef.current.dom : null,
    };
  });
  l.useEffect(
    function () {
      GRef.current = en(S);
      BRef.current = en(H);
      URef.current = en(D);
      ee();
    },
    [H, S, D, P],
  );
  l.useEffect(
    function () {
      if (visible) {
        BRef.current = en(H);
        ee();
      }
    },
    [visible],
  );
  return l.createElement(Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return l.createElement(
      c.Ay,
      _r({}, W, {
        ref: QRef,
        visible,
        className: u.xF(a, e_prefixCls + "-date-picker"),
        cascade: false,
        data,
        value,
        onPickerChange,
        onOk,
        touchToStop: e_touchToStop,
      }),
    );
  });
});
u.DU(E, "DatePicker");
