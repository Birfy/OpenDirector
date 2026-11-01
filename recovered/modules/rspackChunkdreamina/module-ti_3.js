import u from "NY";
import c from "oa";
import d from "bk";
import h from "qa";
import f from "rp";
import * as p from "./module-ND_2.js";
let a;
let o;
let i;
let l;
let s;
const v = (e) => {
  throw TypeError(e);
};
const m = (e, t, r) => t.has(e) || v("Cannot " + r);
const y = (e, t, r) => {
  m(e, t, "read from private field");
  if (r) {
    return r.call(e);
  }
  return t.get(e);
};
const g = (e, t, r) => {
  if (t.has(e)) {
    return v("Cannot add the same private member more than once");
  }
  if (t instanceof WeakSet) {
    return t.add(e);
  }
  return t.set(e, r);
};
const b = (e, t, r, n) => {
  m(e, t, "write to private field");
  if (n) {
    n.call(e, r);
  } else {
    t.set(e, r);
  }
  return r;
};
const E = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i;
const w = /^[\\/]{2}/;
function x(e, protocol) {
  return protocol + e.replace(/\\/g, "/");
}
const R = "popstate";
function S(e) {
  return (
    typeof e === "object" &&
    e != null &&
    "pathname" in e &&
    "search" in e &&
    "hash" in e &&
    "state" in e &&
    "key" in e
  );
}
function C(e, t) {
  if (e === false || e == null) {
    throw Error(t);
  }
}
function _(e, t) {
  if (!e) {
    if (typeof console !== "undefined") {
      console.warn(t);
    }
    try {
      throw Error(t);
    } catch (e) {}
  }
}
function k(e, idx) {
  return {
    usr: e.state,
    key: e.key,
    idx,
    masked: e.mask
      ? {
          pathname: e.pathname,
          search: e.search,
          hash: e.hash,
        }
      : undefined,
  };
}
function P(e, t) {
  const r =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  const n = arguments.length > 3 ? arguments[3] : undefined;
  const mask = arguments.length > 4 ? arguments[4] : undefined;
  return d._(
    c._(
      {
        pathname: typeof e === "string" ? e : e.pathname,
        search: "",
        hash: "",
      },
      typeof t === "string" ? O(t) : t,
    ),
    {
      state: r,
      key: (t && t.key) || n || Math.random().toString(36).substring(2, 10),
      mask,
    },
  );
}
function L(e) {
  let { pathname = "/", search = "", hash = "" } = e;
  if (search && search !== "?") {
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  }
  if (hash && hash !== "#") {
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  }
  return pathname;
}
function O(e) {
  const t = {};
  if (e) {
    const r = e.indexOf("#");
    if (r >= 0) {
      t.hash = e.substring(r);
      e = e.substring(0, r);
    }
    const n = e.indexOf("?");
    if (n >= 0) {
      t.search = e.substring(n);
      e = e.substring(0, n);
    }
    if (e) {
      t.pathname = e;
    }
  }
  return t;
}
function D(e, t, r) {
  const n =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  const { window = document.defaultView, v5Compat = false } = n;
  const window_history = window.history;
  let l = "POP";
  let s = null;
  let u = h();
  function h() {
    return (
      window_history.state || {
        idx: null,
      }
    ).idx;
  }
  function f() {
    l = "POP";
    const e = h();
    const delta = e == null ? null : e - u;
    u = e;
    if (s) {
      s({
        action: l,
        location: v.location,
        delta,
      });
    }
  }
  function createURL(e) {
    return T(window, e);
  }
  if (u == null) {
    u = 0;
    window_history.replaceState(
      d._(c._({}, window_history.state), {
        idx: u,
      }),
      "",
    );
  }
  var v = {
    get action() {
      return l;
    },
    get location() {
      return e(window, window_history);
    },
    listen(e) {
      if (s) {
        throw Error("A history only accepts one active listener");
      }
      window.addEventListener(R, f);
      s = e;
      return () => {
        window.removeEventListener(R, f);
        s = null;
      };
    },
    createHref: (e) => t(window, e),
    createURL,
    encodeLocation(e) {
      const t = createURL(e);
      return {
        pathname: t.pathname,
        search: t.search,
        hash: t.hash,
      };
    },
    push: function (e, t) {
      l = "PUSH";
      const n = S(e) ? e : P(v.location, e, t);
      if (r) {
        r(n, e);
      }
      const c = k(n, (u = h() + 1));
      const d = v.createHref(n.mask || n);
      try {
        window_history.pushState(c, "", d);
      } catch (error) {
        if (error instanceof DOMException && error.name === "DataCloneError") {
          throw error;
        }
        window.location.assign(d);
      }
      if (v5Compat && s) {
        s({
          action: l,
          location: v.location,
          delta: 1,
        });
      }
    },
    replace: function (e, t) {
      l = "REPLACE";
      const n = S(e) ? e : P(v.location, e, t);
      if (r) {
        r(n, e);
      }
      const a = k(n, (u = h()));
      const c = v.createHref(n.mask || n);
      window_history.replaceState(a, "", c);
      if (v5Compat && s) {
        s({
          action: l,
          location: v.location,
          delta: 0,
        });
      }
    },
    go: (e) => window_history.go(e),
  };
  return v;
}
function T(window, t) {
  const r = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  let n = "http://localhost";
  if (window) {
    n =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href;
  }
  C(n, "No window.location.(origin|href) available to create URL");
  let a = typeof t === "string" ? t : L(t);
  a = a.replace(/ $/, "%20");
  if (!r && w.test(a)) {
    a = n + a;
  }
  return new URL(a, n);
}
class A {
  get(e) {
    if (y(this, a).has(e)) {
      return y(this, a).get(e);
    }
    if (e.defaultValue !== undefined) {
      return e.defaultValue;
    }
    throw Error("No value found for context");
  }
  set(e, t) {
    y(this, a).set(e, t);
  }
  constructor(e) {
    g(this, a, new Map());
    if (e) {
      for (var [t, r] of e) {
        this.set(t, r);
      }
    }
  }
}
a = new WeakMap();
const M = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
const j = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "middleware",
  "children",
]);
function U(e, t) {
  const r =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  const n =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  const a = arguments.length > 4 && arguments[4] !== undefined && arguments[4];
  return e.map((e, o) => {
    var i = [...r, String(o)];
    var id = typeof e.id === "string" ? e.id : i.join("-");
    C(
      e.index !== true || !e.children,
      "Cannot specify children on an index route",
    );
    C(
      a || !n[id],
      'Found a route id collision on id "'.concat(
        id,
        "\".  Route id's must be globally unique within Data Router usages",
      ),
    );
    if (e.index === true) {
      var s = d._(c._({}, e), {
        id,
      });
      n[id] = N(s, t(s));
      return s;
    }
    var u = d._(c._({}, e), {
      id,
      children: undefined,
    });
    n[id] = N(u, t(u));
    if (e.children) {
      u.children = U(e.children, t, i, n, a);
    }
    return u;
  });
}
function N(e, t) {
  return Object.assign(
    e,
    c._(
      {},
      t,
      typeof t.lazy === "object" && t.lazy != null
        ? {
            lazy: c._({}, e.lazy, t.lazy),
          }
        : {},
    ),
  );
}
function F(e, t) {
  const r =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "/";
  return z(e, t, r, false);
}
function z(e, t, r, n, a) {
  const o = Y((typeof t === "string" ? O(t) : t).pathname || "/", r);
  if (o == null) {
    return null;
  }
  for (
    var i = a != null ? a : I(e),
      l = null,
      s = ((e) => {
        try {
          return e
            .split("/")
            .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
            .join("/");
        } catch (error) {
          _(
            false,
            'The URL path "'
              .concat(
                e,
                '" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (',
              )
              .concat(error, ")."),
          );
          return e;
        }
      })(o),
      u = 0;
    l == null && u < i.length;
    ++u
  ) {
    l = (function (e, t) {
      const r =
        arguments.length > 2 && arguments[2] !== undefined && arguments[2];
      for (
        var { routesMeta } = e, params = {}, o = "/", i = [], l = 0;
        l < routesMeta.length;
        ++l
      ) {
        const s = routesMeta[l];
        const end = l === routesMeta.length - 1;
        const c = o === "/" ? t : t.slice(o.length) || "/";
        const d = {
          path: s.relativePath,
          caseSensitive: s.caseSensitive,
          end,
        };
        let h =
          s.matcher && s.compiledParams
            ? V(d, c, s.matcher, s.compiledParams)
            : $(d, c);
        const f = s.route;
        if (!h && end && r && !routesMeta[routesMeta.length - 1].route.index) {
          h = $(
            {
              path: s.relativePath,
              caseSensitive: s.caseSensitive,
              end: false,
            },
            c,
          );
        }
        if (!h) {
          return null;
        }
        Object.assign(params, h.params);
        i.push({
          params,
          pathname: ee([o, h.pathname]),
          pathnameBase: er(ee([o, h.pathnameBase])),
          route: f,
        });
        if (h.pathnameBase !== "/") {
          o = ee([o, h.pathnameBase]);
        }
      }
      return i;
    })(i[u], s, n);
  }
  return l;
}
function H(e, loaderData) {
  const { route, pathname, params } = e;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    loaderData: loaderData[route.id],
    handle: route.handle,
  };
}
function I(e) {
  const t = (function e(t) {
    const r =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    const n =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    const a =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
    const o =
      arguments.length > 4 && arguments[4] !== undefined && arguments[4];
    const i = function (t, childrenIndex) {
      let l;
      let s;
      let u;
      let h;
      const f =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : o;
      const p = arguments.length > 3 ? arguments[3] : undefined;
      const v = {
        relativePath: p === undefined ? t.path || "" : p,
        caseSensitive: t.caseSensitive === true,
        childrenIndex,
        route: t,
      };
      if (v.relativePath.startsWith("/")) {
        if (!v.relativePath.startsWith(a) && f) {
          return;
        }
        C(
          v.relativePath.startsWith(a),
          'Absolute route path "'
            .concat(v.relativePath, '" nested under path "')
            .concat(
              a,
              '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
            ),
        );
        v.relativePath = v.relativePath.slice(a.length);
      }
      const m = ee([a, v.relativePath]);
      const y = n.concat(v);
      if (t.children && t.children.length > 0) {
        C(
          t.index !== true,
          'Index routes must not have child routes. Please remove all child routes from route path "'.concat(
            m,
            '".',
          ),
        );
        e(t.children, r, y, m, f);
      }
      if (t.path != null || t.index) {
        r.push({
          path: m,
          score:
            ((l = m),
            (s = t.index),
            (h = (u = l.split("/")).length),
            u.some(W) && (h += -2),
            s && (h += 2),
            u
              .filter((e) => !W(e))
              .reduce(
                (acc, item) => acc + (B.test(item) ? 3 : item === "" ? 1 : 10),
                h,
              )),
          routesMeta: y.map((e, t) => {
            var [matcher, compiledParams] = q(
              e.relativePath,
              e.caseSensitive,
              t === y.length - 1,
            );
            return d._(c._({}, e), {
              matcher,
              compiledParams,
            });
          }),
        });
      }
    };
    t.forEach((e, t) => {
      var r;
      if (
        e.path !== "" &&
        ((r = e.path) == null ? undefined : r.includes("?"))
      ) {
        for (var n of (function e(t) {
          const r = t.split("/");
          if (r.length === 0) {
            return [];
          }
          const [n, ...a] = r;
          const o = n.endsWith("?");
          const i = n.replace(/\?$/, "");
          if (a.length === 0) {
            if (o) {
              return [i, ""];
            }
            return [i];
          }
          const l = e(a.join("/"));
          const s = [];
          s.push(
            ...l.map((e) => {
              if (e === "") {
                return i;
              }
              return [i, e].join("/");
            }),
          );
          if (o) {
            s.push(...l);
          }
          return s.map((e) => {
            if (t.startsWith("/") && e === "") {
              return "/";
            }
            return e;
          });
        })(e.path)) {
          i(e, t, true, n);
        }
      } else {
        i(e, t);
      }
    });
    return r;
  })(e);
  t.sort((e, t) => {
    var r;
    var n;
    if (e.score !== t.score) {
      return t.score - e.score;
    }
    r = e.routesMeta.map((e) => e.childrenIndex);
    n = t.routesMeta.map((e) => e.childrenIndex);
    if (r.length === n.length && r.slice(0, -1).every((e, t) => e === n[t])) {
      return r[r.length - 1] - n[n.length - 1];
    }
    return 0;
  });
  return t;
}
var B = /^:[\w-]+$/;
var W = (e) => e === "*";
function $(e, t) {
  if (typeof e === "string") {
    e = {
      path: e,
      caseSensitive: false,
      end: true,
    };
  }
  const [r, n] = q(e.path, e.caseSensitive, e.end);
  return V(e, t, r, n);
}
function V(e, t, r, n) {
  const a = t.match(r);
  if (!a) {
    return null;
  }
  const o = a[0];
  let pathnameBase = et(o, 1);
  const l = a.slice(1);
  return {
    params: n.reduce((acc, item, index) => {
      var { paramName, isOptional } = item;
      if (paramName === "*") {
        var s = l[index] || "";
        pathnameBase = et(o.slice(0, o.length - s.length), 1);
      }
      var u = l[index];
      if (isOptional && !u) {
        acc[paramName] = undefined;
      } else {
        acc[paramName] = (u || "").replace(/%2F/g, "/");
      }
      return acc;
    }, {}),
    pathname: o,
    pathnameBase,
    pattern: e,
  };
}
function q(e) {
  const t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  const r =
    !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
  _(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    'Route path "'
      .concat(e, '" will be treated as if it were "')
      .concat(
        e.replace(/\*$/, "/*"),
        '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "',
      )
      .concat(e.replace(/\*$/, "/*"), '".'),
  );
  const n = [];
  let a =
    "^" +
    e
      .replace(/\/*\*?$/, "")
      .replace(/^\/*/, "/")
      .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
      .replace(/\/:([\w-]+)(\?)?/g, (e, paramName, r, a, o) => {
        n.push({
          paramName,
          isOptional: r != null,
        });
        if (r) {
          var i = o.charAt(a + e.length);
          if (i && i !== "/") {
            return "/([^\\/]*)";
          }
          return "(?:/([^\\/]*))?";
        }
        return "/([^\\/]+)";
      })
      .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  if (e.endsWith("*")) {
    n.push({
      paramName: "*",
    });
    a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (r) {
    a += "\\/*$";
  } else if (e !== "" && e !== "/") {
    a += "(?:(?=\\/|$))";
  }
  return [new RegExp(a, t ? undefined : "i"), n];
}
function Y(e, t) {
  if (t === "/") {
    return e;
  }
  if (!e.toLowerCase().startsWith(t.toLowerCase())) {
    return null;
  }
  const r = t.endsWith("/") ? t.length - 1 : t.length;
  const n = e.charAt(r);
  if (n && n !== "/") {
    return null;
  }
  return e.slice(r) || "/";
}
function J(e, t) {
  const r = et(t).split("/");
  e.split("/").forEach((e) => {
    if (e === "..") {
      if (r.length > 1) {
        r.pop();
      }
    } else if (e !== ".") {
      r.push(e);
    }
  });
  if (r.length > 1) {
    return r.join("/");
  }
  return "/";
}
function K(e, t, r, n) {
  return "Cannot include a '"
    .concat(e, "' character in a manually specified `to.")
    .concat(t, "` field [")
    .concat(JSON.stringify(n), "].  Please separate it out to the `to.")
    .concat(
      r,
      '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.',
    );
}
function G(e) {
  return e.filter(
    (e, t) => t === 0 || (e.route.path && e.route.path.length > 0),
  );
}
function X(e) {
  const t = G(e);
  return t.map((e, r) => {
    if (r === t.length - 1) {
      return e.pathname;
    }
    return e.pathnameBase;
  });
}
function Q(e, t, r) {
  let n;
  let a;
  const o = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
  if (typeof e === "string") {
    n = O(e);
  } else {
    C(
      !(n = c._({}, e)).pathname || !n.pathname.includes("?"),
      K("?", "pathname", "search", n),
    );
    C(!n.pathname || !n.pathname.includes("#"), K("#", "pathname", "hash", n));
    C(!n.search || !n.search.includes("#"), K("#", "search", "hash", n));
  }
  const i = e === "" || n.pathname === "";
  const l = i ? "/" : n.pathname;
  if (l == null) {
    a = r;
  } else {
    let s = t.length - 1;
    if (!o && l.startsWith("..")) {
      for (var u = l.split("/"); u[0] === "..";) {
        u.shift();
        s -= 1;
      }
      n.pathname = u.join("/");
    }
    a = s >= 0 ? t[s] : "/";
  }
  const d = (function (e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
    let { pathname, search = "", hash = "" } = typeof e === "string" ? O(e) : e;
    return {
      pathname: pathname
        ? (pathname = Z(pathname)).startsWith("/") || pathname.startsWith("\\")
          ? J(pathname.substring(1), "/")
          : J(pathname, t)
        : t,
      search: en(search),
      hash: ea(hash),
    };
  })(n, a);
  const h = l && l !== "/" && l.endsWith("/");
  const f = (i || l === ".") && r.endsWith("/");
  if (!d.pathname.endsWith("/") && (h || f)) {
    d.pathname += "/";
  }
  return d;
}
var Z = (e) => e.replace(/[\\/]{2,}/g, "/");
var ee = (e) => Z(e.join("/"));
function et(e) {
  for (
    var t =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0,
      r = e.length;
    r > t && e.charCodeAt(r - 1) === 47;
  ) {
    r--;
  }
  if (r === e.length) {
    return e;
  }
  return e.slice(0, r);
}
var er = (e) => et(e).replace(/^\/*/, "/");
var en = (search) => {
  if (search && search !== "?") {
    if (search.startsWith("?")) {
      return search;
    }
    return "?" + search;
  }
  return "";
};
var ea = (hash) => {
  if (hash && hash !== "#") {
    if (hash.startsWith("#")) {
      return hash;
    }
    return "#" + hash;
  }
  return "";
};
const eo = [
  "EvalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError",
];
export var cj = class {
  constructor(e, t, r, n = false) {
    this.status = e;
    this.statusText = t || "";
    this.internal = n;
    if (r instanceof Error) {
      this.data = r.toString();
      this.error = r;
    } else {
      this.data = r;
    }
  }
};
function el(e) {
  return (
    e != null &&
    typeof e.status === "number" &&
    typeof e.statusText === "string" &&
    typeof e.internal === "boolean" &&
    "data" in e
  );
}
function es(e) {
  return ee(e.map((e) => e.route.path).filter(Boolean)) || "/";
}
const eu =
  typeof window !== "undefined" &&
  window.document !== undefined &&
  window.document.createElement !== undefined;
function ec(e, basename) {
  let to_1 = e;
  if (typeof to_1 !== "string" || !E.test(to_1)) {
    return {
      absoluteURL: undefined,
      isExternal: false,
      to: to_1,
    };
  }
  const absoluteURL = to_1;
  let isExternal = false;
  if (eu) {
    try {
      const o = new URL(window.location.href);
      const i = new URL(w.test(to_1) ? x(to_1, o.protocol) : to_1);
      const l = Y(i.pathname, basename);
      if (i.origin === o.origin && l != null) {
        to_1 = l + i.search + i.hash;
      } else {
        isExternal = true;
      }
    } catch (e) {
      _(
        false,
        '<Link to="'.concat(
          to_1,
          '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.',
        ),
      );
    }
  }
  return {
    absoluteURL,
    isExternal,
    to: to_1,
  };
}
const ed = Symbol("Uninstrumented");
function eh(e, t, r) {
  if (e.length === 0) {
    return null;
  }
  return function () {
    for (var n = arguments.length, a = Array(n), o = 0; o < n; o++) {
      a[o] = arguments[o];
    }
    return u._(function* () {
      const n = yield (function e(t, r, n, a) {
        return u._(function* () {
          let o;
          const i = t[a];
          if (i) {
            let l;
            const s = () =>
              u._(function* () {
                if (l) {
                  console.error(
                    "You cannot call instrumented handlers more than once",
                  );
                } else {
                  l = e(t, r, n, a - 1);
                }
                C((o = yield l), "Expected a result");
                if (o.type === "error" && o.value instanceof Error) {
                  return {
                    status: "error",
                    error: o.value,
                  };
                }
                return {
                  status: "success",
                  error: undefined,
                };
              })();
            try {
              yield i(s, r);
            } catch (error) {
              console.error(
                "An instrumentation function threw an error:",
                error,
              );
            }
            if (!l) {
              yield s();
            }
            yield l;
          } else {
            try {
              const c = yield n();
              o = {
                type: "success",
                value: c,
              };
            } catch (error) {
              o = {
                type: "error",
                value: error,
              };
            }
          }
          return (
            o || {
              type: "error",
              value: Error("No result assigned in instrumentation chain."),
            }
          );
        })();
      })(e, r(...a), () => t(...a), e.length - 1);
      if (n.type === "error") {
        throw n.value;
      }
      return n.value;
    })();
  };
}
function ef(e) {
  let t;
  const { request, context, params, pattern } = e;
  return {
    request: {
      method: (t = request).method,
      url: t.url,
      headers: {
        get: function () {
          for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) {
            r[n] = arguments[n];
          }
          return t.headers.get(...r);
        },
      },
    },
    params: c._({}, params),
    pattern,
    context: ((e) => {
      if (
        !((e) => {
          if (e === null || typeof e !== "object") {
            return false;
          }
          const t = Object.getPrototypeOf(e);
          return (
            t === Object.prototype ||
            t === null ||
            Object.getOwnPropertyNames(t).sort().join("\0") === ev
          );
        })(e)
      ) {
        return {
          get: (t) => e.get(t),
        };
      }
      const t = c._({}, e);
      Object.freeze(t);
      return t;
    })(context),
  };
}
function ep(e, t) {
  return c._(
    {
      currentUrl: L(e.state.location),
    },
    "formMethod" in t
      ? {
          formMethod: t.formMethod,
        }
      : {},
    "formEncType" in t
      ? {
          formEncType: t.formEncType,
        }
      : {},
    "formData" in t
      ? {
          formData: t.formData,
        }
      : {},
    "body" in t
      ? {
          body: t.body,
        }
      : {},
  );
}
var ev = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
const em = new URL("http://localhost");
function ey(navigator) {
  if (navigator.createURL) {
    return navigator.createURL("/");
  }
  try {
    return new URL(navigator.createHref("/"), em);
  } catch (e) {
    return em;
  }
}
function eg(e, t) {
  return (
    e.origin === t.origin &&
    (e.origin !== "null" || (e.protocol === t.protocol && e.host === t.host))
  );
}
function eb(e, t, r, n) {
  let a = null;
  try {
    a = e == null ? null : new URL(e, r);
  } catch (e) {}
  const o = new URL(t, r);
  const i = a != null && !eg(a, r);
  const l = !eg(o, r);
  if (n === "reject") {
    if (i || l) {
      throw Error("External navigation is not allowed");
    }
  } else if (
    l &&
    (a == null ||
      !((e, t) => {
        if (e.startsWith("//")) {
          return true;
        }
        const r = t.protocol.toLowerCase();
        return (
          !!e.toLowerCase().startsWith(r) &&
          (t.host === "" || e.slice(r.length).startsWith("//"))
        );
      })(e, a) ||
      !eg(a, o))
  ) {
    throw Error("External navigation is not allowed");
  }
}
const eE = ["POST", "PUT", "PATCH", "DELETE"];
const ew = new Set(eE);
const ex = new Set(["GET", ...eE]);
const eR = new Set([301, 302, 303, 307, 308]);
const eS = new Set([307, 308]);
const eC = {
  state: "idle",
  location: undefined,
  matches: undefined,
  historyAction: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined,
  json: undefined,
  text: undefined,
};
const e_ = {
  state: "idle",
  data: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined,
  json: undefined,
  text: undefined,
};
const ek = {
  state: "unblocked",
  proceed: undefined,
  reset: undefined,
  location: undefined,
};
const eP = (e) => ({
  hasErrorBoundary: !!e.hasErrorBoundary,
});
const eL = "remix-router-transitions";
const eO = Symbol("ResetLoaderData");
class eD {
  get stableRoutes() {
    return y(this, o);
  }
  get activeRoutes() {
    let e;
    if ((e = y(this, l)) != null) {
      return e;
    }
    return y(this, o);
  }
  get branches() {
    let e;
    if ((e = y(this, s)) != null) {
      return e;
    }
    return y(this, i);
  }
  get hasHMRRoutes() {
    return y(this, l) != null;
  }
  setRoutes(e) {
    b(this, o, e);
    b(this, i, I(e));
  }
  setHmrRoutes(e) {
    b(this, l, e);
    b(this, s, I(e));
  }
  commitHmrRoutes() {
    if (y(this, l)) {
      b(this, o, y(this, l));
      b(this, i, y(this, s));
      b(this, l, undefined);
      b(this, s, undefined);
    }
  }
  constructor(e) {
    g(this, o);
    g(this, i);
    g(this, l);
    g(this, s);
    b(this, o, e);
    b(this, i, I(e));
  }
}
function eT(e) {
  let initialized;
  let renderFallback;
  let n;
  let a;
  const window_1 = e.window
    ? e.window
    : typeof window !== "undefined"
      ? window
      : undefined;
  const i =
    window_1 !== undefined &&
    window_1.document !== undefined &&
    window_1.document.createElement !== undefined;
  C(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  const l = e.hydrationRouteProperties || [];
  const s = e.mapRouteProperties || eP;
  let h = s;
  if (e.instrumentations) {
    const p = e.instrumentations;
    h = (e) =>
      c._(
        {},
        s(e),
        ((e, t) => {
          const r = {
            lazy: [],
            "lazy.loader": [],
            "lazy.action": [],
            "lazy.middleware": [],
            middleware: [],
            loader: [],
            action: [],
          };
          e.forEach((e) =>
            e({
              id: t.id,
              index: t.index,
              path: t.path,
              instrument(e) {
                for (const t of Object.keys(r)) {
                  if (e[t]) {
                    r[t].push(e[t]);
                  }
                }
              },
            }),
          );
          const n = {};
          if (typeof t.lazy === "function" && r.lazy.length > 0) {
            const a = eh(r.lazy, t.lazy, () => undefined);
            if (a) {
              n.lazy = a;
            }
          }
          if (typeof t.lazy === "object") {
            const o = t.lazy;
            ["middleware", "loader", "action"].forEach((e) => {
              var t = o[e];
              var a = r["lazy.".concat(e)];
              if (typeof t === "function" && a.length > 0) {
                var i = eh(a, t, () => undefined);
                if (i) {
                  n.lazy = Object.assign(n.lazy || {}, {
                    [e]: i,
                  });
                }
              }
            });
          }
          ["loader", "action"].forEach((e) => {
            var a = t[e];
            if (typeof a === "function" && r[e].length > 0) {
              var o;
              var i = (o = a[ed]) != null ? o : a;
              var l = eh(r[e], i, function () {
                for (
                  var e = arguments.length, t = Array(e), r = 0;
                  r < e;
                  r++
                ) {
                  t[r] = arguments[r];
                }
                return ef(t[0]);
              });
              if (l) {
                if (e === "loader" && i.hydrate === true) {
                  l.hydrate = true;
                }
                l[ed] = i;
                n[e] = l;
              }
            }
          });
          if (
            t.middleware &&
            t.middleware.length > 0 &&
            r.middleware.length > 0
          ) {
            n.middleware = t.middleware.map((e) => {
              var t;
              var n = (t = e[ed]) != null ? t : e;
              var a = eh(r.middleware, n, function () {
                for (
                  var e = arguments.length, t = Array(e), r = 0;
                  r < e;
                  r++
                ) {
                  t[r] = arguments[r];
                }
                return ef(t[0]);
              });
              if (a) {
                a[ed] = n;
                return a;
              }
              return e;
            });
          }
          return n;
        })(p.map((e) => e.route).filter(Boolean), e),
      );
  }
  let v = {};
  const m = new eD(U(e.routes, h, undefined, v));
  let y = e.basename || "/";
  if (!y.startsWith("/")) {
    y = "/".concat(y);
  }
  const g = e.dataStrategy || e$;
  const future = c._({}, e.future);
  let x = null;
  const R = new Set();
  let S = null;
  let k = null;
  let D = null;
  let M = null;
  let j = e.hydrationData != null;
  let N = z(m.activeRoutes, e.history.location, y, false, m.branches);
  let F = false;
  let I = null;
  if (N != null || e.patchRoutesOnNavigation) {
    if (
      N &&
      !e.hydrationData &&
      tw(N, m.activeRoutes, e.history.location.pathname).active
    ) {
      N = null;
    }
    if (N) {
      if (N.some((e) => e.route.lazy)) {
        initialized = false;
        renderFallback = true;
      } else if (N.some((e) => eU(e.route))) {
        const B = e.hydrationData ? e.hydrationData.loaderData : null;
        const W = e.hydrationData ? e.hydrationData.errors : null;
        let $ = N;
        if (W) {
          const V = N.findIndex((e) => W[e.route.id] !== undefined);
          $ = $.slice(0, V + 1);
        }
        renderFallback = false;
        initialized = true;
        $.forEach((e) => {
          var n = eN(e.route, B, W);
          renderFallback = renderFallback || n.renderFallback;
          initialized = initialized && !n.shouldLoad;
        });
      } else {
        initialized = true;
        renderFallback = false;
      }
    } else {
      initialized = false;
      renderFallback = true;
      N = [];
      const q = tw(null, m.activeRoutes, e.history.location.pathname);
      if (q.active && q.matches) {
        F = true;
        N = q.matches;
      }
    }
  } else {
    const J = e5(404, {
      pathname: e.history.location.pathname,
    });
    const { matches, route } = e8(m.activeRoutes);
    initialized = true;
    renderFallback = false;
    N = matches;
    I = {
      [route.id]: J,
    };
  }
  let X = {
    historyAction: e.history.action,
    location: e.history.location,
    matches: N,
    initialized,
    renderFallback,
    navigation: eC,
    restoreScrollPosition: e.hydrationData == null && null,
    preventScrollReset: false,
    revalidation: "idle",
    loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
    actionData: (e.hydrationData && e.hydrationData.actionData) || null,
    errors: (e.hydrationData && e.hydrationData.errors) || I,
    fetchers: new Map(),
    blockers: new Map(),
  };
  let Q = "POP";
  let Z = null;
  let ee = false;
  let et = false;
  const er = new Map();
  let en = null;
  let ea = false;
  let eo = false;
  const eu = new Set();
  const _internalFetchControllers = new Map();
  let ev = 0;
  let em = -1;
  const ey = new Map();
  const eg = new Set();
  const eE = new Map();
  const ew = new Map();
  const ex = new Set();
  const eO = new Map();
  let eT;
  let eF = null;
  function eH(e) {
    let t;
    const r =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (e.matches) {
      e.matches = e.matches.map((e) => {
        var t = v[e.route.id];
        var e_route = e.route;
        if (
          e_route.element !== t.element ||
          e_route.errorElement !== t.errorElement ||
          e_route.hydrateFallbackElement !== t.hydrateFallbackElement
        ) {
          return d._(c._({}, e), {
            route: t,
          });
        }
        return e;
      });
    }
    const deletedFetchers = [];
    const a = [];
    (X = c._({}, X, e)).fetchers.forEach((e, t) => {
      if (e.state === "idle") {
        if (ex.has(t)) {
          deletedFetchers.push(t);
        } else {
          a.push(t);
        }
      }
    });
    ex.forEach((e) => {
      if (!(X.fetchers.has(e) || _internalFetchControllers.has(e))) {
        deletedFetchers.push(e);
      }
    });
    if (R.size === 0) {
      S = {
        newErrors: (t = e.errors) != null ? t : null,
      };
    }
    [...R].forEach((t) => {
      var a;
      return t(X, {
        deletedFetchers,
        newErrors: (a = e.errors) != null ? a : null,
        viewTransitionOpts: r.viewTransitionOpts,
        flushSync: r.flushSync === true,
      });
    });
    deletedFetchers.forEach((e) => e9(X.fetchers, e));
    a.forEach((e) => X.fetchers.delete(e));
  }
  function eI(t, r) {
    let n;
    let a;
    let o;
    let viewTransitionOpts;
    const { flushSync } =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const s =
      X.actionData != null &&
      X.navigation.formMethod != null &&
      to(X.navigation.formMethod) &&
      X.navigation.state === "loading" &&
      ((n = t.state) == null ? undefined : n._isRedirect) !== true;
    o = r.actionData
      ? Object.keys(r.actionData).length > 0
        ? r.actionData
        : null
      : s
        ? X.actionData
        : null;
    const loaderData = r.loaderData
      ? e3(X.loaderData, r.loaderData, r.matches || [], r.errors)
      : X.loaderData;
    let X_blockers = X.blockers;
    if (X_blockers.size > 0) {
      (X_blockers = new Map(X_blockers)).forEach((e, t) =>
        X_blockers.set(t, ek),
      );
    }
    const restoreScrollPosition = !ea && tE(t, r.matches || X.matches);
    const p =
      ee === true ||
      (X.navigation.formMethod != null &&
        to(X.navigation.formMethod) &&
        ((a = t.state) == null ? undefined : a._isRedirect) !== true);
    m.commitHmrRoutes();
    if (!(ea || Q === "POP")) {
      if (Q === "PUSH") {
        e.history.push(t, t.state);
      } else if (Q === "REPLACE") {
        e.history.replace(t, t.state);
      }
    }
    if (Q !== "POP" || ea || t === X.location) {
      if (et) {
        let v = er.get(X.location.pathname);
        if (v) {
          v.add(t.pathname);
        } else {
          v = new Set([t.pathname]);
          er.set(X.location.pathname, v);
        }
        viewTransitionOpts = {
          currentLocation: X.location,
          nextLocation: t,
        };
      }
    } else {
      const y = er.get(X.location.pathname);
      if (y && y.has(t.pathname)) {
        viewTransitionOpts = {
          currentLocation: X.location,
          nextLocation: t,
        };
      } else if (er.has(t.pathname)) {
        viewTransitionOpts = {
          currentLocation: t,
          nextLocation: X.location,
        };
      }
    }
    eH(
      d._(c._({}, r), {
        actionData: o,
        loaderData,
        historyAction: Q,
        location: t,
        initialized: true,
        renderFallback: false,
        navigation: eC,
        revalidation: "idle",
        restoreScrollPosition,
        preventScrollReset: p,
        blockers: X_blockers,
      }),
      {
        viewTransitionOpts,
        flushSync: flushSync === true,
      },
    );
    Q = "POP";
    ee = false;
    et = false;
    ea = false;
    eo = false;
    if (Z != null) {
      Z.resolve();
    }
    Z = null;
    if (eF != null) {
      eF.resolve();
    }
    eF = null;
  }
  function eB(t, r, n) {
    return u._(function* () {
      if (a) {
        a.abort();
      }
      a = null;
      Q = t;
      ea = (n && n.startUninterruptedRevalidation) === true;
      O = X.location;
      D = X.matches;
      if (k && M) {
        k[tb(O, D)] = M();
      }
      ee = (n && n.preventScrollReset) === true;
      et = (n && n.enableViewTransition) === true;
      let o;
      let i;
      let s;
      let f;
      let p;
      let g;
      let b;
      let E;
      let w;
      let x;
      let R;
      let S;
      let C;
      let _;
      let P;
      let L;
      var O;
      var D;
      let T;
      const m_activeRoutes = m.activeRoutes;
      let U =
        (n == null ? undefined : n.initialHydration) &&
        X.matches &&
        X.matches.length > 0 &&
        !F
          ? X.matches
          : z(m_activeRoutes, r, y, false, m.branches);
      let N = (n && n.flushSync) === true;
      if (
        U &&
        X.initialized &&
        !eo &&
        ((o = X.location),
        (i = r),
        o.pathname === i.pathname &&
          o.search === i.search &&
          (o.hash === ""
            ? i.hash !== ""
            : o.hash === i.hash || i.hash !== "" || false)) &&
        !(n && n.submission && to(n.submission.formMethod))
      ) {
        return void eI(
          r,
          {
            matches: U,
          },
          {
            flushSync: N,
          },
        );
      }
      const H = tw(U, m_activeRoutes, r.pathname);
      if (H.active && H.matches) {
        U = H.matches;
      }
      if (!U) {
        const { error, notFoundMatches, route } = tg(r.pathname);
        eI(
          r,
          {
            matches: notFoundMatches,
            loaderData: {},
            errors: {
              [route.id]: error,
            },
          },
          {
            flushSync: N,
          },
        );
        return;
      }
      let $ =
        n && n.overrideNavigation
          ? d._(c._({}, n.overrideNavigation), {
              matches: U,
              historyAction: t,
            })
          : undefined;
      a = new AbortController();
      let V = eQ(e.history, r, a.signal, n && n.submission);
      const q = e.getContext ? yield e.getContext() : new A();
      if (n && n.pendingError) {
        T = [
          e7(U).route.id,
          {
            type: "error",
            error: n.pendingError,
          },
        ];
      } else if (n && n.submission && to(n.submission.formMethod)) {
        const Y = yield (function (t, r, n, a, o, i, s, c) {
          return u
            ._(function* (t, r, n, a, o, i, s, u) {
              let c;
              let d;
              let f;
              let p;
              let g;
              const b =
                arguments.length > 8 && arguments[8] !== undefined
                  ? arguments[8]
                  : {};
              eG();
              eH(
                {
                  navigation:
                    ((c = r),
                    (d = a),
                    {
                      state: "submitting",
                      location: c,
                      matches: d,
                      historyAction: o,
                      formMethod: (f = n).formMethod,
                      formAction: f.formAction,
                      formEncType: f.formEncType,
                      formData: f.formData,
                      json: f.json,
                      text: f.text,
                    }),
                },
                {
                  flushSync: b.flushSync === true,
                },
              );
              if (s) {
                const E = yield tx(a, r.pathname, t.signal);
                if (E.type === "aborted") {
                  return {
                    shortCircuited: true,
                  };
                }
                if (E.type === "error") {
                  if (E.partialMatches.length === 0) {
                    const { matches, route } = e8(m.activeRoutes);
                    return {
                      matches,
                      pendingActionResult: [
                        route.id,
                        {
                          type: "error",
                          error: E.error,
                        },
                      ],
                    };
                  }
                  const R = e7(E.partialMatches).route.id;
                  return {
                    matches: E.partialMatches,
                    pendingActionResult: [
                      R,
                      {
                        type: "error",
                        error: E.error,
                      },
                    ],
                  };
                }
                if (E.matches) {
                  a = E.matches;
                } else {
                  const { notFoundMatches, error, route } = tg(r.pathname);
                  return {
                    matches: notFoundMatches,
                    pendingActionResult: [
                      route.id,
                      {
                        type: "error",
                        error,
                      },
                    ],
                  };
                }
              }
              const k = tl(a, r);
              if (k.route.action || k.route.lazy) {
                const P = eJ(h, v, t, r, a, k, u ? [] : l, i);
                const L = yield eY(t, r, P, i, null);
                if (!(p = L[k.route.id])) {
                  for (const O of a) {
                    if (L[O.route.id]) {
                      p = L[O.route.id];
                      break;
                    }
                  }
                }
                if (t.signal.aborted) {
                  return {
                    shortCircuited: true,
                  };
                }
              } else {
                p = {
                  type: "error",
                  error: e5(405, {
                    method: t.method,
                    pathname: r.pathname,
                    routeId: k.route.id,
                  }),
                };
              }
              if (tr(p)) {
                g =
                  b && b.replace != null
                    ? b.replace
                    : eX(
                        p.response.headers.get("Location"),
                        new URL(t.url),
                        y,
                        e.history,
                      ) ===
                      X.location.pathname + X.location.search;
                yield eq(t, p, true, {
                  submission: n,
                  replace: g,
                });
                return {
                  shortCircuited: true,
                };
              }
              if (tt(p)) {
                const D = e7(a, k.route.id);
                if ((b && b.replace) !== true) {
                  Q = "PUSH";
                }
                return {
                  matches: a,
                  pendingActionResult: [D.route.id, p, k.route.id],
                };
              }
              return {
                matches: a,
                pendingActionResult: [k.route.id, p],
              };
            })
            .apply(this, arguments);
        })(
          V,
          r,
          n.submission,
          U,
          t,
          q,
          H.active,
          n && n.initialHydration === true,
          {
            replace: n.replace,
            flushSync: N,
          },
        );
        if (Y.shortCircuited) {
          return;
        }
        if (Y.pendingActionResult) {
          const [J, K] = Y.pendingActionResult;
          if (tt(K) && el(K.error) && K.error.status === 404) {
            a = null;
            eI(r, {
              matches: Y.matches,
              loaderData: {},
              errors: {
                [J]: K.error,
              },
            });
            return;
          }
        }
        U = Y.matches || U;
        T = Y.pendingActionResult;
        $ = tu(r, U, t, n.submission);
        N = false;
        H.active = false;
        V = eQ(e.history, V.url, V.signal);
      }
      const { shortCircuited, matches, loaderData, errors, workingFetchers } =
        yield (
          ((s = V),
          (f = r),
          (p = U),
          (g = t),
          (b = q),
          (E = H.active),
          (w = $),
          (x = n && n.submission),
          (R = n && n.fetcherSubmission),
          (S = n && n.replace),
          (C = n && n.initialHydration === true),
          (_ = N),
          (P = T),
          (L = n && n.callSiteDefaultShouldRevalidate),
          u._(function* () {
            const t = w || tu(f, p, g, x);
            const r = x || R || ts(t);
            const n = !ea && !C;
            if (E) {
              if (n) {
                const o = eW(P);
                eH(
                  c._(
                    {
                      navigation: t,
                    },
                    o !== undefined
                      ? {
                          actionData: o,
                        }
                      : {},
                  ),
                  {
                    flushSync: _,
                  },
                );
              }
              const i = yield tx(p, f.pathname, s.signal);
              if (i.type === "aborted") {
                return {
                  shortCircuited: true,
                };
              }
              if (i.type === "error") {
                if (i.partialMatches.length === 0) {
                  const { matches, route } = e8(m.activeRoutes);
                  return {
                    matches,
                    loaderData: {},
                    errors: {
                      [route.id]: i.error,
                    },
                  };
                }
                const k = e7(i.partialMatches).route.id;
                return {
                  matches: i.partialMatches,
                  loaderData: {},
                  errors: {
                    [k]: i.error,
                  },
                };
              }
              if (i.matches) {
                p = i.matches;
              } else {
                const { error, notFoundMatches, route } = tg(f.pathname);
                return {
                  matches: notFoundMatches,
                  loaderData: {},
                  errors: {
                    [route.id]: error,
                  },
                };
              }
            }
            const m_activeRoutes = m.activeRoutes;
            const { dsMatches, revalidatingFetchers } = ej(
              s,
              b,
              h,
              v,
              e.history,
              X,
              p,
              r,
              f,
              C ? [] : l,
              C === true,
              eo,
              eu,
              ex,
              eE,
              eg,
              m_activeRoutes,
              y,
              e.patchRoutesOnNavigation != null,
              m.branches,
              P,
              L,
            );
            em = ++ev;
            if (
              !e.dataStrategy &&
              !dsMatches.some((e) => e.shouldLoad) &&
              !dsMatches.some(
                (e) => e.route.middleware && e.route.middleware.length > 0,
              ) &&
              revalidatingFetchers.length === 0
            ) {
              const U = new Map(X.fetchers);
              const N = tf(U);
              eI(
                f,
                c._(
                  {
                    matches: p,
                    loaderData: {},
                    errors:
                      P && tt(P[1])
                        ? {
                            [P[0]]: P[1].error,
                          }
                        : null,
                  },
                  e4(P),
                  N
                    ? {
                        fetchers: U,
                      }
                    : {},
                ),
                {
                  flushSync: _,
                },
              );
              return {
                shortCircuited: true,
              };
            }
            if (n) {
              let F;
              let z;
              const H = {};
              if (!E) {
                H.navigation = t;
                const I = eW(P);
                if (I !== undefined) {
                  H.actionData = I;
                }
              }
              if (revalidatingFetchers.length > 0) {
                F = revalidatingFetchers;
                z = new Map(X.fetchers);
                F.forEach((e) => {
                  var t = z.get(e.key);
                  var r = tc(undefined, t ? t.data : undefined);
                  z.set(e.key, r);
                });
                H.fetchers = z;
              }
              eH(H, {
                flushSync: _,
              });
            }
            revalidatingFetchers.forEach((e) => {
              te(e.key);
              if (e.controller) {
                _internalFetchControllers.set(e.key, e.controller);
              }
            });
            const B = () => revalidatingFetchers.forEach((e) => te(e.key));
            if (a) {
              a.signal.addEventListener("abort", B);
            }
            const { loaderResults, fetcherResults } = yield eK(
              dsMatches,
              revalidatingFetchers,
              s,
              f,
              b,
            );
            if (s.signal.aborted) {
              return {
                shortCircuited: true,
              };
            }
            if (a) {
              a.signal.removeEventListener("abort", B);
            }
            revalidatingFetchers.forEach((e) =>
              _internalFetchControllers.delete(e.key),
            );
            let V = e6(loaderResults);
            if (V) {
              yield eq(s, V.result, true, {
                replace: S,
              });
              return {
                shortCircuited: true,
              };
            }
            if ((V = e6(fetcherResults))) {
              eg.add(V.key);
              yield eq(s, V.result, true, {
                replace: S,
              });
              return {
                shortCircuited: true,
              };
            }
            const workingFetchers_1 = new Map(X.fetchers);
            let { loaderData, errors } = e2(
              X,
              p,
              loaderResults,
              P,
              revalidatingFetchers,
              fetcherResults,
              workingFetchers_1,
            );
            if (C && X.errors) {
              errors = c._({}, X.errors, errors);
            }
            const K = tf(workingFetchers_1);
            const G = tp(em, workingFetchers_1);
            const Q = K || G || revalidatingFetchers.length > 0;
            return c._(
              {
                matches: p,
                loaderData,
                errors,
              },
              Q
                ? {
                    workingFetchers: workingFetchers_1,
                  }
                : {},
            );
          })())
        );
      if (!shortCircuited) {
        a = null;
        eI(
          r,
          c._(
            d._(
              c._(
                {
                  matches: matches || U,
                },
                e4(T),
              ),
              {
                loaderData,
                errors,
              },
            ),
            workingFetchers
              ? {
                  fetchers: workingFetchers,
                }
              : {},
          ),
        );
      }
    })();
  }
  function eW(e) {
    if (e && !tt(e[1])) {
      return {
        [e[0]]: e[1].data,
      };
    }
    if (X.actionData) {
      if (Object.keys(X.actionData).length === 0) {
        return null;
      } else {
        return X.actionData;
      }
    }
  }
  function eq(t, r, n) {
    return u
      ._(function* (t, r, n) {
        let { submission, fetcherSubmission, preventScrollReset, replace } =
          arguments.length > 3 && arguments[3] !== undefined
            ? arguments[3]
            : {};
        if (!n) {
          if (Z != null) {
            Z.resolve();
          }
          Z = null;
        }
        if (r.response.headers.has("X-Remix-Revalidate")) {
          eo = true;
        }
        let f = r.response.headers.get("Location");
        C(f, "Expected a Location header on the redirect Response");
        const p = f;
        const v = new URL(t.url);
        eb(p, (f = eX(f, v, y, e.history)), v, "allow-explicit");
        const m = P(X.location, f, {
          _isRedirect: true,
        });
        if (i) {
          let g = false;
          if (r.response.headers.has("X-Remix-Reload-Document")) {
            g = true;
          } else {
            let e;
            e = f;
            if (E.test(e)) {
              const b = T(window_1, f, true);
              g =
                b.origin !== window_1.location.origin ||
                Y(b.pathname, y) == null;
            }
          }
          if (g) {
            return void (replace
              ? window_1.location.replace(f)
              : window_1.location.assign(f));
          }
        }
        a = null;
        const w =
          replace === true || r.response.headers.has("X-Remix-Replace")
            ? "REPLACE"
            : "PUSH";
        const { formMethod, formAction, formEncType } = X.navigation;
        if (
          !submission &&
          !fetcherSubmission &&
          formMethod &&
          formAction &&
          formEncType
        ) {
          submission = ts(X.navigation);
        }
        const _ = submission || fetcherSubmission;
        if (eS.has(r.response.status) && _ && to(_.formMethod)) {
          yield eB(w, m, {
            submission: d._(c._({}, _), {
              formAction: f,
            }),
            preventScrollReset: preventScrollReset || ee,
            enableViewTransition: n ? et : undefined,
          });
        } else {
          const overrideNavigation = tu(m, [], w, submission);
          yield eB(w, m, {
            overrideNavigation,
            fetcherSubmission,
            preventScrollReset: preventScrollReset || ee,
            enableViewTransition: n ? et : undefined,
          });
        }
      })
      .apply(this, arguments);
  }
  function eY(e, t, r, n, a) {
    return u._(function* () {
      let o;
      let i;
      let l;
      let s;
      let h;
      let context;
      let p;
      let v;
      let m;
      let b;
      const w = {};
      try {
        m = yield (
          ((o = g),
          (i = e),
          (l = t),
          (s = r),
          (h = a),
          (context = n),
          (p = false),
          u._(function* () {
            if (
              s.some((e) => {
                var t;
                if ((t = e._lazyPromises) == null) {
                  return undefined;
                }
                return t.middleware;
              })
            ) {
              yield Promise.all(
                s.map((e) => {
                  var t;
                  if ((t = e._lazyPromises) == null) {
                    return undefined;
                  }
                  return t.middleware;
                }),
              );
            }
            const e = {
              request: i,
              url: eZ(i, l),
              pattern: es(s),
              params: s[0].params,
              context,
              matches: s,
            };
            const runClientMiddleware = p
              ? () => {
                  throw Error(
                    "You cannot call `runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`",
                  );
                }
              : (t) =>
                  eV(e, () =>
                    t(
                      d._(c._({}, e), {
                        fetcherKey: h,
                        runClientMiddleware: () => {
                          throw Error(
                            "Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler",
                          );
                        },
                      }),
                    ),
                  );
            const r = yield o(
              d._(c._({}, e), {
                fetcherKey: h,
                runClientMiddleware,
              }),
            );
            try {
              yield Promise.all(
                s.flatMap((e) => {
                  var t;
                  var r;
                  return [
                    (t = e._lazyPromises) == null ? undefined : t.handler,
                    (r = e._lazyPromises) == null ? undefined : r.route,
                  ];
                }),
              );
            } catch (e) {}
            return r;
          })())
        );
      } catch (error) {
        r.filter((e) => e.shouldLoad).forEach((t) => {
          w[t.route.id] = {
            type: "error",
            error,
          };
        });
        return w;
      }
      if (e.signal.aborted) {
        return w;
      }
      if (!to(e.method)) {
        for (const x of r) {
          if (((b = m[x.route.id]) == null ? undefined : b.type) === "error") {
            break;
          }
          if (
            !m.hasOwnProperty(x.route.id) &&
            !X.loaderData.hasOwnProperty(x.route.id) &&
            (!X.errors || !X.errors.hasOwnProperty(x.route.id)) &&
            x.shouldCallHandler()
          ) {
            m[x.route.id] = {
              type: "error",
              result: Error(
                "No result returned from dataStrategy for route ".concat(
                  x.route.id,
                ),
              ),
            };
          }
        }
      }
      for (const [R, S] of Object.entries(m)) {
        if (ta((v = S).result) && eR.has(v.result.status)) {
          const _ = S.result;
          w[R] = {
            type: "redirect",
            response: ((e, t, r, n, a) => {
              let o;
              let i = e.headers.get("Location");
              C(
                i,
                "Redirects returned/thrown from loaders/actions must have a Location header",
              );
              o = i;
              if (!E.test(o)) {
                const l = n.slice(0, n.findIndex((e) => e.route.id === r) + 1);
                i = eA(new URL(t.url), l, a, i);
                e.headers.set("Location", i);
              }
              return e;
            })(_, e, R, r, y),
          };
        } else {
          w[R] = yield ((e) =>
            u._(function* () {
              let t;
              let r;
              let n;
              let a;
              let o;
              let i;
              const { result, type } = e;
              if (ta(result)) {
                try {
                  t = yield u._(function* () {
                    const e = result.headers.get("Content-Type");
                    if (e && /\bapplication\/json\b/.test(e)) {
                      if (result.body == null) {
                        return null;
                      }
                      return result.json();
                    }
                    return result.text();
                  })();
                } catch (error) {
                  return {
                    type: "error",
                    error,
                  };
                }
                if (type === "error") {
                  return {
                    type: "error",
                    error: new cj(result.status, result.statusText, t),
                    statusCode: result.status,
                    headers: result.headers,
                  };
                }
                return {
                  type: "data",
                  data: t,
                  statusCode: result.status,
                  headers: result.headers,
                };
              }
              if (type === "error") {
                if (tn(result)) {
                  if (result.data instanceof Error) {
                    return {
                      type: "error",
                      error: result.data,
                      statusCode:
                        (n = result.init) == null ? undefined : n.status,
                      headers: (
                        (a = result.init) == null ? undefined : a.headers
                      )
                        ? new Headers(result.init.headers)
                        : undefined,
                    };
                  }
                  return {
                    type: "error",
                    error: ((e) => {
                      let t;
                      let r;
                      let n;
                      let a;
                      return new cj(
                        (t = (n = e.init) == null ? undefined : n.status) !=
                          null
                          ? t
                          : 500,
                        (r = (a = e.init) == null ? undefined : a.statusText) !=
                          null
                          ? r
                          : "Internal Server Error",
                        e.data,
                      );
                    })(result),
                    statusCode: el(result) ? result.status : undefined,
                    headers: ((r = result.init) == null ? undefined : r.headers)
                      ? new Headers(result.init.headers)
                      : undefined,
                  };
                }
                return {
                  type: "error",
                  error: result,
                  statusCode: el(result) ? result.status : undefined,
                };
              }
              if (tn(result)) {
                return {
                  type: "data",
                  data: result.data,
                  statusCode: (o = result.init) == null ? undefined : o.status,
                  headers: ((i = result.init) == null ? undefined : i.headers)
                    ? new Headers(result.init.headers)
                    : undefined,
                };
              }
              return {
                type: "data",
                data: result,
              };
            })())(S);
        }
      }
      return w;
    })();
  }
  function eK(dsMatches, revalidatingFetchers, r, n, a) {
    return u._(function* () {
      const o = eY(r, n, dsMatches, a, null);
      const i = Promise.all(
        revalidatingFetchers.map((e) =>
          u._(function* () {
            if (!e.matches || !e.match || !e.request || !e.controller) {
              return Promise.resolve({
                [e.key]: {
                  type: "error",
                  error: e5(404, {
                    pathname: e.path,
                  }),
                },
              });
            }
            const t = (yield eY(e.request, e.path, e.matches, a, e.key))[
              e.match.route.id
            ];
            return {
              [e.key]: t,
            };
          })(),
        ),
      );
      return {
        loaderResults: yield o,
        fetcherResults: (yield i).reduce(
          (acc, item) => Object.assign(acc, item),
          {},
        ),
      };
    })();
  }
  function eG() {
    eo = true;
    eE.forEach((e, t) => {
      if (_internalFetchControllers.has(t)) {
        eu.add(t);
      }
      te(t);
    });
  }
  function e0(e, t) {
    const r =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const n = new Map(X.fetchers);
    n.set(e, t);
    eH(
      {
        fetchers: n,
      },
      {
        flushSync: (r && r.flushSync) === true,
      },
    );
  }
  function e1(e, t, r) {
    const n =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    const a = e7(X.matches, t);
    const o = new Map(X.fetchers);
    e9(o, e);
    eH(
      {
        errors: {
          [a.route.id]: r,
        },
        fetchers: o,
      },
      {
        flushSync: (n && n.flushSync) === true,
      },
    );
  }
  function e9(e, t) {
    const r = X.fetchers.get(t);
    if (
      _internalFetchControllers.has(t) &&
      !(r && r.state === "loading" && ey.has(t))
    ) {
      te(t);
    }
    eE.delete(t);
    ey.delete(t);
    eg.delete(t);
    ex.delete(t);
    eu.delete(t);
    e.delete(t);
  }
  function te(e, t) {
    const r = _internalFetchControllers.get(e);
    if (r) {
      r.abort(t);
      _internalFetchControllers.delete(e);
    }
  }
  function ti(e, t) {
    for (const r of e) {
      const n = t.get(r);
      C(n, "Expected fetcher: ".concat(r));
      const a = td(n.data);
      t.set(r, a);
    }
  }
  function tf(e) {
    const t = [];
    let r = false;
    for (const n of eg) {
      const a = e.get(n);
      C(a, "Expected fetcher: ".concat(n));
      if (a.state === "loading") {
        eg.delete(n);
        t.push(n);
        r = true;
      }
    }
    ti(t, e);
    return r;
  }
  function tp(e, t) {
    const r = [];
    for (const [n, a] of ey) {
      if (a < e) {
        const o = t.get(n);
        C(o, "Expected fetcher: ".concat(n));
        if (o.state === "loading") {
          te(n);
          ey.delete(n);
          r.push(n);
        }
      }
    }
    ti(r, t);
    return r.length > 0;
  }
  function deleteBlocker(e) {
    X.blockers.delete(e);
    eO.delete(e);
  }
  function tm(e, t) {
    const r = X.blockers.get(e) || ek;
    C(
      (r.state === "unblocked" && t.state === "blocked") ||
        (r.state === "blocked" && t.state === "blocked") ||
        (r.state === "blocked" && t.state === "proceeding") ||
        (r.state === "blocked" && t.state === "unblocked") ||
        (r.state === "proceeding" && t.state === "unblocked"),
      "Invalid blocker state transition: "
        .concat(r.state, " -> ")
        .concat(t.state),
    );
    const n = new Map(X.blockers);
    n.set(e, t);
    eH({
      blockers: n,
    });
  }
  function ty(e) {
    const { currentLocation, nextLocation, historyAction } = e;
    if (eO.size !== 0) {
      if (eO.size > 1) {
        _(false, "A router only supports one blocker at a time");
      }
      const a = Array.from(eO.entries());
      const [o, i] = a[a.length - 1];
      const l = X.blockers.get(o);
      if (
        (!l || l.state !== "proceeding") &&
        i({
          currentLocation,
          nextLocation,
          historyAction,
        })
      ) {
        return o;
      }
    }
  }
  function tg(pathname) {
    const t = e5(404, {
      pathname,
    });
    const { matches, route } = e8(m.activeRoutes);
    return {
      notFoundMatches: matches,
      route,
      error: t,
    };
  }
  function tb(e, t) {
    return (
      (D &&
        D(
          e,
          t.map((e) => H(e, X.loaderData)),
        )) ||
      e.key
    );
  }
  function tE(e, t) {
    if (k) {
      const r = k[tb(e, t)];
      if (typeof r === "number") {
        return r;
      }
    }
    return null;
  }
  function tw(t, r, n) {
    if (e.patchRoutesOnNavigation) {
      const a = m.branches;
      if (!t) {
        return {
          active: true,
          matches: z(r, n, y, true, a) || [],
        };
      }
      if (Object.keys(t[0].params).length > 0) {
        return {
          active: true,
          matches: z(r, n, y, true, a),
        };
      }
    }
    return {
      active: false,
      matches: null,
    };
  }
  function tx(t, pathname, signal, a) {
    return u._(function* () {
      const o = function* () {
        const t = v;
        try {
          yield e.patchRoutesOnNavigation({
            signal,
            path: pathname,
            matches: i,
            fetcherKey: a,
            patch: (e, r) => {
              if (!signal.aborted) {
                ez(e, r, m, t, h, false);
              }
            },
          });
        } catch (error) {
          return {
            v: {
              type: "error",
              error,
              partialMatches: i,
            },
          };
        }
        if (signal.aborted) {
          return {
            v: {
              type: "aborted",
            },
          };
        }
        const m_branches = m.branches;
        const l = z(m.activeRoutes, pathname, y, false, m_branches);
        let s = null;
        if (l) {
          if (Object.keys(l[0].params).length === 0) {
            return {
              v: {
                type: "success",
                matches: l,
              },
            };
          } else if (
            !(
              (s = z(m.activeRoutes, pathname, y, true, m_branches)) &&
              i.length < s.length &&
              tR(i, s.slice(0, i.length))
            )
          ) {
            return {
              v: {
                type: "success",
                matches: l,
              },
            };
          }
        }
        if (!s) {
          s = z(m.activeRoutes, pathname, y, true, m_branches);
        }
        if (!s || tR(i, s)) {
          return {
            v: {
              type: "success",
              matches: null,
            },
          };
        }
        i = s;
      };
      if (!e.patchRoutesOnNavigation) {
        return {
          type: "success",
          matches: t,
        };
      }
      var i = t;
      while (true) {
        const l = yield* o();
        if (f._(l) === "object") {
          return l.v;
        }
      }
    })();
  }
  function tR(e, t) {
    return (
      e.length === t.length && e.every((e, r) => e.route.id === t[r].route.id)
    );
  }
  n = {
    get basename() {
      return y;
    },
    get future() {
      return future;
    },
    get state() {
      return X;
    },
    get routes() {
      return m.stableRoutes;
    },
    get branches() {
      return m.branches;
    },
    get manifest() {
      return v;
    },
    get window() {
      return window_1;
    },
    initialize: function () {
      x = e.history.listen((t) => {
        var { action, location, delta } = t;
        if (eT) {
          eT();
          eT = undefined;
          return;
        }
        _(
          eO.size === 0 || delta != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        var o = ty({
          currentLocation: X.location,
          nextLocation: location,
          historyAction: action,
        });
        if (o && delta != null) {
          var i = new Promise((resolve) => {
            eT = resolve;
          });
          e.history.go(-1 * delta);
          tm(o, {
            state: "blocked",
            location,
            proceed() {
              tm(o, {
                state: "proceeding",
                proceed: undefined,
                reset: undefined,
                location,
              });
              i.then(() => e.history.go(delta));
            },
            reset() {
              const e = new Map(X.blockers);
              e.set(o, ek);
              eH({
                blockers: e,
              });
            },
          });
          if (Z != null) {
            Z.resolve();
          }
          Z = null;
          return;
        }
        return eB(action, location);
      });
      if (i) {
        const t = window_1;
        const r = er;
        try {
          const a = t.sessionStorage.getItem(eL);
          if (a) {
            const l = JSON.parse(a);
            for (const [s, u] of Object.entries(l || {})) {
              if (u && Array.isArray(u)) {
                r.set(s, new Set(u || []));
              }
            }
          }
        } catch (e) {}
        const c = () =>
          ((e, t) => {
            if (t.size > 0) {
              const r = {};
              for (const [n, a] of t) {
                r[n] = [...a];
              }
              try {
                e.sessionStorage.setItem(eL, JSON.stringify(r));
              } catch (error) {
                _(
                  false,
                  "Failed to save applied view transitions in sessionStorage (".concat(
                    error,
                    ").",
                  ),
                );
              }
            }
          })(window_1, er);
        window_1.addEventListener("pagehide", c);
        en = () => window_1.removeEventListener("pagehide", c);
      }
      if (!X.initialized) {
        eB("POP", X.location, {
          initialHydration: true,
        });
      }
      return n;
    },
    subscribe: function (e) {
      R.add(e);
      if (S) {
        const { newErrors } = S;
        S = null;
        e(X, {
          deletedFetchers: [],
          newErrors,
          viewTransitionOpts: undefined,
          flushSync: false,
        });
      }
      return () => R.delete(e);
    },
    enableScrollRestoration: function (e, t, r) {
      k = e;
      M = t;
      D = r || null;
      if (!j && X.navigation === eC) {
        j = true;
        const n = tE(X.location, X.matches);
        if (n != null) {
          eH({
            restoreScrollPosition: n,
          });
        }
      }
      return () => {
        k = null;
        M = null;
        D = null;
      };
    },
    navigate: function t(r, n) {
      return u._(function* () {
        if (Z != null) {
          Z.resolve();
        }
        Z = null;
        if (typeof r === "number") {
          if (!Z) {
            Z = th();
          }
          const a = Z.promise;
          e.history.go(r);
          return a;
        }
        const { path, submission, error } = eM(
          false,
          eA(
            X.location,
            X.matches,
            y,
            r,
            n == null ? undefined : n.fromRouteId,
            n == null ? undefined : n.relative,
          ),
          n,
        );
        if (n == null ? undefined : n.mask) {
          var s;
          let u;
          let d;
          let h;
          const f =
            typeof n.mask === "string"
              ? O(n.mask)
              : c._({}, X.location.mask, n.mask);
          s = {
            pathname: (u = f.pathname) != null ? u : "",
            search: (d = f.search) != null ? d : "",
            hash: (h = f.hash) != null ? h : "",
          };
          if (w.test(s.pathname)) {
            throw Error("External navigation is not allowed");
          }
          if (s.pathname.startsWith("\\")) {
            s.pathname = s.pathname.replace(/^\\+/, "/");
          }
          eb(
            typeof n.mask === "string" ? n.mask : L(n.mask),
            L(s),
            e.history.createURL("/"),
            "reject",
          );
        }
        const X_location = X.location;
        let v = P(X_location, path, n && n.state, undefined, s);
        v = c._({}, v, e.history.encodeLocation(v));
        eb(
          r == null
            ? e.history.createHref(X.location)
            : typeof r === "string"
              ? r
              : L(r),
          e.history.createHref(v.mask || v),
          e.history.createURL("/"),
          "reject",
        );
        const m = n && n.replace != null ? n.replace : undefined;
        let g = "PUSH";
        if (m === true) {
          g = "REPLACE";
        } else {
          if (m !== false) {
            if (
              submission != null &&
              to(submission.formMethod) &&
              submission.formAction === X.location.pathname + X.location.search
            ) {
              g = "REPLACE";
            }
          }
        }
        const b =
          n && "preventScrollReset" in n
            ? n.preventScrollReset === true
            : undefined;
        const flushSync = (n && n.flushSync) === true;
        const x = ty({
          currentLocation: X_location,
          nextLocation: v,
          historyAction: g,
        });
        if (x) {
          tm(x, {
            state: "blocked",
            location: v,
            proceed() {
              tm(x, {
                state: "proceeding",
                proceed: undefined,
                reset: undefined,
                location: v,
              });
              t(r, n);
            },
            reset() {
              const e = new Map(X.blockers);
              e.set(x, ek);
              eH({
                blockers: e,
              });
            },
          });
        } else {
          yield eB(g, v, {
            submission,
            pendingError: error,
            preventScrollReset: b,
            replace: n && n.replace,
            enableViewTransition: n && n.viewTransition,
            flushSync,
            callSiteDefaultShouldRevalidate: n && n.defaultShouldRevalidate,
          });
        }
      })();
    },
    fetch: function (t, r, n, o) {
      return u._(function* () {
        te(t);
        let i;
        let s;
        let f;
        let p;
        let g;
        let b;
        let E;
        let w;
        let fetcherSubmission;
        let R;
        let S;
        let _;
        let k;
        let P;
        let L;
        let O;
        let D;
        let T;
        let M;
        const j = (o && o.flushSync) === true;
        const m_activeRoutes = m.activeRoutes;
        const N = eA(
          X.location,
          X.matches,
          y,
          n,
          r,
          o == null ? undefined : o.relative,
        );
        let F = z(m_activeRoutes, N, y, false, m.branches);
        const H = tw(F, m_activeRoutes, N);
        if (H.active && H.matches) {
          F = H.matches;
        }
        if (!F) {
          return void e1(
            t,
            r,
            e5(404, {
              pathname: N,
            }),
            {
              flushSync: j,
            },
          );
        }
        const { path, submission, error } = eM(true, N, o);
        if (error) {
          return void e1(t, r, error, {
            flushSync: j,
          });
        }
        const $ = e.getContext ? yield e.getContext() : new A();
        const V = (o && o.preventScrollReset) === true;
        if (submission && to(submission.formMethod)) {
          yield (
            ((i = t),
            (s = r),
            (f = path),
            (p = F),
            (g = $),
            (b = H.active),
            (E = j),
            (w = V),
            (fetcherSubmission = submission),
            (R = o && o.defaultShouldRevalidate),
            u._(function* () {
              eG();
              eE.delete(i);
              let t;
              let r;
              const n = X.fetchers.get(i);
              e0(
                i,
                ((t = fetcherSubmission),
                (r = n),
                {
                  state: "submitting",
                  formMethod: t.formMethod,
                  formAction: t.formAction,
                  formEncType: t.formEncType,
                  formData: t.formData,
                  json: t.json,
                  text: t.text,
                  data: r ? r.data : undefined,
                }),
                {
                  flushSync: E,
                },
              );
              const o = new AbortController();
              const u = eQ(e.history, f, o.signal, fetcherSubmission);
              if (b) {
                const S = yield tx(p, new URL(u.url).pathname, u.signal, i);
                if (S.type === "aborted") {
                  return;
                }
                if (S.type === "error") {
                  return void e1(i, s, S.error, {
                    flushSync: E,
                  });
                }
                if (!S.matches) {
                  return void e1(
                    i,
                    s,
                    e5(404, {
                      pathname: f,
                    }),
                    {
                      flushSync: E,
                    },
                  );
                }
                p = S.matches;
              }
              const _ = tl(p, f);
              if (!_.route.action && !_.route.lazy) {
                const k = e5(405, {
                  method: fetcherSubmission.formMethod,
                  pathname: f,
                  routeId: s,
                });
                e1(i, s, k, {
                  flushSync: E,
                });
                return;
              }
              _internalFetchControllers.set(i, o);
              const P = ev;
              const L = eJ(h, v, u, f, p, _, l, g);
              const O = yield eY(u, f, L, g, i);
              let D = O[_.route.id];
              if (!D) {
                for (const T of L) {
                  if (O[T.route.id]) {
                    D = O[T.route.id];
                    break;
                  }
                }
              }
              if (u.signal.aborted) {
                if (_internalFetchControllers.get(i) === o) {
                  _internalFetchControllers.delete(i);
                }
                return;
              }
              if (ex.has(i)) {
                if (tr(D) || tt(D)) {
                  return void e0(i, td(undefined));
                }
              } else {
                if (tr(D)) {
                  _internalFetchControllers.delete(i);
                  if (em > P) {
                    return void e0(i, td(undefined));
                  }
                  eg.add(i);
                  e0(i, tc(fetcherSubmission));
                  return eq(u, D, false, {
                    fetcherSubmission,
                    preventScrollReset: w,
                  });
                }
                if (tt(D)) {
                  return void e1(i, s, D.error);
                }
              }
              const A = X.navigation.location || X.location;
              const M = eQ(e.history, A, o.signal);
              const m_activeRoutes = m.activeRoutes;
              const U =
                X.navigation.state !== "idle"
                  ? z(
                      m_activeRoutes,
                      X.navigation.location,
                      y,
                      false,
                      m.branches,
                    )
                  : X.matches;
              C(U, "Didn't find any matches after fetcher action");
              const N = ++ev;
              ey.set(i, N);
              const { dsMatches, revalidatingFetchers } = ej(
                M,
                g,
                h,
                v,
                e.history,
                X,
                U,
                fetcherSubmission,
                A,
                l,
                false,
                eo,
                eu,
                ex,
                eE,
                eg,
                m_activeRoutes,
                y,
                e.patchRoutesOnNavigation != null,
                m.branches,
                [_.route.id, D],
                R,
              );
              const I = tc(fetcherSubmission, D.data);
              const B = new Map(X.fetchers);
              B.set(i, I);
              revalidatingFetchers
                .filter((e) => e.key !== i)
                .forEach((e) => {
                  var e_key = e.key;
                  var r = B.get(e_key);
                  var n = tc(undefined, r ? r.data : undefined);
                  B.set(e_key, n);
                  te(e_key);
                  if (e.controller) {
                    _internalFetchControllers.set(e_key, e.controller);
                  }
                });
              eH({
                fetchers: B,
              });
              const W = () => revalidatingFetchers.forEach((e) => te(e.key));
              o.signal.addEventListener("abort", W);
              const { loaderResults, fetcherResults } = yield eK(
                dsMatches,
                revalidatingFetchers,
                M,
                A,
                g,
              );
              if (!o.signal.aborted) {
                o.signal.removeEventListener("abort", W);
                ey.delete(i);
                _internalFetchControllers.delete(i);
                revalidatingFetchers.forEach((e) =>
                  _internalFetchControllers.delete(e.key),
                );
                const q = X.fetchers.has(i);
                const Y = (e) => {
                  if (!q) {
                    return e;
                  }
                  var t = new Map(e.fetchers);
                  t.set(i, td(D.data));
                  return d._(c._({}, e), {
                    fetchers: t,
                  });
                };
                let J = e6(loaderResults);
                if (J) {
                  X = Y(X);
                  return eq(M, J.result, false, {
                    preventScrollReset: w,
                  });
                }
                if ((J = e6(fetcherResults))) {
                  eg.add(J.key);
                  X = Y(X);
                  return eq(M, J.result, false, {
                    preventScrollReset: w,
                  });
                }
                const K = new Map(X.fetchers);
                if (q) {
                  K.set(i, td(D.data));
                }
                const { loaderData, errors } = e2(
                  X,
                  U,
                  loaderResults,
                  undefined,
                  revalidatingFetchers,
                  fetcherResults,
                  K,
                );
                tp(N, K);
                if (X.navigation.state === "loading" && N > em) {
                  C(Q, "Expected pending action");
                  if (a) {
                    a.abort();
                  }
                  eI(X.navigation.location, {
                    matches: U,
                    loaderData,
                    errors,
                    fetchers: K,
                  });
                } else {
                  eH({
                    errors,
                    loaderData: e3(X.loaderData, loaderData, U, errors),
                    fetchers: K,
                  });
                  eo = false;
                }
              }
            })())
          );
        } else {
          eE.set(t, {
            routeId: r,
            path,
          });
          yield (
            ((S = t),
            (_ = r),
            (k = path),
            (P = F),
            (L = $),
            (O = H.active),
            (D = j),
            (T = V),
            (M = submission),
            u._(function* () {
              const t = X.fetchers.get(S);
              e0(S, tc(M, t ? t.data : undefined), {
                flushSync: D,
              });
              const r = new AbortController();
              const n = eQ(e.history, k, r.signal);
              if (O) {
                const a = yield tx(P, new URL(n.url).pathname, n.signal, S);
                if (a.type === "aborted") {
                  return;
                }
                if (a.type === "error") {
                  return void e1(S, _, a.error, {
                    flushSync: D,
                  });
                }
                if (!a.matches) {
                  return void e1(
                    S,
                    _,
                    e5(404, {
                      pathname: k,
                    }),
                    {
                      flushSync: D,
                    },
                  );
                }
                P = a.matches;
              }
              const o = tl(P, k);
              _internalFetchControllers.set(S, r);
              const i = ev;
              const s = eJ(h, v, n, k, P, o, l, L);
              const u = yield eY(n, k, s, L, S);
              let c = u[o.route.id];
              if (!c) {
                for (const d of P) {
                  if (u[d.route.id]) {
                    c = u[d.route.id];
                    break;
                  }
                }
              }
              if (_internalFetchControllers.get(S) === r) {
                _internalFetchControllers.delete(S);
              }
              if (!n.signal.aborted) {
                if (ex.has(S)) {
                  return void e0(S, td(undefined));
                }
                if (tr(c)) {
                  if (em > i) {
                    return void e0(S, td(undefined));
                  } else {
                    eg.add(S);
                    yield eq(n, c, false, {
                      preventScrollReset: T,
                    });
                    return;
                  }
                }
                if (tt(c)) {
                  return void e1(S, _, c.error);
                }
                e0(S, td(c.data));
              }
            })())
          );
        }
      })();
    },
    revalidate: function () {
      if (!eF) {
        eF = th();
      }
      eG();
      eH({
        revalidation: "loading",
      });
      const eF_promise = eF.promise;
      if (X.navigation.state !== "submitting") {
        if (X.navigation.state === "idle") {
          eB(X.historyAction, X.location, {
            startUninterruptedRevalidation: true,
          });
        } else {
          eB(Q || X.historyAction, X.navigation.location, {
            overrideNavigation: X.navigation,
            enableViewTransition: et === true,
          });
        }
      }
      return eF_promise;
    },
    createHref: (t) => e.history.createHref(t),
    createURL: (t) => e.history.createURL(t),
    encodeLocation: (t) => e.history.encodeLocation(t),
    getFetcher: function (e) {
      ew.set(e, (ew.get(e) || 0) + 1);
      if (ex.has(e)) {
        ex.delete(e);
      }
      return X.fetchers.get(e) || e_;
    },
    resetFetcher: function (e, t) {
      te(e, t == null ? undefined : t.reason);
      e0(e, td(null));
    },
    deleteFetcher: function (e) {
      const t = (ew.get(e) || 0) - 1;
      if (t <= 0) {
        ew.delete(e);
        ex.add(e);
      } else {
        ew.set(e, t);
      }
      eH({
        fetchers: new Map(X.fetchers),
      });
    },
    dispose: function () {
      if (x) {
        x();
      }
      if (en) {
        en();
      }
      R.clear();
      if (a) {
        a.abort();
      }
      X.fetchers.forEach((e, t) => e9(X.fetchers, t));
      X.blockers.forEach((e, t) => deleteBlocker(t));
    },
    getBlocker: function (e, t) {
      const r = X.blockers.get(e) || ek;
      if (eO.get(e) !== t) {
        eO.set(e, t);
      }
      return r;
    },
    deleteBlocker,
    patchRoutes: function (e, t) {
      const r =
        arguments.length > 2 && arguments[2] !== undefined && arguments[2];
      ez(e, t, m, v, h, r);
      if (!m.hasHMRRoutes) {
        eH({});
      }
    },
    _internalFetchControllers,
    _internalSetRoutes: function (e) {
      v = {};
      m.setHmrRoutes(U(e, h, undefined, v));
    },
    _internalSetStateDoNotUseOrYouWillBreakYourApp(e) {
      eH(e);
    },
  };
  if (e.instrumentations) {
    n = ((e, t) => {
      const r = {
        navigate: [],
        fetch: [],
      };
      t.forEach((e) =>
        e({
          instrument(e) {
            for (const t of Object.keys(e)) {
              if (e[t]) {
                r[t].push(e[t]);
              }
            }
          },
        }),
      );
      if (r.navigate.length > 0) {
        let n;
        const a = (n = e.navigate[ed]) != null ? n : e.navigate;
        const o = eh(r.navigate, a, function () {
          for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) {
            r[n] = arguments[n];
          }
          const [a, o] = r;
          return c._(
            {
              to:
                typeof a === "number" || typeof a === "string"
                  ? a
                  : a
                    ? L(a)
                    : ".",
            },
            ep(e, o != null ? o : {}),
          );
        });
        if (o) {
          o[ed] = a;
          e.navigate = o;
        }
      }
      if (r.fetch.length > 0) {
        let i;
        const l = (i = e.fetch[ed]) != null ? i : e.fetch;
        const s = eh(r.fetch, l, function () {
          for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) {
            r[n] = arguments[n];
          }
          const [a, , o, i] = r;
          return c._(
            {
              href: o != null ? o : ".",
              fetcherKey: a,
            },
            ep(e, i != null ? i : {}),
          );
        });
        if (s) {
          s[ed] = l;
          e.fetch = s;
        }
      }
      return e;
    })(n, e.instrumentations.map((e) => e.router).filter(Boolean));
  }
  return n;
}
function eA(e, t, r, n, a, o) {
  if (a) {
    l = [];
    for (const i of t) {
      l.push(i);
      if (i.route.id === a) {
        s = i;
        break;
      }
    }
  } else {
    l = t;
    s = t[t.length - 1];
  }
  var l;
  var s;
  const u = Q(n || ".", X(l), Y(e.pathname, r) || e.pathname, o === "path");
  if (n == null) {
    u.search = e.search;
    u.hash = e.hash;
  }
  if ((n == null || n === "" || n === ".") && s) {
    const c = ti(u.search);
    if (s.route.index && !c) {
      u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index";
    } else if (!s.route.index && c) {
      const d = new URLSearchParams(u.search);
      const h = d.getAll("index");
      d.delete("index");
      h.filter((e) => e).forEach((e) => d.append("index", e));
      const f = d.toString();
      u.search = f ? "?".concat(f) : "";
    }
  }
  if (r !== "/") {
    u.pathname = ((e) => {
      const { basename, pathname } = e;
      if (pathname === "/") {
        return basename;
      }
      return ee([basename, pathname]);
    })({
      basename: r,
      pathname: u.pathname,
    });
  }
  return L(u);
}
function eM(e, t, r) {
  if (
    !r ||
    !(
      r != null &&
      (("formData" in r && r.formData != null) ||
        ("body" in r && r.body !== undefined))
    )
  ) {
    return {
      path: t,
    };
  }
  if (r.formMethod && ((n = r.formMethod), !ex.has(n.toUpperCase()))) {
    return {
      path: t,
      error: e5(405, {
        method: r.formMethod,
      }),
    };
  }
  var n;
  let a;
  let o;
  const i = () => ({
    path: t,
    error: e5(400, {
      type: "invalid-body",
    }),
  });
  const formMethod = (r.formMethod || "get").toUpperCase();
  const formAction = e9(t);
  if (r.body !== undefined) {
    if (r.formEncType === "text/plain") {
      if (!to(formMethod)) {
        return i();
      }
      const text =
        typeof r.body === "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((acc, item) => {
                var [r, n] = item;
                return "".concat(acc).concat(r, "=").concat(n, "\n");
              }, "")
            : String(r.body);
      return {
        path: t,
        submission: {
          formMethod,
          formAction,
          formEncType: r.formEncType,
          formData: undefined,
          json: undefined,
          text,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!to(formMethod)) {
        return i();
      }
      try {
        const json = typeof r.body === "string" ? JSON.parse(r.body) : r.body;
        return {
          path: t,
          submission: {
            formMethod,
            formAction,
            formEncType: r.formEncType,
            formData: undefined,
            json,
            text: undefined,
          },
        };
      } catch (e) {
        return i();
      }
    }
  }
  C(
    typeof FormData === "function",
    "FormData is not available in this environment",
  );
  if (r.formData) {
    a = e0(r.formData);
    o = r.formData;
  } else if (r.body instanceof FormData) {
    a = e0(r.body);
    o = r.body;
  } else if (r.body instanceof URLSearchParams) {
    o = e1((a = r.body));
  } else if (r.body == null) {
    a = new URLSearchParams();
    o = new FormData();
  } else {
    try {
      a = new URLSearchParams(r.body);
      o = e1(a);
    } catch (e) {
      return i();
    }
  }
  const d = {
    formMethod,
    formAction,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: o,
    json: undefined,
    text: undefined,
  };
  if (to(d.formMethod)) {
    return {
      path: t,
      submission: d,
    };
  }
  const h = O(t);
  if (e && h.search && ti(h.search)) {
    a.append("index", "");
  }
  h.search = "?".concat(a);
  return {
    path: L(h),
    submission: d,
  };
}
function ej(
  e,
  t,
  r,
  n,
  history,
  o,
  i,
  l,
  s,
  u,
  h,
  f,
  p,
  v,
  m,
  y,
  g,
  b,
  E,
  branches,
  x,
  R,
) {
  let S;
  let C;
  const actionResult = x ? (tt(x[1]) ? x[1].error : x[1].data) : undefined;
  const currentUrl = history.createURL(o.location);
  const nextUrl = history.createURL(s);
  if (h && o.errors) {
    const L = Object.keys(o.errors)[0];
    C = i.findIndex((e) => e.route.id === L);
  } else if (x && tt(x[1])) {
    const O = x[0];
    C = i.findIndex((e) => e.route.id === O) - 1;
  }
  const actionStatus = x ? x[1].statusCode : undefined;
  const T = actionStatus && actionStatus >= 400;
  const A = d._(
    c._(
      {
        currentUrl,
        currentParams:
          ((S = o.matches[0]) == null ? undefined : S.params) || {},
        nextUrl,
        nextParams: i[0].params,
      },
      l,
    ),
    {
      actionResult,
      actionStatus,
    },
  );
  const M = es(i);
  const dsMatches = i.map((a, i) => {
    var l;
    var p;
    var v;
    var m;
    var y;
    var g;
    var b;
    var E;
    var { route } = a;
    var x = null;
    if (C != null && i > C) {
      x = false;
    } else if (route.lazy) {
      x = true;
    } else if (eU(route)) {
      if (h) {
        var { shouldLoad } = eN(route, o.loaderData, o.errors);
        x = shouldLoad;
      } else {
        l = o.loaderData;
        p = o.matches[i];
        v = a;
        m = !p || v.route.id !== p.route.id;
        y = !l.hasOwnProperty(v.route.id);
        if (m || y) {
          x = true;
        }
      }
    } else {
      x = false;
    }
    if (x !== null) {
      return eY(r, n, e, s, M, a, u, t, x);
    }
    var _ = false;
    if (typeof R === "boolean") {
      _ = R;
    } else if (T) {
      _ = false;
    } else if (
      f ||
      currentUrl.pathname + currentUrl.search ===
        nextUrl.pathname + nextUrl.search ||
      currentUrl.search !== nextUrl.search
    ) {
      _ = true;
    } else {
      g = o.matches[i];
      b = a;
      E = g.route.path;
      if (
        g.pathname !== b.pathname ||
        (E != null && E.endsWith("*") && g.params["*"] !== b.params["*"])
      ) {
        _ = true;
      }
    }
    var L = d._(c._({}, A), {
      defaultShouldRevalidate: _,
    });
    var O = eF(a, L);
    return eY(r, n, e, s, M, a, u, t, O, L, R);
  });
  const revalidatingFetchers = [];
  m.forEach((e, l) => {
    if (!(h || !i.some((t) => t.route.id === e.routeId) || v.has(l))) {
      var s = o.fetchers.get(l);
      var m = s && s.state !== "idle" && s.data === undefined;
      var x = z(g, e.path, b != null ? b : "/", false, branches);
      if (!x) {
        if (E && m) {
          return;
        }
        revalidatingFetchers.push({
          key: l,
          routeId: e.routeId,
          path: e.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        });
        return;
      }
      if (!y.has(l)) {
        var S = tl(x, e.path);
        var controller = new AbortController();
        var _ = eQ(history, e.path, controller.signal);
        var k = null;
        if (p.has(l)) {
          p.delete(l);
          k = eJ(r, n, _, e.path, x, S, u, t);
        } else if (m) {
          if (f) {
            k = eJ(r, n, _, e.path, x, S, u, t);
          }
        } else {
          var P = d._(c._({}, A), {
            defaultShouldRevalidate: typeof R === "boolean" ? R : !T && f,
          });
          if (eF(S, P)) {
            k = eJ(r, n, _, e.path, x, S, u, t, P);
          }
        }
        if (k) {
          revalidatingFetchers.push({
            key: l,
            routeId: e.routeId,
            path: e.path,
            matches: k,
            match: S,
            request: _,
            controller,
          });
        }
      }
    }
  });
  return {
    dsMatches,
    revalidatingFetchers,
  };
}
function eU(e) {
  return e.loader != null || (e.middleware != null && e.middleware.length > 0);
}
function eN(route, t, r) {
  if (route.lazy) {
    return {
      shouldLoad: true,
      renderFallback: true,
    };
  }
  if (!eU(route)) {
    return {
      shouldLoad: false,
      renderFallback: false,
    };
  }
  const n = t != null && route.id in t;
  const a = r != null && r[route.id] !== undefined;
  if (!n && a) {
    return {
      shouldLoad: false,
      renderFallback: false,
    };
  }
  if (typeof route.loader === "function" && route.loader.hydrate === true) {
    return {
      shouldLoad: true,
      renderFallback: !n,
    };
  }
  const o = !n && !a;
  return {
    shouldLoad: o,
    renderFallback: o,
  };
}
function eF(e, t) {
  if (e.route.shouldRevalidate) {
    const r = e.route.shouldRevalidate(t);
    if (typeof r === "boolean") {
      return r;
    }
  }
  return t.defaultShouldRevalidate;
}
function ez(e, t, r, n, a, o) {
  if (e) {
    var i;
    const l = n[e];
    C(l, "No route found to patch children into: routeId = ".concat(e));
    if (!l.children) {
      l.children = [];
    }
    i = l.children;
  } else {
    i = r.activeRoutes;
  }
  const s = [];
  const u = [];
  t.forEach((newRoute) => {
    var existingRoute = i.find((t) =>
      (function e(t, r) {
        let n;
        let a;
        return (
          ("id" in t && "id" in r && t.id === r.id) ||
          (t.index === r.index &&
            t.path === r.path &&
            t.caseSensitive === r.caseSensitive &&
            (((!t.children || t.children.length === 0) &&
              (!r.children || r.children.length === 0)) ||
              ((n =
                (a = t.children) == null
                  ? undefined
                  : a.every((t, n) => {
                      var a;
                      if ((a = r.children) == null) {
                        return undefined;
                      }
                      return a.some((r) => e(t, r));
                    })) != null &&
                n)))
        );
      })(newRoute, t),
    );
    if (existingRoute) {
      u.push({
        existingRoute,
        newRoute,
      });
    } else {
      s.push(newRoute);
    }
  });
  if (s.length > 0) {
    const c = U(
      s,
      a,
      [e || "_", "patch", String((i == null ? undefined : i.length) || "0")],
      n,
    );
    i.push(...c);
  }
  if (o && u.length > 0) {
    for (let d = 0; d < u.length; d++) {
      const { existingRoute, newRoute } = u[d];
      const [p] = U([newRoute], a, [], {}, true);
      Object.assign(existingRoute, {
        element: p.element ? p.element : existingRoute.element,
        errorElement: p.errorElement
          ? p.errorElement
          : existingRoute.errorElement,
        hydrateFallbackElement: p.hydrateFallbackElement
          ? p.hydrateFallbackElement
          : existingRoute.hydrateFallbackElement,
      });
    }
  }
  if (!r.hasHMRRoutes) {
    r.setRoutes([...r.activeRoutes]);
  }
}
o = new WeakMap();
i = new WeakMap();
l = new WeakMap();
s = new WeakMap();
const eH = new WeakMap();
const eI = (e) => {
  var { key, route, manifest, mapRouteProperties } = e;
  var o = manifest[route.id];
  C(o, "No route found in manifest");
  if (o.lazy && typeof o.lazy === "object") {
    var i = o.lazy[key];
    if (i) {
      var l = eH.get(o);
      if (!l) {
        l = {};
        eH.set(o, l);
      }
      var s = l[key];
      if (s) {
        return s;
      }
      var c = u._(function* () {
        const e = M.has(key);
        const r = o[key] !== undefined && key !== "hasErrorBoundary";
        if (e) {
          _(
            !e,
            "Route property " +
              key +
              " is not a supported lazy route property. This property will be ignored.",
          );
          l[key] = Promise.resolve();
        } else if (r) {
          _(
            false,
            'Route "'
              .concat(o.id, '" has a static property "')
              .concat(key, '" defined. The lazy property will be ignored.'),
          );
        } else {
          const n = yield i();
          if (n != null) {
            Object.assign(o, {
              [key]: n,
            });
            Object.assign(o, mapRouteProperties(o));
          }
        }
        if (typeof o.lazy === "object") {
          o.lazy[key] = undefined;
          if (Object.values(o.lazy).every((e) => e === undefined)) {
            o.lazy = undefined;
          }
        }
      })();
      l[key] = c;
      return c;
    }
  }
};
const eB = new WeakMap();
function eW(e) {
  return u._(function* () {
    const t = e.matches.filter((e) => e.shouldLoad);
    const r = {};
    (yield Promise.all(t.map((e) => e.resolve()))).forEach((e, n) => {
      r[t[n].route.id] = e;
    });
    return r;
  })();
}
function e$(e) {
  return u._(function* () {
    if (e.matches.some((e) => e.route.middleware)) {
      return eV(e, () => eW(e));
    }
    return eW(e);
  })();
}
function eV(e, t) {
  let r;
  let n;
  let a;
  let o;
  let i;
  r = e;
  n = t;
  a = (e) => {
    var t;
    var r;
    if (
      ta((t = e)) &&
      ((r = t.status), eR.has(r)) &&
      t.headers.has("Location")
    ) {
      throw e;
    }
    return e;
  };
  o = te;
  i = function (t, r, n) {
    if (n) {
      return Promise.resolve(
        Object.assign(n.value, {
          [r]: {
            type: "error",
            result: t,
          },
        }),
      );
    }
    const { matches } = e;
    const o = Math.min(
      Math.max(
        matches.findIndex((e) => e.route.id === r),
        0,
      ),
      Math.max(
        matches.findIndex((e) => e.shouldCallHandler()),
        0,
      ),
    );
    return Promise.resolve({
      [e7(matches, matches[o].route.id).route.id]: {
        type: "error",
        result: t,
      },
    });
  };
  return u._(function* () {
    const { matches } = r;
    const t = h._(r, ["matches"]);
    const l = matches.flatMap((e) => {
      if (e.route.middleware) {
        return e.route.middleware.map((t) => [e.route.id, t]);
      }
      return [];
    });
    return yield (function e(t, r, n, a, o, i) {
      const l =
        arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      return u._(function* () {
        let s;
        let c;
        const { request } = t;
        if (request.signal.aborted) {
          throw (s = request.signal.reason) != null
            ? s
            : Error(
                "Request aborted: "
                  .concat(request.method, " ")
                  .concat(request.url),
              );
        }
        const h = r[l];
        if (!h) {
          return yield n();
        }
        const [f, p] = h;
        const v = () =>
          u._(function* () {
            if (c) {
              throw Error("You may only call `next()` once per middleware");
            }
            try {
              return (c = {
                value: yield e(t, r, n, a, o, i, l + 1),
              }).value;
            } catch (error) {
              return (c = {
                value: yield i(error, f, c),
              }).value;
            }
          })();
        try {
          const m = yield p(t, v);
          const y = m != null ? a(m) : undefined;
          if (o(y)) {
            return y;
          }
          if (c) {
            if (y != null) {
              return y;
            }
            return c.value;
          }
          return (c = {
            value: yield v(),
          }).value;
        } catch (error) {
          return yield i(error, f, c);
        }
      })();
    })(t, l, n, a, o, i);
  })();
}
function eq(e, t, r, n, a) {
  const middleware = eI({
    key: "middleware",
    route: n.route,
    manifest: t,
    mapRouteProperties: e,
  });
  const i = ((e, t, r, n, a) => {
    const o = r[e.id];
    C(o, "No route found in manifest");
    if (!e.lazy) {
      return {
        lazyRoutePromise: undefined,
        lazyHandlerPromise: undefined,
      };
    }
    if (typeof e.lazy === "function") {
      const i = eB.get(o);
      if (i) {
        return {
          lazyRoutePromise: i,
          lazyHandlerPromise: i,
        };
      }
      const l = u._(function* () {
        C(typeof e.lazy === "function", "No lazy route function found");
        const t = yield e.lazy();
        const r = {};
        for (const a in t) {
          const i = t[a];
          if (i !== undefined) {
            const l = j.has(a);
            const s = o[a] !== undefined && a !== "hasErrorBoundary";
            if (l) {
              _(
                !l,
                "Route property " +
                  a +
                  " is not a supported property to be returned from a lazy route function. This property will be ignored.",
              );
            } else if (s) {
              _(
                !s,
                'Route "'
                  .concat(o.id, '" has a static property "')
                  .concat(
                    a,
                    '" defined but its lazy function is also returning a value for this property. The lazy route property "',
                  )
                  .concat(a, '" will be ignored.'),
              );
            } else {
              r[a] = i;
            }
          }
        }
        Object.assign(o, r);
        Object.assign(
          o,
          d._(c._({}, n(o)), {
            lazy: undefined,
          }),
        );
      })();
      eB.set(o, l);
      l.catch(() => {});
      return {
        lazyRoutePromise: l,
        lazyHandlerPromise: l,
      };
    }
    const s = Object.keys(e.lazy);
    const h = [];
    let lazyHandlerPromise;
    for (const p of s) {
      if (!(a && a.includes(p))) {
        const v = eI({
          key: p,
          route: e,
          manifest: r,
          mapRouteProperties: n,
        });
        if (v) {
          h.push(v);
          if (p === t) {
            lazyHandlerPromise = v;
          }
        }
      }
    }
    const lazyRoutePromise =
      h.length > 0 ? Promise.all(h).then(() => {}) : undefined;
    if (lazyRoutePromise != null) {
      lazyRoutePromise.catch(() => {});
    }
    if (lazyHandlerPromise != null) {
      lazyHandlerPromise.catch(() => {});
    }
    return {
      lazyRoutePromise,
      lazyHandlerPromise,
    };
  })(n.route, to(r.method) ? "action" : "loader", t, e, a);
  return {
    middleware,
    route: i.lazyRoutePromise,
    handler: i.lazyHandlerPromise,
  };
}
function eY(e, t, r, path, a, o, i, scopedContext, shouldLoad) {
  const h =
    arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
  const f = arguments.length > 10 ? arguments[10] : undefined;
  let p = false;
  const _lazyPromises = eq(e, t, r, o, i);
  return d._(c._({}, o), {
    _lazyPromises,
    shouldLoad,
    shouldRevalidateArgs: h,
    shouldCallHandler: (e) => {
      p = true;
      if (h) {
        if (typeof f === "boolean") {
          return eF(
            o,
            d._(c._({}, h), {
              defaultShouldRevalidate: f,
            }),
          );
        }
        if (typeof e === "boolean") {
          return eF(
            o,
            d._(c._({}, h), {
              defaultShouldRevalidate: e,
            }),
          );
        }
        return eF(o, h);
      }
      return shouldLoad;
    },
    resolve(handlerOverride) {
      const { lazy, loader, middleware } = o.route;
      const d =
        p ||
        shouldLoad ||
        (handlerOverride && !to(r.method) && (lazy || loader));
      const h = middleware && middleware.length > 0 && !loader && !lazy;
      if (d && (to(r.method) || !h)) {
        return (function (e) {
          return u
            ._(function* (e) {
              const {
                request,
                path,
                pattern,
                match,
                lazyHandlerPromise,
                lazyRoutePromise,
                handlerOverride,
                scopedContext,
              } = e;
              const c = to(request.method);
              const d = c ? "action" : "loader";
              const h = (e) => {
                var o;
                var i = new Promise((resolve, reject) => (o = reject));
                v = () => o();
                request.signal.addEventListener("abort", v);
                var c = (o) => {
                  if (typeof e !== "function") {
                    return Promise.reject(
                      Error(
                        'You cannot call the handler for a route which defines a boolean "'
                          .concat(d, '" [routeId: ')
                          .concat(match.route.id, "]"),
                      ),
                    );
                  }
                  return e(
                    {
                      request,
                      url: eZ(request, path),
                      pattern,
                      params: match.params,
                      context: scopedContext,
                    },
                    ...(o !== undefined ? [o] : []),
                  );
                };
                return Promise.race([
                  u._(function* () {
                    try {
                      const e = yield handlerOverride
                        ? handlerOverride((e) => c(e))
                        : c();
                      return {
                        type: "data",
                        result: e,
                      };
                    } catch (error) {
                      return {
                        type: "error",
                        result: error,
                      };
                    }
                  })(),
                  i,
                ]);
              };
              try {
                const f = c ? match.route.action : match.route.loader;
                if (lazyHandlerPromise || lazyRoutePromise) {
                  if (f) {
                    var p;
                    var v;
                    let m;
                    const [y] = yield Promise.all([
                      h(f).catch((e) => {
                        m = e;
                      }),
                      lazyHandlerPromise,
                      lazyRoutePromise,
                    ]);
                    if (m !== undefined) {
                      throw m;
                    }
                    p = y;
                  } else {
                    yield lazyHandlerPromise;
                    const g = c ? match.route.action : match.route.loader;
                    if (g) {
                      [p] = yield Promise.all([h(g), lazyRoutePromise]);
                    } else {
                      if (d !== "action") {
                        return {
                          type: "data",
                          result: undefined,
                        };
                      }
                      const b = new URL(request.url);
                      const E = b.pathname + b.search;
                      throw e5(405, {
                        method: request.method,
                        pathname: E,
                        routeId: match.route.id,
                      });
                    }
                  }
                } else if (f) {
                  p = yield h(f);
                } else {
                  const w = new URL(request.url);
                  const x = w.pathname + w.search;
                  throw e5(404, {
                    pathname: x,
                  });
                }
              } catch (error) {
                return {
                  type: "error",
                  result: error,
                };
              } finally {
                if (v) {
                  request.signal.removeEventListener("abort", v);
                }
              }
              return p;
            })
            .apply(this, arguments);
        })({
          request: r,
          path,
          pattern: a,
          match: o,
          lazyHandlerPromise:
            _lazyPromises == null ? undefined : _lazyPromises.handler,
          lazyRoutePromise:
            _lazyPromises == null ? undefined : _lazyPromises.route,
          handlerOverride,
          scopedContext,
        });
      }
      return Promise.resolve({
        type: "data",
        result: undefined,
      });
    },
  });
}
function eJ(e, t, r, n, a, o, i, l) {
  const s =
    arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
  return a.map((u) => {
    if (u.route.id !== o.route.id) {
      return d._(c._({}, u), {
        shouldLoad: false,
        shouldRevalidateArgs: s,
        shouldCallHandler: () => false,
        _lazyPromises: eq(e, t, r, u, i),
        resolve: () =>
          Promise.resolve({
            type: "data",
            result: undefined,
          }),
      });
    }
    return eY(e, t, r, n, es(a), u, i, l, true, s);
  });
}
const eK = [
  "about:",
  "blob:",
  "chrome:",
  "chrome-untrusted:",
  "content:",
  "data:",
  "devtools:",
  "file:",
  "filesystem:",
  "javascript:",
];
function eG(e) {
  try {
    return eK.includes(new URL(e).protocol);
  } catch (e) {
    return false;
  }
}
function eX(e, t, r, history) {
  if (E.test(e)) {
    const a = new URL(w.test(e) ? x(e, t.protocol) : e);
    if (eG(a.toString())) {
      throw Error("Invalid redirect location");
    }
    const o = Y(a.pathname, r) != null;
    if (a.origin === t.origin && o) {
      return Z(a.pathname) + a.search + a.hash;
    }
  }
  try {
    const i = history.createURL(e);
    if (eG(i.toString())) {
      throw Error("Invalid redirect location");
    }
  } catch (e) {}
  return e;
}
function eQ(e, t, signal, n) {
  const a = e.createURL(e9(t)).toString();
  const o = {
    signal,
  };
  if (n && to(n.formMethod)) {
    const { formMethod, formEncType } = n;
    o.method = formMethod.toUpperCase();
    if (formEncType === "application/json") {
      o.headers = new Headers({
        "Content-Type": formEncType,
      });
      o.body = JSON.stringify(n.json);
    } else if (formEncType === "text/plain") {
      o.body = n.text;
    } else if (
      formEncType === "application/x-www-form-urlencoded" &&
      n.formData
    ) {
      o.body = e0(n.formData);
    } else {
      o.body = n.formData;
    }
  }
  return new Request(a, o);
}
function eZ(e, t) {
  const r = new URL(e.url);
  const n = typeof t === "string" ? O(t) : t;
  r.pathname = n.pathname || "/";
  if (n.search) {
    const a = new URLSearchParams(n.search);
    const o = a.getAll("index");
    a.delete("index");
    for (const i of o.filter(Boolean)) {
      a.append("index", i);
    }
    r.search = a.size ? "?".concat(a.toString()) : "";
  } else {
    r.search = "";
  }
  r.hash = n.hash || "";
  return r;
}
function e0(e) {
  const t = new URLSearchParams();
  for (const [r, n] of e.entries()) {
    t.append(r, typeof n === "string" ? n : n.name);
  }
  return t;
}
function e1(e) {
  const t = new FormData();
  for (const [r, n] of e.entries()) {
    t.append(r, n);
  }
  return t;
}
function e2(e, t, loaderResults, n, revalidatingFetchers, fetcherResults, i) {
  let { loaderData, errors } = (function (e, t, r) {
    let n;
    const a =
      arguments.length > 3 && arguments[3] !== undefined && arguments[3];
    const o =
      arguments.length > 4 && arguments[4] !== undefined && arguments[4];
    const i = {};
    let errors_1 = null;
    let s = false;
    const loaderHeaders = {};
    let c = r && tt(r[1]) ? r[1].error : undefined;
    e.forEach((r) => {
      if (r.route.id in t) {
        var d = r.route.id;
        var h = t[d];
        C(!tr(h), "Cannot handle redirect results in processLoaderData");
        if (tt(h)) {
          var f = h.error;
          if (c !== undefined) {
            f = c;
            c = undefined;
          }
          errors_1 = errors_1 || {};
          if (o) {
            errors_1[d] = f;
          } else {
            var p = e7(e, d);
            if (errors_1[p.route.id] == null) {
              errors_1[p.route.id] = f;
            }
          }
          if (!a) {
            i[d] = eO;
          }
          if (!s) {
            s = true;
            n = el(h.error) ? h.error.status : 500;
          }
          if (h.headers) {
            loaderHeaders[d] = h.headers;
          }
        } else {
          i[d] = h.data;
          if (h.statusCode && h.statusCode !== 200 && !s) {
            n = h.statusCode;
          }
          if (h.headers) {
            loaderHeaders[d] = h.headers;
          }
        }
      }
    });
    if (c !== undefined && r) {
      errors_1 = {
        [r[0]]: c,
      };
      if (r[2]) {
        i[r[2]] = undefined;
      }
    }
    return {
      loaderData: i,
      errors: errors_1,
      statusCode: n || 200,
      loaderHeaders,
    };
  })(t, loaderResults, n);
  revalidatingFetchers
    .filter((e) => !e.matches || e.matches.some((e) => e.shouldLoad))
    .forEach((t) => {
      var { key, match, controller } = t;
      if (!controller || !controller.signal.aborted) {
        var l = fetcherResults[key];
        C(l, "Did not find corresponding fetcher result");
        if (tt(l)) {
          var u = e7(e.matches, match == null ? undefined : match.route.id);
          if (!(errors && errors[u.route.id])) {
            errors = d._(c._({}, errors), {
              [u.route.id]: l.error,
            });
          }
          i.delete(key);
        } else if (tr(l)) {
          C(false, "Unhandled fetcher revalidation redirect");
        } else {
          var h = td(l.data);
          i.set(key, h);
        }
      }
    });
  return {
    loaderData,
    errors,
  };
}
function e3(loaderData, t, r, errors) {
  const a = Object.entries(t)
    .filter((e) => {
      var [, t] = e;
      return t !== eO;
    })
    .reduce((acc, entry) => {
      var [r, n] = entry;
      acc[r] = n;
      return acc;
    }, {});
  for (const o of r) {
    const i = o.route.id;
    if (
      !t.hasOwnProperty(i) &&
      loaderData.hasOwnProperty(i) &&
      o.route.loader
    ) {
      a[i] = loaderData[i];
    }
    if (errors && errors.hasOwnProperty(i)) {
      break;
    }
  }
  return a;
}
function e4(e) {
  if (e) {
    if (tt(e[1])) {
      return {
        actionData: {},
      };
    }
    return {
      actionData: {
        [e[0]]: e[1].data,
      },
    };
  }
  return {};
}
function e7(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1) : [...e])
      .reverse()
      .find((e) => e.route.hasErrorBoundary === true) || e[0]
  );
}
function e8(activeRoutes) {
  const t =
    activeRoutes.length === 1
      ? activeRoutes[0]
      : activeRoutes.find((e) => e.index || !e.path || e.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [
      {
        params: {},
        pathname: "",
        pathnameBase: "",
        route: t,
      },
    ],
    route: t,
  };
}
function e5(e) {
  const { pathname, routeId, method, type, message } =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let i = "Unknown Server Error";
  let l = "Unknown @remix-run/router error";
  switch (e) {
    case 400:
      i = "Bad Request";
      if (method && pathname && routeId) {
        l = "You made a "
          .concat(method, ' request to "')
          .concat(pathname, '" but did not provide a `loader` for route "')
          .concat(routeId, '", so there is no way to handle the request.');
      } else if (type === "invalid-body") {
        l = "Unable to encode submission body";
      }
      break;
    case 403:
      i = "Forbidden";
      l = 'Route "'
        .concat(routeId, '" does not match URL "')
        .concat(pathname, '"');
      break;
    case 404:
      i = "Not Found";
      l = 'No route matches URL "'.concat(pathname, '"');
      break;
    default:
      if (e === 405) {
        i = "Method Not Allowed";
        if (method && pathname && routeId) {
          l = "You made a "
            .concat(method.toUpperCase(), ' request to "')
            .concat(pathname, '" but did not provide an `action` for route "')
            .concat(routeId, '", so there is no way to handle the request.');
        } else if (method) {
          l = 'Invalid request method "'.concat(method.toUpperCase(), '"');
        }
      }
  }
  return new cj(e || 500, i, Error(l), true);
}
function e6(e) {
  const t = Object.entries(e);
  for (let r = t.length - 1; r >= 0; r--) {
    const [key, a] = t[r];
    if (tr(a)) {
      return {
        key,
        result: a,
      };
    }
  }
}
function e9(e) {
  const t = typeof e === "string" ? O(e) : e;
  return L(
    d._(c._({}, t), {
      hash: "",
    }),
  );
}
function te(e) {
  return (
    e != null &&
    typeof e === "object" &&
    Object.entries(e).every((e) => {
      var t;
      var [r, n] = e;
      return (
        typeof r === "string" &&
        (t = n) != null &&
        typeof t === "object" &&
        "type" in t &&
        "result" in t &&
        (t.type === "data" || t.type === "error")
      );
    })
  );
}
function tt(e) {
  return e.type === "error";
}
function tr(e) {
  return (e && e.type) === "redirect";
}
function tn(result) {
  return (
    typeof result === "object" &&
    result != null &&
    "type" in result &&
    "data" in result &&
    "init" in result &&
    result.type === "DataWithResponseInit"
  );
}
function ta(e) {
  return (
    e != null &&
    typeof e.status === "number" &&
    typeof e.statusText === "string" &&
    typeof e.headers === "object" &&
    e.body !== undefined
  );
}
function to(e) {
  return ew.has(e.toUpperCase());
}
function ti(e) {
  return new URLSearchParams(e).getAll("index").some((e) => e === "");
}
function tl(e, t) {
  const r = typeof t === "string" ? O(t).search : t.search;
  if (e[e.length - 1].route.index && ti(r || "")) {
    return e[e.length - 1];
  }
  const n = G(e);
  return n[n.length - 1];
}
function ts(e) {
  const { formMethod, formAction, formEncType, text, formData, json } = e;
  if (formMethod && formAction && formEncType) {
    if (text != null) {
      return {
        formMethod,
        formAction,
        formEncType,
        formData: undefined,
        json: undefined,
        text,
      };
    } else if (formData != null) {
      return {
        formMethod,
        formAction,
        formEncType,
        formData,
        json: undefined,
        text: undefined,
      };
    } else if (json !== undefined) {
      return {
        formMethod,
        formAction,
        formEncType,
        formData: undefined,
        json,
        text: undefined,
      };
    }
  }
}
function tu(location, t, r, n) {
  if (n) {
    return {
      state: "loading",
      location,
      matches: t,
      historyAction: r,
      formMethod: n.formMethod,
      formAction: n.formAction,
      formEncType: n.formEncType,
      formData: n.formData,
      json: n.json,
      text: n.text,
    };
  }
  return {
    state: "loading",
    location,
    matches: t,
    historyAction: r,
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined,
  };
}
function tc(e, t) {
  if (e) {
    return {
      state: "loading",
      formMethod: e.formMethod,
      formAction: e.formAction,
      formEncType: e.formEncType,
      formData: e.formData,
      json: e.json,
      text: e.text,
      data: t,
    };
  }
  return {
    state: "loading",
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined,
    data: t,
  };
}
function td(e) {
  return {
    state: "idle",
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined,
    data: e,
  };
}
function th() {
  let resolve;
  let reject;
  var promise = new Promise((resolvePromise, rejectPromise) => {
    resolve = (e) =>
      u._(function* () {
        resolvePromise(e);
        try {
          yield promise;
        } catch (e) {}
      })();
    reject = (e) =>
      u._(function* () {
        rejectPromise(e);
        try {
          yield promise;
        } catch (e) {}
      })();
  });
  return {
    promise,
    resolve,
    reject,
  };
}
const TfContext = p.createContext(null);
TfContext.displayName = "DataRouter";
const TpContext = p.createContext(null);
TpContext.displayName = "DataRouterState";
const TvContext = p.createContext(false);
function useTm() {
  return p.useContext(TvContext);
}
const TyContext = p.createContext({
  isTransitioning: false,
});
TyContext.displayName = "ViewTransition";
const TgContext = p.createContext(new Map());
TgContext.displayName = "Fetchers";
p.createContext(null).displayName = "Await";
const TbContext = p.createContext(null);
TbContext.displayName = "Navigation";
const TEContext = p.createContext(null);
TEContext.displayName = "Location";
const TwContext = p.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false,
});
TwContext.displayName = "Route";
const TxContext = p.createContext(null);
TxContext.displayName = "RouteError";
const tR = "REACT_ROUTER_ERROR";
export function $P(e) {
  const { relative } =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  C(
    useTC(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  const { basename, navigator } = p.useContext(TbContext);
  const { hash, pathname, search } = useTD(e, {
    relative,
  });
  let l = pathname;
  if (basename !== "/") {
    l = pathname === "/" ? basename : ee([basename, pathname]);
  }
  return navigator.createHref({
    pathname: l,
    search,
    hash,
  });
}
function useTC() {
  return p.useContext(TEContext) != null;
}
export function zy() {
  C(
    useTC(),
    "useLocation() may be used only in the context of a <Router> component.",
  );
  return p.useContext(TEContext).location;
}
const tk =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function useTP(e) {
  if (!p.useContext(TbContext).static) {
    p.useLayoutEffect(e);
  }
}
function useTL() {
  const { isDataRoute } = p.useContext(TwContext);
  if (isDataRoute) {
    return (() => {
      let e;
      C((e = p.useContext(TfContext)), tN("useNavigate"));
      const { router } = e;
      const r = useTz("useNavigate");
      const nRef = p.useRef(false);
      useTP(() => {
        nRef.current = true;
      });
      return p.useCallback(
        function (e) {
          const a =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};
          return u._(function* () {
            _(nRef.current, tk);
            if (nRef.current) {
              if (typeof e === "number") {
                yield router.navigate(e);
              } else {
                yield router.navigate(
                  e,
                  c._(
                    {
                      fromRouteId: r,
                    },
                    a,
                  ),
                );
              }
            }
          })();
        },
        [router, r],
      );
    })();
  }
  return (() => {
    C(
      useTC(),
      "useNavigate() may be used only in the context of a <Router> component.",
    );
    const e = p.useContext(TfContext);
    const { basename, navigator } = p.useContext(TbContext);
    const { matches } = p.useContext(TwContext);
    const { pathname } = zy();
    const o = JSON.stringify(X(matches));
    const iRef = p.useRef(false);
    useTP(() => {
      iRef.current = true;
    });
    return p.useCallback(
      function (n) {
        const l =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};
        _(iRef.current, tk);
        if (iRef.current) {
          if (typeof n === "number") {
            return void navigator.go(n);
          }
          const s = Q(n, JSON.parse(o), pathname, l.relative === "path");
          if (e == null && basename !== "/") {
            s.pathname =
              s.pathname === "/" ? basename : ee([basename, s.pathname]);
          }
          eb(
            typeof n === "string" ? n : L(n),
            navigator.createHref(s),
            ey(navigator),
            "reject",
          );
          (l.replace ? navigator.replace : navigator.push)(s, l.state, l);
        }
      },
      [basename, navigator, o, pathname, e],
    );
  })();
}
const TOContext = p.createContext(null);
function useTD(e) {
  const { relative } =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const { matches } = p.useContext(TwContext);
  const { pathname } = zy();
  const a = JSON.stringify(X(matches));
  return p.useMemo(
    () => Q(e, JSON.parse(a), pathname, relative === "path"),
    [e, a, pathname, relative],
  );
}
const tT = p.createElement(function () {
  let e;
  let t;
  let r;
  let n;
  t = p.useContext(TxContext);
  r = useTF("useRouteError");
  n = useTz("useRouteError");
  const a = t !== undefined ? t : (e = r.errors) == null ? undefined : e[n];
  const o = el(a)
    ? "".concat(a.status, " ").concat(a.statusText)
    : a instanceof Error
      ? a.message
      : JSON.stringify(a);
  const i = a instanceof Error ? a.stack : null;
  const backgroundColor = "rgba(200,200,200, 0.5)";
  const s = {
    padding: "2px 4px",
    backgroundColor,
  };
  let u = null;
  console.error("Error handled by React Router default ErrorBoundary:", a);
  u = p.createElement(
    p.Fragment,
    null,
    p.createElement("p", null, "💿 Hey developer 👋"),
    p.createElement(
      "p",
      null,
      "You can provide a way better UX than this when your app throws errors by providing your own ",
      p.createElement(
        "code",
        {
          style: s,
        },
        "ErrorBoundary",
      ),
      " or",
      " ",
      p.createElement(
        "code",
        {
          style: s,
        },
        "errorElement",
      ),
      " prop on your route.",
    ),
  );
  return p.createElement(
    p.Fragment,
    null,
    p.createElement("h2", null, "Unexpected Application Error!"),
    p.createElement(
      "h3",
      {
        style: {
          fontStyle: "italic",
        },
      },
      o,
    ),
    i
      ? p.createElement(
          "pre",
          {
            style: {
              padding: "0.5rem",
              backgroundColor,
            },
          },
          i,
        )
      : null,
    u,
  );
}, null);
class tA extends p.Component {
  static getDerivedStateFromError(e) {
    return {
      error: e,
    };
  }
  static getDerivedStateFromProps(e, t) {
    if (
      t.location !== e.location ||
      (t.revalidation !== "idle" && e.revalidation === "idle")
    ) {
      return {
        error: e.error,
        location: e.location,
        revalidation: e.revalidation,
      };
    }
    return {
      error: e.error !== undefined ? e.error : t.error,
      location: t.location,
      revalidation: e.revalidation || t.revalidation,
    };
  }
  componentDidCatch(e, t) {
    if (this.props.onError) {
      this.props.onError(e, t);
    } else {
      console.error("React Router caught the following error during render", e);
    }
  }
  render() {
    let error = this.state.error;
    if (
      this.context &&
      typeof error === "object" &&
      error &&
      "digest" in error &&
      typeof error.digest === "string"
    ) {
      const t = ((e) => {
        if (
          e.startsWith("".concat(tR, ":").concat("ROUTE_ERROR_RESPONSE", ":{"))
        ) {
          try {
            const t = JSON.parse(e.slice(40));
            if (
              typeof t === "object" &&
              t &&
              typeof t.status === "number" &&
              typeof t.statusText === "string"
            ) {
              return new cj(t.status, t.statusText, t.data);
            }
          } catch (e) {}
        }
      })(error.digest);
      if (t) {
        error = t;
      }
    }
    const r =
      error !== undefined
        ? p.createElement(
            TwContext.Provider,
            {
              value: this.props.routeContext,
            },
            p.createElement(TxContext.Provider, {
              value: error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    if (this.context) {
      return p.createElement(
        TjComponent,
        {
          error,
        },
        r,
      );
    }
    return r;
  }
  constructor(e) {
    super(e);
    this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error,
    };
  }
}
tA.contextType = TvContext;
var tM = new WeakMap();
function TjComponent(e) {
  const { children, error } = e;
  const { basename, navigator } = p.useContext(TbContext);
  if (
    typeof error === "object" &&
    error &&
    "digest" in error &&
    typeof error.digest === "string"
  ) {
    const o = ((e) => {
      if (e.startsWith("".concat(tR, ":").concat("REDIRECT", ":{"))) {
        try {
          const t = JSON.parse(e.slice(28));
          if (
            typeof t === "object" &&
            t &&
            typeof t.status === "number" &&
            typeof t.statusText === "string" &&
            typeof t.location === "string" &&
            typeof t.reloadDocument === "boolean" &&
            typeof t.replace === "boolean"
          ) {
            return t;
          }
        } catch (e) {}
      }
    })(error.digest);
    if (o) {
      const i = tM.get(error);
      if (i) {
        throw i;
      }
      const l = ec(o.location, basename);
      const s = l.absoluteURL || l.to;
      eb(o.location, s, ey(navigator), "allow-explicit");
      if (eG(s)) {
        throw Error("Invalid redirect location");
      }
      if (eu && !tM.get(error)) {
        if (l.isExternal || o.reloadDocument) {
          window.location.href = s;
        } else {
          const u = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(l.to, {
              replace: o.replace,
            }),
          );
          tM.set(error, u);
          throw u;
        }
      }
      return p.createElement("meta", {
        httpEquiv: "refresh",
        content: "0;url=".concat(s),
      });
    }
  }
  return children;
}
function TUComponent(e) {
  const { routeContext, match, children } = e;
  const a = p.useContext(TfContext);
  if (
    a &&
    a.static &&
    a.staticContext &&
    (match.route.errorElement || match.route.ErrorBoundary)
  ) {
    a.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return p.createElement(
    TwContext.Provider,
    {
      value: routeContext,
    },
    children,
  );
}
function tN(e) {
  return "".concat(
    e,
    " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.",
  );
}
function useTF(e) {
  const t = p.useContext(TpContext);
  C(t, tN(e));
  return t;
}
function useTz(e) {
  let t;
  C((t = p.useContext(TwContext)), tN(e));
  const r = t;
  const n = r.matches[r.matches.length - 1];
  C(
    n.route.id,
    "".concat(e, ' can only be used on routes that contain a unique "id"'),
  );
  return n.route.id;
}
export function FE() {
  const { matches, loaderData } = useTF("useMatches");
  return p.useMemo(
    () => matches.map((e) => H(e, loaderData)),
    [matches, loaderData],
  );
}
export function LG() {
  const e = useTF("useLoaderData");
  const t = useTz("useLoaderData");
  return e.loaderData[t];
}
const tB = {};
function tW(e, t, r) {
  if (!(t || tB[e])) {
    tB[e] = true;
    _(false, r);
  }
}
const t$ = {};
function tV(e, t) {
  if (!(e || t$[t])) {
    t$[t] = true;
    console.warn(t);
  }
}
const p_useOptimistic = p.useOptimistic;
const tY = () => undefined;
function mapRouteProperties(e) {
  const t = {
    hasErrorBoundary:
      e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null,
  };
  if (e.Component) {
    if (e.element) {
      _(
        false,
        "You should not include both `Component` and `element` on your route - `Component` will be used.",
      );
    }
    Object.assign(t, {
      element: p.createElement(e.Component),
      Component: undefined,
    });
  }
  if (e.HydrateFallback) {
    if (e.hydrateFallbackElement) {
      _(
        false,
        "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.",
      );
    }
    Object.assign(t, {
      hydrateFallbackElement: p.createElement(e.HydrateFallback),
      HydrateFallback: undefined,
    });
  }
  if (e.ErrorBoundary) {
    if (e.errorElement) {
      _(
        false,
        "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.",
      );
    }
    Object.assign(t, {
      errorElement: p.createElement(e.ErrorBoundary),
      ErrorBoundary: undefined,
    });
  }
  return t;
}
const hydrationRouteProperties = ["HydrateFallback", "hydrateFallbackElement"];
class tG {
  constructor() {
    this.status = "pending";
    this.promise = new Promise((resolve, reject) => {
      this.resolve = (t) => {
        if (this.status === "pending") {
          this.status = "resolved";
          resolve(t);
        }
      };
      this.reject = (e) => {
        if (this.status === "pending") {
          this.status = "rejected";
          reject(e);
        }
      };
    });
  }
}
export function pg(e) {
  let { router, flushSync, onError, useTransitions } = e;
  useTransitions = useTm() || useTransitions;
  const [o, setO] = p.useState(router.state);
  const [l, s] = p_useOptimistic ? p_useOptimistic(o) : [o, tY];
  const [c, setC] = p.useState();
  const [h, setH] = p.useState({
    isTransitioning: false,
  });
  const [v, setV] = p.useState();
  const [y, setY] = p.useState();
  const [b, setB] = p.useState();
  const wRef = p.useRef(new Map());
  const x = p.useCallback(
    (e, o) => {
      var {
        deletedFetchers,
        newErrors,
        flushSync: flushSync_1,
        viewTransitionOpts,
      } = o;
      if (newErrors && onError) {
        Object.values(newErrors).forEach((t) => {
          var r;
          var a;
          return onError(t, {
            location: e.location,
            params:
              (r = (a = e.matches[0]) == null ? undefined : a.params) != null
                ? r
                : {},
            pattern: es(e.matches),
          });
        });
      }
      e.fetchers.forEach((e, t) => {
        if (e.data !== undefined) {
          wRef.current.set(t, e.data);
        }
      });
      deletedFetchers.forEach((e) => wRef.current.delete(e));
      tV(
        flushSync_1 === false || flushSync != null,
        'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.',
      );
      var b =
        router.window != null &&
        router.window.document != null &&
        typeof router.window.document.startViewTransition === "function";
      tV(
        viewTransitionOpts == null || b,
        "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.",
      );
      if (!viewTransitionOpts || !b) {
        return void (flushSync && flushSync_1
          ? flushSync(() => setO(e))
          : useTransitions === false
            ? setO(e)
            : p.startTransition(() => {
                if (useTransitions === true) {
                  s((t) => tQ(t, e));
                }
                setO(e);
              }));
      }
      if (flushSync && flushSync_1) {
        flushSync(() => {
          if (y) {
            if (v != null) {
              v.resolve();
            }
            y.skipTransition();
          }
          setH({
            isTransitioning: true,
            flushSync: true,
            currentLocation: viewTransitionOpts.currentLocation,
            nextLocation: viewTransitionOpts.nextLocation,
          });
        });
        var x = router.window.document.startViewTransition(() => {
          flushSync(() => setO(e));
        });
        x.finished.finally(() => {
          flushSync(() => {
            setV(undefined);
            setY(undefined);
            setC(undefined);
            setH({
              isTransitioning: false,
            });
          });
        });
        flushSync(() => setY(x));
        return;
      }
      if (y) {
        if (v != null) {
          v.resolve();
        }
        y.skipTransition();
        setB({
          state: e,
          currentLocation: viewTransitionOpts.currentLocation,
          nextLocation: viewTransitionOpts.nextLocation,
        });
      } else {
        setC(e);
        setH({
          isTransitioning: true,
          flushSync: false,
          currentLocation: viewTransitionOpts.currentLocation,
          nextLocation: viewTransitionOpts.nextLocation,
        });
      }
    },
    [router.window, flushSync, y, v, useTransitions, s, onError],
  );
  p.useLayoutEffect(() => router.subscribe(x), [router, x]);
  p.useEffect(() => {
    if (h.isTransitioning && !h.flushSync) {
      setV(new tG());
    }
  }, [h]);
  p.useEffect(() => {
    if (v && c && router.window) {
      var e = v.promise;
      var r = router.window.document.startViewTransition(() =>
        u._(function* () {
          if (useTransitions === false) {
            setO(c);
          } else {
            p.startTransition(() => {
              if (useTransitions === true) {
                s((e) => tQ(e, c));
              }
              setO(c);
            });
          }
          yield e;
        })(),
      );
      r.finished.finally(() => {
        setV(undefined);
        setY(undefined);
        setC(undefined);
        setH({
          isTransitioning: false,
        });
      });
      setY(r);
    }
  }, [c, v, router.window, useTransitions, s]);
  p.useEffect(() => {
    if (v && c && l.location.key === c.location.key) {
      v.resolve();
    }
  }, [v, y, l.location, c]);
  p.useEffect(() => {
    if (!h.isTransitioning && b) {
      setC(b.state);
      setH({
        isTransitioning: true,
        flushSync: false,
        currentLocation: b.currentLocation,
        nextLocation: b.nextLocation,
      });
      setB(undefined);
    }
  }, [h.isTransitioning, b]);
  const navigator = p.useMemo(
    () => ({
      createHref: router.createHref,
      createURL: router.createURL,
      encodeLocation: router.encodeLocation,
      go: (e) => router.navigate(e),
      push: (e, r, n) =>
        router.navigate(e, {
          state: r,
          preventScrollReset: n == null ? undefined : n.preventScrollReset,
        }),
      replace: (e, r, n) =>
        router.navigate(e, {
          replace: true,
          state: r,
          preventScrollReset: n == null ? undefined : n.preventScrollReset,
        }),
    }),
    [router],
  );
  const S = router.basename || "/";
  const C = p.useMemo(
    () => ({
      router,
      navigator,
      static: false,
      basename: S,
      onError,
    }),
    [router, navigator, S, onError],
  );
  return p.createElement(
    p.Fragment,
    null,
    p.createElement(
      TfContext.Provider,
      {
        value: C,
      },
      p.createElement(
        TpContext.Provider,
        {
          value: l,
        },
        p.createElement(
          TgContext.Provider,
          {
            value: wRef.current,
          },
          p.createElement(
            TyContext.Provider,
            {
              value: h,
            },
            p.createElement(
              T2Component,
              {
                basename: S,
                location: l.location,
                navigationType: l.historyAction,
                navigator,
                useTransitions,
              },
              p.createElement(tZ, {
                routes: router.routes,
                manifest: router.manifest,
                future: router.future,
                state: l,
                isStatic: false,
                onError,
              }),
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
function tQ(e, t) {
  return d._(c._({}, e), {
    navigation: t.navigation.state !== "idle" ? t.navigation : e.navigation,
    revalidation: t.revalidation !== "idle" ? t.revalidation : e.revalidation,
    actionData:
      t.navigation.state !== "submitting" ? t.actionData : e.actionData,
    fetchers: t.fetchers,
  });
}
var tZ = p.memo(function (e) {
  const { routes, manifest, future, state, isStatic, onError } = e;
  return ((e, t, r) => {
    C(
      useTC(),
      "useRoutes() may be used only in the context of a <Router> component.",
    );
    const { navigator } = p.useContext(TbContext);
    const { matches } = p.useContext(TwContext);
    const o = matches[matches.length - 1];
    const i = o ? o.params : {};
    const l = o ? o.pathname : "/";
    const s = o ? o.pathnameBase : "/";
    const u = o && o.route;
    const d = (u && u.path) || "";
    tW(
      l,
      !u || d.endsWith("*") || d.endsWith("*?"),
      'You rendered descendant <Routes> (or called `useRoutes()`) at "'
        .concat(l, '" (under <Route path="')
        .concat(
          d,
          '">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won\'t match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="',
        )
        .concat(d, '"> to <Route path="')
        .concat(d === "/" ? "*" : "".concat(d, "/*"), '">.'),
    );
    const h = zy();
    if (t) {
      var f;
      let v;
      const m = typeof t === "string" ? O(t) : t;
      C(
        s === "/" || ((v = m.pathname) == null ? undefined : v.startsWith(s)),
        'When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "'
          .concat(s, '" but pathname "')
          .concat(m.pathname, '" was given in the `location` prop.'),
      );
      f = m;
    } else {
      f = h;
    }
    const y = f.pathname || "/";
    let g = y;
    if (s !== "/") {
      const b = s.replace(/^\//, "").split("/");
      g = "/" + y.replace(/^\//, "").split("/").slice(b.length).join("/");
    }
    const E =
      r && r.state.matches.length
        ? r.state.matches.map((e) =>
            Object.assign(e, {
              route: r.manifest[e.route.id] || e.route,
            }),
          )
        : F(e, {
            pathname: g,
          });
    _(
      u || E != null,
      'No routes matched location "'
        .concat(f.pathname)
        .concat(f.search)
        .concat(f.hash, '" '),
    );
    _(
      E == null ||
        E[E.length - 1].route.element !== undefined ||
        E[E.length - 1].route.Component !== undefined ||
        E[E.length - 1].route.lazy !== undefined,
      'Matched leaf route at location "'
        .concat(f.pathname)
        .concat(f.search)
        .concat(
          f.hash,
          '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.',
        ),
    );
    const w = (function (e) {
      const t =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      const r = arguments.length > 2 ? arguments[2] : undefined;
      const n = r == null ? undefined : r.state;
      if (e == null) {
        if (!n) {
          return null;
        }
        if (n.errors) {
          e = n.matches;
        } else {
          if (t.length !== 0 || n.initialized || !(n.matches.length > 0)) {
            return null;
          }
          e = n.matches;
        }
      }
      let a = e;
      const o = n == null ? undefined : n.errors;
      if (o != null) {
        const i = a.findIndex(
          (e) =>
            e.route.id && (o == null ? undefined : o[e.route.id]) !== undefined,
        );
        C(
          i >= 0,
          "Could not find a matching route for errors on route IDs: ".concat(
            Object.keys(o).join(","),
          ),
        );
        a = a.slice(0, Math.min(a.length, i + 1));
      }
      let l = false;
      let s = -1;
      if (r && n) {
        l = n.renderFallback;
        for (let u = 0; u < a.length; u++) {
          const c = a[u];
          if (c.route.HydrateFallback || c.route.hydrateFallbackElement) {
            s = u;
          }
          if (c.route.id) {
            const { loaderData, errors } = n;
            const f =
              c.route.loader &&
              !loaderData.hasOwnProperty(c.route.id) &&
              (!errors || errors[c.route.id] === undefined);
            if (c.route.lazy || f) {
              if (r.isStatic) {
                l = true;
              }
              a = s >= 0 ? a.slice(0, s + 1) : [a[0]];
              break;
            }
          }
        }
      }
      const v = r == null ? undefined : r.onError;
      const onError_1 =
        n && v
          ? (e, errorInfo) => {
              var r;
              var a;
              var o;
              v(e, {
                location: n.location,
                params:
                  (r =
                    (o = n.matches) == null || (a = o[0]) == null
                      ? undefined
                      : a.params) != null
                    ? r
                    : {},
                pattern: es(n.matches),
                errorInfo,
              });
            }
          : undefined;
      return a.reduceRight((outlet, item, index) => {
        var u;
        var c = false;
        var component = null;
        var h = null;
        if (n) {
          u = o && item.route.id ? o[item.route.id] : undefined;
          component = item.route.errorElement || tT;
          if (l) {
            if (s < 0 && index === 0) {
              tW(
                "route-fallback",
                false,
                "No `HydrateFallback` element provided to render during initial hydration",
              );
              c = true;
              h = null;
            } else if (s === index) {
              c = true;
              h = item.route.hydrateFallbackElement || null;
            }
          }
        }
        var f = t.concat(a.slice(0, index + 1));
        var v = () => {
          var children;
          children = u
            ? component
            : c
              ? h
              : item.route.Component
                ? p.createElement(item.route.Component, null)
                : item.route.element
                  ? item.route.element
                  : outlet;
          return p.createElement(TUComponent, {
            match: item,
            routeContext: {
              outlet,
              matches: f,
              isDataRoute: n != null,
            },
            children,
          });
        };
        if (
          n &&
          (item.route.ErrorBoundary || item.route.errorElement || index === 0)
        ) {
          return p.createElement(tA, {
            location: n.location,
            revalidation: n.revalidation,
            component,
            error: u,
            children: v(),
            routeContext: {
              outlet: null,
              matches: f,
              isDataRoute: true,
            },
            onError: onError_1,
          });
        }
        return v();
      }, null);
    })(
      E &&
        E.map((e) => ({
          ...e,
          params: {
            ...i,
            ...e.params,
          },
          pathname: ee([
            s,
            navigator.encodeLocation
              ? navigator.encodeLocation(
                  e.pathname
                    .replace(/%/g, "%25")
                    .replace(/\?/g, "%3F")
                    .replace(/#/g, "%23"),
                ).pathname
              : e.pathname,
          ]),
          pathnameBase:
            e.pathnameBase === "/"
              ? s
              : ee([
                  s,
                  navigator.encodeLocation
                    ? navigator.encodeLocation(
                        e.pathnameBase
                          .replace(/%/g, "%25")
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23"),
                      ).pathname
                    : e.pathnameBase,
                ]),
        })),
      matches,
      r,
    );
    if (t && w) {
      return p.createElement(
        TEContext.Provider,
        {
          value: {
            location: c._(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                mask: undefined,
              },
              f,
            ),
            navigationType: "POP",
          },
        },
        w,
      );
    }
    return w;
  })(routes, undefined, {
    manifest,
    state,
    isStatic,
    onError,
    future,
  });
});
export function sv(e) {
  let t;
  let r;
  t = e.context;
  r = p.useContext(TwContext).outlet;
  return p.useMemo(
    () =>
      r &&
      p.createElement(
        TOContext.Provider,
        {
          value: t,
        },
        r,
      ),
    [r, t],
  );
}
export function qh(e) {
  C(
    false,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function T2Component(e) {
  let {
    basename = "/",
    children = null,
    location,
    navigationType = "POP",
    navigator,
    static: _static = false,
    useTransitions,
  } = e;
  C(
    !useTC(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  const s = basename.replace(/^\/*/, "/");
  const u = p.useMemo(
    () => ({
      basename: s,
      navigator,
      static: _static,
      useTransitions,
      future: {},
    }),
    [s, navigator, _static, useTransitions],
  );
  if (typeof location === "string") {
    location = O(location);
  }
  const {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default",
    mask,
  } = location;
  const y = p.useMemo(() => {
    var e = Y(pathname, s);
    if (e == null) {
      return null;
    }
    return {
      location: {
        pathname: e,
        search,
        hash,
        state,
        key,
        mask,
      },
      navigationType,
    };
  }, [s, pathname, search, hash, state, key, navigationType, mask]);
  _(
    y != null,
    '<Router basename="'
      .concat(s, '"> is not able to match the URL "')
      .concat(pathname)
      .concat(search)
      .concat(
        hash,
        "\" because it does not start with the basename, so the <Router> won't render anything.",
      ),
  );
  if (y == null) {
    return null;
  }
  return p.createElement(
    TbContext.Provider,
    {
      value: u,
    },
    p.createElement(TEContext.Provider, {
      children,
      value: y,
    }),
  );
}
p.Component;
export var Eu = function e(t) {
  const r =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const n = [];
  p.Children.forEach(t, (t, a) => {
    if (p.isValidElement(t)) {
      var o = [...r, a];
      if (t.type === p.Fragment) {
        return void n.push.apply(n, e(t.props.children, o));
      }
      C(
        t.type === qh,
        "[".concat(
          typeof t.type === "string" ? t.type : t.type.name,
          "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>",
        ),
      );
      C(
        !t.props.index || !t.props.children,
        "An index route cannot have child routes.",
      );
      var i = {
        id: t.props.id || o.join("-"),
        caseSensitive: t.props.caseSensitive,
        element: t.props.element,
        Component: t.props.Component,
        index: t.props.index,
        path: t.props.path,
        middleware: t.props.middleware,
        loader: t.props.loader,
        action: t.props.action,
        hydrateFallbackElement: t.props.hydrateFallbackElement,
        HydrateFallback: t.props.HydrateFallback,
        errorElement: t.props.errorElement,
        ErrorBoundary: t.props.ErrorBoundary,
        hasErrorBoundary:
          t.props.hasErrorBoundary === true ||
          t.props.ErrorBoundary != null ||
          t.props.errorElement != null,
        shouldRevalidate: t.props.shouldRevalidate,
        handle: t.props.handle,
        lazy: t.props.lazy,
      };
      if (t.props.children) {
        i.children = e(t.props.children, o);
      }
      n.push(i);
    }
  });
  return n;
};
const t4 = "application/x-www-form-urlencoded";
function t7(e) {
  return typeof HTMLElement !== "undefined" && e instanceof HTMLElement;
}
function t8() {
  const e =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return new URLSearchParams(
    typeof e === "string" || Array.isArray(e) || e instanceof URLSearchParams
      ? e
      : Object.keys(e).reduce((acc, key) => {
          var n = e[key];
          return acc.concat(
            Array.isArray(n) ? n.map((e) => [key, e]) : [[key, n]],
          );
        }, []),
  );
}
let t5 = null;
const t6 = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function t9(e) {
  if (e == null || t6.has(e)) {
    return e;
  }
  _(
    false,
    '"'
      .concat(
        e,
        '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` and will default to "',
      )
      .concat(t4, '"'),
  );
  return null;
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
typeof window !== "undefined" && window;
function re(e, t) {
  if (e === false || e == null) {
    throw Error(t);
  }
}
function rt(page, basename, r, n) {
  const a =
    typeof page === "string"
      ? new URL(
          page,
          typeof window === "undefined"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : page;
  if (r) {
    if (a.pathname.endsWith("/")) {
      a.pathname = "".concat(a.pathname, "_.").concat(n);
    } else {
      a.pathname = "".concat(a.pathname, ".").concat(n);
    }
  } else if (a.pathname === "/") {
    a.pathname = "_root.".concat(n);
  } else if (basename && Y(a.pathname, basename) === "/") {
    a.pathname = "".concat(et(basename), "/_root.").concat(n);
  } else {
    a.pathname = "".concat(et(a.pathname), ".").concat(n);
  }
  return a;
}
function rr(e) {
  return (
    e != null &&
    (e.href == null
      ? e.rel === "preload" &&
        typeof e.imageSrcSet === "string" &&
        typeof e.imageSizes === "string"
      : typeof e.rel === "string" && typeof e.href === "string")
  );
}
function rn(page, matches, r, manifest, a, o) {
  const i = (e, t) => !r[t] || e.route.id !== r[t].route.id;
  const l = (e, t) => {
    var n;
    return (
      r[t].pathname !== e.pathname ||
      (((n = r[t].route.path) == null ? undefined : n.endsWith("*")) &&
        r[t].params["*"] !== e.params["*"])
    );
  };
  switch (o) {
    case "assets":
      return matches.filter((e, t) => i(e, t) || l(e, t));
    case "data":
      return matches.filter((t, o) => {
        var s = manifest.routes[t.route.id];
        if (!s || !s.hasLoader) {
          return false;
        }
        if (i(t, o) || l(t, o)) {
          return true;
        }
        if (t.route.shouldRevalidate) {
          var u;
          var c = t.route.shouldRevalidate({
            currentUrl: new URL(a.pathname + a.search + a.hash, window.origin),
            currentParams: ((u = r[0]) == null ? undefined : u.params) || {},
            nextUrl: new URL(page, window.origin),
            nextParams: t.params,
            defaultShouldRevalidate: true,
          });
          if (typeof c === "boolean") {
            return c;
          }
        }
        return true;
      });
    default:
      return [];
  }
}
function ra(e, manifest) {
  const { includeHydrateFallback } =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return [
    ...new Set(
      e
        .map((e) => {
          var n = manifest.routes[e.route.id];
          if (!n) {
            return [];
          }
          var a = [n.module];
          if (n.clientActionModule) {
            a = a.concat(n.clientActionModule);
          }
          if (n.clientLoaderModule) {
            a = a.concat(n.clientLoaderModule);
          }
          if (includeHydrateFallback && n.hydrateFallbackModule) {
            a = a.concat(n.hydrateFallbackModule);
          }
          if (n.imports) {
            a = a.concat(n.imports);
          }
          return a;
        })
        .flat(1),
    ),
  ];
}
function useRo() {
  const e = p.useContext(TfContext);
  re(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element",
  );
  return e;
}
function useRi() {
  const e = p.useContext(TpContext);
  re(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element",
  );
  return e;
}
Symbol("SingleFetchRedirect");
const RlContext = p.createContext(undefined);
function useRs() {
  const e = p.useContext(RlContext);
  re(e, "You must render this element inside a <HydratedRouter> element");
  return e;
}
function ru(e, t) {
  return (r) => {
    if (e) {
      e(r);
    }
    if (!r.defaultPrevented) {
      t(r);
    }
  };
}
function RcComponent(e) {
  const { page } = e;
  let r = h._(e, ["page"]);
  const n = useTm();
  const { nonce } = useRs();
  const { router } = useRo();
  const i = p.useMemo(
    () => F(router.routes, page, router.basename),
    [router.routes, page, router.basename],
  );
  if (i) {
    if (r.nonce == null && nonce) {
      r = d._(c._({}, r), {
        nonce,
      });
    }
    if (n) {
      return p.createElement(
        RdComponent,
        c._(
          {
            page,
            matches: i,
          },
          r,
        ),
      );
    }
    return p.createElement(
      RhComponent,
      c._(
        {
          page,
          matches: i,
        },
        r,
      ),
    );
  }
  return null;
}
function RdComponent(e) {
  const { page, matches } = e;
  const n = h._(e, ["page", "matches"]);
  const a = zy();
  const { future } = useRs();
  const { basename } = useRo();
  const l = p.useMemo(() => {
    if (page === a.pathname + a.search + a.hash) {
      return [];
    }
    var e = rt(page, basename, future.v8_trailingSlashAwareDataRequests, "rsc");
    var n = false;
    var l = [];
    for (var s of matches) {
      if (typeof s.route.shouldRevalidate === "function") {
        n = true;
      } else {
        l.push(s.route.id);
      }
    }
    if (n && l.length > 0) {
      e.searchParams.set("_routes", l.join(","));
    }
    return [e.pathname + e.search];
  }, [basename, future.v8_trailingSlashAwareDataRequests, page, a, matches]);
  return p.createElement(
    p.Fragment,
    null,
    l.map((e) =>
      p.createElement(
        "link",
        c._(
          {
            key: e,
            rel: "prefetch",
            as: "fetch",
            href: e,
          },
          n,
        ),
      ),
    ),
  );
}
function RhComponent(e) {
  const { page, matches } = e;
  const n = h._(e, ["page", "matches"]);
  const a = zy();
  const { future, manifest, routeModules } = useRs();
  const { basename } = useRo();
  const { loaderData, matches: matches_1 } = useRi();
  const m = p.useMemo(
    () => rn(page, matches, matches_1, manifest, a, "data"),
    [page, matches, matches_1, manifest, a],
  );
  const y = p.useMemo(
    () => rn(page, matches, matches_1, manifest, a, "assets"),
    [page, matches, matches_1, manifest, a],
  );
  const g = p.useMemo(() => {
    if (page === a.pathname + a.search + a.hash) {
      return [];
    }
    var e = new Set();
    var n = false;
    matches.forEach((t) => {
      var r;
      var a = manifest.routes[t.route.id];
      if (a && a.hasLoader) {
        if (
          (!m.some((e) => e.route.id === t.route.id) &&
            t.route.id in loaderData &&
            ((r = routeModules[t.route.id]) == null
              ? undefined
              : r.shouldRevalidate)) ||
          a.hasClientLoader
        ) {
          n = true;
        } else {
          e.add(t.route.id);
        }
      }
    });
    if (e.size === 0) {
      return [];
    }
    var u = rt(
      page,
      basename,
      future.v8_trailingSlashAwareDataRequests,
      "data",
    );
    if (n && e.size > 0) {
      u.searchParams.set(
        "_routes",
        matches
          .filter((t) => e.has(t.route.id))
          .map((e) => e.route.id)
          .join(","),
      );
    }
    return [u.pathname + u.search];
  }, [
    basename,
    future.v8_trailingSlashAwareDataRequests,
    loaderData,
    a,
    manifest,
    m,
    matches,
    page,
    routeModules,
  ]);
  const b = p.useMemo(() => ra(y, manifest), [y, manifest]);
  const E = ((e) => {
    const { manifest, routeModules } = useRs();
    const [n, setN] = p.useState([]);
    p.useEffect(() => {
      var n = false;
      u._(function* () {
        let n;
        let a;
        let o;
        n = (yield Promise.all(
          e.map((e) =>
            u._(function* () {
              const n = manifest.routes[e.route.id];
              if (n) {
                const a = yield u._(function* () {
                  if (n.id in routeModules) {
                    return routeModules[n.id];
                  }
                  try {
                    const e = yield import(n.module);
                    routeModules[n.id] = e;
                    return e;
                  } catch (error) {
                    console.error(
                      "Error loading route module `".concat(
                        n.module,
                        "`, reloading page...",
                      ),
                    );
                    console.error(error);
                    window.__reactRouterContext &&
                      window.__reactRouterContext.isSpaMode;
                    window.location.reload();
                    return new Promise(() => {});
                  }
                })();
                if (a.links) {
                  return a.links();
                }
                return [];
              }
              return [];
            })(),
          ),
        ))
          .flat(1)
          .filter(rr)
          .filter((e) => e.rel === "stylesheet" || e.rel === "preload")
          .map((e) => {
            if (e.rel === "stylesheet") {
              return d._(c._({}, e), {
                rel: "prefetch",
                as: "style",
              });
            }
            return d._(c._({}, e), {
              rel: "prefetch",
            });
          });
        a = new Set();
        o = new Set(undefined);
        return n.reduce((acc, link) => {
          false;
          var r = JSON.stringify(
            ((e) => {
              const t = {};
              for (const r of Object.keys(e).sort()) {
                t[r] = e[r];
              }
              return t;
            })(link),
          );
          if (!a.has(r)) {
            a.add(r);
            acc.push({
              key: r,
              link,
            });
          }
          return acc;
        }, []);
      })().then((e) => {
        if (!n) {
          setN(e);
        }
      });
      return () => {
        n = true;
      };
    }, [e, manifest, routeModules]);
    return n;
  })(y);
  return p.createElement(
    p.Fragment,
    null,
    g.map((e) =>
      p.createElement(
        "link",
        c._(
          {
            key: e,
            rel: "prefetch",
            as: "fetch",
            href: e,
          },
          n,
        ),
      ),
    ),
    b.map((e) =>
      p.createElement(
        "link",
        c._(
          {
            key: e,
            rel: "modulepreload",
            href: e,
          },
          n,
        ),
      ),
    ),
    E.map((e) => {
      var t;
      var { key, link } = e;
      return p.createElement(
        "link",
        d._(
          c._(
            {
              key,
              nonce: n.nonce,
            },
            link,
          ),
          {
            crossOrigin: (t = link.crossOrigin) != null ? t : n.crossOrigin,
          },
        ),
      );
    }),
  );
}
RlContext.displayName = "FrameworkContext";
p.Component;
const rf =
  typeof window !== "undefined" &&
  window.document !== undefined &&
  window.document.createElement !== undefined;
try {
  if (rf) {
    window.__reactRouterVersion = "7.18.4";
  }
} catch (e) {}
export function Ys(e, t) {
  return eT({
    basename: t == null ? undefined : t.basename,
    getContext: t == null ? undefined : t.getContext,
    future: t == null ? undefined : t.future,
    history: (function () {
      const e =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return D(
        function (e, t) {
          let r;
          const n = (r = t.state) == null ? undefined : r.masked;
          const { pathname, search, hash } = n || e.location;
          return P(
            "",
            {
              pathname,
              search,
              hash,
            },
            (t.state && t.state.usr) || null,
            (t.state && t.state.key) || "default",
            n
              ? {
                  pathname: e.location.pathname,
                  search: e.location.search,
                  hash: e.location.hash,
                }
              : undefined,
          );
        },
        function (e, t) {
          if (typeof t === "string") {
            return t;
          }
          return L(t);
        },
        null,
        e,
      );
    })({
      window: t == null ? undefined : t.window,
    }),
    hydrationData: (t == null ? undefined : t.hydrationData) || rm(),
    routes: e,
    mapRouteProperties,
    hydrationRouteProperties,
    dataStrategy: t == null ? undefined : t.dataStrategy,
    patchRoutesOnNavigation: t == null ? undefined : t.patchRoutesOnNavigation,
    window: t == null ? undefined : t.window,
    instrumentations: t == null ? undefined : t.instrumentations,
  }).initialize();
}
export function Ge(e, t) {
  return eT({
    basename: t == null ? undefined : t.basename,
    getContext: t == null ? undefined : t.getContext,
    future: t == null ? undefined : t.future,
    history: (function () {
      const e =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return D(
        function (e, t) {
          let {
            pathname = "/",
            search = "",
            hash = "",
          } = O(e.location.hash.substring(1));
          if (!(pathname.startsWith("/") || pathname.startsWith("."))) {
            pathname = "/" + pathname;
          }
          return P(
            "",
            {
              pathname,
              search,
              hash,
            },
            (t.state && t.state.usr) || null,
            (t.state && t.state.key) || "default",
          );
        },
        function (e, t) {
          const r = e.document.querySelector("base");
          let n = "";
          if (r && r.getAttribute("href")) {
            const a = e.location.href;
            const o = a.indexOf("#");
            n = o === -1 ? a : a.slice(0, o);
          }
          return n + "#" + (typeof t === "string" ? t : L(t));
        },
        function (e, t) {
          _(
            e.pathname.charAt(0) === "/",
            "relative pathnames are not supported in hash history.push(".concat(
              JSON.stringify(t),
              ")",
            ),
          );
        },
        e,
      );
    })({
      window: t == null ? undefined : t.window,
    }),
    hydrationData: (t == null ? undefined : t.hydrationData) || rm(),
    routes: e,
    mapRouteProperties,
    hydrationRouteProperties,
    dataStrategy: t == null ? undefined : t.dataStrategy,
    patchRoutesOnNavigation: t == null ? undefined : t.patchRoutesOnNavigation,
    window: t == null ? undefined : t.window,
    instrumentations: t == null ? undefined : t.instrumentations,
  }).initialize();
}
function rm() {
  let e;
  let t = (e = window) == null ? undefined : e.__staticRouterHydrationData;
  if (t && t.errors) {
    t = d._(c._({}, t), {
      errors: ((e) => {
        if (!e) {
          return null;
        }
        const t = Object.entries(e);
        const r = {};
        for (const [n, a] of t) {
          if (a && a.__type === "RouteErrorResponse") {
            r[n] = new cj(a.status, a.statusText, a.data, a.internal === true);
          } else if (a && a.__type === "Error") {
            if (typeof a.__subType === "string" && eo.includes(a.__subType)) {
              const o = window[a.__subType];
              if (typeof o === "function") {
                try {
                  const i = new o(a.message);
                  i.stack = "";
                  r[n] = i;
                } catch (e) {}
              }
            }
            if (r[n] == null) {
              const l = Error(a.message);
              l.stack = "";
              r[n] = l;
            }
          } else {
            r[n] = a;
          }
        }
        return r;
      })(t.errors),
    });
  }
  return t;
}
const ry = p.forwardRef(function (e, t) {
  const [r, ...n] = [e, t];
  let {
    onClick,
    discover = "render",
    prefetch = "none",
    relative,
    reloadDocument,
    replace,
    mask,
    state,
    target,
    to,
    preventScrollReset,
    viewTransition,
    defaultShouldRevalidate,
  } = r;
  const x = h._(r, [
    "onClick",
    "discover",
    "prefetch",
    "relative",
    "reloadDocument",
    "replace",
    "mask",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
    "defaultShouldRevalidate",
  ]);
  const [R] = n;
  const { basename, navigator, useTransitions } = p.useContext(TbContext);
  const k = typeof to === "string" && E.test(to);
  const P = ec(to, basename);
  const page = $P((to = P.to), {
    relative,
  });
  const D = zy();
  let T = null;
  if (mask) {
    const A = Q(mask, [], D.mask ? D.mask.pathname : "/", true);
    if (basename !== "/") {
      A.pathname = A.pathname === "/" ? basename : ee([basename, A.pathname]);
    }
    T = navigator.createHref(A);
  }
  const [M, j, U] = ((e, t) => {
    const r = p.useContext(RlContext);
    const [n, setN] = p.useState(false);
    const [o, setO] = p.useState(false);
    const { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = t;
    const hRef = p.useRef(null);
    p.useEffect(() => {
      if (e === "render") {
        setO(true);
      }
      if (e === "viewport") {
        var t = new IntersectionObserver(
          (e) => {
            e.forEach((e) => {
              setO(e.isIntersecting);
            });
          },
          {
            threshold: 0.5,
          },
        );
        if (hRef.current) {
          t.observe(hRef.current);
        }
        return () => {
          t.disconnect();
        };
      }
    }, [e]);
    p.useEffect(() => {
      if (n) {
        var e = setTimeout(() => {
          setO(true);
        }, 100);
        return () => {
          clearTimeout(e);
        };
      }
    }, [n]);
    const f = () => {
      setN(true);
    };
    const v = () => {
      setN(false);
      setO(false);
    };
    if (r) {
      if (e !== "intent") {
        return [o, hRef, {}];
      }
      return [
        o,
        hRef,
        {
          onFocus: ru(onFocus, f),
          onBlur: ru(onBlur, v),
          onMouseEnter: ru(onMouseEnter, f),
          onMouseLeave: ru(onMouseLeave, v),
          onTouchStart: ru(onTouchStart, f),
        },
      ];
    }
    return [false, hRef, {}];
  })(prefetch, x);
  const N = (function (e) {
    const {
      target,
      replace,
      mask,
      state,
      preventScrollReset,
      relative,
      viewTransition,
      defaultShouldRevalidate,
      useTransitions,
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const c = useTL();
    const d = zy();
    const h = useTD(e, {
      relative,
    });
    return p.useCallback(
      (f) => {
        if (
          f.button === 0 &&
          (!target || target === "_self") &&
          !(f.metaKey || f.altKey || f.ctrlKey || f.shiftKey)
        ) {
          f.preventDefault();
          var replace_1 = replace !== undefined ? replace : L(d) === L(h);
          var m = () =>
            c(e, {
              replace: replace_1,
              mask,
              state,
              preventScrollReset,
              relative,
              viewTransition,
              defaultShouldRevalidate,
            });
          if (useTransitions) {
            p.startTransition(() => m());
          } else {
            m();
          }
        }
      },
      [
        d,
        c,
        h,
        replace,
        mask,
        state,
        target,
        e,
        preventScrollReset,
        relative,
        viewTransition,
        defaultShouldRevalidate,
        useTransitions,
      ],
    );
  })(to, {
    replace,
    mask,
    state,
    target,
    preventScrollReset,
    relative,
    viewTransition,
    defaultShouldRevalidate,
    useTransitions,
  });
  const F = !(P.isExternal || reloadDocument);
  const z = p.createElement(
    "a",
    d._(c._({}, x, U), {
      href: (F ? T : undefined) || P.absoluteURL || page,
      onClick: F
        ? function (e) {
            if (onClick) {
              onClick(e);
            }
            if (!e.defaultPrevented) {
              N(e);
            }
          }
        : onClick,
      ref: (function () {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r];
        }
        return (e) => {
          t.forEach((t) => {
            if (typeof t === "function") {
              t(e);
            } else if (t != null) {
              t.current = e;
            }
          });
        };
      })(R, j),
      target,
      "data-discover": k || discover !== "render" ? undefined : "true",
    }),
  );
  if (M && !k) {
    return p.createElement(
      p.Fragment,
      null,
      z,
      p.createElement(RcComponent, {
        page,
      }),
    );
  }
  return z;
});
ry.displayName = "Link";
p.forwardRef(function (e, t) {
  let className_1;
  const [n, ...a] = [e, t];
  const {
    "aria-current": aria_current = "page",
    caseSensitive = false,
    className = "",
    end = false,
    style,
    to,
    viewTransition,
    children,
  } = n;
  const y = h._(n, [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "viewTransition",
    "children",
  ]);
  const [g] = a;
  const b = useTD(to, {
    relative: y.relative,
  });
  const E = zy();
  const w = p.useContext(TpContext);
  const { navigator, basename } = p.useContext(TbContext);
  const isTransitioning =
    w != null &&
    (function (e) {
      const { relative } =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const r = p.useContext(TyContext);
      C(
        r != null,
        "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
      );
      const { basename } = useRg("useViewTransitionState");
      const a = useTD(e, {
        relative,
      });
      if (!r.isTransitioning) {
        return false;
      }
      const o =
        Y(r.currentLocation.pathname, basename) || r.currentLocation.pathname;
      const i = Y(r.nextLocation.pathname, basename) || r.nextLocation.pathname;
      return $(a.pathname, i) != null || $(a.pathname, o) != null;
    })(b) &&
    viewTransition === true;
  let _ = navigator.encodeLocation
    ? navigator.encodeLocation(b).pathname
    : b.pathname;
  let E_pathname = E.pathname;
  let P =
    w && w.navigation && w.navigation.location
      ? w.navigation.location.pathname
      : null;
  if (!caseSensitive) {
    E_pathname = E_pathname.toLowerCase();
    P = P ? P.toLowerCase() : null;
    _ = _.toLowerCase();
  }
  if (P && basename) {
    P = Y(P, basename) || P;
  }
  const L = _ !== "/" && _.endsWith("/") ? _.length - 1 : _.length;
  const isActive =
    E_pathname === _ ||
    (!end && E_pathname.startsWith(_) && E_pathname.charAt(L) === "/");
  const isPending =
    P != null &&
    (P === _ || (!end && P.startsWith(_) && P.charAt(_.length) === "/"));
  const T = {
    isActive,
    isPending,
    isTransitioning,
  };
  const A = isActive ? aria_current : undefined;
  className_1 =
    typeof className === "function"
      ? className(T)
      : [
          className,
          isActive ? "active" : null,
          isPending ? "pending" : null,
          isTransitioning ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" ");
  const M = typeof style === "function" ? style(T) : style;
  return p.createElement(
    ry,
    d._(c._({}, y), {
      "aria-current": A,
      className: className_1,
      ref: g,
      style: M,
      to,
      viewTransition,
    }),
    typeof children === "function" ? children(T) : children,
  );
}).displayName = "NavLink";
p.forwardRef((e, t) => {
  var [r, ...n] = [e, t];
  var {
    discover = "render",
    fetcherKey,
    navigate,
    reloadDocument,
    replace,
    state,
    method = "get",
    action,
    onSubmit,
    relative,
    preventScrollReset,
    viewTransition,
    defaultShouldRevalidate,
  } = r;
  var R = h._(r, [
    "discover",
    "fetcherKey",
    "navigate",
    "reloadDocument",
    "replace",
    "state",
    "method",
    "action",
    "onSubmit",
    "relative",
    "preventScrollReset",
    "viewTransition",
    "defaultShouldRevalidate",
  ]);
  var [S] = n;
  var { useTransitions } = p.useContext(TbContext);
  var k = (() => {
    const { router } = useRg("useSubmit");
    const { basename } = p.useContext(TbContext);
    const r = useTz("useRouteId");
    const router_fetch = router.fetch;
    const router_navigate = router.navigate;
    return p.useCallback(
      function (e) {
        const o =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};
        return u._(function* () {
          const { action, method, encType, formData, body } = ((e, t) => {
            if (t7(e) && e.tagName.toLowerCase() === "form") {
              var r;
              var n;
              var encType_1;
              var o;
              var body_1;
              const l = e.getAttribute("action");
              n = l ? Y(l, t) : null;
              r = e.getAttribute("method") || "get";
              encType_1 = t9(e.getAttribute("enctype")) || t4;
              o = new FormData(e);
            } else if (
              (t7(e) && e.tagName.toLowerCase() === "button") ||
              (t7(e) &&
                e.tagName.toLowerCase() === "input" &&
                (e.type === "submit" || e.type === "image"))
            ) {
              const s = e.form;
              if (s == null) {
                throw Error(
                  'Cannot submit a <button> or <input type="submit"> without a <form>',
                );
              }
              const u =
                e.getAttribute("formaction") || s.getAttribute("action");
              n = u ? Y(u, t) : null;
              r =
                e.getAttribute("formmethod") ||
                s.getAttribute("method") ||
                "get";
              encType_1 =
                t9(e.getAttribute("formenctype")) ||
                t9(s.getAttribute("enctype")) ||
                t4;
              o = new FormData(s, e);
              if (
                !(() => {
                  if (t5 === null) {
                    try {
                      new FormData(document.createElement("form"), 0);
                      t5 = false;
                    } catch (e) {
                      t5 = true;
                    }
                  }
                  return t5;
                })()
              ) {
                const { name, type, value } = e;
                if (type === "image") {
                  const f = name ? "".concat(name, ".") : "";
                  o.append("".concat(f, "x"), "0");
                  o.append("".concat(f, "y"), "0");
                } else {
                  if (name) {
                    o.append(name, value);
                  }
                }
              }
            } else if (t7(e)) {
              throw Error(
                'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
              );
            } else {
              r = "get";
              n = null;
              encType_1 = t4;
              body_1 = e;
            }
            if (o && encType_1 === "text/plain") {
              body_1 = o;
              o = undefined;
            }
            return {
              action: n,
              method: r.toLowerCase(),
              encType: encType_1,
              formData: o,
              body: body_1,
            };
          })(e, basename);
          if (o.navigate === false) {
            const d = o.fetcherKey || "__".concat(String(++rE), "__");
            yield router_fetch(d, r, o.action || action, {
              defaultShouldRevalidate: o.defaultShouldRevalidate,
              preventScrollReset: o.preventScrollReset,
              formData,
              body,
              formMethod: o.method || method,
              formEncType: o.encType || encType,
              flushSync: o.flushSync,
            });
          } else {
            yield router_navigate(o.action || action, {
              defaultShouldRevalidate: o.defaultShouldRevalidate,
              preventScrollReset: o.preventScrollReset,
              formData,
              body,
              formMethod: o.method || method,
              formEncType: o.encType || encType,
              replace: o.replace,
              state: o.state,
              fromRouteId: r,
              flushSync: o.flushSync,
              viewTransition: o.viewTransition,
            });
          }
        })();
      },
      [router_fetch, router_navigate, basename, r],
    );
  })();
  var action_1 = (function (e) {
    const { relative } =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const { basename } = p.useContext(TbContext);
    const n = p.useContext(TwContext);
    C(n, "useFormAction must be used inside a RouteContext");
    const [a] = n.matches.slice(-1);
    const o = c._(
      {},
      useTD(e || ".", {
        relative,
      }),
    );
    const i = zy();
    if (e == null) {
      o.search = i.search;
      const l = new URLSearchParams(o.search);
      const s = l.getAll("index");
      if (s.some((e) => e === "")) {
        l.delete("index");
        s.filter((e) => e).forEach((e) => l.append("index", e));
        const u = l.toString();
        o.search = u ? "?".concat(u) : "";
      }
    }
    if ((!e || e === ".") && a.route.index) {
      o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index";
    }
    if (basename !== "/") {
      o.pathname = o.pathname === "/" ? basename : ee([basename, o.pathname]);
    }
    return L(o);
  })(action, {
    relative,
  });
  var O = method.toLowerCase() === "get" ? "get" : "post";
  var D = typeof action === "string" && E.test(action);
  return p.createElement(
    "form",
    d._(
      c._(
        {
          ref: S,
          method: O,
          action: action_1,
          onSubmit: reloadDocument
            ? onSubmit
            : (e) => {
                if (onSubmit) {
                  onSubmit(e);
                }
                if (!e.defaultPrevented) {
                  e.preventDefault();
                  var t = e.nativeEvent.submitter;
                  var r =
                    (t == null ? undefined : t.getAttribute("formmethod")) ||
                    method;
                  var n = () =>
                    k(t || e.currentTarget, {
                      fetcherKey,
                      method: r,
                      navigate,
                      replace,
                      state,
                      relative,
                      preventScrollReset,
                      viewTransition,
                      defaultShouldRevalidate,
                    });
                  if (useTransitions && navigate !== false) {
                    p.startTransition(() => n());
                  } else {
                    n();
                  }
                }
              },
        },
        R,
      ),
      {
        "data-discover": D || discover !== "render" ? undefined : "true",
      },
    ),
  );
}).displayName = "Form";
function useRg(e) {
  let t;
  const r = p.useContext(TfContext);
  C(
    r,
    ((t = e),
    "".concat(
      t,
      " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.",
    )),
  );
  return r;
}
export function ok(e) {
  _(
    typeof URLSearchParams !== "undefined",
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.",
  );
  const tRef = p.useRef(t8(e));
  const rRef = p.useRef(false);
  const n = zy();
  const a = p.useMemo(() => {
    var e;
    var a;
    var o;
    e = n.search;
    a = rRef.current ? null : tRef.current;
    o = t8(e);
    if (a) {
      a.forEach((e, t) => {
        if (!o.has(t)) {
          a.getAll(t).forEach((e) => {
            o.append(t, e);
          });
        }
      });
    }
    return o;
  }, [n.search]);
  const o = useTL();
  const i = p.useCallback(
    (e, t) => {
      var n = t8(typeof e === "function" ? e(new URLSearchParams(a)) : e);
      rRef.current = true;
      o("?" + n, t);
    },
    [o, a],
  );
  return [a, i];
}
var rE = 0;
