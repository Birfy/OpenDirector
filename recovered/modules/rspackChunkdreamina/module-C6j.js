import i from "Ut";
import r from "VH";
import n from "xH6";
export function G(e) {
  const t = {
    [i.DABlendAbilityName.ByteEdit]: n.gP.ByteEdit,
    [i.DABlendAbilityName.FaceGan]: n.gP.FaceGan,
    [i.DABlendAbilityName.BgPaint]: n.gP.BgPaint,
    [i.DABlendAbilityName.IpKeep]: n.gP.IpKeep,
    [i.DABlendAbilityName.Unknown]: n.gP.Unknown,
    [i.DABlendAbilityName.ControlNet]: n.gP.ControlNet,
    [i.DABlendAbilityName.StyleReference]: n.gP.StyleReference,
    [i.DABlendAbilityName.StyleCode]: n.gP.StyleCode,
    [i.DABlendAbilityName.T2I]: n.gP.T2I,
    [i.DABlendAbilityName.I2I]: n.gP.I2I,
  }[e.abilityName];
  if (t === n.gP.ControlNet) {
    if (e.controlNet.name === r._.Canny) {
      return n.gP.ControlNetCanny;
    }
    if (e.controlNet.name === r._.Depth) {
      return n.gP.ControlNetDepth;
    }
    if (e.controlNet.name === r._.Pose) {
      return n.gP.ControlNetPose;
    }
  }
  return t;
}
