import "./module-X4_7.js";
import o from "./module-A_8.js";
import i from "./module-r9_7.js";
import a from "./module-BZO_7.js";
import s from "./module-J_8.js";
import u from "./module-WG_2_7.js";
import c from "./module-O9_7.js";
import f from "./module-vE_7.js";
import l from "./module-I_8.js";
import h from "./module-A2_8.js";
import v from "./module-D_2_7.js";
import p from "./module-Eu_8.js";
import d from "./module-zd_7.js";
import g from "./module-wL_7.js";
import _y from "./module-iv_7.js";
import m from "./module-zyf_7.js";
import b from "./module-ng_8.js";
import A from "./module-HZ_7.js";
import w from "./module-eXf_7.js";
import x from "./module-pm_7.js";
import E from "./module-b_7.js";
let n;
const _y_codeAt = _y.codeAt;
const E_set = E.set;
const O = E.getterFor("URL");
const x_URLSearchParams = x.URLSearchParams;
const x_getState = x.getState;
const s_URL = s.URL;
const s_TypeError = s.TypeError;
const s_parseInt = s.parseInt;
const P = c("".charAt);
const F = c(/./.exec);
const C = c([].join);
const D = c((1).toString);
const L = c([].pop);
const U = c([].push);
const W = c("".replace);
const V = c([].shift);
const Y = c("".split);
const _ = c("".slice);
const B = c("".toLowerCase);
const X = c([].unshift);
const G = "Invalid scheme";
const J = "Invalid host";
const z = "Invalid port";
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
  const u = Y(r, ".");
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
    if (o.length > 1 && P(o, 0) === "0") {
      i = F(Q, o) ? 16 : 8;
      o = _(o, i === 8 ? 1 : 2);
    }
    if (o === "") {
      a = 0;
    } else {
      if (!F(i === 10 ? $ : i === 8 ? Z : rr, o)) {
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
  let l = 0;
  const h = () => P(r, l);
  if (h() === ":") {
    if (P(r, 1) !== ":") {
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
    for (t = e = 0; e < 4 && F(rr, h());) {
      t = 16 * t + s_parseInt(h(), 16);
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
        if (!F(H, h())) {
          return;
        }
        while (F(H, h())) {
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
      X(t, r % 256);
      r = Math.floor(r / 256);
    }
    return C(t, ".");
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
          t += D(r[e], 16);
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
const rl = p({}, rf, {
  " ": 1,
  '"': 1,
  "<": 1,
  ">": 1,
  "`": 1,
});
const rh = p({}, rl, {
  "#": 1,
  "?": 1,
  "{": 1,
  "}": 1,
});
const rv = p({}, rh, {
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
    F(q, P(r, 0)) &&
    ((e = P(r, 1)) === ":" || (!t && e === "|"))
  );
};
const ry = (r) => {
  let t;
  return (
    r.length > 1 &&
    rg(_(r, 0, 2)) &&
    (r.length === 2 ||
      (t = P(r, 2)) === "/" ||
      t === "\\" ||
      t === "?" ||
      t === "#")
  );
};
const rm = {};
const rb = {};
const rA = {};
const rw = {};
const rx = {};
const rE = {};
const rS = {};
const rO = {};
const rR = {};
const rM = {};
const rI = {};
const rk = {};
const rT = {};
const rj = {};
const rN = {};
const rP = {};
const rF = {};
const rC = {};
const rD = {};
const rL = {};
const rU = {};
const rW = function (r, t, e) {
  let n;
  let o;
  let i;
  const a = b(r);
  if (t) {
    if ((o = this.parse(a))) {
      throw s_TypeError(o);
    }
    this.searchParams = null;
  } else {
    if (e !== undefined) {
      n = new rW(e, true);
    }
    if ((o = this.parse(a, null, n))) {
      throw s_TypeError(o);
    }
    (i = x_getState(new x_URLSearchParams())).bindURL(this);
    this.searchParams = i;
  }
};
rW.prototype = {
  type: "URL",
  parse: function (r, t, e) {
    let o = t || rm;
    let i = 0;
    let a = "";
    let s = false;
    let u = false;
    let c = false;
    r = b(r);
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
      r = W(r, rn, "");
      r = W(r, ro, "$1");
    }
    for (f = d((r = W(r, ri, ""))); i <= f.length;) {
      l = f[i];
      switch (o) {
        case rm:
          if (l && F(q, l)) {
            a += B(l);
            o = rb;
          } else {
            if (t) {
              return G;
            }
            o = rA;
            continue;
          }
          break;
        case rb:
          if (l && (F(K, l) || l === "+" || l === "-" || l === ".")) {
            a += B(l);
          } else if (l === ":") {
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
              o = rw;
            } else if (this.isSpecial()) {
              o = rO;
            } else if (f[i + 1] === "/") {
              o = rx;
              i++;
            } else {
              this.cannotBeABaseURL = true;
              U(this.path, "");
              o = rD;
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
          if (!e || (e.cannotBeABaseURL && l !== "#")) {
            return G;
          }
          if (e.cannotBeABaseURL && l === "#") {
            this.scheme = e.scheme;
            this.path = g(e.path);
            this.query = e.query;
            this.fragment = "";
            this.cannotBeABaseURL = true;
            o = rU;
            break;
          }
          o = e.scheme === "file" ? rj : rE;
          continue;
        case rw:
          if (l === "/" && f[i + 1] === "/") {
            o = rR;
            i++;
          } else {
            o = rE;
            continue;
          }
          break;
        case rx:
          if (l === "/") {
            o = rM;
            break;
          }
          o = rC;
          continue;
        case rE:
          this.scheme = e.scheme;
          if (l === n) {
            this.username = e.username;
            this.password = e.password;
            this.host = e.host;
            this.port = e.port;
            this.path = g(e.path);
            this.query = e.query;
          } else if (l === "/" || (l === "\\" && this.isSpecial())) {
            o = rS;
          } else if (l === "?") {
            this.username = e.username;
            this.password = e.password;
            this.host = e.host;
            this.port = e.port;
            this.path = g(e.path);
            this.query = "";
            o = rL;
          } else if (l === "#") {
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
            o = rC;
            continue;
          }
          break;
        case rS:
          if (this.isSpecial() && (l === "/" || l === "\\")) {
            o = rR;
          } else if (l === "/") {
            o = rM;
          } else {
            this.username = e.username;
            this.password = e.password;
            this.host = e.host;
            this.port = e.port;
            o = rC;
            continue;
          }
          break;
        case rO:
          o = rR;
          if (l !== "/" || P(a, i + 1) !== "/") {
            continue;
          }
          i++;
          break;
        case rR:
          if (l !== "/" && l !== "\\") {
            o = rM;
            continue;
          }
          break;
        case rM:
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
            var m;
            for (var h, A = 0; A < h.length; A++) {
              const w = h[A];
              if (w === ":" && !c) {
                c = true;
                continue;
              }
              const x = rp(w, rv);
              if (c) {
                this.password += x;
              } else {
                this.username += x;
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
            o = rI;
          } else {
            a += l;
          }
          break;
        case rI:
        case rk:
          if (t && this.scheme === "file") {
            o = rP;
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
              o = rF;
              if (t) {
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
            o = rT;
            if (t === rk) {
              return;
            }
          }
          break;
        case rT:
          if (F(H, l)) {
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
              !t
            ) {
              return z;
            }
            if (a !== "") {
              const E = s_parseInt(a, 10);
              if (E > 65535) {
                return z;
              }
              this.port = this.isSpecial() && E === rd[this.scheme] ? null : E;
              a = "";
            }
            if (t) {
              return;
            }
            o = rF;
            continue;
          }
          break;
        case rj:
          this.scheme = "file";
          if (l === "/" || l === "\\") {
            o = rN;
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
                if (!ry(C(g(f, i), ""))) {
                  this.host = e.host;
                  this.path = g(e.path);
                  this.shortenPath();
                }
                o = rC;
                continue;
            }
          } else {
            o = rC;
            continue;
          }
          break;
        case rN:
          if (l === "/" || l === "\\") {
            o = rP;
            break;
          }
          if (e && e.scheme === "file" && !ry(C(g(f, i), ""))) {
            if (rg(e.path[0], true)) {
              U(this.path, e.path[0]);
            } else {
              this.host = e.host;
            }
          }
          o = rC;
          continue;
        case rP:
          if (l === n || l === "/" || l === "\\" || l === "?" || l === "#") {
            if (!t && rg(a)) {
              o = rC;
            } else if (a === "") {
              this.host = "";
              if (t) {
                return;
              }
              o = rF;
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
              o = rF;
            }
            continue;
          }
          a += l;
          break;
        case rF:
          if (this.isSpecial()) {
            o = rC;
            if (l !== "/" && l !== "\\") {
              continue;
            }
          } else if (t || l !== "?") {
            if (t || l !== "#") {
              if (l !== n && ((o = rC), l !== "/")) {
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
        case rC:
          if (
            l === n ||
            l === "/" ||
            (l === "\\" && this.isSpecial()) ||
            (!t && (l === "?" || l === "#"))
          ) {
            if (
              (y = B((y = a))) === ".." ||
              y === "%2e." ||
              y === ".%2e" ||
              y === "%2e%2e"
            ) {
              this.shortenPath();
              if (!(l === "/" || (l === "\\" && this.isSpecial()))) {
                U(this.path, "");
              }
            } else if ((m = a) === "." || B(m) === "%2e") {
              if (!(l === "/" || (l === "\\" && this.isSpecial()))) {
                U(this.path, "");
              }
            } else {
              if (this.scheme === "file" && !this.path.length && rg(a)) {
                if (this.host) {
                  this.host = "";
                }
                a = P(a, 0) + ":";
              }
              U(this.path, a);
            }
            a = "";
            if (this.scheme === "file" && (l === n || l === "?" || l === "#")) {
              while (this.path.length > 1 && this.path[0] === "") {
                V(this.path);
              }
            }
            if (l === "?") {
              this.query = "";
              o = rL;
            } else if (l === "#") {
              this.fragment = "";
              o = rU;
            }
          } else {
            a += rp(l, rh);
          }
          break;
        case rD:
          switch (l) {
            case "?":
              this.query = "";
              o = rL;
              break;
            case "#":
              this.fragment = "";
              o = rU;
              break;
            default:
              if (l !== n) {
                this.path[0] += rp(l, rf);
              }
          }
          break;
        case rL:
          if (t || l !== "#") {
            if (l !== n) {
              if (l === "'" && this.isSpecial()) {
                this.query += "%27";
              } else if (l === "#") {
                this.query += "%23";
              } else {
                this.query += rp(l, rf);
              }
            }
          } else {
            this.fragment = "";
            o = rU;
          }
          break;
        case rU:
          if (l !== n) {
            this.fragment += rp(l, rl);
          }
      }
      i++;
    }
  },
  parseHost: function (r) {
    let t;
    let e;
    let n;
    if (P(r, 0) === "[") {
      if (P(r, r.length - 1) !== "]" || !(t = rs(_(r, 1, -1)))) {
        return J;
      }
      this.host = t;
    } else if (this.isSpecial()) {
      if (F(rt, (r = m(r))) || (t = ra(r)) === null) {
        return J;
      }
      this.host = t;
    } else {
      if (F(re, r)) {
        return J;
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
    this.parse(b(r) + ":", rm);
  },
  getUsername: function () {
    return this.username;
  },
  setUsername: function (r) {
    const t = d(b(r));
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
    const t = d(b(r));
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
    return b(port);
  },
  setPort: function (r) {
    if (!this.cannotHaveUsernamePasswordPort()) {
      if ((r = b(r)) === "") {
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
      return "/" + C(path, "/");
    }
    return "";
  },
  setPathname: function (r) {
    if (!this.cannotBeABaseURL) {
      this.path = [];
      this.parse(r, rF);
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
    if ((r = b(r)) === "") {
      this.query = null;
    } else {
      if (P(r, 0) === "?") {
        r = _(r, 1);
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
    if ((r = b(r)) === "") {
      this.fragment = null;
      return;
    }
    if (P(r, 0) === "#") {
      r = _(r, 1);
    }
    this.fragment = "";
    this.parse(r, rU);
  },
  update: function () {
    this.query = this.searchParams.serialize() || null;
  },
};
var URL = function (r) {
  const t = h(this, rV_prototype);
  const e = w(arguments.length, 1) > 1 ? arguments[1] : undefined;
  const n = E_set(t, new rW(r, false, e));
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
var rV_prototype = URL.prototype;
const r_ = (r, t) => ({
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
  l(rV_prototype, "href", r_("serialize", "setHref"));
  l(rV_prototype, "origin", r_("getOrigin"));
  l(rV_prototype, "protocol", r_("getProtocol", "setProtocol"));
  l(rV_prototype, "username", r_("getUsername", "setUsername"));
  l(rV_prototype, "password", r_("getPassword", "setPassword"));
  l(rV_prototype, "host", r_("getHost", "setHost"));
  l(rV_prototype, "hostname", r_("getHostname", "setHostname"));
  l(rV_prototype, "port", r_("getPort", "setPort"));
  l(rV_prototype, "pathname", r_("getPathname", "setPathname"));
  l(rV_prototype, "search", r_("getSearch", "setSearch"));
  l(rV_prototype, "searchParams", r_("getSearchParams"));
  l(rV_prototype, "hash", r_("getHash", "setHash"));
}
f(
  rV_prototype,
  "toJSON",
  function () {
    return O(this).serialize();
  },
  {
    enumerable: true,
  },
);
f(
  rV_prototype,
  "toString",
  function () {
    return O(this).serialize();
  },
  {
    enumerable: true,
  },
);
if (s_URL) {
  const rB = s_URL.createObjectURL;
  const rX = s_URL.revokeObjectURL;
  if (rB) {
    f(URL, "createObjectURL", u(rB, s_URL));
  }
  if (rX) {
    f(URL, "revokeObjectURL", u(rX, s_URL));
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
