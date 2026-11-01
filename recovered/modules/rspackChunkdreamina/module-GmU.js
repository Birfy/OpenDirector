import n from "T8l";
import i from "tqk";
import a from "cL3";
import s from "rO";
import o from "or";
import { vF } from "./module-E8B.js";
import { A } from "./module-NRx.js";
var c = {
  decryptWordArray: function (e, t, r) {
    const l = n._h.parse(t);
    const iv = n._h.parse(vF(r));
    const ciphertext = n.id.create(new Uint8Array(e));
    const h = a.c.decrypt(
      i.UV.create({
        ciphertext,
      }),
      l,
      {
        iv,
        mode: s.c,
        padding: o.V,
      },
    );
    return c.wordArrayToUint8Array(h);
  },
  wordArrayToUint8Array: function (e) {
    for (
      var t = e.sigBytes, r = e.words, n = new Uint8Array(t), i = 0, a = 0;
      i !== t;
    ) {
      const s = r[a++];
      n[i++] = (4278190080 & s) >>> 24;
      if (
        i === t ||
        ((n[i++] = (16711680 & s) >>> 16), i === t) ||
        ((n[i++] = (65280 & s) >>> 8), i === t)
      ) {
        break;
      }
      n[i++] = 255 & s;
    }
    return n;
  },
  decoderAESCTRData: function (e, t, r) {
    if (e.videoSenc) {
      const n = e.kidValue;
      const i = e.videoSenc;
      e.samples.forEach((t, a) => {
        const s = i[a];
        let t_data = t.data;
        const u = [];
        const f = [];
        const s_InitializationVector = s.InitializationVector;
        if (s.subsamples && s.subsamples.length) {
          s.subsamples.forEach((e) => {
            const t = e.BytesOfClearData + e.BytesOfProtectedData;
            const r = t_data.slice(0, t);
            u.push(r.slice(0, e.BytesOfClearData));
            f.push(r.slice(e.BytesOfClearData));
            t_data = t_data.slice(t);
          });
        } else {
          const h = t.size;
          u.push(t_data.slice(0, 0));
          f.push(t_data.slice(0, h));
          t_data = t_data.slice(h);
        }
        const p = new A();
        p.write.apply(p, f);
        let v = r
          ? r(p.buffer, n, s_InitializationVector)
          : c.decryptWordArray(p.buffer, n, s_InitializationVector);
        const m = new A();
        u.forEach((e, t) => {
          const length = f[t].length;
          const n = v.slice(0, length);
          m.write(e);
          m.write(n);
          v = v.slice(length);
        });
        e.samples[a].data = m.buffer;
      });
    }
    if (t.audioSenc) {
      const a = t.kidValue;
      const s = t.audioSenc;
      t.samples.forEach((e, n) => {
        const i = s[n];
        const o = r
          ? r(e.data, a, i.InitializationVector)
          : c.decryptWordArray(e.data, a, i.InitializationVector);
        t.samples[n].data = o;
      });
    }
  },
};
export { c as A };
