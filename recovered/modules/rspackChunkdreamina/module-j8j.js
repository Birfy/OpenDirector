import a from "z8";
import "Vx";
import r from "Ix";
import o from "bT";
import i from "ED";
import s from "Qey";
import l from "yw";
import c from "xm3";
import d from "fSn";
import u from "ZX";
import p from "wF";
import m from "Kt";
import v from "gC";
import h from "lBB";
import f from "rJK";
import x from "hlj";
import _ from "n3";
import g from "R5E";
import b from "YU";
import j from "oa";
import y from "z8f";
import k from "BwB";
import M from "lRe";
import A from "at";
import C from "K4";
import w from "rGr";
function N(e, t) {
  const n = [];
  for (var a = 0; a < e.length;) {
    let r;
    let o;
    let i = -1;
    for (const [s, l] of t) {
      let c;
      const d = e.indexOf(s, a);
      if (
        d >= 0 &&
        (i < 0 ||
          d < i ||
          (d === i &&
            s.length >
              ((c = r == null ? undefined : r.length) != null ? c : 0)))
      ) {
        r = s;
        o = l;
        i = d;
      }
    }
    if (!r || !o || i < 0) {
      break;
    }
    if (i > a) {
      n.push({
        type: "text",
        text: e.slice(a, i),
      });
    }
    n.push(o);
    a = i + r.length;
  }
  if (a < e.length) {
    n.push({
      type: "text",
      text: e.slice(a),
    });
  }
  return n;
}
export var P = i.PA(function (e) {
  const { variant = "toolbar" } = e;
  const n = p.h(c.V);
  const containerService = p.h(m._);
  const { videoGeneratorManager } = n;
  const {
    data: { commercialSceneOptions, model },
    featureManager: {
      data: { isVideoEditEngaged },
    },
    metadata: { acceptedVideoFileTypes },
    omniReferenceManager,
    referenceAuditManager,
  } = videoGeneratorManager;
  const {
    data: {
      promptContents,
      videoEditFrameTimestampMsByReferenceId,
      videoEditReferenceResources,
      videoEditSourceReference,
    },
    importVideoEditSourceFromLocal,
    setData,
  } = omniReferenceManager;
  const icon = o.useMemo(() => a.jsx(l.Ybi, {}), []);
  const disabled =
    !videoEditSourceReference || videoEditSourceReference.type !== "video";
  const B = o.useCallback(() => {
    d.y({
      accept: acceptedVideoFileTypes,
      onFilesSelected: (e) => {
        var [t] = e;
        return importVideoEditSourceFromLocal(t);
      },
    });
  }, [acceptedVideoFileTypes, importVideoEditSourceFromLocal]);
  const onSavePayload = o.useCallback(
    (e) => {
      var videoEditSourceReference =
        omniReferenceManager.data.videoEditSourceReference;
      if (
        !videoEditSourceReference ||
        videoEditSourceReference.type !== "video"
      ) {
        return false;
      }
      var n = new Map(
        omniReferenceManager.data.videoEditReferenceResources.map((e) => [
          e.id,
          e,
        ]),
      );
      var a = new Map();
      var r = [];
      var e_references = e.references;
      for (var s of e_references) {
        var l = n.get(s.id);
        var c =
          l != null
            ? l
            : ((e, t) => {
                const n = {
                  id: t.id,
                  name: t.name,
                };
                if (t.imageInfo) {
                  return y.h(e, t.imageInfo, n);
                }
                if (t.videoInfo) {
                  return k.b(e, t.videoInfo, n);
                }
                if (t.audioInfo) {
                  return M.M(e, t.audioInfo, n);
                }
                if (t.file) {
                  if (t.type === "image") {
                    return e.createInstance(A.Vl, {
                      id: n.id,
                      file: t.file,
                    });
                  }
                  if (t.type === "video") {
                    return e.createInstance(C.p, {
                      id: n.id,
                      file: t.file,
                    });
                  }
                  return e.createInstance(w.e, {
                    id: n.id,
                    file: t.file,
                  });
                }
              })(containerService, s);
        if (!c) {
          r.forEach((e) => e.dispose());
          return false;
        }
        if (!l) {
          r.push(c);
        }
        a.set(s.id, c);
      }
      var references = [
        videoEditSourceReference,
        ...e_references.map((e) => a.get(e.id)).filter((e) => !!e),
      ];
      var promptContents_1 = (function (e, t) {
        const n =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : [];
        const a = new Map();
        for (const r of n) {
          if (r.type === "subject") {
            const o = r.subject.content.name;
            if (o) {
              a.set("@".concat(o), r);
            }
          }
        }
        if (e.promptSegments.length === 0) {
          if (e.prompt) {
            return N(e.prompt, a);
          }
          return [];
        }
        return e.promptSegments.flatMap((e) => {
          if (e.type === "text") {
            if (e.text) {
              return N(e.text, a);
            }
            return [];
          }
          if (e.type === "subject") {
            return [
              {
                type: "subject",
                id: e.id,
                subject: e.subject,
              },
            ];
          }
          var n = t.get(e.referenceId);
          if (n) {
            return [
              {
                type: n.type,
                id: n.id,
              },
            ];
          }
          return [];
        });
      })(e, a, omniReferenceManager.data.promptContents);
      var videoEditFrameTimestampMsByReferenceId_1 = Object.fromEntries(
        e_references.flatMap((e) => {
          var t = a.get(e.id);
          if (
            (t == null ? undefined : t.type) !== "image" ||
            typeof e.frameTimeInSeconds !== "number"
          ) {
            return [];
          }
          return [[t.id, Math.round(1000 * e.frameTimeInSeconds)]];
        }),
      );
      referenceAuditManager.restoreResourceAuditSnapshot(
        e.materialAuditSnapshot,
        references,
        {
          scene: u.EZ.VideoGenerate,
          modelKey: model == null ? undefined : model.key,
        },
      );
      setData({
        references,
        promptContents: promptContents_1,
        videoEditSourceReferenceId: videoEditSourceReference.id,
        videoEditFrameTimestampMsByReferenceId:
          videoEditFrameTimestampMsByReferenceId_1,
      });
      return true;
    },
    [
      containerService,
      model == null ? undefined : model.key,
      omniReferenceManager,
      referenceAuditManager,
      setData,
    ],
  );
  const K = o.useCallback(() => {
    if (videoEditSourceReference && videoEditSourceReference.type === "video") {
      var e;
      var initialReferences = videoEditReferenceResources.map((e) => {
        var t;
        t = videoEditFrameTimestampMsByReferenceId[e.id];
        if (e.type === "image") {
          return j._(
            {
              id: e.id,
              type: e.type,
              dataURL: e.url,
              name: e.name,
              file: e.file,
              width: e.width,
              height: e.height,
            },
            typeof t === "number"
              ? {
                  frameTimeInSeconds: t / 1000,
                }
              : {},
          );
        }
        if (e.type === "video") {
          return {
            id: e.id,
            type: e.type,
            dataURL: e.url,
            coverUrl: e.coverUrl,
            name: e.name,
            file: e.file,
            width: e.width,
            height: e.height,
            duration: e.duration,
          };
        }
        return {
          id: e.id,
          type: e.type,
          dataURL: e.url,
          name: e.name,
          file: e.file,
          duration: e.duration,
        };
      });
      var n = new Set(initialReferences.map((e) => e.id));
      var initialPromptSegments = promptContents.flatMap((e) => {
        if (e.type === "text") {
          if (e.text) {
            return [
              {
                type: "text",
                text: e.text,
              },
            ];
          }
          return [];
        }
        if (e.type === "subject") {
          return [
            {
              type: "subject",
              id: e.id,
              subject: e.subject,
            },
          ];
        }
        if (e.type !== "continuationDuration" && n.has(e.id)) {
          return [
            {
              type: "reference",
              referenceId: e.id,
            },
          ];
        }
        return [];
      });
      var editorContext = {
        videoUrl: videoEditSourceReference.url,
        coverUrl: videoEditSourceReference.coverUrl,
        sourceVideoDuration: videoEditSourceReference.duration,
        initialReferences,
        initialPrompt: initialPromptSegments
          .filter((e) => e.type === "text")
          .map((e) => e.text)
          .join(""),
        initialPromptSegments,
        maxPromptLength:
          model == null || (e = model.editConfig) == null
            ? undefined
            : e.maxPromptLength,
        referenceLimits: f.q(model),
        baseCommercialSceneOptions: x.BG(
          commercialSceneOptions,
          videoEditSourceReference.duration,
        ),
        commercialDisplayModelConfig: model,
        materialAuditConfig: model
          ? {
              modelKey: model.key,
              preAuditPolicy: model.preAuditPolicy,
            }
          : undefined,
        subjectAuditConfig: model
          ? {
              modelKey: model.key,
              preAuditPolicy: model.subjectPreAuditPolicy,
            }
          : undefined,
        initialMaterialAuditSnapshot:
          referenceAuditManager.createResourceAuditSnapshot(
            videoEditReferenceResources,
            {
              scene: u.EZ.VideoGenerate,
              modelKey: model == null ? undefined : model.key,
            },
          ),
      };
      g.B({
        containerService,
        editorContext,
        modalTitle: s.Ay.t("seedance_25_edit_advance", {}, "高级编辑"),
        modalWidth: 880,
        maskClosable: true,
        onSavePayload,
      });
    }
  }, [
    commercialSceneOptions,
    containerService,
    onSavePayload,
    model,
    promptContents,
    referenceAuditManager,
    videoEditFrameTimestampMsByReferenceId,
    videoEditReferenceResources,
    videoEditSourceReference,
  ]);
  if (!isVideoEditEngaged) {
    return null;
  }
  const G = s.Ay.t("seedance_25_edit_advance", {}, "高级编辑");
  if (variant === "tooltipLink") {
    if (disabled) {
      return null;
    }
    return a.jsx("button", {
      type: "button",
      className: "tooltip-link-dXe5qv",
      onClick: K,
      children: G,
    });
  }
  const U = a.jsx(h.E, {
    icon,
    disabled,
    onClick: K,
    children: G,
  });
  if (disabled) {
    const q = s.Ay.t("seedance_25_edit_upload_tip1", {}, "上传要编辑的视频");
    const content = s.Ay.t(
      "seedance_25_edit_advance_needvideo",
      {
        string: a.jsx(
          v.I,
          {
            component: null,
            source: _.HH.Upload,
            children: a.jsx("button", {
              type: "button",
              className: "tooltip-highlight-Np5I5Z",
              onClick: B,
              children: q,
            }),
          },
          "video-edit-upload-tip",
        ),
      },
      "请先{string}",
    );
    return a.jsx(r.A, {
      content,
      position: "top",
      children: a.jsx("span", {
        className: "tooltip-trigger-e9Klvw",
        children: U,
      }),
    });
  }
  return a.jsx(b.F, {
    content: G,
    children: U,
  });
});
