import "./module-X4.js";
import o from "./module-A.js";
import i from "./module-r9.js";
import a from "./module-BZO.js";
import s from "./module-J.js";
import u from "./module-WG_2.js";
import c from "./module-O9.js";
import f from "./module-vE.js";
import h from "./module-I.js";
import l from "./module-A2.js";
import v from "./module-D_2.js";
import p from "./module-Eu.js";
import d from "./module-zd.js";
import g from "./module-wL.js";
import _y from "./module-iv.js";
import b from "./module-zyf.js";
import m from "./module-ng.js";
import A from "./module-HZ.js";
import x from "./module-eXf.js";
import w from "./module-pm.js";
import S from "./module-b.js";
let n;
const _y_codeAt = _y.codeAt;
const S_set = S.set;
const O = S.getterFor("URL");
const w_URLSearchParams = w.URLSearchParams;
const w_getState = w.getState;
const s_URL = s.URL;
const s_TypeError = s.TypeError;
const s_parseInt = s.parseInt;
const F = c("".charAt);
const P = c(/./.exec);
const C = c([].join);
const D = c((1).toString);
const L = c([].pop);
const U = c([].push);
const V = c("".replace);
const Y = c([].shift);
const B = c("".split);
const W = c("".slice);
const X = c("".toLowerCase);
const G = c([].unshift);
const J = "Invalid scheme";
const _ = "Invalid host";
const z = "Invalid port";
const q = /[a-z]/i;
const K = /[\d+-.a-z]/i;
const H = /\d/;
const Q = /^0x/i;
const Z = /^[0-7]+$/;
const $ = /^\d+$/;
const tt = /^[\da-f]+$/i;
const tr = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
const te = /[\0\t\n\r #/:<>?@[\\\]^|]/;
const tn = /^[\u0000-\u0020]+/;
const to = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
const ti = /[\t\n\r]/g;
const ta = (t) => {
  let r;
  let e;
  let n;
  let o;
  let i;
  let a;
  let s;
  const u = B(t, ".");
  if (u.length && u[u.length - 1] === "") {
    u.length--;
  }
  if ((r = u.length) > 4) {
    return t;
  }
  n = 0;
  for (e = []; n < r; n++) {
    if ((o = u[n]) === "") {
      return t;
    }
    i = 10;
    if (o.length > 1 && F(o, 0) === "0") {
      i = P(Q, o) ? 16 : 8;
      o = W(o, i === 8 ? 1 : 2);
    }
    if (o === "") {
      a = 0;
    } else {
      if (!P(i === 10 ? $ : i === 8 ? Z : tt, o)) {
        return t;
      }
      a = s_parseInt(o, i);
    }
    U(e, a);
  }
  for (n = 0; n < r; n++) {
    a = e[n];
    if (n === r - 1) {
      if (a >= 256 ** (5 - r)) {
        return null;
      }
    } else if (a > 255) {
      return null;
    }
  }
  s = L(e);
  for (n = 0; n < e.length; n++) {
    s += e[n] * 256 ** (3 - n);
  }
  return s;
};
const ts = (t) => {
  let r;
  let e;
  let n;
  let o;
  let i;
  let a;
  let s;
  const u = [0, 0, 0, 0, 0, 0, 0, 0];
  let c = 0;
  let f = null;
  let h = 0;
  const l = () => F(t, h);
  if (l() === ":") {
    if (F(t, 1) !== ":") {
      return;
    }
    h += 2;
    f = ++c;
  }
  while (l()) {
    if (c === 8) {
      return;
    }
    if (l() === ":") {
      if (f !== null) {
        return;
      }
      h++;
      f = ++c;
      continue;
    }
    for (r = e = 0; e < 4 && P(tt, l());) {
      r = 16 * r + s_parseInt(l(), 16);
      h++;
      e++;
    }
    if (l() === ".") {
      if (e === 0 || ((h -= e), c > 6)) {
        return;
      }
      for (n = 0; l();) {
        o = null;
        if (n > 0) {
          if (l() !== "." || !(n < 4)) {
            return;
          } else {
            h++;
          }
        }
        if (!P(H, l())) {
          return;
        }
        while (P(H, l())) {
          i = s_parseInt(l(), 10);
          if (o === null) {
            o = i;
          } else {
            if (o === 0) {
              return;
            }
            o = 10 * o + i;
          }
          if (o > 255) {
            return;
          }
          h++;
        }
        u[c] = 256 * u[c] + o;
        if (++n == 2 || n === 4) {
          c++;
        }
      }
      if (n !== 4) {
        return;
      }
      break;
    }
    if (l() === ":") {
      h++;
      if (!l()) {
        return;
      }
    } else if (l()) {
      return;
    }
    u[c++] = r;
  }
  if (f !== null) {
    a = c - f;
    for (c = 7; c !== 0 && a > 0;) {
      s = u[c];
      u[c--] = u[f + a - 1];
      u[f + --a] = s;
    }
  } else if (c !== 8) {
    return;
  }
  return u;
};
const tu = (t) => {
  let r = null;
  let e = 1;
  let n = null;
  let o = 0;
  for (let i = 0; i < 8; i++) {
    if (t[i] !== 0) {
      if (o > e) {
        r = n;
        e = o;
      }
      n = null;
      o = 0;
    } else {
      if (n === null) {
        n = i;
      }
      ++o;
    }
  }
  if (o > e) {
    r = n;
    e = o;
  }
  return r;
};
const tc = (t) => {
  let r;
  let e;
  let n;
  let o;
  if (typeof t === "number") {
    e = 0;
    for (r = []; e < 4; e++) {
      G(r, t % 256);
      t = Math.floor(t / 256);
    }
    return C(r, ".");
  }
  if (typeof t === "object") {
    r = "";
    n = tu(t);
    for (e = 0; e < 8; e++) {
      if (!o || t[e] !== 0) {
        if (o) {
          o = false;
        }
        if (n === e) {
          r += e ? ":" : "::";
          o = true;
        } else {
          r += D(t[e], 16);
          if (e < 7) {
            r += ":";
          }
        }
      }
    }
    return "[" + r + "]";
  }
  return t;
};
const tf = {};
const th = p({}, tf, {
  " ": 1,
  '"': 1,
  "<": 1,
  ">": 1,
  "`": 1,
});
const tl = p({}, th, {
  "#": 1,
  "?": 1,
  "{": 1,
  "}": 1,
});
const tv = p({}, tl, {
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
const tp = (t, r) => {
  const e = _y_codeAt(t, 0);
  if (e > 32 && e < 127 && !v(r, t)) {
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
const tg = (t, r) => {
  let e;
  return (
    t.length === 2 &&
    P(q, F(t, 0)) &&
    ((e = F(t, 1)) === ":" || (!r && e === "|"))
  );
};
const ty = (t) => {
  let r;
  return (
    t.length > 1 &&
    tg(W(t, 0, 2)) &&
    (t.length === 2 ||
      (r = F(t, 2)) === "/" ||
      r === "\\" ||
      r === "?" ||
      r === "#")
  );
};
const tb = {};
const tm = {};
const tA = {};
const tx = {};
const tw = {};
const tS = {};
const tE = {};
const tO = {};
const tR = {};
const tM = {};
const tI = {};
const tk = {};
const tT = {};
const tj = {};
const tN = {};
const tF = {};
const tP = {};
const tC = {};
const tD = {};
const tL = {};
const tU = {};
const tV = function (t, r, e) {
  let n;
  let o;
  let i;
  const a = m(t);
  if (r) {
    if ((o = this.parse(a))) {
      throw s_TypeError(o);
    }
    this.searchParams = null;
  } else {
    if (e !== undefined) {
      n = new tV(e, true);
    }
    if ((o = this.parse(a, null, n))) {
      throw s_TypeError(o);
    }
    (i = w_getState(new w_URLSearchParams())).bindURL(this);
    this.searchParams = i;
  }
};
tV.prototype = {
  type: "URL",
  parse: function (t, r, e) {
    let o = r || tb;
    let i = 0;
    let a = "";
    let s = false;
    let u = false;
    let c = false;
    t = m(t);
    if (!r) {
      this.scheme = "";
      this.username = "";
      this.password = "";
      this.host = null;
      this.port = null;
      this.path = [];
      this.query = null;
      this.fragment = null;
      this.cannotBeABaseURL = false;
      t = V(t, tn, "");
      t = V(t, to, "$1");
    }
    for (f = d((t = V(t, ti, ""))); i <= f.length;) {
      h = f[i];
      switch (o) {
        case tb:
          if (h && P(q, h)) {
            a += X(h);
            o = tm;
          } else {
            if (r) {
              return J;
            }
            o = tA;
            continue;
          }
          break;
        case tm:
          if (h && (P(K, h) || h === "+" || h === "-" || h === ".")) {
            a += X(h);
          } else if (h === ":") {
            if (
              r &&
              (this.isSpecial() !== v(td, a) ||
                (a === "file" &&
                  (this.includesCredentials() || this.port !== null)) ||
                (this.scheme === "file" && !this.host))
            ) {
              return;
            }
            this.scheme = a;
            if (r) {
              if (this.isSpecial() && td[this.scheme] === this.port) {
                this.port = null;
              }
              return;
            }
            a = "";
            if (this.scheme === "file") {
              o = tj;
            } else if (this.isSpecial() && e && e.scheme === this.scheme) {
              o = tx;
            } else if (this.isSpecial()) {
              o = tO;
            } else if (f[i + 1] === "/") {
              o = tw;
              i++;
            } else {
              this.cannotBeABaseURL = true;
              U(this.path, "");
              o = tD;
            }
          } else {
            if (r) {
              return J;
            }
            a = "";
            o = tA;
            i = 0;
            continue;
          }
          break;
        case tA:
          if (!e || (e.cannotBeABaseURL && h !== "#")) {
            return J;
          }
          if (e.cannotBeABaseURL && h === "#") {
            this.scheme = e.scheme;
            this.path = g(e.path);
            this.query = e.query;
            this.fragment = "";
            this.cannotBeABaseURL = true;
            o = tU;
            break;
          }
          o = e.scheme === "file" ? tj : tS;
          continue;
        case tx:
          if (h === "/" && f[i + 1] === "/") {
            o = tR;
            i++;
          } else {
            o = tS;
            continue;
          }
          break;
        case tw:
          if (h === "/") {
            o = tM;
            break;
          }
          o = tC;
          continue;
        case tS:
          this.scheme = e.scheme;
          if (h === n) {
            this.username = e.username;
            this.password = e.password;
            this.host = e.host;
            this.port = e.port;
            this.path = g(e.path);
            this.query = e.query;
          } else if (h === "/" || (h === "\\" && this.isSpecial())) {
            o = tE;
          } else if (h === "?") {
            this.username = e.username;
            this.password = e.password;
            this.host = e.host;
            this.port = e.port;
            this.path = g(e.path);
            this.query = "";
            o = tL;
          } else if (h === "#") {
            this.username = e.username;
            this.password = e.password;
            this.host = e.host;
            this.port = e.port;
            this.path = g(e.path);
            this.query = e.query;
            this.fragment = "";
            o = tU;
          } else {
            this.username = e.username;
            this.password = e.password;
            this.host = e.host;
            this.port = e.port;
            this.path = g(e.path);
            this.path.length--;
            o = tC;
            continue;
          }
          break;
        case tE:
          if (this.isSpecial() && (h === "/" || h === "\\")) {
            o = tR;
          } else if (h === "/") {
            o = tM;
          } else {
            this.username = e.username;
            this.password = e.password;
            this.host = e.host;
            this.port = e.port;
            o = tC;
            continue;
          }
          break;
        case tO:
          o = tR;
          if (h !== "/" || F(a, i + 1) !== "/") {
            continue;
          }
          i++;
          break;
        case tR:
          if (h !== "/" && h !== "\\") {
            o = tM;
            continue;
          }
          break;
        case tM:
          if (h === "@") {
            if (s) {
              a = "%40" + a;
            }
            s = true;
            l = d(a);
            var f;
            var h;
            var p;
            var y;
            var b;
            for (var l, A = 0; A < l.length; A++) {
              const x = l[A];
              if (x === ":" && !c) {
                c = true;
                continue;
              }
              const w = tp(x, tv);
              if (c) {
                this.password += w;
              } else {
                this.username += w;
              }
            }
            a = "";
          } else if (
            h === n ||
            h === "/" ||
            h === "?" ||
            h === "#" ||
            (h === "\\" && this.isSpecial())
          ) {
            if (s && a === "") {
              return "Invalid authority";
            }
            i -= d(a).length + 1;
            a = "";
            o = tI;
          } else {
            a += h;
          }
          break;
        case tI:
        case tk:
          if (r && this.scheme === "file") {
            o = tF;
            continue;
          }
          if (h !== ":" || u) {
            if (
              h === n ||
              h === "/" ||
              h === "?" ||
              h === "#" ||
              (h === "\\" && this.isSpecial())
            ) {
              if (this.isSpecial() && a === "") {
                return _;
              }
              if (
                r &&
                a === "" &&
                (this.includesCredentials() || this.port !== null)
              ) {
                return;
              }
              if ((p = this.parseHost(a))) {
                return p;
              }
              a = "";
              o = tP;
              if (r) {
                return;
              }
              continue;
            } else {
              if (h === "[") {
                u = true;
              } else if (h === "]") {
                u = false;
              }
              a += h;
            }
          } else {
            if (a === "") {
              return _;
            }
            if ((p = this.parseHost(a))) {
              return p;
            }
            a = "";
            o = tT;
            if (r === tk) {
              return;
            }
          }
          break;
        case tT:
          if (P(H, h)) {
            a += h;
          } else {
            if (
              !(
                h === n ||
                h === "/" ||
                h === "?" ||
                h === "#" ||
                (h === "\\" && this.isSpecial())
              ) &&
              !r
            ) {
              return z;
            }
            if (a !== "") {
              const S = s_parseInt(a, 10);
              if (S > 65535) {
                return z;
              }
              this.port = this.isSpecial() && S === td[this.scheme] ? null : S;
              a = "";
            }
            if (r) {
              return;
            }
            o = tP;
            continue;
          }
          break;
        case tj:
          this.scheme = "file";
          if (h === "/" || h === "\\") {
            o = tN;
          } else if (e && e.scheme === "file") {
            switch (h) {
              case n:
                this.host = e.host;
                this.path = g(e.path);
                this.query = e.query;
                break;
              case "?":
                this.host = e.host;
                this.path = g(e.path);
                this.query = "";
                o = tL;
                break;
              case "#":
                this.host = e.host;
                this.path = g(e.path);
                this.query = e.query;
                this.fragment = "";
                o = tU;
                break;
              default:
                if (!ty(C(g(f, i), ""))) {
                  this.host = e.host;
                  this.path = g(e.path);
                  this.shortenPath();
                }
                o = tC;
                continue;
            }
          } else {
            o = tC;
            continue;
          }
          break;
        case tN:
          if (h === "/" || h === "\\") {
            o = tF;
            break;
          }
          if (e && e.scheme === "file" && !ty(C(g(f, i), ""))) {
            if (tg(e.path[0], true)) {
              U(this.path, e.path[0]);
            } else {
              this.host = e.host;
            }
          }
          o = tC;
          continue;
        case tF:
          if (h === n || h === "/" || h === "\\" || h === "?" || h === "#") {
            if (!r && tg(a)) {
              o = tC;
            } else if (a === "") {
              this.host = "";
              if (r) {
                return;
              }
              o = tP;
            } else {
              if ((p = this.parseHost(a))) {
                return p;
              }
              if (this.host === "localhost") {
                this.host = "";
              }
              if (r) {
                return;
              }
              a = "";
              o = tP;
            }
            continue;
          }
          a += h;
          break;
        case tP:
          if (this.isSpecial()) {
            o = tC;
            if (h !== "/" && h !== "\\") {
              continue;
            }
          } else if (r || h !== "?") {
            if (r || h !== "#") {
              if (h !== n && ((o = tC), h !== "/")) {
                continue;
              }
            } else {
              this.fragment = "";
              o = tU;
            }
          } else {
            this.query = "";
            o = tL;
          }
          break;
        case tC:
          if (
            h === n ||
            h === "/" ||
            (h === "\\" && this.isSpecial()) ||
            (!r && (h === "?" || h === "#"))
          ) {
            if (
              (y = X((y = a))) === ".." ||
              y === "%2e." ||
              y === ".%2e" ||
              y === "%2e%2e"
            ) {
              this.shortenPath();
              if (!(h === "/" || (h === "\\" && this.isSpecial()))) {
                U(this.path, "");
              }
            } else if ((b = a) === "." || X(b) === "%2e") {
              if (!(h === "/" || (h === "\\" && this.isSpecial()))) {
                U(this.path, "");
              }
            } else {
              if (this.scheme === "file" && !this.path.length && tg(a)) {
                if (this.host) {
                  this.host = "";
                }
                a = F(a, 0) + ":";
              }
              U(this.path, a);
            }
            a = "";
            if (this.scheme === "file" && (h === n || h === "?" || h === "#")) {
              while (this.path.length > 1 && this.path[0] === "") {
                Y(this.path);
              }
            }
            if (h === "?") {
              this.query = "";
              o = tL;
            } else if (h === "#") {
              this.fragment = "";
              o = tU;
            }
          } else {
            a += tp(h, tl);
          }
          break;
        case tD:
          switch (h) {
            case "?":
              this.query = "";
              o = tL;
              break;
            case "#":
              this.fragment = "";
              o = tU;
              break;
            default:
              if (h !== n) {
                this.path[0] += tp(h, tf);
              }
          }
          break;
        case tL:
          if (r || h !== "#") {
            if (h !== n) {
              if (h === "'" && this.isSpecial()) {
                this.query += "%27";
              } else if (h === "#") {
                this.query += "%23";
              } else {
                this.query += tp(h, tf);
              }
            }
          } else {
            this.fragment = "";
            o = tU;
          }
          break;
        case tU:
          if (h !== n) {
            this.fragment += tp(h, th);
          }
      }
      i++;
    }
  },
  parseHost: function (t) {
    let r;
    let e;
    let n;
    if (F(t, 0) === "[") {
      if (F(t, t.length - 1) !== "]" || !(r = ts(W(t, 1, -1)))) {
        return _;
      }
      this.host = r;
    } else if (this.isSpecial()) {
      if (P(tr, (t = b(t))) || (r = ta(t)) === null) {
        return _;
      }
      this.host = r;
    } else {
      if (P(te, t)) {
        return _;
      }
      r = "";
      e = d(t);
      for (n = 0; n < e.length; n++) {
        r += tp(e[n], tf);
      }
      this.host = r;
    }
  },
  cannotHaveUsernamePasswordPort: function () {
    return !this.host || this.cannotBeABaseURL || this.scheme === "file";
  },
  includesCredentials: function () {
    return this.username !== "" || this.password !== "";
  },
  isSpecial: function () {
    return v(td, this.scheme);
  },
  shortenPath: function () {
    const path = this.path;
    const t_length = path.length;
    if (
      t_length &&
      (this.scheme !== "file" || t_length !== 1 || !tg(path[0], true))
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
    let u = scheme + ":";
    if (host !== null) {
      u += "//";
      if (this.includesCredentials()) {
        u += `${username + (password ? ":" + password : "")}@`;
      }
      u += tc(host);
      if (port !== null) {
        u += ":" + port;
      }
    } else if (scheme === "file") {
      u += "//";
    }
    u += this.cannotBeABaseURL
      ? path[0]
      : path.length
        ? "/" + C(path, "/")
        : "";
    if (query !== null) {
      u += "?" + query;
    }
    if (fragment !== null) {
      u += "#" + fragment;
    }
    return u;
  },
  setHref: function (t) {
    const r = this.parse(t);
    if (r) {
      throw s_TypeError(r);
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
    this.parse(m(t) + ":", tb);
  },
  getUsername: function () {
    return this.username;
  },
  setUsername: function (t) {
    const r = d(m(t));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.username = "";
      for (let e = 0; e < r.length; e++) {
        this.username += tp(r[e], tv);
      }
    }
  },
  getPassword: function () {
    return this.password;
  },
  setPassword: function (t) {
    const r = d(m(t));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.password = "";
      for (let e = 0; e < r.length; e++) {
        this.password += tp(r[e], tv);
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
      this.parse(t, tI);
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
      this.parse(t, tk);
    }
  },
  getPort: function () {
    const port = this.port;
    if (port === null) {
      return "";
    }
    return m(port);
  },
  setPort: function (t) {
    if (!this.cannotHaveUsernamePasswordPort()) {
      if ((t = m(t)) === "") {
        this.port = null;
      } else {
        this.parse(t, tT);
      }
    }
  },
  getPathname: function () {
    const path = this.path;
    if (this.cannotBeABaseURL) {
      return path[0];
    }
    if (path.length) {
      return "/" + C(path, "/");
    }
    return "";
  },
  setPathname: function (t) {
    if (!this.cannotBeABaseURL) {
      this.path = [];
      this.parse(t, tP);
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
    if ((t = m(t)) === "") {
      this.query = null;
    } else {
      if (F(t, 0) === "?") {
        t = W(t, 1);
      }
      this.query = "";
      this.parse(t, tL);
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
    if ((t = m(t)) === "") {
      this.fragment = null;
      return;
    }
    if (F(t, 0) === "#") {
      t = W(t, 1);
    }
    this.fragment = "";
    this.parse(t, tU);
  },
  update: function () {
    this.query = this.searchParams.serialize() || null;
  },
};
var URL = function (t) {
  const r = l(this, tY_prototype);
  const e = x(arguments.length, 1) > 1 ? arguments[1] : undefined;
  const n = S_set(r, new tV(t, false, e));
  if (!i) {
    r.href = n.serialize();
    r.origin = n.getOrigin();
    r.protocol = n.getProtocol();
    r.username = n.getUsername();
    r.password = n.getPassword();
    r.host = n.getHost();
    r.hostname = n.getHostname();
    r.port = n.getPort();
    r.pathname = n.getPathname();
    r.search = n.getSearch();
    r.searchParams = n.getSearchParams();
    r.hash = n.getHash();
  }
};
var tY_prototype = URL.prototype;
const tW = (t, r) => ({
  get: function () {
    return O(this)[t]();
  },
  set:
    r &&
    function (t) {
      return O(this)[r](t);
    },
  configurable: true,
  enumerable: true,
});
if (i) {
  h(tY_prototype, "href", tW("serialize", "setHref"));
  h(tY_prototype, "origin", tW("getOrigin"));
  h(tY_prototype, "protocol", tW("getProtocol", "setProtocol"));
  h(tY_prototype, "username", tW("getUsername", "setUsername"));
  h(tY_prototype, "password", tW("getPassword", "setPassword"));
  h(tY_prototype, "host", tW("getHost", "setHost"));
  h(tY_prototype, "hostname", tW("getHostname", "setHostname"));
  h(tY_prototype, "port", tW("getPort", "setPort"));
  h(tY_prototype, "pathname", tW("getPathname", "setPathname"));
  h(tY_prototype, "search", tW("getSearch", "setSearch"));
  h(tY_prototype, "searchParams", tW("getSearchParams"));
  h(tY_prototype, "hash", tW("getHash", "setHash"));
}
f(
  tY_prototype,
  "toJSON",
  function () {
    return O(this).serialize();
  },
  {
    enumerable: true,
  },
);
f(
  tY_prototype,
  "toString",
  function () {
    return O(this).serialize();
  },
  {
    enumerable: true,
  },
);
if (s_URL) {
  const tX = s_URL.createObjectURL;
  const tG = s_URL.revokeObjectURL;
  if (tX) {
    f(URL, "createObjectURL", u(tX, s_URL));
  }
  if (tG) {
    f(URL, "revokeObjectURL", u(tG, s_URL));
  }
}
A(URL, "URL");
o(
  {
    global: true,
    constructor: true,
    forced: !a,
    sham: !i,
  },
  {
    URL,
  },
);
