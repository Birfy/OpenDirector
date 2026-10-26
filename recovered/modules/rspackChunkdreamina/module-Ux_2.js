export var L = (e) => {
  var { canLowPriceTrial, lowPriceTrialInfo } = e || {};
  var { trialCycle, trialCycleUnit } = lowPriceTrialInfo || {};
  return !!(canLowPriceTrial && Number(trialCycle) > 0 && trialCycleUnit);
};
