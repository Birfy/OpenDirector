import r from "NY";
import o from "oa";
import n from "bk";
import a from "QWK";
import s from "Qey";
import c from "K8";
import l from "si5";
import u from "aEB";
import d from "Kt";
import h from "AAv";
import v from "kT";
import _ from "Qxy";
import p from "UuA";
import { C7, Ci, aY, tx } from "./module-wsY.js";
import { W } from "./module-yDb.js";
import f from "o7";
import y from "Ik";
import S from "JSz";
import C from "fHC";
import b from "sMA";
import V from "qq";
import I from "dw4";
import M from "qa";
import j from "ai0";
import R from "GRv";
import { m } from "./module-FKP.js";
class T {
  get acceptedAudioFileTypes() {
    return {
      "audio/mpeg": [".mp3"],
      "audio/wav": [".wav"],
      "audio/ogg": [".ogg"],
      "audio/m4a": [".m4a"],
      "audio/x-m4a": [".m4a"],
      "audio/aac": [".aac"],
      "audio/flac": [".flac"],
    };
  }
  get isVoiceCloningDisabled() {
    const {
      metadata: { clonedVoices },
    } = this._voiceService;
    return clonedVoices.length >= this.maxClonedVoiceCount;
  }
  get voiceCloningTooltipProps() {
    return {
      content: this.isVoiceCloningDisabled
        ? s.Ay.t(
            "character_button_reach_limit",
            {},
            "音色超出上限，删除音色后可继续创建",
          )
        : s.Ay.t(
            "character_button_hover_create_sound",
            {},
            "请上传大于 5s，包含清晰人声的音频",
          ),
    };
  }
  setMaxClonedVoiceCount(e) {
    this.maxClonedVoiceCount = e;
  }
  constructor(e) {
    this._voiceService = e;
    this.maxClonedVoiceCount = 50;
    I.l_(this);
  }
}
class k extends f.jG {
  removeCloningSocketTask(e) {
    delete this._websocketInfoMap[e];
  }
  _getSubmitIdByVoiceId(e) {
    let t;
    if (
      (t = Object.entries(this._taskMap).find((t) => {
        var [i, r] = t;
        return r.voiceId === e;
      })) == null
    ) {
      return undefined;
    }
    return t[0];
  }
  _updateTaskVoiceId(e, t) {
    if (e in this._taskMap) {
      this._taskMap[e].voiceId = t;
    }
  }
  _reportVoiceCloningFail(e) {
    this._reportVoiceCloneStatus(
      o._(
        {
          status: "fail",
        },
        e,
      ),
    );
  }
  _removeTask(e) {
    delete this._taskMap[e];
  }
  _reportVoiceCloningSuccess(e) {
    this._reportVoiceCloneStatus(
      o._(
        {
          status: "success",
        },
        e,
      ),
    );
  }
  _reportVoiceCloneStatus(e) {
    const { submitId } = e;
    if (submitId in this._taskMap) {
      const { startTime, voiceDuration } = this._taskMap[submitId];
      const n = this._containerService.createInstance(m);
      n.setParams(
        o._(
          {
            processDuration: Date.now() - startTime,
            voiceDuration,
          },
          e,
        ),
      );
      n.report();
    }
  }
  _reportPerfDualChannelMetricsTracker(e) {
    const { voiceId } = e;
    const i = M._(e, ["voiceId"]);
    if (voiceId in this._websocketInfoMap) {
      const { startTime, fallbackReason, pollingCount } =
        this._websocketInfoMap[voiceId];
      this._containerService
        .createInstance(
          R.$,
          o._(
            {
              scene: "voice_clone",
              fallbackReason,
              costTime: Date.now() - startTime,
              pollingCount,
              extra: JSON.stringify({
                voiceId,
              }),
            },
            i,
          ),
        )
        .report("dev");
      this.removeCloningSocketTask(voiceId);
    }
  }
  constructor(e) {
    super();
    this._containerService = e;
    this._taskMap = {};
    this._websocketInfoMap = {};
    this.addTask = (e, t, voiceDuration, r) => {
      this._taskMap[e] = {
        startTime: t,
        voiceDuration,
        voiceId: r,
      };
    };
    this.addWebsocketInfo = (e, t, fallbackReason) => {
      this._websocketInfoMap[e] = {
        startTime: t,
        fallbackReason,
        pollingCount: 0,
      };
    };
    this.updateWebSocketFallbackReason = (e, t) => {
      if (e in this._websocketInfoMap) {
        this._websocketInfoMap[e].fallbackReason = t;
      }
    };
    this.addPollingCount = (e) => {
      if (e in this._websocketInfoMap) {
        this._websocketInfoMap[e].pollingCount++;
      }
    };
    this.reportImportVoiceMaterial = (e) => {
      var t = this._containerService.createInstance(j.k);
      t.setParams(
        o._(
          {
            materialSource: "local",
            materialType: "audio",
            actionType: "click",
            position: "voice_clone",
          },
          e,
        ),
      );
      t.report();
    };
    this.reportVoiceCloningTaskStatus = (e, t) => {
      if (!t.ok) {
        return void this._reportVoiceCloningFail({
          submitId: e,
          errorMsg: t.msg,
          errorCode: String(t.code),
        });
      }
      var {
        value: { voice },
      } = t;
      var {
        id,
        voiceCloning: { status },
      } = voice;
      this._updateTaskVoiceId(e, id);
      if (status !== C.$Q.Generating) {
        if (status === C.$Q.Success) {
          this._reportVoiceCloningSuccess({
            submitId: e,
          });
        }
        if (status === C.$Q.Fail) {
          this._reportVoiceCloningFail({
            submitId: e,
            errorMsg: "voice clone fail, status: ".concat(status),
          });
        }
        this._removeTask(e);
      }
    };
    this.reportVoiceCloningPollingStatus = (e, t) => {
      var i = this._getSubmitIdByVoiceId(e);
      if (i) {
        if (!t.ok) {
          return void this._reportVoiceCloningFail({
            submitId: i,
            errorMsg: t.msg,
            errorCode: String(t.code),
          });
        }
        var {
          value: {
            voiceCloning: { status },
          },
        } = t;
        if (status !== C.$Q.Generating) {
          if (status === C.$Q.Success) {
            this._reportVoiceCloningSuccess({
              submitId: i,
            });
          }
          if (status === C.$Q.Fail) {
            this._reportVoiceCloningFail({
              submitId: i,
              errorMsg: "voice clone fail, status: ".concat(status),
            });
          }
          this._removeTask(i);
        }
      }
    };
    this.reportVoiceCloningResult = (e, t, channel) => {
      this._reportPerfDualChannelMetricsTracker({
        channel,
        status: t === C.$Q.Success ? "success" : "fail",
        voiceId: e,
      });
    };
  }
}
k = a.Cg(
  [
    a.Qj(0, d._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [d._ === undefined ? Object : d._]),
  ],
  k,
);
class x extends f.jG {
  get metadata() {
    return this._voiceCloningMetadataStore;
  }
  get _clonedVoiceBaseName() {
    return s.Ay.t("web_avatar_audio_my_voices", {}, "我的音色");
  }
  loadClonedVoices() {
    return r
      ._(function* () {
        const { updateClonedVoices } = this._voiceService;
        updateClonedVoices({
          loading: true,
          error: undefined,
        });
        const t = yield this._fetchClonedVoices();
        updateClonedVoices(
          o._(
            {
              loading: false,
            },
            t.ok
              ? {
                  data: t.value,
                }
              : {
                  error: t.findJsError(),
                },
          ),
        );
      })
      .call(this);
  }
  loadVoiceCloningConfigs() {
    return r
      ._(function* () {
        const e = yield this._imcConfigService.getImcConfigByKey(
          h.r1.GenerateVoiceConfigs,
        );
        if (e == null ? undefined : e.length) {
          const [{ generateToneMaxCount }] = e;
          this._voiceCloningMetadataStore.setMaxClonedVoiceCount(
            generateToneMaxCount,
          );
        }
      })
      .call(this);
  }
  _cloneVoice(e, t) {
    return r
      ._(function* () {
        try {
          let i;
          let r;
          let n;
          let a;
          const { reportParams: { importMaterialParams } = {} } =
            t != null ? t : {};
          const u = (t) => {
            if (e.file) {
              this._reportManager.reportImportVoiceMaterial(
                o._({}, importMaterialParams, t),
              );
            }
          };
          yield this._mutex.lock();
          const { isVoiceCloningDisabled } = this.metadata;
          if (isVoiceCloningDisabled) {
            this._notificationService.warning(
              s.Ay.t(
                "character_button_reach_limit",
                {},
                "音色超出上限，删除音色后可继续创建",
              ),
            );
            const h = c.xz(-1, "cloned voice count reach limit");
            u({
              status: "fail",
              failReason: h.msg,
            });
            return h;
          }
          const v = yield e.resolveMetadata();
          if (!v || v.duration < 5 || v.duration > 30) {
            this._notificationService.warning(
              s.Ay.t(
                "character_toast_create_sound_failed",
                {},
                "音色创建失败。请上传 5～30s，包含清晰人声的音频",
              ),
            );
            const _ = c.xz(-1, "illegal audio duration");
            u({
              status: "fail",
              failReason: _.msg,
            });
            return _;
          }
          const vid = yield e.resolveUri();
          if (!vid) {
            this._notificationService.warning(
              s.Ay.t("web_new_character_audio_upload_fail", {}, "上传失败"),
            );
            const m = c.xz(-1, "upload audio material error");
            u({
              status: "fail",
              failReason: m.msg,
            });
            return m;
          }
          u({
            status: "success",
          });
          const g =
            (i = (n = e.file) == null ? undefined : n.name) != null ? i : "";
          const f = this._getNextClonedVoiceName();
          const y = S.bz();
          this._reportManager.addTask(y, Date.now(), v.duration);
          const C = yield this._voiceDataService.submitVoiceCloningTask({
            submitId: y,
            audio: {
              vid,
              format:
                (r = (a = g.match(/\.([^.]+)$/)) == null ? undefined : a[1]) !=
                null
                  ? r
                  : "mp3",
            },
            name: f,
          });
          this._reportManager.reportVoiceCloningTaskStatus(y, C);
          if (!C.ok) {
            this._notificationService.error(
              s.Ay.t(
                "web_new_character_sound_generate_fail",
                {},
                "音色生成失败",
              ),
            );
            return C;
          }
          const {
            value: { voice },
          } = C;
          const { insertClonedVoice } = this._voiceService;
          insertClonedVoice(voice);
          return c.TZ(voice);
        } finally {
          this._mutex.unLock();
        }
      })
      .call(this);
  }
  _getNextClonedVoiceName() {
    const e = this._getNextClonedVoiceNameIndex();
    if (e) {
      return "".concat(this._clonedVoiceBaseName, " ").concat(e);
    }
    return this._clonedVoiceBaseName;
  }
  _getNextClonedVoiceNameIndex() {
    const {
      metadata: { clonedVoices },
    } = this._voiceService;
    const { maxClonedVoiceCount } = this._voiceCloningMetadataStore;
    const i = new RegExp("^".concat(this._clonedVoiceBaseName, "\\s*(\\d+)?$"));
    const r = new Set(
      clonedVoices.flatMap((e) => {
        var { name } = e;
        var r = name.match(i);
        if (r) {
          return [r[1] ? parseInt(r[1], 10) : 0];
        }
        return [];
      }),
    );
    const o = Math.max(-1, ...r) + 1;
    if (o < maxClonedVoiceCount) {
      return o;
    }
    const n = [...Array(maxClonedVoiceCount).keys()].find((e) => !r.has(e));
    if (n === undefined) {
      return o;
    }
    return n;
  }
  _fetchClonedVoices() {
    const e =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return r
      ._(function* () {
        const t = yield this._voiceDataService.fetchClonedVoices({
          offset: e,
          count: 50,
        });
        if (!t.ok) {
          return t;
        }
        const {
          value: { list, hasMore, nextOffset },
        } = t;
        list.forEach((e) => {
          if (e.voiceCloning.status === C.$Q.Generating) {
            this._pollVoiceCloningStatus(e.id);
          }
        });
        if (!hasMore) {
          return c.TZ(list);
        }
        const n = yield this._fetchClonedVoices(nextOffset);
        if (n.ok) {
          return c.TZ(list.concat(n.value));
        }
        return c.TZ(list);
      })
      .call(this);
  }
  _pollVoiceCloningStatus(e) {
    const { promise, resolve } = Promise.withResolvers();
    const o = new AbortController();
    const n = {
      methodId: C.NY.VoiceTaskChange,
      timeout: 10000,
      fallbackStrategy: b.WV.RACING,
      signal: o.signal,
      pollingConfig: this._pollingConfig,
      websocketMessageHandler: (t) => {
        if (t.itemId !== e) {
          return {
            accepted: false,
            done: false,
          };
        }
        var { status } = t;
        if (status === C.k_.Success || status === C.k_.Fail) {
          this._updateClonedVoice(e).then((t) => {
            resolve(t);
            this._reportManager.reportVoiceCloningResult(e, t, "websocket");
          });
          return {
            accepted: true,
            done: true,
          };
        }
        return {
          accepted: true,
          done: false,
        };
      },
      pollingHandler: () =>
        r
          ._(function* () {
            try {
              this._reportManager.addPollingCount(e);
              const t = yield this._updateClonedVoice(e);
              resolve(t);
              if (t !== C.$Q.Generating) {
                this._reportManager.reportVoiceCloningResult(e, t, "polling");
                return true;
              }
              return false;
            } catch (e) {
              return false;
            }
          })
          .call(this),
      onFallbackToPolling: (t) => {
        this._reportManager.updateWebSocketFallbackReason(e, t);
      },
    };
    const a = new V.E(n, this._websocketService);
    this._reportManager.addWebsocketInfo(e, Date.now());
    a.startListening();
    this._register({
      dispose: () => {
        this._reportManager.removeCloningSocketTask(e);
        o.abort();
        a.dispose();
      },
    });
    return promise;
  }
  _updateClonedVoice(e) {
    return r
      ._(function* () {
        const t = yield this._voiceDataService.fetchClonedVoiceById({
          voiceId: e,
        });
        this._reportManager.reportVoiceCloningPollingStatus(e, t);
        const {
          metadata: { clonedVoices },
          updateClonedVoices,
        } = this._voiceService;
        if (!t.ok) {
          updateClonedVoices({
            data: clonedVoices.filter((t) => t.id !== e),
          });
          this._notificationService.error(
            s.Ay.t("web_new_character_sound_generate_fail", {}, "音色生成失败"),
          );
          return C.$Q.Fail;
        }
        const t_value = t.value;
        if (t_value.voiceCloning.status === C.$Q.Generating) {
          return C.$Q.Generating;
        }
        if (t_value.voiceCloning.status === C.$Q.Fail) {
          return C.$Q.Fail;
        }
        updateClonedVoices({
          data: clonedVoices.map((e) => {
            if (e.id === t_value.id) {
              return t_value;
            }
            return e;
          }),
        });
        this._notificationService.success(
          s.Ay.t(
            "web_new_character_sound_generate_success",
            {},
            "音色生成成功",
          ),
        );
        return C.$Q.Success;
      })
      .call(this);
  }
  _fetchVoiceCloningResult(e, t) {
    return r
      ._(function* () {
        if (t === C.$Q.Success) {
          return c.TZ(e);
        }
        if (t === C.$Q.Fail) {
          return c.xz(-1, "voice cloning failed");
        }
        return this._fetchVoiceCloningResult(
          e,
          yield this._pollVoiceCloningStatus(e),
        );
      })
      .call(this);
  }
  constructor(e, t, i, o, n, a) {
    var s;
    super();
    s = this;
    this._voiceService = e;
    this._containerService = t;
    this._imcConfigService = i;
    this._voiceDataService = o;
    this._websocketService = n;
    this._notificationService = a;
    this._pollingConfig = {
      initialInterval: 1000,
      maxInterval: 10000,
      intervalStep: 2000,
      backoffStrategy: b.c2.LINEAR,
    };
    this._mutex = new y.P();
    this._reportManager = this._containerService.createInstance(k);
    this._voiceCloningMetadataStore = new T(this._voiceService);
    this.cloneVoice = (e, t) =>
      r._(function* () {
        const i = yield s._cloneVoice(e, t);
        if (!i.ok) {
          return i;
        }
        const {
          id,
          voiceCloning: { status },
        } = i.value;
        return s._fetchVoiceCloningResult(id, status);
      })();
  }
}
x = a.Cg(
  [
    a.Qj(1, d._),
    a.Qj(2, v.R),
    a.Qj(3, W),
    a.Qj(4, C.dE),
    a.Qj(5, u.Ot),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Omit === "undefined" ? Object : Omit,
      d._ === undefined ? Object : d._,
      v.R === undefined ? Object : v.R,
      W === undefined ? Object : W,
      C.dE === undefined ? Object : C.dE,
      u.Ot === undefined ? Object : u.Ot,
    ]),
  ],
  x,
);
class w extends f.jG {
  constructor(e, t, i) {
    var a;
    super();
    a = this;
    this._voiceService = e;
    this._voiceDataService = t;
    this._notificationService = i;
    this._abortControllers = {};
    this._voiceIdToConfirmedFavorite = {};
    this.favoriteVoice = (e, t) =>
      r._(function* () {
        let i;
        const { id } = e;
        const { updateVoice } = a._voiceService;
        if (typeof a._voiceIdToConfirmedFavorite[id] !== "boolean") {
          a._voiceIdToConfirmedFavorite[id] = e.isFavorite;
        }
        updateVoice(
          n._(o._({}, e), {
            isFavorite: t,
          }),
        );
        if ((i = a._abortControllers[id]) != null) {
          i.abort();
        }
        a._abortControllers[id] = new AbortController();
        const { signal } = a._abortControllers[id];
        const l = yield a._voiceDataService.favoriteVoice(
          {
            voiceId: id,
            isFavorite: t,
          },
          {
            signal,
          },
        );
        if (!signal.aborted) {
          const isFavorite = a._voiceIdToConfirmedFavorite[id];
          delete a._voiceIdToConfirmedFavorite[id];
          if (!l.ok) {
            if (t) {
              a._notificationService.warning("收藏失败，请重试");
            }
            updateVoice(
              n._(o._({}, e), {
                isFavorite,
              }),
            );
          }
        }
      })();
  }
}
w = a.Cg(
  [
    a.Qj(1, W),
    a.Qj(2, u.Ot),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Omit === "undefined" ? Object : Omit,
      W === undefined ? Object : W,
      u.Ot === undefined ? Object : u.Ot,
    ]),
  ],
  w,
);
const voiceFilters = {
  data: undefined,
  loading: false,
  error: undefined,
};
const G = {
  voiceCategories: n._(o._({}, voiceFilters), {
    data: [_.y3, _.oT, _.rJ],
  }),
  categoryKeyToVoices: {
    [_.MG]: o._({}, voiceFilters),
    [_.yW]: o._({}, voiceFilters),
    [_.Jq]: o._({}, voiceFilters),
  },
  voiceFilters,
};
class F {
  get isVoiceFavoriteSupported() {
    return true;
  }
  get voiceCategoryOptions() {
    let e;
    let t;
    if (
      (e =
        (t = this.voiceCategories.data) == null
          ? undefined
          : t
              .filter((e) => {
                var { categoryKey } = e;
                return this.isVoiceFavoriteSupported || categoryKey !== _.Jq;
              })
              .map((e) => ({
                value: e.categoryKey,
                label: e.name,
              }))) != null
    ) {
      return e;
    }
    return [];
  }
  get clonedVoices() {
    let e;
    if ((e = this.categoryKeyToVoices[_.yW].data) != null) {
      return e;
    }
    return [];
  }
  get onlineVoices() {
    let e;
    return [
      ...this.clonedVoices,
      ...((e = this.categoryKeyToVoices[_.MG].data) != null ? e : []),
    ];
  }
  updateVoiceFilters(e) {
    this.voiceFilters = o._({}, this.voiceFilters, e);
  }
  updateIntrinsicVoices(e) {
    const t = this.categoryKeyToVoices[_.MG];
    this.categoryKeyToVoices[_.MG] = o._({}, t, e);
  }
  updateClonedVoices(e) {
    const t = this.categoryKeyToVoices[_.yW];
    this.categoryKeyToVoices[_.yW] = o._({}, t, e);
  }
  updateFavoriteVoices(e) {
    const t = this.categoryKeyToVoices[_.Jq];
    this.categoryKeyToVoices[_.Jq] = o._({}, t, e);
  }
  updateVoice(e) {
    if (C7(e)) {
      this._updateVoiceInCategory(_.MG, e);
    }
    if (Ci(e)) {
      this._updateVoiceInCategory(_.yW, e);
    }
    this._updateVoiceInCategory(_.Jq, e);
  }
  insertClonedVoice(e) {
    this.categoryKeyToVoices[_.yW].data = [e, ...this.clonedVoices];
  }
  deleteClonedVoice(e) {
    this.categoryKeyToVoices[_.yW].data = this.clonedVoices.filter((t) => {
      var { id } = t;
      return id !== e;
    });
    let t;
    const i = this.categoryKeyToVoices[_.Jq];
    this.categoryKeyToVoices[_.Jq].data =
      (t = i.data) == null
        ? undefined
        : t.filter((t) => {
            var { id } = t;
            return id !== e;
          });
  }
  _updateVoiceInCategory(e, t) {
    let i;
    this.categoryKeyToVoices[e].data =
      (i = this.categoryKeyToVoices[e].data) == null
        ? undefined
        : i.map((e) => {
            if (e.id === t.id) {
              return t;
            }
            return e;
          });
  }
  constructor(e) {
    this._voiceService = e;
    this.voiceCategories = G.voiceCategories;
    this.categoryKeyToVoices = G.categoryKeyToVoices;
    this.voiceFilters = G.voiceFilters;
    I.l_(this);
  }
}
export class E {
  get metadata() {
    return this._voiceMetadataStore;
  }
  preloadMetadata() {
    return r
      ._(function* () {
        this.voiceCloningManager.loadVoiceCloningConfigs();
        this._loadVoiceFilters();
        yield this._loadOnlineVoices();
        this._loadFavoriteVoices();
      })
      .call(this);
  }
  loadVoicesByCategoryKey(e) {
    return r
      ._(function* () {
        const { categoryKeyToVoices } = this.metadata;
        const i = categoryKeyToVoices[e];
        if (e === _.Jq) {
          return void (yield this._loadFavoriteVoices());
        }
        if (!i.data) {
          if (e === _.yW) {
            return void (yield this.voiceCloningManager.loadClonedVoices());
          }
          yield this._loadIntrinsicVoices();
        }
      })
      .call(this);
  }
  _loadVoiceFilters() {
    return r
      ._(function* () {
        this._voiceMetadataStore.updateVoiceFilters({
          loading: true,
        });
        const e = yield this._imcConfigService.getImcConfigByKey(
          h.r1.VoiceFiltersConfig,
        );
        if (e) {
          this._voiceMetadataStore.updateVoiceFilters({
            loading: false,
            data: e.voiceFilters.map((e) => {
              var { type, labelStarlingKey, options } = e;
              return {
                type,
                label: s.Ay.t(labelStarlingKey, {}, type),
                options: options.map((e) => {
                  var { value, labelStarlingKey } = e;
                  return {
                    value,
                    label: s.Ay.t(labelStarlingKey, {}, value),
                  };
                }),
              };
            }),
          });
        } else {
          this._voiceMetadataStore.updateVoiceFilters({
            loading: false,
            error: Error("Voice filters config not found"),
          });
        }
      })
      .call(this);
  }
  _loadOnlineVoices() {
    return r
      ._(function* () {
        yield Promise.allSettled([
          this.loadVoicesByCategoryKey(_.MG),
          this.loadVoicesByCategoryKey(_.yW),
        ]);
      })
      .call(this);
  }
  _loadFavoriteVoices() {
    return r
      ._(function* () {
        const { categoryKeyToVoices } = this.metadata;
        const t = categoryKeyToVoices[_.MG];
        const i = categoryKeyToVoices[_.yW];
        if (t.loading || t.error || i.loading || i.error) {
          this._voiceMetadataStore.updateFavoriteVoices({
            loading: true,
          });
          yield this._loadOnlineVoices();
        }
        this.updateFavoriteVoices();
      })
      .call(this);
  }
  _loadIntrinsicVoices() {
    return r
      ._(function* () {
        this._voiceMetadataStore.updateIntrinsicVoices({
          loading: true,
          error: undefined,
        });
        const e = yield this._fetchIntrinsicVoices();
        this._voiceMetadataStore.updateIntrinsicVoices(
          o._(
            {
              loading: false,
            },
            e.ok
              ? {
                  data: e.value,
                }
              : {
                  error: e.findJsError(),
                },
          ),
        );
      })
      .call(this);
  }
  _fetchIntrinsicVoices() {
    const e =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return r
      ._(function* () {
        const t = l.yC(
          {
            limit: 500,
          },
          null,
          {
            offset: e,
            hasMore: false,
          },
        );
        const i = yield this._voiceDataService.fetchIntrinsicVoices(t);
        if (!i.ok) {
          return i;
        }
        const {
          value: {
            hasMore,
            offset,
            value: { list },
          },
        } = i;
        if (!hasMore) {
          return c.TZ(list);
        }
        const a = yield this._fetchIntrinsicVoices(offset);
        if (a.ok) {
          return c.TZ(list.concat(a.value));
        }
        return c.TZ(list);
      })
      .call(this);
  }
  constructor(e, t, i, a) {
    this._containerService = e;
    this._notificationService = t;
    this._imcConfigService = i;
    this._voiceDataService = a;
    this.voiceCloningManager = this._containerService.createInstance(x, this);
    this.voiceFavoriteManager = this._containerService.createInstance(w, this);
    this._voiceMetadataStore = new F(this);
    this.updateClonedVoices = (e) => {
      this._voiceMetadataStore.updateClonedVoices(e);
    };
    this.insertClonedVoice = (e) => {
      this._voiceMetadataStore.insertClonedVoice(e);
    };
    this.renameClonedVoice = (e, t) =>
      r
        ._(function* () {
          const { id } = e;
          const r = yield this._voiceDataService.updateClonedVoice({
            voiceId: id,
            name: t,
          });
          if (!r.ok) {
            const a = r.code in _.$s ? r.code : p.a.CommonError;
            this._notificationService.warning(_.$s[a]);
            return r;
          }
          const { clonedVoices } = this.metadata;
          const l = clonedVoices.find((e) => e.id === id);
          if (!l) {
            return c.nj();
          }
          const u = n._(o._({}, l), {
            name: t,
          });
          this._voiceMetadataStore.updateVoice(u);
          return c.nj();
        })
        .call(this);
    this.deleteClonedVoice = (e) =>
      r
        ._(function* () {
          const { id } = e;
          const i = yield this._voiceDataService.deleteClonedVoice({
            voiceId: id,
          });
          if (i.ok) {
            this._voiceMetadataStore.deleteClonedVoice(id);
          } else {
            this._notificationService.warning(
              s.Ay.t(
                "character_toast_operation_invalid",
                {},
                "操作异常，请重试",
              ),
            );
          }
          return i;
        })
        .call(this);
    this.updateFavoriteVoices = () => {
      var { onlineVoices } = this.metadata;
      this._voiceMetadataStore.updateFavoriteVoices({
        loading: false,
        data: onlineVoices.filter((e) => e.isFavorite),
      });
    };
    this.updateVoice = (e) => {
      this._voiceMetadataStore.updateVoice(e);
    };
    this.resolveVoice = (e) => {
      if (aY(e) || tx(e)) {
        return e;
      }
      var t;
      var { onlineVoices } = this.metadata;
      if ((t = onlineVoices.find((t) => t.id === e.id)) != null) {
        return t;
      }
      return onlineVoices.find((t) => t.name === e.name);
    };
  }
}
E = a.Cg(
  [
    a.Qj(0, d._),
    a.Qj(1, u.Ot),
    a.Qj(2, v.R),
    a.Qj(3, W),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      d._ === undefined ? Object : d._,
      u.Ot === undefined ? Object : u.Ot,
      v.R === undefined ? Object : v.R,
      W === undefined ? Object : W,
    ]),
  ],
  E,
);
