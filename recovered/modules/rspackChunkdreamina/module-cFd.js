import r from "Ut";
export function J(e, t) {
  const i = {};
  if (t && t.length !== 0) {
    const n = [];
    const a = {
      [r.DABlendAbilityName.ByteEdit]: "byte_edit",
      [r.DABlendAbilityName.BgPaint]: "bg_paint",
      [r.DABlendAbilityName.FaceGan]: "face_gan",
      [r.DABlendAbilityName.IpKeep]: "ip_keep",
      [r.DABlendAbilityName.StyleReference]: "style_reference",
      [r.DABlendAbilityName.StyleCode]: "style_reference",
    };
    for (const o of t) {
      let l;
      if (o.abilityName === r.DABlendAbilityName.ControlNet) {
        if (o.extra.name) {
          if (o.extra.name === "canny") {
            l = "canny";
          } else if (o.extra.name === "depth") {
            l = "depth";
          } else if (o.extra.name === "pose") {
            l = "pose";
          }
        }
      } else {
        l = a[o.abilityName];
      }
      if (l) {
        n.push(l);
      }
    }
    if (n.length > 0) {
      i.referenceSet = n.join(",");
    }
    e.setParams(i);
  }
}
