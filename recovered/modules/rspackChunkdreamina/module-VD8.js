import * as s from "./module-sxn.js";
export class k {
  start(t, e) {
    this.stop();
    this._onLevelsChange = e;
    this._disposed = false;
    if (typeof AudioContext !== "undefined") {
      try {
        const i = new AudioContext();
        this._audioContext = i;
        if (i.state === "suspended") {
          i.resume();
        }
        const s = i.createAnalyser();
        s.fftSize = 128;
        s.smoothingTimeConstant = 0.7;
        this._analyser = s;
        const n = i.createMediaStreamSource(t);
        n.connect(s);
        this._sourceNode = n;
        const r = new Uint8Array(s.frequencyBinCount);
        const o = () => {
          if (this._analyser && !this._disposed) {
            this._analyser.getByteFrequencyData(r);
            this._waveformLevels = this._getWaveformLevels(
              r,
              this._waveformLevels,
            );
            var t = this._onLevelsChange;
            if (t) {
              t(this._waveformLevels);
            }
            this._animationFrameId = requestAnimationFrame(o);
          }
        };
        o();
      } catch (t) {}
    }
  }
  stop() {
    this._disposed = true;
    if (typeof this._animationFrameId === "number") {
      cancelAnimationFrame(this._animationFrameId);
      this._animationFrameId = undefined;
    }
    if ((t = this._sourceNode) != null) {
      t.disconnect();
    }
    this._sourceNode = null;
    if ((e = this._analyser) != null) {
      e.disconnect();
    }
    this._analyser = null;
    this._onLevelsChange = null;
    var t;
    var e;
    const _audioContext = this._audioContext;
    this._audioContext = null;
    if (_audioContext) {
      _audioContext.close();
    }
    this._waveformLevels = [...s.Ye];
  }
  _getWaveformLevels(t) {
    const e =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : s.Ye;
    if (t.length === 0) {
      return [...s.Ye];
    }
    const i = Math.max(1, Math.floor(t.length / s.um));
    const n = [];
    for (let r = 0; r < s.um; r++) {
      const o = r * i;
      const a = r === s.um - 1 ? t.length : Math.min(t.length, o + i);
      const l = t.slice(o, a);
      const c = Math.min(
        1,
        (l.length === 0
          ? 0
          : l.reduce((acc, item) => acc + item, 0) / l.length / 255) * s.Yl,
      );
      const d = s.Ye[r];
      const u = d + c * (s.zf - d);
      n.push(u);
    }
    return s.o5.map((t, i) => {
      var s = n[t];
      return Math.round(0.4 * e[i] + 0.6 * s);
    });
  }
  constructor() {
    this._analyser = null;
    this._audioContext = null;
    this._sourceNode = null;
    this._waveformLevels = [...s.Ye];
    this._onLevelsChange = null;
    this._disposed = false;
  }
}
