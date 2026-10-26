import a from "Ut";
export function J(e, t) {
  const i = {};
  if (t && t.length !== 0) {
    const n = [];
    const r = {
      [a.DABlendAbilityName.ByteEdit]: "byte_edit",
      [a.DABlendAbilityName.BgPaint]: "bg_paint",
      [a.DABlendAbilityName.FaceGan]: "face_gan",
      [a.DABlendAbilityName.IpKeep]: "ip_keep",
      [a.DABlendAbilityName.StyleReference]: "style_reference",
      [a.DABlendAbilityName.StyleCode]: "style_reference",
    };
    for (const o of t) {
      let l;
      if (o.abilityName === a.DABlendAbilityName.ControlNet) {
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
        l = r[o.abilityName];
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
