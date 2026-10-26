import a from "Ut";
export function J(e, t) {
  let i;
  let n;
  let r;
  let o;
  let l;
  let d;
  let u;
  let s;
  let c;
  let m;
  const v = {};
  const p = (i = t.originalInput) == null ? undefined : i.videoGenInputs[0];
  if (p) {
    const { v2vOpt, i2vOpt } = p;
    v.isVoiceClone = +(
      ((v2vOpt == null ||
      (o = v2vOpt.lipSyncUserVideo) == null ||
      (r = o.voiceInfo) == null ||
      (n = r.idInfo) == null
        ? undefined
        : n.itemPlatform) ||
        (i2vOpt == null ||
        (u = i2vOpt.realmanAvatar) == null ||
        (d = u.voiceInfo) == null ||
        (l = d.idInfo) == null
          ? undefined
          : l.itemPlatform) ||
        (v2vOpt == null ||
        (m = v2vOpt.lipSync) == null ||
        (c = m.voiceInfo) == null ||
        (s = c.idInfo) == null
          ? undefined
          : s.itemPlatform)) === a.CommonItemPlatform.Local
    );
    e.setParams(v);
  }
}
