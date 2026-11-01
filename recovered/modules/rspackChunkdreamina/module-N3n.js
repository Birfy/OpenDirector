export function v(e, t) {
  let r;
  let i;
  let s;
  let a;
  let n;
  let o;
  let l;
  const d = {};
  d.userMessageId =
    (r = (a = t.metricsExtra) == null ? undefined : a.userMessageId) != null
      ? r
      : "";
  d.prompt =
    (i = (n = t.metricsExtra) == null ? undefined : n.prompt) != null ? i : "";
  d.isAddImage =
    (s = (o = t.metricsExtra) == null ? undefined : o.isAddImage) != null
      ? s
      : 0;
  d.projectId = (l = t.idModel) == null ? undefined : l.projectId;
  d.conversationId = t.conversationId;
  e.setParams(d);
}
