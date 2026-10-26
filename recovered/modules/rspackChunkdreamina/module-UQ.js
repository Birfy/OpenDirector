import i from "bT";
import { S } from "./module-M9.js";
import { TT } from "./module-v2.js";
const s = function (e, t, n) {
  if (n || arguments.length == 2) {
    var i;
    for (let o = 0, r = t.length; o < r; o++) {
      if (!(!i && o in t)) {
        if (!i) {
          i = Array.prototype.slice.call(t, 0, o);
        }
        i[o] = t[o];
      }
    }
  }
  return e.concat(i || Array.prototype.slice.call(t));
};
i.createContext({
  i18n: undefined,
  locale: undefined,
});
export var w9 = {
  type: "intl3rdParty",
  init: function (e) {
    let t;
    t = e.t.bind(e);
    e.t = function (n, a, c) {
      let l;
      if (
        !Object.entries(a || {})
          .map((e) => {
            const t = e[0];
            const n = e[1];
            if (i.isValidElement(n)) {
              return t;
            }
            return null;
          })
          .filter((e) => !!e).length
      ) {
        return t(n, a, c);
      }
      try {
        const u = e.i18nInstance.instance.options || {};
        let p = (a || {}).ns || u.ns || "translation";
        p = Array.isArray(p) ? p[0] : "translation";
        const h = (t) => e.i18nInstance.instance.getResource(t, p, n);
        const f = u.fallbackLng;
        let g =
          h(e.language) ||
          (() => {
            let t;
            switch (
              !f ? "null" : Array.isArray(f) && f.length ? "array" : typeof f
            ) {
              case "array":
                f.find((e) => (t = h(e)));
                break;
              case "function":
                const i = f(e.language);
                if (!Array.isArray(i)) {
                  console.error("fallbackLng must be return array");
                  return c || n;
                }
                i.find((e) => (t = h(e)));
            }
            if (t === undefined) {
              t = c || n;
            }
            return t;
          })();
        if (Array.isArray(g)) {
          g = g[0];
        }
        const d = new S(
          g,
          e.language,
          {},
          {
            ignoreTag: !!((l = u.formatOptions) == null
              ? undefined
              : l.ignoreTag),
          },
        );
        try {
          const m = d.formatToParts(a);
          if (m.length === 1) {
            return m[0].value;
          }
          const y = m.reduce((acc, item) => {
            if (
              acc.length &&
              item.type === TT.literal &&
              typeof acc[acc.length - 1] === "string"
            ) {
              acc[acc.length - 1] += item.value;
            } else {
              acc.push(item.value);
            }
            return acc;
          }, []);
          return i.createElement.apply(
            undefined,
            s([i.Fragment, {}], y, false),
          );
        } catch (error) {
          console.warn(
            "[intl-react-plugin] Key "
              .concat(
                JSON.stringify(n),
                " has missing some interpolation, use fallback target text ",
              )
              .concat(JSON.stringify(g), " fallback. More: ")
              .concat(error),
          );
          const v = t(n, a, c);
          return i.createElement(i.Fragment, {}, v);
        }
      } catch (error) {
        console.error("[intl-react-plugin] Some error occurred", error);
        return t(n, a, c);
      }
    };
  },
};
