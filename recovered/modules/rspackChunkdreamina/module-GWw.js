function t(e, t) {
  t = t || {};
  if (
    ((n = {}),
    (e =
      typeof (r = e).sampleRate === "number" &&
      Array.isArray(r.channelData) &&
      r.channelData[0] instanceof Float32Array
        ? ((n.numberOfChannels = r.channelData.length),
          (n.length = 0 | r.channelData[0].length),
          (n.sampleRate = 0 | r.sampleRate),
          (n.channelData = r.channelData),
          n)
        : null)) === null
  ) {
    throw TypeError("Invalid AudioData");
  }
  var r;
  var n;
  let i;
  let o;
  let s;
  let a;
  let l;
  let u;
  const floatingPoint = !!(t.floatingPoint || t.float);
  const bitDepth = floatingPoint ? 32 : 0 | t.bitDepth || 16;
  const p = bitDepth >> 3;
  const d = e.length * e.numberOfChannels * p;
  const h = new DataView(new Uint8Array(44 + d).buffer);
  i = h;
  o = 0;
  const m = {
    int16: function (e) {
      i.setInt16(o, e, true);
      o += 2;
    },
    uint16: function (e) {
      i.setUint16(o, e, true);
      o += 2;
    },
    uint32: function (e) {
      i.setUint32(o, e, true);
      o += 4;
    },
    string: function (e) {
      for (let t = 0, r = e.length; t < r; t++) {
        i.setUint8(o++, e.charCodeAt(t));
      }
    },
    pcm8: function (e) {
      e =
        0 |
        Math.round(
          (e = (0.5 * (e = Math.max(-1, Math.min(e, 1))) + 0.5) * 255),
        );
      i.setUint8(o, e, true);
      o += 1;
    },
    pcm8s: function (e) {
      e = Math.max(0, Math.min((e = Math.round(128 * e) + 128), 255));
      i.setUint8(o, e, true);
      o += 1;
    },
    pcm16: function (e) {
      e =
        0 |
        Math.round(
          (e = (e = Math.max(-1, Math.min(e, 1))) < 0 ? 32768 * e : 32767 * e),
        );
      i.setInt16(o, e, true);
      o += 2;
    },
    pcm16s: function (e) {
      e = Math.max(-32768, Math.min((e = Math.round(32768 * e)), 32767));
      i.setInt16(o, e, true);
      o += 2;
    },
    pcm24: function (e) {
      const t =
        255 &
        (e =
          0 |
          Math.round(
            (e =
              (e = Math.max(-1, Math.min(e, 1))) < 0
                ? 16777216 + 8388608 * e
                : 8388607 * e),
          ));
      const r = (e >> 8) & 255;
      const n = (e >> 16) & 255;
      i.setUint8(o + 0, t);
      i.setUint8(o + 1, r);
      i.setUint8(o + 2, n);
      o += 3;
    },
    pcm24s: function (e) {
      const t =
        255 &
        (e = Math.max(
          -8388608,
          Math.min((e = Math.round(8388608 * e)), 8388607),
        ));
      const r = (e >> 8) & 255;
      const n = (e >> 16) & 255;
      i.setUint8(o + 0, t);
      i.setUint8(o + 1, r);
      i.setUint8(o + 2, n);
      o += 3;
    },
    pcm32: function (e) {
      e =
        0 |
        Math.round(
          (e =
            (e = Math.max(-1, Math.min(e, 1))) < 0
              ? 2147483648 * e
              : 2147483647 * e),
        );
      i.setInt32(o, e, true);
      o += 4;
    },
    pcm32s: function (e) {
      e = Math.max(
        -2147483648,
        Math.min((e = Math.round(2147483648 * e)), 2147483647),
      );
      i.setInt32(o, e, true);
      o += 4;
    },
    pcm32f: function (e) {
      i.setFloat32(o, e, true);
      o += 4;
    },
  };
  const y = {
    formatId: floatingPoint ? 3 : 1,
    floatingPoint,
    numberOfChannels: e.numberOfChannels,
    sampleRate: e.sampleRate,
    bitDepth,
  };
  s = m;
  a = y;
  l = h.buffer.byteLength - 8;
  u = a.bitDepth >> 3;
  s.string("RIFF");
  s.uint32(l);
  s.string("WAVE");
  s.string("fmt ");
  s.uint32(16);
  s.uint16(a.floatingPoint ? 3 : 1);
  s.uint16(a.numberOfChannels);
  s.uint32(a.sampleRate);
  s.uint32(a.sampleRate * a.numberOfChannels * u);
  s.uint16(a.numberOfChannels * u);
  s.uint16(a.bitDepth);
  const v = ((e, t, r, n, i) => {
    const t_bitDepth = t.bitDepth;
    const s =
      "pcm" + t_bitDepth + (t.floatingPoint ? "f" : i.symmetric ? "s" : "");
    if (!e[s]) {
      return TypeError("Not supported bit depth: " + t_bitDepth);
    }
    const a = e[s].bind(e);
    const t_numberOfChannels = t.numberOfChannels;
    const n_channelData = n.channelData;
    e.string("data");
    e.uint32(r);
    for (let f = 0, c = n.length; f < c; f++) {
      for (let p = 0; p < t_numberOfChannels; p++) {
        a(n_channelData[p][f]);
      }
    }
  })(m, y, d, e, t);
  if (v instanceof Error) {
    throw v;
  }
  return h.buffer;
}
var _l = function (e, r) {
  return new Promise((resolve) => {
    resolve(t(e, r));
  });
};
export { _l as l };
_l.sync = t;
