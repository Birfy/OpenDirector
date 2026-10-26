import n from "oa";
import o from "bk";
import { A as A_1 } from "./module-crc.js";
import l from "yMd";
import r from "kV9";
import d from "A0";
import u from "dzV";
const s = {
  [l.Mt.Image]: "image",
  [l.Mt.Video]: "video",
  [l.Mt.Audio]: "audio",
};
function g(e) {
  return (e != null ? e : []).map((e) => s[e]).filter((e) => e !== undefined);
}
function c(e) {
  let i;
  const t = g(e.materialTypes);
  if ((i = e.materialTypes) == null || !i.length || t.length !== 0) {
    return n._(
      {
        materialTypes: t,
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
function m(e) {
  return (e != null ? e : []).map(c).filter((e) => e !== undefined);
}
function f(acceptedFileTypes) {
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
  let i;
  let t;
  let c;
  let v;
  let p;
  const materialLimits =
    (i =
      e == null || (t = e.supportedMaterials) == null
        ? undefined
        : t.reduce((acc, item) => {
            var t;
            var s;
            var g;
            var c;
            var m;
            var v;
            var p;
            var h;
            var _;
            var C;
            var y;
            var M;
            var S;
            var D;
            var b;
            var A;
            var x;
            var T;
            var k;
            var R;
            var V;
            var I;
            var L;
            var { limit } = item;
            var maxFileSize =
              typeof limit.maxFileSize === "number"
                ? A_1(limit.maxFileSize)
                : Infinity;
            switch (item.materialType) {
              case l.Mt.Image:
                return o._(n._({}, acc), {
                  image: {
                    minHeight: (t = limit.minHeight) != null ? t : 0,
                    maxHeight: (s = limit.maxHeight) != null ? s : Infinity,
                    minWidth: (g = limit.minWidth) != null ? g : 0,
                    maxWidth: (c = limit.maxWidth) != null ? c : Infinity,
                    minAspectRatio: (m = limit.minAspectRatio) != null ? m : 0,
                    maxAspectRatio:
                      (v = limit.maxAspectRatio) != null ? v : Infinity,
                    minTotalPixels: (p = limit.minTotalPixels) != null ? p : 0,
                    maxTotalPixels:
                      (h = limit.maxTotalPixels) != null ? h : Infinity,
                    maxFileSize,
                    acceptedFileTypes:
                      (_ = f(limit.acceptedFileTypes)) != null ? _ : r.R,
                  },
                });
              case l.Mt.Video:
                return o._(n._({}, acc), {
                  video: {
                    minHeight: (C = limit.minHeight) != null ? C : 0,
                    maxHeight: (y = limit.maxHeight) != null ? y : Infinity,
                    minWidth: (M = limit.minWidth) != null ? M : 0,
                    maxWidth: (S = limit.maxWidth) != null ? S : Infinity,
                    minAspectRatio: (D = limit.minAspectRatio) != null ? D : 0,
                    maxAspectRatio:
                      (b = limit.maxAspectRatio) != null ? b : Infinity,
                    minDuration: (A = limit.minDuration) != null ? A : 0,
                    maxDuration: (x = limit.maxDuration) != null ? x : Infinity,
                    minTotalPixels: (T = limit.minTotalPixels) != null ? T : 0,
                    maxTotalPixels:
                      (k = limit.maxTotalPixels) != null ? k : Infinity,
                    maxFileSize,
                    acceptedFileTypes:
                      (R = f(limit.acceptedFileTypes)) != null ? R : d.P,
                  },
                });
              case l.Mt.Audio:
                return o._(n._({}, acc), {
                  audio: {
                    minDuration: (V = limit.minDuration) != null ? V : 0,
                    maxDuration: (I = limit.maxDuration) != null ? I : Infinity,
                    maxFileSize,
                    acceptedFileTypes:
                      (L = f(limit.acceptedFileTypes)) != null ? L : u.M,
                  },
                });
              default:
                return acc;
            }
          }, {})) != null
      ? i
      : {};
  return {
    materialLimits,
    materialCombinationRule: ((e) => {
      const allOfConditions = [];
      if (e) {
        var t;
        var n;
        let o;
        const a = new Map();
        for (const l of (o = e.supportedMaterials) != null ? o : []) {
          const r = s[l.materialType];
          if (r) {
            a.set(r, l.limit.maxCount);
          }
        }
        for (const d of ["image", "video", "audio"]) {
          const maxTotalCount = a.get(d);
          if (typeof maxTotalCount === "number") {
            allOfConditions.push({
              materialTypes: [d],
              maxTotalCount,
            });
          }
        }
      }
      const c = e == null ? undefined : e.materialCombinationRule;
      allOfConditions.push(...m(c == null ? undefined : c.allOfConditions));
      const f = g(
        e == null || (n = e.requiredMaterialTypes) == null
          ? undefined
          : n.anyOf,
      );
      if (f.length > 0) {
        allOfConditions.push({
          materialTypes: f,
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
        (t = c == null ? undefined : c.anyOfCombinations) != null ? t : []
      ).map((e) => ({
        conditions: m(e.conditions),
      }));
      if (anyOfCombinations.length !== 0 || allOfConditions.length !== 0) {
        return {
          anyOfCombinations,
          allOfConditions,
        };
      }
    })(e),
    acceptedFileTypes: n._(
      {},
      (c = materialLimits.image) == null ? undefined : c.acceptedFileTypes,
      (v = materialLimits.video) == null ? undefined : v.acceptedFileTypes,
      (p = materialLimits.audio) == null ? undefined : p.acceptedFileTypes,
    ),
  };
}
