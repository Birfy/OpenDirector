export function j(e, t) {
  const i = {};
  const { videoModelConfig } = t;
  if (videoModelConfig) {
    i.modelName = videoModelConfig.modelName;
    i.modelKey = videoModelConfig.modelReqKey;
    i.modelStarlingKey = videoModelConfig.modelNameStarlingKey;
    e.setParams(i);
  }
}
