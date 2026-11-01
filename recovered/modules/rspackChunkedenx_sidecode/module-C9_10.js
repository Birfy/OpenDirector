import "./module-X4_10.js";
import o from "./module-A_11.js";
import i from "./module-r9_10.js";
import a from "./module-BZO_10.js";
import s from "./module-J_11.js";
import u from "./module-WG_2_10.js";
import c from "./module-O9_10.js";
import f from "./module-vE_10.js";
import l from "./module-I_11.js";
import h from "./module-A2_11.js";
import v from "./module-D_2_10.js";
import p from "./module-Eu_11.js";
import d from "./module-zd_10.js";
import g from "./module-wL_10.js";
import _y from "./module-iv_10.js";
import b from "./module-zyf_10.js";
import m from "./module-ng_11.js";
import A from "./module-HZ_10.js";
import x from "./module-eXf_10.js";
import w from "./module-pm_10.js";
import S from "./module-b_10.js";
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
const _ = c("".slice);
const X = c("".toLowerCase);
const W = c([].unshift);
const G = "Invalid scheme";
const J = "Invalid host";
const z = "Invalid port";
const K = /[a-z]/i;
const q = /[\d+-.a-z]/i;
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
      o = _(o, i === 8 ? 1 : 2);
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
  let l = 0;
  const h = () => F(t, l);
  if (h() === ":") {
    if (F(t, 1) !== ":") {
      return;
    }
    l += 2;
    f = ++c;
  }
  while (h()) {
    if (c === 8) {
      return;
    }
    if (h() === ":") {
      if (f !== null) {
        return;
      }
      l++;
      f = ++c;
      continue;
    }
    for (r = e = 0; e < 4 && P(tt, h());) {
      r = 16 * r + s_parseInt(h(), 16);
      l++;
      e++;
    }
    if (h() === ".") {
      if (e === 0 || ((l -= e), c > 6)) {
        return;
      }
      for (n = 0; h();) {
        o = null;
        if (n > 0) {
          if (h() !== "." || !(n < 4)) {
            return;
          } else {
            l++;
          }
        }
        if (!P(H, h())) {
          return;
        }
        while (P(H, h())) {
          i = s_parseInt(h(), 10);
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
          l++;
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
    if (h() === ":") {
      l++;
      if (!h()) {
        return;
      }
    } else if (h()) {
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
      W(r, t % 256);
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
const tl = p({}, tf, {
  " ": 1,
  '"': 1,
  "<": 1,
  ">": 1,
  "`": 1,
});
const th = p({}, tl, {
  "#": 1,
  "?": 1,
  "{": 1,
  "}": 1,
});
const tv = p({}, th, {
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
    P(K, F(t, 0)) &&
    ((e = F(t, 1)) === ":" || (!r && e === "|"))
  );
};
const ty = (t) => {
  let r;
  return (
    t.length > 1 &&
    tg(_(t, 0, 2)) &&
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
      l = f[i];
      switch (o) {
        case tb:
          if (l && P(K, l)) {
            a += X(l);
            o = tm;
          } else {
            if (r) {
              return G;
            }
            o = tA;
            continue;
          }
          break;
        case tm:
          if (l && (P(q, l) || l === "+" || l === "-" || l === ".")) {
            a += X(l);
          } else if (l === ":") {
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
              return G;
            }
            a = "";
            o = tA;
            i = 0;
            continue;
          }
          break;
        case tA:
          if (!e || (e.cannotBeABaseURL && l !== "#")) {
            return G;
          }
          if (e.cannotBeABaseURL && l === "#") {
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
          if (l === "/" && f[i + 1] === "/") {
            o = tR;
            i++;
          } else {
            o = tS;
            continue;
          }
          break;
        case tw:
          if (l === "/") {
            o = tM;
            break;
          }
          o = tC;
          continue;
        case tS:
          this.scheme = e.scheme;
          if (l === n) {
            this.username = e.username;
            this.password = e.password;
            this.host = e.host;
            this.port = e.port;
            this.path = g(e.path);
            this.query = e.query;
          } else if (l === "/" || (l === "\\" && this.isSpecial())) {
            o = tE;
          } else if (l === "?") {
            this.username = e.username;
            this.password = e.password;
            this.host = e.host;
            this.port = e.port;
            this.path = g(e.path);
            this.query = "";
            o = tL;
          } else if (l === "#") {
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
          if (this.isSpecial() && (l === "/" || l === "\\")) {
            o = tR;
          } else if (l === "/") {
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
          if (l !== "/" || F(a, i + 1) !== "/") {
            continue;
          }
          i++;
          break;
        case tR:
          if (l !== "/" && l !== "\\") {
            o = tM;
            continue;
          }
          break;
        case tM:
          if (l === "@") {
            if (s) {
              a = "%40" + a;
            }
            s = true;
            h = d(a);
            var f;
            var l;
            var p;
            var y;
            var b;
            for (var h, A = 0; A < h.length; A++) {
              const x = h[A];
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
            l === n ||
            l === "/" ||
            l === "?" ||
            l === "#" ||
            (l === "\\" && this.isSpecial())
          ) {
            if (s && a === "") {
              return "Invalid authority";
            }
            i -= d(a).length + 1;
            a = "";
            o = tI;
          } else {
            a += l;
          }
          break;
        case tI:
        case tk:
          if (r && this.scheme === "file") {
            o = tF;
            continue;
          }
          if (l !== ":" || u) {
            if (
              l === n ||
              l === "/" ||
              l === "?" ||
              l === "#" ||
              (l === "\\" && this.isSpecial())
            ) {
              if (this.isSpecial() && a === "") {
                return J;
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
              if (l === "[") {
                u = true;
              } else if (l === "]") {
                u = false;
              }
              a += l;
            }
          } else {
            if (a === "") {
              return J;
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
          if (P(H, l)) {
            a += l;
          } else {
            if (
              !(
                l === n ||
                l === "/" ||
                l === "?" ||
                l === "#" ||
                (l === "\\" && this.isSpecial())
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
          if (l === "/" || l === "\\") {
            o = tN;
          } else if (e && e.scheme === "file") {
            switch (l) {
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
          if (l === "/" || l === "\\") {
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
          if (l === n || l === "/" || l === "\\" || l === "?" || l === "#") {
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
          a += l;
          break;
        case tP:
          if (this.isSpecial()) {
            o = tC;
            if (l !== "/" && l !== "\\") {
              continue;
            }
          } else if (r || l !== "?") {
            if (r || l !== "#") {
              if (l !== n && ((o = tC), l !== "/")) {
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
            l === n ||
            l === "/" ||
            (l === "\\" && this.isSpecial()) ||
            (!r && (l === "?" || l === "#"))
          ) {
            if (
              (y = X((y = a))) === ".." ||
              y === "%2e." ||
              y === ".%2e" ||
              y === "%2e%2e"
            ) {
              this.shortenPath();
              if (!(l === "/" || (l === "\\" && this.isSpecial()))) {
                U(this.path, "");
              }
            } else if ((b = a) === "." || X(b) === "%2e") {
              if (!(l === "/" || (l === "\\" && this.isSpecial()))) {
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
            if (this.scheme === "file" && (l === n || l === "?" || l === "#")) {
              while (this.path.length > 1 && this.path[0] === "") {
                Y(this.path);
              }
            }
            if (l === "?") {
              this.query = "";
              o = tL;
            } else if (l === "#") {
              this.fragment = "";
              o = tU;
            }
          } else {
            a += tp(l, th);
          }
          break;
        case tD:
          switch (l) {
            case "?":
              this.query = "";
              o = tL;
              break;
            case "#":
              this.fragment = "";
              o = tU;
              break;
            default:
              if (l !== n) {
                this.path[0] += tp(l, tf);
              }
          }
          break;
        case tL:
          if (r || l !== "#") {
            if (l !== n) {
              if (l === "'" && this.isSpecial()) {
                this.query += "%27";
              } else if (l === "#") {
                this.query += "%23";
              } else {
                this.query += tp(l, tf);
              }
            }
          } else {
            this.fragment = "";
            o = tU;
          }
          break;
        case tU:
          if (l !== n) {
            this.fragment += tp(l, tl);
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
      if (F(t, t.length - 1) !== "]" || !(r = ts(_(t, 1, -1)))) {
        return J;
      }
      this.host = r;
    } else if (this.isSpecial()) {
      if (P(tr, (t = b(t))) || (r = ta(t)) === null) {
        return J;
      }
      this.host = r;
    } else {
      if (P(te, t)) {
        return J;
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
        t = _(t, 1);
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
      t = _(t, 1);
    }
    this.fragment = "";
    this.parse(t, tU);
  },
  update: function () {
    this.query = this.searchParams.serialize() || null;
  },
};
var URL = function (t) {
  const r = h(this, tY_prototype);
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
const t_ = (t, r) => ({
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
  l(tY_prototype, "href", t_("serialize", "setHref"));
  l(tY_prototype, "origin", t_("getOrigin"));
  l(tY_prototype, "protocol", t_("getProtocol", "setProtocol"));
  l(tY_prototype, "username", t_("getUsername", "setUsername"));
  l(tY_prototype, "password", t_("getPassword", "setPassword"));
  l(tY_prototype, "host", t_("getHost", "setHost"));
  l(tY_prototype, "hostname", t_("getHostname", "setHostname"));
  l(tY_prototype, "port", t_("getPort", "setPort"));
  l(tY_prototype, "pathname", t_("getPathname", "setPathname"));
  l(tY_prototype, "search", t_("getSearch", "setSearch"));
  l(tY_prototype, "searchParams", t_("getSearchParams"));
  l(tY_prototype, "hash", t_("getHash", "setHash"));
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
  const tW = s_URL.revokeObjectURL;
  if (tX) {
    f(URL, "createObjectURL", u(tX, s_URL));
  }
  if (tW) {
    f(URL, "revokeObjectURL", u(tW, s_URL));
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
