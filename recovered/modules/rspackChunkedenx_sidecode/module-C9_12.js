import "./module-X4_12.js";
import tt from "./module-A_13.js";
import te from "./module-r9_12.js";
import tr from "./module-BZO_12.js";
import tn from "./module-J_13.js";
import ti from "./module-WG_2_12.js";
import to from "./module-O9_12.js";
import ta from "./module-vE_12.js";
import ts from "./module-I_13.js";
import tf from "./module-A2_13.js";
import tu from "./module-D_2_12.js";
import tc from "./module-Eu_13.js";
import th from "./module-zd_12.js";
import td from "./module-wL_12.js";
import _tl from "./module-iv_12.js";
import tp from "./module-zyf_12.js";
import tb from "./module-ng_13.js";
import tv from "./module-HZ_12.js";
import tg from "./module-eXf_12.js";
import ty from "./module-pm_12.js";
import tm from "./module-b_12.js";
let $;
const _tl_codeAt = _tl.codeAt;
const tm_set = tm.set;
const tx = tm.getterFor("URL");
const ty_URLSearchParams = ty.URLSearchParams;
const ty_getState = ty.getState;
const tn_URL = tn.URL;
const tn_TypeError = tn.TypeError;
const tn_parseInt = tn.parseInt;
const tI = to("".charAt);
const tO = to(/./.exec);
const tT = to([].join);
const tB = to((1).toString);
const tj = to([].pop);
const tC = to([].push);
const tP = to("".replace);
const tL = to([].shift);
const tN = to("".split);
const tU = to("".slice);
const tD = to("".toLowerCase);
const tF = to([].unshift);
const tq = "Invalid scheme";
const tz = "Invalid host";
const tH = "Invalid port";
const tV = /[a-z]/i;
const tW = /[\d+-.a-z]/i;
const tK = /\d/;
const tY = /^0x/i;
const tX = /^[0-7]+$/;
const tG = /^\d+$/;
const tJ = /^[\da-f]+$/i;
const tZ = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
const tQ = /[\0\t\n\r #/:<>?@[\\\]^|]/;
const t$ = /^[\u0000-\u0020]+/;
const t0 = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
const t1 = /[\t\n\r]/g;
const t2 = (J) => {
  let Z;
  let Q;
  let $;
  let tt;
  let te;
  let tr;
  let tn;
  const ti = tN(J, ".");
  if (ti.length && ti[ti.length - 1] === "") {
    ti.length--;
  }
  if ((Z = ti.length) > 4) {
    return J;
  }
  $ = 0;
  for (Q = []; $ < Z; $++) {
    if ((tt = ti[$]) === "") {
      return J;
    }
    te = 10;
    if (tt.length > 1 && tI(tt, 0) === "0") {
      te = tO(tY, tt) ? 16 : 8;
      tt = tU(tt, te === 8 ? 1 : 2);
    }
    if (tt === "") {
      tr = 0;
    } else {
      if (!tO(te === 10 ? tG : te === 8 ? tX : tJ, tt)) {
        return J;
      }
      tr = tn_parseInt(tt, te);
    }
    tC(Q, tr);
  }
  for ($ = 0; $ < Z; $++) {
    tr = Q[$];
    if ($ === Z - 1) {
      if (tr >= 256 ** (5 - Z)) {
        return null;
      }
    } else if (tr > 255) {
      return null;
    }
  }
  tn = tj(Q);
  for ($ = 0; $ < Q.length; $++) {
    tn += Q[$] * 256 ** (3 - $);
  }
  return tn;
};
const t6 = (J) => {
  let Z;
  let Q;
  let $;
  let tt;
  let te;
  let tr;
  let tn;
  const ti = [0, 0, 0, 0, 0, 0, 0, 0];
  let to = 0;
  let ta = null;
  let ts = 0;
  const tf = () => tI(J, ts);
  if (tf() === ":") {
    if (tI(J, 1) !== ":") {
      return;
    }
    ts += 2;
    ta = ++to;
  }
  while (tf()) {
    if (to === 8) {
      return;
    }
    if (tf() === ":") {
      if (ta !== null) {
        return;
      }
      ts++;
      ta = ++to;
      continue;
    }
    for (Z = Q = 0; Q < 4 && tO(tJ, tf());) {
      Z = 16 * Z + tn_parseInt(tf(), 16);
      ts++;
      Q++;
    }
    if (tf() === ".") {
      if (Q === 0 || ((ts -= Q), to > 6)) {
        return;
      }
      for ($ = 0; tf();) {
        tt = null;
        if ($ > 0) {
          if (tf() !== "." || !($ < 4)) {
            return;
          } else {
            ts++;
          }
        }
        if (!tO(tK, tf())) {
          return;
        }
        while (tO(tK, tf())) {
          te = tn_parseInt(tf(), 10);
          if (tt === null) {
            tt = te;
          } else {
            if (tt === 0) {
              return;
            }
            tt = 10 * tt + te;
          }
          if (tt > 255) {
            return;
          }
          ts++;
        }
        ti[to] = 256 * ti[to] + tt;
        if (++$ == 2 || $ === 4) {
          to++;
        }
      }
      if ($ !== 4) {
        return;
      }
      break;
    }
    if (tf() === ":") {
      ts++;
      if (!tf()) {
        return;
      }
    } else if (tf()) {
      return;
    }
    ti[to++] = Z;
  }
  if (ta !== null) {
    tr = to - ta;
    for (to = 7; to !== 0 && tr > 0;) {
      tn = ti[to];
      ti[to--] = ti[ta + tr - 1];
      ti[ta + --tr] = tn;
    }
  } else if (to !== 8) {
    return;
  }
  return ti;
};
const t3 = (J) => {
  let Z = null;
  let Q = 1;
  let $ = null;
  let tt = 0;
  for (let te = 0; te < 8; te++) {
    if (J[te] !== 0) {
      if (tt > Q) {
        Z = $;
        Q = tt;
      }
      $ = null;
      tt = 0;
    } else {
      if ($ === null) {
        $ = te;
      }
      ++tt;
    }
  }
  if (tt > Q) {
    Z = $;
    Q = tt;
  }
  return Z;
};
const t4 = (J) => {
  let Z;
  let Q;
  let $;
  let tt;
  if (typeof J === "number") {
    Q = 0;
    for (Z = []; Q < 4; Q++) {
      tF(Z, J % 256);
      J = Math.floor(J / 256);
    }
    return tT(Z, ".");
  }
  if (typeof J === "object") {
    Z = "";
    $ = t3(J);
    for (Q = 0; Q < 8; Q++) {
      if (!tt || J[Q] !== 0) {
        if (tt) {
          tt = false;
        }
        if ($ === Q) {
          Z += Q ? ":" : "::";
          tt = true;
        } else {
          Z += tB(J[Q], 16);
          if (Q < 7) {
            Z += ":";
          }
        }
      }
    }
    return "[" + Z + "]";
  }
  return J;
};
const t8 = {};
const t5 = tc({}, t8, {
  " ": 1,
  '"': 1,
  "<": 1,
  ">": 1,
  "`": 1,
});
const t9 = tc({}, t5, {
  "#": 1,
  "?": 1,
  "{": 1,
  "}": 1,
});
const t7 = tc({}, t9, {
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
const et = (J, Z) => {
  const Q = _tl_codeAt(J, 0);
  if (Q > 32 && Q < 127 && !tu(Z, J)) {
    return J;
  }
  return encodeURIComponent(J);
};
const ee = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443,
};
const er = (J, Z) => {
  let Q;
  return (
    J.length === 2 &&
    tO(tV, tI(J, 0)) &&
    ((Q = tI(J, 1)) === ":" || (!Z && Q === "|"))
  );
};
const en = (J) => {
  let Z;
  return (
    J.length > 1 &&
    er(tU(J, 0, 2)) &&
    (J.length === 2 ||
      (Z = tI(J, 2)) === "/" ||
      Z === "\\" ||
      Z === "?" ||
      Z === "#")
  );
};
const ei = {};
const eo = {};
const ea = {};
const es = {};
const ef = {};
const eu = {};
const ec = {};
const eh = {};
const ed = {};
const el = {};
const ep = {};
const eb = {};
const ev = {};
const eg = {};
const ey = {};
const em = {};
const ew = {};
const ex = {};
const e_ = {};
const eM = {};
const eS = {};
const eA = function (J, Z, Q) {
  let $;
  let tt;
  let te;
  const tr = tb(J);
  if (Z) {
    if ((tt = this.parse(tr))) {
      throw tn_TypeError(tt);
    }
    this.searchParams = null;
  } else {
    if (Q !== undefined) {
      $ = new eA(Q, true);
    }
    if ((tt = this.parse(tr, null, $))) {
      throw tn_TypeError(tt);
    }
    (te = ty_getState(new ty_URLSearchParams())).bindURL(this);
    this.searchParams = te;
  }
};
eA.prototype = {
  type: "URL",
  parse: function (J, Z, Q) {
    let tt = Z || ei;
    let te = 0;
    let tr = "";
    let tn = false;
    let ti = false;
    let to = false;
    J = tb(J);
    if (!Z) {
      this.scheme = "";
      this.username = "";
      this.password = "";
      this.host = null;
      this.port = null;
      this.path = [];
      this.query = null;
      this.fragment = null;
      this.cannotBeABaseURL = false;
      J = tP(J, t$, "");
      J = tP(J, t0, "$1");
    }
    for (ta = th((J = tP(J, t1, ""))); te <= ta.length;) {
      ts = ta[te];
      switch (tt) {
        case ei:
          if (ts && tO(tV, ts)) {
            tr += tD(ts);
            tt = eo;
          } else {
            if (Z) {
              return tq;
            }
            tt = ea;
            continue;
          }
          break;
        case eo:
          if (ts && (tO(tW, ts) || ts === "+" || ts === "-" || ts === ".")) {
            tr += tD(ts);
          } else if (ts === ":") {
            if (
              Z &&
              (this.isSpecial() !== tu(ee, tr) ||
                (tr === "file" &&
                  (this.includesCredentials() || this.port !== null)) ||
                (this.scheme === "file" && !this.host))
            ) {
              return;
            }
            this.scheme = tr;
            if (Z) {
              if (this.isSpecial() && ee[this.scheme] === this.port) {
                this.port = null;
              }
              return;
            }
            tr = "";
            if (this.scheme === "file") {
              tt = eg;
            } else if (this.isSpecial() && Q && Q.scheme === this.scheme) {
              tt = es;
            } else if (this.isSpecial()) {
              tt = eh;
            } else if (ta[te + 1] === "/") {
              tt = ef;
              te++;
            } else {
              this.cannotBeABaseURL = true;
              tC(this.path, "");
              tt = e_;
            }
          } else {
            if (Z) {
              return tq;
            }
            tr = "";
            tt = ea;
            te = 0;
            continue;
          }
          break;
        case ea:
          if (!Q || (Q.cannotBeABaseURL && ts !== "#")) {
            return tq;
          }
          if (Q.cannotBeABaseURL && ts === "#") {
            this.scheme = Q.scheme;
            this.path = td(Q.path);
            this.query = Q.query;
            this.fragment = "";
            this.cannotBeABaseURL = true;
            tt = eS;
            break;
          }
          tt = Q.scheme === "file" ? eg : eu;
          continue;
        case es:
          if (ts === "/" && ta[te + 1] === "/") {
            tt = ed;
            te++;
          } else {
            tt = eu;
            continue;
          }
          break;
        case ef:
          if (ts === "/") {
            tt = el;
            break;
          }
          tt = ex;
          continue;
        case eu:
          this.scheme = Q.scheme;
          if (ts === $) {
            this.username = Q.username;
            this.password = Q.password;
            this.host = Q.host;
            this.port = Q.port;
            this.path = td(Q.path);
            this.query = Q.query;
          } else if (ts === "/" || (ts === "\\" && this.isSpecial())) {
            tt = ec;
          } else if (ts === "?") {
            this.username = Q.username;
            this.password = Q.password;
            this.host = Q.host;
            this.port = Q.port;
            this.path = td(Q.path);
            this.query = "";
            tt = eM;
          } else if (ts === "#") {
            this.username = Q.username;
            this.password = Q.password;
            this.host = Q.host;
            this.port = Q.port;
            this.path = td(Q.path);
            this.query = Q.query;
            this.fragment = "";
            tt = eS;
          } else {
            this.username = Q.username;
            this.password = Q.password;
            this.host = Q.host;
            this.port = Q.port;
            this.path = td(Q.path);
            this.path.length--;
            tt = ex;
            continue;
          }
          break;
        case ec:
          if (this.isSpecial() && (ts === "/" || ts === "\\")) {
            tt = ed;
          } else if (ts === "/") {
            tt = el;
          } else {
            this.username = Q.username;
            this.password = Q.password;
            this.host = Q.host;
            this.port = Q.port;
            tt = ex;
            continue;
          }
          break;
        case eh:
          tt = ed;
          if (ts !== "/" || tI(tr, te + 1) !== "/") {
            continue;
          }
          te++;
          break;
        case ed:
          if (ts !== "/" && ts !== "\\") {
            tt = el;
            continue;
          }
          break;
        case el:
          if (ts === "@") {
            if (tn) {
              tr = "%40" + tr;
            }
            tn = true;
            tf = th(tr);
            var ta;
            var ts;
            var tc;
            var tl;
            var tp;
            for (var tf, tv = 0; tv < tf.length; tv++) {
              const tg = tf[tv];
              if (tg === ":" && !to) {
                to = true;
                continue;
              }
              const ty = et(tg, t7);
              if (to) {
                this.password += ty;
              } else {
                this.username += ty;
              }
            }
            tr = "";
          } else if (
            ts === $ ||
            ts === "/" ||
            ts === "?" ||
            ts === "#" ||
            (ts === "\\" && this.isSpecial())
          ) {
            if (tn && tr === "") {
              return "Invalid authority";
            }
            te -= th(tr).length + 1;
            tr = "";
            tt = ep;
          } else {
            tr += ts;
          }
          break;
        case ep:
        case eb:
          if (Z && this.scheme === "file") {
            tt = em;
            continue;
          }
          if (ts !== ":" || ti) {
            if (
              ts === $ ||
              ts === "/" ||
              ts === "?" ||
              ts === "#" ||
              (ts === "\\" && this.isSpecial())
            ) {
              if (this.isSpecial() && tr === "") {
                return tz;
              }
              if (
                Z &&
                tr === "" &&
                (this.includesCredentials() || this.port !== null)
              ) {
                return;
              }
              if ((tc = this.parseHost(tr))) {
                return tc;
              }
              tr = "";
              tt = ew;
              if (Z) {
                return;
              }
              continue;
            } else {
              if (ts === "[") {
                ti = true;
              } else if (ts === "]") {
                ti = false;
              }
              tr += ts;
            }
          } else {
            if (tr === "") {
              return tz;
            }
            if ((tc = this.parseHost(tr))) {
              return tc;
            }
            tr = "";
            tt = ev;
            if (Z === eb) {
              return;
            }
          }
          break;
        case ev:
          if (tO(tK, ts)) {
            tr += ts;
          } else {
            if (
              !(
                ts === $ ||
                ts === "/" ||
                ts === "?" ||
                ts === "#" ||
                (ts === "\\" && this.isSpecial())
              ) &&
              !Z
            ) {
              return tH;
            }
            if (tr !== "") {
              const tm = tn_parseInt(tr, 10);
              if (tm > 65535) {
                return tH;
              }
              this.port =
                this.isSpecial() && tm === ee[this.scheme] ? null : tm;
              tr = "";
            }
            if (Z) {
              return;
            }
            tt = ew;
            continue;
          }
          break;
        case eg:
          this.scheme = "file";
          if (ts === "/" || ts === "\\") {
            tt = ey;
          } else if (Q && Q.scheme === "file") {
            switch (ts) {
              case $:
                this.host = Q.host;
                this.path = td(Q.path);
                this.query = Q.query;
                break;
              case "?":
                this.host = Q.host;
                this.path = td(Q.path);
                this.query = "";
                tt = eM;
                break;
              case "#":
                this.host = Q.host;
                this.path = td(Q.path);
                this.query = Q.query;
                this.fragment = "";
                tt = eS;
                break;
              default:
                if (!en(tT(td(ta, te), ""))) {
                  this.host = Q.host;
                  this.path = td(Q.path);
                  this.shortenPath();
                }
                tt = ex;
                continue;
            }
          } else {
            tt = ex;
            continue;
          }
          break;
        case ey:
          if (ts === "/" || ts === "\\") {
            tt = em;
            break;
          }
          if (Q && Q.scheme === "file" && !en(tT(td(ta, te), ""))) {
            if (er(Q.path[0], true)) {
              tC(this.path, Q.path[0]);
            } else {
              this.host = Q.host;
            }
          }
          tt = ex;
          continue;
        case em:
          if (
            ts === $ ||
            ts === "/" ||
            ts === "\\" ||
            ts === "?" ||
            ts === "#"
          ) {
            if (!Z && er(tr)) {
              tt = ex;
            } else if (tr === "") {
              this.host = "";
              if (Z) {
                return;
              }
              tt = ew;
            } else {
              if ((tc = this.parseHost(tr))) {
                return tc;
              }
              if (this.host === "localhost") {
                this.host = "";
              }
              if (Z) {
                return;
              }
              tr = "";
              tt = ew;
            }
            continue;
          }
          tr += ts;
          break;
        case ew:
          if (this.isSpecial()) {
            tt = ex;
            if (ts !== "/" && ts !== "\\") {
              continue;
            }
          } else if (Z || ts !== "?") {
            if (Z || ts !== "#") {
              if (ts !== $ && ((tt = ex), ts !== "/")) {
                continue;
              }
            } else {
              this.fragment = "";
              tt = eS;
            }
          } else {
            this.query = "";
            tt = eM;
          }
          break;
        case ex:
          if (
            ts === $ ||
            ts === "/" ||
            (ts === "\\" && this.isSpecial()) ||
            (!Z && (ts === "?" || ts === "#"))
          ) {
            if (
              (tl = tD((tl = tr))) === ".." ||
              tl === "%2e." ||
              tl === ".%2e" ||
              tl === "%2e%2e"
            ) {
              this.shortenPath();
              if (!(ts === "/" || (ts === "\\" && this.isSpecial()))) {
                tC(this.path, "");
              }
            } else if ((tp = tr) === "." || tD(tp) === "%2e") {
              if (!(ts === "/" || (ts === "\\" && this.isSpecial()))) {
                tC(this.path, "");
              }
            } else {
              if (this.scheme === "file" && !this.path.length && er(tr)) {
                if (this.host) {
                  this.host = "";
                }
                tr = tI(tr, 0) + ":";
              }
              tC(this.path, tr);
            }
            tr = "";
            if (
              this.scheme === "file" &&
              (ts === $ || ts === "?" || ts === "#")
            ) {
              while (this.path.length > 1 && this.path[0] === "") {
                tL(this.path);
              }
            }
            if (ts === "?") {
              this.query = "";
              tt = eM;
            } else if (ts === "#") {
              this.fragment = "";
              tt = eS;
            }
          } else {
            tr += et(ts, t9);
          }
          break;
        case e_:
          switch (ts) {
            case "?":
              this.query = "";
              tt = eM;
              break;
            case "#":
              this.fragment = "";
              tt = eS;
              break;
            default:
              if (ts !== $) {
                this.path[0] += et(ts, t8);
              }
          }
          break;
        case eM:
          if (Z || ts !== "#") {
            if (ts !== $) {
              if (ts === "'" && this.isSpecial()) {
                this.query += "%27";
              } else if (ts === "#") {
                this.query += "%23";
              } else {
                this.query += et(ts, t8);
              }
            }
          } else {
            this.fragment = "";
            tt = eS;
          }
          break;
        case eS:
          if (ts !== $) {
            this.fragment += et(ts, t5);
          }
      }
      te++;
    }
  },
  parseHost: function (J) {
    let Z;
    let Q;
    let $;
    if (tI(J, 0) === "[") {
      if (tI(J, J.length - 1) !== "]" || !(Z = t6(tU(J, 1, -1)))) {
        return tz;
      }
      this.host = Z;
    } else if (this.isSpecial()) {
      if (tO(tZ, (J = tp(J))) || (Z = t2(J)) === null) {
        return tz;
      }
      this.host = Z;
    } else {
      if (tO(tQ, J)) {
        return tz;
      }
      Z = "";
      Q = th(J);
      for ($ = 0; $ < Q.length; $++) {
        Z += et(Q[$], t8);
      }
      this.host = Z;
    }
  },
  cannotHaveUsernamePasswordPort: function () {
    return !this.host || this.cannotBeABaseURL || this.scheme === "file";
  },
  includesCredentials: function () {
    return this.username !== "" || this.password !== "";
  },
  isSpecial: function () {
    return tu(ee, this.scheme);
  },
  shortenPath: function () {
    const path = this.path;
    const J_length = path.length;
    if (
      J_length &&
      (this.scheme !== "file" || J_length !== 1 || !er(path[0], true))
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
    let ti = scheme + ":";
    if (host !== null) {
      ti += "//";
      if (this.includesCredentials()) {
        ti += `${username + (password ? ":" + password : "")}@`;
      }
      ti += t4(host);
      if (port !== null) {
        ti += ":" + port;
      }
    } else if (scheme === "file") {
      ti += "//";
    }
    ti += this.cannotBeABaseURL
      ? path[0]
      : path.length
        ? "/" + tT(path, "/")
        : "";
    if (query !== null) {
      ti += "?" + query;
    }
    if (fragment !== null) {
      ti += "#" + fragment;
    }
    return ti;
  },
  setHref: function (J) {
    const Z = this.parse(J);
    if (Z) {
      throw tn_TypeError(Z);
    }
    this.searchParams.update();
  },
  getOrigin: function () {
    const scheme = this.scheme;
    const port = this.port;
    if (scheme === "blob") {
      try {
        return new URL(scheme.path[0]).origin;
      } catch (J) {
        return "null";
      }
    }
    if (scheme !== "file" && this.isSpecial()) {
      return scheme + "://" + t4(this.host) + (port !== null ? ":" + port : "");
    }
    return "null";
  },
  getProtocol: function () {
    return this.scheme + ":";
  },
  setProtocol: function (J) {
    this.parse(tb(J) + ":", ei);
  },
  getUsername: function () {
    return this.username;
  },
  setUsername: function (J) {
    const Z = th(tb(J));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.username = "";
      for (let Q = 0; Q < Z.length; Q++) {
        this.username += et(Z[Q], t7);
      }
    }
  },
  getPassword: function () {
    return this.password;
  },
  setPassword: function (J) {
    const Z = th(tb(J));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.password = "";
      for (let Q = 0; Q < Z.length; Q++) {
        this.password += et(Z[Q], t7);
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
      return t4(host);
    }
    return t4(host) + ":" + port;
  },
  setHost: function (J) {
    if (!this.cannotBeABaseURL) {
      this.parse(J, ep);
    }
  },
  getHostname: function () {
    const host = this.host;
    if (host === null) {
      return "";
    }
    return t4(host);
  },
  setHostname: function (J) {
    if (!this.cannotBeABaseURL) {
      this.parse(J, eb);
    }
  },
  getPort: function () {
    const port = this.port;
    if (port === null) {
      return "";
    }
    return tb(port);
  },
  setPort: function (J) {
    if (!this.cannotHaveUsernamePasswordPort()) {
      if ((J = tb(J)) === "") {
        this.port = null;
      } else {
        this.parse(J, ev);
      }
    }
  },
  getPathname: function () {
    const path = this.path;
    if (this.cannotBeABaseURL) {
      return path[0];
    }
    if (path.length) {
      return "/" + tT(path, "/");
    }
    return "";
  },
  setPathname: function (J) {
    if (!this.cannotBeABaseURL) {
      this.path = [];
      this.parse(J, ew);
    }
  },
  getSearch: function () {
    const query = this.query;
    if (query) {
      return "?" + query;
    }
    return "";
  },
  setSearch: function (J) {
    if ((J = tb(J)) === "") {
      this.query = null;
    } else {
      if (tI(J, 0) === "?") {
        J = tU(J, 1);
      }
      this.query = "";
      this.parse(J, eM);
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
  setHash: function (J) {
    if ((J = tb(J)) === "") {
      this.fragment = null;
      return;
    }
    if (tI(J, 0) === "#") {
      J = tU(J, 1);
    }
    this.fragment = "";
    this.parse(J, eS);
  },
  update: function () {
    this.query = this.searchParams.serialize() || null;
  },
};
var URL = function (J) {
  const Z = tf(this, eE_prototype);
  const Q = tg(arguments.length, 1) > 1 ? arguments[1] : undefined;
  const $ = tm_set(Z, new eA(J, false, Q));
  if (!te) {
    Z.href = $.serialize();
    Z.origin = $.getOrigin();
    Z.protocol = $.getProtocol();
    Z.username = $.getUsername();
    Z.password = $.getPassword();
    Z.host = $.getHost();
    Z.hostname = $.getHostname();
    Z.port = $.getPort();
    Z.pathname = $.getPathname();
    Z.search = $.getSearch();
    Z.searchParams = $.getSearchParams();
    Z.hash = $.getHash();
  }
};
var eE_prototype = URL.prototype;
const eR = (J, Z) => ({
  get: function () {
    return tx(this)[J]();
  },
  set:
    Z &&
    function (J) {
      return tx(this)[Z](J);
    },
  configurable: true,
  enumerable: true,
});
if (te) {
  ts(eE_prototype, "href", eR("serialize", "setHref"));
  ts(eE_prototype, "origin", eR("getOrigin"));
  ts(eE_prototype, "protocol", eR("getProtocol", "setProtocol"));
  ts(eE_prototype, "username", eR("getUsername", "setUsername"));
  ts(eE_prototype, "password", eR("getPassword", "setPassword"));
  ts(eE_prototype, "host", eR("getHost", "setHost"));
  ts(eE_prototype, "hostname", eR("getHostname", "setHostname"));
  ts(eE_prototype, "port", eR("getPort", "setPort"));
  ts(eE_prototype, "pathname", eR("getPathname", "setPathname"));
  ts(eE_prototype, "search", eR("getSearch", "setSearch"));
  ts(eE_prototype, "searchParams", eR("getSearchParams"));
  ts(eE_prototype, "hash", eR("getHash", "setHash"));
}
ta(
  eE_prototype,
  "toJSON",
  function () {
    return tx(this).serialize();
  },
  {
    enumerable: true,
  },
);
ta(
  eE_prototype,
  "toString",
  function () {
    return tx(this).serialize();
  },
  {
    enumerable: true,
  },
);
if (tn_URL) {
  const eI = tn_URL.createObjectURL;
  const eO = tn_URL.revokeObjectURL;
  if (eI) {
    ta(URL, "createObjectURL", ti(eI, tn_URL));
  }
  if (eO) {
    ta(URL, "revokeObjectURL", ti(eO, tn_URL));
  }
}
tv(URL, "URL");
tt(
  {
    global: true,
    constructor: true,
    forced: !tr,
    sham: !te,
  },
  {
    URL,
  },
);
