import { Og, j6, n8, xs } from "./module-KQ.js";
import { S, VE, mT } from "./module-GZm.js";
import { kl } from "./module-E8B.js";
import { t } from "./module-vBD.js";
import { V } from "./module-lka.js";
const a = j6(
  function e() {
    xs(this, e);
    n8(this, "id", 1);
    n8(this, "type", S.VIDEO);
    n8(this, "codecType", mT.AVC);
    n8(this, "pid", -1);
    n8(this, "hvcC", undefined);
    n8(this, "codec", "");
    n8(this, "timescale", 0);
    n8(this, "formatTimescale", 0);
    n8(this, "sequenceNumber", 0);
    n8(this, "baseMediaDecodeTime", 0);
    n8(this, "baseDts", 0);
    n8(this, "duration", 0);
    n8(this, "warnings", []);
    n8(this, "samples", []);
    n8(this, "pps", []);
    n8(this, "sps", []);
    n8(this, "vps", []);
    n8(this, "fpsNum", 0);
    n8(this, "fpsDen", 0);
    n8(this, "sarRatio", []);
    n8(this, "width", 0);
    n8(this, "height", 0);
    n8(this, "nalUnitSize", 4);
    n8(this, "present", false);
    n8(this, "isVideoEncryption", false);
    n8(this, "isAudioEncryption", false);
    n8(this, "isVideo", true);
    n8(this, "kid", null);
    n8(this, "pssh", null);
    n8(this, "ext", undefined);
  },
  [
    {
      key: "reset",
      value: function () {
        this.sequenceNumber =
          this.width =
          this.height =
          this.fpsDen =
          this.fpsNum =
          this.duration =
          this.baseMediaDecodeTime =
          this.timescale =
            0;
        this.codec = "";
        this.present = false;
        this.pid = -1;
        this.pps = [];
        this.sps = [];
        this.vps = [];
        this.sarRatio = [];
        this.samples = [];
        this.warnings = [];
        this.hvcC = null;
      },
    },
    {
      key: "firstDts",
      get: function () {
        if (this.samples.length) {
          return this.samples[0].dts;
        }
        return null;
      },
    },
    {
      key: "firstPts",
      get: function () {
        if (this.samples.length) {
          return this.samples[0].pts;
        }
        return null;
      },
    },
    {
      key: "samplesDuration",
      get: function () {
        if (this.samples.length > 0) {
          const e = this.samples[0];
          const t = this.samples[this.samples.length - 1];
          return t.dts - e.dts + t.duration;
        }
        return 0;
      },
    },
    {
      key: "exist",
      value: function () {
        return (
          !!/av01/.test(this.codec) ||
          !!(this.pps.length && this.sps.length && this.codec)
        );
      },
    },
    {
      key: "hasSample",
      value: function () {
        return !!this.samples.length;
      },
    },
    {
      key: "isEncryption",
      get: function () {
        return this.isVideoEncryption;
      },
    },
  ],
);
const s = j6(
  function e() {
    xs(this, e);
    n8(this, "id", 2);
    n8(this, "type", S.AUDIO);
    n8(this, "codecType", VE.AAC);
    n8(this, "pid", -1);
    n8(this, "codec", "");
    n8(this, "sequenceNumber", 0);
    n8(this, "sampleDuration", 0);
    n8(this, "timescale", 0);
    n8(this, "formatTimescale", 0);
    n8(this, "baseMediaDecodeTime", 0);
    n8(this, "duration", 0);
    n8(this, "warnings", []);
    n8(this, "samples", []);
    n8(this, "baseDts", 0);
    n8(this, "sampleSize", 16);
    n8(this, "sampleRate", 0);
    n8(this, "channelCount", 0);
    n8(this, "objectType", 0);
    n8(this, "sampleRateIndex", 0);
    n8(this, "config", []);
    n8(this, "present", false);
    n8(this, "isVideoEncryption", false);
    n8(this, "isAudioEncryption", false);
    n8(this, "kid", null);
    n8(this, "isHeAACExt", false);
    n8(this, "ext", undefined);
  },
  [
    {
      key: "reset",
      value: function () {
        this.sequenceNumber = 0;
        this.timescale = 0;
        this.sampleDuration = 0;
        this.sampleRate = 0;
        this.channelCount = 0;
        this.baseMediaDecodeTime = 0;
        this.present = false;
        this.isHeAACExt = false;
        this.pid = -1;
        this.codec = "";
        this.samples = [];
        this.config = [];
        this.warnings = [];
      },
    },
    {
      key: "exist",
      value: function () {
        return !!(
          this.sampleRate &&
          this.channelCount &&
          this.codec &&
          this.codecType === VE.AAC
        );
      },
    },
    {
      key: "hasSample",
      value: function () {
        return !!this.samples.length;
      },
    },
    {
      key: "isEncryption",
      get: function () {
        return this.isAudioEncryption;
      },
    },
    {
      key: "firstDts",
      get: function () {
        if (this.samples.length) {
          return this.samples[0].dts;
        }
        return null;
      },
    },
    {
      key: "firstPts",
      get: function () {
        if (this.samples.length) {
          return this.samples[0].pts;
        }
        return null;
      },
    },
    {
      key: "samplesDuration",
      get: function () {
        if (this.samples.length > 0) {
          const e = this.samples[0];
          const t = this.samples[this.samples.length - 1];
          return t.dts - e.dts + t.duration;
        }
        return 0;
      },
    },
  ],
);
const o = j6(
  function e(t, r, i) {
    xs(this, e);
    n8(this, "flag", {});
    n8(this, "keyframe", false);
    n8(this, "gopId", 0);
    n8(this, "duration", 0);
    n8(this, "size", 0);
    n8(this, "units", []);
    n8(this, "chromaFormat", 420);
    this.originPts = this.pts = t;
    this.originDts = this.dts = r;
    if (i) {
      this.units = i;
    }
  },
  [
    {
      key: "cts",
      get: function () {
        return this.pts - this.dts;
      },
    },
    {
      key: "setToKeyframe",
      value: function () {
        this.keyframe = true;
        this.flag.dependsOn = 2;
        this.flag.isNonSyncSample = 0;
      },
    },
  ],
);
const u = j6(function e(t, r, i, a) {
  xs(this, e);
  n8(this, "duration", 1024);
  n8(this, "flag", {
    dependsOn: 2,
    isNonSyncSample: 0,
  });
  n8(this, "keyframe", true);
  this.originPts = this.pts = this.dts = t;
  this.data = r;
  this.size = r.byteLength;
  this.sampleOffset = a;
  if (i) {
    this.duration = i;
  }
});
const l = j6(
  function e() {
    xs(this, e);
    n8(this, "id", 3);
    n8(this, "type", S.METADATA);
    n8(this, "timescale", 0);
    n8(this, "flvScriptSamples", []);
    n8(this, "seiSamples", []);
  },
  [
    {
      key: "exist",
      value: function () {
        return !!(
          (this.flvScriptSamples.length || this.seiSamples.length) &&
          this.timescale
        );
      },
    },
    {
      key: "reset",
      value: function () {
        this.timescale = 0;
        this.flvScriptSamples = [];
        this.seiSamples = [];
      },
    },
    {
      key: "hasSample",
      value: function () {
        return !!(this.flvScriptSamples.length || this.seiSamples.length);
      },
    },
  ],
);
let h = null;
const p = ["stts", "stsc", "stsz", "stco", "co64", "stss", "ctts"];
export var Y = (() => {
  function e(t, r, i, o) {
    let u;
    let c;
    const f = this;
    xs(this, e);
    n8(this, "_videoSamples", []);
    n8(this, "_audioSamples", []);
    n8(this, "_lastRemainBuffer", []);
    n8(this, "_lastRemainBufferStartPos", 0);
    n8(this, "videoMaxFrameIdx", -1);
    n8(this, "audioMaxFrameIdx", -1);
    this.videoTrack = new a();
    this.audioTrack = new s();
    this.metadataTrack = i || new l();
    this.videoSegmnents = t;
    this.audioSegmnents = r;
    this.log = new V("MP4Demuxer", !o || !o.openLog || !o.openLog);
    this.memoryOpt = o == null ? undefined : o.memoryOpt;
    if (!this.memoryOpt) {
      if (t) {
        t.forEach((e) => {
          let t;
          (t = f._videoSamples).push.apply(t, Og(e.frames));
        });
      }
      if (r) {
        r.forEach((e) => {
          let t;
          (t = f._audioSamples).push.apply(t, Og(e.frames));
        });
      }
    }
    if (((u = this.videoSegmnents) == null ? undefined : u.length) > 0) {
      const h = this.videoSegmnents[this.videoSegmnents.length - 1].frames;
      this.videoMaxFrameIdx = h[h.length - 1].index;
    }
    if (((c = this.audioSegmnents) == null ? undefined : c.length) > 0) {
      const p = this.audioSegmnents[this.audioSegmnents.length - 1].frames;
      this.audioMaxFrameIdx = p[p.length - 1].index;
    }
  }
  return j6(
    e,
    [
      {
        key: "parseSamples",
        value: function (e) {
          if (!e) {
            throw Error("moov is required");
          }
          if (!(this.videoTrack.codec || this.audioTrack.codec)) {
            t.moovToTrack(e, this.videoTrack, this.audioTrack);
            this.videoSenc = this.videoTrack.videoSenc;
            this.audioSenc = this.audioTrack.audioSenc;
            if (this.memoryOpt) {
              this.clearBoxEntries(e);
            }
          }
        },
      },
      {
        key: "demux",
        value: function (e, t, r, n, i) {
          this.parseSamples(i);
          const videoTrack = this.videoTrack;
          const audioTrack = this.audioTrack;
          videoTrack.samples = [];
          audioTrack.samples = [];
          let l = {};
          if (r) {
            var f;
            var d;
            var h;
            let p;
            let v = 0;
            if (
              this.memoryOpt &&
              this.videoSegmnents &&
              !(l = this.getFramePosByIdx("video", r[0]))
            ) {
              throw Error("cannot found video frame #".concat(r[0]));
            }
            const m = l;
            let y = m.frameIdx;
            let g = m.segmentIdx;
            for (let _ = r[0], b = r[1]; _ <= b; _++) {
              if (!this._videoSamples.length && this.videoSegmnents) {
                const k = this.getFrameInfo("video", g, y);
                f = k.sample;
                g = k.segmentIdx;
                y = k.frameIdx;
              } else {
                f = this._videoSamples[_];
              }
              if (!f) {
                throw Error("cannot found video frame #".concat(_));
              }
              h = f.offset - t;
              d = e.subarray(h, h + f.size);
              p = new o(typeof f.pts === "number" ? f.pts : f.dts, f.dts);
              p.duration = f.duration;
              p.gopId = f.gopId;
              if (f.keyframe) {
                p.setToKeyframe();
              }
              for (let x = 0, S = d.length - 1; x < S;) {
                v = kl(d, x);
                x += 4;
                p.units.push(d.subarray(x, x + v));
                x += v;
              }
              videoTrack.samples.push(p);
            }
            videoTrack.baseMediaDecodeTime = videoTrack.samples[0].dts;
          }
          l = {};
          if (n) {
            if (
              this.memoryOpt &&
              this.audioSegmnents &&
              !(l = this.getFramePosByIdx("audio", n[0]))
            ) {
              throw Error("cannot found video frame #".concat(n[0]));
            }
            const w = l;
            let E = w.frameIdx;
            let T = w.segmentIdx;
            for (let O = n[0], A = n[1]; O <= A; O++) {
              if (!this._audioSamples.length && this.audioSegmnents) {
                const C = this.getFrameInfo("audio", T, E);
                f = C.sample;
                T = C.segmentIdx;
                E = C.frameIdx;
              } else {
                f = this._audioSamples[O];
              }
              if (!f) {
                throw Error("cannot found video frame #".concat(O));
              }
              h = f.offset - t;
              d = e.subarray(h, h + f.size);
              audioTrack.samples.push(new u(f.dts, d, f.duration));
            }
            audioTrack.baseMediaDecodeTime = audioTrack.samples[0].dts;
          }
          return {
            videoTrack,
            audioTrack,
            metadataTrack: this.metadataTrack,
          };
        },
      },
      {
        key: "demuxPart",
        value: function (e, t, r, n, i, a, s, l) {
          this.parseSamples(i);
          this.videoTrack.useEME = a;
          this.audioTrack.useEME = a;
          if (
            this._lastRemainBuffer &&
            this._lastRemainBuffer.byteLength > 0 &&
            t > this._lastRemainBufferStartPos &&
            t <=
              this._lastRemainBufferStartPos + this._lastRemainBuffer.byteLength
          ) {
            for (let f = 0; f < 20;) {
              try {
                const d = this._lastRemainBuffer.subarray(
                  0,
                  t - this._lastRemainBufferStartPos,
                );
                const h = new Uint8Array(e.byteLength + d.byteLength);
                h.set(d, 0);
                h.set(new Uint8Array(e), d.byteLength);
                e = h;
                t -= d.byteLength;
                this._lastRemainBuffer = null;
                this._lastRemainBufferStartPos = 0;
                break;
              } catch (error) {
                if (f < 20) {
                  f++;
                } else {
                  throw Error("new Uint8Array error:," + error.errorMessage);
                }
              }
            }
          }
          const videoTrack = this.videoTrack;
          const audioTrack = this.audioTrack;
          videoTrack.samples = [];
          audioTrack.samples = [];
          videoTrack.videoSenc = null;
          audioTrack.audioSenc = null;
          if (
            (r == null ? undefined : r[1]) > this.videoMaxFrameIdx &&
            this.videoMaxFrameIdx > 0
          ) {
            r[1] = this.videoMaxFrameIdx;
          }
          if (
            (n == null ? undefined : n[1]) > this.audioMaxFrameIdx &&
            this.audioMaxFrameIdx > 0
          ) {
            n[1] = this.audioMaxFrameIdx;
          }
          let m = 0;
          let y = 0;
          let g = {};
          const _ = e.byteLength + t;
          if (r.length > 0) {
            if (
              this.memoryOpt &&
              this.videoSegmnents &&
              !(g = this.getFramePosByIdx("video", r[0]))
            ) {
              throw Error("cannot found video frame #".concat(r[0]));
            }
            var b;
            var k;
            var x;
            let S;
            const w = g;
            let E = w.frameIdx;
            let T = w.segmentIdx;
            for (let O = r[0]; O <= r[1]; O++) {
              if (!this._videoSamples.length && this.videoSegmnents) {
                const A = this.getFrameInfo("video", T, E);
                b = A.sample;
                T = A.segmentIdx;
                E = A.frameIdx;
              } else {
                b = this._videoSamples[O];
              }
              if (!b) {
                throw Error("cannot found video frame #".concat(O));
              }
              if (this.memoryOpt && b.offset + b.size > _) {
                break;
              }
              if (b.offset >= t && b.offset + b.size <= _) {
                m = (x = b.offset - t) + b.size;
                k = e.subarray(x, m);
                S = new o(typeof b.pts === "number" ? b.pts : b.dts, b.dts);
                S.duration = b.duration;
                S.gopId = b.gopId;
                S.sampleOffset = b.index;
                if (b.keyframe) {
                  S.setToKeyframe();
                }
                S.data = k;
                S.size = b.size;
                videoTrack.samples.push(S);
              }
            }
            if (videoTrack.samples.length > 0) {
              videoTrack.gopId = videoTrack.samples[0].gopId;
              videoTrack.baseMediaDecodeTime = videoTrack.samples[0].dts;
              videoTrack.startPts =
                videoTrack.samples[0].pts / videoTrack.timescale;
              videoTrack.endPts =
                videoTrack.samples[videoTrack.samples.length - 1].pts /
                videoTrack.timescale;
              videoTrack.startDts =
                videoTrack.samples[0].dts / videoTrack.timescale;
              videoTrack.endDts =
                videoTrack.samples[videoTrack.samples.length - 1].dts /
                videoTrack.timescale;
              if (this.videoSenc) {
                videoTrack.videoSenc = this.videoSenc.slice(
                  videoTrack.samples[0].sampleOffset,
                  videoTrack.samples[0].sampleOffset +
                    videoTrack.samples.length,
                );
                videoTrack.kidValue = s;
              }
            }
          }
          if (n.length > 0) {
            if (
              this.memoryOpt &&
              this.audioSegmnents &&
              !(g = this.getFramePosByIdx("audio", n[0]))
            ) {
              throw Error("cannot found video frame #".concat(n[0]));
            }
            const C = g;
            let R = C.frameIdx;
            let P = C.segmentIdx;
            for (let I = n[0]; I <= n[1]; I++) {
              if (!this._audioSamples.length && this.audioSegmnents) {
                const B = this.getFrameInfo("audio", P, R);
                b = B.sample;
                P = B.segmentIdx;
                R = B.frameIdx;
              } else {
                b = this._audioSamples[I];
              }
              if (!b) {
                throw Error("cannot found video frame #".concat(I));
              }
              if (this.memoryOpt && b.offset + b.size > _) {
                break;
              }
              if (b.offset >= t && b.offset + b.size <= _) {
                y = (x = b.offset - t) + b.size;
                k = e.subarray(x, y);
                audioTrack.samples.push(new u(b.dts, k, b.duration, b.index));
              }
            }
            if (audioTrack.samples.length > 0) {
              audioTrack.gopId =
                audioTrack.samples[0].gopId || videoTrack.gopId;
              audioTrack.baseMediaDecodeTime = audioTrack.samples[0].dts;
              audioTrack.startPts =
                audioTrack.samples[0].pts / audioTrack.timescale;
              audioTrack.endPts =
                audioTrack.samples[audioTrack.samples.length - 1].pts /
                audioTrack.timescale;
              if (this.audioSenc) {
                audioTrack.audioSenc = this.audioSenc.slice(
                  audioTrack.samples[0].sampleOffset,
                  audioTrack.samples[0].sampleOffset +
                    audioTrack.samples.length,
                );
                audioTrack.kidValue = s;
              }
            }
          }
          this.decoderData(videoTrack, audioTrack, l);
          let U = 0;
          for (let D = 0; D < videoTrack.samples.length; D++) {
            for (
              let L = 0, M = videoTrack.samples[D].data, j = M.length - 1;
              L < j;
            ) {
              U = kl(M, L);
              L += 4;
              videoTrack.samples[D].units.push(M.subarray(L, L + U));
              L += U;
            }
          }
          const N = Math.max(m, y);
          this._lastRemainBuffer = e.subarray(N);
          if (this._lastRemainBuffer.byteLength > 0) {
            this._lastRemainBufferStartPos =
              t + e.byteLength - this._lastRemainBuffer.byteLength;
          } else {
            this._lastRemainBufferStartPos = 0;
          }
          return {
            videoTrack,
            audioTrack,
            metadataTrack: this.metadataTrack,
            lastRemainBufferInfo: {
              data: this._lastRemainBuffer,
              pos: this._lastRemainBufferStartPos,
            },
          };
        },
      },
      {
        key: "setLastRemainBufferInfo",
        value: function (e, t) {
          this._lastRemainBuffer = e;
          this._lastRemainBufferStartPos = t;
        },
      },
      {
        key: "reset",
        value: function () {
          this._lastRemainBuffer = null;
          this._lastRemainBufferStartPos = 0;
          this.videoTrack.reset();
          this.audioTrack.reset();
          this.metadataTrack.reset();
        },
      },
      {
        key: "decoderData",
        value: function (t, r, n) {
          if (
            !t.useEME &&
            !r.useEME &&
            ((t != null && t.videoSenc) || (r != null && r.audioSenc))
          ) {
            if (!e.Crypto) {
              throw Error("Crypto is not defined");
            }
            e.Crypto.decoderAESCTRData(t, r, n);
          }
        },
      },
      {
        key: "getFramePosByIdx",
        value: function (e, t) {
          let r;
          let n;
          let i;
          const a = e === "video" ? this.videoSegmnents : this.audioSegmnents;
          if (!a || !(a != null && a.length)) {
            return null;
          }
          let s = 0;
          for (let o = 0; o < a.length; o++) {
            r = a[o].frames;
            if (
              t <=
              ((n = a[o].frames) == null
                ? undefined
                : n[((i = r) == null ? undefined : i.length) - 1].index)
            ) {
              s = o;
              break;
            }
          }
          return {
            frameIdx: r.findIndex((e) => e.index === t),
            segmentIdx: s,
          };
        },
      },
      {
        key: "getFrameInfo",
        value: function (e, t, r) {
          let n;
          let i;
          let a;
          const s = e === "video" ? this.videoSegmnents : this.audioSegmnents;
          if (s) {
            if (
              r <
              ((n = s[t]) == null || (n = n.frames) == null
                ? undefined
                : n.length)
            ) {
              return {
                sample: (i = s[t]) == null ? undefined : i.frames[r],
                segmentIdx: t,
                frameIdx: r + 1,
              };
            }
            return {
              sample: (a = s[t + 1]) == null ? undefined : a.frames[0],
              segmentIdx: t + 1,
              frameIdx: 1,
            };
          }
          return {};
        },
      },
      {
        key: "clearBoxEntries",
        value: function (e) {
          if (this.memoryOpt) {
            e.trak.forEach((e) => {
              p.forEach((t) => {
                const r = e.mdia.minf.stbl[t];
                if (r) {
                  if (r.entries) {
                    r.entries = null;
                  }
                  if (r.entrySizes) {
                    r.entrySizes = null;
                  }
                }
              });
            });
          }
        },
      },
    ],
    [
      {
        key: "Crypto",
        get: function () {
          return h;
        },
        set: function (e) {
          h = e;
        },
      },
      {
        key: "probe",
        value: function (e) {
          return t.probe(e);
        },
      },
    ],
  );
})();
