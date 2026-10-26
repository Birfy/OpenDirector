import r from "NY";
import n from "z8";
import a from "bT";
import o from "ri";
import s from "vS";
import l from "ti";
import c from "Egb";
import d from "HX";
import u from "./module-Ah.js";
import m from "./module-mT.js";
import * as p from "./module-p6.js";
import { b as b_1 } from "./module-GqX.js";
import v from "Kpt";
import g from "cO";
import f from "Qey";
import * as b from "./module-DGa.js";
import * as y from "./module-mog.js";
import { j as j_1 } from "./module-kD5.js";
import { K } from "./module-eQG.js";
import { R } from "./module-nrw.js";
import { C as C_1 } from "./module-Mq.js";
import { F as F_1 } from "./module-Ug.js";
import { X as X_1 } from "./module-lC.js";
import { A as A_1 } from "./module-aC3.js";
import { A } from "./module-an_2.js";
import S from "dN";
import E from "FLA";
import W from "Fkv";
import { W as W_1 } from "./module-MLA.js";
import C from "rru";
import F from "WH1";
import { Wz } from "./module-iv.js";
import j from "Mm";
import $ from "puQ";
import O from "oa";
import { HM } from "./module-TA.js";
import { J as J_1 } from "./module-TG4.js";
import { H } from "./module-Kbj.js";
import { l as l_1 } from "./module-ZK.js";
import { m as m_1 } from "./module-utz.js";
import U from "YK";
import L from "p2w";
import { Gz, Uu, sJ, x_ } from "./module-wp.js";
import * as X from "./module-jhM.js";
import G from "us5";
import Q from "TX5";
import q from "HZF";
import Y from "ZGI";
import * as ei from "./module-Cc8.js";
import er from "ZkF";
import { BV, Iq as maxItemCount, av } from "./module-Qpb.js";
import ea from "MB";
import { J as J_2 } from "./module-VAK.js";
import { D } from "./module-pL.js";
import { R as R_1 } from "./module-sm_2.js";
import { W as W_2 } from "./module-Eby.js";
import { A as A_2 } from "./module-M53.js";
import ev from "ewE";
import eg from "RL6";
import { hK, lM } from "./module-mo6.js";
import eb from "swX";
import ey from "bk";
import e_ from "xb";
import ew from "sf1";
import eT from "fK";
import ek from "y7";
import { O6, Zs } from "./module-loT.js";
import { I } from "./module-tPG.js";
import { Ry, tj } from "./module-TJ.js";
const onViewMore = () => undefined;
const renderItem = (e, t) => {
  var i;
  var { data, layout } = e;
  if (data.type !== "image" && data.type !== "video") {
    return null;
  }
  var o = data.type === "image" ? J_1 : H;
  var s = data.type === "image" ? l_1 : m_1;
  var l =
    (i = HM({
      resolutionUrlMap: data.coverUrlMap,
      width: Math.round(layout.w),
      height: Math.round(layout.h),
      autoPickNext: true,
    })) != null
      ? i
      : data.coverUrl;
  return n.jsx(o, {
    children: n.jsx(s, {
      src: g.m(l, null, {
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
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTBKb1dqSldla3d5$*5s-$-wWXdXbE01-W1Je%1-Z*lNalZzWW01%2$rd3pTbXhaTWpsMFlsZFdk$nBI%mpCaFZ6bDF%RmRh-kZwWF$-WmhWel-2WTBkc2$WbFl$bkJpTWpSMFl6Sldhb$JI-khaaWF%RjZaRWRHT%d*WFR-$mtTRTQw$1ZoS2Jt%ll%$DA9",
      }),
      width: layout.w,
      height: layout.h,
      fetchPriority: t < 4 ? "high" : "auto",
    }),
  });
};
function J(e) {
  const { name, sectionId, showMore, showHeading = true, items } = e;
  return n.jsx(L.Q, {
    name,
    sectionId,
    showMore,
    showHeading,
    onViewMore,
    children: n.jsx(U.D, {
      items,
      renderItem,
      markSsrMediaCandidates: true,
    }),
  });
}
const ee = () => undefined;
function et(e) {
  let t;
  let i;
  let r;
  let a;
  const { snapshot } = e;
  const s = snapshot.catalog.categories.filter((e) => {
    var { scenes } = e;
    return scenes.some((e) => Uu(e).includes("inspiration"));
  });
  const l =
    (t = s.find((e) => {
      var { id } = e;
      return id === snapshot.activeCategoryId;
    })) != null
      ? t
      : s[0];
  const c = snapshot.catalog.categories.map((e) => {
    var { name, showSubcategories, scenes } = e;
    return {
      name,
      showSubcategories,
      scenes: scenes.filter((e) => Uu(e).includes("short-video")),
    };
  });
  const d = c.flatMap((e) => {
    var { scenes } = e;
    return scenes;
  });
  const { categories, showCategories } = sJ(c);
  const p =
    (i = d.find((e) => {
      var { id } = e;
      return id === snapshot.activeFilmSceneId;
    })) != null
      ? i
      : d[0];
  const h =
    (a = snapshot.scenePages) == null
      ? undefined
      : a.find(
          (e) =>
            e.sceneId === (p == null ? undefined : p.id) &&
            e.requestProfile === "dynamic-short-film",
        );
  return n.jsxs(n.Fragment, {
    children: [
      p
        ? n.jsx(G.n, {
            categories,
            showCategories,
            activeSceneId: p.id,
            mediaMode: "static",
            section: {
              id: p.id,
              name: p.name,
              description: p.description,
              backgroundLightUrl: p.backgroundLightUrl,
              backgroundDarkUrl: p.backgroundDarkUrl,
              showMore: x_(p),
              status: h ? (h.items.length ? "success" : "empty") : "loading",
              items: X.P(
                (r = h == null ? undefined : h.items) != null ? r : [],
              ),
            },
            onSelect: ee,
            onOpenDetail: ee,
            onViewMore: ee,
          })
        : null,
      l
        ? n.jsx(Y.B, {
            children: n.jsx(q.A, {
              categories: s,
              activeCategoryId: l.id,
              searchControl: null,
              onSelectCategory: ee,
              children: l.scenes
                .filter((e) => Uu(e).includes("inspiration"))
                .map((e) => {
                  var t;
                  var i =
                    (t = snapshot.scenePages) == null
                      ? undefined
                      : t.find(
                          (t) =>
                            t.sceneId === e.id &&
                            t.requestProfile === "dynamic",
                        );
                  if (!i) {
                    return n.jsx(
                      Q.m,
                      {
                        name: e.name,
                        showHeading: l.showSubcategories !== false,
                      },
                      e.id,
                    );
                  }
                  var r = X.Q(i.items);
                  if (r.length) {
                    return n.jsx(
                      J,
                      {
                        name: e.name,
                        sectionId: e.id,
                        showMore: x_(e),
                        showHeading: l.showSubcategories !== false,
                        items: r,
                      },
                      e.id,
                    );
                  }
                  return null;
                }),
            }),
          })
        : null,
    ],
  });
}
const eo = () => undefined;
const value = {
  marks: {
    [ei.C4]: "asset",
    [ei.Ai]: "success",
    [ei.E$]: "ssr",
  },
};
function el(e) {
  let t;
  let i;
  let r;
  let a;
  let o;
  const { snapshot } = e;
  if (snapshot.localizationVariant && snapshot.localizationVariant !== "v0") {
    return n.jsx(er.S, {
      value,
      children: n.jsx(et, {
        snapshot,
      }),
    });
  }
  const l =
    (i = snapshot.catalog.categories.find((e) => {
      var { id } = e;
      return id === snapshot.activeCategoryId;
    })) != null
      ? i
      : snapshot.catalog.categories[0];
  if (!l) {
    return null;
  }
  const c =
    (r = l.scenes.find((e) => {
      var t;
      var { id } = e;
      return id === ((t = snapshot.scenePage) == null ? undefined : t.sceneId);
    })) != null
      ? r
      : l.scenes[0];
  const d = (t =
    (a = snapshot.scenePage) == null ? undefined : a.requestProfile)
    ? [Gz(t)]
    : c
      ? Uu(c)
      : [];
  const u = (o = snapshot.scenePage) == null ? undefined : o.items;
  const m = u ? X.Q(u) : [];
  const p = u ? X.P(u) : [];
  const categories = snapshot.catalog.categories.map((e) => {
    var { id, name, iconUrl } = e;
    return O._(
      {
        id,
        name,
      },
      iconUrl
        ? {
            icon: iconUrl,
          }
        : {},
    );
  });
  let v = null;
  if (c && d.includes("inspiration")) {
    if (u === undefined) {
      v = n.jsx(Q.m, {
        name: c.name,
        showHeading: l.showSubcategories !== false,
      });
    } else if (m.length > 0) {
      v = n.jsx(J, {
        name: c.name,
        sectionId: c.id,
        showMore: x_(c),
        showHeading: l.showSubcategories !== false,
        items: m,
      });
    }
  }
  return n.jsx(Y.B, {
    children: n.jsx(er.S, {
      value,
      children: n.jsxs(q.A, {
        categories,
        activeCategoryId: l.id,
        searchControl: null,
        onSelectCategory: eo,
        children: [
          v,
          c && d.includes("short-video") && (u === undefined || p.length > 0)
            ? n.jsx(ea.B, {
                name: c.name,
                sectionId: c.id,
                showMore: x_(c),
                showHeading: l.showSubcategories !== false,
                status: u === undefined ? "loading" : "success",
                items: p,
                maxItemCount,
                mediaMode: "static",
                onOpenDetail: eo,
                onViewMore: eo,
              })
            : null,
        ],
      }),
    }),
  });
}
function useEh(e) {
  const { items, loading, layout = "rail" } = e;
  const titleId = "create-whats-new-".concat(a.useId());
  if (loading || items.length !== 0) {
    return n.jsx(R_1, {
      titleId,
      title: f.Ay.t("web_mainframe_section_whats_new", {}, "What’s new"),
      layout,
      children: loading
        ? n.jsx(W_2, {
            layout,
          })
        : n.jsx(D, {
            items,
            layout,
            renderCard: (item) =>
              n.jsx(J_2, {
                item,
                children: n.jsx("img", {
                  src: g.m(item.coverUrl, null, {
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
                      "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTBKb1dqSldla3d5$*5s-$-wWXdXbE01-W1Je%1-Z*lNalZzWW01%2$rd3paRzla$0ZKNlR*-zFiR1I1T$hw-$-wNHdZ$mM1ZF$3elpHO$pXRko2$EZjMWJH%j$NWHBh$jA0d1lW-z$k$XhZ$*pCWld*SndXW*sxT%dNemFHa*pi$1F4WTNjO$BRPT0",
                  }),
                  alt: "",
                  crossOrigin: "anonymous",
                  draggable: false,
                  loading: "lazy",
                  className: ""
                    .concat(A_2.imageContainer, " ")
                    .concat(A_2.image),
                }),
              }),
          }),
    });
  }
  return null;
}
function eR(e) {
  const { active, className, initialType = ew.h() } = e;
  const a = (e) =>
    n.jsx(eg.T, {
      animatedBackground: active,
      className,
      appearance: "mainFrame2026",
      taskIndicator: {
        visible: false,
      },
      workspaceStrategy: "isolated",
      initialContentGeneratorType: e,
      staticTypeTabs: n.jsx("template", {
        id: "ssr-home-input-mode-tabs",
        "data-initial-type": e,
        "data-generator-class-name": e_(
          ek.A.withActiveIcon,
          ek.A.browserTabs,
          ek.A.modeTabs,
        ),
        children: n.jsx(eT.R, {
          modeTabs: true,
          wide: true,
          options: eb.TN("v1").map((e) =>
            ey._(O._({}, lM[e]), {
              disabled: false,
            }),
          ),
          value: e,
          outlineStyle: {
            "--content-generator-mode-tab-header-mask": "none",
            "--content-generator-mode-tab-header-outline": "none",
            "--content-generator-mode-tab-outline-height": "0px",
          },
        }),
      }),
    });
  return n.jsxs(n.Fragment, {
    children: [
      a(initialType),
      eb.e
        .filter((e) => e !== initialType)
        .map((e) =>
          n.jsx(
            "template",
            {
              "data-home-generator-fallback": e,
              children: a(e),
            },
            e,
          ),
        ),
    ],
  });
}
const eE = () => undefined;
const taskIndicator = {
  visible: false,
};
function eM(e) {
  let t;
  let i;
  const {
    requestOrigin,
    mode,
    variant,
    initialGeneratorType,
    marketingResourceSsrSnapshot,
    recommendationFeedSsrSnapshot,
    homeCreationBannerSsrSnapshot,
  } = e;
  const u = variant !== "v0";
  const m = variant === "v1" ? j_1() : variant === "v2" ? K() : R();
  const active = mode === "chat";
  const recommendations = n.jsx(j.w, {
    items: [],
    loading: true,
  });
  const v =
    (t =
      marketingResourceSsrSnapshot == null
        ? undefined
        : marketingResourceSsrSnapshot.items) != null
      ? t
      : [];
  const O = F.YD(
    (i =
      homeCreationBannerSsrSnapshot == null
        ? undefined
        : homeCreationBannerSsrSnapshot.items) != null
      ? i
      : [],
    undefined,
    (e) =>
      F.QP(e, {
        canvasEnabled: Wz(),
        baseUrl: requestOrigin,
      }),
  );
  const Z = F.Tw(O);
  const P = !!(
    marketingResourceSsrSnapshot &&
    (marketingResourceSsrSnapshot.complete || v.length > 0)
  );
  return n.jsxs(n.Fragment, {
    children: [
      n.jsx(I, {
        id: b.BE,
        snapshot: variant,
        serialize: JSON.stringify,
      }),
      u
        ? n.jsx(y.d, {
            variant,
            background: n.jsx("div", {
              "data-create-hero-motion-background": true,
              "aria-hidden": true,
              className: A.motionBackground,
            }),
            generator: n.jsx(W.Q, {
              active: true,
              recommendations,
              recommendationsVisible: eb.WW(
                true,
                initialGeneratorType != null
                  ? initialGeneratorType
                  : m.defaultType,
              ),
              renderGenerator: (e) =>
                n.jsx(eg.T, {
                  className: e,
                  appearance: "mainFrame2026Oversea",
                  modeTabs: true,
                  modeTabsAppearance: "browser",
                  modeTabsCollapsible: false,
                  taskIndicator,
                  workspaceStrategy: "isolated",
                  contentGeneratorTypes: Array.from(m.types),
                  initialContentGeneratorType:
                    initialGeneratorType != null
                      ? initialGeneratorType
                      : m.defaultType,
                  typeOptions: hK({
                    appearance: "mainFrame2026Oversea",
                    isAgenticEnabled: true,
                    isAudioGeneratorDisabled: false,
                    isVideoGeneratorDisabled: false,
                  }).filter((e) => {
                    var { value } = e;
                    return m.types.includes(value);
                  }),
                }),
            }),
            homeTools: Z
              ? n.jsx(C.o, {
                  items: O,
                  layout: variant === "v3" ? "tiles" : "icons",
                  ariaLabel: f.Ay.t("DrmnUG_web_explore_tools", {}, "Tools"),
                })
              : null,
            whatsNew:
              variant === "v3"
                ? n.jsx(C_1, {
                    items: v,
                    loading: !P,
                    labels: {
                      title: f.Ay.t("web_new_publish_preview"),
                      preview: f.Ay.t("web_new_publish_preview"),
                      previous: f.Ay.t("web_new_last_one"),
                      next: f.Ay.t("web_new_next_one"),
                    },
                  })
                : n.jsx(F_1, {
                    titleId: "ssr-home-whats-new",
                    title: f.Ay.t("web_mainframe_section_whats_new"),
                    items: v,
                    loading: !P,
                    renderCard: (e) => {
                      var t;
                      var i;
                      return n.jsx(X_1, {
                        title: e.title,
                        label: e.title || f.Ay.t("web_new_publish_preview"),
                        media: n.jsx("img", {
                          className: A_1.image,
                          src: g.m(
                            ((i = e.coverUrlMap) == null ||
                            (t = i[1080]) == null
                              ? undefined
                              : t.trim()) || e.coverUrl,
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
                                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1Z$dJelZqQmFXRTEy$1ZkcmRH%khPWFpp%XpsdllqSXhiRXd6$m5CT$-wNTJZbTFh-0ZwN%9-ZFpWMlJz$ERKb2RtSlhWWFJaTWpsM$pFZFdk$1JETlRCak0ya*9ZMjFrT$dOM1B%MD0",
                            },
                          ),
                          alt: "",
                          crossOrigin: "anonymous",
                        }),
                      });
                    },
                  }),
            recommendationFeed: recommendationFeedSsrSnapshot
              ? n.jsx(el, {
                  snapshot: recommendationFeedSsrSnapshot,
                })
              : n.jsx($.V, {}),
          })
        : n.jsx(W_1, {
            mode,
            canvasEnabled: true,
            titleAccentAnimationEnabled: false,
            onModeChange: eE,
            csrReady: false,
            chatContent: n.jsx(W.Q, {
              active,
              recommendations,
              renderGenerator: (e) =>
                n.jsx(eR, {
                  active,
                  className: e,
                  initialType: initialGeneratorType,
                }),
            }),
            canvasContent: n.jsx(S.W, {
              active: mode === "canvas",
              recentProjects: n.jsx(E.A, {
                projects: [],
                hasMoreProjects: false,
                loading: true,
                onCreateProject: eE,
              }),
              recommendations,
              renderGenerator: (e) =>
                n.jsx(ev.t, {
                  className: e,
                  value: "",
                  focused: false,
                  onChange: eE,
                  onFocusChange: eE,
                }),
            }),
            homeTools: Z
              ? n.jsx(C.o, {
                  items: O,
                })
              : null,
            whatsNew: n.jsx(useEh, {
              items: v,
              loading: !P,
              layout: Z ? "hero" : "rail",
            }),
            recommendationFeed: recommendationFeedSsrSnapshot
              ? n.jsx(el, {
                  snapshot: recommendationFeedSsrSnapshot,
                })
              : n.jsx($.V, {}),
          }),
      homeCreationBannerSsrSnapshot
        ? n.jsx(I, {
            id: Ry,
            snapshot: homeCreationBannerSsrSnapshot,
            serialize: tj,
          })
        : null,
      P && marketingResourceSsrSnapshot
        ? n.jsx(I, {
            id: O6,
            snapshot: marketingResourceSsrSnapshot,
            serialize: Zs,
          })
        : null,
      recommendationFeedSsrSnapshot
        ? n.jsx(I, {
            id: BV,
            snapshot: recommendationFeedSsrSnapshot,
            serialize: av,
          })
        : null,
    ],
  });
}
function useEC() {
  const e = l.LG();
  const { isBrowser } = a.useContext(o.Iw);
  a.useEffect(() => {
    if (isBrowser) {
      performance.mark("SCRIPT_BEFORE_ENTRY_END");
      r._(function* () {
        const { Entry } = yield r._(function* () {
          performance.mark("HOME_CSR_DYNAMIC_IMPORT_START");
          const e = yield Promise.all([
            require.e("46qd"),
            require.e("1sx"),
            require.e("txw"),
            require.e("pa6"),
            require.e("32b"),
            require.e("4a0"),
            require.e("szx"),
            require.e("rle"),
            require.e("b7h"),
            require.e("5ws"),
            require.e("84i"),
            require.e("x4o"),
            require.e("pvu"),
            require.e("h0h"),
            require.e(894),
            require.e("z9t"),
            require.e("dmi"),
            require.e("tj5a"),
            require.e("lsa"),
            require.e("uoi"),
            require.e("e7a"),
            require.e("72p"),
            require.e("zf5"),
            require.e("1gm"),
            require.e("dks"),
            require.e("59ls"),
            require.e("oqo"),
            require.e("sz3"),
            require.e("swn"),
            require.e("cbb"),
            require.e("0j3"),
            require.e("egz"),
            require.e("91d"),
            require.e("d7n"),
            require.e("v2y"),
            require.e("ki4x"),
            require.e("y"),
            require.e("i2c"),
            require.e("u12"),
            require.e("v"),
            require.e("o94"),
            require.e("oqq"),
            require.e("v0q"),
            require.e("vj"),
            require.e(480),
            require.e("a4n"),
            require.e("x99"),
            require.e("kd2"),
            require.e("41i"),
            require.e("vic"),
          ]).then(require.bind(require, "M2D"));
          performance.mark("HOME_CSR_DYNAMIC_IMPORT_END");
          return e;
        })();
        performance.mark("HOME_ENTRY_START");
        new Entry();
      })();
    }
  }, [isBrowser]);
  if (isBrowser || !e.lang) {
    return null;
  }
  let mode;
  let variant;
  let initialGeneratorType;
  let marketingResourceSsrSnapshot;
  let recommendationFeedSsrSnapshot;
  let homeCreationBannerSsrSnapshot;
  let requestOrigin;
  const w = new m.Entry({
    locale: e.lang,
    route: c.ph[d.Du.Home],
    uiConfigs: [
      ((mode = e.createMode),
      (variant = e.localizationVariant),
      (initialGeneratorType = e.initialGeneratorType),
      (marketingResourceSsrSnapshot = e.marketingResourceSsrSnapshot),
      (recommendationFeedSsrSnapshot = e.recommendationFeedSsrSnapshot),
      (homeCreationBannerSsrSnapshot = e.homeCreationBannerSsrSnapshot),
      (requestOrigin = e.requestOrigin),
      {
        [v.N.PageRoute]: [
          {
            id: d.Du.Home,
            path: c.ph[d.Du.Home],
            isNeedCache: false,
            layoutConfiguration: {
              mainFrameMinContentWidth: d.tB,
            },
            content: () =>
              n.jsx(eM, {
                mode,
                variant,
                initialGeneratorType,
                marketingResourceSsrSnapshot,
                recommendationFeedSsrSnapshot,
                homeCreationBannerSsrSnapshot,
                requestOrigin,
              }),
          },
        ],
      }),
    ],
    classNames: [],
    ssrFrame: m.createMainFrame2026SsrFrame({
      shortDramaEnabled: e.shortDramaEnabled,
      collapsed: e.mainFrame2026SidebarCollapsed,
      localizationVariant: e.localizationVariant,
      currentRouteId: d.Du.Home,
      rootMode: "projection",
    }),
  });
  return n.jsxs(n.Fragment, {
    children: [
      n.jsx(s.m, {
        children: n.jsx("meta", {
          id: u.r,
          content: "1",
        }),
      }),
      w.flow.render(),
      n.jsx(p.t, {
        id: d.Du.Home,
        extraBundleNames: [
          "HomeCreate",
          "dreamina-main-frame-2026-sidebar",
          "content-generator-feature-loader",
          ...(e.createMode === "canvas"
            ? ["ai-canvas-content-generator-feature-loader"]
            : []),
        ],
        stylesheetBundleNames: ["dreamina-main-frame-2026-sidebar"],
      }),
    ],
  });
}
export { useEC as default };
b_1();
