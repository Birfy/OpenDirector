import n from "oa";
import a from "bk";
import o from "Ut";
import { q } from "./module-wEp.js";
import { u } from "./module-GuR.js";
import { M, h } from "./module-e6s.js";
import { X, c as c_1 } from "./module-NaK.js";
import { N, a as a_1 } from "./module-y3V.js";
function s(originAudio) {
  if (originAudio == null ? undefined : originAudio.vid) {
    return {
      vid: originAudio.vid,
      originAudio,
    };
  }
}
function g(e, t) {
  const i = M(e == null ? undefined : e.audioInfo, t);
  if (i == null ? undefined : i.originAudio) {
    return {
      audioInfo: i.originAudio,
      source: ((e) => {
        switch (e) {
          case o.VoiceSourceType.VoiceSourceTypeGenerated:
            return u.VoiceSourceTypeGenerated;
          case o.VoiceSourceType.VoiceSourceTypeUpload:
            return u.VoiceSourceTypeUpload;
          default:
            return;
        }
      })(e == null ? undefined : e.source),
    };
  }
}
function p(e) {
  const t = h(s(e == null ? undefined : e.audioInfo));
  if (t) {
    const i = new o.DAVoiceResource();
    i.audioInfo = t;
    i.source = ((e) => {
      switch (e) {
        case u.VoiceSourceTypeUpload:
          return o.VoiceSourceType.VoiceSourceTypeUpload;
        case u.VoiceSourceTypeGenerated:
        default:
          return o.VoiceSourceType.VoiceSourceTypeGenerated;
      }
    })(e == null ? undefined : e.source);
    return i;
  }
}
function c(e, t) {
  if (e == null ? undefined : e.content) {
    let i;
    let o;
    let l;
    let s;
    let p;
    let c;
    let v;
    const mainImage = X(e.content.mainImage, t);
    const I =
      (c = e.content.auxiliaryImages) == null
        ? undefined
        : c.map((e) => X(e, t)).filter((e) => e !== undefined);
    const y = N(e.content.videoInfo, t);
    const videoInfo = y
      ? ((p = y.originVideo),
        a._(n._({}, p != null ? p : {}), {
          vid: (i = p == null ? undefined : p.vid) != null ? i : y.videoId,
          videoUrl: (o = p == null ? undefined : p.videoUrl) != null ? o : q(y),
          coverUrl:
            (l = y.coverUrl) != null ? l : p == null ? undefined : p.coverUrl,
          duration:
            (s = y.duration) != null ? s : p == null ? undefined : p.duration,
        }))
      : undefined;
    const A = M(e.content.audioInfo, t);
    const audioInfo = A == null ? undefined : A.originAudio;
    const D =
      (v = e.content.voiceList) == null
        ? undefined
        : v.map((e) => g(e, t)).filter((e) => e !== undefined);
    const selectedVoice = g(e.content.selectedVoice, t);
    return {
      uid: String(e.uid),
      subjectId: String(e.subjectId),
      dataId: String(e.dataId),
      content: {
        name: e.content.name,
        description: e.content.paramDescription,
        mainImage,
        auxiliaryImages: (I == null ? undefined : I.length) ? I : undefined,
        videoInfo,
        audioInfo,
        voiceList: (D == null ? undefined : D.length) ? D : undefined,
        selectedVoice,
      },
      subjectControl: e.subjectControl,
    };
  }
}
export { c as a };
export function d(e) {
  if (e) {
    let t;
    let i;
    const n = new o.DASubjectData();
    n.uid = e.uid;
    n.subjectId = e.subjectId;
    n.dataId = e.dataId;
    n.content = new o.DASubjectContent();
    n.content.name = e.content.name;
    n.content.paramDescription = e.content.description;
    n.content.mainImage = c_1(e.content.mainImage);
    n.content.videoInfo = a_1(e.content.videoInfo);
    n.content.audioInfo = h(s(e.content.audioInfo));
    n.content.selectedVoice = p(e.content.selectedVoice);
    const a =
      (t = e.content.auxiliaryImages) == null
        ? undefined
        : t.map((e) => c_1(e)).filter((e) => e !== undefined);
    const r =
      (i = e.content.voiceList) == null
        ? undefined
        : i.map((e) => p(e)).filter((e) => e !== undefined);
    if (a == null ? undefined : a.length) {
      n.content.auxiliaryImages = a;
    }
    if (r == null ? undefined : r.length) {
      n.content.voiceList = r;
    }
    if (e.subjectControl) {
      const l = new o.DASubjectDataControl();
      l.status = e.subjectControl.status;
      l.enabled = e.subjectControl.enabled;
      l.deletable = e.subjectControl.deletable;
      l.editable = e.subjectControl.editable;
      l.isPublished = e.subjectControl.isPublished;
      n.subjectControl = l;
    }
    return n;
  }
}
