export function j(e, t) {
  const i = {};
  const { modelInfo } = t;
  if (modelInfo) {
    i.modelName = modelInfo.modelName;
    i.modelKey = modelInfo.modelReqKey;
    e.setParams(i);
  }
}
