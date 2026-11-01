import n from "Jhy";
import { l } from "./module-zid.js";
import o from "I3";
import { Yc } from "./module-wz_2.js";
import { H } from "./module-iM.js";
import { RL, wD } from "./module-d8m.js";
import s from "Ut";
import { w } from "./module-kb.js";
import { b } from "./module-y6.js";
import { Uu } from "./module-Tc1.js";
import { Q } from "./module-BHo.js";
import { t as t_1 } from "./module-Mg.js";
import { c as c_1 } from "./module-yXq.js";
import { n as n_1 } from "./module-J1.js";
import { N } from "./module-y3V.js";
import { X } from "./module-qU_2.js";
import { K } from "./module-fD_3.js";
import { r as r_1 } from "./module-XS.js";
import { n as n_2 } from "./module-w7.js";
import { M } from "./module-nfs.js";
import { I as I_1 } from "./module-fl_2.js";
import { k } from "./module-w1u.js";
import { J } from "./module-OY_2.js";
import { oy } from "./module-ad_3.js";
import { $ } from "./module-oFp_2.js";
const r = [
  "firstLastFrames",
  "multiFrames",
  "omniReference",
  "videoEdit",
  "longVideo",
];
class m extends Yc {
  executeFormat(e) {
    const {
      inputData: { draftContent, modelInfo },
    } = e;
    const n = RL(draftContent);
    const a = wD(draftContent);
    if (n) {
      e.updateOutputData({
        videoAspectRatio: this._getVideoAspectRatioFromComponent(a),
        seed: this._getSeedFromComponent(n),
        taskScene: this._getTaskSceneFromComponent(n),
        modelReqKey: this._getModelReqKeyFromComponent(a),
        generatorFeature: this._getGeneratorFeatureFromComponent(a),
        videoModelConfig: modelInfo,
      });
    }
  }
  _getVideoAspectRatioFromComponent(e) {
    let t;
    let i;
    let n;
    if (e) {
      if (
        (n = e.abilities) == null ||
        (i = n.genVideo) == null ||
        (t = i.text2VideoParams) == null
      ) {
        return undefined;
      }
      return t.videoAspectRatio;
    }
  }
  _getSeedFromComponent(e) {
    let t;
    let i;
    let n;
    if (
      (n = e.abilities) == null ||
      (i = n.genVideo) == null ||
      (t = i.text2VideoParams) == null
    ) {
      return undefined;
    }
    return t.seed;
  }
  _getTaskSceneFromComponent(e) {
    return H(e);
  }
  _getModelReqKeyFromComponent(e) {
    let t;
    let i;
    let n;
    if (e) {
      if (
        (n = e.abilities) == null ||
        (i = n.genVideo) == null ||
        (t = i.text2VideoParams) == null
      ) {
        return undefined;
      }
      return t.modelReqKey;
    }
  }
  _getGeneratorFeatureFromComponent(e) {
    let t;
    let i;
    let n;
    const a = o.j(
      (t =
        e == null || (n = e.abilities) == null || (i = n.genVideo) == null
          ? undefined
          : i.videoTaskExtra) != null
        ? t
        : "{}",
      {},
    );
    const l = a == null ? undefined : a.generatorFeature;
    if (r.includes(l)) {
      return l;
    }
  }
}
class y extends Yc {
  executeFormat(e) {
    const { inputData } = e;
    const { draftContent } = inputData;
    const n = wD(draftContent);
    if (n) {
      const realmanAvatar = this._getLipSyncImageInputParams(n, inputData);
      if ([realmanAvatar].some(Boolean)) {
        e.updateOutputData({
          videoGenInputs: [
            {
              videoMode: this._getVideoMode(n),
              i2vOpt: {
                realmanAvatar,
              },
              prompt: this._getPrompt(n),
            },
          ],
          modelReqKey: this._getModelReqKey(n),
        });
      }
    }
  }
  _getPrompt(e) {
    let t;
    const i = (t = e.abilities) == null ? undefined : t.lipSync;
    if (
      i &&
      (i == null ? undefined : i.referenceType) ===
        s.DALipSyncReferenceType.image
    ) {
      return i.prompt;
    }
  }
  _getModelReqKey(e) {
    let t;
    let i;
    if ((i = e.abilities) == null || (t = i.lipSync) == null) {
      return undefined;
    }
    return t.modelReqKey;
  }
  _getVideoMode(e) {
    let t;
    let i;
    return c_1.lipSyncModeToVideoMode(
      (i = e.abilities) == null || (t = i.lipSync) == null ? undefined : t.mode,
    );
  }
  _getLipSyncImageInputParams(e, t) {
    let i;
    let n;
    let a;
    let o;
    const { resources, lipSyncIdInfo } = t;
    const d = (a = e.abilities) == null ? undefined : a.lipSync;
    if (
      d &&
      (d == null ? undefined : d.referenceType) ===
        s.DALipSyncReferenceType.image
    ) {
      const u = w(d.audio, resources);
      if (u) {
        const m = lipSyncIdInfo != null ? lipSyncIdInfo : b(d);
        return {
          originImage: Uu(d.image, resources),
          originAudio: u,
          ttsInfo: JSON.stringify(Q(d)),
          voiceInfo: m
            ? {
                idInfo: m,
              }
            : undefined,
          supportedModes:
            (i =
              (o = d.supportedModes) == null
                ? undefined
                : o
                    .map(c_1.lipSyncModeToVideoMode)
                    .filter((e) => e !== undefined)) != null
              ? i
              : [
                  (n = c_1.lipSyncModeToVideoMode(d.mode)) != null
                    ? n
                    : s.DAVideoMode.avatar,
                ],
          audioBeforeConversion: w(d.audioBeforeConversion, resources),
          selectedFace: t_1(d.selectedFace, resources),
          beforeSilenceMillisecond: d.beforeSilenceMillisecond,
          afterSilenceMillisecond: d.afterSilenceMillisecond,
        };
      }
    }
  }
}
class R extends Yc {
  executeFormat(e) {
    let t;
    let i;
    let n;
    let a;
    let o;
    let r;
    let l;
    let d;
    let m;
    const { inputData } = e;
    const { draftContent } = inputData;
    const c = RL(draftContent);
    const v = wD(draftContent);
    if (c && v) {
      const videoTemplate = this._getVideoTemplateParams(v, inputData);
      const lipSync = this._getLipSyncInputParams(c, inputData);
      const insertFrame = this._getInsertFrameInputParams(c);
      const superResolution = this._getSuperResolutionInputParams(c);
      const labSr = this._getLabSrInputParams(c);
      const extend = this._getExtendInputParams(c);
      const lipSyncUserVideo = this._getLipSyncVideoInputParams(v, inputData);
      if (
        [
          lipSync,
          videoTemplate,
          insertFrame,
          superResolution,
          labSr,
          extend,
          lipSyncUserVideo,
        ].some(Boolean)
      ) {
        const b =
          (t = (n = c.abilities) == null ? undefined : n.lipSync) != null
            ? t
            : (a = v.abilities) == null
              ? undefined
              : a.lipSync;
        let videoMode = c_1.lipSyncModeToVideoMode(
          b == null ? undefined : b.mode,
        );
        if (!videoMode && lipSyncUserVideo) {
          videoMode = s.DAVideoMode.avatar;
        }
        const vid =
          (i =
            lipSync == null || (o = lipSync.originVideo) == null
              ? undefined
              : o.videoId) != null
            ? i
            : (m = c.abilities) == null ||
                (d = m.genVideo) == null ||
                (l = d.text2VideoParams) == null ||
                (r = l.videoGenInputs) == null
              ? undefined
              : r[0].vid;
        e.updateOutputData({
          videoGenInputs: [
            {
              videoMode,
              vid,
              v2vOpt: {
                insertFrame,
                superResolution,
                lipSync,
                videoTemplate,
                labSr,
                extend,
                lipSyncUserVideo,
              },
            },
          ],
        });
      }
    }
  }
  _getVideoTemplateParams(e, t) {
    let i;
    let n;
    let a;
    let o;
    let r;
    const { resources, videoTemplateItem } = t;
    const u =
      (n = e.abilities) == null || (i = n.genVideo) == null
        ? undefined
        : i.text2VideoParams;
    if (u) {
      return n_1(
        (r = u.videoGenInputs) == null ||
          (o = r[0]) == null ||
          (a = o.v2vOpt) == null
          ? undefined
          : a.videoTemplate,
        resources,
        videoTemplateItem,
      );
    }
  }
  _getLipSyncInputParams(e, t) {
    let i;
    let n;
    let a;
    let o;
    let r;
    let l;
    let d;
    let u;
    const { resources } = t;
    const c = (o = e.abilities) == null ? undefined : o.lipSync;
    if (c && c.referenceType === s.DALipSyncReferenceType.aiVideo) {
      const f = N(c.video, resources);
      const y = w(c.audio, resources);
      if (y && f) {
        const h = b(c);
        return {
          videoItemId:
            (i =
              (d = c.video) == null ||
              (l = d.aigcVideo) == null ||
              (r = l.itemId) == null
                ? undefined
                : r.toString()) != null
              ? i
              : "",
          originAudio: y,
          ttsInfo: JSON.stringify(Q(c)),
          voiceInfo: h
            ? {
                idInfo: h,
              }
            : undefined,
          audioBeforeConversion: w(c.audioBeforeConversion, resources),
          supportedModes:
            (n =
              (u = c.supportedModes) == null
                ? undefined
                : u
                    .map(c_1.lipSyncModeToVideoMode)
                    .filter((e) => e !== undefined)) != null
              ? n
              : [
                  (a = c_1.lipSyncModeToVideoMode(c.mode)) != null
                    ? a
                    : s.DAVideoMode.avatar,
                ],
          originVideo: f,
        };
      }
    }
  }
  _getLipSyncVideoInputParams(e, t) {
    let i;
    let n;
    let a;
    let o;
    const { resources, lipSyncIdInfo } = t;
    const d = (a = e.abilities) == null ? undefined : a.lipSync;
    if (
      d &&
      (d == null ? undefined : d.referenceType) ===
        s.DALipSyncReferenceType.video
    ) {
      const u = w(d.audio, resources);
      const m = N(d.video, resources);
      if (u && m) {
        const c = lipSyncIdInfo != null ? lipSyncIdInfo : b(d);
        return {
          originVideo: m,
          originAudio: u,
          ttsInfo: JSON.stringify(Q(d)),
          voiceInfo: c
            ? {
                idInfo: c,
              }
            : undefined,
          supportedModes:
            (i =
              (o = d.supportedModes) == null
                ? undefined
                : o
                    .map(c_1.lipSyncModeToVideoMode)
                    .filter((e) => e !== undefined)) != null
              ? i
              : [
                  (n = c_1.lipSyncModeToVideoMode(d.mode)) != null
                    ? n
                    : s.DAVideoMode.avatar,
                ],
          audioBeforeConversion: w(d.audioBeforeConversion, resources),
        };
      }
    }
  }
  _getInsertFrameInputParams(e) {
    let t;
    let i;
    let n;
    let a;
    let o;
    let r;
    const l =
      (r = e.abilities) == null ||
      (o = r.genVideo) == null ||
      (a = o.text2VideoParams) == null ||
      (n = a.videoGenInputs) == null ||
      (i = n[0]) == null ||
      (t = i.v2vOpt) == null
        ? undefined
        : t.insertFrame;
    if (l) {
      return X(l);
    }
  }
  _getSuperResolutionInputParams(e) {
    let t;
    let i;
    let n;
    let a;
    let o;
    let r;
    const l =
      (r = e.abilities) == null ||
      (o = r.genVideo) == null ||
      (a = o.text2VideoParams) == null ||
      (n = a.videoGenInputs) == null ||
      (i = n[0]) == null ||
      (t = i.v2vOpt) == null
        ? undefined
        : t.superResolution;
    if (l) {
      return K(l);
    }
  }
  _getExtendInputParams(e) {
    let t;
    let i;
    let n;
    let a;
    let o;
    let r;
    const l =
      (r = e.abilities) == null ||
      (o = r.genVideo) == null ||
      (a = o.text2VideoParams) == null ||
      (n = a.videoGenInputs) == null ||
      (i = n[0]) == null ||
      (t = i.v2vOpt) == null
        ? undefined
        : t.extend;
    if (l) {
      return r_1(l);
    }
  }
  _getLabSrInputParams(e) {
    let t;
    let i;
    let n;
    let a;
    let o;
    let r;
    const l =
      (r = e.abilities) == null ||
      (o = r.genVideo) == null ||
      (a = o.text2VideoParams) == null ||
      (n = a.videoGenInputs) == null ||
      (i = n[0]) == null ||
      (t = i.v2vOpt) == null
        ? undefined
        : t.labSr;
    if (l) {
      return n_2(l);
    }
  }
}
class x extends Yc {
  executeFormat(e) {
    const { inputData } = e;
    const i = this._getVideoGenInput(inputData);
    if (i) {
      e.updateOutputData({
        videoGenInputs: [i],
      });
    }
  }
  _getVideoGenInput(e) {
    let t;
    let i;
    let n;
    let a;
    let o;
    let r;
    let l;
    let d;
    let m;
    let s;
    const { draftContent, resources, originText2VideoParams } = e;
    const f = wD(draftContent);
    const I =
      f == null ||
      (r = f.abilities) == null ||
      (o = r.genVideo) == null ||
      (a = o.text2VideoParams) == null
        ? undefined
        : a.videoGenInputs;
    if (I == null ? undefined : I[0]) {
      const y = I[0];
      return {
        prompt: y.prompt,
        isDraftMode: y.isDraft,
        firstFrameImage: Uu(y.firstFrameImage, resources),
        endFrameImage: Uu(y.endFrameImage, resources),
        lensMotionType: y.lensMotionType,
        vid: (t = y.vid) != null ? t : "",
        audioVid: y.audioVid ? String(y.audioVid) : undefined,
        videoMode: y.videoMode,
        durationMs: y.durationMs,
        resolution: y.resolution,
        cameraStrength: y.cameraStrength,
        motionSpeed:
          (i =
            originText2VideoParams == null ||
            (d = originText2VideoParams.videoGenInputs) == null ||
            (l = d[0]) == null
              ? undefined
              : l.motionSpeed) != null
            ? i
            : y.motionSpeed,
        fps:
          (n =
            originText2VideoParams == null ||
            (s = originText2VideoParams.videoGenInputs) == null ||
            (m = s[0]) == null
              ? undefined
              : m.fps) != null
            ? n
            : y.fps,
        lensRecipeInput: M(y.lensRecipeInput),
        multiFrames: I_1(y.multiFrames, resources),
        idipFrames: k(y.idipFrames, resources),
        idipMetaList: J(y.idipMetaList),
        unifiedEditInput: oy(y.unifiedEditInput, resources),
        longVideoInput: $(y.longVideoInput, resources),
      };
    }
  }
}
export function z(e) {
  let t;
  const i = new l("formatOriginalInputByDraft");
  i.addProcessor(new m())
    .addProcessor(new x())
    .addProcessor(new R())
    .addProcessor(new y());
  return n.A(
    (t = e.originText2VideoParams) != null ? t : {},
    i.executeFormatting(e),
  );
}
