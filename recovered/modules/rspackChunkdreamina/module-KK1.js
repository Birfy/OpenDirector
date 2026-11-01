import i from "Ut";
import r from "yMd";
import a from "Gr4";
import o from "gu";
import l from "L6W";
import { v as v_1 } from "./module-LD_2.js";
import { RE, pH } from "./module-j67.js";
function d(e) {
  if (typeof e === "number" && Number.isFinite(e) && e > 0) {
    return e;
  }
}
function c(e) {
  let t;
  const n = e == null ? undefined : e.unifiedEditInput;
  const i = n == null ? undefined : n.editInput;
  if (n && (i == null ? undefined : i.enable) === true) {
    const r = n.materialList[i.editFromMaterialIdx];
    if ((r == null ? undefined : r.materialType) === "video") {
      const a = d((t = r.videoInfo) == null ? undefined : t.duration);
      if (a) {
        const { startTimestampMs, endTimestampMs } = i;
        if (
          typeof startTimestampMs === "number" &&
          typeof endTimestampMs === "number" &&
          startTimestampMs >= 0 &&
          endTimestampMs > startTimestampMs &&
          endTimestampMs <= 1000 * a
        ) {
          return (endTimestampMs - startTimestampMs) / 1000;
        }
        return a;
      }
    }
  }
}
export function Z(e, t) {
  let n;
  let m;
  let v;
  let p;
  let g;
  let f;
  let h;
  let _;
  let y;
  let b;
  let A;
  let x;
  let T;
  let I;
  let w;
  let C;
  let S;
  let k;
  let N;
  let F;
  let R;
  let M;
  let E;
  const D = e.input.videoGenInputs[0];
  m = [];
  if (D == null ? undefined : D.firstFrameImage) {
    m.push(r.Mt.Image);
  }
  if (D == null ? undefined : D.endFrameImage) {
    m.push(r.Mt.Image);
  }
  if (!(D == null || (n = D.multiFrames) == null)) {
    n.forEach((e) => {
      var t;
      var n;
      if (
        ((t = e.mediaInfo) == null ? undefined : t.mediaType) ===
        i.DAMediaType.Image
      ) {
        m.push(r.Mt.Image);
      }
      if (
        ((n = e.mediaInfo) == null ? undefined : n.mediaType) ===
        i.DAMediaType.Video
      ) {
        m.push(r.Mt.Video);
      }
    });
  }
  [
    D == null || (v = D.unifiedEditInput) == null ? undefined : v.materialList,
    D == null || (p = D.longVideoInput) == null ? undefined : p.materialList,
  ]
    .flatMap((e) => {
      if (e != null) {
        return e;
      }
      return [];
    })
    .forEach((e) => {
      var t = RE(e);
      if (t !== r.Mt.Unknown) {
        m.push(t);
      }
    });
  const materialTypes = m;
  const j = ((e) => {
    if (!e) {
      return {};
    }
    const t = JSON.parse(e);
    if (Array.isArray(t)) {
      return Object.assign({}, ...t);
    }
    return t;
  })(
    (M = e.taskPayload) == null || (R = M.taskExtra) == null
      ? undefined
      : R.sceneOptions,
  );
  const V = D == null ? undefined : D.durationMs;
  const videoDuration =
    typeof V === "number" && V > 0
      ? V / 1000
      : (C = (S = d(e.completedVideoDuration)) != null ? S : c(D)) != null
        ? C
        : 0;
  const resolution =
    (k =
      (N = t == null ? undefined : t.resolution) != null
        ? N
        : D == null
          ? undefined
          : D.resolution) != null
      ? k
      : j.resolution;
  const chargeInputVideoDuration =
    (F = t == null ? undefined : t.chargeInputVideoDuration) != null
      ? F
      : j.chargeInputVideoDuration === true;
  return a.I({
    scene: o.Sk.BasicVideoGenerateButton,
    videoDuration,
    chargeInputVideoDuration,
    inputVideoDuration: chargeInputVideoDuration
      ? ((A =
          (g =
            D == null || (f = D.longVideoInput) == null
              ? undefined
              : f.materialList) != null
            ? g
            : D == null || (h = D.unifiedEditInput) == null
              ? undefined
              : h.materialList),
        (x = (
          D == null ||
          (y = D.unifiedEditInput) == null ||
          (_ = y.editInput) == null
            ? undefined
            : _.enable
        )
          ? D.unifiedEditInput.editInput.editFromMaterialIdx
          : undefined),
        (T = (D == null ? undefined : D.longVideoInput) ? undefined : c(D)),
        (I =
          A == null
            ? undefined
            : A.reduce(
                (acc, item, index) =>
                  acc + (index === x && T !== undefined ? T : pH(item)),
                0,
              )),
        (w =
          D == null || (b = D.multiFrames) == null
            ? undefined
            : b.reduce((acc, item) => {
                var n;
                var r;
                var a;
                var o;
                if (
                  ((a = item.mediaInfo) == null ? undefined : a.mediaType) ===
                  i.DAMediaType.Video
                ) {
                  return (
                    acc +
                    ((n =
                      (r = item.mediaInfo.videoInfo.duration) != null
                        ? r
                        : (o = item.mediaInfo.videoInfo.originVideo) == null
                          ? undefined
                          : o.duration) != null
                      ? n
                      : 0)
                  );
                }
                return acc;
              }, 0)),
        I === undefined && w === undefined
          ? undefined
          : (I != null ? I : 0) + (w != null ? w : 0))
      : undefined,
    modelReqKey: e.input.modelReqKey,
    lensRecipe:
      D == null || (E = D.lensRecipeInput) == null
        ? undefined
        : E.lensRecipeKey,
    materialTypes,
    isLongVideo: !!(D == null ? undefined : D.longVideoInput),
    hasInputVideo: l.$t(materialTypes),
    resolution,
    batchNumber: t == null ? undefined : t.batchNumber,
    isRegenerate: e.isRegenerate,
    useSeedanceFast5sFreeTrial: v_1({
      modelReqKey: e.input.modelReqKey,
      resolution,
      videoDuration,
    }),
  });
}
