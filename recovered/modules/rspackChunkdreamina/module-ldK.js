import n from "dTA";
import i from "pHz";
export function t(e) {
  const { containerService, resourcePositionService, action } = e;
  const { material, activityId, planId, planName } = resourcePositionService;
  n.jA(containerService, {
    action,
    pageFrom: "vip_pay_cancel_popup",
    pageShape: "popup",
    page: "vip_popup",
    resourceKey: i.vt,
    activityId,
    deeplink:
      (material == null ? undefined : material.deeplink) ||
      (material == null ? undefined : material.jumpSchema),
    planId: planId === "" ? undefined : planId,
    planName: planName || undefined,
  });
}
