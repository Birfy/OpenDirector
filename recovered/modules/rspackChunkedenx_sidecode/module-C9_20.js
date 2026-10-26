import "./module-X4_20.js";
import o from "./module-A_21.js";
import i from "./module-r9_20.js";
import a from "./module-BZO_20.js";
import s from "./module-J_21.js";
import c from "./module-WG_2_20.js";
import u from "./module-O9_20.js";
import f from "./module-vE_20.js";
import l from "./module-I_21.js";
import h from "./module-A2_21.js";
import v from "./module-D_2_20.js";
import p from "./module-Eu_21.js";
import d from "./module-zd_20.js";
import g from "./module-wL_20.js";
import _y from "./module-iv_20.js";
import m from "./module-zyf_20.js";
import b from "./module-ng_21.js";
import w from "./module-HZ_20.js";
import A from "./module-eXf_20.js";
import x from "./module-pm_20.js";
import S from "./module-b_20.js";
let n;
const _y_codeAt = _y.codeAt;
const S_set = S.set;
const O = S.getterFor("URL");
const x_URLSearchParams = x.URLSearchParams;
const x_getState = x.getState;
const s_URL = s.URL;
const s_TypeError = s.TypeError;
const s_parseInt = s.parseInt;
const N = u("".charAt);
const D = u(/./.exec);
const P = u([].join);
const C = u((1).toString);
const F = u([].pop);
const L = u([].push);
const U = u("".replace);
const V = u([].shift);
const B = u("".split);
const z = u("".slice);
const Y = u("".toLowerCase);
const W = u([].unshift);
const q = "Invalid scheme";
const H = "Invalid host";
const X = "Invalid port";
const G = /[a-z]/i;
const J = /[\d+-.a-z]/i;
const K = /\d/;
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
  const c = B(t, ".");
  if (c.length && c[c.length - 1] === "") {
    c.length--;
  }
  if ((r = c.length) > 4) {
    return t;
  }
  n = 0;
  for (e = []; n < r; n++) {
    if ((o = c[n]) === "") {
      return t;
    }
    i = 10;
    if (o.length > 1 && N(o, 0) === "0") {
      i = D(Q, o) ? 16 : 8;
      o = z(o, i === 8 ? 1 : 2);
    }
    if (o === "") {
      a = 0;
    } else {
      if (!D(i === 10 ? $ : i === 8 ? Z : tt, o)) {
        return t;
      }
      a = s_parseInt(o, i);
    }
    L(e, a);
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
  s = F(e);
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
  const c = [0, 0, 0, 0, 0, 0, 0, 0];
  let u = 0;
  let f = null;
  let l = 0;
  const h = () => N(t, l);
  if (h() === ":") {
    if (N(t, 1) !== ":") {
      return;
    }
    l += 2;
    f = ++u;
  }
  while (h()) {
    if (u === 8) {
      return;
    }
    if (h() === ":") {
      if (f !== null) {
        return;
      }
      l++;
      f = ++u;
      continue;
    }
    for (r = e = 0; e < 4 && D(tt, h());) {
      r = 16 * r + s_parseInt(h(), 16);
      l++;
      e++;
    }
    if (h() === ".") {
      if (e === 0 || ((l -= e), u > 6)) {
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
        if (!D(K, h())) {
          return;
        }
        while (D(K, h())) {
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
        c[u] = 256 * c[u] + o;
        if (++n == 2 || n === 4) {
          u++;
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
    c[u++] = r;
  }
  if (f !== null) {
    a = u - f;
    for (u = 7; u !== 0 && a > 0;) {
      s = c[u];
      c[u--] = c[f + a - 1];
      c[f + --a] = s;
    }
  } else if (u !== 8) {
    return;
  }
  return c;
};
const tc = (t) => {
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
const tu = (t) => {
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
    return P(r, ".");
  }
  if (typeof t === "object") {
    r = "";
    n = tc(t);
    for (e = 0; e < 8; e++) {
      if (!o || t[e] !== 0) {
        if (o) {
          o = false;
        }
        if (n === e) {
          r += e ? ":" : "::";
          o = true;
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
    D(G, N(t, 0)) &&
    ((e = N(t, 1)) === ":" || (!r && e === "|"))
  );
};
const ty = (t) => {
  let r;
  return (
    t.length > 1 &&
    tg(z(t, 0, 2)) &&
    (t.length === 2 ||
      (r = N(t, 2)) === "/" ||
      r === "\\" ||
      r === "?" ||
      r === "#")
  );
};
const tm = {};
const tb = {};
const tw = {};
const tA = {};
const tx = {};
const tS = {};
const tE = {};
const tO = {};
const tR = {};
const tM = {};
const tI = {};
const t_ = {};
const tk = {};
const tT = {};
const tj = {};
const tN = {};
const tD = {};
const tP = {};
const tC = {};
const tF = {};
const tL = {};
const tU = function (t, r, e) {
  let n;
  let o;
  let i;
  const a = b(t);
  if (r) {
    if ((o = this.parse(a))) {
      throw s_TypeError(o);
    }
    this.searchParams = null;
  } else {
    if (e !== undefined) {
      n = new tU(e, true);
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
  parse: function (t, r, e) {
    let o = r || tm;
    let i = 0;
    let a = "";
    let s = false;
    let c = false;
    let u = false;
    t = b(t);
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
      t = U(t, tn, "");
      t = U(t, to, "$1");
    }
    for (f = d((t = U(t, ti, ""))); i <= f.length;) {
      l = f[i];
      switch (o) {
        case tm:
          if (l && D(G, l)) {
            a += Y(l);
            o = tb;
          } else {
            if (r) {
              return q;
            }
            o = tw;
            continue;
          }
          break;
        case tb:
          if (l && (D(J, l) || l === "+" || l === "-" || l === ".")) {
            a += Y(l);
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
              o = tT;
            } else if (this.isSpecial() && e && e.scheme === this.scheme) {
              o = tA;
            } else if (this.isSpecial()) {
              o = tO;
            } else if (f[i + 1] === "/") {
              o = tx;
              i++;
            } else {
              this.cannotBeABaseURL = true;
              L(this.path, "");
              o = tC;
            }
          } else {
            if (r) {
              return q;
            }
            a = "";
            o = tw;
            i = 0;
            continue;
          }
          break;
        case tw:
          if (!e || (e.cannotBeABaseURL && l !== "#")) {
            return q;
          }
          if (e.cannotBeABaseURL && l === "#") {
            this.scheme = e.scheme;
            this.path = g(e.path);
            this.query = e.query;
            this.fragment = "";
            this.cannotBeABaseURL = true;
            o = tL;
            break;
          }
          o = e.scheme === "file" ? tT : tS;
          continue;
        case tA:
          if (l === "/" && f[i + 1] === "/") {
            o = tR;
            i++;
          } else {
            o = tS;
            continue;
          }
          break;
        case tx:
          if (l === "/") {
            o = tM;
            break;
          }
          o = tP;
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
            o = tF;
          } else if (l === "#") {
            this.username = e.username;
            this.password = e.password;
            this.host = e.host;
            this.port = e.port;
            this.path = g(e.path);
            this.query = e.query;
            this.fragment = "";
            o = tL;
          } else {
            this.username = e.username;
            this.password = e.password;
            this.host = e.host;
            this.port = e.port;
            this.path = g(e.path);
            this.path.length--;
            o = tP;
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
            o = tP;
            continue;
          }
          break;
        case tO:
          o = tR;
          if (l !== "/" || N(a, i + 1) !== "/") {
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
            var m;
            for (var h, w = 0; w < h.length; w++) {
              const A = h[w];
              if (A === ":" && !u) {
                u = true;
                continue;
              }
              const x = tp(A, tv);
              if (u) {
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
            o = tI;
          } else {
            a += l;
          }
          break;
        case tI:
        case t_:
          if (r && this.scheme === "file") {
            o = tN;
            continue;
          }
          if (l !== ":" || c) {
            if (
              l === n ||
              l === "/" ||
              l === "?" ||
              l === "#" ||
              (l === "\\" && this.isSpecial())
            ) {
              if (this.isSpecial() && a === "") {
                return H;
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
              o = tD;
              if (r) {
                return;
              }
              continue;
            } else {
              if (l === "[") {
                c = true;
              } else if (l === "]") {
                c = false;
              }
              a += l;
            }
          } else {
            if (a === "") {
              return H;
            }
            if ((p = this.parseHost(a))) {
              return p;
            }
            a = "";
            o = tk;
            if (r === t_) {
              return;
            }
          }
          break;
        case tk:
          if (D(K, l)) {
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
              return X;
            }
            if (a !== "") {
              const S = s_parseInt(a, 10);
              if (S > 65535) {
                return X;
              }
              this.port = this.isSpecial() && S === td[this.scheme] ? null : S;
              a = "";
            }
            if (r) {
              return;
            }
            o = tD;
            continue;
          }
          break;
        case tT:
          this.scheme = "file";
          if (l === "/" || l === "\\") {
            o = tj;
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
                o = tF;
                break;
              case "#":
                this.host = e.host;
                this.path = g(e.path);
                this.query = e.query;
                this.fragment = "";
                o = tL;
                break;
              default:
                if (!ty(P(g(f, i), ""))) {
                  this.host = e.host;
                  this.path = g(e.path);
                  this.shortenPath();
                }
                o = tP;
                continue;
            }
          } else {
            o = tP;
            continue;
          }
          break;
        case tj:
          if (l === "/" || l === "\\") {
            o = tN;
            break;
          }
          if (e && e.scheme === "file" && !ty(P(g(f, i), ""))) {
            if (tg(e.path[0], true)) {
              L(this.path, e.path[0]);
            } else {
              this.host = e.host;
            }
          }
          o = tP;
          continue;
        case tN:
          if (l === n || l === "/" || l === "\\" || l === "?" || l === "#") {
            if (!r && tg(a)) {
              o = tP;
            } else if (a === "") {
              this.host = "";
              if (r) {
                return;
              }
              o = tD;
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
              o = tD;
            }
            continue;
          }
          a += l;
          break;
        case tD:
          if (this.isSpecial()) {
            o = tP;
            if (l !== "/" && l !== "\\") {
              continue;
            }
          } else if (r || l !== "?") {
            if (r || l !== "#") {
              if (l !== n && ((o = tP), l !== "/")) {
                continue;
              }
            } else {
              this.fragment = "";
              o = tL;
            }
          } else {
            this.query = "";
            o = tF;
          }
          break;
        case tP:
          if (
            l === n ||
            l === "/" ||
            (l === "\\" && this.isSpecial()) ||
            (!r && (l === "?" || l === "#"))
          ) {
            if (
              (y = Y((y = a))) === ".." ||
              y === "%2e." ||
              y === ".%2e" ||
              y === "%2e%2e"
            ) {
              this.shortenPath();
              if (!(l === "/" || (l === "\\" && this.isSpecial()))) {
                L(this.path, "");
              }
            } else if ((m = a) === "." || Y(m) === "%2e") {
              if (!(l === "/" || (l === "\\" && this.isSpecial()))) {
                L(this.path, "");
              }
            } else {
              if (this.scheme === "file" && !this.path.length && tg(a)) {
                if (this.host) {
                  this.host = "";
                }
                a = N(a, 0) + ":";
              }
              L(this.path, a);
            }
            a = "";
            if (this.scheme === "file" && (l === n || l === "?" || l === "#")) {
              while (this.path.length > 1 && this.path[0] === "") {
                V(this.path);
              }
            }
            if (l === "?") {
              this.query = "";
              o = tF;
            } else if (l === "#") {
              this.fragment = "";
              o = tL;
            }
          } else {
            a += tp(l, th);
          }
          break;
        case tC:
          switch (l) {
            case "?":
              this.query = "";
              o = tF;
              break;
            case "#":
              this.fragment = "";
              o = tL;
              break;
            default:
              if (l !== n) {
                this.path[0] += tp(l, tf);
              }
          }
          break;
        case tF:
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
            o = tL;
          }
          break;
        case tL:
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
    if (N(t, 0) === "[") {
      if (N(t, t.length - 1) !== "]" || !(r = ts(z(t, 1, -1)))) {
        return H;
      }
      this.host = r;
    } else if (this.isSpecial()) {
      if (D(tr, (t = m(t))) || (r = ta(t)) === null) {
        return H;
      }
      this.host = r;
    } else {
      if (D(te, t)) {
        return H;
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
    let c = scheme + ":";
    if (host !== null) {
      c += "//";
      if (this.includesCredentials()) {
        c += `${username + (password ? ":" + password : "")}@`;
      }
      c += tu(host);
      if (port !== null) {
        c += ":" + port;
      }
    } else if (scheme === "file") {
      c += "//";
    }
    c += this.cannotBeABaseURL
      ? path[0]
      : path.length
        ? "/" + P(path, "/")
        : "";
    if (query !== null) {
      c += "?" + query;
    }
    if (fragment !== null) {
      c += "#" + fragment;
    }
    return c;
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
      return scheme + "://" + tu(this.host) + (port !== null ? ":" + port : "");
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
    const r = d(b(t));
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
    const r = d(b(t));
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
      return tu(host);
    }
    return tu(host) + ":" + port;
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
    return tu(host);
  },
  setHostname: function (t) {
    if (!this.cannotBeABaseURL) {
      this.parse(t, t_);
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
        this.parse(t, tk);
      }
    }
  },
  getPathname: function () {
    const path = this.path;
    if (this.cannotBeABaseURL) {
      return path[0];
    }
    if (path.length) {
      return "/" + P(path, "/");
    }
    return "";
  },
  setPathname: function (t) {
    if (!this.cannotBeABaseURL) {
      this.path = [];
      this.parse(t, tD);
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
      if (N(t, 0) === "?") {
        t = z(t, 1);
      }
      this.query = "";
      this.parse(t, tF);
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
    if (N(t, 0) === "#") {
      t = z(t, 1);
    }
    this.fragment = "";
    this.parse(t, tL);
  },
  update: function () {
    this.query = this.searchParams.serialize() || null;
  },
};
var URL = function (t) {
  const r = h(this, tV_prototype);
  const e = A(arguments.length, 1) > 1 ? arguments[1] : undefined;
  const n = S_set(r, new tU(t, false, e));
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
var tV_prototype = URL.prototype;
const tz = (t, r) => ({
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
  l(tV_prototype, "href", tz("serialize", "setHref"));
  l(tV_prototype, "origin", tz("getOrigin"));
  l(tV_prototype, "protocol", tz("getProtocol", "setProtocol"));
  l(tV_prototype, "username", tz("getUsername", "setUsername"));
  l(tV_prototype, "password", tz("getPassword", "setPassword"));
  l(tV_prototype, "host", tz("getHost", "setHost"));
  l(tV_prototype, "hostname", tz("getHostname", "setHostname"));
  l(tV_prototype, "port", tz("getPort", "setPort"));
  l(tV_prototype, "pathname", tz("getPathname", "setPathname"));
  l(tV_prototype, "search", tz("getSearch", "setSearch"));
  l(tV_prototype, "searchParams", tz("getSearchParams"));
  l(tV_prototype, "hash", tz("getHash", "setHash"));
}
f(
  tV_prototype,
  "toJSON",
  function () {
    return O(this).serialize();
  },
  {
    enumerable: true,
  },
);
f(
  tV_prototype,
  "toString",
  function () {
    return O(this).serialize();
  },
  {
    enumerable: true,
  },
);
if (s_URL) {
  const tY = s_URL.createObjectURL;
  const tW = s_URL.revokeObjectURL;
  if (tY) {
    f(URL, "createObjectURL", c(tY, s_URL));
  }
  if (tW) {
    f(URL, "revokeObjectURL", c(tW, s_URL));
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
