import r from "Ut";
export function L(e, t) {
  if (t) {
    const { resolutionType, sceneType, originalImageStrength, detailStrength } =
      t;
    const l = {};
    if (resolutionType) {
      l.hdUpscaleTo =
        resolutionType === r.DAImageProHDResolutionType.FourK ? "4K" : "2K";
    }
    if (sceneType) {
      if (sceneType === r.DAImageProHDSceneType.Auto) {
        l.hdUpscaleType = "Auto";
      } else if (sceneType === r.DAImageProHDSceneType.Scene) {
        l.hdUpscaleType = "Scene";
      } else if (sceneType === r.DAImageProHDSceneType.Portrait) {
        l.hdUpscaleType = "Portrait";
      }
    }
    l.hdImagePreservation = originalImageStrength;
    l.hdEnhancementStrength = detailStrength;
    e.setParams(l);
  }
}
