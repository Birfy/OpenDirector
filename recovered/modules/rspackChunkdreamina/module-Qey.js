import a from "GV";
import c from "jO";
import l from "xJ";
import u from "tvJ";
import p from "Se";
import h from "IR";
import f from "dr";
import g from "sf";
import { S as S_1 } from "./module-M9.js";
export { S_1 as SV };
let i;
let o;
let r;
let s;
const d = {
  type: "logger",
  log: function (e) {
    this.output("log", e);
  },
  warn: function (e) {
    this.output("warn", e);
  },
  error: function (e) {
    this.output("error", e);
  },
  output: function (e, t) {
    if (console && console[e]) {
      console[e].apply(console, t);
    }
  },
};
const m = new ((() => {
  function e(t) {
    const n =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    l.A(this, e);
    this.init(t, n);
  }
  u.A(e, [
    {
      key: "init",
      value: function (e) {
        const t =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};
        this.prefix = t.prefix || "i18next:";
        this.logger = e || d;
        this.options = t;
        this.debug = t.debug;
      },
    },
    {
      key: "setDebug",
      value: function (e) {
        this.debug = e;
      },
    },
    {
      key: "log",
      value: function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
          t[n] = arguments[n];
        }
        return this.forward(t, "log", "", true);
      },
    },
    {
      key: "warn",
      value: function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
          t[n] = arguments[n];
        }
        return this.forward(t, "warn", "", true);
      },
    },
    {
      key: "error",
      value: function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
          t[n] = arguments[n];
        }
        return this.forward(t, "error", "");
      },
    },
    {
      key: "deprecate",
      value: function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
          t[n] = arguments[n];
        }
        return this.forward(t, "warn", "WARNING DEPRECATED: ", true);
      },
    },
    {
      key: "forward",
      value: function (e, t, n, i) {
        if (i && !this.debug) {
          return null;
        }
        if (typeof e[0] === "string") {
          e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0]);
        }
        return this.logger[t](e);
      },
    },
    {
      key: "create",
      value: function (t) {
        return new e(
          this.logger,
          c.A(
            {},
            {
              prefix: "".concat(this.prefix, ":").concat(t, ":"),
            },
            this.options,
          ),
        );
      },
    },
  ]);
  return e;
})())();
const y = (() => {
  function e() {
    l.A(this, e);
    this.observers = {};
  }
  u.A(e, [
    {
      key: "on",
      value: function (e, t) {
        const n = this;
        e.split(" ").forEach((e) => {
          n.observers[e] = n.observers[e] || [];
          n.observers[e].push(t);
        });
        return this;
      },
    },
    {
      key: "off",
      value: function (e, t) {
        if (this.observers[e]) {
          if (!t) {
            return void delete this.observers[e];
          }
          this.observers[e] = this.observers[e].filter((e) => e !== t);
        }
      },
    },
    {
      key: "emit",
      value: function (e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        ) {
          n[i - 1] = arguments[i];
        }
        if (this.observers[e]) {
          [].concat(this.observers[e]).forEach((e) => {
            e.apply(undefined, n);
          });
        }
        if (this.observers["*"]) {
          [].concat(this.observers["*"]).forEach((t) => {
            t.apply(t, [e].concat(n));
          });
        }
      },
    },
  ]);
  return e;
})();
function v() {
  let e;
  let t;
  const n = new Promise((resolve, reject) => {
    e = resolve;
    t = reject;
  });
  n.resolve = e;
  n.reject = t;
  return n;
}
function _(e) {
  if (e == null) {
    return "";
  }
  return "" + e;
}
function b(e, t, n) {
  function i(e) {
    if (e && e.indexOf("###") > -1) {
      return e.replace(/###/g, ".");
    }
    return e;
  }
  function o() {
    return !e || typeof e === "string";
  }
  for (
    var r = typeof t !== "string" ? [].concat(t) : t.split(".");
    r.length > 1;
  ) {
    if (o()) {
      return {};
    }
    const s = i(r.shift());
    if (!e[s] && n) {
      e[s] = new n();
    }
    e = Object.prototype.hasOwnProperty.call(e, s) ? e[s] : {};
  }
  if (o()) {
    return {};
  }
  return {
    obj: e,
    k: i(r.shift()),
  };
}
function S(data, t, n) {
  const i = b(data, t, Object);
  i.obj[i.k] = n;
}
function w(e, t) {
  const n = b(e, t);
  const n_obj = n.obj;
  const o = n.k;
  if (n_obj) {
    return n_obj[o];
  }
}
function E(e, t, n) {
  const i = w(e, n);
  if (i !== undefined) {
    return i;
  }
  return w(t, n);
}
function k(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
const A = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
function O(e) {
  if (typeof e === "string") {
    return e.replace(/[&<>"'\/]/g, (e) => A[e]);
  }
  return e;
}
const R =
  typeof window !== "undefined" &&
  window.navigator &&
  window.navigator.userAgent &&
  window.navigator.userAgent.indexOf("MSIE") > -1;
const x = ((e) => {
  function t(e) {
    let n;
    const i =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : {
            ns: ["translation"],
            defaultNS: "translation",
          };
    l.A(this, t);
    n = p.A(this, h.A(t).call(this));
    if (R) {
      y.call(f.A(n));
    }
    n.data = e || {};
    n.options = i;
    if (n.options.keySeparator === undefined) {
      n.options.keySeparator = ".";
    }
    return n;
  }
  g.A(t, e);
  u.A(t, [
    {
      key: "addNamespaces",
      value: function (e) {
        if (this.options.ns.indexOf(e) < 0) {
          this.options.ns.push(e);
        }
      },
    },
    {
      key: "removeNamespaces",
      value: function (e) {
        const t = this.options.ns.indexOf(e);
        if (t > -1) {
          this.options.ns.splice(t, 1);
        }
      },
    },
    {
      key: "getResource",
      value: function (e, t, n) {
        const i =
          arguments.length > 3 && arguments[3] !== undefined
            ? arguments[3]
            : {};
        const o =
          i.keySeparator !== undefined
            ? i.keySeparator
            : this.options.keySeparator;
        let r = [e, t];
        if (n && typeof n !== "string") {
          r = r.concat(n);
        }
        if (n && typeof n === "string") {
          r = r.concat(o ? n.split(o) : n);
        }
        if (e.indexOf(".") > -1) {
          r = e.split(".");
        }
        return w(this.data, r);
      },
    },
    {
      key: "addResource",
      value: function (e, t, n, i) {
        const o =
          arguments.length > 4 && arguments[4] !== undefined
            ? arguments[4]
            : {
                silent: false,
              };
        let keySeparator = this.options.keySeparator;
        if (keySeparator === undefined) {
          keySeparator = ".";
        }
        let s = [e, t];
        if (n) {
          s = s.concat(keySeparator ? n.split(keySeparator) : n);
        }
        if (e.indexOf(".") > -1) {
          s = e.split(".");
          i = t;
          t = s[1];
        }
        this.addNamespaces(t);
        S(this.data, s, i);
        if (!o.silent) {
          this.emit("added", e, t, n, i);
        }
      },
    },
    {
      key: "addResources",
      value: function (e, t, n) {
        const i =
          arguments.length > 3 && arguments[3] !== undefined
            ? arguments[3]
            : {
                silent: false,
              };
        for (const o in n) {
          if (
            typeof n[o] === "string" ||
            Object.prototype.toString.apply(n[o]) === "[object Array]"
          ) {
            this.addResource(e, t, o, n[o], {
              silent: true,
            });
          }
        }
        if (!i.silent) {
          this.emit("added", e, t, n);
        }
      },
    },
    {
      key: "addResourceBundle",
      value: function (e, t, n, i, o) {
        const r =
          arguments.length > 5 && arguments[5] !== undefined
            ? arguments[5]
            : {
                silent: false,
              };
        let s = [e, t];
        if (e.indexOf(".") > -1) {
          s = e.split(".");
          i = n;
          n = t;
          t = s[1];
        }
        this.addNamespaces(t);
        let a = w(this.data, s) || {};
        if (i) {
          (function e(t, n, i) {
            for (const o in n) {
              if (o !== "__proto__" && o !== "constructor") {
                if (o in t) {
                  if (
                    typeof t[o] === "string" ||
                    t[o] instanceof String ||
                    typeof n[o] === "string" ||
                    n[o] instanceof String
                  ) {
                    if (i) {
                      t[o] = n[o];
                    }
                  } else {
                    e(t[o], n[o], i);
                  }
                } else {
                  t[o] = n[o];
                }
              }
            }
            return t;
          })(a, n, o);
        } else {
          a = c.A({}, a, n);
        }
        S(this.data, s, a);
        if (!r.silent) {
          this.emit("added", e, t, n);
        }
      },
    },
    {
      key: "removeResourceBundle",
      value: function (e, t) {
        if (this.hasResourceBundle(e, t)) {
          delete this.data[e][t];
        }
        this.removeNamespaces(t);
        this.emit("removed", e, t);
      },
    },
    {
      key: "hasResourceBundle",
      value: function (e, t) {
        return this.getResource(e, t) !== undefined;
      },
    },
    {
      key: "getResourceBundle",
      value: function (e, t) {
        if (!t) {
          t = this.options.defaultNS;
        }
        if (this.options.compatibilityAPI === "v1") {
          return c.A({}, {}, this.getResource(e, t));
        }
        return this.getResource(e, t);
      },
    },
    {
      key: "getDataByLanguage",
      value: function (e) {
        return this.data[e];
      },
    },
    {
      key: "toJSON",
      value: function () {
        return this.data;
      },
    },
  ]);
  return t;
})(y);
const z = {
  processors: {},
  addPostProcessor: function (e) {
    this.processors[e.name] = e;
  },
  handle: function (e, t, n, i, o) {
    const r = this;
    e.forEach((e) => {
      if (r.processors[e]) {
        t = r.processors[e].process(t, n, i, o);
      }
    });
    return t;
  },
};
const I = {};
const T = ((e) => {
  function t(e) {
    let n;
    let i;
    let o;
    const r =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    l.A(this, t);
    o = p.A(this, h.A(t).call(this));
    if (R) {
      y.call(f.A(o));
    }
    n = [
      "resourceStore",
      "languageUtils",
      "pluralResolver",
      "interpolator",
      "backendConnector",
      "i18nFormat",
      "utils",
    ];
    i = f.A(o);
    n.forEach((t) => {
      if (e[t]) {
        i[t] = e[t];
      }
    });
    o.options = r;
    if (o.options.keySeparator === undefined) {
      o.options.keySeparator = ".";
    }
    o.logger = m.create("translator");
    return o;
  }
  g.A(t, e);
  u.A(
    t,
    [
      {
        key: "changeLanguage",
        value: function (e) {
          if (e) {
            this.language = e;
          }
        },
      },
      {
        key: "exists",
        value: function (e) {
          const t =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {
                  interpolation: {},
                };
          const n = this.resolve(e, t);
          return n && n.res !== undefined;
        },
      },
      {
        key: "extractFromKey",
        value: function (e, t) {
          let n =
            t.nsSeparator !== undefined
              ? t.nsSeparator
              : this.options.nsSeparator;
          if (n === undefined) {
            n = ":";
          }
          const i =
            t.keySeparator !== undefined
              ? t.keySeparator
              : this.options.keySeparator;
          let namespaces = t.ns || this.options.defaultNS;
          if (n && e.indexOf(n) > -1) {
            const r = e.match(this.interpolator.nestingRegexp);
            if (r && r.length > 0) {
              return {
                key: e,
                namespaces,
              };
            }
            const s = e.split(n);
            if (n !== i || (n === i && this.options.ns.indexOf(s[0]) > -1)) {
              namespaces = s.shift();
            }
            e = s.join(i);
          }
          if (typeof namespaces === "string") {
            namespaces = [namespaces];
          }
          return {
            key: e,
            namespaces,
          };
        },
      },
      {
        key: "translate",
        value: function (e, n, i) {
          const o = this;
          if (
            a.A(n) !== "object" &&
            this.options.overloadTranslationOptionHandler
          ) {
            n = this.options.overloadTranslationOptionHandler(arguments);
          }
          if (!n) {
            n = {};
          }
          if (e == null) {
            return "";
          }
          if (!Array.isArray(e)) {
            e = [String(e)];
          }
          const r =
            n.keySeparator !== undefined
              ? n.keySeparator
              : this.options.keySeparator;
          const s = this.extractFromKey(e[e.length - 1], n);
          const s_key = s.key;
          const s_namespaces = s.namespaces;
          const p = s_namespaces[s_namespaces.length - 1];
          const h = n.lng || this.language;
          const f =
            n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
          if (h && h.toLowerCase() === "cimode") {
            if (f) {
              return p + (n.nsSeparator || this.options.nsSeparator) + s_key;
            }
            return s_key;
          }
          const g = this.resolve(e, n);
          let d = g && g.res;
          const m = (g && g.usedKey) || s_key;
          const y = (g && g.exactUsedKey) || s_key;
          const v = Object.prototype.toString.apply(d);
          const _ =
            n.joinArrays !== undefined ? n.joinArrays : this.options.joinArrays;
          const b = !this.i18nFormat || this.i18nFormat.handleAsObject;
          const S =
            typeof d !== "string" &&
            typeof d !== "boolean" &&
            typeof d !== "number";
          if (
            b &&
            d &&
            S &&
            ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(
              v,
            ) < 0 &&
            (typeof _ !== "string" || v !== "[object Array]")
          ) {
            if (!n.returnObjects && !this.options.returnObjects) {
              this.logger.warn(
                "accessing an object - but returnObjects options is not enabled!",
              );
              if (this.options.returnedObjectHandler) {
                return this.options.returnedObjectHandler(m, d, n);
              }
              return "key '"
                .concat(s_key, " (")
                .concat(
                  this.language,
                  ")' returned an object instead of string.",
                );
            }
            if (r) {
              const w = v === "[object Array]";
              const E = w ? [] : {};
              const k = w ? y : m;
              for (const A in d) {
                if (Object.prototype.hasOwnProperty.call(d, A)) {
                  const O = "".concat(k).concat(r).concat(A);
                  E[A] = this.translate(
                    O,
                    c.A({}, n, {
                      joinArrays: false,
                      ns: s_namespaces,
                    }),
                  );
                  if (E[A] === O) {
                    E[A] = d[A];
                  }
                }
              }
              d = E;
            }
          } else if (b && typeof _ === "string" && v === "[object Array]") {
            if ((d = d.join(_))) {
              d = this.extendTranslation(d, e, n, i);
            }
          } else {
            let R = false;
            let x = false;
            const z = n.count !== undefined && typeof n.count !== "string";
            const I = t.hasDefaultValue(n);
            const T = z ? this.pluralResolver.getSuffix(h, n.count) : "";
            const D = n["defaultValue".concat(T)] || n.defaultValue;
            if (!this.isValidLookup(d) && I) {
              R = true;
              d = D;
            }
            if (!this.isValidLookup(d)) {
              x = true;
              d = s_key;
            }
            const C = I && D !== d && this.options.updateMissing;
            if (x || R || C) {
              this.logger.log(
                C ? "updateKey" : "missingKey",
                h,
                p,
                s_key,
                C ? D : d,
              );
              if (r) {
                const L = this.resolve(
                  s_key,
                  c.A({}, n, {
                    keySeparator: false,
                  }),
                );
                if (L && L.res) {
                  this.logger.warn(
                    "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.",
                  );
                }
              }
              let N = [];
              const M = this.languageUtils.getFallbackCodes(
                this.options.fallbackLng,
                n.lng || this.language,
              );
              if (this.options.saveMissingTo === "fallback" && M && M[0]) {
                for (let G = 0; G < M.length; G++) {
                  N.push(M[G]);
                }
              } else {
                if (this.options.saveMissingTo === "all") {
                  N = this.languageUtils.toResolveHierarchy(
                    n.lng || this.language,
                  );
                } else {
                  N.push(n.lng || this.language);
                }
              }
              const P = (e, t, i) => {
                if (o.options.missingKeyHandler) {
                  o.options.missingKeyHandler(e, p, t, C ? i : d, C, n);
                } else if (
                  o.backendConnector &&
                  o.backendConnector.saveMissing
                ) {
                  o.backendConnector.saveMissing(e, p, t, C ? i : d, C, n);
                }
                o.emit("missingKey", e, p, t, d);
              };
              if (this.options.saveMissing) {
                if (this.options.saveMissingPlurals && z) {
                  N.forEach((e) => {
                    o.pluralResolver.getSuffixes(e).forEach((t) => {
                      P([e], s_key + t, n["defaultValue".concat(t)] || D);
                    });
                  });
                } else {
                  P(N, s_key, D);
                }
              }
            }
            d = this.extendTranslation(d, e, n, g, i);
            if (x && d === s_key && this.options.appendNamespaceToMissingKey) {
              d = "".concat(p, ":").concat(s_key);
            }
            if (x && this.options.parseMissingKeyHandler) {
              d = this.options.parseMissingKeyHandler(d);
            }
          }
          return d;
        },
      },
      {
        key: "extendTranslation",
        value: function (e, t, n, i, o) {
          const r = this;
          if (this.i18nFormat && this.i18nFormat.parse) {
            e = this.i18nFormat.parse(e, n, i.usedLng, i.usedNS, i.usedKey, {
              resolved: i,
            });
          } else if (!n.skipInterpolation) {
            if (n.interpolation) {
              this.interpolator.init(
                c.A({}, n, {
                  interpolation: c.A(
                    {},
                    this.options.interpolation,
                    n.interpolation,
                  ),
                }),
              );
            }
            let s;
            const a =
              (n.interpolation && n.interpolation.skipOnVariables) ||
              this.options.interpolation.skipOnVariables;
            if (a) {
              const l = e.match(this.interpolator.nestingRegexp);
              s = l && l.length;
            }
            let u = n.replace && typeof n.replace !== "string" ? n.replace : n;
            if (this.options.interpolation.defaultVariables) {
              u = c.A({}, this.options.interpolation.defaultVariables, u);
            }
            e = this.interpolator.interpolate(e, u, n.lng || this.language, n);
            if (a) {
              const p = e.match(this.interpolator.nestingRegexp);
              if (s < (p && p.length)) {
                n.nest = false;
              }
            }
            if (n.nest !== false) {
              e = this.interpolator.nest(
                e,
                function () {
                  for (
                    var e = arguments.length, i = Array(e), s = 0;
                    s < e;
                    s++
                  ) {
                    i[s] = arguments[s];
                  }
                  if (o && o[0] === i[0] && !n.context) {
                    r.logger.warn(
                      "It seems you are nesting recursively key: "
                        .concat(i[0], " in key: ")
                        .concat(t[0]),
                    );
                    return null;
                  }
                  return r.translate.apply(r, i.concat([t]));
                },
                n,
              );
            }
            if (n.interpolation) {
              this.interpolator.reset();
            }
          }
          const h = n.postProcess || this.options.postProcess;
          const f = typeof h === "string" ? [h] : h;
          if (e != null && f && f.length && n.applyPostProcessor !== false) {
            e = z.handle(
              f,
              e,
              t,
              this.options && this.options.postProcessPassResolved
                ? c.A(
                    {
                      i18nResolved: i,
                    },
                    n,
                  )
                : n,
              this,
            );
          }
          return e;
        },
      },
      {
        key: "resolve",
        value: function (e) {
          let res;
          let usedKey;
          let exactUsedKey;
          let usedLng;
          let usedNS;
          const s = this;
          const a =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};
          if (typeof e === "string") {
            e = [e];
          }
          e.forEach((e) => {
            if (!s.isValidLookup(res)) {
              const c = s.extractFromKey(e, a);
              const l = c.key;
              usedKey = l;
              let u = c.namespaces;
              if (s.options.fallbackNS) {
                u = u.concat(s.options.fallbackNS);
              }
              const p = a.count !== undefined && typeof a.count !== "string";
              const h =
                a.context !== undefined &&
                typeof a.context === "string" &&
                a.context !== "";
              const f = a.lngs
                ? a.lngs
                : s.languageUtils.toResolveHierarchy(
                    a.lng || s.language,
                    a.fallbackLng,
                  );
              u.forEach((e) => {
                if (!s.isValidLookup(res)) {
                  usedNS = e;
                  if (
                    !I["".concat(f[0], "-").concat(e)] &&
                    s.utils &&
                    s.utils.hasLoadedNamespace &&
                    !s.utils.hasLoadedNamespace(usedNS)
                  ) {
                    I["".concat(f[0], "-").concat(e)] = true;
                    s.logger.warn(
                      'key "'
                        .concat(usedKey, '" for languages "')
                        .concat(
                          f.join(", "),
                          '" won\'t get resolved as namespace "',
                        )
                        .concat(usedNS, '" was not yet loaded'),
                      "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
                    );
                  }
                  f.forEach((n) => {
                    if (!s.isValidLookup(res)) {
                      usedLng = n;
                      let r;
                      let c;
                      let u = l;
                      const f = [u];
                      for (
                        s.i18nFormat && s.i18nFormat.addLookupKeys
                          ? s.i18nFormat.addLookupKeys(f, l, n, e, a)
                          : (p && (r = s.pluralResolver.getSuffix(n, a.count)),
                            p && h && f.push(u + r),
                            h &&
                              f.push(
                                (u += ""
                                  .concat(s.options.contextSeparator)
                                  .concat(a.context)),
                              ),
                            p && f.push((u += r)));
                        (c = f.pop());
                      ) {
                        if (!s.isValidLookup(res)) {
                          exactUsedKey = c;
                          res = s.getResource(n, e, c, a);
                        }
                      }
                    }
                  });
                }
              });
            }
          });
          return {
            res,
            usedKey,
            exactUsedKey,
            usedLng,
            usedNS,
          };
        },
      },
      {
        key: "isValidLookup",
        value: function (e) {
          return (
            e !== undefined &&
            !(!this.options.returnNull && e === null) &&
            !(!this.options.returnEmptyString && e === "")
          );
        },
      },
      {
        key: "getResource",
        value: function (e, t, n) {
          const i =
            arguments.length > 3 && arguments[3] !== undefined
              ? arguments[3]
              : {};
          if (this.i18nFormat && this.i18nFormat.getResource) {
            return this.i18nFormat.getResource(e, t, n, i);
          }
          return this.resourceStore.getResource(e, t, n, i);
        },
      },
    ],
    [
      {
        key: "hasDefaultValue",
        value: function (e) {
          const t = "defaultValue";
          for (const n in e) {
            if (
              Object.prototype.hasOwnProperty.call(e, n) &&
              t === n.substring(0, t.length) &&
              e[n] !== undefined
            ) {
              return true;
            }
          }
          return false;
        },
      },
    ],
  );
  return t;
})(y);
function D(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const C = (() => {
  function e(t) {
    l.A(this, e);
    this.options = t;
    this.whitelist = this.options.supportedLngs || false;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = m.create("languageUtils");
  }
  u.A(e, [
    {
      key: "getScriptPartFromCode",
      value: function (e) {
        if (!e || e.indexOf("-") < 0) {
          return null;
        }
        const t = e.split("-");
        if (
          t.length === 2 ||
          (t.pop(), t[t.length - 1].toLowerCase() === "x")
        ) {
          return null;
        }
        return this.formatLanguageCode(t.join("-"));
      },
    },
    {
      key: "getLanguagePartFromCode",
      value: function (e) {
        if (!e || e.indexOf("-") < 0) {
          return e;
        }
        const t = e.split("-");
        return this.formatLanguageCode(t[0]);
      },
    },
    {
      key: "formatLanguageCode",
      value: function (e) {
        if (typeof e === "string" && e.indexOf("-") > -1) {
          const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
          let n = e.split("-");
          if (this.options.lowerCaseLng) {
            n = n.map((e) => e.toLowerCase());
          } else if (n.length === 2) {
            n[0] = n[0].toLowerCase();
            n[1] = n[1].toUpperCase();
            if (t.indexOf(n[1].toLowerCase()) > -1) {
              n[1] = D(n[1].toLowerCase());
            }
          } else if (n.length === 3) {
            n[0] = n[0].toLowerCase();
            if (n[1].length === 2) {
              n[1] = n[1].toUpperCase();
            }
            if (n[0] !== "sgn" && n[2].length === 2) {
              n[2] = n[2].toUpperCase();
            }
            if (t.indexOf(n[1].toLowerCase()) > -1) {
              n[1] = D(n[1].toLowerCase());
            }
            if (t.indexOf(n[2].toLowerCase()) > -1) {
              n[2] = D(n[2].toLowerCase());
            }
          }
          return n.join("-");
        }
        if (this.options.cleanCode || this.options.lowerCaseLng) {
          return e.toLowerCase();
        }
        return e;
      },
    },
    {
      key: "isWhitelisted",
      value: function (e) {
        this.logger.deprecate(
          "languageUtils.isWhitelisted",
          'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.',
        );
        return this.isSupportedCode(e);
      },
    },
    {
      key: "isSupportedCode",
      value: function (e) {
        if (
          this.options.load === "languageOnly" ||
          this.options.nonExplicitSupportedLngs
        ) {
          e = this.getLanguagePartFromCode(e);
        }
        return (
          !this.supportedLngs ||
          !this.supportedLngs.length ||
          this.supportedLngs.indexOf(e) > -1
        );
      },
    },
    {
      key: "getBestMatchFromCodes",
      value: function (e) {
        let t;
        const n = this;
        if (e) {
          e.forEach((e) => {
            if (!t) {
              const i = n.formatLanguageCode(e);
              if (!n.options.supportedLngs || n.isSupportedCode(i)) {
                t = i;
              }
            }
          });
          if (!t && this.options.supportedLngs) {
            e.forEach((e) => {
              if (!t) {
                const i = n.getLanguagePartFromCode(e);
                if (n.isSupportedCode(i)) {
                  return (t = i);
                }
                t = n.options.supportedLngs.find((e) => {
                  if (e.indexOf(i) === 0) {
                    return e;
                  }
                });
              }
            });
          }
          if (!t) {
            t = this.getFallbackCodes(this.options.fallbackLng)[0];
          }
          return t;
        }
        return null;
      },
    },
    {
      key: "getFallbackCodes",
      value: function (e, t) {
        if (!e) {
          return [];
        }
        if (typeof e === "function") {
          e = e(t);
        }
        if (typeof e === "string") {
          e = [e];
        }
        if (Object.prototype.toString.apply(e) === "[object Array]") {
          return e;
        }
        if (!t) {
          return e.default || [];
        }
        let n = e[t];
        if (!n) {
          n = e[this.getScriptPartFromCode(t)];
        }
        if (!n) {
          n = e[this.formatLanguageCode(t)];
        }
        if (!n) {
          n = e[this.getLanguagePartFromCode(t)];
        }
        if (!n) {
          n = e.default;
        }
        return n || [];
      },
    },
    {
      key: "toResolveHierarchy",
      value: function (e, t) {
        const n = this;
        const i = this.getFallbackCodes(t || this.options.fallbackLng || [], e);
        const o = [];
        const r = (e) => {
          if (e) {
            if (n.isSupportedCode(e)) {
              o.push(e);
            } else {
              n.logger.warn(
                "rejecting language code not found in supportedLngs: ".concat(
                  e,
                ),
              );
            }
          }
        };
        if (typeof e === "string" && e.indexOf("-") > -1) {
          if (this.options.load !== "languageOnly") {
            r(this.formatLanguageCode(e));
          }
          if (
            this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly"
          ) {
            r(this.getScriptPartFromCode(e));
          }
          if (this.options.load !== "currentOnly") {
            r(this.getLanguagePartFromCode(e));
          }
        } else if (typeof e === "string") {
          r(this.formatLanguageCode(e));
        }
        i.forEach((e) => {
          if (o.indexOf(e) < 0) {
            r(n.formatLanguageCode(e));
          }
        });
        return o;
      },
    },
  ]);
  return e;
})();
const L = [
  {
    lngs: [
      "ach",
      "ak",
      "am",
      "arn",
      "br",
      "fil",
      "gun",
      "ln",
      "mfe",
      "mg",
      "mi",
      "oc",
      "pt",
      "pt-BR",
      "tg",
      "tl",
      "ti",
      "tr",
      "uz",
      "wa",
    ],
    nr: [1, 2],
    fc: 1,
  },
  {
    lngs: [
      "af",
      "an",
      "ast",
      "az",
      "bg",
      "bn",
      "ca",
      "da",
      "de",
      "dev",
      "el",
      "en",
      "eo",
      "es",
      "et",
      "eu",
      "fi",
      "fo",
      "fur",
      "fy",
      "gl",
      "gu",
      "ha",
      "hi",
      "hu",
      "hy",
      "ia",
      "it",
      "kn",
      "ku",
      "lb",
      "mai",
      "ml",
      "mn",
      "mr",
      "nah",
      "nap",
      "nb",
      "ne",
      "nl",
      "nn",
      "no",
      "nso",
      "pa",
      "pap",
      "pms",
      "ps",
      "pt-PT",
      "rm",
      "sco",
      "se",
      "si",
      "so",
      "son",
      "sq",
      "sv",
      "sw",
      "ta",
      "te",
      "tk",
      "ur",
      "yo",
    ],
    nr: [1, 2],
    fc: 2,
  },
  {
    lngs: [
      "ay",
      "bo",
      "cgg",
      "fa",
      "ht",
      "id",
      "ja",
      "jbo",
      "ka",
      "kk",
      "km",
      "ko",
      "ky",
      "lo",
      "ms",
      "sah",
      "su",
      "th",
      "tt",
      "ug",
      "vi",
      "wo",
      "zh",
    ],
    nr: [1],
    fc: 3,
  },
  {
    lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
    nr: [1, 2, 5],
    fc: 4,
  },
  {
    lngs: ["ar"],
    nr: [0, 1, 2, 3, 11, 100],
    fc: 5,
  },
  {
    lngs: ["cs", "sk"],
    nr: [1, 2, 5],
    fc: 6,
  },
  {
    lngs: ["csb", "pl"],
    nr: [1, 2, 5],
    fc: 7,
  },
  {
    lngs: ["cy"],
    nr: [1, 2, 3, 8],
    fc: 8,
  },
  {
    lngs: ["fr"],
    nr: [1, 2],
    fc: 9,
  },
  {
    lngs: ["ga"],
    nr: [1, 2, 3, 7, 11],
    fc: 10,
  },
  {
    lngs: ["gd"],
    nr: [1, 2, 3, 20],
    fc: 11,
  },
  {
    lngs: ["is"],
    nr: [1, 2],
    fc: 12,
  },
  {
    lngs: ["jv"],
    nr: [0, 1],
    fc: 13,
  },
  {
    lngs: ["kw"],
    nr: [1, 2, 3, 4],
    fc: 14,
  },
  {
    lngs: ["lt"],
    nr: [1, 2, 10],
    fc: 15,
  },
  {
    lngs: ["lv"],
    nr: [1, 2, 0],
    fc: 16,
  },
  {
    lngs: ["mk"],
    nr: [1, 2],
    fc: 17,
  },
  {
    lngs: ["mnk"],
    nr: [0, 1, 2],
    fc: 18,
  },
  {
    lngs: ["mt"],
    nr: [1, 2, 11, 20],
    fc: 19,
  },
  {
    lngs: ["or"],
    nr: [2, 1],
    fc: 2,
  },
  {
    lngs: ["ro"],
    nr: [1, 2, 20],
    fc: 20,
  },
  {
    lngs: ["sl"],
    nr: [5, 1, 2, 3],
    fc: 21,
  },
  {
    lngs: ["he", "iw"],
    nr: [1, 2, 20, 21],
    fc: 22,
  },
];
const N = {
  1: function (e) {
    return Number(e > 1);
  },
  2: function (e) {
    return Number(e != 1);
  },
  3: function (e) {
    return 0;
  },
  4: function (e) {
    return Number(
      e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2,
    );
  },
  5: function (e) {
    return Number(
      e == 0
        ? 0
        : e == 1
          ? 1
          : e == 2
            ? 2
            : e % 100 >= 3 && e % 100 <= 10
              ? 3
              : e % 100 >= 11
                ? 4
                : 5,
    );
  },
  6: function (e) {
    return Number(e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2);
  },
  7: function (e) {
    return Number(
      e == 1
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2,
    );
  },
  8: function (e) {
    return Number(e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3);
  },
  9: function (e) {
    return Number(e >= 2);
  },
  10: function (e) {
    return Number(e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
  },
  11: function (e) {
    return Number(
      e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3,
    );
  },
  12: function (e) {
    return Number(e % 10 != 1 || e % 100 == 11);
  },
  13: function (e) {
    return Number(e !== 0);
  },
  14: function (e) {
    return Number(e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3);
  },
  15: function (e) {
    return Number(
      e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2,
    );
  },
  16: function (e) {
    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2);
  },
  17: function (e) {
    return Number(+(e != 1 && (e % 10 != 1 || e % 100 == 11)));
  },
  18: function (e) {
    return Number(e == 0 ? 0 : e == 1 ? 1 : 2);
  },
  19: function (e) {
    return Number(
      e == 1
        ? 0
        : e == 0 || (e % 100 > 1 && e % 100 < 11)
          ? 1
          : e % 100 > 10 && e % 100 < 20
            ? 2
            : 3,
    );
  },
  20: function (e) {
    return Number(e == 1 ? 0 : e == 0 || (e % 100 > 0 && e % 100 < 20) ? 1 : 2);
  },
  21: function (e) {
    return Number(
      e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : 3 * (e % 100 == 3 || e % 100 == 4),
    );
  },
  22: function (e) {
    return Number(
      e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3,
    );
  },
};
const M = (() => {
  function e(t) {
    let n;
    const i =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    l.A(this, e);
    this.languageUtils = t;
    this.options = i;
    this.logger = m.create("pluralResolver");
    this.rules =
      ((n = {}),
      L.forEach((e) => {
        e.lngs.forEach((t) => {
          n[t] = {
            numbers: e.nr,
            plurals: N[e.fc],
          };
        });
      }),
      n);
  }
  u.A(e, [
    {
      key: "addRule",
      value: function (e, t) {
        this.rules[e] = t;
      },
    },
    {
      key: "getRule",
      value: function (e) {
        return (
          this.rules[e] ||
          this.rules[this.languageUtils.getLanguagePartFromCode(e)]
        );
      },
    },
    {
      key: "needsPlural",
      value: function (e) {
        const t = this.getRule(e);
        return t && t.numbers.length > 1;
      },
    },
    {
      key: "getPluralFormsOfKey",
      value: function (e, t) {
        return this.getSuffixes(e).map((e) => t + e);
      },
    },
    {
      key: "getSuffixes",
      value: function (e) {
        const t = this;
        const n = this.getRule(e);
        if (n) {
          return n.numbers.map((n) => t.getSuffix(e, n));
        }
        return [];
      },
    },
    {
      key: "getSuffix",
      value: function (e, t) {
        const n = this;
        const i = this.getRule(e);
        if (i) {
          const o = i.noAbs ? i.plurals(t) : i.plurals(Math.abs(t));
          let r = i.numbers[o];
          if (
            this.options.simplifyPluralSuffix &&
            i.numbers.length === 2 &&
            i.numbers[0] === 1
          ) {
            if (r === 2) {
              r = "plural";
            } else if (r === 1) {
              r = "";
            }
          }
          const s = () => {
            if (n.options.prepend && r.toString()) {
              return n.options.prepend + r.toString();
            }
            return r.toString();
          };
          if (this.options.compatibilityJSON === "v1") {
            if (r === 1) {
              return "";
            }
            if (typeof r === "number") {
              return "_plural_".concat(r.toString());
            }
            return s();
          }
          if (this.options.compatibilityJSON === "v2") {
            return s();
          }
          if (
            this.options.simplifyPluralSuffix &&
            i.numbers.length === 2 &&
            i.numbers[0] === 1
          ) {
            return s();
          }
          if (this.options.prepend && o.toString()) {
            return this.options.prepend + o.toString();
          }
          return o.toString();
        }
        this.logger.warn("no plural rule found for: ".concat(e));
        return "";
      },
    },
  ]);
  return e;
})();
const G = (() => {
  function e() {
    const t =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    l.A(this, e);
    this.logger = m.create("interpolator");
    this.options = t;
    this.format =
      (t.interpolation && t.interpolation.format) ||
      function (e) {
        return e;
      };
    this.init(t);
  }
  u.A(e, [
    {
      key: "init",
      value: function () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};
        if (!e.interpolation) {
          e.interpolation = {
            escapeValue: true,
          };
        }
        const e_interpolation = e.interpolation;
        this.escape =
          e_interpolation.escape !== undefined ? e_interpolation.escape : O;
        this.escapeValue =
          e_interpolation.escapeValue === undefined ||
          e_interpolation.escapeValue;
        this.useRawValueToEscape =
          e_interpolation.useRawValueToEscape !== undefined &&
          e_interpolation.useRawValueToEscape;
        this.prefix = e_interpolation.prefix
          ? k(e_interpolation.prefix)
          : e_interpolation.prefixEscaped || "{{";
        this.suffix = e_interpolation.suffix
          ? k(e_interpolation.suffix)
          : e_interpolation.suffixEscaped || "}}";
        this.formatSeparator = e_interpolation.formatSeparator
          ? e_interpolation.formatSeparator
          : e_interpolation.formatSeparator || ",";
        this.unescapePrefix = e_interpolation.unescapeSuffix
          ? ""
          : e_interpolation.unescapePrefix || "-";
        this.unescapeSuffix = this.unescapePrefix
          ? ""
          : e_interpolation.unescapeSuffix || "";
        this.nestingPrefix = e_interpolation.nestingPrefix
          ? k(e_interpolation.nestingPrefix)
          : e_interpolation.nestingPrefixEscaped || k("$t(");
        this.nestingSuffix = e_interpolation.nestingSuffix
          ? k(e_interpolation.nestingSuffix)
          : e_interpolation.nestingSuffixEscaped || k(")");
        this.nestingOptionsSeparator = e_interpolation.nestingOptionsSeparator
          ? e_interpolation.nestingOptionsSeparator
          : e_interpolation.nestingOptionsSeparator || ",";
        this.maxReplaces = e_interpolation.maxReplaces
          ? e_interpolation.maxReplaces
          : 1000;
        this.alwaysFormat =
          e_interpolation.alwaysFormat !== undefined &&
          e_interpolation.alwaysFormat;
        this.resetRegExp();
      },
    },
    {
      key: "reset",
      value: function () {
        if (this.options) {
          this.init(this.options);
        }
      },
    },
    {
      key: "resetRegExp",
      value: function () {
        const e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
        this.regexp = RegExp(e, "g");
        const t = ""
          .concat(this.prefix)
          .concat(this.unescapePrefix, "(.+?)")
          .concat(this.unescapeSuffix)
          .concat(this.suffix);
        this.regexpUnescape = RegExp(t, "g");
        const n = ""
          .concat(this.nestingPrefix, "(.+?)")
          .concat(this.nestingSuffix);
        this.nestingRegexp = RegExp(n, "g");
      },
    },
    {
      key: "interpolate",
      value: function (e, t, n, i) {
        let o;
        let r;
        let s;
        const a = this;
        const c =
          (this.options &&
            this.options.interpolation &&
            this.options.interpolation.defaultVariables) ||
          {};
        function l(e) {
          return e.replace(/\$/g, "$$$$");
        }
        const u = (e) => {
          if (e.indexOf(a.formatSeparator) < 0) {
            const o = E(t, c, e);
            if (a.alwaysFormat) {
              return a.format(o, undefined, n);
            }
            return o;
          }
          const r = e.split(a.formatSeparator);
          const s = r.shift().trim();
          const l = r.join(a.formatSeparator).trim();
          return a.format(E(t, c, s), l, n, i);
        };
        this.resetRegExp();
        const p =
          (i && i.missingInterpolationHandler) ||
          this.options.missingInterpolationHandler;
        const h =
          (i && i.interpolation && i.interpolation.skipOnVariables) ||
          this.options.interpolation.skipOnVariables;
        [
          {
            regex: this.regexpUnescape,
            safeValue: function (e) {
              return l(e);
            },
          },
          {
            regex: this.regexp,
            safeValue: function (e) {
              if (a.escapeValue) {
                return l(a.escape(e));
              }
              return l(e);
            },
          },
        ].forEach((t) => {
          for (s = 0; (o = t.regex.exec(e));) {
            if ((r = u(o[1].trim())) === undefined) {
              if (typeof p === "function") {
                const n = p(e, o, i);
                r = typeof n === "string" ? n : "";
              } else if (h) {
                r = o[0];
                continue;
              } else {
                a.logger.warn(
                  "missed to pass in variable "
                    .concat(o[1], " for interpolating ")
                    .concat(e),
                );
                r = "";
              }
            } else {
              if (!(typeof r === "string" || a.useRawValueToEscape)) {
                r = _(r);
              }
            }
            e = e.replace(o[0], t.safeValue(r));
            t.regex.lastIndex = 0;
            if (++s >= a.maxReplaces) {
              break;
            }
          }
        });
        return e;
      },
    },
    {
      key: "nest",
      value: function (e, t) {
        let n;
        let i;
        const o = this;
        const r =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : {};
        let s = c.A({}, r);
        function a(e, t) {
          const nestingOptionsSeparator = this.nestingOptionsSeparator;
          if (e.indexOf(nestingOptionsSeparator) < 0) {
            return e;
          }
          const i = e.split(
            new RegExp("".concat(nestingOptionsSeparator, "[ ]*{")),
          );
          let o = "{".concat(i[1]);
          e = i[0];
          o = (o = this.interpolate(o, s)).replace(/'/g, '"');
          try {
            s = JSON.parse(o);
            if (t) {
              s = c.A({}, t, s);
            }
          } catch (error) {
            this.logger.warn(
              "failed parsing options string in nesting for key ".concat(e),
              error,
            );
            return "".concat(e).concat(nestingOptionsSeparator).concat(o);
          }
          delete s.defaultValue;
          return e;
        }
        s.applyPostProcessor = false;
        delete s.defaultValue;
        while ((n = this.nestingRegexp.exec(e))) {
          let l = [];
          let u = false;
          if (n[0].includes(this.formatSeparator) && !/{.*}/.test(n[1])) {
            const p = n[1].split(this.formatSeparator).map((e) => e.trim());
            n[1] = p.shift();
            l = p;
            u = true;
          }
          if (
            (i = t(a.call(this, n[1].trim(), s), s)) &&
            n[0] === e &&
            typeof i !== "string"
          ) {
            return i;
          }
          if (typeof i !== "string") {
            i = _(i);
          }
          if (!i) {
            this.logger.warn(
              "missed to resolve ".concat(n[1], " for nesting ").concat(e),
            );
            i = "";
          }
          if (u) {
            i = l.reduce(
              (acc, item) => o.format(acc, item, r.lng, r),
              i.trim(),
            );
          }
          e = e.replace(n[0], i);
          this.regexp.lastIndex = 0;
        }
        return e;
      },
    },
  ]);
  return e;
})();
const P = ((e) => {
  function t(e, n, i) {
    let o;
    const r =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    l.A(this, t);
    o = p.A(this, h.A(t).call(this));
    if (R) {
      y.call(f.A(o));
    }
    o.backend = e;
    o.store = n;
    o.services = i;
    o.languageUtils = i.languageUtils;
    o.options = r;
    o.logger = m.create("backendConnector");
    o.state = {};
    o.queue = [];
    if (o.backend && o.backend.init) {
      o.backend.init(i, r.backend, r);
    }
    return o;
  }
  g.A(t, e);
  u.A(t, [
    {
      key: "queueLoad",
      value: function (e, t, n, callback) {
        const o = this;
        const toLoad = [];
        const pending = [];
        const toLoadLanguages = [];
        const toLoadNamespaces = [];
        e.forEach((e) => {
          let i = true;
          t.forEach((t) => {
            const a = "".concat(e, "|").concat(t);
            if (!n.reload && o.store.hasResourceBundle(e, t)) {
              o.state[a] = 2;
            } else {
              if (!(o.state[a] < 0)) {
                if (o.state[a] === 1) {
                  if (pending.indexOf(a) < 0) {
                    pending.push(a);
                  }
                } else {
                  o.state[a] = 1;
                  i = false;
                  if (pending.indexOf(a) < 0) {
                    pending.push(a);
                  }
                  if (toLoad.indexOf(a) < 0) {
                    toLoad.push(a);
                  }
                  if (toLoadNamespaces.indexOf(t) < 0) {
                    toLoadNamespaces.push(t);
                  }
                }
              }
            }
          });
          if (!i) {
            toLoadLanguages.push(e);
          }
        });
        if (toLoad.length || pending.length) {
          this.queue.push({
            pending,
            loaded: {},
            errors: [],
            callback,
          });
        }
        return {
          toLoad,
          pending,
          toLoadLanguages,
          toLoadNamespaces,
        };
      },
    },
    {
      key: "loaded",
      value: function (e, t, n) {
        const i = e.split("|");
        const o = i[0];
        const r = i[1];
        if (t) {
          this.emit("failedLoading", o, r, t);
        }
        if (n) {
          this.store.addResourceBundle(o, r, n);
        }
        this.state[e] = t ? -1 : 2;
        const s = {};
        this.queue.forEach((n) => {
          i = n.loaded;
          c = (a = b(i, [o], Object)).obj;
          c[(l = a.k)] = c[l] || [];
          c[l].push(r);
          var i;
          var a;
          var c;
          var l;
          const n_pending = n.pending;
          for (let p = n_pending.indexOf(e); p !== -1;) {
            n_pending.splice(p, 1);
            p = n_pending.indexOf(e);
          }
          if (t) {
            n.errors.push(t);
          }
          if (!(n.pending.length !== 0 || n.done)) {
            Object.keys(n.loaded).forEach((e) => {
              if (!s[e]) {
                s[e] = [];
              }
              if (n.loaded[e].length) {
                n.loaded[e].forEach((t) => {
                  if (s[e].indexOf(t) < 0) {
                    s[e].push(t);
                  }
                });
              }
            });
            n.done = true;
            if (n.errors.length) {
              n.callback(n.errors);
            } else {
              n.callback();
            }
          }
        });
        this.emit("loaded", s);
        this.queue = this.queue.filter((e) => !e.done);
      },
    },
    {
      key: "read",
      value: function (e, t, n) {
        const i = this;
        const o =
          arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        const r =
          arguments.length > 4 && arguments[4] !== undefined
            ? arguments[4]
            : 350;
        const s = arguments.length > 5 ? arguments[5] : undefined;
        if (e.length) {
          return this.backend[n](e, t, function (a, c) {
            if (a && c && o < 5) {
              setTimeout(() => {
                i.read.call(i, e, t, n, o + 1, 2 * r, s);
              }, r);
            } else {
              s(a, c);
            }
          });
        }
        return s(null, {});
      },
    },
    {
      key: "prepareLoading",
      value: function (e, t) {
        const n = this;
        const i =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : {};
        const o = arguments.length > 3 ? arguments[3] : undefined;
        if (!this.backend) {
          this.logger.warn(
            "No backend was added via i18next.use. Will not load resources.",
          );
          return o && o();
        }
        if (typeof e === "string") {
          e = this.languageUtils.toResolveHierarchy(e);
        }
        if (typeof t === "string") {
          t = [t];
        }
        const r = this.queueLoad(e, t, i, o);
        if (!r.toLoad.length) {
          if (!r.pending.length) {
            o();
          }
          return null;
        }
        r.toLoad.forEach((e) => {
          n.loadOne(e);
        });
      },
    },
    {
      key: "load",
      value: function (e, t, n) {
        this.prepareLoading(e, t, {}, n);
      },
    },
    {
      key: "reload",
      value: function (e, t, n) {
        this.prepareLoading(
          e,
          t,
          {
            reload: true,
          },
          n,
        );
      },
    },
    {
      key: "loadOne",
      value: function (e) {
        const t = this;
        const n =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : "";
        const i = e.split("|");
        const o = i[0];
        const r = i[1];
        this.read(o, r, "read", undefined, undefined, function (i, s) {
          if (i) {
            t.logger.warn(
              ""
                .concat(n, "loading namespace ")
                .concat(r, " for language ")
                .concat(o, " failed"),
              i,
            );
          }
          if (!i && s) {
            t.logger.log(
              ""
                .concat(n, "loaded namespace ")
                .concat(r, " for language ")
                .concat(o),
              s,
            );
          }
          t.loaded(e, i, s);
        });
      },
    },
    {
      key: "saveMissing",
      value: function (e, t, n, i, isUpdate) {
        const r =
          arguments.length > 5 && arguments[5] !== undefined
            ? arguments[5]
            : {};
        if (
          this.services.utils &&
          this.services.utils.hasLoadedNamespace &&
          !this.services.utils.hasLoadedNamespace(t)
        ) {
          this.logger.warn(
            'did not save key "'
              .concat(n, '" as the namespace "')
              .concat(t, '" was not yet loaded'),
            "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
          );
        } else {
          if (!(n == null || n === "")) {
            if (this.backend && this.backend.create) {
              this.backend.create(
                e,
                t,
                n,
                i,
                null,
                c.A({}, r, {
                  isUpdate,
                }),
              );
            }
            if (e && e[0]) {
              this.store.addResource(e[0], t, n, i);
            }
          }
        }
      },
    },
  ]);
  return t;
})(y);
function B(e) {
  if (typeof e.ns === "string") {
    e.ns = [e.ns];
  }
  if (typeof e.fallbackLng === "string") {
    e.fallbackLng = [e.fallbackLng];
  }
  if (typeof e.fallbackNS === "string") {
    e.fallbackNS = [e.fallbackNS];
  }
  if (e.whitelist) {
    if (e.whitelist && e.whitelist.indexOf("cimode") < 0) {
      e.whitelist = e.whitelist.concat(["cimode"]);
    }
    e.supportedLngs = e.whitelist;
  }
  if (e.nonExplicitWhitelist) {
    e.nonExplicitSupportedLngs = e.nonExplicitWhitelist;
  }
  if (e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0) {
    e.supportedLngs = e.supportedLngs.concat(["cimode"]);
  }
  return e;
}
function j() {}
const U = new (((e) => {
  function t() {
    let e;
    const n =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const i = arguments.length > 1 ? arguments[1] : undefined;
    l.A(this, t);
    e = p.A(this, h.A(t).call(this));
    if (R) {
      y.call(f.A(e));
    }
    e.options = B(n);
    e.services = {};
    e.logger = m;
    e.modules = {
      external: [],
    };
    if (i && !e.isInitialized && !n.isClone) {
      if (!e.options.initImmediate) {
        e.init(n, i);
        return p.A(e, f.A(e));
      }
      setTimeout(() => {
        e.init(n, i);
      }, 0);
    }
    return e;
  }
  g.A(t, e);
  u.A(t, [
    {
      key: "init",
      value: function () {
        const e = this;
        let t =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};
        let n = arguments.length > 1 ? arguments[1] : undefined;
        function i(e) {
          if (e) {
            if (typeof e === "function") {
              return new e();
            }
            return e;
          }
          return null;
        }
        if (typeof t === "function") {
          n = t;
          t = {};
        }
        if (t.whitelist && !t.supportedLngs) {
          this.logger.deprecate(
            "whitelist",
            'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.',
          );
        }
        if (t.nonExplicitWhitelist && !t.nonExplicitSupportedLngs) {
          this.logger.deprecate(
            "whitelist",
            'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.',
          );
        }
        this.options = c.A(
          {},
          {
            debug: false,
            initImmediate: true,
            ns: ["translation"],
            defaultNS: ["translation"],
            fallbackLng: ["dev"],
            fallbackNS: false,
            whitelist: false,
            nonExplicitWhitelist: false,
            supportedLngs: false,
            nonExplicitSupportedLngs: false,
            load: "all",
            preload: false,
            simplifyPluralSuffix: true,
            keySeparator: ".",
            nsSeparator: ":",
            pluralSeparator: "_",
            contextSeparator: "_",
            partialBundledLanguages: false,
            saveMissing: false,
            updateMissing: false,
            saveMissingTo: "fallback",
            saveMissingPlurals: true,
            missingKeyHandler: false,
            missingInterpolationHandler: false,
            postProcess: false,
            postProcessPassResolved: false,
            returnNull: true,
            returnEmptyString: true,
            returnObjects: false,
            joinArrays: false,
            returnedObjectHandler: false,
            parseMissingKeyHandler: false,
            appendNamespaceToMissingKey: false,
            appendNamespaceToCIMode: false,
            overloadTranslationOptionHandler: function (e) {
              let t = {};
              if (a.A(e[1]) === "object") {
                t = e[1];
              }
              if (typeof e[1] === "string") {
                t.defaultValue = e[1];
              }
              if (typeof e[2] === "string") {
                t.tDescription = e[2];
              }
              if (a.A(e[2]) === "object" || a.A(e[3]) === "object") {
                const n = e[3] || e[2];
                Object.keys(n).forEach((e) => {
                  t[e] = n[e];
                });
              }
              return t;
            },
            interpolation: {
              escapeValue: true,
              format: function (e, t, n, i) {
                return e;
              },
              prefix: "{{",
              suffix: "}}",
              formatSeparator: ",",
              unescapePrefix: "-",
              nestingPrefix: "$t(",
              nestingSuffix: ")",
              nestingOptionsSeparator: ",",
              maxReplaces: 1000,
              skipOnVariables: false,
            },
          },
          this.options,
          B(t),
        );
        this.format = this.options.interpolation.format;
        if (!n) {
          n = j;
        }
        if (!this.options.isClone) {
          if (this.modules.logger) {
            m.init(i(this.modules.logger), this.options);
          } else {
            m.init(null, this.options);
          }
          const o = new C(this.options);
          this.store = new x(this.options.resources, this.options);
          const r = this.services;
          r.logger = m;
          r.resourceStore = this.store;
          r.languageUtils = o;
          r.pluralResolver = new M(o, {
            prepend: this.options.pluralSeparator,
            compatibilityJSON: this.options.compatibilityJSON,
            simplifyPluralSuffix: this.options.simplifyPluralSuffix,
          });
          r.interpolator = new G(this.options);
          r.utils = {
            hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
          };
          r.backendConnector = new P(
            i(this.modules.backend),
            r.resourceStore,
            r,
            this.options,
          );
          r.backendConnector.on("*", function (t) {
            for (
              var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1;
              o < n;
              o++
            ) {
              i[o - 1] = arguments[o];
            }
            e.emit.apply(e, [t].concat(i));
          });
          if (this.modules.languageDetector) {
            r.languageDetector = i(this.modules.languageDetector);
            r.languageDetector.init(r, this.options.detection, this.options);
          }
          if (this.modules.i18nFormat) {
            r.i18nFormat = i(this.modules.i18nFormat);
            if (r.i18nFormat.init) {
              r.i18nFormat.init(this);
            }
          }
          this.translator = new T(this.services, this.options);
          this.translator.on("*", function (t) {
            for (
              var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1;
              o < n;
              o++
            ) {
              i[o - 1] = arguments[o];
            }
            e.emit.apply(e, [t].concat(i));
          });
          this.modules.external.forEach((t) => {
            if (t.init) {
              t.init(e);
            }
          });
        }
        if (
          this.options.fallbackLng &&
          !this.services.languageDetector &&
          !this.options.lng
        ) {
          const s = this.services.languageUtils.getFallbackCodes(
            this.options.fallbackLng,
          );
          if (s.length > 0 && s[0] !== "dev") {
            this.options.lng = s[0];
          }
        }
        if (!(this.services.languageDetector || this.options.lng)) {
          this.logger.warn(
            "init: no languageDetector is used and no lng is defined",
          );
        }
        [
          "getResource",
          "hasResourceBundle",
          "getResourceBundle",
          "getDataByLanguage",
        ].forEach((t) => {
          e[t] = function () {
            let n;
            return (n = e.store)[t].apply(n, arguments);
          };
        });
        [
          "addResource",
          "addResources",
          "addResourceBundle",
          "removeResourceBundle",
        ].forEach((t) => {
          e[t] = function () {
            let n;
            (n = e.store)[t].apply(n, arguments);
            return e;
          };
        });
        const l = v();
        const u = function () {
          const t = function (t, i) {
            if (e.isInitialized) {
              e.logger.warn(
                "init: i18next is already initialized. You should call init just once!",
              );
            }
            e.isInitialized = true;
            if (!e.options.isClone) {
              e.logger.log("initialized", e.options);
            }
            e.emit("initialized", e.options);
            l.resolve(i);
            n(t, i);
          };
          if (
            e.languages &&
            e.options.compatibilityAPI !== "v1" &&
            !e.isInitialized
          ) {
            return t(null, e.t.bind(e));
          }
          e.changeLanguage(e.options.lng, t);
        };
        if (this.options.resources || !this.options.initImmediate) {
          u();
        } else {
          setTimeout(u, 0);
        }
        return l;
      },
    },
    {
      key: "loadResources",
      value: function (e) {
        const t = this;
        const n =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : j;
        let i = n;
        const o = typeof e === "string" ? e : this.language;
        if (typeof e === "function") {
          i = e;
        }
        if (!this.options.resources || this.options.partialBundledLanguages) {
          if (o && o.toLowerCase() === "cimode") {
            return i();
          }
          const r = [];
          const s = (e) => {
            if (e) {
              t.services.languageUtils.toResolveHierarchy(e).forEach((e) => {
                if (r.indexOf(e) < 0) {
                  r.push(e);
                }
              });
            }
          };
          if (o) {
            s(o);
          } else {
            this.services.languageUtils
              .getFallbackCodes(this.options.fallbackLng)
              .forEach((e) => s(e));
          }
          if (this.options.preload) {
            this.options.preload.forEach((e) => s(e));
          }
          this.services.backendConnector.load(r, this.options.ns, i);
        } else {
          i(null);
        }
      },
    },
    {
      key: "reloadResources",
      value: function (e, t, n) {
        const i = v();
        if (!e) {
          e = this.languages;
        }
        if (!t) {
          t = this.options.ns;
        }
        if (!n) {
          n = j;
        }
        this.services.backendConnector.reload(e, t, function (e) {
          i.resolve();
          n(e);
        });
        return i;
      },
    },
    {
      key: "use",
      value: function (e) {
        if (!e) {
          throw Error(
            "You are passing an undefined module! Please check the object you are passing to i18next.use()",
          );
        }
        if (!e.type) {
          throw Error(
            "You are passing a wrong module! Please check the object you are passing to i18next.use()",
          );
        }
        if (e.type === "backend") {
          this.modules.backend = e;
        }
        if (e.type === "logger" || (e.log && e.warn && e.error)) {
          this.modules.logger = e;
        }
        if (e.type === "languageDetector") {
          this.modules.languageDetector = e;
        }
        if (e.type === "i18nFormat") {
          this.modules.i18nFormat = e;
        }
        if (e.type === "postProcessor") {
          z.addPostProcessor(e);
        }
        if (e.type === "3rdParty") {
          this.modules.external.push(e);
        }
        return this;
      },
    },
    {
      key: "changeLanguage",
      value: function (e, t) {
        const n = this;
        this.isLanguageChangingTo = e;
        const i = v();
        this.emit("languageChanging", e);
        const o = (e, o) => {
          if (o) {
            n.language = o;
            n.languages = n.services.languageUtils.toResolveHierarchy(o);
            n.translator.changeLanguage(o);
            n.isLanguageChangingTo = undefined;
            n.emit("languageChanged", o);
            n.logger.log("languageChanged", o);
          } else {
            n.isLanguageChangingTo = undefined;
          }
          i.resolve(function () {
            return n.t.apply(n, arguments);
          });
          if (t) {
            t(e, function () {
              return n.t.apply(n, arguments);
            });
          }
        };
        const r = function (e) {
          const t =
            typeof e === "string"
              ? e
              : n.services.languageUtils.getBestMatchFromCodes(e);
          if (t) {
            if (!n.language) {
              n.language = t;
              n.languages = n.services.languageUtils.toResolveHierarchy(t);
            }
            if (!n.translator.language) {
              n.translator.changeLanguage(t);
            }
            if (n.services.languageDetector) {
              n.services.languageDetector.cacheUserLanguage(t);
            }
          }
          n.loadResources(t, function (e) {
            o(e, t);
          });
        };
        if (
          e ||
          !this.services.languageDetector ||
          this.services.languageDetector.async
        ) {
          if (
            !e &&
            this.services.languageDetector &&
            this.services.languageDetector.async
          ) {
            this.services.languageDetector.detect(r);
          } else {
            r(e);
          }
        } else {
          r(this.services.languageDetector.detect());
        }
        return i;
      },
    },
    {
      key: "getFixedT",
      value: function (e, t) {
        const n = this;
        const i = function e(t, i) {
          let o;
          if (a.A(i) !== "object") {
            for (
              var r = arguments.length, s = Array(r > 2 ? r - 2 : 0), l = 2;
              l < r;
              l++
            ) {
              s[l - 2] = arguments[l];
            }
            o = n.options.overloadTranslationOptionHandler([t, i].concat(s));
          } else {
            o = c.A({}, i);
          }
          o.lng = o.lng || e.lng;
          o.lngs = o.lngs || e.lngs;
          o.ns = o.ns || e.ns;
          return n.t(t, o);
        };
        if (typeof e === "string") {
          i.lng = e;
        } else {
          i.lngs = e;
        }
        i.ns = t;
        return i;
      },
    },
    {
      key: "t",
      value: function () {
        let e;
        return (
          this.translator && (e = this.translator).translate.apply(e, arguments)
        );
      },
    },
    {
      key: "exists",
      value: function () {
        let e;
        return (
          this.translator && (e = this.translator).exists.apply(e, arguments)
        );
      },
    },
    {
      key: "setDefaultNamespace",
      value: function (e) {
        this.options.defaultNS = e;
      },
    },
    {
      key: "hasLoadedNamespace",
      value: function (e) {
        const t = this;
        const n =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};
        if (!this.isInitialized) {
          this.logger.warn(
            "hasLoadedNamespace: i18next was not initialized",
            this.languages,
          );
          return false;
        }
        if (!this.languages || !this.languages.length) {
          this.logger.warn(
            "hasLoadedNamespace: i18n.languages were undefined or empty",
            this.languages,
          );
          return false;
        }
        const i = this.languages[0];
        const o = !!this.options && this.options.fallbackLng;
        const r = this.languages[this.languages.length - 1];
        if (i.toLowerCase() === "cimode") {
          return true;
        }
        const s = function (e, n) {
          const i =
            t.services.backendConnector.state["".concat(e, "|").concat(n)];
          return i === -1 || i === 2;
        };
        if (n.precheck) {
          const a = n.precheck(this, s);
          if (a !== undefined) {
            return a;
          }
        }
        return !!(
          this.hasResourceBundle(i, e) ||
          !this.services.backendConnector.backend ||
          (s(i, e) && (!o || s(r, e)))
        );
      },
    },
    {
      key: "loadNamespaces",
      value: function (e, t) {
        const n = this;
        const i = v();
        if (this.options.ns) {
          if (typeof e === "string") {
            e = [e];
          }
          e.forEach((e) => {
            if (n.options.ns.indexOf(e) < 0) {
              n.options.ns.push(e);
            }
          });
          this.loadResources(function (e) {
            i.resolve();
            if (t) {
              t(e);
            }
          });
          return i;
        }
        if (t) {
          t();
        }
        return Promise.resolve();
      },
    },
    {
      key: "loadLanguages",
      value: function (e, t) {
        const n = v();
        if (typeof e === "string") {
          e = [e];
        }
        const i = this.options.preload || [];
        const o = e.filter((e) => i.indexOf(e) < 0);
        if (o.length) {
          this.options.preload = i.concat(o);
          this.loadResources(function (e) {
            n.resolve();
            if (t) {
              t(e);
            }
          });
          return n;
        }
        if (t) {
          t();
        }
        return Promise.resolve();
      },
    },
    {
      key: "dir",
      value: function (e) {
        if (!e) {
          e =
            this.languages && this.languages.length > 0
              ? this.languages[0]
              : this.language;
        }
        if (e) {
          if (
            [
              "ar",
              "shu",
              "sqr",
              "ssh",
              "xaa",
              "yhd",
              "yud",
              "aao",
              "abh",
              "abv",
              "acm",
              "acq",
              "acw",
              "acx",
              "acy",
              "adf",
              "ads",
              "aeb",
              "aec",
              "afb",
              "ajp",
              "apc",
              "apd",
              "arb",
              "arq",
              "ars",
              "ary",
              "arz",
              "auz",
              "avl",
              "ayh",
              "ayl",
              "ayn",
              "ayp",
              "bbz",
              "pga",
              "he",
              "iw",
              "ps",
              "pbt",
              "pbu",
              "pst",
              "prp",
              "prd",
              "ug",
              "ur",
              "ydd",
              "yds",
              "yih",
              "ji",
              "yi",
              "hbo",
              "men",
              "xmn",
              "fa",
              "jpr",
              "peo",
              "pes",
              "prs",
              "dv",
              "sam",
            ].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >=
            0
          ) {
            return "rtl";
          }
          return "ltr";
        }
        return "rtl";
      },
    },
    {
      key: "createInstance",
      value: function () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};
        const n = arguments.length > 1 ? arguments[1] : undefined;
        return new t(e, n);
      },
    },
    {
      key: "cloneInstance",
      value: function () {
        const e = this;
        const n =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};
        const i =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : j;
        const o = c.A({}, this.options, n, {
          isClone: true,
        });
        const r = new t(o);
        ["store", "services", "language"].forEach((t) => {
          r[t] = e[t];
        });
        r.services = c.A({}, this.services);
        r.services.utils = {
          hasLoadedNamespace: r.hasLoadedNamespace.bind(r),
        };
        r.translator = new T(r.services, r.options);
        r.translator.on("*", function (e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
            i < t;
            i++
          ) {
            n[i - 1] = arguments[i];
          }
          r.emit.apply(r, [e].concat(n));
        });
        r.init(o, i);
        r.translator.options = r.options;
        r.translator.backendConnector.services.utils = {
          hasLoadedNamespace: r.hasLoadedNamespace.bind(r),
        };
        return r;
      },
    },
  ]);
  return t;
})(y))();
function F(e, t, n = null) {
  function i(e) {
    if (e && e.indexOf("###") > -1) {
      return e.replace(/###/g, ".");
    }
    return e;
  }
  function o() {
    return !e || typeof e === "string";
  }
  for (
    var r = typeof t !== "string" ? [].concat(t) : t.split(".");
    r.length > 1;
  ) {
    if (o()) {
      return {};
    }
    const s = i(r.shift());
    if (!e[s] && n) {
      e[s] = new n();
    }
    e = e[s];
  }
  if (o()) {
    return {};
  }
  return {
    obj: e,
    k: i(r.shift()),
  };
}
i = r || (r = {});
i.keepRaw = "keepRaw";
i.replaceAnyway = "replaceAnyway";
r.replaceAnyway;
const q = {
  memoize: false,
  memoizeFallback: false,
  bindI18n: false,
  bindI18nStore: false,
  onParseError: r.replaceAnyway,
};
const W = (function () {
  class e {
    constructor() {
      this.mem = {};
    }
    static staticInit(t) {
      e._i18nextInstance = t;
    }
    init(t, n) {
      const i = this;
      if (t === undefined) {
        t = e._i18nextInstance;
      }
      let o = {};
      if (t == null ? undefined : t.options) {
        if (t.options.i18nFormat) {
          o = t.options.i18nFormat;
        }
        o.onParseError = t.options.onParseError;
        o.missingInterpolationHandler = t.options.missingInterpolationHandler;
        o.icuConfig = t.options.icuConfig;
        o.ignoreWarning = !!t.options.ignoreWarning;
      }
      this.options = Object.assign(q, n, o);
      this.formats = this.options.formats;
      if (t) {
        const r = this.options;
        const s = r.bindI18n;
        const a = r.bindI18nStore;
        const c = r.memoize;
        t.IntlMessageFormat = S_1;
        this.IntlMessageFormat = S_1;
        t.ICU = this;
        if (c) {
          if (s) {
            t.on(s, function () {
              return i.clearCache();
            });
          }
          if (a) {
            t.store.on(a, function () {
              return i.clearCache();
            });
          }
        }
      }
      if (this.options.localeData) {
        if (
          Object.prototype.toString.apply(this.options.localeData) ===
          "[object Array]"
        ) {
          this.options.localeData.forEach((e) => i.addLocaleData(e));
        } else {
          this.addLocaleData(this.options.localeData);
        }
      }
    }
    addLocaleData(e) {
      (Object.prototype.toString.apply(e) === "[object Array]"
        ? e
        : [e]
      ).forEach((e) => {
        if (e && e.locale) {
          S_1.__addLocaleData(e);
        }
      });
    }
    addUserDefinedFormats(e) {
      this.formats = this.formats
        ? {
            ...this.formats,
            ...e,
          }
        : e;
    }
    checkMissingInterpolation(e, text, n, locale, o) {
      if ((this.options.icuConfig || {}).strict === false) {
        return n;
      }
      const s = {};
      for (let a = 0; a < e.length; a++) {
        const c = e[a];
        if (c.type === 1) {
          const l = c.value;
          if (n[l] === null || n[l] === undefined) {
            if (
              typeof this.options.missingInterpolationHandler === "function"
            ) {
              const u = this.options.missingInterpolationHandler({
                key: o,
                text,
                locale,
                interpolation: {
                  key: l,
                  val: n[l],
                },
              });
              if (typeof u === "string") {
                s[l] = u;
                continue;
              }
            }
            switch (this.options.onParseError) {
              case r.keepRaw:
                throw Error();
              case r.replaceAnyway:
                s[l] = "{" + l + "}";
                continue;
            }
            if (typeof this.options.onParseError === "function") {
              console.warn(
                "[DEPRECATED] onParseError is deprecated, please use 'missingInterpolationHandler' instead of",
              );
              const p = this.options.onParseError(
                text,
                l,
                locale,
                this.IntlMessageFormat,
              );
              if (p === true) {
                throw Error();
              }
              s[l] = typeof p === "string" ? p : "{" + l + "}";
            } else {
              if (!this.options.ignoreWarning) {
                console.warn(
                  '[Starling ICU Warning] The interpolation parameter "{' +
                    l +
                    '}" is missing in the translation text "' +
                    text +
                    '" for the key "' +
                    o +
                    "\"\nSuggestions: check whether the value is null or undefined. Try using empty string '' as fallback! e.g I18n.t('key', { apple: count || '' })",
                );
              }
              s[l] = "{" + l + "}";
            }
          }
        }
      }
      return {
        ...n,
        ...s,
      };
    }
    parse(e, t, n, i, o, r) {
      let s;
      let a;
      let c;
      let l;
      const u = r && r.resolved && r.resolved.res;
      const p =
        this.options.memoize && n + "." + i + "." + o.replace(/\./g, "###");
      if (!u && t.thirdParamFallback && t.fallbackText) {
        e = t.fallbackText;
      }
      if (this.options.memoize) {
        l = ((e, t) => {
          const n = F(e, t);
          const n_obj = n.obj;
          const o = n.k;
          if (n_obj) {
            return n_obj[o];
          }
        })(this.mem, p);
      }
      try {
        if (!l) {
          l = new this.IntlMessageFormat(
            e,
            n,
            this.formats,
            (this.options.icuConfig || {}).formatOptions,
          );
          if (
            this.options.memoize &&
            (this.options.memoizeFallback || !r || u)
          ) {
            s = this.mem;
            a = l;
            (c = F(s, p, Object)).obj[c.k] = a;
          }
        }
        return l.format(
          this.checkMissingInterpolation(l.getAst(), e, t || {}, n, o),
        );
      } catch (t) {
        return e;
      }
    }
    addLookupKeys(e, t, n, i, o) {
      return e;
    }
    clearCache() {
      this.mem = {};
    }
  }
  e.type = "i18nFormat";
  e._i18nextInstance = null;
  return e;
})();
W.name;
const J = /^\s*\[\[__starling_(\d+)_(.*)__\]\]\s*$/;
function X(e, t) {
  if (!(e instanceof t)) {
    throw TypeError("Cannot call a class as a function");
  }
}
function $(e, t) {
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    i.enumerable = i.enumerable || false;
    i.configurable = true;
    if ("value" in i) {
      i.writable = true;
    }
    Object.defineProperty(e, i.key, i);
  }
}
function Y(e, t, n) {
  if (t) {
    $(e.prototype, t);
  }
  if (n) {
    $(e, n);
  }
  Object.defineProperty(e, "prototype", {
    writable: false,
  });
  return e;
}
function Q(e, t) {
  if (e) {
    if (typeof e === "string") {
      return ee(e, t);
    }
    let n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor) {
      n = e.constructor.name;
    }
    if (n === "Map" || n === "Set") {
      return Array.from(e);
    }
    if (
      n === "Arguments" ||
      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
    ) {
      return ee(e, t);
    }
  }
}
function ee(e, t) {
  if (t == null || t > e.length) {
    t = e.length;
  }
  for (var n = 0, i = Array(t); n < t; n++) {
    i[n] = e[n];
  }
  return i;
}
if (typeof window !== "undefined") {
  window.__STARLING_INCONTEXT_GLOBAL__HOOK__ = {
    ...(window.__STARLING_INCONTEXT_GLOBAL__HOOK__ || {
      payload: {},
    }),
  };
}
for (
  var et = [
      "AFN",
      "EUR",
      "ALL",
      "DZD",
      "USD",
      "AOA",
      "XCD",
      "ARS",
      "AMD",
      "AWG",
      "AUD",
      "AZN",
      "BSD",
      "BHD",
      "BDT",
      "BBD",
      "BYN",
      "BZD",
      "XOF",
      "BMD",
      "INR",
      "BTN",
      "BOB",
      "BOV",
      "BAM",
      "BWP",
      "NOK",
      "BRL",
      "BND",
      "BGN",
      "BIF",
      "CVE",
      "KHR",
      "XAF",
      "CAD",
      "KYD",
      "CLP",
      "CLF",
      "CNY",
      "COP",
      "COU",
      "KMF",
      "CDF",
      "NZD",
      "CRC",
      "HRK",
      "CUP",
      "CUC",
      "ANG",
      "CZK",
      "DKK",
      "DJF",
      "DOP",
      "EGP",
      "SVC",
      "ERN",
      "ETB",
      "FKP",
      "FJD",
      "XPF",
      "GMD",
      "GEL",
      "GHS",
      "GIP",
      "GTQ",
      "GBP",
      "GNF",
      "GYD",
      "HTG",
      "HNL",
      "HKD",
      "HUF",
      "ISK",
      "IDR",
      "XDR",
      "IRR",
      "IQD",
      "ILS",
      "JMD",
      "JPY",
      "JOD",
      "KZT",
      "KES",
      "KPW",
      "KRW",
      "KWD",
      "KGS",
      "LAK",
      "LBP",
      "LSL",
      "ZAR",
      "LRD",
      "LYD",
      "CHF",
      "MOP",
      "MKD",
      "MGA",
      "MWK",
      "MYR",
      "MVR",
      "MRO",
      "MUR",
      "XUA",
      "MXN",
      "MXV",
      "MDL",
      "MNT",
      "MAD",
      "MZN",
      "MMK",
      "NAD",
      "NPR",
      "NIO",
      "NGN",
      "OMR",
      "PKR",
      "PAB",
      "PGK",
      "PYG",
      "PEN",
      "PHP",
      "PLN",
      "QAR",
      "RON",
      "RUB",
      "RWF",
      "SHP",
      "WST",
      "STD",
      "SAR",
      "RSD",
      "SCR",
      "SLL",
      "SGD",
      "XSU",
      "SBD",
      "SOS",
      "SSP",
      "LKR",
      "SDG",
      "SRD",
      "SZL",
      "SEK",
      "CHE",
      "CHW",
      "SYP",
      "TWD",
      "TJS",
      "TZS",
      "THB",
      "TOP",
      "TTD",
      "TND",
      "TRY",
      "TMT",
      "UGX",
      "UAH",
      "AED",
      "USN",
      "UYU",
      "UYI",
      "UZS",
      "VUV",
      "VEF",
      "VND",
      "YER",
      "ZMW",
      "ZWL",
      "XBA",
      "XBB",
      "XBC",
      "XBD",
      "XTS",
      "XXX",
      "XAU",
      "XPD",
      "XPT",
      "XAG",
    ],
    number = {},
    ei = 0;
  ei < et.length;
  ei++
) {
  number[et[ei]] = {
    style: "currency",
    currency: et[ei],
  };
}
const eo = {
  number,
};
const er = "languageTransformer";
function es(e) {
  return function (t) {
    return t.type === e;
  };
}
function ea(e, t) {
  let n = e;
  (t || []).map((t) => {
    n = t.process(e) || n;
  });
  return n;
}
const ec = {
  lng: "zh-CN",
  fallbackLng: ["en-US"],
  inContext: true,
};
const el = [
  W,
  {
    name: "inContext",
    type: "postProcessor",
    process: function (e, t, options, i) {
      if (
        !(window && document.getElementById("INCONTEXT-KEY-MATCH")) ||
        options.__STARLING_INCONTEXT_FLAG__
      ) {
        return e;
      }
      if (!window.__STARLING_INCONTEXT_GLOBAL_I18N__) {
        window.__STARLING_INCONTEXT_GLOBAL_I18N__ = i;
      }
      delete options.keySeparator;
      delete options.lngs;
      let o = 0;
      t = t.toString();
      if (J.test(t)) {
        var r = t.match(J);
        r[0];
        var s = r[1];
        var a = r[2];
        o = s;
        t = a;
      }
      if (J.test(e)) {
        var r = e.match(J);
        r[0];
        var s = r[1];
        var a = r[2];
        e = a;
      }
      if (window.__STARLING_INCONTEXT_GLOBAL__HOOK__.payload[t]) {
        const c = window.__STARLING_INCONTEXT_GLOBAL__HOOK__.payload[
          t
        ].findIndex(
          (e) => JSON.stringify(e.options) === JSON.stringify(options),
        );
        if (c > -1) {
          window.__STARLING_INCONTEXT_GLOBAL__HOOK__.payload[t][c].default = e;
          o = c;
        } else {
          o =
            window.__STARLING_INCONTEXT_GLOBAL__HOOK__.payload[t].push({
              options,
              default: e,
            }) - 1;
        }
      } else {
        window.__STARLING_INCONTEXT_GLOBAL__HOOK__.payload[t] = [
          {
            options,
            default: e,
          },
        ];
        o = 0;
      }
      return "[[__starling_" + o + "_" + t + "__]]";
    },
  },
];
const eu = (() => {
  function e(t, n) {
    X(this, e);
    this._waitingToAddResourceBundle = [];
    if (t != null && t.copiedI18nextInstance) {
      this.instance = t.copiedI18nextInstance;
      return;
    }
    this._handlePlugins(n);
    this._handleConfigs(t);
    this.instance = U.createInstance();
    this.instance.isInitialized = false;
  }
  Y(e, [
    {
      key: "_handlePlugins",
      value: function (e) {
        let t;
        let n;
        if (
          ((t = this.config) == null || (n = t.icuConfig) == null
            ? undefined
            : n.open) === false
        ) {
          el.shift();
        }
        this.plugins = Array.isArray(e) ? e.concat(el) : el;
      },
    },
    {
      key: "_handleConfigs",
      value: function (e) {
        this.userLng = (e == null ? undefined : e.lng) || null;
        this.config = {
          ...ec,
          ...(e || {}),
        };
      },
    },
    {
      key: "language",
      get: function () {
        return (this.instance || {}).language;
      },
    },
    {
      key: "createInstance",
      value: function () {
        const e = this;
        return new Promise((resolve, reject) => {
          if (
            typeof window !== "undefined" &&
            !window.CocosEngine &&
            e.config.inContext
          ) {
            e.config.postProcess = [].concat(
              ["inContext"],
              e.config.postProcess || [],
            );
            window.__STARLING_DEVTOOLS_I18N = e.instance;
          }
          e.plugins.map((t) => {
            if (t.name === "IES_INTL_ICU_PLUGIN") {
              t.staticInit(e.instance);
            }
            e.instance.use(t);
          });
          const e_config = e.config;
          e.config.formats = {
            ...e.config.formats,
            ...eo,
          };
          const lng = ea(e_config.lng, e.plugins.filter(es(er)));
          e.instance.init(
            {
              ...e_config,
              lng,
              i18nFormat: {
                formats: e.config.formats,
              },
            },
            function (i, o) {
              try {
                let r;
                const s = ((e) => {
                  let t =
                    (typeof Symbol !== "undefined" && e[Symbol.iterator]) ||
                    e["@@iterator"];
                  if (!t) {
                    if (Array.isArray(e) || (t = Q(e))) {
                      if (t) {
                        e = t;
                      }
                      let n = 0;
                      const i = function () {};
                      return {
                        s: i,
                        n: function () {
                          if (n >= e.length) {
                            return {
                              done: true,
                            };
                          }
                          return {
                            done: false,
                            value: e[n++],
                          };
                        },
                        e: function (e) {
                          throw e;
                        },
                        f: i,
                      };
                    }
                    throw TypeError(
                      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                  }
                  let o;
                  let r = true;
                  let s = false;
                  return {
                    s: function () {
                      t = t.call(e);
                    },
                    n: function () {
                      const e = t.next();
                      r = e.done;
                      return e;
                    },
                    e: function (e) {
                      s = true;
                      o = e;
                    },
                    f: function () {
                      try {
                        if (!(r || t.return == null)) {
                          t.return();
                        }
                      } finally {
                        if (s) {
                          throw o;
                        }
                      }
                    },
                  };
                })(e._waitingToAddResourceBundle);
                try {
                  for (s.s(); !(r = s.n()).done;) {
                    let a;
                    const c = r.value;
                    (a = e.instance).addResourceBundle.apply(a, [...c]);
                  }
                } catch (error) {
                  s.e(error);
                } finally {
                  s.f();
                }
                e._waitingToAddResourceBundle = [];
              } catch (e) {}
              if (!i) {
                e._updateLanguages();
                resolve({
                  t: o,
                  err: i,
                });
              }
              e.init = true;
              reject({
                t: o,
                err: i,
              });
            },
          );
        });
      },
    },
    {
      key: "_updateLanguages",
      value: function () {
        this.languages = this.instance
          ? Array.from(
              new Set([this.instance.language, ...this.instance.languages]),
            )
          : null;
      },
    },
    {
      key: "getLanguages",
      value: function () {
        return this.languages;
      },
    },
    {
      key: "changeLanguage",
      value: function (e, t) {
        const n = this;
        this.config.lng = e;
        this.instance.changeLanguage(e, function (e, i) {
          if (!e) {
            n._updateLanguages();
          }
          if (t) {
            t(e, i);
          }
        });
      },
    },
    {
      key: "changeLanguageWithPromise",
      value: function (e) {
        const t = this;
        return new Promise((resolve, reject) => {
          t.config.lng = e;
          t.instance.changeLanguage(e, function (e, o) {
            if (e) {
              reject({
                err: e,
                t: o,
              });
            }
            t._updateLanguages();
            resolve({
              err: e,
              t: o,
            });
          });
        });
      },
    },
    {
      key: "getDir",
      value: function (e) {
        return this.instance.dir(e);
      },
    },
    {
      key: "t",
      value: function (e, t, n) {
        const i = Array.isArray(e)
          ? Array.from(e)
              .map(() => " ")
              .join("")
          : Array(e.length).fill(" ");
        const o = {
          keySeparator: i,
          nsSeparator: i,
          ...t,
        };
        if (
          "thirdParamFallback" in this.config &&
          this.config.thirdParamFallback
        ) {
          o.thirdParamFallback = true;
        }
        return this.instance.t(e, n, o);
      },
    },
    {
      key: "addResourceBundle",
      value: function (e, t, n, i, o) {
        if (this.instance.isInitialized) {
          return this.instance.addResourceBundle(e, t, n, i, o);
        }
        this._waitingToAddResourceBundle.push([e, t, n, !!i, !!o]);
        return this.instance;
      },
    },
    {
      key: "cloneInstance",
      value: function (t, n) {
        const copiedI18nextInstance = this.instance.cloneInstance(t, n);
        const o = new e({
          copiedI18nextInstance,
        });
        o.t = this.t.bind(o);
        o.config = this.config;
        o.plugins = this.plugins;
        o.languages = this.languages;
        o.init = copiedI18nextInstance.isInitialized || !!this.init;
        o.userLng = this.userLng;
        copiedI18nextInstance.on("initialized", function () {
          o.init = true;
        });
        return o;
      },
    },
  ]);
  return e;
})();
const ep = "Starling_intl:";
const eh = function () {
  let e;
  for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) {
    n[i] = arguments[i];
  }
  (e = console).warn.apply(e, ["".concat(ep, " [WARNING]")].concat(n));
};
const ef = function () {
  let e;
  for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) {
    n[i] = arguments[i];
  }
  (e = console).error.apply(e, ["".concat(ep, " [ERROR]")].concat(n));
};
function eg(e, t, n) {
  if (n) {
    if (t) {
      return t(e);
    }
    return e;
  }
  if (!(e && e.then)) {
    e = Promise.resolve(e);
  }
  if (t) {
    return e.then(t);
  }
  return e;
}
function ed() {}
function em(e) {
  return function () {
    const t = [];
    for (let n = 0; n < arguments.length; n++) {
      t[n] = arguments[n];
    }
    try {
      return Promise.resolve(e.apply(this, t));
    } catch (error) {
      return Promise.reject(error);
    }
  };
}
o = s || (s = {});
o.intl3rdParty = "intl3rdParty";
o.backend = "backend";
o.logger = "logger";
o.languageDetector = "languageDetector";
o.postProcessor = "postProcessor";
o.i18nFormat = "i18nFormat";
o["3rdParty"] = "3rdParty";
export var OV = (() => {
  function e(t) {
    let n;
    X(this, e);
    this.plugins = [];
    this.i18nInstance =
      (n = t == null ? undefined : t.i18nInstance) != null ? n : new eu();
  }
  Y(e, [
    {
      key: "use",
      value: function (e) {
        if (this.plugins.includes(e)) {
          eh("Plugin: ".concat(e.name, " has beeninit installed."));
        } else {
          this.plugins.push(e);
        }
        return this;
      },
    },
    {
      key: "init",
      value: function (e, t) {
        try {
          const n = this;
          n.ignoreWarning = e.ignoreWarning;
          n.i18nInstance._handleConfigs(e);
          n.i18nInstance._handlePlugins(n.plugins);
          return eg(
            ((e, t) => {
              try {
                var n = e();
              } catch (error) {
                return t(error);
              }
              if (n && n.then) {
                return n.then(undefined, t);
              }
              return n;
            })(
              () =>
                eg(n.i18nInstance.createInstance(), function (e) {
                  let i;
                  const e_err = e.err;
                  const r = e.t;
                  const a = n.plugins.filter((e) => e.type === s.intl3rdParty);
                  return eg(
                    ((i = a.map(
                      em((e) => {
                        if (e && typeof e.init === "function") {
                          const t = (
                            e.init instanceof Promise
                              ? e.init
                              : em((t) => Promise.resolve(e.init(t)))
                          )(n);
                          if (t && t.then) {
                            return t.then(ed);
                          }
                          return Promise.resolve();
                        }
                      }),
                    )),
                    new Promise((resolve, reject) => {
                      if (!Array.isArray(i)) {
                        i = Array.from(i);
                      }
                      if (i.length <= 0) {
                        return resolve([]);
                      }
                      const n = [];
                      (i = i.map(
                        (o, r) =>
                          function () {
                            (typeof o === "function"
                              ? new Promise(o)
                              : Promise.resolve(o)
                            ).then((t) => {
                              n[r] = t;
                              if (r === i.length - 1) {
                                resolve(n);
                              } else {
                                i[r + 1]();
                              }
                            }, reject);
                          },
                      ))[0]();
                    })),
                    function () {
                      if (typeof t === "function") {
                        t(e_err, r);
                      }
                      return {
                        err: e_err,
                        t: r,
                      };
                    },
                  );
                }),
              function (e) {
                ef("The instance init error: ".concat(e));
                return {
                  err: e,
                  t: function (e) {
                    return e;
                  },
                };
              },
            ),
          );
        } catch (error) {
          return Promise.reject(error);
        }
      },
    },
    {
      key: "language",
      get: function () {
        return (this.i18nInstance || {}).language;
      },
    },
    {
      key: "setLang",
      value: function (e, t) {
        const n = ea(e, this.plugins.filter(es(er)));
        this.i18nInstance.changeLanguage(n, t);
      },
    },
    {
      key: "getLanguages",
      value: function () {
        return this.i18nInstance.getLanguages();
      },
    },
    {
      key: "setLangWithPromise",
      value: function (e) {
        const t = ea(e, this.plugins.filter(es(er)));
        return this.i18nInstance.changeLanguageWithPromise(t);
      },
    },
    {
      key: "dir",
      value: function (e) {
        return this.i18nInstance.getDir(e);
      },
    },
    {
      key: "t",
      value: function (e, t, n) {
        if (
          this.ignoreWarning ||
          (this.i18nInstance && this.i18nInstance.init)
        ) {
          if (e && (typeof e !== "string" || e.trim())) {
            return this.i18nInstance.t(e, t, n);
          }
          return "";
        }
        ef(
          "The instance has not been initialized: i18n.t('"
            .concat(e, "'")
            .concat(t ? "," + JSON.stringify(t) : "", ");"),
        );
        if (n != null) {
          return n;
        }
        if (Array.isArray(e)) {
          return e[0];
        }
        return e;
      },
    },
    {
      key: "addResourceBundle",
      value: function (e, t, n, i, o) {
        return this.i18nInstance.addResourceBundle(e, t, n, i, o);
      },
    },
    {
      key: "cloneInstance",
      value: function (t) {
        const n = new e({
          i18nInstance: this.i18nInstance.cloneInstance(t),
        });
        n.t = this.t.bind(n);
        n.plugins = this.plugins;
        n.ignoreWarning = this.ignoreWarning;
        return n;
      },
    },
  ]);
  return e;
})();
export var F2 = new OV();
export var Ay = F2;
