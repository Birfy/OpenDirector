import n from "oa";
import r from "fF";
import a from "L6W";
const o = {
  [r.AZ.Image]: "dreamina_image_commercial_wrapper",
  [r.AZ.Video]: "dreamina_video_commercial_wrapper",
  [r.AZ.Audio]: "dreamina_audio_commercial_wrapper",
  [r.AZ.Music]: "dreamina_music_commercial_wrapper",
  [r.AZ.Utility]: "dreamina_utility_commercial_wrapper",
};
function s(e) {
  if (typeof e === "number" && Number.isFinite(e)) {
    return e;
  }
}
function l(e) {
  if (typeof e === "string" || typeof e === "boolean") {
    return e;
  }
  return s(e);
}
function c(e) {
  if (typeof e === "string") {
    return e;
  }
}
function u(e) {
  if (typeof e === "boolean") {
    return e;
  }
}
function d(e) {
  return Object.fromEntries(
    Object.entries(e).filter((e) => {
      var [, t] = e;
      return t !== undefined;
    }),
  );
}
function M(e) {
  let t;
  const { sceneOptions, batchNumber, extraBenefits, discount } = e;
  const benefitAmount = ((e) => {
    let t;
    let i;
    switch (e.type) {
      case r.AZ.Video:
        return a.Ld(e);
      case r.AZ.Audio:
        return e.benefitAmount;
      case r.AZ.Music:
        if ((t = e.benefitAmount) != null) {
          return t;
        }
        return r.Jl;
      case r.AZ.Image:
        if ((i = e.benefitCount) != null) {
          return i;
        }
        return 1;
      case r.AZ.Utility:
        return 1;
    }
  })(sceneOptions);
  const m =
    "batchNumber" in sceneOptions &&
    typeof sceneOptions.batchNumber === "number"
      ? sceneOptions.batchNumber
      : undefined;
  const j = {
    benefitAmount,
    outputCount: (t = batchNumber != null ? batchNumber : m) != null ? t : 1,
    extraBenefits: ((e) => {
      if (e) {
        return e.filter((e) => typeof e === "string");
      }
    })(extraBenefits),
    discount: s(discount),
  };
  return {
    scene: sceneOptions.scene,
    source: o[sceneOptions.type],
    options: d(
      n._(
        {},
        ((e) => {
          let t;
          let i;
          let abilityList;
          let a;
          let materialTypes;
          let M;
          let benefitTriplets;
          switch (e.type) {
            case r.AZ.Image:
              abilityList =
                (i = e.abilityList) == null
                  ? undefined
                  : i.map((e) => {
                      var t = l(
                        "controlNet" in e && e.controlNet
                          ? e.controlNet.name
                          : undefined,
                      );
                      return d({
                        abilityName: l(e.abilityName),
                        controlNet:
                          t === undefined
                            ? undefined
                            : {
                                name: t,
                              },
                      });
                    });
              return d({
                type: e.type,
                modelReqKey: l(e.modelReqKey),
                modelSwitchSource: l(e.modelSwitchSource),
                generateType: l(e.generateType),
                resolutionType: l(e.resolutionType),
                imageInputNum: s(e.imageInputNum),
                referenceCount:
                  (t = s(e.imageInputNum)) != null
                    ? t
                    : abilityList == null
                      ? undefined
                      : abilityList.length,
                isRegenerate: u(e.isRegenerate),
                proHDResolutionType: l(e.proHDResolutionType),
                benefitCount: s(e.benefitCount),
                batchNumber: s(e.batchNumber),
                abilityList,
              });
            case r.AZ.Video:
              materialTypes =
                (a = e.materialTypes) == null
                  ? undefined
                  : a.map((e) => l(e)).filter((e) => e !== undefined);
              return d({
                type: e.type,
                modelReqKey: l(e.modelReqKey),
                videoMode: l(e.videoMode),
                videoDuration: s(e.videoDuration),
                inputVideoDuration: s(e.inputVideoDuration),
                isRegenerate: u(e.isRegenerate),
                resolution: l(e.resolution),
                lensRecipe: l(e.lensRecipe),
                materialTypes,
                batchNumber: s(e.batchNumber),
                useSeedanceFast5sFreeTrial: u(e.useSeedanceFast5sFreeTrial),
                isLongVideo: u(e.isLongVideo),
                chargeInputVideoDuration: u(e.chargeInputVideoDuration),
                hasInputVideo: u(e.hasInputVideo),
                durationSeconds: s(e.videoDuration),
                referenceCount:
                  materialTypes == null ? undefined : materialTypes.length,
              });
            case r.AZ.Audio:
            case r.AZ.Music:
              return d({
                type: e.type,
                modelReqKey: l(e.modelReqKey),
                audioDuration: s(e.audioDuration),
                isRegenerate: u(e.isRegenerate),
                durationSeconds: s(e.audioDuration),
              });
            case r.AZ.Utility:
              benefitTriplets =
                (M = e.benefitTriplets) == null
                  ? undefined
                  : M.map((e) =>
                      d({
                        resourceType: c(e.resourceType),
                        resourceId: c(e.resourceId),
                        benefitType: c(e.benefitType),
                      }),
                    );
              return d({
                type: e.type,
                benefitTriplets,
              });
          }
        })(sceneOptions),
        j,
      ),
    ),
  };
}
export { M as n };
