export function p(e) {
  if (!e) {
    return {};
  }
  const t = {};
  if (e.baseModelId) {
    t.baseModelId = e.baseModelId;
  }
  if (e.baseModelName) {
    t.baseModelName = e.baseModelName;
  }
  if (e.isDeepCreation !== undefined) {
    t.isDeepCreation = e.isDeepCreation;
  }
  return t;
}
export function o(e, t) {
  e.setParams(p(t));
}
