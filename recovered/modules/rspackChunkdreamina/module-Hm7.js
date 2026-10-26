import r from "oa";
import a from "SR";
import n from "Rb";
import o from "UgR";
import s from "L4";
import d from "IO9";
export function I(e, t, i) {
  const {
    submitId,
    messageId,
    conversationId,
    text = "",
    files = [],
    referenceInfo = [],
    metricsExtra,
    isRegenerate,
    generateArgs,
    creativeModelEnabled,
    searchEnabled,
  } = t;
  const { generateType } = i;
  const isCanvas = d.Z(t);
  const creativeModelEnabled_1 = o.UY({
    creativeModelEnabled,
    isCanvas,
  });
  const userMessage = new a.NuroUserMessage(messageId);
  userMessage.text = text;
  userMessage.files = files;
  userMessage.referenceInfo = referenceInfo;
  userMessage.generateArgs = generateArgs;
  userMessage.metadata.metricsExtra = JSON.stringify(
    r._(
      {
        isRegenerate,
      },
      metricsExtra,
    ),
  );
  userMessage.metadata.system_hints = o.DC({
    searchEnabled,
    creativeModelEnabled: creativeModelEnabled_1,
    isCanvas,
  });
  const taskData = {
    taskId: submitId,
    taskStatus: a.NuroTaskStatus.running,
    summary: "",
    userMessage,
    replyMessages: [],
  };
  const idModel = {
    submitId,
    projectId: "projectId" in t ? t.projectId : undefined,
    workspaceId: t.workspaceId,
  };
  return {
    uniqueKey: submitId,
    conversationId,
    generateType,
    statusModel: {
      statusCode: s.A.SubmitOk,
      recordStatus: n.DMLGenRecordStatus.Loading,
      timeModel: {
        createdTime: Number(userMessage.createTime),
      },
    },
    idModel,
    taskData,
    creativeModelEnabled: creativeModelEnabled_1,
    searchEnabled: searchEnabled != null && searchEnabled,
    seedanceVideoCreationEnabled: false,
    submitIdDataMap: {},
    itemInfoDataMap: {},
    submitIdsOrderedByMessageTime: [],
    hasMediaToolResult: false,
    metricsExtra: r._(
      {
        isRegenerate,
        conversationId,
      },
      metricsExtra,
    ),
  };
}
