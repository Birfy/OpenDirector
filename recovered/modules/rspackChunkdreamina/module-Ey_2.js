export function y(e, t) {
  let i;
  let a;
  let n;
  let r;
  let o;
  let l;
  let d;
  const u = {};
  const s = (i = t.originalInput) == null ? undefined : i.videoGenInputs[0];
  if (
    s == null ||
    (o = s.v2vOpt) == null ||
    (r = o.videoTemplate) == null ||
    (n = r.videoTemplateItem) == null ||
    (a = n.extra) == null
      ? undefined
      : a.videoTemplateOfficial
  ) {
    const { videoTemplateItem } = s.v2vOpt.videoTemplate;
    u.videoActionTemplateId =
      (l = videoTemplateItem.commonAttr) == null ? undefined : l.id;
    u.videoActionTemplateName =
      (d = videoTemplateItem.commonAttr) == null ? undefined : d.title;
    e.setParams(u);
  }
}
