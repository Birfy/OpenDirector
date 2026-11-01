export var g = (e) => {
  if ((e == null ? undefined : e.priceType) === "un-auto") {
    return false;
  }
  var { secondPromoteInfo, promoteType } = e || {};
  var { introPeriod, introCycleUnit } = secondPromoteInfo || {};
  return promoteType === "intro" || typeof introPeriod === "number";
};
