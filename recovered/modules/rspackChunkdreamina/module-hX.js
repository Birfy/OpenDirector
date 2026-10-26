import r from "HS";
import a from "./module-Rd.js";
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
export class ServerWorkflowParam extends a.Serializable {
  constructor() {
    super(...arguments);
    this.workflowTemplateId = undefined;
    this.seed = undefined;
  }
}
o(
  [a.serializable("workflow_template_id")],
  ServerWorkflowParam.prototype,
  "workflowTemplateId",
  undefined,
);
o([a.serializable("seed")], ServerWorkflowParam.prototype, "seed", undefined);
export class ServerWorkflowUserInput extends a.Serializable {
  constructor() {
    super(...arguments);
    this.imageList = undefined;
    this.cameraRecordId = undefined;
  }
}
o(
  [a.serializable("image_list", () => r.DAImageResource)],
  ServerWorkflowUserInput.prototype,
  "imageList",
  undefined,
);
o(
  [a.serializable("camera_record_id", undefined, "string")],
  ServerWorkflowUserInput.prototype,
  "cameraRecordId",
  undefined,
);
export class ServerVideoWorkflowInput extends a.Serializable {
  constructor() {
    super(...arguments);
    this.param = undefined;
    this.workflowUserInput = undefined;
  }
}
o(
  [a.serializable("video_workflow_param", () => ServerWorkflowParam)],
  ServerVideoWorkflowInput.prototype,
  "param",
  undefined,
);
o(
  [a.serializable("video_workflow_user_input", () => ServerWorkflowUserInput)],
  ServerVideoWorkflowInput.prototype,
  "workflowUserInput",
  undefined,
);
