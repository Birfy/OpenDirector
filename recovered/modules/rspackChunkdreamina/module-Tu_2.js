import n from "bT";
import i from "kB";
import a from "M2";
import o from "dr";
import s from "O6";
import A from "./module-nz_4.js";
function c(t) {
  console.warn("loadable: " + t);
}
const UContext = n.createContext();
const l = {};
const h = "PENDING";
const f = "REJECTED";
const g = (t) => {
  const e = function (e) {
    return n.createElement(
      UContext.Consumer,
      null,
      function (__chunkExtractor) {
        return n.createElement(t, {
          __chunkExtractor,
          ...e,
        });
      },
    );
  };
  if (t.displayName) {
    e.displayName = t.displayName + "WithChunkExtractor";
  }
  return e;
};
const d = function (t) {
  return t;
};
function p(t) {
  const t_defaultResolveComponent = t.defaultResolveComponent;
  const r =
    t_defaultResolveComponent === undefined ? d : t_defaultResolveComponent;
  const t_render = t.render;
  const t_onLoad = t.onLoad;
  function loadable(requireAsync, options = {}) {
    const d =
      typeof requireAsync === "function"
        ? {
            requireAsync,
            resolve: function () {},
            chunkName: function () {},
          }
        : requireAsync;
    const p = {};
    function m(t) {
      if (options.cacheKey) {
        return options.cacheKey(t);
      }
      if (d.resolve) {
        return d.resolve(t);
      }
      return "static";
    }
    function y(t, props, i) {
      const a = options.resolveComponent
        ? options.resolveComponent(t, props)
        : r(t);
      A(i, a, {
        preload: true,
      });
      return a;
    }
    const b = (t) => {
      const e = m(t);
      let r = p[e];
      if (!(r && r.status !== f)) {
        r = d.requireAsync(t);
        r.status = h;
        p[e] = r;
        r.then(
          () => {
            r.status = "RESOLVED";
          },
          (e) => {
            console.error(
              "loadable-components: failed to asynchronously load component",
              {
                fileName: d.resolve(t),
                chunkName: d.chunkName(t),
                error: e ? e.message : e,
              },
            );
            r.status = f;
          },
        );
      }
      return r;
    };
    const v = g(
      ((t) => {
        function r(r) {
          let n;
          n = t.call(this, r) || this;
          n.state = {
            result: null,
            error: null,
            loading: true,
            cacheKey: m(r),
          };
          if (!(!r.__chunkExtractor || d.requireSync)) {
            const i = Error(
              "loadable: SSR requires `@loadable/babel-plugin`, please install it",
            );
            i.framesToPop = 1;
            i.name = "Invariant Violation";
            throw i;
          }
          if (r.__chunkExtractor) {
            if (options.ssr !== false) {
              d.requireAsync(r).catch(() => null);
              n.loadSync();
              r.__chunkExtractor.addChunk(d.chunkName(r));
            }
            return o.A(n);
          }
          if (
            options.ssr !== false &&
            ((d.isReady && d.isReady(r)) || (d.chunkName && l[d.chunkName(r)]))
          ) {
            n.loadSync();
          }
          return n;
        }
        s.A(r, t);
        r.getDerivedStateFromProps = function (t, e) {
          const cacheKey = m(t);
          return a.A({}, e, {
            cacheKey,
            loading: e.loading || e.cacheKey !== cacheKey,
          });
        };
        const r_prototype = r.prototype;
        r_prototype.componentDidMount = function () {
          this.mounted = true;
          const t = this.getCache();
          if (t && t.status === f) {
            this.setCache();
          }
          if (this.state.loading) {
            this.loadAsync();
          }
        };
        r_prototype.componentDidUpdate = function (t, e) {
          if (e.cacheKey !== this.state.cacheKey) {
            this.loadAsync();
          }
        };
        r_prototype.componentWillUnmount = function () {
          this.mounted = false;
        };
        r_prototype.safeSetState = function (t, e) {
          if (this.mounted) {
            this.setState(t, e);
          }
        };
        r_prototype.getCacheKey = function () {
          return m(this.props);
        };
        r_prototype.getCache = function () {
          return p[this.getCacheKey()];
        };
        r_prototype.setCache = function (t = undefined) {
          p[this.getCacheKey()] = t;
        };
        r_prototype.triggerOnLoad = function () {
          const t = this;
          if (t_onLoad) {
            setTimeout(() => {
              t_onLoad(t.state.result, t.props);
            });
          }
        };
        r_prototype.loadSync = function () {
          if (this.state.loading) {
            try {
              const t = d.requireSync(this.props);
              const e = y(t, this.props, I);
              this.state.result = e;
              this.state.loading = false;
            } catch (error) {
              console.error(
                "loadable-components: failed to synchronously load component, which expected to be available",
                {
                  fileName: d.resolve(this.props),
                  chunkName: d.chunkName(this.props),
                  error: error ? error.message : error,
                },
              );
              this.state.error = error;
            }
          }
        };
        r_prototype.loadAsync = function () {
          const t = this;
          const e = this.resolveAsync();
          e.then((e) => {
            const result = y(e, t.props, I);
            t.safeSetState(
              {
                result,
                loading: false,
              },
              function () {
                return t.triggerOnLoad();
              },
            );
          }).catch((error) =>
            t.safeSetState({
              error,
              loading: false,
            }),
          );
          return e;
        };
        r_prototype.resolveAsync = function () {
          const props = this.props;
          return b(
            (props.__chunkExtractor,
            props.forwardedRef,
            i.A(props, ["__chunkExtractor", "forwardedRef"])),
          );
        };
        r_prototype.render = function () {
          const props = this.props;
          const t_forwardedRef = props.forwardedRef;
          const t_fallback = props.fallback;
          props.__chunkExtractor;
          const o = i.A(props, [
            "forwardedRef",
            "fallback",
            "__chunkExtractor",
          ]);
          const state = this.state;
          const s_error = state.error;
          const s_loading = state.loading;
          const s_result = state.result;
          if (
            options.suspense &&
            (this.getCache() || this.loadAsync()).status === h
          ) {
            throw this.loadAsync();
          }
          if (s_error) {
            throw s_error;
          }
          const fallback = t_fallback || options.fallback || null;
          if (s_loading) {
            return fallback;
          }
          return t_render({
            fallback,
            result: s_result,
            options,
            props: a.A({}, o, {
              ref: t_forwardedRef,
            }),
          });
        };
        return r;
      })(n.Component),
    );
    var I = n.forwardRef(function (t, forwardedRef) {
      return n.createElement(v, {
        forwardedRef,
        ...t,
      });
    });
    I.displayName = "Loadable";
    I.preload = function (t) {
      I.load(t);
    };
    I.load = function (t) {
      return b(t);
    };
    return I;
  }
  return {
    loadable,
    lazy: function (t, e) {
      return loadable(
        t,
        a.A({}, e, {
          suspense: true,
        }),
      );
    },
  };
}
const m = p({
  defaultResolveComponent: function (t) {
    if (t.__esModule) {
      return t.default;
    }
    return t.default || t;
  },
  render: function (t) {
    const t_result = t.result;
    const t_props = t.props;
    return n.createElement(t_result, t_props);
  },
});
export var Ay = m.loadable;
const m_lazy = m.lazy;
const v = p({
  onLoad: function (t, e) {
    if (t && e.forwardedRef) {
      if (typeof e.forwardedRef === "function") {
        e.forwardedRef(t);
      } else {
        e.forwardedRef.current = t;
      }
    }
  },
  render: function (t) {
    const t_result = t.result;
    const t_props = t.props;
    if (t_props.children) {
      return t_props.children(t_result);
    }
    return null;
  },
});
const v_loadable = v.loadable;
const v_lazy = v.lazy;
const C = typeof window !== "undefined";
export function ai(t = function () {}, e) {
  const r = e === undefined ? {} : e;
  const r_namespace = r.namespace;
  const r_chunkLoadingGlobal = r.chunkLoadingGlobal;
  const a =
    r_chunkLoadingGlobal === undefined
      ? "__LOADABLE_LOADED_CHUNKS__"
      : r_chunkLoadingGlobal;
  if (!C) {
    c("`loadableReady()` must be called in browser only");
    t();
    return Promise.resolve();
  }
  let o = null;
  if (C) {
    const s =
      "" +
      (r_namespace === undefined ? "" : r_namespace) +
      "__LOADABLE_REQUIRED_CHUNKS__";
    const A = document.getElementById(s);
    if (A) {
      o = JSON.parse(A.textContent);
      const u = document.getElementById(s + "_ext");
      if (u) {
        JSON.parse(u.textContent).namedChunks.forEach((t) => {
          l[t] = true;
        });
      } else {
        throw Error(
          "loadable-component: @loadable/server does not match @loadable/component",
        );
      }
    }
  }
  if (!o) {
    c(
      "`loadableReady()` requires state, please use `getScriptTags` or `getScriptElements` server-side",
    );
    t();
    return Promise.resolve();
  }
  let h = false;
  return new Promise((resolve) => {
    window[a] = window[a] || [];
    const e = window[a];
    const r = e.push.bind(e);
    function n() {
      if (o.every((t) => e.some((e) => e[0].indexOf(t) > -1)) && !h) {
        h = true;
        resolve();
      }
    }
    e.push = function () {
      r.apply(undefined, arguments);
      n();
    };
    n();
  }).then(t);
}
Ay.lib = v_loadable;
m_lazy.lib = v_lazy;
