import n from "QWK";
import a from "z8";
import "lc";
import o from "tMn";
import r from "ua";
import s from "wF";
import l from "Kt";
import u from "Qey";
import d from "oe";
import c from "RC3";
import h from "Tf";
import m from "oa";
import g from "bT";
import _p from "xb";
import v from "aYe";
import M from "w3";
import f from "C5";
import w from "p21";
import { K as K_1 } from "./module-lj_2.js";
import S from "sX";
import { N as N_1 } from "./module-Kpt.js";
import { A as A_1 } from "./module-AU5.js";
import * as R from "./module-hUS.js";
import N from "dw4";
import A from "Zq6";
import j from "Ma";
import y from "V1";
import F from "Bo";
import T from "gc";
import B from "A7";
import E from "Po";
import W from "B9";
import "MhC";
import H from "CY";
import P from "Dm";
import z from "LO";
import V from "./module-mo_3.js";
import J from "xs";
import U from "ld";
import L from "poQ";
import "MH";
import G from "ZD";
import K from "./module-pI_2.js";
import et from "bk";
import ei from "qa";
import { A as A_2 } from "./module-M2Y.js";
import "HZH";
import eo from "I7V";
import { A as A_3 } from "./module-QgY.js";
import { A as A_4 } from "./module-BT_3.js";
import ef from "cO";
import ew from "./module-U1.js";
import eI from "vCT";
const id = "dreamina-ui-configuration-content-wrapper";
const useD = (e) => {
  var t;
  var i;
  var n;
  t = s.h(K_1);
  var navigate = S.L(t);
  var { uiConfigurationService } = g.useContext(h.F);
  var {
    siderMenuSetting,
    sideDrawerSetting,
    currentRouteConfig,
    layoutSetting,
    bottomMenuSetting,
    topMenuSetting,
    topFixedSlotSetting,
  } = w.F(uiConfigurationService, (e) => {
    var t = e.uiManager[N_1.PageRoute];
    var configs = t.observableData.configs;
    var { currentRoute } = t.observableData;
    var { setting } = uiConfigurationService;
    return {
      siderMenuSetting: setting.siderMenuSetting,
      sideDrawerSetting: setting.sideDrawerSetting,
      currentRouteConfig: configs.find((e) =>
        v.B6(e.path, currentRoute != null ? currentRoute : ""),
      ),
      layoutSetting: setting.layoutSetting,
      bottomMenuSetting: setting.bottomMenuSetting,
      topMenuSetting: setting.topMenuSetting,
      topFixedSlotSetting: setting.topFixedSlotSetting,
    };
  });
  var { isSideDrawerOpen } = w.F(uiConfigurationService, (e) => ({
    isSideDrawerOpen: e.uiManager[N_1.SideDrawer].observableData.visible,
  }));
  var { routesConfig } = w.F(uiConfigurationService, (e) => ({
    routesConfig: e.uiManager[N_1.PageRoute].observableData.configs,
  }));
  var {
    layoutConfiguration: {
      hideSideMenu = false,
      hideTitleBar = false,
      hideBottomMenu = true,
      hideTopMenu = true,
      mainFrameMinContentWidth,
    } = {},
  } = currentRouteConfig != null ? currentRouteConfig : {};
  var E = M.zy();
  var W = f.d(
    (i = sideDrawerSetting.floatStrategy) == null
      ? undefined
      : i.floatLimitWidth,
  );
  var { hasCustomSideMenuRenderer } = uiConfigurationService;
  var P = g.useMemo(() => isSideDrawerOpen && !W, [isSideDrawerOpen, W]);
  g.useLayoutEffect(() => {
    uiConfigurationService.uiManager[N_1.PageRoute].updatePageRoute(E.pathname);
  }, [E.pathname, uiConfigurationService]);
  g.useLayoutEffect(() => {
    if (E.key) {
      var e;
      var t =
        (e = uiConfigurationService.uiManager[
          N_1.PageRoute
        ].getRouteConfigByPath(E.pathname)) == null
          ? undefined
          : e.id;
      uiConfigurationService.uiManager[
        N_1.AbsolutePositionSlot
      ].changeVisibleGroup(t);
    }
  }, [E.key, E.pathname, uiConfigurationService]);
  return a.jsxs("div", {
    className: _p(
      A_1.topDownLayer,
      layoutSetting == null ? undefined : layoutSetting.className,
    ),
    children: [
      uiConfigurationService.uiManager[N_1.TopBanner].render(),
      a.jsxs("div", {
        style: m._(
          {
            "--side-menu-width": "".concat(siderMenuSetting.width, "px"),
            "--side-drawer-width": "".concat(sideDrawerSetting.width, "px"),
          },
          (
            (n = sideDrawerSetting.floatStrategy) == null
              ? undefined
              : n.floatLimitWidth
          )
            ? {
                "--side-drawer-float-limit-width": "".concat(
                  sideDrawerSetting.floatStrategy.floatLimitWidth,
                  "px",
                ),
              }
            : {},
          mainFrameMinContentWidth
            ? {
                "--main-frame-min-content-width": "".concat(
                  mainFrameMinContentWidth,
                  "px",
                ),
              }
            : {},
        ),
        className: _p(
          A_1.container,
          layoutSetting == null
            ? undefined
            : layoutSetting.siderLayoutClassName,
          {
            [A_1.mainFrame2026]: hasCustomSideMenuRenderer,
          },
        ),
        children: [
          !hideSideMenu &&
            uiConfigurationService.uiManager[N_1.SideMenu].render({
              className: _p(siderMenuSetting.className, A_1.sideMenu),
              visible: siderMenuSetting.visible,
              navigate,
            }),
          a.jsxs("div", {
            className: A_1.contentWrapper,
            children: [
              !hideTopMenu &&
                topMenuSetting.visible &&
                uiConfigurationService.uiManager[N_1.TopMenu].render({
                  className: _p(topMenuSetting.className, A_1.topMenu),
                  visible: topMenuSetting.visible,
                }),
              a.jsxs("div", {
                id,
                className: _p(A_1.mainContainer, {
                  [A_1.withBottomMenu]:
                    !hideBottomMenu && bottomMenuSetting.visible,
                  [A_1.withTopMenu]: !hideTopMenu && topMenuSetting.visible,
                }),
                children: [
                  a.jsx("div", {
                    className: _p(
                      A_1.content,
                      layoutSetting == null
                        ? undefined
                        : layoutSetting.contentClassName,
                      P && A_1.collapseContent,
                    ),
                    children: uiConfigurationService.uiManager[
                      N_1.PageRoute
                    ].renderOutlet({
                      routesConfig,
                    }),
                  }),
                  uiConfigurationService.uiManager[N_1.SideDrawer].render(),
                  uiConfigurationService.uiManager[
                    N_1.AbsolutePositionSlot
                  ].render(),
                ],
              }),
            ],
          }),
          !hideBottomMenu &&
            bottomMenuSetting.visible &&
            uiConfigurationService.uiManager[N_1.BottomMenu].render({
              className: _p(bottomMenuSetting.className, A_1.bottomMenu),
              visible: bottomMenuSetting.visible,
              navigate,
            }),
        ],
      }),
    ],
  });
};
const Z = {
  "side-menu-width": "76px",
  sideMenuWidth: "76px",
  "side-drawer-width": "440px",
  sideDrawerWidth: "440px",
  "side-drawer-float-limit-width": "1280px",
  sideDrawerFloatLimitWidth: "1280px",
  "top-down-layer": "top-down-layer-qGMWwS",
  topDownLayer: "top-down-layer-qGMWwS",
  container: "container-tZXj4C",
  "side-menu": "side-menu-AEmjSU",
  sideMenu: "side-menu-AEmjSU",
  "bottom-menu": "bottom-menu-bmXzFm",
  bottomMenu: "bottom-menu-bmXzFm",
  "top-menu": "top-menu-TQtgX4",
  topMenu: "top-menu-TQtgX4",
  "content-wrapper": "content-wrapper-ffyEB5",
  contentWrapper: "content-wrapper-ffyEB5",
  "main-frame-2026": "main-frame-2026-WmB85w",
  mainFrame2026: "main-frame-2026-WmB85w",
  "main-container": "main-container-PNmYIf",
  mainContainer: "main-container-PNmYIf",
  "with-bottom-menu": "with-bottom-menu-wlQS8l",
  withBottomMenu: "with-bottom-menu-wlQS8l",
  "with-top-menu": "with-top-menu-mLhDRh",
  withTopMenu: "with-top-menu-mLhDRh",
  content: "content-vbaHFq",
  "collapse-content": "collapse-content-zuphhp",
  collapseContent: "collapse-content-zuphhp",
};
function useY() {
  const [isTooltipDisabled, setIsTooltipDisabled] = g.useState(false);
  return {
    isTooltipDisabled,
    handleClick: g.useCallback(() => {
      setIsTooltipDisabled(true);
    }, []),
    handleMouseLeave: g.useCallback(() => {
      setIsTooltipDisabled(false);
    }, []),
  };
}
const Q = g.memo(function (e) {
  const { selected, icon } = e;
  const n = g.useMemo(() => {
    if (icon == null) {
      return undefined;
    }
    return icon({
      selected: true,
    });
  }, [icon]);
  const o = g.useMemo(() => {
    if (icon == null) {
      return undefined;
    }
    return icon({
      selected: false,
    });
  }, [icon]);
  return a.jsx("div", {
    className: "memo-container-jHD3n9",
    children: selected ? n : o,
  });
});
const X = (e) => {
  var { disableUseMemo, icon, selected } = e;
  return a.jsx("div", {
    className: _p("icon-container-xx5e4j", {
      "active-mCsHjj": selected,
    }),
    children: disableUseMemo
      ? icon == null
        ? undefined
        : icon({
            selected,
          })
      : a.jsx(Q, m._({}, e)),
  });
};
const O = (e) => {
  var { children } = e;
  return a.jsxs(a.Fragment, {
    children: [" ", children, " "],
  });
};
const q = g.memo((e) => {
  var { size = 20, text, MenuWrapper = O, IconWrapper = O } = e;
  var { handleClick } = useY();
  var s = text == null ? undefined : text();
  var l = g.useMemo(
    () => ({
      "--menu-icon-size": "".concat(size, "px"),
    }),
    [size],
  );
  return a.jsx("div", {
    className: "icon-container-zU9goo",
    style: l,
    onClick: () => {
      handleClick();
    },
    children: a.jsx(MenuWrapper, {
      children: a.jsxs("div", {
        className: _p("content-qQV8GA", {
          "active-LfAI9D": e.selected,
        }),
        children: [
          a.jsx(IconWrapper, {
            children: a.jsx(X, m._({}, e)),
          }),
          s &&
            a.jsx(G.A.Text, {
              className: "text-MFw55D",
              ellipsis: {
                cssEllipsis: true,
                showTooltip: false,
              },
              children: s,
            }),
        ],
      }),
    }),
  });
});
function useComponent() {
  const { uiConfigurationService } = g.useContext(h.F);
  w.F(uiConfigurationService.uiManager[K.p], (e) => ({
    forceUpdate: e.observableData.forceUpdate,
  }));
}
const $ = (e) => {
  var { className, visible, navigate } = e;
  var { uiConfigurationService } = g.useContext(h.F);
  useComponent();
  var r = w.F(
    uiConfigurationService.uiManager[V.p],
    (e) => e.observableData.configs,
  );
  var s = w.F(uiConfigurationService, (e) => e.setting.bottomMenu);
  var l = w.F(uiConfigurationService, (e) => {
    var t = e.uiManager[d.M];
    var i = e.uiManager[V.p];
    var t_observableData = t.observableData;
    var configs = i.observableData.configs;
    var o = Array.from(i.observableData.selected);
    if (o.length || !t_observableData.currentRoute) {
      return o;
    }
    var r = t_observableData.configs.find((e) => {
      var t;
      return v.B6(e.path, (t = t_observableData.currentRoute) != null ? t : "");
    });
    if (r) {
      var s = configs.find((e) => {
        var t;
        return (
          e.id === r.id ||
          (e.type === "icon" &&
            ((t = e.matchRouteIds) == null ? undefined : t.includes(r.id)))
        );
      });
      if (s) {
        o.push(s.id);
      }
    }
    return o;
  });
  var u = z
    .L({
      list: r || [],
    })
    .filter(
      (e) =>
        !j.I({
          middleware: uiConfigurationService.middleware,
          trigger: V.p,
          method: "shouldHidden",
          handler: e.shouldHidden,
          uiConfig: e,
        })(),
    )
    .map((e) =>
      ((e) => {
        var t;
        var i;
        var { item } = e;
        var o = U._(item.className, "");
        return a.jsx(
          g.Fragment,
          {
            children: a.jsx(
              H.A.Item,
              {
                className: _p(o),
                id: item.id,
                children: a.jsx(L.tH, {
                  fallback:
                    (t = item.errorElement) != null ? t : a.jsx("div", {}),
                  children:
                    item.type === "icon"
                      ? a.jsx(q, m._({}, J.A(e, "item"), e.item))
                      : (i = item.content) == null
                        ? undefined
                        : i.call(item),
                }),
              },
              item.id,
            ),
          },
          item.id,
        );
      })({
        item: e,
        selected: l.includes(e.id),
        uiConfigurationService,
      }),
    );
  return a.jsx("div", {
    className: _p(Z.bottomMenu, className, {
      [Z.visible]: visible,
    }),
    children: a.jsx(H.A, {
      selectedKeys: l,
      onClickMenuItem: (e) => {
        var t;
        var i = uiConfigurationService.uiManager[V.p];
        var a = uiConfigurationService.uiManager[d.M];
        var r = i.observableData.configs.find((t) => t.id === e);
        uiConfigurationService.uiManager[V.p].bottomMenuItemClickHandler(
          (t = r == null ? undefined : r.id) != null ? t : e,
        );
        if (
          !(
            r &&
            s.onInterceptBottomMenuItemClick &&
            s.onInterceptBottomMenuItemClick(r == null ? undefined : r.id)
          )
        ) {
          P.X3(r, "unexpect target no existed");
          var l = j.I({
            middleware: uiConfigurationService.middleware,
            trigger: V.p,
            method: "onClick",
            handler: r.onClick,
            uiConfig: r,
          });
          l();
          if (!l.isStop && (r == null || !r.onClick)) {
            var u = a.observableData.configs.find((t) => t.id === e);
            if (u) {
              var c = uiConfigurationService.uiManager[d.M].generatePath(u.id);
              if (navigate != null) {
                navigate(c, {
                  state: {
                    fromSideMenu: true,
                  },
                });
              }
            }
          }
        }
      },
      children: u,
    }),
  });
};
class ee extends W.d {
  registerConfig(e) {
    N.h5(() => {
      e.forEach((e) => {
        var t = this.observableData.configs.findIndex((t) => t.id === e.id);
        if (t !== -1) {
          this.observableData.configs[t] = E.A(
            this.observableData.configs[t],
            e,
          );
        } else {
          this.observableData.configs.push(e);
        }
      });
    });
  }
  unRegisterConfig(e) {
    N.h5(() => {
      this.observableData.configs = this.observableData.configs.filter(
        (t) => t.id !== e,
      );
    });
  }
  bottomMenuItemClickHandler(e) {
    this._onBottomMenuItemClick.fire(e);
  }
  setSelected(e, t) {
    N.h5(() => {
      if (t) {
        this.observableData.selected.add(e);
      } else {
        this.observableData.selected.delete(e);
      }
    });
  }
  render(e) {
    return a.jsx($, m._({}, e));
  }
  _middlewareChange() {
    N.h5(() => {
      this.observableData.forceUpdate++;
    });
  }
  constructor(...e) {
    super(...e);
    this.observableData = N.sH({
      forceUpdate: 0,
      configs: [],
      selected: new Set(),
    });
    this._onBottomMenuItemClick = new B.v();
    this.onBottomMenuItemClick = this._onBottomMenuItemClick.event;
  }
}
const ea = "global-side-menu-logo";
const el = g.memo(function (e) {
  const { selected, isHover, icon } = e;
  const o = g.useMemo(() => {
    if (icon == null) {
      return undefined;
    }
    return icon({
      selected: true,
      isHover: true,
    });
  }, [icon]);
  const r = g.useMemo(() => {
    if (icon == null) {
      return undefined;
    }
    return icon({
      selected: false,
      isHover: false,
    });
  }, [icon]);
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx("div", {
        className: _p(A_4.iconWrap, !selected && !isHover && A_4.hide),
        children: o,
      }),
      a.jsx("div", {
        className: _p(A_4.iconWrap, (selected || isHover) && A_4.hide),
        children: r,
      }),
    ],
  });
});
const eu = (e) => {
  var { disableUseMemo, icon, selected, isHover } = e;
  return a.jsx("div", {
    className: _p(A_4.iconMenu, {
      [A_4.active]: selected || isHover,
    }),
    children: disableUseMemo
      ? icon == null
        ? undefined
        : icon({
            selected,
            isHover,
          })
      : a.jsx(
          el,
          et._(m._({}, e), {
            isHover,
          }),
        ),
  });
};
const useEd = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  const [i, setI] = g.useState(e);
  const aRef = g.useRef(null);
  g.useEffect(() => {
    if (e) {
      if (aRef.current) {
        clearTimeout(aRef.current);
      }
      aRef.current = setTimeout(() => {
        setI(true);
      }, t);
    } else {
      if (aRef.current) {
        clearTimeout(aRef.current);
        aRef.current = null;
      }
      setI(false);
    }
    return () => {
      if (aRef.current) {
        clearTimeout(aRef.current);
      }
    };
  }, [e, t]);
  return i;
};
const ec = (e) => {
  var { children } = e;
  return a.jsxs(a.Fragment, {
    children: [" ", children, " "],
  });
};
const eh = g.memo((e) => {
  var {
    size = 48,
    text,
    tooltips,
    tooltipProps,
    popupAlign,
    MenuWrapper = ec,
  } = e;
  var [l, setL] = g.useState(false);
  var { isTooltipDisabled, handleClick, handleMouseLeave } = useY();
  var p = useEd(l, 1000);
  var v = text == null ? undefined : text();
  var content = tooltips ? tooltips() : v;
  var f = g.useMemo(
    () => ({
      "--menu-icon-size": "".concat(size, "px"),
    }),
    [size],
  );
  return a.jsx("div", {
    className: A_3.iconContainer,
    style: f,
    onClick: () => {
      handleClick();
    },
    onMouseOver: (e) => {
      if (!l) {
        setL(true);
      }
    },
    onMouseLeave: () => {
      setL(false);
      handleMouseLeave();
    },
    children: a.jsx(MenuWrapper, {
      children: content
        ? a.jsx(
            eo.A,
            et._(
              m._(
                {
                  content,
                  className: A_3.tips,
                  position: "right",
                  popupVisible:
                    !isTooltipDisabled &&
                    (tooltipProps == null || !tooltipProps.disabled) &&
                    p,
                  triggerProps: {
                    popupAlign,
                  },
                },
                tooltipProps,
              ),
              {
                children: a.jsxs("div", {
                  className: _p(A_3.content, {
                    [A_3.active]: e.selected || l,
                  }),
                  children: [
                    a.jsx(
                      eu,
                      et._(m._({}, e), {
                        isHover: l,
                      }),
                    ),
                    v &&
                      a.jsx(G.A.Text, {
                        className: A_3.text,
                        ellipsis: {
                          cssEllipsis: true,
                          showTooltip: true,
                        },
                        children: v,
                      }),
                  ],
                }),
              },
            ),
          )
        : a.jsxs("div", {
            className: _p(A_3.content, {
              [A_3.active]: e.selected || l,
            }),
            children: [
              a.jsx(
                eu,
                et._(m._({}, e), {
                  isHover: l,
                }),
              ),
              v &&
                a.jsx(G.A.Text, {
                  className: A_3.text,
                  ellipsis: {
                    cssEllipsis: true,
                    showTooltip: true,
                  },
                  children: v,
                }),
            ],
          }),
    }),
  });
});
const em = (e) => {
  var t;
  var i;
  var { item, uiConfigurationService } = e;
  var r = U._(item.className, "");
  return a.jsx(
    g.Fragment,
    {
      children: a.jsx(
        H.A.Item,
        {
          className: _p(r),
          id: item.id,
          onMouseEnter: () => {
            j.I({
              middleware: uiConfigurationService.middleware,
              trigger: K.p,
              method: "onHover",
              handler: item.onHover,
              uiConfig: item,
            })();
          },
          children: a.jsx(L.tH, {
            fallback: (t = item.errorElement) != null ? t : a.jsx("div", {}),
            children:
              item.type === "icon"
                ? a.jsx(eh, m._({}, J.A(e, "item"), e.item))
                : (i = item.content) == null
                  ? undefined
                  : i.call(item),
          }),
        },
        item.id,
      ),
    },
    item.id,
  );
};
const useEg = (e) => {
  var { className, visible, navigate } = e;
  var { uiConfigurationService } = g.useContext(h.F);
  useComponent();
  var r = w.F(uiConfigurationService.uiManager[K.p], (e) =>
    e.observableData.configs.reduce(
      (acc, config) => {
        acc[config.position].push(config);
        return acc;
      },
      {
        top: [],
        center: [],
        bottom: [],
      },
    ),
  );
  var s = w.F(uiConfigurationService, (e) => e.setting.sideMenu);
  var l = w.F(uiConfigurationService, (e) => {
    var t = e.uiManager[d.M];
    var i = e.uiManager[K.p];
    var t_observableData = t.observableData;
    var configs = i.observableData.configs;
    var o = Array.from(i.observableData.selected);
    if (o.length || !t_observableData.currentRoute) {
      return o;
    }
    var r = t_observableData.configs.find((e) => {
      var t;
      return v.B6(e.path, (t = t_observableData.currentRoute) != null ? t : "");
    });
    if (r) {
      var s = configs.find((e) => {
        var t;
        return (
          e.id === r.id ||
          (e.type === "icon" &&
            ((t = e.matchRouteIds) == null ? undefined : t.includes(r.id)))
        );
      });
      if (s) {
        o.push(s.id);
      }
    }
    return o;
  });
  var u = z
    .L({
      list: r.top,
    })
    .filter(
      (e) =>
        !j.I({
          middleware: uiConfigurationService.middleware,
          trigger: K.p,
          method: "shouldHidden",
          handler: e.shouldHidden,
          uiConfig: e,
        })(),
    )
    .map((e) =>
      em({
        item: e,
        selected: l.includes(e.id),
        uiConfigurationService,
      }),
    );
  var c = z
    .L({
      list: r.center,
    })
    .filter(
      (e) =>
        !j.I({
          middleware: uiConfigurationService.middleware,
          trigger: K.p,
          method: "shouldHidden",
          handler: e.shouldHidden,
          uiConfig: e,
        })(),
    )
    .map((e) =>
      em({
        item: e,
        selected: l.includes(e.id),
        uiConfigurationService,
        popupAlign: {
          right: [-2, -2],
        },
      }),
    );
  var m = z
    .L({
      list: r.bottom,
    })
    .filter(
      (e) =>
        !j.I({
          middleware: uiConfigurationService.middleware,
          trigger: K.p,
          method: "shouldHidden",
          handler: e.shouldHidden,
          uiConfig: e,
        })(),
    )
    .map((e) =>
      em({
        item: e,
        selected: l.includes(e.id),
        uiConfigurationService,
        size: 40,
        popupAlign: {
          right: 4,
        },
      }),
    );
  var p = (e) => {
    var t;
    var i = uiConfigurationService.uiManager[K.p];
    var a = uiConfigurationService.uiManager[d.M];
    var r = i.observableData.configs.find((t) => t.id === e);
    if (r || e === ea) {
      uiConfigurationService.uiManager[K.p].sideMenuItemClickHandler(
        (t = r == null ? undefined : r.id) != null ? t : e,
      );
      if (
        !(
          r &&
          s.onInterceptSideMenuItemClick &&
          s.onInterceptSideMenuItemClick(r == null ? undefined : r.id)
        )
      ) {
        P.X3(r, "unexpect target no existed");
        var l = j.I({
          middleware: uiConfigurationService.middleware,
          trigger: K.p,
          method: "onClick",
          handler: r.onClick,
          uiConfig: r,
        });
        l();
        if (!l.isStop && (r == null || !r.onClick)) {
          var u = a.observableData.configs.find((t) => t.id === e);
          if (u) {
            var c = uiConfigurationService.uiManager[d.M].generatePath(u.id);
            if (navigate != null) {
              navigate(c, {
                state: {
                  fromSideMenu: true,
                },
              });
            }
          }
        }
      }
    }
  };
  var onHoverMenuItem = (e) => {
    var t = uiConfigurationService.uiManager[K.p].observableData.configs
      .reduce((acc, config) => {
        acc.push(config);
        return acc;
      }, [])
      .find((t) => t.id === e);
    if (t || e === ea) {
      P.X3(t, "unexpect target no existed");
      j.I({
        middleware: uiConfigurationService.middleware,
        trigger: K.p,
        method: "onHover",
        handler: t.onHover,
        uiConfig: t,
      })();
    }
  };
  return a.jsxs("div", {
    className: _p(A_2.sideMenu, className, {
      [A_2.visible]: visible,
    }),
    children: [
      a.jsx(H.A, {
        className: _p(A_2.topMenu),
        selectedKeys: l,
        onClickMenuItem: p,
        onHoverMenuItem,
        children: u,
      }),
      a.jsx(H.A, {
        className: _p(A_2.centerMenu),
        selectedKeys: l,
        onClickMenuItem: p,
        onHoverMenuItem,
        children: c,
      }),
      a.jsx(H.A, {
        className: _p(A_2.bottomMenu),
        selectedKeys: l,
        onClickMenuItem: p,
        onHoverMenuItem,
        children: m,
      }),
    ],
  });
};
const ep = (e) => {
  var { renderer } = e;
  var i = ei._(e, ["renderer"]);
  return a.jsx(a.Fragment, {
    children: renderer(i),
  });
};
class eb extends W.d {
  registerConfig(e) {
    N.h5(() => {
      e.forEach((e) => {
        var t = this.observableData.configs.findIndex((t) => t.id === e.id);
        if (t !== -1) {
          this.observableData.configs[t] = E.A(
            this.observableData.configs[t],
            e,
          );
        } else {
          this.observableData.configs.push(e);
        }
      });
    });
  }
  unRegisterConfig(e) {
    N.h5(() => {
      this.observableData.configs = this.observableData.configs.filter(
        (t) => t.id !== e,
      );
    });
  }
  sideMenuItemClickHandler(e) {
    this._onSideMenuItemClick.fire(e);
  }
  setSelected(e, t) {
    N.h5(() => {
      if (t) {
        this.observableData.selected.add(e);
      } else {
        this.observableData.selected.delete(e);
      }
    });
  }
  setRenderer(e) {
    this._rendererRegistration = e;
  }
  get hasCustomRenderer() {
    return this._rendererRegistration !== undefined;
  }
  render(e) {
    if (!this._rendererRegistration) {
      return a.jsx(useEg, m._({}, e));
    }
    const { renderer, fallbackRenderer } = this._rendererRegistration;
    return a.jsx(L.tH, {
      fallback: a.jsx(
        ep,
        et._(m._({}, e), {
          renderer: fallbackRenderer,
        }),
      ),
      children: a.jsx(
        ep,
        et._(m._({}, e), {
          renderer,
        }),
      ),
    });
  }
  _middlewareChange() {
    N.h5(() => {
      this.observableData.forceUpdate++;
    });
  }
  constructor(...e) {
    super(...e);
    this.observableData = N.sH({
      forceUpdate: 0,
      configs: [],
      selected: new Set(),
    });
    this._onModeChange = new B.v();
    this.onModeChange = this._onModeChange.event;
    this._onSideMenuItemClick = new B.v();
    this.onSideMenuItemClick = this._onSideMenuItemClick.event;
  }
}
const useEv = () => {
  var { uiConfigurationService } = g.useContext(h.F);
  var { configs } = w.F(uiConfigurationService, (e) => ({
    configs: e.uiManager[N_1.TopBanner].observableData.configs,
  }));
  var i = g.useMemo(
    () =>
      [...configs]
        .filter((e) => e.visible !== false)
        .sort((e, t) => {
          var i;
          var n;
          return (
            ((i = e.order) != null ? i : 0) - ((n = t.order) != null ? n : 0)
          );
        }),
    [configs],
  );
  if (i.length === 0) {
    return null;
  }
  return a.jsx(a.Fragment, {
    children: i.map((e) => {
      var t;
      return a.jsx(
        g.Fragment,
        {
          children: e.content
            ? e.content()
            : (t = e.skeleton) == null
              ? undefined
              : t.call(e),
        },
        e.id,
      );
    }),
  });
};
class eM extends W.d {
  registerConfig(e) {
    N.h5(() => {
      e.forEach((e) => {
        var t = this.observableData.configs.findIndex((t) => t.id === e.id);
        if (t !== -1) {
          this.observableData.configs[t] = E.A(
            this.observableData.configs[t],
            e,
          );
        } else {
          this.observableData.configs.push(e);
        }
      });
    });
  }
  unRegisterConfig(e) {
    N.h5(() => {
      this.observableData.configs = this.observableData.configs.filter(
        (t) => t.id !== e,
      );
    });
  }
  render() {
    return a.jsx(useEv, {});
  }
  _middlewareChange() {
    N.h5(() => {
      this.observableData.forceUpdate++;
    });
  }
  constructor(...e) {
    super(...e);
    this.observableData = N.sH({
      forceUpdate: 0,
      configs: [],
    });
  }
}
const ex = {
  "side-menu-width": "76px",
  sideMenuWidth: "76px",
  "side-drawer-width": "440px",
  sideDrawerWidth: "440px",
  "side-drawer-float-limit-width": "1280px",
  sideDrawerFloatLimitWidth: "1280px",
  "top-down-layer": "top-down-layer-Z0aOBY",
  topDownLayer: "top-down-layer-Z0aOBY",
  container: "container-YTzIM0",
  "side-menu": "side-menu-NJy8UU",
  sideMenu: "side-menu-NJy8UU",
  "bottom-menu": "bottom-menu-D44NLo",
  bottomMenu: "bottom-menu-D44NLo",
  "top-menu": "top-menu-Npppqv",
  topMenu: "top-menu-Npppqv",
  "content-wrapper": "content-wrapper-qxoza4",
  contentWrapper: "content-wrapper-qxoza4",
  "main-frame-2026": "main-frame-2026-gz1mXz",
  mainFrame2026: "main-frame-2026-gz1mXz",
  "main-container": "main-container-xBJAgp",
  mainContainer: "main-container-xBJAgp",
  "with-bottom-menu": "with-bottom-menu-L0EXQv",
  withBottomMenu: "with-bottom-menu-L0EXQv",
  "with-top-menu": "with-top-menu-nFVhNt",
  withTopMenu: "with-top-menu-nFVhNt",
  content: "content-V0HqY_",
  "collapse-content": "collapse-content-EJoXkq",
  collapseContent: "collapse-content-EJoXkq",
  leftMenu: "leftMenu-ErOFFk",
  menuItemIcon: "menuItemIcon-TbNYq8",
  menuItemText: "menuItemText-oNYfN0",
};
const useEC = (e) => {
  var { className, visible, navigate } = e;
  var { uiConfigurationService } = g.useContext(h.F);
  useComponent();
  var r = w.F(uiConfigurationService.uiManager[ew.R], (e) =>
    e.observableData.configs.reduce(
      (acc, config) => {
        acc[config.position].push(config);
        return acc;
      },
      {
        left: [],
        right: [],
      },
    ),
  );
  var s = w.F(uiConfigurationService, (e) => e.setting.topMenu);
  var l = w.F(uiConfigurationService, (e) => {
    var t = e.uiManager[d.M];
    var i = e.uiManager[ew.R];
    var t_observableData = t.observableData;
    var configs = i.observableData.configs;
    var activeKeys = Array.from(i.observableData.selected);
    if (activeKeys.length || !t_observableData.currentRoute) {
      return {
        activeKeys,
        activeMenuId: null,
      };
    }
    var r = t_observableData.configs.find((e) => {
      var t;
      return v.B6(e.path, (t = t_observableData.currentRoute) != null ? t : "");
    });
    if (r) {
      var s = configs.find((e) => {
        var t;
        return (
          e.id === r.id ||
          ((t = e.matchRouteIds) == null ? undefined : t.includes(r.id))
        );
      });
      if (s) {
        activeKeys.push(s.id);
      }
      return {
        activeKeys,
        activeMenuId: r.id,
      };
    }
    return {
      activeKeys,
      activeMenuId: null,
    };
  });
  var c = l.activeMenuId || "Home";
  var m = z
    .L({
      list: r.right,
    })
    .filter(
      (e) =>
        !j.I({
          middleware: uiConfigurationService.middleware,
          trigger: ew.R,
          method: "shouldHidden",
          handler: e.shouldHidden,
          uiConfig: e,
        })(),
    )
    .map((e) =>
      ((e) => {
        var t;
        var i;
        var { item } = e;
        var o = U._(item.className, "");
        return a.jsx(
          g.Fragment,
          {
            children: a.jsx(
              H.A.Item,
              {
                className: _p(o),
                id: item.id,
                children: a.jsx(L.tH, {
                  fallback:
                    (t = item.errorElement) != null ? t : a.jsx("div", {}),
                  children:
                    (i = item.content) == null ? undefined : i.call(item),
                }),
              },
              item.id,
            ),
          },
          item.id,
        );
      })({
        item: e,
        selected: l.activeKeys.includes(e.id),
        uiConfigurationService,
      }),
    );
  var p = (e) => {
    var t;
    var i = uiConfigurationService.uiManager[ew.R];
    var a = uiConfigurationService.uiManager[d.M];
    var r = i.observableData.configs.find((t) => t.id === e);
    uiConfigurationService.uiManager[ew.R].topMenuItemClickHandler(
      (t = r == null ? undefined : r.id) != null ? t : e,
    );
    if (
      !(
        r &&
        s.onInterceptTopMenuItemClick &&
        s.onInterceptTopMenuItemClick(r == null ? undefined : r.id)
      )
    ) {
      P.X3(r, "unexpect target no existed");
      var l = j.I({
        middleware: uiConfigurationService.middleware,
        trigger: ew.R,
        method: "onClick",
        handler: r.onClick,
        uiConfig: r,
      });
      l();
      if (!l.isStop && (r == null || !r.onClick)) {
        var u = a.observableData.configs.find((t) => t.id === e);
        if (u) {
          var c = uiConfigurationService.uiManager[d.M].generatePath(u.id);
          if (navigate != null) {
            navigate(c, {
              state: {
                fromSideMenu: true,
              },
            });
          }
        }
      }
    }
  };
  return a.jsxs("div", {
    className: _p(ex.topMenu, className, {
      [ex.visible]: visible,
    }),
    children: [
      a.jsx(H.A, {
        className: _p(ex.leftMenu),
        selectedKeys: l.activeKeys,
        onClickMenuItem: p,
        children:
          c === "Home"
            ? a.jsx("img", {
                src: ef.m(
                  "data:image/png;base64,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",
                  null,
                  {
                    logType: "js.href/src",
                    reportOnly: "false",
                    blackConfig: "{}",
                    configMode: "merge",
                    isCloseSSRReport: true,
                    bid: "cc_dreamina",
                    region: "cn",
                    urlLimit: "-1",
                    htmlLimit: "-1",
                    isSaveValidUrl: false,
                    isRuntimeLog: false,
                    isDOMParser: false,
                    escapeRule: "escape-report",
                    reportUrl:
                      "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                    htmlparserOptions: "{}",
                    scmBranch: "-",
                    scmName: "-",
                    scmVersion: "-",
                    webpackPluginVersion: "3.6.0",
                    filename:
                      "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$lbHBZ%2pKaF-wNXNZM2s1T$d*$E1Xc*lNalZ0W$Zka01XTnRSakJo$npsM$R*aE9iR051$25CWk1s$jJXa2hL-kZsWE1-Qmli$$-yWXpOS2Frd3lXbXha$0ZJeFkyM$dla3d6$W5aalF6RjBXb*MxT$$3e$RuWmlXR%oyWW0x$2RX%kRP$EJpTTB*MFlsZFdk$1J%TlRCak0ya*9ZMjFrT$dOM1B%MD0",
                  },
                ),
                alt: "Dreamina",
              })
            : a.jsx("span", {
                children: u.F2.t("web_home_nav_bar_generate", {}, "Create"),
              }),
      }),
      a.jsx(H.A, {
        className: _p(ex.rightMenu),
        selectedKeys: l.activeKeys,
        onClickMenuItem: p,
        children: m,
      }),
    ],
  });
};
class eS extends W.d {
  registerConfig(e) {
    N.h5(() => {
      e.forEach((e) => {
        var t = this.observableData.configs.findIndex((t) => t.id === e.id);
        if (t !== -1) {
          this.observableData.configs[t] = E.A(
            this.observableData.configs[t],
            e,
          );
        } else {
          this.observableData.configs.push(e);
        }
      });
    });
  }
  unRegisterConfig(e) {
    N.h5(() => {
      this.observableData.configs = this.observableData.configs.filter(
        (t) => t.id !== e,
      );
    });
  }
  topMenuItemClickHandler(e) {
    this._onTopMenuItemClick.fire(e);
  }
  setSelected(e, t) {
    N.h5(() => {
      if (t) {
        this.observableData.selected.add(e);
      } else {
        this.observableData.selected.delete(e);
      }
    });
  }
  render(e) {
    return a.jsx(useEC, m._({}, e));
  }
  _middlewareChange() {
    N.h5(() => {
      this.observableData.forceUpdate++;
    });
  }
  constructor(...e) {
    super(...e);
    this.observableData = N.sH({
      forceUpdate: 0,
      configs: [],
      selected: new Set(),
    });
    this._onTopMenuItemClick = new B.v();
    this.onTopMenuItemClick = this._onTopMenuItemClick.event;
  }
}
const ek = parseFloat("76px");
const eD = parseFloat("440px");
const floatLimitWidth = parseFloat("1280px");
class eN extends eI.G {
  get baseRoute() {
    return this.observableData.baseRoute;
  }
  get siderMenuSetting() {
    return this.observableData.sideMenu;
  }
  get bottomMenuSetting() {
    return this.observableData.bottomMenu;
  }
  get topMenuSetting() {
    return this.observableData.topMenu;
  }
  get topFixedSlotSetting() {
    return this.observableData.topFixedSlot;
  }
  get sideMenu() {
    return this.observableData.sideMenu;
  }
  get bottomMenu() {
    return this.observableData.bottomMenu;
  }
  get topMenu() {
    return this.observableData.topMenu;
  }
  get topFixedSlot() {
    return this.observableData.topFixedSlot;
  }
  get sideDrawerSetting() {
    return this.observableData.sideDrawer;
  }
  get sideDrawer() {
    return this.observableData.sideDrawer;
  }
  get layoutSetting() {
    return this.observableData.layout;
  }
  switchSideMenuVisible(e) {
    N.h5(() => {
      this.observableData.sideMenu.visible = e;
    });
  }
  switchBottomMenuVisible(e) {
    N.h5(() => {
      this.observableData.bottomMenu.visible = e;
    });
  }
  switchTopMenuVisible(e) {
    N.h5(() => {
      this.observableData.topMenu.visible = e;
    });
  }
  switchTopFixedSlotVisible(e) {
    N.h5(() => {
      this.observableData.topFixedSlot.visible = e;
    });
  }
  updateSideDrawerCollapseBehaviorGetter(e) {
    N.h5(() => {
      this.observableData.sideDrawer.getSideDrawerCollapseBehavior = e;
    });
  }
  changeSideMenuWidth(e) {
    N.h5(() => {
      this.observableData.sideMenu.width = e;
    });
  }
  changeBottomMenuHeight(e) {
    N.h5(() => {
      this.observableData.bottomMenu.height = e;
    });
  }
  changeTopMenuHeight(e) {
    N.h5(() => {
      this.observableData.topMenu.height = e;
    });
  }
  changeInterceptSideMenuItemClickCb(e) {
    N.h5(() => {
      this.observableData.sideMenu.onInterceptSideMenuItemClick = e;
    });
  }
  changeInterceptBottomMenuItemClickCb(e) {
    N.h5(() => {
      this.observableData.bottomMenu.onInterceptBottomMenuItemClick = e;
    });
  }
  changeInterceptTopMenuItemClickCb(e) {
    N.h5(() => {
      this.observableData.topMenu.onInterceptTopMenuItemClick = e;
    });
  }
  setSideMenuClassName(e) {
    N.h5(() => {
      this.observableData.sideMenu.className = e;
    });
  }
  setBottomMenuClassName(e) {
    N.h5(() => {
      this.observableData.bottomMenu.className = e;
    });
  }
  setTopMenuClassName(e) {
    N.h5(() => {
      this.observableData.topMenu.className = e;
    });
  }
  constructor(e) {
    super({
      setting: E.A(
        {},
        {
          namespace: "dreamina",
          baseRoute: "/",
          visible: true,
          debugMode: false,
          sideMenu: {
            visible: true,
            width: ek,
          },
          bottomMenu: {
            visible: true,
            height: 64,
          },
          topMenu: {
            visible: true,
            height: 44,
          },
          topFixedSlot: {
            visible: true,
          },
          sideDrawer: {
            width: eD,
            floatStrategy: {
              floatLimitWidth,
            },
          },
        },
        e.setting,
      ),
    });
  }
}
class eA extends A.x {
  getRenderRootWrapper() {
    if (!(typeof window === "undefined")) {
      const e = document.getElementById(id);
      if (e) {
        return e;
      }
    }
  }
  registerConfig(e) {
    for (const t of Object.keys(e)) {
      this.uiManager[t].registerConfig(e[t]);
    }
  }
  unRegisterConfig(e) {
    for (const t of Object.keys(this.uiManager)) {
      try {
        this.uiManager[t].unRegisterConfig(e);
      } catch (e) {}
    }
  }
  get containerWidth() {
    return this.uiManager[N_1.PageRoute].observableData.containerWidth;
  }
  get isSideMenuVisible() {
    let e;
    let t;
    return (
      this.setting.observableData.sideMenu.visible &&
      !((t = this.uiManager[N_1.PageRoute].currentRoute) == null ||
      (e = t.layoutConfiguration) == null
        ? undefined
        : e.hideSideMenu)
    );
  }
  get hasCustomSideMenuRenderer() {
    return this.uiManager[N_1.SideMenu].hasCustomRenderer;
  }
  get isBottomMenuVisible() {
    let e;
    let t;
    return (
      this.setting.observableData.bottomMenu.visible &&
      !((t = this.uiManager[N_1.PageRoute].currentRoute) == null ||
      (e = t.layoutConfiguration) == null
        ? undefined
        : e.hideBottomMenu)
    );
  }
  get isTopMenuVisible() {
    let e;
    let t;
    return (
      this.setting.observableData.topMenu.visible &&
      !((t = this.uiManager[N_1.PageRoute].currentRoute) == null ||
      (e = t.layoutConfiguration) == null
        ? undefined
        : e.hideTopMenu)
    );
  }
  get isTopFixedSlotVisible() {
    return this.setting.observableData.topFixedSlot.visible;
  }
  getRouteManager() {
    return this.uiManager[N_1.PageRoute];
  }
  navigate(e, t) {
    this.uiManager[N_1.PageRoute].navigate(e, t);
  }
  navigateBack() {
    const e =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
    this.uiManager[N_1.PageRoute].navigateBack(e);
  }
  generatePath(e, t) {
    const { baseRoute } = this.setting.observableData;
    const n = this.uiManager[N_1.PageRoute].generatePath(e, t);
    return "".concat(baseRoute).concat(n);
  }
  switchSideMenuVisible(e) {
    return this.setting.switchSideMenuVisible(e);
  }
  switchBottomMenuVisible(e) {
    return this.setting.switchBottomMenuVisible(e);
  }
  switchTopMenuVisible(e) {
    return this.setting.switchTopMenuVisible(e);
  }
  switchTopFixedSlotVisible(e) {
    return this.setting.switchTopFixedSlotVisible(e);
  }
  setBottomMenuSelected(e, t) {
    this.uiManager[N_1.BottomMenu].setSelected(e, t);
  }
  setSideMenuSelected(e, t) {
    this.uiManager[N_1.SideMenu].setSelected(e, t);
  }
  setTopMenuSelected(e, t) {
    this.uiManager[N_1.TopMenu].setSelected(e, t);
  }
  changeBottomMenuHeight(e) {
    this.setting.changeBottomMenuHeight(e);
  }
  changeSideMenuWidth(e) {
    this.setting.changeSideMenuWidth(e);
  }
  setSideMenuRenderer(e) {
    this.uiManager[N_1.SideMenu].setRenderer(e);
  }
  getSideMenuConfigs() {
    return this.uiManager[N_1.SideMenu].observableData.configs;
  }
  activateSideMenuItem(e) {
    let t;
    let i;
    const n = this.uiManager[N_1.SideMenu];
    const a = n.observableData.configs.find((t) => t.id === e);
    if (a) {
      n.sideMenuItemClickHandler(e);
      if (
        (t = (i = this.setting.sideMenu).onInterceptSideMenuItemClick) ==
          null ||
        !t.call(i, e)
      ) {
        const o = j.I({
          middleware: this.middleware,
          trigger: K.p,
          method: "onClick",
          handler: a.onClick,
          uiConfig: a,
        });
        o();
        if (!o.isStop && !a.onClick) {
          const r = this.uiManager[N_1.PageRoute].observableData.configs.find(
            (t) => t.id === e,
          );
          if (r) {
            this.navigate(r.id, {
              state: {
                fromSideMenu: true,
              },
            });
          }
        }
      }
    }
  }
  hoverSideMenuItem(e) {
    const t = this.uiManager[N_1.SideMenu].observableData.configs.find(
      (t) => t.id === e,
    );
    if (t) {
      j.I({
        middleware: this.middleware,
        trigger: K.p,
        method: "onHover",
        handler: t.onHover,
        uiConfig: t,
      })();
    }
  }
  changeTopMenuHeight(e) {
    this.setting.changeTopMenuHeight(e);
  }
  changeInterceptSideMenuItemClickCb(e) {
    this.setting.changeInterceptSideMenuItemClickCb(e);
  }
  changeInterceptBottomMenuItemClickCb(e) {
    this.setting.changeInterceptBottomMenuItemClickCb(e);
  }
  changeInterceptTopMenuItemClickCb(e) {
    this.setting.changeInterceptTopMenuItemClickCb(e);
  }
  setSideMenuClassName(e) {
    this.setting.setSideMenuClassName(e);
  }
  setBottomMenuClassName(e) {
    this.setting.setBottomMenuClassName(e);
  }
  setTopMenuClassName(e) {
    this.setting.setTopMenuClassName(e);
  }
  get currentRoutePath() {
    return this.uiManager[N_1.PageRoute].observableData.currentRoute;
  }
  getRouteConfigByPath(e) {
    return this.uiManager[N_1.PageRoute].getRouteConfigByPath(e);
  }
  get currentKeepAliveData() {
    return this.uiManager[N_1.PageRoute].currentKeepAliveData;
  }
  openSideDrawer(e) {
    this.uiManager[N_1.SideDrawer].open(e);
  }
  closeSideDrawer() {
    this.uiManager[N_1.SideDrawer].close();
  }
  updateAbsoluteSlotPosition(e, t) {
    return this.uiManager[N_1.AbsolutePositionSlot].updateSlotPosition(e, t);
  }
  _initAllManager() {
    const { currentRoute } = this._options;
    this.uiManager = {
      [N_1.PageRoute]: this._containerService.createInstance(
        y.k,
        this.middleware,
      ),
      [N_1.SideMenu]: this._containerService.createInstance(
        eb,
        this.middleware,
      ),
      [N_1.BottomMenu]: this._containerService.createInstance(
        ee,
        this.middleware,
      ),
      [N_1.TopMenu]: this._containerService.createInstance(eS, this.middleware),
      [N_1.TopBanner]: this._containerService.createInstance(
        eM,
        this.middleware,
      ),
      [N_1.SideDrawer]: this._containerService.createInstance(
        F.u,
        this.middleware,
      ),
      [N_1.AbsolutePositionSlot]: this._containerService.createInstance(
        T.O,
        this.middleware,
      ),
    };
    if (currentRoute) {
      this.uiManager[N_1.PageRoute].updatePageRoute(currentRoute);
    }
    this.setting.updateSideDrawerCollapseBehaviorGetter(() => {
      var e;
      var currentRoute = this.uiManager[N_1.PageRoute].currentRoute;
      if (
        currentRoute &&
        (e = currentRoute.sideDrawerCollapseBehavior) != null
      ) {
        return e;
      }
      return "legacy";
    });
  }
  _initListener() {
    this.onKeepAliveChange = this.uiManager[N_1.PageRoute].onKeepAliveChange;
    this.onContainerWidthChange =
      this.uiManager[N_1.PageRoute].onPageContainerWidthChange;
    this.onRouteConfigChange =
      this.uiManager[N_1.PageRoute].onRouteConfigChange;
    this.onSideMenuItemClick = this.uiManager[N_1.SideMenu].onSideMenuItemClick;
    this.onBottomMenuItemClick =
      this.uiManager[N_1.BottomMenu].onBottomMenuItemClick;
    this.onTopMenuItemClick = this.uiManager[N_1.TopMenu].onTopMenuItemClick;
    this.onWouldRouteChange = this.uiManager[N_1.PageRoute].onWouldRouteChange;
    this.reporter = {
      onPageRendered: this.uiManager[N_1.PageRoute].onPageRendered,
    };
    N.mJ(
      () => this.isSideMenuVisible,
      () => {
        this._onSideMenuVisibleChange.fire(this.isSideMenuVisible);
      },
    );
    N.mJ(
      () => this.isBottomMenuVisible,
      () => {
        this._onBottomMenuVisibleChange.fire(this.isBottomMenuVisible);
      },
    );
    N.mJ(
      () => this.isTopMenuVisible,
      () => {
        this._onTopMenuVisibleChange.fire(this.isTopMenuVisible);
      },
    );
  }
  constructor(e, t) {
    var i;
    super(
      t.createInstance(eN, {
        setting: (i = e.setting) != null ? i : {},
      }),
      t,
    );
    this._options = e;
    this._containerService = t;
    this._onSideMenuVisibleChange = new B.v();
    this.onSideMenuVisibleChange = this._onSideMenuVisibleChange.event;
    this._onBottomMenuVisibleChange = new B.v();
    this.onBottomMenuVisibleChange = this._onBottomMenuVisibleChange.event;
    this._onTopMenuVisibleChange = new B.v();
    this.onTopMenuVisibleChange = this._onTopMenuVisibleChange.event;
    this._onTopFixedSlotVisibleChange = new B.v();
    this.onTopFixedSlotVisibleChange = this._onTopFixedSlotVisibleChange.event;
    super._bootstrap();
    this._initListener();
  }
}
eA = n.Cg(
  [
    n.Qj(1, l._),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof IDreaminaUiConfigurationProps === "undefined"
        ? Object
        : IDreaminaUiConfigurationProps,
      l._ === undefined ? Object : l._,
    ]),
  ],
  eA,
);
class ej extends eA {
  render() {
    const e = this.uiManager[d.M];
    return a.jsx(o.Ay, {
      locale: c.o(u.Ay.language),
      loadingElement: a.jsx(R.w, {}),
      children: a.jsx(s.Z, {
        instantiationService: this._containerService,
        children: a.jsx(h.F.Provider, {
          value: {
            uiConfigurationService: this,
          },
          children: a.jsx(r.Kd, {
            basename: this.setting.observableData.baseRoute,
            children: e.render({
              layout: a.jsx(useD, {}),
            }),
          }),
        }),
      }),
    });
  }
  constructor(e, t) {
    super(e, t);
  }
}
export { ej as J };
ej = n.Cg(
  [
    n.Qj(1, l._),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof IDreaminaUiConfigurationProps === "undefined"
        ? Object
        : IDreaminaUiConfigurationProps,
      l._ === undefined ? Object : l._,
    ]),
  ],
  ej,
);
