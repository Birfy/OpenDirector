import n from "oa";
import r from "bk";
import a from "SR";
import o from "Qey";
import s from "Ut";
import l from "Rb";
import d from "I3";
import u from "fg";
import v from "fm";
import c from "H26";
import { T as T_1 } from "./module-A1.js";
import { y } from "./module-pyg.js";
import f from "yMd";
import { N as N_1 } from "./module-BW.js";
import { r as r_1 } from "./module-Zt_2.js";
import { x as x_1 } from "./module-TSS_2.js";
import { f as f_1 } from "./module-KA.js";
import { v as v_1 } from "./module-d1Q.js";
import T from "zid";
import S from "ULc";
import A from "Dm";
import b from "wz";
import k from "d8m";
import D from "WQ";
import w from "ACb";
import R from "CR";
import P from "kb";
import G from "y3V";
import E from "iM";
import F from "JSz";
import O from "NaK";
import { C as C_1 } from "./module-mY6.js";
import { x as x_2 } from "./module-tk7.js";
import { H } from "./module-cF_4.js";
import { N as N_2 } from "./module-GX_3.js";
import { j as j_1 } from "./module-Bx.js";
import { u as u_1 } from "./module-cb.js";
import { q } from "./module-gIi.js";
import { I } from "./module-cT_2.js";
import { a as a_1 } from "./module-FlD.js";
import { x as x_3 } from "./module-AB9.js";
import Z from "xi";
import ee from "wEp";
import { p } from "./module-pc.js";
import { a as a_2 } from "./module-Wqv.js";
import { r as r_2 } from "./module-SkF.js";
import eo from "Lea";
class M extends b.aR {
  validate(e) {
    const { inputData } = e;
    const { generateType } = inputData;
    if (!S.j(generateType)) {
      A.Iv("Video record can only be created from video type");
    }
  }
}
function C(e) {
  return [f.ce.Image2Avatar, f.ce.Video2Avatar].includes(e);
}
class x extends b.h0 {
  preprocess(e) {
    const {
      inputData: { generateType, firstGenerateType, draftContent },
    } = e;
    if (!firstGenerateType && draftContent) {
      const r = k.wD(draftContent);
      const firstGenerateType_1 = r ? D.q[r.generateType] : firstGenerateType;
      e.updateInputData({
        firstGenerateType: firstGenerateType_1,
        task: {
          firstGenerateType: firstGenerateType_1,
        },
      });
    }
    if (C(firstGenerateType)) {
      e.updateInputData({
        firstGenerateType: f.ce.LipSync,
        task: {
          firstGenerateType: f.ce.LipSync,
        },
      });
    }
    if (C(generateType)) {
      e.updateInputData({
        generateType: f.ce.LipSync,
      });
    }
  }
}
class V extends b.h0 {
  preprocess(e) {
    let t;
    const { inputData } = e;
    const n = (t = inputData.itemList) == null ? undefined : t[0];
    if (n) {
      if (inputData.draftContent) {
        this._modifyEffectItemByDraft(n, {
          draftContent: inputData.draftContent,
          draftResources: inputData.resources,
        });
      } else if (n.aigcImageParams && C(n.aigcImageParams.generateType)) {
        n.aigcImageParams.generateType = f.ce.LipSync;
      }
    }
  }
  _modifyEffectItemByDraft(e, t) {
    let i;
    let n;
    const r =
      (e == null || (i = e.aigcDraft) == null ? undefined : i.content) ||
      (t == null ? undefined : t.draftContent);
    const resources =
      (e == null ? undefined : e.aigcDraftResources) ||
      (t == null ? undefined : t.draftResources);
    if (
      r &&
      resources &&
      (e == null ? undefined : e.aigcImageParams) &&
      k.QB(r)
    ) {
      const lipSyncIdInfo =
        (n = e.aigcImageParams.publishedVoiceInfo) == null
          ? undefined
          : n.idInfo;
      const s = w.z({
        draftContent: r,
        resources,
        videoTemplateItem: e.videoTemplateItem,
        originText2VideoParams: e.aigcImageParams.text2videoParams,
        lipSyncIdInfo,
      });
      e.aigcImageParams.text2videoParams = s;
    }
  }
}
class N extends b.Yc {
  executeFormat(e) {
    let t;
    let i;
    const {
      inputData: { draftContent, videoResource, resources },
    } = e;
    const o = k.RL(draftContent);
    const s = o == null || (t = o.abilities) == null ? undefined : t.videoBGM;
    if (o && s) {
      const tags =
        (i = s.tags) == null
          ? undefined
          : i.map((e) => {
              var t;
              var i;
              return {
                key: (t = e.key) != null ? t : "",
                name: (i = e.name) != null ? i : "",
              };
            });
      const videoFirstFrame = O.X(s.firstFrameImage, resources);
      e.updateOutputData({
        videoBgmParams: {
          originHistoryId: s.originHistoryId,
          originItemId: s.originItemId,
          videoFirstFrame,
          duration: videoResource == null ? undefined : videoResource.duration,
          tags,
          promptSource: (tags == null ? undefined : tags.length)
            ? f.B$.Tag
            : f.B$.FirstFrame,
        },
      });
    }
  }
}
class L extends b.h0 {
  preprocess(e) {
    let t;
    let i;
    let n;
    let r;
    let a;
    let o;
    const { inputData } = e;
    const { draftContent, resources, failCode, metricsExtra } = inputData;
    if (draftContent && k.QB(draftContent)) {
      const m = new s.DADraft(draftContent);
      const p = w.z({
        draftContent,
        resources,
        videoTemplateItem: inputData.videoTemplateItem,
        originText2VideoParams:
          (n = inputData.itemList) == null ||
          (i = n[0]) == null ||
          (t = i.aigcImageParams) == null
            ? undefined
            : t.text2videoParams,
      });
      const aigcImageParams = ((e) => {
        try {
          const t = new T.l("formatVideoAudioParamsByDraft");
          t.addProcessor(new N());
          return t.executeFormatting(e, F.uR(), true);
        } catch (e) {
          return;
        }
      })({
        draftContent,
        resources,
        videoResource:
          (a = inputData.itemList) == null || (r = a[0]) == null
            ? undefined
            : r.video,
      });
      e.updateInputData({
        task: {
          originalInput: p,
          isUseDraftGen: true,
          aigcImageParams,
          processFlows: this._getProcessFlowsFromDraft(m),
          taskPayload: this._getTaskPayloadFromDraft(m, metricsExtra, p),
          draftContent,
          lipSyncInfo: {
            lipSyncExtra: this._getLipSyncExtra(m, resources, failCode),
            lipSyncDetectionStatus:
              (o = inputData.lipSyncInfo) == null
                ? undefined
                : o.lipSyncDetectionStatus,
          },
        },
      });
    }
  }
  _getProcessFlowsFromDraft(e) {
    const t = [];
    for (let i = e.findMainComponent(); i && k.FR(i);) {
      const n = (o = i.processType) != null ? o : D.L[i.generateType];
      const r =
        n === s.DAVideoProcessType.VideoGen
          ? this._getVideoProcessTypeFromTaskExtra(
              (d = i.abilities) == null || (l = d.genVideo) == null
                ? undefined
                : l.videoTaskExtra,
            )
          : undefined;
      let a = r != null ? r : n;
      if (!r && ((u = i.abilities) == null ? undefined : u.lipSync)) {
        var o;
        var l;
        var d;
        var u;
        let v;
        const c = (v = i.abilities) == null ? undefined : v.lipSync;
        switch (c == null ? undefined : c.referenceType) {
          case s.DALipSyncReferenceType.aiVideo:
            a = s.DAVideoProcessType.LipSync;
            break;
          case s.DALipSyncReferenceType.image:
            a = s.DAVideoProcessType.LipSyncImage;
            break;
          case s.DALipSyncReferenceType.video:
            a = s.DAVideoProcessType.LipSyncUserVideo;
        }
      }
      if (a) {
        t.unshift({
          curProcessFlows: [a],
        });
      }
      i = e.findParentComponent(i);
    }
    return t;
  }
  _getVideoProcessTypeFromTaskExtra(e) {
    const videoProcessType = d.j(e != null ? e : "{}", {}).videoProcessType;
    if (videoProcessType === s.DAVideoProcessType.VideoEdit) {
      return videoProcessType;
    }
  }
  _getTaskPayloadFromDraft(e, t, i) {
    const n = e.findMainComponent();
    if (k.FR(n)) {
      return {
        taskExtra: this._getTaskExtra(e, t, i),
        taskScene: E.H(n),
      };
    }
  }
  _getTaskExtra(e, t, i) {
    const n = e.findMainComponent();
    if (k.FR(n)) {
      const { abilities } = n;
      const a =
        (abilities == null || (u = abilities.subtitleErase) == null
          ? undefined
          : u.videoTaskExtra) ||
        (abilities == null || (v = abilities.genVideo) == null
          ? undefined
          : v.videoTaskExtra) ||
        t;
      const o = d.j(a != null ? a : "{}", {});
      if (!("lipSyncInfo" in o)) {
        var u;
        var v;
        let c;
        let m;
        let p;
        let f;
        let g;
        let I;
        let _;
        let y;
        let h;
        const T =
          i == null || (p = i.videoGenInputs) == null ? undefined : p[0];
        const S =
          (c =
            (m =
              T == null || (g = T.v2vOpt) == null || (f = g.lipSync) == null
                ? undefined
                : f.ttsInfo) != null
              ? m
              : T == null ||
                  (_ = T.v2vOpt) == null ||
                  (I = _.lipSyncUserVideo) == null
                ? undefined
                : I.ttsInfo) != null
            ? c
            : T == null ||
                (h = T.i2vOpt) == null ||
                (y = h.realmanAvatar) == null
              ? undefined
              : y.ttsInfo;
        if (S) {
          o.lipSyncInfo = d.j(S, {});
        }
      }
      if (!("previewId" in o)) {
        const A = l.DANodeUtils.findChildNodes(
          (e) => e instanceof s.DAVideoRefParam,
          abilities,
        );
        o.previewId = A == null ? undefined : A.originHistoryId;
      }
      if (!("promptSource" in o)) {
        o.promptSource = "custom";
      }
      if (!("originId" in o)) {
        o.originId = this._getOriginIdFromDraft(e);
      }
      return JSON.stringify(o);
    }
  }
  _getOriginIdFromDraft(e) {
    let t;
    const i = k.wD(e);
    const n = e.componentList.find(
      (e) => k.FR(e) && e.parentId === (i == null ? undefined : i.id),
    );
    if (k.FR(n)) {
      const r = l.DANodeUtils.findChildNodes(
        (e) => e instanceof s.DAVideoRefParam,
        n.abilities,
      );
      if (r == null || (t = r.itemId) == null) {
        return undefined;
      }
      return t.toString();
    }
  }
  _getLipSyncExtra(e, t, i) {
    let a;
    let o;
    const s = k.RL(e);
    if (k.FR(s)) {
      const l = (a = s.abilities) == null ? undefined : a.lipSync;
      const d = P.w(l == null ? undefined : l.audio, t);
      const u = G.N(l == null ? undefined : l.video, t);
      if (l) {
        const v = {};
        const c = String(R.Q.InputAudioContainEnglishContent);
        if (d) {
          v.audio = r._(n._({}, d), {
            isEnglishContent: String(i) === c,
          });
        }
        if (u) {
          v.video = {
            vid: u.videoId,
            duration: (o = u.duration) != null ? o : 0,
            fileId: u.videoId,
            fileHash: u.videoId,
          };
        }
        return JSON.stringify(v);
      }
    }
  }
}
function j(e, t) {
  let imageUri;
  if (
    e &&
    ("uri" in e && (imageUri = e.uri),
    "imageUri" in e && (imageUri = e.imageUri),
    imageUri)
  ) {
    return r._(n._({}, e), {
      imageUri,
      coverUrlMap: ((e) => {
        if (!e) {
          return {};
        }
        const t = {};
        e.forEach((e) => {
          if (e.width && e.imageUrl) {
            t[e.width] = e.imageUrl;
          }
        });
        return t;
      })(t),
    });
  }
}
class U extends b.h0 {
  preprocess(e) {
    const { inputData } = e;
    const originalInput = this._formatOriginalInput(inputData);
    e.updateInputData({
      task: r._(n._({}, inputData.task), {
        originalInput,
      }),
    });
  }
  _formatOriginalInput(e) {
    if (
      !((t = e.task.originalInput) == null ? undefined : t.videoGenInputs[0])
    ) {
      return e.task.originalInput;
    }
    var t;
    let i;
    const firstFrameImage = j(
      e.task.firstFrameImage ||
        ((i = e.originItemList) == null ? undefined : i[0]),
      e.task.multiSizeFirstFrameImage,
    );
    const endFrameImage = j(
      e.task.endFrameImage,
      e.task.multiSizeEndFrameImage,
    );
    return r._(n._({}, e.task.originalInput), {
      videoGenInputs: [
        r._(n._({}, e.task.originalInput.videoGenInputs[0]), {
          firstFrameImage,
          endFrameImage,
        }),
      ],
    });
  }
}
class $ extends b.h0 {
  preprocess(e) {
    const { inputData } = e;
    if (!inputData.draftContent) {
      try {
        const i = this._generateDraftContentFromLegacyData(inputData);
        if (!i) {
          return;
        }
        e.updateInputData({
          draftContent: i,
          task: {
            draftContent: i,
          },
        });
      } catch (error) {
        Z.V.error(
          "[FixDraftContentForLegacyDataPreprocessorPlugin] submitId: ",
          inputData.task.submitId,
          "error: ",
          error,
        );
        return;
      }
    }
  }
  _generateDraftContentFromLegacyData(e) {
    const { task } = e;
    const { processFlows } = task;
    const n =
      processFlows == null
        ? undefined
        : processFlows.map((e) => {
            var t;
            if ((t = e.curProcessFlows) == null) {
              return undefined;
            }
            return t[0];
          });
    if (n == null ? undefined : n.length) {
      let r = this._getImageDraftContentFromLegacyData(e);
      n.forEach(
        (t) =>
          (r = this._createConverterFactory(t, e, r)().convert().draftContent),
      );
      return r;
    }
  }
  _createConverterFactory(e, t, i) {
    return {
      [s.DAVideoProcessType.LipSyncImage]: () =>
        new C_1(this._createLipSyncAvatarParams(t)),
      [s.DAVideoProcessType.LipSyncUserVideo]: () =>
        new C_1(this._createLipSyncAvatarParams(t)),
      [s.DAVideoProcessType.LipSync]: () =>
        new x_2(this._createLipSyncParams(t, i)),
      [s.DAVideoProcessType.VideoGen]: () =>
        new H(this._createVideoGeneratorParams(t, i)),
      [s.DAVideoProcessType.SR]: () =>
        new N_2(this._createVideoSuperResolutionParams(t, i)),
      [s.DAVideoProcessType.InsertFrame]: () =>
        new j_1(this._createInsertFrameParams(t, i)),
      [s.DAVideoProcessType.Extend]: () =>
        new u_1(this._createVideoExtendParams(t, i)),
      [s.DAVideoProcessType.LabSR]: () =>
        new q(this._createVideoLabSrExtendParams(t, i)),
      [s.DAVideoProcessType.VideoTemplate]: () =>
        new I(this._createActionCopyParams(t)),
      [s.DAVideoProcessType.VideoBGM]: () =>
        new a_1(this._createBGMParams(t, i)),
      [s.DAVideoProcessType.MixAudioVideo]: () =>
        new a_1(this._createBGMParams(t, i)),
      [s.DAVideoProcessType.VideoAudioEffect]: () =>
        new x_3(this._createAudioEffectParams(t, i)),
    }[e];
  }
  _createBGMParams(e, t) {
    let i;
    let n;
    let r;
    let a;
    const { task } = e;
    const { submitId, taskPayload } = task;
    const { originItemId, originHistoryId, tags, duration } =
      (i = (a = task.aigcImageParams) == null ? undefined : a.videoBgmParams) !=
      null
        ? i
        : {};
    const p = this._getTaskExtra(taskPayload);
    return {
      input: {
        originHistoryId:
          (n =
            originHistoryId == null ? undefined : originHistoryId.toString()) !=
          null
            ? n
            : "",
        originItemId:
          (r = originItemId == null ? undefined : originItemId.toString()) !=
          null
            ? r
            : "",
        tags,
        duration: duration != null ? duration : 0,
      },
      mode: s.DAAIGCMode.workbench,
      commerceInfo: {},
      submitId,
      draftContent: t != null ? t : "",
      taskPayload: {
        taskExtra: p,
      },
      createTime: Date.now().toString(),
    };
  }
  _getTaskExtra(e) {
    if (e == null ? undefined : e.taskExtra) {
      return d.j(e == null ? undefined : e.taskExtra, {});
    }
  }
  _createAudioEffectParams(e, t) {
    let i;
    let n;
    let r;
    let a;
    let o;
    let l;
    let d;
    let u;
    let v;
    let c;
    const { task, itemList } = e;
    const { submitId, taskPayload } = task;
    const I = this._getTaskExtra(taskPayload);
    return {
      videoAudioInput: {
        originHistoryId:
          (i =
            itemList == null ||
            (l = itemList[0]) == null ||
            (o = l.aigcImageParams) == null ||
            (a = o.videoAudioEffectParams) == null ||
            (r = a.originHistoryId) == null
              ? undefined
              : r.toString()) != null
            ? i
            : "",
        originItemId:
          (n =
            itemList == null ||
            (c = itemList[0]) == null ||
            (v = c.aigcImageParams) == null ||
            (u = v.videoAudioEffectParams) == null ||
            (d = u.originItemId) == null
              ? undefined
              : d.toString()) != null
            ? n
            : "",
        originVideoDetail: {},
      },
      mode: s.DAAIGCMode.workbench,
      commerceInfo: {},
      submitId,
      draftContent: t != null ? t : "",
      taskPayload: {
        taskExtra: I,
      },
      createTime: Date.now().toString(),
    };
  }
  _createLipSyncParams(e, t) {
    let i;
    let n;
    let r;
    const { task, itemList, originHistoryRecordId } = e;
    const { submitId, taskPayload } = task;
    const v = this._getTaskExtra(taskPayload);
    return {
      input: {
        videoGenInputs: this._getVideoGenInput(e),
      },
      mode: s.DAAIGCMode.workbench,
      commerceInfo: {},
      submitId,
      originHistoryId: originHistoryRecordId,
      originItemId:
        (i =
          itemList == null ||
          (r = itemList[0]) == null ||
          (n = r.commonAttr) == null
            ? undefined
            : n.id) != null
          ? i
          : "",
      draftContent: t != null ? t : "",
      taskPayload: {
        taskExtra: v,
      },
      createTime: Date.now().toString(),
    };
  }
  _createLipSyncAvatarParams(e) {
    const { task } = e;
    const { submitId, taskPayload } = task;
    const r = this._getTaskExtra(taskPayload);
    return {
      input: {
        videoGenInputs: this._getVideoGenInput(e),
      },
      mode: s.DAAIGCMode.workbench,
      commerceInfo: {},
      submitId,
      taskPayload: {
        taskExtra: r,
      },
      createTime: Date.now().toString(),
    };
  }
  _createVideoGeneratorParams(e, t) {
    let i;
    let n;
    let r;
    const { task, itemList } = e;
    const { submitId, taskPayload } = task;
    const u = this._getTaskExtra(taskPayload);
    return {
      input:
        (i =
          itemList == null ||
          (r = itemList[0]) == null ||
          (n = r.aigcImageParams) == null
            ? undefined
            : n.text2videoParams) != null
          ? i
          : task.originalInput,
      mode: s.DAAIGCMode.workbench,
      commerceInfo: {},
      submitId,
      taskPayload: {
        taskExtra: u,
      },
      draftContent: t != null ? t : "",
      createTime: Date.now().toString(),
    };
  }
  _createVideoSuperResolutionParams(e, t) {
    let i;
    let n;
    let r;
    const { task, itemList, originHistoryRecordId } = e;
    const { submitId, taskPayload } = task;
    const v = this._getTaskExtra(taskPayload);
    return {
      input: {
        videoGenInputs: this._getVideoGenInput(e),
      },
      mode: s.DAAIGCMode.workbench,
      commerceInfo: {},
      submitId,
      originHistoryId: originHistoryRecordId,
      originItemId:
        (i =
          itemList == null ||
          (r = itemList[0]) == null ||
          (n = r.commonAttr) == null
            ? undefined
            : n.id) != null
          ? i
          : "",
      taskPayload: {
        taskExtra: v,
      },
      draftContent: t != null ? t : "",
      createTime: Date.now().toString(),
    };
  }
  _createInsertFrameParams(e, t) {
    let i;
    let n;
    let r;
    const { task, itemList, originHistoryRecordId } = e;
    const { submitId, taskPayload } = task;
    const v = this._getTaskExtra(taskPayload);
    return {
      input: {
        videoGenInputs: this._getVideoGenInput(e),
      },
      mode: s.DAAIGCMode.workbench,
      commerceInfo: {},
      submitId,
      originHistoryId: originHistoryRecordId || "",
      originItemId:
        (i =
          itemList == null ||
          (r = itemList[0]) == null ||
          (n = r.commonAttr) == null
            ? undefined
            : n.id) != null
          ? i
          : "",
      draftContent: t || "",
      taskPayload: {
        taskExtra: v,
      },
      createTime: Date.now().toString(),
    };
  }
  _createVideoExtendParams(e, t) {
    let i;
    let n;
    let r;
    let a;
    let o;
    const { task, itemList, originHistoryRecordId } = e;
    const { submitId, taskPayload } = task;
    const m = this._getTaskExtra(taskPayload);
    const { taskScene } =
      (i =
        (r = task.aigcImageParams) == null ? undefined : r.text2videoParams) !=
      null
        ? i
        : {};
    return {
      input: {
        videoGenInputs: this._getVideoGenInput(e),
      },
      scene: taskScene,
      mode: s.DAAIGCMode.workbench,
      commerceInfo: {},
      submitId,
      originHistoryId: originHistoryRecordId,
      originItemId:
        (n =
          itemList == null ||
          (o = itemList[0]) == null ||
          (a = o.commonAttr) == null
            ? undefined
            : a.id) != null
          ? n
          : "",
      draftContent: t != null ? t : "",
      taskPayload: {
        taskExtra: m,
      },
      createTime: Date.now().toString(),
    };
  }
  _createVideoLabSrExtendParams(e, t) {
    let i;
    let n;
    let r;
    let a;
    let o;
    const { task, itemList, originHistoryRecordId } = e;
    const { submitId, taskPayload } = task;
    const m = this._getTaskExtra(taskPayload);
    const { taskScene } =
      (i =
        (r = task.aigcImageParams) == null ? undefined : r.text2videoParams) !=
      null
        ? i
        : {};
    return {
      input: {
        videoGenInputs: this._getVideoGenInput(e),
      },
      scene: taskScene,
      mode: s.DAAIGCMode.workbench,
      commerceInfo: {},
      originHistoryId: originHistoryRecordId,
      originItemId:
        (n =
          itemList == null ||
          (o = itemList[0]) == null ||
          (a = o.commonAttr) == null
            ? undefined
            : a.id) != null
          ? n
          : "",
      submitId,
      draftContent: t != null ? t : "",
      taskPayload: {
        taskExtra: m,
      },
      createTime: Date.now().toString(),
    };
  }
  _createActionCopyParams(e) {
    const { task } = e;
    const { submitId, taskPayload } = task;
    const r = this._getTaskExtra(taskPayload);
    return {
      input: {
        videoGenInputs: this._getVideoGenInput(e),
      },
      mode: s.DAAIGCMode.workbench,
      commerceInfo: {},
      submitId,
      taskPayload: {
        taskExtra: r,
      },
      createTime: Date.now().toString(),
    };
  }
  _getImageDraftContentFromLegacyData(e) {
    let t;
    let i;
    let n;
    let r;
    const { itemList } = e;
    if (
      (itemList == null ? undefined : itemList.length) &&
      ((i = itemList[0]) == null ? undefined : i.aigcImageParams)
    ) {
      const { text2videoParams } = itemList[0].aigcImageParams;
      const { aigcImage } =
        (t =
          text2videoParams == null ||
          (n = text2videoParams.videoGenInputs[0]) == null
            ? undefined
            : n.firstFrameImage) != null
          ? t
          : {};
      if (aigcImage) {
        const { aigcImageParams, commonAttr } = aigcImage;
        const c = v.uc(JSON.stringify(aigcImageParams));
        const m = v.uc(
          JSON.stringify({
            commonAttr: {
              aspectRatio:
                commonAttr == null ? undefined : commonAttr.aspectRatio,
            },
          }),
        );
        if (
          (r = new s.ADTODA_ImageTransformer(c, m).convertToDraft()) == null
        ) {
          return undefined;
        }
        return r.toJSONString();
      }
    }
  }
  _getVideoGenInput(e) {
    let t;
    let i;
    let a;
    let o;
    let s;
    let l;
    let v;
    let c;
    const { task, itemList } = e;
    const f =
      (t =
        itemList == null ||
        (l = itemList[0]) == null ||
        (s = l.aigcImageParams) == null ||
        (o = s.text2videoParams) == null ||
        (a = o.videoGenInputs) == null
          ? undefined
          : a[0]) != null
        ? t
        : (v = task.originalInput) == null
          ? undefined
          : v.videoGenInputs[0];
    if (f) {
      return r._(n._({}, f), {
        v2vOpt: f.v2vOpt
          ? r._(n._({}, f.v2vOpt), {
              lipSync: f.v2vOpt.lipSync
                ? r._(n._({}, f.v2vOpt.lipSync), {
                    ttsInfo: u.o(
                      d.j((i = f.v2vOpt.lipSync.ttsInfo) != null ? i : "{}"),
                    ),
                  })
                : undefined,
              lipSyncUserVideo: f.v2vOpt.lipSyncUserVideo
                ? r._(n._({}, f.v2vOpt.lipSyncUserVideo), {
                    ttsInfo: u.o(d.j(f.v2vOpt.lipSyncUserVideo.ttsInfo)),
                  })
                : undefined,
            })
          : undefined,
        i2vOpt: f.i2vOpt
          ? r._(n._({}, f.i2vOpt), {
              realmanAvatar: (
                (c = f.i2vOpt) == null ? undefined : c.realmanAvatar
              )
                ? r._(n._({}, f.i2vOpt.realmanAvatar), {
                    ttsInfo: u.o(d.j(f.i2vOpt.realmanAvatar.ttsInfo)),
                  })
                : undefined,
            })
          : undefined,
      });
    }
  }
}
class ei extends b.h0 {
  preprocess(e) {
    const { inputData } = e;
    const {
      task: { originalInput, lipSyncInfo },
      itemList,
    } = inputData;
    if (originalInput && p(originalInput)) {
      const l = lipSyncInfo == null ? undefined : lipSyncInfo.lipSyncExtra;
      if (l) {
        try {
          let c;
          let m;
          let p;
          let f;
          let g;
          const I = d.j(l, {});
          if (!I) {
            return;
          }
          const { audio, video } = I;
          const h = u.o(
            d.j(
              (c =
                (p = inputData.task.taskPayload) == null
                  ? undefined
                  : p.taskExtra) != null
                ? c
                : "{}",
            ),
            v.Cb,
          );
          e.updateInputData({
            task: r._(n._({}, inputData.task), {
              originalInput: {
                videoGenInputs: [
                  {
                    videoMode: s.DAVideoMode.avatar,
                    v2vOpt: {
                      lipSync: {
                        originAudio: audio,
                        originVideo: video
                          ? r._(n._({}, video), {
                              videoId: video.vid,
                              originVideo: {
                                videoUrl: (
                                  itemList == null || (f = itemList[0]) == null
                                    ? undefined
                                    : f.video
                                )
                                  ? ee.q(
                                      itemList == null ||
                                        (g = itemList[0]) == null
                                        ? undefined
                                        : g.video,
                                    )
                                  : undefined,
                                vid: video.vid,
                              },
                            })
                          : undefined,
                        ttsInfo: JSON.stringify(
                          (m = h == null ? undefined : h.lipSyncInfo) != null
                            ? m
                            : {},
                        ),
                      },
                    },
                  },
                ],
              },
            }),
          });
        } catch (error) {
          Z.V.error(
            "LipSyncExtraPreprocessorPlugin",
            "Failed to parse lipSyncExtra:",
            error,
          );
        }
      }
    }
  }
}
class en extends b.Yc {
  executeFormat(e) {
    const { inputData } = e;
    e.updateOutputData(inputData);
  }
}
function es(e) {
  let t;
  let i;
  let n;
  let r;
  let a;
  let o;
  let s;
  let l;
  let d;
  let u;
  let v;
  let c;
  let p;
  let f;
  const g =
    (i = e.itemList) == null || (t = i[0]) == null
      ? undefined
      : t.commonAttr.coverUrlMap;
  if (g && Object.keys(g).length > 0) {
    return T_1(g);
  }
  if (
    (r = e.itemList) == null || (n = r[0]) == null
      ? undefined
      : n.commonAttr.coverUrl
  ) {
    if ((f = e.itemList[0]) == null) {
      return undefined;
    }
    return f.commonAttr.coverUrl;
  }
  const I = (a = e.task.firstFrameImage) == null ? undefined : a.imageUrl;
  if (I) {
    return I;
  }
  const _ =
    (d = e.task.originalInput) == null ||
    (l = d.videoGenInputs[0]) == null ||
    (s = l.i2vOpt) == null ||
    (o = s.realmanAvatar) == null
      ? undefined
      : o.originImage.imageUrl;
  const y =
    (p = e.task.originalInput) == null ||
    (c = p.videoGenInputs[0]) == null ||
    (v = c.v2vOpt) == null ||
    (u = v.lipSync) == null
      ? undefined
      : u.originVideo.coverUrl;
  if (y != null) {
    return y;
  }
  return _;
}
function el(e, t) {
  if (t.videoProcessType === s.DAVideoProcessType.VideoEdit) {
    let i;
    if (
      (i = ((e, t) => {
        let i;
        let n;
        let r;
        let a;
        let o;
        let s;
        let l;
        let d;
        const u =
          (o = e.task.originalInput) == null ||
          (a = o.videoGenInputs[0]) == null ||
          (r = a.unifiedEditInput) == null ||
          (n = r.materialList.find((e) => e.materialType === "video")) == null
            ? undefined
            : n.videoInfo;
        const v =
          (i = u == null ? undefined : u.coverUrl) != null
            ? i
            : u == null || (s = u.originVideo) == null
              ? undefined
              : s.coverUrl;
        if (v) {
          return v;
        }
        if ((l = t.coverInfo) == null ? undefined : l.imageUrl) {
          return t.coverInfo.imageUrl;
        }
        const c = (d = t.coverInfo) == null ? undefined : d.coverUrlMap;
        if (c && Object.keys(c).length > 0) {
          return T_1(c);
        }
      })(e, t)) != null
    ) {
      return i;
    }
    return es(e);
  }
  return es(e);
}
function ed(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function eu(e) {
  let t;
  if ((t = e == null ? undefined : e.longVideoInput) != null) {
    return t;
  }
  if (e == null) {
    return undefined;
  }
  return e.unifiedEditInput;
}
function ev(e) {
  return typeof e === "number" && Number.isFinite(e) && e > 0;
}
function ec(e) {
  let uploadedSuperResolutionSource;
  const i = {
    promptSource: "custom",
    enterFrom: "click",
  };
  if (!e) {
    return i;
  }
  const r = d.j(e, i);
  const a = ed(r) ? r : {};
  const a_uploadedSuperResolutionSource = a.uploadedSuperResolutionSource;
  if (
    ed(a_uploadedSuperResolutionSource) &&
    typeof a_uploadedSuperResolutionSource.vid === "string" &&
    a_uploadedSuperResolutionSource.vid.trim() &&
    [
      a_uploadedSuperResolutionSource.width,
      a_uploadedSuperResolutionSource.height,
      a_uploadedSuperResolutionSource.durationSeconds,
    ].every((e) => Number.isFinite(e) && e > 0)
  ) {
    const { vid, width, height, durationSeconds } =
      a_uploadedSuperResolutionSource;
    uploadedSuperResolutionSource = {
      vid,
      width,
      height,
      durationSeconds,
    };
  }
  return n._(
    {},
    i,
    Object.fromEntries(
      [
        "associatedSegmentId",
        "batchNumber",
        "drawType",
        "enterFrom",
        "enterScenario",
        "generateTimes",
        "impressionId",
        "isDefaultSeed",
        "originId",
        "originSubmitId",
        "originTemplateId",
        "previewId",
        "previewSubmitId",
        "peTaskId",
        "pluginSource",
        "promptEnhancementInfo",
        "promptType",
        "submitGroupId",
        "promptSource",
        "referenceTemplateCnt",
        "referenceTemplateId",
        "replyMessageId",
        "searchId",
        "searchKeyword",
        "searchRequestId",
        "templateDuration",
        "templateFrom",
        "templateId",
        "templatePrompt",
        "templateStyleCode",
        "templateTypeId",
        "isRegenerate",
        "functionMode",
        "generatorFeature",
        "videoProcessType",
        "videoStage",
        "coverInfo",
        "projectId",
        "sceneOptions",
        "showcaseId",
        "toolItemId",
      ]
        .filter((e) => a[e] !== undefined)
        .map((e) => [e, a[e]]),
    ),
    uploadedSuperResolutionSource
      ? {
          uploadedSuperResolutionSource,
        }
      : {},
  );
}
class em extends a_2 {
  get originVideo() {
    let e;
    let t;
    let i;
    let n;
    if ((e = (t = this.video) == null ? undefined : t.originVideo) != null) {
      return e;
    }
    if ((n = this.video) == null || (i = n.transcodedVideo) == null) {
      return undefined;
    }
    return i.origin;
  }
  get item() {
    return this.itemList[0];
  }
  get video() {
    let e;
    if ((e = this.item) == null) {
      return undefined;
    }
    return e.video;
  }
  get lastProcessFlow() {
    let e;
    if ((e = this.processFlows.at(-1)) == null) {
      return undefined;
    }
    return e.curProcessFlows.at(0);
  }
  constructor(e, t) {
    super(e, t);
    var i;
    var m;
    var S;
    var A;
    var b;
    var C;
    var k;
    var D;
    var w;
    var R;
    var P;
    var G;
    var E;
    var F;
    var O;
    var N;
    var j;
    var H;
    var B;
    var q;
    var J;
    var K;
    var Q;
    var z;
    var W;
    var Y;
    var X;
    var Z;
    var ee;
    var et;
    var er;
    var es;
    var ed;
    var em;
    var ep;
    var ef;
    var eg;
    var eI = new T.l("formatGenerateTaskRecordFromServer");
    eI.addProcessor(new M())
      .addProcessor(new x())
      .addProcessor(new V())
      .addProcessor(new L())
      .addProcessor(new U())
      .addProcessor(new $())
      .addProcessor(new ei())
      .addProcessor(new en());
    var e_ = t.generateType === f.ce.VideoDubbing;
    var enableTaskCancel =
      (em = t.task.originalInput) == null ||
      (ed = em.videoModelConfig) == null ||
      (es = ed.extra) == null
        ? undefined
        : es.enableTaskCancel;
    var eh = eI.executeFormatting(t);
    this.videoRatio = e.wrapper.videoRatio;
    this.videoModelConfig =
      ((i = t.modelInfo),
      i
        ? {
            modelName: i.modelName,
            modelTip: i.modelTip,
            modelReqKey: i.modelReqKey,
            modelTipStarlingKey: i.modelTipStarlingKey,
            modelNameStarlingKey: i.modelNameStarlingKey,
            featureKey: i.featureKey,
            options: i.videoModelOptions,
            extra: {
              enableTaskCancel,
            },
          }
        : ((m = eh.task.originalInput) == null ? undefined : m.videoModelConfig)
          ? r._(n._({}, eh.task.originalInput.videoModelConfig), {
              extra: r._(
                n._({}, eh.task.originalInput.videoModelConfig.extra),
                {
                  enableTaskCancel,
                },
              ),
            })
          : undefined);
    this.originalInput = eh.task.originalInput;
    this.draftContent = e_
      ? (X =
          (Z = t.draftContent) != null
            ? Z
            : (ep = t.task) == null
              ? undefined
              : ep.draftContent) != null
        ? X
        : ""
      : (ee = eh.task.draftContent) != null
        ? ee
        : "";
    this.generateType = eh.generateType;
    this.processFlows = (et = eh.task.processFlows) != null ? et : [];
    this.firstGenerateType = eh.task.firstGenerateType;
    this.lipSyncInfo = ((e) => {
      if (e.task.lipSyncInfo) {
        const { lipSyncDetectionStatus, lipSyncExtra } = e.task.lipSyncInfo;
        if (lipSyncDetectionStatus || lipSyncExtra) {
          return {
            lipSyncDetectionStatus,
            lipSyncExtra: lipSyncExtra ? u.o(d.j(lipSyncExtra)) : undefined,
          };
        }
      }
    })(eh);
    this.ttsInfo = ((e, t) => {
      if (N_1(e.task.originalInput)) {
        let i;
        let n;
        let r;
        const a =
          (r = e.task.originalInput) == null ||
          (n = r.videoGenInputs[0]) == null ||
          (i = n.v2vOpt) == null
            ? undefined
            : i.lipSyncUserVideo;
        if (!(a == null ? undefined : a.ttsInfo)) {
          return;
        }
        return u.o(d.j(a.ttsInfo), v.Cb);
      }
      if (r_1(e.task.originalInput)) {
        let o;
        let l;
        const c =
          (l = e.task.originalInput.videoGenInputs[0]) == null ||
          (o = l.i2vOpt) == null
            ? undefined
            : o.realmanAvatar;
        if (!(c == null ? undefined : c.ttsInfo)) {
          return;
        }
        return u.o(d.j(c.ttsInfo), v.Cb);
      }
      if (t === s.DAVideoProcessType.LipSync) {
        let m;
        let p;
        let f;
        const _ =
          (f = e.task.originalInput) == null ||
          (p = f.videoGenInputs[0]) == null ||
          (m = p.v2vOpt) == null
            ? undefined
            : m.lipSync;
        if (!(_ == null ? undefined : _.ttsInfo)) {
          return;
        }
        return u.o(d.j(_.ttsInfo), v.Cb);
      }
    })(eh, this.lastProcessFlow);
    this.audioData = ((e) => {
      let t;
      let i;
      let n;
      const { itemList } = e;
      const a = itemList == null ? undefined : itemList[0];
      if (a) {
        const { bgmData, videoAudioEffect, mixAvData } = a;
        const u = bgmData == null ? undefined : bgmData.bgmList;
        if (u) {
          const defaultIndex = u.findIndex((e) => {
            var t;
            return (
              e &&
              e.vid === ((t = bgmData.defaultBgm) == null ? undefined : t.vid)
            );
          });
          return {
            audioList: u.map((e, t) => {
              var i;
              var n = e ? "success" : "fail";
              var mixedVideo =
                mixAvData == null || (i = mixAvData.artifactList) == null
                  ? undefined
                  : i.find(
                      (t) => t.audioVid === (e == null ? undefined : e.vid),
                    );
              return {
                audio: e
                  ? {
                      vid: e.vid,
                      originAudio: e.originAudio,
                    }
                  : undefined,
                status: n,
                mixedVideo,
                displayContent: () => {
                  if (n === "fail") {
                    return o.Ay.t(
                      "music_fail_per_generate",
                      {},
                      "Couldn't generate",
                    );
                  }
                  return ""
                    .concat(o.Ay.t("music_scoring", {}, "Soundtrack"))
                    .concat(t + 1);
                },
              };
            }),
            defaultIndex,
          };
        }
        if (videoAudioEffect) {
          return {
            audioList:
              (t =
                (n = videoAudioEffect.resultList) == null
                  ? undefined
                  : n.filter(Boolean).map((e, t) => {
                      var { audio, mixedVideo, generateStatus, failCode } = e;
                      var s =
                        generateStatus === f.QH.Success ? "success" : "fail";
                      return {
                        audio: audio
                          ? {
                              vid: audio == null ? undefined : audio.vid,
                              originAudio:
                                audio == null ? undefined : audio.originAudio,
                            }
                          : undefined,
                        mixedVideo,
                        status: s,
                        failCode,
                        displayContent: () => {
                          if (s === "fail") {
                            return o.Ay.t(
                              "music_fail_per_generate",
                              {},
                              "Couldn't generate",
                            );
                          }
                          return [
                            o.Ay.t("sound_effect_1", {}, "Sound Effect 1"),
                            o.Ay.t("sound_effect_2", {}, "Sound Effect 2"),
                            o.Ay.t("sound_effect_3", {}, "Sound Effect 3"),
                          ][t];
                        },
                      };
                    })) != null
                ? t
                : [],
            defaultIndex:
              (i = videoAudioEffect.defaultAudioIdx) != null ? i : 0,
          };
        }
      }
    })(eh);
    this.videoDubbingInfo = ((e, t) => {
      let i;
      if (t.generateType === f.ce.VideoDubbing) {
        return {
          textToSpeechAbility: v_1(e.draft),
          unifiedEditInput: f_1(e.draft, t.resources),
          sourceMaterial: x_1(e.draft, t.resources),
          resources: t.resources,
          metricsExtra: n._(
            {
              isAiLyric: false,
              lyricCnt: 0,
              isRandomInspiration: false,
              enterFrom: "click",
            },
            d.j((i = t.metricsExtra) != null ? i : "", {}),
          ),
        };
      }
    })(e, t);
    this.firstFrameImageInputParams = eo.X({
      videoDraft: e.draft,
      resources: eh.resources,
      aigcImage:
        (b = eh.task.originalInput) == null ||
        (A = b.videoGenInputs[0]) == null ||
        (S = A.firstFrameImage) == null
          ? undefined
          : S.aigcImage,
    });
    this.prompt = ((e, t) => {
      if (e.generateType !== f.ce.VideoBGM) {
        if (e.generateType === f.ce.VideoDubbing) {
          return y(t == null ? undefined : t.unifiedEditInput);
        }
        let i;
        let n;
        let r;
        const a =
          (i = e.task.originalInput) == null ? undefined : i.videoGenInputs[0];
        const o = eu(a);
        const s = y(o);
        const l =
          a == null || (n = a.idipMetaList) == null
            ? undefined
            : n
                .filter((e) => e.metaType === "text")
                .map((e) => e.text)
                .join("");
        const d =
          a == null || (r = a.multiFrames) == null
            ? undefined
            : r
                .map((e) => e.prompt)
                .filter(Boolean)
                .join("");
        return s || l || d || (a == null ? undefined : a.prompt);
      }
    })(eh, this.videoDubbingInfo);
    this.promptRichText = ((e) => {
      let t;
      let i;
      let n;
      const r = eu(
        (i = e.task.originalInput) == null ? undefined : i.videoGenInputs[0],
      );
      if (e.generateType !== f.ce.VideoBGM && r) {
        const l =
          ec(
            (t = (n = e.task.taskPayload) == null ? undefined : n.taskExtra) !=
              null
              ? t
              : "{}",
          ).videoProcessType === s.DAVideoProcessType.VideoEdit;
        const d = (e, index, title) => {
          switch (e.materialType) {
            case "image":
              var { imageInfo } = e;
              if (!imageInfo || (!imageInfo.imageUrl && !imageInfo.imageUri)) {
                return null;
              }
              return {
                file: {
                  index,
                  type: a.NuroFileType.image,
                  url: imageInfo.imageUrl,
                  uri: imageInfo.imageUri,
                  width: imageInfo.width,
                  height: imageInfo.height,
                  title: title != null ? title : imageInfo.title,
                },
              };
            case "video":
              var r;
              var o;
              var s;
              var l;
              var d;
              var u;
              var v;
              var { videoInfo } = e;
              var p =
                videoInfo == null || (s = videoInfo.originVideo) == null
                  ? undefined
                  : s.videoUrl;
              if (!p) {
                return null;
              }
              return {
                file: {
                  index,
                  type: a.NuroFileType.video,
                  url: p,
                  coverUrl:
                    (r = videoInfo.coverUrl) != null
                      ? r
                      : (l = videoInfo.originVideo) == null
                        ? undefined
                        : l.coverUrl,
                  width:
                    (d = videoInfo.originVideo) == null ? undefined : d.width,
                  height:
                    (u = videoInfo.originVideo) == null ? undefined : u.height,
                  duration:
                    (o = videoInfo.duration) != null
                      ? o
                      : (v = videoInfo.originVideo) == null
                        ? undefined
                        : v.duration,
                  title,
                },
              };
            case "audio":
              var f;
              var g;
              var I;
              var _;
              var y;
              var h;
              var T;
              var S;
              var { audioInfo } = e;
              var b =
                (audioInfo == null || (I = audioInfo.originAudio) == null
                  ? undefined
                  : I.audioUrl) ||
                (audioInfo == null || (_ = audioInfo.originAudio) == null
                  ? undefined
                  : _.url);
              var uri =
                (audioInfo == null ? undefined : audioInfo.vid) ||
                (audioInfo == null || (y = audioInfo.originAudio) == null
                  ? undefined
                  : y.vid);
              if (!b && !uri) {
                return null;
              }
              return {
                file: {
                  index,
                  type: a.NuroFileType.audio,
                  url: b,
                  uri,
                  format:
                    audioInfo == null || (h = audioInfo.originAudio) == null
                      ? undefined
                      : h.format,
                  duration:
                    ((f =
                      audioInfo == null || (T = audioInfo.originAudio) == null
                        ? undefined
                        : T.durationMs) != null
                      ? f
                      : 0) / c.K,
                  title:
                    (g =
                      title != null
                        ? title
                        : audioInfo == null
                          ? undefined
                          : audioInfo.title) != null
                      ? g
                      : audioInfo == null || (S = audioInfo.originAudio) == null
                        ? undefined
                        : S.title,
                },
              };
            default:
              return null;
          }
        };
        if (!l) {
          const u = {
            image: 0,
            video: 0,
            audio: 0,
          };
          const v = r.materialList.map((e) => {
            if (!(e.materialType in u)) {
              return null;
            }
            var e_materialType = e.materialType;
            u[e_materialType] += 1;
            return d(e, u[e_materialType]);
          });
          const m = [];
          r.metaList.forEach((e) => {
            switch (e.metaType) {
              case "text":
                if (e.text) {
                  m.push({
                    text: e.text,
                  });
                }
                break;
              case "image":
              case "video":
              case "audio":
                if (
                  ((t = e.materialRef) == null ? undefined : t.materialIdx) ===
                  undefined
                ) {
                  break;
                }
                var t;
                var i = v[e.materialRef.materialIdx];
                if (i) {
                  m.push(i);
                }
            }
          });
          if (m.length > 0) {
            return m;
          }
          return undefined;
        }
        const p = {
          image: 0,
          video: 0,
          audio: 0,
        };
        const g = [];
        r.metaList.forEach((e) => {
          switch (e.metaType) {
            case "text":
              if (e.text) {
                g.push({
                  text: e.text,
                });
              }
              break;
            case "image":
            case "video":
            case "audio":
              if (
                ((t = e.materialRef) == null ? undefined : t.materialIdx) ===
                undefined
              ) {
                break;
              }
              var t;
              var i;
              var n;
              var a = r.materialList[e.materialRef.materialIdx];
              if (!a) {
                break;
              }
              var s =
                typeof ((i = e.materialRef.sourceInfo) == null
                  ? undefined
                  : i.timestampMs) === "number"
                  ? ((v = Math.floor(
                      (u = Math.max(
                        0,
                        Math.round(e.materialRef.sourceInfo.timestampMs / c.K),
                      )) / 60,
                    )),
                    (m = ""
                      .concat(String(v).padStart(2, "0"), ":")
                      .concat(String(u % 60).padStart(2, "0"))),
                    ""
                      .concat(m, " ")
                      .concat(
                        o.Ay.t(
                          "seedance_25_edit_frame_label",
                          {},
                          "视频帧标注",
                        ),
                      ))
                  : undefined;
              var l = 0;
              if (!s && a.materialType in p) {
                var u;
                var v;
                var m;
                var num;
                var I = a.materialType;
                p[I] += 1;
                l = p[I];
                num = String(p[I]);
                n =
                  I === "video"
                    ? o.Ay.t(
                        "seedance_25_edit_video_num",
                        {
                          num,
                        },
                        "视频".concat(num),
                      )
                    : I === "audio"
                      ? o.Ay.t(
                          "seedance_25_edit_audio_num",
                          {
                            num,
                          },
                          "音频".concat(num),
                        )
                      : o.Ay.t(
                          "seedance_25_edit_image_num",
                          {
                            num,
                          },
                          "图片".concat(num),
                        );
              }
              var _ = d(a, l, s != null ? s : n);
              if (_) {
                g.push(_);
              }
          }
        });
        if (g.length > 0) {
          return g;
        }
        return undefined;
      }
    })(eh);
    this.videoBgmParams =
      ((C = this.item),
      (k =
        (D = eh.task.aigcImageParams) == null ? undefined : D.videoBgmParams) !=
      null
        ? k
        : C == null || (w = C.aigcImageParams) == null
          ? undefined
          : w.videoBgmParams);
    this.videoAudioEffectParams =
      ((R = this.item),
      (P =
        (G = eh.task.aigcImageParams) == null
          ? undefined
          : G.videoAudioEffectParams) != null
        ? P
        : R == null || (E = R.aigcImageParams) == null
          ? undefined
          : E.videoAudioEffectParams);
    this.taskExtra = e_
      ? ec(t.metricsExtra || "")
      : ((q = (B = ec(
          ((F = eh.task.taskPayload) == null ? undefined : F.taskExtra) || "",
        )).uploadedSuperResolutionSource),
        (K =
          (J =
            (O = eh.task.originalInput) == null
              ? undefined
              : O.videoGenInputs[0]) == null || (N = J.v2vOpt) == null
            ? undefined
            : N.superResolution),
        (Q =
          (H = eh.task.processFlows) == null || (j = H.at(-1)) == null
            ? undefined
            : j.curProcessFlows.at(0)),
        q &&
          ((Q !== undefined && Q !== s.DAVideoProcessType.SR) ||
            q.vid !== (J == null ? undefined : J.vid) ||
            q.width !== (K == null ? undefined : K.originWidth) ||
            q.height !== K.originHeight) &&
          delete B.uploadedSuperResolutionSource,
        B);
    this.videoDuration = ((e, t, i) => {
      let n;
      let r;
      let a;
      let o;
      let s;
      let l;
      let d;
      let u;
      let v;
      let m;
      const p = e == null ? undefined : e.video.duration;
      if (
        i.uploadedSuperResolutionSource &&
        !(typeof p === "number" && Number.isFinite(p) && p > 0)
      ) {
        return i.uploadedSuperResolutionSource.durationSeconds;
      }
      if (ev(p)) {
        return p;
      }
      const f =
        (n = t.task.originalInput) == null ? undefined : n.videoGenInputs[0];
      const g =
        f == null || (a = f.v2vOpt) == null || (r = a.lipSyncUserVideo) == null
          ? undefined
          : r.originVideo.duration;
      if (ev(g)) {
        return g;
      }
      const I =
        f == null ||
        (l = f.i2vOpt) == null ||
        (s = l.realmanAvatar) == null ||
        (o = s.originAudio) == null
          ? undefined
          : o.duration;
      if (ev(I)) {
        return I;
      }
      const _ =
        f == null || (d = f.v2vOpt) == null ? undefined : d.videoTemplate;
      const y = _ == null || (u = _.videoInfo) == null ? undefined : u.duration;
      if (ev(y)) {
        return Math.min(y, 30);
      }
      const h =
        _ == null || (m = _.videoTemplateItem) == null || (v = m.video) == null
          ? undefined
          : v.duration;
      if (ev(h)) {
        return h;
      }
      const T = f == null ? undefined : f.durationMs;
      if (ev(T)) {
        return T / c.K;
      }
      return 0;
    })(this.item, eh, this.taskExtra);
    var eT =
      (eg = eh.task.originalInput) == null ||
      (ef = eg.videoGenInputs[0]) == null
        ? undefined
        : ef.durationMs;
    this.isAutoDuration = eT === -1 && this.videoDuration === 0;
    this.refInfo =
      ((z = this.refInfo),
      z
        ? ((e, t) => {
            if (e.refRecordInfo && !e.refRecordInfo.refItemInfo) {
              let i;
              let a;
              const o = ec(
                (i =
                  (a = t.task.taskPayload) == null ? undefined : a.taskExtra) !=
                  null
                  ? i
                  : "{}",
              );
              const {
                refHistoryId = "",
                refItemId,
                refAgenticHistoryId,
              } = e.refRecordInfo;
              const u = el(t, o);
              return r._(n._({}, e), {
                refRecordInfo: n._(
                  {
                    refHistoryId,
                    refAgenticHistoryId,
                    refItemId,
                  },
                  u
                    ? {
                        refItemInfo: {
                          imageUrl: u,
                        },
                      }
                    : {},
                ),
              });
            }
            return e;
          })(z, eh)
        : ((e) => {
            let t;
            let i;
            const r = ec(
              (t =
                (i = e.task.taskPayload) == null ? undefined : i.taskExtra) !=
                null
                ? t
                : "{}",
            );
            const { processFlows } = e.task;
            const o =
              r.videoProcessType === s.DAVideoProcessType.VideoEdit ||
              !!(processFlows && processFlows.length > 1);
            if (r.originId && o) {
              const d = el(e, r);
              return {
                refType: l.DMLAigcDataRefType.History,
                refRecordInfo: n._(
                  {
                    refHistoryId: r.originId,
                  },
                  d
                    ? {
                        refItemInfo: {
                          imageUrl: d,
                        },
                      }
                    : {},
                ),
              };
            }
          })(eh));
    this.failedItemList =
      (W = (Y = t.failedItemList) == null ? undefined : Y.map((e) => r_2(e))) !=
      null
        ? W
        : [];
    this.preGenItemIds = (er = t.preGenItemIds) != null ? er : [];
    this.forecastResolution = t.forecastResolution;
  }
}
export { em as w };
function ep(e) {
  return new em(l.DMLAigcData.build(JSON.stringify(e)), u.o(e, v.Cb));
}
export { ep as o };
