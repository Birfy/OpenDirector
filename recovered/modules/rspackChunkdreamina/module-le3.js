import r from "Ut";
import * as n from "./module-Wzf_2.js";
function a(e) {
  return e.processFlows.flatMap((e) => e.curProcessFlows);
}
export function hn(e) {
  const t = e == null ? undefined : e.maxDurationSeconds;
  if (typeof t === "number" && Number.isFinite(t) && t > 0) {
    return t;
  }
  return n.TH;
}
export function Jz(e) {
  const maxDurationSeconds =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : n.TH;
  if (
    e.duration >
    hn({
      maxDurationSeconds,
    })
  ) {
    return {
      eligible: false,
      reason: "duration_too_long",
    };
  }
  if (
    !((e, t) => {
      if (e <= 0 || t <= 0) {
        return false;
      }
      const i = Math.min(e, t);
      const r = Math.max(e, t);
      return i >= n.IP || r >= n.q;
    })(e.width, e.height)
  ) {
    if (
      !((e, t) => {
        if (e <= 0 || t <= 0) {
          return true;
        }
        const i = Math.min(e, t);
        const r = Math.max(e, t);
        return i >= n.YA || r >= n.e7;
      })(e.width, e.height)
    ) {
      return {
        eligible: true,
      };
    }
    return {
      eligible: false,
      reason: "size_too_large",
    };
  }
  return {
    eligible: false,
    reason: "source_reached_4k",
  };
}
export function cT(e) {
  let t;
  let i;
  let o;
  let l;
  let d;
  let c;
  const u =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : n.TH;
  if (a(e).includes(r.DAVideoProcessType.InsertFrame)) {
    return {
      eligible: false,
      reason: "frame_interpolated",
    };
  }
  const h = Jz(
    {
      width:
        (t = (l = e.originVideo) == null ? undefined : l.width) != null ? t : 0,
      height:
        (i = (d = e.originVideo) == null ? undefined : d.height) != null
          ? i
          : 0,
      duration:
        (o = (c = e.video) == null ? undefined : c.duration) != null
          ? o
          : e.videoDuration,
    },
    u,
  );
  if (h.eligible) {
    if (a(e).includes(r.DAVideoProcessType.SR)) {
      return {
        eligible: false,
        reason: "already_super_resolution",
      };
    }
    return {
      eligible: true,
    };
  }
  return h;
}
