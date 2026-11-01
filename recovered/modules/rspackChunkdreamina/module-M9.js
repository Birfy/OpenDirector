import i from "QWK";
import o from "yD";
import r from "SN";
import * as s from "./module-v2.js";
function a(e) {
  return {
    create: function () {
      return {
        get: function (t) {
          return e[t];
        },
        set: function (t, n) {
          e[t] = n;
        },
      };
    },
  };
}
export var S = (() => {
  function e(t, n = e.defaultLocale, o, c) {
    let l;
    let u;
    const p = this;
    this.formatterCache = {
      number: {},
      dateTime: {},
      pluralRules: {},
    };
    this.format = function (e) {
      const t = p.formatToParts(e);
      if (t.length === 1) {
        return t[0].value;
      }
      const n = t.reduce((acc, item) => {
        if (
          acc.length &&
          item.type === s.TT.literal &&
          typeof acc[acc.length - 1] === "string"
        ) {
          acc[acc.length - 1] += item.value;
        } else {
          acc.push(item.value);
        }
        return acc;
      }, []);
      if (n.length <= 1) {
        return n[0] || "";
      }
      return n;
    };
    this.formatToParts = function (e) {
      return s.hN(
        p.ast,
        p.locales,
        p.formatters,
        p.formats,
        e,
        undefined,
        p.message,
      );
    };
    this.resolvedOptions = function () {
      let e;
      return {
        locale:
          ((e = p.resolvedLocale) == null ? undefined : e.toString()) ||
          Intl.NumberFormat.supportedLocalesOf(p.locales)[0],
      };
    };
    this.getAst = function () {
      return p.ast;
    };
    this.locales = n;
    this.resolvedLocale = e.resolveLocale(n);
    if (typeof t === "string") {
      this.message = t;
      if (!e.__parse) {
        throw TypeError(
          "IntlMessageFormat.__parse must be set to process `message` of type `string`",
        );
      }
      const h = c || {};
      h.formatters;
      const f = i.Tt(h, ["formatters"]);
      this.ast = e.__parse(
        t,
        i.Cl(i.Cl({}, f), {
          locale: this.resolvedLocale,
        }),
      );
    } else {
      this.ast = t;
    }
    if (!Array.isArray(this.ast)) {
      throw TypeError("A message must be provided as a String or AST.");
    }
    this.formats =
      ((l = e.formats),
      o
        ? Object.keys(l).reduce(
            (acc, key) => {
              let n;
              let r;
              acc[key] =
                ((n = l[key]),
                (r = o[key])
                  ? i.Cl(
                      i.Cl(i.Cl({}, n || {}), r || {}),
                      Object.keys(n).reduce((acc_1, key_1) => {
                        acc_1[key_1] = i.Cl(i.Cl({}, n[key_1]), r[key_1] || {});
                        return acc_1;
                      }, {}),
                    )
                  : n);
              return acc;
            },
            i.Cl({}, l),
          )
        : l);
    this.formatters =
      (c && c.formatters) ||
      ((u = this.formatterCache) === undefined &&
        (u = {
          number: {},
          dateTime: {},
          pluralRules: {},
        }),
      {
        getNumberFormat: r.B(
          function () {
            let e;
            const t = [];
            for (let n = 0; n < arguments.length; n++) {
              t[n] = arguments[n];
            }
            return new ((e = Intl.NumberFormat).bind.apply(
              e,
              i.fX([undefined], t, false),
            ))();
          },
          {
            cache: a(u.number),
            strategy: r.W.variadic,
          },
        ),
        getDateTimeFormat: r.B(
          function () {
            let e;
            const t = [];
            for (let n = 0; n < arguments.length; n++) {
              t[n] = arguments[n];
            }
            return new ((e = Intl.DateTimeFormat).bind.apply(
              e,
              i.fX([undefined], t, false),
            ))();
          },
          {
            cache: a(u.dateTime),
            strategy: r.W.variadic,
          },
        ),
        getPluralRules: r.B(
          function () {
            let e;
            const t = [];
            for (let n = 0; n < arguments.length; n++) {
              t[n] = arguments[n];
            }
            return new ((e = Intl.PluralRules).bind.apply(
              e,
              i.fX([undefined], t, false),
            ))();
          },
          {
            cache: a(u.pluralRules),
            strategy: r.W.variadic,
          },
        ),
      });
  }
  Object.defineProperty(e, "defaultLocale", {
    get: function () {
      if (!e.memoizedDefaultLocale) {
        e.memoizedDefaultLocale =
          new Intl.NumberFormat().resolvedOptions().locale;
      }
      return e.memoizedDefaultLocale;
    },
    enumerable: false,
    configurable: true,
  });
  e.memoizedDefaultLocale = null;
  e.resolveLocale = function (e) {
    if (Intl.Locale !== undefined) {
      const t = Intl.NumberFormat.supportedLocalesOf(e);
      return new Intl.Locale(
        t.length > 0 ? t[0] : typeof e === "string" ? e : e[0],
      );
    }
  };
  e.__parse = o.qg;
  e.formats = {
    number: {
      integer: {
        maximumFractionDigits: 0,
      },
      currency: {
        style: "currency",
      },
      percent: {
        style: "percent",
      },
    },
    date: {
      short: {
        month: "numeric",
        day: "numeric",
        year: "2-digit",
      },
      medium: {
        month: "short",
        day: "numeric",
        year: "numeric",
      },
      long: {
        month: "long",
        day: "numeric",
        year: "numeric",
      },
      full: {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      },
    },
    time: {
      short: {
        hour: "numeric",
        minute: "numeric",
      },
      medium: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      },
      long: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
      },
      full: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
      },
    },
  };
  return e;
})();
