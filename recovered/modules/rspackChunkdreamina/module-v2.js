import a from "yD";
import c from "QWK";
Object.defineProperty(exports, "hN", {
  enumerable: true,
  get: () =>
    function e(t, n, i, o, c, f, g) {
      if (t.length === 1 && a.eW(t[0])) {
        return [
          {
            type: TT.literal,
            value: t[0].value,
          },
        ];
      }
      const d = [];
      for (let m = 0; m < t.length; m++) {
        const y = t[m];
        if (a.eW(y)) {
          d.push({
            type: TT.literal,
            value: y.value,
          });
          continue;
        }
        if (a.jA(y)) {
          if (typeof f === "number") {
            d.push({
              type: TT.literal,
              value: i.getNumberFormat(n).format(f),
            });
          }
          continue;
        }
        const v = y.value;
        if (!(c && v in c)) {
          throw new h(v, g);
        }
        let _ = c[v];
        if (a.Im(y)) {
          if (!(_ && typeof _ !== "string" && typeof _ !== "number")) {
            _ = typeof _ === "string" || typeof _ === "number" ? String(_) : "";
          }
          d.push({
            type: typeof _ === "string" ? TT.literal : TT.object,
            value: _,
          });
          continue;
        }
        if (a.tv(y)) {
          var b =
            typeof y.style === "string"
              ? o.date[y.style]
              : a.Tu(y.style)
                ? y.style.parsedOptions
                : undefined;
          d.push({
            type: TT.literal,
            value: i.getDateTimeFormat(n, b).format(_),
          });
          continue;
        }
        if (a.Qh(y)) {
          var b =
            typeof y.style === "string"
              ? o.time[y.style]
              : a.Tu(y.style)
                ? y.style.parsedOptions
                : o.time.medium;
          d.push({
            type: TT.literal,
            value: i.getDateTimeFormat(n, b).format(_),
          });
          continue;
        }
        if (a.oF(y)) {
          var b =
            typeof y.style === "string"
              ? o.number[y.style]
              : a.N1(y.style)
                ? y.style.parsedOptions
                : undefined;
          if (b && b.scale) {
            _ *= b.scale || 1;
          }
          d.push({
            type: TT.literal,
            value: i.getNumberFormat(n, b).format(_),
          });
          continue;
        }
        if (a.xm(y)) {
          const S = y.children;
          const w = y.value;
          const E = c[w];
          if (typeof E !== "function") {
            throw new p(w, "function", g);
          }
          let k = E(e(S, n, i, o, c, f).map((e) => e.value));
          if (!Array.isArray(k)) {
            k = [k];
          }
          d.push.apply(
            d,
            k.map((e) => ({
              type: typeof e === "string" ? TT.literal : TT.object,
              value: e,
            })),
          );
        }
        if (a.Jp(y)) {
          var A = y.options[_] || y.options.other;
          if (!A) {
            throw new u(y.value, _, Object.keys(y.options), g);
          }
          d.push.apply(d, e(A.value, n, i, o, c));
          continue;
        }
        if (a.N6(y)) {
          var A = y.options["=".concat(_)];
          if (!A) {
            if (!Intl.PluralRules) {
              throw new l(
                'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                r.MISSING_INTL_API,
                g,
              );
            }
            const O = i
              .getPluralRules(n, {
                type: y.pluralType,
              })
              .select(_ - (y.offset || 0));
            A = y.options[O] || y.options.other;
          }
          if (!A) {
            throw new u(y.value, _, Object.keys(y.options), g);
          }
          d.push.apply(d, e(A.value, n, i, o, c, _ - (y.offset || 0)));
          continue;
        }
      }
      if (d.length < 2) {
        return d;
      }
      return d.reduce((acc, item) => {
        const n = acc[acc.length - 1];
        if (n && n.type === TT.literal && item.type === TT.literal) {
          n.value += item.value;
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    },
});
let i;
let o;
var r;
export var TT;
i = r || (r = {});
i.MISSING_VALUE = "MISSING_VALUE";
i.INVALID_VALUE = "INVALID_VALUE";
i.MISSING_INTL_API = "MISSING_INTL_API";
var l = ((e) => {
  function t(t, n, i) {
    const o = e.call(this, t) || this;
    o.code = n;
    o.originalMessage = i;
    return o;
  }
  c.C6(t, e);
  t.prototype.toString = function () {
    return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
  };
  return t;
})(Error);
var u = ((e) => {
  function t(t, n, i, o) {
    return (
      e.call(
        this,
        'Invalid values for "'
          .concat(t, '": "')
          .concat(n, '". Options are "')
          .concat(Object.keys(i).join('", "'), '"'),
        r.INVALID_VALUE,
        o,
      ) || this
    );
  }
  c.C6(t, e);
  return t;
})(l);
var p = ((e) => {
  function t(t, n, i) {
    return (
      e.call(
        this,
        'Value for "'.concat(t, '" must be of type ').concat(n),
        r.INVALID_VALUE,
        i,
      ) || this
    );
  }
  c.C6(t, e);
  return t;
})(l);
var h = ((e) => {
  function t(t, n) {
    return (
      e.call(
        this,
        'The intl string context variable "'
          .concat(t, '" was not provided to the string "')
          .concat(n, '"'),
        r.MISSING_VALUE,
        n,
      ) || this
    );
  }
  c.C6(t, e);
  return t;
})(l);
o = TT || (TT = {});
o[(o.literal = 0)] = "literal";
o[(o.object = 1)] = "object";
