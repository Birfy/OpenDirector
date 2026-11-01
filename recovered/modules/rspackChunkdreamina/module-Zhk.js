import { DAVideoRefParam } from "./module-q2.js";
import r from "Mco";
import a from "xEO";
import n from "kv";
import s from "IzQ";
import { IDADraftBuilder } from "./module-VTK.js";
import l from "Rd";
let c = l.getOrCreateInterface("builder_draft_builder", "DADraftBuildReq");
export class DAVideoFlowDraftReq extends l.RTSDataClass {
  constructor() {
    super(...arguments);
    this.aigcGenType = undefined;
    this.aigcMode = undefined;
    this.metaData = undefined;
    this.refInfo = undefined;
    this.localMockData = undefined;
    this.imageRes = undefined;
    this.aiCameraAbility = undefined;
    this.workFlowId = undefined;
    this.schemaKey = undefined;
    this.seed = undefined;
  }
}
l.initMetadataFor(
  "class",
  DAVideoFlowDraftReq,
  "DAVideoFlowDraftReq",
  undefined,
  [c],
  "video_flow_draft_builder",
);
export class DAVideoFlowDraftBuilder extends IDADraftBuilder {
  createComponent(e) {
    let t;
    let i;
    let d = new r.DAVideoBaseComponent();
    d.generateType = n.DAVideoGenerateType.workflow;
    t = new a.DAVideoGenerateAbilities();
    i = new s.DAVideoWorkflowAbility();
    i.workflowTemplateId = e.workFlowId;
    i.schemaKey = e.schemaKey;
    i.seed = e.seed;
    i.imageList = e.imageRes;
    i.videoRefParams = new DAVideoRefParam();
    t.workflow = i;
    t.aiCamera = e.aiCameraAbility;
    d.abilities = t;
    return d;
  }
}
