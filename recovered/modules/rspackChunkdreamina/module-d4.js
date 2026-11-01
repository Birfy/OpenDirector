import a from "oa";
import r from "bk";
import i from "z8";
import o from "ED";
import l from "xm3";
import s from "wF";
import c from "PSJ";
import * as u from "./module-V99.js";
import d from "NY";
import m from "bT";
import p from "fSn";
import v from "Kt";
import h from "v5";
import g from "n3Q";
import f from "Qey";
import b from "mZ";
import "Vx";
import _ from "Ix";
import y from "cO";
import x from "pr";
import k from "xb";
import j from "SEl";
import w from "xK4";
import M from "yw";
import T from "Peq";
import N from "Pp";
import P from "qa";
import Z from "O7U";
import O from "gwU";
import V from "Gn4";
import $ from "gC";
import J from "n3";
import U from "UW";
import Q from "oq";
import q from "CsS";
import el from "G6S";
import ed from "LVe";
const R = m.memo(function (e) {
  const {
    videoUrl,
    videoPoster,
    formattedVideoDuration,
    width = 0,
    height = 0,
  } = e;
  const style = m.useMemo(
    () => ({
      padding: 8,
      height: width > height ? (9 / 16) * 240 : (4 / 3) * 180,
      width: width > height ? 240 : 180,
    }),
    [width, height],
  );
  return i.jsx("div", {
    className: "action-template-preview-container-dxTJmm",
    style,
    children: i.jsxs("div", {
      className: "action-template-preview-video-container-gc8HRk",
      children: [
        i.jsx("video", {
          className: "action-template-preview-video-bLxLSE",
          src: y.m(videoUrl, null, {
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
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWJWcFhSakJr$0$wc1kzaz$hRmt6$W5Ca%1q%jBX$Ek1ZDJW$E1XNWFWelZzWTIxR01HSXpTWFpaTWpsMFkw-z$k$nB-TlRCam$%b*9X$E5T-0dJe%5I%lpNamwzWlZNe*JscFhO$3hq-l$Zd1lqTkpkRmx-$*pCaFZ6bDF%RmhT-kdKW$FuTlpXRkpzWTNre*QxbFhO$3hp%Xpsb1d%TlNjR0l5TkhSWk1qbDNa$k14-mxwWE5Xe*pi$$l3WWpOSmR*bFh%akJo$npsM$R*aFNiR0pZ%W5OWld*SnN%RmhDZ$ZwW$duQmFXR04w$1RJNWRX%khWblZr%Xp$d1l6Tm9hR050WkR*amR6MDk",
          }),
          crossOrigin: "anonymous",
          autoPlay: true,
          loop: true,
          poster: videoPoster,
          muted: true,
        }),
        formattedVideoDuration
          ? i.jsx("div", {
              className: "video-duration-WoLMgH",
              children: formattedVideoDuration,
            })
          : null,
      ],
    }),
  });
});
const A = o.PA(function (e) {
  const { videoUrl, videoPoster, width, height } = e;
  const { actionCopyGeneratorManager } = s.h(l.V);
  const { setActionTemplatePanelTriggerProps } = actionCopyGeneratorManager;
  const p = s.h(v._);
  const h = m.useMemo(
    () => ({
      trigger: "hover",
      position: "right",
      popupAlign: {
        right: 12,
      },
    }),
    [],
  );
  const f = m.useMemo(() => i.jsx(M.L9n, {}), []);
  const b = m.useMemo(() => i.jsx(R, a._({}, e)), [e]);
  const _ = m.useCallback(
    (e) =>
      d._(function* () {
        e.stopPropagation();
        setActionTemplatePanelTriggerProps({
          clickOutsideToClose: false,
        });
        yield T.K({
          containerService: p,
          videoInfo: {
            url: videoUrl,
            poster: videoPoster,
            width,
            height,
          },
        });
        setActionTemplatePanelTriggerProps({
          clickOutsideToClose: true,
        });
      })(),
    [
      setActionTemplatePanelTriggerProps,
      p,
      videoUrl,
      videoPoster,
      width,
      height,
    ],
  );
  if (videoUrl) {
    return i.jsx(g.I, {
      content: b,
      disabled: !videoUrl,
      className: "pop-container-dfag1a",
      showArrow: false,
      triggerProps: h,
      children: i.jsx("div", {
        className: "preview-button-container-eW0gax",
        children: i.jsx(N.b, {
          className: "preview-button-mK7FKB",
          icon: f,
          onClick: _,
        }),
      }),
    });
  }
  return null;
});
const S = "action-template-img-u5VygQ";
const F = m.memo(function (e) {
  const { actionTemplate, selected = false, onSelect, className } = e;
  const { video, commonAttr } = actionTemplate;
  const s = video.duration ? j.X(video.duration, "mm:ss") : "";
  const c = m.useMemo(
    () => ({
      mouseEnterDelay: 500,
    }),
    [],
  );
  const u = m.useCallback(() => {
    if (onSelect != null) {
      onSelect(actionTemplate);
    }
  }, [onSelect, actionTemplate]);
  return i.jsxs("div", {
    className: k("action-template-item-jQPHnu", className, {
      "selected-B2Cnw7": selected,
    }),
    children: [
      i.jsxs("div", {
        className: "action-template-img-wrap-lIOCLU",
        onClick: u,
        role: "button",
        tabIndex: 0,
        onKeyDown: x.q,
        "aria-label": commonAttr.title,
        "aria-pressed": selected,
        children: [
          i.jsxs("picture", {
            className: S,
            children: [
              i.jsx("source", {
                srcSet: video.coverUrl,
                type: "image/webp",
              }),
              i.jsx("img", {
                src: y.m(video.coverUrl, null, {
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
                    "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWJWcFhSakJr$0$wc1kzaz$hRmt6$W5Ca%1q%jBX$Ek1ZDJW$E1XNWFWelZzWTIxR01HSXpTWFpaTWpsMFkw-z$k$nB-TlRCam$%b*9X$E5T-0dJe%5I%lpNamwzWlZNe*JscFhO$3hq-l$Zd1lqTkpkRmx-$*pCaFZ6bDF%RmhT-kdKW$FuTlpXRkpzWTNre*QxbFhO$3hp%Xpsb1d%TlNjR0l5TkhSWk1qbDNa$k14-mxwWE5Xe*pi$$l3WWpOSmR*bFh%akJo$npsM$R*aFNiR0pZ%W5OWld*SnN%RmRzT%ZwWE1I$mtTRTQw$1ZoS2Jt%ll%$DA9",
                }),
                alt: "",
                className: S,
                draggable: false,
                crossOrigin: "anonymous",
              }),
            ],
          }),
          i.jsxs("div", {
            children: [
              i.jsx("div", {
                className: "action-template-duration-TE2OzU",
                children: s,
              }),
              i.jsx("div", {
                className: "action-template-preview-hH18xR",
                children: i.jsx(A, {
                  videoUrl: video.originVideo.videoUrl,
                  videoPoster: video.coverUrl,
                  formattedVideoDuration: s,
                  width: video.originVideo.width,
                  height: video.originVideo.height,
                }),
              }),
            ],
          }),
        ],
      }),
      i.jsx(_.A, {
        content: commonAttr.title,
        checkOverflow: true,
        triggerProps: c,
        children: i.jsx(w.d, {
          className: "action-template-title-qNrYbq",
          children: commonAttr.title,
        }),
      }),
    ],
  });
});
const W = "skeleton-loading-We_eq0";
const E = m.memo(function (e) {
  const { className, loading, children } = e;
  return i.jsx(i.Fragment, {
    children: loading
      ? [...Array(6).keys()].map((e) =>
          i.jsxs(
            "div",
            {
              className: k(className, "skeleton-zp6DQr"),
              children: [
                i.jsx("div", {
                  className: k("skeleton-image-AdZPvJ", W),
                }),
                i.jsx("div", {
                  className: k("skeleton-title-cDrSoI", W),
                }),
              ],
            },
            "skeleton_".concat(e),
          ),
        )
      : children,
  });
});
const I = "template-item-VbZlX6";
const L = o.PA(function () {
  const { actionCopyGeneratorManager } = s.h(l.V);
  const {
    metadata: { actionTemplates },
    data: { presetTemplateId },
    selectPresetTemplate,
  } = actionCopyGeneratorManager;
  return i.jsx("div", {
    className: "action-template-list-EwLcjm",
    children: i.jsx(E, {
      loading: actionTemplates.loading,
      className: I,
      children: actionTemplates.data.map((actionTemplate) =>
        i.jsx(
          F,
          {
            className: I,
            actionTemplate,
            selected: presetTemplateId === actionTemplate.commonAttr.id,
            onSelect: selectPresetTemplate,
          },
          actionTemplate.commonAttr.id,
        ),
      ),
    }),
  });
});
const D = m.memo(function () {
  return i.jsx(b.R, {
    title: f.Ay.t("web_motion_select_template_title", {}, "选择动作模版"),
    children: i.jsx(L, {}),
  });
});
const z = o.PA(function (e) {
  const { referenceRenderProps, onClick } = e;
  const o = P._(e, ["referenceRenderProps", "onClick"]);
  const { actionCopyGeneratorManager } = s.h(l.V);
  const {
    data: { actionTemplate, actionTemplateUrl },
    metadata: { acceptedActionFileTypes },
    removeActionTemplate,
    importActionTemplateFromLocal,
  } = actionCopyGeneratorManager;
  const g = m.useCallback(
    (e) => {
      importActionTemplateFromLocal(e, {
        reportParams: {
          importMaterialParams: {
            actionType: "drag",
          },
        },
      });
    },
    [importActionTemplateFromLocal],
  );
  const f = m.useCallback(
    (e) => {
      e.preventDefault();
      if (onClick != null) {
        onClick(e);
      }
    },
    [onClick],
  );
  if (actionTemplate && actionTemplateUrl) {
    return i.jsx(Z.t, {
      resource: actionTemplate,
      referenceRenderProps,
      children: i.jsx(
        O.L,
        r._(
          a._(
            {
              videoResource: actionTemplate,
              onRemove: removeActionTemplate,
              onDropFromLocal: g,
              accept: acceptedActionFileTypes,
              referenceRenderProps,
            },
            o,
          ),
          {
            onClick: f,
          },
        ),
      ),
    });
  }
  return null;
});
const H = o.PA(function (e) {
  const { triggerProps } = e;
  const n = P._(e, ["triggerProps"]);
  const o = m.useMemo(
    () =>
      r._(a._({}, triggerProps), {
        className: k(
          "trigger-QI2eWN",
          triggerProps == null ? undefined : triggerProps.className,
        ),
      }),
    [triggerProps],
  );
  const options = m.useMemo(
    () => [
      {
        label: f.Ay.t("web_motion_select_template_btn", {}, "选择模版"),
        value: "preset",
        icon: i.jsx(M._MP, {}),
      },
      {
        label: f.Ay.t("web_motion_upload_video_btn", {}, "上传参考视频"),
        value: "local-file",
        icon: i.jsx(M.tTg, {}),
      },
    ],
    [],
  );
  return i.jsx(
    V.V,
    r._(a._({}, n), {
      triggerProps: o,
      options,
    }),
  );
});
const K = o.PA(function (e) {
  const { actionCopyGeneratorManager } = s.h(l.V);
  const {
    metadata: { acceptedActionFileTypes },
    importActionTemplateFromLocal,
  } = actionCopyGeneratorManager;
  const o = m.useMemo(() => i.jsx(M.KN6, {}), []);
  const c = m.useCallback((e) => {
    e.preventDefault();
  }, []);
  const u = m.useCallback(
    (e) => {
      importActionTemplateFromLocal(e, {
        reportParams: {
          importMaterialParams: {
            actionType: "drag",
          },
        },
      });
    },
    [importActionTemplateFromLocal],
  );
  return i.jsx($.I, {
    component: null,
    guardFileDrop: true,
    source: J.HH.Upload,
    children: i.jsx(
      U.L,
      a._(
        {
          accept: acceptedActionFileTypes,
          icon: o,
          label: f.Ay.t("web_home_tool_mimic_motion_add_temp", {}, "动作"),
          onChange: u,
          onClick: c,
        },
        e,
      ),
    ),
  });
});
const B =
  require.p +
  "static/image/action-template-upload-tip-animation-1.11b3a429b1.webp";
