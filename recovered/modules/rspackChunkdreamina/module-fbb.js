import s from "NY";
import n from "QWK";
import r from "dw4";
import o from "o7";
import a from "aEB";
import * as l from "./module-sxn.js";
import c from "pX";
import { _U, e, r7, wU, wf, zD } from "./module-oL.js";
import { V } from "./module-rw7.js";
import { Y } from "./module-Xuh_2.js";
export class I extends o.jG {
  start(t) {
    let e;
    let i;
    let s;
    let n;
    this._sessionActive = true;
    this._readyReported = false;
    this._startTime = Date.now();
    this._lastError = undefined;
    this._lastTranscript = "";
    this._lastTaskId = undefined;
    this._lastMessageId = undefined;
    this._lastLogId = undefined;
    this._insertStart =
      (e = t == null ? undefined : t.insertStart) != null ? e : null;
    this._insertEnd =
      (i = t == null ? undefined : t.insertEnd) != null ? i : null;
    this._lastReplacedLength = 0;
    this._initialDocSize = null;
    this._initialContentAfterLength = null;
    this.store.reset();
    if ((s = (n = this._lifecycleHooks).onStart) != null) {
      s.call(n);
    }
    this._voiceInputService.start(this);
  }
  setupAutoStop() {
    let t;
    let e;
    let i;
    const s =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if ((e = this._keepAliveChangeDisposable) != null) {
      e.dispose();
    }
    this._keepAliveChangeDisposable =
      (t =
        (i = s.onKeepAliveChange) == null
          ? undefined
          : i.call(s, () => {
              if (this.store.status === c.t.Listening) {
                this.stop();
              }
            })) != null
        ? t
        : null;
  }
  setupTranscriptApply(t) {
    if ((e = this._transcriptApplyDisposable) != null) {
      e.dispose();
    }
    var e;
    const i = {
      dispose: r.mJ(
        () => ({
          status: this.store.status,
          transcript: this.store.transcript,
        }),
        () => {
          var e = typeof t === "function" ? t() : t;
          if (e) {
            this._applyTranscriptToEditor(e);
          }
        },
      ),
    };
    this._transcriptApplyDisposable = i;
    return i;
  }
  handleVoiceInputToggle(t) {
    const { disabled, promptEditorRef, onBeforeStart } = t;
    if (!disabled) {
      if (this.store.status === c.t.Idle) {
        if (onBeforeStart == null ? undefined : onBeforeStart()) {
          return;
        }
        const n = promptEditorRef.current;
        if (n == null ? undefined : n.view) {
          n.commands.focus();
          const { from, to } = n.state.selection;
          this.start({
            insertStart: from,
            insertEnd: from !== to ? to : undefined,
          });
        } else {
          this.start({});
        }
        return;
      }
      if (this.store.status === c.t.Listening) {
        this.stop();
      }
    }
  }
  setAutoStopContext(t) {
    this._autoStopContext = t;
    this._maybeStopForInputLimit();
  }
  clearPermissionDenied() {
    this.store.setPermissionDenied(false);
  }
  markTranscriptApplyStart() {
    this._isApplyingTranscript = true;
  }
  markTranscriptApplyEnd() {
    this._isApplyingTranscript = false;
  }
  getIsApplyingTranscript() {
    return this._isApplyingTranscript;
  }
  stopIfActive() {
    if (!(this.store.status === c.t.Idle || this.getIsApplyingTranscript())) {
      this.stop("immediate");
    }
  }
  stopAndWaitForIdle() {
    const t =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5000;
    const e =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : "graceful";
    return s
      ._(function* () {
        let i;
        let s;
        if (this.store.status === c.t.Idle) {
          return true;
        }
        this.stop(e);
        try {
          yield Promise.race([
            new Promise((resolve) => {
              i = r.z7(() => this.store.status === c.t.Idle, resolve);
            }),
            new Promise((resolve, reject) => {
              s = setTimeout(() => reject(Error("wait-for-idle timeout")), t);
            }),
          ]);
          return true;
        } catch (t) {
          return false;
        } finally {
          if (i != null) {
            i();
          }
          if (s) {
            clearTimeout(s);
          }
        }
      })
      .call(this);
  }
  onError(t) {
    this._lastError = t;
    if (t === wU.NotAllowed || t === wU.ServiceNotAllowed) {
      this.store.setPermissionDenied(true);
    } else if (t !== wU.Aborted) {
      this._notificationErrorMessage(t);
    }
  }
  onTraceInfo(t) {
    this._lastTaskId = t.taskId;
    this._lastMessageId = t.messageId;
    this._lastLogId = t.logId;
  }
  stop() {
    const t =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : "graceful";
    this._voiceInputService.stop(t);
  }
  dispose() {
    let t;
    let e;
    this.stop("immediate");
    this._cleanupAutoStopBindings();
    if ((t = this._keepAliveChangeDisposable) != null) {
      t.dispose();
    }
    this._keepAliveChangeDisposable = null;
    if ((e = this._transcriptApplyDisposable) != null) {
      e.dispose();
    }
    this._transcriptApplyDisposable = null;
    super.dispose();
  }
  onTranscriptUpdate(t) {
    this._lastTranscript = t;
    this.store.setTranscript(t);
  }
  onStatusChange(t) {
    if (t === c.t.Listening && this._sessionActive && !this._readyReported) {
      let e;
      let i;
      this._readyReported = true;
      if ((e = (i = this._lifecycleHooks).onReady) != null) {
        e.call(i, Date.now() - this._startTime);
      }
    }
    this.store.setStatus(t);
    this._syncAutoStopBindings(t);
    if (t === c.t.Idle) {
      this._finishLifecycleSession();
    }
  }
  onWaveformLevelsChange(t) {
    this.store.setWaveformLevels(t);
  }
  getTranscriptReplaceInstruction(t, e, i) {
    if (this.store.status === c.t.Idle) {
      return null;
    }
    let s;
    let n;
    let r;
    const { transcript } = this.store;
    if (!transcript) {
      return null;
    }
    const from = (s = (n = this._insertStart) != null ? n : e) != null ? s : t;
    if (this._insertStart === null) {
      this._insertStart = from;
    }
    const l =
      (r = this._insertEnd) != null
        ? r
        : this._lastReplacedLength === 0
          ? i
          : undefined;
    const text = transcript.trim();
    if (this._initialDocSize === null) {
      this._initialDocSize = t;
      this._initialContentAfterLength = Math.max(
        0,
        t - (typeof l === "number" ? l : from),
      );
    }
    const to =
      typeof l === "number"
        ? Math.min(l, t)
        : this._initialContentAfterLength !== null
          ? Math.min(Math.max(from, t - this._initialContentAfterLength), t)
          : Math.min(from + this._lastReplacedLength, t);
    if (this._insertEnd !== null) {
      this._insertEnd = null;
    }
    this._lastReplacedLength = text.length;
    return {
      from,
      to,
      text,
    };
  }
  _applyTranscriptToEditor(t) {
    if (this.store.status !== c.t.Idle && this.store.transcript) {
      const e = t.current;
      if (e == null ? undefined : e.view) {
        const i = e.state.doc.content.size;
        const { from, to } = e.state.selection;
        const r = this.getTranscriptReplaceInstruction(
          i,
          from,
          from !== to ? to : undefined,
        );
        if (r) {
          const { from: from_1, to: to_1, text } = r;
          this.markTranscriptApplyStart();
          try {
            e.chain()
              .focus()
              .setTextSelection({
                from: from_1,
                to: to_1,
              })
              .setMeta("addToHistory", true)
              .insertContent({
                type: "text",
                text,
              })
              .setTextSelection(from_1 + text.length)
              .run();
          } finally {
            this.markTranscriptApplyEnd();
          }
        }
      }
    }
  }
  _notificationErrorMessage(t) {
    switch (t) {
      case wU.NoSpeech:
        return this._notificationService.warning(e());
      case wU.Unsupported:
        return this._notificationService.warning(zD());
      case wU.AudioCapture:
        return this._notificationService.warning(_U());
      case wU.VoiceInputServerError:
        return this._notificationService.warning(r7());
      default:
        return this._notificationService.warning(wf());
    }
  }
  _finishLifecycleSession() {
    let t;
    let e;
    if (this._sessionActive) {
      if ((t = (e = this._lifecycleHooks).onEnd) != null) {
        t.call(e, {
          status: this._lastError ? "fail" : "success",
          error: this._lastError,
          transcript: this._lastTranscript.trim() || undefined,
          taskId: this._lastTaskId,
          messageId: this._lastMessageId,
          logId: this._lastLogId,
        });
      }
      this._sessionActive = false;
      this._readyReported = false;
      this._startTime = 0;
      this._lastError = undefined;
      this._lastTranscript = "";
      this._lastTaskId = undefined;
      this._lastMessageId = undefined;
      this._lastLogId = undefined;
      this._insertStart = this._insertEnd = null;
      this._lastReplacedLength = 0;
      this._initialDocSize = this._initialContentAfterLength = null;
      this._isApplyingTranscript = false;
    }
  }
  _maybeStopForInputLimit() {
    let t;
    const { currentInputTextLength, transcript, maxInputLength } =
      this._autoStopContext;
    const n =
      (t = this._autoStopContext.lastTranscriptLength) != null
        ? t
        : this._lastReplacedLength;
    if (
      this.store.status === c.t.Listening &&
      typeof maxInputLength === "number" &&
      currentInputTextLength - n + [...transcript].length > maxInputLength
    ) {
      this.stop();
    }
  }
  _syncAutoStopBindings(t) {
    if (t === c.t.Listening) {
      this._listeningStartTime = Date.now();
      this._maybeStopForInputLimit();
      this._startDurationCheck();
      this._startVisibilityCheck();
      this._startModalCheck();
      return;
    }
    if (t === c.t.Idle) {
      this._listeningStartTime = null;
    }
    this._cleanupAutoStopBindings();
  }
  _startDurationCheck() {
    if (!this._durationCheckTimer) {
      this._durationCheckTimer = setInterval(() => {
        if (
          this._listeningStartTime &&
          Date.now() - this._listeningStartTime >= l.F0
        ) {
          this.stop();
        }
      }, l.Ck);
    }
  }
  _startVisibilityCheck() {
    if (typeof document !== "undefined" && !this._visibilityChangeHandler) {
      this._visibilityChangeHandler = () => {
        if (document.visibilityState === "hidden") {
          this.stop();
        }
      };
      document.addEventListener(
        "visibilitychange",
        this._visibilityChangeHandler,
      );
    }
  }
  _startModalCheck() {
    if (typeof document !== "undefined" && !this._modalObserver) {
      this._modalObserver = new MutationObserver((t) => {
        for (var e of t) {
          if (e.type === "childList" && e.addedNodes.length !== 0) {
            for (var i of e.addedNodes) {
              if (
                i instanceof HTMLElement &&
                (i.classList.contains("lv-modal-wrapper") ||
                  i.classList.contains("lv-modal-mask") ||
                  i.querySelector(".lv-modal-wrapper, .lv-modal-mask"))
              ) {
                return void this.stop();
              }
            }
          }
        }
      });
      this._modalObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }
  }
  _cleanupAutoStopBindings() {
    let t;
    if (this._durationCheckTimer) {
      clearInterval(this._durationCheckTimer);
      this._durationCheckTimer = null;
    }
    if (typeof document !== "undefined" && this._visibilityChangeHandler) {
      document.removeEventListener(
        "visibilitychange",
        this._visibilityChangeHandler,
      );
      this._visibilityChangeHandler = null;
    }
    if ((t = this._modalObserver) != null) {
      t.disconnect();
    }
    this._modalObserver = null;
  }
  constructor(t, e, i) {
    super();
    this._lifecycleHooks = t;
    this._voiceInputService = e;
    this._notificationService = i;
    this.store = new Y();
    this._autoStopContext = {
      currentInputTextLength: 0,
      lastTranscriptLength: 0,
      transcript: "",
      maxInputLength: undefined,
    };
    this._sessionActive = false;
    this._readyReported = false;
    this._startTime = 0;
    this._lastTranscript = "";
    this._listeningStartTime = null;
    this._durationCheckTimer = null;
    this._visibilityChangeHandler = null;
    this._modalObserver = null;
    this._keepAliveChangeDisposable = null;
    this._transcriptApplyDisposable = null;
    this._insertStart = null;
    this._insertEnd = null;
    this._lastReplacedLength = 0;
    this._initialDocSize = null;
    this._initialContentAfterLength = null;
    this._isApplyingTranscript = false;
  }
}
I = n.Cg(
  [
    n.Qj(1, V),
    n.Qj(2, a.Ot),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof VoiceInputManagerLifecycleHooks === "undefined"
        ? Object
        : VoiceInputManagerLifecycleHooks,
      V === undefined ? Object : V,
      a.Ot === undefined ? Object : a.Ot,
    ]),
  ],
  I,
);
