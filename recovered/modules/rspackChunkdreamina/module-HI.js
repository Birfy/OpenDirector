import o from "Ut";
import { DAAIEffectBaseComponent } from "./module-dOC.js";
import { UpgradeManager } from "./module-JK.js";
import { ServerFlow } from "./module-sI.js";
import { DAToServerFlowError, DAToServerFlowErrorCode } from "./module-Yw_2.js";
import { ServerAIEffectTransformer } from "./module-Gw.js";
import { ServerAudioTransformer } from "./module-kc.js";
import { ServerImageTransformer } from "./module-q4.js";
import { ServerVideoTransformer } from "./module-px.js";
import c from "./module-Rd.js";
export const DAToServerFlowTransformer = class e {
  static convertDraftJSONStringToServerFlowJSONString(t) {
    let i = new o.DADraft(t);
    if (UpgradeManager.shared.run(i).code != 0) {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.DraftUpgradeError,
        "upgrade draft failed",
      ).toJSONString();
    }
    let r = new ServerFlow();
    let d = e.convertDraftToServerFlow(i, r);
    if (d.code != 0) {
      return d.toJSONString();
    }
    r.setRemoveUnknownFieldsRecursive(true);
    let l = r.toJSONString();
    if (l === undefined || l === "") {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.UnknownError,
        "unknown error",
      ).toJSONString();
    }
    return l;
  }
  static convertDraftToServerFlow(e, t) {
    let e_mainComponentId = e.mainComponentId;
    if (
      (e_mainComponentId === undefined || e_mainComponentId === "") &&
      e.componentList.length === 1
    ) {
      e_mainComponentId = e.componentList[0].id;
    }
    if (e_mainComponentId === undefined || e_mainComponentId === "") {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.ComponentMainIdNull,
        "",
      );
    }
    let a = "";
    for (let n = 0; n < e.componentList.length; n++) {
      let s = e.componentList[n];
      a = s.type;
      if (s.id == e_mainComponentId) {
        if (s instanceof o.DAVideoBaseComponent) {
          return ServerVideoTransformer.transformVideoBaseComponent(
            c.ForcedCast.toClass(s, o.DAVideoBaseComponent),
            t,
          );
        } else if (s instanceof o.DAImageBaseComponent) {
          return ServerImageTransformer.transformImageBaseComponent(
            c.ForcedCast.toClass(s, o.DAImageBaseComponent),
            t,
          );
        } else if (s instanceof o.DAAudioBaseComponent) {
          return ServerAudioTransformer.transformAudioBaseComponent(
            c.ForcedCast.toClass(s, o.DAAudioBaseComponent),
            t,
          );
        } else if (s instanceof DAAIEffectBaseComponent) {
          return ServerAIEffectTransformer.transformAIEffectBaseComponent(
            c.ForcedCast.toClass(s, DAAIEffectBaseComponent),
            t,
          );
        }
      }
    }
    return new DAToServerFlowError(
      DAToServerFlowErrorCode.ComponentUnsupport,
      `componentType = ${a}`,
    );
  }
};
