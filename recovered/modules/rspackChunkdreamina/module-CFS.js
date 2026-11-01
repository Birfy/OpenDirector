export var U = {
  isVip: false,
  currentVipLevel: "",
  needMinVipLevel: "",
  needVip: false,
  needCredits: 0,
  creditDisplayInfo: {
    actualCredits: 0,
    originalCredits: 0,
    hasDiscount: false,
    isFree: true,
  },
  benefitAmount: 1,
  isInFreemiumStage: false,
  trialInfo: {
    isStrategyFreeTrial: false,
    strategyFreeTrialTimes: 0,
    trialType: require("c3").c.nonTrial,
  },
};
