import r from "NY";
import l from "oa";
import n from "bk";
import i from "QWK";
import s from "dw4";
import o from "TC6";
import u from "o7";
import d from "yx";
import { vN } from "./module-rUX.js";
const bufferedRange = [0, 0];
class p {
  get state() {
    return this._state;
  }
  get retryCnt() {
    return this._retryCnt;
  }
  get progress() {
    if (this._state.duration !== 0) {
      return this._state.currentTime / this._state.duration;
    }
    return 0;
  }
  get buffering() {
    return this._state.seeking || this._state.waiting;
  }
  get bufferProgress() {
    let e;
    if (this._state.duration !== 0) {
      return (
        ((e = this._state.bufferedRange[1]) != null ? e : 0) /
        this._state.duration
      );
    }
    return 0;
  }
  setState(e) {
    this._state = e;
  }
  setRetryCnt(e) {
    this._retryCnt = e;
  }
  constructor() {
    this._state = {
      dataLoaded: false,
      seeking: false,
      waiting: true,
      paused: true,
      currentTime: 0,
      duration: 0,
      everCanPlay: false,
      error: null,
      ended: false,
      bufferedRange,
      isFullscreen: false,
      volume: 0,
      muted: false,
      playUrl: "",
    };
    this._retryCnt = 0;
    s.l_(this);
  }
}
i.Cg(
  [s.EW, i.Sn("design:type", Number), i.Sn("design:paramtypes", [])],
  p.prototype,
  "progress",
  null,
);
i.Cg(
  [s.EW, i.Sn("design:type", Boolean), i.Sn("design:paramtypes", [])],
  p.prototype,
  "buffering",
  null,
);
i.Cg(
  [s.EW, i.Sn("design:type", Number), i.Sn("design:paramtypes", [])],
  p.prototype,
  "bufferProgress",
  null,
);
export class k extends u.jG {
  get playerStore() {
    return this._playerStore;
  }
  get playerState() {
    return n._(l._({}, this._playerStore.state), {
      progress: this._playerStore.progress,
      buffering: this._playerStore.buffering,
      bufferProgress: this._playerStore.bufferProgress,
    });
  }
  get player() {
    return this._player;
  }
  get retryAchieveLimit() {
    return this._playerStore.retryCnt >= this._retryLimit;
  }
  init() {
    if (this._initPromise == null) {
      this._initPromise = this._initialize();
    }
    return this._initPromise;
  }
  _initialize() {
    return r
      ._(function* () {
        try {
          let e;
          let t;
          const { playerType = "raw" } = this._config;
          if (playerType === "xg") {
            this._player = yield this._videoPlayerService.createXgVideoPlayer(
              (e = this._config.el) != null ? e : this._config.id,
              this._config,
            );
          } else {
            this._player = this._videoPlayerService.createRawVideoPlayer(
              (t = this._config.el) != null ? t : this._config.id,
              this._config,
            );
          }
          this._bindEvents();
          this._bindReactions();
          this.registerCallback(this._config.callbackMap);
        } catch (error) {
          this._handleError(error);
        }
      })
      .call(this);
  }
  setPlayerState(e) {
    this._playerStore.setState(l._({}, this._playerStore.state, e));
  }
  updateConfig(e) {
    let t;
    this._config = l._({}, this._config, e);
    this._callbackMap = (t = e.callbackMap) != null ? t : this._callbackMap;
    if (this._player) {
      this._player.setConfig(l._({}, this._config));
    }
  }
  registerCallback(e) {
    this._callbackMap = e;
  }
  clearCache() {
    vN.clear(this._config.id);
  }
  dispose() {
    let e;
    if ((e = this._player) != null) {
      e.dispose();
    }
    super.dispose();
  }
  _handleError(e) {
    this.setPlayerState({
      error: e,
      paused: true,
    });
    if (this.retryAchieveLimit) {
      let t;
      let a;
      if (!((a = this._callbackMap) == null || (t = a.onPlayError) == null)) {
        t.call(a, e);
      }
      return;
    }
    this._playerStore.setRetryCnt(this._playerStore.retryCnt + 1);
  }
  _bindEvents() {
    let e;
    let t;
    let a;
    let r;
    if (this._player) {
      this._register(
        this._player.onLoadStart(() => {
          this.setPlayerState(
            l._(
              {
                dataLoaded: false,
              },
              o.A(this._player, "volume", "muted", "duration"),
            ),
          );
        }),
      );
      this._register(
        this._player.onLoaded(() => {
          var e;
          var t;
          this.setPlayerState(
            l._(
              {
                dataLoaded: true,
              },
              o.A(this._player, "volume", "muted"),
            ),
          );
          if (
            !((t = this._callbackMap) == null || (e = t.onDataLoaded) == null)
          ) {
            e.call(t);
          }
        }),
      );
      this._register(
        this._player.onLoadedMetadata(() => {
          var e;
          var t;
          var a;
          var r;
          this.setPlayerState({
            duration:
              (e = (t = this._player) == null ? undefined : t.duration) != null
                ? e
                : 0,
          });
          if (
            !((r = this._callbackMap) == null || (a = r.onMetaLoaded) == null)
          ) {
            a.call(r);
          }
        }),
      );
      this._register(
        this._player.onCanPlay(() => {
          var e;
          var t;
          this.setPlayerState({
            everCanPlay: true,
            waiting: false,
            error: null,
          });
          if (!((t = this._callbackMap) == null || (e = t.onCanPlay) == null)) {
            e.call(t);
          }
        }),
      );
      this._register(
        this._player.onPlay(() => {
          this.setPlayerState({
            paused: false,
          });
        }),
      );
      this._register(
        this._player.onPause(() => {
          this.setPlayerState({
            paused: true,
          });
        }),
      );
      this._register(
        this._player.onEnded(() => {
          var e;
          var t;
          this.setPlayerState({
            ended: true,
            paused: true,
          });
          if (
            !((t = this._callbackMap) == null || (e = t.onPlayEnded) == null)
          ) {
            e.call(t);
          }
        }),
      );
      this._register(
        (e = this._player) == null
          ? undefined
          : e.onDurationChange(() => {
              var e;
              return this.setPlayerState({
                duration: (e = this._player) == null ? undefined : e.duration,
              });
            }),
      );
      this._register(
        (t = this._player) == null
          ? undefined
          : t.onPlayStart(() => {
              var e;
              var t;
              if (
                !(
                  (t = this._callbackMap) == null ||
                  (e = t.onAutoPlayStart) == null
                )
              ) {
                e.call(t);
              }
            }),
      );
      this._register(
        this._player.onTimeUpdate(() => {
          var e;
          var t;
          var a;
          this.setPlayerState({
            currentTime:
              (e = (t = this._player) == null ? undefined : t.currentTime) !=
              null
                ? e
                : 0,
            bufferedRange: this._player
              ? [0, this._player.getBufferedRange()[1]]
              : [0, 0],
            duration: (a = this._player) == null ? undefined : a.duration,
          });
        }),
      );
      this._register(
        this._player.onDownloadProgress(() => {
          this.setPlayerState({
            bufferedRange: this._player
              ? this._player.getBufferedRange()
              : [0, 0],
          });
        }),
      );
      this._register(
        this._player.onSeeking(() => {
          this.setPlayerState({
            seeking: true,
          });
        }),
      );
      this._register(
        this._player.onSeeked(() => {
          var e;
          var t;
          this.setPlayerState({
            seeking: false,
          });
          if (
            !((t = this._callbackMap) == null || (e = t.onPlaySeeked) == null)
          ) {
            e.call(t);
          }
        }),
      );
      this._register(
        this._player.onWaiting(() => {
          this.setPlayerState({
            waiting: true,
          });
        }),
      );
      this._register(
        this._player.onError((e) => {
          this.setPlayerState({
            error: e,
          });
          this._handleError(e);
        }),
      );
      this._register(
        (a = this._player) == null
          ? undefined
          : a.onFullscreenChange((isFullscreen) => {
              var t;
              var a;
              this.setPlayerState({
                isFullscreen,
              });
              if (
                !(
                  (a = this._callbackMap) == null ||
                  (t = a.onVideoFullscreen) == null
                )
              ) {
                t.call(a, isFullscreen);
              }
            }),
      );
      this._register(
        (r = this._player) == null
          ? undefined
          : r.onVolumeChange(() =>
              this.setPlayerState(
                l._({}, o.A(this._player, "volume", "muted")),
              ),
            ),
      );
    }
  }
  _bindReactions() {
    this._register({
      dispose: s.mJ(
        () => this._playerStore.state,
        (e) => {
          var t;
          var a;
          if (
            !(
              (a = this._callbackMap) == null ||
              (t = a.onPlayStateChange) == null
            )
          ) {
            t.call(a, this._playerStore.state);
          }
        },
      ),
    });
    this._register({
      dispose: s.mJ(
        () => this._playerStore.state.ended && this._config.seekToFirstFrame,
        (e) => {
          if (e) {
            var t;
            if ((t = this._player) != null) {
              t.seek(0);
            }
          }
        },
      ),
    });
  }
  constructor(e, t) {
    super();
    this._config = e;
    this._videoPlayerService = t;
    this._playerStore = new p();
    this._retryLimit = 3;
  }
}
k = i.Cg(
  [
    i.Qj(1, d.B),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof VideoConfig === "undefined" ? Object : VideoConfig,
      typeof VideoPlayerService === "undefined" ? Object : VideoPlayerService,
    ]),
  ],
  k,
);
