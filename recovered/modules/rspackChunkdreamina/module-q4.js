import o from "Ut";
import { ServerNodeType } from "./module-of.js";
import { ServerNode } from "./module-Xn.js";
import { DAToServerFlowError, DAToServerFlowErrorCode } from "./module-Yw_2.js";
import {
  ServerGenerateImageInput,
  ServerImageGenerationImageContent,
  ServerImageGenerationInputResource,
  ServerImageGenerationResourceContent,
  ServerUnifiedAbilityV2,
  ServerUnifiedGenerateV2Input,
} from "./module-LHk.js";
import { ServerImageReqApi } from "./module-AT.js";
export const ServerImageTransformer = class e {
  static transformImageBaseComponent(t, i) {
    let o;
    let d = new ServerGenerateImageInput();
    let l = e.transformImageGenerateInput(t, d);
    if (l.code != DAToServerFlowErrorCode.NoError) {
      return l;
    }
    let p = new ServerNode();
    p.type = ServerNodeType.MGenerateImage;
    p.id = t.id;
    p.aigcMode = t.aigcMode;
    p.creationAgentVersion =
      (o = t.metaData) == null ? undefined : o.creationAgentVersion;
    p.generateImageInput = d;
    i.nodes.push(p);
    return new DAToServerFlowError(DAToServerFlowErrorCode.NoError, "");
  }
  static transformImageGenerateInput(t, i) {
    let r;
    let a;
    let s;
    let d;
    let l;
    let p;
    let u;
    let c;
    let m;
    let t_aiCamera = t.aiCamera;
    if (t_aiCamera != undefined) {
      i.aiCamera = t_aiCamera;
    }
    if (((r = t.abilities) == null ? undefined : r.genOption) != undefined) {
      i.genOption = t.abilities.genOption;
    }
    let g = e.getApiByGenerateType(t);
    if (g === undefined) {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.ImageBaseComponentGenerateTypeUnsupport,
        `component.generateType = ${t.generateType}`,
      );
    }
    i.api = g;
    switch (t.generateType) {
      case o.DAImageGenerateType.generate:
        return e.transformGenerateReq(
          i,
          (a = t.abilities) == null ? undefined : a.generate,
        );
      case o.DAImageGenerateType.normalHD:
        return e.transformNormalHD(
          i,
          (s = t.abilities) == null ? undefined : s.normalHD,
        );
      case o.DAImageGenerateType.blend:
        return e.transformBlend(
          i,
          (d = t.abilities) == null ? undefined : d.blend,
        );
      case o.DAImageGenerateType.painting:
        return e.transformPainting(
          i,
          (l = t.abilities) == null ? undefined : l.painting,
        );
      case o.DAImageGenerateType.superResolution:
        return e.transformSuperResolution(
          i,
          (p = t.abilities) == null ? undefined : p.superResolution,
        );
      case o.DAImageGenerateType.proHD:
        return e.transformProHD(
          i,
          (u = t.abilities) == null ? undefined : u.proHD,
        );
      case o.DAImageGenerateType.unifiedGenerate:
        return e.transformUnifiedGenerate(
          i,
          (c = t.abilities) == null ? undefined : c.unifiedGenerate,
        );
      case o.DAImageGenerateType.unifiedGenerateV2:
        return e.transformUnifiedGenerateV2(
          i,
          (m = t.abilities) == null ? undefined : m.unifiedGenerateV2,
        );
      default:
        return new DAToServerFlowError(
          DAToServerFlowErrorCode.ImageBaseComponentGenerateTypeUnsupport,
          `component.generateType = ${t.generateType}`,
        );
    }
  }
  static getApiByGenerateType(e) {
    switch (e.generateType) {
      case o.DAImageGenerateType.generate:
        return ServerImageReqApi.Generate;
      case o.DAImageGenerateType.normalHD:
        return ServerImageReqApi.NormalHD;
      case o.DAImageGenerateType.blend:
        return ServerImageReqApi.Blend;
      case o.DAImageGenerateType.painting:
        return ServerImageReqApi.Painting;
      case o.DAImageGenerateType.superResolution:
        return ServerImageReqApi.SuperResolution;
      case o.DAImageGenerateType.proHD:
        return ServerImageReqApi.ProHD;
      case o.DAImageGenerateType.unifiedGenerate:
        return ServerImageReqApi.UnifiedGenerate;
      case o.DAImageGenerateType.unifiedGenerateV2:
        return ServerImageReqApi.UnifiedGenerateV2;
      default:
        return;
    }
  }
  static transformGenerateReq(e, t) {
    if (t === undefined) {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.ImageBaseComponentWithoutGenerateReq,
        "",
      );
    }
    e.generateReq = t;
    return new DAToServerFlowError(DAToServerFlowErrorCode.NoError, "");
  }
  static transformNormalHD(e, t) {
    if (t === undefined) {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.ImageBaseComponentWithoutNormalHD,
        "",
      );
    }
    e.normalHDReq = t;
    return new DAToServerFlowError(DAToServerFlowErrorCode.NoError, "");
  }
  static transformBlend(e, t) {
    if (t === undefined) {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.ImageBaseComponentWithoutBlendReq,
        "",
      );
    }
    e.blendReq = t;
    return new DAToServerFlowError(DAToServerFlowErrorCode.NoError, "");
  }
  static transformPainting(e, t) {
    if (t === undefined) {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.ImageBaseComponentWithoutPaintingReq,
        "",
      );
    }
    e.paintingReq = t;
    return new DAToServerFlowError(DAToServerFlowErrorCode.NoError, "");
  }
  static transformSuperResolution(e, t) {
    if (t === undefined) {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.ImageBaseComponentWithoutSuperResolutionReq,
        "",
      );
    }
    e.superResolutionReq = t;
    return new DAToServerFlowError(DAToServerFlowErrorCode.NoError, "");
  }
  static transformProHD(e, t) {
    if (t === undefined) {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.ImageBaseComponentWithoutProHDReq,
        "",
      );
    }
    e.proHDReq = t;
    return new DAToServerFlowError(DAToServerFlowErrorCode.NoError, "");
  }
  static transformUnifiedGenerate(e, t) {
    if (t === undefined) {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.ImageBaseComponentWithoutUnifiedGenerateReq,
        "",
      );
    }
    e.api = ServerImageReqApi.UnifiedGenerate;
    e.unifiedGenerateReq = t;
    return new DAToServerFlowError(DAToServerFlowErrorCode.NoError, "");
  }
  static transformUnifiedGenerateV2(t, i) {
    if (i === undefined) {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.ImageBaseComponentWithoutUnifiedGenerateV2Req,
        "",
      );
    }
    t.api = ServerImageReqApi.UnifiedGenerateV2;
    let o = new ServerUnifiedGenerateV2Input();
    o.model = i.model;
    o.prompt = i.prompt;
    o.stylize = i.stylize;
    o.generateType = i.generateType;
    o.unifiedAbilityList = e.transformUnifiedAbilityList(i.unifiedAbilityList);
    o.renderConfig = i.renderConfig;
    o.genOption = i.genOption;
    t.unifiedGenerateV2Input = o;
    return new DAToServerFlowError(DAToServerFlowErrorCode.NoError, "");
  }
  static transformUnifiedAbilityList(t) {
    if (t !== undefined) {
      return t.map((t) => {
        let i = new ServerUnifiedAbilityV2();
        i.abilityCode = t.abilityCode;
        i.resourceList = e.transformResourceList(t.resourceList);
        i.policy = t.policy;
        i.extra = t.extra;
        return i;
      });
    }
  }
  static transformResourceList(t) {
    if (t !== undefined) {
      return t.map((t) => {
        let i = new ServerImageGenerationInputResource();
        i.content = e.transformResourceContent(t.content);
        i.resourceType = t.resourceType;
        i.purpose = t.purpose;
        return i;
      });
    }
  }
  static transformResourceContent(t) {
    if (t === undefined) {
      return;
    }
    let i = new ServerImageGenerationResourceContent();
    i.text = t.text;
    i.image = e.transformImageContent(t.image);
    return i;
  }
  static transformImageContent(e) {
    if (e === undefined) {
      return;
    }
    let t = new ServerImageGenerationImageContent();
    t.imageUri = e.imageUri;
    t.imageUrl = e.imageUrl;
    t.width = e.width;
    t.height = e.height;
    t.format = e.format;
    t.itemId = e.itemId;
    t.historyId = e.historyId;
    t.originAgenticHistoryId = e.originAgenticHistoryId;
    return t;
  }
};
