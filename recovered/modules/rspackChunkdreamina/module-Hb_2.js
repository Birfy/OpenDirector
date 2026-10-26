import "qx";
import i from "g";
import a from "F";
import o from "VJ";
import s from "u";
import A from "fM";
import c from "o";
import u from "xX";
import l from "Tg";
import h from "i9";
import f from "h";
import g from "mW";
import d from "pj";
import p from "us";
import { codeAt } from "aE";
import y from "dz";
import b from "BC";
import v from "Ii";
import I from "lU";
import w from "./module-yE_4.js";
import C from "G";
let n;
const C_set = C.set;
const S = C.getterFor("URL");
const w_URLSearchParams = w.URLSearchParams;
const w_getState = w.getState;
const s_URL = s.URL;
const s_TypeError = s.TypeError;
const s_parseInt = s.parseInt;
const R = c("".charAt);
const K = c(/./.exec);
const G = c([].join);
const O = c((1).toString);
const T = c([].pop);
const Y = c([].push);
const U = c("".replace);
const W = c([].shift);
const M = c("".split);
const J = c("".slice);
const L = c("".toLowerCase);
const H = c([].unshift);
const Z = "Invalid scheme";
const j = "Invalid host";
const P = "Invalid port";
const q = /[a-z]/i;
const V = /[\d+-.a-z]/i;
const X = /\d/;
const z = /^0x/i;
const _ = /^[0-7]+$/;
const $ = /^\d+$/;
const tt = /^[\da-f]+$/i;
const te = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
const tr = /[\0\t\n\r #/:<>?@[\\\]^|]/;
const tn = /^[\u0000-\u0020]+/;
const ti = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
const ta = /[\t\n\r]/g;
const to = (t) => {
  let e;
  let r;
  let n;
  let i;
  let a;
  let o;
  let s;
  const A = M(t, ".");
  if (A.length && A[A.length - 1] === "") {
    A.length--;
  }
  if ((e = A.length) > 4) {
    return t;
  }
  n = 0;
  for (r = []; n < e; n++) {
    if ((i = A[n]) === "") {
      return t;
    }
    a = 10;
    if (i.length > 1 && R(i, 0) === "0") {
      a = K(z, i) ? 16 : 8;
      i = J(i, a === 8 ? 1 : 2);
    }
    if (i === "") {
      o = 0;
    } else {
      if (!K(a === 10 ? $ : a === 8 ? _ : tt, i)) {
        return t;
      }
      o = s_parseInt(i, a);
    }
    Y(r, o);
  }
  for (n = 0; n < e; n++) {
    o = r[n];
    if (n === e - 1) {
      if (o >= 256 ** (5 - e)) {
        return null;
      }
    } else if (o > 255) {
      return null;
    }
  }
  s = T(r);
  for (n = 0; n < r.length; n++) {
    s += r[n] * 256 ** (3 - n);
  }
  return s;
};
const ts = (t) => {
  let e;
  let r;
  let n;
  let i;
  let a;
  let o;
  let s;
  const A = [0, 0, 0, 0, 0, 0, 0, 0];
  let c = 0;
  let u = null;
  let l = 0;
  const h = () => R(t, l);
  if (h() === ":") {
    if (R(t, 1) !== ":") {
      return;
    }
    l += 2;
    u = ++c;
  }
  while (h()) {
    if (c === 8) {
      return;
    }
    if (h() === ":") {
      if (u !== null) {
        return;
      }
      l++;
      u = ++c;
      continue;
    }
    for (e = r = 0; r < 4 && K(tt, h());) {
      e = 16 * e + s_parseInt(h(), 16);
      l++;
      r++;
    }
    if (h() === ".") {
      if (r === 0 || ((l -= r), c > 6)) {
        return;
      }
      for (n = 0; h();) {
        i = null;
        if (n > 0) {
          if (h() !== "." || !(n < 4)) {
            return;
          } else {
            l++;
          }
        }
        if (!K(X, h())) {
          return;
        }
        while (K(X, h())) {
          a = s_parseInt(h(), 10);
          if (i === null) {
            i = a;
          } else {
            if (i === 0) {
              return;
            }
            i = 10 * i + a;
          }
          if (i > 255) {
            return;
          }
          l++;
        }
        A[c] = 256 * A[c] + i;
        if (++n == 2 || n === 4) {
          c++;
        }
      }
      if (n !== 4) {
        return;
      }
      break;
    }
    if (h() === ":") {
      l++;
      if (!h()) {
        return;
      }
    } else if (h()) {
      return;
    }
    A[c++] = e;
  }
  if (u !== null) {
    o = c - u;
    for (c = 7; c !== 0 && o > 0;) {
      s = A[c];
      A[c--] = A[u + o - 1];
      A[u + --o] = s;
    }
  } else if (c !== 8) {
    return;
  }
  return A;
};
const tA = (t) => {
  let e = null;
  let r = 1;
  let n = null;
  let i = 0;
  for (let a = 0; a < 8; a++) {
    if (t[a] !== 0) {
      if (i > r) {
        e = n;
        r = i;
      }
      n = null;
      i = 0;
    } else {
      if (n === null) {
        n = a;
      }
      ++i;
    }
  }
  if (i > r) {
    e = n;
    r = i;
  }
  return e;
};
const tc = (t) => {
  let e;
  let r;
  let n;
  let i;
  if (typeof t === "number") {
    r = 0;
    for (e = []; r < 4; r++) {
      H(e, t % 256);
      t = Math.floor(t / 256);
    }
    return G(e, ".");
  }
  if (typeof t === "object") {
    e = "";
    n = tA(t);
    for (r = 0; r < 8; r++) {
      if (!i || t[r] !== 0) {
        if (i) {
          i = false;
        }
        if (n === r) {
          e += r ? ":" : "::";
          i = true;
        } else {
          e += O(t[r], 16);
          if (r < 7) {
            e += ":";
          }
        }
      }
    }
    return "[" + e + "]";
  }
  return t;
};
const tu = {};
const tl = g({}, tu, {
  " ": 1,
  '"': 1,
  "<": 1,
  ">": 1,
  "`": 1,
});
const th = g({}, tl, {
  "#": 1,
  "?": 1,
  "{": 1,
  "}": 1,
});
const tf = g({}, th, {
  "/": 1,
  ":": 1,
  ";": 1,
  "=": 1,
  "@": 1,
  "[": 1,
  "\\": 1,
  "]": 1,
  "^": 1,
  "|": 1,
});
const tg = (t, e) => {
  const r = codeAt(t, 0);
  if (r > 32 && r < 127 && !f(e, t)) {
    return t;
  }
  return encodeURIComponent(t);
};
const td = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443,
};
const tp = (t, e) => {
  let r;
  return (
    t.length === 2 &&
    K(q, R(t, 0)) &&
    ((r = R(t, 1)) === ":" || (!e && r === "|"))
  );
};
const tm = (t) => {
  let e;
  return (
    t.length > 1 &&
    tp(J(t, 0, 2)) &&
    (t.length === 2 ||
      (e = R(t, 2)) === "/" ||
      e === "\\" ||
      e === "?" ||
      e === "#")
  );
};
const ty = {};
const tb = {};
const tv = {};
const tI = {};
const tw = {};
const tC = {};
const tB = {};
const tS = {};
const tE = {};
const tk = {};
const tD = {};
const tx = {};
const tF = {};
const tQ = {};
const tN = {};
const tR = {};
const tK = {};
const tG = {};
const tO = {};
const tT = {};
const tY = {};
const tU = function (t, e, r) {
  let n;
  let i;
  let a;
  const o = b(t);
  if (e) {
    if ((i = this.parse(o))) {
      throw s_TypeError(i);
    }
    this.searchParams = null;
  } else {
    if (r !== undefined) {
      n = new tU(r, true);
    }
    if ((i = this.parse(o, null, n))) {
      throw s_TypeError(i);
    }
    (a = w_getState(new w_URLSearchParams())).bindURL(this);
    this.searchParams = a;
  }
};
tU.prototype = {
  type: "URL",
  parse: function (t, e, r) {
    let i = e || ty;
    let a = 0;
    let o = "";
    let s = false;
    let A = false;
    let c = false;
    t = b(t);
    if (!e) {
      this.scheme = "";
      this.username = "";
      this.password = "";
      this.host = null;
      this.port = null;
      this.path = [];
      this.query = null;
      this.fragment = null;
      this.cannotBeABaseURL = false;
      t = U(t, tn, "");
      t = U(t, ti, "$1");
    }
    for (u = d((t = U(t, ta, ""))); a <= u.length;) {
      l = u[a];
      switch (i) {
        case ty:
          if (l && K(q, l)) {
            o += L(l);
            i = tb;
          } else {
            if (e) {
              return Z;
            }
            i = tv;
            continue;
          }
          break;
        case tb:
          if (l && (K(V, l) || l === "+" || l === "-" || l === ".")) {
            o += L(l);
          } else if (l === ":") {
            if (
              e &&
              (this.isSpecial() !== f(td, o) ||
                (o === "file" &&
                  (this.includesCredentials() || this.port !== null)) ||
                (this.scheme === "file" && !this.host))
            ) {
              return;
            }
            this.scheme = o;
            if (e) {
              if (this.isSpecial() && td[this.scheme] === this.port) {
                this.port = null;
              }
              return;
            }
            o = "";
            if (this.scheme === "file") {
              i = tQ;
            } else if (this.isSpecial() && r && r.scheme === this.scheme) {
              i = tI;
            } else if (this.isSpecial()) {
              i = tS;
            } else if (u[a + 1] === "/") {
              i = tw;
              a++;
            } else {
              this.cannotBeABaseURL = true;
              Y(this.path, "");
              i = tO;
            }
          } else {
            if (e) {
              return Z;
            }
            o = "";
            i = tv;
            a = 0;
            continue;
          }
          break;
        case tv:
          if (!r || (r.cannotBeABaseURL && l !== "#")) {
            return Z;
          }
          if (r.cannotBeABaseURL && l === "#") {
            this.scheme = r.scheme;
            this.path = p(r.path);
            this.query = r.query;
            this.fragment = "";
            this.cannotBeABaseURL = true;
            i = tY;
            break;
          }
          i = r.scheme === "file" ? tQ : tC;
          continue;
        case tI:
          if (l === "/" && u[a + 1] === "/") {
            i = tE;
            a++;
          } else {
            i = tC;
            continue;
          }
          break;
        case tw:
          if (l === "/") {
            i = tk;
            break;
          }
          i = tG;
          continue;
        case tC:
          this.scheme = r.scheme;
          if (l === n) {
            this.username = r.username;
            this.password = r.password;
            this.host = r.host;
            this.port = r.port;
            this.path = p(r.path);
            this.query = r.query;
          } else if (l === "/" || (l === "\\" && this.isSpecial())) {
            i = tB;
          } else if (l === "?") {
            this.username = r.username;
            this.password = r.password;
            this.host = r.host;
            this.port = r.port;
            this.path = p(r.path);
            this.query = "";
            i = tT;
          } else if (l === "#") {
            this.username = r.username;
            this.password = r.password;
            this.host = r.host;
            this.port = r.port;
            this.path = p(r.path);
            this.query = r.query;
            this.fragment = "";
            i = tY;
          } else {
            this.username = r.username;
            this.password = r.password;
            this.host = r.host;
            this.port = r.port;
            this.path = p(r.path);
            this.path.length--;
            i = tG;
            continue;
          }
          break;
        case tB:
          if (this.isSpecial() && (l === "/" || l === "\\")) {
            i = tE;
          } else if (l === "/") {
            i = tk;
          } else {
            this.username = r.username;
            this.password = r.password;
            this.host = r.host;
            this.port = r.port;
            i = tG;
            continue;
          }
          break;
        case tS:
          i = tE;
          if (l !== "/" || R(o, a + 1) !== "/") {
            continue;
          }
          a++;
          break;
        case tE:
          if (l !== "/" && l !== "\\") {
            i = tk;
            continue;
          }
          break;
        case tk:
          if (l === "@") {
            if (s) {
              o = "%40" + o;
            }
            s = true;
            h = d(o);
            var u;
            var l;
            var g;
            var m;
            var y;
            for (var h, v = 0; v < h.length; v++) {
              const I = h[v];
              if (I === ":" && !c) {
                c = true;
                continue;
              }
              const w = tg(I, tf);
              if (c) {
                this.password += w;
              } else {
                this.username += w;
              }
            }
            o = "";
          } else if (
            l === n ||
            l === "/" ||
            l === "?" ||
            l === "#" ||
            (l === "\\" && this.isSpecial())
          ) {
            if (s && o === "") {
              return "Invalid authority";
            }
            a -= d(o).length + 1;
            o = "";
            i = tD;
          } else {
            o += l;
          }
          break;
        case tD:
        case tx:
          if (e && this.scheme === "file") {
            i = tR;
            continue;
          }
          if (l !== ":" || A) {
            if (
              l === n ||
              l === "/" ||
              l === "?" ||
              l === "#" ||
              (l === "\\" && this.isSpecial())
            ) {
              if (this.isSpecial() && o === "") {
                return j;
              }
              if (
                e &&
                o === "" &&
                (this.includesCredentials() || this.port !== null)
              ) {
                return;
              }
              if ((g = this.parseHost(o))) {
                return g;
              }
              o = "";
              i = tK;
              if (e) {
                return;
              }
              continue;
            } else {
              if (l === "[") {
                A = true;
              } else if (l === "]") {
                A = false;
              }
              o += l;
            }
          } else {
            if (o === "") {
              return j;
            }
            if ((g = this.parseHost(o))) {
              return g;
            }
            o = "";
            i = tF;
            if (e === tx) {
              return;
            }
          }
          break;
        case tF:
          if (K(X, l)) {
            o += l;
          } else {
            if (
              !(
                l === n ||
                l === "/" ||
                l === "?" ||
                l === "#" ||
                (l === "\\" && this.isSpecial())
              ) &&
              !e
            ) {
              return P;
            }
            if (o !== "") {
              const C = s_parseInt(o, 10);
              if (C > 65535) {
                return P;
              }
              this.port = this.isSpecial() && C === td[this.scheme] ? null : C;
              o = "";
            }
            if (e) {
              return;
            }
            i = tK;
            continue;
          }
          break;
        case tQ:
          this.scheme = "file";
          if (l === "/" || l === "\\") {
            i = tN;
          } else if (r && r.scheme === "file") {
            switch (l) {
              case n:
                this.host = r.host;
                this.path = p(r.path);
                this.query = r.query;
                break;
              case "?":
                this.host = r.host;
                this.path = p(r.path);
                this.query = "";
                i = tT;
                break;
              case "#":
                this.host = r.host;
                this.path = p(r.path);
                this.query = r.query;
                this.fragment = "";
                i = tY;
                break;
              default:
                if (!tm(G(p(u, a), ""))) {
                  this.host = r.host;
                  this.path = p(r.path);
                  this.shortenPath();
                }
                i = tG;
                continue;
            }
          } else {
            i = tG;
            continue;
          }
          break;
        case tN:
          if (l === "/" || l === "\\") {
            i = tR;
            break;
          }
          if (r && r.scheme === "file" && !tm(G(p(u, a), ""))) {
            if (tp(r.path[0], true)) {
              Y(this.path, r.path[0]);
            } else {
              this.host = r.host;
            }
          }
          i = tG;
          continue;
        case tR:
          if (l === n || l === "/" || l === "\\" || l === "?" || l === "#") {
            if (!e && tp(o)) {
              i = tG;
            } else if (o === "") {
              this.host = "";
              if (e) {
                return;
              }
              i = tK;
            } else {
              if ((g = this.parseHost(o))) {
                return g;
              }
              if (this.host === "localhost") {
                this.host = "";
              }
              if (e) {
                return;
              }
              o = "";
              i = tK;
            }
            continue;
          }
          o += l;
          break;
        case tK:
          if (this.isSpecial()) {
            i = tG;
            if (l !== "/" && l !== "\\") {
              continue;
            }
          } else if (e || l !== "?") {
            if (e || l !== "#") {
              if (l !== n && ((i = tG), l !== "/")) {
                continue;
              }
            } else {
              this.fragment = "";
              i = tY;
            }
          } else {
            this.query = "";
            i = tT;
          }
          break;
        case tG:
          if (
            l === n ||
            l === "/" ||
            (l === "\\" && this.isSpecial()) ||
            (!e && (l === "?" || l === "#"))
          ) {
            if (
              (m = L((m = o))) === ".." ||
              m === "%2e." ||
              m === ".%2e" ||
              m === "%2e%2e"
            ) {
              this.shortenPath();
              if (!(l === "/" || (l === "\\" && this.isSpecial()))) {
                Y(this.path, "");
              }
            } else if ((y = o) === "." || L(y) === "%2e") {
              if (!(l === "/" || (l === "\\" && this.isSpecial()))) {
                Y(this.path, "");
              }
            } else {
              if (this.scheme === "file" && !this.path.length && tp(o)) {
                if (this.host) {
                  this.host = "";
                }
                o = R(o, 0) + ":";
              }
              Y(this.path, o);
            }
            o = "";
            if (this.scheme === "file" && (l === n || l === "?" || l === "#")) {
              while (this.path.length > 1 && this.path[0] === "") {
                W(this.path);
              }
            }
            if (l === "?") {
              this.query = "";
              i = tT;
            } else if (l === "#") {
              this.fragment = "";
              i = tY;
            }
          } else {
            o += tg(l, th);
          }
          break;
        case tO:
          switch (l) {
            case "?":
              this.query = "";
              i = tT;
              break;
            case "#":
              this.fragment = "";
              i = tY;
              break;
            default:
              if (l !== n) {
                this.path[0] += tg(l, tu);
              }
          }
          break;
        case tT:
          if (e || l !== "#") {
            if (l !== n) {
              if (l === "'" && this.isSpecial()) {
                this.query += "%27";
              } else if (l === "#") {
                this.query += "%23";
              } else {
                this.query += tg(l, tu);
              }
            }
          } else {
            this.fragment = "";
            i = tY;
          }
          break;
        case tY:
          if (l !== n) {
            this.fragment += tg(l, tl);
          }
      }
      a++;
    }
  },
  parseHost: function (t) {
    let e;
    let r;
    let n;
    if (R(t, 0) === "[") {
      if (R(t, t.length - 1) !== "]" || !(e = ts(J(t, 1, -1)))) {
        return j;
      }
      this.host = e;
    } else if (this.isSpecial()) {
      if (K(te, (t = y(t))) || (e = to(t)) === null) {
        return j;
      }
      this.host = e;
    } else {
      if (K(tr, t)) {
        return j;
      }
      e = "";
      r = d(t);
      for (n = 0; n < r.length; n++) {
        e += tg(r[n], tu);
      }
      this.host = e;
    }
  },
  cannotHaveUsernamePasswordPort: function () {
    return !this.host || this.cannotBeABaseURL || this.scheme === "file";
  },
  includesCredentials: function () {
    return this.username !== "" || this.password !== "";
  },
  isSpecial: function () {
    return f(td, this.scheme);
  },
  shortenPath: function () {
    const path = this.path;
    const t_length = path.length;
    if (
      t_length &&
      (this.scheme !== "file" || t_length !== 1 || !tp(path[0], true))
    ) {
      path.length--;
    }
  },
  serialize: function () {
    const scheme = this.scheme;
    const username = this.username;
    const password = this.password;
    const host = this.host;
    const port = this.port;
    const path = this.path;
    const query = this.query;
    const fragment = this.fragment;
    let A = scheme + ":";
    if (host !== null) {
      A += "//";
      if (this.includesCredentials()) {
        A += `${username + (password ? ":" + password : "")}@`;
      }
      A += tc(host);
      if (port !== null) {
        A += ":" + port;
      }
    } else if (scheme === "file") {
      A += "//";
    }
    A += this.cannotBeABaseURL
      ? path[0]
      : path.length
        ? "/" + G(path, "/")
        : "";
    if (query !== null) {
      A += "?" + query;
    }
    if (fragment !== null) {
      A += "#" + fragment;
    }
    return A;
  },
  setHref: function (t) {
    const e = this.parse(t);
    if (e) {
      throw s_TypeError(e);
    }
    this.searchParams.update();
  },
  getOrigin: function () {
    const scheme = this.scheme;
    const port = this.port;
    if (scheme === "blob") {
      try {
        return new URL(scheme.path[0]).origin;
      } catch (t) {
        return "null";
      }
    }
    if (scheme !== "file" && this.isSpecial()) {
      return scheme + "://" + tc(this.host) + (port !== null ? ":" + port : "");
    }
    return "null";
  },
  getProtocol: function () {
    return this.scheme + ":";
  },
  setProtocol: function (t) {
    this.parse(b(t) + ":", ty);
  },
  getUsername: function () {
    return this.username;
  },
  setUsername: function (t) {
    const e = d(b(t));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.username = "";
      for (let r = 0; r < e.length; r++) {
        this.username += tg(e[r], tf);
      }
    }
  },
  getPassword: function () {
    return this.password;
  },
  setPassword: function (t) {
    const e = d(b(t));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.password = "";
      for (let r = 0; r < e.length; r++) {
        this.password += tg(e[r], tf);
      }
    }
  },
  getHost: function () {
    const host = this.host;
    const port = this.port;
    if (host === null) {
      return "";
    }
    if (port === null) {
      return tc(host);
    }
    return tc(host) + ":" + port;
  },
  setHost: function (t) {
    if (!this.cannotBeABaseURL) {
      this.parse(t, tD);
    }
  },
  getHostname: function () {
    const host = this.host;
    if (host === null) {
      return "";
    }
    return tc(host);
  },
  setHostname: function (t) {
    if (!this.cannotBeABaseURL) {
      this.parse(t, tx);
    }
  },
  getPort: function () {
    const port = this.port;
    if (port === null) {
      return "";
    }
    return b(port);
  },
  setPort: function (t) {
    if (!this.cannotHaveUsernamePasswordPort()) {
      if ((t = b(t)) === "") {
        this.port = null;
      } else {
        this.parse(t, tF);
      }
    }
  },
  getPathname: function () {
    const path = this.path;
    if (this.cannotBeABaseURL) {
      return path[0];
    }
    if (path.length) {
      return "/" + G(path, "/");
    }
    return "";
  },
  setPathname: function (t) {
    if (!this.cannotBeABaseURL) {
      this.path = [];
      this.parse(t, tK);
    }
  },
  getSearch: function () {
    const query = this.query;
    if (query) {
      return "?" + query;
    }
    return "";
  },
  setSearch: function (t) {
    if ((t = b(t)) === "") {
      this.query = null;
    } else {
      if (R(t, 0) === "?") {
        t = J(t, 1);
      }
      this.query = "";
      this.parse(t, tT);
    }
    this.searchParams.update();
  },
  getSearchParams: function () {
    return this.searchParams.facade;
  },
  getHash: function () {
    const fragment = this.fragment;
    if (fragment) {
      return "#" + fragment;
    }
    return "";
  },
  setHash: function (t) {
    if ((t = b(t)) === "") {
      this.fragment = null;
      return;
    }
    if (R(t, 0) === "#") {
      t = J(t, 1);
    }
    this.fragment = "";
    this.parse(t, tY);
  },
  update: function () {
    this.query = this.searchParams.serialize() || null;
  },
};
var URL = function (t) {
  const e = h(this, tW_prototype);
  const r = I(arguments.length, 1) > 1 ? arguments[1] : undefined;
  const n = C_set(e, new tU(t, false, r));
  if (!a) {
    e.href = n.serialize();
    e.origin = n.getOrigin();
    e.protocol = n.getProtocol();
    e.username = n.getUsername();
    e.password = n.getPassword();
    e.host = n.getHost();
    e.hostname = n.getHostname();
    e.port = n.getPort();
    e.pathname = n.getPathname();
    e.search = n.getSearch();
    e.searchParams = n.getSearchParams();
    e.hash = n.getHash();
  }
};
var tW_prototype = URL.prototype;
const tJ = (t, e) => ({
  get: function () {
    return S(this)[t]();
  },
  set:
    e &&
    function (t) {
      return S(this)[e](t);
    },
  configurable: true,
  enumerable: true,
});
if (a) {
  l(tW_prototype, "href", tJ("serialize", "setHref"));
  l(tW_prototype, "origin", tJ("getOrigin"));
  l(tW_prototype, "protocol", tJ("getProtocol", "setProtocol"));
  l(tW_prototype, "username", tJ("getUsername", "setUsername"));
  l(tW_prototype, "password", tJ("getPassword", "setPassword"));
  l(tW_prototype, "host", tJ("getHost", "setHost"));
  l(tW_prototype, "hostname", tJ("getHostname", "setHostname"));
  l(tW_prototype, "port", tJ("getPort", "setPort"));
  l(tW_prototype, "pathname", tJ("getPathname", "setPathname"));
  l(tW_prototype, "search", tJ("getSearch", "setSearch"));
  l(tW_prototype, "searchParams", tJ("getSearchParams"));
  l(tW_prototype, "hash", tJ("getHash", "setHash"));
}
u(
  tW_prototype,
  "toJSON",
  function () {
    return S(this).serialize();
  },
  {
    enumerable: true,
  },
);
u(
  tW_prototype,
  "toString",
  function () {
    return S(this).serialize();
  },
  {
    enumerable: true,
  },
);
if (s_URL) {
  const tL = s_URL.createObjectURL;
  const tH = s_URL.revokeObjectURL;
  if (tL) {
    u(URL, "createObjectURL", A(tL, s_URL));
  }
  if (tH) {
    u(URL, "revokeObjectURL", A(tH, s_URL));
  }
}
v(URL, "URL");
i(
  {
    global: true,
    constructor: true,
    forced: !o,
    sham: !a,
  },
  {
    URL,
  },
);
