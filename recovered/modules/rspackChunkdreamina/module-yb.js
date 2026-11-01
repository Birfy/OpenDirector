import o from "AB";
import r from "HS";
import a from "Pb";
import n from "Tpe";
import s from "vE";
import {
  DABlendAbilityName,
  DABlendPromptPlaceHolderInfo,
  DAImageBlendAbilityItem,
} from "./module-HZ.js";
import {
  DraftBuildReqConvertResult,
  IAgentDraftBuilder,
} from "./module-t5w.js";
import { AgentGenerateType } from "./module-Aa.js";
import { convertUnifiedEditInputAgentToDraft } from "./module-TS_2.js";
require("./module-Rd.js").getOrCreateInterface(
  "builder_draft_builder",
  "DADraftBuildReq",
);
export class ImageToImageAgentDraftBuilder extends IAgentDraftBuilder {
  internalDraftBuilder() {
    return new s.DAImageToImageDraftBuilder();
  }
  convertAgentDraftReqToDraftBuildReq(e) {
    let t;
    let i;
    let c;
    let m;
    let v;
    let g;
    let f;
    let y;
    if (
      e.agentGenerateType != AgentGenerateType.blendByteEdit &&
      e.agentGenerateType != AgentGenerateType.blendIPKeep
    ) {
      let t =
        e.agentGenerateType != undefined
          ? `${e.agentGenerateType}`
          : "undefined";
      return DraftBuildReqConvertResult.buildErrorResult(
        `invalid blend type: req=${t}`,
      );
    }
    let h = convertUnifiedEditInputAgentToDraft(
      (t = e.imageDraftReq) == null ? undefined : t.unifiedEditInput,
    );
    if (h.msg != undefined && h.msg != "") {
      return DraftBuildReqConvertResult.buildErrorResult(h.msg);
    }
    let _ = (i = e.imageDraftReq) == null ? undefined : i.blendImageUriList;
    if (h.data === undefined && (_ === undefined || _.length === 0)) {
      return DraftBuildReqConvertResult.buildErrorResult(
        `\u{57AB}\u{56FE} uri \u{4E3A}\u{7A7A}: req=${e.agentGenerateType != undefined ? `${e.agentGenerateType}` : "undefined"}`,
      );
    }
    let blendItemList =
      _ == null
        ? undefined
        : _.map((t) => {
            let i = new DAImageBlendAbilityItem();
            i.imageUriList = [t];
            let o = new r.DAImageResource();
            o.uri = t;
            o.sourceFrom = a.DAResourceSourceFrom.upload;
            i.imageList = [o];
            switch (e.agentGenerateType) {
              case AgentGenerateType.blendByteEdit:
                i.name = DABlendAbilityName.ByteEdit;
                break;
              case AgentGenerateType.blendIPKeep:
                i.name = DABlendAbilityName.IpKeep;
            }
            return i;
          });
    let promptPlaceholderInfoList =
      (m =
        (c = e.imageDraftReq) == null
          ? undefined
          : c.promptPlaceholderInfoList) == null
        ? undefined
        : m.map((e) => {
            let t = new DABlendPromptPlaceHolderInfo();
            t.abilityIndex = e.abilityIndex;
            return t;
          });
    let b = new s.DAImageToImageDraftReq({
      aigcGenType: o.DAAIGCGenerateType.blend,
      modelReqKey: (v = e.imageDraftReq) == null ? undefined : v.modelReqKey,
      prompt: (g = e.imageDraftReq) == null ? undefined : g.prompt,
      sampleStrength: 0.5,
      targetImageInfo:
        (f = e.imageDraftReq) == null ? undefined : f.targetImageInfo,
      promptPlaceholderInfoList,
      blendItemList,
      genOption: n.DAImageGenerateOptionInfoUtil.convertToDAImageGenerateOption(
        (y = e.imageDraftReq) == null ? undefined : y.imageGenerateOption,
      ),
      unifiedEditInput: h.data,
    });
    return DraftBuildReqConvertResult.buildSucceedResult(b);
  }
}
