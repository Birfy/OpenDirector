import n from "NY";
import o from "oa";
import a from "bk";
import l from "QWK";
import r from "bE";
import d from "K8";
import u from "A7";
import s from "jnc";
import g from "M4";
import c from "RII";
import { Y } from "./module-EH_2.js";
import { J } from "./module-G9I.js";
import { G } from "./module-HSi.js";
import p from "VhU";
import { a as a_1 } from "./module-G12.js";
const _ = new Set();
function C(e) {
  if (typeof window !== "undefined" && typeof Image !== "undefined") {
    window.setTimeout(() => {
      for (var i of e) {
        if (!(!i || _.has(i))) {
          _.add(i);
          var t = new Image();
          t.crossOrigin = "anonymous";
          t.decoding = "async";
          t.src = i;
        }
      }
    }, 0);
  }
}
function y(msg) {
  if (msg.length <= 4000) {
    return msg;
  }
  return ""
    .concat(msg.slice(0, 4000), "…(truncated,len=")
    .concat(msg.length, ")");
}
function M(e) {
  C(e.modelList.flatMap((e) => [e.coverUrl, e.iconUrl]));
}
export class k {
  get imageModelConfigData() {
    return this._imageModelData;
  }
  get videoModelConfigData() {
    return this._videoModelData;
  }
  get actionCopyModelConfigData() {
    return this._actionCopyModelData;
  }
  get digitalHumanModelConfigData() {
    return this._digitalHumanModelData;
  }
  get agenticModelConfigData() {
    return this._agentModelData;
  }
  get audioModelConfigData() {
    return this._audioModelData;
  }
  get isImageModelReady() {
    return !!this._imageModelData.data && !this._imageModelData.loading;
  }
  get isVideoModelReady() {
    return !!this._videoModelData.data && !this._videoModelData.loading;
  }
  get isActionCopyModelReady() {
    return (
      !!this._actionCopyModelData.data && !this._actionCopyModelData.loading
    );
  }
  get isDigitalHumanModelReady() {
    return (
      !!this._digitalHumanModelData.data && !this._digitalHumanModelData.loading
    );
  }
  get isAgentModelReady() {
    return !!this._agentModelData.data && !this._agentModelData.loading;
  }
  get isAudioModelReady() {
    return !!this._audioModelData.data && !this._audioModelData.loading;
  }
  get isAllConfigReady() {
    return (
      this.isImageModelReady &&
      this.isVideoModelReady &&
      this.isActionCopyModelReady &&
      this.isDigitalHumanModelReady &&
      this.isAgentModelReady &&
      this.isAudioModelReady
    );
  }
  get onImageConfigUpdated() {
    return this._onImageConfigUpdated.event;
  }
  get onVideoConfigUpdated() {
    return this._onVideoConfigUpdated.event;
  }
  get onActionCopyConfigUpdated() {
    return this._onActionCopyConfigUpdated.event;
  }
  get onDigitalHumanConfigUpdated() {
    return this._onDigitalHumanConfigUpdated.event;
  }
  get onAgenticConfigUpdated() {
    return this._onAgentConfigUpdated.event;
  }
  get onAudioConfigUpdated() {
    return this._onAudioConfigUpdated.event;
  }
  get onAllConfigUpdated() {
    return this._onAllConfigUpdated.event;
  }
  waitForLoggedConfigsReady() {
    return this._loggedConfigsLocker.awaitForInit();
  }
  bootstrap() {
    return n
      ._(function* () {
        const e = yield this._fetchAllConfigs();
        if (this._accountService.hasLogin) {
          this._loggedConfigsLocker.initDone();
        }
        return e;
      })
      .call(this);
  }
  fetchImageModelConfig(e) {
    return n
      ._(function* () {
        this._imageModelData.loading = true;
        this._onImageConfigUpdated.fire(this._imageModelData);
        const i = yield this._imageModelConfigDataService.fetchImageModelConfig(
          e || {},
        );
        this._imageModelData = {
          loading: false,
          data: i,
        };
        if (i.ok) {
          C(i.value.modelList.flatMap((e) => [e.coverUrl, e.iconUrl]));
        } else {
          this._reportService.reportDevError("image_model_fetch_error", i, {
            isRefresh: String(e == null ? undefined : e.needRefresh),
          });
        }
        this._onImageConfigUpdated.fire(this._imageModelData);
        return i;
      })
      .call(this);
  }
  fetchActionCopyModelConfig(e) {
    return n
      ._(function* () {
        this._actionCopyModelData.loading = true;
        this._onActionCopyConfigUpdated.fire(this._actionCopyModelData);
        const i = yield this._videoModelConfigDataService.fetchVideoModelConfig(
          a._(o._({}, e), {
            scene: p.kR.ImitatorGenerateVideo,
          }),
        );
        this._actionCopyModelData = {
          loading: false,
          data: i,
        };
        if (i.ok) {
          M(i.value);
        } else {
          this._reportService.reportDevError(
            "action_copy_model_fetch_error",
            i,
            {
              isRefresh: String(e == null ? undefined : e.needRefresh),
            },
          );
        }
        this._onActionCopyConfigUpdated.fire(this._actionCopyModelData);
        return i;
      })
      .call(this);
  }
  fetchVideoModelConfig(e) {
    return n
      ._(function* () {
        this._videoModelData.loading = true;
        this._onVideoConfigUpdated.fire(this._videoModelData);
        const i = yield this._videoModelConfigDataService.fetchVideoModelConfig(
          a._(o._({}, e), {
            scene: p.kR.GenerateVideo,
          }),
        );
        this._videoModelData = {
          loading: false,
          data: i,
        };
        if (i.ok) {
          M(i.value);
        } else {
          this._reportService.reportDevError("video_model_fetch_error", i, {
            isRefresh: String(e == null ? undefined : e.needRefresh),
          });
        }
        this._onVideoConfigUpdated.fire(this._videoModelData);
        return i;
      })
      .call(this);
  }
  fetchDigitalHumanModelConfig(e) {
    return n
      ._(function* () {
        this._digitalHumanModelData.loading = true;
        this._onDigitalHumanConfigUpdated.fire(this._digitalHumanModelData);
        try {
          const [i, t] = yield Promise.all([
            this._videoModelConfigDataService.fetchVideoModelConfig(
              a._(o._({}, e), {
                scene: p.kR.LipSyncImageGenerateVideo,
              }),
            ),
            this._videoModelConfigDataService.fetchVideoModelConfig(
              a._(o._({}, e), {
                scene: p.kR.LipSyncVideoGenerateVideo,
              }),
            ),
          ]);
          const imageModels = i.ok ? i.value.modelList : [];
          const videoModels = t.ok ? t.value.modelList : [];
          const defaultImageModel = i.ok ? i.value.defaultModel : undefined;
          const defaultVideoModel = t.ok ? t.value.defaultModel : undefined;
          const disabled =
            (!i.ok || i.value.disabled) && (!t.ok || t.value.disabled);
          const g = {
            imageModels,
            videoModels,
            defaultImageModel,
            defaultVideoModel,
            disabled,
          };
          this._digitalHumanModelData = {
            loading: false,
            data: d.TZ(g),
          };
          C(
            [...g.imageModels, ...g.videoModels].flatMap((e) => [
              e.coverUrl,
              e.iconUrl,
            ]),
          );
          if (!i.ok || !t.ok) {
            let c;
            c = e == null ? undefined : e.needRefresh;
            const m = {
              isRefresh: String(c),
              lipSyncImageScene: p.kR.LipSyncImageGenerateVideo,
              lipSyncVideoScene: p.kR.LipSyncVideoGenerateVideo,
              lipSyncImageOk: String(i.ok),
              lipSyncVideoOk: String(t.ok),
              lipSyncImageCode: i.ok ? "" : String(i.code),
              lipSyncImageMsg: i.ok ? "" : y(i.msg),
              lipSyncVideoCode: t.ok ? "" : String(t.code),
              lipSyncVideoMsg: t.ok ? "" : y(t.msg),
            };
            const f = i.ok
              ? "".concat(p.kR.LipSyncImageGenerateVideo, ":ok")
              : ""
                  .concat(p.kR.LipSyncImageGenerateVideo, ":code=")
                  .concat(i.code, " msg=")
                  .concat(y(i.msg));
            const v = t.ok
              ? "".concat(p.kR.LipSyncVideoGenerateVideo, ":ok")
              : ""
                  .concat(p.kR.LipSyncVideoGenerateVideo, ":code=")
                  .concat(t.code, " msg=")
                  .concat(y(t.msg));
            this._reportService.reportDevError(
              "digital_human_model_fetch_error",
              Error(
                "Failed to fetch digital human model configs | "
                  .concat(f, " | ")
                  .concat(v),
              ),
              m,
            );
          }
          this._onDigitalHumanConfigUpdated.fire(this._digitalHumanModelData);
          return d.TZ(g);
        } catch (error) {
          const h = {
            imageModels: [],
            videoModels: [],
            defaultImageModel: undefined,
            defaultVideoModel: undefined,
            disabled: false,
          };
          this._digitalHumanModelData = {
            loading: false,
            data: d.TZ(h),
          };
          this._reportService.reportDevError(
            "digital_human_model_fetch_error",
            error,
            {
              isRefresh: String(e == null ? undefined : e.needRefresh),
            },
          );
          this._onDigitalHumanConfigUpdated.fire(this._digitalHumanModelData);
          return d.TZ(h);
        }
      })
      .call(this);
  }
  fetchAgentModelConfig(e) {
    return n
      ._(function* () {
        const i = ++this._agentConfigRequestId;
        const uniqueId = this._accountService.uniqueId;
        this._agentModelData.loading = true;
        this._onAgentConfigUpdated.fire(this._agentModelData);
        const n = yield this._agentModelConfigDataService.fetchAgentConfig(
          e || {},
        );
        if (
          !(
            i !== this._agentConfigRequestId ||
            uniqueId !== this._accountService.uniqueId
          )
        ) {
          this._agentModelData = {
            loading: false,
            data: n,
          };
          if (!n.ok) {
            this._reportService.reportDevError("agent_model_fetch_error", n, {
              isRefresh: String(e == null ? undefined : e.needRefresh),
            });
          }
          this._onAgentConfigUpdated.fire(this._agentModelData);
        }
        return n;
      })
      .call(this);
  }
  fetchAudioModelConfig(e) {
    return n
      ._(function* () {
        this._audioModelData.loading = true;
        this._onAudioConfigUpdated.fire(this._audioModelData);
        const i = yield this._audioModelConfigDataService.fetchAudioModelConfig(
          e || {},
        );
        this._audioModelData = {
          loading: false,
          data: i,
        };
        if (i.ok) {
          C(
            Object.values(i.value).flatMap((e) =>
              e.modelList.flatMap((e) => [e.coverUrl, e.iconUrl]),
            ),
          );
        } else {
          this._reportService.reportDevError("audio_model_fetch_error", i, {
            isRefresh: String(e == null ? undefined : e.needRefresh),
          });
        }
        this._onAudioConfigUpdated.fire(this._audioModelData);
        return i;
      })
      .call(this);
  }
  getImageModelConfig(e) {
    const { data } = this._imageModelData;
    if (data == null ? undefined : data.ok) {
      return data.value.modelList.find((i) => i.key === e);
    }
  }
  getVideoModelConfig(e) {
    const { data } = this._videoModelData;
    if (data == null ? undefined : data.ok) {
      return data.value.modelList.find((i) => i.key === e);
    }
  }
  getActionCopyModelConfig(e) {
    const { data } = this._actionCopyModelData;
    if (data == null ? undefined : data.ok) {
      return data.value.modelList.find((i) => i.key === e);
    }
  }
  getDigitalHumanModelConfig(e) {
    const { data } = this._digitalHumanModelData;
    if (data == null ? undefined : data.ok) {
      return [...data.value.imageModels, ...data.value.videoModels].find(
        (i) => i.key === e,
      );
    }
  }
  getAudioModelConfig(e) {
    const { data } = this._audioModelData;
    if (data == null ? undefined : data.ok) {
      for (const t of Object.values(data.value)) {
        const n = t.modelList.find((i) => i.key === e);
        if (n) {
          return n;
        }
      }
    }
  }
  getImageModelConfigAsync(e) {
    if (this._imageModelData.loading) {
      const { promise, resolve } = s.v6();
      var n = this.onImageConfigUpdated(() => {
        resolve(this.getImageModelConfig(e));
        n.dispose();
      });
      return promise;
    }
    return Promise.resolve(this.getImageModelConfig(e));
  }
  getVideoModelConfigAsync(e) {
    if (this._videoModelData.loading) {
      const { promise, resolve } = s.v6();
      var n = this.onVideoConfigUpdated(() => {
        resolve(this.getVideoModelConfig(e));
        n.dispose();
      });
      return promise;
    }
    return Promise.resolve(this.getVideoModelConfig(e));
  }
  getActionCopyModelConfigAsync(e) {
    if (this._actionCopyModelData.loading) {
      const { promise, resolve } = s.v6();
      var n = this.onActionCopyConfigUpdated(() => {
        resolve(this.getActionCopyModelConfig(e));
        n.dispose();
      });
      return promise;
    }
    return Promise.resolve(this.getActionCopyModelConfig(e));
  }
  getDigitalHumanModelConfigAsync(e) {
    if (this._digitalHumanModelData.loading) {
      const { promise, resolve } = s.v6();
      var n = this.onDigitalHumanConfigUpdated(() => {
        resolve(this.getDigitalHumanModelConfig(e));
        n.dispose();
      });
      return promise;
    }
    return Promise.resolve(this.getDigitalHumanModelConfig(e));
  }
  getAudioModelConfigAsync(e) {
    if (this._audioModelData.loading) {
      const { promise, resolve } = s.v6();
      var n = this.onAudioConfigUpdated(() => {
        resolve(this.getAudioModelConfig(e));
        n.dispose();
      });
      return promise;
    }
    return Promise.resolve(this.getAudioModelConfig(e));
  }
  getDefaultImageModelKey() {
    let e;
    const { data } = this._digitalHumanModelData;
    if (data == null ? undefined : data.ok) {
      if ((e = data.value.defaultImageModel) == null) {
        return undefined;
      }
      return e.key;
    }
  }
  getDefaultVideoModelKey() {
    let e;
    const { data } = this._digitalHumanModelData;
    if (data == null ? undefined : data.ok) {
      if ((e = data.value.defaultVideoModel) == null) {
        return undefined;
      }
      return e.key;
    }
  }
  _refreshConfigsAfterLogin() {
    return n
      ._(function* () {
        yield this._refreshAllConfigs();
        if (!this._loggedConfigsLocker.hasBeenDone) {
          this._loggedConfigsLocker.initDone();
        }
      })
      .call(this);
  }
  _refreshAllConfigs() {
    return this._fetchAllConfigs(true);
  }
  _fetchAllConfigs() {
    const needRefresh =
      arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    return n
      ._(function* () {
        const i = (yield Promise.all([
          this.fetchImageModelConfig({
            isClientFilter: true,
            needBetaModel: true,
            needRefresh,
          }),
          this.fetchVideoModelConfig({
            needRefresh,
          }),
          this.fetchActionCopyModelConfig({
            needRefresh,
          }),
          this.fetchDigitalHumanModelConfig({
            needRefresh,
          }),
          this.fetchAgentModelConfig({
            needCache: true,
            needRefresh,
          }),
          this.fetchAudioModelConfig({
            needCache: true,
            needRefresh,
          }),
        ])).find((e) => !e.ok);
        return i || d.nj();
      })
      .call(this);
  }
  constructor(e, i, t, n, o, a) {
    this._imageModelConfigDataService = e;
    this._videoModelConfigDataService = i;
    this._agentModelConfigDataService = t;
    this._audioModelConfigDataService = n;
    this._accountService = o;
    this._reportService = a;
    this._imageModelData = {
      data: null,
      loading: false,
    };
    this._videoModelData = {
      data: null,
      loading: false,
    };
    this._actionCopyModelData = {
      data: null,
      loading: false,
    };
    this._digitalHumanModelData = {
      data: null,
      loading: false,
    };
    this._agentModelData = {
      data: null,
      loading: false,
    };
    this._agentConfigRequestId = 0;
    this._audioModelData = {
      data: null,
      loading: false,
    };
    this._loggedConfigsLocker = new g.k();
    this._onImageConfigUpdated = new u.v();
    this._onVideoConfigUpdated = new u.v();
    this._onActionCopyConfigUpdated = new u.v();
    this._onDigitalHumanConfigUpdated = new u.v();
    this._onAgentConfigUpdated = new u.v();
    this._onAudioConfigUpdated = new u.v();
    this._onAllConfigUpdated = new u.v();
    this._accountService.onDidLogin(() => {
      this._refreshConfigsAfterLogin();
    });
    this._accountService.onDidLogout(() => {
      this._agentConfigRequestId += 1;
      this._agentModelData = {
        data: null,
        loading: false,
      };
      this._onAgentConfigUpdated.fire(this._agentModelData);
    });
  }
}
k = l.Cg(
  [
    l.Qj(0, G),
    l.Qj(1, a_1),
    l.Qj(2, Y),
    l.Qj(3, J),
    l.Qj(4, r.c),
    l.Qj(5, c.l),
    l.Sn("design:type", Function),
    l.Sn("design:paramtypes", [
      G === undefined ? Object : G,
      a_1 === undefined ? Object : a_1,
      Y === undefined ? Object : Y,
      J === undefined ? Object : J,
      r.c === undefined ? Object : r.c,
      c.l === undefined ? Object : c.l,
    ]),
  ],
  k,
);
