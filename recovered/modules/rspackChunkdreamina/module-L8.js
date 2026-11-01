import r from "oa";
import l from "bk";
import a from "z8";
import o from "./module-At_5.js";
import i from "ti";
import s from "bT";
import { A8, fn } from "./module-uZ_2.js";
import { VH } from "./module-ri_2.js";
import { Lt } from "./module-XD_3.js";
import m from "qa";
import { IV } from "./module-Vc_3.js";
function u(pathname) {
  return "/" + pathname.replace(/^\/+|\/+$/g, "");
}
const modifyRoutes = Lt();
const onBeforeCreateRoutes = Lt();
function v(e) {
  let n = 0.001 * new Date().getTime();
  let t = Math.floor(n);
  let r = Math.floor((n % 1) * 1000000000);
  if (e) {
    t -= e[0];
    if ((r -= e[1]) < 0) {
      t--;
      r += 1000000000;
    }
  }
  return [t, r];
}
let y = typeof window !== "undefined" && window.document !== undefined;
let b = async () => {
  if (y) {
    console.error("You should not get async storage in browser");
  }
  return null;
};
function w(e, n) {
  if (e === false || e == null) {
    throw Error(n);
  }
}
class k extends Error {}
class S {
  trackPromise(e, n) {
    if (!(n instanceof Promise)) {
      return n;
    }
    this.deferredKeys.push(e);
    this.pendingKeysSet.add(e);
    let t = Promise.race([n, this.abortPromise]).then(
      (n) => this.onSettle(t, e, undefined, n),
      (n) => this.onSettle(t, e, n),
    );
    t.catch(() => {});
    Object.defineProperty(t, "_tracked", {
      get: () => true,
    });
    return t;
  }
  onSettle(e, n, t, r) {
    if (this.controller.signal.aborted && t instanceof k) {
      this.unlistenAbortSignal();
      Object.defineProperty(e, "_error", {
        get: () => t,
      });
      return Promise.reject(t);
    }
    this.pendingKeysSet.delete(n);
    if (this.done) {
      this.unlistenAbortSignal();
    }
    if (t === undefined && r === undefined) {
      let t = Error(
        `Deferred data for key "${n}" resolved/rejected with \`undefined\`, you must resolve/reject with a value or \`null\`.`,
      );
      Object.defineProperty(e, "_error", {
        get: () => t,
      });
      this.emit(false, n);
      return Promise.reject(t);
    }
    if (r === undefined) {
      Object.defineProperty(e, "_error", {
        get: () => t,
      });
      this.emit(false, n);
      return Promise.reject(t);
    }
    Object.defineProperty(e, "_data", {
      get: () => r,
    });
    this.emit(false, n);
    return r;
  }
  emit(e, n) {
    this.subscribers.forEach((t) => t(e, n));
  }
  subscribe(e) {
    this.subscribers.add(e);
    return () => this.subscribers.delete(e);
  }
  cancel() {
    this.controller.abort();
    this.pendingKeysSet.forEach((e, n) => this.pendingKeysSet.delete(n));
    this.emit(true);
  }
  async resolveData(e) {
    let n = false;
    if (!this.done) {
      let t = () => this.cancel();
      e.addEventListener("abort", t);
      n = await new Promise((resolve) => {
        this.subscribe((r) => {
          e.removeEventListener("abort", t);
          if (r || this.done) {
            resolve(r);
          }
        });
      });
    }
    return n;
  }
  get done() {
    return this.pendingKeysSet.size === 0;
  }
  get unwrappedData() {
    w(
      this.data !== null && this.done,
      "Can only unwrap data on initialized and settled deferreds",
    );
    return Object.entries(this.data).reduce(
      (acc, [n, t]) =>
        Object.assign(acc, {
          [n]: ((e) => {
            if (!(e instanceof Promise && e._tracked === true)) {
              return e;
            }
            if (e._error) {
              throw e._error;
            }
            return e._data;
          })(t),
        }),
      {},
    );
  }
  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }
  constructor(e, n) {
    let t;
    this.pendingKeysSet = new Set();
    this.subscribers = new Set();
    this.__modern_deferred = true;
    this.deferredKeys = [];
    w(
      e && typeof e === "object" && !Array.isArray(e),
      "defer() only accepts plain objects",
    );
    this.abortPromise = new Promise((resolve, reject) => (t = reject));
    this.controller = new AbortController();
    let r = () => t(new k("Deferred data aborted"));
    this.unlistenAbortSignal = () =>
      this.controller.signal.removeEventListener("abort", r);
    this.controller.signal.addEventListener("abort", r);
    this.data = Object.entries(e).reduce(
      (acc, [n, t]) =>
        Object.assign(acc, {
          [n]: this.trackPromise(n, t),
        }),
      {},
    );
    if (this.done) {
      this.unlistenAbortSignal();
    }
    this.init = n;
  }
}
let x = new Map();
let E = (parent_1, n = {}) => {
  let t;
  let { children, index, id, component, isRoot, lazyImport, config, handle } =
    parent_1;
  let { parent, props = {} } = n;
  let y = {
    caseSensitive: parent_1.caseSensitive,
    path: parent_1.path,
    id: parent_1.id,
    loader: ((e) => {
      let { loader } = e;
      if (loader) {
        return async (t) => {
          let r;
          if (typeof e.lazyImport === "function") {
            C(e.lazyImport);
          }
          r = v();
          let l = () =>
            ((e) => {
              let [n, t] = v(e);
              return 1000 * n + t / 1000000;
            })(r);
          let a = await loader(t);
          let o = null;
          o =
            typeof document === "undefined"
              ? (await b())?.useContext()?.activeDeferreds
              : x;
          if (
            a != null &&
            typeof a === "object" &&
            Object.getPrototypeOf(a) === Object.prototype
          ) {
            let n = new S(a);
            o.set(e.id, n);
          }
          let i = l();
          if (typeof document === "undefined") {
            let n = await b();
            n?.useContext().monitors?.timing(
              `${IV}-${e.id?.replace(/\//g, "_")}`,
              i,
            );
          }
          return a;
        };
      }
      return () => {
        if (typeof e.lazyImport === "function") {
          C(e.lazyImport);
        }
        return null;
      };
    })(parent_1),
    action: parent_1.action,
    hasErrorBoundary: parent_1.hasErrorBoundary,
    shouldRevalidate: parent_1.shouldRevalidate,
    handle: {
      ...handle,
      ...(typeof config === "object" ? config?.handle : {}),
    },
    index: parent_1.index,
    element: parent_1.element,
    errorElement: parent_1.errorElement,
  };
  if (parent_1.error) {
    y.errorElement = a.jsx(parent_1.error, {});
  }
  if (component) {
    if (parent?.loading && lazyImport) {
      let e = parent.loading;
      t = _(component)
        ? a.jsx(component, {
            fallback: a.jsx(e, {}),
          })
        : a.jsx(s.Suspense, {
            fallback: a.jsx(e, {}),
            children: a.jsx(component, {}),
          });
    } else {
      t =
        _(component) && lazyImport
          ? a.jsx(component, {})
          : isRoot
            ? a.jsx(component, {
                ...props,
              })
            : lazyImport
              ? a.jsx(s.Suspense, {
                  fallback: null,
                  children: a.jsx(component, {}),
                })
              : a.jsx(component, {});
    }
  } else {
    parent_1.loading = parent?.loading;
    y.element = a.jsx(i.sv, {});
  }
  if (t) {
    y.element = t;
  }
  if (parent_1.loading) {
    y.hydrateFallbackElement = a.jsx(parent_1.loading, {});
  }
  let children_1 = children?.map((n) =>
    E(n, {
      parent: parent_1,
    }),
  );
  if (index) {
    return a.jsx(
      i.qh,
      {
        ...y,
        index: true,
      },
      id,
    );
  }
  return a.jsx(
    i.qh,
    {
      ...y,
      index: false,
      children: children_1,
    },
    id,
  );
};
function C(lazyImport) {
  lazyImport().catch(() => {});
}
function _(component) {
  return (
    component &&
    component.displayName === "Loadable" &&
    component.preload &&
    typeof component.preload === "function"
  );
}
const P = () =>
  a.jsx("div", {
    style: {
      margin: "150px auto",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    children: "404",
  });
const N = () => null;
const z = function () {
  let e;
  for (var n = arguments.length, t = Array(n), r = 0; r < n; r++) {
    t[r] = arguments[r];
  }
  const l = RegExp(`/{1,}`, "g");
  if ((e = t.join("/").replace(l, "/")) && typeof e === "string") {
    if (e.startsWith(".")) {
      e = e.slice(1);
    }
    if (!e.startsWith("/")) {
      e = "/".concat(e);
    }
    if (e.endsWith("/") && e !== "/") {
      e = e.slice(0, e.length - 1);
    }
  }
  return e;
};
let routesConfig_1 = {
  routes: [],
};
export var jY = function () {
  const e =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    name: "@modern-js/plugin-router",
    registryHooks: {
      modifyRoutes,
      onBeforeCreateRoutes,
    },
    setup: (api) => {
      var t = {
        current: [],
      };
      api.onBeforeRender((n) => {
        if (window._SSR_DATA && e.unstable_reloadOnURLMismatch) {
          var r;
          var { ssrContext } = n;
          var a = u(window.location.pathname);
          var o =
            (ssrContext == null || (r = ssrContext.request) == null
              ? undefined
              : r.pathname) && u(ssrContext.request.pathname);
          if (o && o !== a) {
            console.error(
              "The initial URL "
                .concat(o, " and the URL ")
                .concat(a, " to be hydrated do not match, reload."),
            );
            window.location.reload();
          }
        }
        n.router = {
          useMatches: i.FE,
          useLocation: i.zy,
          useHref: i.$P,
        };
        Object.defineProperty(n, "routes", {
          get: () => t.current,
          enumerable: true,
        });
      });
      api.wrapRoot((u) => {
        var {
          serverBase = [],
          supportHtml5History = true,
          basename = "",
          routesConfig,
          createRoutes,
        } = o.h(api.getRuntimeConfig().router || {}, e);
        if (
          !(routesConfig_1 = r._(
            {
              routes: A8(),
              globalApp: fn(),
            },
            routesConfig,
          )).routes &&
          !createRoutes
        ) {
          return u;
        }
        var selectBasePath = (e) =>
          serverBase.find((n) =>
            ((e, n) => {
              const t =
                n.length > 1 && n.endsWith("/") ? n.slice(0, -1) : n || "/";
              const r = e || "/";
              return r === t || r.startsWith("".concat(t, "/"));
            })(e, n),
          ) || "/";
        var b = null;
        return (e) => {
          var o = ((props, n) => {
            const {
              api,
              createRoutes,
              supportHtml5History,
              selectBasePath,
              basename,
            } = n;
            const p = s.useContext(VH);
            const h = selectBasePath(location.pathname).replace(/^\/*/, "/");
            const basename_1 =
              h === "/" ? z(h, p._internalRouterBaseName || basename || "") : h;
            const { unstable_getBlockNavState } = p;
            let window__ROUTER_DATA = window._ROUTER_DATA;
            return s.useMemo(() => {
              if (
                window__ROUTER_DATA == null
                  ? undefined
                  : window__ROUTER_DATA.errors
              ) {
                window__ROUTER_DATA = l._(r._({}, window__ROUTER_DATA), {
                  errors: ((e) => {
                    if (!e) {
                      return null;
                    }
                    const n = Object.entries(e);
                    const t = {};
                    for (const [r, l] of n) {
                      if (l && l.__type === "RouteErrorResponse") {
                        t[r] = new i.cj(
                          l.status,
                          l.statusText,
                          l.data,
                          l.internal === true,
                        );
                      } else if (l && l.__type === "Error") {
                        const a = Error(l.message);
                        a.stack = l.stack;
                        t[r] = a;
                      } else {
                        t[r] = l;
                      }
                    }
                    return t;
                  })(window__ROUTER_DATA.errors),
                });
              }
              var n = null;
              if (
                !(n = createRoutes
                  ? createRoutes()
                  : i.Eu(
                      ((e) => {
                        const { routesConfig, props, ssrMode } = e;
                        if (!routesConfig) {
                          return null;
                        }
                        const { routes, globalApp } = routesConfig;
                        if (routes) {
                          return ((e, n) => {
                            const { globalApp, ssrMode, props } = n;
                            const u = (e) => {
                              var { Component } = e;
                              var l = m._(e, ["Component"]);
                              if (globalApp) {
                                return a.jsx(
                                  globalApp,
                                  r._(
                                    {
                                      Component,
                                    },
                                    l,
                                  ),
                                );
                              }
                              return a.jsx(Component, r._({}, l));
                            };
                            const s = [];
                            for (const c of e) {
                              if (c.type === "nested") {
                                const f = E(c, {
                                  DeferredDataComponent:
                                    ssrMode === "stream" ? N : undefined,
                                  props,
                                });
                                s.push(f);
                              } else {
                                const d = a.jsx(
                                  i.qh,
                                  {
                                    path: c.path,
                                    element: a.jsx(u, {
                                      Component: c.component,
                                    }),
                                  },
                                  c.path,
                                );
                                s.push(d);
                              }
                            }
                            s.push(
                              a.jsx(
                                i.qh,
                                {
                                  path: "*",
                                  element: a.jsx(P, {}),
                                  loader: () =>
                                    new Response("404", {
                                      status: 404,
                                    }),
                                },
                                "*",
                              ),
                            );
                            return s;
                          })(routes, {
                            globalApp,
                            ssrMode,
                            props,
                          });
                        }
                        return null;
                      })({
                        routesConfig: routesConfig_1,
                        props,
                      }),
                    ))
              ) {
                n = [];
              }
              var routes_1 = api.getHooks().modifyRoutes.call(n);
              var c = supportHtml5History
                ? i.Ys(routes_1, {
                    basename: basename_1,
                    hydrationData: window__ROUTER_DATA,
                  })
                : i.Ge(routes_1, {
                    basename: basename_1,
                    hydrationData: window__ROUTER_DATA,
                  });
              var c_subscribe = c.subscribe;
              c.subscribe = (e) =>
                c_subscribe(function () {
                  for (
                    var n = arguments.length, t = Array(n), r = 0;
                    r < n;
                    r++
                  ) {
                    t[r] = arguments[r];
                  }
                  if (
                    !(unstable_getBlockNavState && unstable_getBlockNavState())
                  ) {
                    return e(...t);
                  }
                });
              return {
                router: c,
                routes: routes_1,
              };
            }, [
              routesConfig_1,
              props,
              basename_1,
              window__ROUTER_DATA,
              unstable_getBlockNavState,
            ]);
          })(e, {
            api,
            createRoutes,
            supportHtml5History,
            selectBasePath,
            basename,
          });
          var router = s.useMemo(() => b || (b = o.router), []);
          var { routes } = o;
          t.current = routes;
          var g = () =>
            a.jsxs(a.Fragment, {
              children: [
                a.jsx(i.pg, {
                  router,
                }),
                a.jsx(T, {}),
                a.jsx(T, {}),
              ],
            });
          if (u) {
            return a.jsx(u, {
              children: a.jsx(g, {}),
            });
          }
          return a.jsx(g, {});
        };
      });
    },
  };
};
var T = () => null;
