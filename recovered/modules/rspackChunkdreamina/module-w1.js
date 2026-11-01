import { DANode } from "./module-uR.js";
import { DAAudioResource } from "./module-GL.js";
import { DAImageResource } from "./module-HS.js";
import { DAVideoResource } from "./module-Wq.js";
import { DAVoiceResource } from "./module-vU.js";
import l from "Rd";
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
export class DASubjectContent extends DANode {
  constructor() {
    super(...arguments);
    this.name = "";
    this.paramDescription = undefined;
    this.mainImage = undefined;
    this.auxiliaryImages = undefined;
    this.videoInfo = undefined;
    this.audioInfo = undefined;
    this.voiceList = undefined;
    this.selectedVoice = undefined;
  }
  childNodes() {
    let e = [];
    if (this.mainImage != undefined) {
      e.push(this.mainImage);
    }
    let auxiliaryImages = this.auxiliaryImages;
    if (auxiliaryImages != undefined) {
      auxiliaryImages.forEach((t) => {
        e.push(t);
      });
    }
    if (this.videoInfo != undefined) {
      e.push(this.videoInfo);
    }
    if (this.audioInfo != undefined) {
      e.push(this.audioInfo);
    }
    let voiceList = this.voiceList;
    if (voiceList != undefined) {
      voiceList.forEach((t) => {
        e.push(t);
      });
    }
    if (this.selectedVoice != undefined) {
      e.push(this.selectedVoice);
    }
    return e;
  }
}
o([l.serializable("name")], DASubjectContent.prototype, "name", undefined);
o(
  [l.serializable("description")],
  DASubjectContent.prototype,
  "paramDescription",
  undefined,
);
o(
  [l.serializable("main_image", () => DAImageResource)],
  DASubjectContent.prototype,
  "mainImage",
  undefined,
);
o(
  [l.serializable("auxiliary_images", () => DAImageResource)],
  DASubjectContent.prototype,
  "auxiliaryImages",
  undefined,
);
o(
  [l.serializable("video_info", () => DAVideoResource)],
  DASubjectContent.prototype,
  "videoInfo",
  undefined,
);
o(
  [l.serializable("audio_info", () => DAAudioResource)],
  DASubjectContent.prototype,
  "audioInfo",
  undefined,
);
o(
  [l.serializable("voice_list", () => DAVoiceResource)],
  DASubjectContent.prototype,
  "voiceList",
  undefined,
);
o(
  [l.serializable("selected_voice", () => DAVoiceResource)],
  DASubjectContent.prototype,
  "selectedVoice",
  undefined,
);
export class DASubjectDataControl extends DANode {
  constructor() {
    super(...arguments);
    this.status = undefined;
    this.enabled = undefined;
    this.deletable = undefined;
    this.editable = undefined;
    this.isPublished = undefined;
  }
  childNodes() {
    return [];
  }
}
o(
  [l.serializable("status")],
  DASubjectDataControl.prototype,
  "status",
  undefined,
);
o(
  [l.serializable("enabled")],
  DASubjectDataControl.prototype,
  "enabled",
  undefined,
);
o(
  [l.serializable("deletable")],
  DASubjectDataControl.prototype,
  "deletable",
  undefined,
);
o(
  [l.serializable("editable")],
  DASubjectDataControl.prototype,
  "editable",
  undefined,
);
o(
  [l.serializable("is_published")],
  DASubjectDataControl.prototype,
  "isPublished",
  undefined,
);
export class DASubjectData extends DANode {
  constructor() {
    super(...arguments);
    this.uid = "";
    this.subjectId = "";
    this.dataId = "";
    this.content = undefined;
    this.subjectControl = undefined;
  }
  childNodes() {
    let e = [];
    if (this.content != undefined) {
      e.push(this.content);
    }
    if (this.subjectControl != undefined) {
      e.push(this.subjectControl);
    }
    return e;
  }
}
o([l.serializable("uid")], DASubjectData.prototype, "uid", undefined);
o(
  [l.serializable("subject_id")],
  DASubjectData.prototype,
  "subjectId",
  undefined,
);
o([l.serializable("data_id")], DASubjectData.prototype, "dataId", undefined);
o(
  [l.serializable("content", () => DASubjectContent)],
  DASubjectData.prototype,
  "content",
  undefined,
);
o(
  [l.serializable("subject_control", () => DASubjectDataControl)],
  DASubjectData.prototype,
  "subjectControl",
  undefined,
);
