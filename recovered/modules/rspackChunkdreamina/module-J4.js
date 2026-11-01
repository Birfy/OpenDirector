export var DAAIGCMode;
let o;
export const isCreationAgentWeb = function (e) {
  return e.indexOf(DAAIGCMode.creationAgent) === 0;
};
o = DAAIGCMode || (DAAIGCMode = {});
o.none = "";
o.workbench = "workbench";
o.canvas = "canvas";
o.story = "story";
o.character = "character";
o.aigcDraft = "aigc_draft";
o.postEditor = "post_editor";
o.creationAgent = "creation_agent";
o.creationAgentWeb = "creation_agent_v30";
o.creationAgentWebParallel = "creation_agent_v40";
o.aiCamera = "camera";
o.infiniteCanvas = "infinite_canvas";
