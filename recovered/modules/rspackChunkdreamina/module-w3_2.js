import {
  Children,
  Component,
  Fragment,
  createContext,
  createElement,
  isValidElement,
  startTransition,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "./module-ND_2.js";
import s from "aYe";
let n;
let a;
let o;
const CContext = createContext(null);
const DContext = createContext(null);
const HContext = createContext(null);
const FContext = createContext(null);
const PContext = createContext({
  outlet: null,
  matches: [],
  isDataRoute: false,
});
const VContext = createContext(null);
function useM() {
  return useContext(FContext) != null;
}
export function zy() {
  if (!useM()) {
    s.Oi(false);
  }
  return useContext(FContext).location;
}
function useG(e) {
  if (!useContext(HContext).static) {
    useLayoutEffect(e);
  }
}
export function Zp() {
  const { isDataRoute } = useContext(PContext);
  if (isDataRoute) {
    return (() => {
      let e;
      C.UseNavigateStable;
      if (!(e = useContext(CContext))) {
        s.Oi(false);
      }
      const { router } = e;
      const fromRouteId = useK(_.UseNavigateStable);
      const nRef = useRef(false);
      useG(() => {
        nRef.current = true;
      });
      return useCallback(
        function (e, a = {}) {
          if (nRef.current) {
            if (typeof e === "number") {
              router.navigate(e);
            } else {
              router.navigate(e, {
                fromRouteId,
                ...a,
              });
            }
          }
        },
        [router, fromRouteId],
      );
    })();
  }
  return (() => {
    if (!useM()) {
      s.Oi(false);
    }
    const e = useContext(CContext);
    const { basename, future, navigator } = useContext(HContext);
    const { matches } = useContext(PContext);
    const { pathname } = zy();
    const i = JSON.stringify(s.yD(matches, future.v7_relativeSplatPath));
    const uRef = useRef(false);
    useG(() => {
      uRef.current = true;
    });
    return useCallback(
      function (r, a = {}) {
        if (uRef.current) {
          if (typeof r === "number") {
            return void navigator.go(r);
          }
          const l = s.Gh(r, JSON.parse(i), pathname, a.relative === "path");
          if (e == null && basename !== "/") {
            l.pathname =
              l.pathname === "/" ? basename : s.HS([basename, l.pathname]);
          }
          (a.replace ? navigator.replace : navigator.push)(l, a.state, a);
        }
      },
      [basename, navigator, i, pathname, e],
    );
  })();
}
const EContext = createContext(null);
export function P1(e) {
  const outlet = useContext(PContext).outlet;
  if (outlet) {
    return createElement(
      EContext.Provider,
      {
        value: e,
      },
      outlet,
    );
  }
  return outlet;
}
const x = createElement(function () {
  let e;
  let t;
  let r;
  let n;
  let a;
  r = useContext(VContext);
  n = (_.UseRouteError, (e = useContext(DContext)) || s.Oi(false), e);
  a = useK(_.UseRouteError);
  const o = r !== undefined ? r : (t = n.errors) == null ? undefined : t[a];
  const i = s.pX(o)
    ? o.status + " " + o.statusText
    : o instanceof Error
      ? o.message
      : JSON.stringify(o);
  const u = o instanceof Error ? o.stack : null;
  return createElement(
    Fragment,
    null,
    createElement("h2", null, "Unexpected Application Error!"),
    createElement(
      "h3",
      {
        style: {
          fontStyle: "italic",
        },
      },
      i,
    ),
    u
      ? createElement(
          "pre",
          {
            style: {
              padding: "0.5rem",
              backgroundColor: "rgba(200,200,200, 0.5)",
            },
          },
          u,
        )
      : null,
    null,
  );
}, null);
class R extends Component {
  static getDerivedStateFromError(error) {
    return {
      error,
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
    console.error(
      "React Router caught the following error during render",
      e,
      t,
    );
  }
  render() {
    if (this.state.error !== undefined) {
      return createElement(
        PContext.Provider,
        {
          value: this.props.routeContext,
        },
        createElement(VContext.Provider, {
          value: this.state.error,
          children: this.props.component,
        }),
      );
    }
    return this.props.children;
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
function SComponent(e) {
  const { routeContext, match, children } = e;
  const a = useContext(CContext);
  if (
    a &&
    a.static &&
    a.staticContext &&
    (match.route.errorElement || match.route.ErrorBoundary)
  ) {
    a.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return createElement(
    PContext.Provider,
    {
      value: routeContext,
    },
    children,
  );
}
n = C || {};
n.UseBlocker = "useBlocker";
n.UseRevalidator = "useRevalidator";
n.UseNavigateStable = "useNavigate";
var C = n;
a = _ || {};
a.UseBlocker = "useBlocker";
a.UseLoaderData = "useLoaderData";
a.UseActionData = "useActionData";
a.UseRouteError = "useRouteError";
a.UseNavigation = "useNavigation";
a.UseRouteLoaderData = "useRouteLoaderData";
a.UseMatches = "useMatches";
a.UseRevalidator = "useRevalidator";
a.UseNavigateStable = "useNavigate";
a.UseRouteId = "useRouteId";
var _ = a;
function useK(e) {
  let t;
  if (!(t = useContext(PContext))) {
    s.Oi(false);
  }
  const r = t;
  const n = r.matches[r.matches.length - 1];
  if (!n.route.id) {
    s.Oi(false);
  }
  return n.route.id;
}
const P = {};
export function V8(e, t) {
  (e == null || e.v7_startTransition,
  (e == null ? undefined : e.v7_relativeSplatPath) !== undefined ||
    (t && t.v7_relativeSplatPath),
  t) &&
    (t.v7_fetcherPersist,
    t.v7_normalizeFormMethod,
    t.v7_partialHydration,
    t.v7_skipActionErrorRevalidation);
}
export function C5(e) {
  const { to, replace, state, relative } = e;
  if (!useM()) {
    s.Oi(false);
  }
  const { future, static: _static } = useContext(HContext);
  const { matches } = useContext(PContext);
  const { pathname } = zy();
  const d = Zp();
  const f = JSON.stringify(
    s.Gh(
      to,
      s.yD(matches, future.v7_relativeSplatPath),
      pathname,
      relative === "path",
    ),
  );
  useEffect(
    () =>
      d(JSON.parse(f), {
        replace,
        state,
        relative,
      }),
    [d, f, relative, replace, state],
  );
  return null;
}
export function qh(e) {
  s.Oi(false);
}
export function Ix(e) {
  let {
    basename = "/",
    children = null,
    location,
    navigationType = s.rc.Pop,
    navigator,
    static: _static = false,
    future,
  } = e;
  if (useM()) {
    s.Oi(false);
  }
  const basename_1 = basename.replace(/^\/*/, "/");
  const p = useMemo(
    () => ({
      basename: basename_1,
      navigator,
      static: _static,
      future: {
        v7_relativeSplatPath: false,
        ...future,
      },
    }),
    [basename_1, future, navigator, _static],
  );
  if (typeof location === "string") {
    location = s.Rr(location);
  }
  const {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default",
  } = location;
  const w = useMemo(() => {
    var e = s.pb(pathname, basename_1);
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
      },
      navigationType,
    };
  }, [basename_1, pathname, search, hash, state, key, navigationType]);
  if (w == null) {
    return null;
  }
  return createElement(
    HContext.Provider,
    {
      value: p,
    },
    createElement(FContext.Provider, {
      children,
      value: w,
    }),
  );
}
export function BV(e) {
  const { children, location } = e;
  return ((e, t) => {
    if (!useM()) {
      s.Oi(false);
    }
    const { navigator, static: _static } = useContext(HContext);
    const { matches } = useContext(PContext);
    const o = matches[matches.length - 1];
    const i = o ? o.params : {};
    o && o.pathname;
    const c = o ? o.pathnameBase : "/";
    o && o.route;
    const d = zy();
    if (t) {
      var v;
      let g;
      const b = typeof t === "string" ? s.Rr(t) : t;
      if (
        !(c === "/" || ((g = b.pathname) == null ? undefined : g.startsWith(c)))
      ) {
        s.Oi(false);
      }
      v = b;
    } else {
      v = d;
    }
    const E = v.pathname || "/";
    let w = E;
    if (c !== "/") {
      const C = c.replace(/^\//, "").split("/");
      w = "/" + E.replace(/^\//, "").split("/").slice(C.length).join("/");
    }
    const _ = s.ue(e, {
      pathname: w,
    });
    const k = ((e, t = [], r = null, n = null) => {
      if (e == null) {
        if (!r) {
          return null;
        }
        if (r.errors) {
          e = r.matches;
        } else {
          if (
            (o = n) == null ||
            !o.v7_partialHydration ||
            t.length !== 0 ||
            r.initialized ||
            !(r.matches.length > 0)
          ) {
            return null;
          }
          e = r.matches;
        }
      }
      let a;
      var o;
      let i = e;
      const u = (a = r) == null ? undefined : a.errors;
      if (u != null) {
        const c = i.findIndex(
          (e) =>
            e.route.id && (u == null ? undefined : u[e.route.id]) !== undefined,
        );
        if (!(c >= 0)) {
          s.Oi(false);
        }
        i = i.slice(0, Math.min(i.length, c + 1));
      }
      let d = false;
      let h = -1;
      if (r && n && n.v7_partialHydration) {
        for (let f = 0; f < i.length; f++) {
          const p = i[f];
          if (p.route.HydrateFallback || p.route.hydrateFallbackElement) {
            h = f;
          }
          if (p.route.id) {
            const { loaderData, errors } = r;
            const y =
              p.route.loader &&
              loaderData[p.route.id] === undefined &&
              (!errors || errors[p.route.id] === undefined);
            if (p.route.lazy || y) {
              d = true;
              i = h >= 0 ? i.slice(0, h + 1) : [i[0]];
              break;
            }
          }
        }
      }
      return i.reduceRight((outlet, match, index) => {
        var o;
        var s;
        var c = false;
        var component = null;
        var p = null;
        if (r) {
          s = u && match.route.id ? u[match.route.id] : undefined;
          component = match.route.errorElement || x;
          if (d) {
            if (h < 0 && index === 0) {
              o = "route-fallback";
              if (!P[o]) {
                P[o] = true;
              }
              c = true;
              p = null;
            } else if (h === index) {
              c = true;
              p = match.route.hydrateFallbackElement || null;
            }
          }
        }
        var matches_1 = t.concat(i.slice(0, index + 1));
        var m = () => {
          var children_1;
          children_1 = s
            ? component
            : c
              ? p
              : match.route.Component
                ? createElement(match.route.Component, null)
                : match.route.element
                  ? match.route.element
                  : outlet;
          return createElement(SComponent, {
            match,
            routeContext: {
              outlet,
              matches: matches_1,
              isDataRoute: r != null,
            },
            children: children_1,
          });
        };
        if (
          r &&
          (match.route.ErrorBoundary || match.route.errorElement || index === 0)
        ) {
          return createElement(R, {
            location: r.location,
            revalidation: r.revalidation,
            component,
            error: s,
            children: m(),
            routeContext: {
              outlet: null,
              matches: matches_1,
              isDataRoute: true,
            },
          });
        }
        return m();
      }, null);
    })(
      _ &&
        _.map((e) => ({
          ...e,
          params: {
            ...i,
            ...e.params,
          },
          pathname: s.HS([
            c,
            navigator.encodeLocation
              ? navigator.encodeLocation(e.pathname).pathname
              : e.pathname,
          ]),
          pathnameBase:
            e.pathnameBase === "/"
              ? c
              : s.HS([
                  c,
                  navigator.encodeLocation
                    ? navigator.encodeLocation(e.pathnameBase).pathname
                    : e.pathnameBase,
                ]),
        })),
      matches,
      undefined,
      undefined,
    );
    if (t && k) {
      return createElement(
        FContext.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...v,
            },
            navigationType: s.rc.Pop,
          },
        },
        k,
      );
    }
    return k;
  })(
    (function e(t, r = []) {
      const n = [];
      Children.forEach(t, (t, a) => {
        if (isValidElement(t)) {
          var o = [...r, a];
          if (t.type === Fragment) {
            return void n.push.apply(n, e(t.props.children, o));
          }
          if (t.type !== qh) {
            s.Oi(false);
          }
          if (t.props.index && t.props.children) {
            s.Oi(false);
          }
          var i = {
            id: t.props.id || o.join("-"),
            caseSensitive: t.props.caseSensitive,
            element: t.props.element,
            Component: t.props.Component,
            index: t.props.index,
            path: t.props.path,
            loader: t.props.loader,
            action: t.props.action,
            errorElement: t.props.errorElement,
            ErrorBoundary: t.props.ErrorBoundary,
            hasErrorBoundary:
              t.props.ErrorBoundary != null || t.props.errorElement != null,
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
    })(children),
    location,
  );
}
startTransition;
o = M || {};
o[(o.pending = 0)] = "pending";
o[(o.success = 1)] = "success";
o[(o.error = 2)] = "error";
var M = o;
new Promise(() => {});
Component;
