import n from "z8";
import r from "bT";
import _a from "xb";
import { uZ, yC } from "./module-krN.js";
import l from "yw";
import u from "cO";
import d from "OQ";
import g from "SEl";
import m from "NY";
import "Vx";
import "qrE";
import "Su";
import j from "Ix";
import y from "RH";
import v from "MzS";
import I from "Qey";
import h from "Ib";
import D from "wF";
import { h as h_1 } from "./module-Fk5.js";
import z from "Hr";
import b from "Lx";
import { U } from "./module-Jfe.js";
const c = r.memo(function () {
  return n.jsx("div", {
    className: "cover-SZLH8C",
    children: n.jsx(l.jQO, {
      size: 16,
    }),
  });
});
const M = r.memo(function (e) {
  const { imageUrl, resolutionUrlMap } = e;
  return n.jsx(d.sg, {
    src: u.m(imageUrl, null, {
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
        "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNW$t%lhTbkZh$jA0d1RESnNk$1JI$m5saWJ$Wnp%REpPZ*1KW$FuWmli$loxWk$oTmRtTXpWbWxo-lZac$pFTXhlbHB-Z%d4Wk0xRjBZak5DT%d*WE9-$mpl$*w2WkZkS2NWcFh%akJN$0%1c1lrZFdhb$JET$haalN*SndZakkwZEd*WE1Xa*FNbF-w$1RJN%1scFlTWFZr%0%0MFdWaEtib$JZ$FQwPQ",
    }),
    resolutionUrlMap,
    className: "cover-UBb8FR",
    width: 32,
    height: 32,
    draggable: false,
    enableUseSize: false,
    sizePickMode: "legacy",
    crossOrigin: "anonymous",
  });
});
const N = r.memo(function (e) {
  let t;
  let i;
  const { subject } = e;
  const { videoInfo } = subject.content;
  const s =
    (t = videoInfo == null ? undefined : videoInfo.coverUrl) != null ? t : "";
  const l =
    (i = videoInfo == null ? undefined : videoInfo.duration) != null ? i : 0;
  const children = r.useMemo(() => g.X(l, "mm:ss"), [l]);
  return n.jsxs("div", {
    className: "cover-y0NA9h",
    children: [
      n.jsx(d.sg, {
        src: u.m(s, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNW$t%lhTbkZh$jA0d1RESnNk$1JI$m5saWJ$Wnp%REpPZ*1KW$FuWmli$loxWk$oTmRtTXpWbWxo-lZac$pFTXhlbHB-Z%d4Wk0xRjBZak5DT%d*WE9-$mpl$*w2WkZkS2NWcFh%akJN$0%1c1lrZFdhb$JET$haalN*SndZakkwZEdSd*JHd*FWemgw$1RJN%1scFlTWFZr%0%0MFdWaEtib$JZ$FQwPQ",
        }),
        className: "image-kzdBGC",
        width: 32,
        height: 32,
        draggable: false,
        enableUseSize: false,
        sizePickMode: "legacy",
        crossOrigin: "anonymous",
      }),
      l > 0
        ? n.jsx("span", {
            className: "duration-qxVZmA",
            children,
          })
        : null,
    ],
  });
});
const p = r.memo(function (e) {
  let t;
  const { subject } = e;
  const r = uZ(subject);
  if (r === yC.Audio) {
    return n.jsx(c, {});
  }
  if (r === yC.Video) {
    return n.jsx(N, {
      subject,
    });
  }
  const { mainImage } = subject.content;
  const imageUrl =
    (t = mainImage == null ? undefined : mainImage.imageUrl) != null ? t : "";
  return n.jsx(M, {
    imageUrl,
    resolutionUrlMap: mainImage == null ? undefined : mainImage.coverUrlMap,
  });
});
const x = r.memo(function (e) {
  const { subject } = e;
  const [i, setI] = r.useState(false);
  const s = D.h(b.C);
  const onVisibleChange = r.useCallback((e) => {
    setI(e);
  }, []);
  const u = r.useCallback(
    (e) =>
      m._(function* () {
        e.stopPropagation();
        const i = yield s.getInstance();
        i.subjectOperationManager.reportSubjectEdit(subject.subjectId);
        i.showSubjectCreateModal({
          initialData: U(subject, {
            includeSelectedVoice: true,
          }),
          subjectId: subject.subjectId,
          dataId: subject.dataId,
          enterFrom: h.B.SubjectListEdit,
        });
      })(),
    [s, subject],
  );
  const d = r.useCallback(
    (e) => {
      e.stopPropagation();
      var i = h_1({
        title: n.jsx(j.A, {
          content: I.Ay.t(
            "subject_delete_modal_title",
            {
              text: subject.content.name,
            },
            "确认删除主体“{text}”",
          ),
          checkOverflow: true,
          children: n.jsx("span", {
            className: "delete-modal-title-j837P9",
            children: I.Ay.t(
              "subject_delete_modal_title",
              {
                text: subject.content.name,
              },
              "确认删除主体“{text}”",
            ),
          }),
        }),
        content: I.Ay.t(
          "subject_delete_modal_body",
          {},
          "删除的主体将无法找回，使用主体生成的历史结果仅支持再次生成",
        ),
        onClickDelete: () =>
          m._(function* () {
            const e = yield s.getInstance();
            if (
              (yield e.subjectOperationManager.deleteSubject({
                subjectId: subject.subjectId,
                dataId: subject.dataId,
              })).ok
            ) {
              e.subjectOperationManager.reportSubjectDelete(subject.subjectId);
              z.l.success(
                I.Ay.t("subject_delete_success_toast", {}, "主体已删除"),
              );
              i.close();
            } else {
              z.l.error(I.Ay.t("web_delete_popup_fail", {}, "删除失败"));
            }
          })(),
      });
    },
    [subject, s],
  );
  const M = r.useMemo(() => {
    var e;
    var i;
    return [
      {
        key: "edit",
        Icon: l.GI1,
        label: I.Ay.t("subject_panel_set", {}, "设置主体"),
        visible:
          ((e = subject.subjectControl) == null ? undefined : e.editable) !==
          false,
        onClick: u,
      },
      {
        key: "delete",
        Icon: l.xV8,
        label: I.Ay.t("subject_panel_delete", {}, "删除"),
        visible:
          ((i = subject.subjectControl) == null ? undefined : i.deletable) !==
          false,
        onClick: d,
      },
    ].filter((e) => e.visible);
  }, [subject, u, d]);
  const droplist = n.jsx(y.A, {
    className: "dropdown-menu-dYLM6z",
    children: M.map((e) => {
      var { Icon } = e;
      return n.jsxs(
        y.A.Item,
        {
          className: "dropdown-menu-item-euGBpM",
          onClick: e.onClick,
          children: [
            n.jsx(Icon, {
              size: 16,
              className: "menu-item-icon-_H0N6J",
            }),
            e.label,
          ],
        },
        e.key,
      );
    }),
  });
  return n.jsx("div", {
    className: "wrapper-tou9o1",
    children: n.jsx(v.A, {
      position: "bl",
      trigger: "click",
      onVisibleChange,
      droplist,
      children: n.jsx("div", {
        className: _a("more-button-bIvUGM", {
          "more-button-visible-UT7DFQ": i,
        }),
        role: "button",
        tabIndex: 0,
        onClick: (e) => e.stopPropagation(),
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.stopPropagation();
          }
        },
        children: n.jsx(l.xcf, {
          size: 16,
          className: "more-icon-cG_DKt",
        }),
      }),
    }),
  });
});
export var T = r.memo(function (e) {
  let t;
  let i;
  const { subject, disabled = false } = e;
  const { content } = subject;
  const { name } = content;
  const u = uZ(subject);
  const d =
    u === yC.Image || u === yC.Video ? content.selectedVoice : undefined;
  const M =
    (t = d == null || (i = d.audioInfo) == null ? undefined : i.title) != null
      ? t
      : "";
  return n.jsxs("div", {
    className: _a("option-content-WD7RWU", {
      "disabled-rbK6hR": disabled,
    }),
    children: [
      n.jsx("div", {
        className: "option-cover-container-SYZ_9f",
        children: n.jsx(p, {
          subject,
        }),
      }),
      n.jsxs("div", {
        className: _a("option-text-PHKNV2", {
          "has-voice-see7eg": M !== "",
        }),
        children: [
          n.jsx("span", {
            className: "option-name-F4TVoC",
            children: name,
          }),
          M !== ""
            ? n.jsxs("span", {
                className: "voice-section-zFRVEB",
                children: [
                  n.jsx("span", {
                    className: "voice-divider-QXL1JX",
                  }),
                  n.jsx("span", {
                    className: "voice-text-B3N0rL",
                    children: M,
                  }),
                ],
              })
            : null,
        ],
      }),
      n.jsx(x, {
        subject,
      }),
    ],
  });
});
