import r from "pJ";
import { H, c } from "./module-SJ_2.js";
import { gy } from "./module-uZ_2.js";
import { Iw, Ky, VH } from "./module-ri_2.js";
import i from "z8";
import s from "Tu";
import { ng as identifierPrefix } from "./module-Vc_3.js";
import { Bw } from "./module-Xr.js";
import d from "bT";
function u(children, n) {
  let {
    isBrowser,
    initialData,
    routes,
    context,
    routeManifest,
    routerContext,
    unstable_getBlockNavState,
    ssrContext,
    _internalContext,
    _internalRouterBaseName,
    ...rest
  } = n;
  let value = {
    isBrowser,
    initialData,
    routes,
    context,
    ...rest,
  };
  return i.jsx(VH.Provider, {
    value: n,
    children: i.jsx(Iw.Provider, {
      value,
      children,
    }),
  });
}
let useP = ({ callback, children }) => {
  let tRef = d.useRef(false);
  d.useLayoutEffect(() => {
    if (!tRef.current) {
      tRef.current = true;
      callback();
    }
  }, [callback]);
  return children;
};
async function h(e, n) {
  return c(n, e, {
    identifierPrefix,
  });
}
export async function XX(e, n) {
  let t = Ky();
  let l = async (e) => {
    let n = gy();
    n.pluginAPI.updateRuntimeContext(e);
    let n_hooks = n.hooks;
    await n_hooks.onBeforeRender.call(e);
  };
  if (
    n === undefined ||
    typeof n === "string" ||
    (typeof HTMLElement !== "undefined" && n instanceof HTMLElement)
  ) {
    let a;
    let o;
    a = window._SSR_DATA;
    o = a?.context?.request;
    let m = {
      ...(a || {
        renderLevel: 0,
        mode: "string",
      }),
      context: {
        ...(a?.context || {}),
        request: {
          ...(a?.context?.request || {}),
          params: o?.params || {},
          host: o?.host || location.host,
          pathname: o?.pathname || location.pathname,
          headers: o?.headers || {},
          cookieMap: r.q(document.cookie || "") || {},
          cookie: document.cookie || "",
          userAgent: o?.headers?.["user-agent"] || navigator.userAgent,
          referer: document.referrer,
          query: {
            ...window.location.search
              .substring(1)
              .split("&")
              .reduce((acc, item) => {
                let [t, r] = item.split("=");
                if (t) {
                  acc[t] = r;
                }
                return acc;
              }, {}),
            ...(o?.query || {}),
          },
          url: location.href,
        },
      },
    };
    Object.assign(t, {
      _internalRouterBaseName: e.props.basename,
      ssrContext: m.context,
      initialData: m.data?.initialData,
    });
    await l(t);
    let v =
      n && typeof n !== "string" ? n : document.getElementById(n || "root");
    async function c(e) {
      return g(e, v);
    }
    if (window._SSR_DATA) {
      let n;
      let callback;
      let l;
      async function d(e) {
        return h(e, v);
      }
      n = {
        ...t,
        get routes() {
          return t.routes;
        },
        _hydration: true,
      };
      callback = () => {
        delete n._hydration;
      };
      l = window?._SSR_DATA?.renderLevel || Bw.CLIENT_RENDER;
      if ((window?._SSR_DATA?.mode || "string") === "stream") {
        if (l !== Bw.SERVER_RENDER) {
          return c(u(e, t));
        }
        return d(
          u(
            i.jsx(
              () =>
                i.jsx(useP, {
                  callback,
                  children: e,
                }),
              {},
            ),
            n,
          ),
        );
      }
      if (l === Bw.CLIENT_RENDER) {
        return c(u(e, t));
      }
      if (l === Bw.SERVER_RENDER) {
        return new Promise((resolve) => {
          s.ai(
            () => {
              d(
                u(
                  i.jsx(
                    () =>
                      i.jsx(useP, {
                        callback,
                        children: e,
                      }),
                    {},
                  ),
                  n,
                ),
              ).then((e) => {
                resolve(e);
              });
            },
            {
              chunkLoadingGlobal: "rspackChunkdreamina",
            },
          );
        });
      }
      console.warn(`unknow render level: ${l}, execute render()`);
      return c(u(e, t));
    }
    return c(u(e, t));
  }
  throw Error(
    "`render` function needs id in browser environment, it needs to be string or element",
  );
}
async function g(e, n) {
  let t = H(n);
  t.render(e);
  return t;
}
