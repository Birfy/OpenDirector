import i from "SR";
export class A {
  convert() {
    const {
      conversationId,
      messageId,
      text = "",
      files = [],
      referenceInfo = [],
      metricsExtra,
      conversationConfig,
      postEditCapabilities,
      projectId,
      infiniteCanvasParam,
    } = this._input;
    const userMessage = new i.NuroUserMessage(messageId);
    userMessage.text = text;
    userMessage.files = files;
    userMessage.referenceInfo = referenceInfo;
    userMessage.metadata.metricsExtra = JSON.stringify(metricsExtra);
    return {
      conversationId,
      userMessage,
      conversationConfig,
      postEditCapabilities,
      projectId,
      infiniteCanvasParam,
    };
  }
  constructor(e) {
    this._input = e;
  }
}
