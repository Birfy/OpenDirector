import s from "TC6";
export function T(t) {
  if (!("metricsExtra" in t)) {
    return null;
  }
  const { metricsExtra } = t;
  if (!metricsExtra) {
    return null;
  }
  const i = s.A(metricsExtra, [
    "drawType",
    "enterFrom",
    "enterScenario",
    "impressionId",
    "lastGenerateId",
    "lastPictureId",
    "promptSource",
    "referenceCnt",
    "referenceTemplateCnt",
    "referenceTemplateId",
    "replyMessageId",
    "searchId",
    "searchKeyword",
    "searchRequestId",
    "templateDuration",
    "templateFrom",
    "templateId",
    "templatePrompt",
    "templateStyleCode",
    "templateTypeId",
  ]);
  if (metricsExtra.promptSource !== undefined) {
    const { promptSource } = metricsExtra;
    switch (promptSource) {
      case "agent":
        i.promptSource = "agent";
        break;
      case "template":
        i.promptSource = "template";
        break;
      case "template_edit":
        i.promptSource = "template_edit";
        break;
      default:
        i.promptSource = "custom";
    }
  }
  return i;
}
