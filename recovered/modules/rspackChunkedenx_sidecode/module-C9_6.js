import "./module-X4_6.js";
import o from "./module-A_7.js";
import a from "./module-r9_6.js";
import i from "./module-BZO_6.js";
import s from "./module-J_7.js";
import c from "./module-WG_2_6.js";
import u from "./module-O9_6.js";
import f from "./module-vE_6.js";
import l from "./module-I_7.js";
import h from "./module-A2_7.js";
import p from "./module-D_2_6.js";
import v from "./module-Eu_7.js";
import d from "./module-zd_6.js";
import g from "./module-wL_6.js";
import _y from "./module-iv_6.js";
import m from "./module-zyf_6.js";
import b from "./module-ng_7.js";
import A from "./module-HZ_6.js";
import w from "./module-eXf_6.js";
import x from "./module-pm_6.js";
import E from "./module-b_6.js";
let n;
const _y_codeAt = _y.codeAt;
const E_set = E.set;
const O = E.getterFor("URL");
const x_URLSearchParams = x.URLSearchParams;
const x_getState = x.getState;
const s_URL = s.URL;
const s_TypeError = s.TypeError;
const s_parseInt = s.parseInt;
const N = u("".charAt);
const P = u(/./.exec);
const C = u([].join);
const D = u((1).toString);
const L = u([].pop);
const _ = u([].push);
const U = u("".replace);
const V = u([].shift);
const W = u("".split);
const Y = u("".slice);
const B = u("".toLowerCase);
const z = u([].unshift);
const X = "Invalid scheme";
const H = "Invalid host";
const G = "Invalid port";
const J = /[a-z]/i;
const q = /[\d+-.a-z]/i;
const K = /\d/;
const Q = /^0x/i;
const Z = /^[0-7]+$/;
const $ = /^\d+$/;
const tt = /^[\da-f]+$/i;
const tr = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
const te = /[\0\t\n\r #/:<>?@[\\\]^|]/;
const tn = /^[\u0000-\u0020]+/;
const to = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
const ta = /[\t\n\r]/g;
const ti = (t) => {
  let r;
  let e;
  let n;
  let o;
  let a;
  let i;
  let s;
  const c = W(t, ".");
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
    a = 10;
    if (o.length > 1 && N(o, 0) === "0") {
      a = P(Q, o) ? 16 : 8;
      o = Y(o, a === 8 ? 1 : 2);
    }
    if (o === "") {
      i = 0;
    } else {
      if (!P(a === 10 ? $ : a === 8 ? Z : tt, o)) {
        return t;
      }
      i = s_parseInt(o, a);
    }
    _(e, i);
  }
  for (n = 0; n < r; n++) {
    i = e[n];
    if (n === r - 1) {
      if (i >= 256 ** (5 - r)) {
        return null;
      }
    } else if (i > 255) {
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
  let a;
  let i;
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
    for (r = e = 0; e < 4 && P(tt, h());) {
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
        if (!P(K, h())) {
          return;
        }
        while (P(K, h())) {
          a = s_parseInt(h(), 10);
          if (o === null) {
            o = a;
          } else {
            if (o === 0) {
              return;
            }
            o = 10 * o + a;
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
    i = u - f;
    for (u = 7; u !== 0 && i > 0;) {
      s = c[u];
      c[u--] = c[f + i - 1];
      c[f + --i] = s;
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
  for (let a = 0; a < 8; a++) {
    if (t[a] !== 0) {
      if (o > e) {
        r = n;
        e = o;
      }
      n = null;
      o = 0;
    } else {
      if (n === null) {
        n = a;
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
      z(r, t % 256);
      t = Math.floor(t / 256);
    }
    return C(r, ".");
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
const tl = v({}, tf, {
  " ": 1,
  '"': 1,
  "<": 1,
  ">": 1,
  "`": 1,
});
const th = v({}, tl, {
  "#": 1,
  "?": 1,
  "{": 1,
  "}": 1,
});
const tp = v({}, th, {
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
const tv = (t, r) => {
  const e = _y_codeAt(t, 0);
  if (e > 32 && e < 127 && !p(r, t)) {
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
    P(J, N(t, 0)) &&
    ((e = N(t, 1)) === ":" || (!r && e === "|"))
  );
};
const ty = (t) => {
  let r;
  return (
    t.length > 1 &&
    tg(Y(t, 0, 2)) &&
    (t.length === 2 ||
      (r = N(t, 2)) === "/" ||
      r === "\\" ||
      r === "?" ||
      r === "#")
  );
};
const tm = {};
const tb = {};
const tA = {};
const tw = {};
const tx = {};
const tE = {};
const tS = {};
const tO = {};
const tR = {};
const tM = {};
const tI = {};
const tk = {};
const tT = {};
const tj = {};
const tF = {};
const tN = {};
const tP = {};
const tC = {};
const tD = {};
const tL = {};
const t_ = {};
const tU = function (t, r, e) {
  let n;
  let o;
  let a;
  const i = b(t);
  if (r) {
    if ((o = this.parse(i))) {
      throw s_TypeError(o);
    }
    this.searchParams = null;
  } else {
    if (e !== undefined) {
      n = new tU(e, true);
    }
    if ((o = this.parse(i, null, n))) {
      throw s_TypeError(o);
    }
    (a = x_getState(new x_URLSearchParams())).bindURL(this);
    this.searchParams = a;
  }
};
tU.prototype = {
  type: "URL",
  parse: function (t, r, e) {
    let o = r || tm;
    let a = 0;
    let i = "";
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
    for (f = d((t = U(t, ta, ""))); a <= f.length;) {
      l = f[a];
      switch (o) {
        case tm:
          if (l && P(J, l)) {
            i += B(l);
            o = tb;
          } else {
            if (r) {
              return X;
            }
            o = tA;
            continue;
          }
          break;
        case tb:
          if (l && (P(q, l) || l === "+" || l === "-" || l === ".")) {
            i += B(l);
          } else if (l === ":") {
            if (
              r &&
              (this.isSpecial() !== p(td, i) ||
                (i === "file" &&
                  (this.includesCredentials() || this.port !== null)) ||
                (this.scheme === "file" && !this.host))
            ) {
              return;
            }
            this.scheme = i;
            if (r) {
              if (this.isSpecial() && td[this.scheme] === this.port) {
                this.port = null;
              }
              return;
            }
            i = "";
            if (this.scheme === "file") {
              o = tj;
            } else if (this.isSpecial() && e && e.scheme === this.scheme) {
              o = tw;
            } else if (this.isSpecial()) {
              o = tO;
            } else if (f[a + 1] === "/") {
              o = tx;
              a++;
            } else {
              this.cannotBeABaseURL = true;
              _(this.path, "");
              o = tD;
            }
          } else {
            if (r) {
              return X;
            }
            i = "";
            o = tA;
            a = 0;
            continue;
          }
          break;
        case tA:
          if (!e || (e.cannotBeABaseURL && l !== "#")) {
            return X;
          }
          if (e.cannotBeABaseURL && l === "#") {
            this.scheme = e.scheme;
            this.path = g(e.path);
            this.query = e.query;
            this.fragment = "";
            this.cannotBeABaseURL = true;
            o = t_;
            break;
          }
          o = e.scheme === "file" ? tj : tE;
          continue;
        case tw:
          if (l === "/" && f[a + 1] === "/") {
            o = tR;
            a++;
          } else {
            o = tE;
            continue;
          }
          break;
        case tx:
          if (l === "/") {
            o = tM;
            break;
          }
          o = tC;
          continue;
        case tE:
          this.scheme = e.scheme;
          if (l === n) {
            this.username = e.username;
            this.password = e.password;
            this.host = e.host;
            this.port = e.port;
            this.path = g(e.path);
            this.query = e.query;
          } else if (l === "/" || (l === "\\" && this.isSpecial())) {
            o = tS;
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
            o = t_;
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
        case tS:
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
          if (l !== "/" || N(i, a + 1) !== "/") {
            continue;
          }
          a++;
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
              i = "%40" + i;
            }
            s = true;
            h = d(i);
            var f;
            var l;
            var v;
            var y;
            var m;
            for (var h, A = 0; A < h.length; A++) {
              const w = h[A];
              if (w === ":" && !u) {
                u = true;
                continue;
              }
              const x = tv(w, tp);
              if (u) {
                this.password += x;
              } else {
                this.username += x;
              }
            }
            i = "";
          } else if (
            l === n ||
            l === "/" ||
            l === "?" ||
            l === "#" ||
            (l === "\\" && this.isSpecial())
          ) {
            if (s && i === "") {
              return "Invalid authority";
            }
            a -= d(i).length + 1;
            i = "";
            o = tI;
          } else {
            i += l;
          }
          break;
        case tI:
        case tk:
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
              if (this.isSpecial() && i === "") {
                return H;
              }
              if (
                r &&
                i === "" &&
                (this.includesCredentials() || this.port !== null)
              ) {
                return;
              }
              if ((v = this.parseHost(i))) {
                return v;
              }
              i = "";
              o = tP;
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
              i += l;
            }
          } else {
            if (i === "") {
              return H;
            }
            if ((v = this.parseHost(i))) {
              return v;
            }
            i = "";
            o = tT;
            if (r === tk) {
              return;
            }
          }
          break;
        case tT:
          if (P(K, l)) {
            i += l;
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
              return G;
            }
            if (i !== "") {
              const E = s_parseInt(i, 10);
              if (E > 65535) {
                return G;
              }
              this.port = this.isSpecial() && E === td[this.scheme] ? null : E;
              i = "";
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
            o = tF;
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
                o = t_;
                break;
              default:
                if (!ty(C(g(f, a), ""))) {
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
        case tF:
          if (l === "/" || l === "\\") {
            o = tN;
            break;
          }
          if (e && e.scheme === "file" && !ty(C(g(f, a), ""))) {
            if (tg(e.path[0], true)) {
              _(this.path, e.path[0]);
            } else {
              this.host = e.host;
            }
          }
          o = tC;
          continue;
        case tN:
          if (l === n || l === "/" || l === "\\" || l === "?" || l === "#") {
            if (!r && tg(i)) {
              o = tC;
            } else if (i === "") {
              this.host = "";
              if (r) {
                return;
              }
              o = tP;
            } else {
              if ((v = this.parseHost(i))) {
                return v;
              }
              if (this.host === "localhost") {
                this.host = "";
              }
              if (r) {
                return;
              }
              i = "";
              o = tP;
            }
            continue;
          }
          i += l;
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
              o = t_;
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
              (y = B((y = i))) === ".." ||
              y === "%2e." ||
              y === ".%2e" ||
              y === "%2e%2e"
            ) {
              this.shortenPath();
              if (!(l === "/" || (l === "\\" && this.isSpecial()))) {
                _(this.path, "");
              }
            } else if ((m = i) === "." || B(m) === "%2e") {
              if (!(l === "/" || (l === "\\" && this.isSpecial()))) {
                _(this.path, "");
              }
            } else {
              if (this.scheme === "file" && !this.path.length && tg(i)) {
                if (this.host) {
                  this.host = "";
                }
                i = N(i, 0) + ":";
              }
              _(this.path, i);
            }
            i = "";
            if (this.scheme === "file" && (l === n || l === "?" || l === "#")) {
              while (this.path.length > 1 && this.path[0] === "") {
                V(this.path);
              }
            }
            if (l === "?") {
              this.query = "";
              o = tL;
            } else if (l === "#") {
              this.fragment = "";
              o = t_;
            }
          } else {
            i += tv(l, th);
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
              o = t_;
              break;
            default:
              if (l !== n) {
                this.path[0] += tv(l, tf);
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
                this.query += tv(l, tf);
              }
            }
          } else {
            this.fragment = "";
            o = t_;
          }
          break;
        case t_:
          if (l !== n) {
            this.fragment += tv(l, tl);
          }
      }
      a++;
    }
  },
  parseHost: function (t) {
    let r;
    let e;
    let n;
    if (N(t, 0) === "[") {
      if (N(t, t.length - 1) !== "]" || !(r = ts(Y(t, 1, -1)))) {
        return H;
      }
      this.host = r;
    } else if (this.isSpecial()) {
      if (P(tr, (t = m(t))) || (r = ti(t)) === null) {
        return H;
      }
      this.host = r;
    } else {
      if (P(te, t)) {
        return H;
      }
      r = "";
      e = d(t);
      for (n = 0; n < e.length; n++) {
        r += tv(e[n], tf);
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
    return p(td, this.scheme);
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
        ? "/" + C(path, "/")
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
        this.username += tv(r[e], tp);
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
        this.password += tv(r[e], tp);
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
      this.parse(t, tk);
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
    if ((t = b(t)) === "") {
      this.query = null;
    } else {
      if (N(t, 0) === "?") {
        t = Y(t, 1);
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
    if ((t = b(t)) === "") {
      this.fragment = null;
      return;
    }
    if (N(t, 0) === "#") {
      t = Y(t, 1);
    }
    this.fragment = "";
    this.parse(t, t_);
  },
  update: function () {
    this.query = this.searchParams.serialize() || null;
  },
};
var URL = function (t) {
  const r = h(this, tV_prototype);
  const e = w(arguments.length, 1) > 1 ? arguments[1] : undefined;
  const n = E_set(r, new tU(t, false, e));
  if (!a) {
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
const tY = (t, r) => ({
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
if (a) {
  l(tV_prototype, "href", tY("serialize", "setHref"));
  l(tV_prototype, "origin", tY("getOrigin"));
  l(tV_prototype, "protocol", tY("getProtocol", "setProtocol"));
  l(tV_prototype, "username", tY("getUsername", "setUsername"));
  l(tV_prototype, "password", tY("getPassword", "setPassword"));
  l(tV_prototype, "host", tY("getHost", "setHost"));
  l(tV_prototype, "hostname", tY("getHostname", "setHostname"));
  l(tV_prototype, "port", tY("getPort", "setPort"));
  l(tV_prototype, "pathname", tY("getPathname", "setPathname"));
  l(tV_prototype, "search", tY("getSearch", "setSearch"));
  l(tV_prototype, "searchParams", tY("getSearchParams"));
  l(tV_prototype, "hash", tY("getHash", "setHash"));
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
  const tB = s_URL.createObjectURL;
  const tz = s_URL.revokeObjectURL;
  if (tB) {
    f(URL, "createObjectURL", c(tB, s_URL));
  }
  if (tz) {
    f(URL, "revokeObjectURL", c(tz, s_URL));
  }
}
A(URL, "URL");
o(
  {
    global: true,
    constructor: true,
    forced: !i,
    sham: !a,
  },
  {
    URL,
  },
);
