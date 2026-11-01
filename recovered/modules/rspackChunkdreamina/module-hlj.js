import t from "oa";
import n from "bk";
import i from "j67";
import r from "yMd";
import o from "Gr4";
import l from "gu";
import s from "L6W";
import d from "fRi";
import c from "Sg";
import m from "ft";
import p from "gG";
import { vG } from "./module-pDk_2.js";
function F(e, modelReqKey, a, t) {
  let n;
  let d;
  let c;
  let m;
  const materialTypes = a
    ? a.materialList.map(i.RE).filter((e) => e !== r.Mt.Unknown)
    : [r.Mt.Video];
  const inputVideoDuration = a
    ? ((n = e.duration),
      (m =
        (d = (c = a.editInput) == null ? undefined : c.editFromMaterialIdx) !=
        null
          ? d
          : 0),
      a.materialList.reduce((acc, item, index) => {
        if (index === m && item.materialType === "video") {
          return acc + n;
        }
        return acc + i.pH(item);
      }, 0))
    : e.duration;
  return o.I({
    scene: l.Sk.VideoEdit,
    videoDuration: e.duration,
    inputVideoDuration,
    materialTypes,
    chargeInputVideoDuration:
      (t == null ? undefined : t.chargeInputVideoDuration) === true,
    hasInputVideo: s.$t(materialTypes),
    modelReqKey,
    resolution: e.resolution,
    reportParams: {
      enterSource: e.enterSource,
    },
  });
}
export function wn(e, u, a, t) {
  let n;
  let i;
  let r;
  let o;
  let l;
  let s;
  let p;
  o =
    (r = (n = e.originalInput) == null ? undefined : n.videoGenInputs[0]) ==
    null
      ? undefined
      : r.durationMs;
  l = (i = e.video) == null ? undefined : i.duration;
  const v =
    (Number.isFinite(e.videoDuration) && e.videoDuration > 0
      ? e.videoDuration
      : 0) ||
    (typeof l === "number" && Number.isFinite(l) && l > 0 ? l : 0) ||
    (typeof o === "number" && Number.isFinite(o) && o > 0 ? o / 1000 : 0);
  const duration =
    (s = t == null ? undefined : t.clipDuration) != null
      ? s
      : typeof v === "number"
        ? v
        : 0;
  let resolution = d.Xd(e);
  if (
    (t == null || (p = t.modelConfig) == null ? undefined : p.isDraft) &&
    t.clipDuration === undefined
  ) {
    resolution = c.xH;
  }
  return F(
    {
      duration,
      resolution,
      enterSource: m.k.GenerateTaskHoverToolBar,
    },
    u,
    a,
    t,
  );
}
export function AB(e, u, a, t) {
  let n;
  return F(
    {
      duration:
        (n = t == null ? undefined : t.clipDuration) != null ? n : e.duration,
      resolution: e.resolution,
      enterSource: m.k.Generate,
    },
    u,
    a,
    t,
  );
}
export function BG(e, u) {
  if (e) {
    return n._(t._({}, e), {
      inputVideoDuration: u != null ? u : 0,
      hasInputVideo: true,
      materialTypes: [r.Mt.Video],
    });
  }
}
export function $f(e, u, a) {
  if (e) {
    let o;
    let l;
    const d = [...((o = e.materialTypes) != null ? o : [])];
    let c = u.reduce(
      (acc, item) => {
        var a;
        var t = ((e) => {
          switch (e.type) {
            case "image":
              return r.Mt.Image;
            case "video":
              return r.Mt.Video;
            case "audio":
              return r.Mt.Audio;
            default:
              return r.Mt.Unknown;
          }
        })(item);
        if (t !== r.Mt.Unknown) {
          d.push(t);
        }
        if (item.type === "video") {
          return acc + ((a = vG(item)) != null ? a : 0);
        }
        return acc;
      },
      (l = e.inputVideoDuration) != null ? l : 0,
    );
    const m = new Set();
    for (const F of a) {
      if (F.type === "subject") {
        const A = p.K(F.subject);
        if (!m.has(A)) {
          m.add(A);
          d.push(i.Ye(F.subject));
          c += i.io(F.subject);
        }
      }
    }
    return n._(t._({}, e), {
      inputVideoDuration: c,
      hasInputVideo: s.$t(d),
      materialTypes: d.length ? d : undefined,
    });
  }
}
