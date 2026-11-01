import n from "oa";
import a from "Ut";
import { M, h } from "./module-e6s.js";
import { X, c } from "./module-NaK.js";
import * as l from "./module-I6p.js";
import { N, a as a_1 } from "./module-y3V.js";
function u(e) {
  switch (e) {
    case "image":
      return a.DAUnifiedEditMaterialType.Image;
    case "video":
      return a.DAUnifiedEditMaterialType.Video;
    case "audio":
      return a.DAUnifiedEditMaterialType.Audio;
    case "subject":
      return a.DAUnifiedEditMaterialType.Subject;
    default:
      return a.DAUnifiedEditMaterialType.Text;
  }
}
function m(e) {
  switch (e) {
    case a.DAUnifiedEditMaterialType.Image:
      return "image";
    case a.DAUnifiedEditMaterialType.Video:
      return "video";
    case a.DAUnifiedEditMaterialType.Audio:
      return "audio";
    case a.DAUnifiedEditMaterialType.Subject:
      return "subject";
    case a.DAUnifiedEditMaterialType.Text:
    default:
      return "text";
  }
}
export function I1(e) {
  const t = new a.DAUnifiedEditMaterial();
  t.materialType = u(e.materialType);
  t.imageInfo = c(e.imageInfo);
  t.videoInfo = a_1(e.videoInfo);
  t.audioInfo = h(e.audioInfo);
  t.subjectData = l.d(e.subjectData);
  return t;
}
export function F9(e, t) {
  if (e) {
    return {
      materialType: m(e.materialType),
      imageInfo: X(e.imageInfo, t),
      videoInfo: N(e.videoInfo, t),
      audioInfo: M(e.audioInfo, t),
      subjectData: l.a(e.subjectData, t),
    };
  }
}
export function TX(e, t) {
  if (e) {
    const i = new a.DAUnifiedEditInput();
    i.materialList = e.materialList.map(I1);
    i.metaList = e.metaList.map((e) => {
      var i;
      var n = new a.DAUnifiedEditMeta();
      n.metaType = u(e.metaType);
      if (e.metaType === "text") {
        n.text = (i = e.text) != null ? i : "";
      } else if (e.materialRef) {
        var o = new a.DAUnifiedEditMaterialRef();
        o.materialIdx = e.materialRef.materialIdx;
        if (
          (t == null ? undefined : t.includeSourceInfo) &&
          e.materialRef.sourceInfo
        ) {
          var r = new a.DAUnifiedEditMaterialSourceInfo();
          r.sourceMaterialIdx = e.materialRef.sourceInfo.sourceMaterialIdx;
          r.timestampMs = e.materialRef.sourceInfo.timestampMs;
          o.sourceInfo = r;
        }
        n.materialRef = o;
      }
      return n;
    });
    const n = ((e) => {
      if ((e == null ? undefined : e.enable) === true) {
        const t = new a.DAUnifiedEditEditInput();
        t.enable = true;
        t.editFromMaterialIdx = e.editFromMaterialIdx;
        if (typeof e.startTimestampMs === "number") {
          t.startTimestampMs = e.startTimestampMs;
        }
        if (typeof e.endTimestampMs === "number") {
          t.endTimestampMs = e.endTimestampMs;
        }
        return t;
      }
    })(e.editInput);
    i.editInput = n;
    i.extendInput = n
      ? undefined
      : ((e) => {
          if ((e == null ? undefined : e.enable) === true) {
            const t = new a.DAUnifiedEditExtendInput();
            t.enable = true;
            t.extendFromMaterialIdx = e.extendFromMaterialIdx;
            return t;
          }
        })(e.extendInput);
    return i;
  }
}
export function oy(e, t) {
  if (e) {
    const editInput = ((e) => {
      if (
        (e == null ? undefined : e.enable) === true &&
        typeof e.editFromMaterialIdx === "number"
      ) {
        return n._(
          {
            enable: true,
            editFromMaterialIdx: e.editFromMaterialIdx,
          },
          typeof e.startTimestampMs === "number"
            ? {
                startTimestampMs: Number(e.startTimestampMs),
              }
            : {},
          typeof e.endTimestampMs === "number"
            ? {
                endTimestampMs: Number(e.endTimestampMs),
              }
            : {},
        );
      }
    })(e.editInput);
    return {
      materialList: e.materialList.map((e) => F9(e, t)),
      metaList: e.metaList.map((e) => ({
        metaType: m(e.metaType),
        text: e.text,
        materialRef: e.materialRef
          ? {
              materialIdx: e.materialRef.materialIdx,
              sourceInfo: e.materialRef.sourceInfo
                ? {
                    sourceMaterialIdx: Number(
                      e.materialRef.sourceInfo.sourceMaterialIdx,
                    ),
                    timestampMs: Number(e.materialRef.sourceInfo.timestampMs),
                  }
                : undefined,
            }
          : undefined,
      })),
      editInput,
      extendInput: editInput
        ? undefined
        : ((e) => {
            if (
              (e == null ? undefined : e.enable) === true &&
              typeof e.extendFromMaterialIdx === "number"
            ) {
              return {
                enable: true,
                extendFromMaterialIdx: e.extendFromMaterialIdx,
              };
            }
          })(e.extendInput),
    };
  }
}
