export function L(e, t) {
  let i;
  let r;
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
  p.lastPictureId =
    v == null || (n = v.firstFrameImage) == null || (r = n.aigcImage) == null
      ? undefined
      : r.itemId;
  p.lastGenerateId =
    v == null ||
    (l = v.firstFrameImage) == null ||
    (o = l.aigcImage) == null ||
    (a = o.aigcImageParams) == null
      ? undefined
      : a.generateId;
  p.pictureGenerateType =
    v == null ||
    (d = v.firstFrameImage) == null ||
    (u = d.aigcImage) == null ||
    (s = u.aigcImageParams) == null
      ? undefined
      : s.generateType;
  p.lastItemId =
    (m = t.refInfo) == null || (c = m.refRecordInfo) == null
      ? undefined
      : c.refItemId;
  p.originItemId = t.taskExtra.originId;
  e.setParams(p);
}
