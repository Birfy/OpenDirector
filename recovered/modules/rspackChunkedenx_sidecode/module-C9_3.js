import "./module-X4_3.js";
import i from "./module-A_4.js";
import o from "./module-r9_3.js";
import s from "./module-BZO_3.js";
import a from "./module-J_4.js";
import u from "./module-WG_2_3.js";
import c from "./module-O9_3.js";
import f from "./module-vE_3.js";
import h from "./module-I_4.js";
import l from "./module-A2_4.js";
import v from "./module-D_2_3.js";
import p from "./module-Eu_4.js";
import d from "./module-zd_3.js";
import g from "./module-wL_3.js";
import _y from "./module-iv_3.js";
import b from "./module-zyf_3.js";
import m from "./module-ng_4.js";
import A from "./module-HZ_3.js";
import x from "./module-eXf_3.js";
import w from "./module-pm_3.js";
import S from "./module-b_3.js";
let n;
const _y_codeAt = _y.codeAt;
const S_set = S.set;
const O = S.getterFor("URL");
const w_URLSearchParams = w.URLSearchParams;
const w_getState = w.getState;
const a_URL = a.URL;
const a_TypeError = a.TypeError;
const a_parseInt = a.parseInt;
const F = c("".charAt);
const P = c(/./.exec);
const D = c([].join);
const C = c((1).toString);
const L = c([].pop);
const U = c([].push);
const V = c("".replace);
const Y = c([].shift);
const B = c("".split);
const X = c("".slice);
const W = c("".toLowerCase);
const G = c([].unshift);
const _ = "Invalid scheme";
const z = "Invalid host";
const J = "Invalid port";
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
const ti = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
const to = /[\t\n\r]/g;
const ts = (t) => {
  let r;
  let e;
  let n;
  let i;
  let o;
  let s;
  let a;
  const u = B(t, ".");
  if (u.length && u[u.length - 1] === "") {
    u.length--;
  }
  if ((r = u.length) > 4) {
    return t;
  }
  n = 0;
  for (e = []; n < r; n++) {
    if ((i = u[n]) === "") {
      return t;
    }
    o = 10;
    if (i.length > 1 && F(i, 0) === "0") {
      o = P(Q, i) ? 16 : 8;
      i = X(i, o === 8 ? 1 : 2);
    }
    if (i === "") {
      s = 0;
    } else {
      if (!P(o === 10 ? $ : o === 8 ? Z : tt, i)) {
        return t;
      }
      s = a_parseInt(i, o);
    }
    U(e, s);
  }
  for (n = 0; n < r; n++) {
    s = e[n];
    if (n === r - 1) {
      if (s >= 256 ** (5 - r)) {
        return null;
      }
    } else if (s > 255) {
      return null;
    }
  }
  a = L(e);
  for (n = 0; n < e.length; n++) {
    a += e[n] * 256 ** (3 - n);
  }
  return a;
};
const ta = (t) => {
  let r;
  let e;
  let n;
  let i;
  let o;
  let s;
  let a;
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
      r = 16 * r + a_parseInt(l(), 16);
      h++;
      e++;
    }
    if (l() === ".") {
      if (e === 0 || ((h -= e), c > 6)) {
        return;
      }
      for (n = 0; l();) {
        i = null;
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
          o = a_parseInt(l(), 10);
          if (i === null) {
            i = o;
          } else {
            if (i === 0) {
              return;
            }
            i = 10 * i + o;
          }
          if (i > 255) {
            return;
          }
          h++;
        }
        u[c] = 256 * u[c] + i;
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
    s = c - f;
    for (c = 7; c !== 0 && s > 0;) {
      a = u[c];
      u[c--] = u[f + s - 1];
      u[f + --s] = a;
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
  let i = 0;
  for (let o = 0; o < 8; o++) {
    if (t[o] !== 0) {
      if (i > e) {
        r = n;
        e = i;
      }
      n = null;
      i = 0;
    } else {
      if (n === null) {
        n = o;
      }
      ++i;
    }
  }
  if (i > e) {
    r = n;
    e = i;
  }
  return r;
};
const tc = (t) => {
  let r;
  let e;
  let n;
  let i;
  if (typeof t === "number") {
    e = 0;
    for (r = []; e < 4; e++) {
      G(r, t % 256);
      t = Math.floor(t / 256);
    }
    return D(r, ".");
  }
  if (typeof t === "object") {
    r = "";
    n = tu(t);
    for (e = 0; e < 8; e++) {
      if (!i || t[e] !== 0) {
        if (i) {
          i = false;
        }
        if (n === e) {
          r += e ? ":" : "::";
          i = true;
        } else {
          r += C(t[e], 16);
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
    tg(X(t, 0, 2)) &&
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
const tD = {};
const tC = {};
const tL = {};
const tU = {};
const tV = function (t, r, e) {
  let n;
  let i;
  let o;
  const s = m(t);
  if (r) {
    if ((i = this.parse(s))) {
      throw a_TypeError(i);
    }
    this.searchParams = null;
  } else {
    if (e !== undefined) {
      n = new tV(e, true);
    }
    if ((i = this.parse(s, null, n))) {
      throw a_TypeError(i);
    }
    (o = w_getState(new w_URLSearchParams())).bindURL(this);
    this.searchParams = o;
  }
};
tV.prototype = {
  type: "URL",
  parse: function (t, r, e) {
    let i = r || tb;
    let o = 0;
    let s = "";
    let a = false;
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
      t = V(t, ti, "$1");
    }
    for (f = d((t = V(t, to, ""))); o <= f.length;) {
      h = f[o];
      switch (i) {
        case tb:
          if (h && P(q, h)) {
            s += W(h);
            i = tm;
          } else {
            if (r) {
              return _;
            }
            i = tA;
            continue;
          }
          break;
        case tm:
          if (h && (P(K, h) || h === "+" || h === "-" || h === ".")) {
            s += W(h);
          } else if (h === ":") {
            if (
              r &&
              (this.isSpecial() !== v(td, s) ||
                (s === "file" &&
                  (this.includesCredentials() || this.port !== null)) ||
                (this.scheme === "file" && !this.host))
            ) {
              return;
            }
            this.scheme = s;
            if (r) {
              if (this.isSpecial() && td[this.scheme] === this.port) {
                this.port = null;
              }
              return;
            }
            s = "";
            if (this.scheme === "file") {
              i = tj;
            } else if (this.isSpecial() && e && e.scheme === this.scheme) {
              i = tx;
            } else if (this.isSpecial()) {
              i = tO;
            } else if (f[o + 1] === "/") {
              i = tw;
              o++;
            } else {
              this.cannotBeABaseURL = true;
              U(this.path, "");
              i = tC;
            }
          } else {
            if (r) {
              return _;
            }
            s = "";
            i = tA;
            o = 0;
            continue;
          }
          break;
        case tA:
          if (!e || (e.cannotBeABaseURL && h !== "#")) {
            return _;
          }
          if (e.cannotBeABaseURL && h === "#") {
            this.scheme = e.scheme;
            this.path = g(e.path);
            this.query = e.query;
            this.fragment = "";
            this.cannotBeABaseURL = true;
            i = tU;
            break;
          }
          i = e.scheme === "file" ? tj : tS;
          continue;
        case tx:
          if (h === "/" && f[o + 1] === "/") {
            i = tR;
            o++;
          } else {
            i = tS;
            continue;
          }
          break;
        case tw:
          if (h === "/") {
            i = tM;
            break;
          }
          i = tD;
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
            i = tE;
          } else if (h === "?") {
            this.username = e.username;
            this.password = e.password;
            this.host = e.host;
            this.port = e.port;
            this.path = g(e.path);
            this.query = "";
            i = tL;
          } else if (h === "#") {
            this.username = e.username;
            this.password = e.password;
            this.host = e.host;
            this.port = e.port;
            this.path = g(e.path);
            this.query = e.query;
            this.fragment = "";
            i = tU;
          } else {
            this.username = e.username;
            this.password = e.password;
            this.host = e.host;
            this.port = e.port;
            this.path = g(e.path);
            this.path.length--;
            i = tD;
            continue;
          }
          break;
        case tE:
          if (this.isSpecial() && (h === "/" || h === "\\")) {
            i = tR;
          } else if (h === "/") {
            i = tM;
          } else {
            this.username = e.username;
            this.password = e.password;
            this.host = e.host;
            this.port = e.port;
            i = tD;
            continue;
          }
          break;
        case tO:
          i = tR;
          if (h !== "/" || F(s, o + 1) !== "/") {
            continue;
          }
          o++;
          break;
        case tR:
          if (h !== "/" && h !== "\\") {
            i = tM;
            continue;
          }
          break;
        case tM:
          if (h === "@") {
            if (a) {
              s = "%40" + s;
            }
            a = true;
            l = d(s);
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
            s = "";
          } else if (
            h === n ||
            h === "/" ||
            h === "?" ||
            h === "#" ||
            (h === "\\" && this.isSpecial())
          ) {
            if (a && s === "") {
              return "Invalid authority";
            }
            o -= d(s).length + 1;
            s = "";
            i = tI;
          } else {
            s += h;
          }
          break;
        case tI:
        case tk:
          if (r && this.scheme === "file") {
            i = tF;
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
              if (this.isSpecial() && s === "") {
                return z;
              }
              if (
                r &&
                s === "" &&
                (this.includesCredentials() || this.port !== null)
              ) {
                return;
              }
              if ((p = this.parseHost(s))) {
                return p;
              }
              s = "";
              i = tP;
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
              s += h;
            }
          } else {
            if (s === "") {
              return z;
            }
            if ((p = this.parseHost(s))) {
              return p;
            }
            s = "";
            i = tT;
            if (r === tk) {
              return;
            }
          }
          break;
        case tT:
          if (P(H, h)) {
            s += h;
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
              return J;
            }
            if (s !== "") {
              const S = a_parseInt(s, 10);
              if (S > 65535) {
                return J;
              }
              this.port = this.isSpecial() && S === td[this.scheme] ? null : S;
              s = "";
            }
            if (r) {
              return;
            }
            i = tP;
            continue;
          }
          break;
        case tj:
          this.scheme = "file";
          if (h === "/" || h === "\\") {
            i = tN;
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
                i = tL;
                break;
              case "#":
                this.host = e.host;
                this.path = g(e.path);
                this.query = e.query;
                this.fragment = "";
                i = tU;
                break;
              default:
                if (!ty(D(g(f, o), ""))) {
                  this.host = e.host;
                  this.path = g(e.path);
                  this.shortenPath();
                }
                i = tD;
                continue;
            }
          } else {
            i = tD;
            continue;
          }
          break;
        case tN:
          if (h === "/" || h === "\\") {
            i = tF;
            break;
          }
          if (e && e.scheme === "file" && !ty(D(g(f, o), ""))) {
            if (tg(e.path[0], true)) {
              U(this.path, e.path[0]);
            } else {
              this.host = e.host;
            }
          }
          i = tD;
          continue;
        case tF:
          if (h === n || h === "/" || h === "\\" || h === "?" || h === "#") {
            if (!r && tg(s)) {
              i = tD;
            } else if (s === "") {
              this.host = "";
              if (r) {
                return;
              }
              i = tP;
            } else {
              if ((p = this.parseHost(s))) {
                return p;
              }
              if (this.host === "localhost") {
                this.host = "";
              }
              if (r) {
                return;
              }
              s = "";
              i = tP;
            }
            continue;
          }
          s += h;
          break;
        case tP:
          if (this.isSpecial()) {
            i = tD;
            if (h !== "/" && h !== "\\") {
              continue;
            }
          } else if (r || h !== "?") {
            if (r || h !== "#") {
              if (h !== n && ((i = tD), h !== "/")) {
                continue;
              }
            } else {
              this.fragment = "";
              i = tU;
            }
          } else {
            this.query = "";
            i = tL;
          }
          break;
        case tD:
          if (
            h === n ||
            h === "/" ||
            (h === "\\" && this.isSpecial()) ||
            (!r && (h === "?" || h === "#"))
          ) {
            if (
              (y = W((y = s))) === ".." ||
              y === "%2e." ||
              y === ".%2e" ||
              y === "%2e%2e"
            ) {
              this.shortenPath();
              if (!(h === "/" || (h === "\\" && this.isSpecial()))) {
                U(this.path, "");
              }
            } else if ((b = s) === "." || W(b) === "%2e") {
              if (!(h === "/" || (h === "\\" && this.isSpecial()))) {
                U(this.path, "");
              }
            } else {
              if (this.scheme === "file" && !this.path.length && tg(s)) {
                if (this.host) {
                  this.host = "";
                }
                s = F(s, 0) + ":";
              }
              U(this.path, s);
            }
            s = "";
            if (this.scheme === "file" && (h === n || h === "?" || h === "#")) {
              while (this.path.length > 1 && this.path[0] === "") {
                Y(this.path);
              }
            }
            if (h === "?") {
              this.query = "";
              i = tL;
            } else if (h === "#") {
              this.fragment = "";
              i = tU;
            }
          } else {
            s += tp(h, tl);
          }
          break;
        case tC:
          switch (h) {
            case "?":
              this.query = "";
              i = tL;
              break;
            case "#":
              this.fragment = "";
              i = tU;
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
            i = tU;
          }
          break;
        case tU:
          if (h !== n) {
            this.fragment += tp(h, th);
          }
      }
      o++;
    }
  },
  parseHost: function (t) {
    let r;
    let e;
    let n;
    if (F(t, 0) === "[") {
      if (F(t, t.length - 1) !== "]" || !(r = ta(X(t, 1, -1)))) {
        return z;
      }
      this.host = r;
    } else if (this.isSpecial()) {
      if (P(tr, (t = b(t))) || (r = ts(t)) === null) {
        return z;
      }
      this.host = r;
    } else {
      if (P(te, t)) {
        return z;
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
        ? "/" + D(path, "/")
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
      throw a_TypeError(r);
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
      return "/" + D(path, "/");
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
        t = X(t, 1);
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
      t = X(t, 1);
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
  if (!o) {
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
const tX = (t, r) => ({
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
if (o) {
  h(tY_prototype, "href", tX("serialize", "setHref"));
  h(tY_prototype, "origin", tX("getOrigin"));
  h(tY_prototype, "protocol", tX("getProtocol", "setProtocol"));
  h(tY_prototype, "username", tX("getUsername", "setUsername"));
  h(tY_prototype, "password", tX("getPassword", "setPassword"));
  h(tY_prototype, "host", tX("getHost", "setHost"));
  h(tY_prototype, "hostname", tX("getHostname", "setHostname"));
  h(tY_prototype, "port", tX("getPort", "setPort"));
  h(tY_prototype, "pathname", tX("getPathname", "setPathname"));
  h(tY_prototype, "search", tX("getSearch", "setSearch"));
  h(tY_prototype, "searchParams", tX("getSearchParams"));
  h(tY_prototype, "hash", tX("getHash", "setHash"));
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
if (a_URL) {
  const tW = a_URL.createObjectURL;
  const tG = a_URL.revokeObjectURL;
  if (tW) {
    f(URL, "createObjectURL", u(tW, a_URL));
  }
  if (tG) {
    f(URL, "revokeObjectURL", u(tG, a_URL));
  }
}
A(URL, "URL");
i(
  {
    global: true,
    constructor: true,
    forced: !s,
    sham: !o,
  },
  {
    URL,
  },
);
