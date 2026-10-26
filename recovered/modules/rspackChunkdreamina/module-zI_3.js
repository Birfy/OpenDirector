import s from "z8";
import "aGi";
import i from "VRD";
import r from "zS";
import n from "pr";
import o from "ED";
import l from "Qey";
import c from "yw";
import d from "wF";
import { a as a_1 } from "./module-yj_2.js";
import m from "bT";
import h from "qbo";
import g from "c8J";
import v from "Wh";
import * as p from "./module-E67.js";
import { D as D_1 } from "./module-iZ_3.js";
import "xj";
import y from "R8";
import S from "xb";
import j from "cO";
import x from "OQ";
import * as k from "./module-Vv_3.js";
import F from "Ly";
import { L as L_1 } from "./module-Kkf.js";
import { A } from "./module-TZ_3.js";
const _ = m.memo(function (e) {
  const { rowHeight, columns = 5, rowGap = 8 } = e;
  const r = m.useMemo(
    () =>
      Array.from(
        {
          length: columns,
        },
        (e, t) => t,
      ),
    [columns],
  );
  return s.jsx("div", {
    className: "container-KolQfU",
    children: s.jsx(h.t$, {
      children: (e) => {
        var { width, height } = e;
        if (!width || !height) {
          return null;
        }
        var o = Array.from(
          {
            length: Math.max(1, Math.ceil(height / (rowHeight + rowGap))),
          },
          (e, t) => t,
        );
        return s.jsx("div", {
          style: {
            width,
          },
          children: o.map((e) =>
            s.jsx(
              "div",
              {
                className: "row-fKGrby",
                style: {
                  height: rowHeight,
                  marginBottom: rowGap,
                },
                children: r.map((e) =>
                  s.jsx(
                    D_1,
                    {
                      className: "item-c0kGgE",
                    },
                    e,
                  ),
                ),
              },
              e,
            ),
          ),
        });
      },
    }),
  });
});
const b = m.memo(function (e) {
  const {
    initialed,
    loading = false,
    hasMore = false,
    loadingFailure = false,
    list,
    renderItem,
    rowHeight,
    onReachBottom,
    bottomThreshold,
  } = e;
  const fRef = m.useRef(
    new h.jS({
      fixedWidth: true,
      defaultHeight: rowHeight,
    }),
  );
  const b = r.A(
    g.A((e) => {
      var { clientHeight, scrollHeight, scrollTop } = e;
      if (
        scrollHeight - scrollTop <
        (bottomThreshold != null ? bottomThreshold : 2 * clientHeight)
      ) {
        if (onReachBottom != null) {
          onReachBottom();
        }
      }
    }, 200),
  );
  const onScroll = r.A((e) => {
    b(e);
  });
  if (
    loadingFailure ||
    (initialed && (list.length || (!loading && !hasMore)))
  ) {
    if (list.length) {
      return s.jsx(h.PG, {
        children: () =>
          s.jsx(h.t$, {
            children: (e) => {
              var { width, height } = e;
              if (!width || !height || !list.length) {
                return null;
              }
              var i = v.A(list, 5);
              return s.jsx(h.B8, {
                width,
                height,
                rowHeight: rowHeight + 8,
                rowCount: i.length,
                rowRenderer: (e) => {
                  var { key, parent, index, style } = e;
                  var o = i[index];
                  return s.jsx(
                    h.dl,
                    {
                      parent,
                      rowIndex: index,
                      cache: fRef.current,
                      children: s.jsx("div", {
                        style,
                        className: "asset-item-KatRqK",
                        children: o.map(renderItem),
                      }),
                    },
                    key,
                  );
                },
                onScroll,
              });
            },
          }),
      });
    }
    return s.jsx(p.d, {});
  }
  return s.jsx(_, {
    rowHeight,
    columns: 5,
  });
});
const T = [
  {
    assetType: "image",
    i18nKey: "asset_pop_level1_image",
    defaultText: "图片资产选取",
  },
  {
    assetType: "video",
    i18nKey: "asset_pop_level1_video",
    defaultText: "视频资产选取",
  },
];
const M = m.memo(function (e) {
  const { activeAssetType, onSelect } = e;
  return s.jsx("div", {
    className: "switch-emP0P5",
    children: T.map((e) =>
      s.jsx(
        y.A,
        {
          type: "text",
          className: S("option-G8q5sT", {
            "option-active-NTILXu": activeAssetType === e.assetType,
          }),
          onClick: () => onSelect(e.assetType),
          children: l.Ay.t(e.i18nKey, {}, e.defaultText),
        },
        e.assetType,
      ),
    ),
  });
});
const L = m.memo(function (e) {
  const { tips, disabledConfirm, onConfirm } = e;
  return s.jsxs("div", {
    className: "footer-SZrNfy",
    children: [
      s.jsx("span", {
        className: "tips-jpJTRl",
        children: tips,
      }),
      s.jsx(y.A, {
        type: "primary",
        className: "confirm-btn-Zyzw05",
        disabled: disabledConfirm,
        onClick: onConfirm,
        children: l.Ay.t("web_canva_confirm", {}, "确认"),
      }),
    ],
  });
});
const w = "checked-pGmG1o";
const N = m.memo(function (e) {
  const { type = "checkbox", checked = false, className, onClick } = e;
  const d = r.A(() => {
    if (onClick) {
      onClick(!checked);
    }
  });
  if (type === "checkbox") {
    return s.jsx("div", {
      className: S(className, "checkbox-PgaxDz", {
        [w]: checked,
      }),
      role: onClick ? "checkbox" : undefined,
      "aria-label": onClick
        ? [
            l.Ay.t("octo_director_stage_select", {}, "选择"),
            l.Ay.t("web_keyboard_text_Materials", {}, "素材"),
          ].join(" · ")
        : undefined,
      "aria-checked": onClick ? checked : undefined,
      tabIndex: onClick ? 0 : undefined,
      "aria-hidden": !onClick || undefined,
      onKeyDown: n.q,
      onClick: d,
      children: s.jsx(c.Tf3, {}),
    });
  }
  return s.jsx("div", {
    className: S(className, "ratio-sGjOfK", {
      [w]: checked,
    }),
    role: onClick ? "checkbox" : undefined,
    "aria-label": onClick
      ? [
          l.Ay.t("octo_director_stage_select", {}, "选择"),
          l.Ay.t("web_keyboard_text_Materials", {}, "素材"),
        ].join(" · ")
      : undefined,
    "aria-checked": onClick ? checked : undefined,
    tabIndex: onClick ? 0 : undefined,
    "aria-hidden": !onClick || undefined,
    onKeyDown: n.q,
    onClick: d,
  });
});
const R = m.memo(function (e) {
  const { data, disabledSelect, onClick, onSelected } = e;
  const c = r.A(() => {
    if (onClick != null) {
      onClick();
    }
    if (data.selected || !disabledSelect) {
      if (onSelected != null) {
        onSelected(data, !data.selected);
      }
    }
  });
  return s.jsxs("div", {
    className: S("container-zdhDnQ", {
      "selected-EdTk7y": data.selected,
    }),
    role: "checkbox",
    "aria-label": [
      l.Ay.t("octo_director_stage_select", {}, "选择"),
      l.Ay.t("frame_change_image_title", {}, "图片"),
    ].join(" · "),
    "aria-checked": data.selected,
    "aria-disabled": !data.selected && disabledSelect,
    tabIndex: !data.selected && disabledSelect ? -1 : 0,
    onKeyDown: n.q,
    onClick: c,
    children: [
      s.jsx(N, {
        className: "checkbox-YKT9iU",
        checked: data.selected,
      }),
      s.jsx(x.sg, {
        className: "img-x6PIwH",
        sizePickMode: "legacy",
        src: j.m(data.coverUrl, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTBKb1dqSldla3d5-khSWl-y%nN%RmRX-TJ*W$$-WlpNamwwWTBjNWRWcFhO$EJqZ$Rsb1l6Tk9iR1JET$hSa%1sSm9Za001-W1Je%1-Z*lNalZzWW01%2$rd3liSFJa$jJSc1R*ZEdlb%15$mpCT%1teDBX$mRr-k$4WFJuc*pNbFl3$Ec1%2$t$khSbmxhTTFaNg",
        }),
        crossOrigin: "anonymous",
        draggable: false,
      }),
      !data.selected && disabledSelect
        ? s.jsx("div", {
            className: "mask-KsRO3B",
          })
        : null,
    ],
  });
});
const I = m.memo(function (e) {
  const { data, disabledSelect, onClick, onSelected, delayPlay = 100 } = e;
  const { coverRef, videoRef, handleMouseEnter, handleMouseLeave } = ((e) => {
    const { hideClassName, delay, onStartPlay } = e;
    const iRef = m.useRef(null);
    const nRef = m.useRef(null);
    const oRef = m.useRef(false);
    const lRef = m.useRef(true);
    const cRef = m.useRef(null);
    const [d, setD] = m.useState(false);
    const hRef = m.useRef(null);
    const handleMouseEnter_1 = r.A(() => {
      if (hRef.current) {
        clearTimeout(hRef.current);
      }
      hRef.current = setTimeout(() => {
        setD(true);
      }, delay);
    });
    const handleMouseLeave_1 = r.A(() => {
      if (hRef.current) {
        clearTimeout(hRef.current);
      }
      setD(false);
    });
    const handleVideoEnded = r.A(() => {
      var e;
      oRef.current = true;
      if ((e = nRef.current) != null) {
        e.play();
      }
    });
    const f = r.A(() => {
      var e;
      var a;
      if ((e = nRef.current) != null) {
        e.play();
      }
      if ((a = iRef.current) != null) {
        a.classList.add(hideClassName);
      }
      if (onStartPlay != null) {
        onStartPlay();
      }
    });
    m.useEffect(() => {
      if (cRef.current) {
        clearTimeout(cRef.current);
      }
      if (!d) {
        var e;
        lRef.current = false;
        oRef.current = false;
        if ((e = iRef.current) != null) {
          e.classList.remove(hideClassName);
        }
        cRef.current = setTimeout(() => {
          if (nRef.current) {
            nRef.current.pause();
            var e = nRef.current.src;
            nRef.current.src = "";
            nRef.current.load();
            nRef.current.src = j.m(e, null, {
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
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTBKb1dqSldla3d5-khSWl-y%nN%RmRX-TJ*W$$-WlpNamwwWTBjNWRWcFhO$EJqZ$Rsb1l6Tk9iR1JET$hSa%1sSm9Za001-jJJe%9-Smpl$*t4WXpK$mRHRkhP$Eph$0$sMFkwZDRhR1Z%TlRCak1rWj$Xak5XZWc9PQ",
            });
            nRef.current.currentTime = 0;
          }
        }, delay);
        return;
      }
      if (nRef.current) {
        var { readyState } = nRef.current;
        lRef.current = true;
        switch (readyState) {
          case HTMLMediaElement.HAVE_NOTHING:
            nRef.current.load();
            nRef.current.oncanplay = () => {
              if (lRef.current && !oRef.current) {
                f();
              }
            };
            break;
          case HTMLMediaElement.HAVE_ENOUGH_DATA:
            f();
        }
      }
    }, [d, hideClassName, delay, f]);
    return {
      coverRef: iRef,
      videoRef: nRef,
      handleMouseEnter: handleMouseEnter_1,
      handleMouseLeave: handleMouseLeave_1,
      handleVideoEnded,
    };
  })({
    hideClassName: "hide-aXt3ld",
    delay: delayPlay,
  });
  const v = r.A(() => {
    if (onClick != null) {
      onClick();
    }
    if (data.selected || !disabledSelect) {
      if (onSelected != null) {
        onSelected(data, !data.selected);
      }
    }
  });
  return s.jsxs("div", {
    className: "container-k5jutj",
    role: "checkbox",
    "aria-label": [
      l.Ay.t("octo_director_stage_select", {}, "选择"),
      l.Ay.t("frame_change_video_title", {}, "视频"),
    ].join(" · "),
    "aria-checked": data.selected,
    "aria-disabled": !data.selected && disabledSelect,
    tabIndex: !data.selected && disabledSelect ? -1 : 0,
    onKeyDown: n.q,
    onClick: v,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: [
      s.jsx(N, {
        className: "checkbox-GEyRqL",
        checked: data.selected,
      }),
      s.jsx(k.k, {
        children: s.jsx("video", {
          ref: videoRef,
          className: "video-Rj_tSN",
          src: j.m(data.videoUrl, null, {
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
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTBKb1dqSldla3d5-khSWl-y%nN%RmRX-TJ*W$$-WlpNamwwWTBjNWRWcFhO$EJqZ$Rsb1l6Tk9iR1JET$hSa%1sSm9Za001-W1Je%1-Z*lNalZzWW01%2$rd3pXbkJh%jFaMlR*ZEdlb%15$mpCT%0xcHdXa2RXZ*t4WFJuc*pNbFl3$Ec1%2$t$khSbmxhTTFaNg",
          }),
          preload: "none",
          muted: true,
        }),
      }),
      s.jsx(x.sg, {
        ref: coverRef,
        className: "img-kppWdS",
        sizePickMode: "legacy",
        src: j.m(data.coverUrl, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTBKb1dqSldla3d5-khSWl-y%nN%RmRX-TJ*W$$-WlpNamwwWTBjNWRWcFhO$EJqZ$Rsb1l6Tk9iR1JET$hSa%1sSm9Za001-W1Je%1-Z*lNalZzWW01%2$rd3pXbkJh%jFaMlR*ZEdlb%15$mpCT%0xcHdXa2RXZ*t4WFJuc*pNbFl3$Ec1%2$t$khSbmxhTTFaNg",
        }),
        crossOrigin: "anonymous",
        draggable: false,
      }),
      data.selected
        ? s.jsx("div", {
            className: "border-Iddold",
          })
        : null,
      !data.selected && disabledSelect
        ? s.jsx("div", {
            className: "mask-WjcwK5",
          })
        : null,
      s.jsx("span", {
        className: "duration-UtZK70",
        children: F.N(data.duration),
      }),
    ],
  });
});
const E = o.PA(function (e) {
  const { assetModalManager, onClose } = e;
  const { supportBothTypes, activeAssetType } = assetModalManager;
  const onSelect = r.A((e) => {
    assetModalManager.setActiveAssetType(e);
  });
  if (supportBothTypes) {
    return s.jsxs("div", {
      className: A.header,
      children: [
        s.jsx(M, {
          activeAssetType,
          onSelect,
        }),
        s.jsx(c.gzW, {
          role: "button",
          tabIndex: 0,
          "aria-label": l.Ay.t("dreamina_web_common_close", {}, "关闭"),
          onKeyDown: n.q,
          className: A.closeIcon,
          onClick: onClose,
        }),
      ],
    });
  }
  return s.jsxs("div", {
    className: A.header,
    children: [
      s.jsx("span", {
        className: A.title,
        children: l.Ay.t("web_canva_asset_selection", {}, "资产选取"),
      }),
      s.jsx(c.gzW, {
        role: "button",
        tabIndex: 0,
        "aria-label": l.Ay.t("dreamina_web_common_close", {}, "关闭"),
        onKeyDown: n.q,
        className: A.closeIcon,
        onClick: onClose,
      }),
    ],
  });
});
var D = o.PA(function (e) {
  const { containerService, assetModalManager, onConfirm } = e;
  const {
    activeTab,
    activeAssetType,
    disabledSelect,
    assetsModalTips,
    disabledConfirm,
  } = assetModalManager;
  const onChange = r.A((e) => {
    assetModalManager.setActiveTab(e);
  });
  const v = r.A((e) =>
    s.jsx(
      R,
      {
        data: e,
        onSelected: (e, t) =>
          assetModalManager.currentImageAssetListManager.setSelected(e, t),
        disabledSelect,
      },
      e.id,
    ),
  );
  const p = r.A((e) =>
    s.jsx(
      I,
      {
        data: e,
        onSelected: (e, t) =>
          assetModalManager.currentVideoAssetListManager.setSelected(e, t),
        disabledSelect,
      },
      e.id,
    ),
  );
  const onConfirm_1 = r.A(() => {
    onConfirm(assetModalManager.getSelectionResult());
  });
  const _ = r.A(() => {
    assetModalManager.currentImageAssetListManager.loadMore();
  });
  const y = r.A(() => {
    assetModalManager.currentVideoAssetListManager.loadMore();
  });
  return s.jsxs(d.Z, {
    instantiationService: containerService,
    children: [
      s.jsx("div", {
        className: A.contentContainer,
        children:
          activeAssetType === "image"
            ? s.jsxs(s.Fragment, {
                children: [
                  s.jsxs(i.A, {
                    activeTab,
                    className: A.tabsContainer,
                    onChange,
                    children: [
                      s.jsx(
                        i.A.TabPane,
                        {
                          className: A.tabPane,
                          title: l.Ay.t(
                            "web_canva_all_pictures",
                            {},
                            "所有图片",
                          ),
                        },
                        "image-all",
                      ),
                      s.jsx(
                        i.A.TabPane,
                        {
                          className: A.tabPane,
                          title: l.Ay.t(
                            "web_canva_assets_select_upscaled",
                            {},
                            "超清",
                          ),
                        },
                        "image-hd",
                      ),
                      s.jsx(
                        i.A.TabPane,
                        {
                          className: A.tabPane,
                          title: l.Ay.t("web_canva_collect", {}, "收藏"),
                        },
                        "image-favorite",
                      ),
                    ],
                  }),
                  s.jsx("div", {
                    className: A.assetListContainer,
                    children: s.jsx(b, {
                      initialed:
                        assetModalManager.currentImageAssetListManager
                          .isInitialized,
                      loading:
                        assetModalManager.currentImageAssetListManager.loading,
                      hasMore:
                        assetModalManager.currentImageAssetListManager.hasMore,
                      loadingFailure:
                        assetModalManager.currentImageAssetListManager
                          .loadingFailure,
                      list: assetModalManager.currentImageAssetListManager.list,
                      renderItem: v,
                      rowHeight: 160,
                      onReachBottom: _,
                    }),
                  }),
                ],
              })
            : s.jsxs(s.Fragment, {
                children: [
                  s.jsxs(i.A, {
                    activeTab,
                    className: A.tabsContainer,
                    onChange,
                    children: [
                      s.jsx(
                        i.A.TabPane,
                        {
                          className: A.tabPane,
                          title: l.Ay.t("web_canva_all_video", {}, "所有视频"),
                        },
                        "video-all",
                      ),
                      s.jsx(
                        i.A.TabPane,
                        {
                          className: A.tabPane,
                          title: l.Ay.t("web_canva_collect", {}, "收藏"),
                        },
                        "video-favorite",
                      ),
                    ],
                  }),
                  s.jsx("div", {
                    className: A.assetListContainer,
                    children: s.jsx(b, {
                      initialed:
                        assetModalManager.currentVideoAssetListManager
                          .isInitialized,
                      loading:
                        assetModalManager.currentVideoAssetListManager.loading,
                      hasMore:
                        assetModalManager.currentVideoAssetListManager.hasMore,
                      loadingFailure:
                        assetModalManager.currentVideoAssetListManager
                          .loadingFailure,
                      list: assetModalManager.currentVideoAssetListManager.list,
                      renderItem: p,
                      rowHeight: 90,
                      onReachBottom: y,
                    }),
                  }),
                ],
              }),
      }),
      s.jsx(L, {
        tips: assetsModalTips,
        disabledConfirm,
        onConfirm: onConfirm_1,
      }),
    ],
  });
});
export { D as _ };
export function V(containerService, t, a) {
  let i;
  const onClose = () => {
    if (i != null) {
      i.close();
    }
    i = undefined;
  };
  const assetModalManager = new L_1(containerService, t);
  i = a_1.info({
    wrapClassName: A.modalWrap,
    className: A.modal,
    title: s.jsx(E, {
      assetModalManager,
      onClose,
    }),
    footer: null,
    simple: false,
    icon: null,
    closable: false,
    maskClosable: false,
    autoFocus: false,
    content: s.jsx(D, {
      assetModalManager,
      containerService,
      onConfirm: (e) => {
        onClose();
        a(e);
      },
    }),
  });
}
