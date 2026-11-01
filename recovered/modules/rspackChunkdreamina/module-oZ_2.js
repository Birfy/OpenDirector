import i from "rCO";
let a;
let s;
function o(e) {
  if (e.arrayBuffer) {
    return e.arrayBuffer();
  }
  return new Promise((resolve, reject) => {
    let a = new FileReader();
    a.addEventListener("loadend", () => {
      resolve(a.result);
    });
    a.addEventListener("error", reject);
    a.readAsArrayBuffer(e);
  });
}
async function n(src) {
  return new Uint8Array(await o(src));
}
function l(e) {
  return typeof Blob !== "undefined" && e instanceof Blob;
}
function d(e) {
  return (
    typeof SharedArrayBuffer !== "undefined" && e instanceof SharedArrayBuffer
  );
}
let c =
  i !== undefined &&
  i.versions &&
  i.versions.node !== undefined &&
  i.versions.electron === undefined;
class u {
  constructor(e) {
    this.typedArray =
      e instanceof ArrayBuffer || d(e)
        ? new Uint8Array(e)
        : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  }
  async getLength() {
    return this.typedArray.byteLength;
  }
  async read(e, t) {
    return new Uint8Array(
      this.typedArray.buffer,
      this.typedArray.byteOffset + e,
      t,
    );
  }
}
class f {
  constructor(e) {
    this.blob = e;
  }
  async getLength() {
    return this.blob.size;
  }
  async read(e, t) {
    let r = this.blob.slice(e, e + t);
    return new Uint8Array(await o(r));
  }
  async sliceAsBlob(e, t, r = "") {
    return this.blob.slice(e, e + t, r);
  }
}
function p(e, t) {
  const e_length = e.length;
  if (t <= e_length) {
    return e;
  }
  const a = new Uint8Array(Math.max(e_length << 1, t));
  a.set(e, 0);
  return a;
}
function h(imap, t, r, a, s, ttree) {
  const o = _;
  const n = w;
  for (let l = 0; l < r;) {
    const d = imap[n(a, s) & t];
    s += 15 & d;
    const c = d >>> 4;
    if (c <= 15) {
      ttree[l] = c;
      l++;
    } else {
      let u = 0;
      let f = 0;
      if (c == 16) {
        f = 3 + o(a, s, 2);
        s += 2;
        u = ttree[l - 1];
      } else if (c == 17) {
        f = 3 + o(a, s, 3);
        s += 3;
      } else if (c == 18) {
        f = 11 + o(a, s, 7);
        s += 7;
      }
      for (const p = l + f; l < p;) {
        ttree[l] = u;
        l++;
      }
    }
  }
  return s;
}
function m(ttree, t, r, a) {
  let s = 0;
  for (var i = 0, o = a.length >>> 1; i < r;) {
    const n = ttree[i + t];
    a[i << 1] = 0;
    a[(i << 1) + 1] = n;
    if (n > s) {
      s = n;
    }
    i++;
  }
  while (i < o) {
    a[i << 1] = 0;
    a[(i << 1) + 1] = 0;
    i++;
  }
  return s;
}
function g(e, t) {
  let r;
  let a;
  let s;
  let o;
  const e_length = e.length;
  const b_bl_count = b.bl_count;
  for (var i, i = 0; i <= t; i++) {
    b_bl_count[i] = 0;
  }
  for (i = 1; i < e_length; i += 2) {
    b_bl_count[e[i]]++;
  }
  const b_next_code = b.next_code;
  r = 0;
  b_bl_count[0] = 0;
  for (a = 1; a <= t; a++) {
    r = (r + b_bl_count[a - 1]) << 1;
    b_next_code[a] = r;
  }
  for (s = 0; s < e_length; s += 2) {
    if ((o = e[s + 1]) != 0) {
      e[s] = b_next_code[o];
      b_next_code[o]++;
    }
  }
}
function y(e, t, r) {
  for (let a = e.length, s = b.rev15, i = 0; i < a; i += 2) {
    if (e[i + 1] != 0) {
      const o = i >> 1;
      const n = e[i + 1];
      const l = (o << 4) | n;
      const d = t - n;
      for (let c = e[i] << d, u = c + (1 << d); c != u;) {
        r[s[c] >>> (15 - t)] = l;
        c++;
      }
    }
  }
}
function v(e, t) {
  const b_rev15 = b.rev15;
  const a = 15 - t;
  for (let s = 0; s < e.length; s += 2) {
    const i = e[s] << (t - e[s + 1]);
    e[s] = b_rev15[i] >>> a;
  }
}
function _(e, t, r) {
  return ((e[t >>> 3] | (e[(t >>> 3) + 1] << 8)) >>> (7 & t)) & ((1 << r) - 1);
}
function $(e, t, r) {
  return (
    ((e[t >>> 3] | (e[(t >>> 3) + 1] << 8) | (e[(t >>> 3) + 2] << 16)) >>>
      (7 & t)) &
    ((1 << r) - 1)
  );
}
function w(e, t) {
  return (
    (e[t >>> 3] | (e[(t >>> 3) + 1] << 8) | (e[(t >>> 3) + 2] << 16)) >>>
    (7 & t)
  );
}
a = Uint16Array;
s = Uint32Array;
let b = {
  next_code: new a(16),
  bl_count: new a(16),
  ordr: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
  of0: [
    3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67,
    83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999,
  ],
  exb: [
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
    5, 5, 5, 0, 0, 0, 0,
  ],
  ldef: new a(32),
  df0: [
    1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513,
    769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535,
    65535,
  ],
  dxb: [
    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
    11, 11, 12, 12, 13, 13, 0, 0,
  ],
  ddef: new s(32),
  flmap: new a(512),
  fltree: [],
  fdmap: new a(32),
  fdtree: [],
  lmap: new a(32768),
  ltree: [],
  ttree: [],
  dmap: new a(32768),
  dtree: [],
  imap: new a(512),
  itree: [],
  rev15: new a(32768),
  lhst: new s(286),
  dhst: new s(30),
  ihst: new s(19),
  lits: new s(15000),
  strt: new a(65536),
  prev: new a(32768),
};
for (var k = 0; k < 32768; k++) {
  let E = k;
  E =
    ((4278255360 &
      (E =
        ((4042322160 &
          (E =
            ((3435973836 &
              (E = ((2863311530 & E) >>> 1) | ((1431655765 & E) << 1))) >>>
              2) |
            ((858993459 & E) << 2))) >>>
          4) |
        ((252645135 & E) << 4))) >>>
      8) |
    ((16711935 & E) << 8);
  b.rev15[k] = ((E >>> 16) | (E << 16)) >>> 17;
}
function S(e, t, r) {
  while (t-- != 0) {
    e.push(0, r);
  }
}
for (var k = 0; k < 32; k++) {
  b.ldef[k] = (b.of0[k] << 3) | b.exb[k];
  b.ddef[k] = (b.df0[k] << 4) | b.dxb[k];
}
S(b.fltree, 144, 8);
S(b.fltree, 112, 9);
S(b.fltree, 24, 7);
S(b.fltree, 8, 8);
g(b.fltree, 9);
y(b.fltree, 9, b.flmap);
v(b.fltree, 9);
S(b.fdtree, 32, 5);
g(b.fdtree, 5);
y(b.fdtree, 5, b.fdmap);
v(b.fdtree, 5);
S(b.itree, 19, 0);
S(b.ltree, 286, 0);
S(b.dtree, 30, 0);
S(b.ttree, 320, 0);
let T = {
  table: (() => {
    const e = new Uint32Array(256);
    for (let t = 0; t < 256; t++) {
      let r = t;
      for (let a = 0; a < 8; a++) {
        if (1 & r) {
          r = 3988292384 ^ (r >>> 1);
        } else {
          r >>>= 1;
        }
      }
      e[t] = r;
    }
    return e;
  })(),
  update: function (e, t, r, a) {
    for (let s = 0; s < a; s++) {
      e = T.table[(e ^ t[r + s]) & 255] ^ (e >>> 8);
    }
    return e;
  },
  crc: function (e, t, r) {
    return 4294967295 ^ T.update(4294967295, e, t, r);
  },
};
let P = {
  numWorkers: 1,
  workerURL: "",
  useWorkers: false,
};
let I = 0;
let x = 0;
let j = true;
let R = [];
let N = [];
let C = [];
let O = new Map();
function q(e) {
  M(e.target);
  let { id, error, data } = e.data;
  let s = O.get(id);
  O.delete(id);
  if (error) {
    s.reject(error);
  } else {
    s.resolve(data);
  }
}
function A(e) {
  return new Promise((resolve, reject) => {
    let a = new Worker(e);
    a.onmessage = (e) => {
      if (e.data === "start") {
        a.onerror = undefined;
        a.onmessage = undefined;
        resolve(a);
      } else {
        reject(Error(`unexpected message: ${e.data}`));
      }
    };
    a.onerror = reject;
  });
}
let z = (() => {
  if (!c) {
    return {
      async createWorker(e) {
        let t;
        try {
          return await A(e);
        } catch (t) {
          console.warn("could not load worker:", e);
        }
        try {
          let r = await fetch(e, {
            mode: "cors",
          });
          if (!r.ok) {
            throw Error(`could not load: ${e}`);
          }
          t = await r.text();
          e = URL.createObjectURL(
            new Blob([t], {
              type: "application/javascript",
            }),
          );
          let a = await A(e);
          P.workerURL = e;
          return a;
        } catch (t) {
          console.warn("could not load worker via fetch:", e);
        }
        if (t !== undefined) {
          try {
            e = `data:application/javascript;base64,${btoa(t)}`;
            let r = await A(e);
            P.workerURL = e;
            return r;
          } catch (e) {
            console.warn("could not load worker via dataURI");
          }
        }
        console.warn("workers will not be used");
        throw Error("can not start workers");
      },
      addEventListener(e, t) {
        e.addEventListener("message", t);
      },
      async terminate(e) {
        e.terminate();
      },
    };
  }
  {
    let { Worker } = module.require("worker_threads");
    return {
      createWorker: async (e) => new Worker(e),
      addEventListener(target, t) {
        target.on("message", (data) => {
          t({
            target,
            data,
          });
        });
      },
      async terminate(e) {
        await e.terminate();
      },
    };
  }
})();
function M(e) {
  N.push(e);
  Y();
}
async function L() {
  if (N.length === 0 && x < P.numWorkers) {
    ++x;
    try {
      let e = await z.createWorker(P.workerURL);
      R.push(e);
      N.push(e);
      z.addEventListener(e, q);
    } catch (e) {
      j = false;
    }
  }
  return N.pop();
}
async function Y() {
  if (C.length !== 0) {
    if (P.useWorkers && j) {
      let e = await L();
      if (j) {
        if (e) {
          if (C.length === 0) {
            return void M(e);
          }
          let { id, src, uncompressedSize, type, resolve, reject } = C.shift();
          O.set(id, {
            id,
            resolve,
            reject,
          });
          e.postMessage(
            {
              type: "inflate",
              data: {
                id,
                type,
                src,
                uncompressedSize,
              },
            },
            [],
          );
        }
        return;
      }
    }
    while (C.length) {
      let { src, uncompressedSize, type, resolve } = C.shift();
      let s = src;
      if (l(src)) {
        s = await n(src);
      }
      ((e, t, r, a) => {
        let s = new Uint8Array(t);
        ((e, t) => {
          let r;
          let a;
          const s = Uint8Array;
          if (e[0] == 3 && e[1] == 0) {
            return t || new s(0);
          }
          const i = _;
          const o = w;
          const n = t == null;
          if (n) {
            t = new s((e.length >>> 2) << 3);
          }
          for (
            var l = 0, d = 0, c = 0, u = 0, f = 0, v = 0, k = 0, E = 0, S = 0;
            l == 0;
          ) {
            l = $(e, S, 1);
            d = $(e, S + 1, 2);
            S += 3;
            if (d == 0) {
              if ((7 & S) != 0) {
                S += 8 - (7 & S);
              }
              const T = (S >>> 3) + 4;
              const P = e[T - 4] | (e[T - 3] << 8);
              if (n) {
                t = p(t, E + P);
              }
              t.set(new s(e.buffer, e.byteOffset + T, P), E);
              S = (T + P) << 3;
              E += P;
              continue;
            }
            if (n) {
              t = p(t, E + 131072);
            }
            if (d == 1) {
              r = b.flmap;
              a = b.fdmap;
              v = 511;
              k = 31;
            }
            if (d == 2) {
              c = i(e, S, 5) + 257;
              u = i(e, S + 5, 5) + 1;
              f = i(e, S + 10, 4) + 4;
              S += 14;
              for (var I = 0; I < 38; I += 2) {
                b.itree[I] = 0;
                b.itree[I + 1] = 0;
              }
              let x = 1;
              for (var I = 0; I < f; I++) {
                const j = i(e, S + 3 * I, 3);
                b.itree[(b.ordr[I] << 1) + 1] = j;
                if (j > x) {
                  x = j;
                }
              }
              S += 3 * f;
              g(b.itree, x);
              y(b.itree, x, b.imap);
              r = b.lmap;
              a = b.dmap;
              S = h(b.imap, (1 << x) - 1, c + u, e, S, b.ttree);
              const R = m(b.ttree, 0, c, b.ltree);
              v = (1 << R) - 1;
              const N = m(b.ttree, c, u, b.dtree);
              k = (1 << N) - 1;
              g(b.ltree, R);
              y(b.ltree, R, r);
              g(b.dtree, N);
              y(b.dtree, N, a);
            }
            while (true) {
              const C = r[o(e, S) & v];
              S += 15 & C;
              const O = C >>> 4;
              if (O >>> 8 == 0) {
                t[E++] = O;
              } else if (O == 256) {
                break;
              } else {
                let q = E + O - 254;
                if (O > 264) {
                  const A = b.ldef[O - 257];
                  q = E + (A >>> 3) + i(e, S, 7 & A);
                  S += 7 & A;
                }
                const z = a[o(e, S) & k];
                S += 15 & z;
                const M = z >>> 4;
                const L = b.ddef[M];
                const Y = (L >>> 4) + $(e, S, 15 & L);
                S += 15 & L;
                if (n) {
                  t = p(t, E + 131072);
                }
                while (E < q) {
                  t[E] = t[E++ - Y];
                  t[E] = t[E++ - Y];
                  t[E] = t[E++ - Y];
                  t[E] = t[E++ - Y];
                }
                E = q;
              }
            }
          }
          if (t.length != E) {
            t.slice(0, E);
          }
        })(e, s);
        a(
          r
            ? new Blob([s], {
                type: r,
              })
            : s.buffer,
        );
      })(s, uncompressedSize, type, resolve);
    }
  }
}
function H(src, uncompressedSize, type) {
  return new Promise((resolve, reject) => {
    C.push({
      src,
      uncompressedSize,
      type,
      resolve,
      reject,
      id: I++,
    });
    Y();
  });
}
class V {
  constructor(e, t) {
    var r;
    var a;
    this._reader = e;
    this._rawEntry = t;
    this.name = t.name;
    this.nameBytes = t.nameBytes;
    this.size = t.uncompressedSize;
    this.compressedSize = t.compressedSize;
    this.comment = t.comment;
    this.commentBytes = t.commentBytes;
    this.compressionMethod = t.compressionMethod;
    this.lastModDate = new Date(
      (((r = t.lastModFileDate) >> 9) & 127) + 1980,
      ((r >> 5) & 15) - 1,
      31 & r,
      ((a = t.lastModFileTime) >> 11) & 31,
      (a >> 5) & 63,
      (31 & a) * 2,
      0,
    );
    this.isDirectory = t.uncompressedSize === 0 && t.name.endsWith("/");
    this.encrypted = !!(1 & t.generalPurposeBitFlag);
    this.externalFileAttributes = t.externalFileAttributes;
    this.versionMadeBy = t.versionMadeBy;
  }
  async blob(e = "application/octet-stream") {
    return await er(this._reader, this._rawEntry, e);
  }
  async arrayBuffer() {
    return await et(this._reader, this._rawEntry);
  }
  async text() {
    return W(new Uint8Array(await this.arrayBuffer()));
  }
  async json() {
    return JSON.parse(await this.text());
  }
}
async function D(e, t, r) {
  return await e.read(t, r);
}
async function F(e, fileDataStart, compressedSize, a) {
  if (e.sliceAsBlob) {
    return await e.sliceAsBlob(fileDataStart, compressedSize, a);
  }
  return await e.read(fileDataStart, compressedSize);
}
let U = () => 0;
function K(e, t) {
  return e[t] + 256 * e[t + 1];
}
function Z(e, t) {
  return e[t] + 256 * e[t + 1] + 65536 * e[t + 2] + 16777216 * e[t + 3];
}
function B(e, t) {
  return Z(e, t) + 4294967296 * Z(e, t + 4);
}
let G = new TextDecoder();
function W(e, t) {
  if (d(e.buffer)) {
    e = new Uint8Array(e);
  }
  return G.decode(e);
}
async function Q(e, t) {
  let r = Math.min(65557, t);
  let a = t - r;
  let s = await D(e, a, r);
  for (let t = r - 22; t >= 0; --t) {
    if (Z(s, t) !== 101010256) {
      continue;
    }
    let r = new Uint8Array(s.buffer, s.byteOffset + t, s.byteLength - t);
    let i = K(r, 4);
    if (i !== 0) {
      throw Error(
        `multi-volume zip files are not supported. This is volume: ${i}`,
      );
    }
    let o = K(r, 10);
    let n = Z(r, 12);
    let l = Z(r, 16);
    let d = K(r, 20);
    let c = r.length - 22;
    if (d !== c) {
      throw Error(`invalid comment length. expected: ${c}, actual: ${d}`);
    }
    let u = new Uint8Array(r.buffer, r.byteOffset + 22, d);
    let f = W(u);
    if (o === 65535 || l === 4294967295) {
      return await J(e, a + t, f, u);
    }
    return await X(e, l, n, o, f, u);
  }
  throw Error("could not find end of central directory. maybe not zip file");
}
async function J(e, t, r, a) {
  let s = await D(e, t - 20, 20);
  if (Z(s, 0) !== 117853008) {
    throw Error("invalid zip64 end of central directory locator signature");
  }
  let i = B(s, 8);
  let o = await D(e, i, 56);
  if (Z(o, 0) !== 101075792) {
    throw Error("invalid zip64 end of central directory record signature");
  }
  let n = B(o, 32);
  let l = B(o, 40);
  return X(e, B(o, 48), l, n, r, a);
}
async function X(e, t, r, a, comment, commentBytes) {
  let o = 0;
  let n = await D(e, t, r);
  let l = [];
  for (let e = 0; e < a; ++e) {
    let e = n.subarray(o, o + 46);
    let t = Z(e, 0);
    if (t !== 33639248) {
      throw Error(
        `invalid central directory file header signature: 0x${t.toString(16)}`,
      );
    }
    let r = {
      versionMadeBy: K(e, 4),
      versionNeededToExtract: K(e, 6),
      generalPurposeBitFlag: K(e, 8),
      compressionMethod: K(e, 10),
      lastModFileTime: K(e, 12),
      lastModFileDate: K(e, 14),
      crc32: Z(e, 16),
      compressedSize: Z(e, 20),
      uncompressedSize: Z(e, 24),
      fileNameLength: K(e, 28),
      extraFieldLength: K(e, 30),
      fileCommentLength: K(e, 32),
      internalFileAttributes: K(e, 36),
      externalFileAttributes: Z(e, 38),
      relativeOffsetOfLocalHeader: Z(e, 42),
    };
    if (64 & r.generalPurposeBitFlag) {
      throw Error("strong encryption is not supported");
    }
    o += 46;
    let a = n.subarray(
      o,
      o + r.fileNameLength + r.extraFieldLength + r.fileCommentLength,
    );
    r.nameBytes = a.slice(0, r.fileNameLength);
    r.name = W(r.nameBytes);
    let s = r.fileNameLength + r.extraFieldLength;
    let i = a.slice(r.fileNameLength, s);
    r.extraFields = [];
    let d = 0;
    while (d < i.length - 3) {
      let id = K(i, d + 0);
      let t = K(i, d + 2);
      let a = d + 4;
      let s = a + t;
      if (s > i.length) {
        throw Error("extra field length exceeds extra field buffer size");
      }
      r.extraFields.push({
        id,
        data: i.slice(a, s),
      });
      d = s;
    }
    r.commentBytes = a.slice(s, s + r.fileCommentLength);
    r.comment = W(r.commentBytes);
    o += a.length;
    if (
      r.uncompressedSize === 4294967295 ||
      r.compressedSize === 4294967295 ||
      r.relativeOffsetOfLocalHeader === 4294967295
    ) {
      let e = r.extraFields.find((e) => e.id === 1);
      if (!e) {
        throw Error("expected zip64 extended information extra field");
      }
      let t = e.data;
      let a = 0;
      if (r.uncompressedSize === 4294967295) {
        if (a + 8 > t.length) {
          throw Error(
            "zip64 extended information extra field does not include uncompressed size",
          );
        }
        r.uncompressedSize = B(t, a);
        a += 8;
      }
      if (r.compressedSize === 4294967295) {
        if (a + 8 > t.length) {
          throw Error(
            "zip64 extended information extra field does not include compressed size",
          );
        }
        r.compressedSize = B(t, a);
        a += 8;
      }
      if (r.relativeOffsetOfLocalHeader === 4294967295) {
        if (a + 8 > t.length) {
          throw Error(
            "zip64 extended information extra field does not include relative header offset",
          );
        }
        r.relativeOffsetOfLocalHeader = B(t, a);
        a += 8;
      }
    }
    let c = r.extraFields.find(
      (e) =>
        e.id === 28789 && e.data.length >= 6 && e.data[0] === 1 && Z(e.data, 1),
      U(r.nameBytes),
    );
    if (c) {
      r.fileName = W(c.data.slice(5));
    }
    if (r.compressionMethod === 0) {
      let e = r.uncompressedSize;
      if ((1 & r.generalPurposeBitFlag) != 0) {
        e += 12;
      }
      if (r.compressedSize !== e) {
        throw Error(
          `compressed size mismatch for stored file: ${r.compressedSize} != ${e}`,
        );
      }
    }
    l.push(r);
  }
  return {
    zip: {
      comment,
      commentBytes,
    },
    entries: l.map((t) => new V(e, t)),
  };
}
async function ee(e, t) {
  let decompress;
  if (1 & t.generalPurposeBitFlag) {
    throw Error("encrypted entries not supported");
  }
  let a = await D(e, t.relativeOffsetOfLocalHeader, 30);
  let s = await e.getLength();
  let i = Z(a, 0);
  if (i !== 67324752) {
    throw Error(`invalid local file header signature: 0x${i.toString(16)}`);
  }
  let o = K(a, 26);
  let n = K(a, 28);
  let fileDataStart = t.relativeOffsetOfLocalHeader + a.length + o + n;
  if (t.compressionMethod === 0) {
    decompress = false;
  } else if (t.compressionMethod === 8) {
    decompress = true;
  } else {
    throw Error(`unsupported compression method: ${t.compressionMethod}`);
  }
  let d = fileDataStart + t.compressedSize;
  if (t.compressedSize !== 0 && d > s) {
    throw Error(
      `file data overflows file bounds: ${fileDataStart} +  ${t.compressedSize}  > ${s}`,
    );
  }
  return {
    decompress,
    fileDataStart,
  };
}
async function et(_reader, _rawEntry) {
  let { decompress, fileDataStart } = await ee(_reader, _rawEntry);
  if (!decompress) {
    let r = await D(_reader, fileDataStart, _rawEntry.compressedSize);
    if (r.byteOffset === 0 && r.byteLength === r.buffer.byteLength) {
      return r.buffer;
    }
    return r.slice().buffer;
  }
  let s = await F(_reader, fileDataStart, _rawEntry.compressedSize);
  return await H(s, _rawEntry.uncompressedSize);
}
async function er(_reader, _rawEntry, r) {
  let { decompress, fileDataStart } = await ee(_reader, _rawEntry);
  if (!decompress) {
    let a = await F(_reader, fileDataStart, _rawEntry.compressedSize, r);
    if (l(a)) {
      return a;
    }
    return new Blob([d(a.buffer) ? new Uint8Array(a) : a], {
      type: r,
    });
  }
  let i = await F(_reader, fileDataStart, _rawEntry.compressedSize);
  return await H(i, _rawEntry.uncompressedSize, r);
}
async function ea(e) {
  let t;
  if (typeof Blob !== "undefined" && e instanceof Blob) {
    t = new f(e);
  } else if (
    e instanceof ArrayBuffer ||
    (e && e.buffer && e.buffer instanceof ArrayBuffer)
  ) {
    t = new u(e);
  } else if (d(e) || d(e.buffer)) {
    t = new u(e);
  } else if (typeof e === "string") {
    let r = await fetch(e);
    if (!r.ok) {
      throw Error(
        `failed http request ${e}, status: ${r.status}: ${r.statusText}`,
      );
    }
    t = new f(await r.blob());
  } else if (
    typeof e.getLength === "function" &&
    typeof e.read === "function"
  ) {
    t = e;
  } else {
    throw Error("unsupported source type");
  }
  let r = await t.getLength();
  if (r > Number.MAX_SAFE_INTEGER) {
    throw Error(
      `file too large. size: ${r}. Only file sizes up 4503599627370496 bytes are supported`,
    );
  }
  return await Q(t, r);
}
export async function $1(e) {
  let { zip, entries } = await ea(e);
  return {
    zip,
    entries: Object.fromEntries(entries.map((e) => [e.name, e])),
  };
}
