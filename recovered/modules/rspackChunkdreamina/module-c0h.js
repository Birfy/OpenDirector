import n from "z8";
import r from "wF";
import l from "GSun";
import o from "oq";
import i from "NY";
import s from "bT";
import c from "aoz";
import d from "xm3";
import u from "f3";
import m from "jkF";
import p from "lj";
import v from "Kt";
import h from "HX";
import g from "k2";
import x from "gSs";
import { h as h_1 } from "./module-hiS.js";
import "GLC";
import _ from "mb";
import f from "Qey";
import _j from "xb";
import y from "RMk";
import $ from "oa";
import "Vx";
import z from "Ix";
import U from "cO";
import O from "yw";
import L from "kV9";
import Z from "A0";
import B from "op";
import H from "pa";
import Q from "ED";
import Y from "TK";
import ee from "VA";
import ea from "lNt";
import et from "zHy";
import en from "Hr";
import er from "Peq";
import el from "qN4";
import eo from "uMU";
import ei from "Nv";
import "wy";
import eu from "h7y";
import eh from "SU";
const C = "field-group-U2OJ4c";
const N = "field-label-cjTgJF";
const M = "required-aOjL9Z";
const S = "media-delete-button-FItnUJ";
const A = "media-status-text-S0pkdc";
const R = "text-action-Bh6CBU";
const P = "media-error-line-EtwX2w";
const w = "media-item-Yng030";
const T = "media-preview-CMIEVE";
const V = "media-preview-button-y1W7nP";
const F = "media-delete-button-inner-tt2yns";
const I = "info-icon-VTSbGx";
const E = f.Ay.t("skill_publish_dialog_form_category", {}, "Categories");
const W = f.Ay.t(
  "skill_publish_placeholder_category_load_failed",
  {},
  "No categories available",
);
const D = s.memo(function (e) {
  let a;
  const { categories, categoryIds, loading, onCategoryIdsChange } = e;
  a = categories.length
    ? n.jsx("div", {
        className: "category-chips-Km3Cj0",
        children: categories.map((e) =>
          n.jsx(
            "button",
            {
              type: "button",
              className: _j("category-chip-byBvhH", {
                "category-chip-active-E1EAlZ": categoryIds.includes(e.id),
              }),
              "aria-pressed": categoryIds.includes(e.id),
              onClick: () => {
                var a;
                a = e.id;
                onCategoryIdsChange(
                  categoryIds.includes(a)
                    ? categoryIds.filter((e) => e !== a)
                    : [...categoryIds, a],
                );
              },
              children: e.title,
            },
            e.id,
          ),
        ),
      })
    : loading
      ? n.jsx("div", {
          className: "category-loading-placeholder-rqMPaj",
        })
      : n.jsx("div", {
          className: "empty-category-jLEVuy",
          children: W,
        });
  return n.jsxs("div", {
    className: C,
    children: [
      n.jsxs("label", {
        className: N,
        children: [
          E,
          n.jsx("span", {
            className: M,
            children: "*",
          }),
        ],
      }),
      n.jsx(y.I, {
        loading,
        children: a,
      }),
    ],
  });
});
const K = L.R;
const G = $._({}, K, Z.P);
function X(e) {
  let a;
  if ((a = e.closest(".lv-modal")) != null) {
    return a;
  }
  return document.body;
}
function J(uploadProgress) {
  const a = f.Ay.t("web_new_duanpian_uploading", {}, "Uploading...");
  if (uploadProgress === undefined) {
    return a;
  }
  return "".concat(a, " ").concat(Math.round(uploadProgress), "%");
}
const q = s.memo(function (e) {
  let a;
  let t;
  let r;
  const {
    mediaItems,
    onUploadClick,
    onUploadFiles,
    onPreview,
    onRemove,
    onRetryMedia,
    onSetVideoCover,
    onRetryVideoCover,
    onRestoreDefaultVideoCover,
  } = e;
  const h = mediaItems.some((e) => e.type === "image");
  const g = mediaItems.find((e) => e.type === "video");
  const accept = h ? K : G;
  const b = s.useMemo(
    () =>
      n.jsx(O.xZp, {
        size: 24,
      }),
    [],
  );
  const _ = s.useMemo(
    () =>
      n.jsx(O.nre, {
        size: 16,
      }),
    [],
  );
  const j = f.Ay.t("skill_publish_dialog_form_demo_media", {}, "Examples");
  const E = f.Ay.t("skill_publish_button_delete", {}, "Delete");
  const W = f.Ay.t("web_new_duanpian_local_upload", {}, "本地上传");
  const onKeyDown = s.useCallback((e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.currentTarget.click();
    }
  }, []);
  const $ = function (e) {
    let a;
    let t;
    const r =
      arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    const l =
      r && (a = (t = e.customCover) == null ? undefined : t.previewUrl) != null
        ? a
        : e.defaultCoverPreviewUrl;
    if (l) {
      return n.jsx("img", {
        className: T,
        src: U.m(l, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWJWcFhSakJr$0$wc1kzaz$hRm95$m5Wa1IyeHF%RmRr-kdKdFZubFpXRkoyWTJrNWFtSXlNW*RpTWpWc1ltN$Nla3d5%m01-$Z6$XdZ$mROZEZve$Zu$mFXRXBvWk$jNW$$eFl%bkpo$jNoelR*aENN$mx0Z%hCak1tZDBZb*M1-TFsW*QzWlpWMlJzWW01%2N*bD$N$z$h$npWc1kyM%dNR0l6%1hSak1u%ndZa2QzZEdOS$Ztb*lSMng2W$$Ne*R*cFh$bkJa$Xp*dFlWZFdjMXBETlRCak0ya*9ZMjFrT$dOM1B%MD0",
        }),
        alt: "",
        draggable: false,
      });
    }
    return n.jsx("video", {
      className: T,
      src: U.m(e.previewUrl, null, {
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
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWJWcFhSakJr$0$wc1kzaz$hRm95$m5Wa1IyeHF%RmRr-kdKdFZubFpXRkoyWTJrNWFtSXlNW*RpTWpWc1ltN$Nla3d5%m01-$Z6$XdZ$mROZEZve$Zu$mFXRXBvWk$jNW$$eFl%bkpo$jNoelR*aENN$mx0Z%hCak1tZDBZb*M1-TFsW*QzWlpWMlJzWW01%2N*bD$N$z$h$npWc1kyM%dNR0l6%1hSak1u%ndZa2QzZEdOS$Ztb*lSMng2W$$Ne*R*cFh$bkJa$Xp*dFlWZFdjMXBETlRCak0ya*9ZMjFrT$dOM1B%MD0",
      }),
      muted: true,
      playsInline: true,
    });
  };
  return n.jsxs("div", {
    className: _j(C, "media-field-group-LQQ4To"),
    children: [
      n.jsx("div", {
        className: "field-header-FCVjBo",
        children: n.jsxs("label", {
          className: N,
          children: [
            j,
            n.jsx(z.A, {
              content: f.Ay.t(
                "skill_publish_dialog_hover_info",
                {},
                "Upload 1 video or up to 10 images to showcase your skill",
              ),
              getPopupContainer: X,
              style: {
                left: `${12}px`,
                maxWidth: `calc(100% - ${24}px)`,
              },
              children: n.jsx("span", {
                className: I,
                children: n.jsx(O.G_L, {
                  size: 14,
                }),
              }),
            }),
            n.jsx("span", {
              className: M,
              children: "*",
            }),
          ],
        }),
      }),
      g
        ? n.jsxs("div", {
            className: "video-media-card-SnnTVG",
            children: [
              n.jsxs("div", {
                className: "video-summary-row-fZDGj2",
                children: [
                  n.jsxs("div", {
                    className: _j(w, "video-summary-thumbnail-HP9llr"),
                    children: [
                      n.jsx("button", {
                        type: "button",
                        className: V,
                        onClick: () => onPreview(g),
                        "aria-label": "".concat(j, ": ").concat(g.fileName),
                        children: $(g),
                      }),
                      n.jsx("button", {
                        type: "button",
                        className: S,
                        onClick: (e) => onRemove(e, g.id),
                        "aria-label": E,
                        children: n.jsx("span", {
                          className: F,
                          children: n.jsx(O.gzW, {
                            size: 8,
                          }),
                        }),
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "video-summary-info-goj2pv",
                    children: [
                      n.jsx("div", {
                        className: "media-file-name-bB0CRp",
                        title: g.fileName,
                        children: g.fileName,
                      }),
                      g.uploadStatus === "uploading"
                        ? n.jsx("div", {
                            className: _j(A, "media-uploading-text-EEpG3v"),
                            children: J(g.uploadProgress),
                          })
                        : g.uploadStatus === "error"
                          ? n.jsxs("div", {
                              className: P,
                              children: [
                                n.jsx("span", {
                                  children: g.errorMessage,
                                }),
                                n.jsx("button", {
                                  type: "button",
                                  className: R,
                                  onClick: () => onRetryMedia(g.id),
                                  children: f.Ay.t(
                                    "subject_panel_retry",
                                    {},
                                    "Retry",
                                  ),
                                }),
                              ],
                            })
                          : n.jsx("div", {
                              className: A,
                              children: ((e) => {
                                if (e === undefined || !Number.isFinite(e)) {
                                  return "--:--";
                                }
                                const a = Math.max(0, Math.round(e));
                                const t = Math.floor(a / 60);
                                return ""
                                  .concat(String(t).padStart(2, "0"), ":")
                                  .concat(String(a % 60).padStart(2, "0"));
                              })(g.duration),
                            }),
                    ],
                  }),
                ],
              }),
              g.uploadStatus === "uploaded"
                ? n.jsxs("div", {
                    className: "video-cover-field-XPhjNx",
                    children: [
                      n.jsx("div", {
                        className: "cover-title-mmySTW",
                        children: f.Ay.t(
                          "skill_publish_dialog_form_cover",
                          {},
                          "Set cover",
                        ),
                      }),
                      n.jsxs("div", {
                        className: "cover-control-nPlQpU",
                        children: [
                          n.jsxs("div", {
                            className: "cover-preview-u4EcI_",
                            children: [
                              $(g, true),
                              ((a = g.customCover) == null
                                ? undefined
                                : a.uploadStatus) === "uploading"
                                ? n.jsx("div", {
                                    className: "cover-loading-hhAdz6",
                                    children: n.jsx(y.I, {
                                      size: 16,
                                    }),
                                  })
                                : null,
                            ],
                          }),
                          n.jsx("div", {
                            className: _j("cover-status-o3nQ_u", {
                              "cover-status-error-AFAt8W":
                                ((t = g.customCover) == null
                                  ? undefined
                                  : t.uploadStatus) === "error" ||
                                (!g.customCover && !g.defaultCoverUri),
                            }),
                            children: ((e) => {
                              const { customCover } = e;
                              if (customCover) {
                                if (customCover.uploadStatus === "uploading") {
                                  return J(customCover.uploadProgress);
                                }
                                if (customCover.uploadStatus === "error") {
                                  return customCover.errorMessage;
                                }
                                return customCover.fileName;
                              }
                              if (
                                e.uploadStatus !== "uploaded" ||
                                e.defaultCoverUri
                              ) {
                                return f.Ay.t(
                                  "skill_publish_dialog_form_cover_tips",
                                  {},
                                  "Default video cover",
                                );
                              }
                              return f.Ay.t(
                                "web_new_duanpian_upload_failed_try_again",
                                {},
                                "Couldn't create the default cover. Upload a custom cover.",
                              );
                            })(g),
                          }),
                          n.jsxs("div", {
                            className: "cover-actions-FuOekV",
                            children: [
                              ((r = g.customCover) == null
                                ? undefined
                                : r.uploadStatus) === "error"
                                ? n.jsx("button", {
                                    type: "button",
                                    className: R,
                                    onClick: () => onRetryVideoCover(g.id),
                                    children: f.Ay.t(
                                      "subject_panel_retry",
                                      {},
                                      "Retry",
                                    ),
                                  })
                                : null,
                              g.customCover
                                ? n.jsx(z.A, {
                                    content: f.Ay.t(
                                      "web_new_duanpian_restore_default",
                                      {},
                                      "Use default",
                                    ),
                                    getPopupContainer: X,
                                    children: n.jsx("button", {
                                      type: "button",
                                      className: "icon-action-OfZvDj",
                                      onClick: () =>
                                        onRestoreDefaultVideoCover(g.id),
                                      "aria-label": f.Ay.t(
                                        "web_new_duanpian_restore_default",
                                        {},
                                        "Use default",
                                      ),
                                      children: n.jsx(O.Pwl, {
                                        size: 16,
                                      }),
                                    }),
                                  })
                                : null,
                              n.jsx(z.A, {
                                content: W,
                                getPopupContainer: X,
                                children: n.jsx("div", {
                                  children: n.jsx(H.x, {
                                    id: "skill-publish-cover-upload-".concat(
                                      g.id,
                                    ),
                                    accept: K,
                                    icon: _,
                                    className: "cover-upload-button-u5eDWo",
                                    role: "button",
                                    tabIndex: 0,
                                    "aria-label": W,
                                    onChange: (e) =>
                                      e && onSetVideoCover(g.id, e),
                                    onKeyDown,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
                : null,
            ],
          })
        : n.jsxs(n.Fragment, {
            children: [
              n.jsxs("div", {
                className: "media-grid-x4mJsX",
                children: [
                  mediaItems.map((e) =>
                    n.jsxs(
                      "div",
                      {
                        className: _j(w, {
                          "media-item-error-mbPWIs": e.uploadStatus === "error",
                        }),
                        children: [
                          n.jsx("button", {
                            type: "button",
                            className: V,
                            onClick: () => onPreview(e),
                            "aria-label": "".concat(j, ": ").concat(e.fileName),
                            children: n.jsx("img", {
                              className: T,
                              src: U.m(e.previewUrl, null, {
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
                                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWJWcFhSakJr$0$wc1kzaz$hRm95$m5Wa1IyeHF%RmRr-kdKdFZubFpXRkoyWTJrNWFtSXlNW*RpTWpWc1ltN$Nla3d5%m01-$Z6$XdZ$mROZEZve$Zu$mFXRXBvWk$jNW$$eFl%bkpo$jNoelR*aENN$mx0Z%hCak1tZDBZb*M1-TFsW*QzWlpWMlJzWW01%2N*bD$N$z$h$npWc1kyM%dNR0l6%1hSak1u%ndZa2QzZEdOS$Ztb*lSMng2W$$Ne*R*cFh$bkJa$Xp*dFlWZFdjMXBETlRCak0ya*9ZMjFrT$dOM1B%MD0",
                              }),
                              alt: "",
                              draggable: false,
                            }),
                          }),
                          n.jsx("button", {
                            type: "button",
                            className: S,
                            onClick: (a) => onRemove(a, e.id),
                            "aria-label": E,
                            children: n.jsx("span", {
                              className: F,
                              children: n.jsx(O.gzW, {
                                size: 8,
                              }),
                            }),
                          }),
                          e.uploadStatus === "uploading"
                            ? n.jsxs("div", {
                                className: "media-overlay-pnkp4u",
                                children: [
                                  n.jsx(y.I, {
                                    size: 16,
                                  }),
                                  e.uploadProgress === undefined
                                    ? null
                                    : n.jsxs("span", {
                                        children: [
                                          Math.round(e.uploadProgress),
                                          "%",
                                        ],
                                      }),
                                ],
                              })
                            : null,
                        ],
                      },
                      e.id,
                    ),
                  ),
                  mediaItems.length < B.Ah
                    ? n.jsx(H.x, {
                        id: "skill-publish-media-upload",
                        accept,
                        multiple: true,
                        icon: b,
                        className: "upload-tile-GHBwlt",
                        role: "button",
                        tabIndex: 0,
                        "aria-label": f.Ay.t(
                          "web_publish_skill_upload_demo_aria_label",
                          {},
                          "Upload demo",
                        ),
                        onClick: onUploadClick,
                        onChange: onUploadFiles,
                        onKeyDown,
                      })
                    : null,
                ],
              }),
              mediaItems
                .filter((e) => e.uploadStatus === "error")
                .map((e) =>
                  n.jsxs(
                    "div",
                    {
                      className: P,
                      children: [
                        n.jsx("span", {
                          children: ""
                            .concat(e.fileName, ": ")
                            .concat(e.errorMessage),
                        }),
                        n.jsx("button", {
                          type: "button",
                          className: R,
                          onClick: () => onRetryMedia(e.id),
                          children: f.Ay.t("subject_panel_retry", {}, "Retry"),
                        }),
                      ],
                    },
                    "".concat(e.id, "-error"),
                  ),
                ),
            ],
          }),
    ],
  });
});
const EsContext = s.createContext(null);
const EcContext = s.createContext(null);
const ed = Q.PA(function (e) {
  const { skill, onClose, children } = e;
  const o = r.h(v._);
  const u = r.h(p.K);
  const m = r.h(d.V);
  const g = r.h(c.j);
  const x = g.data.reuploadingSkillIds.includes(skill.id);
  const b = r.h(Y.a);
  const { skillEditorManager, skillPublishManager } = m.agenticGeneratorManager;
  const { data } = skillPublishManager;
  const onClose_1 = s.useCallback(() => {
    u.navigate(h.Du.Personal, {
      query: eo.Oi({
        subTabContentType: "skill",
      }),
      state: {
        hasBack: true,
      },
    });
  }, [u]);
  s.useEffect(() => {
    skillPublishManager.initialize(
      skill,
      el.M(),
      b.abTestManager.getBooleanAbTestValue(ee.ob.SkillDisplayUsageV2, false),
    );
    return skillPublishManager.reset;
  }, [b, skill, skillPublishManager]);
  const handlePreviewMedia = s.useCallback(
    (e) => {
      if (e.type === "video") {
        return void er.K({
          containerService: o,
          videoInfo: {
            url: e.previewUrl,
          },
        });
      }
      var a = data.mediaItems.filter((e) => e.type === "image");
      var defaultValue = a.findIndex((a) => a.id === e.id);
      if (!(defaultValue < 0)) {
        et.K({
          containerService: o,
          imageInfos: a.map((e) => ({
            url: e.previewUrl,
          })),
          defaultValue,
        });
      }
    },
    [o, data.mediaItems],
  );
  const handleRemoveMedia = s.useCallback(
    (e, a) => {
      e.stopPropagation();
      skillPublishManager.removeMedia(a);
    },
    [skillPublishManager],
  );
  const handleSubmit = s.useCallback(
    () =>
      i._(function* () {
        if (
          !g.data.reuploadingSkillIds.includes(skill.id) &&
          (yield skillPublishManager.submit()) === "success"
        ) {
          onClose();
          ei.O();
          var e = en.l.success({
            content: n.jsxs("span", {
              children: [
                n.jsx("span", {
                  children: f.Ay.t(
                    "skill_publish_toast_submitted",
                    {},
                    "已提交审核",
                  ),
                }),
                n.jsx("button", {
                  type: "button",
                  className: "success-toast-link-vu3YKj",
                  onClick: () => {
                    e();
                    skillEditorManager.leaveFormView({
                      kind: "close-modal",
                      onClose: onClose_1,
                    });
                  },
                  children: f.Ay.t("skill_publish_link_go_view", {}, "去查看"),
                }),
              ],
            }),
          });
        }
      })(),
    [onClose_1, onClose, skill.id, skillEditorManager, g, skillPublishManager],
  );
  const S = s.useMemo(
    () => ({
      skill,
      onClose,
      categories: data.categories,
      isCategoriesLoading: data.isCategoriesLoading,
      categoryIds: data.categoryIds,
      mediaItems: data.mediaItems,
      isContentPublic: data.isContentPublic,
      introduction: data.introduction,
      isIntroductionEnabled: data.isIntroductionEnabled,
      introductionMaxLength: ea.FN,
      setIntroduction: skillPublishManager.setIntroduction,
      setCategoryIds: skillPublishManager.setCategoryIds,
      handleUploadClick: skillPublishManager.reportUploadClick,
      handleUploadFiles: skillPublishManager.addMediaFiles,
      handlePreviewMedia,
      handleRemoveMedia,
      retryMediaUpload: skillPublishManager.retryMediaUpload,
      setVideoCoverFile: skillPublishManager.setVideoCoverFile,
      retryVideoCoverUpload: skillPublishManager.retryVideoCoverUpload,
      restoreDefaultVideoCover: skillPublishManager.restoreDefaultVideoCover,
      setIsContentPublic: skillPublishManager.setIsContentPublic,
    }),
    [
      data.categories,
      data.categoryIds,
      data.isCategoriesLoading,
      data.isContentPublic,
      data.introduction,
      data.isIntroductionEnabled,
      data.mediaItems,
      handlePreviewMedia,
      handleRemoveMedia,
      onClose,
      skill,
      skillPublishManager,
    ],
  );
  const A = s.useMemo(
    () => ({
      isSubmitting: data.isSubmitting,
      isSubmitDisabled: data.isSubmitDisabled || x,
      handleSubmit,
    }),
    [data.isSubmitDisabled, data.isSubmitting, handleSubmit, x],
  );
  return n.jsx(EsContext.Provider, {
    value: S,
    children: n.jsx(EcContext.Provider, {
      value: A,
      children,
    }),
  });
});
function em(e) {
  let a;
  if ((a = e.closest(".lv-modal")) != null) {
    return a;
  }
  return document.body;
}
const ep = s.memo(function (e) {
  const { checked, onChange } = e;
  const r = s.useId();
  const l = s.useId();
  const o = f.Ay.t("skill_publish_dialog_form_public_content");
  const i = f.Ay.t(
    "skill_publish_tooltip_nonpublic_content_disclosure_warning",
  );
  const c = f.Ay.t("skill_publish_tooltip_private_content_reference_visible");
  return n.jsxs("div", {
    children: [
      n.jsxs("div", {
        className: "public-content-row-podshT",
        children: [
          n.jsxs("div", {
            className: "public-content-text-uI2YXE",
            children: [
              n.jsx("span", {
                id: r,
                children: o,
              }),
              n.jsx(z.A, {
                content: i,
                trigger: ["hover", "focus"],
                getPopupContainer: em,
                style: {
                  left: `${12}px`,
                  maxWidth: `calc(100% - ${24}px)`,
                },
                children: n.jsx("button", {
                  type: "button",
                  className: I,
                  "aria-label": i,
                  children: n.jsx(O.G_L, {
                    size: 14,
                    "aria-hidden": "true",
                  }),
                }),
              }),
            ],
          }),
          n.jsx(eu.A, {
            size: "small",
            checked,
            onChange,
            "aria-labelledby": r,
            "aria-describedby": l,
          }),
        ],
      }),
      n.jsx("p", {
        id: l,
        className: "public-content-description-IoeuII",
        children: c,
      }),
    ],
  });
});
const ev = s.memo(function () {
  const {
    skill,
    categories,
    categoryIds,
    isCategoriesLoading,
    mediaItems,
    isContentPublic,
    introduction,
    introductionMaxLength,
    isIntroductionEnabled,
    setIntroduction,
    setCategoryIds,
    handleUploadClick,
    handleUploadFiles,
    handlePreviewMedia,
    handleRemoveMedia,
    retryMediaUpload,
    setVideoCoverFile,
    retryVideoCoverUpload,
    restoreDefaultVideoCover,
    setIsContentPublic,
  } = (() => {
    const e = s.useContext(EsContext);
    if (!e) {
      throw Error("AgenticGeneratorSkillPublishModalContext is missing.");
    }
    return e;
  })();
  return n.jsxs("div", {
    className: "body-XZTjiU",
    children: [
      n.jsxs("div", {
        className: C,
        children: [
          n.jsxs("label", {
            className: N,
            children: [
              f.Ay.t("skill_publish_dialog_form_skill_name", {}, "Skill name"),
              n.jsx("span", {
                className: M,
                children: "*",
              }),
            ],
          }),
          n.jsx("div", {
            className: "summary-value-b3w3dP",
            children: skill.name || "-",
          }),
        ],
      }),
      n.jsxs("div", {
        className: C,
        children: [
          n.jsxs("label", {
            className: N,
            children: [
              f.Ay.t("skill_publish_dialog_form_skill_desc", {}, "Description"),
              n.jsx("span", {
                className: M,
                children: "*",
              }),
            ],
          }),
          n.jsx("div", {
            className: "description-value-PxuI_J",
            style: isIntroductionEnabled
              ? {
                  userSelect: "text",
                }
              : undefined,
            children: skill.description || "-",
          }),
        ],
      }),
      isIntroductionEnabled &&
        n.jsxs("div", {
          className: C,
          children: [
            n.jsxs("label", {
              className: N,
              htmlFor: "skill-publish-introduction",
              children: [
                f.Ay.t("web_skill_form_field_brief_intro", {}, "一句话介绍"),
                n.jsx("span", {
                  className: M,
                  children: "*",
                }),
              ],
            }),
            n.jsx(_.A.TextArea, {
              id: "skill-publish-introduction",
              autoComplete: "off",
              className: "introduction-input-PUqKpJ",
              value: introduction,
              onChange: (e) => setIntroduction(e.replace(/[\r\n]/g, "")),
              onKeyDown: (e) => {
                if (!(e.key !== "Enter" || e.nativeEvent.isComposing)) {
                  e.preventDefault();
                }
              },
              maxLength: {
                length: introductionMaxLength,
                errorOnly: false,
              },
              showWordLimit: true,
              placeholder: f.Ay.t(
                "web_skill_form_field_brief_intro_hint",
                {},
                "简单介绍该技能达成的目标与效果",
              ),
            }),
          ],
        }),
      n.jsx(D, {
        categories,
        categoryIds,
        loading: isCategoriesLoading,
        onCategoryIdsChange: setCategoryIds,
      }),
      n.jsx(q, {
        mediaItems,
        onUploadClick: handleUploadClick,
        onUploadFiles: handleUploadFiles,
        onPreview: handlePreviewMedia,
        onRemove: handleRemoveMedia,
        onRetryMedia: retryMediaUpload,
        onSetVideoCover: setVideoCoverFile,
        onRetryVideoCover: retryVideoCoverUpload,
        onRestoreDefaultVideoCover: restoreDefaultVideoCover,
      }),
      n.jsx(ep, {
        checked: isContentPublic,
        onChange: setIsContentPublic,
      }),
    ],
  });
});
const eg = s.memo(function () {
  const { isSubmitDisabled, isSubmitting, handleSubmit } = (() => {
    const e = s.useContext(EcContext);
    if (!e) {
      throw Error("AgenticGeneratorSkillPublishModalFooterContext is missing.");
    }
    return e;
  })();
  return n.jsxs("div", {
    className: "footer-Azl1vX",
    children: [
      n.jsx("div", {
        className: "review-tip-O8Jgw7",
        children: f.Ay.t(
          "skill_publish_dialog_desc_review_notice",
          {},
          "Your skill will be reviewed before it’s posted. Check its status in Profile or Notifications.",
        ),
      }),
      n.jsx(eh.K, {
        className: "submit-button-PFkjjn",
        type: "primary",
        disabled: isSubmitDisabled,
        loading: isSubmitting,
        onClick: handleSubmit,
        children: f.Ay.t("skill_publish_dialog_button_publish", {}, "Post"),
      }),
    ],
  });
});
const ex = s.memo(function (e) {
  const { onClose } = e;
  return n.jsxs("div", {
    className: "header-DkE1Ri",
    children: [
      n.jsx("div", {
        className: "header-title-group-zB4EA3",
        children: n.jsx("span", {
          className: "header-title-P4138N",
          children: f.Ay.t(
            "skill_publish_dialog_title_publish_skill",
            {},
            "Post your skill",
          ),
        }),
      }),
      n.jsx("button", {
        type: "button",
        className: "close-button-IA_ViK",
        "aria-label": f.Ay.t("dreamina_web_common_close"),
        onClick: onClose,
        children: n.jsx(O.gzW, {
          size: 20,
          "aria-hidden": "true",
        }),
      }),
    ],
  });
});
function useEb(e) {
  const { onClose } = e;
  const t = r.h(c.j);
  const l = r.h(d.V);
  const _ = r.h(v._);
  const f = r.h(p.K);
  const { agenticGeneratorManager } = l;
  const { skillEditorManager, skillManager, reportManager } =
    agenticGeneratorManager;
  const markdownReportCallbacks = s.useMemo(
    () => ({
      onBoldToggle: reportManager.reportSkillMarkdownBoldToggle,
      onItalicToggle: reportManager.reportSkillMarkdownItalicToggle,
      onStrikethroughToggle:
        reportManager.reportSkillMarkdownStrikethroughToggle,
      onUnderlineToggle: reportManager.reportSkillMarkdownUnderlineToggle,
      onBlockquoteToggle: reportManager.reportSkillMarkdownQuoteToggle,
      onOrderedListToggle: reportManager.reportSkillMarkdownOrderedListToggle,
      onBulletListToggle: reportManager.reportSkillMarkdownUnorderedListToggle,
      onHeadingChange: reportManager.reportSkillMarkdownHeadingChange,
      onAlignmentChange: reportManager.reportSkillMarkdownAlignmentChange,
    }),
    [reportManager],
  );
  const host = s.useMemo(
    () => ({
      editorManager: skillEditorManager,
      get newUploadTaskIds() {
        return t.data.newUploadTaskIds;
      },
      get reuploadingSkillIds() {
        return t.data.reuploadingSkillIds;
      },
      onUploadClick: skillManager.handleUploadClick,
      uploadSkill: (e, a) => {
        t.uploadSkill(e, a);
      },
      createSkillWithAgent: () => {
        reportManager.reportSkillManageCreateNew("agent_create_new");
        skillEditorManager.leaveFormView({
          kind: "close-modal",
          onClose: () => skillManager.applyCreateSkillTemplateFromSelect(),
        });
      },
      get userSkills() {
        return skillManager.metadata.userSkills;
      },
      get platformSkills() {
        return skillManager.metadata.platformSkills;
      },
      get searchKeyword() {
        return skillManager.metadata.searchKeyword;
      },
      get isEmptySearchResult() {
        return skillManager.metadata.isEmptySearchResult;
      },
      get updatingSkillStatusIds() {
        return skillManager.metadata.updatingSkillStatusIds;
      },
      canViewMoreSkills: true,
      markdownReportCallbacks,
      useUpdatedSkillIcon: true,
      setSearchKeyword: (e) => skillManager.setManageSearchKeyword(e),
      useSkill: (e) =>
        i._(function* () {
          if (t.data.reuploadingSkillIds.includes(e.id)) {
            return false;
          }
          const a = yield skillManager.applyLibrarySkill(e, {
            reportParams: {
              actionMethod: "click",
            },
          });
          return (
            !!a && (reportManager.reportSkillManageUse(a.id, a.name), true)
          );
        })(),
      requestDeleteSkill: (e) =>
        i._(function* () {
          if (
            t.data.reuploadingSkillIds.includes(e.id) ||
            (reportManager.reportSkillManageDelete(e.id, e.name),
            !(yield h_1()) || t.data.reuploadingSkillIds.includes(e.id))
          ) {
            return false;
          }
          const a = yield skillEditorManager.deleteCurrentSkill();
          if (a) {
            g.q(
              e.id,
              e.source !== u.fc.User || e.originalSkillId ? undefined : e.name,
            );
          }
          return a;
        })(),
      canPublishSkill: (e) =>
        m.rM(e, {
          publishAllowed: true,
        }),
      publishSkill: (skill) => {
        if (
          !t.data.reuploadingSkillIds.includes(skill.id) &&
          m.rM(skill, {
            publishAllowed: true,
          })
        ) {
          reportManager.reportSkillManagePublishEntranceClick(skill);
          ((e) => {
            let a;
            const { containerService, skill } = e;
            const i = () => {
              if (a != null) {
                a.close();
              }
              a = undefined;
            };
            a = o.a.info({
              title: n.jsx(ex, {
                onClose: i,
              }),
              footer: n.jsx(eg, {}),
              closable: false,
              maskClosable: false,
              escToExit: false,
              backspaceToExit: false,
              simple: true,
              style: {
                width: 520,
              },
              className: "publish-modal-container-wGWqvD",
              icon: null,
              onCancel: i,
              afterClose: () => {
                a = undefined;
              },
              autoFocus: false,
              content: n.jsx(ev, {}),
              modalRender: (e) =>
                n.jsx(r.Z, {
                  instantiationService: containerService,
                  children: n.jsx(ed, {
                    skill,
                    onClose: i,
                    children: e,
                  }),
                }),
            });
          })({
            containerService: _,
            skill,
          });
        }
      },
      editSkillWithAgent: (e) => {
        if (!t.data.reuploadingSkillIds.includes(e.id)) {
          agenticGeneratorManager.editSkillWithAgent(e);
        }
      },
      viewMoreSkills: () => {
        reportManager.reportSkillManageMoreSkillsEntranceClick();
        skillEditorManager.leaveFormView({
          kind: "close-modal",
          onClose: () => {
            f.navigate(h.Du.Home, {
              query: {
                activeTab: "skill",
              },
            });
          },
        });
      },
      setMarkdownContext: (e, a) => reportManager.setSkillMarkdownContext(e, a),
      clearMarkdownContext: () => reportManager.clearSkillMarkdownContext(),
      reportCheckDreaminaTools: () =>
        reportManager.reportSkillManageGoCheckDreaminaTools(),
    }),
    [
      agenticGeneratorManager,
      _,
      f,
      markdownReportCallbacks,
      reportManager,
      skillEditorManager,
      t,
      skillManager,
    ],
  );
  return n.jsx(x.I, {
    host,
    onClose,
  });
}
function e_(e) {
  const { containerService, onClose } = e;
  return o.a.info({
    wrapClassName: l.A.modalWrapper,
    footer: null,
    closable: false,
    maskClosable: false,
    escToExit: false,
    backspaceToExit: false,
    simple: true,
    icon: null,
    autoFocus: false,
    content: n.jsx(r.Z, {
      instantiationService: containerService,
      children: n.jsx(useEb, {
        onClose,
      }),
    }),
  });
}
export { e_ as q };
