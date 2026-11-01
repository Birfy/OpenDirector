import s from "NY";
import { n } from "./module-lhQ.js";
import r from "pX";
import { wU } from "./module-oL.js";
export class Y {
  start(t) {
    return s
      ._(function* () {
        this._stopLastSession(t);
        const e = this._beginSession(t);
        const i = n();
        if (!this._validateSupport(i)) {
          return void this._finishSession(e, t, wU.Unsupported);
        }
        try {
          const s = yield this._audioCollector.getStream();
          if (this._isSessionStale(e, t)) {
            return void this._releaseStreamTracks(s);
          }
          this._stream = s;
          this._provider = i;
          this._startWaveformAnalyzer(s, t, e);
          this._bindProviderCallbacks(i, e, t);
          yield i.start({
            audioCollector: this._audioCollector,
            lang: navigator.language,
          });
          if (this._isSessionStale(e, t)) {
            return;
          }
          t.onStatusChange(r.t.Listening);
        } catch (error) {
          const a = this._toErrorCode(error);
          this._finishSession(e, t, a);
        }
      })
      .call(this);
  }
  stop() {
    const t =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : "graceful";
    const _currentListener = this._currentListener;
    if (_currentListener) {
      if (!this._provider) {
        return void this._finishSession(
          this._sessionId,
          _currentListener,
          wU.Aborted,
          t,
        );
      }
      _currentListener.onStatusChange(r.t.Loading);
      this._provider.stop(t);
    }
  }
  _isSessionStale(t, e) {
    return this._sessionId !== t || this._currentListener !== e;
  }
  _stopLastSession(t) {
    if (this._currentListener && this._currentListener !== t) {
      this._finishSession(
        this._sessionId,
        this._currentListener,
        wU.Aborted,
        "immediate",
      );
    }
  }
  _validateSupport(t) {
    return !!(this._audioCollector.isSupported() && t);
  }
  _beginSession(t) {
    this._currentListener = t;
    const e = this._sessionId + 1;
    this._sessionId = e;
    this._finalTranscript = "";
    t.onStatusChange(r.t.Loading);
    return e;
  }
  _releaseStreamTracks(t) {
    t.getTracks().forEach((t) => t.stop());
  }
  _startWaveformAnalyzer(t, e, i) {
    this._waveformAnalyzer.start(t, (t) => {
      if (!this._isSessionStale(i, e)) {
        e.onWaveformLevelsChange(t);
      }
    });
  }
  _bindProviderCallbacks(t, e, i) {
    t.onTranscriptUpdate = (t) => {
      var s;
      if (!this._isSessionStale(e, i)) {
        this._finalTranscript = t;
        if ((s = i.onTranscriptUpdate) != null) {
          s.call(i, t);
        }
      }
    };
    t.onError = (t) => {
      this._finishSession(e, i, t);
    };
    t.onEnd = () => {
      this._finishSession(e, i);
    };
  }
  _cleanupResources() {
    let t;
    const e =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : "graceful";
    if ((t = this._provider) != null) {
      t.stop(e);
    }
    this._provider = null;
    this._waveformAnalyzer.stop();
    this._releaseStream();
  }
  _releaseStream() {
    const _stream = this._stream;
    this._stream = null;
    this._audioCollector.clearStream();
    if (_stream) {
      _stream.getTracks().forEach((t) => t.stop());
    }
  }
  _toErrorCode(t) {
    if (t instanceof DOMException && t.name === "NotAllowedError") {
      return wU.NotAllowed;
    }
    if (t instanceof DOMException && t.name === "NotFoundError") {
      return wU.AudioCapture;
    }
    if (typeof t === "string" && this._isVoiceInputErrorCode(t)) {
      return t;
    }
    return wU.Unknown;
  }
  _finishSession(t, e, i) {
    let s;
    let n;
    let a;
    let l;
    let c;
    let d;
    let u;
    const h =
      arguments.length > 3 && arguments[3] !== undefined
        ? arguments[3]
        : "graceful";
    if (!this._isSessionStale(t, e)) {
      const taskId = (s = this._provider) == null ? undefined : s.lastTaskId;
      const messageId =
        (n = this._provider) == null ? undefined : n.lastMessageId;
      const logId = (a = this._provider) == null ? undefined : a.lastLogId;
      this._currentListener = null;
      this._cleanupResources(h);
      const m = this._finalTranscript;
      this._finalTranscript = "";
      if (taskId || messageId || logId) {
        if ((l = e.onTraceInfo) != null) {
          l.call(e, {
            taskId,
            messageId,
            logId,
          });
        }
      }
      if (i) {
        if ((c = e.onError) != null) {
          c.call(e, i);
        }
      } else if (!(m || (d = e.onError) == null)) {
        d.call(e, wU.NoSpeech);
      }
      if (m) {
        if ((u = e.onTranscriptUpdate) != null) {
          u.call(e, m);
        }
      }
      e.onStatusChange(r.t.Idle);
    }
  }
  _isVoiceInputErrorCode(t) {
    return Object.values(wU).includes(t);
  }
  constructor(t, e) {
    this._audioCollector = t;
    this._waveformAnalyzer = e;
    this._currentListener = null;
    this._sessionId = 0;
    this._provider = null;
    this._stream = null;
    this._finalTranscript = "";
  }
}
