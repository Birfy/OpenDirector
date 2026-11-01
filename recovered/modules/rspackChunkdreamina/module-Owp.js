function i(e, t) {
  let n;
  let i;
  let r;
  let a;
  let o;
  let l;
  return (
    e === t ||
    (e && t
      ? ((n = e.upgradeInfo) == null ? undefined : n.upgradeType) ===
          ((i = t.upgradeInfo) == null ? undefined : i.upgradeType) &&
        ((r = e.upgradeInfo) == null ? undefined : r.targetVipLevel) ===
          ((a = t.upgradeInfo) == null ? undefined : a.targetVipLevel) &&
        ((o = e.upgradeInfo) == null
          ? undefined
          : o.accelerationPackageType) ===
          ((l = t.upgradeInfo) == null
            ? undefined
            : l.accelerationPackageType) &&
        e.upgradeQueueIdx === t.upgradeQueueIdx &&
        e.upgradeWaitSec === t.upgradeWaitSec &&
        e.upgradeSavedWaitPercent === t.upgradeSavedWaitPercent &&
        e.upgradeAdvancedCount === t.upgradeAdvancedCount &&
        e.upgradeSavedWaitSec === t.upgradeSavedWaitSec
      : e === t)
  );
}
export function NM(e, t) {
  return (
    e === t ||
    (e && t
      ? e.canShowUpgradeInfo === t.canShowUpgradeInfo &&
        i(e.upgradeActualInfo, t.upgradeActualInfo) &&
        i(e.upgradeEstimateInfo, t.upgradeEstimateInfo)
      : e === t)
  );
}
export function oP(e, t) {
  let n;
  let i;
  let r;
  let a;
  let o;
  let l;
  return (
    e === t ||
    (!!e &&
      !!t &&
      e.queueIdx === t.queueIdx &&
      e.priority === t.priority &&
      e.queueStatus === t.queueStatus &&
      e.queueLength === t.queueLength &&
      ((n = e.priorityQueueDisplayThreshold) == null
        ? undefined
        : n.vipQueuingTimeThreshold) ===
        ((i = t.priorityQueueDisplayThreshold) == null
          ? undefined
          : i.vipQueuingTimeThreshold) &&
      ((r = e.priorityQueueDisplayThreshold) == null
        ? undefined
        : r.waitingTimeThreshold) ===
        ((a = t.priorityQueueDisplayThreshold) == null
          ? undefined
          : a.waitingTimeThreshold) &&
      ((o = e.longVideoQueueInfo) === (l = t.longVideoQueueInfo) ||
        (o && l
          ? o.totalSegments === l.totalSegments &&
            o.currentSegmentIndex === l.currentSegmentIndex &&
            o.completedSegments === l.completedSegments &&
            o.currentSegmentStatus === l.currentSegmentStatus &&
            o.currentSegmentForecastGenerateCost ===
              l.currentSegmentForecastGenerateCost &&
            o.currentSegmentQueueIdx === l.currentSegmentQueueIdx
          : o === l)))
  );
}
export function C$(e, t) {
  let n;
  let i;
  let o;
  let l;
  return (
    e === t ||
    (!!e &&
      !!t &&
      oP(e.queueInfo, t.queueInfo) &&
      ((n = e.forecastCostTime) == null
        ? undefined
        : n.forecastGenerateCost) ===
        ((i = t.forecastCostTime) == null
          ? undefined
          : i.forecastGenerateCost) &&
      ((o = e.forecastCostTime) == null ? undefined : o.forecastQueueCost) ===
        ((l = t.forecastCostTime) == null ? undefined : l.forecastQueueCost) &&
      NM(e.queueBenefitInfo, t.queueBenefitInfo))
  );
}
