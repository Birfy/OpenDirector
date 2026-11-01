export function L(e, t) {
  let i;
  let a;
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
  v.lastPictureId =
    p == null || (n = p.firstFrameImage) == null || (a = n.aigcImage) == null
      ? undefined
      : a.itemId;
  v.lastGenerateId =
    p == null ||
    (l = p.firstFrameImage) == null ||
    (o = l.aigcImage) == null ||
    (r = o.aigcImageParams) == null
      ? undefined
      : r.generateId;
  v.pictureGenerateType =
    p == null ||
    (s = p.firstFrameImage) == null ||
    (u = s.aigcImage) == null ||
    (d = u.aigcImageParams) == null
      ? undefined
      : d.generateType;
  v.lastItemId =
    (m = t.refInfo) == null || (c = m.refRecordInfo) == null
      ? undefined
      : c.refItemId;
  v.originItemId = t.taskExtra.originId;
  e.setParams(v);
}
