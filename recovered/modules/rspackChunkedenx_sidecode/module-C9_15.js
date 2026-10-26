import "./module-X4_15.js";
import o from "./module-A_16.js";
import i from "./module-r9_15.js";
import a from "./module-BZO_15.js";
import s from "./module-J_16.js";
import u from "./module-WG_2_15.js";
import c from "./module-O9_15.js";
import f from "./module-vE_15.js";
import h from "./module-I_16.js";
import l from "./module-A2_16.js";
import v from "./module-D_2_15.js";
import p from "./module-Eu_16.js";
import d from "./module-zd_15.js";
import g from "./module-wL_15.js";
import _y from "./module-iv_15.js";
import b from "./module-zyf_15.js";
import m from "./module-ng_16.js";
import A from "./module-HZ_15.js";
import x from "./module-eXf_15.js";
import w from "./module-pm_15.js";
import S from "./module-b_15.js";
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
const D = c([].join);
const C = c((1).toString);
const L = c([].pop);
const U = c([].push);
const V = c("".replace);
const Y = c([].shift);
const B = c("".split);
const X = c("".slice);
const W = c("".toLowerCase);
const _ = c([].unshift);
const G = "Invalid scheme";
const z = "Invalid host";
const J = "Invalid port";
const q = /[a-z]/i;
const K = /[\d+-.a-z]/i;
const H = /\d/;
const Q = /^0x/i;
const Z = /^[0-7]+$/;
const $ = /^\d+$/;
const rr = /^[\da-f]+$/i;
const rt = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
const re = /[\0\t\n\r #/:<>?@[\\\]^|]/;
const rn = /^[\u0000-\u0020]+/;
const ro = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
const ri = /[\t\n\r]/g;
const ra = (r) => {
  let t;
  let e;
  let n;
  let o;
  let i;
  let a;
  let s;
  const u = B(r, ".");
  if (u.length && u[u.length - 1] === "") {
    u.length--;
  }
  if ((t = u.length) > 4) {
    return r;
  }
  n = 0;
  for (e = []; n < t; n++) {
    if ((o = u[n]) === "") {
      return r;
    }
    i = 10;
    if (o.length > 1 && F(o, 0) === "0") {
      i = P(Q, o) ? 16 : 8;
      o = X(o, i === 8 ? 1 : 2);
    }
    if (o === "") {
      a = 0;
    } else {
      if (!P(i === 10 ? $ : i === 8 ? Z : rr, o)) {
        return r;
      }
      a = s_parseInt(o, i);
    }
    U(e, a);
  }
  for (n = 0; n < t; n++) {
    a = e[n];
    if (n === t - 1) {
      if (a >= 256 ** (5 - t)) {
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
const rs = (r) => {
  let t;
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
  const l = () => F(r, h);
  if (l() === ":") {
    if (F(r, 1) !== ":") {
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
    for (t = e = 0; e < 4 && P(rr, l());) {
      t = 16 * t + s_parseInt(l(), 16);
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
    u[c++] = t;
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
const ru = (r) => {
  let t = null;
  let e = 1;
  let n = null;
  let o = 0;
  for (let i = 0; i < 8; i++) {
    if (r[i] !== 0) {
      if (o > e) {
        t = n;
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
    t = n;
    e = o;
  }
  return t;
};
const rc = (r) => {
  let t;
  let e;
  let n;
  let o;
  if (typeof r === "number") {
    e = 0;
    for (t = []; e < 4; e++) {
      _(t, r % 256);
      r = Math.floor(r / 256);
    }
    return D(t, ".");
  }
  if (typeof r === "object") {
    t = "";
    n = ru(r);
    for (e = 0; e < 8; e++) {
      if (!o || r[e] !== 0) {
        if (o) {
          o = false;
        }
        if (n === e) {
          t += e ? ":" : "::";
          o = true;
        } else {
          t += C(r[e], 16);
          if (e < 7) {
            t += ":";
          }
        }
      }
    }
    return "[" + t + "]";
  }
  return r;
};
const rf = {};
const rh = p({}, rf, {
  " ": 1,
  '"': 1,
  "<": 1,
  ">": 1,
  "`": 1,
});
const rl = p({}, rh, {
  "#": 1,
  "?": 1,
  "{": 1,
  "}": 1,
});
const rv = p({}, rl, {
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
const rp = (r, t) => {
  const e = _y_codeAt(r, 0);
  if (e > 32 && e < 127 && !v(t, r)) {
    return r;
  }
  return encodeURIComponent(r);
};
const rd = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443,
};
const rg = (r, t) => {
  let e;
  return (
    r.length === 2 &&
    P(q, F(r, 0)) &&
    ((e = F(r, 1)) === ":" || (!t && e === "|"))
  );
};
const ry = (r) => {
  let t;
  return (
    r.length > 1 &&
    rg(X(r, 0, 2)) &&
    (r.length === 2 ||
      (t = F(r, 2)) === "/" ||
      t === "\\" ||
      t === "?" ||
      t === "#")
  );
};
const rb = {};
const rm = {};
const rA = {};
const rx = {};
const rw = {};
const rS = {};
const rE = {};
const rO = {};
const rR = {};
const rM = {};
const rI = {};
const rk = {};
const rT = {};
const rj = {};
const rN = {};
const rF = {};
const rP = {};
const rD = {};
const rC = {};
const rL = {};
const rU = {};
const rV = function (r, t, e) {
  let n;
  let o;
  let i;
  const a = m(r);
  if (t) {
    if ((o = this.parse(a))) {
      throw s_TypeError(o);
    }
    this.searchParams = null;
  } else {
    if (e !== undefined) {
      n = new rV(e, true);
    }
    if ((o = this.parse(a, null, n))) {
      throw s_TypeError(o);
    }
    (i = w_getState(new w_URLSearchParams())).bindURL(this);
    this.searchParams = i;
  }
};
rV.prototype = {
  type: "URL",
  parse: function (r, t, e) {
    let o = t || rb;
    let i = 0;
    let a = "";
    let s = false;
    let u = false;
    let c = false;
    r = m(r);
    if (!t) {
      this.scheme = "";
      this.username = "";
      this.password = "";
      this.host = null;
      this.port = null;
      this.path = [];
      this.query = null;
      this.fragment = null;
      this.cannotBeABaseURL = false;
      r = V(r, rn, "");
      r = V(r, ro, "$1");
    }
    for (f = d((r = V(r, ri, ""))); i <= f.length;) {
      h = f[i];
      switch (o) {
        case rb:
          if (h && P(q, h)) {
            a += W(h);
            o = rm;
          } else {
            if (t) {
              return G;
            }
            o = rA;
            continue;
          }
          break;
        case rm:
          if (h && (P(K, h) || h === "+" || h === "-" || h === ".")) {
            a += W(h);
          } else if (h === ":") {
            if (
              t &&
              (this.isSpecial() !== v(rd, a) ||
                (a === "file" &&
                  (this.includesCredentials() || this.port !== null)) ||
                (this.scheme === "file" && !this.host))
            ) {
              return;
            }
            this.scheme = a;
            if (t) {
              if (this.isSpecial() && rd[this.scheme] === this.port) {
                this.port = null;
              }
              return;
            }
            a = "";
            if (this.scheme === "file") {
              o = rj;
            } else if (this.isSpecial() && e && e.scheme === this.scheme) {
              o = rx;
            } else if (this.isSpecial()) {
              o = rO;
            } else if (f[i + 1] === "/") {
              o = rw;
              i++;
            } else {
              this.cannotBeABaseURL = true;
              U(this.path, "");
              o = rC;
            }
          } else {
            if (t) {
              return G;
            }
            a = "";
            o = rA;
            i = 0;
            continue;
          }
          break;
        case rA:
          if (!e || (e.cannotBeABaseURL && h !== "#")) {
            return G;
          }
          if (e.cannotBeABaseURL && h === "#") {
            this.scheme = e.scheme;
            this.path = g(e.path);
            this.query = e.query;
            this.fragment = "";
            this.cannotBeABaseURL = true;
            o = rU;
            break;
          }
          o = e.scheme === "file" ? rj : rS;
          continue;
        case rx:
          if (h === "/" && f[i + 1] === "/") {
            o = rR;
            i++;
          } else {
            o = rS;
            continue;
          }
          break;
        case rw:
          if (h === "/") {
            o = rM;
            break;
          }
          o = rD;
          continue;
        case rS:
          this.scheme = e.scheme;
          if (h === n) {
            this.username = e.username;
            this.password = e.password;
            this.host = e.host;
            this.port = e.port;
            this.path = g(e.path);
            this.query = e.query;
          } else if (h === "/" || (h === "\\" && this.isSpecial())) {
            o = rE;
          } else if (h === "?") {
            this.username = e.username;
            this.password = e.password;
            this.host = e.host;
            this.port = e.port;
            this.path = g(e.path);
            this.query = "";
            o = rL;
          } else if (h === "#") {
            this.username = e.username;
            this.password = e.password;
            this.host = e.host;
            this.port = e.port;
            this.path = g(e.path);
            this.query = e.query;
            this.fragment = "";
            o = rU;
          } else {
            this.username = e.username;
            this.password = e.password;
            this.host = e.host;
            this.port = e.port;
            this.path = g(e.path);
            this.path.length--;
            o = rD;
            continue;
          }
          break;
        case rE:
          if (this.isSpecial() && (h === "/" || h === "\\")) {
            o = rR;
          } else if (h === "/") {
            o = rM;
          } else {
            this.username = e.username;
            this.password = e.password;
            this.host = e.host;
            this.port = e.port;
            o = rD;
            continue;
          }
          break;
        case rO:
          o = rR;
          if (h !== "/" || F(a, i + 1) !== "/") {
            continue;
          }
          i++;
          break;
        case rR:
          if (h !== "/" && h !== "\\") {
            o = rM;
            continue;
          }
          break;
        case rM:
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
              const w = rp(x, rv);
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
            o = rI;
          } else {
            a += h;
          }
          break;
        case rI:
        case rk:
          if (t && this.scheme === "file") {
            o = rF;
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
                return z;
              }
              if (
                t &&
                a === "" &&
                (this.includesCredentials() || this.port !== null)
              ) {
                return;
              }
              if ((p = this.parseHost(a))) {
                return p;
              }
              a = "";
              o = rP;
              if (t) {
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
              return z;
            }
            if ((p = this.parseHost(a))) {
              return p;
            }
            a = "";
            o = rT;
            if (t === rk) {
              return;
            }
          }
          break;
        case rT:
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
              !t
            ) {
              return J;
            }
            if (a !== "") {
              const S = s_parseInt(a, 10);
              if (S > 65535) {
                return J;
              }
              this.port = this.isSpecial() && S === rd[this.scheme] ? null : S;
              a = "";
            }
            if (t) {
              return;
            }
            o = rP;
            continue;
          }
          break;
        case rj:
          this.scheme = "file";
          if (h === "/" || h === "\\") {
            o = rN;
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
                o = rL;
                break;
              case "#":
                this.host = e.host;
                this.path = g(e.path);
                this.query = e.query;
                this.fragment = "";
                o = rU;
                break;
              default:
                if (!ry(D(g(f, i), ""))) {
                  this.host = e.host;
                  this.path = g(e.path);
                  this.shortenPath();
                }
                o = rD;
                continue;
            }
          } else {
            o = rD;
            continue;
          }
          break;
        case rN:
          if (h === "/" || h === "\\") {
            o = rF;
            break;
          }
          if (e && e.scheme === "file" && !ry(D(g(f, i), ""))) {
            if (rg(e.path[0], true)) {
              U(this.path, e.path[0]);
            } else {
              this.host = e.host;
            }
          }
          o = rD;
          continue;
        case rF:
          if (h === n || h === "/" || h === "\\" || h === "?" || h === "#") {
            if (!t && rg(a)) {
              o = rD;
            } else if (a === "") {
              this.host = "";
              if (t) {
                return;
              }
              o = rP;
            } else {
              if ((p = this.parseHost(a))) {
                return p;
              }
              if (this.host === "localhost") {
                this.host = "";
              }
              if (t) {
                return;
              }
              a = "";
              o = rP;
            }
            continue;
          }
          a += h;
          break;
        case rP:
          if (this.isSpecial()) {
            o = rD;
            if (h !== "/" && h !== "\\") {
              continue;
            }
          } else if (t || h !== "?") {
            if (t || h !== "#") {
              if (h !== n && ((o = rD), h !== "/")) {
                continue;
              }
            } else {
              this.fragment = "";
              o = rU;
            }
          } else {
            this.query = "";
            o = rL;
          }
          break;
        case rD:
          if (
            h === n ||
            h === "/" ||
            (h === "\\" && this.isSpecial()) ||
            (!t && (h === "?" || h === "#"))
          ) {
            if (
              (y = W((y = a))) === ".." ||
              y === "%2e." ||
              y === ".%2e" ||
              y === "%2e%2e"
            ) {
              this.shortenPath();
              if (!(h === "/" || (h === "\\" && this.isSpecial()))) {
                U(this.path, "");
              }
            } else if ((b = a) === "." || W(b) === "%2e") {
              if (!(h === "/" || (h === "\\" && this.isSpecial()))) {
                U(this.path, "");
              }
            } else {
              if (this.scheme === "file" && !this.path.length && rg(a)) {
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
              o = rL;
            } else if (h === "#") {
              this.fragment = "";
              o = rU;
            }
          } else {
            a += rp(h, rl);
          }
          break;
        case rC:
          switch (h) {
            case "?":
              this.query = "";
              o = rL;
              break;
            case "#":
              this.fragment = "";
              o = rU;
              break;
            default:
              if (h !== n) {
                this.path[0] += rp(h, rf);
              }
          }
          break;
        case rL:
          if (t || h !== "#") {
            if (h !== n) {
              if (h === "'" && this.isSpecial()) {
                this.query += "%27";
              } else if (h === "#") {
                this.query += "%23";
              } else {
                this.query += rp(h, rf);
              }
            }
          } else {
            this.fragment = "";
            o = rU;
          }
          break;
        case rU:
          if (h !== n) {
            this.fragment += rp(h, rh);
          }
      }
      i++;
    }
  },
  parseHost: function (r) {
    let t;
    let e;
    let n;
    if (F(r, 0) === "[") {
      if (F(r, r.length - 1) !== "]" || !(t = rs(X(r, 1, -1)))) {
        return z;
      }
      this.host = t;
    } else if (this.isSpecial()) {
      if (P(rt, (r = b(r))) || (t = ra(r)) === null) {
        return z;
      }
      this.host = t;
    } else {
      if (P(re, r)) {
        return z;
      }
      t = "";
      e = d(r);
      for (n = 0; n < e.length; n++) {
        t += rp(e[n], rf);
      }
      this.host = t;
    }
  },
  cannotHaveUsernamePasswordPort: function () {
    return !this.host || this.cannotBeABaseURL || this.scheme === "file";
  },
  includesCredentials: function () {
    return this.username !== "" || this.password !== "";
  },
  isSpecial: function () {
    return v(rd, this.scheme);
  },
  shortenPath: function () {
    const path = this.path;
    const r_length = path.length;
    if (
      r_length &&
      (this.scheme !== "file" || r_length !== 1 || !rg(path[0], true))
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
      u += rc(host);
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
  setHref: function (r) {
    const t = this.parse(r);
    if (t) {
      throw s_TypeError(t);
    }
    this.searchParams.update();
  },
  getOrigin: function () {
    const scheme = this.scheme;
    const port = this.port;
    if (scheme === "blob") {
      try {
        return new URL(scheme.path[0]).origin;
      } catch (r) {
        return "null";
      }
    }
    if (scheme !== "file" && this.isSpecial()) {
      return scheme + "://" + rc(this.host) + (port !== null ? ":" + port : "");
    }
    return "null";
  },
  getProtocol: function () {
    return this.scheme + ":";
  },
  setProtocol: function (r) {
    this.parse(m(r) + ":", rb);
  },
  getUsername: function () {
    return this.username;
  },
  setUsername: function (r) {
    const t = d(m(r));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.username = "";
      for (let e = 0; e < t.length; e++) {
        this.username += rp(t[e], rv);
      }
    }
  },
  getPassword: function () {
    return this.password;
  },
  setPassword: function (r) {
    const t = d(m(r));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.password = "";
      for (let e = 0; e < t.length; e++) {
        this.password += rp(t[e], rv);
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
      return rc(host);
    }
    return rc(host) + ":" + port;
  },
  setHost: function (r) {
    if (!this.cannotBeABaseURL) {
      this.parse(r, rI);
    }
  },
  getHostname: function () {
    const host = this.host;
    if (host === null) {
      return "";
    }
    return rc(host);
  },
  setHostname: function (r) {
    if (!this.cannotBeABaseURL) {
      this.parse(r, rk);
    }
  },
  getPort: function () {
    const port = this.port;
    if (port === null) {
      return "";
    }
    return m(port);
  },
  setPort: function (r) {
    if (!this.cannotHaveUsernamePasswordPort()) {
      if ((r = m(r)) === "") {
        this.port = null;
      } else {
        this.parse(r, rT);
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
  setPathname: function (r) {
    if (!this.cannotBeABaseURL) {
      this.path = [];
      this.parse(r, rP);
    }
  },
  getSearch: function () {
    const query = this.query;
    if (query) {
      return "?" + query;
    }
    return "";
  },
  setSearch: function (r) {
    if ((r = m(r)) === "") {
      this.query = null;
    } else {
      if (F(r, 0) === "?") {
        r = X(r, 1);
      }
      this.query = "";
      this.parse(r, rL);
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
  setHash: function (r) {
    if ((r = m(r)) === "") {
      this.fragment = null;
      return;
    }
    if (F(r, 0) === "#") {
      r = X(r, 1);
    }
    this.fragment = "";
    this.parse(r, rU);
  },
  update: function () {
    this.query = this.searchParams.serialize() || null;
  },
};
var URL = function (r) {
  const t = l(this, rY_prototype);
  const e = x(arguments.length, 1) > 1 ? arguments[1] : undefined;
  const n = S_set(t, new rV(r, false, e));
  if (!i) {
    t.href = n.serialize();
    t.origin = n.getOrigin();
    t.protocol = n.getProtocol();
    t.username = n.getUsername();
    t.password = n.getPassword();
    t.host = n.getHost();
    t.hostname = n.getHostname();
    t.port = n.getPort();
    t.pathname = n.getPathname();
    t.search = n.getSearch();
    t.searchParams = n.getSearchParams();
    t.hash = n.getHash();
  }
};
var rY_prototype = URL.prototype;
const rX = (r, t) => ({
  get: function () {
    return O(this)[r]();
  },
  set:
    t &&
    function (r) {
      return O(this)[t](r);
    },
  configurable: true,
  enumerable: true,
});
if (i) {
  h(rY_prototype, "href", rX("serialize", "setHref"));
  h(rY_prototype, "origin", rX("getOrigin"));
  h(rY_prototype, "protocol", rX("getProtocol", "setProtocol"));
  h(rY_prototype, "username", rX("getUsername", "setUsername"));
  h(rY_prototype, "password", rX("getPassword", "setPassword"));
  h(rY_prototype, "host", rX("getHost", "setHost"));
  h(rY_prototype, "hostname", rX("getHostname", "setHostname"));
  h(rY_prototype, "port", rX("getPort", "setPort"));
  h(rY_prototype, "pathname", rX("getPathname", "setPathname"));
  h(rY_prototype, "search", rX("getSearch", "setSearch"));
  h(rY_prototype, "searchParams", rX("getSearchParams"));
  h(rY_prototype, "hash", rX("getHash", "setHash"));
}
f(
  rY_prototype,
  "toJSON",
  function () {
    return O(this).serialize();
  },
  {
    enumerable: true,
  },
);
f(
  rY_prototype,
  "toString",
  function () {
    return O(this).serialize();
  },
  {
    enumerable: true,
  },
);
if (s_URL) {
  const rW = s_URL.createObjectURL;
  const r_ = s_URL.revokeObjectURL;
  if (rW) {
    f(URL, "createObjectURL", u(rW, s_URL));
  }
  if (r_) {
    f(URL, "revokeObjectURL", u(r_, s_URL));
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
