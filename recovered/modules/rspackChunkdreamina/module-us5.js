import n from "z8";
import "xj";
import t from "R8";
import o from "cO";
import r from "bT";
import s from "Qey";
import { B } from "./module-MB.js";
const c =
  require.p + "static/image/films-default-background-dark.ada252a1f2.png";
const d =
  require.p + "static/image/films-default-background-light.03c5e14848.png";
var m = r.memo(function (e) {
  let i;
  let a;
  let m;
  const {
    mediaMode = "interactive",
    categories,
    activeSceneId,
    showCategories = true,
    section,
    onSelect,
    onOpenDetail,
    onExpose,
    onHoverEnd,
    onVideoPlayEnd,
    onViewRelatedCanvas,
    onViewMore,
  } = e;
  const id = r.useId();
  const RRef = r.useRef(null);
  const jRef = r.useRef(null);
  const T = s.Ay.t(
    "web_mainframe_section_canvas_showcase",
    {},
    "Featured on canvas",
  );
  const C = s.Ay.t("web_explore_films_card_btn_view_all", {}, "Browse all");
  const M =
    (i =
      (a = section == null ? undefined : section.name) != null
        ? a
        : (m = categories.find((e) => {
              var { id } = e;
              return id === activeSceneId;
            })) == null
          ? undefined
          : m.name) != null
      ? i
      : "";
  const A = section == null ? undefined : section.description;
  const [F, setF] = r.useState([]);
  const S = section == null ? undefined : section.backgroundLightUrl;
  const E = section == null ? undefined : section.backgroundDarkUrl;
  const Z = !!(S && !F.includes(S));
  const z = !!(E && !F.includes(E));
  return n.jsxs("section", {
    className: "films-SXA_j_",
    "aria-labelledby": id,
    children: [
      n.jsx("h2", {
        id,
        ref: RRef,
        tabIndex: -1,
        className: "heading-weKj13",
        children: T,
      }),
      n.jsxs("div", {
        className: "panel-l0zaUL",
        "data-light-background": Z,
        "data-dark-background": z,
        children: [
          Z
            ? n.jsx("img", {
                className: "light-background-tE21Z4",
                crossOrigin: "anonymous",
                src: o.m(S, null, {
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
                    "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTBKb1dqSldla3d5$*5s-$-wWXdXbE01-W1Je%1-Z*lNalZzWW01%2$rd3pTbXhaTWpsMFlsZFdk$nBI%mpCaFZ6bDF%RmRh-kZwWF$-WmFi$3h6WWxoTmRHTXlWbXBr%jJ4MlltazFNR016-%doamJX%XhZM2M5%FE9PQ",
                }),
                alt: "",
                "aria-hidden": "true",
                loading: "lazy",
                decoding: "async",
                onError: () => {
                  if (S) {
                    setF((e) => [...e, S]);
                  }
                },
              })
            : null,
          z
            ? n.jsx("img", {
                className: "dark-background-euQWtu",
                crossOrigin: "anonymous",
                src: o.m(E, null, {
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
                    "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTBKb1dqSldla3d5$*5s-$-wWXdXbE01-W1Je%1-Z*lNalZzWW01%2$rd3pTbXhaTWpsMFlsZFdk$nBI%mpCaFZ6bDF%RmRh-kZwWF$-WmFi$3h6WWxoTmRHTXlWbXBr%jJ4MlltazFNR016-%doamJX%XhZM2M5%FE9PQ",
                }),
                alt: "",
                "aria-hidden": "true",
                loading: "lazy",
                decoding: "async",
                onError: () => {
                  if (E) {
                    setF((e) => [...e, E]);
                  }
                },
              })
            : null,
          n.jsx("img", {
            className: "default-light-background-OoDsd2",
            src: o.m(d, null, {
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
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTBKb1dqSldla3d5$*5s-$-wWXdXbE01-W1Je%1-Z*lNalZzWW01%2$rd3pTbXhaTWpsMFlsZFdk$nBI%mpCaFZ6bDF%RmRh-kZwWF$-WmFi$3h6WWxoTmRHTXlWbXBr%jJ4MlltazFNR016-%doamJX%XhZM2M5%FE9PQ",
            }),
            alt: "",
            "aria-hidden": "true",
          }),
          n.jsx("img", {
            className: "default-dark-background-cPLtdz",
            src: o.m(c, null, {
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
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTBKb1dqSldla3d5$*5s-$-wWXdXbE01-W1Je%1-Z*lNalZzWW01%2$rd3pTbXhaTWpsMFlsZFdk$nBI%mpCaFZ6bDF%RmRh-kZwWF$-WmFi$3h6WWxoTmRHTXlWbXBr%jJ4MlltazFNR016-%doamJX%XhZM2M5%FE9PQ",
            }),
            alt: "",
            "aria-hidden": "true",
          }),
          n.jsx("aside", {
            className: "promotion-IGj9wA",
            children: n.jsxs("div", {
              className: "promotion-content-z3pYAh",
              children: [
                n.jsx("div", {
                  className: "emblem-FNSL6l",
                  "aria-hidden": "true",
                }),
                n.jsxs("div", {
                  className: "promotion-text-MMqJGC",
                  children: [
                    n.jsxs("div", {
                      className: "scene-copy-ZKVEu3",
                      children: [
                        n.jsx("h3", {
                          className: "scene-name-Jt_OQr",
                          children: M,
                        }),
                        A
                          ? n.jsx("p", {
                              className: "description-RvyJkh",
                              children: A,
                            })
                          : null,
                      ],
                    }),
                    (section == null ? undefined : section.showMore)
                      ? n.jsx(t.A, {
                          htmlType: "button",
                          type: "text",
                          className: "explore-D9eJq_",
                          "aria-label": "".concat(C, " ").concat(M),
                          onClick: () => onViewMore(section.id),
                          children: C,
                        })
                      : null,
                  ],
                }),
              ],
            }),
          }),
          n.jsxs("div", {
            className: "content-A9vlbc",
            children: [
              showCategories
                ? n.jsx("div", {
                    className: "categories-zxOtXi",
                    role: "group",
                    "aria-label": T,
                    children: categories.map((e) => {
                      var { id, name } = e;
                      return n.jsx(
                        t.A,
                        {
                          ref: id === activeSceneId ? jRef : undefined,
                          htmlType: "button",
                          type: "text",
                          shape: "round",
                          className: "category-xwRNn1",
                          "aria-pressed": id === activeSceneId,
                          onClick: () => onSelect(id),
                          children: name,
                        },
                        id,
                      );
                    }),
                  })
                : null,
              (section == null ? undefined : section.status) === "error" ||
              (section == null ? undefined : section.status) === "empty"
                ? n.jsxs("div", {
                    className: "empty-Va3RM8",
                    children: [
                      section.status === "empty"
                        ? n.jsx("span", {
                            role: "status",
                            children: s.Ay.t("web_toast_no_results_found"),
                          })
                        : null,
                      n.jsx(t.A, {
                        htmlType: "button",
                        onClick: () => {
                          var e;
                          var i;
                          onSelect(section.id);
                          if (
                            (i =
                              (e = jRef.current) != null ? e : RRef.current) !=
                            null
                          ) {
                            i.focus();
                          }
                        },
                        children: s.Ay.t(
                          "web_common_btn_refresh",
                          {},
                          "Refresh",
                        ),
                      }),
                    ],
                  })
                : section
                  ? n.jsx(
                      B,
                      {
                        name: section.name,
                        sectionId: section.id,
                        showMore: false,
                        layout: "films",
                        mediaMode,
                        status:
                          section.status === "idle" ||
                          section.status === "loading"
                            ? "loading"
                            : "success",
                        items: section.items,
                        onOpenDetail: (e, i) => onOpenDetail(section.id, e, i),
                        onExpose: (e, i, a, n) => {
                          if (onExpose == null) {
                            return undefined;
                          }
                          return onExpose(section.id, e, i, a, n);
                        },
                        onHoverEnd: (e, i, a) => {
                          if (onHoverEnd == null) {
                            return undefined;
                          }
                          return onHoverEnd(section.id, e, i, a);
                        },
                        onVideoPlayEnd: (e, i, a) => {
                          if (onVideoPlayEnd == null) {
                            return undefined;
                          }
                          return onVideoPlayEnd(section.id, e, i, a);
                        },
                        onViewRelatedCanvas,
                        onViewMore,
                      },
                      section.id,
                    )
                  : null,
            ],
          }),
        ],
      }),
    ],
  });
});
export { m as n };