const X =
  require.p +
  "static/image/action-template-upload-tip-animation-2.e064e2c1da.webp";
const G =
  require.p +
  "static/image/action-template-upload-tip-animation-3.f8f857b448.webp";
const Y =
  require.p +
  "static/image/action-template-upload-tip-animation-4.43d48774d3.webp";
const ee =
  require.p + "static/image/action-template-upload-tip-cover-1.3d185cf66d.jpg";
const et =
  require.p + "static/image/action-template-upload-tip-cover-2.ac0c0016a4.jpg";
const en =
  require.p + "static/image/action-template-upload-tip-cover-3.f8da3b2876.jpg";
const ea =
  require.p + "static/image/action-template-upload-tip-cover-4.181dff938a.jpg";
const er = {
  "action-upload-confirmation": "action-upload-confirmation-NJZIev",
  actionUploadConfirmation: "action-upload-confirmation-NJZIev",
  content: "content-WDIkWt",
  title: "title-IzTIDc",
  "image-wrap": "image-wrap-Iqc5vq",
  imageWrap: "image-wrap-Iqc5vq",
  "image-item": "image-item-mYHHi4",
  imageItem: "image-item-mYHHi4",
  img: "img-TuA4CG",
  "description-wrap": "description-wrap-IFuo0V",
  descriptionWrap: "description-wrap-IFuo0V",
  "description-item": "description-item-PrjxO_",
  descriptionItem: "description-item-PrjxO_",
  "description-title": "description-title-nyrABM",
  descriptionTitle: "description-title-nyrABM",
  "description-content": "description-content-zpYZKu",
  descriptionContent: "description-content-zpYZKu",
  footer: "footer-FCXl1y",
  button: "button-Z7ah8w",
  "action-upload-confirmation-modal": "action-upload-confirmation-modal-JT8Qg8",
  actionUploadConfirmationModal: "action-upload-confirmation-modal-JT8Qg8",
};
const ei = m.memo(function (e) {
  const { onConfirm } = e;
  const { actionCopyGeneratorManager } = s.h(l.V);
  const { skipActionUploadConfirmation } = actionCopyGeneratorManager;
  const [r, setR] = m.useState(false);
  const c = m.useMemo(
    () => [
      {
        animation: B,
        cover: ee,
      },
      {
        animation: X,
        cover: et,
      },
      {
        animation: G,
        cover: en,
      },
      {
        animation: Y,
        cover: ea,
      },
    ],
    [],
  );
  const u = m.useMemo(
    () => [
      {
        title: f.Ay.t(
          "web_new_avatar_micmic_upload_motion_tips_camera",
          {},
          "镜头",
        ),
        description: f.Ay.t(
          "web_new_avatar_micmic_upload_motion_tips_camera_desc",
          {},
          "保持一镜到底，不要运镜",
        ),
      },
      {
        title: f.Ay.t(
          "web_new_avatar_micmic_upload_motion_tips_stability",
          {},
          "稳定",
        ),
        description: f.Ay.t(
          "web_new_avatar_micmic_upload_motion_tips_stability_desc",
          {},
          "保持镜头稳定，避免晃动",
        ),
      },
      {
        title: f.Ay.t(
          "web_new_avatar_micmic_upload_motion_tips_graphic",
          {},
          "画质",
        ),
        description: f.Ay.t(
          "web_new_avatar_micmic_upload_motion_tips_graphic_desc",
          {},
          "人物应当清晰，画幅不限",
        ),
      },
      {
        title: f.Ay.t(
          "web_new_avatar_micmic_upload_motion_tips_legal",
          {},
          "版权",
        ),
        description: f.Ay.t(
          "web_new_avatar_micmic_upload_motion_tips_legal_desc",
          {},
          "确保素材为您所有或已获合法授权",
        ),
      },
    ],
    [],
  );
  const d = m.useCallback(() => {
    if (r) {
      skipActionUploadConfirmation();
    }
    onConfirm();
  }, [r, onConfirm, skipActionUploadConfirmation]);
  return i.jsxs("div", {
    className: er.actionUploadConfirmation,
    children: [
      i.jsxs("div", {
        className: er.content,
        children: [
          i.jsx("div", {
            className: er.title,
            children: f.Ay.t(
              "web_new_avatar_micmic_upload_motion_tips_subtitle",
              {},
              "视频建议",
            ),
          }),
          i.jsx("div", {
            className: er.imageWrap,
            children: c.map((e) =>
              i.jsx(
                "div",
                {
                  className: er.imageItem,
                  children: i.jsxs("picture", {
                    className: er.img,
                    children: [
                      i.jsx("source", {
                        srcSet: e.animation,
                        type: "image/webp",
                      }),
                      i.jsx("img", {
                        alt: "",
                        src: y.m(e.cover, null, {
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
                            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWJWcFhSakJr$0$wc1kzaz$hRmt6$W5Ca%1q%jBX$Ek1ZDJW$E1XNWFWelZzWTIxR01HSXpTWFpaTWpsMFkw-z$k$nB-TlRCam$%b*9X$E5T-0dJe%5I%lpNamwzWlZNe*JscFhO$3hq-l$Zd1lqTkpkR050$m0x-$dFcHNZbTFP-kdON%9XaFpNM%p3WWpJM*R*a3lPW*Rs$Xp*d$ds-zFiR050%mpCa%0wbDBZMjFX-lZwW$Nte*li$T$z$EZkR2Ft%khiSFpp-$RFeFkwZDRkb*x-$$hSWk1qbDFXbTFzZ$dKWFJqQmhWemwx$EZje*RscEhSbk5NTWtac$pFZHNkb%pwT$dwa%0wSTF%RmRr-kdKdFZubFpXRkoyWTJre*$WcFhXbXhq-lZaM$d%SlZkRmx-$*pCaFZ6bDF%RmhXZDJKSE9Xa*FRekZxWWpJMWJXRllTblJa$0ZKd1lqSTBk$1JJ$*pSWldFcH$aRmhO%FE9PQ",
                        }),
                        className: er.img,
                        crossOrigin: "anonymous",
                      }),
                    ],
                  }),
                },
                e.cover,
              ),
            ),
          }),
          i.jsx("div", {
            className: er.descriptionWrap,
            children: u.map((e) =>
              i.jsxs(
                "div",
                {
                  className: er.descriptionItem,
                  children: [
                    i.jsx("span", {
                      className: er.descriptionTitle,
                      children: e.title,
                    }),
                    i.jsx("span", {
                      className: er.descriptionContent,
                      children: e.description,
                    }),
                  ],
                },
                e.title,
              ),
            ),
          }),
        ],
      }),
      i.jsxs("div", {
        className: er.footer,
        children: [
          i.jsx(q._, {
            checked: r,
            className: er.checkbox,
            onChange: setR,
            children: f.Ay.t(
              "web_new_avatar_micmic_upload_motion_tips_hide",
              {},
              "不再提示",
            ),
          }),
          i.jsx(N.b, {
            type: "primary",
            className: er.button,
            onClick: d,
            children: f.Ay.t(
              "web_new_avatar_micmic_upload_confirmation",
              {},
              "上传",
            ),
          }),
        ],
      }),
    ],
  });
});
const eo = o.PA(function (e) {
  const { actionCopyGeneratorManager } = s.h(l.V);
  const {
    data: { actionTemplateUrl, actionTemplateSourceType },
    metadata: {
      acceptedActionFileTypes,
      actionTemplatePanelTriggerProps,
      shouldSkipActionUploadConfirmation,
    },
    importActionTemplateFromLocal,
    setActionTemplatePanelTriggerProps,
    reportManager: { reportTemplatePanelShow, reportAddTemplate },
  } = actionCopyGeneratorManager;
  const j = s.h(v._);
  const w = u.x();
  const M = m.useMemo(() => i.jsx(D, {}), []);
  const trigger = m.useMemo(() => [], []);
  const [N, setN] = m.useState(false);
  const A = m.useCallback(
    (e) =>
      d._(function* () {
        if (e === "preset") {
          setN(true);
          reportTemplatePanelShow();
          return;
        }
        if (
          shouldSkipActionUploadConfirmation ||
          (yield ((e) => {
            var { promise, resolve } = Promise.withResolvers();
            var { containerService } = e;
            var r = Q.a.confirm({
              wrapClassName: "action-upload-confirmation-modal-SI8lRo",
              title: f.Ay.t(
                "web_new_avatar_micmic_upload_motion_tips_title",
                {},
                "上传视频",
              ),
              footer: null,
              content: i.jsx(s.Z, {
                instantiationService: containerService,
                children: i.jsx(ei, {
                  onConfirm: () => {
                    r.close();
                    resolve(true);
                  },
                }),
              }),
            });
            return promise;
          })({
            containerService: j,
          }))
        ) {
          reportAddTemplate();
          p.y({
            accept: acceptedActionFileTypes,
            onFilesSelected: (e) => {
              var [t] = e;
              return importActionTemplateFromLocal(t);
            },
          });
        }
      })(),
    [
      shouldSkipActionUploadConfirmation,
      j,
      reportTemplatePanelShow,
      reportAddTemplate,
      acceptedActionFileTypes,
      importActionTemplateFromLocal,
    ],
  );
  const S = m.useCallback(
    () =>
      d._(function* () {
        if (actionTemplateSourceType === "preset") {
          setN(true);
          reportTemplatePanelShow();
          return;
        }
        const { actionTemplate } = actionCopyGeneratorManager.data;
        const n =
          actionTemplate &&
          (w == null ? undefined : w.openPreview(actionTemplate.id));
        if (n) {
          setActionTemplatePanelTriggerProps({
            clickOutsideToClose: false,
          });
          try {
            yield n;
          } finally {
            setActionTemplatePanelTriggerProps({
              clickOutsideToClose: true,
            });
          }
        }
      })(),
    [
      actionTemplateSourceType,
      w,
      reportTemplatePanelShow,
      setActionTemplatePanelTriggerProps,
      actionCopyGeneratorManager,
    ],
  );
  const onMouseDown = m.useCallback(() => {
    if (N) {
      setN(false);
    }
  }, [N, setN]);
  const triggerElement = m.useMemo(
    () =>
      i.jsx(
        h.V,
        r._(
          a._(
            {
              visualIndexOffset: 1,
            },
            e,
          ),
          {
            children: actionTemplateUrl
              ? i.jsx(
                  z,
                  {
                    onClick: S,
                  },
                  "action",
                )
              : i.jsx(
                  K,
                  {
                    onMouseDown,
                  },
                  "upload",
                ),
          },
        ),
      ),
    [e, actionTemplateUrl, S, onMouseDown],
  );
  return i.jsx(g.I, {
    className: "popover-Z0huvG",
    trigger,
    content: M,
    popupVisible: N,
    onVisibleChange: setN,
    triggerProps: actionTemplatePanelTriggerProps,
    children: i.jsx(H, {
      triggerElement,
      onChange: A,
      disabled: !!actionTemplateUrl,
    }),
  });
});
const es = o.PA(function (e) {
  const { referenceRenderProps } = e;
  const { actionCopyGeneratorManager } = s.h(l.V);
  const {
    data: {
      referenceImage,
      referenceImageProcessStatus: { uploading, faceDetecting },
    },
    metadata: { characterTooltipProps, acceptedCharacterFileTypes },
    characterManager: {
      removeReferenceImage,
      importReferenceCharacterFromLocal,
    },
  } = actionCopyGeneratorManager;
  const g = m.useCallback(
    (e) => {
      importReferenceCharacterFromLocal(e, {
        reportParams: {
          importMaterialParams: {
            actionType: "drag",
          },
        },
      });
    },
    [importReferenceCharacterFromLocal],
  );
  if (referenceImage) {
    return i.jsx(
      Z.t,
      r._(
        a._(
          {
            resource: referenceImage,
            referenceRenderProps,
          },
          characterTooltipProps,
        ),
        {
          children: i.jsx(
            el.d,
            a._(
              {
                imageResource: referenceImage,
                loading: uploading || faceDetecting,
                onRemove: removeReferenceImage,
                onDropFromLocal: g,
                accept: acceptedCharacterFileTypes,
              },
              e,
            ),
          ),
        },
      ),
    );
  }
  return null;
});
const animationUrl =
  require.p +
  "static/image/action-copy-reference-character-guide-tip-animation.65c004f69d.webp";
