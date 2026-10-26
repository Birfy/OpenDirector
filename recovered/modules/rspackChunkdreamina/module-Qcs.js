import i from "Ut";
import r from "Dm";
import n from "VH";
import o from "Hp";
import s from "xH6";
import { L } from "./module-Ymr.js";
function d() {
  return {
    imageUri: "",
  };
}
export function B(e) {
  const {
    currentAbilities,
    candidateAbilities,
    models,
    standaloneAbilities = [s.gP.ByteEdit, s.gP.IpKeep],
  } = e;
  return candidateAbilities.some((e) => {
    if (standaloneAbilities.includes(e) && currentAbilities.length) {
      return false;
    }
    var a;
    var m = [
      ...currentAbilities,
      {
        id: "",
        coverUrl: "",
        blendModel:
          e === s.gP.ByteEdit
            ? {
                abilityName: i.DABlendAbilityName.ByteEdit,
                source: d(),
              }
            : e === s.gP.BgPaint
              ? {
                  abilityName: i.DABlendAbilityName.BgPaint,
                  originImage: d(),
                  originMask: d(),
                  extra: {
                    moveX: 0,
                    moveY: 0,
                    scale: 0,
                    rotate: 0,
                  },
                }
              : e === s.gP.ControlNetCanny
                ? {
                    abilityName: i.DABlendAbilityName.ControlNet,
                    controlNet: {
                      name: n._.Canny,
                      strength: 0,
                      canny: {
                        previewImage: d(),
                        originImage: d(),
                        image: d(),
                      },
                    },
                    extra: {
                      name: n._.Canny,
                      fitMode: o.j.AdaptToCanvas,
                      imageIndex: 0,
                    },
                  }
                : e === s.gP.ControlNetDepth
                  ? {
                      abilityName: i.DABlendAbilityName.ControlNet,
                      controlNet: {
                        name: n._.Depth,
                        strength: 0,
                        depth: {
                          previewImage: d(),
                          originImage: d(),
                          image: d(),
                        },
                      },
                      extra: {
                        name: n._.Depth,
                        fitMode: o.j.AdaptToCanvas,
                        imageIndex: 0,
                      },
                    }
                  : e === s.gP.ControlNetPose
                    ? {
                        abilityName: i.DABlendAbilityName.ControlNet,
                        controlNet: {
                          name: n._.Pose,
                          strength: 0,
                          pose: {
                            previewImage: d(),
                            originImage: d(),
                            image: d(),
                          },
                        },
                        extra: {
                          name: n._.Pose,
                          fitMode: o.j.AdaptToCanvas,
                          imageIndex: 0,
                        },
                      }
                    : e === s.gP.FaceGan
                      ? {
                          abilityName: i.DABlendAbilityName.FaceGan,
                          source: d(),
                          faceData: [],
                        }
                      : e === s.gP.IpKeep
                        ? {
                            abilityName: i.DABlendAbilityName.IpKeep,
                            source: d(),
                            ipData: [],
                          }
                        : e === s.gP.StyleReference
                          ? {
                              abilityName: i.DABlendAbilityName.StyleReference,
                              styleReference: {
                                image: d(),
                                styleWeight: 0,
                              },
                            }
                          : e === s.gP.StyleCode
                            ? {
                                abilityName: i.DABlendAbilityName.StyleCode,
                                code: "",
                              }
                            : void r.Iv("not implemented mock ability"),
      },
    ];
    var u = models.some((e) => L(e, m));
    if (e === s.gP.FaceGan) {
      var h = currentAbilities.filter(
        (e) => e.blendModel.abilityName === i.DABlendAbilityName.FaceGan,
      );
      return u && h.length < 2;
    }
    if (e === s.gP.StyleReference) {
      var p = currentAbilities.filter(
        (e) => e.blendModel.abilityName === i.DABlendAbilityName.StyleReference,
      );
      return u && p.length < 5;
    }
    if (e === s.gP.ByteEdit) {
      return u;
    }
    a = {
      [s.gP.ControlNetCanny]: n._.Canny,
      [s.gP.ControlNetDepth]: n._.Depth,
      [s.gP.ControlNetPose]: n._.Pose,
      [s.gP.ByteEdit]: i.DABlendAbilityName.ByteEdit,
      [s.gP.FaceGan]: i.DABlendAbilityName.FaceGan,
      [s.gP.BgPaint]: i.DABlendAbilityName.BgPaint,
      [s.gP.IpKeep]: i.DABlendAbilityName.IpKeep,
      [s.gP.StyleReference]: i.DABlendAbilityName.StyleReference,
      [s.gP.StyleCode]: i.DABlendAbilityName.StyleCode,
    };
    return (
      ([
        s.gP.ControlNetCanny,
        s.gP.ControlNetDepth,
        s.gP.ControlNetPose,
      ].includes(e)
        ? !currentAbilities.some(
            (t) =>
              t.blendModel.abilityName === i.DABlendAbilityName.ControlNet &&
              t.blendModel.controlNet.name === a[e],
          )
        : !currentAbilities.find((t) => t.blendModel.abilityName === a[e])) && u
    );
  });
}
