import a from "oa";
import r from "bk";
import { A as A_1 } from "./module-crc_2.js";
import o from "yMd";
import l from "kV9";
import s from "A0";
import c from "dzV";
const u = {
  [o.Mt.Image]: "image",
  [o.Mt.Video]: "video",
  [o.Mt.Audio]: "audio",
};
function d(e) {
  return (e != null ? e : []).map((e) => u[e]).filter((e) => e !== undefined);
}
function m(e) {
  let t;
  const n = d(e.materialTypes);
  if ((t = e.materialTypes) == null || !t.length || n.length !== 0) {
    return a._(
      {
        materialTypes: n,
      },
      typeof e.minTotalCount === "number" && e.minTotalCount > 0
        ? {
            minTotalCount: e.minTotalCount,
          }
        : null,
      typeof e.maxTotalCount === "number"
        ? {
            maxTotalCount: e.maxTotalCount,
          }
        : null,
    );
  }
}
function p(e) {
  return (e != null ? e : []).map(m).filter((e) => e !== undefined);
}
function v(acceptedFileTypes) {
  if (acceptedFileTypes == null ? undefined : acceptedFileTypes.length) {
    return Object.fromEntries(
      acceptedFileTypes.map((e) => [
        e.mimeType,
        e.fileExtensions.map((e) => ".".concat(e)),
      ]),
    );
  }
}
export function A(e) {
  let t;
  let n;
  let m;
  let h;
  let g;
  const materialLimits =
    (t =
      e == null || (n = e.supportedMaterials) == null
        ? undefined
        : n.reduce((acc, item) => {
            var n;
            var u;
            var d;
            var m;
            var p;
            var h;
            var g;
            var f;
            var b;
            var _;
            var y;
            var x;
            var k;
            var C;
            var j;
            var w;
            var M;
            var T;
            var N;
            var R;
            var A;
            var S;
            var F;
            var { limit } = item;
            var maxFileSize =
              typeof limit.maxFileSize === "number"
                ? A_1(limit.maxFileSize)
                : Infinity;
            switch (item.materialType) {
              case o.Mt.Image:
                return r._(a._({}, acc), {
                  image: {
                    minHeight: (n = limit.minHeight) != null ? n : 0,
                    maxHeight: (u = limit.maxHeight) != null ? u : Infinity,
                    minWidth: (d = limit.minWidth) != null ? d : 0,
                    maxWidth: (m = limit.maxWidth) != null ? m : Infinity,
                    minAspectRatio: (p = limit.minAspectRatio) != null ? p : 0,
                    maxAspectRatio:
                      (h = limit.maxAspectRatio) != null ? h : Infinity,
                    minTotalPixels: (g = limit.minTotalPixels) != null ? g : 0,
                    maxTotalPixels:
                      (f = limit.maxTotalPixels) != null ? f : Infinity,
                    maxFileSize,
                    acceptedFileTypes:
                      (b = v(limit.acceptedFileTypes)) != null ? b : l.R,
                  },
                });
              case o.Mt.Video:
                return r._(a._({}, acc), {
                  video: {
                    minHeight: (_ = limit.minHeight) != null ? _ : 0,
                    maxHeight: (y = limit.maxHeight) != null ? y : Infinity,
                    minWidth: (x = limit.minWidth) != null ? x : 0,
                    maxWidth: (k = limit.maxWidth) != null ? k : Infinity,
                    minAspectRatio: (C = limit.minAspectRatio) != null ? C : 0,
                    maxAspectRatio:
                      (j = limit.maxAspectRatio) != null ? j : Infinity,
                    minDuration: (w = limit.minDuration) != null ? w : 0,
                    maxDuration: (M = limit.maxDuration) != null ? M : Infinity,
                    minTotalPixels: (T = limit.minTotalPixels) != null ? T : 0,
                    maxTotalPixels:
                      (N = limit.maxTotalPixels) != null ? N : Infinity,
                    maxFileSize,
                    acceptedFileTypes:
                      (R = v(limit.acceptedFileTypes)) != null ? R : s.P,
                  },
                });
              case o.Mt.Audio:
                return r._(a._({}, acc), {
                  audio: {
                    minDuration: (A = limit.minDuration) != null ? A : 0,
                    maxDuration: (S = limit.maxDuration) != null ? S : Infinity,
                    maxFileSize,
                    acceptedFileTypes:
                      (F = v(limit.acceptedFileTypes)) != null ? F : c.M,
                  },
                });
              default:
                return acc;
            }
          }, {})) != null
      ? t
      : {};
  return {
    materialLimits,
    materialCombinationRule: ((e) => {
      const allOfConditions = [];
      if (e) {
        var n;
        var a;
        let r;
        const i = new Map();
        for (const o of (r = e.supportedMaterials) != null ? r : []) {
          const l = u[o.materialType];
          if (l) {
            i.set(l, o.limit.maxCount);
          }
        }
        for (const s of ["image", "video", "audio"]) {
          const maxTotalCount = i.get(s);
          if (typeof maxTotalCount === "number") {
            allOfConditions.push({
              materialTypes: [s],
              maxTotalCount,
            });
          }
        }
      }
      const m = e == null ? undefined : e.materialCombinationRule;
      allOfConditions.push(...p(m == null ? undefined : m.allOfConditions));
      const v = d(
        e == null || (a = e.requiredMaterialTypes) == null
          ? undefined
          : a.anyOf,
      );
      if (v.length > 0) {
        allOfConditions.push({
          materialTypes: v,
          minTotalCount: 1,
        });
      }
      if (typeof (e == null ? undefined : e.maxTotalCount) === "number") {
        allOfConditions.push({
          materialTypes: [],
          maxTotalCount: e.maxTotalCount,
        });
      }
      if (
        typeof (e == null ? undefined : e.maxTotalVideoDuration) === "number"
      ) {
        allOfConditions.push({
          materialTypes: ["video"],
          maxTotalDuration: e.maxTotalVideoDuration,
        });
      }
      if (
        typeof (e == null ? undefined : e.maxTotalAudioDuration) === "number"
      ) {
        allOfConditions.push({
          materialTypes: ["audio"],
          maxTotalDuration: e.maxTotalAudioDuration,
        });
      }
      const anyOfCombinations = (
        (n = m == null ? undefined : m.anyOfCombinations) != null ? n : []
      ).map((e) => ({
        conditions: p(e.conditions),
      }));
      if (anyOfCombinations.length !== 0 || allOfConditions.length !== 0) {
        return {
          anyOfCombinations,
          allOfConditions,
        };
      }
    })(e),
    acceptedFileTypes: a._(
      {},
      (m = materialLimits.image) == null ? undefined : m.acceptedFileTypes,
      (h = materialLimits.video) == null ? undefined : h.acceptedFileTypes,
      (g = materialLimits.audio) == null ? undefined : g.acceptedFileTypes,
    ),
  };
}
