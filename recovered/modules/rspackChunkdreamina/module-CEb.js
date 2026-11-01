import i from "oa";
import a from "SR";
import n from "UgR";
import o from "IO9";
export class S {
  convert() {
    const {
      conversationId,
      messageId,
      text = "",
      files = [],
      referenceInfo = [],
      metricsExtra,
      isRegenerate,
      conversationConfig,
      creativeModelEnabled,
      generateArgs,
      inferenceModelId,
      creationMode,
      searchEnabled,
      workspaceId,
    } = this._input;
    const userMessage = new a.NuroUserMessage(messageId);
    userMessage.text = text;
    userMessage.files = files;
    userMessage.referenceInfo = referenceInfo;
    userMessage.generateArgs = generateArgs;
    userMessage.metadata.metricsExtra = JSON.stringify(
      i._(
        {
          isRegenerate,
        },
        metricsExtra,
      ),
    );
    const A = o.Z(this._input) ? this._input : undefined;
    userMessage.metadata.system_hints = n.DC({
      searchEnabled,
      creativeModelEnabled,
      isCanvas: !!A,
    });
    const v = {
      conversationId,
      userMessage,
      inferenceModelId,
      creationMode,
      conversationConfig,
      workspaceId,
    };
    if (A) {
      v.projectId = A.projectId;
      v.inferenceModelId = undefined;
      v.creationMode = undefined;
    }
    return v;
  }
  constructor(e) {
    this._input = e;
  }
}