const imageUrl =
  require.p +
  "static/image/action-copy-reference-character-guide-tip-cover.0bcf38d7a3.jpg";
const em = m.memo(function (e) {
  const title = m.useMemo(
    () =>
      f.Ay.t("web_motion_character_upload_info_title", {}, "支持全身/半身图片"),
    [],
  );
  const description = m.useMemo(
    () =>
      f.Ay.t(
        "web_motion_character_upload_info_desc",
        {},
        "人物比例尽量与动作模板一致",
      ),
    [],
  );
  return i.jsx(
    ed.K,
    a._(
      {
        imageUrl,
        animationUrl,
        title,
        description,
      },
      e,
    ),
  );
});
const ep = o.PA(function (e) {
  const { actionCopyGeneratorManager } = s.h(l.V);
  const {
    metadata: { acceptedCharacterFileTypes },
    characterManager: { importReferenceCharacterFromLocal },
  } = actionCopyGeneratorManager;
  const oRef = m.useRef("drag");
  const c = m.useCallback(() => {
    oRef.current = "click";
  }, []);
  const onCancel = m.useCallback(() => {
    oRef.current = "drag";
  }, []);
  const d = m.useCallback(
    (e) => {
      var oRef_current = oRef.current;
      oRef.current = "drag";
      importReferenceCharacterFromLocal(e, {
        reportParams: {
          importMaterialParams: {
            actionType: oRef_current,
          },
        },
      });
    },
    [importReferenceCharacterFromLocal],
  );
  return i.jsx(em, {
    children: i.jsx($.I, {
      component: null,
      guardFileDrop: true,
      source: J.HH.Upload,
      children: i.jsx(
        U.L,
        a._(
          {
            accept: acceptedCharacterFileTypes,
            label: f.Ay.t(
              "web_home_tool_mimic_motion_add_character",
              {},
              "角色",
            ),
            onChange: d,
            onCancel,
            onClick: c,
          },
          e,
        ),
      ),
    }),
  });
});
const ev = o.PA(function (e) {
  const { actionCopyGeneratorManager } = s.h(l.V);
  const {
    data: { referenceImage },
  } = actionCopyGeneratorManager;
  return i.jsx(
    h.V,
    r._(a._({}, e), {
      children: referenceImage
        ? i.jsx(es, {}, "character")
        : i.jsx(ep, {}, "upload"),
    }),
  );
});
var eh = o.PA(function (e) {
  const { actionCopyGeneratorManager } = s.h(l.V);
  const {
    data: { referenceImage, actionTemplate },
  } = actionCopyGeneratorManager;
  const resources = [referenceImage, actionTemplate].filter(
    (e) => e !== undefined,
  );
  return i.jsx(u.n, {
    resources,
    children: i.jsxs(
      c.B,
      r._(a._({}, e), {
        children: [
          i.jsx(ev, {}),
          i.jsx(eo, {
            visualIndexOffset: 1,
          }),
        ],
      }),
    ),
  });
});
export { eh as T };
