function a(e, t) {
  if (t) {
    const {
      templateId,
      templateTypeId,
      templateFrom,
      impressionId,
      searchRequestId,
      searchId,
      searchKeyword,
      enterScenario,
      drawType,
      templateDuration,
      templatePrompt,
      templateStyleCode,
      referenceTemplateId,
      referenceTemplateCnt,
      referenceCnt,
      enterFrom,
      aiFeatureName,
      toolItemId,
      pluginSource,
      showcaseId,
    } = t;
    const S = {};
    S.drawType = drawType;
    S.enterFrom = enterFrom;
    S.aiFeatureName = aiFeatureName;
    S.toolItemId = toolItemId;
    S.pluginSource = pluginSource;
    S.showcaseId = showcaseId;
    S.templateId = templateId;
    S.templateTypeId = templateTypeId;
    S.templateFrom = templateFrom;
    S.impressionId = impressionId;
    S.searchRequestId = searchRequestId;
    S.searchId = searchId;
    S.searchKeyword = searchKeyword;
    S.enterScenario = enterScenario;
    S.templateDuration = templateDuration;
    S.templatePrompt = templatePrompt;
    S.templateStyleCode = templateStyleCode;
    S.referenceTemplateId = referenceTemplateId;
    S.referenceTemplateCnt = referenceTemplateCnt;
    S.referenceCnt = referenceCnt;
    e.setParams(S);
  }
}
export { a };
