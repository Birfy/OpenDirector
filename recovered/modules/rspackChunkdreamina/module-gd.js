const r = ["video", "image"];
export var gs = (e) => {
  var { actWorkTypeList, actVersion = 1 } = e;
  return actVersion === 1 && actWorkTypeList.every((e) => r.includes(e));
};
