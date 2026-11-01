import a from "NY";
import i from "oa";
import n from "bk";
import s from "qa";
import o from "QWK";
import d from "Qey";
import u from "o7";
import l from "K8";
import c from "Ev";
import m from "aEB";
import p from "Kt";
import h from "Ko";
import _ from "nss";
import v from "gG";
import g from "iNQ";
import f from "ZX";
import M from "g98";
import y from "Oqj";
import S from "rIS";
import R from "wh";
import k from "mir";
import T from "iU";
import P from "KwC";
import I from "Erm";
import F from "KqD";
import * as b from "./module-m9m_2.js";
import * as C from "./module-b3X.js";
import { S as S_1 } from "./module-ZkH.js";
import { F as F_1 } from "./module-kbm_3.js";
import G from "dw4";
import L from "Ut";
import w from "xi";
import j from "H26";
import O from "ek1";
import K from "aS";
import z from "knI";
import B from "yMd";
import q from "LLl";
import H from "A3X";
import N from "IzA";
import W from "NYK";
import U from "IC8";
import Q from "VhU";
import $ from "K4";
import J from "zi0";
import Z from "CZp";
import Y from "Y9q";
import X from "WUK";
import ee from "z8f";
import et from "bF";
import er from "dHI";
import ea from "m7A";
import ei from "JEp";
import en from "BwB";
import es from "uhr";
import eo from "JG";
import { I as I_1 } from "./module-V26.js";
import { HO, H_, M4, W8, q_, zh } from "./module-c86.js";
import el from "Xfi";
const x = {};
class D {
  get enabled() {
    return !!this.originReferenceId;
  }
  setData(e) {
    this.originReferenceId = e.originReferenceId;
    this.originVideoId = e.originVideoId;
    this.sourceRecordId = e.sourceRecordId;
    this.sourceItemId = e.sourceItemId;
  }
  resetData() {
    this.setData(x);
  }
  constructor() {
    this.originReferenceId = undefined;
    this.originVideoId = undefined;
    this.sourceRecordId = undefined;
    this.sourceItemId = undefined;
    G.l_(this);
  }
}
class V extends u.jG {
  get data() {
    return this._dataStore;
  }
  setContinuation(e) {
    this._dataStore.setData(e);
  }
  clearContinuation() {
    this._dataStore.resetData();
  }
  clearContinuationContext() {
    const { omniReferenceManager } = this._videoGeneratorManager;
    const { promptContents } = omniReferenceManager.data;
    const { originReferenceId } = this._dataStore;
    const a = promptContents.some((e) => e.type === "continuationDuration");
    if (
      (this._dataStore.enabled && a) ||
      this.hasVideoContinuationPromptBlock(promptContents)
    ) {
      const i = this.removeVideoContinuationPromptContents(
        promptContents,
        originReferenceId ? [originReferenceId] : [],
      );
      omniReferenceManager.changePromptContents(i);
    }
    this.clearContinuation();
  }
  hasVideoContinuationPromptBlock(e, t) {
    return (
      !!e.some(
        (e) =>
          e.type === "continuationDuration" &&
          e.isContinuationPromptBlockPart === true,
      ) &&
      (!t ||
        e.some(
          (e) =>
            e.type === "video" &&
            e.id === t &&
            e.isContinuationPromptBlockPart === true,
        ))
    );
  }
  removeVideoContinuationPromptContents(e, t) {
    const r = new Set(t);
    const a = C.n();
    if (e.some(S_1)) {
      let i = e.filter((e) => !S_1(e) && (!F_1(e) || !r.has(e.id)));
      i = this._stripLeadingVideoContinuationTemplateTextSegments(
        i.filter((e) => e.type !== "continuationDuration"),
        a,
      );
      return this._stripLeadingText(i, C.g);
    }
    let n = this._removePlainVideoContinuationPromptBlock(e, r, a);
    return (n = this._stripLeadingText(n, C.g)).filter(
      (e) => e.type !== "continuationDuration" && !(F_1(e) && r.has(e.id)),
    );
  }
  restoreVideoContinuationPromptContents(e, t) {
    const r = t.filter((e) => S_1(e));
    if (!r.length) {
      return e;
    }
    const a = r.filter(F_1).map((e) => e.id);
    const n = this.removeVideoContinuationPromptContents(e, a);
    return [...r.map((e) => i._({}, e)), ...n];
  }
  isOriginReference(e) {
    return !!(e && this._dataStore.originReferenceId === e);
  }
  isOriginReferenceIndex(e) {
    const t =
      this._videoGeneratorManager.omniReferenceManager.data.references.at(e);
    return this.isOriginReference(t == null ? undefined : t.id);
  }
  getOriginReferenceIndex() {
    const { originReferenceId } = this._dataStore;
    if (originReferenceId) {
      return this._videoGeneratorManager.omniReferenceManager.data.references.findIndex(
        (t) => t.id === originReferenceId,
      );
    }
    return -1;
  }
  constructor(e) {
    super();
    this._videoGeneratorManager = e;
    this._dataStore = new D();
    this._stripLeadingText = (e, t) => {
      if (t === "") {
        return e;
      }
      var [r] = e;
      if (
        (r == null ? undefined : r.type) !== "text" ||
        !r.text.startsWith(t)
      ) {
        return e;
      }
      var a = r.text.slice(t.length);
      if (a.length === 0) {
        return e.slice(1);
      }
      return [
        n._(i._({}, r), {
          text: a,
        }),
        ...e.slice(1),
      ];
    };
    this._stripTrailingText = (e, t) => {
      if (t === "") {
        return e;
      }
      var r = e.at(-1);
      if ((r == null ? undefined : r.type) !== "text" || !r.text.endsWith(t)) {
        return e;
      }
      var a = r.text.slice(0, -t.length);
      if (a.length === 0) {
        return e.slice(0, -1);
      }
      return [
        ...e.slice(0, -1),
        n._(i._({}, r), {
          text: a,
        }),
      ];
    };
    this._stripLeadingVideoContinuationTemplateTextSegments = (e, t) =>
      t.reduce((acc, item) => {
        if (item.type === "text") {
          return this._stripLeadingText(acc, item.text);
        }
        return acc;
      }, e);
    this._stripLeadingVideoContinuationTemplateSegment = (e, t) => {
      var r;
      if (t.type === "text") {
        return this._stripLeadingText(e, t.text);
      }
      if (
        t.slot === "duration" &&
        ((r = e[0]) == null ? undefined : r.type) === "continuationDuration"
      ) {
        return e.slice(1);
      }
      return e;
    };
    this._stripTrailingVideoContinuationTemplateSegment = (e, t) => {
      var r;
      if (t.type === "text") {
        return this._stripTrailingText(e, t.text);
      }
      if (
        t.slot === "duration" &&
        ((r = e.at(-1)) == null ? undefined : r.type) === "continuationDuration"
      ) {
        return e.slice(0, -1);
      }
      return e;
    };
    this._removePlainVideoContinuationPromptBlock = (e, t, r) => {
      var a = r.findIndex((e) => e.type === "slot" && e.slot === "originVideo");
      var i = e.findIndex((e) => F_1(e) && t.has(e.id));
      if (a === -1 || i === -1) {
        return e;
      }
      var n = e.slice(0, i);
      var s = e.slice(i + 1);
      r.slice(0, a)
        .reverse()
        .forEach((e) => {
          n = this._stripTrailingVideoContinuationTemplateSegment(n, e);
        });
      r.slice(a + 1).forEach((e) => {
        s = this._stripLeadingVideoContinuationTemplateSegment(s, e);
      });
      return [...n, ...s];
    };
  }
}
const ec = {
  targetDurationMs: 30000,
};
class em {
  setData(e) {
    this.targetDurationMs = e.targetDurationMs;
  }
  setTargetDurationMs(e) {
    this.targetDurationMs = e;
  }
  constructor() {
    this.targetDurationMs = ec.targetDurationMs;
    G.l_(this);
  }
}
o.Cg(
  [el.A(), o.Sn("design:type", Number)],
  em.prototype,
  "targetDurationMs",
  undefined,
);
em = o.Cg(
  [
    el.L("video-long-video"),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", []),
  ],
  em,
);
class ep extends u.jG {
  applyPrompt(e) {
    this._videoGeneratorManager.promptEnhancementManager.discardAcceptedPromptState();
    const {
      featureManager: {
        data: { isOmniReferenceLikeEngaged },
      },
      omniReferenceManager,
    } = this._videoGeneratorManager;
    if (isOmniReferenceLikeEngaged) {
      omniReferenceManager.changePromptContentWithText(e);
    } else {
      this._videoGeneratorManager.setPrompt(e);
    }
  }
  applyRichPrompt(e) {
    this._videoGeneratorManager.promptEnhancementManager.discardAcceptedPromptState();
    const {
      featureManager: {
        data: {
          isOmniReferenceLikeEngaged,
          isFirstLastFramesEngaged,
          isMultiFramesEngaged,
        },
      },
      omniReferenceManager,
    } = this._videoGeneratorManager;
    if (isOmniReferenceLikeEngaged) {
      const n = {
        references: Y.I(this._containerService, e.resources, [
          "image",
          "video",
          "audio",
        ]),
        promptContents: [...e.promptContents],
      };
      const s = omniReferenceManager.setData(n);
      if (s.ok) {
        this._refreshLatestSubjects(n.promptContents);
        return Promise.resolve(l.nj());
      }
      return Promise.resolve(s);
    }
    if (isMultiFramesEngaged || !isFirstLastFramesEngaged) {
      return Promise.resolve(X.P());
    }
    const o = Y.I(this._containerService, e.resources, ["image"]);
    const d = e.promptContents
      .filter((e) => e.type === "text")
      .map((e) => e.text)
      .join("");
    this._videoGeneratorManager.setPrompt(d);
    if (o.length) {
      if (o.length >= 2) {
        return this._videoGeneratorManager.setFirstLastFrameImages([
          o[0],
          o[1],
        ]);
      }
      return this._videoGeneratorManager.setFirstFrameImage(o[0]);
    }
    this._videoGeneratorManager.resetReferenceImages();
    return Promise.resolve(l.nj());
  }
  importReferencesInRecord(e, t) {
    return a
      ._(function* () {
        if (!K.g(e)) {
          return l.nj();
        }
        const { originalInput } = e;
        if (this._isLongVideoInput(e.originalInput)) {
          const {
            longVideoManager: {
              metadata: { isCurrentModelSupported },
            },
          } = this._videoGeneratorManager;
          if (!isCurrentModelSupported) {
            this._notificationService.warning(
              d.Ay.t("long_video_disable", {}, "当前模型不支持无限模式"),
            );
            return X.P();
          }
          const {
            omniReferenceManager,
            featureManager: featureManager_1,
            longVideoManager,
          } = this._videoGeneratorManager;
          const { migrateToFeature: migrateToFeature_1 } = featureManager_1;
          const { setData } = omniReferenceManager;
          const c = this._getOmniReferenceRestoreData(e.originalInput);
          const m = this._getLongVideoDataByInputParams(e.originalInput);
          yield migrateToFeature_1("longVideo");
          const p = setData(c);
          if (p.ok) {
            longVideoManager.setData(m);
            return l.nj();
          }
          return p;
        }
        if (N.q(e.originalInput)) {
          const h = this._isVideoEditInput(e.originalInput);
          const {
            metadata: {
              isCurrentModelSupportOmniReference,
              isCurrentModelSupportVideoEdit,
            },
          } = this._videoGeneratorManager;
          if (
            (h && !isCurrentModelSupportVideoEdit) ||
            (!h && !isCurrentModelSupportOmniReference)
          ) {
            this._notificationService.warning(
              h
                ? d.Ay.t(
                    "seedance_25_video_edit_disable",
                    {},
                    "当前模型不支持智能编辑",
                  )
                : d.Ay.t("unified_edit_disable", {}, "当前模型不支持全能参考"),
            );
            return X.P();
          }
          const { omniReferenceManager, featureManager: featureManager_1 } =
            this._videoGeneratorManager;
          const { migrateToFeature: migrateToFeature_1 } = featureManager_1;
          const { setData } = omniReferenceManager;
          const S = this._getOmniReferenceRestoreData(e.originalInput);
          yield migrateToFeature_1(h ? "videoEdit" : "omniReference");
          const R = setData(S);
          if (R.ok) {
            if (!h) {
              this._restoreContinuation(S);
            }
            return l.nj();
          }
          return R;
        }
        if (z.B(e.originalInput)) {
          const {
            metadata: { isCurrentModelSupportMultiFrames },
          } = this._videoGeneratorManager;
          if (!isCurrentModelSupportMultiFrames) {
            this._notificationService.warning(
              d.Ay.t("multiframe_disable", {}, "当前模型不支持智能多帧"),
            );
            return X.P();
          }
          const {
            featureManager: featureManager_1,
            modelManager,
            multiFramesManager,
          } = this._videoGeneratorManager;
          const { migrateToFeature: migrateToFeature_1 } = featureManager_1;
          const { setData } = multiFramesManager;
          const C = this._getMultiFramesData(originalInput);
          yield migrateToFeature_1("multiFrames");
          const E =
            originalInput == null ? undefined : originalInput.modelReqKey;
          const A = this._checkModelAvailable(E) ? E : undefined;
          if (A) {
            yield modelManager.setModel(A);
          }
          setData(C);
          return l.nj();
        }
        if (t > 1) {
          return l.nj();
        }
        const {
          metadata: {
            lastFrameVisible,
            lastFrameDisabled,
            lastFrameDisabledTip,
          },
          setFirstFrameImage,
          setLastFrameImage,
          featureManager,
        } = this._videoGeneratorManager;
        const { migrateToFeature } = featureManager;
        if (t > 0 && (!lastFrameVisible || lastFrameDisabled)) {
          this._notificationService.warning(
            lastFrameDisabled
              ? lastFrameDisabledTip
              : d.Ay.t(
                  "web_new_current_model_not_support_last_frame",
                  {},
                  "当前模型不支持尾帧",
                ),
          );
          return X.P();
        }
        if (
          !(originalInput == null ? undefined : originalInput.videoGenInputs)
        ) {
          return l.nj();
        }
        const [O] = originalInput.videoGenInputs;
        const { firstFrameImage, endFrameImage } = O;
        if (t === 1) {
          if (endFrameImage) {
            yield migrateToFeature("firstLastFrames");
            setLastFrameImage(ee.h(this._containerService, endFrameImage));
          }
          return l.nj();
        }
        if (firstFrameImage) {
          yield migrateToFeature("firstLastFrames");
          setFirstFrameImage(ee.h(this._containerService, firstFrameImage));
        }
        return l.nj();
      })
      .call(this);
  }
  importAsVideoGeneratorReferenceImage(e, t, r) {
    let a;
    const { contentGeneratorManager, reportManager } =
      this._videoGeneratorManager;
    const { activateContentGenerator, setContentGeneratorType } =
      contentGeneratorManager;
    setContentGeneratorType("video");
    reportManager.resetReferenceTemplateParams();
    reportManager.setResourceReportParams(
      r == null ? undefined : r.reportParams,
    );
    const d = (a = e.image.largeImages) == null ? undefined : a[0];
    if (!d) {
      return void activateContentGenerator();
    }
    const u = ee.h(this._containerService, d, {
      aigcItemId: e.id,
      resolutionUrlMap: e.commonAttr.coverUrlMap,
      cacheKey: e.id,
    });
    this._videoGeneratorManager.setDraftContent(t);
    const { featureManager, multiFramesManager, omniReferenceManager } =
      this._videoGeneratorManager;
    const {
      data: { isMultiFramesEngaged, isOmniReferenceLikeEngaged },
    } = featureManager;
    if (isOmniReferenceLikeEngaged) {
      omniReferenceManager.addReferenceResources([u]);
      activateContentGenerator();
      return;
    }
    if (isMultiFramesEngaged) {
      multiFramesManager.addReferenceResources([u]);
      activateContentGenerator();
      return;
    }
    this._videoGeneratorManager.resetReferenceImages();
    this._videoGeneratorManager.setFirstFrameImage(u);
    activateContentGenerator();
  }
  startVideoContinuation(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    const r = arguments.length > 2 ? arguments[2] : undefined;
    return a
      ._(function* () {
        const { contentGeneratorManager, reportManager } =
          this._videoGeneratorManager;
        const { activateContentGenerator, setContentGeneratorType } =
          contentGeneratorManager;
        setContentGeneratorType("video");
        reportManager.resetReferenceTemplateParams();
        reportManager.setResourceReportParams(
          r == null ? undefined : r.reportParams,
        );
        if (
          yield this.applyVideoContinuation(e, t, {
            sourceResolution: r == null ? undefined : r.sourceResolution,
          })
        ) {
          activateContentGenerator();
        }
      })
      .call(this);
  }
  startUploadedVideoContinuation(e, t) {
    return a
      ._(function* () {
        const { signal } = t != null ? t : {};
        if (signal == null ? undefined : signal.aborted) {
          return l.xz(-1, "");
        }
        const a = (e) => {
          this._notificationService.warning(e);
          return l.xz(-1, e);
        };
        const {
          metadata: { models, fallbackModel },
          featureManager,
          modelManager,
          omniReferenceManager,
          continuationManager,
          referenceAuditManager,
          reportManager,
          contentGeneratorManager,
        } = this._videoGeneratorManager;
        const _ = W.cw({
          modelList: models,
          defaultModel: fallbackModel,
        });
        const v =
          _ == null
            ? undefined
            : _.fields.find((e) => e.type === B.pH.Resolution);
        const g = (
          v == null
            ? undefined
            : v.values.includes((y = v.defaultValue) != null ? y : "")
        )
          ? v.defaultValue
          : v == null
            ? undefined
            : v.values[0];
        if (!_ || !g) {
          return a(d.Ay.t("octo_video_extend_model_unsupported"));
        }
        if (
          !e.uri ||
          !e.url ||
          [e.width, e.height, e.duration].some(
            (e) => !Number.isFinite(e) || e <= 0,
          )
        ) {
          return a(d.Ay.t("upload_material_error", {}, "素材上传失败，请重试"));
        }
        const M = this._containerService.createInstance($.p, e);
        try {
          var y;
          let S;
          const R = {
            references: [M],
            promptContents: this._getVideoContinuationPromptContents(M.id, []),
          };
          const k = omniReferenceManager.validateDataForModel(R, _);
          if (!k.ok) {
            return a(k.msg);
          }
          const T = yield referenceAuditManager.auditResources([M], {
            scene: f.EZ.VideoGenerate,
            modelKey: _.key,
            notifyRejection: false,
          });
          if (signal == null ? undefined : signal.aborted) {
            return l.xz(-1, "");
          }
          if (T.status === "rejected") {
            return a(
              T.reasonDetail ||
                d.Ay.t("web_precheck_reject_reason_toast", {
                  guide: d.Ay.t("web_precheck_allblock_guide"),
                }),
            );
          }
          if (T.status === "failed") {
            return l.xz(-1, d.Ay.t("web_precheck_network_error_toast"));
          }
          this._videoGeneratorManager.promptEnhancementManager.discardAcceptedPromptState();
          yield featureManager.migrateToFeature("omniReference", {
            preserveModel: true,
          });
          if (
            (signal == null ? undefined : signal.aborted) ||
            (yield modelManager.setModel(_.key),
            signal == null ? undefined : signal.aborted)
          ) {
            return l.xz(-1, "");
          }
          const I = _.fields.find((e) => e.type === B.pH.VideoAspectRatio);
          const F = et.$h(
            (S = I == null ? undefined : I.values) != null ? S : [],
          );
          this._applyVideoContinuationGenerationConfig(
            _,
            {
              aspectRatio: F.length ? P.E(F, e.width / e.height) : undefined,
            },
            g,
          );
          const b = omniReferenceManager.setData(R, {
            skipAudit: true,
          });
          if (!b.ok) {
            return b;
          }
          continuationManager.setContinuation({
            originReferenceId: M.id,
            originVideoId: e.uri,
          });
          reportManager.resetReferenceTemplateParams();
          reportManager.setResourceReportParams(
            t == null ? undefined : t.reportParams,
          );
          contentGeneratorManager.setContentGeneratorType("video");
          contentGeneratorManager.activateContentGenerator();
          return l.nj();
        } catch (error) {
          if (signal == null ? undefined : signal.aborted) {
            return l.xz(-1, "");
          }
          this._notificationService.warning(
            d.Ay.t(
              "web_generation_preset_apply_failed",
              {},
              "生成参数填入失败，请重试",
            ),
          );
          throw error;
        } finally {
          if (!omniReferenceManager.data.references.includes(M)) {
            M.dispose();
          }
        }
      })
      .call(this);
  }
  importRecordAsReference(e, t, r) {
    const a = er.R(this._containerService, e, t);
    if (a) {
      return this.importReferenceResources([a], r);
    }
    return Promise.resolve(l.nj());
  }
  importWorkDetailAsReference(e) {
    if (!q.Y(e)) {
      return l.nj();
    }
    const t = ea.w(this._containerService, e);
    if (t) {
      this.importReferenceResources([t]);
    }
    return l.nj();
  }
  applyVideoContinuation(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    const r = arguments.length > 2 ? arguments[2] : undefined;
    return a
      ._(function* () {
        let a;
        let i;
        let n;
        const s = this._getVideoContinuationResource(e, t);
        if (!s) {
          this._notificationService.warning(
            d.Ay.t("web_network_error_try_again", {}, "网络异常，请稍后重试"),
          );
          return false;
        }
        const sourceModelKey = this._getVideoContinuationSourceModelKey(e);
        const { videoContinuationModel, models, fallbackModel } =
          this._videoGeneratorManager.metadata;
        const targetModel = sourceModelKey
          ? W.zg({
              modelList: models,
              defaultModel: fallbackModel,
              sourceModelKey,
            })
          : undefined;
        if (!videoContinuationModel) {
          this._notificationService.warning(
            d.Ay.t("seedance_25_extend_disable", {}, "当前暂不支持视频延长"),
          );
          return false;
        }
        if (!sourceModelKey || !targetModel) {
          this._notificationService.warning(U.j());
          return false;
        }
        const {
          featureManager,
          modelManager,
          omniReferenceManager,
          continuationManager,
        } = this._videoGeneratorManager;
        const g = this._getVideoContinuationSourceGenerationConfig(e, t);
        const f = W.uz({
          sourceResolution:
            (a = r == null ? undefined : r.sourceResolution) != null
              ? a
              : g.resolution,
          targetModel,
        });
        if (!f) {
          this._notificationService.warning(
            d.Ay.t(
              "seedance_25_extend_res_notsup",
              {},
              "视频延长，暂不支持当前分辨率",
            ),
          );
          return false;
        }
        const M = this._getPreservedVideoContinuationOmniReferenceData(s.id);
        const y = {
          references: [s, ...M.references.filter((e) => e.id !== s.id)],
          promptContents: this._getVideoContinuationPromptContents(
            s.id,
            M.promptContents,
          ),
        };
        const S = omniReferenceManager.validateDataForModel(y, targetModel);
        if (!S.ok) {
          this._notificationService.warning(S.msg);
          return false;
        }
        this._videoGeneratorManager.promptEnhancementManager.discardAcceptedPromptState();
        yield featureManager.migrateToFeature("omniReference", {
          preserveModel: true,
        });
        yield modelManager.setModel(targetModel.key);
        this._applyVideoContinuationGenerationConfig(targetModel, g, f);
        omniReferenceManager.setData(y, {
          skipAudit: true,
        });
        const sourceRecordId = Z.D(e)
          ? e.commonAttr.id
          : (i = e.historyRecordId) != null
            ? i
            : e.idModel.recordId;
        continuationManager.setContinuation({
          originReferenceId: s.id,
          originVideoId: s.uri,
          sourceRecordId,
          sourceItemId: Z.D(e)
            ? e.id
            : (n = e.itemList.at(t)) == null
              ? undefined
              : n.id,
        });
        ei.j([s], this._videoGeneratorManager.reportManager);
        return true;
      })
      .call(this);
  }
  _getVideoContinuationSourceGenerationConfig(e, t) {
    let r;
    let a;
    const i = Z.D(e)
      ? (a = e.aigcImageParams) == null
        ? undefined
        : a.text2videoParams
      : e.originalInput;
    const n =
      (r = i == null ? undefined : i.videoGenInputs.at(t)) != null
        ? r
        : i == null
          ? undefined
          : i.videoGenInputs[0];
    const s = i == null ? undefined : i.videoAspectRatio;
    const o = Z.D(e) ? undefined : e.videoRatio;
    return {
      aspectRatio: s === "adaptive" ? o : s != null ? s : o,
      resolution: n == null ? undefined : n.resolution,
    };
  }
  _getVideoContinuationSourceModelKey(e) {
    let t;
    let r;
    let a;
    let i;
    let n;
    let s;
    let o;
    let d;
    let u;
    let l;
    let c;
    let m;
    if (Z.D(e)) {
      if (
        (t =
          (n = e.aigcImageParams) == null || (i = n.text2videoParams) == null
            ? undefined
            : i.modelReqKey) != null
      ) {
        return t;
      }
      if (
        (d = e.aigcImageParams) == null ||
        (o = d.text2videoParams) == null ||
        (s = o.videoModelConfig) == null
      ) {
        return undefined;
      }
      return s.modelReqKey;
    }
    if (
      (r =
        (a = (u = e.originalInput) == null ? undefined : u.modelReqKey) != null
          ? a
          : (c = e.originalInput) == null || (l = c.videoModelConfig) == null
            ? undefined
            : l.modelReqKey) != null
    ) {
      return r;
    }
    if ((m = e.videoModelConfig) == null) {
      return undefined;
    }
    return m.modelReqKey;
  }
  _applyVideoContinuationGenerationConfig(e, t, r) {
    const { aspectRatio } = t;
    const { aspectRatioOptions, models } = this._videoGeneratorManager.metadata;
    if (
      aspectRatio &&
      aspectRatioOptions.some((e) => e.value === aspectRatio)
    ) {
      this._videoGeneratorManager.setAspectRatio(aspectRatio);
    }
    this._videoGeneratorManager.setResolution(r);
    const s = M4(e, this._videoGeneratorManager.data.fps);
    const o = this._sanitizeDurationMs(
      I_1.durationMs,
      s != null ? s : this._videoGeneratorManager.data.fps,
      e.key,
      models,
    );
    this._videoGeneratorManager.setDurationMs(o);
  }
  _getPreservedVideoContinuationOmniReferenceData(e) {
    const { featureManager, omniReferenceManager, continuationManager } =
      this._videoGeneratorManager;
    const {
      data: { isOmniReferenceLikeEngaged },
    } = featureManager;
    if (!isOmniReferenceLikeEngaged) {
      const { prompt } = this._videoGeneratorManager.data;
      return {
        references: [],
        promptContents: prompt.trim()
          ? [
              {
                type: "text",
                text: prompt,
              },
            ]
          : [],
      };
    }
    const { references, promptContents } = omniReferenceManager.data;
    const d = [e, continuationManager.data.originReferenceId].filter(
      (e) => !!e,
    );
    const u = new Set(d);
    const l = continuationManager.data.enabled
      ? continuationManager.removeVideoContinuationPromptContents(
          promptContents,
          d,
        )
      : promptContents;
    return {
      references: continuationManager.data.enabled
        ? references.filter((e) => !u.has(e.id))
        : references,
      promptContents: l,
    };
  }
  _getVideoContinuationPromptContents(e, t) {
    const r = C.n().flatMap((t) => {
      if (t.type === "text") {
        if (t.text) {
          return [
            {
              type: "text",
              text: t.text,
              isContinuationPromptBlockPart: true,
            },
          ];
        }
        return [];
      }
      if (t.slot === "originVideo") {
        return [
          {
            type: "video",
            id: e,
            isContinuationPromptBlockPart: true,
          },
        ];
      }
      return [
        {
          type: "continuationDuration",
          isContinuationPromptBlockPart: true,
        },
      ];
    });
    if (t.length) {
      return [...r, ...t];
    }
    return r;
  }
  importImageAsReferenceInWorkDetailVideo(e) {
    if (!((t = e.aigcImageParams) == null ? undefined : t.text2videoParams)) {
      return l.nj();
    }
    var t;
    const { videoGenInputs } = e.aigcImageParams.text2videoParams;
    const a = videoGenInputs.find((e) => !!e.firstFrameImage);
    const i = a == null ? undefined : a.firstFrameImage;
    if (!i) {
      return l.nj();
    }
    const n = ee.h(this._containerService, i, {
      resolutionUrlMap: e.commonAttr.coverUrlMap,
      cacheKey: e.commonAttr.id,
    });
    this.importReferenceResources([n]);
    return l.nj();
  }
  reeditGenerationDataInRecord(e) {
    if (!K.g(e)) {
      return Promise.resolve(l.nj());
    }
    const { originalInput, item, videoRatio } = e;
    this._setData(originalInput, item, {
      refreshSubjects: true,
      recordedVideoRatio: videoRatio,
    });
    return Promise.resolve(l.nj());
  }
  reeditGenerationDataInWorkDetail(e) {
    if (!H.s(e)) {
      return l.nj();
    }
    const { aigcImageParams } = e;
    const { text2videoParams } = aigcImageParams != null ? aigcImageParams : {};
    this._setData(text2videoParams, undefined, {
      refreshSubjects: false,
    });
    return l.nj();
  }
  importReferenceResources(e, t, r) {
    return a
      ._(function* () {
        yield this._importReferenceResources(e, t, r, false);
        return l.nj();
      })
      .call(this);
  }
  importReferenceResourcesWithResult(e, t, r) {
    return this._importReferenceResources(e, t, r, true);
  }
  replaceImageReferencesWithResult(e, t) {
    const { featureManager, multiFramesManager, omniReferenceManager } =
      this._videoGeneratorManager;
    const { feature } = featureManager.data;
    if (feature === "firstLastFrames") {
      this._videoGeneratorManager.resetReferenceImages();
    } else if (feature === "multiFrames") {
      const { frames } = multiFramesManager.data;
      if (frames.some((e) => e.resource.type !== "image")) {
        for (const o of frames
          .filter((e) => e.resource.type === "image")
          .reverse()) {
          multiFramesManager.removeReferenceResource(o.resource.id);
        }
      } else {
        multiFramesManager.resetFrames();
      }
    } else {
      omniReferenceManager.removeReferenceResources(
        omniReferenceManager.data.references
          .filter((e) => e.type === "image")
          .map((e) => e.id),
      );
    }
    return this.importReferenceResourcesWithResult(e, undefined, t);
  }
  _importReferenceResources(e, t, r, a) {
    if (!e.length) {
      return Promise.resolve(l.nj());
    }
    const {
      data: {
        isFirstLastFramesEngaged,
        isMultiFramesEngaged,
        isOmniReferenceLikeEngaged,
      },
    } = this._videoGeneratorManager.featureManager;
    if (isOmniReferenceLikeEngaged) {
      return this._importOmniReferenceResources(e, t, r, a);
    }
    if (isMultiFramesEngaged) {
      return this._importMultiFramesResources(e, t, r, a);
    }
    if (isFirstLastFramesEngaged) {
      return this._importFirstLastFramesResources(e, t, r, a);
    }
    const o = d.Ay.t("upload_material_error", {}, "素材上传失败，请重试");
    if (a) {
      this._notificationService.warning(o);
    }
    return Promise.resolve(l.xz(-1, o));
  }
  _importOmniReferenceResources(e, t, r) {
    const i =
      arguments.length > 3 && arguments[3] !== undefined && arguments[3];
    return a
      ._(function* () {
        const { featureManager, omniReferenceManager, reportManager } =
          this._videoGeneratorManager;
        const o = Y.I(this._containerService, e, ["image", "video", "audio"]);
        if (i) {
          if (o.length !== e.length) {
            return l.xz(
              -1,
              d.Ay.t("upload_material_error", {}, "素材上传失败，请重试"),
            );
          }
          const { acceptedResourceTypes } = omniReferenceManager.metadata;
          if (
            !(
              featureManager.data.isVideoEditEngaged &&
              t === 0 &&
              e.length === 1
            ) &&
            o.some((e) => !acceptedResourceTypes.includes(e.type))
          ) {
            const c = d.Ay.t(
              "upload_material_error",
              {},
              "素材上传失败，请重试",
            );
            this._notificationService.warning(c);
            return l.xz(-1, c);
          }
        }
        if (!o.length) {
          return l.nj();
        }
        const {
          replaceReferenceResource,
          addReferenceResources,
          setVideoEditSourceResource,
        } = omniReferenceManager;
        if (typeof t !== "number" || o.length !== 1) {
          const _ = yield addReferenceResources(o, r);
          if (_.ok) {
            ei.j(o, reportManager);
          }
          return _;
        }
        const [v] = o;
        const {
          data: { isVideoEditEngaged },
        } = featureManager;
        if (isVideoEditEngaged) {
          if (t === 0) {
            const f = yield setVideoEditSourceResource(v);
            if (f.ok) {
              ei.j([v], reportManager);
            }
            return f;
          }
          const M = !!omniReferenceManager.data.videoEditSourceReference;
          const y = yield replaceReferenceResource(M ? t : t - 1, v, r);
          if (y.ok) {
            ei.j([v], reportManager);
          }
          return y;
        }
        const S = yield replaceReferenceResource(t, v, r);
        if (S.ok) {
          ei.j([v], reportManager);
        }
        return S;
      })
      .call(this);
  }
  _importMultiFramesResources(e, t, r) {
    const i =
      arguments.length > 3 && arguments[3] !== undefined && arguments[3];
    return a
      ._(function* () {
        const { multiFramesManager, reportManager } =
          this._videoGeneratorManager;
        const s = Y.I(this._containerService, e, ["image", "video"]);
        if (i) {
          if (s.length !== e.length) {
            return l.xz(
              -1,
              d.Ay.t("upload_material_error", {}, "素材上传失败，请重试"),
            );
          }
          const { supportsImageFrames, supportsVideoFrames } =
            multiFramesManager.metadata;
          if (
            (typeof t === "number" && s.length !== 1) ||
            s.some((e) => {
              if (e.type === "image") {
                return !supportsImageFrames;
              }
              return !supportsVideoFrames;
            })
          ) {
            const c = d.Ay.t(
              "upload_material_error",
              {},
              "素材上传失败，请重试",
            );
            this._notificationService.warning(c);
            return l.xz(-1, c);
          }
        }
        if (!s.length) {
          return l.nj();
        }
        if (typeof t === "number") {
          const m = this._resolveMultiFramesIndex(t);
          const p = yield multiFramesManager.replaceReferenceResource(
            m,
            s[0],
            r,
          );
          if (p.ok) {
            ei.j([s[0]], reportManager);
          }
          return p;
        }
        const h = yield multiFramesManager.addReferenceResources(s, r);
        if (h.ok) {
          ei.j(s, reportManager);
        }
        return h;
      })
      .call(this);
  }
  _importFirstLastFramesResources(e, t, r) {
    const i =
      arguments.length > 3 && arguments[3] !== undefined && arguments[3];
    return a
      ._(function* () {
        const { featureManager, multiFramesManager, reportManager } =
          this._videoGeneratorManager;
        const o = Y.I(this._containerService, e, ["image"]);
        if (i && o.length !== e.length) {
          return l.xz(
            -1,
            d.Ay.t("upload_material_error", {}, "素材上传失败，请重试"),
          );
        }
        if (i && typeof t === "number" && o.length !== 1) {
          const u = d.Ay.t("upload_material_error", {}, "素材上传失败，请重试");
          this._notificationService.warning(u);
          return l.xz(-1, u);
        }
        if (!o.length) {
          return l.nj();
        }
        if (typeof t === "number" && t > 1) {
          yield featureManager.migrateToFeature("multiFrames");
          const c = yield multiFramesManager.addReferenceResources(o, r);
          if (c.ok) {
            ei.j(o, reportManager);
          }
          return c;
        }
        if (typeof t !== "number" && o.length > 2) {
          yield featureManager.migrateToFeature("multiFrames");
          const m = yield multiFramesManager.addReferenceResources(o, r);
          if (m.ok) {
            ei.j(o, reportManager);
          }
          return m;
        }
        if (i && (t === 1 || (t === undefined && o.length > 1))) {
          const p = this._validateLastFrameAvailable();
          if (!p.ok) {
            return p;
          }
        }
        if (typeof t === "number") {
          const h = yield this._importAsFirstLastFrame(o[0], t, r, i);
          if (h.ok) {
            ei.j([o[0]], reportManager);
          }
          return h;
        }
        for (const [_, v] of o.entries()) {
          const g = yield this._importAsFirstLastFrame(
            v,
            i ? _ : undefined,
            r,
            i,
          );
          if (g.ok) {
            ei.j([v], reportManager);
          } else if (i) {
            return g;
          }
        }
        return l.nj();
      })
      .call(this);
  }
  _resolveMultiFramesIndex(e) {
    const {
      metadata: { leadingSegmentGenerationEnabled },
    } = this._videoGeneratorManager.multiFramesManager;
    return ((e + 1 - Number(leadingSegmentGenerationEnabled)) >> 1) + 1;
  }
  _getGeneratorDataByInputParams(e, t) {
    let r;
    let a;
    const { modelReqKey, videoAspectRatio, videoGenInputs } =
      e != null ? e : {};
    const [o] = videoGenInputs != null ? videoGenInputs : [];
    const u = O.x(
      videoAspectRatio === "adaptive" ? undefined : videoAspectRatio,
      t,
    );
    const {
      metadata: { fallbackModel, models },
    } = this._videoGeneratorManager;
    const m = (o == null ? undefined : o.isDraftMode) === true;
    let fallbackModel_key = fallbackModel.key;
    if (
      this._checkModelAvailable(modelReqKey) &&
      (!m || models.some((e) => e.key === modelReqKey && e.isDraft))
    ) {
      fallbackModel_key = modelReqKey;
    } else if (m) {
      fallbackModel_key = undefined;
    }
    if (m && !fallbackModel_key) {
      this._notificationService.warning(
        d.Ay.t(
          "sd25_draft_model_unavailable",
          {},
          "样片模型不可用，请重新选择模型",
        ),
      );
    }
    const {
      prompt = I_1.prompt,
      durationMs = I_1.durationMs,
      fps = I_1.fps,
      resolution,
      firstFrameImage,
      endFrameImage,
      lensRecipeInput,
    } = o;
    const S = models.find((e) => e.key === fallbackModel_key);
    const R = S == null ? undefined : S.fields.find((e) => e.type === B.pH.Fps);
    const k =
      (r =
        (a = R == null ? undefined : R.values.find((e) => e === fps)) != null
          ? a
          : R == null
            ? undefined
            : R.defaultValue) != null
        ? r
        : fps;
    const T = this._sanitizeDurationMs(
      durationMs,
      fps,
      fallbackModel_key,
      models,
    );
    return {
      prompt,
      batchNumber: I_1.batchNumber,
      durationMs: T,
      fps: k,
      resolution,
      firstFrameImage: firstFrameImage
        ? ee.h(this._containerService, firstFrameImage)
        : undefined,
      lastFrameImage: endFrameImage
        ? ee.h(this._containerService, endFrameImage)
        : undefined,
      aspectRatio: u,
      modelKey: fallbackModel_key != null ? fallbackModel_key : I_1.modelKey,
      lensMovementRecipe:
        lensRecipeInput == null ? undefined : lensRecipeInput.lensRecipeKey,
      lensMovementStrength:
        lensRecipeInput == null ? undefined : lensRecipeInput.strengthKey,
    };
  }
  _getLongVideoDataByInputParams(e) {
    let t;
    let r;
    const { modelReqKey, videoGenInputs } = e != null ? e : {};
    const {
      metadata: { fallbackModel, models },
      longVideoManager,
    } = this._videoGeneratorManager;
    const d = this._checkModelAvailable(modelReqKey)
      ? modelReqKey
      : fallbackModel.key;
    const u = models.find((e) => e.key === d);
    const [l] = videoGenInputs != null ? videoGenInputs : [];
    const c =
      (t = l == null ? undefined : l.durationMs) != null
        ? t
        : ec.targetDurationMs;
    return {
      targetDurationMs:
        (r = longVideoManager.normalizeTargetDurationMs(c, u)) != null
          ? r
          : ec.targetDurationMs,
    };
  }
  _getMultiFramesData(e, t) {
    let r;
    let a;
    let i;
    const { videoGenInputs } = e != null ? e : {};
    const [s] = videoGenInputs != null ? videoGenInputs : [];
    const { multiFrames } = s;
    return {
      frames: [
        ...((multiFrames == null ||
        (i = multiFrames.at(0)) == null ||
        (a = i.mediaInfo) == null
          ? undefined
          : a.mediaType) === L.DAMediaType.None
          ? []
          : [
              {
                resource: this._containerService.createInstance(J.N),
                prompt: "",
                durationMs: 0,
              },
            ]),
        ...((r =
          multiFrames == null
            ? undefined
            : multiFrames.map((e) => {
                var r;
                return {
                  resource: this._getMultiFramesMediaResource(e),
                  prompt: (r = e.prompt) != null ? r : "",
                  durationMs: e.durationMs,
                  segmentVideo: this._getMultiFramesGeneratedSegmentVideo(e, t),
                  isSegmentLocked: !!e.segmentVideo,
                };
              })) != null
          ? r
          : []),
      ],
    };
  }
  _getMultiFramesMediaResource(e) {
    let t;
    let r;
    if (
      ((t = e.mediaInfo) == null ? undefined : t.mediaType) ===
      L.DAMediaType.Image
    ) {
      let a;
      let i;
      let n;
      const { imageInfo } = e.mediaInfo;
      const cacheKey =
        imageInfo.imageUri || imageInfo.imageUrl
          ? "multi-frame-"
              .concat(e.idx, "-")
              .concat((a = imageInfo.imageUri) != null ? a : imageInfo.imageUrl)
          : "multi-frame-"
              .concat(e.idx, "-")
              .concat(
                (i =
                  (n = imageInfo.aigcImage) == null ? undefined : n.itemId) !=
                  null
                  ? i
                  : "unknown",
              );
      return ee.h(this._containerService, imageInfo, {
        cacheKey,
      });
    }
    if (
      ((r = e.mediaInfo) == null ? undefined : r.mediaType) ===
      L.DAMediaType.Video
    ) {
      return en.b(this._containerService, e.mediaInfo.videoInfo);
    }
    return this._containerService.createInstance(J.N);
  }
  _getMultiFramesGeneratedSegmentVideo(e, t) {
    if (
      t == null || (r = t.multiFramesData) == null
        ? undefined
        : r.supportEditSegment
    ) {
      var r;
      const {
        multiFramesData: { segments },
      } = t;
      const i = segments.find((t) => t.multiFrameInput.idx === e.idx);
      if (i == null ? undefined : i.generatedVideo) {
        return en.b(this._containerService, i.generatedVideo);
      }
      return undefined;
    }
  }
  _setData(e, t, r) {
    return a
      ._(function* () {
        this._videoGeneratorManager.promptEnhancementManager.discardAcceptedPromptState();
        let a;
        const s = this._getGeneratorDataByInputParams(
          e,
          r == null ? undefined : r.recordedVideoRatio,
        );
        if (!s.modelKey) {
          return void w.V.error(
            "VideoGeneratorDataAdapter",
            "modelKey is undefined",
          );
        }
        const o = this._getFeatureData(e);
        const d = this._getMultiFramesData(e, t);
        const u = this._getOmniReferenceRestoreData(e);
        const l = this._getLongVideoDataByInputParams(e);
        const {
          modelManager,
          featureManager,
          multiFramesManager,
          omniReferenceManager,
          longVideoManager,
        } = this._videoGeneratorManager;
        featureManager.setData(o);
        yield modelManager.setModel(s.modelKey);
        const { model } = this._videoGeneratorManager.data;
        const g = model
          ? modelManager.getAvailableAspectRatio(model, s.aspectRatio)
          : s.aspectRatio;
        const resolution = (model == null ? undefined : model.isDraft)
          ? (a = this._videoGeneratorManager.metadata.resolutionOptions[0]) ==
            null
            ? undefined
            : a.value
          : s.resolution;
        this._videoGeneratorManager.setData(
          this._sanitizeLensMovementData(
            n._(i._({}, s), {
              aspectRatio: g,
              resolution,
            }),
          ),
        );
        multiFramesManager.setData(d);
        const M = omniReferenceManager.setData(u);
        if (M.ok) {
          this._restoreContinuation(u);
        }
        longVideoManager.setData(l);
        if (M.ok && (r == null ? undefined : r.refreshSubjects)) {
          this._refreshLatestSubjects(u.promptContents);
        }
      })
      .call(this);
  }
  _sanitizeLensMovementData(e) {
    if (!e.lensMovementRecipe) {
      return e;
    }
    let t;
    let r;
    let a;
    const model = this._videoGeneratorManager.data.model;
    const o =
      model == null
        ? undefined
        : model.fields.find((e) => e.type === B.pH.LensRecipe);
    const d =
      o == null
        ? undefined
        : o.values.find((t) => t.key === e.lensMovementRecipe);
    if (d) {
      return n._(i._({}, e), {
        lensMovementStrength:
          (t =
            (a = d.strengths) == null ||
            (r = a.find((t) => t.key === e.lensMovementStrength)) == null
              ? undefined
              : r.key) != null
            ? t
            : d.defaultStrength,
      });
    }
    return n._(i._({}, e), {
      lensMovementRecipe: undefined,
      lensMovementStrength: undefined,
    });
  }
  _getVideoContinuationResource(e, t) {
    const r = this._getVideoContinuationSourceItem(e, t);
    if (r == null ? undefined : r.video) {
      const a = this._getVideoContinuationResourceId(r);
      return en.b(this._containerService, r.video, {
        id: a,
        aigcItemId: r.id,
      });
    }
  }
  _getVideoContinuationSourceItem(e, t) {
    if (Z.D(e)) {
      return e;
    }
    return e.itemList.at(t);
  }
  _getVideoContinuationResourceId(e) {
    return e.video.videoId || e.id;
  }
  _restoreContinuation(e) {
    const { continuationOriginReferenceId, continuationOriginVideoId } = e;
    if (continuationOriginReferenceId) {
      this._videoGeneratorManager.continuationManager.setContinuation({
        originReferenceId: continuationOriginReferenceId,
        originVideoId: continuationOriginVideoId,
      });
    } else {
      this._videoGeneratorManager.continuationManager.clearContinuation();
    }
  }
  _sanitizeDurationMs(e, t, r, a) {
    if (!r) {
      return e;
    }
    const i = a.find((e) => e.key === r);
    const n = M4(i, t);
    return HO({
      durationMs: e,
      fps: n,
      model: i,
      fallbackDurationMs: e,
    });
  }
  _importAsFirstLastFrame(e, t, r) {
    const i =
      arguments.length > 3 && arguments[3] !== undefined && arguments[3];
    return a
      ._(function* () {
        const {
          metadata: { lastFrameVisible },
          data: { hasFirstFrameImage },
        } = this._videoGeneratorManager;
        if (t !== undefined) {
          if (t === 0) {
            const s = yield this._videoGeneratorManager.setFirstFrameImage(
              e,
              r,
            );
            if (i) {
              return s;
            }
            return l.nj();
          }
          if (t === 1) {
            const o = this._validateLastFrameAvailable();
            if (!o.ok) {
              return o;
            }
            const u = yield this._videoGeneratorManager.setLastFrameImage(e, r);
            if (i) {
              return u;
            }
            return l.nj();
          }
          const c = d.Ay.t("upload_material_error", {}, "素材上传失败，请重试");
          if (i) {
            this._notificationService.warning(c);
          }
          return l.xz(-1, c);
        }
        if (!hasFirstFrameImage || !lastFrameVisible) {
          const m = yield this._videoGeneratorManager.setFirstFrameImage(e, r);
          if (i) {
            return m;
          }
          return l.nj();
        }
        const p = yield this._videoGeneratorManager.setLastFrameImage(e, r);
        if (i) {
          return p;
        }
        return l.nj();
      })
      .call(this);
  }
  _validateLastFrameAvailable() {
    const { lastFrameVisible, lastFrameDisabled, lastFrameDisabledTip } =
      this._videoGeneratorManager.metadata;
    if (!lastFrameVisible || lastFrameDisabled) {
      const a = lastFrameDisabled
        ? lastFrameDisabledTip
        : d.Ay.t(
            "web_new_current_model_not_support_last_frame",
            {},
            "当前模型不支持尾帧",
          );
      this._notificationService.warning(a);
      return l.xz(-1, a);
    }
    return l.nj();
  }
  _refreshLatestSubjects(e) {
    const { omniReferenceManager } = this._videoGeneratorManager;
    es.r(this._containerService, e, {
      setPromptContents: omniReferenceManager.changePromptContents,
      getCurrentPromptContents: () => omniReferenceManager.data.promptContents,
    });
  }
  _getOmniReferenceRestoreData(e) {
    let t;
    const r = e ? e.videoGenInputs[0] : undefined;
    const a =
      (t = r == null ? undefined : r.longVideoInput) != null
        ? t
        : r == null
          ? undefined
          : r.unifiedEditInput;
    if (!a) {
      const i = r == null ? undefined : r.prompt;
      return {
        references: [],
        promptContents:
          (e == null ? undefined : e.generatorFeature) === "omniReference" && i
            ? [
                {
                  type: "text",
                  text: i,
                },
              ]
            : [],
      };
    }
    return this._restoreVideoContinuationPromptBlock(
      this._getOmniReferenceRestoreDataFromUnifiedEditInput(a),
      r == null ? undefined : r.durationMs,
    );
  }
  _getOmniReferenceRestoreDataFromUnifiedEditInput(e) {
    const { materialList, metaList, editInput, extendInput } = e;
    const n =
      (editInput == null ? undefined : editInput.enable) === true &&
      typeof editInput.editFromMaterialIdx === "number"
        ? editInput.editFromMaterialIdx
        : undefined;
    const s =
      n === undefined &&
      (extendInput == null ? undefined : extendInput.enable) === true &&
      typeof extendInput.extendFromMaterialIdx === "number"
        ? extendInput.extendFromMaterialIdx
        : undefined;
    const { resourceByMaterialIndex, references, promptContents } = eo.U(
      this._containerService,
      e,
      {
        acceptedResourceTypes: ["image", "video", "audio"],
      },
    );
    const l = typeof s === "number" ? resourceByMaterialIndex.at(s) : undefined;
    const c = typeof s === "number" ? materialList.at(s) : undefined;
    const m = typeof n === "number" ? resourceByMaterialIndex.at(n) : undefined;
    const p = typeof n === "number" ? materialList.at(n) : undefined;
    const videoEditFrameTimestampMsByReferenceId = Object.fromEntries(
      metaList.flatMap((e) => {
        var { materialRef } = e;
        if (
          n === undefined ||
          !(materialRef == null ? undefined : materialRef.sourceInfo) ||
          materialRef.sourceInfo.sourceMaterialIdx !== n
        ) {
          return [];
        }
        var r = resourceByMaterialIndex.at(materialRef.materialIdx);
        if (r) {
          return [[r.id, materialRef.sourceInfo.timestampMs]];
        }
        return [];
      }),
    );
    return {
      references,
      promptContents,
      continuationOriginReferenceId:
        (c == null ? undefined : c.materialType) === "video"
          ? l == null
            ? undefined
            : l.id
          : undefined,
      continuationOriginVideoId:
        (c == null ? undefined : c.materialType) === "video"
          ? l == null
            ? undefined
            : l.uri
          : undefined,
      videoEditSourceReferenceId:
        (p == null ? undefined : p.materialType) === "video"
          ? m == null
            ? undefined
            : m.id
          : undefined,
      videoEditFrameTimestampMsByReferenceId,
    };
  }
  _restoreVideoContinuationPromptBlock(e, t) {
    const { continuationOriginReferenceId, promptContents } = e;
    if (
      !continuationOriginReferenceId ||
      this._videoGeneratorManager.continuationManager.hasVideoContinuationPromptBlock(
        promptContents,
        continuationOriginReferenceId,
      )
    ) {
      return e;
    }
    return n._(i._({}, e), {
      promptContents: this._getVideoContinuationPromptContents(
        continuationOriginReferenceId,
        this._removePlainVideoContinuationPromptContents(
          promptContents,
          continuationOriginReferenceId,
          t,
        ),
      ),
    });
  }
  _removePlainVideoContinuationPromptContents(e, t, r) {
    const a = e.findIndex((e) => e.type === "video" && e.id === t);
    if (a === -1) {
      return e;
    }
    const i = C.n();
    const n = i.findIndex((e) => e.type === "slot" && e.slot === "originVideo");
    if (n === -1) {
      return e;
    }
    const s = this._getVideoContinuationDurationText(r);
    let o = e.slice(0, a);
    let d = e.slice(a + 1);
    i.slice(0, n)
      .reverse()
      .forEach((e) => {
        o = this._stripTrailingVideoContinuationTemplateSegment(o, e, s);
      });
    i.slice(n + 1).forEach((e) => {
      d = this._stripLeadingVideoContinuationTemplateSegment(d, e, s);
    });
    d = this._stripLeadingText(d, C.g);
    return [...o, ...d];
  }
  _stripLeadingVideoContinuationTemplateSegment(e, t, r) {
    if (t.type === "text") {
      return this._stripLeadingText(e, t.text);
    }
    if (t.slot === "duration") {
      const [a] = e;
      if ((a == null ? undefined : a.type) === "continuationDuration") {
        return e.slice(1);
      }
      return this._stripLeadingText(e, r);
    }
    return e;
  }
  _stripTrailingVideoContinuationTemplateSegment(e, t, r) {
    if (t.type === "text") {
      return this._stripTrailingText(e, t.text);
    }
    if (t.slot === "duration") {
      const a = e.at(-1);
      if ((a == null ? undefined : a.type) === "continuationDuration") {
        return e.slice(0, -1);
      }
      return this._stripTrailingText(e, r);
    }
    return e;
  }
  _getVideoContinuationDurationText(e) {
    const t = Math.round(
      (e != null ? e : this._videoGeneratorManager.data.totalDurationMs) / j.K,
    );
    return "".concat(t, "s");
  }
  _stripLeadingText(e, t) {
    if (t === "") {
      return e;
    }
    const [r] = e;
    if ((r == null ? undefined : r.type) !== "text" || !r.text.startsWith(t)) {
      return e;
    }
    const a = r.text.slice(t.length);
    if (a.length === 0) {
      return e.slice(1);
    }
    return [
      n._(i._({}, r), {
        text: a,
      }),
      ...e.slice(1),
    ];
  }
  _stripTrailingText(e, t) {
    if (t === "") {
      return e;
    }
    const r = e.at(-1);
    if ((r == null ? undefined : r.type) !== "text" || !r.text.endsWith(t)) {
      return e;
    }
    const a = r.text.slice(0, -t.length);
    if (a.length === 0) {
      return e.slice(0, -1);
    }
    return [
      ...e.slice(0, -1),
      n._(i._({}, r), {
        text: a,
      }),
    ];
  }
  _getFeatureData(e) {
    if (this._isLongVideoInput(e)) {
      return {
        feature: "longVideo",
      };
    }
    if (this._isVideoEditInput(e)) {
      return {
        feature: "videoEdit",
      };
    }
    if (N.q(e)) {
      return {
        feature: "omniReference",
      };
    }
    if (z.B(e)) {
      return {
        feature: "multiFrames",
      };
    }
    const t = e == null ? undefined : e.videoGenInputs[0];
    if (
      (t == null ? undefined : t.firstFrameImage) ||
      (t == null ? undefined : t.endFrameImage)
    ) {
      return {
        feature: "firstLastFrames",
      };
    }
    if ((e == null ? undefined : e.generatorFeature) === "omniReference") {
      return {
        feature: "omniReference",
      };
    }
    return {
      feature: "firstLastFrames",
    };
  }
  _isLongVideoInput(e) {
    let t;
    let r;
    return !!(e == null || (r = e.videoGenInputs) == null || (t = r[0]) == null
      ? undefined
      : t.longVideoInput);
  }
  _isVideoEditInput(e) {
    let t;
    let r;
    let a;
    let i;
    return (
      (e == null ||
      (i = e.videoGenInputs) == null ||
      (a = i[0]) == null ||
      (r = a.unifiedEditInput) == null ||
      (t = r.editInput) == null
        ? undefined
        : t.enable) === true
    );
  }
  constructor(e, t, r) {
    super();
    this._videoGeneratorManager = e;
    this._containerService = t;
    this._notificationService = r;
    this._checkModelAvailable = (e) => {
      var { models } = this._videoGeneratorManager.metadata;
      var r = models.find((t) => t.key === e);
      return (r == null ? undefined : r.status) === Q.nM.Online;
    };
  }
}
ep = o.Cg(
  [
    o.Qj(1, p._),
    o.Qj(2, m.Ot),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof VideoGeneratorManager === "undefined"
        ? Object
        : VideoGeneratorManager,
      p._ === undefined ? Object : p._,
      m.Ot === undefined ? Object : m.Ot,
    ]),
  ],
  ep,
);
const eh = require("r5O");
const e_ = require("b3");
const ev = require("L6W");
const eg = require("Gr4");
const ef = require("gu");
const eM = require("LD");
const ey = require("sl");
const eS = require("ZHm");
const eR = require("ft");
const ek = require("Ogf");
const eT = require("j67");
const eP = require("KDr");
function eI(fields, hasLastFrameImage) {
  const r = hasLastFrameImage ? B.pH.EndFrameConfig : B.pH.FirstFrameConfig;
  return fields.find((e) => e.type === r);
}
class eF {
  get isPristine() {
    return (
      this.isPromptEmpty &&
      eh.A(this.firstFrameImage, I_1.firstFrameImage) &&
      eh.A(this.lastFrameImage, I_1.lastFrameImage)
    );
  }
  get isPromptEmpty() {
    return !this.prompt.trim();
  }
  get validationResult() {
    if (!this.hasFirstFrameImage && this.hasLastFrameImage) {
      return l.xz(
        -1,
        d.Ay.t("web_new_video_add_first_frame", {}, "请上传首帧"),
      );
    }
    const {
      featureManager,
      multiFramesManager,
      metadata: { isCurrentModelSupportFirstLastFrames },
    } = this._videoGeneratorManager;
    const { contentGeneratorManager } = this._videoGeneratorManager;
    const { visibleContentGeneratorInstance } = contentGeneratorManager;
    const {
      data: {
        isFirstLastFramesEngaged,
        isMultiFramesEngaged,
        isOmniReferenceEngaged,
        isVideoEditEngaged,
        isLongVideoEngaged,
      },
    } = featureManager;
    const {
      metadata: {
        leadingSegmentGenerationEnabled,
        trailingSegmentGenerationEnabled,
        minGenerationDurationMs,
      },
      data: { frameResources },
    } = multiFramesManager;
    if (
      isFirstLastFramesEngaged &&
      (((visibleContentGeneratorInstance == null
        ? undefined
        : visibleContentGeneratorInstance.environment.submitExternally) &&
        this.firstFrameImage &&
        this.firstFrameImage.uri === undefined) ||
        (this.lastFrameImage && this.lastFrameImage.uri === undefined))
    ) {
      return l.xz(-1, d.Ay.t("web_canva_image_uploading", {}, "图片上传中"));
    }
    if (isMultiFramesEngaged) {
      const string =
        1 +
        Number(
          !leadingSegmentGenerationEnabled && !trailingSegmentGenerationEnabled,
        );
      if (frameResources.length < string) {
        return l.xz(
          -1,
          d.Ay.t(
            "multiframe_numtip1_clone",
            {
              string,
            },
            "请至少上传{string}张图",
          ),
        );
      }
      if (
        (visibleContentGeneratorInstance == null
          ? undefined
          : visibleContentGeneratorInstance.environment.submitExternally) &&
        frameResources.some((e) => !e.uri)
      ) {
        return l.xz(-1, d.Ay.t("web_canva_image_uploading", {}, "图片上传中"));
      }
      if (this.generationDurationMs < minGenerationDurationMs) {
        return l.xz(
          -1,
          d.Ay.t(
            "multiframe_timelimit_new",
            {
              string: minGenerationDurationMs / j.K,
            },
            "生成的视频时长最少为{string}s",
          ),
        );
      }
    }
    if (
      isVideoEditEngaged &&
      !this._videoGeneratorManager.omniReferenceManager.data
        .videoEditSourceReference
    ) {
      return l.xz(
        -1,
        d.Ay.t(
          "seedance_25_video_edit_source_required",
          {},
          "请上传需要编辑的视频",
        ),
      );
    }
    if (isOmniReferenceEngaged || isVideoEditEngaged || isLongVideoEngaged) {
      const {
        omniReferenceManager: {
          data: { hasReferences, references, promptContents, validationResult },
        },
      } = this._videoGeneratorManager;
      if (promptContents.some((e) => e.type === "subject" && e.loading)) {
        return l.xz(
          -1,
          d.Ay.t(
            "web_agent_subject_material_updating",
            {},
            "Updating element...",
          ),
        );
      }
      const S =
        hasReferences || promptContents.some((e) => e.type === "subject");
      const R = promptContents.some((e) => e.type === "text" && e.text.trim());
      if (
        !S &&
        !(
          (!isLongVideoEngaged &&
            !isVideoEditEngaged &&
            isCurrentModelSupportFirstLastFrames) ||
          (isLongVideoEngaged && R)
        )
      ) {
        return l.xz(
          -1,
          d.Ay.t("video_omni_reference_min", {}, "请至少上传1个素材"),
        );
      }
      if (S) {
        if (
          (visibleContentGeneratorInstance == null
            ? undefined
            : visibleContentGeneratorInstance.environment.submitExternally) &&
          references.some((e) => !e.uri)
        ) {
          return l.xz(
            -1,
            d.Ay.t("web_canva_material_uploading_tooltip", {}, "素材上传中"),
          );
        }
        if (!validationResult.ok) {
          return validationResult;
        }
      }
    }
    return this.promptValidationResult;
  }
  get promptValidationResult() {
    let e;
    let t;
    let r;
    let a;
    const { featureManager } = this._videoGeneratorManager;
    const {
      data: {
        isMultiFramesEngaged,
        isOmniReferenceEngaged,
        isVideoEditEngaged,
        isLongVideoEngaged,
      },
    } = featureManager;
    const data = this._videoGeneratorManager.omniReferenceManager.data;
    const l =
      data.hasReferences ||
      data.promptContents.some((e) => e.type === "subject");
    const allowEmpty =
      this.hasFirstFrameImage ||
      this.hasLastFrameImage ||
      isMultiFramesEngaged ||
      l;
    const m = isVideoEditEngaged
      ? (t = this.model) == null || (e = t.editConfig) == null
        ? undefined
        : e.maxPromptLength
      : (a = this.model) == null || (r = a.extra) == null
        ? undefined
        : r.maxPromptLength;
    const maxLength =
      m != null
        ? m
        : eP.O({
            domesticTextLimit: 2000,
          });
    let { prompt } = this;
    if (isOmniReferenceEngaged || isVideoEditEngaged || isLongVideoEngaged) {
      prompt =
        this._videoGeneratorManager.omniReferenceManager.data.promptContents
          .map((e) => {
            if (e.type === "text") {
              return e.text;
            }
            if (e.type === "continuationDuration") {
              return "";
            }
            return "@@@@";
          })
          .join("");
    }
    return e_.f(prompt, {
      allowEmpty,
      maxLength,
    });
  }
  get commercialSceneOptions() {
    let e;
    let t;
    const r =
      (e = this.resolution) != null
        ? e
        : this._videoGeneratorManager.metadata.defaultResolution;
    const chargeInputVideoDuration = ev.Ge(
      (t = this.model) == null ? undefined : t.commercialConfig,
    );
    const { generationDurationMs } = this;
    const videoDuration = generationDurationMs / j.K;
    const d = F.X(
      this._videoGeneratorManager.omniReferenceManager.data.promptContents,
    );
    const u = new Set();
    const l = d.filter((e) => {
      var { subject } = e;
      var r = v.K(subject);
      return !u.has(r) && (u.add(r), true);
    });
    const inputVideoDuration =
      this.references.reduce((acc, reference) => {
        if (reference instanceof $.p) {
          return acc + reference.duration;
        }
        return acc;
      }, 0) + l.reduce((acc, item) => acc + eT.io(item.subject), 0);
    const materialTypes = [
      ...this.references.map((e) => eT.GT(e.type)),
      ...l.map((e) => eT.Ye(e.subject)),
    ];
    return eg.I(
      n._(
        i._(
          {
            scene: this._videoGeneratorManager.featureManager.data
              .isVideoEditEngaged
              ? ef.Sk.VideoEdit
              : ef.Sk.BasicVideoGenerateButton,
            resolution: r,
            modelReqKey: this.modelKey,
            videoDuration,
            batchNumber: this.effectiveBatchNumber,
          },
          chargeInputVideoDuration
            ? {
                inputVideoDuration,
              }
            : null,
        ),
        {
          chargeInputVideoDuration,
          isLongVideo:
            this._videoGeneratorManager.featureManager.data.isLongVideoEngaged,
          hasInputVideo: ev.$t(materialTypes),
          useSeedanceFast5sFreeTrial: eM.v({
            modelReqKey: this.modelKey,
            resolution: r,
            videoDuration,
          }),
          lensRecipe: this.lensMovementRecipe,
          reportParams: i._(
            {
              enterSource: eR.k.Generate,
              vipSource: ey.d.Generate,
              extraVipFunctionKey: ""
                .concat(this.modelKey)
                .concat(r ? "-".concat(r) : ""),
              useVipFunctionDetailsReporterHoc: true,
            },
            eS.YQ(
              this._videoGeneratorManager.reportManager.resourceReportParams,
            ),
          ),
          materialTypes,
        },
      ),
    );
  }
  get model() {
    let e;
    const {
      metadata: { models },
    } = this._videoGeneratorManager;
    const r = (e = this.modelKey) != null ? e : I_1.modelKey;
    return models.find((e) => e.key === r);
  }
  get effectiveBatchNumber() {
    return Math.min(
      this.batchNumber,
      this._videoGeneratorManager.metadata.maxBatchNumber,
    );
  }
  get resourceAuditPolicy() {
    let e;
    let t;
    if ((e = (t = this.model) == null ? undefined : t.preAuditPolicy) != null) {
      return e;
    }
    return "";
  }
  get subjectPreAuditPolicy() {
    let e;
    let t;
    if (
      (e = (t = this.model) == null ? undefined : t.subjectPreAuditPolicy) !=
      null
    ) {
      return e;
    }
    return "";
  }
  get hasFirstFrameImage() {
    let e;
    return (
      ((e = this.firstFrameImage) == null ? undefined : e.url) !== undefined
    );
  }
  get hasLastFrameImage() {
    let e;
    return (
      ((e = this.lastFrameImage) == null ? undefined : e.url) !== undefined &&
      this._videoGeneratorManager.metadata.lastFrameEnabled
    );
  }
  get hasReferenceImages() {
    return this.hasFirstFrameImage || this.hasLastFrameImage;
  }
  get aspectRatioAutoMatched() {
    const {
      data: { hasReferenceImages },
      featureManager,
      multiFramesManager,
    } = this._videoGeneratorManager;
    const {
      data: { hasFrameResources },
    } = multiFramesManager;
    const {
      data: { isFirstLastFramesEngaged, isMultiFramesEngaged },
    } = featureManager;
    return (
      this.videoAspectRatioMode === ek.E.Adaptive ||
      (isFirstLastFramesEngaged && hasReferenceImages) ||
      (isMultiFramesEngaged && hasFrameResources)
    );
  }
  get videoAspectRatioMode() {
    let e;
    let t;
    const { model, hasLastFrameImage } = this;
    if (!model) {
      return ek.E.Default;
    }
    const { fields } = model;
    const {
      featureManager: {
        data: {
          isFirstLastFramesEngaged,
          isLongVideoEngaged,
          isOmniReferenceEngaged,
          isVideoEditEngaged,
        },
      },
      continuationManager,
    } = this._videoGeneratorManager;
    if (continuationManager.data.enabled) {
      let l;
      const c = fields.find((e) => e.type === B.pH.ExtendConfig);
      if ((l = c == null ? undefined : c.videoAspectRatioMode) != null) {
        return l;
      }
      return ek.E.Default;
    }
    if (isLongVideoEngaged) {
      let m;
      const p = fields.find((e) => e.type === B.pH.LongVideo);
      if ((m = p == null ? undefined : p.videoAspectRatioMode) != null) {
        return m;
      }
      return ek.E.Default;
    }
    if (isVideoEditEngaged) {
      if (
        (h =
          (_ = model.editConfig) == null
            ? undefined
            : _.videoAspectRatioMode) != null
      ) {
        return h;
      }
      return ek.E.Default;
    }
    if (isOmniReferenceEngaged) {
      var h;
      var _;
      let v;
      const g = fields.find((e) => e.type === B.pH.UnifiedEdit);
      if ((v = g == null ? undefined : g.videoAspectRatioMode) != null) {
        return v;
      }
      return ek.E.Default;
    }
    if (
      isFirstLastFramesEngaged &&
      (e =
        (t = eI(fields, hasLastFrameImage)) == null
          ? undefined
          : t.videoAspectRatioMode) != null
    ) {
      return e;
    }
    return ek.E.Default;
  }
  get durationMode() {
    let e;
    let t;
    const { model, hasLastFrameImage } = this;
    if (!model) {
      return ek.P.Default;
    }
    const { fields } = model;
    const {
      featureManager: {
        data: {
          isFirstLastFramesEngaged,
          isLongVideoEngaged,
          isOmniReferenceEngaged,
          isVideoEditEngaged,
        },
      },
      continuationManager,
    } = this._videoGeneratorManager;
    if (continuationManager.data.enabled) {
      let l;
      const c = fields.find((e) => e.type === B.pH.ExtendConfig);
      if ((l = c == null ? undefined : c.durationMode) != null) {
        return l;
      }
      return ek.P.Default;
    }
    if (isLongVideoEngaged) {
      let m;
      const p = fields.find((e) => e.type === B.pH.LongVideo);
      if ((m = p == null ? undefined : p.durationMode) != null) {
        return m;
      }
      return ek.P.Default;
    }
    if (isVideoEditEngaged) {
      if (
        (h = (_ = model.editConfig) == null ? undefined : _.durationMode) !=
        null
      ) {
        return h;
      }
      return ek.P.Default;
    }
    if (isOmniReferenceEngaged) {
      var h;
      var _;
      let v;
      const g = fields.find((e) => e.type === B.pH.UnifiedEdit);
      if ((v = g == null ? undefined : g.durationMode) != null) {
        return v;
      }
      return ek.P.Default;
    }
    if (
      isFirstLastFramesEngaged &&
      (e =
        (t = eI(fields, hasLastFrameImage)) == null
          ? undefined
          : t.durationMode) != null
    ) {
      return e;
    }
    return ek.P.Default;
  }
  get videoEditSourceDurationMs() {
    let e;
    const t =
      ((e =
        this._videoGeneratorManager.omniReferenceManager.data
          .videoEditSourceReference) == null
        ? undefined
        : e.type) === "video"
        ? this._videoGeneratorManager.omniReferenceManager.data
            .videoEditSourceReference.duration
        : undefined;
    if (t && t > 0) {
      return t * j.K;
    }
  }
  get totalDurationMs() {
    let e;
    const { featureManager, multiFramesManager } = this._videoGeneratorManager;
    const {
      data: { isMultiFramesEngaged, isLongVideoEngaged },
    } = featureManager;
    const {
      metadata: {
        leadingSegmentGenerationEnabled,
        trailingSegmentGenerationEnabled,
      },
      data: { frames },
    } = multiFramesManager;
    if (isMultiFramesEngaged) {
      return frames
        .slice(
          +!leadingSegmentGenerationEnabled,
          trailingSegmentGenerationEnabled ? frames.length : -1,
        )
        .reduce((acc, item) => acc + item.durationMs, 0);
    }
    if (isLongVideoEngaged) {
      return this._videoGeneratorManager.longVideoManager.data.targetDurationMs;
    }
    if (
      this._videoGeneratorManager.featureManager.data.isVideoEditEngaged &&
      this.durationMode === ek.P.Adaptive &&
      (e = this.videoEditSourceDurationMs) != null
    ) {
      return e;
    }
    return this.durationMs;
  }
  get generationDurationMs() {
    let e;
    const { featureManager, multiFramesManager } = this._videoGeneratorManager;
    const {
      data: { isMultiFramesEngaged, isLongVideoEngaged },
    } = featureManager;
    const {
      metadata: {
        leadingSegmentGenerationEnabled,
        trailingSegmentGenerationEnabled,
      },
      data: { frames },
    } = multiFramesManager;
    if (isMultiFramesEngaged) {
      return frames
        .slice(
          +!leadingSegmentGenerationEnabled,
          trailingSegmentGenerationEnabled ? frames.length : -1,
        )
        .filter((e) => {
          var { isSegmentLocked = false } = e;
          return !isSegmentLocked;
        })
        .reduce((acc, item) => acc + item.durationMs, 0);
    }
    if (isLongVideoEngaged) {
      return this._videoGeneratorManager.longVideoManager.data.targetDurationMs;
    }
    if (
      this._videoGeneratorManager.featureManager.data.isVideoEditEngaged &&
      this.durationMode === ek.P.Adaptive &&
      (e = this.videoEditSourceDurationMs) != null
    ) {
      return e;
    }
    return this.durationMs;
  }
  get references() {
    const { featureManager, multiFramesManager, omniReferenceManager } =
      this._videoGeneratorManager;
    const {
      data: {
        isFirstLastFramesEngaged,
        isMultiFramesEngaged,
        isOmniReferenceEngaged,
        isVideoEditEngaged,
        isLongVideoEngaged,
      },
    } = featureManager;
    if (isFirstLastFramesEngaged) {
      return [this.firstFrameImage, this.lastFrameImage].filter(
        (e) => e !== undefined,
      );
    }
    if (isMultiFramesEngaged) {
      return multiFramesManager.data.frameResources;
    }
    if (isOmniReferenceEngaged || isVideoEditEngaged || isLongVideoEngaged) {
      return omniReferenceManager.data.references;
    }
    return [];
  }
  setPrompt(e) {
    this.prompt = e;
  }
  setModelKey(e) {
    this.modelKey = e;
  }
  setBatchNumber(e) {
    this.batchNumber = e;
  }
  setLastDefaultModelKey(e) {
    this.lastDefaultModelKey = e;
  }
  setAspectRatio(e) {
    this.aspectRatio = e;
  }
  setResolution(e) {
    this.resolution = e;
    this.resolutionSource = "explicit";
  }
  syncResolutionWithModel(e) {
    const shouldFollowModelDefaultResolution =
      this.shouldFollowModelDefaultResolution;
    this.resolution = e;
    if (shouldFollowModelDefaultResolution) {
      this.resolutionSource = "default";
    }
  }
  setDurationMs(e) {
    this.durationMs = e;
  }
  setFps(e) {
    this.fps = e;
  }
  setFirstFrameImage(e) {
    this.firstFrameImage = e;
  }
  setLastFrameImage(e) {
    this.lastFrameImage = e;
  }
  setLensMovementRecipe(e) {
    this.lensMovementRecipe = e;
  }
  setLensMovementStrength(e) {
    this.lensMovementStrength = e;
  }
  setDraftContent(e) {
    this.draftContent = e;
  }
  resetFirstFrameImage() {
    this.firstFrameImage = I_1.firstFrameImage;
  }
  resetLastFrameImage() {
    this.lastFrameImage = I_1.lastFrameImage;
  }
  setData(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    const shouldFollowModelDefaultResolution =
      this.shouldFollowModelDefaultResolution;
    Object.assign(this, e);
    if (t && e.resolution !== undefined) {
      this.resolutionSource = "explicit";
    } else if (shouldFollowModelDefaultResolution) {
      this.resolutionSource = "default";
    }
  }
  resetData(e) {
    const { metadata } = this._videoGeneratorManager;
    this.setData(
      n._(i._({}, I_1), {
        aspectRatio: metadata.defaultAspectRatio,
        durationMs: metadata.defaultDurationMs,
        fps: metadata.defaultFps,
        lensMovementRecipe: metadata.defaultLensMovementRecipe,
        lensMovementStrength: metadata.defaultLensMovementStrength,
        modelKey: e != null ? e : I_1.modelKey,
      }),
    );
    this.resolution = metadata.defaultResolution;
    this.resolutionSource = "default";
  }
  get shouldFollowModelDefaultResolution() {
    return this.resolutionSource === "default" || this.resolution === undefined;
  }
  constructor(e) {
    this._videoGeneratorManager = e;
    this.prompt = I_1.prompt;
    this.modelKey = undefined;
    this.batchNumber = I_1.batchNumber;
    this.lastDefaultModelKey = undefined;
    this.aspectRatio = I_1.aspectRatio;
    this.resolution = I_1.resolution;
    this.resolutionSource = undefined;
    this.durationMs = I_1.durationMs;
    this.fps = I_1.fps;
    this.firstFrameImage = I_1.firstFrameImage;
    this.lastFrameImage = I_1.lastFrameImage;
    this.lensMovementRecipe = I_1.lensMovementRecipe;
    this.lensMovementStrength = I_1.lensMovementStrength;
    G.l_(this);
  }
}
o.Cg(
  [el.A(), o.Sn("design:type", Object)],
  eF.prototype,
  "modelKey",
  undefined,
);
o.Cg(
  [
    el.A(),
    o.Sn(
      "design:type",
      typeof VideoGeneratorBatchNumber === "undefined"
        ? Object
        : VideoGeneratorBatchNumber,
    ),
  ],
  eF.prototype,
  "batchNumber",
  undefined,
);
o.Cg(
  [el.A(), o.Sn("design:type", Object)],
  eF.prototype,
  "lastDefaultModelKey",
  undefined,
);
o.Cg(
  [
    el.A(),
    o.Sn(
      "design:type",
      typeof VideoGeneratorAspectRatio === "undefined"
        ? Object
        : VideoGeneratorAspectRatio,
    ),
  ],
  eF.prototype,
  "aspectRatio",
  undefined,
);
o.Cg(
  [el.A(), o.Sn("design:type", Object)],
  eF.prototype,
  "resolution",
  undefined,
);
o.Cg(
  [el.A(), o.Sn("design:type", Object)],
  eF.prototype,
  "resolutionSource",
  undefined,
);
o.Cg(
  [el.A(), o.Sn("design:type", Number)],
  eF.prototype,
  "durationMs",
  undefined,
);
o.Cg([el.A(), o.Sn("design:type", Number)], eF.prototype, "fps", undefined);
eF = o.Cg(
  [
    el.L("video"),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof StoreData === "undefined" ? Object : StoreData,
    ]),
  ],
  eF,
);
const eb = require("k4");
const eC = require("at");
const eE = require("rGr");
const eA = require("qaC");
const eG = require("./module-ilm.js");
class ex {
  get feature() {
    let e;
    let t;
    let r;
    if (
      (e =
        (t = this._feature) != null
          ? t
          : (r =
                this._videoGeneratorManager.featureManager.metadata
                  .featureOptions[0]) == null
            ? undefined
            : r.value) != null
    ) {
      return e;
    }
    return "firstLastFrames";
  }
  get isFirstLastFramesEngaged() {
    return this.feature === "firstLastFrames";
  }
  get isMultiFramesEngaged() {
    return this.feature === "multiFrames";
  }
  get isOmniReferenceEngaged() {
    return this.feature === "omniReference";
  }
  get isVideoEditEngaged() {
    return this.feature === "videoEdit";
  }
  get isLongVideoEngaged() {
    return this.feature === "longVideo";
  }
  get isOmniReferenceLikeEngaged() {
    return (
      this.isOmniReferenceEngaged ||
      this.isVideoEditEngaged ||
      this.isLongVideoEngaged
    );
  }
  setData(e) {
    this._feature = e.feature;
  }
  setFeature(e) {
    this._feature = e;
  }
  resetFeature() {
    this._feature = undefined;
  }
  constructor(e) {
    this._videoGeneratorManager = e;
    this._feature = undefined;
    G.l_(this);
  }
}
const eD = require("z8");
const eV = require("yw");
class eL {
  get featureOptions() {
    const {
      metadata: { models },
      longVideoManager,
    } = this._videoGeneratorManager;
    const {
      metadata: { isLongVideoFeatureSelected },
    } = longVideoManager;
    const a = new Set(
      models.flatMap((e) => {
        var t;
        var r;
        if (
          (t =
            (r = e.fields.find((e) => e.type === B.pH.InputMediaType)) == null
              ? undefined
              : r.values) != null
        ) {
          return t;
        }
        return [];
      }),
    );
    const i = models.some((e) =>
      this._videoGeneratorManager.longVideoManager.isModelAvailable(e),
    );
    const n = {
      firstLastFrames: a.has("first_frame"),
      multiFrames: a.has("multi_frame"),
      omniReference: a.has("unified_edit"),
      videoEdit: a.has("edit"),
      longVideo: a.has("long_video") && i,
    };
    return [
      {
        value: "omniReference",
        icon: eD.jsx(eV.o2d, {}),
        label: d.Ay.t("video_omni_ref", {}, "全能参考"),
      },
      {
        value: "firstLastFrames",
        icon: eD.jsx(eV.R6A, {}),
        label: d.Ay.t("video_feature_first_and_last_frames", {}, "首尾帧"),
      },
      {
        value: "multiFrames",
        icon: eD.jsx(eV.qRB, {}),
        label: d.Ay.t("multiframe", {}, "智能多帧"),
      },
      {
        value: "videoEdit",
        icon: eD.jsx(eV.xHZ, {}),
        label: d.Ay.t("seedance_25_edit", {}, "智能编辑"),
        extra: {
          tag: "beta",
        },
      },
      {
        value: "longVideo",
        icon: isLongVideoFeatureSelected
          ? eD.jsx(eV.LFN, {})
          : eD.jsx(eV.jF_, {}),
        label: d.Ay.t("seedance_25_long_video", {}, "超长视频"),
        extra: {
          tag: "beta",
        },
      },
    ].filter((e) => {
      var { value } = e;
      return n[value];
    });
  }
  get isFeatureSelectionBadgeVisible() {
    const {
      metadata: { isCurrentModelSupportMultiFrames },
      multiFramesManager,
    } = this._videoGeneratorManager;
    const {
      metadata: { isMultiFramesBadgeDismissed },
    } = multiFramesManager;
    return isCurrentModelSupportMultiFrames && !isMultiFramesBadgeDismissed;
  }
  markVideoEditFeatureSelected() {
    this.isVideoEditFeatureSelected = true;
  }
  constructor(e) {
    this._videoGeneratorManager = e;
    this.isVideoEditFeatureSelected =
      eb.b.getItem(eG.S) === JSON.stringify(true);
    G.l_(this);
  }
}
class ew extends u.jG {
  get metadata() {
    return this._metadataStore;
  }
  get data() {
    return this._dataStore;
  }
  _resetUniversalDataByFeature(e) {
    const { omniReferenceManager, multiFramesManager } =
      this._videoGeneratorManager;
    switch (e) {
      case "longVideo":
      case "videoEdit":
      case "omniReference":
        omniReferenceManager.resetData();
        break;
      case "multiFrames":
        multiFramesManager.resetFrames();
        break;
      default:
        this._videoGeneratorManager.resetReferenceImages();
    }
  }
  _isSharedOmniReferenceDataFeature(e, t) {
    const r = ["omniReference", "videoEdit", "longVideo"];
    return r.includes(e) && r.includes(t);
  }
  _clearUnsupportedContextByFeature(e) {
    if (new Set(["videoEdit", "longVideo"]).has(e)) {
      this._videoGeneratorManager.continuationManager.clearContinuationContext();
    }
  }
  _updateSharedOmniReferenceContext(e, t) {
    const { omniReferenceManager } = this._videoGeneratorManager;
    if (t === "videoEdit") {
      omniReferenceManager.ensureVideoEditSourceReference();
    } else if (e === "videoEdit") {
      omniReferenceManager.clearVideoEditContext();
    }
  }
  constructor(e) {
    var t;
    super();
    t = this;
    this._videoGeneratorManager = e;
    this._metadataStore = new eL(this._videoGeneratorManager);
    this._dataStore = new ex(this._videoGeneratorManager);
    this._featureChangeId = 0;
    this.updateFeatureConfig = (e) => {
      var t;
      var r;
      var a = new Set(
        (t =
          (r = e.fields.find((e) => e.type === B.pH.InputMediaType)) == null
            ? undefined
            : r.values) != null
          ? t
          : [],
      );
      var i = (t) => {
        var r = a.intersection(new Set(eA.L[t])).size > 0;
        if (t !== "longVideo") {
          return r;
        }
        return (
          r && this._videoGeneratorManager.longVideoManager.isModelAvailable(e)
        );
      };
      if (!i(this._dataStore.feature)) {
        var n = this._metadataStore.featureOptions.map((e) => e.value).find(i);
        if (n) {
          this._featureChangeId += 1;
          this._dataStore.setFeature(n);
        }
      }
    };
    this.setData = (e) => {
      this.setFeature(e.feature);
    };
    this.setFeature = (e) => {
      if (this._dataStore.feature !== e) {
        if (
          e === "longVideo" &&
          !this._videoGeneratorManager.modelManager.hasSupportedModelForFeature(
            e,
          )
        ) {
          return void this._videoGeneratorManager.modelManager.switchToSupportedModelForFeature(
            e,
          );
        }
        this._featureChangeId += 1;
        this._dataStore.setFeature(e);
        this._videoGeneratorManager.modelManager.switchToSupportedModelForFeature(
          e,
        );
      }
    };
    this.resetFeature = () => {
      this._featureChangeId += 1;
      this._dataStore.resetFeature();
    };
    this.migrateToFeature = function (e) {
      const r =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return a._(function* () {
        const { preferBestModel = false, preserveModel = false } = r;
        const { feature } = t._dataStore;
        const s = t._isSharedOmniReferenceDataFeature(feature, e);
        if (feature !== e) {
          const o = s ? undefined : t._getUniversalDataByFeature(feature);
          const { modelManager } = t._videoGeneratorManager;
          const {
            switchToBestModelForFeature,
            switchToSupportedModelForFeature,
          } = modelManager;
          if (
            e === "longVideo" &&
            !modelManager.hasSupportedModelForFeature(e)
          ) {
            return void switchToSupportedModelForFeature(e);
          }
          if (!s) {
            t._resetUniversalDataByFeature(e);
          }
          const c = ++t._featureChangeId;
          t._dataStore.setFeature(e);
          if (e === "longVideo") {
            switchToSupportedModelForFeature(e);
          }
          if (!(preserveModel || e === "longVideo")) {
            if (preferBestModel) {
              switchToBestModelForFeature(e);
            } else {
              switchToSupportedModelForFeature(e);
            }
          }
          if (
            s &&
            (t._updateSharedOmniReferenceContext(feature, e),
            !(yield t._videoGeneratorManager.omniReferenceManager.removeInvalidReferencesForCurrentFeature(
              () => c === t._featureChangeId,
            )))
          ) {
            return;
          }
          if (o) {
            yield t._setUniversalDataByFeature(e, o);
          }
          t._clearUnsupportedContextByFeature(e);
          if (!s) {
            t._resetUniversalDataByFeature(feature);
          }
        }
      })();
    };
    this.switchFeature = (e) =>
      a._(function* () {
        const r = t._shouldPreserveCurrentModelWhenSwitchingFrameFeature(e)
          ? {
              preserveModel: true,
            }
          : {};
        yield t.migrateToFeature(e, r);
        t._videoGeneratorManager.reportManager.reportSwitchFunctionMode();
      })();
    this.dismissFeatureSelectionBadge = (e) => {
      var {
        metadata: { isCurrentModelSupportMultiFrames },
        multiFramesManager,
        longVideoManager,
      } = this._videoGeneratorManager;
      var { dismissMultiFramesBadge } = multiFramesManager;
      var { markFeatureSelected } = longVideoManager;
      if (isCurrentModelSupportMultiFrames) {
        dismissMultiFramesBadge();
      }
      if (e === "longVideo") {
        markFeatureSelected();
      }
      if (
        !(e !== "videoEdit" || this._metadataStore.isVideoEditFeatureSelected)
      ) {
        this._metadataStore.markVideoEditFeatureSelected();
        eb.b.setItem(eG.S, JSON.stringify(true));
      }
    };
    this._getUniversalDataByFeature = (e) => {
      var {
        multiFramesManager,
        omniReferenceManager,
        data,
        resetReferenceImages,
      } = this._videoGeneratorManager;
      var { prompt, firstFrameImage, lastFrameImage } = data;
      switch (e) {
        case "longVideo":
        case "videoEdit":
        case "omniReference":
          var { references, promptContents } = omniReferenceManager.data;
          return {
            resources: references,
            prompt: promptContents.every((e) => e.type === "text")
              ? promptContents.map((e) => e.text).join("")
              : "",
          };
        case "multiFrames":
          return {
            resources: multiFramesManager.data.frames
              .filter((e) => e.resource.type !== "empty")
              .map((e) => e.resource),
            prompt,
          };
        default:
          resetReferenceImages();
          var l = [];
          if (firstFrameImage) {
            l.push(firstFrameImage);
          }
          if (lastFrameImage) {
            l.push(lastFrameImage);
          }
          return {
            resources: l,
            prompt,
          };
      }
    };
    this._setUniversalDataByFeature = (e, r) =>
      a._(function* () {
        const { resources, prompt } = r;
        const {
          omniReferenceManager,
          multiFramesManager,
          setFirstFrameImage,
          setLastFrameImage,
          setPrompt,
          setDurationMs,
        } = t._videoGeneratorManager;
        switch (e) {
          case "longVideo":
          case "videoEdit":
          case "omniReference":
            const { addReferenceResources, changePromptContents } =
              omniReferenceManager;
            const p = resources.filter(
              (e) =>
                e instanceof eC.Vl || e instanceof $.p || e instanceof eE.e,
            );
            yield addReferenceResources(p);
            if (e === "videoEdit") {
              omniReferenceManager.ensureVideoEditSourceReference();
            }
            changePromptContents(
              prompt
                ? [
                    {
                      type: "text",
                      text: prompt,
                    },
                  ]
                : [],
            );
            setPrompt("");
            break;
          case "multiFrames":
            const { metadata } = multiFramesManager;
            const { maxFrameCount } = metadata;
            const v = resources
              .filter((e) => e instanceof eC.Vl || e instanceof $.p)
              .slice(0, maxFrameCount);
            yield multiFramesManager.addReferenceResources(v);
            setPrompt("");
            break;
          default:
            setPrompt(prompt);
            const g = resources.filter((e) => e instanceof eC.Vl);
            if (g[0] instanceof eC.Vl) {
              yield setFirstFrameImage(g[0]);
            }
            if (g[1] instanceof eC.Vl) {
              yield setLastFrameImage(g[1]);
            }
            setDurationMs(5000);
        }
      })();
    this._shouldPreserveCurrentModelWhenSwitchingFrameFeature = (e) => {
      var t;
      var r;
      var a;
      var { feature } = this._dataStore;
      if (
        (feature !== "firstLastFrames" || e !== "multiFrames") &&
        (feature !== "multiFrames" || e !== "firstLastFrames")
      ) {
        return false;
      }
      var { data, multiFramesManager } = this._videoGeneratorManager;
      var o =
        (t =
          (a = data.model) == null ||
          (r = a.fields.find((e) => e.type === B.pH.InputMediaType)) == null
            ? undefined
            : r.values) != null
          ? t
          : [];
      return (
        !!(
          o.includes("first_frame") &&
          o.includes("multi_frame") &&
          !o.includes("end_frame")
        ) &&
        (e !== "firstLastFrames" ||
          multiFramesManager.data.frames.filter(
            (e) => e.resource instanceof eC.Vl,
          ).length < 2)
      );
    };
  }
}
const ej = require("./module-kjR.js");
const eO = require("vIx");
const eK = require("./module-yjb.js");
class ez {
  get isCurrentModelSupported() {
    const { model } = this._videoGeneratorManager.data;
    return !!model && this.isModelAvailable(model);
  }
  get durationMsConfig() {
    const { model } = this._videoGeneratorManager.data;
    if (model) {
      return this.getDurationMsConfig(model);
    }
  }
  get durationOptions() {
    const durationMsConfig = this.durationMsConfig;
    if (!durationMsConfig) {
      return [];
    }
    const t = [];
    for (
      let r = durationMsConfig.min;
      r <= durationMsConfig.max;
      r += durationMsConfig.step
    ) {
      t.push(r);
    }
    if (t.at(-1) !== durationMsConfig.max) {
      t.push(durationMsConfig.max);
    }
    return t.map((e) => {
      var t = e / j.K;
      return {
        label: "".concat(t, "s"),
        value: e,
        icon: eO._(t),
      };
    });
  }
  get defaultTargetDurationMs() {
    let e;
    const durationMsConfig = this.durationMsConfig;
    return eK.Td(
      (e =
        durationMsConfig == null ? undefined : durationMsConfig.defaultValue) !=
        null
        ? e
        : ec.targetDurationMs,
      durationMsConfig,
      ec.targetDurationMs,
    );
  }
  isModelAvailable(e) {
    if (e.isDraft) {
      return false;
    }
    let t;
    const r = e.fields.find((e) => e.type === B.pH.InputMediaType);
    return (
      (t = r == null ? undefined : r.values.includes("long_video")) != null &&
      t &&
      !!this.getDurationMsConfig(e)
    );
  }
  getDurationMsConfig(e) {
    const t = e.fields.find((e) => e.type === B.pH.LongVideo);
    if (eK.T9(t)) {
      return t.durationMsConfig;
    }
  }
  normalizeTargetDurationMs(e, t) {
    const r = e ? this.getDurationMsConfig(e) : undefined;
    if (r) {
      return eK.Td(t, r, r.defaultValue);
    }
  }
  markFeatureSelected() {
    this.isLongVideoFeatureSelected = true;
  }
  constructor(e) {
    this._videoGeneratorManager = e;
    this.isLongVideoFeatureSelected =
      eb.b.getItem(ej.y) === JSON.stringify(true);
    G.l_(this);
  }
}
class eB extends u.jG {
  get metadata() {
    return this._metadataStore;
  }
  get data() {
    return this._dataStore;
  }
  constructor(e) {
    var t;
    super();
    t = this;
    this._videoGeneratorManager = e;
    this._metadataStore = new ez(this._videoGeneratorManager);
    this._dataStore = new em();
    this.setData = (e) => {
      this._dataStore.setData(e);
    };
    this.resetData = () => {
      this._dataStore.setData(
        n._(i._({}, ec), {
          targetDurationMs: this._metadataStore.defaultTargetDurationMs,
        }),
      );
    };
    this.setTargetDurationMs = (e) => {
      this._dataStore.setTargetDurationMs(e);
    };
    this.changeTargetDurationMs = (e) => {
      this.setTargetDurationMs(e);
      this._videoGeneratorManager.reportManager.reportSwitchVideoDuration();
    };
    this.markFeatureSelected = () => {
      if (!this._metadataStore.isLongVideoFeatureSelected) {
        this._metadataStore.markFeatureSelected();
        eb.b.setItem(ej.y, JSON.stringify(true));
      }
    };
    this.isModelAvailable = (e) => this._metadataStore.isModelAvailable(e);
    this.normalizeTargetDurationMs = function (e) {
      const r =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : t._videoGeneratorManager.data.model;
      return t._metadataStore.normalizeTargetDurationMs(r, e);
    };
  }
}
const eq = require("kV9");
const eH = require("A0");
const eN = require("dzV");
const eW = require("IHa");
const eU = require("n4G");
const eQ = require("lt");
const e$ = require("Sg");
const eJ = require("./module-LKF.js");
class eZ {
  get acceptedImageFileTypes() {
    return eq.R;
  }
  get acceptedVideoFileTypes() {
    return eH.P;
  }
  get acceptedAudioFileTypes() {
    return eN.M;
  }
  get models() {
    if (this._models.length) {
      return this._models;
    }
    return [this.fallbackModel];
  }
  get isCurrentModelSupportOmniReference() {
    let e;
    const { model } = this._data;
    const { fields } = model != null ? model : {};
    const a =
      fields == null
        ? undefined
        : fields.find((e) => e.type === B.pH.InputMediaType);
    return (
      (e = a == null ? undefined : a.values.includes("unified_edit")) != null &&
      e
    );
  }
  get isCurrentModelSupportVideoEdit() {
    let e;
    const { model } = this._data;
    const { fields } = model != null ? model : {};
    const a =
      fields == null
        ? undefined
        : fields.find((e) => e.type === B.pH.InputMediaType);
    return (e = a == null ? undefined : a.values.includes("edit")) != null && e;
  }
  get isCurrentModelSupportMultiFrames() {
    let e;
    const { model } = this._data;
    const { fields } = model != null ? model : {};
    const a =
      fields == null
        ? undefined
        : fields.find((e) => e.type === B.pH.InputMediaType);
    return (
      (e = a == null ? undefined : a.values.includes("multi_frame")) != null &&
      e
    );
  }
  get isCurrentModelSupportFirstLastFrames() {
    let e;
    const { model } = this._data;
    const { fields } = model != null ? model : {};
    const a =
      fields == null
        ? undefined
        : fields.find((e) => e.type === B.pH.InputMediaType);
    return (
      (e = a == null ? undefined : a.values.includes("first_frame")) != null &&
      e
    );
  }
  get videoContinuationModel() {
    return W.zg({
      modelList: this.models,
      defaultModel: this.fallbackModel,
    });
  }
  get isVideoContinuationSupported() {
    return !!this.videoContinuationModel;
  }
  get isLensMovementRecipeOptionHidden() {
    let e;
    let t;
    const r =
      (t = this._modelDisabledOptions) == null ||
      (e = t[B.pH.LensRecipe]) == null
        ? undefined
        : e.fullyDisabled;
    return (
      (r == null
        ? undefined
        : r.find(
            (e) =>
              e.conflictOptionKey === B.pH.InputMediaType &&
              e.conflictValue &&
              e.conflictValue === "multi_frame",
          )) !== undefined
    );
  }
  get isDurationOptionHidden() {
    if (this._videoGeneratorManager.featureManager.data.isMultiFramesEngaged) {
      return true;
    }
    let e;
    let t;
    const r = H_(this._data.model);
    const a =
      (t = this._modelDisabledOptions) == null ||
      (e = t[r != null ? r : B.pH.Frames]) == null
        ? undefined
        : e.fullyDisabled;
    return (
      (a == null
        ? undefined
        : a.find(
            (e) =>
              e.conflictOptionKey === B.pH.InputMediaType &&
              e.conflictValue === "multi_frame",
          )) !== undefined
    );
  }
  get isDurationSliderOption() {
    return W8(this._data.model);
  }
  get lensMovementRecipeDisabled() {
    let e;
    let t;
    return !!((t = this._modelDisabledOptions) == null ||
    (e = t[B.pH.LensRecipe]) == null
      ? undefined
      : e.fullyDisabled);
  }
  get lensMovementRecipeTooltipProps() {
    let e;
    let t;
    const r =
      (e = this._modelDisabledOptions) == null ? undefined : e[B.pH.LensRecipe];
    if (r) {
      return {
        content: this.getDisabledTips((t = r.fullyDisabled) != null ? t : []),
        disabled: false,
      };
    }
  }
  get modelOptions() {
    return this.models.map((e) => {
      var { key, name, description, source, iconTag, coverUrl, iconUrl } = e;
      var u = this.getModelOptionDisabledConfig(e);
      var content = u.disabled
        ? u.reasonKind === "message"
          ? u.disabledReason
          : d.Ay.t(
              "model_hover_feature_conflict",
              {
                string0: u.disabledReason,
              },
              "已使用".concat(u.disabledReason, "，暂不支持此模型"),
            )
        : d.Ay.t("multiframe_model_disabled_default", {}, "暂不支持此模型");
      return {
        label: name,
        value: key,
        disabled: u.disabled,
        extra: {
          coverUrl,
          iconUrl,
          description,
          source,
          tag: iconTag,
          commercial: {
            sceneOptions: eg.I({
              scene: ef.Sk.VideoModelSwitch,
              videoDuration: 0,
              modelReqKey: key,
            }),
          },
          tooltipProps: u.disabled
            ? {
                content,
              }
            : undefined,
        },
      };
    });
  }
  get lastFrameDisabledReasons() {
    let e;
    let t;
    const r =
      (e = this._modelDisabledOptions) == null
        ? undefined
        : e[B.pH.InputMediaType];
    if (r && "disabledValues" in r) {
      if ((t = r.disabledValues) == null) {
        return undefined;
      }
      return t.get("end_frame");
    }
  }
  get lastFrameDisabled() {
    return !!this.lastFrameDisabledReasons;
  }
  get lastFrameDisabledTip() {
    const lastFrameDisabledReasons = this.lastFrameDisabledReasons;
    if (lastFrameDisabledReasons) {
      return this.getDisabledTips(lastFrameDisabledReasons);
    }
    return "";
  }
  get lastFrameTooltipProps() {
    return {
      content: this.lastFrameDisabled
        ? this.lastFrameDisabledTip
        : d.Ay.t(
            "web_new_video_upload_the_same_size_last_frame",
            {},
            "上传与首帧同比例的尾帧",
          ),
      disabled: this._data.hasLastFrameImage,
    };
  }
  get firstFrameTooltipProps() {
    return {
      content: this.lastFrameVisible
        ? d.Ay.t("web_ai_video_upload_first_frame", {}, "上传首帧")
        : d.Ay.t("web_new_video_upload_reference_image", {}, "上传参考图"),
    };
  }
  get lastFrameEnabled() {
    let e;
    const { model } = this._data;
    const { fields } = model != null ? model : {};
    const a =
      fields == null
        ? undefined
        : fields.find((e) => e.type === B.pH.InputMediaType);
    return (
      (e = a == null ? undefined : a.values.includes("end_frame")) != null && e
    );
  }
  get lastFrameVisible() {
    return this.models.some((e) => {
      var t;
      var { fields } = e;
      var a =
        fields == null
          ? undefined
          : fields.find((e) => e.type === B.pH.InputMediaType);
      return (
        (t = a == null ? undefined : a.values.includes("end_frame")) != null &&
        t
      );
    });
  }
  get draftModelHint() {
    let e;
    if ((e = this._data.model) == null ? undefined : e.isDraft) {
      return d.Ay.t(
        "sd25_draft_prompt_hint",
        {},
        "样片版将先生成480P视频，确认后可升级为高清正片。",
      );
    }
  }
  get placeholder() {
    const {
      data: { hasFirstFrameImage, hasLastFrameImage },
      featureManager,
    } = this._videoGeneratorManager;
    const {
      data: { isMultiFramesEngaged },
    } = featureManager;
    if (isMultiFramesEngaged) {
      return d.Ay.t("multiframe_placeholder", {}, "请添加智能多帧的镜头");
    }
    if (hasLastFrameImage) {
      return d.Ay.t(
        "web_new_video_input_text_frame",
        {},
        "首帧图和尾帧图，尽量都包含同样的主体，并用文字描述两张图之间如何过渡。例如：可爱的南极小企鹅，在冰上晃晃悠悠地走。",
      );
    }
    if (hasFirstFrameImage) {
      return d.Ay.t(
        "web_new_video_enter_prompt",
        {},
        "结合图片，描述你想生成的画面和动作。例如：海浪拍打着沙滩，粉色的月亮在天空缓缓升起。",
      );
    }
    return d.Ay.t(
      "web_home_tool_video_generator_placeholder_text",
      {},
      "输入文字，描述你想创作的画面内容、运动方式等。例如：一个3D形象的小男孩，在公园滑滑板。",
    );
  }
  get durationOptions() {
    let e;
    let t;
    const { model, fps } = this._data;
    if (!model || !fps) {
      return [];
    }
    const i = zh(model);
    const n = W8(model);
    if (!i.length) {
      return [];
    }
    const s = (e = H_(model)) != null ? e : B.pH.Frames;
    const o = (t = this._modelDisabledOptions) == null ? undefined : t[s];
    return i
      .map((e) => {
        var t;
        var disabledReason =
          o == null || (t = o.disabledValues) == null
            ? undefined
            : t.get(String(e));
        return {
          second: e / fps,
          disabledReason,
        };
      })
      .filter((e) => {
        var { second } = e;
        return n || second >= 3;
      })
      .map((e) => {
        var { second, disabledReason } = e;
        return {
          label: "".concat(second, "s"),
          value: second * j.K,
          icon: eO._(second),
          disabled: !!disabledReason,
          extra: {
            tooltipProps: disabledReason
              ? {
                  content: this.getDisabledTips(disabledReason),
                }
              : undefined,
          },
        };
      });
  }
  get aspectRatioOptions() {
    let e;
    const { model, aspectRatioAutoMatched } = this._data;
    if (!model) {
      return [];
    }
    const { fields } = model;
    const i = fields.find((e) => e.type === B.pH.VideoAspectRatio);
    if (!i) {
      return [];
    }
    const n =
      (e = this._modelDisabledOptions) == null
        ? undefined
        : e[B.pH.VideoAspectRatio];
    return et.$h(i.values).map((e) => {
      var t;
      var a =
        n == null || (t = n.disabledValues) == null ? undefined : t.get(e);
      return {
        label: e,
        value: e,
        disabled: !!a || aspectRatioAutoMatched,
        extra: {
          tooltipProps:
            a && !aspectRatioAutoMatched
              ? {
                  content: this.getDisabledTips(a),
                }
              : undefined,
        },
      };
    });
  }
  get resolutionOptions() {
    let e;
    const { model } = this._data;
    if (!model) {
      return [];
    }
    const { fields, key } = model;
    const i = fields.find((e) => e.type === B.pH.Resolution);
    if (!i || i.disabled) {
      return [];
    }
    const n =
      (e = this._modelDisabledOptions) == null ? undefined : e[B.pH.Resolution];
    return e$.BC(model, i.values).map((e) => {
      var r;
      var i;
      var s =
        n == null || (i = n.disabledValues) == null ? undefined : i.get(e);
      return {
        value: e,
        label:
          (r = e$.H5({
            model,
            resolution: e,
          })) != null
            ? r
            : e,
        disabled: !!s,
        extra: {
          commercialSceneOptions: eg.I({
            scene: ef.Sk.BasicVideoGenerateButton,
            modelReqKey: key,
            videoDuration: 0,
            resolution: e,
          }),
          tooltipProps: s
            ? {
                content: this.getDisabledTips(s),
              }
            : undefined,
        },
      };
    });
  }
  get batchNumberOptions() {
    return Array.from(
      {
        length: this.maxBatchNumber,
      },
      (e, t) => ({
        value: t + 1,
        label: `${t + 1}`,
      }),
    );
  }
  get maxBatchNumber() {
    let e;
    let t;
    let r;
    return Math.max(
      Math.floor(
        (e =
          (r = this._data.model) == null || (t = r.extra) == null
            ? undefined
            : t.maxBatchGenCount) != null
          ? e
          : 1,
      ),
      1,
    );
  }
  get batchNumberVisible() {
    return this.maxBatchNumber > 1;
  }
  get lensMovementRecipes() {
    const { model } = this._data;
    if (!model) {
      return [];
    }
    const { fields } = model;
    const r = fields.find((e) => e.type === B.pH.LensRecipe);
    if (!r || r.disabled) {
      return [];
    }
    return r.values;
  }
  get lensMovementRecipeOptions() {
    const e = [
      {
        value: "",
        label: d.Ay.t("cameramove_none", {}, "无"),
      },
    ];
    const t = this.lensMovementRecipes.map((e) => ({
      value: e.key,
      label: e.name,
    }));
    return [...e, ...t];
  }
  get currentLensMovementRecipe() {
    const { lensMovementRecipe } = this._data;
    if (lensMovementRecipe) {
      return this.lensMovementRecipes.find((t) => t.key === lensMovementRecipe);
    }
  }
  get lensMovementStrengthOptions() {
    let e;
    const { strengths } = (e = this.currentLensMovementRecipe) != null ? e : {};
    if (strengths) {
      return strengths.map((e) => ({
        value: e.key,
        label: e.name,
      }));
    }
    return [
      {
        value: "",
        label: d.Ay.t("cameramove_default", {}, "默认"),
      },
    ];
  }
  get submitButtonDisabled() {
    return !this._data.validationResult.ok;
  }
  get submitButtonTooltipProps() {
    return {
      content: this._data.validationResult.msg,
    };
  }
  get defaultLensMovementRecipe() {
    let e;
    let t;
    const { model } = this._data;
    if (!model) {
      return I_1.lensMovementRecipe;
    }
    const a = model.fields.find((e) => e.type === B.pH.LensRecipe);
    if (
      (e = a == null || (t = a.defaultValue) == null ? undefined : t.key) !=
      null
    ) {
      return e;
    }
    return I_1.lensMovementRecipe;
  }
  get defaultLensMovementStrength() {
    let e;
    let t;
    const { model } = this._data;
    if (!model) {
      return I_1.lensMovementStrength;
    }
    const a = model.fields.find((e) => e.type === B.pH.LensRecipe);
    if (
      (e =
        a == null || (t = a.defaultValue) == null
          ? undefined
          : t.defaultStrength) != null
    ) {
      return e;
    }
    return I_1.lensMovementStrength;
  }
  get defaultAspectRatio() {
    const { model } = this._data;
    if (!model) {
      return I_1.aspectRatio;
    }
    const t = model.fields.find((e) => e.type === B.pH.VideoAspectRatio);
    if (t) {
      return et.C(et.$h(t.values), undefined, t.defaultValue);
    }
  }
  get defaultResolution() {
    let e;
    let t;
    const { model } = this._data;
    if (!model) {
      return I_1.resolution;
    }
    const a = model.fields.find((e) => e.type === B.pH.Resolution);
    if (!a) {
      return I_1.resolution;
    }
    if (!model.isDraft) {
      if ((t = a.defaultValue) != null) {
        return t;
      }
      return I_1.resolution;
    }
    const i = e$.BC(model, a.values);
    if (a.defaultValue && i.includes(a.defaultValue)) {
      return a.defaultValue;
    }
    if ((e = i[0]) != null) {
      return e;
    }
    return I_1.resolution;
  }
  get defaultDurationMs() {
    const { model } = this._data;
    if (model) {
      return q_(model, this.defaultFps, I_1.durationMs);
    }
    return I_1.durationMs;
  }
  get defaultFps() {
    let e;
    const { model } = this._data;
    if (!model) {
      return I_1.fps;
    }
    const r = model.fields.find((e) => e.type === B.pH.Fps);
    if (
      (r == null ? undefined : r.values.length) &&
      (e = r.defaultValue) != null
    ) {
      return e;
    }
    return I_1.fps;
  }
  get _data() {
    return this._videoGeneratorManager.data;
  }
  setModels(e) {
    this._models = e;
  }
  setMobileAvailableModelKeys(e) {
    this.mobileAvailableModelKeys = e;
  }
  setFallbackModel(e) {
    this.fallbackModel = e;
  }
  setIsModelListLoading(e) {
    this.isModelListLoading = e;
  }
  setIsReferenceUploading(e) {
    this.isReferenceUploading = e;
  }
  setSubmitButtonLoading(e) {
    this.submitButtonLoading = e;
  }
  setModelDisabledOptions(e) {
    this._modelDisabledOptions = e;
  }
  getDisabledTips(e) {
    if (!e || e.length === 0) {
      return "";
    }
    if (
      !this._data.hasLastFrameImage &&
      e.some((e) => {
        var { conflictOptionKey, conflictValue } = e;
        return (
          conflictOptionKey === B.pH.InputMediaType &&
          conflictValue === "prompt"
        );
      })
    ) {
      return d.Ay.t(
        "cameramove_recipe_wo_image",
        {},
        "请上传首帧图,再使用该功能",
      );
    }
    const t = e.map((e) => {
      var t;
      var r;
      var a;
      var i;
      var { conflictOptionKey, conflictValue } = e;
      if (
        conflictOptionKey === B.pH.InputMediaType &&
        conflictValue === "first_frame"
      ) {
        return d.Ay.t("cameramove_first_frame", {}, "首帧图");
      }
      if (
        conflictOptionKey === B.pH.InputMediaType &&
        conflictValue === "end_frame"
      ) {
        return d.Ay.t("cameramove_last_frame", {}, "尾帧图");
      }
      if (
        conflictOptionKey === B.pH.InputMediaType &&
        conflictValue === "multi_frame"
      ) {
        return d.Ay.t("multiframe", {}, "智能多帧");
      }
      if (conflictOptionKey === B.pH.LensRecipe && conflictValue) {
        if (
          (t = this.lensMovementRecipeOptions.find(
            (e) => e.value === conflictValue,
          )) == null
        ) {
          return undefined;
        }
        return t.label;
      }
      if (conflictOptionKey === B.pH.Resolution && conflictValue) {
        if (
          (r = this.resolutionOptions.find((e) => e.value === conflictValue)) ==
          null
        ) {
          return undefined;
        }
        return r.label;
      }
      if (conflictOptionKey === B.pH.VideoAspectRatio && conflictValue) {
        if (
          (a = this.aspectRatioOptions.find(
            (e) => e.value === conflictValue,
          )) == null
        ) {
          return undefined;
        }
        return a.label;
      }
      if (
        (conflictOptionKey === B.pH.Frames ||
          conflictOptionKey === B.pH.FramesSlideBar) &&
        conflictValue
      ) {
        return `${Number(conflictValue) / ((i = this._data.fps) != null ? i : 0)}s`;
      }
      if (
        conflictOptionKey === B.pH.InputMediaType &&
        conflictValue === "long_video"
      ) {
        return d.Ay.t("seedance_25_long_video", {}, "超长视频");
      }
      if (
        conflictOptionKey === B.pH.InputMediaType &&
        conflictValue === "edit"
      ) {
        return d.Ay.t("seedance_25_edit", {}, "智能编辑");
      }
      return "";
    });
    return d.Ay.t(
      "cameramove_shouweizhen_disable",
      {
        string0: t.join("、"),
      },
      "已启用".concat(t.join("、"), "，无法同时生效"),
    );
  }
  getModelOptionDisabledConfig(e) {
    let t;
    const { featureManager } = this._videoGeneratorManager;
    const { fields } = e;
    const i =
      (t = fields.find((e) => e.type === B.pH.InputMediaType)) == null
        ? undefined
        : t.values;
    const { hasFirstFrameImage, hasLastFrameImage } = this._data;
    if (
      hasFirstFrameImage &&
      !(i == null ? undefined : i.includes("first_frame"))
    ) {
      return {
        disabled: true,
        reasonKind: "feature",
        disabledReason: d.Ay.t("web_new_video_first_frame", {}, "首帧图"),
      };
    }
    if (
      hasLastFrameImage &&
      !(i == null ? undefined : i.includes("end_frame"))
    ) {
      return {
        disabled: true,
        reasonKind: "feature",
        disabledReason: d.Ay.t("web_new_video_last_frame", {}, "尾帧图"),
      };
    }
    if (
      featureManager.data.isMultiFramesEngaged &&
      !(i == null ? undefined : i.includes("multi_frame"))
    ) {
      return {
        disabled: true,
        reasonKind: "feature",
        disabledReason: d.Ay.t("multiframe", {}, "智能多帧"),
      };
    }
    const o = fields.find((e) => e.type === B.pH.LongVideo);
    if (
      featureManager.data.isLongVideoEngaged &&
      (e.isDraft ||
        !(i == null ? undefined : i.includes("long_video")) ||
        !eK.T9(o))
    ) {
      return {
        disabled: true,
        reasonKind: "feature",
        disabledReason: d.Ay.t("seedance_25_long_video", {}, "超长视频"),
      };
    }
    if (
      featureManager.data.isVideoEditEngaged &&
      !(i == null ? undefined : i.includes("edit"))
    ) {
      return {
        disabled: true,
        reasonKind: "feature",
        disabledReason: d.Ay.t("seedance_25_edit", {}, "智能编辑"),
      };
    }
    const u = this._getMultiFramesDisabledState(fields);
    if (u) {
      return u;
    }
    const l = this._getOmniReferenceDisabledState(fields);
    return (
      l ||
      (!featureManager.data.isFirstLastFramesEngaged ||
      (i == null ? undefined : i.includes("first_frame")) ||
      (i == null ? undefined : i.includes("end_frame"))
        ? {
            disabled: false,
          }
        : {
            disabled: true,
            reasonKind: "feature",
            disabledReason: d.Ay.t(
              "video_feature_first_and_last_frames",
              {},
              "首尾帧",
            ),
          })
    );
  }
  _getMultiFramesDisabledState(e) {
    const { multiFramesManager } = this._videoGeneratorManager;
    const {
      data: {
        frameResources,
        hasLeadingSegment,
        hasTrailingSegment,
        hasVideoFrameResource,
        frames,
      },
    } = multiFramesManager;
    if (frameResources.length) {
      const o = e.find((e) => e.type === B.pH.MultiFrames);
      if (
        (o == null ? undefined : o.maxFrameCount) &&
        o.maxFrameCount < frameResources.length
      ) {
        return {
          disabled: true,
          reasonKind: "feature",
          disabledReason: d.Ay.t(
            "multiframe_model_disabled_cnt",
            {},
            "不支持的素材数量",
          ),
        };
      }
      if (
        hasLeadingSegment &&
        !(o == null ? undefined : o.leadingSegmentGenerationEnabled)
      ) {
        return {
          disabled: true,
          reasonKind: "feature",
          disabledReason: d.Ay.t(
            "multiframe_model_disabled_first",
            {},
            "首帧前提示词",
          ),
        };
      }
      if (
        hasTrailingSegment &&
        !(o == null ? undefined : o.trailingSegmentGenerationEnabled)
      ) {
        return {
          disabled: true,
          reasonKind: "feature",
          disabledReason: d.Ay.t(
            "multiframe_model_disabled_last",
            {},
            "尾帧后提示词",
          ),
        };
      }
      if (hasVideoFrameResource && !(o == null ? undefined : o.videoConfig)) {
        return {
          disabled: true,
          reasonKind: "feature",
          disabledReason: d.Ay.t(
            "multiframe_model_disabled_video",
            {},
            "视频素材",
          ),
        };
      }
      if (o == null ? undefined : o.frameTransitionDurationMsConfig) {
        const {
          frameTransitionDurationMsConfig: { min, max, step },
        } = o;
        if (
          !frames.every((e, t) => {
            var r = e.prompt.length > 0 || e.durationMs > 0;
            if ((t === 0 || t === frames.length - 1) && !r) {
              return true;
            }
            var a = e.durationMs >= min && e.durationMs <= max;
            var i = (e.durationMs - min) % step == 0;
            return a && i;
          })
        ) {
          return {
            disabled: true,
            reasonKind: "feature",
            disabledReason: d.Ay.t(
              "multiframe_model_disabled_time",
              {},
              "不支持的时长",
            ),
          };
        }
      }
    }
  }
  _getOmniReferenceDisabledState(e) {
    let t;
    const { featureManager, omniReferenceManager } =
      this._videoGeneratorManager;
    if (
      featureManager.data.isOmniReferenceEngaged ||
      featureManager.data.isVideoEditEngaged
    ) {
      const i =
        (t = e.find((e) => e.type === B.pH.InputMediaType)) == null
          ? undefined
          : t.values;
      const n = featureManager.data.isVideoEditEngaged
        ? "edit"
        : "unified_edit";
      if (!(i == null ? undefined : i.includes(n))) {
        return {
          disabled: true,
          reasonKind: "feature",
          disabledReason: featureManager.data.isVideoEditEngaged
            ? d.Ay.t("seedance_25_edit", {}, "智能编辑")
            : d.Ay.t("video_omni_ref", {}, "全能参考"),
        };
      }
      const s = e.find((e) => e.type === B.pH.UnifiedEdit);
      if (s) {
        const { materialLimits, materialCombinationRule } = s;
        const l = eW.T({
          materials: eU.G({
            resources: omniReferenceManager.data.references,
            subjects: eQ.I(omniReferenceManager.data.promptContents),
          }),
          limits: {
            materialCombinationRule,
            materialLimits,
          },
        });
        if (!l.ok) {
          return {
            disabled: true,
            reasonKind: "message",
            disabledReason: l.msg,
          };
        }
      }
    }
  }
  constructor(e) {
    this._videoGeneratorManager = e;
    this.fallbackModel = eJ.$;
    this.isModelListLoading = false;
    this._models = [];
    this.mobileAvailableModelKeys = [];
    this._modelDisabledOptions = undefined;
    this.isReferenceUploading = false;
    this.submitButtonLoading = false;
    G.l_(this);
  }
}
class eY extends u.jG {
  setModel(e) {
    return a
      ._(function* () {
        const { models } = this._videoGeneratorManager.metadata;
        const r = models.find((t) => t.key === e);
        if (r) {
          this._videoGeneratorManager.setModelKey(r.key);
          yield this._recalibrateModelParamsAfterSwitch();
          this._videoGeneratorManager.auditReferences();
          this._videoGeneratorManager.auditPromptSubjects();
        }
      })
      .call(this);
  }
  _recalibrateModelParamsAfterSwitch() {
    return a
      ._(function* () {
        let e;
        let t;
        const { model } = this._videoGeneratorManager.data;
        if (model) {
          const { featureManager, multiFramesManager } =
            this._videoGeneratorManager;
          const { migrateToFeature } = featureManager;
          const d = this.getAvailableFeature(
            model,
            featureManager.data.feature,
          );
          yield migrateToFeature(d, {
            preserveModel: true,
          });
          const { frames } = multiFramesManager.data;
          if (frames.some((e) => e.segmentVideo)) {
            multiFramesManager.setData({
              frames: frames.map((e) =>
                n._(i._({}, e), {
                  segmentVideo: undefined,
                  isSegmentLocked: false,
                }),
              ),
            });
          }
          const l = this._getAvailableFps(
            model,
            this._videoGeneratorManager.data.fps,
          );
          if (l !== undefined) {
            this._videoGeneratorManager.updateFps(l);
          }
          const c =
            (t = this._videoGeneratorManager.metadata.durationOptions[0]) ==
            null
              ? undefined
              : t.value;
          const m =
            (e = this._getAvailableDurationMs(
              model,
              this._videoGeneratorManager.data.fps,
              this._videoGeneratorManager.data.durationMs,
            )) != null
              ? e
              : c;
          if (m !== undefined) {
            this._videoGeneratorManager.setDurationMs(m);
          }
          const p =
            this._videoGeneratorManager.longVideoManager.normalizeTargetDurationMs(
              this._videoGeneratorManager.longVideoManager.data
                .targetDurationMs,
              model,
            );
          if (p !== undefined) {
            this._videoGeneratorManager.longVideoManager.setTargetDurationMs(p);
          }
          const h = this.getAvailableAspectRatio(
            model,
            this._videoGeneratorManager.data.aspectRatio,
          );
          this._videoGeneratorManager.setAspectRatio(h);
          const _ = this._getAvailableResolution(
            model,
            this._videoGeneratorManager.data.resolution,
          );
          this._videoGeneratorManager.syncResolutionWithModel(_);
          const { maxBatchNumber } = this._videoGeneratorManager.metadata;
          if (this._videoGeneratorManager.data.batchNumber > maxBatchNumber) {
            this._videoGeneratorManager.setBatchNumber(maxBatchNumber);
          }
          if (this._videoGeneratorManager.data.lensMovementRecipe) {
            const { lensMovementRecipe, lensMovementStrength } =
              this._getAvailableLensMovementRecipe(
                model,
                this._videoGeneratorManager.data.lensMovementRecipe,
                this._videoGeneratorManager.data.lensMovementStrength,
              );
            this._videoGeneratorManager.updateLensMovementRecipe(
              lensMovementRecipe,
            );
            this._videoGeneratorManager.updateLensMovementStrength(
              lensMovementStrength,
            );
          }
        }
      })
      .call(this);
  }
  _clearContinuationContextBeforeModelSwitch(e) {
    const { continuationManager, data } = this._videoGeneratorManager;
    if (continuationManager.data.enabled && data.modelKey !== e) {
      continuationManager.clearContinuationContext();
    }
  }
  constructor(e, t) {
    super();
    this._videoGeneratorManager = e;
    this._notificationService = t;
    this.switchModel = (e) => {
      var { reportManager } = this._videoGeneratorManager;
      this._clearContinuationContextBeforeModelSwitch(e);
      this.setModel(e);
      reportManager.reportSwitchModel();
    };
    this.switchToBestModelForFeature = (e) => {
      var {
        data: { modelKey },
      } = this._videoGeneratorManager;
      var r = this._getSupportedModelForFeature(e);
      if (r) {
        return (
          r.key === modelKey ||
          (this.setModel(r.key),
          this._notificationService.normal(
            d.Ay.t(
              "web_new_dre_auto_match_model_toast",
              {},
              "已为您匹配至最佳模型",
            ),
          ),
          true)
        );
      }
      if (e === "longVideo") {
        this._notificationService.warning(
          d.Ay.t(
            "sd25_draft_long_video_normal_model_unavailable",
            {},
            "暂无可用的普通模型支持超长视频",
          ),
        );
      }
      return false;
    };
    this.switchToSupportedModelForFeature = (e) => {
      var {
        data: { model },
      } = this._videoGeneratorManager;
      var r = this._getSupportedModelForFeature(e, model);
      return (
        (!!model && (r == null ? undefined : r.key) === model.key) ||
        this.switchToBestModelForFeature(e)
      );
    };
    this.hasSupportedModelForFeature = (e) =>
      !!this._getSupportedModelForFeature(
        e,
        this._videoGeneratorManager.data.model,
      );
    this._getAvailableFps = (e, t) => {
      var r;
      var { fields } = e;
      var i = fields.find((e) => e.type === B.pH.Fps);
      if (i == null ? undefined : i.values.length) {
        var { defaultValue, values } = i;
        if ((r = values.find((e) => e === t)) != null) {
          return r;
        }
        return defaultValue;
      }
    };
    this._getAvailableDurationMs = (e, t, r) => {
      var { durationOptions } = this._videoGeneratorManager.metadata;
      if (durationOptions.length) {
        var i = durationOptions.map((e) => e.value);
        var n = q_(e, t, i[0]);
        var s = i.find((e) => e === r);
        if (s != null) {
          return s;
        }
        return n;
      }
    };
    this._getAvailableResolution = (e, t) => {
      var r;
      var a;
      var { resolutionOptions } = this._videoGeneratorManager.metadata;
      if (resolutionOptions.length) {
        var n = resolutionOptions.map((e) => e.value);
        var s =
          (r = n.find(
            (e) => e === this._videoGeneratorManager.metadata.defaultResolution,
          )) != null
            ? r
            : resolutionOptions[0].value;
        if (
          this._videoGeneratorManager.data.shouldFollowModelDefaultResolution
        ) {
          return s;
        }
        if ((a = n.find((e) => e === t)) != null) {
          return a;
        }
        return s;
      }
    };
    this.getAvailableAspectRatio = (e, t) => {
      var { fields } = e;
      var { aspectRatioOptions } = this._videoGeneratorManager.metadata;
      var i = fields.find((e) => e.type === B.pH.VideoAspectRatio);
      if (i) {
        return et.C(
          aspectRatioOptions.map((e) => e.value),
          t,
          i.defaultValue,
        );
      }
    };
    this._getAvailableLensMovementRecipe = (e, t, r) => {
      var a;
      var i;
      var n;
      var s;
      var { fields } = e;
      var d = fields.find((e) => e.type === B.pH.LensRecipe);
      if (!(d == null ? undefined : d.values.length)) {
        return {
          lensMovementRecipe: undefined,
          lensMovementStrength: undefined,
        };
      }
      var { defaultValue, values } = d;
      var c = (a = values.find((e) => e.key === t)) != null ? a : defaultValue;
      if (!c) {
        return {
          lensMovementRecipe: undefined,
          lensMovementStrength: undefined,
        };
      }
      var lensMovementStrength =
        (i =
          (s = c.strengths) == null || (n = s.find((e) => e.key === r)) == null
            ? undefined
            : n.key) != null
          ? i
          : c.defaultStrength;
      return {
        lensMovementRecipe: c.key,
        lensMovementStrength,
      };
    };
    this._getSupportedModelForFeature = (e, t) => {
      var { models } = this._videoGeneratorManager.metadata;
      var a = new Set(eA.L[e]);
      if (t && this._isModelSupportedForFeature(t, a, e)) {
        return t;
      }
      return models.find((t) => this._isModelSupportedForFeature(t, a, e));
    };
    this._isModelSupportedForFeature = (e, t, r) => {
      var a;
      var i;
      return (
        new Set(
          (a =
            (i = e.fields.find((e) => e.type === B.pH.InputMediaType)) == null
              ? undefined
              : i.values) != null
            ? a
            : [],
        ).isSupersetOf(t) &&
        (r !== "longVideo" ||
          this._videoGeneratorManager.longVideoManager.isModelAvailable(e))
      );
    };
    this.getAvailableFeature = (e, t) => {
      var { fields } = e;
      var a = fields.find((e) => e.type === B.pH.InputMediaType);
      if (
        t === "omniReference" &&
        (a == null ? undefined : a.values.includes("unified_edit"))
      ) {
        return "omniReference";
      }
      if (
        t === "videoEdit" &&
        (a == null ? undefined : a.values.includes("edit"))
      ) {
        return "videoEdit";
      }
      if (
        t === "multiFrames" &&
        (a == null ? undefined : a.values.includes("multi_frame"))
      ) {
        return "multiFrames";
      }
      if (
        t === "longVideo" &&
        (a == null ? undefined : a.values.includes("long_video")) &&
        this._videoGeneratorManager.longVideoManager.isModelAvailable(e)
      ) {
        return "longVideo";
      }
      return "firstLastFrames";
    };
  }
}
eY = o.Cg(
  [
    o.Qj(1, m.Ot),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof VideoGeneratorManager === "undefined"
        ? Object
        : VideoGeneratorManager,
      m.Ot === undefined ? Object : m.Ot,
    ]),
  ],
  eY,
);
const eX = require("dm");
const e0 = require("./module-BAx.js");
const e1 = require("./module-WtM.js");
class e2 {
  get frameResources() {
    return this.frames.map((e) => e.resource).filter((e) => e.type !== "empty");
  }
  get hasLeadingSegment() {
    if (this.frames.length === 0) {
      return false;
    }
    const e = this.frames[0];
    return e.durationMs > 0 || e.prompt.length > 0;
  }
  get hasTrailingSegment() {
    if (this.frames.length === 0) {
      return false;
    }
    const e = this.frames[this.frames.length - 1];
    return e.durationMs > 0 || e.prompt.length > 0;
  }
  get hasVideoFrameResource() {
    return this.frameResources.some((e) => e.type === "video");
  }
  get hasFrameResources() {
    return !!this.frameResources.length;
  }
  setData(e) {
    const { frames } = e;
    this.frames = frames;
  }
  setFrames(e) {
    this.frames = e;
  }
  addFrames(e) {
    this.removeSegmentVideo(this.frames.length - 1);
    this.frames.push(...e);
  }
  setFrame(e, t) {
    this.frames[t] = e;
    this.removeSegmentVideo(t - 1);
    this.removeSegmentVideo(t);
  }
  setFrameTransitionPrompt(e, t) {
    this.frames[t].prompt = e;
    this.removeSegmentVideo(t);
  }
  setFrameTransitionDuration(e, t) {
    this.frames[t].durationMs = e;
    this.removeSegmentVideo(t);
  }
  applyDurationToFrameTransitions(e) {
    const {
      multiFramesManager: {
        metadata: {
          leadingSegmentGenerationEnabled,
          trailingSegmentGenerationEnabled,
        },
      },
    } = this._videoGeneratorManager;
    this.frames.forEach((a, i) => {
      if (
        !a.isSegmentLocked &&
        (leadingSegmentGenerationEnabled || i !== 0) &&
        (trailingSegmentGenerationEnabled || i !== this.frames.length - 1)
      ) {
        this.setFrameTransitionDuration(e, i);
      }
    });
  }
  setFrameTransitionSegmentLocked(e, t) {
    this.frames[t].isSegmentLocked = e;
  }
  removeFrame(e) {
    this.removeSegmentVideo(e - 1);
    this.frames.splice(e, 1);
  }
  removeSegmentVideo(e) {
    if (!(e < 0 || e >= this.frames.length)) {
      this.frames[e].segmentVideo = undefined;
      this.frames[e].isSegmentLocked = false;
    }
  }
  constructor(e) {
    this._videoGeneratorManager = e;
    this.frames = [];
    G.l_(this);
  }
}
const e3 = require("./module-sP_2.js");
class e4 {
  get _multiFramesConfig() {
    let e;
    const {
      data: { model },
    } = this._videoGeneratorManager;
    const { fields } = model != null ? model : {};
    if (
      (e =
        fields == null
          ? undefined
          : fields.find((e) => e.type === B.pH.MultiFrames)) != null
    ) {
      return e;
    }
    return e3.C;
  }
  get supportsImageFrames() {
    const { imageConfig } = this._multiFramesConfig;
    return !!imageConfig;
  }
  get supportsVideoFrames() {
    const { videoConfig } = this._multiFramesConfig;
    return !!videoConfig;
  }
  get maxVideoFrameDuration() {
    let e;
    const { videoConfig } = this._multiFramesConfig;
    return (
      ((e = videoConfig == null ? undefined : videoConfig.maxDurationMs) != null
        ? e
        : Infinity) / j.K
    );
  }
  get frameTransitionDurationRange() {
    const {
      frameTransitionDurationMsConfig: { min, max },
    } = this._multiFramesConfig;
    return [min / j.K, max / j.K];
  }
  get frameTransitionDurationStep() {
    const {
      frameTransitionDurationMsConfig: { step },
    } = this._multiFramesConfig;
    return step / j.K;
  }
  get frameTransitionDefaultDurationMs() {
    const {
      frameTransitionDurationMsConfig: { defaultValue },
    } = this._multiFramesConfig;
    return defaultValue;
  }
  get maxFrameCount() {
    const { maxFrameCount } = this._multiFramesConfig;
    return maxFrameCount;
  }
  get frameTransitionPromptMaxLength() {
    return eP.O({
      domesticTextLimit: 200,
    });
  }
  get leadingSegmentGenerationEnabled() {
    const { leadingSegmentGenerationEnabled } = this._multiFramesConfig;
    return leadingSegmentGenerationEnabled;
  }
  get trailingSegmentGenerationEnabled() {
    const { trailingSegmentGenerationEnabled } = this._multiFramesConfig;
    return trailingSegmentGenerationEnabled;
  }
  get minGenerationDurationMs() {
    const { minGenerationDurationMs } = this._multiFramesConfig;
    return minGenerationDurationMs;
  }
  get acceptedFileTypes() {
    const {
      metadata: { acceptedImageFileTypes, acceptedVideoFileTypes },
    } = this._videoGeneratorManager;
    return i._(
      {},
      this.supportsImageFrames ? acceptedImageFileTypes : null,
      this.supportsVideoFrames ? acceptedVideoFileTypes : null,
    );
  }
  get referenceItems() {
    const { multiFramesManager } = this._videoGeneratorManager;
    const {
      data: { frames, frameResources },
    } = multiFramesManager;
    const {
      leadingSegmentGenerationEnabled,
      trailingSegmentGenerationEnabled,
      maxFrameCount,
    } = this._multiFramesConfig;
    return frames
      .flatMap((frame, r) => [
        ...((e, r) => {
          var { resource } = e;
          if (resource.type !== "empty") {
            return [
              {
                type: "frame",
                id: resource.id,
                frame: n._(i._({}, e), {
                  resource,
                }),
                index: r,
                previousFrame: frames.at(r - 1),
              },
            ];
          }
          if (r > 0) {
            return [
              {
                type: "upload",
                id: resource.id,
                index: r,
              },
            ];
          }
          return [];
        })(frame, r),
        ...((r || (leadingSegmentGenerationEnabled && frames.length !== 1)) &&
        (!(r > 1) ||
          r !== frames.length - 1 ||
          trailingSegmentGenerationEnabled)
          ? [
              {
                type: "transition",
                id: "transition-".concat(frame.resource.id),
                frame,
                index: r,
                readOnly:
                  r === 1 &&
                  r === frames.length - 1 &&
                  !trailingSegmentGenerationEnabled,
              },
            ]
          : []),
      ])
      .concat(
        frameResources.length < maxFrameCount
          ? [
              {
                type: "upload",
                id: "upload",
                index: frames.length,
                lastFrame: frames.at(-1),
              },
            ]
          : [],
      );
  }
  get framesSortable() {
    const { multiFramesManager } = this._videoGeneratorManager;
    const {
      data: { frames },
    } = multiFramesManager;
    return frames.some((e) => !!e.segmentVideo);
  }
  dismissMultiFramesBadge() {
    this.isMultiFramesBadgeDismissed = true;
  }
  presentSegmentLockTooltip() {
    this.segmentLockTooltipVisible = true;
  }
  dismissSegmentLockTooltip() {
    this.segmentLockTooltipVisible = false;
  }
  constructor(e) {
    this._videoGeneratorManager = e;
    this.isMultiFramesBadgeDismissed =
      eb.b.getItem(e0.X) === JSON.stringify(true);
    this.segmentLockTooltipVisible = false;
    G.l_(this);
  }
}
class e5 extends u.jG {
  get metadata() {
    return this._metadataStore;
  }
  get data() {
    return this._dataStore;
  }
  _resetFrames() {
    this._dataStore.setFrames([
      {
        resource: this._containerService.createInstance(J.N),
        prompt: "",
        durationMs: 0,
      },
    ]);
  }
  _registerFrameRemovalReport() {
    const { reportManager } = this._videoGeneratorManager;
    const { deleteReferenceParams } = reportManager;
    const { frames } = this._dataStore;
    this._register({
      dispose: G.mJ(
        () => frames.map((e) => e.resource.uri),
        (e, r) => {
          new Set(r).difference(new Set(e)).forEach(deleteReferenceParams);
        },
      ),
    });
  }
  _validateReferenceFrameResources(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const { validateReferenceResources } = this._videoGeneratorManager;
    const { maxVideoFrameDuration } = this._metadataStore;
    return validateReferenceResources(
      e,
      i._(
        {
          videoOptions: n._(i._({}, b.Q), {
            maxDuration: maxVideoFrameDuration,
          }),
        },
        t,
      ),
    );
  }
  constructor(e, t, r) {
    var s;
    super();
    s = this;
    this._videoGeneratorManager = e;
    this._containerService = t;
    this._notificationService = r;
    this._metadataStore = new e4(this._videoGeneratorManager);
    this._dataStore = new e2(this._videoGeneratorManager);
    this.setData = (e) => {
      this._dataStore.setData(e);
      this._videoGeneratorManager.auditReferences();
      if (e.frames.some((e) => e.segmentVideo)) {
        this.presentSegmentLockTooltip();
      }
    };
    this.addReferenceResources = (e, t) =>
      a._(function* () {
        if (!e.length) {
          return l.nj();
        }
        let r;
        let a;
        const {
          supportsImageFrames,
          supportsVideoFrames,
          maxFrameCount,
          trailingSegmentGenerationEnabled,
          frameTransitionDefaultDurationMs,
        } = s._metadataStore;
        const { frames, frameResources, hasFrameResources } = s._dataStore;
        const _ = e.filter(
          (e) =>
            (supportsImageFrames && e instanceof eC.Vl) ||
            (supportsVideoFrames && e instanceof $.p),
        );
        if (!_.length) {
          const v = l.xz(
            -1,
            d.Ay.t("upload_material_error", {}, "素材上传失败，请重试"),
          );
          s._notificationService.warning(v.msg);
          return v;
        }
        if (frameResources.length + _.length > maxFrameCount) {
          const g = l.xz(
            -1,
            d.Ay.t(
              "multiframe_num_new",
              {
                string: maxFrameCount,
              },
              "最多支持上传{string}个",
            ),
          );
          s._notificationService.warning(g.msg);
          return g;
        }
        if (
          trailingSegmentGenerationEnabled &&
          ((r = frames.at(-1)) == null ? undefined : r.isSegmentLocked)
        ) {
          const f = l.xz(
            -1,
            d.Ay.t(
              "multiframe_lock_add_disabled",
              {},
              "已锁定的片段无法添加素材",
            ),
          );
          s._notificationService.warning(f.msg);
          return f;
        }
        const M = yield s._validateReferenceFrameResources(_, {
          enforceAspectRatioConsistency: hasFrameResources || _.length > 1,
          ignoreExistingAspectRatio: !hasFrameResources,
        });
        if (M.ok) {
          if (_.length && _.length < e.length) {
            s._notificationService.warning(
              d.Ay.t("multiframe_video_drop", {}, "已为你保留支持的素材内容"),
            );
          }
          if (
            !(
              !hasFrameResources ||
              (trailingSegmentGenerationEnabled &&
                ((a = frames.at(-1)) == null ? undefined : a.durationMs))
            )
          ) {
            s.setFrameTransitionDuration(
              frameTransitionDefaultDurationMs,
              frames.length - 1,
            );
          }
          s._dataStore.addFrames(
            _.map((resource, t) => ({
              resource,
              durationMs:
                t === _.length - 1 ? 0 : frameTransitionDefaultDurationMs,
              prompt: "",
            })),
          );
          if (!(t == null ? undefined : t.skipAudit)) {
            s._videoGeneratorManager.auditReferences();
          }
          return l.nj();
        }
        s._notificationService.warning(M.msg);
        return M;
      })();
    this.replaceReferenceResource = (e, t, r) =>
      a._(function* () {
        const { frames, frameResources } = s._dataStore;
        if (!e || e >= frames.length) {
          return s.addReferenceResources([t], r);
        }
        const { supportsImageFrames, supportsVideoFrames } = s._metadataStore;
        if (
          !(supportsImageFrames && t instanceof eC.Vl) &&
          !(supportsVideoFrames && t instanceof $.p)
        ) {
          const m = l.xz(
            -1,
            d.Ay.t("upload_material_error", {}, "素材上传失败，请重试"),
          );
          s._notificationService.warning(m.msg);
          return m;
        }
        if (frames[e - 1].isSegmentLocked || frames[e].isSegmentLocked) {
          const p = l.xz(
            -1,
            d.Ay.t(
              "multiframe_lock_add_disabled",
              {},
              "已锁定的片段无法添加素材",
            ),
          );
          s._notificationService.warning(p.msg);
          return p;
        }
        const h = yield s._validateReferenceFrameResources([t], {
          enforceAspectRatioConsistency: frameResources.length > 1,
        });
        if (h.ok) {
          s._dataStore.setFrame(
            n._(i._({}, frames[e]), {
              resource: t,
            }),
            e,
          );
          if (!(r == null ? undefined : r.skipAudit)) {
            s._videoGeneratorManager.auditReferences();
          }
          return l.nj();
        }
        s._notificationService.warning(h.msg);
        return h;
      })();
    this.removeReferenceResource = (e) => {
      var { trailingSegmentGenerationEnabled } = this._metadataStore;
      var { frames } = this._dataStore;
      var a = frames.findIndex((t) => t.resource.id === e);
      if (a !== -1) {
        if (!(trailingSegmentGenerationEnabled || a !== frames.length - 1)) {
          this.setFrameTransitionPrompt("", a - 1);
          this.setFrameTransitionDuration(0, a - 1);
        }
        this._dataStore.removeFrame(a);
        this._videoGeneratorManager.auditReferences();
      }
    };
    this.moveReferenceResource = (e, t) => {
      var { reportManager } = this._videoGeneratorManager;
      var { reportDragImgOrder } = reportManager;
      var { frames } = this._dataStore;
      var o = frames.map((e) => e.resource);
      o.splice(t, 0, ...o.splice(e, 1));
      this._dataStore.setFrames(
        frames.map((e, t) =>
          n._(i._({}, e), {
            resource: o[t],
          }),
        ),
      );
      reportDragImgOrder();
    };
    this.changeFrameTransitionPrompt = (e, t) => {
      this.setFrameTransitionPrompt(e, t);
    };
    this.setFrameTransitionPrompt = (e, t) => {
      this._dataStore.setFrameTransitionPrompt(e, t);
    };
    this.changeFrameTransitionDuration = (e, t) => {
      var { reportManager } = this._videoGeneratorManager;
      var { reportSwitchMultiFramesDuration } = reportManager;
      this.setFrameTransitionDuration(e, t);
      reportSwitchMultiFramesDuration();
    };
    this.setFrameTransitionDuration = (e, t) => {
      this._dataStore.setFrameTransitionDuration(e, t);
    };
    this.applyDurationToFrameTransitions = (e) => {
      this._dataStore.applyDurationToFrameTransitions(e);
      this._notificationService.success(
        d.Ay.t("multiframe_time_applyall_toast", {}, "已将运镜时长应用至全部"),
      );
    };
    this.lockFrameTransitionSegment = (e) => {
      this._dataStore.setFrameTransitionSegmentLocked(true, e);
      this._notificationService.success(
        d.Ay.t("multiframe_locked", {}, "已锁定"),
      );
    };
    this.unlockFrameTransitionSegment = (e) => {
      this._dataStore.setFrameTransitionSegmentLocked(false, e);
      this._notificationService.success(
        d.Ay.t("multiframe_unlocked", {}, "已解锁"),
      );
    };
    this.importFramesFromLocal = (e) =>
      a._(function* () {
        if (e.length !== 0) {
          const { importResourcesFromLocal, featureManager } =
            s._videoGeneratorManager;
          const { migrateToFeature } = featureManager;
          const { acceptedFileTypes } = s._metadataStore;
          yield migrateToFeature("multiFrames");
          yield importResourcesFromLocal(
            e,
            (e) =>
              s.addReferenceResources(
                e.filter((e) => e instanceof eC.Vl || e instanceof $.p),
              ),
            {
              acceptedFileTypes,
            },
          );
        }
      })();
    this.dropFrameFromLocal = (e, t) =>
      a._(function* () {
        const { importResourcesFromLocal } = s._videoGeneratorManager;
        const { acceptedFileTypes } = s._metadataStore;
        yield importResourcesFromLocal(
          [e],
          (e) => {
            var [r] = e;
            return a._(function* () {
              if (r instanceof eC.Vl || r instanceof $.p) {
                return s.replaceReferenceResource(t, r);
              }
              return l.nj();
            })();
          },
          {
            acceptedFileTypes,
          },
        );
      })();
    this.dismissMultiFramesBadge = () => {
      if (!this._metadataStore.isMultiFramesBadgeDismissed) {
        this._metadataStore.dismissMultiFramesBadge();
        eb.b.setItem(e0.X, JSON.stringify(true));
      }
    };
    this.presentSegmentLockTooltip = () =>
      a._(function* () {
        const { segmentLockTooltipVisible } = s._metadataStore;
        if (
          !(
            segmentLockTooltipVisible ||
            eb.b.getItem(e1.A) === JSON.stringify(true)
          )
        ) {
          yield eX.y(350);
          s._metadataStore.presentSegmentLockTooltip();
          yield eX.y(3000);
          s.dismissSegmentLockTooltip();
        }
      })();
    this.dismissSegmentLockTooltip = () => {
      var { segmentLockTooltipVisible } = this._metadataStore;
      if (
        segmentLockTooltipVisible &&
        eb.b.getItem(e1.A) !== JSON.stringify(true)
      ) {
        this._metadataStore.dismissSegmentLockTooltip();
        eb.b.setItem(e1.A, JSON.stringify(true));
      }
    };
    this.resetFrames = () => {
      this._resetFrames();
      this._videoGeneratorManager.auditReferences();
    };
    this._resetFrames();
    this._registerFrameRemovalReport();
  }
}
e5 = o.Cg(
  [
    o.Qj(1, p._),
    o.Qj(2, m.Ot),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof VideoGeneratorManager === "undefined"
        ? Object
        : VideoGeneratorManager,
      p._ === undefined ? Object : p._,
      m.Ot === undefined ? Object : m.Ot,
    ]),
  ],
  e5,
);
const e9 = require("Rb");
const e6 = require("uk8");
class e8 extends u.jG {
  get mutexRules() {
    if (
      !((e = this._videoGeneratorManager.data) == null ? undefined : e.model)
    ) {
      return [];
    }
    var e;
    const {
      data: { model },
    } = this._videoGeneratorManager;
    if (model.mutexList) {
      return e6.Y(model.mutexList);
    }
    return [];
  }
  get modelFormOptions() {
    let e;
    let t;
    let r;
    let a;
    let i;
    let n;
    let s;
    let o;
    let d;
    const {
      data: { model },
    } = this._videoGeneratorManager;
    const l = (e = H_(model)) != null ? e : B.pH.Frames;
    return {
      [B.pH.InputMediaType]:
        (t =
          model == null ||
          (n = model.fields.find((e) => e.type === B.pH.InputMediaType)) == null
            ? undefined
            : n.values) != null
          ? t
          : [],
      [B.pH.VideoAspectRatio]:
        (r =
          model == null ||
          (s = model.fields.find((e) => e.type === B.pH.VideoAspectRatio)) ==
            null
            ? undefined
            : s.values) != null
          ? r
          : [],
      [B.pH.Resolution]:
        (a =
          model == null ||
          (o = model.fields.find((e) => e.type === B.pH.Resolution)) == null
            ? undefined
            : o.values) != null
          ? a
          : [],
      [l]: zh(model).map((e) => e.toString()),
      [B.pH.LensRecipe]:
        (i =
          model == null ||
          (d = model.fields.find((e) => e.type === B.pH.LensRecipe)) == null
            ? undefined
            : d.values.map((e) => e.key)) != null
          ? i
          : [],
    };
  }
  _initialize() {
    this._dmlFormMutexManager = new e9.DMLFormMutexManager(this.mutexRules);
    this._setupDataChangeListener();
  }
  _setupDataChangeListener() {
    this._register({
      dispose: G.mJ(
        () => ({
          modelKey: this._videoGeneratorManager.data.modelKey,
          fps: this._videoGeneratorManager.data.fps,
          aspectRatio: this._videoGeneratorManager.data.aspectRatio,
          resolution: this._videoGeneratorManager.data.resolution,
          durationMs: this._videoGeneratorManager.data.durationMs,
          firstFrameImage: this._videoGeneratorManager.data.firstFrameImage,
          lastFrameImage: this._videoGeneratorManager.data.lastFrameImage,
          lensMovementRecipe:
            this._videoGeneratorManager.data.lensMovementRecipe,
          model: this._videoGeneratorManager.data.model,
          feature: this._videoGeneratorManager.featureManager.data.feature,
        }),
        this._handleDataChange,
        {
          fireImmediately: false,
        },
      ),
    });
  }
  _fixDefaultValues(e, t) {
    let r;
    let a;
    const i =
      (r = H_(this._videoGeneratorManager.data.model)) != null
        ? r
        : B.pH.Frames;
    if (!e.durationMs && !((a = t[i]) == null ? undefined : a.fullyDisabled)) {
      const n = this._videoGeneratorManager.metadata.durationOptions[0].value;
      if (n) {
        this._videoGeneratorManager.setDurationMs(n);
      }
    }
  }
  _createCorrectionStrategy() {
    return new e9.DMLCorrectionStrategy({
      priority: [
        B.pH.InputMediaType,
        B.pH.VideoAspectRatio,
        B.pH.Resolution,
        B.pH.FramesSlideBar,
        B.pH.Frames,
        B.pH.LensRecipe,
      ],
    });
  }
  _applyDataCorrection(e) {
    this._videoGeneratorManager.setData(
      i._({}, this._videoGeneratorManager.data, e),
      {
        preserveResolutionSource: true,
      },
    );
  }
  _convertVideoDataToFormParams(e) {
    let t;
    let r;
    const a = this._calculateInputMediaType(e);
    const stringValue = this._calculateFrames(e);
    const n =
      (t = H_(this._videoGeneratorManager.data.model)) != null
        ? t
        : B.pH.Frames;
    return {
      [B.pH.InputMediaType]: a,
      [B.pH.VideoAspectRatio]: new e9.DMLFormParam({
        stringValue: e.aspectRatio,
      }),
      [B.pH.Resolution]: new e9.DMLFormParam({
        stringValue: e.resolution,
      }),
      [n]: new e9.DMLFormParam({
        stringValue,
      }),
      [B.pH.LensRecipe]: new e9.DMLFormParam({
        stringValue: e.lensMovementRecipe,
      }),
      [B.pH.Fps]: new e9.DMLFormParam({
        stringValue: (r = e.fps) == null ? undefined : r.toString(),
      }),
    };
  }
  _calculateInputMediaType(e) {
    let arrayValue = ["prompt"];
    const r = !!e.firstFrameImage;
    const a = !!e.lastFrameImage;
    if (r || a) {
      arrayValue = [];
      if (r) {
        arrayValue.push("first_frame");
      }
      if (a) {
        arrayValue.push("end_frame");
      }
    }
    if (e.feature === "multiFrames") {
      arrayValue = ["multi_frame"];
    }
    if (e.feature === "omniReference") {
      arrayValue = ["unified_edit_input"];
    }
    if (e.feature === "videoEdit") {
      arrayValue = ["edit"];
    }
    return new e9.DMLFormParam({
      arrayValue,
    });
  }
  _calculateFrames(e) {
    if (e.durationMs && e.fps) {
      return ((e.durationMs / j.K) * e.fps).toString();
    }
  }
  _convertFormParamsToVideoData(e) {
    let t;
    let r;
    let a;
    let n;
    let s;
    let o;
    let d;
    let u;
    const l =
      (t = (r = e[B.pH.FramesSlideBar]) == null ? undefined : r.stringValue) !=
      null
        ? t
        : (a = e[B.pH.Frames]) == null
          ? undefined
          : a.stringValue;
    const c =
      Number((n = e[B.pH.Fps]) == null ? undefined : n.stringValue) || 0;
    const m = l && c ? (Number(l) / c) * j.K : undefined;
    return i._(
      {
        aspectRatio:
          (s = e[B.pH.VideoAspectRatio]) == null ? undefined : s.stringValue,
        durationMs: m,
        lensMovementRecipe:
          (o = e[B.pH.LensRecipe]) == null ? undefined : o.stringValue,
        resolution:
          (d = e[B.pH.Resolution]) == null ? undefined : d.stringValue,
      },
      ((u = e[B.pH.LensRecipe]) == null ? undefined : u.stringValue)
        ? {}
        : {
            lensMovementStrength: undefined,
          },
    );
  }
  _applyDisabledState(e) {
    this._videoGeneratorManager.setModelDisabledOptions(e);
  }
  constructor(e, t) {
    super();
    this._videoGeneratorManager = e;
    this._containerService = t;
    this._dmlFormMutexManager = null;
    this._handleDataChange = (e) => {
      if (this._dmlFormMutexManager && e) {
        var t = this._convertVideoDataToFormParams(e);
        if (
          !this._dmlFormMutexManager.validateFormParams(
            new Map(Object.entries(t)),
            this.mutexRules,
          ).isValid
        ) {
          var r = this._createCorrectionStrategy();
          var a = this._dmlFormMutexManager.correctFormParams(
            new Map(Object.entries(t)),
            new Map(Object.entries(this.modelFormOptions)),
            r,
          );
          var i = this._convertFormParamsToVideoData(Object.fromEntries(a));
          this._applyDataCorrection(i);
          return;
        }
        var n = this._dmlFormMutexManager.calculateDisabledState(
          new Map(Object.entries(t)),
        );
        this._applyDisabledState(Object.fromEntries(n));
        this._fixDefaultValues(e, Object.fromEntries(n));
      }
    };
    this._initialize();
  }
}
e8 = o.Cg(
  [
    o.Qj(1, p._),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof VideoGeneratorManager === "undefined"
        ? Object
        : VideoGeneratorManager,
      p._ === undefined ? Object : p._,
    ]),
  ],
  e8,
);
const e7 = require("rp");
const te = require("LBS");
const tt = require("MvH");
class tr {
  get hasReferences() {
    return !!this.references.length;
  }
  get videoEditSourceReference() {
    return this.references.find(
      (e) => e.id === this.videoEditSourceReferenceId,
    );
  }
  get videoEditReferenceResources() {
    return this.references.filter(
      (e) => e.id !== this.videoEditSourceReferenceId,
    );
  }
  get validationResult() {
    return T.Z({
      materials: eU.G({
        resources: this.references,
        subjects: eQ.I(this.promptContents),
      }),
      limits:
        this._videoGeneratorManager.omniReferenceManager.metadata
          .referenceValidationLimits,
    });
  }
  get editorDocument() {
    const { omniReferenceManager } = this._videoGeneratorManager;
    const { promptEditorManager } = omniReferenceManager;
    const { transformPromptContentsToEditorDocument } = promptEditorManager;
    return transformPromptContentsToEditorDocument(this.promptContents);
  }
  setData(e) {
    let t;
    this.references = e.references;
    this.promptContents = e.promptContents;
    this.videoEditSourceReferenceId = e.videoEditSourceReferenceId;
    this.videoEditFrameTimestampMsByReferenceId =
      (t = e.videoEditFrameTimestampMsByReferenceId) != null ? t : {};
  }
  addResources(e) {
    this.references = [...this.references, ...e];
  }
  setResource(e, t) {
    const r = [...this.references];
    r[t] = e;
    this.references = r;
  }
  setVideoEditSourceResource(e) {
    const t = this.videoEditSourceReferenceId !== e.id;
    const r = this.references.filter(
      (t) => t.id !== this.videoEditSourceReferenceId && t.id !== e.id,
    );
    this.references = [e, ...r];
    this.videoEditSourceReferenceId = e.id;
    if (t) {
      this.videoEditFrameTimestampMsByReferenceId = {};
    }
  }
  setVideoEditSourceReferenceId(e) {
    this.videoEditSourceReferenceId = e;
  }
  clearVideoEditContext() {
    this.videoEditSourceReferenceId = undefined;
    this.videoEditFrameTimestampMsByReferenceId = {};
  }
  removeReference(e) {
    this.references = this.references.filter((t) => t.id !== e);
    if (this.videoEditSourceReferenceId === e) {
      this.videoEditSourceReferenceId = undefined;
      this.videoEditFrameTimestampMsByReferenceId = {};
      return;
    }
    const videoEditFrameTimestampMsByReferenceId =
      this.videoEditFrameTimestampMsByReferenceId;
    const { [e]: r } = videoEditFrameTimestampMsByReferenceId;
    const a = s._(videoEditFrameTimestampMsByReferenceId, [tt._(e)]);
    this.videoEditFrameTimestampMsByReferenceId = a;
  }
  removeReferences(e) {
    const t = new Set(e);
    this.references = this.references.filter((e) => !t.has(e.id));
    if (
      this.videoEditSourceReferenceId &&
      t.has(this.videoEditSourceReferenceId)
    ) {
      this.videoEditSourceReferenceId = undefined;
      this.videoEditFrameTimestampMsByReferenceId = {};
      return;
    }
    this.videoEditFrameTimestampMsByReferenceId = Object.fromEntries(
      Object.entries(this.videoEditFrameTimestampMsByReferenceId).filter(
        (e) => {
          var [r] = e;
          return !t.has(r);
        },
      ),
    );
  }
  moveReference(e, t) {
    if (e !== t) {
      const r = [...this.references];
      const [a] = r.splice(e, 1);
      r.splice(t, 0, a);
      this.references = r;
    }
  }
  setPromptContents(e) {
    this.promptContents = e;
  }
  setReferencePanelVisible(e) {
    this.referencePanelVisible = e;
  }
  setReferencePanelActiveTab(e) {
    this.referencePanelActiveTab = e;
  }
  resetData() {
    this.references = [];
    this.promptContents = [];
    this.videoEditSourceReferenceId = undefined;
    this.videoEditFrameTimestampMsByReferenceId = {};
    this.referencePanelVisible = false;
    this.referencePanelActiveTab = "all";
  }
  constructor(e) {
    this._videoGeneratorManager = e;
    this.references = [];
    this.promptContents = [];
    this.videoEditSourceReferenceId = undefined;
    this.videoEditFrameTimestampMsByReferenceId = {};
    this.referencePanelVisible = false;
    this.referencePanelActiveTab = "all";
    G.l_(this);
  }
}
const ta = require("KiZ");
const ti = require("UgM");
const tn = require("Oqv");
class ts {
  get placeholderKey() {
    let e;
    const { omniReferenceManager } = this._videoGeneratorManager;
    const {
      data: { hasReferences },
    } = omniReferenceManager;
    if (hasReferences) {
      return "video_prompt_omnireference_withref";
    }
    if (
      ((e = this.omniReferenceResourceLimit) == null
        ? undefined
        : e.maxTotalCount) === 50
    ) {
      return "video_no_ref_hint2";
    }
    return "video_no_ref_hint";
  }
  get referenceIdToLabel() {
    const { data } = this._videoGeneratorManager.omniReferenceManager;
    const { references, videoEditFrameTimestampMsByReferenceId } = data;
    const a = te.v(references);
    if (this._videoGeneratorManager.featureManager.data.isVideoEditEngaged) {
      Object.assign(
        a,
        te.v(
          data.videoEditReferenceResources.filter(
            (e) =>
              typeof videoEditFrameTimestampMsByReferenceId[e.id] !== "number",
          ),
        ),
      );
      Object.entries(videoEditFrameTimestampMsByReferenceId).forEach((e) => {
        var [t, r] = e;
        if (t in a) {
          a[t] = ti.Dl(r);
        }
      });
    }
    return a;
  }
  get referenceResourceOptions() {
    const { data } = this._videoGeneratorManager.omniReferenceManager;
    return (
      this._videoGeneratorManager.featureManager.data.isVideoEditEngaged
        ? data.videoEditReferenceResources
        : data.references
    ).map((e) => ({
      value: e.id,
      label: this.referenceIdToLabel[e.id],
      extra: {
        resource: e,
      },
    }));
  }
  get acceptedFileTypes() {
    let e;
    let t;
    if (
      (e =
        (t = this.omniReferenceField) == null
          ? undefined
          : t.acceptedFileTypes) != null
    ) {
      return e;
    }
    return {};
  }
  get acceptedResourceTypes() {
    let e;
    let t;
    return Object.keys(
      (e =
        (t = this.omniReferenceField) == null ? undefined : t.materialLimits) !=
        null
        ? e
        : {},
    );
  }
  get acceptedFileTypesByGroup() {
    let e;
    let t;
    return Object.fromEntries(
      Object.entries(
        (e =
          (t = this.omniReferenceField) == null
            ? undefined
            : t.materialLimits) != null
          ? e
          : {},
      ).map((e) => {
        var [t, r] = e;
        return [t, r.acceptedFileTypes];
      }),
    );
  }
  get omniReferenceField() {
    let e;
    if ((e = this._videoGeneratorManager.data.model) == null) {
      return undefined;
    }
    return e.fields.find((e) => e.type === B.pH.UnifiedEdit);
  }
  get referenceValidationLimits() {
    if (!this.omniReferenceField) {
      return {};
    }
    const {
      omniReferenceMaterialCombinationRule,
      omniReferenceMaterialLimits,
      videoEditSourceMaterialLimits,
    } = this;
    const { videoEditSourceReference } =
      this._videoGeneratorManager.omniReferenceManager.data;
    return {
      materialCombinationRule: omniReferenceMaterialCombinationRule,
      materialLimits: videoEditSourceReference
        ? (e) => {
            if (e.id === videoEditSourceReference.id) {
              return videoEditSourceMaterialLimits;
            }
            return omniReferenceMaterialLimits;
          }
        : omniReferenceMaterialLimits,
    };
  }
  get omniReferenceMaterialCombinationRule() {
    let e;
    if ((e = this.omniReferenceField) == null) {
      return undefined;
    }
    return e.materialCombinationRule;
  }
  get omniReferenceMaterialLimits() {
    let e;
    let t;
    if (
      (e =
        (t = this.omniReferenceField) == null ? undefined : t.materialLimits) !=
      null
    ) {
      return e;
    }
    return {};
  }
  get videoEditSourceMaterialLimits() {
    return {
      video: this.videoEditSourceVideoLimit,
    };
  }
  get omniReferenceResourceLimit() {
    if (this.omniReferenceField) {
      const { materialCombinationRule } = this.omniReferenceField;
      return {
        maxTotalCount: ta.e(materialCombinationRule),
        maxTotalAudioDuration: ta.x(materialCombinationRule, "audio"),
        maxTotalVideoDuration: ta.x(materialCombinationRule, "video"),
      };
    }
  }
  get omniReferenceImageLimit() {
    let e;
    if ((e = this.omniReferenceField) == null) {
      return undefined;
    }
    return e.materialLimits.image;
  }
  get omniReferenceAudioLimit() {
    let e;
    if ((e = this.omniReferenceField) == null) {
      return undefined;
    }
    return e.materialLimits.audio;
  }
  get omniReferenceVideoLimit() {
    let e;
    if ((e = this.omniReferenceField) == null) {
      return undefined;
    }
    return e.materialLimits.video;
  }
  get videoEditSourceVideoLimit() {
    let e;
    let t;
    let r;
    let a;
    const {
      data: { model },
    } = this._videoGeneratorManager;
    const omniReferenceVideoLimit = this.omniReferenceVideoLimit;
    if (omniReferenceVideoLimit) {
      return n._(i._({}, omniReferenceVideoLimit), {
        minDuration:
          (e =
            model == null || (r = model.editConfig) == null
              ? undefined
              : r.editMinVideoDuration) != null
            ? e
            : omniReferenceVideoLimit.minDuration,
        maxDuration:
          (t =
            model == null || (a = model.editConfig) == null
              ? undefined
              : a.editMaxVideoDuration) != null
            ? t
            : omniReferenceVideoLimit.maxDuration,
      });
    }
  }
  get referenceUploadVisible() {
    return Object.values(this.canAddReferenceByTab).some(Boolean);
  }
  get canAddReferenceByTab() {
    const { references, promptContents } =
      this._videoGeneratorManager.omniReferenceManager.data;
    const r = eU.G({
      resources: references,
      subjects: eQ.I(promptContents),
    });
    const referenceValidationLimits = this.referenceValidationLimits;
    const i = (e) =>
      tn.y({
        materials: r,
        candidateTypes: [e],
        limits: referenceValidationLimits,
      }).ok;
    return {
      image: i("image"),
      video: i("video"),
      audio: i("audio"),
    };
  }
  constructor(e) {
    this._videoGeneratorManager = e;
    G.l_(this);
  }
}
const to = require("uoQ");
const td = require("Cq");
const tu = require("R2");
const tl = require("htj");
const tc = require("Nyo");
class tm extends tc.Z {
  _createTextContent(e) {
    return {
      type: "text",
      text: e,
    };
  }
  _isContinuationPromptBlockNode(e) {
    let t;
    let r;
    let a;
    return (
      ((r = e.attrs) == null ? undefined : r.isContinuationPromptBlockPart) ===
        true ||
      ((t =
        (a = e.marks) == null
          ? undefined
          : a.some(
              (e) => e.type === tl.t.VideoGeneratorContinuationPromptBlock,
            )) != null &&
        t)
    );
  }
  constructor(e) {
    var t;
    super();
    t = this;
    this._videoGeneratorManager = e;
    this.transformPromptContentsToEditorDocument = (e) => {
      var t = this._splitVideoPromptContentsToParagraphs(e);
      return {
        type: to.y.name,
        content: [
          ...t.map((e) =>
            i._(
              {
                type: td.f.name,
              },
              this._isVideoPromptParagraphContentEmpty(e)
                ? null
                : {
                    content: this._transformParagraphPromptContentsToNodes(e),
                  },
            ),
          ),
        ],
      };
    };
    this.transformPromptContentToNodes = (e) => {
      if (e.type === "subject") {
        return [
          {
            type: tl.t.SubjectMentionTag,
            attrs: {
              id: e.id,
              subject: e.subject,
              loading: e.loading,
            },
          },
        ];
      }
      if (e.type === "image" || e.type === "video" || e.type === "audio") {
        return [
          {
            type: tl.t.ReferenceMentionTag,
            attrs: i._(
              {
                id: e.id,
              },
              e.isContinuationPromptBlockPart
                ? {
                    isContinuationPromptBlockPart: true,
                  }
                : {},
            ),
          },
        ];
      }
      if (e.type === "continuationDuration") {
        return [
          {
            type: tl.t.VideoGeneratorContinuationDurationTag,
            attrs: i._(
              {},
              e.isContinuationPromptBlockPart
                ? {
                    isContinuationPromptBlockPart: true,
                  }
                : {},
            ),
          },
        ];
      }
      return super.transformPromptContentToNodes(e);
    };
    this.transformNodeToPromptContents = (e) => {
      if (e.type === tl.t.VideoGeneratorContinuationPromptBlock) {
        return this._transformContinuationPromptBlockNodeToPromptContents(e);
      }
      if (e.type === "text" && typeof e.text === "string") {
        var t = this._isContinuationPromptBlockNode(e);
        return [
          i._(
            {
              type: "text",
              text: e.text,
            },
            t
              ? {
                  isContinuationPromptBlockPart: true,
                }
              : {},
          ),
        ];
      }
      if (e.type === tl.t.SubjectMentionTag) {
        var { id, subject, loading } = e.attrs;
        if (tu.y(id) && subject) {
          return [
            {
              type: "subject",
              id,
              subject,
              loading: loading === true,
            },
          ];
        }
        return [];
      }
      if (e.type === tl.t.ReferenceMentionTag) {
        var { omniReferenceManager } = this._videoGeneratorManager;
        var {
          data: { references },
        } = omniReferenceManager;
        var { id: id_1 } = e.attrs;
        var u = references.find((e) => e.id === id_1);
        if (typeof id_1 !== "string" || !u) {
          return [];
        }
        var l = this._isContinuationPromptBlockNode(e);
        return [
          i._(
            {
              type: u.type,
              id: id_1,
            },
            l
              ? {
                  isContinuationPromptBlockPart: true,
                }
              : {},
          ),
        ];
      }
      if (e.type === tl.t.VideoGeneratorContinuationDurationTag) {
        var c = this._isContinuationPromptBlockNode(e);
        return [
          i._(
            {
              type: "continuationDuration",
            },
            c
              ? {
                  isContinuationPromptBlockPart: true,
                }
              : {},
          ),
        ];
      }
      return super.transformNodeToPromptContents(e);
    };
    this._transformParagraphPromptContentsToNodes = (e) => {
      var t = [];
      var r = [];
      var a = () => {
        if (r.length) {
          t.push({
            type: tl.t.VideoGeneratorContinuationPromptBlock,
            content: r.flatMap((e) => this.transformPromptContentToNodes(e)),
          });
          r = [];
        }
      };
      e.forEach((e) => {
        if (S_1(e)) {
          r.push(e);
        } else {
          a();
          t.push(...this.transformPromptContentToNodes(e));
        }
      });
      a();
      return t;
    };
    this._markContinuationPromptBlockContent = (e) => {
      if (
        e.type === "text" ||
        e.type === "image" ||
        e.type === "video" ||
        e.type === "audio" ||
        e.type === "continuationDuration"
      ) {
        return n._(i._({}, e), {
          isContinuationPromptBlockPart: true,
        });
      }
      return e;
    };
    this._transformContinuationPromptBlockNodeToPromptContents = (e) => {
      var t;
      var r;
      var a =
        (t =
          (r = e.content) == null
            ? undefined
            : r.flatMap((e) => this.transformNodeToPromptContents(e))) != null
          ? t
          : [];
      var i = [];
      var n = a;
      var s = (text) => {
        var { consumed, rest } = this._consumeLeadingText(n, text);
        i.push(
          ...consumed.map((e) => this._markContinuationPromptBlockContent(e)),
        );
        n = rest;
      };
      C.n().forEach((e) => {
        if (e.type === "text") {
          return void s(e.text);
        }
        if (e.slot === "originVideo") {
          var [t, ...r] = n;
          if (t && F_1(t)) {
            i.push(this._markContinuationPromptBlockContent(t));
            n = r;
          }
          return;
        }
        var [a, ...o] = n;
        if ((a == null ? undefined : a.type) === "continuationDuration") {
          i.push(this._markContinuationPromptBlockContent(a));
          n = o;
        }
      });
      return [...i, ...n];
    };
    this._splitVideoPromptContentsToParagraphs = function (e) {
      const r =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      const a =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      if (e.length === 0) {
        return [...a, r];
      }
      const [i, ...n] = e;
      if (t._isVideoPromptTextContent(i) && i.text.includes("\n")) {
        let s;
        const o = i.text.split("\n");
        const d = [...r, t._createTextContent(o[0])];
        const u = o.slice(1, -1).map((e) => [t._createTextContent(e)]);
        const l = [t._createTextContent((s = o.at(-1)) != null ? s : "")];
        return t._splitVideoPromptContentsToParagraphs(n, l, [...a, d, ...u]);
      }
      return t._splitVideoPromptContentsToParagraphs(n, [...r, i], a);
    };
    this._isVideoPromptParagraphContentEmpty = (e) =>
      e.every((e) => this._isVideoPromptTextContent(e) && e.text === "");
    this._isVideoPromptTextContent = (e) => e.type === "text";
    this._consumeLeadingText = (e, t) => {
      if (t === "") {
        return {
          consumed: [],
          rest: e,
        };
      }
      var [r] = e;
      if (
        (r == null ? undefined : r.type) !== "text" ||
        !r.text.startsWith(t)
      ) {
        return {
          consumed: [],
          rest: e,
        };
      }
      var a = r.text.slice(t.length);
      var rest =
        a.length === 0
          ? e.slice(1)
          : [
              n._(i._({}, r), {
                text: a,
              }),
              ...e.slice(1),
            ];
      return {
        consumed: [
          n._(i._({}, r), {
            text: t,
          }),
        ],
        rest,
      };
    };
  }
}
class tp extends u.jG {
  get metadata() {
    return this._metadataStore;
  }
  get data() {
    return this._dataStore;
  }
  validateSubjectAddition(e) {
    const t = v.K(e);
    if (
      this._dataStore.promptContents.some(
        (e) => e.type === "subject" && e.id === t,
      )
    ) {
      return l.nj();
    }
    const { references, promptContents } = this._dataStore;
    return this._validateReferencesChange({
      resources: references,
      subjects: [...eQ.I(promptContents), e],
      extra: {
        videoEditSourceResource: this._dataStore.videoEditSourceReference,
      },
    });
  }
  resetData() {
    this._dataStore.resetData();
    this._videoGeneratorManager.continuationManager.clearContinuation();
    this._videoGeneratorManager.auditReferences();
    this._videoGeneratorManager.auditPromptSubjects();
  }
  _removeVideoEditSourceFromPrompt(e) {
    const t = this._dataStore.promptContents.filter(
      (t) =>
        (t.type !== "image" && t.type !== "video" && t.type !== "audio") ||
        t.id !== e,
    );
    if (t.length !== this._dataStore.promptContents.length) {
      this.changePromptContents(t);
    }
  }
  _reportImportResourcesFromLocal(e, t) {
    for (const r of e) {
      this._videoGeneratorManager.reportManager.reportImportReferenceMaterial(
        i._(
          {
            materialType: r.type,
          },
          t,
        ),
      );
    }
  }
  _insertReferencesIntoPrompt(e) {
    if (e.length !== 0) {
      let t;
      let r;
      const a =
        (r =
          this._videoGeneratorManager.contentGeneratorManager
            .visibleContentGeneratorInstance) == null ||
        (t = r.elements.promptEditorRef) == null
          ? undefined
          : t.current;
      if (a) {
        a.commands.insertContent(
          e.flatMap((e) =>
            this.promptEditorManager.transformPromptContentToNodes(e),
          ),
        );
        a.commands.focus();
      }
    }
  }
  _transformPromptContentsToText(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    const r = te.v(t);
    return [
      {
        type: "text",
        text: e
          .map((e) => {
            if (e.type === "text") {
              return e.text;
            }
            if (e.type === "subject") {
              return e.subject.content.name;
            }
            if (e.type === "continuationDuration") {
              return `${this._videoGeneratorManager.data.durationMs / j.K}s`;
            }
            return r[e.id] || "";
          })
          .join(""),
      },
    ];
  }
  _validateReferencesChange(e) {
    const { resources, subjects, extra } = e;
    const { model, videoEditSourceResource } = extra != null ? extra : {};
    const s = eU.G({
      resources,
      subjects,
    });
    if (model) {
      const o = model.fields.find((e) => e.type === B.pH.UnifiedEdit);
      if (!o) {
        return eW.T({
          materials: s,
          limits: {},
        });
      }
      const { materialCombinationRule, materialLimits } = o;
      return eW.T({
        materials: s,
        limits: {
          materialCombinationRule,
          materialLimits,
        },
      });
    }
    if (!this._metadataStore.omniReferenceField) {
      return eW.T({
        materials: s,
        limits: {},
      });
    }
    const {
      omniReferenceMaterialCombinationRule,
      omniReferenceMaterialLimits,
      videoEditSourceMaterialLimits,
    } = this._metadataStore;
    return eW.T({
      materials: s,
      limits: {
        materialCombinationRule: omniReferenceMaterialCombinationRule,
        materialLimits: videoEditSourceResource
          ? (e) => {
              if (e.id === videoEditSourceResource.id) {
                return videoEditSourceMaterialLimits;
              }
              return omniReferenceMaterialLimits;
            }
          : omniReferenceMaterialLimits,
      },
    });
  }
  _hasReferenceResource(e) {
    return this.data.references.some((t) => t.id === e.id && t.type === e.type);
  }
  _syncContinuationWithPromptContents(e) {
    const { continuationManager } = this._videoGeneratorManager;
    if (
      !(
        !continuationManager.data.enabled ||
        continuationManager.hasVideoContinuationPromptBlock(
          e,
          continuationManager.data.originReferenceId,
        )
      )
    ) {
      continuationManager.clearContinuation();
    }
  }
  _validateReferenceResources(e) {
    const {
      omniReferenceImageLimit,
      omniReferenceVideoLimit,
      omniReferenceAudioLimit,
    } = this._metadataStore;
    return this._videoGeneratorManager.validateReferenceResources(e, {
      imageOptions: i._({}, omniReferenceImageLimit),
      videoOptions: i._({}, omniReferenceVideoLimit),
      audioOptions: i._({}, omniReferenceAudioLimit),
      skipAspectRatioSync: true,
    });
  }
  _validateVideoEditSourceResource(e) {
    return this._videoGeneratorManager.validateReferenceResources([e], {
      videoOptions: i._({}, this._metadataStore.videoEditSourceVideoLimit),
      skipAspectRatioSync: true,
    });
  }
  _selectValidVideoEditSourceReference(e) {
    return a
      ._(function* () {
        let t;
        const r = function* (e) {
          const r = yield t._validateVideoEditSourceResource(e);
          if (o()) {
            if (r.ok) {
              t._dataStore.setData({
                references: [
                  e,
                  ...t._dataStore.references.filter((t) => t.id !== e.id),
                ],
                promptContents: t._dataStore.promptContents,
                videoEditSourceReferenceId: e.id,
                videoEditFrameTimestampMsByReferenceId:
                  e.id === videoEditSourceReferenceId
                    ? t._dataStore.videoEditFrameTimestampMsByReferenceId
                    : {},
              });
              t._removeVideoEditSourceFromPrompt(e.id);
              return {
                v: true,
              };
            }
            return void d.push(e.id);
          }
          return {
            v: false,
          };
        };
        var videoEditSourceReferenceId =
          this._dataStore.videoEditSourceReferenceId;
        const i = [...this._dataStore.references];
        const videoEditSourceReference =
          this._dataStore.videoEditSourceReference;
        const s = [
          ...(videoEditSourceReference instanceof $.p
            ? [videoEditSourceReference]
            : []),
          ...i.filter(
            (e) =>
              e instanceof $.p &&
              e.id !==
                (videoEditSourceReference == null
                  ? undefined
                  : videoEditSourceReference.id),
          ),
        ];
        var o = () =>
          e() &&
          this._dataStore.videoEditSourceReferenceId ===
            videoEditSourceReferenceId &&
          this._dataStore.references.length === i.length &&
          this._dataStore.references.every((e, t) => {
            var r;
            return e.id === ((r = i[t]) == null ? undefined : r.id);
          });
        var d = [];
        for (const u of s) {
          t = this;
          const l = yield* r(u);
          if (e7._(l) === "object") {
            return l.v;
          }
        }
        return (
          !!o() &&
          (this.removeReferenceResources(d),
          this._dataStore.setVideoEditSourceReferenceId(undefined),
          true)
        );
      })
      .call(this);
  }
  constructor(e, t, r) {
    var s;
    super();
    s = this;
    this._videoGeneratorManager = e;
    this._containerService = t;
    this._notificationService = r;
    this.promptEditorManager = this._register(
      this._containerService.createInstance(tm, this._videoGeneratorManager),
    );
    this._metadataStore = new ts(this._videoGeneratorManager);
    this._dataStore = new tr(this._videoGeneratorManager);
    this._removeInvalidReferencesRunId = 0;
    this.setData = (e, t) => {
      var r = (t == null ? undefined : t.preserveVideoEditContext)
        ? this._dataStore.videoEditSourceReferenceId
        : e.videoEditSourceReferenceId;
      var a = this._validateReferencesChange({
        resources: e.references,
        subjects: eQ.I(e.promptContents),
        extra: {
          videoEditSourceResource: e.references.find((e) => e.id === r),
        },
      });
      if (!a.ok) {
        this._notificationService.warning(a.msg);
        return a;
      }
      if (!(t == null ? undefined : t.preserveContinuation)) {
        this._videoGeneratorManager.continuationManager.clearContinuation();
      }
      c.Fr;
      var e_promptContents = e.promptContents;
      var o = i._(
        n._(i._({}, e), {
          promptContents: e_promptContents,
        }),
        (t == null ? undefined : t.preserveVideoEditContext)
          ? {
              videoEditSourceReferenceId:
                this._dataStore.videoEditSourceReferenceId,
              videoEditFrameTimestampMsByReferenceId:
                this._dataStore.videoEditFrameTimestampMsByReferenceId,
            }
          : {},
      );
      this._dataStore.setData(o);
      this._syncContinuationWithPromptContents(e.promptContents);
      if (!(t == null ? undefined : t.skipAudit)) {
        this._videoGeneratorManager.auditReferences();
        this._videoGeneratorManager.auditPromptSubjects(e_promptContents);
      }
      return l.nj();
    };
    this.validateDataForModel = (e, model) =>
      this._validateReferencesChange({
        resources: e.references,
        subjects: eQ.I(e.promptContents),
        extra: {
          model,
          videoEditSourceResource: e.references.find(
            (t) => t.id === e.videoEditSourceReferenceId,
          ),
        },
      });
    this.importReferenceResourcesFromLocal = (e) =>
      a._(function* () {
        if (e.length !== 0) {
          const { importResourcesFromLocal, featureManager } =
            s._videoGeneratorManager;
          const { migrateToFeature } = featureManager;
          const { acceptedFileTypes } = s._metadataStore;
          if (!featureManager.data.isOmniReferenceLikeEngaged) {
            yield migrateToFeature("omniReference");
          }
          yield importResourcesFromLocal(e, s.addReferenceResources, {
            acceptedFileTypes,
          });
        }
      })();
    this.importVideoEditSourceFromLocal = (e) =>
      a._(function* () {
        const {
          metadata: { acceptedVideoFileTypes },
        } = s._videoGeneratorManager;
        yield s._videoGeneratorManager.importResourcesFromLocal(
          [e],
          (e) => {
            var [t] = e;
            if (!(t instanceof $.p)) {
              var r = l.xz(
                -1,
                d.Ay.t(
                  "seedance_25_video_edit_source_video_only",
                  {},
                  "请上传视频素材",
                ),
              );
              s._notificationService.warning(r.msg);
              return Promise.resolve(r);
            }
            return s.setVideoEditSourceResource(t);
          },
          {
            acceptedFileTypes: acceptedVideoFileTypes,
          },
        );
      })();
    this.replaceVideoEditSourceFromLocal = (e) =>
      a._(function* () {
        yield s.importVideoEditSourceFromLocal(e);
      })();
    this.dropAsReferences = (e) => {
      var { dataTransfer } = e;
      if (!dataTransfer) {
        return;
      }
      var { visibleContentGeneratorInstance } =
        this._videoGeneratorManager.contentGeneratorManager;
      if (visibleContentGeneratorInstance) {
        var { promptEditorRef } = visibleContentGeneratorInstance.elements;
        var i = promptEditorRef == null ? undefined : promptEditorRef.current;
        if (i) {
          var n = i.view.posAtCoords({
            left: e.clientX,
            top: e.clientY,
          });
          if (n == null ? undefined : n.pos) {
            i.commands.setTextSelection(n.pos);
            var { acceptedFileTypes } = this.metadata;
            var { acceptedFiles } = h.g(
              this._containerService,
              I.o(dataTransfer),
              acceptedFileTypes,
            );
            e.preventDefault();
            this._importReferenceFilesIntoPrompt(acceptedFiles, {
              reportParams: {
                importMaterialParams: {
                  actionType: "drag",
                },
              },
            });
          }
        }
      }
    };
    this.pasteAsReferences = (e) => {
      if (e.clipboardData) {
        var { acceptedFileTypes } = this.metadata;
        var { acceptedFiles } = h.g(
          this._containerService,
          I.o(e.clipboardData),
          acceptedFileTypes,
        );
        if (acceptedFiles.length) {
          e.preventDefault();
          this._importReferenceFilesIntoPrompt(acceptedFiles, {
            reportParams: {
              importMaterialParams: {
                actionType: "paste",
              },
            },
          });
        }
      }
    };
    this._importReferenceFilesIntoPrompt = function (e) {
      const t =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return a._(function* () {
        const {
          reportParams: {
            importMaterialParams: { actionType = "click", pluginSource } = {},
          } = {},
        } = t;
        const { visibleContentGeneratorInstance } =
          s._videoGeneratorManager.contentGeneratorManager;
        if (visibleContentGeneratorInstance) {
          const n = e
            .map((file) => {
              if (file.type.startsWith("image/")) {
                return s._containerService.createInstance(eC.Vl, {
                  file,
                });
              }
              if (file.type.startsWith("video/")) {
                return s._containerService.createInstance($.p, {
                  file,
                });
              }
              if (file.type.startsWith("audio/")) {
                return s._containerService.createInstance(eE.e, {
                  file,
                });
              }
            })
            .filter((e) => e !== undefined);
          const { promptEditorRef } = visibleContentGeneratorInstance.elements;
          if (promptEditorRef == null ? undefined : promptEditorRef.current) {
            const d = yield s.addReferenceResources(n);
            if (!d.ok) {
              return void s._reportImportResourcesFromLocal(n, {
                status: "fail",
                actionType,
                pluginSource,
                failReason: d.msg,
              });
            }
            n.forEach((e) => {
              e.resolveUri();
              if (e instanceof $.p) {
                e.resolveCoverUrl();
              }
            });
            s._reportImportResourcesFromLocal(n, {
              status: "success",
              actionType,
              pluginSource,
            });
            s._insertReferencesIntoPrompt(n);
          }
        }
      })();
    };
    this.replaceReferenceResourceFromLocal = (e, t) =>
      a._(function* () {
        if (s._videoGeneratorManager.continuationManager.isOriginReference(t)) {
          return void s._notificationService.warning(
            d.Ay.t(
              "web_video_continuation_origin_locked",
              {},
              "续写原视频不可替换",
            ),
          );
        }
        const { importResourcesFromLocal } = s._videoGeneratorManager;
        const { acceptedFileTypes } = s._metadataStore;
        yield importResourcesFromLocal(
          [e],
          (e) => {
            var [r] = e;
            var a = s._dataStore.references.findIndex((e) => e.id === t);
            if (a < 0) {
              return Promise.resolve(l.nj());
            }
            return s.replaceReferenceResource(a, r);
          },
          {
            acceptedFileTypes,
          },
        );
      })();
    this.addReferenceResources = (e, t) => this._addReferenceResources(e, t);
    this._addReferenceResources = (e, t) =>
      a._(function* () {
        if (e.length === 0) {
          return l.nj();
        }
        const { acceptedResourceTypes } = s._metadataStore;
        const a = Y.I(s._containerService, e, acceptedResourceTypes);
        if (!a.length) {
          return l.nj();
        }
        const i = yield k.A(a);
        if (!i.ok) {
          s._notificationService.warning(i.msg);
          return i;
        }
        const n = s._validateReferencesChange({
          resources: [...s._dataStore.references, ...a],
          subjects: eQ.I(s._dataStore.promptContents),
          extra: {
            videoEditSourceResource: s._dataStore.videoEditSourceReference,
          },
        });
        if (!n.ok) {
          s._notificationService.warning(n.msg);
          return n;
        }
        const o = yield s._validateReferenceResources(a);
        if (o.ok) {
          s._dataStore.addResources(a);
          if (s._videoGeneratorManager.featureManager.data.isVideoEditEngaged) {
            s.ensureVideoEditSourceReference();
          }
          if (!(t == null ? undefined : t.skipAudit)) {
            s._videoGeneratorManager.auditReferences();
          }
          return l.nj();
        }
        s._notificationService.warning(o.msg);
        return o;
      })();
    this.setVideoEditSourceResource = (videoEditSourceResource) =>
      a._(function* () {
        if (!(videoEditSourceResource instanceof $.p)) {
          const t = l.xz(
            -1,
            d.Ay.t(
              "seedance_25_video_edit_source_video_only",
              {},
              "请上传视频素材",
            ),
          );
          s._notificationService.warning(t.msg);
          return t;
        }
        const r = yield k.A([videoEditSourceResource]);
        if (!r.ok) {
          s._notificationService.warning(r.msg);
          return r;
        }
        const a = s._dataStore.references.filter(
          (e) => e.id !== s._dataStore.videoEditSourceReferenceId,
        );
        const i = s._validateReferencesChange({
          resources: [
            videoEditSourceResource,
            ...a.filter((t) => t.id !== videoEditSourceResource.id),
          ],
          subjects: eQ.I(s._dataStore.promptContents),
          extra: {
            videoEditSourceResource,
          },
        });
        if (!i.ok) {
          s._notificationService.warning(i.msg);
          return i;
        }
        const n = yield s._validateVideoEditSourceResource(
          videoEditSourceResource,
        );
        if (n.ok) {
          s._dataStore.setVideoEditSourceResource(videoEditSourceResource);
          s._removeVideoEditSourceFromPrompt(videoEditSourceResource.id);
          s._videoGeneratorManager.auditReferences();
          return l.nj();
        }
        s._notificationService.warning(n.msg);
        return n;
      })();
    this.ensureVideoEditSourceReference = () => {
      var e;
      var t =
        ((e = this._dataStore.videoEditSourceReference) == null
          ? undefined
          : e.type) === "video"
          ? this._dataStore.videoEditSourceReference
          : this._dataStore.references.find((e) => e instanceof $.p);
      if (t) {
        this._dataStore.setVideoEditSourceResource(t);
        this._removeVideoEditSourceFromPrompt(t.id);
      } else {
        this._dataStore.setVideoEditSourceReferenceId(undefined);
      }
    };
    this.clearVideoEditContext = () => {
      this._dataStore.clearVideoEditContext();
    };
    this.replaceReferenceResource = (e, t, r) =>
      a._(function* () {
        if (
          s._videoGeneratorManager.continuationManager.isOriginReferenceIndex(e)
        ) {
          s._notificationService.warning(
            d.Ay.t(
              "web_video_continuation_origin_locked",
              {},
              "续写原视频不可替换",
            ),
          );
          return l.nj();
        }
        let a;
        const { references } = s._dataStore;
        if (e >= references.length) {
          return s.addReferenceResources([t], r);
        }
        const u = (a = references.at(e)) == null ? undefined : a.id;
        const { acceptedResourceTypes } = s._metadataStore;
        const m = Y.I(s._containerService, [t], acceptedResourceTypes);
        if (!m.length) {
          return l.nj();
        }
        const p = yield k.A(m);
        if (!p.ok) {
          s._notificationService.warning(p.msg);
          return p;
        }
        const h = references.filter((t, r) => r !== e);
        const _ = s._validateReferencesChange({
          resources: [...h, t],
          subjects: eQ.I(s._dataStore.promptContents),
          extra: {
            videoEditSourceResource: s._dataStore.videoEditSourceReference,
          },
        });
        if (!_.ok) {
          s._notificationService.warning(_.msg);
          return _;
        }
        const v = yield s._validateReferenceResources([t]);
        if (v.ok) {
          s._dataStore.setResource(t, e);
          if (u && u !== t.id) {
            s._dataStore.setPromptContents(
              s._dataStore.promptContents.map((e) => {
                if (F_1(e) && e.id === u) {
                  return n._(i._({}, e), {
                    type: t.type,
                    id: t.id,
                  });
                }
                return e;
              }),
            );
          }
          if (!(r == null ? undefined : r.skipAudit)) {
            s._videoGeneratorManager.auditReferences();
          }
          return l.nj();
        }
        s._notificationService.warning(v.msg);
        return v;
      })();
    this.removeReferenceResource = (e) => {
      this.removeReferenceResources([e]);
    };
    this.removeReferenceResources = (e) => {
      if (e.length !== 0) {
        var { continuationManager } = this._videoGeneratorManager;
        var r = e.some((e) => continuationManager.isOriginReference(e));
        var a = this._dataStore.promptContents;
        this._dataStore.removeReferences(e);
        if (r) {
          continuationManager.clearContinuation();
          this.changePromptContents(
            continuationManager.removeVideoContinuationPromptContents(a, e),
          );
        } else {
          var i = new Set(e);
          this.changePromptContents(a.filter((e) => !(F_1(e) && i.has(e.id))));
        }
        this._videoGeneratorManager.auditReferences();
      }
    };
    this.removeInvalidReferencesForCurrentFeature = (e) =>
      a._(function* () {
        const t = ++s._removeInvalidReferencesRunId;
        const { featureManager } = s._videoGeneratorManager;
        const feature = featureManager.data.feature;
        const modelKey = s._videoGeneratorManager.data.modelKey;
        const n = () =>
          t === s._removeInvalidReferencesRunId &&
          e() &&
          featureManager.data.feature === feature &&
          s._videoGeneratorManager.data.modelKey === modelKey;
        const o = feature === "videoEdit";
        if (o && !(yield s._selectValidVideoEditSourceReference(n))) {
          return false;
        }
        const { acceptedResourceTypes } = s._metadataStore;
        const u = new Set(acceptedResourceTypes);
        const l = [];
        const c = [];
        const m = [...s._dataStore.references];
        const p = o ? s._dataStore.videoEditSourceReferenceId : undefined;
        const h = () =>
          n() &&
          s._dataStore.videoEditSourceReferenceId === p &&
          s._dataStore.references.length === m.length &&
          s._dataStore.references.every((e, t) => {
            var r;
            return e.id === ((r = m[t]) == null ? undefined : r.id);
          });
        for (const _ of m) {
          if (!h()) {
            return false;
          }
          if (!u.has(_.type)) {
            c.push(_.id);
            continue;
          }
          const v = s._validateReferencesChange({
            resources: [...l, _],
            subjects: eQ.I(s._dataStore.promptContents),
            extra: {
              videoEditSourceResource: s._dataStore.videoEditSourceReference,
            },
          });
          let g = v;
          if (
            v.ok &&
            _.id !== p &&
            ((g = yield s._validateReferenceResources([_])), !h())
          ) {
            return false;
          }
          if (!g.ok) {
            c.push(_.id);
            continue;
          }
          l.push(_);
        }
        return !!h() && (s.removeReferenceResources(c), true);
      })();
    this.insertReferenceIntoPrompt = (e) => {
      if (this._hasReferenceResource(e)) {
        this._insertReferencesIntoPrompt([e]);
      }
    };
    this.moveReferenceResource = (e, t) => {
      var { continuationManager } = this._videoGeneratorManager;
      if (continuationManager.isOriginReferenceIndex(e)) {
        return void this._notificationService.warning(
          d.Ay.t(
            "web_video_continuation_origin_locked",
            {},
            "续写原视频不可拖拽",
          ),
        );
      }
      var a = continuationManager.getOriginReferenceIndex();
      this._dataStore.moveReference(e, a !== -1 && t <= a ? a + 1 : t);
    };
    this.setReferencePanelVisible = (e) => {
      this._dataStore.setReferencePanelVisible(e);
    };
    this.setReferencePanelActiveTab = (e) => {
      this._dataStore.setReferencePanelActiveTab(e);
    };
    this.changePromptContentWithText = (e) => {
      this.changePromptContents([
        {
          type: "text",
          text: e,
        },
      ]);
    };
    this.changeEditorDocument = (e) => {
      var { transformEditorDocumentToPromptContents } =
        this.promptEditorManager;
      var r = transformEditorDocumentToPromptContents(e);
      this.changePromptContents(r);
    };
    this.changePromptContents = (e) => {
      c.Fr;
      var t = e;
      this._dataStore.setPromptContents(t);
      this._syncContinuationWithPromptContents(e);
      this._videoGeneratorManager.auditPromptSubjects(t);
    };
    this.removeSubjectFromPrompt = (e) => {
      var t = this._dataStore.promptContents.filter(
        (t) => t.type !== "subject" || t.id !== e,
      );
      this.changePromptContents(t);
    };
    this.replaceSubjectInPrompt = (e, t) => {
      var r = v.K(t);
      var a = this._dataStore.promptContents.map((a) => {
        if (a.type === "subject" && a.id === e) {
          return n._(i._({}, a), {
            id: r,
            subject: t,
          });
        }
        return a;
      });
      this.changePromptContents(a);
    };
  }
}
tp = o.Cg(
  [
    o.Qj(1, p._),
    o.Qj(2, m.Ot),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof VideoGeneratorManager === "undefined"
        ? Object
        : VideoGeneratorManager,
      p._ === undefined ? Object : p._,
      m.Ot === undefined ? Object : m.Ot,
    ]),
  ],
  tp,
);
require("Vgx");
const th = require("WyQ");
const t_ = require("bE");
const tv = require("JSz");
const tg = require("w0L");
const tf = require("krt");
const tM = require("jbD");
const ty = require("fnv");
const tS = require("VA");
const tR = require("fHC");
const tk = require("TK");
const tT = require("SoQ");
const tP = require("rr");
const tI = "max_parallel";
const tF = "daily_quota_limit";
const tb = "lock_failed";
const tC = new Set([
  "4206",
  "4207",
  "Err_ArkGenerateFail",
  "Err_ArkCall",
  "ArkGenerateFail",
  "ArkCall",
]);
const tE = /\b(?:Err_)?Ark(?:Call|GenerateFail)\b/;
const tA =
  /error code:\s*429|http status code:\s*429|too\s*many\s*requests|toomanyrequests|ratelimit|rate limit|tpmexceeded|rpmexceeded/i;
const tG = "dreamina_video_prompt_enhancement_guide_shown";
const tx = "dreamina_video_prompt_enhancement_guide_badge_dismissed";
const tD = new Set(["params", "参数"]);
const statusList = [
  ty.zT.Created,
  ty.zT.Running,
  ty.zT.Succeeded,
  ty.zT.Failed,
  ty.zT.Timeout,
];
function tL(e) {
  if (typeof e === "boolean") {
    return e;
  }
  if (typeof e === "number") {
    return e === 1;
  }
  if (typeof e === "string") {
    const t = e.trim().toLowerCase();
    return t === "true" || t === "1";
  }
  return false;
}
function tw(e) {
  let t;
  let r;
  const a = e.trim();
  const i = a.match(/^```(?:markdown|md)?\s*\n([\s\S]*?)\n```$/i);
  if ((t = i == null || (r = i[1]) == null ? undefined : r.trim()) != null) {
    return t;
  }
  return a;
}
function tj(e) {
  const t = e.trim().match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);
  if (t) {
    return {
      level: t[1].length,
      text: t[2].trim(),
    };
  }
}
function tO(e) {
  return e
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)]\([^)]+\)/g, "$1")
    .trim();
}
function tK(e) {
  return tO(e)
    .replace(/^\d+[\s.)\u3001-]*/, "")
    .replace(/[\uff1a:].*$/, "")
    .replace(/[\s_\-*/`~]/g, "")
    .toLowerCase();
}
function tz(e) {
  return tO(e)
    .replace(/^>\s*/, "")
    .replace(/^[-*+]\s+/, "")
    .replace(/^\d+[.)\u3001]\s+/, "")
    .trim();
}
function tB(text) {
  const t = tK(text);
  return t === "透传结果" || t === "passthroughresult";
}
function tq(e) {
  let t;
  let r;
  let a;
  const i = tw(e);
  const n = [];
  i.split("\n").forEach((e) => {
    var t;
    var i;
    var s = tj(e);
    if (s) {
      if (a !== undefined && s.level > a) {
        return;
      }
      a = undefined;
      if (tB(s.text)) {
        r = undefined;
        return;
      }
      t = s.text;
      if (tD.has(tK(t))) {
        r = undefined;
        a = s.level;
        return;
      }
      if (s.level <= 2) {
        r = {
          title: tO(s.text),
          lines: [],
        };
        n.push(r);
        return;
      }
    } else if (a !== undefined) {
      return;
    }
    var o = tz((i = s == null ? undefined : s.text) != null ? i : e);
    if (o && r) {
      r.lines.push(o);
    }
  });
  return (
    n
      .map((e) => {
        var t;
        var r = e.lines.join(" ").trim();
        if (r) {
          return ""
            .concat(e.title)
            .concat(
              ((t = e.title), /^[a-z][a-z0-9\s_-]*$/i.test(t) ? ": " : "："),
            )
            .concat(r);
        }
      })
      .filter(Boolean)
      .join("\n")
      .trim() ||
    tw(e)
      .split("\n")
      .map((e) => {
        var r;
        var a;
        var i = tj(e);
        if (i) {
          if (
            (t !== undefined && i.level > t) ||
            ((t = undefined), tB(i.text))
          ) {
            return;
          }
          r = i.text;
          if (tD.has(tK(r))) {
            t = i.level;
            return;
          }
        } else if (t !== undefined) {
          return;
        }
        return tz((a = i == null ? undefined : i.text) != null ? a : e);
      })
      .filter(Boolean)
      .join("\n")
      .trim() ||
    e.trim()
  );
}
function tH(e) {
  if (!(e == null ? undefined : e.length)) {
    return e;
  }
  const t = new Map();
  const r = e
    .map((e) => {
      if (e.type !== ty.y9.Reference) {
        if ((r = e.text) != null) {
          return r;
        }
        return "";
      }
      var r;
      var a;
      a = t.size;
      var i = `DREAMINAPEREF`.concat(a, "TOKEN");
      t.set(i, e);
      return i;
    })
    .join("");
  if (!t.size) {
    return e;
  }
  const a = tq(r);
  if (!a || a === r) {
    return e;
  }
  const i = RegExp("(".concat(Array.from(t.keys()).join("|"), ")"), "g");
  return a
    .split(i)
    .map((e) => {
      if (e) {
        var r = t.get(e);
        return (
          r || {
            type: ty.y9.Text,
            text: e,
          }
        );
      }
    })
    .filter((e) => !!e);
}
class tN extends u.jG {
  get tasks() {
    return this._state.tasks;
  }
  get showGuide() {
    return this._state.showGuide;
  }
  get showPlusOne() {
    return this._state.showPlusOne;
  }
  get isGuideBadgeDismissed() {
    return this._state.isGuideBadgeDismissed;
  }
  get hasAcceptedTask() {
    return this._getAcceptedTask() !== undefined;
  }
  get acceptedPromptPrefix() {
    return d.Ay.t("prompt_optimize", {}, "优化提示词");
  }
  get isEnabled() {
    return (
      this._state.isPeAsyncConfirmEnabled &&
      this._getCurrentModelSupportPromptEnhancement()
    );
  }
  get canShowEntry() {
    return this.hasStartablePrompt;
  }
  get hasStartablePrompt() {
    return this.isEnabled && !!this._getActiveTextPrompt().trim();
  }
  get activeTaskCount() {
    return this.tasks.filter((e) => e.status === "enhancing").length;
  }
  get isMaxParallelEnhancement() {
    return this.activeTaskCount >= 5;
  }
  get canStartEnhancement() {
    return (
      this.hasStartablePrompt &&
      !this.isMaxParallelEnhancement &&
      !this._state.isClearingTasks
    );
  }
  get canShowTaskEntry() {
    return this.isEnabled && this.tasks.length > 0;
  }
  get isEnhancing() {
    return this.activeTaskCount > 0;
  }
  get completedTasks() {
    return this.displayTasks.filter((e) => e.status === "succeeded");
  }
  get currentTask() {
    const e = this.displayTasks.find((e) => e.status === "enhancing");
    const { completedTasks } = this;
    if (e != null) {
      return e;
    }
    return completedTasks[completedTasks.length - 1];
  }
  get completedTaskCountText() {
    const e = Math.max(this.displayTasks.length, this._state.totalTaskCount);
    if (e) {
      if (e > 99) {
        return `${99}+`;
      }
      return "".concat(e);
    }
  }
  get displayTasks() {
    return this._sortTasksByCreateTime(this.tasks);
  }
  get isLoadingPreviousTasks() {
    return this._state.isLoadingPreviousTasks;
  }
  get isClearingTasks() {
    return this._state.isClearingTasks;
  }
  get canLoadPreviousTasks() {
    return (
      this.isEnabled &&
      this._canQueryCurrentTaskList() &&
      this._state.hasMorePreviousTasks &&
      !this._state.isLoadingPreviousTasks
    );
  }
  get submissionInfo() {
    if (this.isEnabled) {
      const finalPrompt = this._getActiveTextPrompt();
      const { promptTracking } = this._state;
      if (promptTracking) {
        const { task, operationType, promptAtOperation } = promptTracking;
        const promptType = this._getTrackedPromptType(
          operationType,
          finalPrompt,
          promptAtOperation,
        );
        return {
          peTaskId: task.peTaskId,
          operationType,
          promptContext: task.promptContext,
          promptSource:
            operationType === "accepted" ? "prompt_optimize" : undefined,
          promptType,
          originalPrompt: task.originalPrompt,
          optimizedPrompt: task.optimizedPrompt,
          finalPrompt,
          durationMs:
            task.completedAt === undefined
              ? undefined
              : task.completedAt - task.createdAt,
        };
      }
      const s = this._getAcceptedTask();
      const { completedTasks } = this;
      const d = completedTasks[completedTasks.length - 1];
      const u = s != null ? s : d;
      if (u) {
        return {
          peTaskId: u.peTaskId,
          operationType: s ? "accepted" : "unused",
          promptContext: u.promptContext,
          promptSource: s ? "prompt_optimize" : undefined,
          promptType: s
            ? "optimized_prompt"
            : "original_prompt_after_pe_unused",
          originalPrompt: u.originalPrompt,
          optimizedPrompt: u.optimizedPrompt,
          finalPrompt,
          durationMs:
            u.completedAt === undefined
              ? undefined
              : u.completedAt - u.createdAt,
        };
      }
    }
  }
  get _guideStorageKey() {
    if (this._accountService.hasLogin) {
      return "".concat(tG, "-").concat(this._accountService.userProfile.uid);
    }
    return "".concat(tG, "-guest");
  }
  get _guideBadgeStorageKey() {
    if (this._accountService.hasLogin) {
      return "".concat(tx, "-").concat(this._accountService.userProfile.uid);
    }
    return "".concat(tx, "-guest");
  }
  dispose() {
    this._clearGuideTimer();
    this._clearGuideVisibleTimer();
    this._clearAllTaskStatusMonitors();
    this._abortAllTaskRequests();
    this._taskRequestIds.clear();
    this._clearPlusOneTimer();
    this._invalidatePromptStateWorkspaceMigration();
    super.dispose();
  }
  _associateTasksWithWorkspace(e, t) {
    return a
      ._(function* () {
        if (this.isEnabled && !(e <= 0)) {
          const r = yield this._associateUnassociatedTasksWithWorkspace(e);
          yield this._queryCurrentTaskList(e);
          this._restorePromptStateWorkspaceMigration(t, e, r);
        }
      })
      .call(this);
  }
  _beginPromptStateWorkspaceMigration() {
    if (!this.isEnabled) {
      return void this._invalidatePromptStateWorkspaceMigration();
    }
    const { promptTracking } = this._state;
    const acceptedTask = this._getAcceptedTask();
    if (!acceptedTask && !promptTracking) {
      return void this._invalidatePromptStateWorkspaceMigration();
    }
    const migrationId = "video-pe-prompt-state-".concat(tv.uR());
    this._promptStateWorkspaceMigration = i._(
      n._(
        i._(
          {
            migrationId,
            activePrompt: this._getActiveTextPrompt(),
          },
          acceptedTask
            ? {
                acceptedTask,
              }
            : {},
        ),
        {
          promptContext: this._getActivePromptContext(),
          promptReactionKey: this._getPromptReactionKey(),
        },
      ),
      promptTracking
        ? {
            promptTracking,
          }
        : {},
    );
    return migrationId;
  }
  _finishPromptStateWorkspaceMigration(e) {
    let t;
    if (
      e !== undefined &&
      ((t = this._promptStateWorkspaceMigration) == null
        ? undefined
        : t.migrationId) === e
    ) {
      this._invalidatePromptStateWorkspaceMigration();
    }
  }
  _getAcceptedTask() {
    return this.tasks.find((e) => e.peTaskId === this._state.acceptedPeTaskId);
  }
  _invalidatePromptStateWorkspaceMigration() {
    this._promptStateWorkspaceMigration = undefined;
  }
  _syncPromptEnhancementExperimentConfig() {
    const e =
      this._dreaminaConfigurationService.abTestManager.getAbTestValueSync(
        tS.ob.EnableVideoPeAsyncConfirm,
        false,
      );
    this._state.isPeAsyncConfirmEnabled = tL(e);
  }
  _refreshPromptEnhancementExperimentConfig() {
    return a
      ._(function* () {
        const e = ++this._experimentConfigRequestId;
        try {
          const t =
            yield this._dreaminaConfigurationService.abTestManager.getAbTestValue(
              tS.ob.EnableVideoPeAsyncConfirm,
              false,
            );
          if (e !== this._experimentConfigRequestId) {
            return;
          }
          this._state.isPeAsyncConfirmEnabled = tL(t);
        } catch (e) {}
      })
      .call(this);
  }
  _clearTasksLocally(e) {
    const t = (e == null ? undefined : e.preservePromptState)
      ? this._getPromptStateTasksForPreservation()
      : [];
    const r = (e == null ? undefined : e.preservePromptState)
      ? this._getAcceptedPeTaskIdForPreservation()
      : undefined;
    const a = (e == null ? undefined : e.preservePromptState)
      ? this._getPromptTrackingForPreservation()
      : undefined;
    this._invalidateActivePromptApplyRequest();
    this._listRequestId += 1;
    this._clearGuideTimer();
    this._clearGuideVisibleTimer();
    this._clearAllTaskStatusMonitors();
    this._abortAllTaskRequests();
    this._taskRequestIds.clear();
    this._clearPlusOneTimer();
    this._state.tasks = t;
    this._state.acceptedPeTaskId = r;
    this._state.showGuide = false;
    this._state.showPlusOne = false;
    this._state.isLoadingPreviousTasks = false;
    this._state.hasMorePreviousTasks = false;
    this._state.nextTaskListOffset = 0;
    this._state.totalTaskCount = t.length;
    this._state.promptTracking = a;
  }
  _getPromptStateTasksForPreservation() {
    let e;
    const t = this._getCachedPromptStateForCurrentTaskListContext();
    return this._mergeTasks([
      ...this._getActivePromptStateTasks(),
      ...((e = t == null ? undefined : t.tasks) != null ? e : []),
    ]);
  }
  _getActivePromptStateTasks() {
    let e;
    let t;
    let r;
    let a;
    const i = this._getAcceptedTask();
    const n = (e = this._state.promptTracking) == null ? undefined : e.task;
    const s =
      (t = this._promptStateWorkspaceMigration) == null
        ? undefined
        : t.acceptedTask;
    const o =
      (a = this._promptStateWorkspaceMigration) == null ||
      (r = a.promptTracking) == null
        ? undefined
        : r.task;
    return this._mergeTasks([i, n, s, o].filter((e) => !!e));
  }
  _getAcceptedPeTaskIdForPreservation() {
    let e;
    let t;
    let r;
    let a;
    let i;
    if (
      (e =
        (t = this._state.acceptedPeTaskId) != null
          ? t
          : (a = this._promptStateWorkspaceMigration) == null ||
              (r = a.acceptedTask) == null
            ? undefined
            : r.peTaskId) != null
    ) {
      return e;
    }
    if ((i = this._getCachedPromptStateForCurrentTaskListContext()) == null) {
      return undefined;
    }
    return i.acceptedPeTaskId;
  }
  _getPromptTrackingForPreservation() {
    let e;
    let t;
    let r;
    let a;
    if (
      (e =
        (t = this._state.promptTracking) != null
          ? t
          : (r = this._promptStateWorkspaceMigration) == null
            ? undefined
            : r.promptTracking) != null
    ) {
      return e;
    }
    if ((a = this._getCachedPromptStateForCurrentTaskListContext()) == null) {
      return undefined;
    }
    return a.promptTracking;
  }
  _shouldPreservePromptStateForTaskListRefresh() {
    return (
      this._shouldPreservePromptStateForActiveMigration() ||
      this._shouldPreservePromptStateForCurrentTaskListScope()
    );
  }
  _shouldPreservePromptStateForActiveMigration() {
    const _promptStateWorkspaceMigration = this._promptStateWorkspaceMigration;
    return (
      _promptStateWorkspaceMigration !== undefined &&
      (this._getAcceptedTask() !== undefined ||
        this._state.promptTracking !== undefined ||
        _promptStateWorkspaceMigration.acceptedTask !== undefined ||
        _promptStateWorkspaceMigration.promptTracking !== undefined)
    );
  }
  _shouldPreservePromptStateForCurrentTaskListScope() {
    let e;
    const t = [
      this._getAcceptedTask(),
      (e = this._state.promptTracking) == null ? undefined : e.task,
    ].filter((e) => !!e);
    return (
      t.length > 0 && t.every((e) => this._isTaskInCurrentTaskListScope(e))
    );
  }
  _hasCachedPromptStateForCurrentTaskListContext() {
    return this._getCachedPromptStateForCurrentTaskListContext() !== undefined;
  }
  _isTaskInCurrentTaskListScope(e) {
    const t = this._getTaskListWorkspaceId();
    if (t !== undefined) {
      return String(e.workspaceId) === this._serializeWorkspaceId(t);
    }
    return this._usesUnassociatedTaskList() && e.workspaceId === undefined;
  }
  _cachePromptStateForTaskListContext(e) {
    if (e) {
      let t;
      let r;
      let a;
      let i;
      let n;
      const tasks = this._getActivePromptStateTasks();
      const o =
        (t = this._state.acceptedPeTaskId) != null
          ? t
          : (i = this._promptStateWorkspaceMigration) == null ||
              (a = i.acceptedTask) == null
            ? undefined
            : a.peTaskId;
      const d =
        (r = this._state.promptTracking) != null
          ? r
          : (n = this._promptStateWorkspaceMigration) == null
            ? undefined
            : n.promptTracking;
      if (o === undefined && d === undefined) {
        return void this._promptStateCacheByTaskListContextKey.delete(e);
      }
      this._promptStateCacheByTaskListContextKey.set(e, {
        promptReactionKey: this._getPromptReactionKey(),
        tasks,
        acceptedPeTaskId: o,
        promptTracking: d,
      });
    }
  }
  _getCachedPromptStateForCurrentTaskListContext() {
    const e = this._promptStateCacheByTaskListContextKey.get(
      this._getTaskListContextKey(),
    );
    if (e && e.promptReactionKey === this._getPromptReactionKey()) {
      const t = e.tasks.filter((e) => this._isTaskInCurrentTaskListScope(e));
      const r =
        e.acceptedPeTaskId && t.some((t) => t.peTaskId === e.acceptedPeTaskId)
          ? e.acceptedPeTaskId
          : undefined;
      const a = e.promptTracking
        ? t.find((t) => {
            var r;
            return (
              t.peTaskId ===
              ((r = e.promptTracking) == null ? undefined : r.task.peTaskId)
            );
          })
        : undefined;
      const s =
        e.promptTracking && a
          ? n._(i._({}, e.promptTracking), {
              task: a,
            })
          : undefined;
      if (r !== undefined || s !== undefined) {
        return n._(i._({}, e), {
          tasks: t,
          acceptedPeTaskId: r,
          promptTracking: s,
        });
      }
    }
  }
  _deleteCachedPromptStateForCurrentTaskListContext() {
    this._promptStateCacheByTaskListContextKey.delete(
      this._getTaskListContextKey(),
    );
  }
  _deleteCachedPromptStateContainingTask(e) {
    Array.from(this._promptStateCacheByTaskListContextKey.entries()).forEach(
      (t) => {
        var r;
        var [a, i] = t;
        if (
          i.acceptedPeTaskId === e ||
          ((r = i.promptTracking) == null ? undefined : r.task.peTaskId) ===
            e ||
          i.tasks.some((t) => t.peTaskId === e)
        ) {
          this._promptStateCacheByTaskListContextKey.delete(a);
        }
      },
    );
  }
  _registerContentGeneratorVariantReaction() {
    this._register({
      dispose: G.mJ(
        () => this._getVisibleContentGeneratorVariant(),
        (e) => {
          if (e !== undefined) {
            var t = this._lastVisibleContentGeneratorVariantForPromptState;
            this._lastVisibleContentGeneratorVariantForPromptState = e;
            if (t !== undefined && t !== e) {
              this._discardAcceptedPromptStateForContentGeneratorVariantChange();
            }
          }
        },
        {
          fireImmediately: true,
        },
      ),
    });
  }
  _registerPromptReaction() {
    this._register({
      dispose: G.mJ(
        () =>
          "".concat(this.isEnabled, ":").concat(this._getPromptReactionKey()),
        (e) => {
          this._invalidateActivePromptApplyRequest();
          this._clearGuideTimer();
          if (e.startsWith("true:")) {
            if (this._getActiveTextPrompt().trim()) {
              if (!this._guideHasShown) {
                this.dismissGuide();
                this._scheduleGuide();
              }
            } else {
              this.dismissGuide();
            }
          } else {
            this._clearTasksLocally({
              preservePromptState:
                this._shouldPreservePromptStateForActiveMigration(),
            });
          }
        },
        {
          fireImmediately: true,
        },
      ),
    });
  }
  _registerTaskListReaction() {
    this._register({
      dispose: G.mJ(
        () => this._getTaskListContextKey(),
        (e, t) => {
          this._cachePromptStateForTaskListContext(t);
          this._clearTasksLocally({
            preservePromptState:
              this._shouldPreservePromptStateForTaskListRefresh() ||
              this._hasCachedPromptStateForCurrentTaskListContext(),
          });
          if (this.isEnabled && this._canQueryCurrentTaskList()) {
            this._queryCurrentTaskList();
          }
        },
        {
          fireImmediately: true,
        },
      ),
    });
  }
  _scheduleGuide() {
    this._clearGuideTimer();
    if (
      !(
        !this.isEnabled ||
        this._guideHasShown ||
        this._promptComposing ||
        !this._getActiveTextPrompt().trim() ||
        this.tasks.length ||
        this.isEnhancing
      )
    ) {
      this._guideTimer = setTimeout(() => {
        this._guideTimer = undefined;
        if (
          !this._guideHasShown &&
          this.isEnabled &&
          !this._promptComposing &&
          this._getActiveTextPrompt().trim() &&
          !this.tasks.length &&
          !this.isEnhancing
        ) {
          this._markGuideShown();
          this._state.showGuide = true;
          this._scheduleGuideVisibleDismiss();
        }
      }, 500);
    }
  }
  _scheduleGuideVisibleDismiss() {
    this._clearGuideVisibleTimer();
    this._guideVisibleTimer = setTimeout(() => {
      this._guideVisibleTimer = undefined;
      this._state.showGuide = false;
    }, 3000);
  }
  _restoreGuideState() {
    const e = !!tg.Ay.get(this._guideStorageKey);
    this._guideHasShown = e;
    this._state.isGuideBadgeDismissed = !!tg.Ay.get(this._guideBadgeStorageKey);
  }
  _markGuideShown() {
    this._guideHasShown = true;
    tg.Ay.set(this._guideStorageKey, true);
  }
  _dismissGuideBadge() {
    this._state.isGuideBadgeDismissed = true;
    tg.Ay.set(this._guideBadgeStorageKey, true);
  }
  _getPromptReactionKey() {
    return ""
      .concat(this._getActivePromptContext(), ":")
      .concat(this._getMediaDesc(), ":")
      .concat(this._getFirstLastFrameReactionKey(), ":")
      .concat(this._getActiveTextPrompt().trim());
  }
  _getVisibleContentGeneratorVariant() {
    return this._videoGeneratorManager.contentGeneratorManager
      .visibleContentGeneratorVariant;
  }
  _discardAcceptedPromptStateForContentGeneratorVariantChange() {
    this._invalidateActivePromptApplyRequest();
    this._invalidatePromptStateWorkspaceMigration();
    this._promptStateCacheByTaskListContextKey.clear();
    this._state.acceptedPeTaskId = undefined;
    this._state.promptTracking = undefined;
  }
  _getActivePromptContext() {
    if (this._hasFirstLastFrameReferences()) {
      return ty.Iw.F2V;
    }
    if (this._getMediaDesc().trim()) {
      return ty.Iw.R2V;
    }
    return ty.Iw.T2V;
  }
  _hasFirstLastFrameReferences() {
    const { data, featureManager } = this._videoGeneratorManager;
    return (
      featureManager.data.feature === "firstLastFrames" &&
      !!(data.firstFrameImage || data.lastFrameImage)
    );
  }
  _getFirstLastFrameReactionKey() {
    let e;
    let t;
    let r;
    let a;
    const { data, featureManager } = this._videoGeneratorManager;
    if (featureManager.data.feature !== "firstLastFrames") {
      return "";
    }
    return [
      (e = data.firstFrameImage) == null ? undefined : e.id,
      (t = data.firstFrameImage) == null ? undefined : t.uri,
      (r = data.lastFrameImage) == null ? undefined : r.id,
      (a = data.lastFrameImage) == null ? undefined : a.uri,
    ]
      .filter(Boolean)
      .join(":");
  }
  _queryCurrentTaskList(e) {
    return a
      ._(function* () {
        let t;
        const _listRequestId = this._listRequestId;
        const a =
          e === undefined
            ? this._getCurrentTaskListSyncScope()
            : {
                workspaceId: e,
              };
        const s =
          e === undefined
            ? this._getCurrentTaskListFilter()
            : n._(i._({}, this._getBaseTaskListFilter()), {
                workspaceId: this._serializeWorkspaceId(e),
              });
        const o = this._getTaskListContextKey();
        this._state.isLoadingPreviousTasks = false;
        this._state.hasMorePreviousTasks = false;
        this._state.nextTaskListOffset = 0;
        this._state.totalTaskCount = 0;
        if (s) {
          const d = yield this._queryTaskList(0, s);
          if (
            !(
              _listRequestId !== this._listRequestId ||
              !this.isEnabled ||
              (e === undefined && o !== this._getTaskListContextKey())
            )
          ) {
            if (d.ok) {
              this._syncServerTasksFromList(d.value.tasks, a);
              this._state.hasMorePreviousTasks = !!d.value.hasMore;
              this._state.nextTaskListOffset =
                (t = d.value.nextOffset) != null ? t : d.value.tasks.length;
              this._syncTaskListTotal(d.value.total);
            }
          }
        }
      })
      .call(this);
  }
  _queryTaskList(offset, listFilter) {
    return this._promptEnhancementDataService.queryTasks({
      listFilter,
      offset,
      limit: 20,
      includeInputSnapshot: true,
      includeDeleted: false,
    });
  }
  _syncServerTasksFromList(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : this._getCurrentTaskListSyncScope();
    const r = e
      .map((e) => this._createLocalTaskFromServerTask(e))
      .filter((e) => !!e);
    const a = new Set(r.map((e) => e.peTaskId));
    const { workspaceId } = t;
    const n =
      workspaceId === undefined
        ? undefined
        : this._serializeWorkspaceId(workspaceId);
    const s = this.tasks.filter(
      (e) =>
        !a.has(e.peTaskId) &&
        (t.withoutWorkspaceId
          ? e.workspaceId === undefined
          : n !== undefined && String(e.workspaceId) === n),
    );
    this._state.tasks = this._mergeTasks([...r, ...s]);
    this._syncLocalTaskListTotal();
    const o = this.tasks.filter((e) => e.status === "enhancing");
    const d = r.filter((e) => e.status === "enhancing");
    const u = new Set(o.map((e) => e.peTaskId));
    this._taskStatusMonitors.forEach((e, t) => {
      if (!u.has(t)) {
        this._clearTaskStatusMonitor(t);
        this._clearTaskRequest(t);
      }
    });
    d.forEach((e) => {
      if (!this._taskStatusMonitors.has(e.peTaskId)) {
        var t = this._createTaskRequestId(e.peTaskId);
        this._startTaskStatusMonitor(e.peTaskId, t);
      }
    });
  }
  _createLocalTaskFromServerTask(e) {
    const originalPrompt =
      (m = e.inputSnapshot) == null || (c = m.peClientInput) == null
        ? undefined
        : c.userPrompt;
    if (originalPrompt) {
      const r = this._parseRichPromptSnapshot(
        (p = e.inputSnapshot) == null ? undefined : p.richPromptSnapshot,
      );
      const originalPromptSegments =
        (h = e.inputSnapshot) == null ? undefined : h.promptSegments;
      const i = (_ = e.peResult) == null ? undefined : _.optimizedPrompt;
      const n = i ? tq(i) : undefined;
      const s =
        (v = e.peResult) == null ? undefined : v.optimizedPromptSegments;
      const o = n && n !== i ? tH(s) : s;
      const d = n ? this._normalizeOptimizedPromptSegments(o, r) : o;
      if (this._isFailedServerTask(e) || this._isRunningServerTaskExpired(e)) {
        var u;
        var l;
        var c;
        var m;
        var p;
        var h;
        var _;
        var v;
        let g;
        let f;
        let M;
        const y =
          this._isRunningServerTaskExpired(e) && !this._isFailedServerTask(e)
            ? this._getPromptEnhancementFailedToast()
            : this._getServerTaskProgressText(e);
        return {
          displayNo: e.displayNo,
          peTaskId: e.peTaskId,
          workspaceId: e.workspaceId,
          status: "failed",
          promptContext: e.promptContext,
          originalPrompt,
          originalRichPrompt: r,
          originalPromptSegments,
          progressText: y,
          errorMessage: y,
          createdAt: (g = e.createTimeMs) != null ? g : Date.now(),
          processingStartedAt:
            (f = e.modifyTimeMs) != null ? f : e.createTimeMs,
          completedAt: (M = e.finishTimeMs) != null ? M : Date.now(),
        };
      }
      const S = e.status === ty.zT.Succeeded;
      return {
        displayNo: e.displayNo,
        peTaskId: e.peTaskId,
        workspaceId: e.workspaceId,
        status: S ? "succeeded" : "enhancing",
        promptContext: e.promptContext,
        originalPrompt,
        originalRichPrompt: r,
        originalPromptSegments,
        optimizedPrompt: n,
        optimizedPromptSegments: d,
        progressText: this._getServerTaskProgressText(e),
        createdAt: (u = e.createTimeMs) != null ? u : Date.now(),
        processingStartedAt: (l = e.modifyTimeMs) != null ? l : e.createTimeMs,
        completedAt: e.finishTimeMs,
      };
    }
  }
  _getServerTaskProgressText(e) {
    switch (e.status) {
      case ty.zT.Succeeded:
        let t;
        if ((t = e.peResult) == null ? undefined : t.optimizedPrompt) {
          return this._getPromptEnhancementTaskText(e.displayNo);
        }
        return this._getPromptEnhancementFailedToast();
      case ty.zT.Failed:
      case ty.zT.Timeout:
      case ty.zT.Deleted:
        return this._getPromptEnhancementErrorMessage(e.errorInfo);
      case ty.zT.Created:
      case ty.zT.Running:
      default:
        return this._getPromptEnhancementRunningText();
    }
  }
  _isFailedServerTask(e) {
    let t;
    return (
      e.status === ty.zT.Failed ||
      e.status === ty.zT.Timeout ||
      e.status === ty.zT.Deleted ||
      (e.status === ty.zT.Succeeded &&
        !((t = e.peResult) == null ? undefined : t.optimizedPrompt))
    );
  }
  _isRunningServerTaskExpired(e) {
    let t;
    return (
      (e.status === ty.zT.Created || e.status === ty.zT.Running) &&
      this._isTaskExpired((t = e.modifyTimeMs) != null ? t : e.createTimeMs)
    );
  }
  _isTaskExpired(e) {
    return e !== undefined && Date.now() - e > 300000;
  }
  _createPromptEnhancementTask(e, t, r) {
    return a
      ._(function* () {
        let a;
        let s;
        let o;
        let d;
        let e_peTaskId = e.peTaskId;
        if (!this._isCurrentTaskRequest(e_peTaskId, t)) {
          return;
        }
        if (
          !((a = e.createInputSnapshot) == null ? undefined : a.modelReqKey)
        ) {
          return void this._failTask(
            e_peTaskId,
            this._getPromptEnhancementFailedToast(),
          );
        }
        const { generationParams, mediaDesc, modelReqKey } =
          e.createInputSnapshot;
        const p = new AbortController();
        this._requestAbortControllers.set(e_peTaskId, p);
        const h = yield this._hydrateRichPromptResources(e.originalRichPrompt);
        if (this._isCurrentTaskRequest(e_peTaskId, t)) {
          if (h !== e.originalRichPrompt) {
            this._patchTask(e.peTaskId, {
              originalRichPrompt: h,
            });
          }
          const richPromptSnapshot = this._serializeRichPromptSnapshot(h);
          try {
            o = yield this._promptEnhancementDataService.createTasks(
              {
                items: [
                  n._(
                    i._(
                      {
                        peTaskId: e.peTaskId,
                      },
                      r === undefined
                        ? {}
                        : {
                            workspaceId: this._serializeWorkspaceId(r),
                          },
                    ),
                    {
                      contentGeneratorType: ty.vP.Video,
                      promptContext: e.promptContext,
                      inputSnapshot: i._(
                        {
                          peClientInput: {
                            userPrompt: e.originalPrompt,
                            mediaDesc,
                          },
                          modelReqKey,
                          generationParams,
                        },
                        (
                          (d = e.originalPromptSegments) == null
                            ? undefined
                            : d.length
                        )
                          ? {
                              promptSegments: e.originalPromptSegments,
                            }
                          : {},
                        richPromptSnapshot
                          ? {
                              richPromptSnapshot,
                            }
                          : {},
                      ),
                    },
                  ),
                ],
              },
              {
                signal: p.signal,
              },
            );
          } catch (e) {
            if (this._isCurrentTaskRequest(e_peTaskId, t)) {
              this._failTask(
                e_peTaskId,
                this._getPromptEnhancementFailedToast(),
              );
            }
            return;
          }
          if (this._isCurrentTaskRequest(e_peTaskId, t)) {
            if (!o.ok) {
              return void this._failTask(
                e_peTaskId,
                this._getPromptEnhancementRequestErrorMessage(o.msg),
              );
            }
            const [v] = o.value.results;
            if (!v || v.errorInfo) {
              const g = this._getPromptEnhancementErrorMessage(
                v == null ? undefined : v.errorInfo,
              );
              if (
                this._isPromptEnhancementToastOnlyError(
                  v == null ? undefined : v.errorInfo,
                )
              ) {
                this._removeTaskLocally(e_peTaskId);
                th.A.normal(g);
              } else {
                this._failTask(e_peTaskId, g);
              }
              return;
            }
            const f =
              v.peTaskId || ((s = v.task) == null ? undefined : s.peTaskId);
            if (!f) {
              return void this._failTask(
                e_peTaskId,
                this._getPromptEnhancementFailedToast(),
              );
            }
            this._transferTaskRequestContext(e_peTaskId, f);
            this._patchTask(e_peTaskId, {
              peTaskId: f,
              progressText: this._getPromptEnhancementRunningText(),
            });
            e_peTaskId = f;
            const M = r != null ? r : this._getAssociatedWorkspaceId();
            if (r === undefined && M !== undefined) {
              this._associateUnassociatedTasksWithWorkspace(M).then(() => {
                this._queryCurrentTaskList(M);
              });
            }
            if (!(v.task && this._syncServerTask(e_peTaskId, v.task))) {
              this._startTaskStatusMonitor(e_peTaskId, t);
            }
          }
        }
      })
      .call(this);
  }
  _retryPromptEnhancementTask(e, t) {
    return a
      ._(function* () {
        if (this._isCurrentTaskRequest(e.peTaskId, t)) {
          let r;
          const a = new AbortController();
          this._requestAbortControllers.set(e.peTaskId, a);
          try {
            r = yield this._promptEnhancementDataService.retryTasks(
              {
                items: [
                  {
                    peTaskId: e.peTaskId,
                  },
                ],
              },
              {
                signal: a.signal,
              },
            );
          } catch (r) {
            if (this._isCurrentTaskRequest(e.peTaskId, t)) {
              this._failTask(
                e.peTaskId,
                this._getPromptEnhancementFailedToast(),
              );
            }
            return;
          }
          if (this._isCurrentTaskRequest(e.peTaskId, t)) {
            if (!r.ok) {
              return void this._failTask(
                e.peTaskId,
                this._getPromptEnhancementRequestErrorMessage(r.msg),
              );
            }
            const [i] = r.value.results;
            if (!i || i.errorInfo) {
              this._failTask(
                e.peTaskId,
                this._getPromptEnhancementErrorMessage(
                  i == null ? undefined : i.errorInfo,
                ),
              );
            } else if (!(i.task && this._syncServerTask(e.peTaskId, i.task))) {
              this._patchTask(e.peTaskId, {
                progressText: this._getPromptEnhancementRunningText(),
              });
              this._startTaskStatusMonitor(e.peTaskId, t);
            }
          }
        }
      })
      .call(this);
  }
  _startTaskStatusMonitor(e, t) {
    this._clearTaskStatusMonitor(e);
    const r = this._requestAbortControllers.get(e);
    const a = new tM.E(
      {
        methodId: tR.NY.PromptEnhancementTaskChange,
        timeout: 20000,
        websocketMessageHandler: (r) =>
          this._handleTaskStatusMonitorMessage(e, t, r),
        pollingHandler: () => this._queryPromptEnhancementTask(e, t),
        dynamicPollingInterval: {
          minInterval: 6000,
          maxInterval: 100000,
          step: 1000,
          resetOnChange: true,
        },
        signal: r == null ? undefined : r.signal,
        websocketRetryOptions: {
          maxRetries: 5,
          initialDelay: 2000,
          maxDelay: 180000,
          factor: 2,
          jitter: true,
        },
      },
      this._dreaminaWebsocketService,
    );
    this._taskStatusMonitors.set(e, a);
    a.startListening();
    this._queryPromptEnhancementTask(e, t);
  }
  _registerPromptEnhancementWebsocketHandler() {
    this._register(
      this._dreaminaWebsocketService.registerEventHandler(
        tR.NY.PromptEnhancementTaskChange,
        this._handlePromptEnhancementTaskChange,
      ),
    );
  }
  _handleTaskStatusMonitorMessage(e, t, r) {
    if (
      (r == null ? undefined : r.peTaskId) === e &&
      this._isCurrentTaskRequest(e, t)
    ) {
      if (this.tasks.find((t) => t.peTaskId === e)) {
        return this._queryPromptEnhancementTask(e, t);
      }
      return Promise.resolve({
        accepted: true,
        done: true,
      });
    }
    return Promise.resolve({
      accepted: false,
      done: false,
    });
  }
  _queryPromptEnhancementTaskByPeTaskId(e) {
    return a
      ._(function* () {
        if (!this.tasks.find((t) => t.peTaskId === e) || !this.isEnabled) {
          return;
        }
        let t;
        let r;
        const a = yield this._promptEnhancementDataService.queryTasks({
          peTaskIds: [e],
          includeInputSnapshot: false,
        });
        if (this.isEnabled) {
          const i = this.tasks.find((t) => t.peTaskId === e);
          if (i) {
            if (!a.ok) {
              const n = this._getPromptEnhancementQueryRequestErrorMessage(
                a.msg,
              );
              if (n) {
                this._failTask(e, n);
              }
              return;
            }
            const s =
              (t = (r = a.value.taskMap) == null ? undefined : r[e]) != null
                ? t
                : a.value.tasks.find((t) => t.peTaskId === e);
            if (s && this._syncServerTask(i.peTaskId, s)) {
              this._clearTaskStatusMonitor(e);
            }
          }
        }
      })
      .call(this);
  }
  _queryPromptEnhancementTask(e, t) {
    return a
      ._(function* () {
        let r;
        let a;
        let i;
        let n;
        let s;
        const o = this.tasks.find((t) => t.peTaskId === e);
        if (!o || !this._isCurrentTaskRequest(e, t)) {
          return {
            accepted: false,
            done: true,
          };
        }
        if (
          this._isTaskExpired(
            (r = o.processingStartedAt) != null ? r : o.createdAt,
          )
        ) {
          this._failTask(e, this._getPromptEnhancementFailedToast());
          return {
            accepted: true,
            done: true,
            changed: true,
          };
        }
        const d = yield this._promptEnhancementDataService.queryTasks(
          {
            peTaskIds: [e],
            includeInputSnapshot: false,
          },
          {
            signal:
              (i = this._requestAbortControllers.get(e)) == null
                ? undefined
                : i.signal,
          },
        );
        if (!this._isCurrentTaskRequest(e, t)) {
          return {
            accepted: false,
            done: true,
          };
        }
        if (!d.ok) {
          const u = this._getPromptEnhancementQueryRequestErrorMessage(d.msg);
          if (u) {
            this._failTask(e, u);
            return {
              accepted: true,
              done: true,
              changed: true,
            };
          }
          return {
            accepted: false,
            done: false,
          };
        }
        const l =
          (a = (n = d.value.taskMap) == null ? undefined : n[e]) != null
            ? a
            : d.value.tasks.find((t) => t.peTaskId === e);
        if (l) {
          return {
            accepted: true,
            done: this._syncServerTask(e, l),
            changed: true,
          };
        }
        if ((s = d.value.notFoundTaskIds) == null ? undefined : s.includes(e)) {
          this._failTask(e, this._getPromptEnhancementTaskNotFoundText());
          return {
            accepted: true,
            done: true,
            changed: true,
          };
        }
        return {
          accepted: false,
          done: false,
        };
      })
      .call(this);
  }
  _syncServerTask(e, t) {
    const r = t.peTaskId || e;
    this._transferTaskRequestContext(e, r);
    const a = {
      peTaskId: r,
    };
    if (t.displayNo !== undefined) {
      a.displayNo = t.displayNo;
    }
    if (t.workspaceId !== undefined) {
      a.workspaceId = t.workspaceId;
    }
    this._patchTask(e, a);
    switch (t.status) {
      case ty.zT.Succeeded:
        let i;
        let n;
        const s = (i = t.peResult) == null ? undefined : i.optimizedPrompt;
        if (!s) {
          this._failTask(r, this._getPromptEnhancementFailedToast());
          return true;
        }
        this._completeTask(
          r,
          s,
          (n = t.peResult) == null ? undefined : n.optimizedPromptSegments,
        );
        return true;
      case ty.zT.Failed:
      case ty.zT.Timeout:
      case ty.zT.Deleted:
        this._failTask(r, this._getPromptEnhancementErrorMessage(t.errorInfo));
        return true;
      case ty.zT.Created:
      case ty.zT.Running:
      default:
        this._patchTask(r, {
          progressText: this._getPromptEnhancementRunningText(),
        });
        return false;
    }
  }
  _createTaskRequestId(e) {
    const t = ++this._requestId;
    this._taskRequestIds.set(e, t);
    return t;
  }
  _isCurrentTaskRequest(e, t) {
    return this._taskRequestIds.get(e) === t && this.isEnabled;
  }
  _clearTaskRequest(e) {
    this._taskRequestIds.delete(e);
  }
  _transferTaskRequestContext(e, t) {
    if (e !== t) {
      const r = this._taskRequestIds.get(e);
      if (r !== undefined) {
        this._taskRequestIds.delete(e);
        this._taskRequestIds.set(t, r);
      }
      const a = this._requestAbortControllers.get(e);
      if (a) {
        this._requestAbortControllers.delete(e);
        this._requestAbortControllers.set(t, a);
      }
      const i = this._taskStatusMonitors.get(e);
      if (i) {
        this._taskStatusMonitors.delete(e);
        this._taskStatusMonitors.set(t, i);
      }
    }
  }
  _associateUnassociatedTasksWithWorkspace(e) {
    return a
      ._(function* () {
        const workspaceId = this._serializeWorkspaceId(e);
        const r = yield this._promptEnhancementDataService.updateTasks({
          workspaceId,
          withoutWorkspaceId: true,
          contentGeneratorType: ty.vP.Video,
        });
        return this._syncAssociatedTasks(r, e);
      })
      .call(this);
  }
  _syncAssociatedTasks(e, t) {
    if (e.ok) {
      const r = new Set();
      const a = [];
      e.value.results.forEach((e) => {
        if (!e.errorInfo) {
          var i;
          var n;
          var s =
            (i = (n = e.task) == null ? undefined : n.peTaskId) != null
              ? i
              : e.peTaskId;
          if (s) {
            r.add(s);
          }
          if (e.task) {
            return void a.push(e.task);
          }
          if (e.peTaskId) {
            this._patchTask(e.peTaskId, {
              workspaceId: this._serializeWorkspaceId(t),
            });
          }
        }
      });
      if (a.length) {
        this._syncServerTasksFromList(a, {
          workspaceId: t,
        });
      }
      return r;
    }
  }
  _restorePromptStateWorkspaceMigration(e, t, r) {
    if (e !== undefined) {
      const a = this._promptStateWorkspaceMigration;
      if (
        a &&
        a.migrationId === e &&
        this._canRestorePromptStateWorkspaceMigration(a)
      ) {
        const s = a.acceptedTask
          ? this._getMigratedPromptStateTask(a.acceptedTask, t, r)
          : undefined;
        if (s) {
          this._ensurePromptStateTaskInList(s);
          this._state.acceptedPeTaskId = s.peTaskId;
        }
        if (a.promptTracking) {
          const o = this._getMigratedPromptStateTask(
            a.promptTracking.task,
            t,
            r,
          );
          if (!o) {
            return;
          }
          this._state.promptTracking = n._(i._({}, a.promptTracking), {
            task: o,
          });
        }
      }
    }
  }
  _getMigratedPromptStateTask(e, t, r) {
    const a = this.tasks.find((t) => t.peTaskId === e.peTaskId);
    return (
      a ||
      ((r == null ? undefined : r.has(e.peTaskId))
        ? n._(i._({}, e), {
            workspaceId: this._serializeWorkspaceId(t),
          })
        : undefined)
    );
  }
  _ensurePromptStateTaskInList(e) {
    if (!this.tasks.some((t) => t.peTaskId === e.peTaskId)) {
      this._state.tasks = this._mergeTasks([...this.tasks, e]);
      this._syncLocalTaskListTotal();
    }
  }
  _canRestorePromptStateWorkspaceMigration(e) {
    return (
      this.isEnabled &&
      e.promptContext === this._getActivePromptContext() &&
      e.promptReactionKey === this._getPromptReactionKey() &&
      e.activePrompt === this._getActiveTextPrompt()
    );
  }
  _getAssociatedWorkspaceId() {
    if (!this._usesUnassociatedWorkspaceScope()) {
      const { isNewConversationMode, selectedWorkspaceId } =
        this._workspaceService.data;
      if (
        !isNewConversationMode &&
        typeof selectedWorkspaceId === "number" &&
        !(selectedWorkspaceId <= 0)
      ) {
        return selectedWorkspaceId;
      }
    }
  }
  _getTaskListContextKey() {
    return "".concat(this.isEnabled, ":").concat(this._getTaskListScopeKey());
  }
  _canQueryCurrentTaskList() {
    return this._getCurrentTaskListFilter() !== undefined;
  }
  _getCurrentTaskListFilter() {
    const e = this._getBaseTaskListFilter();
    const t = this._getTaskListWorkspaceId();
    if (t !== undefined) {
      return n._(i._({}, e), {
        workspaceId: this._serializeWorkspaceId(t),
      });
    }
    if (this._usesUnassociatedTaskList()) {
      return n._(i._({}, e), {
        withoutWorkspaceId: true,
      });
    }
  }
  _getUnassociatedTaskListFilter() {
    return n._(i._({}, this._getBaseTaskListFilter()), {
      withoutWorkspaceId: true,
    });
  }
  _usesUnassociatedTaskList() {
    return this._usesUnassociatedWorkspaceScope();
  }
  _usesUnassociatedWorkspaceScope() {
    return (
      this._isCurrentContentGeneratorWorkspaceIsolated() ||
      this._workspaceService.data.isNewConversationMode
    );
  }
  _getTaskListWorkspaceId() {
    if (!this._usesUnassociatedTaskList()) {
      return this._getAssociatedWorkspaceId();
    }
  }
  _getTaskListScopeKey() {
    if (this._usesUnassociatedTaskList()) {
      return "unassociated";
    }
    const e = this._getAssociatedWorkspaceId();
    if (e === undefined) {
      return "unavailable";
    }
    return "workspace:".concat(e);
  }
  _getCurrentTaskListSyncScope() {
    if (this._usesUnassociatedTaskList()) {
      return {
        withoutWorkspaceId: true,
      };
    }
    const e = this._getAssociatedWorkspaceId();
    if (e === undefined) {
      return {};
    }
    return {
      workspaceId: e,
    };
  }
  _isCurrentContentGeneratorWorkspaceIsolated() {
    let e;
    return (
      ((e =
        this._videoGeneratorManager.contentGeneratorManager
          .visibleContentGeneratorInstance) == null
        ? undefined
        : e.environment.workspaceStrategy) === "isolated"
    );
  }
  _getBaseTaskListFilter() {
    return {
      contentGeneratorType: ty.vP.Video,
      statusList,
    };
  }
  _serializeWorkspaceId(e) {
    return "".concat(e);
  }
  _getModelReqKey() {
    let e;
    let t;
    let r;
    const { data } = this._videoGeneratorManager;
    if (
      (e =
        (t = data.modelKey) != null
          ? t
          : (r = data.model) == null
            ? undefined
            : r.key) != null
    ) {
      return e;
    }
    return "";
  }
  _getCurrentModelSupportPromptEnhancement() {
    let e;
    let t;
    let r;
    const model = this._videoGeneratorManager.data.model;
    if (
      (model == null || (e = model.extra) == null
        ? undefined
        : e.supportPromptEnhancement) !== undefined
    ) {
      return !!model.extra.supportPromptEnhancement;
    }
    const i = this._getModelReqKey();
    return (
      !!i &&
      !!((r = this._videoGeneratorManager.metadata.models.find(
        (e) => e.key === i,
      )) == null || (t = r.extra) == null
        ? undefined
        : t.supportPromptEnhancement)
    );
  }
  _getGenerationParams() {
    const { data, featureManager } = this._videoGeneratorManager;
    return JSON.stringify({
      feature: featureManager.data.feature,
      aspectRatio: data.aspectRatio,
      resolution: data.resolution,
      durationMs: data.totalDurationMs,
      fps: data.fps,
      lensMovementRecipe: data.lensMovementRecipe,
      lensMovementStrength: data.lensMovementStrength,
    });
  }
  _getActiveTextPrompt() {
    return this._getActivePromptSnapshot().text;
  }
  _resolveActivePromptResources() {
    return a
      ._(function* () {
        const { data, featureManager, omniReferenceManager } =
          this._videoGeneratorManager;
        if (featureManager.data.feature === "firstLastFrames") {
          yield Promise.all(
            [data.firstFrameImage, data.lastFrameImage]
              .filter((e) => !!e)
              .map((e) => this._resolvePromptEnhancementResource(e)),
          );
        } else if (
          featureManager.data.feature === "omniReference" ||
          featureManager.data.feature === "videoEdit" ||
          featureManager.data.feature === "longVideo"
        ) {
          yield Promise.all(
            omniReferenceManager.data.references.map((e) =>
              this._resolvePromptEnhancementResource(e),
            ),
          );
        }
      })
      .call(this);
  }
  _resolvePromptEnhancementResource(e) {
    return a._(function* () {
      if (e instanceof eC.Vl || e instanceof $.p || e instanceof eE.e) {
        try {
          yield e.resolveUri();
        } catch (e) {}
      }
    })();
  }
  _getActivePromptSnapshot() {
    const { featureManager, data, multiFramesManager, omniReferenceManager } =
      this._videoGeneratorManager;
    switch (featureManager.data.feature) {
      case "multiFrames":
        const i = multiFramesManager.data.frames
          .map((e) => e.prompt)
          .filter(Boolean);
        return {
          text: i.length ? i.join("\n") : data.prompt,
        };
      case "longVideo":
      case "videoEdit":
      case "omniReference":
        const { promptContents, references } = omniReferenceManager.data;
        return this._createOmniReferencePromptSnapshot(
          promptContents,
          references,
        );
      case "firstLastFrames":
        return this._createFirstLastFramesPromptSnapshot();
      default:
        return {
          text: data.prompt,
        };
    }
  }
  _setActivePrompt(e, t, r) {
    const {
      featureManager,
      changePrompt,
      multiFramesManager,
      omniReferenceManager,
      continuationManager,
    } = this._videoGeneratorManager;
    switch (featureManager.data.feature) {
      case "multiFrames":
        if (!e) {
          multiFramesManager.data.frames.forEach((e, t) => {
            if (e.prompt && !e.isSegmentLocked) {
              multiFramesManager.changeFrameTransitionPrompt("", t);
            }
          });
          changePrompt("");
          break;
        }
        const d = multiFramesManager.data.frames.findIndex(
          (e) => !e.isSegmentLocked && (e.prompt || e.durationMs > 0),
        );
        if (d >= 0) {
          multiFramesManager.changeFrameTransitionPrompt(e, d);
        } else {
          changePrompt(e);
        }
        break;
      case "longVideo":
      case "videoEdit":
      case "omniReference":
        if (e && (t == null ? undefined : t.feature) === "omniReference") {
          const u = (r == null ? undefined : r.length)
            ? this._createOmniReferencePromptContentsFromPromptSegments(t, r, e)
            : this._createOmniReferencePromptContentsFromOptimizedPrompt(t, e);
          const preserveContinuation =
            continuationManager.data.enabled &&
            continuationManager.hasVideoContinuationPromptBlock(
              t.contents,
              continuationManager.data.originReferenceId,
            );
          const c = preserveContinuation
            ? continuationManager.restoreVideoContinuationPromptContents(
                u,
                t.contents,
              )
            : u;
          const m = this._createOmniReferenceResourcesFromSnapshots(
            t.resources,
          );
          if (m.length) {
            omniReferenceManager.setData(
              {
                references: m,
                promptContents: c,
              },
              {
                preserveContinuation,
                preserveVideoEditContext:
                  featureManager.data.feature === "videoEdit",
              },
            );
          } else {
            omniReferenceManager.changePromptContents(c);
          }
          break;
        }
        const p = omniReferenceManager.data.promptContents.filter(
          (e) => e.type !== "text",
        );
        omniReferenceManager.changePromptContents(
          e
            ? [
                ...p,
                {
                  type: "text",
                  text: e,
                },
              ]
            : [],
        );
        break;
      case "firstLastFrames":
        if ((t == null ? undefined : t.feature) === "firstLastFrames") {
          this._restoreFirstLastFramesRichPrompt(t);
        }
        changePrompt(e);
        break;
      default:
        changePrompt(e);
    }
  }
  _restoreTaskOriginalPrompt(e, t) {
    return a
      ._(function* () {
        const r = this._createPromptApplyGuard();
        const a = yield this._hydrateRichPromptResources(e.originalRichPrompt);
        if (this._isCurrentPromptApplyGuard(r)) {
          if (a !== e.originalRichPrompt) {
            this._patchTask(e.peTaskId, {
              originalRichPrompt: a,
            });
          }
          this._setActivePrompt(e.originalPrompt, a, e.originalPromptSegments);
          if (t == null ? undefined : t.markCleared) {
            this._markPromptEnhancementCleared(e);
          }
        }
      })
      .call(this);
  }
  _markPromptEnhancementAccepted(e) {
    this._state.promptTracking = {
      task: e,
      operationType: "accepted",
      promptAtOperation: this._getActiveTextPrompt(),
    };
  }
  _markPromptEnhancementCleared(e) {
    this._state.promptTracking = {
      task: e,
      operationType: "cleared",
      promptAtOperation: this._getActiveTextPrompt(),
    };
  }
  _createPromptApplyGuard() {
    return {
      requestId: ++this._activePromptApplyRequestId,
      promptReactionKey: this._getPromptReactionKey(),
    };
  }
  _isCurrentPromptApplyGuard(e) {
    return (
      this.isEnabled &&
      e.requestId === this._activePromptApplyRequestId &&
      e.promptReactionKey === this._getPromptReactionKey()
    );
  }
  _invalidateActivePromptApplyRequest() {
    this._activePromptApplyRequestId += 1;
  }
  _getTrackedPromptType(e, t, r) {
    const a = t !== r;
    if (e === "accepted") {
      if (a) {
        return "optimized_prompt_edited";
      }
      return "optimized_prompt";
    }
    if (a) {
      return "optimized_prompt_cleared_to_original_edited";
    }
    return "optimized_prompt_cleared_to_original";
  }
  _serializeRichPromptSnapshot(e) {
    if (e) {
      try {
        return JSON.stringify(this._createPersistableRichPromptSnapshot(e));
      } catch (e) {
        return;
      }
    }
  }
  _createPersistableRichPromptSnapshot(e) {
    let t;
    let r;
    let a;
    const s =
      (t = e.resources) == null
        ? undefined
        : t
            .map((e) => this._createPersistableResourceSnapshot(e))
            .filter((e) => !!e);
    switch (e.feature) {
      case "omniReference":
        return n._(i._({}, e), {
          contents: this._clonePromptContents(e.contents),
          references:
            (r = e.references) == null ? undefined : r.map((e) => i._({}, e)),
          resources: s,
        });
      case "firstLastFrames":
        return n._(i._({}, e), {
          contents: this._clonePromptContents(e.contents),
          references:
            (a = e.references) == null ? undefined : a.map((e) => i._({}, e)),
          resources: s,
        });
      default:
        return e;
    }
  }
  _createPersistableResourceSnapshot(e) {
    if (e.uri) {
      const t = {
        id: e.id,
        uri: e.uri,
        name: e.name,
      };
      switch (e.$type) {
        case eC.Vl.$type:
          return n._(
            i._(
              {
                $type: eC.Vl.$type,
              },
              t,
            ),
            {
              aigcItemId: e.aigcItemId,
              cacheKey: e.cacheKey,
              width: e.width,
              height: e.height,
            },
          );
        case $.p.$type:
          return n._(
            i._(
              {
                $type: $.p.$type,
              },
              t,
            ),
            {
              aigcItemId: e.aigcItemId,
              submitId: e.submitId,
              width: e.width,
              height: e.height,
              duration: e.duration,
            },
          );
        case eE.e.$type:
          const r = this._getUsableResourceUrl(e.url);
          return n._(
            i._(
              {
                $type: eE.e.$type,
              },
              t,
              r
                ? {
                    url: r,
                  }
                : {},
            ),
            {
              aigcItemId: e.aigcItemId,
              duration: e.duration,
            },
          );
        default:
          return;
      }
    }
  }
  _parseRichPromptSnapshot(e) {
    const t = e == null ? undefined : e.trim();
    if (t) {
      try {
        const r = JSON.parse(t);
        const a = Array.isArray(r.resources)
          ? r.resources
              .map((e) => this._parseResourceSnapshot(e))
              .filter((e) => !!e)
          : undefined;
        if (r.feature === "omniReference" && Array.isArray(r.contents)) {
          return {
            feature: "omniReference",
            contents: r.contents,
            references: Array.isArray(r.references) ? r.references : undefined,
            resources: a,
          };
        }
        if (r.feature === "firstLastFrames" && Array.isArray(r.contents)) {
          return {
            feature: "firstLastFrames",
            contents: r.contents,
            references: Array.isArray(r.references) ? r.references : undefined,
            resources: a,
          };
        }
      } catch (e) {}
    }
  }
  _hydrateRichPromptResources(e) {
    return a
      ._(function* () {
        if (!(e == null || (t = e.resources) == null ? undefined : t.length)) {
          return e;
        }
        var t;
        const r = yield Promise.all(
          e.resources.map((e) => this._hydrateResourceSnapshot(e)),
        );
        if (
          r.some((t, r) => {
            var a;
            return t !== ((a = e.resources) == null ? undefined : a[r]);
          })
        ) {
          return n._(i._({}, e), {
            resources: r,
          });
        }
        return e;
      })
      .call(this);
  }
  _hydrateResourceSnapshot(e) {
    return a
      ._(function* () {
        if (!e.uri) {
          return e;
        }
        switch (e.$type) {
          case eC.Vl.$type:
            return this._hydrateImageResourceSnapshot(e);
          case $.p.$type:
            return this._hydrateVideoResourceSnapshot(e);
          case eE.e.$type:
          default:
            return e;
        }
      })
      .call(this);
  }
  _hydrateImageResourceSnapshot(e) {
    return a
      ._(function* () {
        if (!e.uri) {
          return e;
        }
        try {
          const t = yield this._materialDataService.getUrlByUris({
            uris: [e.uri],
          });
          if (!t.ok) {
            return e;
          }
          const r = t.value.uri2Image[e.uri];
          if (!(r == null ? undefined : r.imageUrl)) {
            return e;
          }
          return n._(i._({}, e), {
            url: r.imageUrl,
            width: e.width || r.width,
            height: e.height || r.height,
          });
        } catch (t) {
          return e;
        }
      })
      .call(this);
  }
  _hydrateVideoResourceSnapshot(e) {
    return a
      ._(function* () {
        if (!e.uri) {
          return e;
        }
        try {
          let t;
          let r;
          let a;
          let s;
          const o = yield this._materialDataService.getVideoByVids({
            vids: [e.uri],
          });
          if (!o.ok) {
            return e;
          }
          const d =
            (a = o.value.vid2Video[e.uri]) == null ? undefined : a.originVideo;
          const u =
            (t = d == null ? undefined : d.videoUrl) != null
              ? t
              : d == null || (s = d.sceneVideoUrls) == null
                ? undefined
                : s.downloadUrl;
          const l = d == null ? undefined : d.coverUrl;
          const c = this._getUsableResourceUrl(e.url);
          if (!u && !l) {
            return e;
          }
          return n._(i._({}, e), {
            url: (r = u != null ? u : c) != null ? r : "",
            coverUrl: l != null ? l : this._getUsableResourceUrl(e.coverUrl),
            width: e.width || (d == null ? undefined : d.width) || 0,
            height: e.height || (d == null ? undefined : d.height) || 0,
            duration: e.duration || (d == null ? undefined : d.duration) || 0,
          });
        } catch (t) {
          return e;
        }
      })
      .call(this);
  }
  _restoreFirstLastFramesRichPrompt(e) {
    const t = new Map(
      this._createImageResourcesFromSnapshots(e.resources).map((e) => [
        e.id,
        e,
      ]),
    );
    const r = e.contents.find((e) => e.type === "firstFrameImage");
    const a = e.contents.find((e) => e.type === "lastFrameImage");
    this._applyFirstLastFrameResources(
      r ? t.get(r.id) : undefined,
      a ? t.get(a.id) : undefined,
    );
  }
  _applyFirstLastFrameResources(e, t) {
    return a
      ._(function* () {
        const {
          removeFirstFrameImage,
          removeLastFrameImage,
          setFirstFrameImage,
          setFirstLastFrameImages,
          setLastFrameImage,
        } = this._videoGeneratorManager;
        if (e && t) {
          yield setFirstLastFrameImages([e, t]);
        } else {
          if (!t) {
            removeLastFrameImage();
          }
          if (!e) {
            removeFirstFrameImage();
          }
          if (e) {
            yield setFirstFrameImage(e);
          }
          if (t) {
            yield setLastFrameImage(t);
          }
        }
      })
      .call(this);
  }
  _createFirstLastFramesPromptSnapshot() {
    const { data } = this._videoGeneratorManager;
    const contents = [];
    const r = [];
    const a = [];
    const i = (e, type, label) => {
      if (e) {
        a.push(e);
        var s = {
          type,
          id: e.id,
        };
        contents.push(s);
        r.push({
          referenceId: e.id,
          label,
          referenceType: ty.sW.Image,
          content: this._clonePromptContent(s),
        });
      }
    };
    i(data.firstFrameImage, "firstFrameImage", "首帧图");
    i(data.lastFrameImage, "lastFrameImage", "尾帧图");
    if (!contents.length) {
      return {
        text: data.prompt,
      };
    }
    const richPrompt = {
      feature: "firstLastFrames",
      contents,
      references: r,
      resources: this._createOmniReferenceResourceSnapshots(a),
    };
    return {
      text: data.prompt,
      richPrompt,
    };
  }
  _createOmniReferencePromptSnapshot(e, t) {
    const r = te.q(
      t.filter(
        (e) => e instanceof eC.Vl || e instanceof $.p || e instanceof eE.e,
      ),
    );
    const a = t
      .map((e) => this._createOmniReferenceResourceSnapshot(e, r))
      .filter((e) => !!e);
    const i = e
      .filter((e) => e.type !== "text" && e.type !== "continuationDuration")
      .map((e) => this._createOmniReferencePromptContentSnapshot(e, r))
      .filter((e) => !!e);
    const references = this._getUniqueReferenceSnapshots([...a, ...i]);
    return {
      text: this._formatPromptContents(e, (e) => {
        var t;
        if (e.type === "subject") {
          return e.subject.content.name;
        }
        if (e.type === "text") {
          return e.text;
        }
        if (e.type === "continuationDuration") {
          return "";
        }
        if ((t = r[e.id]) != null) {
          return t;
        }
        return "";
      }),
      promptSegments: e
        .map((e) => {
          if (e.type === "text") {
            return {
              type: ty.y9.Text,
              text: e.text,
            };
          }
          if (e.type !== "continuationDuration") {
            var t;
            var a =
              e.type === "subject"
                ? e.subject.content.name
                : (t = r[e.id]) != null
                  ? t
                  : "";
            if (a) {
              return {
                type: ty.y9.Reference,
                referenceType: this._getOmniReferenceType(e),
                referenceId: e.id,
                label: a,
              };
            }
            return undefined;
          }
        })
        .filter((e) => !!e),
      richPrompt: {
        feature: "omniReference",
        contents: this._clonePromptContents(e),
        references,
        resources: this._createOmniReferenceResourceSnapshots(t),
      },
    };
  }
  _createOmniReferenceResourceSnapshots(e) {
    return e
      .filter(
        (e) => e instanceof eC.Vl || e instanceof $.p || e instanceof eE.e,
      )
      .map((e) => this._createResourceSnapshotFromResource(e))
      .filter((e) => !!e);
  }
  _createResourceSnapshotFromResource(e) {
    return this._parseResourceSnapshot(e.toJSON());
  }
  _createOmniReferenceResourcesFromSnapshots(e) {
    let t;
    if (
      (t =
        e == null
          ? undefined
          : e
              .map((e) => this._createRestorableResourceSnapshot(e))
              .filter((e) => !!e)
              .map((e) => this._createOmniReferenceResourceFromSnapshot(e))
              .filter((e) => !!e)) != null
    ) {
      return t;
    }
    return [];
  }
  _createImageResourcesFromSnapshots(e) {
    return this._createOmniReferenceResourcesFromSnapshots(e).filter(
      (e) => e instanceof eC.Vl,
    );
  }
  _createOmniReferenceResourceFromSnapshot(e) {
    switch (e.$type) {
      case eC.Vl.$type:
        const t = n._(i._({}, e), {
          url: e.url,
        });
        return this._containerService.createInstance(eC.Vl, t);
      case $.p.$type:
        const r = n._(i._({}, e), {
          url: e.url,
        });
        return this._containerService.createInstance($.p, r);
      case eE.e.$type:
        const a = n._(i._({}, e), {
          url: e.url,
        });
        return this._containerService.createInstance(eE.e, a);
      default:
        return;
    }
  }
  _createRestorableResourceSnapshot(e) {
    const t = this._getUsableResourceUrl(e.url);
    if (t) {
      return n._(i._({}, e), {
        url: t,
      });
    }
    if (e.$type === eE.e.$type && e.uri) {
      return n._(i._({}, e), {
        url: "",
      });
    }
  }
  _getUsableResourceUrl(e) {
    if (!(!e || e.startsWith("blob:"))) {
      return e;
    }
  }
  _parseResourceSnapshot(e) {
    const t = this._getObjectEntries(e);
    if (t) {
      const r = this._getStringEntryValue(t, "$type");
      const uri = this._getStringEntryValue(t, "uri");
      const s = this._getStringEntryValue(t, "url");
      if (uri || s) {
        const o = {
          id: this._getResourceIdEntryValue(t, "id"),
          uri,
          name: this._getStringEntryValue(t, "name"),
          url: s,
        };
        switch (r) {
          case eC.Vl.$type:
            return n._(
              i._(
                {
                  $type: eC.Vl.$type,
                },
                o,
              ),
              {
                aigcItemId: this._getStringEntryValue(t, "aigcItemId"),
                cacheKey: this._getStringEntryValue(t, "cacheKey"),
                width: this._getNumberEntryValue(t, "width"),
                height: this._getNumberEntryValue(t, "height"),
              },
            );
          case $.p.$type:
            return n._(
              i._(
                {
                  $type: $.p.$type,
                },
                o,
              ),
              {
                aigcItemId: this._getStringEntryValue(t, "aigcItemId"),
                submitId: this._getStringEntryValue(t, "submitId"),
                coverUrl: this._getStringEntryValue(t, "coverUrl"),
                width: this._getNumberEntryValue(t, "width"),
                height: this._getNumberEntryValue(t, "height"),
                duration: this._getNumberEntryValue(t, "duration"),
              },
            );
          case eE.e.$type:
            return n._(
              i._(
                {
                  $type: eE.e.$type,
                },
                o,
              ),
              {
                aigcItemId: this._getStringEntryValue(t, "aigcItemId"),
                duration: this._getNumberEntryValue(t, "duration"),
              },
            );
          default:
            return;
        }
      }
    }
  }
  _getObjectEntries(e) {
    if (e && typeof e === "object") {
      return Object.entries(e);
    }
  }
  _getStringEntryValue(e, t) {
    let r;
    const a =
      (r = e.find((e) => {
        var [r] = e;
        return r === t;
      })) == null
        ? undefined
        : r[1];
    if (typeof a === "string") {
      return a;
    }
  }
  _getResourceIdEntryValue(e, t) {
    return this._getStringEntryValue(e, t);
  }
  _getNumberEntryValue(e, t) {
    let r;
    const a =
      (r = e.find((e) => {
        var [r] = e;
        return r === t;
      })) == null
        ? undefined
        : r[1];
    if (typeof a === "number") {
      return a;
    }
  }
  _createOmniReferenceResourceSnapshot(e, t) {
    if (e instanceof eC.Vl || e instanceof $.p || e instanceof eE.e) {
      return this._createOmniReferencePromptContentSnapshot(
        {
          type: e.type,
          id: e.id,
        },
        t,
      );
    }
  }
  _createOmniReferencePromptContentSnapshot(e, t) {
    let r;
    const a =
      e.type === "subject"
        ? e.subject.content.name
        : (r = t[e.id]) != null
          ? r
          : "";
    if (a) {
      const referenceType = this._getOmniReferenceType(e);
      return {
        referenceId: e.id,
        label: a,
        referenceType,
        content: this._clonePromptContent(e),
      };
    }
  }
  _createOmniReferencePromptContentsFromOptimizedPrompt(e, t) {
    return this._createPromptContentsFromOptimizedPrompt(
      e.contents,
      t,
      (e) => ({
        type: "text",
        text: e,
      }),
    );
  }
  _createOmniReferencePromptContentsFromPromptSegments(e, t, r) {
    let a;
    return this._createPromptContentsFromPromptSegments(
      e.contents,
      (a = e.references) != null ? a : [],
      t,
      r,
      (e) => ({
        type: "text",
        text: e,
      }),
    );
  }
  _createPromptContentsFromOptimizedPrompt(e, t, r) {
    const a = e.filter((e) => e.type !== "text");
    if (a.length) {
      return [...this._clonePromptContents(a), r(t)];
    }
    return [r(t)];
  }
  _createPromptContentsFromPromptSegments(e, t, r, a, i) {
    const n = this._getUniqueReferenceSnapshots(t);
    const s = r.flatMap((e) => {
      if (e.type === ty.y9.Reference) {
        var t;
        var r;
        var a = this._findReferenceSnapshotBySegment(n, e);
        if (a) {
          return [this._clonePromptContent(a.content)];
        }
        var s = (r = e.label) == null ? undefined : r.trim();
        if (s) {
          return [i(s)];
        }
        return [];
      }
      var o = (t = e.text) != null ? t : "";
      if (o) {
        return [i(o)];
      }
      return [];
    });
    if (s.length) {
      return s;
    }
    return this._createPromptContentsFromOptimizedPrompt(e, a, i);
  }
  _findReferenceSnapshotBySegment(e, t) {
    let r;
    const a = (r = t.referenceId) == null ? undefined : r.trim();
    if (a) {
      const i = e.find(
        (e) =>
          e.referenceId === a &&
          (!t.referenceType || e.referenceType === t.referenceType),
      );
      if (i) {
        return i;
      }
    }
  }
  _getUniqueReferenceSnapshots(e) {
    const t = new Map();
    e.forEach((e) => {
      t.set(this._getReferenceSnapshotKey(e), e);
    });
    return Array.from(t.values());
  }
  _getReferenceSnapshotKey(e) {
    if (e.referenceId) {
      return "".concat(e.referenceType, ":id:").concat(e.referenceId);
    }
    return "".concat(e.content.type, ":label:").concat(e.label);
  }
  _getOmniReferenceType(e) {
    switch (e.type) {
      case "subject":
        return ty.sW.Subject;
      case "video":
        return ty.sW.Video;
      case "audio":
        return ty.sW.Audio;
      default:
        return ty.sW.Image;
    }
  }
  _getRichPromptReferenceSnapshots(e) {
    let t;
    let r;
    if (
      (t =
        (r = e.references) == null
          ? undefined
          : r.map((e) => ({
              label: e.label,
              referenceType: e.referenceType,
              referenceId: e.referenceId,
              content: e.content,
            }))) != null
    ) {
      return t;
    }
    return [];
  }
  _formatPromptContents(e, t) {
    return e.map(t).join("");
  }
  _clonePromptContent(e) {
    return i._({}, e);
  }
  _clonePromptContents(e) {
    return e.map((e) => this._clonePromptContent(e));
  }
  _createResourceMediaToken(e, t) {
    if (e instanceof eC.Vl) {
      t.image += 1;
      return "<image".concat(t.image, ">");
    }
    if (e instanceof $.p) {
      t.video += 1;
      return "<video".concat(t.video, ">");
    }
    if (e instanceof eE.e) {
      t.audio += 1;
      return "<audio".concat(t.audio, ">");
    }
  }
  _createSubjectMediaToken(e, t) {
    const { content } = e.subject;
    if (content.audioInfo) {
      t.audio += 1;
      return "<audio".concat(t.audio, ">");
    }
    if (content.videoInfo) {
      t.video += 1;
      return "<video".concat(t.video, ">");
    }
    t.image += 1;
    return "<image".concat(t.image, ">");
  }
  _getMediaDesc() {
    const e = {
      image: 0,
      video: 0,
      audio: 0,
    };
    return [
      ...this._videoGeneratorManager.data.references
        .map((t) => this._formatResourceMediaDesc(t, e))
        .filter((e) => !!e),
      ...this._getSubjectMediaDescriptions(e),
    ].join("\n");
  }
  _formatResourceMediaDesc(e, t) {
    const r = this._createResourceMediaToken(e, t);
    if (e instanceof eC.Vl) {
      return [
        r,
        this._getResourceDisplayName(e, "参考图片"),
        this._formatSize(e.width, e.height),
      ]
        .filter(Boolean)
        .join("，");
    }
    if (e instanceof $.p) {
      return [
        r,
        this._getResourceDisplayName(e, "参考视频"),
        this._formatSize(e.width, e.height),
        this._formatDuration(e.duration),
      ]
        .filter(Boolean)
        .join("，");
    }
    if (e instanceof eE.e) {
      return [
        r,
        this._getResourceDisplayName(e, "参考音频"),
        this._formatDuration(e.duration),
      ]
        .filter(Boolean)
        .join("，");
    }
  }
  _getSubjectMediaDescriptions(e) {
    return this._videoGeneratorManager.omniReferenceManager.data.promptContents
      .map((t) => {
        if (t.type === "subject") {
          var { content } = t.subject;
          var a = content.name || "参考主体";
          var i = content.description
            ? "描述：".concat(content.description)
            : undefined;
          var n = this._createSubjectMediaToken(t, e);
          content.audioInfo || content.videoInfo;
          return [n, "参考主体：".concat(a), i].filter(Boolean).join("，");
        }
      })
      .filter((e) => !!e);
  }
  _getResourceDisplayName(e, t) {
    let r;
    if ((r = e.name) != null) {
      return r;
    }
    return t;
  }
  _formatSize(e, t) {
    if (e > 0 && t > 0) {
      return "尺寸：".concat(e, "x").concat(t);
    }
  }
  _formatDuration(e) {
    if (e > 0) {
      return "时长：".concat(Math.round(e), "s");
    }
  }
  _normalizeOptimizedPromptSegments(e, t) {
    if (!t) {
      return e;
    }
    if (e == null ? undefined : e.length) {
      const r = this._getRichPromptReferenceSnapshots(t);
      if (!r.length) {
        return e;
      }
      const a = e.flatMap((e) => this._normalizeOptimizedPromptSegment(e, r));
      return this._collapseDuplicatePromptSegmentReferences(a);
    }
  }
  _normalizeOptimizedPromptSegment(e, t) {
    if (e.type === ty.y9.Reference) {
      var r;
      const a = this._findReferenceSnapshotBySegment(t, e);
      if (a) {
        return [
          n._(i._({}, e), {
            referenceType: a.referenceType,
            referenceId: a.referenceId,
            label: a.label,
          }),
        ];
      }
      if (e.label) {
        return [
          {
            type: ty.y9.Text,
            text: e.label,
          },
        ];
      }
      return [];
    }
    if ((r = e.text) != null ? r : "") {
      return [e];
    }
    return [];
  }
  _collapseDuplicatePromptSegmentReferences(e) {
    const t = [];
    e.forEach((e) => {
      if (e.type !== ty.y9.Reference) {
        return void t.push(e);
      }
      var r;
      var a = t.at(-1);
      var i = t.at(-2);
      if ((a == null ? undefined : a.type) === ty.y9.Reference) {
        if (this._isSamePromptSegmentReference(a, e)) {
          return;
        }
      } else if (
        (a == null ? undefined : a.type) === ty.y9.Text &&
        (i == null ? undefined : i.type) === ty.y9.Reference &&
        this._isDuplicateReferenceConnector((r = a.text) != null ? r : "") &&
        this._isSamePromptSegmentReference(i, e)
      ) {
        return void t.pop();
      }
      t.push(e);
    });
    return t;
  }
  _isDuplicateReferenceConnector(e) {
    return /^[\s,\uff0c:\uff1a;\uff1b\u3001]*(?:\u4e3a|\u662f|\u5373)[\s,\uff0c:\uff1a;\uff1b\u3001]*$/.test(
      e,
    );
  }
  _isSamePromptSegmentReference(e, t) {
    if (e.referenceId || t.referenceId) {
      return (
        e.referenceType === t.referenceType && e.referenceId === t.referenceId
      );
    }
    return e.referenceType === t.referenceType && e.label === t.label;
  }
  _completeTask(e, t, r) {
    this._releaseTaskRequest(e);
    const a = this.tasks.find((t) => t.peTaskId === e);
    const s = tq(t) || t;
    const o = s === t ? r : tH(r);
    const d = this._normalizeOptimizedPromptSegments(
      o,
      a == null ? undefined : a.originalRichPrompt,
    );
    this._state.tasks = this.tasks.map((t) => {
      if (t.peTaskId === e) {
        return n._(i._({}, t), {
          status: "succeeded",
          optimizedPrompt: s,
          optimizedPromptSegments: d,
          progressText: this._getPromptEnhancementTaskText(t.displayNo),
          completedAt: Date.now(),
        });
      }
      return t;
    });
  }
  _removeTaskLocally(e) {
    this._releaseTaskRequest(e);
    this._deleteCachedPromptStateContainingTask(e);
    if (this._state.acceptedPeTaskId === e) {
      this._state.acceptedPeTaskId = undefined;
    }
    this._state.tasks = this.tasks.filter((t) => t.peTaskId !== e);
    this._decrementTaskListTotal();
  }
  _syncTaskListTotal(e) {
    if (typeof e === "number") {
      this._state.totalTaskCount = Math.max(e, this.tasks.length);
      return;
    }
    this._syncLocalTaskListTotal();
  }
  _syncLocalTaskListTotal() {
    this._state.totalTaskCount = Math.max(
      this._state.totalTaskCount,
      this.tasks.length,
    );
  }
  _incrementTaskListTotal() {
    this._state.totalTaskCount = Math.max(
      this.tasks.length,
      this._state.totalTaskCount + 1,
    );
  }
  _decrementTaskListTotal() {
    if (this._state.totalTaskCount) {
      this._state.totalTaskCount = Math.max(
        this.tasks.length,
        this._state.totalTaskCount - 1,
      );
    }
  }
  _isPromptEnhancementToastOnlyError(e) {
    return (
      (e == null ? undefined : e.code) === tI ||
      (e == null ? undefined : e.code) === tF ||
      (e == null ? undefined : e.code) === tb ||
      this._isPromptEnhancementArkRateLimitError(e)
    );
  }
  _isPromptEnhancementArkRateLimitError(e) {
    return this._isPromptEnhancementRateLimitErrorMessage(
      e == null ? undefined : e.message,
    );
  }
  _isPromptEnhancementArkError(e) {
    let t;
    return (
      tC.has((t = e == null ? undefined : e.code) != null ? t : "") ||
      this._isPromptEnhancementArkErrorMessage(
        e == null ? undefined : e.message,
      )
    );
  }
  _isPromptEnhancementArkErrorMessage(e) {
    return tE.test(e != null ? e : "");
  }
  _isPromptEnhancementRateLimitErrorMessage(e) {
    return tA.test(e != null ? e : "");
  }
  _getPromptEnhancementFrequentOperationToast() {
    return d.Ay.t("prompt_optimize_toomany", {}, "操作频繁，请稍后重试");
  }
  _getPromptEnhancementFailedToast() {
    return d.Ay.t(
      "web_video_prompt_enhancement_failed_toast",
      {},
      "提示词优化失败，请重试",
    );
  }
  _getPromptEnhancementServerErrorToast() {
    return d.Ay.t("web_fail2generate_server_busy", {}, "服务器拥挤,请稍后重试");
  }
  _getPromptEnhancementTaskText(e) {
    return d.Ay.t(
      "prompt_optimize_task",
      {
        string: e != null ? e : "",
      },
      "优化方案".concat(e != null ? e : ""),
    );
  }
  _getPromptEnhancementRunningText() {
    return d.Ay.t("prompt_optimizing", {}, "优化中");
  }
  _getPromptEnhancementRetryingText() {
    return this._getPromptEnhancementRunningText();
  }
  _getPromptEnhancementClearFailedToast() {
    return d.Ay.t("fail_retry", {}, "操作失败，请重试");
  }
  _getPromptEnhancementTaskNotFoundText() {
    return this._getPromptEnhancementFailedToast();
  }
  _getPromptEnhancementMaxParallelErrorMessage(e) {
    return d.Ay.t(
      "prompt_optimize_max_parallel_error",
      {},
      e || "超过最大数量限制，请等其他任务完成后再试试",
    );
  }
  _getPromptEnhancementDailyQuotaLimitMessage(e) {
    return d.Ay.t(
      "prompt_optimize_daily_quota_limit",
      {},
      e || "今日优化次数已达到上限",
    );
  }
  _getPromptEnhancementQueryRequestErrorMessage(e) {
    if (this._isPromptEnhancementRateLimitErrorMessage(e)) {
      return this._getPromptEnhancementFrequentOperationToast();
    }
    if (e) {
      if (this._isPromptEnhancementArkErrorMessage(e)) {
        return this._getPromptEnhancementServerErrorToast();
      }
      return this._getPromptEnhancementFailedToast();
    }
  }
  _getPromptEnhancementRequestErrorMessage(e) {
    if (this._isPromptEnhancementRateLimitErrorMessage(e)) {
      return this._getPromptEnhancementFrequentOperationToast();
    }
    if (e) {
      return this._getPromptEnhancementServerErrorToast();
    }
    return this._getPromptEnhancementFailedToast();
  }
  _getPromptEnhancementErrorMessage(e) {
    if (this._isPromptEnhancementArkRateLimitError(e)) {
      return this._getPromptEnhancementFrequentOperationToast();
    }
    if (this._isPromptEnhancementArkError(e)) {
      return this._getPromptEnhancementServerErrorToast();
    }
    switch (e == null ? undefined : e.code) {
      case tI:
        return this._getPromptEnhancementMaxParallelErrorMessage(
          e == null ? undefined : e.message,
        );
      case tF:
        return this._getPromptEnhancementDailyQuotaLimitMessage(
          e == null ? undefined : e.message,
        );
      case tb:
        return this._getPromptEnhancementFrequentOperationToast();
      default:
        if (e) {
          return this._getPromptEnhancementServerErrorToast();
        }
        return this._getPromptEnhancementFailedToast();
    }
  }
  _showMaxParallelToast() {
    th.A.normal(this._getPromptEnhancementMaxParallelErrorMessage());
  }
  _failTask(e, t) {
    const r =
      !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    this._releaseTaskRequest(e);
    this._deleteCachedPromptStateContainingTask(e);
    if (this._state.acceptedPeTaskId === e) {
      this._state.acceptedPeTaskId = undefined;
    }
    const a = t || this._getPromptEnhancementFailedToast();
    this._state.tasks = this.tasks.map((t) => {
      if (t.peTaskId === e) {
        return n._(i._({}, t), {
          status: "failed",
          errorMessage: a,
          progressText: a,
          optimizedPrompt: undefined,
          optimizedPromptSegments: undefined,
          completedAt: Date.now(),
        });
      }
      return t;
    });
    if (r) {
      this._showFailedToast(t);
    }
  }
  _showFailedToast(e) {
    th.A.normal(e || this._getPromptEnhancementFailedToast());
  }
  _patchTask(e, t) {
    this._state.tasks = this._mergeTasks(
      this.tasks.map((r) => {
        if (r.peTaskId === e) {
          return i._({}, r, t);
        }
        return r;
      }),
    );
    this._syncLocalTaskListTotal();
  }
  _mergeTasks(e) {
    const t = new Map();
    e.forEach((e) => {
      t.set(e.peTaskId, e);
    });
    return this._sortTasksByCreateTime(Array.from(t.values()));
  }
  _sortTasksByCreateTime(e) {
    return e.slice().sort((e, t) => {
      if (e.createdAt !== t.createdAt) {
        return e.createdAt - t.createdAt;
      }
      return e.peTaskId.localeCompare(t.peTaskId);
    });
  }
  _deleteAllTasks() {
    return a
      ._(function* () {
        const e = this._getCurrentTaskListFilter();
        return (
          !!e &&
          (!!(yield this._promptEnhancementDataService.deleteAllTasks(e)).ok ||
            (th.A.normal(this._getPromptEnhancementClearFailedToast()), false))
        );
      })
      .call(this);
  }
  _releaseTaskRequest(e) {
    this._clearTaskStatusMonitor(e);
    this._abortTaskRequest(e);
    this._clearTaskRequest(e);
  }
  _abortTaskRequest(e) {
    let t;
    if ((t = this._requestAbortControllers.get(e)) != null) {
      t.abort();
    }
    this._requestAbortControllers.delete(e);
  }
  _abortAllTaskRequests() {
    this._requestAbortControllers.forEach((e) => e.abort());
    this._requestAbortControllers.clear();
  }
  _startPlusOne() {
    this._clearPlusOneTimer();
    this._state.showPlusOne = true;
    this._plusOneTimer = setTimeout(() => {
      this._state.showPlusOne = false;
    }, 800);
  }
  _clearGuideTimer() {
    if (this._guideTimer) {
      clearTimeout(this._guideTimer);
      this._guideTimer = undefined;
    }
  }
  _clearGuideVisibleTimer() {
    if (this._guideVisibleTimer) {
      clearTimeout(this._guideVisibleTimer);
      this._guideVisibleTimer = undefined;
    }
  }
  _clearTaskStatusMonitor(e) {
    let t;
    if ((t = this._taskStatusMonitors.get(e)) != null) {
      t.dispose();
    }
    this._taskStatusMonitors.delete(e);
  }
  _clearAllTaskStatusMonitors() {
    this._taskStatusMonitors.forEach((e) => e.dispose());
    this._taskStatusMonitors.clear();
  }
  _clearPlusOneTimer() {
    if (this._plusOneTimer) {
      clearTimeout(this._plusOneTimer);
      this._plusOneTimer = undefined;
    }
  }
  constructor(e, t, r, s, o, d, u, l) {
    var c;
    super();
    c = this;
    this._videoGeneratorManager = e;
    this._accountService = t;
    this._containerService = r;
    this._dreaminaConfigurationService = s;
    this._promptEnhancementDataService = o;
    this._workspaceService = d;
    this._materialDataService = u;
    this._dreaminaWebsocketService = l;
    this._state = G.sH({
      tasks: [],
      showGuide: false,
      showPlusOne: false,
      isGuideBadgeDismissed: false,
      acceptedPeTaskId: undefined,
      isLoadingPreviousTasks: false,
      isClearingTasks: false,
      hasMorePreviousTasks: false,
      nextTaskListOffset: 0,
      totalTaskCount: 0,
      promptTracking: undefined,
      isPeAsyncConfirmEnabled: false,
    });
    this._taskStatusMonitors = new Map();
    this._requestAbortControllers = new Map();
    this._guideHasShown = false;
    this._promptComposing = false;
    this._isPreparingEnhancement = false;
    this._requestId = 0;
    this._taskRequestIds = new Map();
    this._listRequestId = 0;
    this._activePromptApplyRequestId = 0;
    this._experimentConfigRequestId = 0;
    this._promptStateCacheByTaskListContextKey = new Map();
    this.startEnhancement = () =>
      a._(function* () {
        if (
          c.isEnabled &&
          !c._isPreparingEnhancement &&
          !c._state.isClearingTasks &&
          c._getActiveTextPrompt().trim()
        ) {
          if (c.isMaxParallelEnhancement) {
            return void c._showMaxParallelToast();
          }
          c._isPreparingEnhancement = true;
          try {
            yield c._resolveActivePromptResources();
          } finally {
            c._isPreparingEnhancement = false;
          }
          if (c.isEnabled) {
            const promptContext = c._getActivePromptContext();
            const t = c._getActivePromptSnapshot();
            const r = t.text.trim();
            if (r) {
              if (c.isMaxParallelEnhancement) {
                return void c._showMaxParallelToast();
              }
              const a = c._getAssociatedWorkspaceId();
              c.dismissGuide();
              c._clearGuideTimer();
              c._startPlusOne();
              c._markGuideShown();
              c._dismissGuideBadge();
              const s = "video-pe-".concat(tv.uR());
              const o = c._createTaskRequestId(s);
              const d = Date.now();
              const u =
                a === undefined ? undefined : c._serializeWorkspaceId(a);
              const createInputSnapshot = {
                modelReqKey: c._getModelReqKey(),
                mediaDesc: c._getMediaDesc(),
                generationParams: c._getGenerationParams(),
              };
              const m = n._(
                i._(
                  {
                    peTaskId: s,
                  },
                  u === undefined
                    ? {}
                    : {
                        workspaceId: u,
                      },
                ),
                {
                  status: "enhancing",
                  promptContext,
                  originalPrompt: r,
                  originalRichPrompt: t.richPrompt,
                  originalPromptSegments: t.promptSegments,
                  createInputSnapshot,
                  progressText: c._getPromptEnhancementRunningText(),
                  createdAt: d,
                  processingStartedAt: d,
                },
              );
              c._state.acceptedPeTaskId = undefined;
              c._state.promptTracking = undefined;
              c._state.tasks = c._mergeTasks([...c.tasks, m]);
              c._incrementTaskListTotal();
              c._videoGeneratorManager.reportManager.reportPromptOptimizeAction(
                "generate_new_optimize",
                {
                  orginalPrompt: r,
                },
              );
              c._createPromptEnhancementTask(m, o, a);
            }
          }
        }
      })();
    this.useTask = (e) =>
      a._(function* () {
        if (c.isEnabled) {
          const t = c.tasks.find((t) => t.peTaskId === e);
          if (t == null ? undefined : t.optimizedPrompt) {
            c.dismissGuide();
            const r = c._createPromptApplyGuard();
            const a = yield c._hydrateRichPromptResources(t.originalRichPrompt);
            if (c._isCurrentPromptApplyGuard(r)) {
              if (a !== t.originalRichPrompt) {
                c._patchTask(t.peTaskId, {
                  originalRichPrompt: a,
                });
              }
              c._state.acceptedPeTaskId = t.peTaskId;
              c._setActivePrompt(
                t.optimizedPrompt,
                a,
                t.optimizedPromptSegments,
              );
              c._markPromptEnhancementAccepted(t);
              c._videoGeneratorManager.reportManager.reportOptimizedPromptAdd();
              c._videoGeneratorManager.reportManager.reportPromptOptimizeAction(
                "optimize_click",
                {
                  orginalPrompt: t.originalPrompt,
                },
              );
            }
          }
        }
      })();
    this.clearAcceptedTask = () => {
      var e = this._getAcceptedTask();
      this._invalidatePromptStateWorkspaceMigration();
      this._deleteCachedPromptStateForCurrentTaskListContext();
      if (!e) {
        this._state.acceptedPeTaskId = undefined;
        return;
      }
      this._deleteCachedPromptStateContainingTask(e.peTaskId);
      this._state.tasks = this.tasks.filter((t) => t.peTaskId !== e.peTaskId);
      this._decrementTaskListTotal();
      this._state.acceptedPeTaskId = undefined;
      this._restoreTaskOriginalPrompt(e, {
        markCleared: true,
      });
    };
    this.restoreAcceptedTaskOriginalPrompt = () =>
      a._(function* () {
        const e = c._getAcceptedTask();
        c._invalidatePromptStateWorkspaceMigration();
        c._deleteCachedPromptStateForCurrentTaskListContext();
        if (!e) {
          c._state.acceptedPeTaskId = undefined;
          return;
        }
        c._deleteCachedPromptStateContainingTask(e.peTaskId);
        c._state.acceptedPeTaskId = undefined;
        c._videoGeneratorManager.reportManager.reportPromptOptimizeAction(
          "delete",
          {
            orginalPrompt: e.originalPrompt,
          },
        );
        yield c._restoreTaskOriginalPrompt(e, {
          markCleared: true,
        });
      })();
    this.clearAcceptedPromptPlaceholder = () => {
      this.restoreAcceptedTaskOriginalPrompt();
    };
    this.discardAcceptedPromptState = () => {
      this._invalidateActivePromptApplyRequest();
      if (this._promptStateWorkspaceMigration === undefined) {
        this._invalidatePromptStateWorkspaceMigration();
        this._deleteCachedPromptStateForCurrentTaskListContext();
      }
      this._state.acceptedPeTaskId = undefined;
      this._state.promptTracking = undefined;
    };
    this.retryTask = (e) => {
      if (!this._state.isClearingTasks) {
        var t = this.tasks.find((t) => t.peTaskId === e);
        if ((t == null ? undefined : t.status) === "failed") {
          if (this.isMaxParallelEnhancement) {
            return void this._showMaxParallelToast();
          }
          this._clearTaskStatusMonitor(e);
          this._abortTaskRequest(e);
          var r = this._createTaskRequestId(e);
          this._patchTask(e, {
            status: "enhancing",
            errorMessage: undefined,
            optimizedPrompt: undefined,
            optimizedPromptSegments: undefined,
            progressText: this._getPromptEnhancementRetryingText(),
            processingStartedAt: Date.now(),
            completedAt: undefined,
          });
          var a = this.tasks.find((t) => t.peTaskId === e);
          if (a) {
            this._retryPromptEnhancementTask(a, r);
          }
        }
      }
    };
    this.removeTask = (e) => {
      var t = this.tasks.find((t) => t.peTaskId === e);
      if (t) {
        this._videoGeneratorManager.reportManager.reportPromptOptimizeAction(
          t.status === "enhancing" ? "optimize_cancel" : "delete",
          {
            orginalPrompt: t.originalPrompt,
          },
        );
        if (t.peTaskId === this._state.acceptedPeTaskId) {
          return void this.clearAcceptedTask();
        }
        if (t.status === "enhancing") {
          this._releaseTaskRequest(t.peTaskId);
        }
        this._deleteCachedPromptStateContainingTask(t.peTaskId);
        if (t.peTaskId) {
          this._promptEnhancementDataService.deleteTasks({
            peTaskIds: [t.peTaskId],
          });
        }
        this._state.tasks = this.tasks.filter((e) => e.peTaskId !== t.peTaskId);
        this._decrementTaskListTotal();
      }
    };
    this.clearTasks = () =>
      a._(function* () {
        if (!c._state.isClearingTasks) {
          c._videoGeneratorManager.reportManager.reportPromptOptimizeAction(
            "clear",
          );
          c._state.isClearingTasks = true;
          try {
            if (!(yield c._deleteAllTasks())) {
              return;
            }
            c._deleteCachedPromptStateForCurrentTaskListContext();
            c._clearTasksLocally();
          } finally {
            c._state.isClearingTasks = false;
          }
        }
      })();
    this.normalizePromptForSubmission = (e) => e;
    this.loadPreviousTasks = () =>
      a._(function* () {
        if (c.canLoadPreviousTasks) {
          let e;
          const t = c._listRequestId;
          const r = c._getCurrentTaskListFilter();
          const a = c._getTaskListContextKey();
          const i = c._state.nextTaskListOffset;
          if (r) {
            c._state.isLoadingPreviousTasks = true;
            const n = yield c._queryTaskList(i, r);
            if (
              !(
                t !== c._listRequestId ||
                !c.isEnabled ||
                a !== c._getTaskListContextKey()
              )
            ) {
              c._state.isLoadingPreviousTasks = false;
              if (n.ok) {
                c._syncServerTasksFromList(
                  n.value.tasks,
                  c._getCurrentTaskListSyncScope(),
                );
                c._state.hasMorePreviousTasks = !!n.value.hasMore;
                c._state.nextTaskListOffset =
                  (e = n.value.nextOffset) != null
                    ? e
                    : i + n.value.tasks.length;
                c._syncTaskListTotal(n.value.total);
              }
            }
          }
        }
      })();
    this.clearPrompt = () => {
      this._deleteCachedPromptStateForCurrentTaskListContext();
      this._clearTasksLocally();
      this._setActivePrompt("");
    };
    this.runWithPromptStateWorkspaceMigration = (e) =>
      a._(function* () {
        let t;
        const r =
          (t = c._promptStateWorkspaceMigration) == null
            ? undefined
            : t.migrationId;
        const a = r != null ? r : c._beginPromptStateWorkspaceMigration();
        try {
          return yield e();
        } finally {
          if (r === undefined) {
            c._finishPromptStateWorkspaceMigration(a);
          }
        }
      })();
    this.ensureWorkspaceIdAndAssociateTasks = () =>
      a._(function* () {
        let e;
        const t =
          (e = c._promptStateWorkspaceMigration) == null
            ? undefined
            : e.migrationId;
        const r = t != null ? t : c._beginPromptStateWorkspaceMigration();
        try {
          const a = yield c._workspaceService.ensureWorkspaceId();
          if (!a.ok) {
            return a;
          }
          yield c._associateTasksWithWorkspace(a.value, r);
          return a;
        } finally {
          if (t === undefined) {
            c._finishPromptStateWorkspaceMigration(r);
          }
        }
      })();
    this.associateTasksWithWorkspace = (e) =>
      a._(function* () {
        let t;
        const r =
          (t = c._promptStateWorkspaceMigration) == null
            ? undefined
            : t.migrationId;
        const a = r != null ? r : c._beginPromptStateWorkspaceMigration();
        try {
          yield c._associateTasksWithWorkspace(e, a);
        } finally {
          if (r === undefined) {
            c._finishPromptStateWorkspaceMigration(a);
          }
        }
      })();
    this.beginPromptComposition = () => {
      this._promptComposing = true;
      this._clearGuideTimer();
      if (!this._guideHasShown) {
        this._clearGuideVisibleTimer();
        this._state.showGuide = false;
      }
    };
    this.endPromptComposition = () => {
      this._promptComposing = false;
      this._scheduleGuide();
    };
    this.dismissGuide = () => {
      this._clearGuideVisibleTimer();
      this._state.showGuide = false;
    };
    this._handlePromptEnhancementTaskChange = (e) => {
      var t = e == null ? undefined : e.peTaskId;
      if (t && this.isEnabled) {
        if (!this.tasks.find((e) => e.peTaskId === t)) {
          if (this._canQueryCurrentTaskList()) {
            this._queryCurrentTaskList();
          }
          return;
        }
        this._queryPromptEnhancementTaskByPeTaskId(t);
      }
    };
    this._syncPromptEnhancementExperimentConfig();
    this._refreshPromptEnhancementExperimentConfig();
    this._restoreGuideState();
    this._register(
      this._accountService.onDidLogin(() => {
        this._syncPromptEnhancementExperimentConfig();
        this._refreshPromptEnhancementExperimentConfig();
        this._restoreGuideState();
      }),
    );
    this._registerContentGeneratorVariantReaction();
    this._registerPromptReaction();
    this._registerTaskListReaction();
    this._registerPromptEnhancementWebsocketHandler();
  }
}
tN = o.Cg(
  [
    o.Qj(1, t_.c),
    o.Qj(2, p._),
    o.Qj(3, tk.a),
    o.Qj(4, tT.L),
    o.Qj(5, tP.D),
    o.Qj(6, tf.H),
    o.Qj(7, tR.dE),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof VideoGeneratorManager === "undefined"
        ? Object
        : VideoGeneratorManager,
      t_.c === undefined ? Object : t_.c,
      p._ === undefined ? Object : p._,
      tk.a === undefined ? Object : tk.a,
      tT.L === undefined ? Object : tT.L,
      tP.D === undefined ? Object : tP.D,
      tf.H === undefined ? Object : tf.H,
      tR.dE === undefined ? Object : tR.dE,
    ]),
  ],
  tN,
);
const tW = require("MFW");
const tU = require("ai0");
const tQ = require("JJ");
const t$ = require("nZ");
const tJ = require("Dm");
const tZ = require("puv");
const tY = require("kF");
class tX extends tY.v {
  constructor(...e) {
    super(...e);
    this.eventName = "ai_video_adjust_param";
  }
}
class t0 extends tY.o {
  _setInitialParams(e) {
    if (e) {
      const {
        templateId,
        templateTypeId,
        impressionId,
        searchRequestId,
        searchId,
        enterScenario,
        drawType,
        enterFrom,
        position,
        aiFeatureName,
        toolItemId,
        showcaseId,
      } = e;
      this.setParams({
        templateId,
        templateTypeId,
        impressionId,
        searchRequestId,
        searchId,
        enterScenario,
        drawType,
        enterFrom,
        position,
        aiFeatureName,
        toolItemId,
        showcaseId,
      });
    }
  }
  _getCollectorClass() {
    return tX;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
    this._validateAction(e);
  }
  _validateRequiredFields(e) {
    ["action", "modal", "enter_from"].forEach((t) => {
      tJ.F4(e[t], "[AiVideoAdjustParamReporter] ".concat(t, " is required"));
    });
    if (e.enter_from === "ai_feature") {
      tJ.F4(
        e.ai_feature_name,
        "[AiVideoAdjustParamReporter] ai_feature_name is required when enter_from is 'ai_feature'",
      );
    }
  }
  _validateAction(e) {
    switch (e.action) {
      case "switch_model":
        tJ.F4(
          e.model_name,
          "[AiVideoAdjustParamReporter] model_name is required",
        );
        tJ.F4(
          e.model_key,
          "[AiVideoAdjustParamReporter] model_key is required",
        );
        break;
      case "switch_aspect_ratio":
      case "input_aspect_ratio":
        tJ.F4(
          e.aspect_ratio,
          "[AiVideoAdjustParamReporter] aspect_ratio is required",
        );
        break;
      case "switch_video_duration":
      case "input_video_duration":
        tJ.F4(
          e.video_duration,
          "[AiVideoAdjustParamReporter] video_duration is required",
        );
        break;
      case "switch_resolution":
      case "switch_definition":
        tJ.F4(
          e.model_resolution,
          "[AiVideoAdjustParamReporter] model_resolution is required",
        );
        break;
      case "paste_upload":
        tJ.F4(
          e.upload_cnt,
          "[AiVideoAdjustParamReporter] upload_cnt is required",
        );
        break;
      case "switch_function_mode":
        tJ.F4(
          e.function_mode,
          "[AiVideoAdjustParamReporter] function_mode is required",
        );
    }
  }
  _setCommonParams() {
    this.setParams({
      modal: "aigc_video",
    });
  }
  constructor(e, t) {
    var teamId = tZ.y();
    super(
      teamId
        ? {
            teamId,
          }
        : {},
      t,
    );
    this._containerService = t;
    this._setCommonParams();
    this._setInitialParams(e);
  }
}
t0 = o.Cg(
  [
    o.Qj(1, p._),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [Object, p._ === undefined ? Object : p._]),
  ],
  t0,
);
class t1 extends tY.v {
  constructor(...e) {
    super(...e);
    this.eventName = "prompt_optimize_action";
  }
}
class t2 extends tY.o {
  _getCollectorClass() {
    return t1;
  }
  _validateParams(e) {
    tJ.F4(e.action, "[PromptOptimizeActionReporter] action is required");
    tJ.F4(e.page, "[PromptOptimizeActionReporter] page is required");
  }
  constructor(e, t) {
    super(
      i._(
        {
          page: "generation",
          urlPath:
            typeof window === "undefined"
              ? undefined
              : window.location.pathname,
        },
        e,
      ),
      t,
    );
    this._containerService = t;
  }
}
t2 = o.Cg(
  [
    o.Qj(1, p._),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      p._ === undefined ? Object : p._,
    ]),
  ],
  t2,
);
const t3 = new Set([
  "generate_new_optimize",
  "optimize_click",
  "delete",
  "optimize_cancel",
]);
class t4 extends t$.j {
  get promptSource() {
    let e;
    if ((e = this.resourceReportParams.promptSource) != null) {
      return e;
    }
    return "custom";
  }
  get _currentModelReportParams() {
    const {
      data: { model },
    } = this._videoGeneratorManager;
    return {
      modelName: model == null ? undefined : model.name,
      modelKey: model == null ? undefined : model.key,
    };
  }
  _getCurrentUrlPath() {
    if (typeof window === "undefined") {
      return undefined;
    }
    return window.location.pathname;
  }
  constructor(e, t) {
    super(t);
    this._videoGeneratorManager = e;
    this.reportActivatePrompt = () => {
      var e = this._containerService.createInstance(t0, this.commonParams);
      e.setParams({
        action: "activate",
      });
      e.report();
    };
    this.reportEnterPrompt = () => {
      if (this._videoGeneratorManager.data.prompt.trim() !== "") {
        var e = this._containerService.createInstance(t0, this.commonParams);
        e.setParams({
          action: "enter_prompt",
        });
        e.report();
      }
    };
    this.reportAddImage = (e) => {
      var t = this._containerService.createInstance(t0, this.commonParams);
      t.setParams({
        action: "add_image",
        imageId: e == null ? undefined : e.imageId,
      });
      t.report();
    };
    this.reportDeleteImage = () => {
      var e = this._containerService.createInstance(t0, this.commonParams);
      e.setParams({
        action: "delete_image",
      });
      e.report();
    };
    this.reportSwitchModel = () => {
      var e = this._containerService.createInstance(t0, this.commonParams);
      e.setParams(
        i._(
          {
            action: "switch_model",
          },
          this._currentModelReportParams,
        ),
      );
      e.report();
    };
    this.reportSwitchAspectRatio = () => {
      var {
        data: { aspectRatio },
      } = this._videoGeneratorManager;
      var t = this._containerService.createInstance(t0, this.commonParams);
      t.setParams(
        n._(
          i._(
            {
              action: "input_aspect_ratio",
            },
            this._currentModelReportParams,
          ),
          {
            aspectRatio,
          },
        ),
      );
      t.report();
    };
    this.reportSwitchVideoDuration = () => {
      var {
        data: { durationMs },
      } = this._videoGeneratorManager;
      var t = this._containerService.createInstance(t0, this.commonParams);
      t.setParams(
        n._(
          i._(
            {
              action: "input_video_duration",
            },
            this._currentModelReportParams,
          ),
          {
            videoDuration: durationMs.toString(),
          },
        ),
      );
      t.report();
    };
    this.reportClickSettings = () => {
      var e = this._containerService.createInstance(t0, this.commonParams);
      e.setParams(
        i._(
          {
            action: "click_settings",
          },
          this._currentModelReportParams,
        ),
      );
      e.report();
    };
    this.reportImportReferenceImageMaterial = (e) => {
      this.reportImportReferenceMaterial(
        i._(
          {
            materialType: "image",
          },
          e,
        ),
      );
    };
    this.reportImportReferenceMaterial = (e) => {
      var t = this._containerService.createInstance(tU.k);
      t.setParams(
        i._(
          {
            position: "generation",
            modal: "aigc_video",
            materialSource: "local",
          },
          e,
        ),
      );
      t.report();
    };
    this.reportSwitchResolution = () => {
      var {
        data: { resolution },
      } = this._videoGeneratorManager;
      var t = this._containerService.createInstance(t0, this.commonParams);
      t.setParams(
        n._(
          i._(
            {
              action: "switch_definition",
            },
            this._currentModelReportParams,
          ),
          {
            modelResolution: resolution,
          },
        ),
      );
      t.report();
    };
    this.reportOpenMovementSetting = () => {
      var {
        data: { lensMovementRecipe, lensMovementStrength },
      } = this._videoGeneratorManager;
      var r = this._containerService.createInstance(t0, this.commonParams);
      r.setParams({
        action: "open_movement_setting",
        lensMotionKey: lensMovementRecipe,
        lensMotionStrengthKey: lensMovementStrength,
      });
      r.report();
    };
    this.reportSwitchMovementType = () => {
      var {
        data: { lensMovementRecipe, lensMovementStrength },
      } = this._videoGeneratorManager;
      var r = this._containerService.createInstance(t0, this.commonParams);
      r.setParams({
        action: "switch_movement_type",
        lensMotionKey: lensMovementRecipe,
        lensMotionStrengthKey: lensMovementStrength,
      });
      r.report();
    };
    this.reportSwitchMovementStrength = () => {
      var {
        data: { lensMovementRecipe, lensMovementStrength },
      } = this._videoGeneratorManager;
      var r = this._containerService.createInstance(t0, this.commonParams);
      r.setParams({
        action: "switch_movement_strength",
        lensMotionKey: lensMovementRecipe,
        lensMotionStrengthKey: lensMovementStrength,
      });
      r.report();
    };
    this.reportPasteUpload = (e) => {
      var t = this._containerService.createInstance(t0, this.commonParams);
      t.setParams({
        action: "paste_upload",
        uploadCnt: e.length,
      });
      t.report();
    };
    this.reportSwitchFunctionMode = () => {
      var e = this._containerService.createInstance(t0, this.commonParams);
      e.setParams({
        action: "switch_function_mode",
        functionMode: this.getFunctionMode(),
      });
      e.report();
    };
    this.reportDragImgOrder = () => {
      var e = this._containerService.createInstance(t0, this.commonParams);
      e.setParams({
        action: "drag_img_order",
      });
      e.report();
    };
    this.reportClickMultiFramesDescription = () => {
      var e = this._containerService.createInstance(t0, this.commonParams);
      e.setParams({
        action: "click_multiframes_description",
      });
      e.report();
    };
    this.reportEnterMultiFramesPrompt = () => {
      var e = this._containerService.createInstance(t0, this.commonParams);
      e.setParams({
        action: "enter_multiframes_prompt",
      });
      e.report();
    };
    this.reportSwitchMultiFramesDuration = () => {
      var e = this._containerService.createInstance(t0, this.commonParams);
      e.setParams({
        action: "switch_multiframes_duration",
      });
      e.report();
    };
    this.reportAddTempSubject = (e) => {
      var { subjectListShowFrom } = tQ.m[e];
      var {
        data: { model },
      } = this._videoGeneratorManager;
      var a = this._containerService.createInstance(t0, this.commonParams);
      a.setParams({
        action: "add_temp_subject",
        subjectListShowFrom,
        modelName: model == null ? undefined : model.name,
      });
      a.report();
    };
    this.reportAddSubject = (e, subjectId) => {
      var { subjectListShowFrom, assetPosition } = tQ.m[e];
      var {
        data: { model },
      } = this._videoGeneratorManager;
      var n = this._containerService.createInstance(t0, this.commonParams);
      n.setParams({
        action: "add_subject",
        subjectListShowFrom,
        subjectId,
        modelName: model == null ? undefined : model.name,
        assetPosition,
      });
      n.report();
    };
    this.reportExchangeBgimagePosition = () => {
      var e = this._containerService.createInstance(t0, this.commonParams);
      e.setParams({
        action: "exchange_bgimage_position",
      });
      e.report();
    };
    this.reportAdPlacement = (e, pageFrom, action) => {
      var a = this._containerService.createInstance(tW.y, {
        action,
        pageFrom,
      });
      a.setRightTrackingDataBySceneOptios(e);
      a.report();
    };
    this.reportAddVideo = (e) => {
      var t = this._containerService.createInstance(t0, this.commonParams);
      t.setParams({
        action: "add_video",
        videoId: e == null ? undefined : e.videoId,
      });
      t.report();
    };
    this.reportAddAudio = (e) => {
      var t = this._containerService.createInstance(t0, this.commonParams);
      t.setParams({
        action: "add_audio",
        audioId: e == null ? undefined : e.audioId,
      });
      t.report();
    };
    this.reportOptimizedPromptAdd = () => {
      var e = this._containerService.createInstance(t0, this.commonParams);
      e.setParams({
        action: "optimized_prompt_add",
        page: "generation",
        urlPath: this._getCurrentUrlPath(),
      });
      e.report();
    };
    this.reportPromptOptimizeAction = (e, t) => {
      var orginalPrompt = t3.has(e)
        ? t == null
          ? undefined
          : t.orginalPrompt
        : undefined;
      this._containerService
        .createInstance(t2, {
          action: e,
          orginalPrompt,
        })
        .report();
    };
    this.getFunctionMode = () => {
      var { featureManager } = this._videoGeneratorManager;
      var {
        data: {
          isMultiFramesEngaged,
          isOmniReferenceEngaged,
          isVideoEditEngaged,
          isLongVideoEngaged,
        },
      } = featureManager;
      if (isLongVideoEngaged) {
        return "long_video";
      }
      if (isOmniReferenceEngaged) {
        return "omni_reference";
      }
      if (isVideoEditEngaged) {
        return "video_edit";
      }
      if (isMultiFramesEngaged) {
        return "multi_frame";
      }
      return "first_last_frames";
    };
  }
}
t4 = o.Cg(
  [
    o.Qj(1, p._),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof VideoGeneratorManager === "undefined"
        ? Object
        : VideoGeneratorManager,
      p._ === undefined ? Object : p._,
    ]),
  ],
  t4,
);
const t5 = require("EBI");
const t9 = require("AY");
const t6 = require("CoI");
const t8 = require("sqi");
const t7 = require("btw");
const re = require("wZz");
class rt extends u.jG {
  _submit(e) {
    return a
      ._(function* () {
        let t;
        let r;
        let a;
        let s;
        let infiniteCanvasExtend;
        const { environment } = e;
        const { variant } = environment;
        const {
          data: {
            prompt,
            fps,
            effectiveBatchNumber,
            resolution,
            modelKey,
            firstFrameImage,
            lastFrameImage,
            aspectRatio,
            draftContent,
            isPromptEmpty,
            totalDurationMs,
            commercialSceneOptions,
            references,
            subjectPreAuditPolicy,
            resourceAuditPolicy,
            videoAspectRatioMode,
            durationMode,
            model,
          },
          longVideoManager: {
            data: { targetDurationMs },
          },
          featureManager: {
            data: {
              feature,
              isFirstLastFramesEngaged,
              isVideoEditEngaged,
              isLongVideoEngaged,
            },
          },
          reportManager: {
            commonParams,
            promptSource,
            getFunctionMode,
            getReferenceAIGCItemIdReportParams,
          },
          promptEnhancementManager,
          referenceAuditManager,
          continuationManager,
        } = this._videoGeneratorManager;
        const q = promptEnhancementManager.normalizePromptForSubmission(prompt);
        const mode =
          variant === "canvas" ? L.DAAIGCMode.canvas : L.DAAIGCMode.workbench;
        const conversationId = yield (a =
          this._videoGeneratorManager.agentInfoProvider) == null
          ? undefined
          : a.getCurrentConversationId();
        const W =
          yield promptEnhancementManager.ensureWorkspaceIdAndAssociateTasks();
        if (!W.ok) {
          return W;
        }
        const W_value = W.value;
        yield this._auditReferencesBeforeSubmit();
        const subjectContents = F.X(
          this._videoGeneratorManager.omniReferenceManager.data.promptContents,
        );
        const $ = this._isOmniReferencePureText();
        const previewSubmitId = this._getReferenceVideoSubmitId();
        const promptEnhancementManager_submissionInfo =
          promptEnhancementManager.submissionInfo;
        const Y = (
          promptEnhancementManager_submissionInfo == null
            ? undefined
            : promptEnhancementManager_submissionInfo.promptSource
        )
          ? !!promptEnhancementManager_submissionInfo.finalPrompt.trim()
          : !isPromptEmpty;
        const submitGroupId = tv.bz();
        const taskExtra = n._(
          i._({}, commonParams, getReferenceAIGCItemIdReportParams(references)),
          {
            promptSource: Y
              ? (t =
                  promptEnhancementManager_submissionInfo == null
                    ? undefined
                    : promptEnhancementManager_submissionInfo.promptSource) !=
                null
                ? t
                : promptSource
              : undefined,
            promptType:
              (r =
                promptEnhancementManager_submissionInfo == null
                  ? undefined
                  : promptEnhancementManager_submissionInfo.promptType) != null
                ? r
                : "original_prompt",
            peTaskId:
              promptEnhancementManager_submissionInfo == null
                ? undefined
                : promptEnhancementManager_submissionInfo.peTaskId,
            functionMode: getFunctionMode(),
            generatorFeature: feature,
            sceneOptions: JSON.stringify(commercialSceneOptions),
            batchNumber: effectiveBatchNumber,
            previewSubmitId,
            promptEnhancementInfo: promptEnhancementManager_submissionInfo
              ? JSON.stringify(promptEnhancementManager_submissionInfo)
              : undefined,
            submitGroupId,
            hasRejectedAudit: +!!referenceAuditManager.hasRejectedAudit({
              resources: references,
              preAuditPolicy: resourceAuditPolicy,
              subjectContents,
              subjectPreAuditPolicy,
            }),
            videoProcessType: isVideoEditEngaged
              ? L.DAVideoProcessType.VideoEdit
              : continuationManager.data.enabled
                ? 14
                : undefined,
          },
        );
        if (
          !(variant === "canvas" && effectiveBatchNumber > 1) &&
          ((s = this._videoGeneratorManager.infiniteCanvasExtendParams) == null
            ? undefined
            : s.draftId)
        ) {
          infiniteCanvasExtend = {
            draftId:
              this._videoGeneratorManager.infiniteCanvasExtendParams.draftId,
          };
        }
        const et =
          yield this._contentGeneratorTaskFeatureContainerService.getInstance();
        const er = effectiveBatchNumber >= t9.uA ? t5.V() : undefined;
        let ea = isLongVideoEngaged ? targetDurationMs : totalDurationMs;
        if (isVideoEditEngaged && durationMode === ek.P.Adaptive) {
          ea = -1;
        }
        const videoAspectRatio =
          videoAspectRatioMode === ek.E.Adaptive ? ek.E.Adaptive : aspectRatio;
        const en = (e) => ({
          input: i._(
            {
              generatorFeature: feature,
              videoGenInputs: [
                {
                  prompt: isFirstLastFramesEngaged
                    ? q
                    : $
                      ? this._getOmniReferenceTextPrompt()
                      : "",
                  durationMs: ea,
                  fps,
                  videoMode: L.DAVideoMode._default,
                  firstFrameImage: firstFrameImage
                    ? this._getReferenceImageParams(firstFrameImage)
                    : undefined,
                  endFrameImage: lastFrameImage
                    ? this._getReferenceImageParams(lastFrameImage)
                    : undefined,
                  resolution,
                  isDraftMode: model == null ? undefined : model.isDraft,
                  lensRecipeInput: this._getLensRecipeInput(),
                  multiFrames: this._getMultiFrames(),
                  unifiedEditInput:
                    isLongVideoEngaged || $
                      ? undefined
                      : this._getUnifiedEditInput(),
                  longVideoInput: isLongVideoEngaged
                    ? this._getLongVideoInput()
                    : undefined,
                },
              ],
              modelReqKey: modelKey,
              seed: er !== undefined && e < t9.Wu ? er : t5.V(),
              priority: L.DAPriority.Normal,
            },
            videoAspectRatio
              ? {
                  videoAspectRatio,
                }
              : {},
          ),
          mode,
          isRegenerate: false,
          draftContent,
          conversationId,
          workspaceId: W_value,
          taskPayload: {
            taskExtra,
          },
          infiniteCanvasExtend,
        });
        const es = [];
        for (let eo = 0; eo < effectiveBatchNumber; eo++) {
          const ed = et.createAIGCVideoTask(en(eo));
          if (!ed.ok) {
            if (es.length) {
              break;
            }
            return ed;
          }
          es.push(ed.value);
        }
        if (es.length) {
          return l.TZ(es);
        }
        return l.xz(-1, "no video task created");
      })
      .call(this);
  }
  _auditReferencesBeforeSubmit() {
    return a
      ._(function* () {
        yield Promise.all([
          this._videoGeneratorManager.auditReferences(),
          this._videoGeneratorManager.auditPromptSubjects(
            this._videoGeneratorManager.omniReferenceManager.data
              .promptContents,
          ),
        ]);
      })
      .call(this);
  }
  _isOmniReferencePureText() {
    const { isOmniReferenceEngaged } =
      this._videoGeneratorManager.featureManager.data;
    if (!isOmniReferenceEngaged) {
      return false;
    }
    const { omniReferenceManager } = this._videoGeneratorManager;
    return (
      !omniReferenceManager.data.hasReferences &&
      !omniReferenceManager.data.promptContents.some(
        (e) => e.type === "subject",
      )
    );
  }
  _getReferenceImageParams(e) {
    return n._(i._({}, t6.q(e)), {
      file: e.file,
    });
  }
  _getReferenceVideoParams(e) {
    return n._(i._({}, t8.s(e)), {
      file: e.file,
    });
  }
  _getMultiFrames() {
    const { multiFramesManager } = this._videoGeneratorManager;
    const {
      metadata: {
        leadingSegmentGenerationEnabled,
        trailingSegmentGenerationEnabled,
      },
      data: { frames, frameResources },
    } = multiFramesManager;
    if (frameResources.length) {
      return frames
        .slice(+!leadingSegmentGenerationEnabled, -1)
        .concat(
          trailingSegmentGenerationEnabled
            ? frames[frames.length - 1]
            : n._(i._({}, frames[frames.length - 1]), {
                prompt: "",
                durationMs: 0,
                segmentVideo: undefined,
              }),
        )
        .map((e, idx) => ({
          idx,
          mediaInfo: this._getFrameMediaInfo(e),
          prompt: e.prompt,
          durationMs: e.durationMs,
          segmentVideo:
            e.segmentVideo && e.isSegmentLocked
              ? this._getReferenceVideoParams(e.segmentVideo)
              : undefined,
        }));
    }
  }
  _getFrameMediaInfo(e) {
    if (e.resource.type === "image") {
      return {
        mediaType: L.DAMediaType.Image,
        imageInfo: this._getReferenceImageParams(e.resource),
      };
    }
    if (e.resource.type === "video") {
      return {
        mediaType: L.DAMediaType.Video,
        videoInfo: this._getReferenceVideoParams(e.resource),
      };
    }
    return {
      mediaType: L.DAMediaType.None,
    };
  }
  _getLensRecipeInput() {
    let e;
    let t;
    let r;
    let a;
    const { data, metadata } = this._videoGeneratorManager;
    const { lensMovementRecipe, lensMovementStrength } = data;
    const { currentLensMovementRecipe } = metadata;
    if (lensMovementRecipe && currentLensMovementRecipe) {
      return {
        lensRecipeKey: lensMovementRecipe,
        lensRecipeName:
          currentLensMovementRecipe == null
            ? undefined
            : currentLensMovementRecipe.name,
        lensRecipeNameStarlingKey:
          currentLensMovementRecipe == null
            ? undefined
            : currentLensMovementRecipe.nameStarlingKey,
        strengthKey: lensMovementStrength,
        strengthName:
          currentLensMovementRecipe == null ||
          (t = currentLensMovementRecipe.strengths) == null ||
          (e = t.find((e) => e.key === lensMovementStrength)) == null
            ? undefined
            : e.name,
        strengthNameStarlingKey:
          currentLensMovementRecipe == null ||
          (a = currentLensMovementRecipe.strengths) == null ||
          (r = a.find((e) => e.key === lensMovementStrength)) == null
            ? undefined
            : r.nameStarlingKey,
      };
    }
  }
  _getReferenceVideoSubmitId() {
    const {
      multiFramesManager: {
        data: { frameResources },
      },
    } = this._videoGeneratorManager;
    const t = [
      ...new Set(
        frameResources
          .filter((e) => e.type === "video")
          .map((e) => {
            var t;
            if ((t = e.remoteExtraInfo) == null) {
              return undefined;
            }
            return t.submitId;
          })
          .filter(Boolean),
      ),
    ];
    if (t.length) {
      return t.join(",");
    }
  }
  _getOmniReferenceTextPrompt() {
    const { omniReferenceManager } = this._videoGeneratorManager;
    const { promptContents } = omniReferenceManager.data;
    const r = promptContents
      .filter((e) => e.type === "text")
      .map((e) => e.text)
      .join("");
    return this._videoGeneratorManager.promptEnhancementManager.normalizePromptForSubmission(
      r,
    );
  }
  _getLongVideoInput() {
    let e;
    if (
      (e = this._getUnifiedEditInput({
        allowTextOnly: true,
      })) != null
    ) {
      return e;
    }
    return {
      materialList: [],
      metaList: [],
    };
  }
  _getUnifiedEditInput() {
    let e;
    let t;
    const r =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const { omniReferenceManager } = this._videoGeneratorManager;
    const {
      data: {
        references,
        promptContents,
        videoEditSourceReferenceId,
        videoEditFrameTimestampMsByReferenceId,
      },
    } = omniReferenceManager;
    const { isVideoEditEngaged } =
      this._videoGeneratorManager.featureManager.data;
    const c = references.length > 0;
    const m = promptContents.some((e) => e.type === "subject");
    if (c || m || r.allowTextOnly) {
      const p = promptContents.map((e) => {
        if (e.type === "continuationDuration") {
          return {
            type: "text",
            text: this._getContinuationDurationText(),
          };
        }
        if (e.type === "text") {
          return {
            type: "text",
            text: this._videoGeneratorManager.promptEnhancementManager.normalizePromptForSubmission(
              e.text,
            ),
          };
        }
        return e;
      });
      const { unifiedEditInput, materialIndexByReferenceId } = t7.E(
        {
          references,
          promptContents: p,
        },
        {
          acceptedResourceTypes: ["image", "video", "audio"],
        },
      );
      const editFromMaterialIdx =
        isVideoEditEngaged &&
        videoEditSourceReferenceId &&
        (e = materialIndexByReferenceId.get(videoEditSourceReferenceId)) != null
          ? e
          : -1;
      const { originReferenceId } =
        this._videoGeneratorManager.continuationManager.data;
      const extendFromMaterialIdx =
        originReferenceId &&
        (t = materialIndexByReferenceId.get(originReferenceId)) != null
          ? t
          : -1;
      return n._(i._({}, unifiedEditInput), {
        metaList: this._attachVideoEditFrameSourceInfo(
          unifiedEditInput.metaList,
          {
            editFromMaterialIdx,
            materialIndexByReferenceId,
            frameTimestampMsByReferenceId:
              videoEditFrameTimestampMsByReferenceId,
          },
        ),
        editInput:
          editFromMaterialIdx >= 0
            ? {
                enable: true,
                editFromMaterialIdx,
              }
            : undefined,
        extendInput:
          editFromMaterialIdx < 0 && extendFromMaterialIdx >= 0
            ? {
                enable: true,
                extendFromMaterialIdx,
              }
            : undefined,
      });
    }
  }
  _attachVideoEditFrameSourceInfo(e, t) {
    const {
      editFromMaterialIdx,
      materialIndexByReferenceId,
      frameTimestampMsByReferenceId,
    } = t;
    if (editFromMaterialIdx < 0) {
      return e;
    }
    const o = new Map();
    Object.entries(frameTimestampMsByReferenceId).forEach((e) => {
      var [t, r] = e;
      var i = materialIndexByReferenceId.get(t);
      if (typeof i === "number") {
        o.set(i, r);
      }
    });
    if (o.size === 0) {
      return e;
    }
    return e.map((e) => {
      if (!e.materialRef) {
        return e;
      }
      var timestampMs = o.get(e.materialRef.materialIdx);
      if (typeof timestampMs !== "number") {
        return e;
      }
      return n._(i._({}, e), {
        materialRef: n._(i._({}, e.materialRef), {
          sourceInfo: {
            sourceMaterialIdx: editFromMaterialIdx,
            timestampMs,
          },
        }),
      });
    });
  }
  _getContinuationDurationText() {
    const e = Math.round(
      this._videoGeneratorManager.data.totalDurationMs / j.K,
    );
    return "".concat(e, "s");
  }
  constructor(e, t, r, i) {
    var n;
    super();
    n = this;
    this._videoGeneratorManager = e;
    this._containerService = t;
    this._notificationService = r;
    this._contentGeneratorTaskFeatureContainerService = i;
    this._isSubmitting = false;
    this.submit = (e) =>
      a._(function* () {
        if (n._isSubmitting) {
          return l.xz(-1, "submission is already in progress");
        }
        n._isSubmitting = true;
        let t;
        let r;
        let a = false;
        const {
          data: { validationResult, model, resolution },
          featureManager: {
            data: { isLongVideoEngaged },
          },
        } = n._videoGeneratorManager;
        const { environment } = e;
        const { submitExternally } = environment;
        try {
          if (
            (model == null || (t = model.extra) == null
              ? undefined
              : t.aigcComplianceConfirmationRequired) &&
            !(yield (r = n.requestAigcComplianceConfirmation) == null
              ? undefined
              : r.call(n, {
                  containerService: n._containerService,
                }))
          ) {
            return l.xz(-1, "AIGC compliance confirmation rejected");
          }
          if (submitExternally) {
            return l.xz(
              -1,
              "submission in canvas assets should not be handled internally",
              {
                submitExternally: true,
              },
            );
          }
          if (!validationResult.ok) {
            n._notificationService.warning(validationResult.msg);
            return validationResult;
          }
          if (
            (model == null ? undefined : model.isDraft) &&
            (resolution !== e$.xH || isLongVideoEngaged)
          ) {
            const p = l.xz(
              -1,
              d.Ay.t(
                "sd25_draft_resolution_invalid",
                {},
                "样片仅支持 480P，且不支持超长视频",
              ),
            );
            n._notificationService.warning(p.msg);
            return p;
          }
          n._videoGeneratorManager.setSubmitButtonLoading(true);
          a = true;
          const h = yield n._submit(e);
          if (h.ok) {
            n._videoGeneratorManager.reportManager.resetResourceReportParams();
          }
          return h;
        } finally {
          if (a) {
            n._videoGeneratorManager.setSubmitButtonLoading(false);
          }
          n._isSubmitting = false;
        }
      })();
  }
}
rt = o.Cg(
  [
    o.Qj(1, p._),
    o.Qj(2, m.Ot),
    o.Qj(3, re.L),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof VideoGeneratorManager === "undefined"
        ? Object
        : VideoGeneratorManager,
      p._ === undefined ? Object : p._,
      m.Ot === undefined ? Object : m.Ot,
      re.L === undefined ? Object : re.L,
    ]),
  ],
  rt,
);
class rr extends u.jG {
  get metadata() {
    return this._metadataStore;
  }
  get data() {
    return this._dataStore;
  }
  get agentInfoProvider() {
    return this._agentInfoProvider;
  }
  get infiniteCanvasExtendParams() {
    return this._infiniteCanvasExtendParams;
  }
  setAgentInfoProvider(e) {
    this._agentInfoProvider = e;
  }
  setInfiniteCanvasExtendParams(e) {
    this._infiniteCanvasExtendParams = e;
  }
  setSubmitButtonLoading(e) {
    this._metadataStore.setSubmitButtonLoading(e);
  }
  syncModelConfig(e) {
    const { data, loading } = e;
    this._metadataStore.setIsModelListLoading(loading);
    if (!loading && (data == null ? undefined : data.ok)) {
      const {
        value: { modelList, defaultModel, disabled, mobileAvailableModelKeys },
      } = data;
      this._metadataStore.setMobileAvailableModelKeys(
        mobileAvailableModelKeys || [],
      );
      if (defaultModel) {
        this._metadataStore.setFallbackModel(defaultModel);
      }
      if (!disabled) {
        this._metadataStore.setModels(modelList);
        const o = modelList.find(
          (e) =>
            e.key ===
            (mobileAvailableModelKeys == null
              ? undefined
              : mobileAvailableModelKeys[0]),
        );
        if (o && c.Fr) {
          this.featureManager.updateFeatureConfig(o);
          this.modelManager.setModel(o.key);
          return;
        }
        const d =
          (defaultModel == null ? undefined : defaultModel.key) !==
          this._dataStore.lastDefaultModelKey;
        if (d) {
          this._dataStore.setLastDefaultModelKey(
            defaultModel == null ? undefined : defaultModel.key,
          );
        }
        const u = modelList.find((e) => e.key === this._dataStore.modelKey);
        const l =
          !d && u ? u : defaultModel != null ? defaultModel : modelList[0];
        if (l.key) {
          this.featureManager.updateFeatureConfig(l);
          this.modelManager.setModel(l.key);
        }
      }
    }
  }
  setData(e, t) {
    this._dataStore.setData(
      e,
      !(t == null ? undefined : t.preserveResolutionSource),
    );
    this.auditReferences();
    this.auditPromptSubjects();
  }
  setModelKey(e) {
    this._dataStore.setModelKey(e);
  }
  setModelDisabledOptions(e) {
    this._metadataStore.setModelDisabledOptions(e);
  }
  setDraftContent(e) {
    this._dataStore.setDraftContent(e);
  }
  updateLensMovementRecipe(e) {
    this._dataStore.setLensMovementRecipe(e);
  }
  updateLensMovementStrength(e) {
    this._dataStore.setLensMovementStrength(e);
  }
  _reportImportResourcesFromLocal(e, t) {
    for (const r of e) {
      this.reportManager.reportImportReferenceMaterial(
        i._(
          {
            materialType: r.type,
          },
          t,
        ),
      );
    }
  }
  _initSubjectChangeListeners() {
    this._subjectFeatureContainerService.getInstance().then((e) => {
      this.referenceMentionManager.initSubjectSearch(e.subjectSearchManager);
      this._register(
        e.onSubjectDeleted((e) => {
          this.omniReferenceManager.removeSubjectFromPrompt(v.K(e));
        }),
      );
      this._register(
        e.onSubjectUpdated((e) => {
          var { oldSubject, newSubject } = e;
          var a = v.K(oldSubject);
          this.omniReferenceManager.replaceSubjectInPrompt(a, newSubject);
        }),
      );
    });
  }
  constructor(e, t, r, o, u, c) {
    var m;
    var p;
    super();
    m = this;
    p = this;
    this.contentGeneratorManager = e;
    this._containerService = t;
    this._dreaminaUploadService = r;
    this._notificationService = o;
    this._dreaminaModelConfigFeatureContainerService = u;
    this._subjectFeatureContainerService = c;
    this.dataAdapter = this._register(
      this._containerService.createInstance(ep, this),
    );
    this.reportManager = this._register(
      this._containerService.createInstance(t4, this),
    );
    this.referenceAuditManager = this._register(
      this._containerService.createInstance(S.K),
    );
    this.taskSubmissionManager = this._register(
      this._containerService.createInstance(rt, this),
    );
    this.featureManager = this._register(
      this._containerService.createInstance(ew, this),
    );
    this.multiFramesManager = this._register(
      this._containerService.createInstance(e5, this),
    );
    this.longVideoManager = this._register(
      this._containerService.createInstance(eB, this),
    );
    this.omniReferenceManager = this._register(
      this._containerService.createInstance(tp, this),
    );
    this.continuationManager = this._register(
      this._containerService.createInstance(V, this),
    );
    this._metadataStore = new eZ(this);
    this._dataStore = new eF(this);
    this.promptEnhancementManager = this._register(
      this._containerService.createInstance(tN, this),
    );
    this.referenceMentionManager = this._register(
      this._containerService.createInstance(R.Z, {
        getResourceOptions: () =>
          this.omniReferenceManager.metadata.referenceResourceOptions,
        validateSubjectAddition: (e) =>
          this.omniReferenceManager.validateSubjectAddition(e),
        reportManager: this.reportManager,
      }),
    );
    this._agentInfoProvider = null;
    this.mutexManager = this._register(
      this._containerService.createInstance(e8, this),
    );
    this.modelManager = this._register(
      this._containerService.createInstance(eY, this),
    );
    this.insertSubject = (e, t) => {
      var r;
      var a;
      var i = v.K(e);
      var n = this.referenceMentionManager.validateSubjectEligibility(e);
      if (!n.ok) {
        return n;
      }
      var s =
        (a = this.contentGeneratorManager.visibleContentGeneratorInstance) ==
          null || (r = a.elements.promptEditorRef) == null
          ? undefined
          : r.current;
      if (!s) {
        return l.xz(-1, "");
      }
      var o = this.omniReferenceManager.validateSubjectAddition(e);
      if (!o.ok) {
        return o;
      }
      s.commands.insertContent(
        this.omniReferenceManager.promptEditorManager.transformPromptContentToNodes(
          {
            type: "subject",
            id: i,
            subject: e,
          },
        ),
      );
      s.commands.focus();
      var { entry } = t != null ? t : {};
      if (entry) {
        this.reportManager.reportAddSubject(entry, e.subjectId);
      }
      return l.nj();
    };
    this.getAllData = () => {
      var {
        modelKey,
        prompt,
        effectiveBatchNumber,
        aspectRatio,
        resolution,
        durationMs,
        fps,
        firstFrameImage,
        lastFrameImage,
        lensMovementRecipe,
        lensMovementStrength,
        draftContent,
      } = this._dataStore;
      var {
        data: { feature },
      } = this.featureManager;
      var {
        data: { frames },
      } = this.multiFramesManager;
      var {
        data: {
          references,
          promptContents,
          videoEditSourceReferenceId,
          videoEditFrameTimestampMsByReferenceId,
        },
      } = this.omniReferenceManager;
      var {
        data: { targetDurationMs },
      } = this.longVideoManager;
      return {
        modelKey,
        prompt,
        batchNumber: effectiveBatchNumber,
        aspectRatio,
        resolution,
        durationMs,
        fps,
        firstFrameImage,
        lastFrameImage,
        lensMovementRecipe,
        lensMovementStrength,
        draftContent,
        feature: {
          feature,
        },
        multiFrames: {
          frames,
        },
        omniReference: {
          references,
          promptContents,
          videoEditSourceReferenceId,
          videoEditFrameTimestampMsByReferenceId,
        },
        longVideo: {
          targetDurationMs,
        },
      };
    };
    this.setAllData = (e) => {
      var { feature, multiFrames, omniReference, longVideo } = e;
      var n = s._(e, ["feature", "multiFrames", "omniReference", "longVideo"]);
      this.setData(n);
      this.featureManager.setData(feature);
      this.multiFramesManager.setData(multiFrames);
      this.omniReferenceManager.setData(omniReference);
      this.longVideoManager.setData(longVideo);
      this.auditReferences();
      this.auditPromptSubjects();
    };
    this.resetData = () =>
      a._(function* () {
        let e;
        const t =
          yield p._dreaminaModelConfigFeatureContainerService.getInstance();
        const { data } = t.videoModelConfigData;
        const a = (data == null ? undefined : data.ok)
          ? (e = data.value.defaultModel) == null
            ? undefined
            : e.key
          : undefined;
        p._dataStore.resetData(a);
        p.syncModelConfig(t.videoModelConfigData);
        p.longVideoManager.resetData();
        p.auditReferences();
        p.auditPromptSubjects();
      })();
    this.resetAllData = () =>
      a._(function* () {
        yield p.resetData();
        p.featureManager.resetFeature();
        p.multiFramesManager.resetFrames();
        p.omniReferenceManager.resetData();
        p.continuationManager.clearContinuation();
        p.longVideoManager.resetData();
      })();
    this.setBatchNumber = (e) => {
      this._dataStore.setBatchNumber(e);
    };
    this.switchModel = (e) => {
      this.modelManager.switchModel(e);
    };
    this.importResourcesFromLocal = (e, t, r) =>
      a._(function* () {
        const {
          acceptedFileTypes,
          reportParams: {
            importMaterialParams: { actionType = "click", pluginSource } = {},
          } = {},
        } = r;
        const { acceptedFiles } = h.g(
          p._containerService,
          e,
          acceptedFileTypes,
        );
        const o = acceptedFiles
          .map((e) => y.f(p._containerService, e))
          .filter(
            (e) =>
              e !== null &&
              (e.type === "image" || e.type === "video" || e.type === "audio"),
          );
        if (o.length) {
          p._metadataStore.setIsReferenceUploading(true);
          const d = yield t(o);
          if (!d.ok) {
            p._metadataStore.setIsReferenceUploading(false);
            p._reportImportResourcesFromLocal(o, {
              status: "fail",
              actionType,
              pluginSource,
              failReason: d.msg,
            });
            return;
          }
          o.forEach((e) => void e.resolveUri());
          yield Promise.all(
            o.filter((e) => e.type === "video").map((e) => e.resolveCoverUrl()),
          );
          p._metadataStore.setIsReferenceUploading(false);
          p._reportImportResourcesFromLocal(o, {
            status: "success",
            actionType,
            pluginSource,
          });
          if (actionType === "paste") {
            p.reportManager.reportPasteUpload(o);
          }
        }
      })();
    this.importImageResourceFromLocal = function (e, t) {
      const r =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return a._(function* () {
        const { acceptedImageFileTypes } = p._metadataStore;
        yield p.importResourcesFromLocal(
          [e],
          (e) => {
            var [r] = e;
            if (r.type === "image") {
              return t(r);
            }
            return Promise.resolve(
              l.xz(
                -1,
                d.Ay.t("upload_material_error", {}, "素材上传失败，请重试"),
              ),
            );
          },
          n._(i._({}, r), {
            acceptedFileTypes: acceptedImageFileTypes,
          }),
        );
      })();
    };
    this.validateReferenceResources = function (e) {
      const t =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return a._(function* () {
        const { imageOptions = b.O, videoOptions, audioOptions } = t;
        const n = yield k.A(e);
        if (!n.ok) {
          return n;
        }
        const s = T.Z({
          materials: e,
          limits: {
            materialLimits: {
              image: imageOptions,
              video: videoOptions,
              audio: audioOptions,
            },
          },
        });
        if (!s.ok) {
          return s;
        }
        const {
          data: { isMultiFramesEngaged },
        } = p.featureManager;
        const { aspectRatioOptions } = p._metadataStore;
        const { aspectRatio } = p._dataStore;
        const m = aspectRatioOptions.map((e) => e.value);
        const h = [
          ...new Set(
            e
              .filter((e) => e.type !== "audio")
              .map((e) => {
                if (e.height) {
                  return P.E(m, e.width / e.height);
                }
              }),
          ),
        ];
        const [_] = h;
        const {
          enforceAspectRatioConsistency = false,
          ignoreExistingAspectRatio = false,
          skipAspectRatioSync = false,
        } = t;
        if (
          enforceAspectRatioConsistency &&
          (h.length > 1 ||
            (!ignoreExistingAspectRatio && aspectRatio && _ !== aspectRatio))
        ) {
          return l.xz(
            -1,
            isMultiFramesEngaged
              ? d.Ay.t(
                  "multiframe_resolution",
                  {},
                  "选择相同比例的素材效果更好哦",
                )
              : d.Ay.t(
                  "web_new_video_new_toast_image_input",
                  {},
                  "请上传比例相同的首尾帧图片",
                ),
          );
        }
        if (!skipAspectRatioSync) {
          p.setAspectRatio(_);
        }
        return l.nj();
      })();
    };
    this.setFirstFrameImage = (e, t) =>
      a._(function* () {
        const { lastFrameImage } = p._dataStore;
        const a = yield p.validateReferenceResources([e], {
          enforceAspectRatioConsistency: !!lastFrameImage,
        });
        if (a.ok) {
          p._dataStore.setFirstFrameImage(e);
          if (!(t == null ? undefined : t.skipAudit)) {
            p.auditReferences();
          }
          return l.nj();
        }
        p._notificationService.warning(a.msg);
        return a;
      })();
    this.setLastFrameImage = (e, t) =>
      a._(function* () {
        const { firstFrameImage } = p._dataStore;
        const a = yield p.validateReferenceResources([e], {
          enforceAspectRatioConsistency: !!firstFrameImage,
        });
        if (!a.ok) {
          p._notificationService.warning(a.msg);
          return a;
        }
        const { switchToSupportedModelForFeature } = p.modelManager;
        const modelKey = p._dataStore.modelKey;
        switchToSupportedModelForFeature("firstLastFrames");
        p._dataStore.setLastFrameImage(e);
        if (
          !(
            (t == null ? undefined : t.skipAudit) ||
            p._dataStore.modelKey !== modelKey
          )
        ) {
          p.auditReferences();
        }
        return l.nj();
      })();
    this.setFirstLastFrameImages = (e, t) =>
      a._(function* () {
        const r = yield p.validateReferenceResources(e, {
          enforceAspectRatioConsistency: true,
          ignoreExistingAspectRatio: true,
        });
        if (!r.ok) {
          p._notificationService.warning(r.msg);
          return r;
        }
        const [a, i] = e;
        const { switchToSupportedModelForFeature } = p.modelManager;
        const modelKey = p._dataStore.modelKey;
        switchToSupportedModelForFeature("firstLastFrames");
        p._dataStore.setFirstFrameImage(a);
        p._dataStore.setLastFrameImage(i);
        if (
          !(
            (t == null ? undefined : t.skipAudit) ||
            p._dataStore.modelKey !== modelKey
          )
        ) {
          p.auditReferences();
        }
        return l.nj();
      })();
    this.importFirstFrameImageFromLocal = (e) =>
      a._(function* () {
        yield p.importImageResourceFromLocal(e, p.setFirstFrameImage);
      })();
    this.importLastFrameImageFromLocal = (e) =>
      a._(function* () {
        yield p.importImageResourceFromLocal(e, p.setLastFrameImage);
      })();
    this.addReferenceResources = (e, t) =>
      a._(function* () {
        const {
          data: { feature },
          migrateToFeature,
        } = p.featureManager;
        if (!e.length || feature !== "firstLastFrames") {
          return l.xz(
            -1,
            d.Ay.t("upload_material_error", {}, "素材上传失败，请重试"),
          );
        }
        const { firstFrameImage, lastFrameImage } = p._dataStore;
        if (
          Number(!!firstFrameImage) + Number(!!lastFrameImage) + e.length >
          2
        ) {
          const { addReferenceResources } = p.multiFramesManager;
          yield migrateToFeature("multiFrames");
          return addReferenceResources(e, t);
        }
        if (e.length === 2) {
          const [o, u] = e;
          return p.setFirstLastFrameImages([o, u], t);
        }
        const [c] = e;
        if (firstFrameImage) {
          return p.setLastFrameImage(c, t);
        }
        return p.setFirstFrameImage(c, t);
      })();
    this.setPrompt = (e) => {
      this._dataStore.setPrompt(e);
    };
    this.changePrompt = (e) => {
      this.setPrompt(e);
      var { isPromptEmpty, promptValidationResult } = this._dataStore;
      if (!(isPromptEmpty || promptValidationResult.ok)) {
        this._notificationService.warning(promptValidationResult.msg);
      }
      if (this.reportManager.promptSource === "template") {
        this.reportManager.updateResourceReportParams({
          promptSource: "template_edit",
        });
      }
    };
    this.changeAspectRatio = (e) => {
      this.setAspectRatio(e);
      this.reportManager.reportSwitchAspectRatio();
    };
    this.changeResolution = (e) => {
      this.setResolution(e);
      this.reportManager.reportSwitchResolution();
    };
    this.changeDurationMs = (e) => {
      this.setDurationMs(e);
      this.reportManager.reportSwitchVideoDuration();
    };
    this.changeLensMovementRecipe = (e) => {
      this._dataStore.setLensMovementRecipe(e || undefined);
      if (!e || !this._metadataStore.currentLensMovementRecipe) {
        this._dataStore.setLensMovementStrength(undefined);
        this.reportManager.reportSwitchMovementType();
        return;
      }
      var { lensMovementStrength } = this.data;
      var {
        currentLensMovementRecipe: { defaultStrength, strengths },
      } = this._metadataStore;
      if (
        !(strengths == null
          ? undefined
          : strengths.some((e) => e.key === lensMovementStrength))
      ) {
        this._dataStore.setLensMovementStrength(defaultStrength);
      }
      this.reportManager.reportSwitchMovementType();
    };
    this.changeLensMovementStrength = (e) => {
      this._dataStore.setLensMovementStrength(e);
      this.reportManager.reportSwitchMovementStrength();
    };
    this.swapReferenceImages = () => {
      var { firstFrameImage, lastFrameImage } = this._dataStore;
      this.modelManager.switchToSupportedModelForFeature("firstLastFrames");
      this._dataStore.setFirstFrameImage(lastFrameImage);
      this._dataStore.setLastFrameImage(firstFrameImage);
      this.reportManager.reportExchangeBgimagePosition();
    };
    this.removeFirstFrameImage = () => {
      this._resetFirstFrameImage();
      this.auditReferences();
      this._dataStore.setLensMovementRecipe(undefined);
      this._dataStore.setLensMovementStrength(undefined);
      this.reportManager.reportDeleteImage();
    };
    this.removeLastFrameImage = () => {
      this._resetLastFrameImage();
      this.auditReferences();
      this.reportManager.reportDeleteImage();
    };
    this.resetReferenceImages = () => {
      this._resetFirstFrameImage();
      this._resetLastFrameImage();
      this.auditReferences();
    };
    this.setAspectRatio = (e) => {
      this._dataStore.setAspectRatio(e);
    };
    this.setResolution = (e) => {
      this._dataStore.setResolution(e);
    };
    this.syncResolutionWithModel = (e) => {
      this._dataStore.syncResolutionWithModel(e);
    };
    this.setDurationMs = (e) => {
      this._dataStore.setDurationMs(e);
    };
    this.updateFps = (e) => {
      this._dataStore.setFps(e);
    };
    this.pasteAsReferences = (e) =>
      a._(function* () {
        const { acceptedImageFileTypes } = p._metadataStore;
        const { acceptedFiles } = h.g(
          p._containerService,
          I.o(e.clipboardData),
          acceptedImageFileTypes,
        );
        if (acceptedFiles.length !== 0) {
          e.preventDefault();
          yield p.importResourcesFromLocal(
            acceptedFiles,
            (e) => p.addReferenceResources(e.filter((e) => e.type === "image")),
            {
              acceptedFileTypes: acceptedImageFileTypes,
              reportParams: {
                importMaterialParams: {
                  actionType: "paste",
                },
              },
            },
          );
        }
      })();
    this.auditReferences = () => {
      var e;
      return this.referenceAuditManager.auditResources(
        this.getReferencesForAudit(),
        {
          scene: f.EZ.VideoGenerate,
          modelKey: (e = this._dataStore.model) == null ? undefined : e.key,
        },
      );
    };
    this.getReferencesForAudit = () => {
      var { references } = this._dataStore;
      if (!this.featureManager.data.isVideoEditEngaged) {
        return references;
      }
      var { videoEditFrameTimestampMsByReferenceId } =
        this.omniReferenceManager.data;
      return references.filter(
        (e) => typeof videoEditFrameTimestampMsByReferenceId[e.id] !== "number",
      );
    };
    this.auditPromptSubjects = function () {
      let e;
      const t =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : m.omniReferenceManager.data.promptContents;
      return m.referenceAuditManager.auditSubjects(F.X(t), {
        scene: f.EZ.VideoGenerate,
        modelKey: (e = m._dataStore.model) == null ? undefined : e.key,
      });
    };
    this._resetFirstFrameImage = () => {
      var { firstFrameImage } = this._dataStore;
      this.reportManager.deleteReferenceParams(
        firstFrameImage == null ? undefined : firstFrameImage.uri,
      );
      this._dataStore.resetFirstFrameImage();
    };
    this._resetLastFrameImage = () => {
      var { lastFrameImage } = this._dataStore;
      this.reportManager.deleteReferenceParams(
        lastFrameImage == null ? undefined : lastFrameImage.uri,
      );
      this._dataStore.resetLastFrameImage();
    };
    this._initSubjectChangeListeners();
  }
}
export { rr as a };
rr = o.Cg(
  [
    o.Qj(1, p._),
    o.Qj(2, M.H),
    o.Qj(3, m.Ot),
    o.Qj(4, _.Y),
    o.Qj(5, g.I),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof ContentGeneratorManager === "undefined"
        ? Object
        : ContentGeneratorManager,
      p._ === undefined ? Object : p._,
      M.H === undefined ? Object : M.H,
      m.Ot === undefined ? Object : m.Ot,
      _.Y === undefined ? Object : _.Y,
      g.I === undefined ? Object : g.I,
    ]),
  ],
  rr,
);
