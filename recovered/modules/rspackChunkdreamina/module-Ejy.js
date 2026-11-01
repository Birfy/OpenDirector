import n from "z8";
import "Vx";
import "yS";
import "qrE";
import "Su";
import a from "Ix";
import o from "gL";
import i from "RH";
import c from "MzS";
import s from "cO";
import l from "bT";
import u from "Qey";
import d from "yw";
import m from "OQ";
import * as p from "./module-q2t.js";
import * as h from "./module-WPk.js";
import { T as T_1 } from "./module-sw.js";
import { K4 } from "./module-xH_3.js";
import { A as A_1 } from "./module-oe0.js";
const placeholder = n.jsx("span", {
  className: A_1.coverPlaceholder,
});
const j = n.jsx(h.z, {
  className: A_1.missingCoverPlaceholder,
});
export var y = l.memo(function (e) {
  let t;
  const {
    appearance = "default",
    project,
    onOpen,
    onRequestRename,
    onCopy,
    onDelete,
    onSettingsShow,
    elementRef,
  } = e;
  const [popupVisible, setPopupVisible] = l.useState(false);
  const [C, setC] = l.useState(false);
  const R = T_1(project.name);
  const S = project.isTemplate ? "" : K4(project.updatedAt);
  const E = !project.isTemplate && !!(onRequestRename || onCopy || onDelete);
  const children = n.jsxs("div", {
    className: A_1.projectCard,
    "data-appearance": appearance,
    "data-has-edited-time": S ? "true" : undefined,
    "data-menu-open": C ? "true" : undefined,
    children: [
      n.jsx("button", {
        ref: elementRef,
        type: "button",
        className: A_1.projectOpenButton,
        "aria-label": R,
        onClick: () => {
          if (onOpen == null) {
            return undefined;
          }
          return onOpen(project.id);
        },
        children: n.jsxs("span", {
          className: A_1.projectClip,
          children: [
            ((t = project.cover) == null ? undefined : t.url)
              ? n.jsx(m.sg, {
                  layoutClassName: A_1.cover,
                  imageClassName: A_1.coverImage,
                  src: s.m(project.cover.url, null, {
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
                      "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTBKb1dqSldla3d5$*5s-$-wWXdXbE01-W1Je%1-Z*lNalZzWW01%2$rd3l%bWhp-mxwb1kza3hl$nB-$*14aWJsRjBZM*hLZ*1*dFZtc*tTRTEy$1RKR2RX%nRSbnBN$0$KN$lqSndiRmt6$$hSWk1rWj$Xa00xT%dNemFHa*pi$1F4WTNjO$BRPT0",
                  }),
                  alt: "",
                  placeholder,
                  errorPlaceHolder: j,
                  crossOrigin: "anonymous",
                  sizePickMode: "none",
                  enableUseSize: false,
                  draggable: false,
                })
              : n.jsx("span", {
                  className: A_1.cover,
                  children: j,
                }),
            project.isTemplate
              ? n.jsx(p.w, {
                  className: A_1.templateBadge,
                })
              : null,
            n.jsxs("span", {
              className: ""
                .concat(A_1.titleOverlay, " ")
                .concat(E ? A_1.titleOverlayWithActions : ""),
              children: [
                n.jsx("span", {
                  className: A_1.projectTitle,
                  onMouseEnter: (e) => {
                    setPopupVisible(
                      e.currentTarget.scrollWidth > e.currentTarget.clientWidth,
                    );
                  },
                  onMouseLeave: () => setPopupVisible(false),
                  children: R,
                }),
                S
                  ? n.jsx("span", {
                      className: A_1.projectEditedTime,
                      children: S,
                    })
                  : null,
              ],
            }),
          ],
        }),
      }),
      E
        ? n.jsx(c.A, {
            droplist: n.jsxs(i.A, {
              className: A_1.projectActionsMenu,
              onClick: (e) => e.stopPropagation(),
              children: [
                onRequestRename
                  ? n.jsxs(
                      i.A.Item,
                      {
                        className: A_1.projectActionsMenuItem,
                        onClick: () => {
                          setC(false);
                          onRequestRename(project.id);
                        },
                        children: [
                          n.jsx(d.GI1, {
                            className: A_1.projectActionIcon,
                            size: 16,
                          }),
                          n.jsx("span", {
                            children: u.Ay.t(
                              "web_new_character_title_rename_sound",
                              {},
                              "重命名",
                            ),
                          }),
                        ],
                      },
                      "rename",
                    )
                  : null,
                onCopy
                  ? n.jsxs(
                      i.A.Item,
                      {
                        className: A_1.projectActionsMenuItem,
                        onClick: () => {
                          setC(false);
                          onCopy(project.id);
                        },
                        children: [
                          n.jsx(d.bzS, {
                            className: A_1.projectActionIcon,
                            size: 16,
                          }),
                          n.jsx("span", {
                            children: u.Ay.t(
                              "web_mainframe_canvas_clone_project",
                              {},
                              "复制项目",
                            ),
                          }),
                        ],
                      },
                      "copy",
                    )
                  : null,
                onCopy && onDelete
                  ? n.jsx("div", {
                      className: A_1.projectActionsMenuDivider,
                      role: "separator",
                    })
                  : null,
                onDelete
                  ? n.jsxs(
                      i.A.Item,
                      {
                        className: A_1.projectActionsMenuItem,
                        onClick: () => {
                          setC(false);
                          o.A.confirm({
                            title: u.Ay.t(
                              "web_delete_popup_title",
                              {},
                              "确认删除",
                            ),
                            content: u.Ay.t(
                              "web_new_canvas_manage_cannot_retrieved",
                              {},
                              "你的项目将被永久删除且无法找回，是否确认删除？",
                            ),
                            icon: null,
                            okText: u.Ay.t(
                              "web_delete_popup_btn_delete",
                              {},
                              "删除",
                            ),
                            cancelText: u.Ay.t(
                              "web_delete_popup_btn_cancel",
                              {},
                              "取消",
                            ),
                            onOk: () => {
                              if (onDelete == null) {
                                return undefined;
                              }
                              return onDelete(project.id);
                            },
                          });
                        },
                        children: [
                          n.jsx(d.xV8, {
                            className: A_1.projectActionIcon,
                            size: 16,
                          }),
                          n.jsx("span", {
                            children: u.Ay.t(
                              "web_delete_popup_btn_delete",
                              {},
                              "删除",
                            ),
                          }),
                        ],
                      },
                      "delete",
                    )
                  : null,
              ],
            }),
            popupVisible: C,
            onVisibleChange: (e) => {
              setC(e);
              if (e) {
                if (onSettingsShow != null) {
                  onSettingsShow(project.id);
                }
              }
            },
            position: "br",
            trigger: "click",
            triggerProps: {
              containerScrollToClose: true,
            },
            children: n.jsx("button", {
              type: "button",
              className: A_1.projectMoreButton,
              "aria-label": u.Ay.t("web_my_feed_more_options", {}, "更多"),
              "aria-haspopup": "menu",
              "aria-expanded": C,
              onClick: (e) => e.stopPropagation(),
              children: n.jsx(d.xcf, {
                size: 14,
              }),
            }),
          })
        : null,
    ],
  });
  return n.jsx(a.A, {
    className: A_1.projectTitleTooltip,
    content: R,
    position: "bottom",
    trigger: [],
    popupVisible,
    triggerProps: {
      popupAlign: {
        bottom: 5,
      },
    },
    children,
  });
});
