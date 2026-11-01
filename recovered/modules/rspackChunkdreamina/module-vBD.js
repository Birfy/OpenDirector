import { j6, n8, xs } from "./module-KQ.js";
import { OU, ZT, ct, e$, hy, kl, nO, p1, xV } from "./module-E8B.js";
const a = typeof window !== "undefined";
const s =
  a &&
  typeof navigator !== "undefined" &&
  navigator.userAgent.toLocaleLowerCase();
if (a) {
  /^((?!chrome|android).)*safari/.test(s);
}
const o = a && s.includes("firefox");
const u = a && s.includes("android");
const l = (() => {
  function e() {
    xs(this, e);
  }
  return j6(e, null, [
    {
      key: "getRateIndexByRate",
      value: function (t) {
        return e.FREQ.indexOf(t);
      },
    },
    {
      key: "parseADTS",
      value: function (t, r) {
        let n;
        let i;
        for (
          var a = t.length, s = 0;
          s + 2 < a && (t[s] !== 255 || (246 & t[s + 1]) != 240);
        ) {
          s++;
        }
        if (!(s >= a)) {
          const skip = s;
          const frames = [];
          const l = (60 & t[s + 2]) >>> 2;
          const c = e.FREQ[l];
          if (!c) {
            throw Error("Invalid sampling index: ".concat(l));
          }
          const f = ((192 & t[s + 2]) >>> 6) + 1;
          const d = ((1 & t[s + 2]) << 2) | ((192 & t[s + 3]) >>> 6);
          const h = e._getConfig(l, d, f);
          const p = h.config;
          const v = h.codec;
          let m = 0;
          const y = e.getFrameDuration(c);
          while (s + 7 < a) {
            if (t[s] !== 255 || (246 & t[s + 1]) != 240) {
              s++;
              continue;
            }
            if (
              !(i =
                ((3 & t[s + 3]) << 11) |
                (t[s + 4] << 3) |
                ((224 & t[s + 5]) >> 5)) ||
              a - s < i
            ) {
              break;
            }
            n = (1 & ~t[s + 1]) * 2;
            frames.push({
              pts: r + m * y,
              data: t.subarray(s + 7 + n, s + i),
            });
            m++;
            s += i;
          }
          return {
            skip,
            remaining: s >= a ? undefined : t.subarray(s),
            frames,
            samplingFrequencyIndex: l,
            sampleRate: c,
            objectType: f,
            channelCount: d,
            codec: v,
            config: p,
            originCodec: "mp4a.40.".concat(f),
          };
        }
      },
    },
    {
      key: "parseAudioSpecificConfig",
      value: function (t) {
        if (t.length) {
          let r = t[0] >>> 3;
          const n = ((7 & t[0]) << 1) | (t[1] >>> 7);
          const i = (120 & t[1]) >>> 3;
          const a = e.FREQ[n];
          if (a) {
            const s = e._getConfig(n, i, r);
            const o = s.config;
            const u = s.codec;
            if (
              t.length >= 4 &&
              ((t[2] << 3) | ((224 & t[3]) >> 5)) == 695 &&
              (128 & t[4]) >> 7
            ) {
              r = 31 & t[3];
            }
            return {
              samplingFrequencyIndex: n,
              sampleRate: a,
              objectType: r,
              channelCount: i,
              config: o,
              codec: u,
              originCodec: "mp4a.40.".concat(r),
            };
          }
        }
      },
    },
    {
      key: "getFrameDuration",
      value: function (e) {
        const t =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : 90000;
        return (1024 * t) / e;
      },
    },
    {
      key: "_getConfig",
      value: function (e, t, r) {
        let n;
        let i;
        const a = [];
        if (o) {
          if (e >= 6) {
            n = 5;
            i = e - 3;
          } else {
            n = 2;
            i = e;
          }
        } else if (u) {
          n = 2;
          i = e;
        } else {
          n = r === 2 || r === 5 ? r : 5;
          i = e;
          if (e >= 6) {
            i = e - 3;
          } else if (t === 1) {
            n = 2;
            i = e;
          }
        }
        a[0] = n << 3;
        a[0] |= (14 & e) >> 1;
        a[1] = (1 & e) << 7;
        a[1] |= t << 3;
        if (n === 5) {
          a[1] |= (14 & i) >> 1;
          a[2] = (1 & i) << 7;
          a[2] |= 8;
          a[3] = 0;
        }
        return {
          config: a,
          codec: "mp4a.40.".concat(n),
        };
      },
    },
    {
      key: "getSilentFrame",
      value: function (e, t, r) {
        if (e === "mp4a.40.2") {
          if (t === 1) {
            return new Uint8Array([0, 200, 0, 128, 35, 128]);
          }
          if (t === 2) {
            return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
          }
          if (t === 3) {
            return new Uint8Array([
              0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142,
            ]);
          }
          if (t === 4) {
            return new Uint8Array([
              0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2,
              56,
            ]);
          }
          if (t === 5) {
            return new Uint8Array([
              0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0,
              33, 144, 2, 56,
            ]);
          }
          if (t === 6) {
            return new Uint8Array([
              0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0,
              33, 144, 2, 0, 178, 0, 32, 8, 224,
            ]);
          }
        } else {
          if (e === "mp4a.40.5" && t === 2 && r === 22050) {
            return new Uint8Array([
              33, 17, 69, 0, 20, 80, 1, 70, 173, 200, 65, 117, 0, 0, 0, 28, 96,
              24, 13, 230, 66, 20, 180, 180, 180, 180, 180, 180, 180, 180, 180,
              180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180,
              180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180,
              180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180,
              180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180,
              180, 188,
            ]);
          }
          if (e === "mp40.40.5" && t === 2 && r === 24000) {
            return new Uint8Array([
              33, 17, 69, 0, 20, 80, 1, 70, 173, 200, 65, 117, 0, 0, 0, 28, 96,
              24, 13, 229, 98, 20, 180, 180, 180, 180, 180, 180, 180, 180, 180,
              180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180,
              180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180,
              180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180,
              180, 180, 180, 180, 180, 180, 180, 188,
            ]);
          }
          if (t === 1) {
            return new Uint8Array([
              1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241,
              193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
              90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
              90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94,
            ]);
          }
          if (t === 2 || t === 3) {
            return new Uint8Array([
              1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6,
              241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
              90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
              90, 90, 90, 90, 90, 90, 90, 90, 90, 94,
            ]);
          }
        }
      },
    },
  ]);
})();
n8(
  l,
  "FREQ",
  [
    96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025,
    8000, 7350,
  ],
);
const c = j6(
  function e(t) {
    xs(this, e);
    n8(this, "_bytesAvailable", undefined);
    n8(this, "_bitsAvailable", 0);
    n8(this, "_word", 0);
    if (!t) {
      throw Error("ExpGolomb data params is required");
    }
    this._data = t;
    this._bytesAvailable = t.byteLength;
    if (this._bytesAvailable) {
      this._loadWord();
    }
  },
  [
    {
      key: "_loadWord",
      value: function () {
        const e = this._data.byteLength - this._bytesAvailable;
        const t = Math.min(4, this._bytesAvailable);
        if (t === 0) {
          throw Error("No bytes available");
        }
        const r = new Uint8Array(4);
        r.set(this._data.subarray(e, e + t));
        this._word = new DataView(r.buffer).getUint32(0);
        this._bitsAvailable = 8 * t;
        this._bytesAvailable -= t;
      },
    },
    {
      key: "bitsPos",
      value: function () {
        return 8 * this._bytesAvailable - this._bitsAvailable;
      },
    },
    {
      key: "bitsLeft",
      value: function () {
        return 8 * this._data.length - this.bitsPos();
      },
    },
    {
      key: "byteAligned",
      value: function () {
        return this.bitsPos() === 0 || this.bitsPos() % 8 == 0;
      },
    },
    {
      key: "skipBits",
      value: function (e) {
        if (this._bitsAvailable > e) {
          this._word <<= e;
          this._bitsAvailable -= e;
        } else {
          const t = Math.floor((e -= this._bitsAvailable) / 8);
          e -= 8 * t;
          this._bytesAvailable -= t;
          this._loadWord();
          this._word <<= e;
          this._bitsAvailable -= e;
        }
      },
    },
    {
      key: "readBits",
      value: function (e) {
        if (e > 32) {
          throw Error("Cannot read more than 32 bits");
        }
        let t = Math.min(this._bitsAvailable, e);
        const r = this._word >>> (32 - t);
        this._bitsAvailable -= t;
        if (this._bitsAvailable > 0) {
          this._word <<= t;
        } else if (this._bytesAvailable > 0) {
          this._loadWord();
        }
        if ((t = e - t) > 0 && this._bitsAvailable) {
          return (r << t) | this.readBits(t);
        }
        return r;
      },
    },
    {
      key: "skipLZ",
      value: function () {
        let e;
        for (e = 0; e < this._bitsAvailable; ++e) {
          if ((this._word & (2147483648 >>> e)) != 0) {
            this._word <<= e;
            this._bitsAvailable -= e;
            return e;
          }
        }
        this._loadWord();
        return e + this.skipLZ();
      },
    },
    {
      key: "skipUEG",
      value: function () {
        this.skipBits(1 + this.skipLZ());
      },
    },
    {
      key: "readUEG",
      value: function () {
        const e = this.skipLZ();
        return this.readBits(e + 1) - 1;
      },
    },
    {
      key: "readEG",
      value: function () {
        const e = this.readUEG();
        if (1 & e) {
          return (1 + e) >>> 1;
        }
        return -1 * (e >>> 1);
      },
    },
    {
      key: "readBool",
      value: function () {
        return this.readBits(1) === 1;
      },
    },
    {
      key: "readUByte",
      value: function () {
        return this.readBits(8);
      },
    },
    {
      key: "skipScalingList",
      value: function (e) {
        let t = 8;
        let r = 8;
        for (let n = 0; n < e; n++) {
          if (r !== 0) {
            r = (t + this.readEG() + 256) % 256;
          }
          t = r === 0 ? t : r;
        }
      },
    },
  ],
);
const f = j6(
  function e(t) {
    xs(this, e);
    this._buffer = t;
    this._offset = 0;
    this._heldBits = 0;
    this._numHeldBits = 0;
  },
  [
    {
      key: "readUint8",
      value: function () {
        return this._buffer[this._offset++];
      },
    },
    {
      key: "readUint16",
      value: function () {
        return (
          (this._buffer[this._offset++] << 8) | this._buffer[this._offset++]
        );
      },
    },
    {
      key: "readUint32",
      value: function () {
        return (
          (this._buffer[this._offset++] << 24) |
          (this._buffer[this._offset++] << 16) |
          (this._buffer[this._offset++] << 8) |
          this._buffer[this._offset++]
        );
      },
    },
    {
      key: "readUint8Array",
      value: function (e) {
        const t = this._buffer.slice(this._offset, this._offset + e);
        this._offset += e;
        return t;
      },
    },
    {
      key: "streamRead1Bytes",
      value: function () {
        this._heldBits = this.readUint8();
        this._numHeldBits = 8;
      },
    },
    {
      key: "streamRead2Bytes",
      value: function () {
        this._heldBits = this.readUint16();
        this._numHeldBits = 16;
      },
    },
    {
      key: "extractBits",
      value: function (e) {
        const t = (this._heldBits >> (this._numHeldBits - e)) & ((1 << e) - 1);
        this._numHeldBits -= e;
        return t;
      },
    },
  ],
);
const d = (() => {
  function e() {
    xs(this, e);
  }
  return j6(e, null, [
    {
      key: "parseVVCDecoderConfigurationRecord",
      value: function (t) {
        let olsIdx;
        let numSublayers;
        let constantFrameRate;
        let a;
        let bitDepthLumaMinus8;
        let width;
        let height;
        let l;
        const c = new f(t);
        const configurationVersion = c.readUint8();
        c.streamRead1Bytes();
        c.extractBits(5);
        const nalUnitSize = c.extractBits(2) + 1;
        const ptlPresentFlag = c.extractBits(1);
        let ptlRecord = {};
        if (ptlPresentFlag) {
          c.streamRead2Bytes();
          a = c.extractBits(2);
          bitDepthLumaMinus8 = c.extractBits(3);
          numSublayers = c.extractBits(3);
          constantFrameRate = c.extractBits(2);
          c.extractBits(6);
          ptlRecord = e.parseVVCPTLRecord(c, numSublayers);
          olsIdx = c.readUint16();
          width = c.readUint16();
          height = c.readUint16();
          l = c.readUint16();
        }
        for (
          var numOfArrays = c.readUint8(),
            vps = [],
            sps = [],
            pps = [],
            spsParsed = null,
            k = 0;
          k < numOfArrays;
          k++
        ) {
          c.streamRead1Bytes();
          c.extractBits(1);
          c.extractBits(2);
          const x = c.extractBits(5);
          let S = 1;
          if (x !== 13 && x !== 12) {
            S = c.readUint16();
          }
          for (let w = 0; w < S; w++) {
            const E = c.readUint16();
            switch (x) {
              case 14:
                vps.push(c.readUint8Array(E));
                break;
              case 15:
                const T = c.readUint8Array(E);
                if (!spsParsed) {
                  spsParsed = e.parseSPS(e.removeEPB(T));
                }
                sps.push(T);
                break;
              case 16:
                pps.push(c.readUint8Array(E));
            }
          }
        }
        return {
          data: t,
          configurationVersion,
          codec: "bvc2.1.6.L93.B0",
          nalUnitSize,
          ptlPresentFlag,
          olsIdx,
          numSublayers,
          constantFrameRate,
          chromaFormatIdc: a,
          bitDepthLumaMinus8,
          ptlRecord,
          width,
          height,
          sampleRate: l,
          numOfArrays,
          vps,
          sps,
          pps,
          spsParsed,
        };
      },
    },
    {
      key: "parseVVCPTLRecord",
      value: function (e, t) {
        e.streamRead2Bytes();
        e.extractBits(2);
        const numBytesConstraintInfo = e.extractBits(6);
        const n = e.extractBits(7);
        const i = e.extractBits(1);
        const a = e.readUint8();
        e.streamRead1Bytes();
        const s = e.extractBits(1);
        const o = e.extractBits(1);
        const generalConstraintInfo = new Uint8Array(numBytesConstraintInfo);
        if (numBytesConstraintInfo) {
          for (let l = 0; l < numBytesConstraintInfo - 1; l++) {
            const c = e.extractBits(6);
            e.streamRead1Bytes();
            const f = e.extractBits(2);
            generalConstraintInfo[l] = (c << 2) | f;
          }
          generalConstraintInfo[numBytesConstraintInfo - 1] = e.extractBits(6);
        } else {
          e.extractBits(6);
        }
        const subLayerLevelIdc = [];
        if (t > 1) {
          e.streamRead1Bytes();
          let h = 0;
          for (let p = t - 2; p >= 0; --p) {
            h |= e.extractBits(1) << p;
          }
          for (let v = t; v <= 8 && t > 1; ++v) {
            e.extractBits(1);
          }
          for (let m = t - 2; m >= 0; --m) {
            if (h & (1 << m)) {
              subLayerLevelIdc[m] = e.readUint8();
            }
          }
        }
        const ptlNumSubProfiles = e.readUint8();
        const generalSubProfileIdc = [];
        if (ptlNumSubProfiles) {
          for (let _ = 0; _ < ptlNumSubProfiles; _++) {
            generalSubProfileIdc.push(e.readUint32());
          }
        }
        return {
          generalProfileIdc: n,
          generalTierFlag: i,
          generalLevelIdc: a,
          ptlFrameOnlyConstraintFlag: s,
          ptlMultilayerEnabledFlag: o,
          generalConstraintInfo,
          subLayerLevelIdc,
          generalSubProfileIdc,
          ptlNumSubProfiles,
          numBytesConstraintInfo,
        };
      },
    },
    {
      key: "getAvccNals",
      value: function (e) {
        const t = [];
        while (e.position < e.length - 4) {
          const r = e.dataview.getInt32(e.dataview.position);
          if (e.length - e.position >= r) {
            const header = e.buffer.slice(e.position, e.position + 4);
            e.skip(4);
            const body = new Uint8Array(
              e.buffer.slice(e.position, e.position + r),
            );
            e.skip(r);
            t.push({
              header,
              body,
            });
            continue;
          }
          break;
        }
        return t;
      },
    },
    {
      key: "analyseNal",
      value: function (e) {
        const t = (248 & e.body[1]) >> 3;
        e.type = t;
        switch (t) {
          case 23:
          case 24:
            break;
          case 7:
          case 8:
            e.key = true;
            break;
          case 14:
            e.vps = true;
            break;
          case 15:
            e.sps = true;
            break;
          case 16:
            e.pps = true;
            break;
          case 17:
            e.aps = true;
        }
      },
    },
    {
      key: "removeEPB",
      value: function (e) {
        for (var t = e.byteLength, r = [], n = 1; n < t - 2;) {
          if (e[n] === 0 && e[n + 1] === 0 && e[n + 2] === 3) {
            r.push(n + 2);
            n += 2;
          } else {
            n++;
          }
        }
        if (!r.length) {
          return e;
        }
        const i = t - r.length;
        const a = new Uint8Array(i);
        let s = 0;
        for (n = 0; n < i; s++, n++) {
          if (s === r[0]) {
            s++;
            r.shift();
          }
          a[n] = e[s];
        }
        return a;
      },
    },
    {
      key: "parseVps",
      value: function () {},
    },
    {
      key: "parseSPS",
      value: function (t) {
        const r = new c(t);
        r.readUByte();
        r.readUByte();
        r.skipBits(4);
        const spsVideoParameterSetId = r.readBits(4);
        const spsMaxSubLayerMinus1 = r.readBits(3);
        const a = r.readBits(2);
        let chromaFormat = 420;
        if (a <= 3) {
          chromaFormat = [0, 420, 422, 444][a];
        }
        r.readBits(2);
        r.readBits(1);
        const ptlInfo = e._parseProfileTierLevel(r, 1, spsMaxSubLayerMinus1);
        r.readBits(1);
        if (r.readBits(1)) {
          r.readBits(1);
        }
        return {
          width: r.readUEG(),
          height: r.readUEG(),
          spsMaxSubLayerMinus1,
          spsVideoParameterSetId,
          chromaFormatIdc: a,
          chromaFormat,
          ptlInfo,
        };
      },
    },
    {
      key: "_parseProfileTierLevel",
      value: function (t, r, n) {
        let gciInfo;
        const a = t.readBits(7);
        const s = t.readBits(1);
        const o = t.readBits(8);
        const u = t.readBits(1);
        const l = t.readBits(1);
        if (r) {
          gciInfo = e._parseGeneralConstraintsInfo(t);
        }
        const c = n - 1;
        const ptlSublayerLevelPresentFlags = [];
        const ptlSublayerLevelIdcs = [];
        const ptlSubProfileIdcs = [];
        for (let p = c; p >= 0; --p) {
          ptlSublayerLevelPresentFlags[p] = t.readBits(1);
        }
        while (!t.byteAligned()) {
          t.readBits(1);
        }
        for (let v = c; v >= 0; --v) {
          if (ptlSublayerLevelPresentFlags[v]) {
            ptlSublayerLevelIdcs[v] = t.readUByte();
          }
        }
        if (r) {
          for (let m = t.readUByte(), y = 0; y < m; y++) {
            ptlSubProfileIdcs[y] = t.readBits(32);
          }
        }
        return {
          generalProfileIdc: a,
          generalTierFlag: s,
          generalLevelIdc: o,
          ptlFrameOnlyConstraintFlag: u,
          ptlMultilayerEnabledFlag: l,
          ptlSublayerLevelPresentFlags,
          ptlSublayerLevelIdcs,
          ptlSubProfileIdcs,
          gciInfo,
        };
      },
    },
    {
      key: "_parseGeneralConstraintsInfo",
      value: function (e) {
        const gciPresentFlag = e.readBits(1);
        if (gciPresentFlag) {
          e.skipBits(71);
          const r = e.readBits(8);
          if (r) {
            e.skipBits(r);
          }
        }
        const n = 8 - (e.bitsPos() % 8);
        e.skipBits(n);
        return {
          gciPresentFlag,
        };
      },
    },
  ]);
})();
const h = require("./module-GZm.js");
const p = (() => {
  function e(t, r, i) {
    xs(this, e);
    this.dv = new DataView(t);
    this.start = this.offset = r || this.dv.byteOffset;
    this.end = i ? this.start + i : this.start + this.dv.byteLength;
  }
  return j6(
    e,
    [
      {
        key: "buffer",
        get: function () {
          return this.dv.buffer;
        },
      },
      {
        key: "unreadLength",
        get: function () {
          return Math.max(this.end - this.offset, 0);
        },
      },
      {
        key: "size",
        get: function () {
          return this.end - this.start;
        },
      },
      {
        key: "readFloat",
        value: function (e) {
          let t = 0;
          switch (e) {
            case 4:
              t = this.dv.getFloat32(this.offset);
              break;
            case 8:
              t = this.dv.getFloat64(this.offset);
              break;
            default:
              throw Error("read ".concat(e, "-byte float is not supported"));
          }
          this.offset += e;
          return t;
        },
      },
      {
        key: "back",
        value: function (e) {
          this.offset -= e;
        },
      },
      {
        key: "skip",
        value: function (e) {
          this.offset += e;
        },
      },
      {
        key: "readInt",
        value: function (e) {
          const offset = this.offset;
          this.offset += e;
          switch (e) {
            case 1:
              return this.dv.getInt8(offset);
            case 2:
              return this.dv.getInt16(offset);
            case 4:
              return this.dv.getInt32(offset);
            default:
              throw Error("read ".concat(e, "-byte integers is not supported"));
          }
        },
      },
      {
        key: "read",
        value: function (e) {
          const offset = this.offset;
          this.offset += e;
          switch (e) {
            case 1:
              return this.dv.getUint8(offset);
            case 2:
              return this.dv.getUint16(offset);
            case 3:
              return (
                (this.dv.getUint16(offset) << 8) + this.dv.getUint8(offset + 2)
              );
            case 4:
              return this.dv.getUint32(offset);
            default:
              this.back(e - 4);
              return (
                this.read(e - 4) + this.dv.getUint32(offset) * 256 ** (e - 4)
              );
          }
        },
      },
      {
        key: "write",
        value: function (e, t) {
          const offset = this.offset;
          this.offset += e;
          switch (e) {
            case 1:
              return this.dv.setUint8(offset, t);
            case 2:
              return this.dv.setUint16(offset, t);
            case 3:
              this.dv.setUint8(offset, t >>> 16);
              return this.dv.setUint16(offset + 1, 65535 & t);
            case 4:
              return this.dv.setUint32(offset, t);
            default:
              throw Error(
                "write ".concat(e, "-byte integers is not supported"),
              );
          }
        },
      },
      {
        key: "readToBuffer",
        value: function (e) {
          let t;
          t =
            this.offset || e
              ? this.dv.buffer.slice(
                  this.offset,
                  e ? this.offset + e : this.end,
                )
              : this.dv.buffer;
          this.offset += t.byteLength;
          return t;
        },
      },
      {
        key: "readToUint8",
        value: function (e) {
          const t = new Uint8Array(
            this.dv.buffer,
            this.offset,
            e || this.unreadLength,
          );
          this.offset += t.byteLength;
          return t;
        },
      },
      {
        key: "readString",
        value: function (e) {
          for (var t = 0, r = ""; t < e; t++) {
            r += String.fromCharCode(this.dv.getUint8(this.offset));
            this.offset++;
          }
          return r;
        },
      },
    ],
    [
      {
        key: "fromUint8",
        value: function (t) {
          return new e(t.buffer, t.byteOffset, t.byteLength);
        },
      },
      {
        key: "concatUint8s",
        value: function (e) {
          const t = new Uint8Array(
            e.reduce((acc, item) => acc + item.byteLength, 0),
          );
          let r = 0;
          e.forEach((e) => {
            t.set(e, r);
            r += e.byteLength;
          });
          return t;
        },
      },
      {
        key: "concatUint8",
        value: function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) {
            t[r] = arguments[r];
          }
          return this.concatUint8s(t);
        },
      },
    ],
  );
})();
const v = (() => {
  function e(t, r) {
    xs(this, e);
    this.offset = 0;
    this.val = t;
    this.size = r;
  }
  return j6(
    e,
    [
      {
        key: "skip",
        value: function (e) {
          this.offset += e;
        },
      },
      {
        key: "read",
        value: function (e) {
          const t = this.size - this.offset - e;
          if (t >= 0) {
            let r = 0;
            let n = 0;
            this.offset += e;
            if (this.size > 31) {
              for (; n < e; n++) {
                r += 2 ** n;
              }
              return (this.val / 2 ** t) & r;
            }
            for (; n < e; n++) {
              r += 1 << n;
            }
            return (this.val >>> t) & r;
          }
          throw Error(
            "the number of the read operation exceeds the total length limit of bits",
          );
        },
      },
    ],
    [
      {
        key: "fromByte",
        value: function (t, r) {
          return new e(t.read(r), r << 3);
        },
      },
    ],
  );
})();
export var t = (() => {
  function e() {
    xs(this, e);
  }
  return j6(e, null, [
    {
      key: "findBox",
      value: function (t, r) {
        let start =
          arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        const a = [];
        if (!t) {
          return a;
        }
        let s = 0;
        let o = "";
        let headerSize = 0;
        while (t.length > 7) {
          s = kl(t);
          o = String.fromCharCode.apply(null, t.subarray(4, 8));
          headerSize = 8;
          if (s === 1) {
            s = xV(t, 8);
            headerSize += 8;
          } else if (!s) {
            s = t.length;
          }
          if (!r[0] || o === r[0]) {
            const l = t.subarray(0, s);
            if (!(r.length < 2)) {
              return e.findBox(
                l.subarray(headerSize),
                r.slice(1),
                start + headerSize,
              );
            }
            a.push({
              start,
              size: s,
              headerSize,
              type: o,
              data: l,
            });
          }
          start += s;
          t = t.subarray(s);
        }
        return a;
      },
    },
    {
      key: "tfhd",
      value: function (e) {
        return b(e, true, (e, t) => {
          e.trackId = kl(t);
          let r = 4;
          const n = 255 & e.flags & 1;
          const a = 255 & e.flags & 2;
          const s = 255 & e.flags & 8;
          const o = 255 & e.flags & 16;
          const u = 255 & e.flags & 32;
          if (n) {
            r += 4;
            e.baseDataOffset = kl(t, r);
            r += 4;
          }
          if (a) {
            e.sampleDescriptionIndex = kl(t, r);
            r += 4;
          }
          if (s) {
            e.defaultSampleDuration = kl(t, r);
            r += 4;
          }
          if (o) {
            e.defaultSampleSize = kl(t, r);
            r += 4;
          }
          if (u) {
            e.defaultSampleFlags = kl(t, r);
          }
        });
      },
    },
    {
      key: "sidx",
      value: function (e) {
        return b(e, true, (e, t) => {
          let r = 0;
          e.reference_ID = kl(t, r);
          r += 4;
          e.timescale = kl(t, r);
          r += 4;
          if (e.version === 0) {
            e.earliest_presentation_time = kl(t, r);
            r += 4;
            e.first_offset = kl(t, r);
            r += 4;
          } else {
            e.earliest_presentation_time = xV(t, r);
            r += 8;
            e.first_offset = xV(t, r);
            r += 8;
          }
          r += 2;
          e.references = [];
          const n = e$(t, r);
          r += 2;
          for (let a = 0; a < n; a++) {
            const s = {};
            e.references.push(s);
            let o = kl(t, r);
            r += 4;
            s.reference_type = (o >> 31) & 1;
            s.referenced_size = 2147483647 & o;
            s.subsegment_duration = kl(t, r);
            r += 4;
            o = kl(t, r);
            r += 4;
            s.starts_with_SAP = (o >> 31) & 1;
            s.SAP_type = (o >> 28) & 7;
            s.SAP_delta_time = 268435455 & o;
          }
        });
      },
    },
    {
      key: "moov",
      value: function (t) {
        return b(t, false, (t, r, n) => {
          t.mvhd = e.mvhd(e.findBox(r, ["mvhd"], n)[0]);
          t.trak = e.findBox(r, ["trak"], n).map((t) => e.trak(t));
          t.pssh = e.pssh(e.findBox(r, ["pssh"], n)[0]);
        });
      },
    },
    {
      key: "mvhd",
      value: function (e) {
        return b(e, true, (e, t) => {
          let r = 0;
          if (e.version === 1) {
            e.timescale = kl(t, 16);
            e.duration = xV(t, 20);
            r += 28;
          } else {
            e.timescale = kl(t, 8);
            e.duration = kl(t, 12);
            r += 16;
          }
          e.nextTrackId = kl(t, r + 76);
        });
      },
    },
    {
      key: "trak",
      value: function (t) {
        return b(t, false, (t, r, n) => {
          t.tkhd = e.tkhd(e.findBox(r, ["tkhd"], n)[0]);
          t.mdia = e.mdia(e.findBox(r, ["mdia"], n)[0]);
          t.edts = e.edts(e.findBox(r, ["edts"], n)[0]);
        });
      },
    },
    {
      key: "tkhd",
      value: function (e) {
        return b(e, true, (e, t) => {
          const r = p.fromUint8(t);
          if (e.version === 1) {
            r.read(8);
            r.read(8);
            e.trackId = r.read(4);
            r.read(4);
            e.duration = r.read(8);
          } else {
            r.read(4);
            r.read(4);
            e.trackId = r.read(4);
            r.read(4);
            e.duration = r.read(4);
          }
          r.skip(16);
          e.matrix = [];
          for (let n = 0; n < 36; n++) {
            e.matrix.push(r.read(1));
          }
          r.back(36);
          let a;
          const s = [];
          for (let o = 0; o < 3; o++) {
            s.push(ZT(r.readInt(2), r.readInt(2)));
            s.push(ZT(r.readInt(2), r.readInt(2)));
            a = r.readInt(4);
            s.push(ZT(a >> 30, 1073741823 & a));
          }
          e.rotation = ct(s);
          e.width = r.read(4);
          e.height = r.read(4);
        });
      },
    },
    {
      key: "mdia",
      value: function (t) {
        return b(t, false, (t, r, n) => {
          t.mdhd = e.mdhd(e.findBox(r, ["mdhd"], n)[0]);
          t.hdlr = e.hdlr(e.findBox(r, ["hdlr"], n)[0]);
          t.minf = e.minf(e.findBox(r, ["minf"], n)[0]);
        });
      },
    },
    {
      key: "edts",
      value: function (t) {
        return b(t, false, (t, r, n) => {
          t.elst = e.elst(e.findBox(r, ["elst"], n)[0]);
        });
      },
    },
    {
      key: "elst",
      value: function (e) {
        return b(e, true, (e, t, r) => {
          e.entries = [];
          e.entriesData = t;
          let n = 0;
          const a = kl(t, n);
          n += 4;
          for (let s = 0; s < a; s++) {
            const o = {};
            e.entries.push(o);
            if (e.version === 1) {
              o.segment_duration = xV(t, n);
              n += 8;
              o.media_time = OU(t, n);
              n += 8;
            } else {
              o.segment_duration = kl(t, n);
              n += 4;
              o.media_time = p1(t, n);
              n += 4;
            }
            o.media_rate_integer = e$(t, n);
            n += 2;
            o.media_rate_fraction = e$(t, r);
            n += 2;
          }
        });
      },
    },
    {
      key: "mdhd",
      value: function (e) {
        return b(e, true, (e, t) => {
          let r = 0;
          if (e.version === 1) {
            e.timescale = kl(t, 16);
            e.duration = xV(t, 20);
            r += 28;
          } else {
            e.timescale = kl(t, 8);
            e.duration = kl(t, 12);
            r += 16;
          }
          const n = e$(t, r);
          e.language = String.fromCharCode(
            ((n >> 10) & 31) + 96,
            ((n >> 5) & 31) + 96,
            (31 & n) + 96,
          );
        });
      },
    },
    {
      key: "hdlr",
      value: function (e) {
        return b(e, true, (e, t) => {
          if (e.version === 0) {
            e.handlerType = String.fromCharCode.apply(null, t.subarray(4, 8));
          }
        });
      },
    },
    {
      key: "minf",
      value: function (t) {
        return b(t, false, (t, r, n) => {
          t.vmhd = e.vmhd(e.findBox(r, ["vmhd"], n)[0]);
          t.smhd = e.smhd(e.findBox(r, ["smhd"], n)[0]);
          t.stbl = e.stbl(e.findBox(r, ["stbl"], n)[0]);
        });
      },
    },
    {
      key: "vmhd",
      value: function (e) {
        return b(e, true, (e, t) => {
          e.graphicsmode = e$(t);
          e.opcolor = [e$(t, 2), e$(t, 4), e$(t, 6)];
        });
      },
    },
    {
      key: "smhd",
      value: function (e) {
        return b(e, true, (e, t) => {
          e.balance = e$(t);
        });
      },
    },
    {
      key: "stbl",
      value: function (t) {
        return b(t, false, (t, r, n) => {
          t.stsd = e.stsd(e.findBox(r, ["stsd"], n)[0]);
          t.stts = e.stts(e.findBox(r, ["stts"], n)[0]);
          t.ctts = e.ctts(e.findBox(r, ["ctts"], n)[0]);
          t.stsc = e.stsc(e.findBox(r, ["stsc"], n)[0]);
          t.stsz = e.stsz(e.findBox(r, ["stsz"], n)[0]);
          t.stco = e.stco(e.findBox(r, ["stco"], n)[0]);
          if (!t.stco) {
            t.co64 = e.co64(e.findBox(r, ["co64"], n)[0]);
            t.stco = t.co64;
          }
          let i;
          const a =
            (i = t.stsd.entries[0]) == null ||
            (i = i.sinf) == null ||
            (i = i.schi) == null
              ? undefined
              : i.tenc.default_IV_size;
          t.stss = e.stss(e.findBox(r, ["stss"], n)[0]);
          t.senc = e.senc(e.findBox(r, ["senc"], n)[0], a);
        });
      },
    },
    {
      key: "senc",
      value: function (e) {
        const t =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
        return b(e, true, (e, r) => {
          let n = 0;
          const a = kl(r, n);
          n += 4;
          e.samples = [];
          for (let s = 0; s < a; s++) {
            const o = {};
            o.InitializationVector = [];
            for (let u = 0; u < t; u++) {
              o.InitializationVector[u] = r[n + u];
            }
            n += t;
            if (2 & e.flags) {
              o.subsamples = [];
              const l = e$(r, n);
              n += 2;
              for (let c = 0; c < l; c++) {
                const f = {};
                f.BytesOfClearData = e$(r, n);
                n += 2;
                f.BytesOfProtectedData = kl(r, n);
                n += 4;
                o.subsamples.push(f);
              }
            }
            e.samples.push(o);
          }
        });
      },
    },
    {
      key: "pssh",
      value: function (e) {
        return b(e, true, (e, t) => {
          const r = [];
          const n = [];
          let a = 0;
          for (let s = 0; s < 16; s++) {
            n.push(x(t[a + s]));
          }
          a += 16;
          if (e.version > 0) {
            const o = kl(t, a);
            a += 4;
            for (let u = 0; u < ("" + o).length; u++) {
              for (let l = 0; l < 16; l++) {
                const c = t[a];
                a += 1;
                r.push(x(c));
              }
            }
          }
          e.data_size = kl(t, a);
          a += 4;
          e.kid = r;
          e.system_id = n;
          e.buffer = t;
        });
      },
    },
    {
      key: "bvc2",
      value: function (t) {
        return b(t, false, (t, r, n) => {
          const i = g(t, r);
          const a = r.subarray(i);
          n += i;
          t.vvcC = e.bv2C(e.findBox(a, ["bv2C"], n)[0]);
          t.pasp = e.pasp(e.findBox(a, ["pasp"], n)[0]);
        });
      },
    },
    {
      key: "bv2C",
      value: function (e) {
        return b(e, false, (e, t, r) => {
          const n = d.parseVVCDecoderConfigurationRecord(t);
          for (const i in n) {
            if (Object.prototype.hasOwnProperty.call(n, i)) {
              e[i] = n[i];
            }
          }
        });
      },
    },
    {
      key: "stsd",
      value: function (t) {
        return b(t, true, (t, r, n) => {
          t.entryCount = kl(r);
          t.entries = e
            .findBox(r.subarray(4), [], n + 4)
            .map((t) => {
              switch (t.type) {
                case "av01":
                  return e.av01(t);
                case "avc1":
                case "avc2":
                case "avc3":
                case "avc4":
                  return e.avc1(t);
                case "hvc1":
                case "hev1":
                  return e.hvc1(t);
                case "bvc2":
                  return e.bvc2(t);
                case "mp4a":
                  return e.mp4a(t);
                case "alaw":
                case "ulaw":
                  return e.alaw(t);
                case "enca":
                  return b(t, false, (t, r, n) => {
                    t.channelCount = e$(r, 16);
                    t.samplesize = e$(r, 18);
                    t.sampleRate = kl(r, 24) / 65536;
                    r = r.subarray(28);
                    t.sinf = e.sinf(e.findBox(r, ["sinf"], n)[0]);
                    t.esds = e.esds(e.findBox(r, ["esds"], n)[0]);
                  });
                case "encv":
                  return b(t, false, (t, r, n) => {
                    t.width = e$(r, 24);
                    t.height = e$(r, 26);
                    t.horizresolution = kl(r, 28);
                    t.vertresolution = kl(r, 32);
                    r = r.subarray(78);
                    t.sinf = e.sinf(e.findBox(r, ["sinf"], n)[0]);
                    t.avcC = e.avcC(e.findBox(r, ["avcC"], n)[0]);
                    t.hvcC = e.hvcC(e.findBox(r, ["hvcC"], n)[0]);
                    t.pasp = e.pasp(e.findBox(r, ["pasp"], n)[0]);
                  });
              }
            })
            .filter(Boolean);
        });
      },
    },
    {
      key: "tenc",
      value: function (e) {
        return b(e, false, (e, t) => {
          let r = 6;
          e.default_IsEncrypted = t[6];
          e.default_IV_size = t[(r += 1)];
          r += 1;
          e.default_KID = [];
          for (let n = 0; n < 16; n++) {
            e.default_KID.push(x(t[r]));
            r += 1;
          }
        });
      },
    },
    {
      key: "schi",
      value: function (t) {
        return b(t, false, (t, r, n) => {
          t.tenc = e.tenc(e.findBox(r, ["tenc"], n)[0]);
        });
      },
    },
    {
      key: "sinf",
      value: function (t) {
        return b(t, false, (t, r, n) => {
          t.schi = e.schi(e.findBox(r, ["schi"], n)[0]);
          t.frma = e.frma(e.findBox(r, ["frma"], n)[0]);
        });
      },
    },
    {
      key: "frma",
      value: function (e) {
        return b(e, false, (e, t) => {
          e.data_format = "";
          for (let r = 0; r < 4; r++) {
            e.data_format += String.fromCharCode(t[r]);
          }
        });
      },
    },
    {
      key: "colr",
      value: function (e) {
        return b(e, false, (t, r) => {
          const n = p.fromUint8(r);
          t.data = e.data;
          t.colorType = n.readString(4);
          if (t.colorType === "nclx") {
            t.colorPrimaries = n.read(2);
            t.transferCharacteristics = n.read(2);
            t.matrixCoefficients = n.read(2);
            t.fullRangeFlag = n.read(1) >> 7;
          } else if (t.colorType === "rICC" || t.colorType === "prof") {
            t.iccProfile = r.readToUint8();
          }
        });
      },
    },
    {
      key: "av01",
      value: function (t) {
        return b(t, false, (t, r, n) => {
          const i = g(t, r);
          const a = r.subarray(i);
          n += i;
          t.av1C = e.av1C(e.findBox(a, ["av1C"], n)[0]);
          t.colr = e.colr(e.findBox(a, ["colr"], n)[0]);
        });
      },
    },
    {
      key: "av1C",
      value: function (e) {
        return b(e, false, (t, r) => {
          t.data = e.data;
          let n;
          const i = p.fromUint8(r);
          const a = v.fromByte(i, 4);
          t.marker = a.read(1);
          t.version = a.read(7);
          t.seqProfile = a.read(3);
          t.seqLevelIdx0 = a.read(5);
          t.seqTier0 = a.read(1);
          t.highBitdepth = a.read(1);
          t.twelveBit = a.read(1);
          t.monochrome = a.read(1);
          t.chromaSubsamplingX = a.read(1);
          t.chromaSubsamplingY = a.read(1);
          t.chromaSamplePosition = a.read(2);
          t.reserved = a.read(3);
          t.initialPresentationDelayPresent = a.read(1);
          if (t.initialPresentationDelayPresent) {
            t.initialPresentationDelayMinusOne = a.read(4);
          } else {
            t.initialPresentationDelayMinusOne = 0;
          }
          t.configOBUs = i.readToUint8();
          if (t.seqLevelIdx0 === 2 && t.highBitdepth === 1) {
            n = t.twelveBit === 1 ? "12" : "10";
          } else if (t.seqProfile <= 2) {
            n = t.highBitdepth === 1 ? "10" : "08";
          }
          t.codec = [
            "av01",
            t.seqProfile,
            (t.seqLevelIdx0 < 10 ? "0" + t.seqLevelIdx0 : t.seqLevelIdx0) +
              (t.seqTier0 ? "H" : "M"),
            n,
          ].join(".");
        });
      },
    },
    {
      key: "avc1",
      value: function (t) {
        return b(t, false, (t, r, n) => {
          const i = g(t, r);
          const a = r.subarray(i);
          n += i;
          t.avcC = e.avcC(e.findBox(a, ["avcC"], n)[0]);
          t.pasp = e.pasp(e.findBox(a, ["pasp"], n)[0]);
        });
      },
    },
    {
      key: "avcC",
      value: function (e) {
        return b(e, false, (t, r) => {
          t.data = e.data;
          t.configurationVersion = r[0];
          t.AVCProfileIndication = r[1];
          t.profileCompatibility = r[2];
          t.AVCLevelIndication = r[3];
          t.codec = hy([r[1], r[2], r[3]]);
          t.lengthSizeMinusOne = 3 & r[4];
          t.spsLength = 31 & r[5];
          t.sps = [];
          let n = 6;
          for (let a = 0; a < t.spsLength; a++) {
            const s = e$(r, n);
            n += 2;
            t.sps.push(r.subarray(n, n + s));
            n += s;
          }
          t.ppsLength = r[n];
          n += 1;
          t.pps = [];
          for (let o = 0; o < t.ppsLength; o++) {
            const u = e$(r, n);
            n += 2;
            t.pps.push(r.subarray(n, (n += u)));
            n += u;
          }
        });
      },
    },
    {
      key: "hvc1",
      value: function (t) {
        return b(t, false, (t, r, n) => {
          const i = g(t, r);
          const a = r.subarray(i);
          n += i;
          t.hvcC = e.hvcC(e.findBox(a, ["hvcC"], n)[0]);
          t.pasp = e.pasp(e.findBox(a, ["pasp"], n)[0]);
        });
      },
    },
    {
      key: "hvcC",
      value: function (e) {
        return b(e, false, (t, r) => {
          t.data = e.data;
          t.codec = "hev1.1.6.L93.B0";
          t.configurationVersion = r[0];
          const n = r[1];
          t.generalProfileSpace = n >> 6;
          t.generalTierFlag = (32 & n) >> 5;
          t.generalProfileIdc = 31 & n;
          t.generalProfileCompatibility = kl(r, 2);
          t.generalConstraintIndicatorFlags = r.subarray(6, 12);
          t.generalLevelIdc = r[12];
          t.avgFrameRate = e$(r, 19);
          t.numOfArrays = r[22];
          t.vps = [];
          t.sps = [];
          t.pps = [];
          let a = 23;
          let s = 0;
          let o = 0;
          let u = 0;
          for (let l = 0; l < t.numOfArrays; l++) {
            s = 63 & r[a];
            o = e$(r, a + 1);
            a += 3;
            let c;
            let f;
            let d;
            const h = [];
            for (let p = 0; p < o; p++) {
              u = e$(r, a);
              a += 2;
              h.push(r.subarray(a, a + u));
              a += u;
            }
            switch (s) {
              case 32:
                (c = t.vps).push.apply(c, h);
                break;
              case 33:
                (f = t.sps).push.apply(f, h);
                break;
              default:
                if (s === 34) {
                  (d = t.pps).push.apply(d, h);
                }
            }
          }
        });
      },
    },
    {
      key: "pasp",
      value: function (e) {
        return b(e, false, (e, t) => {
          e.hSpacing = kl(t);
          e.vSpacing = kl(t, 4);
        });
      },
    },
    {
      key: "mp4a",
      value: function (t) {
        return b(t, false, (t, r, n) => {
          const i = _(t, r);
          t.esds = e.esds(e.findBox(r.subarray(i), ["esds"], n + i)[0]);
        });
      },
    },
    {
      key: "esds",
      value: function (e) {
        return b(e, true, (e, t) => {
          e.codec = "mp4a.";
          let r = 0;
          let n = 0;
          let i = 0;
          let a = 0;
          while (t.length) {
            a = t[(r = 0)];
            n = t[r + 1];
            for (r += 2; 128 & n;) {
              i = (127 & n) << 7;
              n = t[r];
              r += 1;
            }
            i += 127 & n;
            if (a === 3) {
              t = t.subarray(r + 3);
            } else if (a === 4) {
              e.codec += (t[r].toString(16) + ".").padStart(3, "0");
              t = t.subarray(r + 13);
            } else if (a === 5) {
              const s = (e.config = t.subarray(r, r + i));
              let o = (248 & s[0]) >> 3;
              if (o === 31 && s.length >= 2) {
                o = 32 + ((7 & s[0]) << 3) + ((224 & s[1]) >> 5);
              }
              e.objectType = o;
              e.codec += o.toString(16);
              if (e.codec[e.codec.length - 1] === ".") {
                e.codec = e.codec.substring(0, e.codec.length - 1);
              }
              return;
            } else {
              if (e.codec[e.codec.length - 1] === ".") {
                e.codec = e.codec.substring(0, e.codec.length - 1);
              }
              return;
            }
          }
        });
      },
    },
    {
      key: "alaw",
      value: function (e) {
        return b(e, false, (e, t) => {
          _(e, t);
        });
      },
    },
    {
      key: "stts",
      value: function (e) {
        return b(e, true, (e, t) => {
          for (var r = kl(t), n = [], a = 4, s = 0; s < r; s++) {
            n.push({
              count: kl(t, a),
              delta: kl(t, a + 4),
            });
            a += 8;
          }
          e.entryCount = r;
          e.entries = n;
        });
      },
    },
    {
      key: "ctts",
      value: function (e) {
        return b(e, true, (e, t) => {
          const r = kl(t);
          const n = [];
          let a = 4;
          if (e.version === 1) {
            for (let s = 0; s < r; s++) {
              n.push({
                count: kl(t, a),
                offset: kl(t, a + 4),
              });
              a += 8;
            }
          } else {
            for (let o = 0; o < r; o++) {
              n.push({
                count: kl(t, a),
                offset: -(~kl(t, a + 4) + 1),
              });
              a += 8;
            }
          }
          e.entryCount = r;
          e.entries = n;
        });
      },
    },
    {
      key: "stsc",
      value: function (e) {
        return b(e, true, (e, t) => {
          for (var r = kl(t), n = Array(r), a = 4, s = 0; s < r; s++) {
            n[s] = {
              firstChunk: kl(t, a),
              samplesPerChunk: kl(t, a + 4),
              sampleDescriptionIndex: kl(t, a + 8),
            };
            a += 12;
          }
          e.entryCount = r;
          e.entries = n;
        });
      },
    },
    {
      key: "stsz",
      value: function (e) {
        return b(e, true, (e, t) => {
          const r = kl(t);
          const n = kl(t, 4);
          const a = Array(n);
          if (!r) {
            let s = 8;
            for (let o = 0; o < n; o++) {
              a[o] = kl(t, s);
              s += 4;
            }
          }
          e.sampleSize = r;
          e.sampleCount = n;
          e.entrySizes = a;
        });
      },
    },
    {
      key: "stco",
      value: function (e) {
        return b(e, true, (e, t) => {
          for (var r = kl(t), n = Array(r), a = 4, s = 0; s < r; s++) {
            n[s] = kl(t, a);
            a += 4;
          }
          e.entryCount = r;
          e.entries = n;
        });
      },
    },
    {
      key: "co64",
      value: function (e) {
        return b(e, true, (e, t) => {
          for (var r = kl(t), n = Array(r), a = 4, s = 0; s < r; s++) {
            n[s] = xV(t, a);
            a += 8;
          }
          e.entryCount = r;
          e.entries = n;
        });
      },
    },
    {
      key: "stss",
      value: function (e) {
        return b(e, true, (e, t) => {
          for (var r = kl(t), n = Array(r), a = 4, s = 0; s < r; s++) {
            n[s] = kl(t, a);
            a += 4;
          }
          e.entryCount = r;
          e.entries = n;
        });
      },
    },
    {
      key: "moof",
      value: function (t) {
        return b(t, false, (t, r, n) => {
          t.mfhd = e.mfhd(e.findBox(r, ["mfhd"], n)[0]);
          t.traf = e.findBox(r, ["traf"], n).map((t) => e.traf(t));
        });
      },
    },
    {
      key: "mfhd",
      value: function (e) {
        return b(e, true, (e, t) => {
          e.sequenceNumber = kl(t);
        });
      },
    },
    {
      key: "traf",
      value: function (t) {
        return b(t, false, (t, r, n) => {
          t.tfhd = e.tfhd(e.findBox(r, ["tfhd"], n)[0]);
          t.tfdt = e.tfdt(e.findBox(r, ["tfdt"], n)[0]);
          t.trun = e.trun(e.findBox(r, ["trun"], n)[0]);
        });
      },
    },
    {
      key: "trun",
      value: function (e) {
        return b(e, true, (e, t) => {
          const e_version = e.version;
          const e_flags = e.flags;
          const t_length = t.length;
          const s = (e.sampleCount = kl(t));
          let o = 4;
          if (t_length > 4 && 1 & e_flags) {
            e.dataOffset = -(~kl(t, o) + 1);
            o += 4;
          }
          if (t_length > o && 4 & e_flags) {
            e.firstSampleFlags = kl(t, o);
            o += 4;
          }
          if (t_length > o) {
            e.samples = Array(s);
            let u;
            for (let l = 0; l < s; l++) {
              u = {};
              if (256 & e_flags) {
                u.duration = kl(t, o);
                o += 4;
              }
              if (512 & e_flags) {
                u.size = kl(t, o);
                o += 4;
              }
              if (1024 & e_flags) {
                u.flags = kl(t, o);
                o += 4;
              }
              if (2048 & e_flags) {
                if (e_version) {
                  u.cts = -(~kl(t, o + 4) + 1);
                } else {
                  u.cts = kl(t, o);
                }
                o += 4;
              }
              e.samples[l] = u;
            }
          }
        });
      },
    },
    {
      key: "tfdt",
      value: function (e) {
        return b(e, true, (e, t) => {
          if (e.version === 1) {
            e.baseMediaDecodeTime = xV(t);
          } else {
            e.baseMediaDecodeTime = kl(t);
          }
        });
      },
    },
    {
      key: "probe",
      value: function (t) {
        return !!e.findBox(t, ["ftyp"]);
      },
    },
    {
      key: "parseSampleFlags",
      value: function (e) {
        return {
          isLeading: (12 & e[0]) >>> 2,
          dependsOn: 3 & e[0],
          isDependedOn: (192 & e[1]) >>> 6,
          hasRedundancy: (48 & e[1]) >>> 4,
          paddingValue: (14 & e[1]) >>> 1,
          isNonSyncSample: 1 & e[1],
          degradationPriority: (e[2] << 8) | e[3],
        };
      },
    },
    {
      key: "moovToTrack",
      value: function (e, videoTrack, audioTrack) {
        const e_trak = e.trak;
        if (e_trak && e_trak.length) {
          const i = e_trak.find((e) => {
            let t;
            return (
              ((t = e.mdia) == null || (t = t.hdlr) == null
                ? undefined
                : t.handlerType) === "vide"
            );
          });
          const a = e_trak.find((e) => {
            let t;
            return (
              ((t = e.mdia) == null || (t = t.hdlr) == null
                ? undefined
                : t.handlerType) === "soun"
            );
          });
          if (i && videoTrack) {
            if (((u = i.tkhd) == null ? undefined : u.trackId) != null) {
              videoTrack.id = i.tkhd.trackId;
            }
            videoTrack.tkhdDuration = i.tkhd.duration;
            videoTrack.mvhdDurtion = e.mvhd.duration;
            videoTrack.mvhdTimecale = e.mvhd.timescale;
            videoTrack.timescale = videoTrack.formatTimescale =
              i.mdia.mdhd.timescale;
            videoTrack.duration =
              i.mdia.mdhd.duration ||
              (videoTrack.mvhdDurtion / videoTrack.mvhdTimecale) *
                videoTrack.timescale;
            videoTrack.rotation = i.tkhd.rotation;
            videoTrack.matrix = i.tkhd.matrix;
            if ((c = i.edts) != null && c.elst) {
              videoTrack.editList = i.edts.elst;
              videoTrack.editListApplied = i.editListApplied;
            }
            var s;
            var o;
            var u;
            var c;
            let f;
            let d;
            let p;
            let v;
            let m;
            let y;
            const g = i.mdia.minf.stbl.stsd.entries[0];
            videoTrack.width = g.width;
            videoTrack.height = g.height;
            if (g.pasp) {
              videoTrack.sarRatio = [g.pasp.hSpacing, g.pasp.vSpacing];
            }
            if (g.av1C) {
              videoTrack.codecType = h.mT.AV1;
              videoTrack.codec = g.av1C.codec;
              videoTrack.av1C = g.av1C.data;
              videoTrack.colr = g.colr.data;
            } else if (g.hvcC) {
              videoTrack.codecType = h.mT.HEVC;
              videoTrack.codec = g.hvcC.codec;
              videoTrack.vps = g.hvcC.vps;
              videoTrack.sps = g.hvcC.sps;
              videoTrack.pps = g.hvcC.pps;
              videoTrack.hvcC = g.hvcC.data;
            } else if (g.avcC) {
              videoTrack.codec = g.avcC.codec;
              videoTrack.sps = g.avcC.sps;
              videoTrack.pps = g.avcC.pps;
            } else if (g.vvcC) {
              videoTrack.codecType = h.mT.VVCC;
              videoTrack.codec = g.vvcC.codec;
              videoTrack.sps = g.vvcC.sps;
              videoTrack.pps = g.vvcC.pps;
              videoTrack.vps = g.vvcC.vps;
              videoTrack.vvcC = g.vvcC.data;
            } else {
              throw Error("unknown video stsd entry");
            }
            videoTrack.present = true;
            videoTrack.ext = {};
            videoTrack.ext.stss =
              (f = i.mdia) == null ||
              (f = f.minf) == null ||
              (f = f.stbl) == null
                ? undefined
                : f.stss;
            videoTrack.ext.ctts =
              (d = i.mdia) == null ||
              (d = d.minf) == null ||
              (d = d.stbl) == null
                ? undefined
                : d.ctts;
            if (g && g.type === "encv") {
              videoTrack.isVideoEncryption = true;
              g.default_KID =
                (p = g.sinf) == null || (p = p.schi) == null
                  ? undefined
                  : p.tenc.default_KID;
              g.default_IsEncrypted =
                (v = g.sinf) == null || (v = v.schi) == null
                  ? undefined
                  : v.tenc.default_IsEncrypted;
              g.default_IV_size =
                (m = g.sinf) == null || (m = m.schi) == null
                  ? undefined
                  : m.tenc.default_IV_size;
              videoTrack.videoSenc =
                i.mdia.minf.stbl.senc && i.mdia.minf.stbl.senc.samples;
              g.data_format =
                (y = g.sinf) == null || (y = y.frma) == null
                  ? undefined
                  : y.data_format;
              videoTrack.useEME = e.useEME;
              videoTrack.kidValue = e.kidValue;
              videoTrack.pssh = e.pssh;
              videoTrack.encv = g;
            }
          }
          if (a && audioTrack) {
            if (((_ = a.tkhd) == null ? undefined : _.trackId) != null) {
              audioTrack.id = a.tkhd.trackId;
            }
            audioTrack.tkhdDuration = a.tkhd.duration;
            audioTrack.mvhdDurtion = e.mvhd.duration;
            audioTrack.mvhdTimecale = e.mvhd.timescale;
            audioTrack.timescale = audioTrack.formatTimescale =
              a.mdia.mdhd.timescale;
            audioTrack.duration =
              a.mdia.mdhd.duration ||
              (audioTrack.mvhdDurtion / audioTrack.mvhdTimecale) *
                audioTrack.timescale;
            if ((b = a.edts) != null && b.elst) {
              audioTrack.editList = a.edts.elst;
              audioTrack.editListApplied = a.editListApplied;
            }
            var _;
            var b;
            let k;
            let x;
            let S;
            let w;
            let E;
            let T;
            let O;
            let A;
            const C = a.mdia.minf.stbl.stsd.entries[0];
            audioTrack.sampleSize = C.sampleSize;
            audioTrack.sampleRate = C.sampleRate;
            audioTrack.channelCount = C.channelCount;
            audioTrack.present = true;
            switch (C.type) {
              case "alaw":
                audioTrack.codecType = audioTrack.codec = h.VE.G711PCMA;
                audioTrack.sampleRate = 8000;
                break;
              case "ulaw":
                audioTrack.codecType = audioTrack.codec = h.VE.G711PCMU;
                audioTrack.sampleRate = 8000;
                break;
              default:
                audioTrack.sampleDuration = l.getFrameDuration(
                  audioTrack.sampleRate,
                  audioTrack.timescale,
                );
                audioTrack.sampleRateIndex = l.getRateIndexByRate(
                  audioTrack.sampleRate,
                );
                audioTrack.objectType =
                  ((s = C.esds) == null ? undefined : s.objectType) || 2;
                if (C.esds) {
                  audioTrack.config = Array.from(C.esds.config);
                }
                audioTrack.codec =
                  ((o = C.esds) == null ? undefined : o.codec) || "mp4a.40.2";
            }
            audioTrack.sampleDuration = l.getFrameDuration(
              audioTrack.sampleRate,
              audioTrack.timescale,
            );
            audioTrack.objectType =
              ((k = C.esds) == null ? undefined : k.objectType) || 2;
            if (C.esds) {
              if (C.esds.config) {
                audioTrack.config = Array.from(C.esds.config);
              } else {
                console.warn("esds config is null");
              }
            }
            audioTrack.codec =
              ((x = C.esds) == null ? undefined : x.codec) || "mp4a.40.2";
            audioTrack.sampleRateIndex = l.getRateIndexByRate(
              audioTrack.sampleRate,
            );
            audioTrack.ext = {};
            audioTrack.ext.stss =
              (S = a.mdia) == null ||
              (S = S.minf) == null ||
              (S = S.stbl) == null
                ? undefined
                : S.stss;
            audioTrack.ext.ctts =
              (w = a.mdia) == null ||
              (w = w.minf) == null ||
              (w = w.stbl) == null
                ? undefined
                : w.ctts;
            audioTrack.present = true;
            if (C && C.type === "enca") {
              audioTrack.isAudioEncryption = true;
              C.data_format =
                (E = C.sinf) == null || (E = E.frma) == null
                  ? undefined
                  : E.data_format;
              C.default_KID =
                (T = C.sinf) == null || (T = T.schi) == null
                  ? undefined
                  : T.tenc.default_KID;
              C.default_IsEncrypted =
                (O = C.sinf) == null || (O = O.schi) == null
                  ? undefined
                  : O.tenc.default_IsEncrypted;
              C.default_IV_size =
                (A = C.sinf) == null || (A = A.schi) == null
                  ? undefined
                  : A.tenc.default_IV_size;
              audioTrack.audioSenc =
                a.mdia.minf.stbl.senc && a.mdia.minf.stbl.senc.samples;
              audioTrack.useEME = e.useEME;
              audioTrack.kidValue = e.kidValue;
              audioTrack.enca = C;
            }
          }
          if (audioTrack) {
            audioTrack.isVideoEncryption =
              !!videoTrack && videoTrack.isVideoEncryption;
          }
          if (videoTrack) {
            videoTrack.isAudioEncryption =
              !!audioTrack && audioTrack.isAudioEncryption;
          }
          if (
            (videoTrack != null && videoTrack.encv) ||
            (audioTrack != null && audioTrack.enca)
          ) {
            let R;
            let P;
            const I =
              videoTrack == null || (R = videoTrack.encv) == null
                ? undefined
                : R.default_KID;
            const B =
              audioTrack == null || (P = audioTrack.enca) == null
                ? undefined
                : P.default_KID;
            const U = I || B ? (I || B).join("") : null;
            if (videoTrack) {
              videoTrack.kid = U;
            }
            if (audioTrack) {
              audioTrack.kid = U;
            }
          }
          if (videoTrack) {
            videoTrack.flags = 3841;
          }
          if (audioTrack) {
            audioTrack.flags = 1793;
          }
          return {
            videoTrack,
            audioTrack,
          };
        }
      },
    },
    {
      key: "evaluateDefaultDuration",
      value: function (e, t, r) {
        let n;
        const i = t == null || (n = t.samples) == null ? undefined : n.length;
        if (i) {
          return (((1024 * i) / t.timescale) * e.timescale) / r;
        }
        return 1024;
      },
    },
    {
      key: "moofToSamples",
      value: function (t, r, n) {
        const i = {};
        if (t.mfhd) {
          if (r) {
            r.sequenceNumber = t.mfhd.sequenceNumber;
          }
          if (n) {
            n.sequenceNumber = t.mfhd.sequenceNumber;
          }
        }
        t.traf.forEach((t) => {
          const t_tfhd = t.tfhd;
          const t_tfdt = t.tfdt;
          const t_trun = t.trun;
          if (t_tfhd && t_trun) {
            if (t_tfdt) {
              if (r && r.id === t_tfhd.trackId) {
                r.baseMediaDecodeTime = t_tfdt.baseMediaDecodeTime;
              }
              if (n && n.id === t_tfhd.trackId) {
                n.baseMediaDecodeTime = t_tfdt.baseMediaDecodeTime;
              }
            }
            const u = t_tfhd.defaultSampleSize || 0;
            const l =
              t_tfhd.defaultSampleDuration ||
              e.evaluateDefaultDuration(
                r,
                n,
                t_trun.samples.length || t_trun.sampleCount,
              );
            let offset = t_trun.dataOffset || 0;
            let f = 0;
            let gopId = -1;
            if (!t_trun.samples.length && t_trun.sampleCount) {
              i[t_tfhd.trackId] = Array(t_trun.sampleCount);
              for (let h = 0; h < t_trun.sampleCount; h++) {
                i[t_tfhd.trackId][h] = {
                  offset,
                  dts: f,
                  duration: l,
                  size: u,
                };
                f += l;
                offset += u;
              }
            } else {
              i[t_tfhd.trackId] = t_trun.samples.map((e, t) => {
                if (
                  (e = {
                    offset,
                    dts: f,
                    pts: f + (e.cts || 0),
                    duration: e.duration || l,
                    size: e.size || u,
                    gopId,
                    keyframe:
                      t === 0 ||
                      (e.flags !== null &&
                        e.flags !== undefined &&
                        (65536 & e.flags) >>> 0 != 65536),
                  }).keyframe
                ) {
                  gopId++;
                  e.gopId = gopId;
                }
                f += e.duration;
                offset += e.size;
                return e;
              });
            }
          }
        });
        return i;
      },
    },
    {
      key: "moovToSamples",
      value: function (e) {
        const e_trak = e.trak;
        if (e_trak && e_trak.length) {
          const r = e_trak.find((e) => {
            let t;
            return (
              ((t = e.mdia) == null || (t = t.hdlr) == null
                ? undefined
                : t.handlerType) === "vide"
            );
          });
          const n = e_trak.find((e) => {
            let t;
            return (
              ((t = e.mdia) == null || (t = t.hdlr) == null
                ? undefined
                : t.handlerType) === "soun"
            );
          });
          if (r || n) {
            if (r) {
              var videoSamples;
              var audioSamples;
              let s;
              const o =
                (s = r.mdia) == null || (s = s.minf) == null
                  ? undefined
                  : s.stbl;
              if (!o) {
                return;
              }
              const u = o.stts;
              const l = o.stsc;
              const c = o.stsz;
              const f = o.stco;
              const d = o.stss;
              const h = o.ctts;
              if (!u || !l || !c || !f || !d) {
                return;
              }
              videoSamples = y(u, l, c, f, h, d);
            }
            if (n) {
              let p;
              let v;
              const m =
                (p = n.mdia) == null || (p = p.minf) == null
                  ? undefined
                  : p.stbl;
              if (!m) {
                return;
              }
              const g = (v = n.mdia.mdhd) == null ? undefined : v.timescale;
              const _ = m.stts;
              const b = m.stsc;
              const k = m.stsz;
              const x = m.stco;
              if (!g || !_ || !b || !k || !x) {
                return;
              }
              audioSamples = y(_, b, k, x);
            }
            return {
              videoSamples,
              audioSamples,
            };
          }
        }
      },
    },
  ]);
})();
function y(e, t, r, n, i, a) {
  let s;
  let o;
  let u;
  const l = [];
  const c = i == null ? undefined : i.entries;
  const t_entries = t.entries;
  const n_entries = n.entries;
  const r_entrySizes = r.entrySizes;
  const p = a == null ? undefined : a.entries;
  if (p) {
    s = {};
    p.forEach((e) => {
      s[e - 1] = true;
    });
  }
  if (c) {
    o = [];
    c.forEach((e) => {
      for (let t = e.count, r = e.offset, n = 0; n < t; n++) {
        o.push(r);
      }
    });
  }
  let v = -1;
  let m = 0;
  let index = 0;
  let g = 0;
  let _ = 0;
  let b = 0;
  let samplesPerChunk = t_entries[0].samplesPerChunk;
  let x = t_entries[1] ? t_entries[1].firstChunk - 1 : Infinity;
  e.entries.forEach((e) => {
    for (let t = e.count, n = e.delta, i = 0; i < t; i++) {
      u = {
        dts: m,
        duration: n,
        size: r_entrySizes[index] || r.sampleSize,
        offset: n_entries[g] + b,
        index,
      };
      if (p) {
        u.keyframe = s[index];
        if (u.keyframe) {
          v++;
        }
        u.gopId = v;
      }
      if (o && index < o.length) {
        u.pts = u.dts + o[index];
      }
      l.push(u);
      m += n;
      if (++index < samplesPerChunk) {
        b += u.size;
      } else {
        g++;
        b = 0;
        if (g >= x) {
          x = t_entries[++_ + 1] ? t_entries[_ + 1].firstChunk - 1 : Infinity;
        }
        samplesPerChunk += t_entries[_].samplesPerChunk;
      }
    }
  });
  return l;
}
function g(e, t) {
  e.dataReferenceIndex = e$(t, 6);
  e.width = e$(t, 24);
  e.height = e$(t, 26);
  e.horizresolution = kl(t, 28);
  e.vertresolution = kl(t, 32);
  e.frameCount = e$(t, 40);
  e.depth = e$(t, 74);
  return 78;
}
function _(e, t) {
  e.dataReferenceIndex = e$(t, 6);
  e.channelCount = e$(t, 16);
  e.sampleSize = e$(t, 18);
  e.sampleRate = kl(t, 24) / 65536;
  return 28;
}
function b(e, t, r) {
  if (e) {
    if (e.size !== e.data.length) {
      throw Error("box ".concat(e.type, " size !== data.length"));
    }
    const n = {
      start: e.start,
      size: e.size,
      headerSize: e.headerSize,
      type: e.type,
    };
    if (t) {
      n.version = e.data[e.headerSize];
      n.flags = nO(e.data, e.headerSize + 1);
      n.headerSize += 4;
    }
    r(n, e.data.subarray(n.headerSize), n.start + n.headerSize);
    return n;
  }
}
const k = (e, t, r) => {
  const n = String(r);
  const i = 0 | t;
  for (var a = Math.ceil(i / n.length), s = [], o = String(e); a--;) {
    s.push(n);
  }
  return s.join("").substring(0, i - o.length) + o;
};
var x = function () {
  const e = [];
  for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) {
    r[n] = arguments[n];
  }
  r.forEach((t) => {
    e.push(k(Number(t).toString(16), 2, 0));
  });
  return e[0];
};
