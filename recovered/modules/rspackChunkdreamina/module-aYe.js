export var rc;
let r;
let i;
let l;
i = rc || (rc = {});
i.Pop = "POP";
i.Push = "PUSH";
i.Replace = "REPLACE";
let s = "popstate";
export function zR(e = {}) {
  return ((e, t, n = {}) => {
    let { window = document.defaultView, v5Compat = false } = n;
    let window_history = window.history;
    let rc_Pop = rc.Pop;
    let u = null;
    let m = g();
    function g() {
      return (
        window_history.state || {
          idx: null,
        }
      ).idx;
    }
    function v() {
      rc_Pop = rc.Pop;
      let e = g();
      let delta = e == null ? null : e - m;
      m = e;
      if (u) {
        u({
          action: rc_Pop,
          location: b.location,
          delta,
        });
      }
    }
    function createURL(e) {
      let t =
        window.location.origin !== "null"
          ? window.location.origin
          : window.location.href;
      let n = typeof e === "string" ? e : AO(e);
      Oi(
        t,
        "No window.location.(origin|href) available to create URL for href: " +
          (n = n.replace(/ $/, "%20")),
      );
      return new URL(n, t);
    }
    if (m == null) {
      m = 0;
      window_history.replaceState(
        {
          ...window_history.state,
          idx: m,
        },
        "",
      );
    }
    let b = {
      get action() {
        return rc_Pop;
      },
      get location() {
        return e(window, window_history);
      },
      listen(e) {
        if (u) {
          throw Error("A history only accepts one active listener");
        }
        window.addEventListener(s, v);
        u = e;
        return () => {
          window.removeEventListener(s, v);
          u = null;
        };
      },
      createHref: (e) => t(window, e),
      createURL,
      encodeLocation(e) {
        let t = createURL(e);
        return {
          pathname: t.pathname,
          search: t.search,
          hash: t.hash,
        };
      },
      push: function (e, t) {
        rc_Pop = rc.Push;
        let n = d(b.location, e, t);
        let o = p(n, (m = g() + 1));
        let s = b.createHref(n);
        try {
          window_history.pushState(o, "", s);
        } catch (error) {
          if (
            error instanceof DOMException &&
            error.name === "DataCloneError"
          ) {
            throw error;
          }
          window.location.assign(s);
        }
        if (v5Compat && u) {
          u({
            action: rc_Pop,
            location: b.location,
            delta: 1,
          });
        }
      },
      replace: function (e, t) {
        rc_Pop = rc.Replace;
        let n = d(b.location, e, t);
        let r = p(n, (m = g()));
        let o = b.createHref(n);
        window_history.replaceState(r, "", o);
        if (v5Compat && u) {
          u({
            action: rc_Pop,
            location: b.location,
            delta: 0,
          });
        }
      },
      go: (e) => window_history.go(e),
    };
    return b;
  })(
    (e, t) => {
      let { pathname, search, hash } = e.location;
      return d(
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
    (e, t) => {
      if (typeof t === "string") {
        return t;
      }
      return AO(t);
    },
    e,
  );
}
export function Oi(e, t) {
  if (e === false || e == null) {
    throw Error(t);
  }
}
function u(e, t) {
  if (!e) {
    if (typeof console !== "undefined") {
      console.warn(t);
    }
    try {
      throw Error(t);
    } catch (e) {}
  }
}
function p(e, idx) {
  return {
    usr: e.state,
    key: e.key,
    idx,
  };
}
function d(e, t, state = null, a) {
  return {
    pathname: typeof e === "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof t === "string" ? Rr(t) : t),
    state,
    key: (t && t.key) || a || Math.random().toString(36).substr(2, 8),
  };
}
export function AO(e) {
  let { pathname = "/", search = "", hash = "" } = e;
  if (search && search !== "?") {
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  }
  if (hash && hash !== "#") {
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  }
  return pathname;
}
export function Rr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    if (n >= 0) {
      t.hash = e.substr(n);
      e = e.substr(0, n);
    }
    let a = e.indexOf("?");
    if (a >= 0) {
      t.search = e.substr(a);
      e = e.substr(0, a);
    }
    if (e) {
      t.pathname = e;
    }
  }
  return t;
}
export function ue(e, t, n = "/") {
  return ((e, t, n, a) => {
    let r = pb((typeof t === "string" ? Rr(t) : t).pathname || "/", n);
    if (r == null) {
      return null;
    }
    let i = (function e(t, n = [], a = [], r = "") {
      let i = (t, childrenIndex, l) => {
        var o;
        var s;
        let h;
        let u;
        let p = {
          relativePath: l === undefined ? t.path || "" : l,
          caseSensitive: t.caseSensitive === true,
          childrenIndex,
          route: t,
        };
        if (p.relativePath.startsWith("/")) {
          Oi(
            p.relativePath.startsWith(r),
            'Absolute route path "' +
              p.relativePath +
              '" nested under path "' +
              r +
              '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
          );
          p.relativePath = p.relativePath.slice(r.length);
        }
        let path = HS([r, p.relativePath]);
        let routesMeta = a.concat(p);
        if (t.children && t.children.length > 0) {
          Oi(
            t.index !== true,
            'Index routes must not have child routes. Please remove all child routes from route path "' +
              path +
              '".',
          );
          e(t.children, n, routesMeta, path);
        }
        if (t.path != null || t.index) {
          n.push({
            path,
            score:
              ((o = path),
              (s = t.index),
              (u = (h = o.split("/")).length),
              h.some(y) && (u += -2),
              s && (u += 2),
              h
                .filter((e) => !y(e))
                .reduce(
                  (acc, item) =>
                    acc + (v.test(item) ? 3 : item === "" ? 1 : 10),
                  u,
                )),
            routesMeta,
          });
        }
      };
      t.forEach((e, t) => {
        var n;
        if (e.path !== "" && (n = e.path) != null && n.includes("?")) {
          for (let n of (function e(t) {
            let n = t.split("/");
            if (n.length === 0) {
              return [];
            }
            let [a, ...r] = n;
            let i = a.endsWith("?");
            let l = a.replace(/\?$/, "");
            if (r.length === 0) {
              if (i) {
                return [l, ""];
              }
              return [l];
            }
            let o = e(r.join("/"));
            let s = [];
            s.push(
              ...o.map((e) => {
                if (e === "") {
                  return l;
                }
                return [l, e].join("/");
              }),
            );
            if (i) {
              s.push(...o);
            }
            return s.map((e) => {
              if (t.startsWith("/") && e === "") {
                return "/";
              }
              return e;
            });
          })(e.path)) {
            i(e, t, n);
          }
        } else {
          i(e, t);
        }
      });
      return n;
    })(e);
    i.sort((e, t) => {
      var n;
      var a;
      if (e.score !== t.score) {
        return t.score - e.score;
      }
      n = e.routesMeta.map((e) => e.childrenIndex);
      a = t.routesMeta.map((e) => e.childrenIndex);
      if (n.length === a.length && n.slice(0, -1).every((e, t) => e === a[t])) {
        return n[n.length - 1] - a[a.length - 1];
      }
      return 0;
    });
    let l = null;
    for (let e = 0; l == null && e < i.length; ++e) {
      let t = ((e) => {
        try {
          return e
            .split("/")
            .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
            .join("/");
        } catch (error) {
          u(
            false,
            'The URL path "' +
              e +
              '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
              error +
              ").",
          );
          return e;
        }
      })(r);
      l = ((e, t, n = false) => {
        let { routesMeta } = e;
        let params = {};
        let i = "/";
        let l = [];
        for (let e = 0; e < routesMeta.length; ++e) {
          let o = routesMeta[e];
          let end = e === routesMeta.length - 1;
          let h = i === "/" ? t : t.slice(i.length) || "/";
          let c = B6(
            {
              path: o.relativePath,
              caseSensitive: o.caseSensitive,
              end,
            },
            h,
          );
          let route = o.route;
          if (
            !c &&
            end &&
            n &&
            !routesMeta[routesMeta.length - 1].route.index
          ) {
            c = B6(
              {
                path: o.relativePath,
                caseSensitive: o.caseSensitive,
                end: false,
              },
              h,
            );
          }
          if (!c) {
            return null;
          }
          Object.assign(params, c.params);
          l.push({
            params,
            pathname: HS([i, c.pathname]),
            pathnameBase: O(HS([i, c.pathnameBase])),
            route,
          });
          if (c.pathnameBase !== "/") {
            i = HS([i, c.pathnameBase]);
          }
        }
        return l;
      })(i[e], t, a);
    }
    return l;
  })(e, t, n, false);
}
l = r || (r = {});
l.data = "data";
l.deferred = "deferred";
l.redirect = "redirect";
l.error = "error";
let v = /^:[\w-]+$/;
let y = (e) => e === "*";
export function B6(e, t) {
  let n;
  let a;
  let r;
  let i;
  let l;
  if (typeof e === "string") {
    e = {
      path: e,
      caseSensitive: false,
      end: true,
    };
  }
  n = e.path;
  a = e.caseSensitive;
  r = e.end;
  if (a === undefined) {
    a = false;
  }
  if (r === undefined) {
    r = true;
  }
  u(
    n === "*" || !n.endsWith("*") || n.endsWith("/*"),
    'Route path "' +
      n +
      '" will be treated as if it were "' +
      n.replace(/\*$/, "/*") +
      '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
      n.replace(/\*$/, "/*") +
      '".',
  );
  i = [];
  l =
    "^" +
    n
      .replace(/\/*\*?$/, "")
      .replace(/^\/*/, "/")
      .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
      .replace(/\/:([\w-]+)(\?)?/g, (e, paramName, n) => {
        i.push({
          paramName,
          isOptional: n != null,
        });
        if (n) {
          return "/?([^\\/]+)?";
        }
        return "/([^\\/]+)";
      });
  if (n.endsWith("*")) {
    i.push({
      paramName: "*",
    });
    l += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (r) {
    l += "\\/*$";
  } else if (n !== "" && n !== "/") {
    l += "(?:(?=\\/|$))";
  }
  let [o, s] = [new RegExp(l, a ? undefined : "i"), i];
  let h = t.match(o);
  if (!h) {
    return null;
  }
  let pathname = h[0];
  let pathnameBase = pathname.replace(/(.)\/+$/, "$1");
  let d = h.slice(1);
  return {
    params: s.reduce((acc, item, index) => {
      let { paramName, isOptional } = item;
      if (paramName === "*") {
        let e = d[index] || "";
        pathnameBase = pathname
          .slice(0, pathname.length - e.length)
          .replace(/(.)\/+$/, "$1");
      }
      let i = d[index];
      if (isOptional && !i) {
        acc[paramName] = undefined;
      } else {
        acc[paramName] = (i || "").replace(/%2F/g, "/");
      }
      return acc;
    }, {}),
    pathname,
    pathnameBase,
    pattern: e,
  };
}
export function pb(e, t) {
  if (t === "/") {
    return e;
  }
  if (!e.toLowerCase().startsWith(t.toLowerCase())) {
    return null;
  }
  let n = t.endsWith("/") ? t.length - 1 : t.length;
  let a = e.charAt(n);
  if (a && a !== "/") {
    return null;
  }
  return e.slice(n) || "/";
}
export function o1(e, t = "/") {
  let n;
  let a;
  let { pathname, search = "", hash = "" } = typeof e === "string" ? Rr(e) : e;
  return {
    pathname: pathname
      ? pathname.startsWith("/")
        ? pathname
        : ((n = pathname),
          (a = t.replace(/\/+$/, "").split("/")),
          n.split("/").forEach((e) => {
            if (e === "..") {
              if (a.length > 1) {
                a.pop();
              }
            } else if (e !== ".") {
              a.push(e);
            }
          }),
          a.length > 1 ? a.join("/") : "/")
      : t,
    search: j(search),
    hash: E(hash),
  };
}
function x(e, t, n, a) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." + t + "` field [") +
    JSON.stringify(a) +
    "].  Please separate it out to the `to." +
    n +
    '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
  );
}
export function yD(e, t) {
  let n = e.filter(
    (e, t) => t === 0 || (e.route.path && e.route.path.length > 0),
  );
  if (t) {
    return n.map((e, t) => {
      if (t === n.length - 1) {
        return e.pathname;
      }
      return e.pathnameBase;
    });
  }
  return n.map((e) => e.pathnameBase);
}
export function Gh(e, t, n, a = false) {
  let r;
  let i;
  if (typeof e === "string") {
    r = Rr(e);
  } else {
    Oi(
      !(r = {
        ...e,
      }).pathname || !r.pathname.includes("?"),
      x("?", "pathname", "search", r),
    );
    Oi(!r.pathname || !r.pathname.includes("#"), x("#", "pathname", "hash", r));
    Oi(!r.search || !r.search.includes("#"), x("#", "search", "hash", r));
  }
  let l = e === "" || r.pathname === "";
  let s = l ? "/" : r.pathname;
  if (s == null) {
    i = n;
  } else {
    let e = t.length - 1;
    if (!a && s.startsWith("..")) {
      let t = s.split("/");
      while (t[0] === "..") {
        t.shift();
        e -= 1;
      }
      r.pathname = t.join("/");
    }
    i = e >= 0 ? t[e] : "/";
  }
  let h = o1(r, i);
  let u = s && s !== "/" && s.endsWith("/");
  let p = (l || s === ".") && n.endsWith("/");
  if (!h.pathname.endsWith("/") && (u || p)) {
    h.pathname += "/";
  }
  return h;
}
export let HS = (e) => e.join("/").replace(/\/\/+/g, "/");
let O = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
let j = (search) => {
  if (search && search !== "?") {
    if (search.startsWith("?")) {
      return search;
    }
    return "?" + search;
  }
  return "";
};
let E = (hash) => {
  if (hash && hash !== "#") {
    if (hash.startsWith("#")) {
      return hash;
    }
    return "#" + hash;
  }
  return "";
};
export class tH extends Error {}
export function pX(e) {
  return (
    e != null &&
    typeof e.status === "number" &&
    typeof e.statusText === "string" &&
    typeof e.internal === "boolean" &&
    "data" in e
  );
}
let L = ["post", "put", "patch", "delete"];
new Set(L);
[...L];
Symbol("deferred");
