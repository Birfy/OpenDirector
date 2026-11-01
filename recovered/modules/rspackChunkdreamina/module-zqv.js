import v from "hQo";
import E from "tnk";
import ucmicro from "Xi";
import z from "ak";
import tB from "FZ3";
import tF from "PW";
import tW from "GuH";
import t5 from "ue";
const mdurl = {
  get decode() {
    return decode;
  },
  get encode() {
    return encode;
  },
  get format() {
    return format;
  },
  get parse() {
    return parse;
  },
};
const i = {
  get arrayReplaceAt() {
    return arrayReplaceAt;
  },
  get assign() {
    return assign;
  },
  get escapeHtml() {
    return escapeHtml;
  },
  get escapeRE() {
    return escapeRE;
  },
  get fromCodePoint() {
    return fromCodePoint;
  },
  get has() {
    return has;
  },
  get isMdAsciiPunct() {
    return isMdAsciiPunct;
  },
  get isPunctChar() {
    return isPunctChar;
  },
  get isSpace() {
    return isSpace;
  },
  get isString() {
    return isString;
  },
  get isValidEntityCode() {
    return isValidEntityCode;
  },
  get isWhiteSpace() {
    return isWhiteSpace;
  },
  get lib() {
    return lib;
  },
  get normalizeReference() {
    return normalizeReference;
  },
  get unescapeAll() {
    return unescapeAll;
  },
  get unescapeMd() {
    return unescapeMd;
  },
};
const s = {
  get parseLinkDestination() {
    return parseLinkDestination;
  },
  get parseLinkLabel() {
    return parseLinkLabel;
  },
  get parseLinkTitle() {
    return parseLinkTitle;
  },
};
let o = {};
function l(t, e) {
  if (typeof e !== "string") {
    e = l.defaultChars;
  }
  let n = ((t) => {
    let e = o[t];
    if (e) {
      return e;
    }
    e = o[t] = [];
    for (let t = 0; t < 128; t++) {
      let n = String.fromCharCode(t);
      e.push(n);
    }
    for (let n = 0; n < t.length; n++) {
      let r = t.charCodeAt(n);
      e[r] = "%" + ("0" + r.toString(16).toUpperCase()).slice(-2);
    }
    return e;
  })(e);
  return t.replace(/(%[a-f0-9]{2})+/gi, (t) => {
    let e = "";
    for (let r = 0, i = t.length; r < i; r += 3) {
      let s = parseInt(t.slice(r + 1, r + 3), 16);
      if (s < 128) {
        e += n[s];
        continue;
      }
      if ((224 & s) == 192 && r + 3 < i) {
        let n = parseInt(t.slice(r + 4, r + 6), 16);
        if ((192 & n) == 128) {
          let t = ((s << 6) & 1984) | (63 & n);
          if (t < 128) {
            e += "\uFFFD\uFFFD";
          } else {
            e += String.fromCharCode(t);
          }
          r += 3;
          continue;
        }
      }
      if ((240 & s) == 224 && r + 6 < i) {
        let n = parseInt(t.slice(r + 4, r + 6), 16);
        let i = parseInt(t.slice(r + 7, r + 9), 16);
        if ((192 & n) == 128 && (192 & i) == 128) {
          let t = ((s << 12) & 61440) | ((n << 6) & 4032) | (63 & i);
          if (t < 2048 || (t >= 55296 && t <= 57343)) {
            e += "\uFFFD\uFFFD\uFFFD";
          } else {
            e += String.fromCharCode(t);
          }
          r += 6;
          continue;
        }
      }
      if ((248 & s) == 240 && r + 9 < i) {
        let n = parseInt(t.slice(r + 4, r + 6), 16);
        let i = parseInt(t.slice(r + 7, r + 9), 16);
        let o = parseInt(t.slice(r + 10, r + 12), 16);
        if ((192 & n) == 128 && (192 & i) == 128 && (192 & o) == 128) {
          let t =
            ((s << 18) & 1835008) |
            ((n << 12) & 258048) |
            ((i << 6) & 4032) |
            (63 & o);
          if (t < 65536 || t > 1114111) {
            e += "\uFFFD\uFFFD\uFFFD\uFFFD";
          } else {
            t -= 65536;
            e += String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t));
          }
          r += 9;
          continue;
        }
      }
      e += "\uFFFD";
    }
    return e;
  });
}
l.defaultChars = ";/?:@&=+$,#";
l.componentChars = "";
var decode = l;
let c = {};
function h(t, e, n) {
  if (typeof e !== "string") {
    n = e;
    e = h.defaultChars;
  }
  if (n === undefined) {
    n = true;
  }
  let r = ((t) => {
    let e = c[t];
    if (e) {
      return e;
    }
    e = c[t] = [];
    for (let t = 0; t < 128; t++) {
      let n = String.fromCharCode(t);
      if (/^[0-9a-z]$/i.test(n)) {
        e.push(n);
      } else {
        e.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
      }
    }
    for (let n = 0; n < t.length; n++) {
      e[t.charCodeAt(n)] = t[n];
    }
    return e;
  })(e);
  let i = "";
  for (let e = 0, s = t.length; e < s; e++) {
    let o = t.charCodeAt(e);
    if (
      n &&
      o === 37 &&
      e + 2 < s &&
      /^[0-9a-f]{2}$/i.test(t.slice(e + 1, e + 3))
    ) {
      i += t.slice(e, e + 3);
      e += 2;
      continue;
    }
    if (o < 128) {
      i += r[o];
      continue;
    }
    if (o >= 55296 && o <= 57343) {
      if (o >= 55296 && o <= 56319 && e + 1 < s) {
        let n = t.charCodeAt(e + 1);
        if (n >= 56320 && n <= 57343) {
          i += encodeURIComponent(t[e] + t[e + 1]);
          e++;
          continue;
        }
      }
      i += "%EF%BF%BD";
      continue;
    }
    i += encodeURIComponent(t[e]);
  }
  return i;
}
h.defaultChars = ";/?:@&=+$,-_.!~*'()#";
h.componentChars = "-_.!~*'()";
var encode = h;
function format(t) {
  let e = "";
  e += t.protocol || "";
  e += t.slashes ? "//" : "";
  e += t.auth ? t.auth + "@" : "";
  if (t.hostname && t.hostname.indexOf(":") !== -1) {
    e += "[" + t.hostname + "]";
  } else {
    e += t.hostname || "";
  }
  e += t.port ? ":" + t.port : "";
  e += t.pathname || "";
  e += t.search || "";
  return (e += t.hash || "");
}
class f {
  constructor() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.pathname = null;
  }
  parse(t, e) {
    let n;
    let r;
    let i;
    let s = t;
    s = s.trim();
    if (!e && t.split("#").length === 1) {
      let t = m.exec(s);
      if (t) {
        this.pathname = t[1];
        if (t[2]) {
          this.search = t[2];
        }
        return this;
      }
    }
    let o = d.exec(s);
    if (o) {
      n = (o = o[0]).toLowerCase();
      this.protocol = o;
      s = s.substr(o.length);
    }
    if (
      (e || o || s.match(/^\/\/[^@\/]+@[^@\/]+/)) &&
      (i = s.substr(0, 2) === "//") &&
      !(o && C[o])
    ) {
      s = s.substr(2);
      this.slashes = true;
    }
    if (!C[o] && (i || (o && !x[o]))) {
      let t;
      let e;
      let n = -1;
      for (let t = 0; t < k.length; t++) {
        if ((r = s.indexOf(k[t])) !== -1 && (n === -1 || r < n)) {
          n = r;
        }
      }
      if ((e = n === -1 ? s.lastIndexOf("@") : s.lastIndexOf("@", n)) !== -1) {
        t = s.slice(0, e);
        s = s.slice(e + 1);
        this.auth = t;
      }
      n = -1;
      for (let t = 0; t < g.length; t++) {
        if ((r = s.indexOf(g[t])) !== -1 && (n === -1 || r < n)) {
          n = r;
        }
      }
      if (n === -1) {
        n = s.length;
      }
      if (s[n - 1] === ":") {
        n--;
      }
      let i = s.slice(0, n);
      s = s.slice(n);
      this.parseHost(i);
      this.hostname = this.hostname || "";
      let o =
        this.hostname[0] === "[" &&
        this.hostname[this.hostname.length - 1] === "]";
      if (!o) {
        let t = this.hostname.split(/\./);
        for (let e = 0, n = t.length; e < n; e++) {
          let n = t[e];
          if (n && !n.match(y)) {
            let r = "";
            for (let t = 0, e = n.length; t < e; t++) {
              if (n.charCodeAt(t) > 127) {
                r += "x";
              } else {
                r += n[t];
              }
            }
            if (!r.match(y)) {
              let r = t.slice(0, e);
              let i = t.slice(e + 1);
              let o = n.match(b);
              if (o) {
                r.push(o[1]);
                i.unshift(o[2]);
              }
              if (i.length) {
                s = i.join(".") + s;
              }
              this.hostname = r.join(".");
              break;
            }
          }
        }
      }
      if (this.hostname.length > 255) {
        this.hostname = "";
      }
      if (o) {
        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      }
    }
    let l = s.indexOf("#");
    if (l !== -1) {
      this.hash = s.substr(l);
      s = s.slice(0, l);
    }
    let a = s.indexOf("?");
    if (a !== -1) {
      this.search = s.substr(a);
      s = s.slice(0, a);
    }
    if (s) {
      this.pathname = s;
    }
    if (x[n] && this.hostname && !this.pathname) {
      this.pathname = "";
    }
    return this;
  }
  parseHost(t) {
    let e = _.exec(t);
    if (e) {
      if ((e = e[0]) !== ":") {
        this.port = e.substr(1);
      }
      t = t.substr(0, t.length - e.length);
    }
    if (t) {
      this.hostname = t;
    }
  }
}
let d = /^([a-z0-9.+-]+:)/i;
let _ = /:[0-9]*$/;
let m = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
let g = [
  "%",
  "/",
  "?",
  ";",
  "#",
  "'",
  "{",
  "}",
  "|",
  "\\",
  "^",
  "`",
  "<",
  ">",
  '"',
  "`",
  " ",
  "\r",
  "\n",
  "	",
];
let k = ["/", "?", "#"];
let y = /^[+a-z0-9A-Z_-]{0,63}$/;
let b = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
let C = {
  javascript: true,
  "javascript:": true,
};
let x = {
  http: true,
  https: true,
  ftp: true,
  gopher: true,
  file: true,
  "http:": true,
  "https:": true,
  "ftp:": true,
  "gopher:": true,
  "file:": true,
};
var parse = function (t, e) {
  if (t && t instanceof f) {
    return t;
  }
  let n = new f();
  n.parse(t, e);
  return n;
};
function isString(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
let hasOwnProperty = Object.prototype.hasOwnProperty;
function has(t, e) {
  return hasOwnProperty.call(t, e);
}
function assign(t) {
  let e = Array.prototype.slice.call(arguments, 1);
  e.forEach((e) => {
    if (e) {
      if (typeof e !== "object") {
        throw TypeError(e + "must be object");
      }
      Object.keys(e).forEach((n) => {
        t[n] = e[n];
      });
    }
  });
  return t;
}
function arrayReplaceAt(t, e, n) {
  return [].concat(t.slice(0, e), n, t.slice(e + 1));
}
function isValidEntityCode(t) {
  return (
    (!(t >= 55296) || !(t <= 57343)) &&
    (!(t >= 64976) || !(t <= 65007)) &&
    (65535 & t) != 65535 &&
    (65535 & t) != 65534 &&
    (!(t >= 0) || !(t <= 8)) &&
    t !== 11 &&
    (!(t >= 14) || !(t <= 31)) &&
    (!(t >= 127) || !(t <= 159)) &&
    !(t > 1114111) &&
    true
  );
}
function fromCodePoint(t) {
  if (t > 65535) {
    return String.fromCharCode(
      55296 + ((t -= 65536) >> 10),
      56320 + (1023 & t),
    );
  }
  return String.fromCharCode(t);
}
let R = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g;
let j = RegExp(R.source + "|" + /&([a-z#][a-z0-9]{1,31});/gi.source, "gi");
let P = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function unescapeMd(t) {
  if (t.indexOf("\\") < 0) {
    return t;
  }
  return t.replace(R, "$1");
}
function unescapeAll(t) {
  if (t.indexOf("\\") < 0 && t.indexOf("&") < 0) {
    return t;
  }
  return t.replace(j, (t, e, n) => {
    if (e) {
      return e;
    }
    if (n.charCodeAt(0) === 35 && P.test(n)) {
      let e =
        n[1].toLowerCase() === "x"
          ? parseInt(n.slice(2), 16)
          : parseInt(n.slice(1), 10);
      if (isValidEntityCode(e)) {
        return fromCodePoint(e);
      }
      return t;
    }
    let r = z.Gz(t);
    if (r !== t) {
      return r;
    }
    return t;
  });
}
let H = /[&<>"]/;
let Z = /[&<>"]/g;
let U = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
};
function q(t) {
  return U[t];
}
function escapeHtml(t) {
  if (H.test(t)) {
    return t.replace(Z, q);
  }
  return t;
}
let F = /[.?*+^$[\]\\(){}|-]/g;
function escapeRE(t) {
  return t.replace(F, "\\$&");
}
function isSpace(t) {
  switch (t) {
    case 9:
    case 32:
      return true;
  }
  return false;
}
function isWhiteSpace(t) {
  if (t >= 8192 && t <= 8202) {
    return true;
  }
  switch (t) {
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 32:
    case 160:
    case 5760:
    case 8239:
    case 8287:
    case 12288:
      return true;
  }
  return false;
}
function isPunctChar(t) {
  return v.A.test(t) || E.A.test(t);
}
function isMdAsciiPunct(t) {
  switch (t) {
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 124:
    case 125:
    case 126:
      return true;
    default:
      return false;
  }
}
function normalizeReference(t) {
  return (t = t.trim().replace(/\s+/g, " ")).toLowerCase().toUpperCase();
}
let lib = {
  mdurl,
  ucmicro,
};
function parseLinkLabel(t, e, n) {
  let r;
  let i;
  let s;
  let o;
  let t_posMax = t.posMax;
  let t_pos = t.pos;
  t.pos = e + 1;
  for (r = 1; t.pos < t_posMax;) {
    if ((s = t.src.charCodeAt(t.pos)) === 93 && --r == 0) {
      i = true;
      break;
    }
    o = t.pos;
    t.md.inline.skipToken(t);
    if (s === 91) {
      if (o === t.pos - 1) {
        r++;
      } else if (n) {
        t.pos = t_pos;
        return -1;
      }
    }
  }
  let c = -1;
  if (i) {
    c = t.pos;
  }
  t.pos = t_pos;
  return c;
}
function parseLinkDestination(t, e, n) {
  let r;
  let i = e;
  let s = {
    ok: false,
    pos: 0,
    str: "",
  };
  if (t.charCodeAt(i) === 60) {
    for (i++; i < n && (r = t.charCodeAt(i)) !== 10 && r !== 60;) {
      if (r === 62) {
        s.pos = i + 1;
        s.str = unescapeAll(t.slice(e + 1, i));
        s.ok = true;
        break;
      }
      if (r === 92 && i + 1 < n) {
        i += 2;
        continue;
      }
      i++;
    }
    return s;
  }
  let o = 0;
  while (i < n && (r = t.charCodeAt(i)) !== 32 && !(r < 32) && r !== 127) {
    if (r === 92 && i + 1 < n) {
      if (t.charCodeAt(i + 1) === 32) {
        break;
      }
      i += 2;
      continue;
    }
    if (r === 40 && ++o > 32) {
      return s;
    }
    if (r === 41) {
      if (o === 0) {
        break;
      }
      o--;
    }
    i++;
  }
  if (!(e === i || o !== 0)) {
    s.str = unescapeAll(t.slice(e, i));
    s.pos = i;
    s.ok = true;
  }
  return s;
}
function parseLinkTitle(t, e, n, r) {
  let i;
  let s = e;
  let o = {
    ok: false,
    can_continue: false,
    pos: 0,
    str: "",
    marker: 0,
  };
  if (r) {
    o.str = r.str;
    o.marker = r.marker;
  } else {
    if (s >= n) {
      return o;
    }
    let r = t.charCodeAt(s);
    if (r !== 34 && r !== 39 && r !== 40) {
      return o;
    }
    e++;
    s++;
    if (r === 40) {
      r = 41;
    }
    o.marker = r;
  }
  while (s < n) {
    if ((i = t.charCodeAt(s)) === o.marker) {
      o.pos = s + 1;
      o.str += unescapeAll(t.slice(e, s));
      o.ok = true;
      return o;
    }
    if (i === 40 && o.marker === 41) {
      return o;
    }
    if (i === 92 && s + 1 < n) {
      s++;
    }
    s++;
  }
  o.can_continue = true;
  o.str += unescapeAll(t.slice(e, s));
  return o;
}
let tn = {};
class tr {
  constructor() {
    this.rules = assign({}, tn);
  }
  renderAttrs(t) {
    let e;
    let n;
    let r;
    if (!t.attrs) {
      return "";
    }
    e = 0;
    r = "";
    for (n = t.attrs.length; e < n; e++) {
      r +=
        " " +
        escapeHtml(t.attrs[e][0]) +
        '="' +
        escapeHtml(t.attrs[e][1]) +
        '"';
    }
    return r;
  }
  renderToken(t, e, n) {
    let r = t[e];
    let i = "";
    if (r.hidden) {
      return "";
    }
    if (r.block && r.nesting !== -1 && e && t[e - 1].hidden) {
      i += "\n";
    }
    i += (r.nesting === -1 ? "</" : "<") + r.tag;
    i += this.renderAttrs(r);
    if (r.nesting === 0 && n.xhtmlOut) {
      i += " /";
    }
    let s = false;
    if (r.block && ((s = true), r.nesting === 1 && e + 1 < t.length)) {
      let n = t[e + 1];
      if (n.type === "inline" || n.hidden) {
        s = false;
      } else if (n.nesting === -1 && n.tag === r.tag) {
        s = false;
      }
    }
    return i + (s ? ">\n" : ">");
  }
  renderInline(t, e, n) {
    let r = "";
    let rules = this.rules;
    for (let s = 0, o = t.length; s < o; s++) {
      let o = t[s].type;
      if (rules[o] !== undefined) {
        r += rules[o](t, s, e, n, this);
      } else {
        r += this.renderToken(t, s, e);
      }
    }
    return r;
  }
  renderInlineAsText(t, e, n) {
    let r = "";
    for (let i = 0, s = t.length; i < s; i++) {
      switch (t[i].type) {
        case "text":
        case "html_inline":
        case "html_block":
          r += t[i].content;
          break;
        case "image":
          r += this.renderInlineAsText(t[i].children, e, n);
          break;
        case "softbreak":
        case "hardbreak":
          r += "\n";
      }
    }
    return r;
  }
  render(t, e, n) {
    let r = "";
    let rules = this.rules;
    for (let s = 0, o = t.length; s < o; s++) {
      let o = t[s].type;
      if (o === "inline") {
        r += this.renderInline(t[s].children, e, n);
      } else if (rules[o] !== undefined) {
        r += rules[o](t, s, e, n, this);
      } else {
        r += this.renderToken(t, s, e, n);
      }
    }
    return r;
  }
}
class ti {
  constructor() {
    this.__rules__ = [];
    this.__cache__ = null;
  }
  __find__(t) {
    for (let e = 0; e < this.__rules__.length; e++) {
      if (this.__rules__[e].name === t) {
        return e;
      }
    }
    return -1;
  }
  __compile__() {
    let t = this;
    let e = [""];
    t.__rules__.forEach((t) => {
      if (t.enabled) {
        t.alt.forEach((t) => {
          if (e.indexOf(t) < 0) {
            e.push(t);
          }
        });
      }
    });
    t.__cache__ = {};
    e.forEach((e) => {
      t.__cache__[e] = [];
      t.__rules__.forEach((n) => {
        if (!(!n.enabled || (e && n.alt.indexOf(e) < 0))) {
          t.__cache__[e].push(n.fn);
        }
      });
    });
  }
  at(t, e, n) {
    let r = this.__find__(t);
    if (r === -1) {
      throw Error("Parser rule not found: " + t);
    }
    this.__rules__[r].fn = e;
    this.__rules__[r].alt = (n || {}).alt || [];
    this.__cache__ = null;
  }
  before(t, e, n, r) {
    let i = this.__find__(t);
    if (i === -1) {
      throw Error("Parser rule not found: " + t);
    }
    this.__rules__.splice(i, 0, {
      name: e,
      enabled: true,
      fn: n,
      alt: (r || {}).alt || [],
    });
    this.__cache__ = null;
  }
  after(t, e, n, r) {
    let i = this.__find__(t);
    if (i === -1) {
      throw Error("Parser rule not found: " + t);
    }
    this.__rules__.splice(i + 1, 0, {
      name: e,
      enabled: true,
      fn: n,
      alt: (r || {}).alt || [],
    });
    this.__cache__ = null;
  }
  push(t, e, n) {
    this.__rules__.push({
      name: t,
      enabled: true,
      fn: e,
      alt: (n || {}).alt || [],
    });
    this.__cache__ = null;
  }
  enable(t, e) {
    if (!Array.isArray(t)) {
      t = [t];
    }
    let n = [];
    t.forEach(function (t) {
      let r = this.__find__(t);
      if (r < 0) {
        if (e) {
          return;
        }
        throw Error("Rules manager: invalid rule name " + t);
      }
      this.__rules__[r].enabled = true;
      n.push(t);
    }, this);
    this.__cache__ = null;
    return n;
  }
  enableOnly(t, e) {
    if (!Array.isArray(t)) {
      t = [t];
    }
    this.__rules__.forEach((t) => {
      t.enabled = false;
    });
    this.enable(t, e);
  }
  disable(t, e) {
    if (!Array.isArray(t)) {
      t = [t];
    }
    let n = [];
    t.forEach(function (t) {
      let r = this.__find__(t);
      if (r < 0) {
        if (e) {
          return;
        }
        throw Error("Rules manager: invalid rule name " + t);
      }
      this.__rules__[r].enabled = false;
      n.push(t);
    }, this);
    this.__cache__ = null;
    return n;
  }
  getRules(t) {
    if (this.__cache__ === null) {
      this.__compile__();
    }
    return this.__cache__[t] || [];
  }
}
class ts {
  constructor(t, e, n) {
    this.type = t;
    this.tag = e;
    this.attrs = null;
    this.map = null;
    this.nesting = n;
    this.level = 0;
    this.children = null;
    this.content = "";
    this.markup = "";
    this.info = "";
    this.meta = null;
    this.block = false;
    this.hidden = false;
  }
  attrIndex(t) {
    if (!this.attrs) {
      return -1;
    }
    let attrs = this.attrs;
    for (let n = 0, r = attrs.length; n < r; n++) {
      if (attrs[n][0] === t) {
        return n;
      }
    }
    return -1;
  }
  attrPush(t) {
    if (this.attrs) {
      this.attrs.push(t);
    } else {
      this.attrs = [t];
    }
  }
  attrSet(t, e) {
    let n = this.attrIndex(t);
    let r = [t, e];
    if (n < 0) {
      this.attrPush(r);
    } else {
      this.attrs[n] = r;
    }
  }
  attrGet(t) {
    let e = this.attrIndex(t);
    let n = null;
    if (e >= 0) {
      n = this.attrs[e][1];
    }
    return n;
  }
  attrJoin(t, e) {
    let n = this.attrIndex(t);
    if (n < 0) {
      this.attrPush([t, e]);
    } else {
      this.attrs[n][1] = this.attrs[n][1] + " " + e;
    }
  }
}
function to(t, e, n) {
  this.src = t;
  this.env = n;
  this.tokens = [];
  this.inlineMode = false;
  this.md = e;
}
tn.code_inline = function (t, e, n, r, i) {
  let s = t[e];
  return "<code" + i.renderAttrs(s) + ">" + escapeHtml(s.content) + "</code>";
};
tn.code_block = function (t, e, n, r, i) {
  let s = t[e];
  return (
    "<pre" +
    i.renderAttrs(s) +
    "><code>" +
    escapeHtml(t[e].content) +
    "</code></pre>\n"
  );
};
tn.fence = function (t, e, n, r, i) {
  let s;
  let o = t[e];
  let l = o.info ? unescapeAll(o.info).trim() : "";
  let a = "";
  let c = "";
  if (l) {
    let t = l.split(/(\s+)/g);
    a = t[0];
    c = t.slice(2).join("");
  }
  if (
    (s =
      (n.highlight && n.highlight(o.content, a, c)) ||
      escapeHtml(o.content)).indexOf("<pre") === 0
  ) {
    return s + "\n";
  }
  if (l) {
    let t = o.attrIndex("class");
    let attrs = o.attrs ? o.attrs.slice() : [];
    if (t < 0) {
      attrs.push(["class", n.langPrefix + a]);
    } else {
      attrs[t] = attrs[t].slice();
      attrs[t][1] += " " + n.langPrefix + a;
    }
    return `<pre><code${i.renderAttrs({
      attrs,
    })}>${s}</code></pre>
`;
  }
  return `<pre><code${i.renderAttrs(o)}>${s}</code></pre>
`;
};
tn.image = function (t, e, n, r, i) {
  let s = t[e];
  s.attrs[s.attrIndex("alt")][1] = i.renderInlineAsText(s.children, n, r);
  return i.renderToken(t, e, n);
};
tn.hardbreak = function (t, e, n) {
  if (n.xhtmlOut) {
    return "<br />\n";
  }
  return "<br>\n";
};
tn.softbreak = function (t, e, n) {
  if (n.breaks) {
    if (n.xhtmlOut) {
      return "<br />\n";
    }
    return "<br>\n";
  }
  return "\n";
};
tn.text = function (t, e) {
  return escapeHtml(t[e].content);
};
tn.html_block = function (t, e) {
  return t[e].content;
};
tn.html_inline = function (t, e) {
  return t[e].content;
};
to.prototype.Token = ts;
let tl = /\r\n?|\n/g;
let ta = /\0/g;
let tc = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
let th = /\((c|tm|r)\)/i;
let tu = /\((c|tm|r)\)/gi;
let tp = {
  c: "©",
  r: "®",
  tm: "™",
};
function tf(t, e) {
  return tp[e.toLowerCase()];
}
let td = /['"]/;
let t_ = /['"]/g;
function tm(content, e, n) {
  return content.slice(0, e) + n + content.slice(e + 1);
}
let tg = [
  [
    "normalize",
    function (t) {
      let e;
      e = (e = t.src.replace(tl, "\n")).replace(ta, "\uFFFD");
      t.src = e;
    },
  ],
  [
    "block",
    function (t) {
      let e;
      if (t.inlineMode) {
        e = new t.Token("inline", "", 0);
        e.content = t.src;
        e.map = [0, 1];
        e.children = [];
        t.tokens.push(e);
      } else {
        t.md.block.parse(t.src, t.md, t.env, t.tokens);
      }
    },
  ],
  [
    "inline",
    function (t) {
      let t_tokens = t.tokens;
      for (let n = 0, r = t_tokens.length; n < r; n++) {
        let token = t_tokens[n];
        if (token.type === "inline") {
          t.md.inline.parse(token.content, t.md, t.env, token.children);
        }
      }
    },
  ],
  [
    "linkify",
    function (t) {
      let t_tokens = t.tokens;
      if (t.md.options.linkify) {
        for (let i = 0, s = t_tokens.length; i < s; i++) {
          if (
            t_tokens[i].type !== "inline" ||
            !t.md.linkify.pretest(t_tokens[i].content)
          ) {
            continue;
          }
          let s = t_tokens[i].children;
          let o = 0;
          for (let l = s.length - 1; l >= 0; l--) {
            let a = s[l];
            if (a.type === "link_close") {
              for (l--; s[l].level !== a.level && s[l].type !== "link_open";) {
                l--;
              }
              continue;
            }
            if (a.type === "html_inline") {
              let n;
              let r;
              n = a.content;
              if (/^<a[>\s]/i.test(n) && o > 0) {
                o--;
              }
              r = a.content;
              if (/^<\/a\s*>/i.test(r)) {
                o++;
              }
            }
            if (!(o > 0) && a.type === "text" && t.md.linkify.test(a.content)) {
              let n = a.content;
              let r = t.md.linkify.match(n);
              let o = [];
              let c = a.level;
              let h = 0;
              if (
                r.length > 0 &&
                r[0].index === 0 &&
                l > 0 &&
                s[l - 1].type === "text_special"
              ) {
                r = r.slice(1);
              }
              for (let e = 0; e < r.length; e++) {
                let i = r[e].url;
                let s = t.md.normalizeLink(i);
                if (!t.md.validateLink(s)) {
                  continue;
                }
                let l = r[e].text;
                l = r[e].schema
                  ? r[e].schema !== "mailto:" || /^mailto:/i.test(l)
                    ? t.md.normalizeLinkText(l)
                    : t.md
                        .normalizeLinkText("mailto:" + l)
                        .replace(/^mailto:/, "")
                  : t.md
                      .normalizeLinkText("http://" + l)
                      .replace(/^http:\/\//, "");
                let a = r[e].index;
                if (a > h) {
                  let e = new t.Token("text", "", 0);
                  e.content = n.slice(h, a);
                  e.level = c;
                  o.push(e);
                }
                let u = new t.Token("link_open", "a", 1);
                u.attrs = [["href", s]];
                u.level = c++;
                u.markup = "linkify";
                u.info = "auto";
                o.push(u);
                let p = new t.Token("text", "", 0);
                p.content = l;
                p.level = c;
                o.push(p);
                let f = new t.Token("link_close", "a", -1);
                f.level = --c;
                f.markup = "linkify";
                f.info = "auto";
                o.push(f);
                h = r[e].lastIndex;
              }
              if (h < n.length) {
                let e = new t.Token("text", "", 0);
                e.content = n.slice(h);
                e.level = c;
                o.push(e);
              }
              t_tokens[i].children = s = arrayReplaceAt(s, l, o);
            }
          }
        }
      }
    },
  ],
  [
    "replacements",
    function (t) {
      let e;
      if (t.md.options.typographer) {
        for (e = t.tokens.length - 1; e >= 0; e--) {
          if (t.tokens[e].type === "inline") {
            if (th.test(t.tokens[e].content)) {
              ((t) => {
                let e = 0;
                for (let n = t.length - 1; n >= 0; n--) {
                  let r = t[n];
                  if (!(r.type !== "text" || e)) {
                    r.content = r.content.replace(tu, tf);
                  }
                  if (r.type === "link_open" && r.info === "auto") {
                    e--;
                  }
                  if (r.type === "link_close" && r.info === "auto") {
                    e++;
                  }
                }
              })(t.tokens[e].children);
            }
            if (tc.test(t.tokens[e].content)) {
              ((t) => {
                let e = 0;
                for (let n = t.length - 1; n >= 0; n--) {
                  let r = t[n];
                  if (r.type === "text" && !e && tc.test(r.content)) {
                    r.content = r.content
                      .replace(/\+-/g, "±")
                      .replace(/\.{2,}/g, "…")
                      .replace(/([?!])\u2026/g, "$1..")
                      .replace(/([?!]){4,}/g, "$1$1$1")
                      .replace(/,{2,}/g, ",")
                      .replace(/(^|[^-])---(?=[^-]|$)/gm, "$1—")
                      .replace(/(^|\s)--(?=\s|$)/gm, "$1–")
                      .replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1–");
                  }
                  if (r.type === "link_open" && r.info === "auto") {
                    e--;
                  }
                  if (r.type === "link_close" && r.info === "auto") {
                    e++;
                  }
                }
              })(t.tokens[e].children);
            }
          }
        }
      }
    },
  ],
  [
    "smartquotes",
    function (t) {
      if (t.md.options.typographer) {
        for (let e = t.tokens.length - 1; e >= 0; e--) {
          if (t.tokens[e].type === "inline" && td.test(t.tokens[e].content)) {
            ((t, e) => {
              let n;
              let r = [];
              for (let token = 0; token < t.length; token++) {
                let s = t[token];
                let level = t[token].level;
                for (n = r.length - 1; n >= 0 && !(r[n].level <= level); n--);
                r.length = n + 1;
                if (s.type !== "text") {
                  continue;
                }
                let l = s.content;
                let a = 0;
                let c = l.length;
                t: while (a < c) {
                  t_.lastIndex = a;
                  let h = t_.exec(l);
                  if (!h) {
                    break;
                  }
                  let u = true;
                  let p = true;
                  a = h.index + 1;
                  let single = h[0] === "'";
                  let d = 32;
                  if (h.index - 1 >= 0) {
                    d = l.charCodeAt(h.index - 1);
                  } else {
                    for (
                      n = token - 1;
                      n >= 0 &&
                      t[n].type !== "softbreak" &&
                      t[n].type !== "hardbreak";
                      n--
                    ) {
                      if (t[n].content) {
                        d = t[n].content.charCodeAt(t[n].content.length - 1);
                        break;
                      }
                    }
                  }
                  let _ = 32;
                  if (a < c) {
                    _ = l.charCodeAt(a);
                  } else {
                    for (
                      n = token + 1;
                      n < t.length &&
                      t[n].type !== "softbreak" &&
                      t[n].type !== "hardbreak";
                      n++
                    ) {
                      if (t[n].content) {
                        _ = t[n].content.charCodeAt(0);
                        break;
                      }
                    }
                  }
                  let m =
                    isMdAsciiPunct(d) || isPunctChar(String.fromCharCode(d));
                  let g =
                    isMdAsciiPunct(_) || isPunctChar(String.fromCharCode(_));
                  let k = isWhiteSpace(d);
                  let y = isWhiteSpace(_);
                  if (y) {
                    u = false;
                  } else if (g && !(k || m)) {
                    u = false;
                  }
                  if (k) {
                    p = false;
                  } else if (m && !(y || g)) {
                    p = false;
                  }
                  if (_ === 34 && h[0] === '"' && d >= 48 && d <= 57) {
                    u = false;
                    p = false;
                  }
                  if (u && p) {
                    u = m;
                    p = g;
                  }
                  if (!u && !p) {
                    if (single) {
                      s.content = tm(s.content, h.index, "’");
                    }
                    continue;
                  }
                  if (p) {
                    for (n = r.length - 1; n >= 0; n--) {
                      let u = r[n];
                      if (r[n].level < level) {
                        break;
                      }
                      if (u.single === single && r[n].level === level) {
                        let o;
                        let p;
                        u = r[n];
                        if (single) {
                          o = e.md.options.quotes[2];
                          p = e.md.options.quotes[3];
                        } else {
                          o = e.md.options.quotes[0];
                          p = e.md.options.quotes[1];
                        }
                        s.content = tm(s.content, h.index, p);
                        t[u.token].content = tm(t[u.token].content, u.pos, o);
                        a += p.length - 1;
                        if (u.token === token) {
                          a += o.length - 1;
                        }
                        c = (l = s.content).length;
                        r.length = n;
                        continue t;
                      }
                    }
                  }
                  if (u) {
                    r.push({
                      token,
                      pos: h.index,
                      single,
                      level,
                    });
                  } else if (p && single) {
                    s.content = tm(s.content, h.index, "’");
                  }
                }
              }
            })(t.tokens[e].children, t);
          }
        }
      }
    },
  ],
  [
    "text_join",
    function (t) {
      let e;
      let n;
      let t_tokens = t.tokens;
      let r_length = t_tokens.length;
      for (let t = 0; t < r_length; t++) {
        if (t_tokens[t].type !== "inline") {
          continue;
        }
        let i = t_tokens[t].children;
        let s = i.length;
        for (e = 0; e < s; e++) {
          if (i[e].type === "text_special") {
            i[e].type = "text";
          }
        }
        for (e = n = 0; e < s; e++) {
          if (i[e].type === "text" && e + 1 < s && i[e + 1].type === "text") {
            i[e + 1].content = i[e].content + i[e + 1].content;
          } else {
            if (e !== n) {
              i[n] = i[e];
            }
            n++;
          }
        }
        if (e !== n) {
          i.length = n;
        }
      }
    },
  ],
];
class tk {
  constructor() {
    this.ruler = new ti();
    for (let t = 0; t < tg.length; t++) {
      this.ruler.push(tg[t][0], tg[t][1]);
    }
  }
  process(t) {
    let e = this.ruler.getRules("");
    for (let n = 0, r = e.length; n < r; n++) {
      e[n](t);
    }
  }
}
class ty {
  constructor(t, e, n, r) {
    this.src = t;
    this.md = e;
    this.env = n;
    this.tokens = r;
    this.bMarks = [];
    this.eMarks = [];
    this.tShift = [];
    this.sCount = [];
    this.bsCount = [];
    this.blkIndent = 0;
    this.line = 0;
    this.lineMax = 0;
    this.tight = false;
    this.ddIndent = -1;
    this.listIndent = -1;
    this.parentType = "root";
    this.level = 0;
    let i = this.src;
    for (let t = 0, e = 0, n = 0, r = 0, s = i.length, o = false; e < s; e++) {
      let l = i.charCodeAt(e);
      if (!o) {
        if (isSpace(l)) {
          n++;
          if (l === 9) {
            r += 4 - (r % 4);
          } else {
            r++;
          }
          continue;
        } else {
          o = true;
        }
      }
      if (l === 10 || e === s - 1) {
        if (l !== 10) {
          e++;
        }
        this.bMarks.push(t);
        this.eMarks.push(e);
        this.tShift.push(n);
        this.sCount.push(r);
        this.bsCount.push(0);
        o = false;
        n = 0;
        r = 0;
        t = e + 1;
      }
    }
    this.bMarks.push(i.length);
    this.eMarks.push(i.length);
    this.tShift.push(0);
    this.sCount.push(0);
    this.bsCount.push(0);
    this.lineMax = this.bMarks.length - 1;
  }
  push(t, e, n) {
    let r = new ts(t, e, n);
    r.block = true;
    if (n < 0) {
      this.level--;
    }
    r.level = this.level;
    if (n > 0) {
      this.level++;
    }
    this.tokens.push(r);
    return r;
  }
  isEmpty(t) {
    return this.bMarks[t] + this.tShift[t] >= this.eMarks[t];
  }
  skipEmptyLines(t) {
    for (
      let e = this.lineMax;
      t < e && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]);
      t++
    );
    return t;
  }
  skipSpaces(t) {
    for (
      let e = this.src.length;
      t < e && isSpace(this.src.charCodeAt(t));
      t++
    );
    return t;
  }
  skipSpacesBack(t, e) {
    if (t <= e) {
      return t;
    }
    while (t > e) {
      if (!isSpace(this.src.charCodeAt(--t))) {
        return t + 1;
      }
    }
    return t;
  }
  skipChars(t, e) {
    for (let n = this.src.length; t < n && this.src.charCodeAt(t) === e; t++);
    return t;
  }
  skipCharsBack(t, e, n) {
    if (t <= n) {
      return t;
    }
    while (t > n) {
      if (e !== this.src.charCodeAt(--t)) {
        return t + 1;
      }
    }
    return t;
  }
  getLines(t, e, n, r) {
    if (t >= e) {
      return "";
    }
    let i = Array(e - t);
    for (let s = 0, o = t; o < e; o++, s++) {
      let t;
      let l = 0;
      let a = this.bMarks[o];
      let c = a;
      for (
        t = o + 1 < e || r ? this.eMarks[o] + 1 : this.eMarks[o];
        c < t && l < n;
      ) {
        let t = this.src.charCodeAt(c);
        if (isSpace(t)) {
          if (t === 9) {
            l += 4 - ((l + this.bsCount[o]) % 4);
          } else {
            l++;
          }
        } else if (c - a < this.tShift[o]) {
          l++;
        } else {
          break;
        }
        c++;
      }
      if (l > n) {
        i[s] = Array(l - n + 1).join(" ") + this.src.slice(c, t);
      } else {
        i[s] = this.src.slice(c, t);
      }
    }
    return i.join("");
  }
}
function tb(t, e) {
  let n = t.bMarks[e] + t.tShift[e];
  let r = t.eMarks[e];
  return t.src.slice(n, r);
}
function tC(t) {
  let e = [];
  let t_length = t.length;
  let r = 0;
  let i = t.charCodeAt(r);
  let s = false;
  let o = 0;
  let l = "";
  while (r < t_length) {
    if (i === 124) {
      if (s) {
        l += t.substring(o, r - 1);
        o = r;
      } else {
        e.push(l + t.substring(o, r));
        l = "";
        o = r + 1;
      }
    }
    s = i === 92;
    r++;
    i = t.charCodeAt(r);
  }
  e.push(l + t.substring(o));
  return e;
}
function tx(t, e) {
  let n = t.eMarks[e];
  let r = t.bMarks[e] + t.tShift[e];
  let i = t.src.charCodeAt(r++);
  if (
    (i !== 42 && i !== 45 && i !== 43) ||
    (r < n && !isSpace(t.src.charCodeAt(r)))
  ) {
    return -1;
  }
  return r;
}
function tA(t, e) {
  let n = t.bMarks[e] + t.tShift[e];
  let r = t.eMarks[e];
  let i = n;
  if (i + 1 >= r) {
    return -1;
  }
  let s = t.src.charCodeAt(i++);
  if (s < 48 || s > 57) {
    return -1;
  }
  while (true) {
    if (i >= r) {
      return -1;
    }
    if ((s = t.src.charCodeAt(i++)) >= 48 && s <= 57) {
      if (i - n >= 10) {
        return -1;
      }
      continue;
    }
    if (s === 41 || s === 46) {
      break;
    }
    return -1;
  }
  if (i < r && !isSpace((s = t.src.charCodeAt(i)))) {
    return -1;
  }
  return i;
}
tk.prototype.State = to;
ty.prototype.Token = ts;
let tv =
  "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>";
let tE = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
let tS = RegExp(
  "^(?:" +
    tv +
    "|" +
    tE +
    "|\x3c!---?>|\x3c!--(?:[^-]|-[^-]|--[^>])*--\x3e|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)",
);
let tz = RegExp("^(?:" + tv + "|" + tE + ")");
let tL = [
  [
    /^<(script|pre|style|textarea)(?=(\s|>|$))/i,
    /<\/(script|pre|style|textarea)>/i,
    true,
  ],
  [/^<!--/, /-->/, true],
  [/^<\?/, /\?>/, true],
  [/^<![A-Z]/, />/, true],
  [/^<!\[CDATA\[/, /\]\]>/, true],
  [
    RegExp(
      "^</?(address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?=(\\s|/?>|$))",
      "i",
    ),
    /^$/,
    true,
  ],
  [RegExp(tz.source + "\\s*$"), /^$/, false],
];
let tT = [
  [
    "table",
    function (t, e, n, r) {
      let i;
      if (e + 2 > n) {
        return false;
      }
      let s = e + 1;
      if (t.sCount[s] < t.blkIndent || t.sCount[s] - t.blkIndent >= 4) {
        return false;
      }
      let o = t.bMarks[s] + t.tShift[s];
      if (o >= t.eMarks[s]) {
        return false;
      }
      let l = t.src.charCodeAt(o++);
      if ((l !== 124 && l !== 45 && l !== 58) || o >= t.eMarks[s]) {
        return false;
      }
      let a = t.src.charCodeAt(o++);
      if (
        (a !== 124 && a !== 45 && a !== 58 && !isSpace(a)) ||
        (l === 45 && isSpace(a))
      ) {
        return false;
      }
      while (o < t.eMarks[s]) {
        let e = t.src.charCodeAt(o);
        if (e !== 124 && e !== 45 && e !== 58 && !isSpace(e)) {
          return false;
        }
        o++;
      }
      let c = tb(t, e + 1);
      let h = c.split("|");
      let u = [];
      for (let t = 0; t < h.length; t++) {
        let e = h[t].trim();
        if (!e) {
          if (t === 0 || t === h.length - 1) {
            continue;
          } else {
            return false;
          }
        }
        if (!/^:?-+:?$/.test(e)) {
          return false;
        }
        if (e.charCodeAt(e.length - 1) === 58) {
          u.push(e.charCodeAt(0) === 58 ? "center" : "right");
        } else if (e.charCodeAt(0) === 58) {
          u.push("left");
        } else {
          u.push("");
        }
      }
      if (
        (c = tb(t, e).trim()).indexOf("|") === -1 ||
        t.sCount[e] - t.blkIndent >= 4
      ) {
        return false;
      }
      if ((h = tC(c)).length && h[0] === "") {
        h.shift();
      }
      if (h.length && h[h.length - 1] === "") {
        h.pop();
      }
      let h_length = h.length;
      if (h_length === 0 || h_length !== u.length) {
        return false;
      }
      if (r) {
        return true;
      }
      let t_parentType = t.parentType;
      t.parentType = "table";
      let d = t.md.block.ruler.getRules("blockquote");
      let _ = t.push("table_open", "table", 1);
      let m = [e, 0];
      _.map = m;
      t.push("thead_open", "thead", 1).map = [e, e + 1];
      t.push("tr_open", "tr", 1).map = [e, e + 1];
      for (let e = 0; e < h.length; e++) {
        let n = t.push("th_open", "th", 1);
        if (u[e]) {
          n.attrs = [["style", "text-align:" + u[e]]];
        }
        let r = t.push("inline", "", 0);
        r.content = h[e].trim();
        r.children = [];
        t.push("th_close", "th", -1);
      }
      t.push("tr_close", "tr", -1);
      t.push("thead_close", "thead", -1);
      let g = 0;
      for (s = e + 2; s < n && !(t.sCount[s] < t.blkIndent); s++) {
        let r = false;
        for (let e = 0, i = d.length; e < i; e++) {
          if (d[e](t, s, n, true)) {
            r = true;
            break;
          }
        }
        if (
          r ||
          !(c = tb(t, s).trim()) ||
          t.sCount[s] - t.blkIndent >= 4 ||
          ((h = tC(c)).length && h[0] === "" && h.shift(),
          h.length && h[h.length - 1] === "" && h.pop(),
          (g += h_length - h.length) > 65536)
        ) {
          break;
        }
        if (s === e + 2) {
          t.push("tbody_open", "tbody", 1).map = i = [e + 2, 0];
        }
        t.push("tr_open", "tr", 1).map = [s, s + 1];
        for (let e = 0; e < h_length; e++) {
          let n = t.push("td_open", "td", 1);
          if (u[e]) {
            n.attrs = [["style", "text-align:" + u[e]]];
          }
          let r = t.push("inline", "", 0);
          r.content = h[e] ? h[e].trim() : "";
          r.children = [];
          t.push("td_close", "td", -1);
        }
        t.push("tr_close", "tr", -1);
      }
      if (i) {
        t.push("tbody_close", "tbody", -1);
        i[1] = s;
      }
      t.push("table_close", "table", -1);
      m[1] = s;
      t.parentType = t_parentType;
      t.line = s;
      return true;
    },
    ["paragraph", "reference"],
  ],
  [
    "code",
    function (t, e, n) {
      if (t.sCount[e] - t.blkIndent < 4) {
        return false;
      }
      let r = e + 1;
      let i = r;
      while (r < n) {
        if (t.isEmpty(r)) {
          r++;
          continue;
        }
        if (t.sCount[r] - t.blkIndent >= 4) {
          i = ++r;
          continue;
        }
        break;
      }
      t.line = i;
      let s = t.push("code_block", "code", 0);
      s.content = t.getLines(e, i, 4 + t.blkIndent, false) + "\n";
      s.map = [e, t.line];
      return true;
    },
  ],
  [
    "fence",
    function (t, e, n, r) {
      let i = t.bMarks[e] + t.tShift[e];
      let s = t.eMarks[e];
      if (t.sCount[e] - t.blkIndent >= 4 || i + 3 > s) {
        return false;
      }
      let o = t.src.charCodeAt(i);
      if (o !== 126 && o !== 96) {
        return false;
      }
      let l = i;
      let a = (i = t.skipChars(i, o)) - l;
      if (a < 3) {
        return false;
      }
      let c = t.src.slice(l, i);
      let h = t.src.slice(i, s);
      if (o === 96 && h.indexOf(String.fromCharCode(o)) >= 0) {
        return false;
      }
      if (r) {
        return true;
      }
      let u = e;
      let p = false;
      while (
        !(++u >= n) &&
        (!((i = l = t.bMarks[u] + t.tShift[u]) < (s = t.eMarks[u])) ||
          !(t.sCount[u] < t.blkIndent))
      ) {
        if (
          !(
            t.src.charCodeAt(i) !== o ||
            t.sCount[u] - t.blkIndent >= 4 ||
            (i = t.skipChars(i, o)) - l < a
          ) &&
          !((i = t.skipSpaces(i)) < s)
        ) {
          p = true;
          break;
        }
      }
      a = t.sCount[e];
      t.line = u + +!!p;
      let f = t.push("fence", "code", 0);
      f.info = h;
      f.content = t.getLines(e + 1, u, a, true);
      f.markup = c;
      f.map = [e, t.line];
      return true;
    },
    ["paragraph", "reference", "blockquote", "list"],
  ],
  [
    "blockquote",
    function (t, e, n, r) {
      let i;
      let s = t.bMarks[e] + t.tShift[e];
      let o = t.eMarks[e];
      let t_lineMax = t.lineMax;
      if (t.sCount[e] - t.blkIndent >= 4 || t.src.charCodeAt(s) !== 62) {
        return false;
      }
      if (r) {
        return true;
      }
      let a = [];
      let c = [];
      let h = [];
      let u = [];
      let p = t.md.block.ruler.getRules("blockquote");
      let t_parentType = t.parentType;
      t.parentType = "blockquote";
      let d = false;
      for (i = e; i < n; i++) {
        let e = t.sCount[i] < t.blkIndent;
        if ((s = t.bMarks[i] + t.tShift[i]) >= (o = t.eMarks[i])) {
          break;
        }
        if (t.src.charCodeAt(s++) === 62 && !e) {
          let e;
          let n;
          let r = t.sCount[i] + 1;
          if (t.src.charCodeAt(s) === 32) {
            s++;
            r++;
            n = false;
            e = true;
          } else if (t.src.charCodeAt(s) === 9) {
            e = true;
            if ((t.bsCount[i] + r) % 4 == 3) {
              s++;
              r++;
              n = false;
            } else {
              n = true;
            }
          } else {
            e = false;
          }
          let l = r;
          a.push(t.bMarks[i]);
          for (t.bMarks[i] = s; s < o;) {
            let e = t.src.charCodeAt(s);
            if (isSpace(e)) {
              if (e === 9) {
                l += 4 - ((l + t.bsCount[i] + +!!n) % 4);
              } else {
                l++;
              }
            } else {
              break;
            }
            s++;
          }
          d = s >= o;
          c.push(t.bsCount[i]);
          t.bsCount[i] = t.sCount[i] + 1 + +!!e;
          h.push(t.sCount[i]);
          t.sCount[i] = l - r;
          u.push(t.tShift[i]);
          t.tShift[i] = s - t.bMarks[i];
          continue;
        }
        if (d) {
          break;
        }
        let r = false;
        for (let e = 0, s = p.length; e < s; e++) {
          if (p[e](t, i, n, true)) {
            r = true;
            break;
          }
        }
        if (r) {
          t.lineMax = i;
          if (t.blkIndent !== 0) {
            a.push(t.bMarks[i]);
            c.push(t.bsCount[i]);
            u.push(t.tShift[i]);
            h.push(t.sCount[i]);
            t.sCount[i] -= t.blkIndent;
          }
          break;
        }
        a.push(t.bMarks[i]);
        c.push(t.bsCount[i]);
        u.push(t.tShift[i]);
        h.push(t.sCount[i]);
        t.sCount[i] = -1;
      }
      let t_blkIndent = t.blkIndent;
      t.blkIndent = 0;
      let m = t.push("blockquote_open", "blockquote", 1);
      m.markup = ">";
      let g = [e, 0];
      m.map = g;
      t.md.block.tokenize(t, e, i);
      t.push("blockquote_close", "blockquote", -1).markup = ">";
      t.lineMax = t_lineMax;
      t.parentType = t_parentType;
      g[1] = t.line;
      for (let n = 0; n < u.length; n++) {
        t.bMarks[n + e] = a[n];
        t.tShift[n + e] = u[n];
        t.sCount[n + e] = h[n];
        t.bsCount[n + e] = c[n];
      }
      t.blkIndent = t_blkIndent;
      return true;
    },
    ["paragraph", "reference", "blockquote", "list"],
  ],
  [
    "hr",
    function (t, e, n, r) {
      let i = t.eMarks[e];
      if (t.sCount[e] - t.blkIndent >= 4) {
        return false;
      }
      let s = t.bMarks[e] + t.tShift[e];
      let o = t.src.charCodeAt(s++);
      if (o !== 42 && o !== 45 && o !== 95) {
        return false;
      }
      let l = 1;
      while (s < i) {
        let e = t.src.charCodeAt(s++);
        if (e !== o && !isSpace(e)) {
          return false;
        }
        if (e === o) {
          l++;
        }
      }
      if (l < 3) {
        return false;
      }
      if (r) {
        return true;
      }
      t.line = e + 1;
      let a = t.push("hr", "hr", 0);
      a.map = [e, t.line];
      a.markup = Array(l + 1).join(String.fromCharCode(o));
      return true;
    },
    ["paragraph", "reference", "blockquote", "list"],
  ],
  [
    "list",
    function (t, e, n, r) {
      let i;
      let s;
      let o;
      let l;
      let a;
      let c;
      let h;
      let u = e;
      let p = true;
      if (
        t.sCount[u] - t.blkIndent >= 4 ||
        (t.listIndent >= 0 &&
          t.sCount[u] - t.listIndent >= 4 &&
          t.sCount[u] < t.blkIndent)
      ) {
        return false;
      }
      let f = false;
      if (r && t.parentType === "paragraph" && t.sCount[u] >= t.blkIndent) {
        f = true;
      }
      if ((h = tA(t, u)) >= 0) {
        a = true;
        o = t.bMarks[u] + t.tShift[u];
        c = Number(t.src.slice(o, h - 1));
        if (f && c !== 1) {
          return false;
        }
      } else {
        if (!((h = tx(t, u)) >= 0)) {
          return false;
        }
        a = false;
      }
      if (f && t.skipSpaces(h) >= t.eMarks[u]) {
        return false;
      }
      if (r) {
        return true;
      }
      let d = t.src.charCodeAt(h - 1);
      let length = t.tokens.length;
      if (a) {
        l = t.push("ordered_list_open", "ol", 1);
        if (c !== 1) {
          l.attrs = [["start", c]];
        }
      } else {
        l = t.push("bullet_list_open", "ul", 1);
      }
      let m = [u, 0];
      l.map = m;
      l.markup = String.fromCharCode(d);
      let g = false;
      let k = t.md.block.ruler.getRules("list");
      let t_parentType = t.parentType;
      for (t.parentType = "list"; u < n;) {
        let e;
        s = h;
        i = t.eMarks[u];
        let r = t.sCount[u] + h - (t.bMarks[u] + t.tShift[u]);
        let c = r;
        while (s < i) {
          let e = t.src.charCodeAt(s);
          if (e === 9) {
            c += 4 - ((c + t.bsCount[u]) % 4);
          } else if (e === 32) {
            c++;
          } else {
            break;
          }
          s++;
        }
        let f = s;
        if ((e = f >= i ? 1 : c - r) > 4) {
          e = 1;
        }
        let _ = r + e;
        l = t.push("list_item_open", "li", 1);
        l.markup = String.fromCharCode(d);
        let m = [u, 0];
        l.map = m;
        if (a) {
          l.info = t.src.slice(o, h - 1);
        }
        let y = t.tight;
        let b = t.tShift[u];
        let C = t.sCount[u];
        let x = t.listIndent;
        t.listIndent = t.blkIndent;
        t.blkIndent = _;
        t.tight = true;
        t.tShift[u] = f - t.bMarks[u];
        t.sCount[u] = c;
        if (f >= i && t.isEmpty(u + 1)) {
          t.line = Math.min(t.line + 2, n);
        } else {
          t.md.block.tokenize(t, u, n, true);
        }
        if (!t.tight || g) {
          p = false;
        }
        g = t.line - u > 1 && t.isEmpty(t.line - 1);
        t.blkIndent = t.listIndent;
        t.listIndent = x;
        t.tShift[u] = b;
        t.sCount[u] = C;
        t.tight = y;
        l = t.push("list_item_close", "li", -1);
        l.markup = String.fromCharCode(d);
        u = t.line;
        m[1] = u;
        if (
          u >= n ||
          t.sCount[u] < t.blkIndent ||
          t.sCount[u] - t.blkIndent >= 4
        ) {
          break;
        }
        let A = false;
        for (let e = 0, r = k.length; e < r; e++) {
          if (k[e](t, u, n, true)) {
            A = true;
            break;
          }
        }
        if (A) {
          break;
        }
        if (a) {
          if ((h = tA(t, u)) < 0) {
            break;
          }
          o = t.bMarks[u] + t.tShift[u];
        } else if ((h = tx(t, u)) < 0) {
          break;
        }
        if (d !== t.src.charCodeAt(h - 1)) {
          break;
        }
      }
      l = a
        ? t.push("ordered_list_close", "ol", -1)
        : t.push("bullet_list_close", "ul", -1);
      l.markup = String.fromCharCode(d);
      m[1] = u;
      t.line = u;
      t.parentType = t_parentType;
      if (p) {
        ((t, e) => {
          let n = t.level + 2;
          for (let r = e + 2, i = t.tokens.length - 2; r < i; r++) {
            if (
              t.tokens[r].level === n &&
              t.tokens[r].type === "paragraph_open"
            ) {
              t.tokens[r + 2].hidden = true;
              t.tokens[r].hidden = true;
              r += 2;
            }
          }
        })(t, length);
      }
      return true;
    },
    ["paragraph", "reference", "blockquote"],
  ],
  [
    "reference",
    function (t, e, n, r) {
      let title;
      let s = t.bMarks[e] + t.tShift[e];
      let o = t.eMarks[e];
      let l = e + 1;
      if (t.sCount[e] - t.blkIndent >= 4 || t.src.charCodeAt(s) !== 91) {
        return false;
      }
      function a(e) {
        let t_lineMax = t.lineMax;
        if (e >= t_lineMax || t.isEmpty(e)) {
          return null;
        }
        let r = false;
        if (t.sCount[e] - t.blkIndent > 3) {
          r = true;
        }
        if (t.sCount[e] < 0) {
          r = true;
        }
        if (!r) {
          let r = t.md.block.ruler.getRules("reference");
          let i = t.parentType;
          t.parentType = "reference";
          let s = false;
          for (let i = 0, o = r.length; i < o; i++) {
            if (r[i](t, e, t_lineMax, true)) {
              s = true;
              break;
            }
          }
          t.parentType = i;
          if (s) {
            return null;
          }
        }
        let i = t.bMarks[e] + t.tShift[e];
        let s = t.eMarks[e];
        return t.src.slice(i, s + 1);
      }
      let c = t.src.slice(s, o + 1);
      o = c.length;
      let h = -1;
      for (s = 1; s < o; s++) {
        let t = c.charCodeAt(s);
        if (t === 91) {
          return false;
        }
        if (t === 93) {
          h = s;
          break;
        }
        if (t === 10) {
          let t = a(l);
          if (t !== null) {
            c += t;
            o = c.length;
            l++;
          }
        } else if (t === 92 && ++s < o && c.charCodeAt(s) === 10) {
          let t = a(l);
          if (t !== null) {
            c += t;
            o = c.length;
            l++;
          }
        }
      }
      if (h < 0 || c.charCodeAt(h + 1) !== 58) {
        return false;
      }
      for (s = h + 2; s < o; s++) {
        let t = c.charCodeAt(s);
        if (t === 10) {
          let t = a(l);
          if (t !== null) {
            c += t;
            o = c.length;
            l++;
          }
        } else if (isSpace(t));
        else {
          break;
        }
      }
      let u = t.md.helpers.parseLinkDestination(c, s, o);
      if (!u.ok) {
        return false;
      }
      let href = t.md.normalizeLink(u.str);
      if (!t.md.validateLink(href)) {
        return false;
      }
      let f = (s = u.pos);
      let d = l;
      let _ = s;
      for (; s < o; s++) {
        let t = c.charCodeAt(s);
        if (t === 10) {
          let t = a(l);
          if (t !== null) {
            c += t;
            o = c.length;
            l++;
          }
        } else if (isSpace(t));
        else {
          break;
        }
      }
      let m = t.md.helpers.parseLinkTitle(c, s, o);
      while (m.can_continue) {
        let e = a(l);
        if (e === null) {
          break;
        }
        c += e;
        s = o;
        o = c.length;
        l++;
        m = t.md.helpers.parseLinkTitle(c, s, o, m);
      }
      for (
        s < o && _ !== s && m.ok
          ? ((title = m.str), (s = m.pos))
          : ((title = ""), (s = f), (l = d));
        s < o && isSpace(c.charCodeAt(s));
      ) {
        s++;
      }
      if (s < o && c.charCodeAt(s) !== 10 && title) {
        title = "";
        s = f;
        for (l = d; s < o && isSpace(c.charCodeAt(s));) {
          s++;
        }
      }
      if (s < o && c.charCodeAt(s) !== 10) {
        return false;
      }
      let g = normalizeReference(c.slice(1, h));
      return (
        !!g &&
        (!!r ||
          (t.env.references === undefined && (t.env.references = {}),
          t.env.references[g] === undefined &&
            (t.env.references[g] = {
              title,
              href,
            }),
          (t.line = l),
          true))
      );
    },
  ],
  [
    "html_block",
    function (t, e, n, r) {
      let i = t.bMarks[e] + t.tShift[e];
      let s = t.eMarks[e];
      if (
        t.sCount[e] - t.blkIndent >= 4 ||
        !t.md.options.html ||
        t.src.charCodeAt(i) !== 60
      ) {
        return false;
      }
      let o = t.src.slice(i, s);
      let l = 0;
      for (; l < tL.length && !tL[l][0].test(o); l++);
      if (l === tL.length) {
        return false;
      }
      if (r) {
        return tL[l][2];
      }
      let a = e + 1;
      if (!tL[l][1].test(o)) {
        for (; a < n && !(t.sCount[a] < t.blkIndent); a++) {
          i = t.bMarks[a] + t.tShift[a];
          s = t.eMarks[a];
          o = t.src.slice(i, s);
          if (tL[l][1].test(o)) {
            if (o.length !== 0) {
              a++;
            }
            break;
          }
        }
      }
      t.line = a;
      let c = t.push("html_block", "", 0);
      c.map = [e, a];
      c.content = t.getLines(e, a, t.blkIndent, true);
      return true;
    },
    ["paragraph", "reference", "blockquote"],
  ],
  [
    "heading",
    function (t, e, n, r) {
      let i = t.bMarks[e] + t.tShift[e];
      let s = t.eMarks[e];
      if (t.sCount[e] - t.blkIndent >= 4) {
        return false;
      }
      let o = t.src.charCodeAt(i);
      if (o !== 35 || i >= s) {
        return false;
      }
      let l = 1;
      for (o = t.src.charCodeAt(++i); o === 35 && i < s && l <= 6;) {
        l++;
        o = t.src.charCodeAt(++i);
      }
      if (l > 6 || (i < s && !isSpace(o))) {
        return false;
      }
      if (r) {
        return true;
      }
      s = t.skipSpacesBack(s, i);
      let a = t.skipCharsBack(s, 35, i);
      if (a > i && isSpace(t.src.charCodeAt(a - 1))) {
        s = a;
      }
      t.line = e + 1;
      let c = t.push("heading_open", "h" + String(l), 1);
      c.markup = "########".slice(0, l);
      c.map = [e, t.line];
      let h = t.push("inline", "", 0);
      h.content = t.src.slice(i, s).trim();
      h.map = [e, t.line];
      h.children = [];
      t.push("heading_close", "h" + String(l), -1).markup = "########".slice(
        0,
        l,
      );
      return true;
    },
    ["paragraph", "reference", "blockquote"],
  ],
  [
    "lheading",
    function (t, e, n) {
      let r;
      let i = t.md.block.ruler.getRules("paragraph");
      if (t.sCount[e] - t.blkIndent >= 4) {
        return false;
      }
      let t_parentType = t.parentType;
      t.parentType = "paragraph";
      let o = 0;
      let l = e + 1;
      for (; l < n && !t.isEmpty(l); l++) {
        if (t.sCount[l] - t.blkIndent > 3) {
          continue;
        }
        if (t.sCount[l] >= t.blkIndent) {
          let e = t.bMarks[l] + t.tShift[l];
          let n = t.eMarks[l];
          if (
            e < n &&
            ((r = t.src.charCodeAt(e)) === 45 || r === 61) &&
            ((e = t.skipChars(e, r)), (e = t.skipSpaces(e)) >= n)
          ) {
            o = r === 61 ? 1 : 2;
            break;
          }
        }
        if (t.sCount[l] < 0) {
          continue;
        }
        let e = false;
        for (let r = 0, s = i.length; r < s; r++) {
          if (i[r](t, l, n, true)) {
            e = true;
            break;
          }
        }
        if (e) {
          break;
        }
      }
      if (!o) {
        return false;
      }
      let a = t.getLines(e, l, t.blkIndent, false).trim();
      t.line = l + 1;
      let c = t.push("heading_open", "h" + String(o), 1);
      c.markup = String.fromCharCode(r);
      c.map = [e, t.line];
      let h = t.push("inline", "", 0);
      h.content = a;
      h.map = [e, t.line - 1];
      h.children = [];
      t.push("heading_close", "h" + String(o), -1).markup =
        String.fromCharCode(r);
      t.parentType = t_parentType;
      return true;
    },
  ],
  [
    "paragraph",
    function (t, e, n) {
      let r = t.md.block.ruler.getRules("paragraph");
      let t_parentType = t.parentType;
      let s = e + 1;
      for (t.parentType = "paragraph"; s < n && !t.isEmpty(s); s++) {
        if (t.sCount[s] - t.blkIndent > 3 || t.sCount[s] < 0) {
          continue;
        }
        let e = false;
        for (let i = 0, o = r.length; i < o; i++) {
          if (r[i](t, s, n, true)) {
            e = true;
            break;
          }
        }
        if (e) {
          break;
        }
      }
      let o = t.getLines(e, s, t.blkIndent, false).trim();
      t.line = s;
      t.push("paragraph_open", "p", 1).map = [e, t.line];
      let l = t.push("inline", "", 0);
      l.content = o;
      l.map = [e, t.line];
      l.children = [];
      t.push("paragraph_close", "p", -1);
      t.parentType = t_parentType;
      return true;
    },
  ],
];
class tM {
  constructor() {
    this.ruler = new ti();
    for (let t = 0; t < tT.length; t++) {
      this.ruler.push(tT[t][0], tT[t][1], {
        alt: (tT[t][2] || []).slice(),
      });
    }
  }
  tokenize(t, e, n) {
    let r = this.ruler.getRules("");
    let r_length = r.length;
    let maxNesting = t.md.options.maxNesting;
    let o = e;
    let l = false;
    while (
      o < n &&
      ((t.line = o = t.skipEmptyLines(o)),
      !(o >= n) && !(t.sCount[o] < t.blkIndent))
    ) {
      if (t.level >= maxNesting) {
        t.line = n;
        break;
      }
      let e = t.line;
      let a = false;
      for (let s = 0; s < r_length; s++) {
        if ((a = r[s](t, o, n, false))) {
          if (e >= t.line) {
            throw Error("block rule didn't increment state.line");
          }
          break;
        }
      }
      if (!a) {
        throw Error("none of the block rules matched");
      }
      t.tight = !l;
      if (t.isEmpty(t.line - 1)) {
        l = true;
      }
      if ((o = t.line) < n && t.isEmpty(o)) {
        l = true;
        t.line = ++o;
      }
    }
  }
  parse(t, e, n, r) {
    if (!t) {
      return;
    }
    let i = new this.State(t, e, n, r);
    this.tokenize(i, i.line, i.lineMax);
  }
}
class tw {
  constructor(t, e, n, r) {
    this.src = t;
    this.env = n;
    this.md = e;
    this.tokens = r;
    this.tokens_meta = Array(r.length);
    this.pos = 0;
    this.posMax = this.src.length;
    this.level = 0;
    this.pending = "";
    this.pendingLevel = 0;
    this.cache = {};
    this.delimiters = [];
    this._prev_delimiters = [];
    this.backticks = {};
    this.backticksScanned = false;
    this.linkLevel = 0;
  }
  pushPending() {
    let t = new ts("text", "", 0);
    t.content = this.pending;
    t.level = this.pendingLevel;
    this.tokens.push(t);
    this.pending = "";
    return t;
  }
  push(t, e, n) {
    if (this.pending) {
      this.pushPending();
    }
    let r = new ts(t, e, n);
    let i = null;
    if (n < 0) {
      this.level--;
      this.delimiters = this._prev_delimiters.pop();
    }
    r.level = this.level;
    if (n > 0) {
      this.level++;
      this._prev_delimiters.push(this.delimiters);
      this.delimiters = [];
      i = {
        delimiters: this.delimiters,
      };
    }
    this.pendingLevel = this.level;
    this.tokens.push(r);
    this.tokens_meta.push(i);
    return r;
  }
  scanDelims(t, e) {
    let posMax = this.posMax;
    let r = this.src.charCodeAt(t);
    let i = t > 0 ? this.src.charCodeAt(t - 1) : 32;
    let s = t;
    while (s < posMax && this.src.charCodeAt(s) === r) {
      s++;
    }
    let length = s - t;
    let l = s < posMax ? this.src.charCodeAt(s) : 32;
    let a = isMdAsciiPunct(i) || isPunctChar(String.fromCharCode(i));
    let c = isMdAsciiPunct(l) || isPunctChar(String.fromCharCode(l));
    let h = isWhiteSpace(i);
    let u = isWhiteSpace(l);
    let p = !u && (!c || h || a);
    let f = !h && (!a || u || c);
    return {
      can_open: p && (e || !f || a),
      can_close: f && (e || !p || c),
      length,
    };
  }
}
tM.prototype.State = ty;
tw.prototype.Token = ts;
let tI = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
let tO = [];
for (let t = 0; t < 256; t++) {
  tO.push(0);
}
function t$(t, delimiters) {
  let n;
  let r = [];
  let e_length = delimiters.length;
  for (let s = 0; s < e_length; s++) {
    let i = delimiters[s];
    if (i.marker !== 126 || i.end === -1) {
      continue;
    }
    let o = delimiters[i.end];
    n = t.tokens[i.token];
    n.type = "s_open";
    n.tag = "s";
    n.nesting = 1;
    n.markup = "~~";
    n.content = "";
    n = t.tokens[o.token];
    n.type = "s_close";
    n.tag = "s";
    n.nesting = -1;
    n.markup = "~~";
    n.content = "";
    if (
      t.tokens[o.token - 1].type === "text" &&
      t.tokens[o.token - 1].content === "~"
    ) {
      r.push(o.token - 1);
    }
  }
  while (r.length) {
    let e = r.pop();
    let i = e + 1;
    while (i < t.tokens.length && t.tokens[i].type === "s_close") {
      i++;
    }
    if (e !== --i) {
      n = t.tokens[i];
      t.tokens[i] = t.tokens[e];
      t.tokens[e] = n;
    }
  }
}
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach((t) => {
  tO[t.charCodeAt(0)] = 1;
});
function tR(t, delimiters) {
  let e_length = delimiters.length;
  for (let r = e_length - 1; r >= 0; r--) {
    let n = delimiters[r];
    if ((n.marker !== 95 && n.marker !== 42) || n.end === -1) {
      continue;
    }
    let i = delimiters[n.end];
    let s =
      r > 0 &&
      delimiters[r - 1].end === n.end + 1 &&
      delimiters[r - 1].marker === n.marker &&
      delimiters[r - 1].token === n.token - 1 &&
      delimiters[n.end + 1].token === i.token + 1;
    let o = String.fromCharCode(n.marker);
    let l = t.tokens[n.token];
    l.type = s ? "strong_open" : "em_open";
    l.tag = s ? "strong" : "em";
    l.nesting = 1;
    l.markup = s ? o + o : o;
    l.content = "";
    let a = t.tokens[i.token];
    a.type = s ? "strong_close" : "em_close";
    a.tag = s ? "strong" : "em";
    a.nesting = -1;
    a.markup = s ? o + o : o;
    a.content = "";
    if (s) {
      t.tokens[delimiters[r - 1].token].content = "";
      t.tokens[delimiters[n.end + 1].token].content = "";
      r--;
    }
  }
}
let tj =
  /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
let tP = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
let tD = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
let tN = /^&([a-z][a-z0-9]{1,31});/i;
function tH(delimiters) {
  let e = {};
  let t_length = delimiters.length;
  if (!t_length) {
    return;
  }
  let r = 0;
  let i = -2;
  let s = [];
  for (let o = 0; o < t_length; o++) {
    let n = delimiters[o];
    s.push(0);
    if (delimiters[r].marker !== n.marker || i !== n.token - 1) {
      r = o;
    }
    i = n.token;
    n.length = n.length || 0;
    if (!n.close) {
      continue;
    }
    if (!e.hasOwnProperty(n.marker)) {
      e[n.marker] = [-1, -1, -1, -1, -1, -1];
    }
    let l = e[n.marker][3 * !!n.open + (n.length % 3)];
    let a = r - s[r] - 1;
    let c = a;
    for (; a > l; a -= s[a] + 1) {
      let e = delimiters[a];
      if (e.marker === n.marker && e.open && e.end < 0) {
        let r = false;
        if (
          (e.close || n.open) &&
          (e.length + n.length) % 3 == 0 &&
          (e.length % 3 != 0 || n.length % 3 != 0)
        ) {
          r = true;
        }
        if (!r) {
          let r = a > 0 && !delimiters[a - 1].open ? s[a - 1] + 1 : 0;
          s[o] = o - a + r;
          s[a] = r;
          n.open = false;
          e.end = o;
          e.close = false;
          c = -1;
          i = -2;
          break;
        }
      }
    }
    if (c !== -1) {
      e[n.marker][3 * !!n.open + ((n.length || 0) % 3)] = c;
    }
  }
}
let tZ = [
  [
    "text",
    function (t, e) {
      let t_pos = t.pos;
      while (
        t_pos < t.posMax &&
        !((t) => {
          switch (t) {
            case 10:
            case 33:
            case 35:
            case 36:
            case 37:
            case 38:
            case 42:
            case 43:
            case 45:
            case 58:
            case 60:
            case 61:
            case 62:
            case 64:
            case 91:
            case 92:
            case 93:
            case 94:
            case 95:
            case 96:
            case 123:
            case 125:
            case 126:
              return true;
            default:
              return false;
          }
        })(t.src.charCodeAt(t_pos))
      ) {
        t_pos++;
      }
      return (
        t_pos !== t.pos &&
        (e || (t.pending += t.src.slice(t.pos, t_pos)), (t.pos = t_pos), true)
      );
    },
  ],
  [
    "linkify",
    function (t, e) {
      if (!t.md.options.linkify || t.linkLevel > 0) {
        return false;
      }
      let t_pos = t.pos;
      if (
        t_pos + 3 > t.posMax ||
        t.src.charCodeAt(t_pos) !== 58 ||
        t.src.charCodeAt(t_pos + 1) !== 47 ||
        t.src.charCodeAt(t_pos + 2) !== 47
      ) {
        return false;
      }
      let r = t.pending.match(tI);
      if (!r) {
        return false;
      }
      let i = r[1];
      let s = t.md.linkify.matchAtStart(t.src.slice(t_pos - i.length));
      if (!s) {
        return false;
      }
      let s_url = s.url;
      if (s_url.length <= i.length) {
        return false;
      }
      s_url = s_url.replace(/\*+$/, "");
      let l = t.md.normalizeLink(s_url);
      if (!t.md.validateLink(l)) {
        return false;
      }
      if (!e) {
        t.pending = t.pending.slice(0, -i.length);
        let e = t.push("link_open", "a", 1);
        e.attrs = [["href", l]];
        e.markup = "linkify";
        e.info = "auto";
        t.push("text", "", 0).content = t.md.normalizeLinkText(s_url);
        let n = t.push("link_close", "a", -1);
        n.markup = "linkify";
        n.info = "auto";
      }
      t.pos += s_url.length - i.length;
      return true;
    },
  ],
  [
    "newline",
    function (t, e) {
      let t_pos = t.pos;
      if (t.src.charCodeAt(t_pos) !== 10) {
        return false;
      }
      let r = t.pending.length - 1;
      let t_posMax = t.posMax;
      if (!e) {
        if (r >= 0 && t.pending.charCodeAt(r) === 32) {
          if (r >= 1 && t.pending.charCodeAt(r - 1) === 32) {
            let e = r - 1;
            while (e >= 1 && t.pending.charCodeAt(e - 1) === 32) {
              e--;
            }
            t.pending = t.pending.slice(0, e);
            t.push("hardbreak", "br", 0);
          } else {
            t.pending = t.pending.slice(0, -1);
            t.push("softbreak", "br", 0);
          }
        } else {
          t.push("softbreak", "br", 0);
        }
      }
      for (t_pos++; t_pos < t_posMax && isSpace(t.src.charCodeAt(t_pos));) {
        t_pos++;
      }
      t.pos = t_pos;
      return true;
    },
  ],
  [
    "escape",
    function (t, e) {
      let t_pos = t.pos;
      let t_posMax = t.posMax;
      if (t.src.charCodeAt(t_pos) !== 92 || ++t_pos >= t_posMax) {
        return false;
      }
      let i = t.src.charCodeAt(t_pos);
      if (i === 10) {
        if (!e) {
          t.push("hardbreak", "br", 0);
        }
        t_pos++;
        while (t_pos < t_posMax && isSpace((i = t.src.charCodeAt(t_pos)))) {
          t_pos++;
        }
        t.pos = t_pos;
        return true;
      }
      let s = t.src[t_pos];
      if (i >= 55296 && i <= 56319 && t_pos + 1 < t_posMax) {
        let e = t.src.charCodeAt(t_pos + 1);
        if (e >= 56320 && e <= 57343) {
          s += t.src[t_pos + 1];
          t_pos++;
        }
      }
      let o = "\\" + s;
      if (!e) {
        let e = t.push("text_special", "", 0);
        if (i < 256 && tO[i] !== 0) {
          e.content = s;
        } else {
          e.content = o;
        }
        e.markup = o;
        e.info = "escape";
      }
      t.pos = t_pos + 1;
      return true;
    },
  ],
  [
    "backticks",
    function (t, e) {
      let n;
      let t_pos = t.pos;
      if (t.src.charCodeAt(t_pos) !== 96) {
        return false;
      }
      let i = t_pos;
      t_pos++;
      let t_posMax = t.posMax;
      while (t_pos < t_posMax && t.src.charCodeAt(t_pos) === 96) {
        t_pos++;
      }
      let o = t.src.slice(i, t_pos);
      let o_length = o.length;
      if (t.backticksScanned && (t.backticks[o_length] || 0) <= i) {
        if (!e) {
          t.pending += o;
        }
        t.pos += o_length;
        return true;
      }
      let a = t_pos;
      while ((n = t.src.indexOf("`", a)) !== -1) {
        for (a = n + 1; a < t_posMax && t.src.charCodeAt(a) === 96;) {
          a++;
        }
        let i = a - n;
        if (i === o_length) {
          if (!e) {
            let e = t.push("code_inline", "code", 0);
            e.markup = o;
            e.content = t.src
              .slice(t_pos, n)
              .replace(/\n/g, " ")
              .replace(/^ (.+) $/, "$1");
          }
          t.pos = a;
          return true;
        }
        t.backticks[i] = n;
      }
      t.backticksScanned = true;
      if (!e) {
        t.pending += o;
      }
      t.pos += o_length;
      return true;
    },
  ],
  [
    "strikethrough",
    function (t, e) {
      let t_pos = t.pos;
      let r = t.src.charCodeAt(t_pos);
      if (e || r !== 126) {
        return false;
      }
      let i = t.scanDelims(t.pos, true);
      let i_length = i.length;
      let o = String.fromCharCode(r);
      if (i_length < 2) {
        return false;
      }
      if (i_length % 2) {
        t.push("text", "", 0).content = o;
        i_length--;
      }
      for (let e = 0; e < i_length; e += 2) {
        t.push("text", "", 0).content = o + o;
        t.delimiters.push({
          marker: r,
          length: 0,
          token: t.tokens.length - 1,
          end: -1,
          open: i.can_open,
          close: i.can_close,
        });
      }
      t.pos += i.length;
      return true;
    },
  ],
  [
    "emphasis",
    function (t, e) {
      let t_pos = t.pos;
      let r = t.src.charCodeAt(t_pos);
      if (e || (r !== 95 && r !== 42)) {
        return false;
      }
      let i = t.scanDelims(t.pos, r === 42);
      for (let e = 0; e < i.length; e++) {
        t.push("text", "", 0).content = String.fromCharCode(r);
        t.delimiters.push({
          marker: r,
          length: i.length,
          token: t.tokens.length - 1,
          end: -1,
          open: i.can_open,
          close: i.can_close,
        });
      }
      t.pos += i.length;
      return true;
    },
  ],
  [
    "link",
    function (t, e) {
      let n;
      let r;
      let i;
      let s;
      let o = "";
      let l = "";
      let t_pos = t.pos;
      let c = true;
      if (t.src.charCodeAt(t.pos) !== 91) {
        return false;
      }
      let t_pos_1 = t.pos;
      let t_posMax = t.posMax;
      let p = t.pos + 1;
      let f = t.md.helpers.parseLinkLabel(t, t.pos, true);
      if (f < 0) {
        return false;
      }
      let d = f + 1;
      if (d < t_posMax && t.src.charCodeAt(d) === 40) {
        c = false;
        d++;
        for (
          ;
          d < t_posMax && (isSpace((n = t.src.charCodeAt(d))) || n === 10);
          d++
        );
        if (d >= t_posMax) {
          return false;
        }
        t_pos = d;
        if ((i = t.md.helpers.parseLinkDestination(t.src, d, t.posMax)).ok) {
          o = t.md.normalizeLink(i.str);
          if (t.md.validateLink(o)) {
            d = i.pos;
          } else {
            o = "";
          }
          for (
            t_pos = d;
            d < t_posMax && (isSpace((n = t.src.charCodeAt(d))) || n === 10);
            d++
          );
          i = t.md.helpers.parseLinkTitle(t.src, d, t.posMax);
          if (d < t_posMax && t_pos !== d && i.ok) {
            l = i.str;
            for (
              d = i.pos;
              d < t_posMax && (isSpace((n = t.src.charCodeAt(d))) || n === 10);
              d++
            );
          }
        }
        if (d >= t_posMax || t.src.charCodeAt(d) !== 41) {
          c = true;
        }
        d++;
      }
      if (c) {
        if (t.env.references === undefined) {
          return false;
        }
        if (d < t_posMax && t.src.charCodeAt(d) === 91) {
          t_pos = d + 1;
          if ((d = t.md.helpers.parseLinkLabel(t, d)) >= 0) {
            r = t.src.slice(t_pos, d++);
          } else {
            d = f + 1;
          }
        } else {
          d = f + 1;
        }
        if (!r) {
          r = t.src.slice(p, f);
        }
        if (!(s = t.env.references[normalizeReference(r)])) {
          t.pos = t_pos_1;
          return false;
        }
        o = s.href;
        l = s.title;
      }
      if (!e) {
        t.pos = p;
        t.posMax = f;
        let e = t.push("link_open", "a", 1);
        let n = [["href", o]];
        e.attrs = n;
        if (l) {
          n.push(["title", l]);
        }
        t.linkLevel++;
        t.md.inline.tokenize(t);
        t.linkLevel--;
        t.push("link_close", "a", -1);
      }
      t.pos = d;
      t.posMax = t_posMax;
      return true;
    },
  ],
  [
    "image",
    function (t, e) {
      let n;
      let r;
      let i;
      let s;
      let o;
      let l;
      let a;
      let c;
      let h = "";
      let t_pos = t.pos;
      let t_posMax = t.posMax;
      if (
        t.src.charCodeAt(t.pos) !== 33 ||
        t.src.charCodeAt(t.pos + 1) !== 91
      ) {
        return false;
      }
      let f = t.pos + 2;
      let d = t.md.helpers.parseLinkLabel(t, t.pos + 1, false);
      if (d < 0) {
        return false;
      }
      if ((s = d + 1) < t_posMax && t.src.charCodeAt(s) === 40) {
        for (
          s++;
          s < t_posMax && (isSpace((n = t.src.charCodeAt(s))) || n === 10);
          s++
        );
        if (s >= t_posMax) {
          return false;
        }
        c = s;
        if ((l = t.md.helpers.parseLinkDestination(t.src, s, t.posMax)).ok) {
          h = t.md.normalizeLink(l.str);
          if (t.md.validateLink(h)) {
            s = l.pos;
          } else {
            h = "";
          }
        }
        for (
          c = s;
          s < t_posMax && (isSpace((n = t.src.charCodeAt(s))) || n === 10);
          s++
        );
        l = t.md.helpers.parseLinkTitle(t.src, s, t.posMax);
        if (s < t_posMax && c !== s && l.ok) {
          a = l.str;
          for (
            s = l.pos;
            s < t_posMax && (isSpace((n = t.src.charCodeAt(s))) || n === 10);
            s++
          );
        } else {
          a = "";
        }
        if (s >= t_posMax || t.src.charCodeAt(s) !== 41) {
          t.pos = t_pos;
          return false;
        }
        s++;
      } else {
        if (t.env.references === undefined) {
          return false;
        }
        if (s < t_posMax && t.src.charCodeAt(s) === 91) {
          c = s + 1;
          if ((s = t.md.helpers.parseLinkLabel(t, s)) >= 0) {
            i = t.src.slice(c, s++);
          } else {
            s = d + 1;
          }
        } else {
          s = d + 1;
        }
        if (!i) {
          i = t.src.slice(f, d);
        }
        if (!(o = t.env.references[normalizeReference(i)])) {
          t.pos = t_pos;
          return false;
        }
        h = o.href;
        a = o.title;
      }
      if (!e) {
        r = t.src.slice(f, d);
        let e = [];
        t.md.inline.parse(r, t.md, t.env, e);
        let n = t.push("image", "img", 0);
        let i = [
          ["src", h],
          ["alt", ""],
        ];
        n.attrs = i;
        n.children = e;
        n.content = r;
        if (a) {
          i.push(["title", a]);
        }
      }
      t.pos = s;
      t.posMax = t_posMax;
      return true;
    },
  ],
  [
    "autolink",
    function (t, e) {
      let t_pos = t.pos;
      if (t.src.charCodeAt(t_pos) !== 60) {
        return false;
      }
      let t_pos_1 = t.pos;
      let t_posMax = t.posMax;
      while (true) {
        if (++t_pos >= t_posMax) {
          return false;
        }
        let e = t.src.charCodeAt(t_pos);
        if (e === 60) {
          return false;
        }
        if (e === 62) {
          break;
        }
      }
      let s = t.src.slice(t_pos_1 + 1, t_pos);
      if (tP.test(s)) {
        let n = t.md.normalizeLink(s);
        if (!t.md.validateLink(n)) {
          return false;
        }
        if (!e) {
          let e = t.push("link_open", "a", 1);
          e.attrs = [["href", n]];
          e.markup = "autolink";
          e.info = "auto";
          t.push("text", "", 0).content = t.md.normalizeLinkText(s);
          let r = t.push("link_close", "a", -1);
          r.markup = "autolink";
          r.info = "auto";
        }
        t.pos += s.length + 2;
        return true;
      }
      if (tj.test(s)) {
        let n = t.md.normalizeLink("mailto:" + s);
        if (!t.md.validateLink(n)) {
          return false;
        }
        if (!e) {
          let e = t.push("link_open", "a", 1);
          e.attrs = [["href", n]];
          e.markup = "autolink";
          e.info = "auto";
          t.push("text", "", 0).content = t.md.normalizeLinkText(s);
          let r = t.push("link_close", "a", -1);
          r.markup = "autolink";
          r.info = "auto";
        }
        t.pos += s.length + 2;
        return true;
      }
      return false;
    },
  ],
  [
    "html_inline",
    function (t, e) {
      let n;
      if (!t.md.options.html) {
        return false;
      }
      let t_posMax = t.posMax;
      let t_pos = t.pos;
      if (t.src.charCodeAt(t_pos) !== 60 || t_pos + 2 >= t_posMax) {
        return false;
      }
      let s = t.src.charCodeAt(t_pos + 1);
      if (
        s !== 33 &&
        s !== 63 &&
        s !== 47 &&
        (!((n = 32 | s) >= 97) || !(n <= 122))
      ) {
        return false;
      }
      let o = t.src.slice(t_pos).match(tS);
      if (!o) {
        return false;
      }
      if (!e) {
        let l;
        let a;
        let e = t.push("html_inline", "", 0);
        e.content = o[0];
        l = e.content;
        if (/^<a[>\s]/i.test(l)) {
          t.linkLevel++;
        }
        a = e.content;
        if (/^<\/a\s*>/i.test(a)) {
          t.linkLevel--;
        }
      }
      t.pos += o[0].length;
      return true;
    },
  ],
  [
    "entity",
    function (t, e) {
      let t_pos = t.pos;
      let t_posMax = t.posMax;
      if (t.src.charCodeAt(t_pos) !== 38 || t_pos + 1 >= t_posMax) {
        return false;
      }
      if (t.src.charCodeAt(t_pos + 1) === 35) {
        let r = t.src.slice(t_pos).match(tD);
        if (r) {
          if (!e) {
            let e =
              r[1][0].toLowerCase() === "x"
                ? parseInt(r[1].slice(1), 16)
                : parseInt(r[1], 10);
            let n = t.push("text_special", "", 0);
            n.content = isValidEntityCode(e)
              ? fromCodePoint(e)
              : fromCodePoint(65533);
            n.markup = r[0];
            n.info = "entity";
          }
          t.pos += r[0].length;
          return true;
        }
      } else {
        let r = t.src.slice(t_pos).match(tN);
        if (r) {
          let n = z.Gz(r[0]);
          if (n !== r[0]) {
            if (!e) {
              let e = t.push("text_special", "", 0);
              e.content = n;
              e.markup = r[0];
              e.info = "entity";
            }
            t.pos += r[0].length;
            return true;
          }
        }
      }
      return false;
    },
  ],
];
let tU = [
  [
    "balance_pairs",
    function (t) {
      let t_tokens_meta = t.tokens_meta;
      let length = t.tokens_meta.length;
      tH(t.delimiters);
      for (let t = 0; t < length; t++) {
        if (t_tokens_meta[t] && t_tokens_meta[t].delimiters) {
          tH(t_tokens_meta[t].delimiters);
        }
      }
    },
  ],
  [
    "strikethrough",
    function (t) {
      let t_tokens_meta = t.tokens_meta;
      let length = t.tokens_meta.length;
      t$(t, t.delimiters);
      for (let r = 0; r < length; r++) {
        if (t_tokens_meta[r] && t_tokens_meta[r].delimiters) {
          t$(t, t_tokens_meta[r].delimiters);
        }
      }
    },
  ],
  [
    "emphasis",
    function (t) {
      let t_tokens_meta = t.tokens_meta;
      let length = t.tokens_meta.length;
      tR(t, t.delimiters);
      for (let r = 0; r < length; r++) {
        if (t_tokens_meta[r] && t_tokens_meta[r].delimiters) {
          tR(t, t_tokens_meta[r].delimiters);
        }
      }
    },
  ],
  [
    "fragments_join",
    function (t) {
      let e;
      let n;
      let r = 0;
      let t_tokens = t.tokens;
      let length = t.tokens.length;
      for (e = n = 0; e < length; e++) {
        if (t_tokens[e].nesting < 0) {
          r--;
        }
        t_tokens[e].level = r;
        if (t_tokens[e].nesting > 0) {
          r++;
        }
        if (
          t_tokens[e].type === "text" &&
          e + 1 < length &&
          t_tokens[e + 1].type === "text"
        ) {
          t_tokens[e + 1].content =
            t_tokens[e].content + t_tokens[e + 1].content;
        } else {
          if (e !== n) {
            t_tokens[n] = t_tokens[e];
          }
          n++;
        }
      }
      if (e !== n) {
        t_tokens.length = n;
      }
    },
  ],
];
class tq {
  constructor() {
    this.ruler = new ti();
    for (let t = 0; t < tZ.length; t++) {
      this.ruler.push(tZ[t][0], tZ[t][1]);
    }
    this.ruler2 = new ti();
    for (let t = 0; t < tU.length; t++) {
      this.ruler2.push(tU[t][0], tU[t][1]);
    }
  }
  skipToken(t) {
    let t_pos = t.pos;
    let n = this.ruler.getRules("");
    let n_length = n.length;
    let maxNesting = t.md.options.maxNesting;
    let t_cache = t.cache;
    if (t_cache[t_pos] !== undefined) {
      t.pos = t_cache[t_pos];
      return;
    }
    let o = false;
    if (t.level < maxNesting) {
      for (let i = 0; i < n_length; i++) {
        t.level++;
        o = n[i](t, true);
        t.level--;
        if (o) {
          if (t_pos >= t.pos) {
            throw Error("inline rule didn't increment state.pos");
          }
          break;
        }
      }
    } else {
      t.pos = t.posMax;
    }
    if (!o) {
      t.pos++;
    }
    t_cache[t_pos] = t.pos;
  }
  tokenize(t) {
    let e = this.ruler.getRules("");
    let e_length = e.length;
    let t_posMax = t.posMax;
    let maxNesting = t.md.options.maxNesting;
    while (t.pos < t_posMax) {
      let s = t.pos;
      let o = false;
      if (t.level < maxNesting) {
        for (let r = 0; r < e_length; r++) {
          if ((o = e[r](t, false))) {
            if (s >= t.pos) {
              throw Error("inline rule didn't increment state.pos");
            }
            break;
          }
        }
      }
      if (o) {
        if (t.pos >= t_posMax) {
          break;
        }
        continue;
      }
      t.pending += t.src[t.pos++];
    }
    if (t.pending) {
      t.pushPending();
    }
  }
  parse(t, e, n, r) {
    let i = new this.State(t, e, n, r);
    this.tokenize(i);
    let s = this.ruler2.getRules("");
    let s_length = s.length;
    for (let t = 0; t < s_length; t++) {
      s[t](i);
    }
  }
}
tq.prototype.State = tw;
function tK(t) {
  let e = Array.prototype.slice.call(arguments, 1);
  e.forEach((e) => {
    if (e) {
      Object.keys(e).forEach((n) => {
        t[n] = e[n];
      });
    }
  });
  return t;
}
function tY(t) {
  return Object.prototype.toString.call(t);
}
function tG(t) {
  return tY(t) === "[object Function]";
}
function tQ(t) {
  return t.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
let tX = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false,
};
let tJ = {
  "http:": {
    validate: function (t, e, n) {
      let r = t.slice(e);
      if (!n.re.http) {
        n.re.http = RegExp(
          "^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path,
          "i",
        );
      }
      if (n.re.http.test(r)) {
        return r.match(n.re.http)[0].length;
      }
      return 0;
    },
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function (t, e, n) {
      let r = t.slice(e);
      if (!n.re.no_http) {
        n.re.no_http = RegExp(
          "^" +
            n.re.src_auth +
            "(?:localhost|(?:(?:" +
            n.re.src_domain +
            ")\\.)+" +
            n.re.src_domain_root +
            ")" +
            n.re.src_port +
            n.re.src_host_terminator +
            n.re.src_path,
          "i",
        );
      }
      if (n.re.no_http.test(r)) {
        if ((e >= 3 && t[e - 3] === ":") || (e >= 3 && t[e - 3] === "/")) {
          return 0;
        }
        return r.match(n.re.no_http)[0].length;
      }
      return 0;
    },
  },
  "mailto:": {
    validate: function (t, e, n) {
      let r = t.slice(e);
      if (!n.re.mailto) {
        n.re.mailto = RegExp(
          "^" + n.re.src_email_name + "@" + n.re.src_host_strict,
          "i",
        );
      }
      if (n.re.mailto.test(r)) {
        return r.match(n.re.mailto)[0].length;
      }
      return 0;
    },
  },
};
let tV =
  "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split(
    "|",
  );
function t0() {
  return function (t, e) {
    e.normalize(t);
  };
}
function t1(t) {
  let e;
  let n;
  let r;
  e = t.__opts__;
  e = e || {};
  n = {};
  n.src_Any = tB.A.source;
  n.src_Cc = tF.A.source;
  n.src_Z = tW.A.source;
  n.src_P = v.A.source;
  n.src_ZPCc = [n.src_Z, n.src_P, n.src_Cc].join("|");
  n.src_ZCc = [n.src_Z, n.src_Cc].join("|");
  n.src_pseudo_letter =
    "(?:(?!" + (r = "[><｜]") + "|" + n.src_ZPCc + ")" + n.src_Any + ")";
  n.src_ip4 =
    "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
  n.src_auth = "(?:(?:(?!" + n.src_ZCc + "|[@/\\[\\]()]).)+@)?";
  n.src_port =
    "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
  n.src_host_terminator =
    "(?=$|" +
    r +
    "|" +
    n.src_ZPCc +
    ")(?!" +
    (e["---"] ? "-(?!--)|" : "-|") +
    "_|:\\d|\\.-|\\.(?!$|" +
    n.src_ZPCc +
    "))";
  n.src_path =
    "(?:[/?#](?:(?!" +
    n.src_ZCc +
    "|" +
    r +
    "|[()[\\]{}.,\"'?!\\-;]).|\\[(?:(?!" +
    n.src_ZCc +
    "|\\]).)*\\]|\\((?:(?!" +
    n.src_ZCc +
    "|[)]).)*\\)|\\{(?:(?!" +
    n.src_ZCc +
    '|[}]).)*\\}|\\"(?:(?!' +
    n.src_ZCc +
    '|["]).)+\\"|\\\'(?:(?!' +
    n.src_ZCc +
    "|[']).)+\\'|\\'(?=" +
    n.src_pseudo_letter +
    "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" +
    n.src_ZCc +
    "|[.]|$)|" +
    (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") +
    ",(?!" +
    n.src_ZCc +
    "|$)|;(?!" +
    n.src_ZCc +
    "|$)|\\!+(?!" +
    n.src_ZCc +
    "|[!]|$)|\\?(?!" +
    n.src_ZCc +
    "|[?]|$))+|\\/)?";
  n.src_email_name =
    '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
  n.src_xn = "xn--[a-z0-9\\-]{1,59}";
  n.src_domain_root = "(?:" + n.src_xn + "|" + n.src_pseudo_letter + "{1,63})";
  n.src_domain =
    "(?:" +
    n.src_xn +
    "|(?:" +
    n.src_pseudo_letter +
    ")|(?:" +
    n.src_pseudo_letter +
    "(?:-|" +
    n.src_pseudo_letter +
    "){0,61}" +
    n.src_pseudo_letter +
    "))";
  n.src_host = "(?:(?:(?:(?:" + n.src_domain + ")\\.)*" + n.src_domain + "))";
  n.tpl_host_fuzzy =
    "(?:" + n.src_ip4 + "|(?:(?:(?:" + n.src_domain + ")\\.)+(?:%TLDS%)))";
  n.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + n.src_domain + ")\\.)+(?:%TLDS%))";
  n.src_host_strict = n.src_host + n.src_host_terminator;
  n.tpl_host_fuzzy_strict = n.tpl_host_fuzzy + n.src_host_terminator;
  n.src_host_port_strict = n.src_host + n.src_port + n.src_host_terminator;
  n.tpl_host_port_fuzzy_strict =
    n.tpl_host_fuzzy + n.src_port + n.src_host_terminator;
  n.tpl_host_port_no_ip_fuzzy_strict =
    n.tpl_host_no_ip_fuzzy + n.src_port + n.src_host_terminator;
  n.tpl_host_fuzzy_test =
    "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" +
    n.src_ZPCc +
    "|>|$))";
  n.tpl_email_fuzzy =
    "(^|" +
    r +
    '|"|\\(|' +
    n.src_ZCc +
    ")(" +
    n.src_email_name +
    "@" +
    n.tpl_host_fuzzy_strict +
    ")";
  n.tpl_link_fuzzy =
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" +
    n.src_ZPCc +
    "))((?![$+<=>^`|｜])" +
    n.tpl_host_port_fuzzy_strict +
    n.src_path +
    ")";
  n.tpl_link_no_ip_fuzzy =
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" +
    n.src_ZPCc +
    "))((?![$+<=>^`|｜])" +
    n.tpl_host_port_no_ip_fuzzy_strict +
    n.src_path +
    ")";
  let i = (t.re = n);
  let s = t.__tlds__.slice();
  function o(t) {
    return t.replace("%TLDS%", i.src_tlds);
  }
  t.onCompile();
  if (!t.__tlds_replaced__) {
    s.push(
      "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
    );
  }
  s.push(i.src_xn);
  i.src_tlds = s.join("|");
  i.email_fuzzy = RegExp(o(i.tpl_email_fuzzy), "i");
  i.link_fuzzy = RegExp(o(i.tpl_link_fuzzy), "i");
  i.link_no_ip_fuzzy = RegExp(o(i.tpl_link_no_ip_fuzzy), "i");
  i.host_fuzzy_test = RegExp(o(i.tpl_host_fuzzy_test), "i");
  let l = [];
  function a(t, e) {
    throw Error('(LinkifyIt) Invalid schema "' + t + '": ' + e);
  }
  t.__compiled__ = {};
  Object.keys(t.__schemas__).forEach((e) => {
    let n = t.__schemas__[e];
    if (n === null) {
      return;
    }
    let r = {
      validate: null,
      link: null,
    };
    t.__compiled__[e] = r;
    if (tY(n) === "[object Object]") {
      if (tY(n.validate) === "[object RegExp]") {
        let i;
        i = n.validate;
        r.validate = function (t, e) {
          let n = t.slice(e);
          if (i.test(n)) {
            return n.match(i)[0].length;
          }
          return 0;
        };
      } else {
        if (tG(n.validate)) {
          r.validate = n.validate;
        } else {
          a(e, n);
        }
      }
      if (tG(n.normalize)) {
        r.normalize = n.normalize;
      } else if (n.normalize) {
        a(e, n);
      } else {
        r.normalize = t0();
      }
      return;
    }
    if (tY(n) === "[object String]") {
      l.push(e);
    } else {
      a(e, n);
    }
  });
  l.forEach((e) => {
    if (t.__compiled__[t.__schemas__[e]]) {
      t.__compiled__[e].validate = t.__compiled__[t.__schemas__[e]].validate;
      t.__compiled__[e].normalize = t.__compiled__[t.__schemas__[e]].normalize;
    }
  });
  t.__compiled__[""] = {
    validate: null,
    normalize: t0(),
  };
  let c = Object.keys(t.__compiled__)
    .filter((e) => e.length > 0 && t.__compiled__[e])
    .map(tQ)
    .join("|");
  t.re.schema_test = RegExp(
    "(^|(?!_)(?:[><｜]|" + i.src_ZPCc + "))(" + c + ")",
    "i",
  );
  t.re.schema_search = RegExp(
    "(^|(?!_)(?:[><｜]|" + i.src_ZPCc + "))(" + c + ")",
    "ig",
  );
  t.re.schema_at_start = RegExp("^" + t.re.schema_search.source, "i");
  t.re.pretest = RegExp(
    "(" + t.re.schema_test.source + ")|(" + t.re.host_fuzzy_test.source + ")|@",
    "i",
  );
  t.__index__ = -1;
  t.__text_cache__ = "";
}
function t2(t, e) {
  let t___index__ = t.__index__;
  let t___last_index__ = t.__last_index__;
  let i = t.__text_cache__.slice(t___index__, t___last_index__);
  this.schema = t.__schema__.toLowerCase();
  this.index = t___index__ + e;
  this.lastIndex = t___last_index__ + e;
  this.raw = i;
  this.text = i;
  this.url = i;
}
function t3(t, e) {
  let n = new t2(t, e);
  t.__compiled__[n.schema].normalize(n, t);
  return n;
}
class t4 {
  constructor(t, e) {
    if (!(this instanceof t4)) {
      return new t4(t, e);
    }
    if (
      !e &&
      Object.keys(t || {}).reduce(
        (acc, key) => acc || tX.hasOwnProperty(key),
        false,
      )
    ) {
      e = t;
      t = {};
    }
    this.__opts__ = tK({}, tX, e);
    this.__index__ = -1;
    this.__last_index__ = -1;
    this.__schema__ = "";
    this.__text_cache__ = "";
    this.__schemas__ = tK({}, tJ, t);
    this.__compiled__ = {};
    this.__tlds__ = tV;
    this.__tlds_replaced__ = false;
    this.re = {};
    t1(this);
  }
  add(t, e) {
    this.__schemas__[t] = e;
    t1(this);
    return this;
  }
  set(t) {
    this.__opts__ = tK(this.__opts__, t);
    return this;
  }
  test(t) {
    let e;
    let n;
    let r;
    let i;
    let s;
    let o;
    let l;
    let a;
    this.__text_cache__ = t;
    this.__index__ = -1;
    if (!t.length) {
      return false;
    }
    if (this.re.schema_test.test(t)) {
      for (
        (l = this.re.schema_search).lastIndex = 0;
        (e = l.exec(t)) !== null;
      ) {
        if ((i = this.testSchemaAt(t, e[2], l.lastIndex))) {
          this.__schema__ = e[2];
          this.__index__ = e.index + e[1].length;
          this.__last_index__ = e.index + e[0].length + i;
          break;
        }
      }
    }
    if (
      this.__opts__.fuzzyLink &&
      this.__compiled__["http:"] &&
      (a = t.search(this.re.host_fuzzy_test)) >= 0 &&
      (this.__index__ < 0 || a < this.__index__) &&
      (n = t.match(
        this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy,
      )) !== null
    ) {
      s = n.index + n[1].length;
      if (this.__index__ < 0 || s < this.__index__) {
        this.__schema__ = "";
        this.__index__ = s;
        this.__last_index__ = n.index + n[0].length;
      }
    }
    if (
      this.__opts__.fuzzyEmail &&
      this.__compiled__["mailto:"] &&
      t.indexOf("@") >= 0 &&
      (r = t.match(this.re.email_fuzzy)) !== null
    ) {
      s = r.index + r[1].length;
      o = r.index + r[0].length;
      if (
        this.__index__ < 0 ||
        s < this.__index__ ||
        (s === this.__index__ && o > this.__last_index__)
      ) {
        this.__schema__ = "mailto:";
        this.__index__ = s;
        this.__last_index__ = o;
      }
    }
    return this.__index__ >= 0;
  }
  pretest(t) {
    return this.re.pretest.test(t);
  }
  testSchemaAt(t, e, n) {
    if (this.__compiled__[e.toLowerCase()]) {
      return this.__compiled__[e.toLowerCase()].validate(t, n, this);
    }
    return 0;
  }
  match(t) {
    let e = [];
    let n = 0;
    if (this.__index__ >= 0 && this.__text_cache__ === t) {
      e.push(t3(this, n));
      n = this.__last_index__;
    }
    let r = n ? t.slice(n) : t;
    while (this.test(r)) {
      e.push(t3(this, n));
      r = r.slice(this.__last_index__);
      n += this.__last_index__;
    }
    if (e.length) {
      return e;
    }
    return null;
  }
  matchAtStart(t) {
    this.__text_cache__ = t;
    this.__index__ = -1;
    if (!t.length) {
      return null;
    }
    let e = this.re.schema_at_start.exec(t);
    if (!e) {
      return null;
    }
    let n = this.testSchemaAt(t, e[2], e[0].length);
    if (n) {
      this.__schema__ = e[2];
      this.__index__ = e.index + e[1].length;
      this.__last_index__ = e.index + e[0].length + n;
      return t3(this, 0);
    }
    return null;
  }
  tlds(t, e) {
    t = Array.isArray(t) ? t : [t];
    if (e) {
      this.__tlds__ = this.__tlds__
        .concat(t)
        .sort()
        .filter((t, e, n) => t !== n[e - 1])
        .reverse();
    } else {
      this.__tlds__ = t.slice();
      this.__tlds_replaced__ = true;
    }
    t1(this);
    return this;
  }
  normalize(t) {
    if (!t.schema) {
      t.url = "http://" + t.url;
    }
    if (!(t.schema !== "mailto:" || /^mailto:/i.test(t.url))) {
      t.url = "mailto:" + t.url;
    }
  }
  onCompile() {}
}
let t6 = {
  default: {
    options: {
      html: false,
      xhtmlOut: false,
      breaks: false,
      langPrefix: "language-",
      linkify: false,
      typographer: false,
      quotes: "“”‘’",
      highlight: null,
      maxNesting: 100,
    },
    components: {
      core: {},
      block: {},
      inline: {},
    },
  },
  zero: {
    options: {
      html: false,
      xhtmlOut: false,
      breaks: false,
      langPrefix: "language-",
      linkify: false,
      typographer: false,
      quotes: "“”‘’",
      highlight: null,
      maxNesting: 20,
    },
    components: {
      core: {
        rules: ["normalize", "block", "inline", "text_join"],
      },
      block: {
        rules: ["paragraph"],
      },
      inline: {
        rules: ["text"],
        rules2: ["balance_pairs", "fragments_join"],
      },
    },
  },
  commonmark: {
    options: {
      html: true,
      xhtmlOut: true,
      breaks: false,
      langPrefix: "language-",
      linkify: false,
      typographer: false,
      quotes: "“”‘’",
      highlight: null,
      maxNesting: 20,
    },
    components: {
      core: {
        rules: ["normalize", "block", "inline", "text_join"],
      },
      block: {
        rules: [
          "blockquote",
          "code",
          "fence",
          "heading",
          "hr",
          "html_block",
          "lheading",
          "list",
          "reference",
          "paragraph",
        ],
      },
      inline: {
        rules: [
          "autolink",
          "backticks",
          "emphasis",
          "entity",
          "escape",
          "html_inline",
          "image",
          "link",
          "newline",
          "text",
        ],
        rules2: ["balance_pairs", "emphasis", "fragments_join"],
      },
    },
  },
};
let t9 = /^(vbscript|javascript|file|data):/;
let t8 = /^data:image\/(gif|png|jpeg|webp);/;
function t7(t) {
  let e = t.trim().toLowerCase();
  return !t9.test(e) || t8.test(e);
}
let et = ["http:", "https:", "mailto:"];
function ee(t) {
  let e = parse(t, true);
  if (e.hostname && (!e.protocol || et.indexOf(e.protocol) >= 0)) {
    try {
      e.hostname = t5.Ay.toASCII(e.hostname);
    } catch (t) {}
  }
  return encode(format(e));
}
function en(t) {
  let e = parse(t, true);
  if (e.hostname && (!e.protocol || et.indexOf(e.protocol) >= 0)) {
    try {
      e.hostname = t5.Ay.toUnicode(e.hostname);
    } catch (t) {}
  }
  return decode(format(e), decode.defaultChars + "%");
}
class er {
  constructor(t, e) {
    if (!(this instanceof er)) {
      return new er(t, e);
    }
    if (!(e || isString(t))) {
      e = t || {};
      t = "default";
    }
    this.inline = new tq();
    this.block = new tM();
    this.core = new tk();
    this.renderer = new tr();
    this.linkify = new t4();
    this.validateLink = t7;
    this.normalizeLink = ee;
    this.normalizeLinkText = en;
    this.utils = i;
    this.helpers = assign({}, s);
    this.options = {};
    this.configure(t);
    if (e) {
      this.set(e);
    }
  }
  set(t) {
    assign(this.options, t);
    return this;
  }
  configure(t) {
    let e = this;
    if (isString(t)) {
      let e = t;
      if (!(t = t6[e])) {
        throw Error('Wrong `markdown-it` preset "' + e + '", check name');
      }
    }
    if (!t) {
      throw Error("Wrong `markdown-it` preset, can't be empty");
    }
    if (t.options) {
      e.set(t.options);
    }
    if (t.components) {
      Object.keys(t.components).forEach((n) => {
        if (t.components[n].rules) {
          e[n].ruler.enableOnly(t.components[n].rules);
        }
        if (t.components[n].rules2) {
          e[n].ruler2.enableOnly(t.components[n].rules2);
        }
      });
    }
    return this;
  }
  enable(t, e) {
    let n = [];
    if (!Array.isArray(t)) {
      t = [t];
    }
    ["core", "block", "inline"].forEach(function (e) {
      n = n.concat(this[e].ruler.enable(t, true));
    }, this);
    n = n.concat(this.inline.ruler2.enable(t, true));
    let r = t.filter((t) => n.indexOf(t) < 0);
    if (r.length && !e) {
      throw Error("MarkdownIt. Failed to enable unknown rule(s): " + r);
    }
    return this;
  }
  disable(t, e) {
    let n = [];
    if (!Array.isArray(t)) {
      t = [t];
    }
    ["core", "block", "inline"].forEach(function (e) {
      n = n.concat(this[e].ruler.disable(t, true));
    }, this);
    n = n.concat(this.inline.ruler2.disable(t, true));
    let r = t.filter((t) => n.indexOf(t) < 0);
    if (r.length && !e) {
      throw Error("MarkdownIt. Failed to disable unknown rule(s): " + r);
    }
    return this;
  }
  use(t) {
    let e = [this].concat(Array.prototype.slice.call(arguments, 1));
    t.apply(t, e);
    return this;
  }
  parse(t, e) {
    if (typeof t !== "string") {
      throw Error("Input data should be a String");
    }
    let n = new this.core.State(t, this, e);
    this.core.process(n);
    return n.tokens;
  }
  render(t, e) {
    e = e || {};
    return this.renderer.render(this.parse(t, e), this.options, e);
  }
  parseInline(t, e) {
    let n = new this.core.State(t, this, e);
    n.inlineMode = true;
    this.core.process(n);
    return n.tokens;
  }
  renderInline(t, e) {
    e = e || {};
    return this.renderer.render(this.parseInline(t, e), this.options, e);
  }
}
var ei = er;
export { ei as A };
