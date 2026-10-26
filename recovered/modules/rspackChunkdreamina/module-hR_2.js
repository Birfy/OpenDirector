import n from "dTA";
import i from "TFP";
export function R(e) {
  const { containerService, resourcePositionService, action } = e;
  const { material, activityId, planId, planName } = resourcePositionService;
  n.jA(containerService, {
    action,
    pageFrom: "vip_page_leave_popup",
    pageShape: "popup",
    page: "vip_popup",
    resourceKey: i.TP,
    activityId,
    deeplink:
      (material == null ? undefined : material.deeplink) ||
      (material == null ? undefined : material.jumpSchema),
    planId: planId === "" ? undefined : planId,
    planName: planName || undefined,
  });
}
