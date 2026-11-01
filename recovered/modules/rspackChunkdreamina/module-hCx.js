import a from "NY";
import i from "QWK";
import n from "dw4";
import o from "bE";
import s from "A7";
import l from "Kt";
import c from "nss";
import { c as c_1 } from "./module-iFl.js";
import { q } from "./module-R42.js";
import { y as y_1 } from "./module-N2I.js";
import { p as p_1 } from "./module-R9z.js";
import m from "ps0";
import p from "u0x";
import _ from "BdX";
import v from "bQa";
import f from "k77";
import S from "oz5";
import y from "KkU";
export class C {
  getSpecificGeneratorManager(e) {
    return this["".concat(e, "GeneratorManager")];
  }
  preloadMetadata() {
    this._voiceService.preloadMetadata();
    n.z7(
      () =>
        this.contentGeneratorManager.data.contentGeneratorType === "actionCopy",
      () => this.actionCopyGeneratorManager.preloadMetadata(),
    );
  }
  _registerModelConfigListeners() {
    return a
      ._(function* () {
        const e =
          yield this._dreaminaModelConfigFeatureContainerService.getInstance();
        const {
          videoModelConfigData,
          imageModelConfigData,
          actionCopyModelConfigData,
          digitalHumanModelConfigData,
          agenticModelConfigData,
          audioModelConfigData,
        } = e;
        e.onVideoConfigUpdated((e) => {
          this.videoGeneratorManager.syncModelConfig(e);
        });
        e.onImageConfigUpdated((e) => {
          this.imageGeneratorManager.syncModelConfig(e);
        });
        e.onActionCopyConfigUpdated((e) => {
          this.actionCopyGeneratorManager.syncModelConfig(e);
        });
        e.onDigitalHumanConfigUpdated((e) => {
          this.digitalHumanGeneratorManager.syncModelConfig(e);
        });
        e.onAgenticConfigUpdated((e) => {
          this.agenticGeneratorManager.syncModelConfig(e);
        });
        e.onAudioConfigUpdated((e) => {
          this.musicGeneratorManager.syncModelConfig(e);
          this.audioGeneratorManager.syncModelConfig(e);
        });
        this.videoGeneratorManager.syncModelConfig(videoModelConfigData);
        this.imageGeneratorManager.syncModelConfig(imageModelConfigData);
        this.actionCopyGeneratorManager.syncModelConfig(
          actionCopyModelConfigData,
        );
        this.digitalHumanGeneratorManager.syncModelConfig(
          digitalHumanModelConfigData,
        );
        this.agenticGeneratorManager.syncModelConfig(agenticModelConfigData);
        this.musicGeneratorManager.syncModelConfig(audioModelConfigData);
        this.audioGeneratorManager.syncModelConfig(audioModelConfigData);
      })
      .call(this);
  }
  constructor(e, t, r, a) {
    this._containerService = e;
    this._accountService = t;
    this._dreaminaModelConfigFeatureContainerService = r;
    this._voiceService = a;
    this.contentGeneratorManager = this._containerService.createInstance(
      f.I,
      this,
    );
    this.contentGeneratorDataAdapter = this._containerService.createInstance(
      c_1,
      this,
    );
    this.actionCopyGeneratorManager = this._containerService.createInstance(q);
    this.agenticGeneratorManager = this._containerService.createInstance(
      y_1,
      this.contentGeneratorManager,
    );
    this.audioGeneratorManager = this._containerService.createInstance(
      p_1,
      this.contentGeneratorManager,
    );
    this.digitalHumanGeneratorManager = this._containerService.createInstance(
      m.A,
      this.contentGeneratorManager,
    );
    this.imageGeneratorManager = this._containerService.createInstance(
      p.O,
      this.contentGeneratorManager,
    );
    this.musicGeneratorManager = this._containerService.createInstance(_.i);
    this.videoGeneratorManager = this._containerService.createInstance(
      v.a,
      this.contentGeneratorManager,
    );
    this.contentGeneratorReportManager = this._containerService.createInstance(
      S.g,
      this,
    );
    this._onContentGeneratorTypeChange = new s.v();
    this.onContentGeneratorTypeChange =
      this._onContentGeneratorTypeChange.event;
    this._onVisibleContentGeneratorInstanceChange = new s.v();
    this.onVisibleContentGeneratorInstanceChange =
      this._onVisibleContentGeneratorInstanceChange.event;
    this.render = () => null;
    n.mJ(
      () => this.contentGeneratorManager.data.contentGeneratorType,
      (e) => {
        this._onContentGeneratorTypeChange.fire(e);
      },
    );
    n.mJ(
      () => this.contentGeneratorManager.data.visibleContentGeneratorInstanceId,
      () => {
        this._onVisibleContentGeneratorInstanceChange.fire(
          this.contentGeneratorManager.visibleContentGeneratorInstance,
        );
      },
    );
    var i = this._accountService.onDidLogin(() => {
      this.preloadMetadata();
      i.dispose();
    });
    this._registerModelConfigListeners();
  }
}
C = i.Cg(
  [
    i.Qj(0, l._),
    i.Qj(1, o.c),
    i.Qj(2, c.Y),
    i.Qj(3, y.h),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      l._ === undefined ? Object : l._,
      o.c === undefined ? Object : o.c,
      c.Y === undefined ? Object : c.Y,
      y.h === undefined ? Object : y.h,
    ]),
  ],
  C,
);
