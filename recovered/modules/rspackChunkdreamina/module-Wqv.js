import n from "Rb";
import r from "Hco";
import { U } from "./module-PQy.js";
import * as o from "./module-lFB.js";
import s from "oa";
import l from "bk";
function d(e, t) {
  if ((e == null ? undefined : e.imageUri) && !e.imageUrl) {
    let i;
    const n = (i = t.get(e.imageUri)) == null ? undefined : i.imageInfo;
    if (n) {
      Object.assign(e, n);
    }
  }
}
function u(e) {
  let t;
  let i;
  if (
    e.materialType === "subject" &&
    ((t = e.subjectData) == null ? undefined : t.content)
  ) {
    return l._(s._({}, e), {
      subjectData: l._(s._({}, e.subjectData), {
        content: l._(s._({}, e.subjectData.content), {
          mainImage: e.subjectData.content.mainImage
            ? s._({}, e.subjectData.content.mainImage)
            : e.subjectData.content.mainImage,
          auxiliaryImages:
            (i = e.subjectData.content.auxiliaryImages) == null
              ? undefined
              : i.map((e) => s._({}, e)),
        }),
      }),
    });
  }
  return l._(s._({}, e), {
    imageInfo: e.imageInfo ? s._({}, e.imageInfo) : e.imageInfo,
    videoInfo: e.videoInfo ? s._({}, e.videoInfo) : e.videoInfo,
    audioInfo: e.audioInfo
      ? l._(s._({}, e.audioInfo), {
          originAudio: e.audioInfo.originAudio
            ? s._({}, e.audioInfo.originAudio)
            : undefined,
        })
      : e.audioInfo,
  });
}
export class a {
  constructor(e, t) {
    var i;
    var v;
    var c;
    var m;
    var p;
    var f;
    var g;
    var I;
    var hasFavorited;
    var y;
    var h;
    var T;
    var S;
    var A;
    var submitId;
    var M;
    submitId =
      ((A = t.task) == null ? undefined : A.submitId) || t.submitId || "";
    if (t.task) {
      if (!t.task.submitId) {
        t.task.submitId = submitId;
      }
    } else {
      t.task = {
        submitId,
      };
    }
    var C = submitId;
    this.minFeatures = e.draft.minFeatures;
    this.uniqueKey = C;
    this.historyRecordId = t.historyRecordId;
    this.assetOption =
      ((hasFavorited =
        (i = (m = t.assetOption) == null ? undefined : m.hasFavorited) !=
          null && i),
      (y =
        (v = (p = t.assetOption) == null ? undefined : p.favoriteItemIdList) !=
        null
          ? v
          : []),
      hasFavorited &&
        y.length === 0 &&
        (y =
          (g =
            (I = t.itemList) == null
              ? undefined
              : I.map((e) => e.commonAttr.id)) != null
            ? g
            : []),
      (h =
        (c =
          (f = t.itemList) == null
            ? undefined
            : f.map((e) => e.commonAttr.id)) != null
          ? c
          : []),
      {
        hasFavorited,
        favoriteItemIdList: (y = y.filter((e) => h.includes(e))),
      });
    this.generateType =
      (M = e.wrapper.generateType) != null ? M : t.generateType;
    this.draftContent = t.draftContent;
    this.itemList = t.itemList ? t.itemList.map((e) => U(e)) : [];
    this.idModel = {
      recordId: e.idModel.recordId,
      submitId: (T = e.idModel.submitId) != null ? T : t.task.submitId,
      taskId: (S = e.idModel.taskId) != null ? S : t.task.taskId,
      generateId: t.generateId,
      agentHistoryId: t.agentHistoryId,
      workspaceId: t.workspaceId,
    };
    this.statusModel = ((e, t) => {
      const { statusCode, recordStatus, errorCode, errorMsg } = e.statusModel;
      return {
        statusCode,
        recordStatus,
        errorCode,
        errorMsg: errorMsg || t.failMsg,
        failStarlingMessage: t.failStarlingMessage,
        reviewRewriteResult: ((e, t) => {
          const i = e == null ? undefined : e.reviewRewriteUnifiedEditInput;
          const n = i == null ? undefined : i.materialList;
          if (
            !i ||
            !(n == null ? undefined : n.length) ||
            !(t == null ? undefined : t.length)
          ) {
            return e;
          }
          const r = l._(s._({}, e), {
            reviewRewriteUnifiedEditInput: l._(s._({}, i), {
              materialList: n.map(u),
              metaList: i.metaList.map((e) =>
                l._(s._({}, e), {
                  materialRef: e.materialRef
                    ? s._({}, e.materialRef)
                    : e.materialRef,
                }),
              ),
            }),
          });
          const a =
            (c =
              (m = r.reviewRewriteUnifiedEditInput) == null
                ? undefined
                : m.materialList) != null
              ? c
              : [];
          const o = new Map(t.map((e) => [e.key, e]));
          for (const v of a) {
            if (v.materialType === "image") {
              d(v.imageInfo, o);
              continue;
            }
            if (
              v.materialType === "subject" &&
              ((p = v.subjectData) == null ? undefined : p.content)
            ) {
              d(v.subjectData.content.mainImage, o);
              if ((f = v.subjectData.content.auxiliaryImages) != null) {
                f.forEach((e) => {
                  d(e, o);
                });
              }
              continue;
            }
            if (v.materialType === "video" && v.videoInfo) {
              var c;
              var m;
              var p;
              var f;
              let g;
              let I;
              let _;
              let y;
              const h = (g = v.videoInfo.vid) != null ? g : v.videoInfo.videoId;
              if (!h) {
                continue;
              }
              const T = (I = o.get(h)) == null ? undefined : I.videoInfo;
              if (T) {
                Object.assign(v.videoInfo, T);
                if ((_ = v.videoInfo).vid == null) {
                  _.vid = h;
                }
                if ((y = v.videoInfo).videoId == null) {
                  y.videoId = h;
                }
              }
              continue;
            }
            if (v.materialType === "audio" && v.audioInfo) {
              let S;
              let A;
              let b;
              let M;
              let C;
              const k =
                (S = v.audioInfo.vid) != null
                  ? S
                  : (M = v.audioInfo.originAudio) == null
                    ? undefined
                    : M.vid;
              if (!k) {
                continue;
              }
              const D = (C = o.get(k)) == null ? undefined : C.audioInfo;
              if (!D) {
                continue;
              }
              const x = s._({}, D.originAudio, v.audioInfo.originAudio);
              Object.assign(v.audioInfo, D);
              v.audioInfo.originAudio = x;
              if ((A = v.audioInfo).vid == null) {
                A.vid = k;
              }
              if ((b = v.audioInfo.originAudio).vid == null) {
                b.vid = k;
              }
            }
          }
          return r;
        })(t.reviewRewriteResult, t.resources),
        timeModel: ((e, t) => {
          const {
            createdTimeInSec = 0,
            finishedTimeInSec,
            estimatedQueueCostTimeInSec,
            estimatedGenCostTimeInSec,
          } = e.statusModel.timeModel;
          return {
            createdTime: r.V(createdTimeInSec || t.createdTime),
            finishedTime: finishedTimeInSec
              ? r.V(finishedTimeInSec)
              : undefined,
            estimatedQueueCostTime:
              1000 * (t.forecastQueueCost || estimatedQueueCostTimeInSec || 0),
            estimatedGenCostTime:
              1000 * (t.forecastGenerateCost || estimatedGenCostTimeInSec || 0),
          };
        })(e, t),
        queueInfo: t.queueInfo,
        queueBenefitInfo: t.queueBenefitInfo,
      };
    })(e, t);
    this.prompt = e.wrapper.prompt;
    this.refInfo = ((e, t) => {
      if (e.wrapper.refInfo) {
        const { refType, refRecordInfo, refTemplateInfo } = e.wrapper.refInfo;
        if (refType !== n.DMLAigcDataRefType.None) {
          return {
            refType,
            refRecordInfo: ((e, t) => {
              if (e) {
                let i;
                let n;
                let r;
                let a;
                let o;
                let s;
                let l;
                const d =
                  (l = t.originItemList) == null
                    ? undefined
                    : l.find((e) => e.isOriginItem);
                const { refImageInfo } = e;
                return {
                  refHistoryId: e.refHistoryId,
                  refAgenticHistoryId: e.refAgenticHistoryId,
                  refItemId: e.refItemId,
                  refItemInfo:
                    d || refImageInfo
                      ? {
                          imageUrl:
                            (i = d == null ? undefined : d.imageUrl) != null
                              ? i
                              : refImageInfo == null
                                ? undefined
                                : refImageInfo.imageUrl,
                          width:
                            (n = d == null ? undefined : d.width) != null
                              ? n
                              : refImageInfo == null
                                ? undefined
                                : refImageInfo.width,
                          height:
                            (r = d == null ? undefined : d.height) != null
                              ? r
                              : refImageInfo == null
                                ? undefined
                                : refImageInfo.height,
                          uri:
                            (a = d == null ? undefined : d.uri) != null
                              ? a
                              : refImageInfo == null
                                ? undefined
                                : refImageInfo.uri,
                          format:
                            (o = d == null ? undefined : d.format) != null
                              ? o
                              : refImageInfo == null
                                ? undefined
                                : refImageInfo.format,
                          isOriginItem:
                            (s = d == null ? undefined : d.isOriginItem) != null
                              ? s
                              : refImageInfo == null
                                ? undefined
                                : refImageInfo.isOriginItem,
                        }
                      : undefined,
                };
              }
            })(refRecordInfo, t),
            refTemplateInfo: ((e) => {
              if (e == null ? undefined : e.templateId) {
                return {
                  templateId: e.templateId,
                  authorName: e.authorName,
                  description: e.description,
                };
              }
            })(refTemplateInfo),
          };
        }
      }
    })(e, t);
    this.createPlatform = ((e) => {
      let t;
      const i = e.draft.findMainComponent();
      if (i) {
        if ((t = i.metaData) == null) {
          return undefined;
        }
        return t.createdPlatform;
      }
    })(e);
    this.aigcMode = t.mode;
    this.agentOptData = t.agentOptData;
    this.workspaceInfo = t.workspaceInfo;
    this.modelInfo = t.modelInfo;
    this.uid = t.uid;
    this.teamId = t.teamId;
    this.owner = t.owner;
    this.preGenItemList = o.T(t);
    this.preGenItemIds = o.d(t);
  }
}
