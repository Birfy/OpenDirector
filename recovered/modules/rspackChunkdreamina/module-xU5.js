import s from "NY";
import n from "oa";
import { T } from "./module-Qja.js";
const r = {
  sampleRate: 16000,
  bitsPerSample: 16,
  channels: 1,
};
function o(t, e) {
  const { sampleRate } = r;
  const t_numberOfChannels = t.numberOfChannels;
  const t_length = t.length;
  const o = e / sampleRate;
  for (
    var a = Math.floor(t_length / o),
      l = new ArrayBuffer(2 * a),
      c = new DataView(l),
      d = 0;
    d < a;
    d++
  ) {
    const u = d * o;
    const h = Math.floor(u);
    const _ = Math.min(h + 1, t_length - 1);
    const p = u - h;
    let v = 0;
    for (let m = 0; m < t_numberOfChannels; m++) {
      let g;
      let f;
      const y = t.getChannelData(m);
      const S = (g = y[h]) != null ? g : 0;
      v += S + p * (((f = y[_]) != null ? f : 0) - S);
    }
    const w = Math.max(
      -32768,
      Math.min(32767, Math.round(32767 * (v /= t_numberOfChannels))),
    );
    c.setInt16(2 * d, w, true);
  }
  return l;
}
export class Y {
  clearStream() {
    this._cachedStream = null;
  }
  isSupported() {
    return (
      typeof navigator !== "undefined" &&
      navigator.mediaDevices !== undefined &&
      typeof navigator.mediaDevices.getUserMedia === "function"
    );
  }
  isPcmPipelineSupported() {
    const t = this._getAudioContextConstructor();
    if (!t) {
      return false;
    }
    try {
      const e = new t();
      const i =
        "audioWorklet" in e && typeof e.audioWorklet.addModule === "function";
      const s = typeof e.createScriptProcessor === "function";
      e.close();
      return i || s;
    } catch (t) {
      return false;
    }
  }
  getStream() {
    return s
      ._(function* () {
        if (this._cachedStream) {
          return this._cachedStream;
        }
        const t = yield navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        this._cachedStream = t;
        return t;
      })
      .call(this);
  }
  startPcmPipeline(t, e) {
    return s
      ._(function* () {
        const i = this._getAudioContextConstructor();
        if (!i) {
          throw Error("AudioContext not supported");
        }
        const s = new i();
        if (s.state === "suspended") {
          yield s.resume();
        }
        const n = s.createMediaStreamSource(t);
        if (
          "audioWorklet" in s &&
          typeof s.audioWorklet.addModule === "function"
        ) {
          return this._startPcmPipelineWithWorklet(s, n, e);
        }
        return this._startPcmPipelineWithScriptProcessor(s, n, e);
      })
      .call(this);
  }
  _startPcmPipelineWithWorklet(t, e, i) {
    return s
      ._(function* () {
        const s = new Blob(
          [
            "\nclass PcmWorkletProcessor extends AudioWorkletProcessor {\n  process(inputs, outputs, parameters) {\n    const input = inputs[0];\n    if (!input || !input.length || input[0].length === 0) return true;\n    const channelData = [];\n    for (let c = 0; c < input.length; c++) {\n      channelData.push(new Float32Array(input[c]));\n    }\n    this.port.postMessage({\n      channelData,\n      frameCount: input[0].length,\n      sampleRate: sampleRate\n    });\n    return true;\n  }\n}\nregisterProcessor('pcm-processor', PcmWorkletProcessor);\n",
          ],
          {
            type: "application/javascript",
          },
        );
        const n = URL.createObjectURL(s);
        try {
          yield t.audioWorklet.addModule(n);
        } finally {
          URL.revokeObjectURL(n);
        }
        const r = new AudioWorkletNode(t, "pcm-processor", {
          numberOfInputs: 1,
          numberOfOutputs: 1,
          outputChannelCount: [this._pcmOptions.outputChannels],
        });
        r.port.onmessage = (e) => {
          for (
            var { channelData, frameCount, sampleRate } = e.data,
              a = t.createBuffer(channelData.length, frameCount, sampleRate),
              l = 0;
            l < channelData.length;
            l++
          ) {
            a.getChannelData(l).set(channelData[l]);
          }
          i(o(a, sampleRate));
        };
        e.connect(r);
        r.connect(t.destination);
        return {
          stop: () => {
            r.port.onmessage = null;
            r.disconnect();
            e.disconnect();
            t.close();
          },
        };
      })
      .call(this);
  }
  _startPcmPipelineWithScriptProcessor(t, e, i) {
    const s = t.createScriptProcessor(
      this._pcmOptions.bufferSize,
      this._pcmOptions.inputChannels,
      this._pcmOptions.outputChannels,
    );
    s.onaudioprocess = (e) => {
      i(o(e.inputBuffer, t.sampleRate));
    };
    e.connect(s);
    s.connect(t.destination);
    return Promise.resolve({
      stop: () => {
        s.onaudioprocess = null;
        s.disconnect();
        e.disconnect();
        t.close();
      },
    });
  }
  _getAudioContextConstructor() {
    if (typeof window !== "undefined") {
      let t;
      const e = window;
      if ((t = e.AudioContext) != null) {
        return t;
      }
      return e.webkitAudioContext;
    }
  }
  constructor(t) {
    this._cachedStream = null;
    this._pcmOptions = n._({}, T, t);
  }
}
