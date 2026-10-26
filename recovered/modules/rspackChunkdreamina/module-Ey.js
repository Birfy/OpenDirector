export function y(e, t) {
  let i;
  let r;
  let n;
  let a;
  let o;
  let l;
  let s;
  const u = {};
  const d = (i = t.originalInput) == null ? undefined : i.videoGenInputs[0];
  if (
    d == null ||
    (o = d.v2vOpt) == null ||
    (a = o.videoTemplate) == null ||
    (n = a.videoTemplateItem) == null ||
    (r = n.extra) == null
      ? undefined
      : r.videoTemplateOfficial
  ) {
    const { videoTemplateItem } = d.v2vOpt.videoTemplate;
    u.videoActionTemplateId =
      (l = videoTemplateItem.commonAttr) == null ? undefined : l.id;
    u.videoActionTemplateName =
      (s = videoTemplateItem.commonAttr) == null ? undefined : s.title;
    e.setParams(u);
  }
}
