import r from "oa";
import a from "bk";
import n from "JSz";
import o from "NY";
import s from "QWK";
import d from "Ut";
import l from "o7";
import u from "A7";
import c from "xi";
import m from "Kt";
import g from "Y6";
import h from "KV";
import p from "yr";
import v from "rp";
import I from "K8";
import _ from "yMd";
import f from "CR";
import b from "Wzd";
import y from "J3";
import k from "fHC";
import { I as I_1 } from "./module-qJ_2.js";
import M from "Dm";
class C extends I_1 {
  watch() {
    const e = this._option.model.submitResults.map(
      (e) => e.status === _.ZA.FinalSuccess,
    );
    if (e.some((e) => e)) {
      this.pollGenerateTask();
    }
    if (!e.every((e) => e)) {
      super.watch();
    }
  }
  pollGenerateTask() {
    const e = this._option.model.submitResults.filter(
      (e) => !this._videoItemMap.has(e.submitId),
    );
    if (e.length === 0) {
      if (!this._done) {
        this._option.onTaskDone(this._videoItemMap);
        this._done = true;
      }
      return Promise.resolve({
        accepted: true,
        changed: false,
        done: true,
      });
    }
    return this._checkUpdate(e);
  }
  websocketMessageHandler(e) {
    const t = this._option.model.submitResults.find(
      (t) => t.submitId === e.submitId,
    );
    if (t) {
      return this._checkUpdate([t]);
    }
    return Promise.resolve({
      accepted: false,
      done: false,
    });
  }
  getMonitorConfig() {
    const e = super.getMonitorConfig();
    return a._(r._({}, e), {
      timeout: 5000,
      dynamicPollingInterval: {
        minInterval: 5000,
        maxInterval: 10000,
        step: 1000,
        resetOnChange: true,
      },
    });
  }
  fallbackToPolling() {}
  _processTaskResult(e, t) {
    let i;
    let r;
    if (e == null || (i = e.mixAvData) == null ? undefined : i.artifactList) {
      let a;
      const n = (e) => {
        let i;
        const r = t.find((t) => t.audioVid === e.audioVid);
        if (r && !a._videoItemMap.has(r.submitId) && e.status === 3) {
          a._videoItemMap.set(r.submitId, e);
          return "continue";
        }
        if (e.status === 2) {
          a._option.onTaskFailed(
            I.xz(
              (i = e.status) != null ? i : f.Q.ErrOffline,
              "generate task run failure",
            ),
          );
          a._done = true;
          return {
            v: true,
          };
        }
      };
      for (const o of e.mixAvData.artifactList) {
        a = this;
        const s = n(o);
        if (v._(s) === "object") {
          return s.v;
        }
      }
    }
    if (
      !(e == null ? undefined : e.mixAvData) &&
      (e == null || (r = e.videoAudioEffect) == null ? undefined : r.resultList)
    ) {
      let d;
      const l = (e) => {
        let i;
        const r = t.find((t) => {
          var i;
          return t.audioVid === ((i = e.audio) == null ? undefined : i.vid);
        });
        const e_mixedVideo = e.mixedVideo;
        if (
          r &&
          !d._videoItemMap.has(r.submitId) &&
          (e_mixedVideo == null ? undefined : e_mixedVideo.status) === 3
        ) {
          d._videoItemMap.set(r.submitId, e_mixedVideo);
          return "continue";
        }
        if ((e_mixedVideo == null ? undefined : e_mixedVideo.status) === 2) {
          d._option.onTaskFailed(
            I.xz(
              (i = e_mixedVideo.status) != null ? i : f.Q.ErrOffline,
              "generate task run failure",
            ),
          );
          d._done = true;
          return {
            v: true,
          };
        }
      };
      for (const u of e.videoAudioEffect.resultList) {
        d = this;
        const c = l(u);
        if (v._(c) === "object") {
          return c.v;
        }
      }
    }
    return false;
  }
  constructor(e, t, i) {
    var r;
    super(t);
    r = this;
    this._getWorkDetailService = i;
    this.websocketEventName = k.NY.AigcVideoTask;
    this._videoItemMap = new Map();
    this._done = false;
    this._checkUpdate = (e) =>
      o._(function* () {
        if (e.length === 0 || r._done) {
          return {
            accepted: true,
            changed: false,
            done: r._done,
          };
        }
        const itemIdList = [...new Set(e.map((e) => e.itemId))];
        if (itemIdList.length === 0) {
          return {
            accepted: false,
            changed: false,
            done: false,
          };
        }
        try {
          const i = (t) => {
            const i = e.filter((e) => e.itemId === t.id);
            if (i.length) {
              if (r._processTaskResult(t, i)) {
                return {
                  v: {
                    accepted: true,
                    changed: true,
                    done: true,
                  },
                };
              }
              return undefined;
            }
            return "continue";
          };
          const a = yield r._getWorkDetailService.getUnPublishedWorkDetail({
            itemIdList,
            packItemOpt: {
              scene: b._.Download,
            },
          });
          if (!a.ok) {
            return {
              accepted: false,
              changed: false,
              done: false,
            };
          }
          for (const n of a.value.workDetails) {
            const o = i(n);
            if (v._(o) === "object") {
              return o.v;
            }
          }
          if (
            r._option.model.submitResults.every((e) =>
              r._videoItemMap.has(e.submitId),
            )
          ) {
            r._option.onTaskDone(r._videoItemMap);
            r._done = true;
            return {
              accepted: true,
              changed: true,
              done: true,
            };
          }
          return {
            accepted: true,
            changed: true,
            done: false,
          };
        } catch (e) {
          return {
            accepted: false,
            changed: false,
            done: false,
          };
        }
      })();
    this._option = e;
  }
}
C = s.Cg(
  [
    s.Qj(1, m._),
    s.Qj(2, y.B),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      typeof TaskStatusMonitorParams === "undefined"
        ? Object
        : TaskStatusMonitorParams,
      m._ === undefined ? Object : m._,
      y.B === undefined ? Object : y.B,
    ]),
  ],
  C,
);
class T extends I_1 {
  watch() {
    const e = this;
    const t = () => super.watch;
    return o
      ._(function* () {
        const { itemId, audioVid } = this._option.model;
        M.X3(itemId);
        const { success, videoItem } = yield this._queryMixAudio(
          itemId,
          audioVid,
        );
        this._videoItem = videoItem;
        if (
          success &&
          (videoItem == null ? undefined : videoItem.status) &&
          [3, 2].includes(videoItem.status)
        ) {
          if (videoItem.status === 3) {
            this._option.onTaskDone(videoItem);
          } else {
            this._option.onTaskFailed();
          }
        } else {
          t().call(e);
        }
      })
      .call(this);
  }
  pollGenerateTask() {
    this._option.onTaskFailed();
    return Promise.resolve({
      accepted: false,
      done: true,
    });
  }
  websocketMessageHandler(e) {
    const { itemId, audioVid } = this._option.model;
    const {
      mixedVideoStatus,
      videoItemId,
      audioVid: audioVid_1,
      mixedVideoItemId,
    } = e;
    if (
      itemId === videoItemId &&
      audioVid === audioVid_1 &&
      [3, 2].includes(mixedVideoStatus)
    ) {
      if (mixedVideoStatus === 2) {
        this._option.onTaskFailed();
      } else {
        this._option.onTaskDone(
          a._(r._({}, this._videoItem), {
            itemId: mixedVideoItemId,
            status: mixedVideoStatus,
            audioVid,
            videoItemId,
          }),
        );
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
  getMonitorConfig() {
    const e = super.getMonitorConfig();
    return a._(r._({}, e), {
      timeout: 10000,
      dynamicPollingInterval: undefined,
    });
  }
  fallbackToPolling() {}
  _queryMixAudio(e, t) {
    return o
      ._(function* () {
        try {
          let i;
          let videoItem;
          let a;
          let n;
          let o;
          let s;
          const d = yield this._getWorkDetailService.getUnPublishedWorkDetail({
            itemIdList: [e],
            packItemOpt: {
              scene: b._.Download,
            },
          });
          if (
            !d.ok ||
            !((i = d.value.workDetails) == null ? undefined : i[0])
          ) {
            return {
              success: false,
              videoItem: undefined,
            };
          }
          const l = d.value.workDetails[0];
          videoItem = l.mixAvData
            ? (a = l.mixAvData.artifactList) == null
              ? undefined
              : a.find((e) => e.audioVid === t)
            : (s = l.videoAudioEffect) == null ||
                (o = s.resultList) == null ||
                (n = o.find((e) => {
                  var i;
                  return ((i = e.audio) == null ? undefined : i.vid) === t;
                })) == null
              ? undefined
              : n.mixedVideo;
          return {
            success: true,
            videoItem,
          };
        } catch (e) {
          return {
            success: false,
            videoItem: undefined,
          };
        }
      })
      .call(this);
  }
  constructor(e, t, i) {
    super(t);
    this._getWorkDetailService = i;
    this.websocketEventName = k.NY.VideoAudioMixed;
    this._option = e;
  }
}
T = s.Cg(
  [
    s.Qj(1, m._),
    s.Qj(2, y.B),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      typeof VideoAudioTaskMonitorParams === "undefined"
        ? Object
        : VideoAudioTaskMonitorParams,
      m._ === undefined ? Object : m._,
      y.B === undefined ? Object : y.B,
    ]),
  ],
  T,
);
class A extends l.jG {
  get onTaskDone() {
    return this._onTaskDone.event;
  }
  get onTaskFailure() {
    return this._onTaskFailure.event;
  }
  get id() {
    const e = this._options.input
      .map((e) => e.targetAIGCData.uniqueKey)
      .join(",");
    const t = this._options.input.map((e) => e.audioVid).join(",");
    return "".concat(e, "-").concat(t);
  }
  _bootstrap() {
    return o
      ._(function* () {
        try {
          yield this._submitTask();
        } finally {
          this.dispose();
        }
      })
      .call(this);
  }
  _submitTask() {
    return o
      ._(function* () {
        const e = [];
        const inputList = [];
        for (const i of this._options.input) {
          (i.scene === d.DAGenerateVideoAudioScene.EFFECT ? e : inputList).push(
            {
              audioVid: i.audioVid,
              videoItemId: i.videoItemId,
              submitId: i.submitId,
              scene: i.scene,
            },
          );
        }
        const r = (yield Promise.all(
          e.map((e) =>
            this._startAudioEffectMonitor({
              videoItemId: e.videoItemId,
              audioVid: e.audioVid,
              submitId: e.submitId,
            }).then((i) => i || (inputList.push(e), null)),
          ),
        )).filter((e) => e !== null);
        if (inputList.length === 0) {
          return void this._onTaskDone.fire(r);
        }
        this._newAudioEffectMixedItems = r;
        const a =
          yield this._dreaminaVideoGenerateDataService.submitMixAudioVideosTask(
            {
              inputList,
              babiParam: this._options.babiParam,
            },
          );
        if (a.ok) {
          this._submitResult = a.value.map((result) => ({
            result,
            submitId: result.submitId,
          }));
          this._startTaskMonitor();
        } else {
          this._onTaskFailure.fire(a);
        }
      })
      .call(this);
  }
  _startTaskMonitor() {
    if (this._submitResult) {
      this._containerService
        .createInstance(C, {
          model: {
            submitResults: this._submitResult.map((e) =>
              a._(r._({}, e.result), {
                submitId: e.submitId,
              }),
            ),
          },
          onTaskDone: (e) => {
            e.forEach((e, t) => {
              this._syncMixAudioVideoArtifact(e, t);
            });
            this._onTaskDone.fire(
              Array.from(e.values()).concat(this._newAudioEffectMixedItems),
            );
          },
          onTaskFailed: (e) => {
            this._onTaskFailure.fire(e);
          },
        })
        .watch();
    }
  }
  _startAudioEffectMonitor(e) {
    const { videoItemId, audioVid, submitId } = e;
    const { promise, resolve } = Promise.withResolvers();
    this._containerService
      .createInstance(T, {
        model: {
          itemId: videoItemId,
          audioVid,
        },
        onTaskDone: (e) => {
          this._syncMixAudioVideoArtifact(e, submitId);
          resolve(e);
        },
        onTaskFailed: () => {
          resolve(false);
        },
      })
      .watch();
    return promise;
  }
  _syncMixAudioVideoArtifact(e, t) {
    let i;
    const r = this._options.input.find((e) => e.submitId === t);
    if (r) {
      const { targetAIGCData, audioVid } = r;
      const o =
        (i = targetAIGCData.audioData) == null
          ? undefined
          : i.audioList.findIndex((e) => {
              var t;
              return ((t = e.audio) == null ? undefined : t.vid) === audioVid;
            });
      if (o === undefined || o === -1) {
        return void c.V.error(
          "mix-audio-video-task: syncMixAudioVideoArtifact: target not found ".concat(
            audioVid,
          ),
        );
      }
      targetAIGCData.audioData.audioList[o].mixedVideo = e;
      this._domainModelChangeSyncService.syncDomainModelData({
        eventType: g.T.Update,
        modelType: g.$.AIGCData,
        id: targetAIGCData.uniqueKey,
        data: targetAIGCData,
        delta: undefined,
      });
    }
  }
  constructor(e, t, i, r) {
    super();
    this._options = e;
    this._containerService = t;
    this._dreaminaVideoGenerateDataService = i;
    this._domainModelChangeSyncService = r;
    this._onTaskDone = new u.v();
    this._onTaskFailure = new u.v();
    this._newAudioEffectMixedItems = [];
    this._bootstrap();
    this._store.add(
      this._domainModelChangeSyncService.registerDomainModelChangeListener({
        eventType: g.T.Update,
        modelType: g.$.AIGCData,
        callback: (e, t) => {
          var i = this._options.input.find(
            (t) => t.targetAIGCData.uniqueKey === e,
          );
          if (i) {
            i.targetAIGCData = t;
          }
        },
      }),
    );
  }
}
export function B(e, t) {
  const i = {
    input: t.tasks.map((e) =>
      a._(r._({}, e), {
        videoItemId: e.targetAIGCData.itemList[0].id,
        submitId: n.bz(),
      }),
    ),
    babiParam: t.babiParam,
  };
  return e.createInstance(A, i);
}
A = s.Cg(
  [
    s.Qj(1, m._),
    s.Qj(2, p.g),
    s.Qj(3, h.j),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      typeof MixAudioVideoTaskProps === "undefined"
        ? Object
        : MixAudioVideoTaskProps,
      m._ === undefined ? Object : m._,
      p.g === undefined ? Object : p.g,
      h.j === undefined ? Object : h.j,
    ]),
  ],
  A,
);
