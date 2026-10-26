import r from "oa";
import o from "bk";
import n from "QWK";
import a from "o7";
import s from "Kt";
import c from "A3X";
import l from "LLl";
import { c as c_1, y } from "./module-vHh.js";
const d = {
  enterFrom: "click",
};
export class j extends a.jG {
  get resourceReportParams() {
    return r._(
      {},
      this._getReferenceTemplateParams(),
      this._getReferenceImageParams(),
      this._resourceReportParams,
    );
  }
  get referenceImageIds() {
    return Array.from(
      new Set([
        ...Object.keys(this._referenceImageParamsMap),
        ...Object.keys(this._referenceTemplateParamsMap),
      ]),
    );
  }
  get commonParams() {
    let e;
    const { resourceReportParams } = this;
    const i = y(this._containerService);
    return o._(r._({}, resourceReportParams, i), {
      enterFrom: (e = i.enterFrom) != null ? e : resourceReportParams.enterFrom,
    });
  }
  setResourceReportParams(e) {
    let t;
    if (e) {
      this._resourceReportParams = o._(r._({}, e), {
        enterFrom: (t = e.enterFrom) != null ? t : "click",
      });
    }
  }
  updateResourceReportParams(e) {
    this._resourceReportParams = r._({}, this._resourceReportParams, e);
  }
  setAiFeatureAttribution(aiFeatureName) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : "ai_feature";
    c_1(this._containerService, {
      aiFeatureName,
      enterFrom: aiFeatureName ? t : undefined,
    });
  }
  resetResourceReportParams() {
    this._resourceReportParams = d;
    this.setAiFeatureAttribution(undefined);
    this.resetReferenceTemplateParams();
    this.resetReferenceImageParams();
  }
  setReferenceTemplateFromWorkDetail(e) {
    if (c.s(e)) {
      const { videoGenInputs } =
        (i =
          (r = e.aigcImageParams) == null ? undefined : r.text2videoParams) !=
        null
          ? i
          : {};
      if (videoGenInputs) {
        var i;
        var r;
        let o;
        const n = videoGenInputs.find((e) => !!e.firstFrameImage);
        if (
          n == null || (o = n.firstFrameImage) == null ? undefined : o.imageUri
        ) {
          this._addReferenceTemplate(n.firstFrameImage.imageUri, e.id);
        }
      }
      return;
    }
    if (l.Y(e)) {
      let a;
      let s;
      const u =
        (s = e.image.largeImages) == null || (a = s[0]) == null
          ? undefined
          : a.imageUri;
      if (u) {
        this._addReferenceTemplate(u, e.id);
      }
      return;
    }
  }
  setReferenceImageFromWorkDetail(e) {
    if (l.Y(e)) {
      let t;
      let i;
      let r;
      const o =
        (i = e.image.largeImages) == null || (t = i[0]) == null
          ? undefined
          : t.imageUri;
      if (o) {
        this._addReferenceImage(
          o,
          e.commonAttr.id,
          (r = e.aigcImageParams) == null ? undefined : r.generateId,
        );
      }
      return;
    }
    if (c.s(e)) {
      const { videoGenInputs } =
        (a =
          (s = e.aigcImageParams) == null ? undefined : s.text2videoParams) !=
        null
          ? a
          : {};
      if (videoGenInputs) {
        var a;
        var s;
        let u;
        let d;
        const h = videoGenInputs.find((e) => !!e.firstFrameImage);
        if (
          h == null || (u = h.firstFrameImage) == null ? undefined : u.imageUri
        ) {
          this._addReferenceImage(
            h.firstFrameImage.imageUri,
            e.commonAttr.id,
            (d = e.aigcImageParams) == null ? undefined : d.generateId,
          );
        }
      }
    }
  }
  setReferenceImageFromRecord(e, t) {
    let i;
    let r;
    let o;
    let n;
    let a;
    const s = (i = e.itemList) == null ? undefined : i[t];
    const c =
      s == null ||
      (n = s.image) == null ||
      (o = n.largeImages) == null ||
      (r = o[0]) == null
        ? undefined
        : r.imageUri;
    if (c) {
      this._addReferenceImage(
        c,
        s.commonAttr.id,
        (a = s.aigcImageParams) == null ? undefined : a.generateId,
      );
    }
  }
  resetReferenceImageParams() {
    this._referenceImageParamsMap = {};
  }
  resetReferenceTemplateParams() {
    this._referenceTemplateParamsMap = {};
  }
  _deleteReferenceImage(e) {
    if (e in this._referenceImageParamsMap) {
      if (this._referenceImageParamsMap[e].count > 1) {
        this._referenceImageParamsMap[e].count -= 1;
        return;
      }
      delete this._referenceImageParamsMap[e];
    }
  }
  _deleteReferenceTemplate(e) {
    if (e in this._referenceTemplateParamsMap) {
      if (this._referenceTemplateParamsMap[e].count > 1) {
        this._referenceTemplateParamsMap[e].count -= 1;
        return;
      }
      delete this._referenceTemplateParamsMap[e];
    }
  }
  _getReferenceTemplateParams() {
    const e = Object.values(this._referenceTemplateParamsMap);
    if (!e.length) {
      return null;
    }
    const t = e.flatMap((e) => {
      var { templateId, count } = e;
      return Array(count).fill(templateId);
    });
    return {
      referenceTemplateId: t.join(","),
      referenceTemplateCnt: t.length,
    };
  }
  _getReferenceImageParams() {
    const e = Object.values(this._referenceImageParamsMap);
    const t = Array.from(new Set(e.map((e) => e.pictureId).filter(Boolean)));
    const i = Array.from(new Set(e.map((e) => e.generateId).filter(Boolean)));
    return {
      lastPictureId: t.length > 0 ? t.join(",") : undefined,
      lastGenerateId: i.length > 0 ? i.join(",") : undefined,
    };
  }
  _collectAIGCItemIdsOfType(e, t) {
    const i = e
      .filter((e) => e.type === t)
      .map((e) => {
        var t;
        if ("remoteExtraInfo" in e) {
          if ((t = e.remoteExtraInfo) == null) {
            return undefined;
          }
          return t.aigcItemId;
        }
      })
      .filter((e) => !!e);
    if (i.length > 0) {
      return i.join(",");
    }
  }
  _addReferenceImage(e, pictureId, generateId) {
    if (e in this._referenceImageParamsMap) {
      this._referenceImageParamsMap[e].count += 1;
      return;
    }
    this._referenceImageParamsMap[e] = {
      pictureId,
      generateId,
      count: 1,
    };
  }
  _addReferenceTemplate(e, templateId) {
    if (e in this._referenceTemplateParamsMap) {
      this._referenceTemplateParamsMap[e].count += 1;
      return;
    }
    this._referenceTemplateParamsMap[e] = {
      templateId,
      count: 1,
    };
  }
  constructor(e) {
    super();
    this._containerService = e;
    this._resourceReportParams = d;
    this._referenceTemplateParamsMap = {};
    this._referenceImageParamsMap = {};
    this.deleteReferenceParams = (e) => {
      if (e) {
        this._deleteReferenceImage(e);
        this._deleteReferenceTemplate(e);
      }
    };
    this.getReferenceAIGCItemIdReportParams = (e) => ({
      imageId: this._collectAIGCItemIdsOfType(e, "image"),
      videoId: this._collectAIGCItemIdsOfType(e, "video"),
      audioId: this._collectAIGCItemIdsOfType(e, "audio"),
    });
  }
}
j = n.Cg(
  [
    n.Qj(0, s._),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [s._ === undefined ? Object : s._]),
  ],
  j,
);
