import { Og, j6, n8, xs } from "./module-KQ.js";
import { S, mT } from "./module-GZm.js";
import { Cs, qg } from "./module-E8B.js";
import { A } from "./module-NRx.js";
const o = (() => {
  function e() {
    xs(this, e);
  }
  return j6(e, null, [
    {
      key: "box",
      value: function (e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        ) {
          r[n - 1] = arguments[n];
        }
        const i =
          8 +
          (r = r.filter(Boolean)).reduce(
            (acc, item) => acc + item.byteLength,
            0,
          );
        const a = new Uint8Array(i);
        a[0] = (i >> 24) & 255;
        a[1] = (i >> 16) & 255;
        a[2] = (i >> 8) & 255;
        a[3] = 255 & i;
        a.set(e, 4);
        let s = 8;
        r.forEach((e) => {
          a.set(e, s);
          s += e.byteLength;
        });
        return a;
      },
    },
    {
      key: "FullBox",
      value: function (t, r, n) {
        for (
          var i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3;
          s < i;
          s++
        ) {
          a[s - 3] = arguments[s];
        }
        return e.box.apply(
          e,
          [
            t,
            new Uint8Array([r, (n >> 16) & 255, (n >> 8) & 255, 255 & n]),
          ].concat(a),
        );
      },
    },
    {
      key: "ftyp",
      value: function (t) {
        if (t.find((e) => e.type === S.VIDEO && e.codecType === mT.HEVC)) {
          return e.FTYPHEV1;
        }
        return e.FTYPAVC1;
      },
    },
    {
      key: "initSegment",
      value: function (t) {
        const r = e.ftyp(t);
        return Cs(r, e.moov(t));
      },
    },
    {
      key: "pssh",
      value: function (t) {
        const r = new Uint8Array(
          [1, 0, 0, 0].concat(
            [
              16, 119, 239, 236, 192, 178, 77, 2, 172, 227, 60, 30, 82, 226,
              251, 75,
            ],
            [0, 0, 0, 1],
            qg(t.kid),
            [0, 0, 0, 0],
          ),
        );
        return e.box(e.types.pssh, r);
      },
    },
    {
      key: "moov",
      value: function (t) {
        if (!t[0].useEME || (!t[0].encv && !t[0].enca)) {
          return e.box.apply(
            e,
            [
              e.types.moov,
              e.mvhd(
                t[0].mvhdDurtion || t[0].duration,
                t[0].mvhdTimecale || t[0].timescale,
              ),
            ].concat(Og(t.map((t) => e.trak(t))), [e.mvex(t)]),
          );
        }
        if (!t[0].pssh) {
          t[0].pssh = {
            kid: t[0].kid,
          };
        }
        const r = this.pssh(t[0].pssh);
        return e.box.apply(
          e,
          [
            e.types.moov,
            e.mvhd(
              t[0].mvhdDurtion || t[0].duration,
              t[0].mvhdTimecale || t[0].timescale,
            ),
            e.mvex(t),
          ].concat(Og(t.map((t) => e.trak(t))), [r]),
        );
      },
    },
    {
      key: "mvhd",
      value: function (t) {
        const r =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : 90000;
        return e.box(
          e.types.mvhd,
          new Uint8Array([
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            (r >> 24) & 255,
            (r >> 16) & 255,
            (r >> 8) & 255,
            255 & r,
            (t >> 24) & 255,
            (t >> 16) & 255,
            (t >> 8) & 255,
            255 & t,
            0,
            1,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            64,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            255,
            255,
            255,
            255,
          ]),
        );
      },
    },
    {
      key: "trak",
      value: function (t) {
        return e.box(
          e.types.trak,
          e.tkhd(t.id, t.tkhdDuration || 0, t.width, t.height),
          e.mdia(t),
        );
      },
    },
    {
      key: "tkhd",
      value: function (t, r) {
        const n =
          arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        const i =
          arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        return e.box(
          e.types.tkhd,
          new Uint8Array([
            0,
            0,
            0,
            7,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            (t >> 24) & 255,
            (t >> 16) & 255,
            (t >> 8) & 255,
            255 & t,
            0,
            0,
            0,
            0,
            (r >> 24) & 255,
            (r >> 16) & 255,
            (r >> 8) & 255,
            255 & r,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            64,
            0,
            0,
            0,
            (n >> 8) & 255,
            255 & n,
            0,
            0,
            (i >> 8) & 255,
            255 & i,
            0,
            0,
          ]),
        );
      },
    },
    {
      key: "edts",
      value: function (t) {
        return e.box(e.types.edts, e.elst(t));
      },
    },
    {
      key: "elst",
      value: function (t) {
        t.entries;
        const t_entriesData = t.entriesData;
        const t_version = t.version;
        return e.FullBox(e.types.elst, t_version, 0, t_entriesData);
      },
    },
    {
      key: "mdia",
      value: function (t) {
        return e.box(
          e.types.mdia,
          e.mdhd(t.duration, t.timescale),
          e.hdlr(t.type),
          e.minf(t),
        );
      },
    },
    {
      key: "mdhd",
      value: function (t) {
        const r =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : 90000;
        return e.box(
          e.types.mdhd,
          new Uint8Array([
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            (r >> 24) & 255,
            (r >> 16) & 255,
            (r >> 8) & 255,
            255 & r,
            (t >> 24) & 255,
            (t >> 16) & 255,
            (t >> 8) & 255,
            255 & t,
            85,
            196,
            0,
            0,
          ]),
        );
      },
    },
    {
      key: "hdlr",
      value: function (t) {
        return e.box(e.types.hdlr, e.HDLR_TYPES[t]);
      },
    },
    {
      key: "minf",
      value: function (t) {
        return e.box(
          e.types.minf,
          t.type === S.VIDEO ? e.VMHD : e.SMHD,
          e.DINF,
          e.stbl(t),
        );
      },
    },
    {
      key: "stbl",
      value: function (t) {
        t && t.ext;
        return e.box(
          e.types.stbl,
          e.stsd(t),
          e.STTS,
          undefined,
          e.STSC,
          e.STSZ,
          e.STCO,
        );
      },
    },
    {
      key: "stsd",
      value: function (t) {
        const r =
          t.type === "audio"
            ? t.useEME && t.enca
              ? e.enca(t)
              : e.mp4a(t)
            : t.useEME && t.encv
              ? e.encv(t)
              : t.av1C
                ? e.av01(t)
                : e.avc1hev1vvc1(t);
        return e.box(e.types.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), r);
      },
    },
    {
      key: "enca",
      value: function (t) {
        const channelCount = t.enca.channelCount;
        const sampleRate = t.enca.sampleRate;
        const i = new Uint8Array([
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          channelCount,
          0,
          16,
          0,
          0,
          0,
          0,
          (sampleRate >> 8) & 255,
          255 & sampleRate,
          0,
          0,
        ]);
        const a = e.esds(t.config);
        const s = e.sinf(t.enca);
        return e.box(e.types.enca, i, a, s);
      },
    },
    {
      key: "encv",
      value: function (t) {
        let r;
        let i;
        const a = t.sps.length > 0 ? t.sps[0] : [];
        const s = t.pps.length > 0 ? t.pps[0] : [];
        const t_width = t.width;
        const t_height = t.height;
        const l = t.sarRatio[0];
        const c = t.sarRatio[1];
        const f = new Uint8Array([
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          (t_width >> 8) & 255,
          255 & t_width,
          (t_height >> 8) & 255,
          255 & t_height,
          0,
          72,
          0,
          0,
          0,
          72,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          18,
          100,
          97,
          105,
          108,
          121,
          109,
          111,
          116,
          105,
          111,
          110,
          47,
          104,
          108,
          115,
          46,
          106,
          115,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          24,
          17,
          17,
        ]);
        const d = new Uint8Array(
          (r = (i = [
            1,
            a[1],
            a[2],
            a[3],
            255,
            225,
            (a.length >>> 8) & 255,
            255 & a.length,
          ]).concat
            .apply(i, Og(a))
            .concat([1, (s.length >>> 8) & 255, 255 & s.length])).concat.apply(
            r,
            Og(s),
          ),
        );
        const h = new Uint8Array([0, 0, 88, 57, 0, 15, 200, 192, 0, 4, 86, 72]);
        const p = e.sinf(t.encv);
        const v = new Uint8Array([
          l >> 24,
          (l >> 16) & 255,
          (l >> 8) & 255,
          255 & l,
          c >> 24,
          (c >> 16) & 255,
          (c >> 8) & 255,
          255 & c,
        ]);
        return e.box(
          e.types.encv,
          f,
          e.box(e.types.avcC, d),
          e.box(e.types.btrt, h),
          p,
          e.box(e.types.pasp, v),
        );
      },
    },
    {
      key: "schi",
      value: function (t) {
        const r = new Uint8Array([]);
        const n = e.tenc(t);
        return e.box(e.types.schi, r, n);
      },
    },
    {
      key: "tenc",
      value: function (t) {
        const r = new Uint8Array(
          [
            0,
            0,
            0,
            0,
            0,
            0,
            255 & t.default_IsEncrypted,
            255 & t.default_IV_size,
          ].concat(qg(t.default_KID)),
        );
        return e.box(e.types.tenc, r);
      },
    },
    {
      key: "sinf",
      value: function (t) {
        const r = new Uint8Array([]);
        const n = new Uint8Array([
          t.data_format.charCodeAt(0),
          t.data_format.charCodeAt(1),
          t.data_format.charCodeAt(2),
          t.data_format.charCodeAt(3),
        ]);
        const i = new Uint8Array([0, 0, 0, 0, 99, 101, 110, 99, 0, 1, 0, 0]);
        const a = e.schi(t);
        return e.box(
          e.types.sinf,
          r,
          e.box(e.types.frma, n),
          e.box(e.types.schm, i),
          a,
        );
      },
    },
    {
      key: "av01",
      value: function (t) {
        return e.box(
          e.types.av01,
          new Uint8Array([
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            (t.width >> 8) & 255,
            255 & t.width,
            (t.height >> 8) & 255,
            255 & t.height,
            0,
            72,
            0,
            0,
            0,
            72,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            24,
            17,
            17,
          ]),
          t.av1C,
          t.colr,
        );
      },
    },
    {
      key: "avc1hev1vvc1",
      value: function (t) {
        if (t.codecType === mT.HEVC) {
          r = e.hvcC(t);
          n = e.types.hvc1;
        } else if (t.codecType === mT.VVCC) {
          r = e.vvcC(t);
          n = e.types.bvc2;
        } else {
          r = e.avcC(t);
          n = e.types.avc1;
        }
        var r;
        var n;
        const a = [
          new Uint8Array([
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            (t.width >> 8) & 255,
            255 & t.width,
            (t.height >> 8) & 255,
            255 & t.height,
            0,
            72,
            0,
            0,
            0,
            72,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            24,
            17,
            17,
          ]),
          r,
        ];
        if (t.codecType === mT.HEVC) {
          a.push(e.box(e.types.fiel, new Uint8Array([1, 0])));
        } else if (t.sarRatio && t.sarRatio.length > 1) {
          a.push(e.pasp(t.sarRatio));
        }
        return e.box.apply(e, [n].concat(a));
      },
    },
    {
      key: "avcC",
      value: function (t) {
        let r;
        let i;
        let a;
        const s = [];
        const o = [];
        t.sps.forEach((e) => {
          a = e.byteLength;
          s.push((a >>> 8) & 255);
          s.push(255 & a);
          s.push.apply(s, Og(e));
        });
        t.pps.forEach((e) => {
          a = e.byteLength;
          o.push((a >>> 8) & 255);
          o.push(255 & a);
          o.push.apply(o, Og(e));
        });
        return e.box(
          e.types.avcC,
          new Uint8Array(
            (r = (i = [1, s[3], s[4], s[5], 255, 224 | t.sps.length]).concat
              .apply(i, s)
              .concat([t.pps.length])).concat.apply(r, o),
          ),
        );
      },
    },
    {
      key: "vvcC",
      value: function (t) {
        const t_vvcC = t.vvcC;
        return e.box(e.types.bv2C, new Uint8Array(t_vvcC));
      },
    },
    {
      key: "hvcC",
      value: function (t) {
        let r;
        const t_hvcC = t.hvcC;
        if (t_hvcC instanceof ArrayBuffer || t_hvcC instanceof Uint8Array) {
          return t_hvcC;
        }
        const t_vps = t.vps;
        const t_sps = t.sps;
        const t_pps = t.pps;
        if (t_hvcC) {
          const u = t_hvcC.generalProfileCompatibilityFlags;
          const l = t_hvcC.generalConstraintIndicatorFlags;
          const c =
            (t_vps.length && 1) + (t_sps.length && 1) + (t_pps.length && 1);
          r = [
            1,
            (t_hvcC.generalProfileSpace << 6) |
              (t_hvcC.generalTierFlag << 5) |
              t_hvcC.generalProfileIdc,
            u >>> 24,
            u >>> 16,
            u >>> 8,
            u,
            l[0],
            l[1],
            l[2],
            l[3],
            l[4],
            l[5],
            t_hvcC.generalLevelIdc,
            240,
            0,
            252,
            252 | t_hvcC.chromaFormatIdc,
            248 | t_hvcC.bitDepthLumaMinus8,
            248 | t_hvcC.bitDepthChromaMinus8,
            0,
            0,
            (t_hvcC.numTemporalLayers << 3) |
              (t_hvcC.temporalIdNested << 2) |
              3,
            c,
          ];
          const f = function (e) {
            let t;
            r.push(e.length >> 8, e.length);
            (t = r).push.apply(t, Og(e));
          };
          if (t_vps.length) {
            r.push(160, 0, t_vps.length);
            t_vps.forEach(f);
          }
          if (t_sps.length) {
            r.push(161, 0, t_sps.length);
            t_sps.forEach(f);
          }
          if (t_pps.length) {
            r.push(162, 0, t_pps.length);
            t_pps.forEach(f);
          }
        } else {
          r = [
            1, 1, 96, 0, 0, 0, 144, 0, 0, 0, 0, 0, 93, 240, 0, 252, 253, 248,
            248, 0, 0, 15, 3, 160, 0, 1, 0, 24, 64, 1, 12, 1, 255, 255, 1, 96,
            0, 0, 3, 0, 144, 0, 0, 3, 0, 0, 3, 0, 93, 153, 152, 9, 161, 0, 1, 0,
            45, 66, 1, 1, 1, 96, 0, 0, 3, 0, 144, 0, 0, 3, 0, 0, 3, 0, 93, 160,
            2, 128, 128, 45, 22, 89, 153, 164, 147, 43, 154, 128, 128, 128, 130,
            0, 0, 3, 0, 2, 0, 0, 3, 0, 50, 16, 162, 0, 1, 0, 7, 68, 1, 193, 114,
            180, 98, 64,
          ];
        }
        return e.box(e.types.hvcC, new Uint8Array(r));
      },
    },
    {
      key: "pasp",
      value: function (t) {
        const [i, a] = t;
        return e.box(
          e.types.pasp,
          new Uint8Array([
            i >> 24,
            (i >> 16) & 255,
            (i >> 8) & 255,
            255 & i,
            a >> 24,
            (a >> 16) & 255,
            (a >> 8) & 255,
            255 & a,
          ]),
        );
      },
    },
    {
      key: "mp4a",
      value: function (t) {
        return e.box(
          e.types.mp4a,
          new Uint8Array([
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            t.channelCount,
            0,
            16,
            0,
            0,
            0,
            0,
            (t.sampleRate >> 8) & 255,
            255 & t.sampleRate,
            0,
            0,
          ]),
          t.config.length ? e.esds(t.config) : undefined,
        );
      },
    },
    {
      key: "esds",
      value: function (t) {
        const t_length = t.length;
        return e.box(
          e.types.esds,
          new Uint8Array(
            [
              0,
              0,
              0,
              0,
              3,
              23 + t_length,
              0,
              0,
              0,
              4,
              15 + t_length,
              64,
              21,
              0,
              6,
              0,
              0,
              0,
              218,
              192,
              0,
              0,
              218,
              192,
              5,
              t_length,
            ]
              .concat(t)
              .concat([6, 1, 2]),
          ),
        );
      },
    },
    {
      key: "mvex",
      value: function (t) {
        return e.box.apply(
          e,
          [e.types.mvex].concat(Og(t.map((t) => e.trex(t.id)))),
        );
      },
    },
    {
      key: "trex",
      value: function (t) {
        return e.box(
          e.types.trex,
          new Uint8Array([
            0,
            0,
            0,
            0,
            t >> 24,
            (t >> 16) & 255,
            (t >> 8) & 255,
            255 & t,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            1,
          ]),
        );
      },
    },
    {
      key: "trex1",
      value: function (t) {
        return e.box(
          e.types.trex,
          new Uint8Array([
            0,
            0,
            0,
            0,
            t >> 24,
            (t >> 16) & 255,
            (t >> 8) & 255,
            255 & t,
            0,
            0,
            0,
            1,
            0,
            0,
            2,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
          ]),
        );
      },
    },
    {
      key: "trex2",
      value: function (t) {
        return e.box(
          e.types.trex,
          new Uint8Array([
            0,
            0,
            0,
            0,
            t >> 24,
            (t >> 16) & 255,
            (t >> 8) & 255,
            255 & t,
            0,
            0,
            0,
            1,
            0,
            0,
            4,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
          ]),
        );
      },
    },
    {
      key: "moof",
      value: function (t) {
        return e.box.apply(
          e,
          [
            e.types.moof,
            e.mfhd(t[0].samples ? t[0].samples[0].gopId : 0),
          ].concat(Og(t.map((t) => e.traf(t)))),
        );
      },
    },
    {
      key: "mfhd",
      value: function (t) {
        return e.box(
          e.types.mfhd,
          new Uint8Array([
            0,
            0,
            0,
            0,
            t >> 24,
            (t >> 16) & 255,
            (t >> 8) & 255,
            255 & t,
          ]),
        );
      },
    },
    {
      key: "traf",
      value: function (t) {
        const r = e.tfhd(t.id);
        const n = e.tfdt(t.baseMediaDecodeTime);
        let i = 0;
        if (t.isVideo && t.videoSenc) {
          t.videoSenc.forEach((e) => {
            i += 8;
            if (e.subsamples && e.subsamples.length) {
              i += 2 + 6 * e.subsamples.length;
            }
          });
        }
        t.videoSencLength = i;
        if (t.useEME && (t.isVideoEncryption || t.isAudioEncryption)) {
          if (t.isVideoEncryption) {
            if (t.isVideo) {
              const a = e.saiz(t);
              const s = e.saio(t);
              const o = e.trun1(t);
              const u = e.senc(t);
              return e.box(e.types.traf, r, n, a, s, o, u);
            } else if (t.isAudioEncryption) {
              const l = e.sbgp();
              const c = e.saiz(t);
              const f = e.saio(t);
              const d = e.senc(t);
              const h = e.trun1(t);
              return e.box(e.types.traf, r, n, l, c, f, d, h);
            } else {
              const p = e.sbgp();
              const v = e.trun1(t);
              return e.box(e.types.traf, r, n, p, v);
            }
          } else if (t.isVideo) {
            const m = e.trun1(t);
            return e.box(e.types.traf, r, n, m);
          } else {
            const y = e.sbgp();
            const g = e.saiz(t);
            const _ = e.saio(t);
            const b = e.senc(t);
            const k = e.trun1(t);
            return e.box(e.types.traf, r, n, y, g, _, b, k);
          }
        }
        const x = e.sdtp(t);
        return e.box(
          e.types.traf,
          r,
          n,
          x,
          e.trun(t.samples, x.byteLength + 76),
        );
      },
    },
    {
      key: "sdtp",
      value: function (t) {
        const r = new A();
        t.samples.forEach((e) => {
          r.write(new Uint8Array(t.isVideo ? [e.keyframe ? 32 : 16] : [16]));
        });
        return e.box(e.types.sdtp, this.extension(0, 0), r.buffer);
      },
    },
    {
      key: "trun1",
      value: function (t) {
        const r = new A();
        const n = A.writeUint32(t.samples.length);
        let i = null;
        if (t.isVideo) {
          const a = t.videoSencLength;
          i = A.writeUint32(76 + 16 * t.samples.length + a + 77);
          if (!t.isVideoEncryption && t.isAudioEncryption) {
            i = A.writeUint32(76 + 16 * t.samples.length + 20);
          }
        } else {
          let o = 76 + 12 * t.samples.length + 52;
          if (t.isAudioEncryption) {
            o = 76 + 12 * t.samples.length + 8 * t.audioSenc.length + 105;
          }
          i = A.writeUint32(o);
        }
        t.samples.forEach((e) => {
          r.write(A.writeUint32(e.duration));
          r.write(A.writeUint32(e.size));
          r.write(A.writeUint32(e.keyframe ? 33554432 : 65536));
          if (t.isVideo) {
            r.write(A.writeUint32(e.cts ? e.cts : 0));
          }
        });
        return e.box(e.types.trun, this.extension(0, t.flags), n, i, r.buffer);
      },
    },
    {
      key: "senc",
      value: function (t) {
        const r = new A();
        const length = t.samples.length;
        const i = t.isVideo ? 16 : 8;
        const a = 2 * !!t.isVideo;
        let o = [];
        let u = 0;
        if (t.isVideo) {
          o = t.videoSenc;
          u = t.videoSencLength;
        } else {
          o = t.audioSenc;
        }
        u = u || i * length;
        r.write(A.writeUint32(16 + u), e.types.senc, this.extension(0, a));
        r.write(A.writeUint32(length));
        o.forEach((e) => {
          for (let t = 0; t < e.InitializationVector.length; t++) {
            r.write(new Uint8Array([e.InitializationVector[t]]));
          }
          if (e.subsamples && e.subsamples.length) {
            r.write(A.writeUint16(e.subsamples.length));
            e.subsamples.forEach((e) => {
              r.write(A.writeUint16(e.BytesOfClearData));
              r.write(A.writeUint32(e.BytesOfProtectedData));
            });
          }
        });
        return r.buffer;
      },
    },
    {
      key: "saio",
      value: function (t) {
        let r = 12 * t.samples.length + 141;
        if (!t.isVideo && t.isAudioEncryption) {
          r = 149;
        }
        const n = new Uint8Array([
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          (r >> 24) & 255,
          (r >> 16) & 255,
          (r >> 8) & 255,
          255 & r,
        ]);
        return e.box(e.types.saio, n);
      },
    },
    {
      key: "saiz",
      value: function (t) {
        const length = t.samples.length;
        const n = new Uint8Array([
          0,
          0,
          0,
          0,
          16,
          (length >> 24) & 255,
          (length >> 16) & 255,
          (length >> 8) & 255,
          255 & length,
        ]);
        return e.box(e.types.saiz, n);
      },
    },
    {
      key: "sbgp",
      value: function () {
        const t = new Uint8Array([
          114, 111, 108, 108, 0, 0, 0, 1, 0, 0, 1, 25, 0, 0, 0, 1,
        ]);
        return e.box(e.types.sbgp, this.extension(0, 0), t);
      },
    },
    {
      key: "extension",
      value: function (e, t) {
        return new Uint8Array([e, (t >> 16) & 255, (t >> 8) & 255, 255 & t]);
      },
    },
    {
      key: "tfhd",
      value: function (t) {
        return e.box(
          e.types.tfhd,
          new Uint8Array([
            0,
            0,
            0,
            0,
            t >> 24,
            (t >> 16) & 255,
            (t >> 8) & 255,
            255 & t,
          ]),
        );
      },
    },
    {
      key: "tfdt",
      value: function (t) {
        const r = Math.floor(t / 4294967296);
        const n = Math.floor(t % 4294967296);
        return e.box(
          e.types.tfdt,
          new Uint8Array([
            1,
            0,
            0,
            0,
            r >> 24,
            (r >> 16) & 255,
            (r >> 8) & 255,
            255 & r,
            n >> 24,
            (n >> 16) & 255,
            (n >> 8) & 255,
            255 & n,
          ]),
        );
      },
    },
    {
      key: "trun",
      value: function (t, r) {
        const t_length = t.length;
        const i = 12 + 16 * t_length;
        r += 8 + i;
        const a = new Uint8Array(i);
        a.set(
          [
            0,
            0,
            15,
            1,
            (t_length >>> 24) & 255,
            (t_length >>> 16) & 255,
            (t_length >>> 8) & 255,
            255 & t_length,
            (r >>> 24) & 255,
            (r >>> 16) & 255,
            (r >>> 8) & 255,
            255 & r,
          ],
          0,
        );
        for (let s = 0; s < t_length; s++) {
          const o = t[s];
          const u = o.duration;
          const l = o.size;
          const c = o.flag;
          const f = c === undefined ? {} : c;
          const d = o.cts;
          const h = d === undefined ? 0 : d;
          a.set(
            [
              (u >>> 24) & 255,
              (u >>> 16) & 255,
              (u >>> 8) & 255,
              255 & u,
              (l >>> 24) & 255,
              (l >>> 16) & 255,
              (l >>> 8) & 255,
              255 & l,
              (f.isLeading << 2) |
                (f.dependsOn === null || f.dependsOn === undefined
                  ? 1
                  : f.dependsOn),
              (f.isDependedOn << 6) |
                (f.hasRedundancy << 4) |
                (f.paddingValue << 1) |
                (f.isNonSyncSample === null || f.isNonSyncSample === undefined
                  ? 1
                  : f.isNonSyncSample),
              61440 & f.degradationPriority,
              15 & f.degradationPriority,
              (h >>> 24) & 255,
              (h >>> 16) & 255,
              (h >>> 8) & 255,
              255 & h,
            ],
            12 + 16 * s,
          );
        }
        return e.box(e.types.trun, a);
      },
    },
    {
      key: "moovMP4",
      value: function (t) {
        return e.box.apply(
          e,
          [e.types.moov, e.mvhd(t[0].duration, t[0].timescale)].concat(
            Og(t.map((t) => e.trackMP4(t))),
          ),
        );
      },
    },
    {
      key: "trackMP4",
      value: function (t) {
        return e.box(
          e.types.trak,
          e.tkhd(t.id, t.duration, t.width, t.height),
          e.mdiaMP4(t),
        );
      },
    },
    {
      key: "mdiaMP4",
      value: function (t) {
        return e.box(
          e.types.mdia,
          e.mdhd(t.duration, t.timescale),
          e.hdlr(t.type),
          e.minfMP4(t),
        );
      },
    },
    {
      key: "minfMP4",
      value: function (t) {
        return e.box(
          e.types.minf,
          t.type === S.VIDEO ? e.VMHD : e.SMHD,
          e.DINF,
          e.stblMP4(t),
        );
      },
    },
    {
      key: "stblMP4",
      value: function (t) {
        const t_ext = t.ext;
        const n = [
          e.stsd(t),
          e.stts(t_ext.stts),
          e.stsc(t_ext.stsc),
          e.stsz(t_ext.stsz),
          e.stco(t_ext.stco),
        ];
        if (t_ext.stss.length) {
          n.push(e.stss(t_ext.stss));
        }
        if (t_ext.ctts.length) {
          n.push(e.ctts(t_ext.ctts));
        }
        return e.box.apply(e, [e.types.stbl].concat(n));
      },
    },
    {
      key: "stts",
      value: function (t) {
        const t_length = t.length;
        const n = new Uint8Array(8 * t_length);
        let i = 0;
        t.forEach((e) => {
          const e_value = e.value;
          const e_count = e.count;
          n.set(
            [
              e_count >> 24,
              (e_count >> 16) & 255,
              (e_count >> 8) & 255,
              255 & e_count,
              e_value >> 24,
              (e_value >> 16) & 255,
              (e_value >> 8) & 255,
              255 & e_value,
            ],
            i,
          );
          i += 8;
        });
        return e.box(
          e.types.stts,
          Cs(
            new Uint8Array([
              0,
              0,
              0,
              0,
              t_length >> 24,
              (t_length >> 16) & 255,
              (t_length >> 8) & 255,
              255 & t_length,
            ]),
            n,
          ),
        );
      },
    },
    {
      key: "stsc",
      value: function (t) {
        const t_length = t.length;
        const n = new Uint8Array(12 * t_length);
        let i = 0;
        t.forEach((e) => {
          const e_firstChunk = e.firstChunk;
          const e_samplesPerChunk = e.samplesPerChunk;
          const e_sampleDescIndex = e.sampleDescIndex;
          n.set(
            [
              e_firstChunk >> 24,
              (e_firstChunk >> 16) & 255,
              (e_firstChunk >> 8) & 255,
              255 & e_firstChunk,
              e_samplesPerChunk >> 24,
              (e_samplesPerChunk >> 16) & 255,
              (e_samplesPerChunk >> 8) & 255,
              255 & e_samplesPerChunk,
              e_sampleDescIndex >> 24,
              (e_sampleDescIndex >> 16) & 255,
              (e_sampleDescIndex >> 8) & 255,
              255 & e_sampleDescIndex,
            ],
            i,
          );
          i += 12;
        });
        return e.box(
          e.types.stsc,
          Cs(
            new Uint8Array([
              0,
              0,
              0,
              0,
              t_length >> 24,
              (t_length >> 16) & 255,
              (t_length >> 8) & 255,
              255 & t_length,
            ]),
            n,
          ),
        );
      },
    },
    {
      key: "stsz",
      value: function (t) {
        const t_length = t.length;
        const n = new Uint8Array(4 * t_length);
        let i = 0;
        t.forEach((e) => {
          n.set([e >> 24, (e >> 16) & 255, (e >> 8) & 255, 255 & e], i);
          i += 4;
        });
        return e.box(
          e.types.stsz,
          Cs(
            new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              t_length >> 24,
              (t_length >> 16) & 255,
              (t_length >> 8) & 255,
              255 & t_length,
            ]),
            n,
          ),
        );
      },
    },
    {
      key: "stco",
      value: function (t) {
        const t_length = t.length;
        const n = new Uint8Array(4 * t_length);
        let i = 0;
        t.forEach((e) => {
          n.set([e >> 24, (e >> 16) & 255, (e >> 8) & 255, 255 & e], i);
          i += 4;
        });
        return e.box(
          e.types.stco,
          Cs(
            new Uint8Array([
              0,
              0,
              0,
              0,
              t_length >> 24,
              (t_length >> 16) & 255,
              (t_length >> 8) & 255,
              255 & t_length,
            ]),
            n,
          ),
        );
      },
    },
    {
      key: "stss",
      value: function (t) {
        const t_length = t.length;
        const n = new Uint8Array(4 * t_length);
        let i = 0;
        t.forEach((e) => {
          n.set([e >> 24, (e >> 16) & 255, (e >> 8) & 255, 255 & e], i);
          i += 4;
        });
        return e.box(
          e.types.stss,
          Cs(
            new Uint8Array([
              0,
              0,
              0,
              0,
              t_length >> 24,
              (t_length >> 16) & 255,
              (t_length >> 8) & 255,
              255 & t_length,
            ]),
            n,
          ),
        );
      },
    },
    {
      key: "ctts",
      value: function (t) {
        const t_length = t.length;
        const n = new Uint8Array(8 * t_length);
        let i = 0;
        t.forEach((e) => {
          const e_value = e.value;
          const e_count = e.count;
          n.set(
            [
              e_count >> 24,
              (e_count >> 16) & 255,
              (e_count >> 8) & 255,
              255 & e_count,
              e_value >> 24,
              (e_value >> 16) & 255,
              (e_value >> 8) & 255,
              255 & e_value,
            ],
            i,
          );
          i += 8;
        });
        return e.box(
          e.types.ctts,
          Cs(
            new Uint8Array([
              0,
              0,
              0,
              0,
              t_length >> 24,
              (t_length >> 16) & 255,
              (t_length >> 8) & 255,
              255 & t_length,
            ]),
            n,
          ),
        );
      },
    },
    {
      key: "styp",
      value: function () {
        return e.box(
          e.types.styp,
          new Uint8Array([
            109, 115, 100, 104, 0, 0, 0, 0, 109, 115, 100, 104, 109, 115, 105,
            120,
          ]),
        );
      },
    },
    {
      key: "sidx",
      value: function (t) {
        const t_timescale = t.timescale;
        const duration = t.samples[0].duration;
        const i = duration * t.samples.length;
        const a = t.samples[0].sampleOffset * duration;
        let s = 8;
        t.samples.forEach((e) => {
          s += e.size;
        });
        let o = 0;
        if (t.isVideo) {
          let u;
          let l = 0;
          if (t.videoSenc) {
            u = t.videoSenc;
          }
          if (t.isVideo) {
            u.forEach((e) => {
              l += 8;
              if (e.subsamples && e.subsamples.length) {
                l += 2 + 6 * e.subsamples.length;
              }
            });
          }
          t.videoSencLength = l;
          o = s + 141 + 16 * t.samples.length + l;
          if (t.useEME && t.isAudioEncryption && !t.isVideoEncryption) {
            o = s + 16 * t.samples.length + 84;
          }
        } else {
          o = s + 116 + 12 * t.samples.length;
          if (t.useEME && t.isAudioEncryption) {
            o = s + 169 + 12 * t.samples.length + 8 * t.audioSenc.length;
          }
        }
        const c = new Uint8Array([
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          255 & t.id,
          (t_timescale >> 24) & 255,
          (t_timescale >> 16) & 255,
          (t_timescale >> 8) & 255,
          255 & t_timescale,
          (a >> 24) & 255,
          (a >> 16) & 255,
          (a >> 8) & 255,
          255 & a,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          (o >> 16) & 255,
          (o >> 8) & 255,
          255 & o,
          (i >> 24) & 255,
          (i >> 16) & 255,
          (i >> 8) & 255,
          255 & i,
          144,
          0,
          0,
          0,
        ]);
        return e.box(e.types.sidx, c);
      },
    },
    {
      key: "mdat",
      value: function (t) {
        return e.box(e.types.mdat, t);
      },
    },
  ]);
})();
n8(
  o,
  "types",
  [
    "av01",
    "av1C",
    "avc1",
    "avcC",
    "hvc1",
    "hvcC",
    "dinf",
    "dref",
    "edts",
    "elst",
    "esds",
    "ftyp",
    "hdlr",
    "mdat",
    "mdhd",
    "mdia",
    "mfhd",
    "minf",
    "moof",
    "moov",
    "mp4a",
    "mvex",
    "mvhd",
    "pasp",
    "stbl",
    "stco",
    "stsc",
    "stsd",
    "stsz",
    "stts",
    "tfdt",
    "tfhd",
    "traf",
    "trak",
    "trex",
    "tkhd",
    "vmhd",
    "smhd",
    "ctts",
    "stss",
    "styp",
    "pssh",
    "sidx",
    "sbgp",
    "saiz",
    "saio",
    "senc",
    "trun",
    "encv",
    "enca",
    "sinf",
    "btrt",
    "frma",
    "tenc",
    "schm",
    "schi",
    "mehd",
    "fiel",
    "sdtp",
    "bvc2",
    "bv2C",
  ].reduce((acc, item) => {
    acc[item] = [
      item.charCodeAt(0),
      item.charCodeAt(1),
      item.charCodeAt(2),
      item.charCodeAt(3),
    ];
    return acc;
  }, Object.create(null)),
);
n8(o, "HDLR_TYPES", {
  video: new Uint8Array([
    0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0,
  ]),
  audio: new Uint8Array([
    0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0,
  ]),
});
n8(
  o,
  "FTYPAVC1",
  o.box(
    o.types.ftyp,
    new Uint8Array([
      105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 97, 118, 99, 49,
    ]),
  ),
);
n8(
  o,
  "FTYPHEV1",
  o.box(
    o.types.ftyp,
    new Uint8Array([
      105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 104, 101, 118, 49,
    ]),
  ),
);
n8(
  o,
  "DINF",
  o.box(
    o.types.dinf,
    o.box(
      o.types.dref,
      new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1,
      ]),
    ),
  ),
);
n8(
  o,
  "VMHD",
  o.box(o.types.vmhd, new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])),
);
n8(o, "SMHD", o.box(o.types.smhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])));
n8(o, "StblTable", new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]));
n8(o, "STTS", o.box(o.types.stts, o.StblTable));
n8(o, "STSC", o.box(o.types.stsc, o.StblTable));
n8(
  o,
  "STSZ",
  o.box(o.types.stsz, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
);
n8(o, "STCO", o.box(o.types.stco, o.StblTable));
const u = require("./module-lka.js");
export var s = j6(
  function e(t, r, i) {
    xs(this, e);
    this.videoTrack = t;
    this.audioTrack = r;
    const a = /Chrome\/([^.]+)/.exec(navigator.userAgent);
    this.forceFirstIDR = a && Number(a[1]) < 50;
    this.log = new u.V("FMP4Remuxer", !i || !i.openLog || !i.openLog);
  },
  [
    {
      key: "remux",
      value: function () {
        let videoInitSegment;
        let audioInitSegment;
        let initSegment;
        let videoSegment;
        let audioSegment;
        const a =
          arguments.length > 0 && arguments[0] !== undefined && arguments[0];
        const s =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};
        const videoTrack = this.videoTrack;
        const audioTrack = this.audioTrack;
        const c = videoTrack.exist();
        const f = audioTrack.exist();
        const d = [];
        if (a) {
          if (s && s.initMerge) {
            if (c) {
              d.push(this.videoTrack);
            }
            if (f) {
              d.push(this.audioTrack);
            }
            initSegment = o.initSegment(d);
          } else {
            if (c) {
              videoInitSegment = o.initSegment([this.videoTrack]);
            }
            if (f) {
              audioInitSegment = o.initSegment([this.audioTrack]);
            }
          }
        }
        if (c && videoTrack.hasSample()) {
          videoSegment = this._remuxVideo();
        }
        if (f && audioTrack.hasSample()) {
          audioSegment = this._remuxAudio();
        }
        videoTrack.samples = [];
        audioTrack.samples = [];
        return {
          initSegment,
          videoInitSegment,
          audioInitSegment,
          videoSegment,
          audioSegment,
        };
      },
    },
    {
      key: "_remuxVideo",
      value: function () {
        const videoTrack = this.videoTrack;
        if (this.forceFirstIDR) {
          videoTrack.samples[0].flag = {
            dependsOn: 2,
            isNonSyncSample: 0,
          };
        }
        const e_samples = videoTrack.samples;
        const r = /av01/.test(videoTrack.codec);
        let n = 0;
        if (r) {
          e_samples.forEach((e) => {
            n += e.data.byteLength;
          });
        } else {
          e_samples.forEach((e) => {
            n += e.units.reduce((acc, unit) => acc + unit.byteLength, 0);
            n += 4 * e.units.length;
          });
        }
        const i = new Uint8Array(n);
        if (r) {
          let s;
          for (let u = 0, l = e_samples.length, c = 0; u < l; u++) {
            s = e_samples[u];
            i.set(s.data, c);
            s.size = s.data.byteLength;
            c += s.size;
          }
        } else {
          let f;
          const d = new DataView(i.buffer);
          const h = (e, r) => {
            r = e_samples[p];
            let n = 0;
            r.units.forEach((t) => {
              d.setUint32(e, t.byteLength);
              e += 4;
              i.set(t, e);
              e += t.byteLength;
              n += 4 + t.byteLength;
            });
            r.size = n;
            m = e;
            f = r;
          };
          for (var p = 0, v = e_samples.length, m = 0; p < v; p++) {
            h(m, f);
          }
        }
        const y = o.mdat(i);
        const g = o.moof([videoTrack]);
        return Cs(g, y);
      },
    },
    {
      key: "_remuxAudio",
      value: function () {
        const audioTrack = this.audioTrack;
        const t = new Uint8Array(
          audioTrack.samples.reduce((acc, sample) => acc + sample.size, 0),
        );
        audioTrack.samples.reduce((acc, sample) => {
          t.set(sample.data, acc);
          return acc + sample.size;
        }, 0);
        const r = o.mdat(t);
        const n = o.moof([audioTrack]);
        return Cs(n, r);
      },
    },
    {
      key: "reset",
      value: function () {
        this.videoTrack.reset();
        this.audioTrack.reset();
      },
    },
  ],
);
