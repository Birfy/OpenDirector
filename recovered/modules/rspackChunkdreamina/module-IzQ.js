import r from "HS";
import a from "q2";
import n from "uR";
import { FeaturesMinVersion } from "./module-ew.js";
import { MinFeatures } from "./module-xh.js";
import l from "./module-Rd.js";
const o =
  (this && this.__decorate) ||
  function (e, t, i, o) {
    let r;
    const arguments_length = arguments.length;
    let n =
      arguments_length < 3
        ? t
        : o === null
          ? (o = Object.getOwnPropertyDescriptor(t, i))
          : o;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
      n = Reflect.decorate(e, t, i, o);
    } else {
      for (let s = e.length - 1; s >= 0; s--) {
        if ((r = e[s])) {
          n =
            (arguments_length < 3
              ? r(n)
              : arguments_length > 3
                ? r(t, i, n)
                : r(t, i)) || n;
        }
      }
    }
    if (arguments_length > 3 && n) {
      Object.defineProperty(t, i, n);
    }
    return n;
  };
export class DAVideoWorkflowAbility extends n.DANode {
  constructor() {
    super(...arguments);
    this.videoRefParams = undefined;
    this.workflowTemplateId = undefined;
    this.schemaKey = undefined;
    this.imageList = undefined;
    this.seed = undefined;
  }
  afterInit() {
    super.afterInit();
    this.minVersion = FeaturesMinVersion.VideoWorkFlow;
  }
  calculateMinFeatures() {
    this.minFeatures = [MinFeatures.AIGC_Video_WorkFlow];
    return super.calculateMinFeatures();
  }
  childNodes() {
    let e = [];
    let videoRefParams = this.videoRefParams;
    if (videoRefParams != undefined) {
      e.push(videoRefParams);
    }
    let imageList = this.imageList;
    if (imageList != undefined) {
      imageList.forEach((t) => {
        e.push(t);
      });
    }
    return e;
  }
}
o(
  [l.serializable("video_ref_params", () => a.DAVideoRefParam)],
  DAVideoWorkflowAbility.prototype,
  "videoRefParams",
  undefined,
);
o(
  [l.serializable("workflow_template_id")],
  DAVideoWorkflowAbility.prototype,
  "workflowTemplateId",
  undefined,
);
o(
  [l.serializable("schema_key")],
  DAVideoWorkflowAbility.prototype,
  "schemaKey",
  undefined,
);
o(
  [l.serializable("image_list", () => r.DAImageResource)],
  DAVideoWorkflowAbility.prototype,
  "imageList",
  undefined,
);
o(
  [l.serializable("seed")],
  DAVideoWorkflowAbility.prototype,
  "seed",
  undefined,
);
