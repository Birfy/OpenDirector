import o from "Cw";
import r from "Au";
import a from "Ut";
import { ServerAudioResource } from "./module-as.js";
import { ServerImageResource } from "./module-TP6.js";
import { ServerVideoResource } from "./module-fH.js";
import { ServerNodeType } from "./module-of.js";
import { ServerNode } from "./module-Xn.js";
import { DAToServerFlowError, DAToServerFlowErrorCode } from "./module-Yw_2.js";
import { ServerGenerateVideoAudioEffectInput } from "./module-IP.js";
import { ServerGenerateVideoBGMInput } from "./module-Gfm.js";
import { ServerGenerateVideoInput } from "./module-bs.js";
import { ServerGenerateVideoOptName } from "./module-eP.js";
import { ServerLipSyncFaceDetail } from "./module-QWM.js";
import { ServerLipSyncImageOpt } from "./module-FO.js";
import { ServerLipSyncOpt } from "./module-Atb.js";
import { LipSyncVoiceIdInfo, LipSyncVoiceInfo } from "./module-z4.js";
import { ServerMGenerateVideoInput } from "./module-kU.js";
import { ServerMergeVideoInput } from "./module-xt8.js";
import {
  ServerSubtitleEraseInput,
  ServerSubtitleEraseParam,
} from "./module-G8.js";
import {
  ServerVideoWorkflowInput,
  ServerWorkflowParam,
  ServerWorkflowUserInput,
} from "./module-hX.js";
import T from "./module-Rd.js";
export const ServerVideoTransformer = class e {
  static transformVideoBaseComponent(t, i) {
    switch (t.generateType) {
      case a.DAVideoGenerateType.lipSync:
        return e.transformLipSync(t, i);
      case a.DAVideoGenerateType.genVideo:
      case a.DAVideoGenerateType.videoTemplate:
        return e.transformGenVideo(t, i);
      case a.DAVideoGenerateType.mergeVideo:
        return e.transformMergeVideo(t, i);
      case a.DAVideoGenerateType.subtitleErase:
        return e.transformSubtitleErase(t, i);
      case a.DAVideoGenerateType.videoAudioEffect:
        return e.transformVideoAudioEffect(t, i);
      case a.DAVideoGenerateType.videoBgm:
        return e.transformVideoBGM(t, i);
      case a.DAVideoGenerateType.workflow:
        return e.transformWorkflow(t, i);
      default:
        return new DAToServerFlowError(
          DAToServerFlowErrorCode.VideoBaseComponentGenerateTypeUnsupport,
          `component.generateType = ${t.generateType}`,
        );
    }
  }
  static transformLipSync(e, t) {
    let i;
    let c;
    let m;
    let I;
    let A;
    let b;
    let D;
    let R = (i = e.abilities) == null ? undefined : i.lipSync;
    if (R === undefined) {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.VideoBaseComponentWithoutLipSync,
        "",
      );
    }
    let S = new ServerNode();
    switch (R.referenceType) {
      case a.DALipSyncReferenceType.video:
      case a.DALipSyncReferenceType.aiVideo:
        {
          S.type = ServerNodeType.LipSync;
          let e = new ServerGenerateVideoInput();
          e.name = ServerGenerateVideoOptName.LipSync;
          e.lipSync = new ServerLipSyncOpt();
          if (R.video === undefined) {
            return new DAToServerFlowError(
              DAToServerFlowErrorCode.VideoBaseComponentLipSyncVideoWithoutVideo,
              "",
            );
          }
          e.lipSync.video = ServerVideoResource.fromDAVideoResource(R.video, t);
          let i = (c = R.videoRefParams) == null ? undefined : c.itemId;
          let o = e.lipSync.video;
          if (i != undefined && o != undefined) {
            o.aigcVideo = new r.DAAIGCVideo();
            o.aigcVideo.itemId = i;
          }
          if (R.audio === undefined) {
            return new DAToServerFlowError(
              DAToServerFlowErrorCode.VideoBaseComponentLipSyncVideoWithoutAudio,
              "",
            );
          }
          e.lipSync.audio = ServerAudioResource.fromDAAudioResource(R.audio, t);
          let s = R.ttsContent;
          if (s != undefined && s != "") {
            e.lipSync.ttsContent = s;
          }
          if (R.videoEffectAudio != undefined) {
            e.lipSync.videoEffectAudio =
              ServerAudioResource.fromDAAudioResource(R.videoEffectAudio, t);
          }
          if (R.videoBgmAudio != undefined) {
            e.lipSync.videoBgmAudio = ServerAudioResource.fromDAAudioResource(
              R.videoBgmAudio,
              t,
            );
          }
          if (R.audioBeforeConversion != undefined) {
            e.lipSync.audioBeforeConversion =
              ServerAudioResource.fromDAAudioResource(
                R.audioBeforeConversion,
                t,
              );
          }
          if (R.audioResourceId != undefined && R.audioResourceId != "") {
            e.lipSync.voiceInfo = new LipSyncVoiceInfo();
            e.lipSync.voiceInfo.idInfo = new LipSyncVoiceIdInfo();
            e.lipSync.voiceInfo.idInfo.itemPlatform =
              (m = R.audioItemPlatform) != null ? m : a.CommonItemPlatform.Loki;
            e.lipSync.voiceInfo.idInfo.id = R.audioResourceId;
          }
          S.generateVideoInput = e;
        }
        break;
      case a.DALipSyncReferenceType.image:
        {
          S.type = ServerNodeType.LipSyncImage;
          let e = new ServerGenerateVideoInput();
          e.name = ServerGenerateVideoOptName.LipSyncImage;
          e.lipSyncImage = new ServerLipSyncImageOpt();
          if (R.image === undefined) {
            return new DAToServerFlowError(
              DAToServerFlowErrorCode.VideoBaseComponentLipSyncImageWithoutImage,
              "",
            );
          }
          e.lipSyncImage.image = ServerImageResource.fromDAImageResource(
            R.image,
            t,
          );
          let i = (I = R.videoRefParams) == null ? undefined : I.itemId;
          let r = e.lipSyncImage.image;
          if (i != undefined && r != undefined) {
            r.aigcImage = new o.DAAIGCImage();
            r.aigcImage.itemId = i;
          }
          if (R.audio === undefined) {
            return new DAToServerFlowError(
              DAToServerFlowErrorCode.VideoBaseComponentLipSyncImageWithoutAudio,
              "",
            );
          }
          e.lipSyncImage.audio = ServerAudioResource.fromDAAudioResource(
            R.audio,
            t,
          );
          let d = R.ttsContent;
          if (d != undefined) {
            e.lipSyncImage.ttsContent = d;
          }
          let p = R.faceImage;
          if (p != undefined) {
            e.lipSyncImage.faceImage =
              ServerImageResource.fromDAImageLipSyncFace(p, t);
          }
          if (R.audioBeforeConversion != undefined) {
            e.lipSyncImage.audioBeforeConversion =
              ServerAudioResource.fromDAAudioResource(
                R.audioBeforeConversion,
                t,
              );
          }
          e.lipSyncImage.voiceInfo = new LipSyncVoiceInfo();
          e.lipSyncImage.voiceInfo.idInfo = new LipSyncVoiceIdInfo();
          e.lipSyncImage.voiceInfo.idInfo.itemPlatform =
            (A = R.audioItemPlatform) != null ? A : a.CommonItemPlatform.Loki;
          e.lipSyncImage.voiceInfo.idInfo.id =
            (b = R.audioResourceId) != null ? b : "";
          let c = R.mode;
          if (c != undefined) {
            e.lipSyncImage.mode = c;
          }
          let m = R.seed;
          e.lipSyncImage.seed = m;
          if (R.prompt != undefined) {
            e.lipSyncImage.prompt = R.prompt;
          }
          if (R.modelReqKey != undefined) {
            e.lipSyncImage.modelReqKey = R.modelReqKey;
          }
          if (R.selectedFace != undefined) {
            e.lipSyncImage.selectedFace = new ServerLipSyncFaceDetail();
            e.lipSyncImage.selectedFace.faceBbox = R.selectedFace.faceBbox.map(
              (e, t, i) => T.Float64.toInt(e),
            );
            if (R.selectedFace.faceImage != undefined) {
              e.lipSyncImage.selectedFace.faceImage =
                ServerImageResource.fromDAImageResource(
                  R.selectedFace.faceImage,
                  t,
                );
            }
            if (R.selectedFace.maskImage != undefined) {
              e.lipSyncImage.selectedFace.maskImage =
                ServerImageResource.fromDAImageResource(
                  R.selectedFace.maskImage,
                  t,
                );
            }
          }
          if (R.beforeSilenceMillisecond != undefined) {
            e.lipSyncImage.beforeSilenceMillisecond =
              R.beforeSilenceMillisecond;
          }
          if (R.afterSilenceMillisecond != undefined) {
            e.lipSyncImage.afterSilenceMillisecond = R.afterSilenceMillisecond;
          }
          S.generateVideoInput = e;
        }
        break;
      default:
        return new DAToServerFlowError(
          DAToServerFlowErrorCode.VideoBaseComponentLipSyncRefTypeUnsupport,
          `lipSyncAbility.referenceType = ${R.referenceType}`,
        );
    }
    S.aigcMode = e.aigcMode;
    S.creationAgentVersion =
      (D = e.metaData) == null ? undefined : D.creationAgentVersion;
    S.id = e.id;
    t.nodes.push(S);
    return new DAToServerFlowError(DAToServerFlowErrorCode.NoError, "");
  }
  static transformGenVideo(e, t) {
    let i;
    let o;
    let r = (i = e.abilities) == null ? undefined : i.genVideo;
    if (r === undefined) {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.VideoBaseComponentWithoutGenVideo,
        "",
      );
    }
    let a = new ServerMGenerateVideoInput();
    a.input = r.text2VideoParams;
    a.scene = r.scene;
    let n = new ServerNode();
    n.id = e.id;
    n.type = ServerNodeType.MGenerateVideo;
    n.aigcMode = e.aigcMode;
    n.creationAgentVersion =
      (o = e.metaData) == null ? undefined : o.creationAgentVersion;
    n.mGenerateVideoInput = a;
    t.nodes.push(n);
    return new DAToServerFlowError(DAToServerFlowErrorCode.NoError, "");
  }
  static transformMergeVideo(e, t) {
    let i;
    let o;
    let r = (i = e.abilities) == null ? undefined : i.mergeVideo;
    if (r === undefined) {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.VideoBaseComponentWithoutMergeVideo,
        "",
      );
    }
    let a = new ServerNode();
    a.id = e.id;
    a.type = ServerNodeType.MergeVideo;
    a.aigcMode = e.aigcMode;
    a.creationAgentVersion =
      (o = e.metaData) == null ? undefined : o.creationAgentVersion;
    a.mergeVideoInput = ServerMergeVideoInput.fromDAMergeVideoInput(
      r.mergeVideoInput,
      t,
    );
    t.nodes.push(a);
    return new DAToServerFlowError(DAToServerFlowErrorCode.NoError, "");
  }
  static transformSubtitleErase(e, t) {
    let i;
    let o = (i = e.abilities) == null ? undefined : i.subtitleErase;
    let r = o == null ? undefined : o.subtitleEraseInput;
    let a = r == null ? undefined : r.sourceVideo;
    if (r === undefined || a === undefined || a.vid === "") {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.VideoBaseComponentGenerateTypeUnsupport,
        "subtitle erase source video is missing",
      );
    }
    let n = new ServerSubtitleEraseInput();
    n.sourceVideo = ServerVideoResource.fromDAVideoResource(a, t);
    n.param = ServerSubtitleEraseParam.fromDraft(r.param);
    let s = new ServerNode();
    s.id = e.id;
    s.type = ServerNodeType.SubtitleErase;
    s.aigcMode = e.aigcMode;
    s.subtitleEraseInput = n;
    t.nodes.push(s);
    return new DAToServerFlowError(DAToServerFlowErrorCode.NoError, "");
  }
  static transformVideoAudioEffect(e, t) {
    let i;
    let o;
    let r = (i = e.abilities) == null ? undefined : i.videoAudioEffect;
    if (r === undefined) {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.VideoBaseComponentWithoutVideoAudioEffect,
        "",
      );
    }
    let a = new ServerGenerateVideoAudioEffectInput();
    a.originHistoryId = r.originHistoryId;
    a.originItemId = r.originItemId;
    a.avMix = r.avMix;
    let n = new ServerNode();
    n.id = e.id;
    n.type = ServerNodeType.GenerateVideoAudioEffect;
    n.aigcMode = e.aigcMode;
    n.creationAgentVersion =
      (o = e.metaData) == null ? undefined : o.creationAgentVersion;
    n.generateVideoAudioEffect = a;
    t.nodes.push(n);
    return new DAToServerFlowError(DAToServerFlowErrorCode.NoError, "");
  }
  static transformVideoBGM(e, t) {
    let i;
    let o;
    let r = (i = e.abilities) == null ? undefined : i.videoBGM;
    if (r === undefined) {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.VideoBaseComponentWithoutVideoBGM,
        "",
      );
    }
    let a = new ServerGenerateVideoBGMInput();
    a.originHistoryId = r.originHistoryId;
    a.originItemId = r.originItemId;
    a.duration = r.duration;
    a.tags = r.tags;
    a.avMix = r.avMix;
    let n = new ServerNode();
    n.id = e.id;
    n.type = ServerNodeType.GenerateVideoBGM;
    n.aigcMode = e.aigcMode;
    n.creationAgentVersion =
      (o = e.metaData) == null ? undefined : o.creationAgentVersion;
    n.videoBGMInput = a;
    t.nodes.push(n);
    return new DAToServerFlowError(DAToServerFlowErrorCode.NoError, "");
  }
  static transformWorkflow(e, t) {
    let i;
    let o;
    let r;
    let a;
    let n = (i = e.abilities) == null ? undefined : i.workflow;
    if (n === undefined) {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.VideoBaseComponentWithoutWorkflow,
        "",
      );
    }
    if (n.workflowTemplateId === undefined) {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.VideoBaseComponentWorkflowWithoutTemplateId,
        "",
      );
    }
    if (n.imageList === undefined || n.imageList.length === 0) {
      return new DAToServerFlowError(
        DAToServerFlowErrorCode.VideoBaseComponentWorkflowWithoutImageList,
        "",
      );
    }
    let s = new ServerVideoWorkflowInput();
    s.param = new ServerWorkflowParam();
    s.param.workflowTemplateId = n.workflowTemplateId;
    s.param.seed = n.seed;
    s.workflowUserInput = new ServerWorkflowUserInput();
    s.workflowUserInput.imageList = n.imageList;
    s.workflowUserInput.cameraRecordId =
      (a =
        (r = (o = e.abilities) == null ? undefined : o.aiCamera) == null
          ? undefined
          : r.historyOption) == null
        ? undefined
        : a.cameraRecordId;
    let d = new ServerNode();
    d.id = e.id;
    d.type = ServerNodeType.VideoWorkflow;
    d.aigcMode = e.aigcMode;
    d.videoWorkflowInput = s;
    t.nodes.push(d);
    return new DAToServerFlowError(DAToServerFlowErrorCode.NoError, "");
  }
};
