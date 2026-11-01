import { ServerNode } from "./module-Xn.js";
import { ServerNodeType } from "./module-of.js";
import { DAToServerFlowError, DAToServerFlowErrorCode } from "./module-Yw_2.js";
import { MGenerateAIEffectInput } from "./module-UN2.js";
import s from "./module-Rd.js";
export class ServerAIEffectTransformer {
  static transformAIEffectBaseComponent(e, t) {
    let i;
    let d;
    let l = (i = e.abilities) == null ? undefined : i.generate;
    if (l === undefined) {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.AIEffectBaseComponentWithoutGenerate,
        "",
      );
    }
    if (l.aiEffectID === undefined) {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.AIEffectBaseComponentWithoutEffectID,
        "",
      );
    }
    let p = new ServerNode();
    p.type = ServerNodeType.MGenerateAIEffect;
    p.id = e.id;
    p.aigcMode = e.aigcMode;
    p.creationAgentVersion =
      (d = e.metaData) == null ? undefined : d.creationAgentVersion;
    let u = new MGenerateAIEffectInput();
    u.aigcGenerateType = s.Int32.toInt(e.aigcGenerateType);
    u.aiEffectID = l.aiEffectID;
    u.reqKey = l.reqKey;
    u.inputs = l.inputs;
    u.seed = l.seed;
    p.mGenerateAIEffectInput = u;
    t.nodes.push(p);
    return new DAToServerFlowError(DAToServerFlowErrorCode.NoError, "");
  }
}
