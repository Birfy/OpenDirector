import s from "./module-At_5.js";
import { Lt, Ve, po } from "./module-XD_3.js";
import { cG } from "./module-uZ_2.js";
let r;
let l;
let a;
let o;
let i;
let pluginManager;
l = new Map();
a = new Map();
o = (e, n, t) => {
  if (!a.has(n)) {
    a.set(n, {
      pre: new Map(),
      post: new Map(),
    });
  }
  switch (t) {
    case "pre":
      a.get(e).pre.set(n, {
        name: n,
        isUse: false,
      });
      break;
    case "post":
      a.get(e).post.set(n, {
        name: n,
      });
      break;
    default:
      if (!(t !== "use" || a.get(e).post.has(n) || a.get(n).pre.has(e))) {
        a.get(e).pre.set(n, {
          name: n,
          isUse: true,
        });
      }
  }
};
i = (e) => {
  if (!e) {
    return;
  }
  var n = e;
  let t = typeof n;
  if (t !== "object" || n === null) {
    throw Error(`Expect CLI Plugin instance to be an object, but got ${t}.`);
  }
  if (n.setup && typeof n.setup !== "function") {
    throw Error(
      `Expect CLI Plugin plugin.setup to be a function, but got ${t}.`,
    );
  }
  let { name, usePlugins = [], pre = [], post = [] } = e;
  if (l.has(name)) {
    console.warn(`Plugin ${name} already exists.`);
  } else {
    l.set(name, e);
    a.set(name, {
      pre: new Map(),
      post: new Map(),
    });
    pre.forEach((e) => {
      o(name, e, "pre");
    });
    post.forEach((e) => {
      o(name, e, "post");
    });
    usePlugins.forEach((e) => {
      if (!l.has(e.name)) {
        i(e);
      }
      o(name, e.name, "use");
    });
  }
};
pluginManager = {
  getPlugins: () => {
    let e = new Set();
    let n = new Set();
    let t = [];
    let r = (o) => {
      if (n.has(o)) {
        throw Error(`Circular dependency detected: ${o}`);
      }
      if (!e.has(o) && l.get(o)) {
        n.add(o);
        let { required = [] } = l.get(o);
        required.forEach((e) => {
          if (!l.get(e)) {
            throw Error(`${o} plugin required plugin ${e}, but not found.`);
          }
        });
        let { pre } = a.get(o);
        Array.from(pre.values())
          .filter((e) => !e.isUse)
          .forEach((e) => r(e.name));
        Array.from(pre.values())
          .filter((e) => e.isUse)
          .forEach((e) => r(e.name));
        n.delete(o);
        e.add(o);
        t.push(l.get(o));
      }
    };
    l.forEach((e, n) => {
      let { post } = a.get(n);
      post.forEach((e) => {
        if (!a.get(e.name).pre.has(n)) {
          a.get(e.name).pre.set(n, {
            name: n,
            isUse: false,
          });
        }
      });
    });
    l.forEach((e, n) => {
      r(n);
    });
    return (t = t.filter((e) => e));
  },
  addPlugins: (e) => {
    for (let n of e) {
      i(n);
    }
  },
  clear: () => {
    l.clear();
    a.clear();
  },
  isPluginExists: (e) => l.has(e),
};
let f = {
  run: function (e) {
    let { runtimeContext } = ((e) => {
      pluginManager.clear();
      r = e;
      let { plugins, handleSetupResult } = e;
      pluginManager.addPlugins(plugins);
      let plugins_1 = pluginManager.getPlugins();
      let a = (({ runtimeContext, config, plugins }) => {
        let extendsHooks = {};
        plugins.forEach((e) => {
          let { registryHooks = {} } = e;
          Object.keys(registryHooks).forEach((e) => {
            extendsHooks[e] = registryHooks[e];
          });
        });
        return {
          ...runtimeContext,
          hooks: {
            ...{
              onBeforeRender: Ve(),
              wrapRoot: Lt(),
              pickContext: Lt(),
              config: po(),
              extendStringSSRCollectors: po(),
              extendStreamSSR: po(),
            },
            ...extendsHooks,
          },
          extendsHooks,
          config,
        };
      })({
        runtimeContext: {},
        config: r.config,
        plugins: plugins_1,
      });
      let o = (({ context, plugins }) => {
        let { hooks, extendsHooks } = context;
        function l() {
          if (context) {
            let { hooks, extendsHooks, config, pluginAPI, ...rest } = context;
            rest._internalContext = context;
            return rest;
          }
          throw Error("Cannot access context");
        }
        function updateRuntimeContext(n) {
          context = s.h(context, n);
        }
        let o = {};
        plugins.forEach((e) => {
          let { _registryApi } = e;
          if (_registryApi) {
            let e = _registryApi(l, updateRuntimeContext);
            Object.keys(e).forEach((n) => {
              o[n] = e[n];
            });
          }
        });
        if (extendsHooks) {
          Object.keys(extendsHooks).forEach((e) => {
            o[e] = extendsHooks[e].tap;
          });
        }
        let i = {
          updateRuntimeContext,
          getHooks: function () {
            return {
              ...hooks,
              ...extendsHooks,
            };
          },
          getRuntimeConfig: function () {
            if (context.config) {
              return context.config;
            }
            throw Error("Cannot access config");
          },
          config: hooks.config.tap,
          onBeforeRender: hooks.onBeforeRender.tap,
          wrapRoot: hooks.wrapRoot.tap,
          pickContext: hooks.pickContext.tap,
          extendStringSSRCollectors: hooks.extendStringSSRCollectors.tap,
          extendStreamSSR: hooks.extendStreamSSR.tap,
          ...o,
        };
        if (typeof Proxy === "undefined") {
          return i;
        }
        return new Proxy(i, {
          get(e, n) {
            if (n !== "then") {
              if (n in e) {
                return e[n];
              }
              return () => {
                console.warn(`api.${n.toString()} not exist`);
              };
            }
          },
        });
      })({
        context: a,
        pluginManager,
        plugins: plugins_1,
      });
      for (let e of ((a.pluginAPI = o), plugins_1)) {
        let n = e.setup?.(o);
        if (handleSetupResult) {
          handleSetupResult(n, o);
        }
      }
      return {
        runtimeContext: a,
      };
    })(e);
    let t = runtimeContext.hooks.config.call().filter((e) => !!e);
    runtimeContext.config = s.h({}, ...t, runtimeContext.config || {});
    return {
      runtimeContext,
    };
  },
};
function handleSetupResult(e, n) {
  if (e) {
    Object.keys(e).forEach((t) => {
      let r = e[t];
      if (typeof r === "function") {
        let e = t === "beforeRender" ? "onBeforeRender" : t;
        if (n[e]) {
          if (t === "beforeRender") {
            n[e](async (...e) => {
              await r(...e);
            });
          } else {
            n[e]((...e) => r(...e));
          }
        }
      }
    });
  }
}
export function F(e, n) {
  let { plugins = [] } = n || {};
  let { runtimeContext } = f.run({
    plugins: [
      {
        name: "@modern-js/runtime-plugin-compat",
        _registryApi: (e) => ({
          useRuntimeConfigContext: () => {
            let { _internalContext } = e();
            return _internalContext.config;
          },
          useHookRunners: () =>
            ((e) => {
              let { _internalContext } = e;
              let { hooks } = _internalContext;
              return {
                beforeRender: async (e) => hooks.onBeforeRender.call(e),
                wrapRoot: (e) => hooks.wrapRoot.call(e),
                pickContext: (e) => hooks.pickContext.call(e),
                config: () => hooks.config.call(),
              };
            })(e()),
        }),
      },
      {
        name: "@modern-js/runtime-plugin-request-context",
        setup(e) {
          e.onBeforeRender((e) => {
            let n;
            let t = (n = e.ssrContext)
              ? {
                  request: n.request,
                  response: n.response,
                }
              : {
                  request: {},
                  response: {},
                };
            e.requestContext = t;
            e.context = t;
          });
        },
      },
      ...e,
      ...plugins,
    ],
    config: n || {},
    handleSetupResult,
  });
  cG(runtimeContext);
  return runtimeContext;
}
export function R(e, ...n) {
  return s.h({}, e, ...n);
}
