import n from "Dm";
import a from "oa";
import o from "bk";
import { m as m_1 } from "./module-vI1.js";
import l from "hA";
import { T } from "./module-xcN.js";
import { K } from "./module-dwy.js";
import { m } from "./module-BUz.js";
import s from "H26";
import { q } from "./module-WQ_2.js";
import { wD } from "./module-d8m.js";
import { z } from "./module-ACb.js";
import v from "yMd";
import f from "fg";
import I from "I3";
import { X } from "./module-Lea.js";
import h from "A3X";
import { R } from "./module-d5.js";
import { X as X_1 } from "./module-Ju.js";
import { d } from "./module-xUn.js";
import { O } from "./module-xd.js";
import { S } from "./module-zL_3.js";
import { u } from "./module-Fk_2.js";
function P(e) {
  if (S(e)) {
    return m(e);
  }
  if (u(e)) {
    return ((e) => {
      n.X3(h.v(e.commonAttr.effectType), "data is not work detail video");
      n.X3(e.video, "video is not exist");
      let t;
      let i;
      let l;
      let d;
      let u;
      let m;
      let A;
      let T;
      const video = ((e) => {
        const {
          durationInfo,
          originVideo,
          transcodedVideo,
          durationMs,
          duration,
        } = e;
        const d = ((e) => {
          if (!e) {
            return {
              playInfoDuration: 0,
              audioStreamingDuration: 0,
              videoStreamingDuration: 0,
            };
          }
          const t = f.o(I.j(e));
          return {
            playInfoDuration: t.playInfoDuration,
            audioStreamingDuration: t.aDuration,
            videoStreamingDuration: t.vDuration,
          };
        })(durationInfo);
        const durationMs_1 = d.playInfoDuration
          ? d.playInfoDuration * s.K
          : durationMs;
        const duration_1 = durationMs_1
          ? Math.round(durationMs_1 / s.K)
          : duration;
        return o._(a._({}, e), {
          durationMs: durationMs_1,
          duration: duration_1,
          originVideo:
            originVideo != null
              ? originVideo
              : transcodedVideo == null
                ? undefined
                : transcodedVideo.origin,
          videoId: e.videoId || "",
        });
      })(e.video);
      const firstFrameImageAigcParams = X({
        videoDraft: (i = e.aigcDraft) == null ? undefined : i.content,
        resources: e.aigcDraftResources,
        aigcImage:
          (A = e.aigcImageParams) == null ||
          (m = A.text2videoParams) == null ||
          (u = m.videoGenInputs) == null ||
          (d = u[0]) == null ||
          (l = d.firstFrameImage) == null
            ? undefined
            : l.aigcImage,
      });
      const aigcImageParams = ((e) => {
        let t;
        const {
          aigcImageParams,
          aigcDraft: { content } = {},
          aigcDraftResources,
        } = e;
        if (
          !aigcImageParams ||
          aigcImageParams.generateType === v.ce.VideoDubbing
        ) {
          return aigcImageParams;
        }
        if (!content) {
          const { generateType } = aigcImageParams;
          if ([v.ce.Image2Avatar, v.ce.Video2Avatar].includes(generateType)) {
            return o._(a._({}, aigcImageParams), {
              generateType: v.ce.LipSync,
            });
          }
          return aigcImageParams;
        }
        const d = wD(content);
        const firstGenerateType = d ? q[d.generateType] : undefined;
        const aigcImageParams_text2videoParams =
          aigcImageParams.text2videoParams;
        const text2videoParams = z({
          draftContent: content,
          resources: aigcDraftResources,
          videoTemplateItem: e.videoTemplateItem,
          originText2VideoParams: aigcImageParams_text2videoParams,
          lipSyncIdInfo:
            (t = aigcImageParams.publishedVoiceInfo) == null
              ? undefined
              : t.idInfo,
        });
        return o._(a._({}, aigcImageParams), {
          text2videoParams,
          firstGenerateType,
        });
      })(e);
      const shortVideoData = {
        downloadable:
          (t = (T = e.shortVideoData) == null ? undefined : T.downloadable) !=
            null && t,
      };
      const { videoAudioEffect, bgmData, mixAvData, multiFramesData } = e;
      return o._(a._({}, m_1(e)), {
        subtitle: e.subtitle,
        aigcImageParams,
        firstFrameImageAigcParams,
        video,
        videoAudioEffect,
        bgmData,
        mixAvData,
        shortVideoData,
        multiFramesData,
      });
    })(e);
  }
  if (d(e)) {
    return T(e);
  }
  if (X_1(e)) {
    n.X3(l.i(e.commonAttr.effectType), "data is not work detail canvas");
    n.X3(e.image, "canvas is not exist");
    return o._(a._({}, m_1(e)), {
      canvas: e.image,
    });
  }
  if (R(e)) {
    return ((e) => {
      let t;
      let i;
      const { commonAttr, audio } = e;
      const {
        coverUri,
        coverUrl,
        coverWidth,
        coverHeight,
        coverUrlMap,
        title,
      } = commonAttr;
      const c = o._(a._({}, m_1(e)), {
        subtitle: e.subtitle,
        audio,
      });
      const v = (t = c.audio) == null ? undefined : t.originAudio;
      c.audioCover = {
        imageUri: coverUri,
        imageUrl: coverUrl,
        width: coverWidth,
        height: coverHeight,
        coverUrlMap,
        originUrl: coverUrl,
      };
      c.audioTitle = (v == null ? undefined : v.title) || title;
      c.lyrics = v == null ? undefined : v.lyrics;
      c.captions =
        v == null || (i = v.captions) == null
          ? undefined
          : i.map((e) => ({
              startTimeMs: typeof e.startTime === "number" ? e.startTime : 0,
              endTimeMs: typeof e.endTime === "number" ? e.endTime : 0,
              text: e.text || "",
              words: Array.isArray(e.words)
                ? e.words.map((e) => ({
                    startTimeMs:
                      typeof e.startTime === "number" ? e.startTime : 0,
                    endTimeMs: typeof e.endTime === "number" ? e.endTime : 0,
                    text: e.text || "",
                  }))
                : [],
            }));
      return c;
    })(e);
  }
  if (O(e)) {
    return K(e);
  }
  n.Iv("effectType is not supported");
}
export { P as v };
