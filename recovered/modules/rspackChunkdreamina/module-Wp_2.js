import r from "Ut";
export function J(e, t) {
  let i;
  let n;
  let a;
  let o;
  let l;
  let s;
  let u;
  let d;
  let c;
  let m;
  const p = {};
  const v = (i = t.originalInput) == null ? undefined : i.videoGenInputs[0];
  if (v) {
    const { v2vOpt, i2vOpt } = v;
    p.isVoiceClone = +(
      ((v2vOpt == null ||
      (o = v2vOpt.lipSyncUserVideo) == null ||
      (a = o.voiceInfo) == null ||
      (n = a.idInfo) == null
        ? undefined
        : n.itemPlatform) ||
        (i2vOpt == null ||
        (u = i2vOpt.realmanAvatar) == null ||
        (s = u.voiceInfo) == null ||
        (l = s.idInfo) == null
          ? undefined
          : l.itemPlatform) ||
        (v2vOpt == null ||
        (m = v2vOpt.lipSync) == null ||
        (c = m.voiceInfo) == null ||
        (d = c.idInfo) == null
          ? undefined
          : d.itemPlatform)) === r.CommonItemPlatform.Local
    );
    e.setParams(p);
  }
}
