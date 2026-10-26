import "./module-X4_9.js";
import o from "./module-A_10.js";
import i from "./module-r9_9.js";
import a from "./module-BZO_9.js";
import s from "./module-J_10.js";
import u from "./module-WG_2_9.js";
import c from "./module-O9_9.js";
import f from "./module-vE_9.js";
import l from "./module-I_10.js";
import h from "./module-A2_10.js";
import v from "./module-D_2_9.js";
import d from "./module-Eu_10.js";
import p from "./module-zd_9.js";
import g from "./module-wL_9.js";
import _y from "./module-iv_9.js";
import m from "./module-zyf_9.js";
import b from "./module-ng_10.js";
import w from "./module-HZ_9.js";
import A from "./module-eXf_9.js";
import x from "./module-pm_9.js";
import E from "./module-b_9.js";
let n;
const _y_codeAt = _y.codeAt;
const E_set = E.set;
const O = E.getterFor("URL");
const x_URLSearchParams = x.URLSearchParams;
const x_getState = x.getState;
const s_URL = s.URL;
const s_TypeError = s.TypeError;
const s_parseInt = s.parseInt;
const j = c("".charAt);
const P = c(/./.exec);
const D = c([].join);
const F = c((1).toString);
const C = c([].pop);
const L = c([].push);
const U = c("".replace);
const B = c([].shift);
const V = c("".split);
const Y = c("".slice);
const W = c("".toLowerCase);
const X = c([].unshift);
const G = "Invalid scheme";
const z = "Invalid host";
const J = "Invalid port";
const H = /[a-z]/i;
const q = /[\d+-.a-z]/i;
const K = /\d/;
const Q = /^0x/i;
const Z = /^[0-7]+$/;
const $ = /^\d+$/;
const tt = /^[\da-f]+$/i;
const te = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
const tr = /[\0\t\n\r #/:<>?@[\\\]^|]/;
const tn = /^[\u0000-\u0020]+/;
const to = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
const ti = /[\t\n\r]/g;
const ta = (t) => {
  let e;
  let r;
  let n;
  let o;
  let i;
  let a;
  let s;
  const u = V(t, ".");
  if (u.length && u[u.length - 1] === "") {
    u.length--;
  }
  if ((e = u.length) > 4) {
    return t;
  }
  n = 0;
  for (r = []; n < e; n++) {
    if ((o = u[n]) === "") {
      return t;
    }
    i = 10;
    if (o.length > 1 && j(o, 0) === "0") {
      i = P(Q, o) ? 16 : 8;
      o = Y(o, i === 8 ? 1 : 2);
    }
    if (o === "") {
      a = 0;
    } else {
      if (!P(i === 10 ? $ : i === 8 ? Z : tt, o)) {
        return t;
      }
      a = s_parseInt(o, i);
    }
    L(r, a);
  }
  for (n = 0; n < e; n++) {
    a = r[n];
    if (n === e - 1) {
      if (a >= 256 ** (5 - e)) {
        return null;
      }
    } else if (a > 255) {
      return null;
    }
  }
  s = C(r);
  for (n = 0; n < r.length; n++) {
    s += r[n] * 256 ** (3 - n);
  }
  return s;
};
const ts = (t) => {
  let e;
  let r;
  let n;
  let o;
  let i;
  let a;
  let s;
  const u = [0, 0, 0, 0, 0, 0, 0, 0];
  let c = 0;
  let f = null;
  let l = 0;
  const h = () => j(t, l);
  if (h() === ":") {
    if (j(t, 1) !== ":") {
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
    for (e = r = 0; r < 4 && P(tt, h());) {
      e = 16 * e + s_parseInt(h(), 16);
      l++;
      r++;
    }
    if (h() === ".") {
      if (r === 0 || ((l -= r), c > 6)) {
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
        if (!P(K, h())) {
          return;
        }
        while (P(K, h())) {
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
    u[c++] = e;
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
  let e = null;
  let r = 1;
  let n = null;
  let o = 0;
  for (let i = 0; i < 8; i++) {
    if (t[i] !== 0) {
      if (o > r) {
        e = n;
        r = o;
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
  if (o > r) {
    e = n;
    r = o;
  }
  return e;
};
const tc = (t) => {
  let e;
  let r;
  let n;
  let o;
  if (typeof t === "number") {
    r = 0;
    for (e = []; r < 4; r++) {
      X(e, t % 256);
      t = Math.floor(t / 256);
    }
    return D(e, ".");
  }
  if (typeof t === "object") {
    e = "";
    n = tu(t);
    for (r = 0; r < 8; r++) {
      if (!o || t[r] !== 0) {
        if (o) {
          o = false;
        }
        if (n === r) {
          e += r ? ":" : "::";
          o = true;
        } else {
          e += F(t[r], 16);
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
const tf = {};
const tl = d({}, tf, {
  " ": 1,
  '"': 1,
  "<": 1,
  ">": 1,
  "`": 1,
});
const th = d({}, tl, {
  "#": 1,
  "?": 1,
  "{": 1,
  "}": 1,
});
const tv = d({}, th, {
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
const td = (t, e) => {
  const r = _y_codeAt(t, 0);
  if (r > 32 && r < 127 && !v(e, t)) {
    return t;
  }
  return encodeURIComponent(t);
};
const tp = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443,
};
const tg = (t, e) => {
  let r;
  return (
    t.length === 2 &&
    P(H, j(t, 0)) &&
    ((r = j(t, 1)) === ":" || (!e && r === "|"))
  );
};
const ty = (t) => {
  let e;
  return (
    t.length > 1 &&
    tg(Y(t, 0, 2)) &&
    (t.length === 2 ||
      (e = j(t, 2)) === "/" ||
      e === "\\" ||
      e === "?" ||
      e === "#")
  );
};
const tm = {};
const tb = {};
const tw = {};
const tA = {};
const tx = {};
const tE = {};
const tS = {};
const tO = {};
const t_ = {};
const tR = {};
const tM = {};
const tI = {};
const tT = {};
const tk = {};
const tN = {};
const tj = {};
const tP = {};
const tD = {};
const tF = {};
const tC = {};
const tL = {};
const tU = function (t, e, r) {
  let n;
  let o;
  let i;
  const a = b(t);
  if (e) {
    if ((o = this.parse(a))) {
      throw s_TypeError(o);
    }
    this.searchParams = null;
  } else {
    if (r !== undefined) {
      n = new tU(r, true);
    }
    if ((o = this.parse(a, null, n))) {
      throw s_TypeError(o);
    }
    (i = x_getState(new x_URLSearchParams())).bindURL(this);
    this.searchParams = i;
  }
};
tU.prototype = {
  type: "URL",
  parse: function (t, e, r) {
    let o = e || tm;
    let i = 0;
    let a = "";
    let s = false;
    let u = false;
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
      t = U(t, to, "$1");
    }
    for (f = p((t = U(t, ti, ""))); i <= f.length;) {
      l = f[i];
      switch (o) {
        case tm:
          if (l && P(H, l)) {
            a += W(l);
            o = tb;
          } else {
            if (e) {
              return G;
            }
            o = tw;
            continue;
          }
          break;
        case tb:
          if (l && (P(q, l) || l === "+" || l === "-" || l === ".")) {
            a += W(l);
          } else if (l === ":") {
            if (
              e &&
              (this.isSpecial() !== v(tp, a) ||
                (a === "file" &&
                  (this.includesCredentials() || this.port !== null)) ||
                (this.scheme === "file" && !this.host))
            ) {
              return;
            }
            this.scheme = a;
            if (e) {
              if (this.isSpecial() && tp[this.scheme] === this.port) {
                this.port = null;
              }
              return;
            }
            a = "";
            if (this.scheme === "file") {
              o = tk;
            } else if (this.isSpecial() && r && r.scheme === this.scheme) {
              o = tA;
            } else if (this.isSpecial()) {
              o = tO;
            } else if (f[i + 1] === "/") {
              o = tx;
              i++;
            } else {
              this.cannotBeABaseURL = true;
              L(this.path, "");
              o = tF;
            }
          } else {
            if (e) {
              return G;
            }
            a = "";
            o = tw;
            i = 0;
            continue;
          }
          break;
        case tw:
          if (!r || (r.cannotBeABaseURL && l !== "#")) {
            return G;
          }
          if (r.cannotBeABaseURL && l === "#") {
            this.scheme = r.scheme;
            this.path = g(r.path);
            this.query = r.query;
            this.fragment = "";
            this.cannotBeABaseURL = true;
            o = tL;
            break;
          }
          o = r.scheme === "file" ? tk : tE;
          continue;
        case tA:
          if (l === "/" && f[i + 1] === "/") {
            o = t_;
            i++;
          } else {
            o = tE;
            continue;
          }
          break;
        case tx:
          if (l === "/") {
            o = tR;
            break;
          }
          o = tD;
          continue;
        case tE:
          this.scheme = r.scheme;
          if (l === n) {
            this.username = r.username;
            this.password = r.password;
            this.host = r.host;
            this.port = r.port;
            this.path = g(r.path);
            this.query = r.query;
          } else if (l === "/" || (l === "\\" && this.isSpecial())) {
            o = tS;
          } else if (l === "?") {
            this.username = r.username;
            this.password = r.password;
            this.host = r.host;
            this.port = r.port;
            this.path = g(r.path);
            this.query = "";
            o = tC;
          } else if (l === "#") {
            this.username = r.username;
            this.password = r.password;
            this.host = r.host;
            this.port = r.port;
            this.path = g(r.path);
            this.query = r.query;
            this.fragment = "";
            o = tL;
          } else {
            this.username = r.username;
            this.password = r.password;
            this.host = r.host;
            this.port = r.port;
            this.path = g(r.path);
            this.path.length--;
            o = tD;
            continue;
          }
          break;
        case tS:
          if (this.isSpecial() && (l === "/" || l === "\\")) {
            o = t_;
          } else if (l === "/") {
            o = tR;
          } else {
            this.username = r.username;
            this.password = r.password;
            this.host = r.host;
            this.port = r.port;
            o = tD;
            continue;
          }
          break;
        case tO:
          o = t_;
          if (l !== "/" || j(a, i + 1) !== "/") {
            continue;
          }
          i++;
          break;
        case t_:
          if (l !== "/" && l !== "\\") {
            o = tR;
            continue;
          }
          break;
        case tR:
          if (l === "@") {
            if (s) {
              a = "%40" + a;
            }
            s = true;
            h = p(a);
            var f;
            var l;
            var d;
            var y;
            var m;
            for (var h, w = 0; w < h.length; w++) {
              const A = h[w];
              if (A === ":" && !c) {
                c = true;
                continue;
              }
              const x = td(A, tv);
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
            i -= p(a).length + 1;
            a = "";
            o = tM;
          } else {
            a += l;
          }
          break;
        case tM:
        case tI:
          if (e && this.scheme === "file") {
            o = tj;
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
                return z;
              }
              if (
                e &&
                a === "" &&
                (this.includesCredentials() || this.port !== null)
              ) {
                return;
              }
              if ((d = this.parseHost(a))) {
                return d;
              }
              a = "";
              o = tP;
              if (e) {
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
              return z;
            }
            if ((d = this.parseHost(a))) {
              return d;
            }
            a = "";
            o = tT;
            if (e === tI) {
              return;
            }
          }
          break;
        case tT:
          if (P(K, l)) {
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
              !e
            ) {
              return J;
            }
            if (a !== "") {
              const E = s_parseInt(a, 10);
              if (E > 65535) {
                return J;
              }
              this.port = this.isSpecial() && E === tp[this.scheme] ? null : E;
              a = "";
            }
            if (e) {
              return;
            }
            o = tP;
            continue;
          }
          break;
        case tk:
          this.scheme = "file";
          if (l === "/" || l === "\\") {
            o = tN;
          } else if (r && r.scheme === "file") {
            switch (l) {
              case n:
                this.host = r.host;
                this.path = g(r.path);
                this.query = r.query;
                break;
              case "?":
                this.host = r.host;
                this.path = g(r.path);
                this.query = "";
                o = tC;
                break;
              case "#":
                this.host = r.host;
                this.path = g(r.path);
                this.query = r.query;
                this.fragment = "";
                o = tL;
                break;
              default:
                if (!ty(D(g(f, i), ""))) {
                  this.host = r.host;
                  this.path = g(r.path);
                  this.shortenPath();
                }
                o = tD;
                continue;
            }
          } else {
            o = tD;
            continue;
          }
          break;
        case tN:
          if (l === "/" || l === "\\") {
            o = tj;
            break;
          }
          if (r && r.scheme === "file" && !ty(D(g(f, i), ""))) {
            if (tg(r.path[0], true)) {
              L(this.path, r.path[0]);
            } else {
              this.host = r.host;
            }
          }
          o = tD;
          continue;
        case tj:
          if (l === n || l === "/" || l === "\\" || l === "?" || l === "#") {
            if (!e && tg(a)) {
              o = tD;
            } else if (a === "") {
              this.host = "";
              if (e) {
                return;
              }
              o = tP;
            } else {
              if ((d = this.parseHost(a))) {
                return d;
              }
              if (this.host === "localhost") {
                this.host = "";
              }
              if (e) {
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
            o = tD;
            if (l !== "/" && l !== "\\") {
              continue;
            }
          } else if (e || l !== "?") {
            if (e || l !== "#") {
              if (l !== n && ((o = tD), l !== "/")) {
                continue;
              }
            } else {
              this.fragment = "";
              o = tL;
            }
          } else {
            this.query = "";
            o = tC;
          }
          break;
        case tD:
          if (
            l === n ||
            l === "/" ||
            (l === "\\" && this.isSpecial()) ||
            (!e && (l === "?" || l === "#"))
          ) {
            if (
              (y = W((y = a))) === ".." ||
              y === "%2e." ||
              y === ".%2e" ||
              y === "%2e%2e"
            ) {
              this.shortenPath();
              if (!(l === "/" || (l === "\\" && this.isSpecial()))) {
                L(this.path, "");
              }
            } else if ((m = a) === "." || W(m) === "%2e") {
              if (!(l === "/" || (l === "\\" && this.isSpecial()))) {
                L(this.path, "");
              }
            } else {
              if (this.scheme === "file" && !this.path.length && tg(a)) {
                if (this.host) {
                  this.host = "";
                }
                a = j(a, 0) + ":";
              }
              L(this.path, a);
            }
            a = "";
            if (this.scheme === "file" && (l === n || l === "?" || l === "#")) {
              while (this.path.length > 1 && this.path[0] === "") {
                B(this.path);
              }
            }
            if (l === "?") {
              this.query = "";
              o = tC;
            } else if (l === "#") {
              this.fragment = "";
              o = tL;
            }
          } else {
            a += td(l, th);
          }
          break;
        case tF:
          switch (l) {
            case "?":
              this.query = "";
              o = tC;
              break;
            case "#":
              this.fragment = "";
              o = tL;
              break;
            default:
              if (l !== n) {
                this.path[0] += td(l, tf);
              }
          }
          break;
        case tC:
          if (e || l !== "#") {
            if (l !== n) {
              if (l === "'" && this.isSpecial()) {
                this.query += "%27";
              } else if (l === "#") {
                this.query += "%23";
              } else {
                this.query += td(l, tf);
              }
            }
          } else {
            this.fragment = "";
            o = tL;
          }
          break;
        case tL:
          if (l !== n) {
            this.fragment += td(l, tl);
          }
      }
      i++;
    }
  },
  parseHost: function (t) {
    let e;
    let r;
    let n;
    if (j(t, 0) === "[") {
      if (j(t, t.length - 1) !== "]" || !(e = ts(Y(t, 1, -1)))) {
        return z;
      }
      this.host = e;
    } else if (this.isSpecial()) {
      if (P(te, (t = m(t))) || (e = ta(t)) === null) {
        return z;
      }
      this.host = e;
    } else {
      if (P(tr, t)) {
        return z;
      }
      e = "";
      r = p(t);
      for (n = 0; n < r.length; n++) {
        e += td(r[n], tf);
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
    return v(tp, this.scheme);
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
    this.parse(b(t) + ":", tm);
  },
  getUsername: function () {
    return this.username;
  },
  setUsername: function (t) {
    const e = p(b(t));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.username = "";
      for (let r = 0; r < e.length; r++) {
        this.username += td(e[r], tv);
      }
    }
  },
  getPassword: function () {
    return this.password;
  },
  setPassword: function (t) {
    const e = p(b(t));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.password = "";
      for (let r = 0; r < e.length; r++) {
        this.password += td(e[r], tv);
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
      this.parse(t, tM);
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
      this.parse(t, tI);
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
    if ((t = b(t)) === "") {
      this.query = null;
    } else {
      if (j(t, 0) === "?") {
        t = Y(t, 1);
      }
      this.query = "";
      this.parse(t, tC);
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
    if (j(t, 0) === "#") {
      t = Y(t, 1);
    }
    this.fragment = "";
    this.parse(t, tL);
  },
  update: function () {
    this.query = this.searchParams.serialize() || null;
  },
};
var URL = function (t) {
  const e = h(this, tB_prototype);
  const r = A(arguments.length, 1) > 1 ? arguments[1] : undefined;
  const n = E_set(e, new tU(t, false, r));
  if (!i) {
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
var tB_prototype = URL.prototype;
const tY = (t, e) => ({
  get: function () {
    return O(this)[t]();
  },
  set:
    e &&
    function (t) {
      return O(this)[e](t);
    },
  configurable: true,
  enumerable: true,
});
if (i) {
  l(tB_prototype, "href", tY("serialize", "setHref"));
  l(tB_prototype, "origin", tY("getOrigin"));
  l(tB_prototype, "protocol", tY("getProtocol", "setProtocol"));
  l(tB_prototype, "username", tY("getUsername", "setUsername"));
  l(tB_prototype, "password", tY("getPassword", "setPassword"));
  l(tB_prototype, "host", tY("getHost", "setHost"));
  l(tB_prototype, "hostname", tY("getHostname", "setHostname"));
  l(tB_prototype, "port", tY("getPort", "setPort"));
  l(tB_prototype, "pathname", tY("getPathname", "setPathname"));
  l(tB_prototype, "search", tY("getSearch", "setSearch"));
  l(tB_prototype, "searchParams", tY("getSearchParams"));
  l(tB_prototype, "hash", tY("getHash", "setHash"));
}
f(
  tB_prototype,
  "toJSON",
  function () {
    return O(this).serialize();
  },
  {
    enumerable: true,
  },
);
f(
  tB_prototype,
  "toString",
  function () {
    return O(this).serialize();
  },
  {
    enumerable: true,
  },
);
if (s_URL) {
  const tW = s_URL.createObjectURL;
  const tX = s_URL.revokeObjectURL;
  if (tW) {
    f(URL, "createObjectURL", u(tW, s_URL));
  }
  if (tX) {
    f(URL, "revokeObjectURL", u(tX, s_URL));
  }
}
w(URL, "URL");
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
