import a from "oa";
import o from "z8";
import i from "Po";
import n from "dw4";
import { v as v_1 } from "./module-A7.js";
import { DR, X3 } from "./module-Dm.js";
import s from "aYe";
import d from "RGL";
import { d as d_1 } from "./module-B9_2.js";
import { s as s_1 } from "./module-s91.js";
import { M as M_1, V } from "./module-oe_2.js";
import v from "bT";
import _ from "w3";
import * as f from "./module-XeD.js";
import { F } from "./module-NE_3.js";
import { F as F_1 } from "./module-Tf.js";
import { A } from "./module-nW.js";
import * as w from "./module-re_2.js";
import { Z } from "./module-em_3.js";
import { f as f_1 } from "./module-iJQ.js";
import P from "I0V";
import { I } from "./module-Ma_2.js";
class c {
  get hasBeenDone() {
    return this._hasBeenDone;
  }
  get costTimes() {
    if (!this._initCostTimes) {
      return;
    }
    let { start, end } = this._initCostTimes;
    return (end != null ? end : Date.now()) - start;
  }
  get initResult() {
    if (this._hasBeenDone) {
      return {
        resolve: this._resolveResult,
        reject: this._rejectResult,
      };
    }
  }
  get isIniting() {
    return this._isIniting;
  }
  awaitForInit({ key, timeout } = {}) {
    let r;
    let a;
    if (this._hasBeenDone && this.initResult) {
      let { resolve, reject } = this.initResult;
      if (reject) {
        return Promise.reject(reject);
      }
      return Promise.resolve(resolve);
    }
    if (key && this._waitingResolverMap.has(key)) {
      return this._waitingResolverMap.get(key);
    }
    if (!timeout) {
      let t = new Promise((resolve, reject) => {
        this._waitingResolvers.add([resolve, reject]);
      });
      if (key) {
        this._waitingResolverMap.set(key, t);
      }
      return t;
    }
    let o = Promise.race([
      new Promise((resolve, reject) => {
        r = [
          () => {
            clearTimeout(a);
            resolve();
          },
          reject,
        ];
        this._waitingResolvers.add([r, reject]);
      }),
      new Promise((resolve, reject) => {
        a = setTimeout(() => {
          this._waitingResolvers.delete(r);
          reject(Error("Timed out waiting for init"));
        }, timeout);
      }),
    ]);
    if (key) {
      this._waitingResolverMap.set(key, o);
    }
    return o;
  }
  startToInit() {
    return (
      !this._hasBeenDone &&
      !this._isIniting &&
      ((this._isIniting = true),
      (this._initCostTimes = {
        start: Date.now(),
      }),
      true)
    );
  }
  initDone(e) {
    if (this._hasBeenDone) {
      throw Error("Cannot release an inited locker");
    }
    if (this._initCostTimes) {
      this._initCostTimes.end = Date.now();
    }
    let t = false;
    for (let r of ((e == null ? undefined : e.reject)
      ? ((t = true), (this._rejectResult = e.reject))
      : (this._resolveResult = e == null ? undefined : e.resolve),
    this._waitingResolvers)) {
      if (t) {
        r[1](this._rejectResult);
      } else {
        r[0](this._resolveResult);
      }
    }
    this._waitingResolverMap.clear();
    this._waitingResolvers.clear();
    this._hasBeenDone = true;
    this._isIniting = false;
  }
  constructor() {
    this._hasBeenDone = false;
    this._isIniting = false;
    this._initCostTimes = undefined;
    this._waitingResolvers = new Set();
    this._waitingResolverMap = new Map();
  }
}
let useY = ({ layout }) => {
  let t = _.Zp();
  let { uiConfigurationService } = v.useContext(F_1);
  let a = F(uiConfigurationService.setting, (e) => ({
    namespace: e.namespace,
    baseRoute: e.baseRoute,
    redirectRouteIdWhen404: e.redirectRouteIdWhen404,
  }));
  let i = F(
    uiConfigurationService.uiManager[M_1],
    (e) => e.observableData.configs,
  );
  let n = F(uiConfigurationService, (e) => {
    var t;
    var r;
    var a;
    var o;
    let { setting, uiManager } = e;
    let c = uiManager[M_1];
    let l =
      (a =
        setting == null || (t = setting.observableData) == null
          ? undefined
          : t.redirectRouteIdWhen404) != null
        ? a
        : undefined;
    let m =
      (o =
        c == null || (r = c.observableData) == null ? undefined : r.configs) !=
      null
        ? o
        : [];
    if (l) {
      return m.find(({ id }) => id === l);
    }
  });
  v.useEffect(() => {
    let e = uiConfigurationService.uiManager[M_1];
    let { pendingNavigateOptions } = e;
    if (pendingNavigateOptions) {
      t(pendingNavigateOptions.path, pendingNavigateOptions.options);
    }
    let o = e.onWouldRouteChange((e, r) => {
      if (typeof e === "string") {
        t(e, r);
      } else {
        t(e);
      }
    });
    e.initDone();
    return () => {
      o.dispose();
    };
  }, []);
  let children = v.useMemo(
    () =>
      i.map((e) => {
        var t;
        var r;
        var a;
        return o.jsx(
          _.qh,
          {
            path: e.path,
            index: e.index,
            element: o.jsx(f.tH, {
              fallback: (r = e.errorElement) != null ? r : o.jsx("div", {}),
              children: e.content
                ? e.content()
                : (a = (t = e.skeleton) == null ? undefined : t.call(e)) != null
                  ? a
                  : null,
            }),
          },
          `${e.id}-${e._updateTime}`,
        );
      }),
    [i],
  );
  return o.jsx("div", {
    id: a.namespace,
    className: A.root,
    children: o.jsxs(_.BV, {
      children: [
        o.jsx(_.qh, {
          element: layout,
          children,
        }),
        n
          ? o.jsx(_.qh, {
              path: "*",
              element: o.jsx(_.C5, {
                to: n.path,
                replace: true,
              }),
            })
          : null,
      ],
    }),
  });
};
let useJ = ({ visible, updateTime, path, children }) => {
  let { uiConfigurationService } = v.useContext(F_1);
  v.useEffect(() => {
    uiConfigurationService.uiManager[M_1].notifyPageRendered(path);
  }, [path, visible, updateTime]);
  return o.jsx(o.Fragment, {
    children,
  });
};
function useK({ fallback, routesConfig }) {
  let { uiConfigurationService } = v.useContext(F_1);
  let a = _.zy();
  let i = _.P1();
  let nRef = v.useRef(true);
  let c = (e) => {
    var o;
    o = a.pathname;
    uiConfigurationService.uiManager[M_1].activateKeepAliveRoute(o, a.state);
    let n = Z(routesConfig, a.pathname, e);
    let c = n.find((e) => s_1(e.pathname, a.pathname));
    let l = f_1(routesConfig, a.pathname);
    let m = routesConfig.reduce((acc, item) => {
      var o;
      return (
        !!acc &&
        (!item._updateTime ||
          ((o = e.find((e) => e.pathname === a.pathname)) == null
            ? undefined
            : o.updateTime) === item._updateTime)
      );
    }, true);
    if (c && l && m) {
      return n;
    }
    if (!c) {
      let e = uiConfigurationService.uiManager[M_1].getRouteConfigByPath(
        a.pathname,
      );
      c = {
        key: a.key,
        pathname: a.pathname,
        updateTime: e == null ? undefined : e._updateTime,
        isCacheItem: l,
        outlet: i,
      };
      n.push(c);
    }
    return n;
  };
  let [l, setL] = v.useState(
    uiConfigurationService.uiManager[M_1].pendingNavigateOptions
      ? []
      : nRef.current
        ? c([])
        : [],
  );
  nRef.current = false;
  v.useEffect(() => {
    setL(c);
  }, [a.pathname, routesConfig]);
  return o.jsx(o.Fragment, {
    children: l.map((t) => {
      let r = s_1(t.pathname, a.pathname) ? "visible" : "hidden";
      return o.jsx(
        w.u,
        {
          mode: r,
          fallback: fallback || null,
          children: o.jsx(useJ, {
            updateTime: t.updateTime,
            path: a.pathname,
            visible: r === "visible",
            children: t.outlet,
          }),
        },
        t.key,
      );
    }),
  });
}
let useX = ({ visible, updateTime, path, children }) => {
  let { uiConfigurationService } = v.useContext(F_1);
  v.useEffect(() => {
    uiConfigurationService.uiManager[M_1].notifyPageRendered(path);
  }, [path, visible, updateTime]);
  return o.jsx(o.Fragment, {
    children,
  });
};
function useM({ fallback, routesConfig }) {
  let { uiConfigurationService } = v.useContext(F_1);
  let a = _.zy();
  let i = _.P1();
  let n = P.A((e) => {
    var o;
    o = a.pathname;
    uiConfigurationService.uiManager[M_1].activateKeepAliveRoute(o, a.state);
    let n = Z(routesConfig, a.pathname, e);
    let c = n.find((e) => s_1(e.pathname, a.pathname));
    let l = f_1(routesConfig, a.pathname);
    let m = routesConfig.reduce((acc, item) => {
      var o;
      return (
        !!acc &&
        (!item._updateTime ||
          ((o = e.find((e) => e.pathname === a.pathname)) == null
            ? undefined
            : o.updateTime) === item._updateTime)
      );
    }, true);
    if (c && l && m) {
      return n;
    }
    if (!c) {
      let e = uiConfigurationService.uiManager[M_1].getRouteConfigByPath(
        a.pathname,
      );
      c = {
        key: a.key,
        pathname: a.pathname,
        updateTime: e == null ? undefined : e._updateTime,
        isCacheItem: l,
        outlet: i,
      };
      n.push(c);
    }
    return n;
  });
  let c = v.useMemo(() => {
    if (uiConfigurationService.uiManager[M_1].pendingNavigateOptions) {
      return [];
    }
    return n([]);
  }, [
    uiConfigurationService.uiManager[M_1].pendingNavigateOptions,
    a.pathname,
    routesConfig,
    n,
  ]);
  return o.jsx(o.Fragment, {
    children: c.map((t) => {
      let r = s_1(t.pathname, a.pathname) ? "visible" : "hidden";
      return o.jsx(
        w.u,
        {
          mode: r,
          fallback: fallback || null,
          children: o.jsx(useX, {
            updateTime: t.updateTime,
            path: a.pathname,
            visible: r === "visible",
            children: t.outlet,
          }),
        },
        t.key,
      );
    }),
  });
}
export class k extends d_1 {
  get pendingNavigateOptions() {
    return this._pendingNavigateOptions;
  }
  get currentRoute() {
    return this.getRouteConfigByPath(this.observableData.currentRoute);
  }
  registerConfig(e) {
    n.h5(() => {
      e.forEach((e) => {
        let t = this.observableData.configs.findIndex((t) => t.id === e.id);
        if (t !== -1) {
          this.observableData.configs[t] = i.A(
            this.observableData.configs[t],
            e,
            {
              _updateTime: Date.now(),
            },
          );
        } else {
          this.observableData.configs.push(
            i.A({}, e, {
              _updateTime: 0,
            }),
          );
        }
      });
    });
    this._onRouteConfigChange.fire(n.HO(this.observableData.configs));
  }
  updatePageRoute(e) {
    n.h5(() => {
      let length = this.observableData.historyRoutes.length;
      if (this.observableData.historyRoutes[length - 1] !== e) {
        this.observableData.historyRoutes.push(e);
      }
      let r = this.getRouteConfigByPath(this.observableData.currentRoute);
      let a = this.getRouteConfigByPath(e);
      if ((r == null ? undefined : r.id) !== (a == null ? undefined : a.id)) {
        var o;
        var i;
        if (r) {
          if (!(r == null || (i = r.onActiveChange) == null)) {
            i.call(r, {
              active: false,
            });
          }
        }
        if (!(a == null || (o = a.onActiveChange) == null)) {
          o.call(a, {
            active: true,
          });
        }
      }
      this.observableData.currentRoute = e;
    });
  }
  navigate(id, t) {
    let r = this.generatePath(id, t);
    if (!r) {
      X3(r);
    }
    let a = I({
      middleware: this._middlewareManager,
      trigger: M_1,
      method: "shouldInterceptNavigate",
      uiConfig: {
        id,
        path: r,
      },
    });
    let o = a.run();
    if (!(a.isStop || o)) {
      this._navigateByPath(r, t);
    }
  }
  _navigateByPath(e, options) {
    if (this._locker.hasBeenDone) {
      this._onWouldRouteChange.fire(e, options);
    } else {
      this._pendingNavigateOptions = {
        path: e,
        options,
      };
    }
  }
  updateContainerWidth(e) {
    n.h5(() => {
      this.observableData.containerWidth = e;
    });
  }
  initDone() {
    if (!this._locker.hasBeenDone) {
      this._pendingNavigateOptions = undefined;
      this._locker.initDone();
    }
  }
  navigateBack(e = -1) {
    this._onWouldRouteChange.fire(e);
  }
  generatePath(e, t) {
    let r;
    let a;
    let o;
    let i = this.observableData.configs.find((t) => t.id === e);
    if (!i) {
      X3(i);
    }
    let n = d.wE(i.path)(
      (r = t == null ? undefined : t.params) != null ? r : {},
    );
    let c =
      typeof (t == null ? undefined : t.query) === "string"
        ? t.query
        : (typeof (o =
            (a = t == null ? undefined : t.query) != null ? a : {}) !==
            "object" && DR(o),
          Object.entries(o)
            .map((e) => `${e[0]}=${e[1]}`)
            .join("&"));
    if (c.length !== 0) {
      n += c.includes("?") ? c : `?${c}`;
    }
    return n;
  }
  activateKeepAliveRoute(e, t) {
    let r;
    if (
      e !==
        ((r = this.currentKeepAliveData) == null ? undefined : r.pathName) ||
      !(Object.values(this.observableData.keepAliveStatusMap).length > 0)
    ) {
      for (let t of Object.keys(this.observableData.keepAliveStatusMap)) {
        if (!s_1(t, e)) {
          this._updateKeepAliveStatus(t, V.InActivated);
        }
      }
      this._updateKeepAliveStatus(e, V.Activated, t);
    }
  }
  _updateKeepAliveStatus(pathName, status, locationState) {
    let a;
    let o = this.observableData.keepAliveStatusMap[pathName];
    let i = o == null ? undefined : o.status;
    let c = this.observableData.configs.find((t) => s.B6(t.path, pathName));
    let l = {
      pathName,
      status,
      routeId: (a = c == null ? undefined : c.id) != null ? a : "NOT_FOUND",
      locationState,
    };
    n.h5(() => {
      this.observableData.keepAliveStatusMap[pathName] = l;
    });
    if (status !== i) {
      this._onKeepAliveChange.fire(l);
    }
  }
  get currentKeepAliveData() {
    let { keepAliveStatusMap, currentRoute = "" } = this.observableData;
    return Object.values(keepAliveStatusMap).find(
      (e) => e.status === V.Activated,
    );
  }
  notifyPageRendered(e) {
    if (typeof e === "string") {
      this._onPageRendered.fire(n.HO(this.getRouteConfigByPath(e)));
    } else {
      this._onPageRendered.fire(e);
    }
  }
  getRouteConfigByPath(e) {
    if (e) {
      return this.observableData.configs.find((t) => s.B6(t.path, e));
    }
  }
  render(e) {
    return o.jsx(useY, {
      layout: e.layout,
    });
  }
  renderOutlet(e) {
    return o.jsx(useK, a._({}, e));
  }
  renderSingleOutlet(e) {
    return o.jsx(useM, a._({}, e));
  }
  _middlewareChange(e) {}
  constructor(...e) {
    super(...e);
    this.observableData = n.sH({
      currentRoute: undefined,
      configs: [],
      keepAliveStatusMap: {},
      historyRoutes: [],
      containerWidth: 0,
    });
    this._locker = new c();
    this._onWouldRouteChange = new v_1();
    this.onWouldRouteChange = this._onWouldRouteChange.event;
    this._onKeepAliveChange = new v_1();
    this.onKeepAliveChange = this._onKeepAliveChange.event;
    this._onPageRendered = new v_1();
    this.onPageRendered = this._onPageRendered.event;
    this._onPageContainerWidthChange = new v_1();
    this.onPageContainerWidthChange = this._onPageContainerWidthChange.event;
    this._onRouteConfigChange = new v_1();
    this.onRouteConfigChange = this._onRouteConfigChange.event;
  }
}
