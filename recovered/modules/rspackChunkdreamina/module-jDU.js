import i from "bT";
import r from "j6i";
export var l = (e) => {
  var {
    scene,
    modelReqKey,
    abilityList,
    generateType,
    resolutionType,
    imageInputNum,
    reportParams,
    benefitCount,
  } = e;
  var c = i.useMemo(
    () => ({
      scene,
      modelReqKey,
      abilityList,
      generateType,
      resolutionType,
      imageInputNum,
      reportParams,
      benefitCount,
    }),
    [
      scene,
      modelReqKey,
      abilityList,
      generateType,
      resolutionType,
      imageInputNum,
      reportParams,
      benefitCount,
    ],
  );
  return i.useMemo(() => r.O(c), [c]);
};
