import h from "QWK";
let n;
let i;
let o;
let a;
let c;
let s;
let u;
let f;
export function eW(e) {
  return e.type === c.literal;
}
export function Im(e) {
  return e.type === c.argument;
}
export function oF(e) {
  return e.type === c.number;
}
export function tv(e) {
  return e.type === c.date;
}
export function Qh(e) {
  return e.type === c.time;
}
export function Jp(e) {
  return e.type === c.select;
}
export function N6(e) {
  return e.type === c.plural;
}
export function jA(e) {
  return e.type === c.pound;
}
export function xm(e) {
  return e.type === c.tag;
}
export function N1(e) {
  return !!(e && typeof e === "object" && e.type === s.number);
}
export function Tu(e) {
  return !!(e && typeof e === "object" && e.type === s.dateTime);
}
n = a || (a = {});
n[(n.EXPECT_ARGUMENT_CLOSING_BRACE = 1)] = "EXPECT_ARGUMENT_CLOSING_BRACE";
n[(n.EMPTY_ARGUMENT = 2)] = "EMPTY_ARGUMENT";
n[(n.MALFORMED_ARGUMENT = 3)] = "MALFORMED_ARGUMENT";
n[(n.EXPECT_ARGUMENT_TYPE = 4)] = "EXPECT_ARGUMENT_TYPE";
n[(n.INVALID_ARGUMENT_TYPE = 5)] = "INVALID_ARGUMENT_TYPE";
n[(n.EXPECT_ARGUMENT_STYLE = 6)] = "EXPECT_ARGUMENT_STYLE";
n[(n.INVALID_NUMBER_SKELETON = 7)] = "INVALID_NUMBER_SKELETON";
n[(n.INVALID_DATE_TIME_SKELETON = 8)] = "INVALID_DATE_TIME_SKELETON";
n[(n.EXPECT_NUMBER_SKELETON = 9)] = "EXPECT_NUMBER_SKELETON";
n[(n.EXPECT_DATE_TIME_SKELETON = 10)] = "EXPECT_DATE_TIME_SKELETON";
n[(n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11)] =
  "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
n[(n.EXPECT_SELECT_ARGUMENT_OPTIONS = 12)] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
n[(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13)] =
  "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
n[(n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14)] =
  "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
n[(n.EXPECT_SELECT_ARGUMENT_SELECTOR = 15)] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
n[(n.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16)] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
n[(n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] =
  "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
n[(n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] =
  "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
n[(n.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] =
  "INVALID_PLURAL_ARGUMENT_SELECTOR";
n[(n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] =
  "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
n[(n.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] =
  "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
n[(n.MISSING_OTHER_CLAUSE = 22)] = "MISSING_OTHER_CLAUSE";
n[(n.INVALID_TAG = 23)] = "INVALID_TAG";
n[(n.INVALID_TAG_NAME = 25)] = "INVALID_TAG_NAME";
n[(n.UNMATCHED_CLOSING_TAG = 26)] = "UNMATCHED_CLOSING_TAG";
n[(n.UNCLOSED_TAG = 27)] = "UNCLOSED_TAG";
i = c || (c = {});
i[(i.literal = 0)] = "literal";
i[(i.argument = 1)] = "argument";
i[(i.number = 2)] = "number";
i[(i.date = 3)] = "date";
i[(i.time = 4)] = "time";
i[(i.select = 5)] = "select";
i[(i.plural = 6)] = "plural";
i[(i.pound = 7)] = "pound";
i[(i.tag = 8)] = "tag";
o = s || (s = {});
o[(o.number = 0)] = "number";
o[(o.dateTime = 1)] = "dateTime";
const A = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
const _ =
  /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
const x = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
const w = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
const I = /^(@+)?(\+|#+)?[rs]?$/g;
const k = /(\*)(0+)|(#+)(0+)|(0+)/g;
const R = /^(0+)$/;
function B(e) {
  const t = {};
  if (e[e.length - 1] === "r") {
    t.roundingPriority = "morePrecision";
  } else if (e[e.length - 1] === "s") {
    t.roundingPriority = "lessPrecision";
  }
  e.replace(I, (e, r, n) => {
    if (typeof n !== "string") {
      t.minimumSignificantDigits = r.length;
      t.maximumSignificantDigits = r.length;
    } else if (n === "+") {
      t.minimumSignificantDigits = r.length;
    } else if (r[0] === "#") {
      t.maximumSignificantDigits = r.length;
    } else {
      t.minimumSignificantDigits = r.length;
      t.maximumSignificantDigits =
        r.length + (typeof n === "string" ? n.length : 0);
    }
    return "";
  });
  return t;
}
function C(e) {
  switch (e) {
    case "sign-auto":
      return {
        signDisplay: "auto",
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting",
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always",
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting",
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero",
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting",
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never",
      };
  }
}
function M(e) {
  const t = C(e);
  return t || {};
}
const P = {
  "001": ["H", "h"],
  AC: ["H", "h", "hb", "hB"],
  AD: ["H", "hB"],
  AE: ["h", "hB", "hb", "H"],
  AF: ["H", "hb", "hB", "h"],
  AG: ["h", "hb", "H", "hB"],
  AI: ["H", "h", "hb", "hB"],
  AL: ["h", "H", "hB"],
  AM: ["H", "hB"],
  AO: ["H", "hB"],
  AR: ["H", "h", "hB", "hb"],
  AS: ["h", "H"],
  AT: ["H", "hB"],
  AU: ["h", "hb", "H", "hB"],
  AW: ["H", "hB"],
  AX: ["H"],
  AZ: ["H", "hB", "h"],
  BA: ["H", "hB", "h"],
  BB: ["h", "hb", "H", "hB"],
  BD: ["h", "hB", "H"],
  BE: ["H", "hB"],
  BF: ["H", "hB"],
  BG: ["H", "hB", "h"],
  BH: ["h", "hB", "hb", "H"],
  BJ: ["H", "hB"],
  BL: ["H", "hB"],
  BM: ["h", "hb", "H", "hB"],
  BN: ["hb", "hB", "h", "H"],
  BO: ["H", "hB", "h", "hb"],
  BQ: ["H"],
  BR: ["H", "hB"],
  BS: ["h", "hb", "H", "hB"],
  BT: ["h", "H"],
  BW: ["H", "h", "hb", "hB"],
  BZ: ["H", "h", "hb", "hB"],
  CA: ["h", "hb", "H", "hB"],
  CC: ["H", "h", "hb", "hB"],
  CD: ["hB", "H"],
  CF: ["H", "h", "hB"],
  CG: ["H", "hB"],
  CH: ["H", "hB", "h"],
  CI: ["H", "hB"],
  CK: ["H", "h", "hb", "hB"],
  CL: ["H", "h", "hB", "hb"],
  CM: ["H", "h", "hB"],
  CN: ["H", "hB", "hb", "h"],
  CO: ["h", "H", "hB", "hb"],
  CP: ["H"],
  CR: ["H", "h", "hB", "hb"],
  CU: ["H", "h", "hB", "hb"],
  CV: ["H", "hB"],
  CX: ["H", "h", "hb", "hB"],
  CY: ["h", "H", "hb", "hB"],
  CZ: ["H"],
  DE: ["H", "hB"],
  DG: ["H", "h", "hb", "hB"],
  DJ: ["h", "H"],
  DK: ["H"],
  DM: ["h", "hb", "H", "hB"],
  DO: ["h", "H", "hB", "hb"],
  DZ: ["h", "hB", "hb", "H"],
  EA: ["H", "h", "hB", "hb"],
  EC: ["H", "hB", "h", "hb"],
  EE: ["H", "hB"],
  EG: ["h", "hB", "hb", "H"],
  EH: ["h", "hB", "hb", "H"],
  ER: ["h", "H"],
  ES: ["H", "hB", "h", "hb"],
  ET: ["hB", "hb", "h", "H"],
  FI: ["H"],
  FJ: ["h", "hb", "H", "hB"],
  FK: ["H", "h", "hb", "hB"],
  FM: ["h", "hb", "H", "hB"],
  FR: ["H", "hB"],
  GA: ["H", "hB"],
  GB: ["H", "h", "hb", "hB"],
  GD: ["h", "hb", "H", "hB"],
  GE: ["H", "hB", "h"],
  GF: ["H", "hB"],
  GG: ["H", "h", "hb", "hB"],
  GH: ["h", "H"],
  GI: ["H", "h", "hb", "hB"],
  GM: ["h", "hb", "H", "hB"],
  GN: ["H", "hB"],
  GP: ["H", "hB"],
  GQ: ["H", "hB", "h", "hb"],
  GR: ["h", "H", "hb", "hB"],
  GT: ["H", "h", "hB", "hb"],
  GU: ["h", "hb", "H", "hB"],
  GW: ["H", "hB"],
  GY: ["h", "hb", "H", "hB"],
  HK: ["h", "hB", "hb", "H"],
  HN: ["H", "h", "hB", "hb"],
  HR: ["H", "hB"],
  IC: ["H", "h", "hB", "hb"],
  ID: ["H"],
  IE: ["H", "h", "hb", "hB"],
  IL: ["H", "hB"],
  IM: ["H", "h", "hb", "hB"],
  IN: ["h", "H"],
  IO: ["H", "h", "hb", "hB"],
  IQ: ["h", "hB", "hb", "H"],
  IR: ["hB", "H"],
  IS: ["H"],
  IT: ["H", "hB"],
  JE: ["H", "h", "hb", "hB"],
  JM: ["h", "hb", "H", "hB"],
  JO: ["h", "hB", "hb", "H"],
  JP: ["H", "h", "K"],
  KE: ["hB", "hb", "H", "h"],
  KG: ["H", "h", "hB", "hb"],
  KH: ["hB", "h", "H", "hb"],
  KI: ["h", "hb", "H", "hB"],
  KM: ["H", "h", "hB", "hb"],
  KN: ["h", "hb", "H", "hB"],
  KP: ["h", "H", "hB", "hb"],
  KR: ["h", "H", "hB", "hb"],
  KW: ["h", "hB", "hb", "H"],
  KY: ["h", "hb", "H", "hB"],
  KZ: ["H", "hB"],
  LA: ["H", "hb", "hB", "h"],
  LB: ["h", "hB", "hb", "H"],
  LC: ["h", "hb", "H", "hB"],
  LI: ["H", "hB", "h"],
  LK: ["H", "h", "hB", "hb"],
  LR: ["h", "hb", "H", "hB"],
  LS: ["h", "H"],
  LT: ["H", "h", "hb", "hB"],
  LU: ["H", "h", "hB"],
  LV: ["H", "hB", "hb", "h"],
  LY: ["h", "hB", "hb", "H"],
  MA: ["H", "h", "hB", "hb"],
  MC: ["H", "hB"],
  MD: ["H", "hB"],
  ME: ["H", "hB", "h"],
  MF: ["H", "hB"],
  MH: ["h", "hb", "H", "hB"],
  MK: ["H", "h", "hb", "hB"],
  ML: ["H"],
  MM: ["hB", "hb", "H", "h"],
  MN: ["H", "h", "hb", "hB"],
  MO: ["h", "hB", "hb", "H"],
  MP: ["h", "hb", "H", "hB"],
  MQ: ["H", "hB"],
  MR: ["h", "hB", "hb", "H"],
  MS: ["H", "h", "hb", "hB"],
  MW: ["h", "hb", "H", "hB"],
  MX: ["H", "h", "hB", "hb"],
  MY: ["hb", "hB", "h", "H"],
  MZ: ["H", "hB"],
  NA: ["h", "H", "hB", "hb"],
  NC: ["H", "hB"],
  NE: ["H"],
  NF: ["H", "h", "hb", "hB"],
  NG: ["H", "h", "hb", "hB"],
  NI: ["H", "h", "hB", "hb"],
  NL: ["H", "hB"],
  NP: ["H", "h", "hB"],
  NR: ["H", "h", "hb", "hB"],
  NU: ["H", "h", "hb", "hB"],
  NZ: ["h", "hb", "H", "hB"],
  OM: ["h", "hB", "hb", "H"],
  PA: ["h", "H", "hB", "hb"],
  PE: ["H", "hB", "h", "hb"],
  PF: ["H", "h", "hB"],
  PG: ["h", "H"],
  PH: ["h", "hB", "hb", "H"],
  PK: ["h", "hB", "H"],
  PM: ["H", "hB"],
  PN: ["H", "h", "hb", "hB"],
  PR: ["h", "H", "hB", "hb"],
  PS: ["h", "hB", "hb", "H"],
  PT: ["H", "hB"],
  PW: ["h", "H"],
  PY: ["H", "h", "hB", "hb"],
  QA: ["h", "hB", "hb", "H"],
  RE: ["H", "hB"],
  RO: ["H", "hB"],
  RS: ["H", "hB", "h"],
  RU: ["H"],
  SA: ["h", "hB", "hb", "H"],
  SB: ["h", "hb", "H", "hB"],
  SC: ["H", "h", "hB"],
  SD: ["h", "hB", "hb", "H"],
  SE: ["H"],
  SG: ["h", "hb", "H", "hB"],
  SH: ["H", "h", "hb", "hB"],
  SI: ["H", "hB"],
  SJ: ["H"],
  SK: ["H"],
  SL: ["h", "hb", "H", "hB"],
  SM: ["H", "h", "hB"],
  SN: ["H", "h", "hB"],
  SO: ["h", "H"],
  SR: ["H", "hB"],
  SS: ["h", "hb", "H", "hB"],
  ST: ["H", "hB"],
  SV: ["H", "h", "hB", "hb"],
  SX: ["H", "h", "hb", "hB"],
  SY: ["h", "hB", "hb", "H"],
  SZ: ["h", "hb", "H", "hB"],
  TA: ["H", "h", "hb", "hB"],
  TC: ["h", "hb", "H", "hB"],
  TD: ["h", "H", "hB"],
  TF: ["H", "h", "hB"],
  TG: ["H", "hB"],
  TL: ["H", "hB", "hb", "h"],
  TN: ["h", "hB", "hb", "H"],
  TO: ["h", "H"],
  TR: ["H", "hB"],
  TT: ["h", "hb", "H", "hB"],
  TW: ["hB", "hb", "h", "H"],
  TZ: ["hB", "hb", "H", "h"],
  UA: ["H", "hB", "h"],
  UG: ["hB", "hb", "H", "h"],
  UM: ["h", "hb", "H", "hB"],
  US: ["h", "hb", "H", "hB"],
  UY: ["H", "h", "hB", "hb"],
  UZ: ["H", "hB", "h"],
  VA: ["H", "h", "hB"],
  VC: ["h", "hb", "H", "hB"],
  VE: ["h", "H", "hB", "hb"],
  VG: ["h", "hb", "H", "hB"],
  VI: ["h", "hb", "H", "hB"],
  VU: ["h", "H"],
  WF: ["H", "hB"],
  WS: ["h", "H"],
  XK: ["H", "hB", "h"],
  YE: ["h", "hB", "hb", "H"],
  YT: ["H", "hB"],
  ZA: ["H", "h", "hb", "hB"],
  ZM: ["h", "hb", "H", "hB"],
  "af-ZA": ["H", "h", "hB", "hb"],
  "ar-001": ["h", "hB", "hb", "H"],
  "ca-ES": ["H", "h", "hB"],
  "en-001": ["h", "hb", "H", "hB"],
  "es-BO": ["H", "h", "hB", "hb"],
  "es-BR": ["H", "h", "hB", "hb"],
  "es-EC": ["H", "h", "hB", "hb"],
  "es-ES": ["H", "h", "hB", "hb"],
  "es-GQ": ["H", "h", "hB", "hb"],
  "es-PE": ["H", "h", "hB", "hb"],
  "fr-CA": ["H", "h", "hB"],
  "gl-ES": ["H", "h", "hB"],
  "gu-IN": ["hB", "hb", "h", "H"],
  "hi-IN": ["hB", "h", "H"],
  "it-CH": ["H", "h", "hB"],
  "it-IT": ["H", "h", "hB"],
  "kn-IN": ["hB", "h", "H"],
  "ml-IN": ["hB", "h", "H"],
  "mr-IN": ["hB", "hb", "h", "H"],
  "pa-IN": ["hB", "hb", "h", "H"],
  "ta-IN": ["hB", "h", "hb", "H"],
  "te-IN": ["hB", "h", "H"],
  "zu-ZA": ["H", "hB", "hb", "h"],
};
const L = new RegExp("^".concat(A.source, "*"));
const O = new RegExp("".concat(A.source, "*$"));
function H(start, end) {
  return {
    start,
    end,
  };
}
const N = !!String.prototype.startsWith && "_a".startsWith("a", 1);
const U = !!String.fromCodePoint;
const D = !!Object.fromEntries;
const G = !!String.prototype.codePointAt;
const j = !!String.prototype.trimStart;
const F = !!String.prototype.trimEnd;
const K = Number.isSafeInteger
  ? Number.isSafeInteger
  : (e) =>
      typeof e === "number" &&
      isFinite(e) &&
      Math.floor(e) === e &&
      Math.abs(e) <= 9007199254740991;
let Y = true;
try {
  Y =
    ((u = $("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) ==
    null
      ? undefined
      : u[0]) === "a";
} catch (e) {
  Y = false;
}
const V = N
  ? (e, t, r) => e.startsWith(t, r)
  : (e, t, r) => e.slice(r, r + t.length) === t;
const X = U
  ? String.fromCodePoint
  : function () {
      let e;
      const t = [];
      for (let r = 0; r < arguments.length; r++) {
        t[r] = arguments[r];
      }
      let n = "";
      for (let i = t.length, o = 0; i > o;) {
        if ((e = t[o++]) > 1114111) {
          throw RangeError(e + " is not a valid code point");
        }
        n +=
          e < 65536
            ? String.fromCharCode(e)
            : String.fromCharCode(
                ((e -= 65536) >> 10) + 55296,
                (e % 1024) + 56320,
              );
      }
      return n;
    };
const W = D
  ? Object.fromEntries
  : (e) => {
      const t = {};
      for (let r = 0; r < e.length; r++) {
        const n = e[r];
        const i = n[0];
        const o = n[1];
        t[i] = o;
      }
      return t;
    };
const z = G
  ? (e, t) => e.codePointAt(t)
  : (e, t) => {
      let r;
      const e_length = e.length;
      if (!(t < 0) && !(t >= e_length)) {
        const i = e.charCodeAt(t);
        if (
          i < 55296 ||
          i > 56319 ||
          t + 1 === e_length ||
          (r = e.charCodeAt(t + 1)) < 56320 ||
          r > 57343
        ) {
          return i;
        }
        return ((i - 55296) << 10) + (r - 56320) + 65536;
      }
    };
const q = j ? (e) => e.trimStart() : (e) => e.replace(L, "");
const Z = F ? (e) => e.trimEnd() : (e) => e.replace(O, "");
function $(e, t) {
  return new RegExp(e, t);
}
if (Y) {
  const J = $("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  f = function (e, t) {
    let r;
    J.lastIndex = t;
    if ((r = J.exec(e)[1]) != null) {
      return r;
    }
    return "";
  };
} else {
  f = function (e, t) {
    const r = [];
    while (true) {
      let n;
      const i = z(e, t);
      if (
        i === undefined ||
        et(i) ||
        ((n = i) >= 33 && n <= 35) ||
        n === 36 ||
        (n >= 37 && n <= 39) ||
        n === 40 ||
        n === 41 ||
        n === 42 ||
        n === 43 ||
        n === 44 ||
        n === 45 ||
        (n >= 46 && n <= 47) ||
        (n >= 58 && n <= 59) ||
        (n >= 60 && n <= 62) ||
        (n >= 63 && n <= 64) ||
        n === 91 ||
        n === 92 ||
        n === 93 ||
        n === 94 ||
        n === 96 ||
        n === 123 ||
        n === 124 ||
        n === 125 ||
        n === 126 ||
        n === 161 ||
        (n >= 162 && n <= 165) ||
        n === 166 ||
        n === 167 ||
        n === 169 ||
        n === 171 ||
        n === 172 ||
        n === 174 ||
        n === 176 ||
        n === 177 ||
        n === 182 ||
        n === 187 ||
        n === 191 ||
        n === 215 ||
        n === 247 ||
        (n >= 8208 && n <= 8213) ||
        (n >= 8214 && n <= 8215) ||
        n === 8216 ||
        n === 8217 ||
        n === 8218 ||
        (n >= 8219 && n <= 8220) ||
        n === 8221 ||
        n === 8222 ||
        n === 8223 ||
        (n >= 8224 && n <= 8231) ||
        (n >= 8240 && n <= 8248) ||
        n === 8249 ||
        n === 8250 ||
        (n >= 8251 && n <= 8254) ||
        (n >= 8257 && n <= 8259) ||
        n === 8260 ||
        n === 8261 ||
        n === 8262 ||
        (n >= 8263 && n <= 8273) ||
        n === 8274 ||
        n === 8275 ||
        (n >= 8277 && n <= 8286) ||
        (n >= 8592 && n <= 8596) ||
        (n >= 8597 && n <= 8601) ||
        (n >= 8602 && n <= 8603) ||
        (n >= 8604 && n <= 8607) ||
        n === 8608 ||
        (n >= 8609 && n <= 8610) ||
        n === 8611 ||
        (n >= 8612 && n <= 8613) ||
        n === 8614 ||
        (n >= 8615 && n <= 8621) ||
        n === 8622 ||
        (n >= 8623 && n <= 8653) ||
        (n >= 8654 && n <= 8655) ||
        (n >= 8656 && n <= 8657) ||
        n === 8658 ||
        n === 8659 ||
        n === 8660 ||
        (n >= 8661 && n <= 8691) ||
        (n >= 8692 && n <= 8959) ||
        (n >= 8960 && n <= 8967) ||
        n === 8968 ||
        n === 8969 ||
        n === 8970 ||
        n === 8971 ||
        (n >= 8972 && n <= 8991) ||
        (n >= 8992 && n <= 8993) ||
        (n >= 8994 && n <= 9000) ||
        n === 9001 ||
        n === 9002 ||
        (n >= 9003 && n <= 9083) ||
        n === 9084 ||
        (n >= 9085 && n <= 9114) ||
        (n >= 9115 && n <= 9139) ||
        (n >= 9140 && n <= 9179) ||
        (n >= 9180 && n <= 9185) ||
        (n >= 9186 && n <= 9254) ||
        (n >= 9255 && n <= 9279) ||
        (n >= 9280 && n <= 9290) ||
        (n >= 9291 && n <= 9311) ||
        (n >= 9472 && n <= 9654) ||
        n === 9655 ||
        (n >= 9656 && n <= 9664) ||
        n === 9665 ||
        (n >= 9666 && n <= 9719) ||
        (n >= 9720 && n <= 9727) ||
        (n >= 9728 && n <= 9838) ||
        n === 9839 ||
        (n >= 9840 && n <= 10087) ||
        n === 10088 ||
        n === 10089 ||
        n === 10090 ||
        n === 10091 ||
        n === 10092 ||
        n === 10093 ||
        n === 10094 ||
        n === 10095 ||
        n === 10096 ||
        n === 10097 ||
        n === 10098 ||
        n === 10099 ||
        n === 10100 ||
        n === 10101 ||
        (n >= 10132 && n <= 10175) ||
        (n >= 10176 && n <= 10180) ||
        n === 10181 ||
        n === 10182 ||
        (n >= 10183 && n <= 10213) ||
        n === 10214 ||
        n === 10215 ||
        n === 10216 ||
        n === 10217 ||
        n === 10218 ||
        n === 10219 ||
        n === 10220 ||
        n === 10221 ||
        n === 10222 ||
        n === 10223 ||
        (n >= 10224 && n <= 10239) ||
        (n >= 10240 && n <= 10495) ||
        (n >= 10496 && n <= 10626) ||
        n === 10627 ||
        n === 10628 ||
        n === 10629 ||
        n === 10630 ||
        n === 10631 ||
        n === 10632 ||
        n === 10633 ||
        n === 10634 ||
        n === 10635 ||
        n === 10636 ||
        n === 10637 ||
        n === 10638 ||
        n === 10639 ||
        n === 10640 ||
        n === 10641 ||
        n === 10642 ||
        n === 10643 ||
        n === 10644 ||
        n === 10645 ||
        n === 10646 ||
        n === 10647 ||
        n === 10648 ||
        (n >= 10649 && n <= 10711) ||
        n === 10712 ||
        n === 10713 ||
        n === 10714 ||
        n === 10715 ||
        (n >= 10716 && n <= 10747) ||
        n === 10748 ||
        n === 10749 ||
        (n >= 10750 && n <= 11007) ||
        (n >= 11008 && n <= 11055) ||
        (n >= 11056 && n <= 11076) ||
        (n >= 11077 && n <= 11078) ||
        (n >= 11079 && n <= 11084) ||
        (n >= 11085 && n <= 11123) ||
        (n >= 11124 && n <= 11125) ||
        (n >= 11126 && n <= 11157) ||
        n === 11158 ||
        (n >= 11159 && n <= 11263) ||
        (n >= 11776 && n <= 11777) ||
        n === 11778 ||
        n === 11779 ||
        n === 11780 ||
        n === 11781 ||
        (n >= 11782 && n <= 11784) ||
        n === 11785 ||
        n === 11786 ||
        n === 11787 ||
        n === 11788 ||
        n === 11789 ||
        (n >= 11790 && n <= 11798) ||
        n === 11799 ||
        (n >= 11800 && n <= 11801) ||
        n === 11802 ||
        n === 11803 ||
        n === 11804 ||
        n === 11805 ||
        (n >= 11806 && n <= 11807) ||
        n === 11808 ||
        n === 11809 ||
        n === 11810 ||
        n === 11811 ||
        n === 11812 ||
        n === 11813 ||
        n === 11814 ||
        n === 11815 ||
        n === 11816 ||
        n === 11817 ||
        (n >= 11818 && n <= 11822) ||
        n === 11823 ||
        (n >= 11824 && n <= 11833) ||
        (n >= 11834 && n <= 11835) ||
        (n >= 11836 && n <= 11839) ||
        n === 11840 ||
        n === 11841 ||
        n === 11842 ||
        (n >= 11843 && n <= 11855) ||
        (n >= 11856 && n <= 11857) ||
        n === 11858 ||
        (n >= 11859 && n <= 11903) ||
        (n >= 12289 && n <= 12291) ||
        n === 12296 ||
        n === 12297 ||
        n === 12298 ||
        n === 12299 ||
        n === 12300 ||
        n === 12301 ||
        n === 12302 ||
        n === 12303 ||
        n === 12304 ||
        n === 12305 ||
        (n >= 12306 && n <= 12307) ||
        n === 12308 ||
        n === 12309 ||
        n === 12310 ||
        n === 12311 ||
        n === 12312 ||
        n === 12313 ||
        n === 12314 ||
        n === 12315 ||
        n === 12316 ||
        n === 12317 ||
        (n >= 12318 && n <= 12319) ||
        n === 12320 ||
        n === 12336 ||
        n === 64830 ||
        n === 64831 ||
        (n >= 65093 && n <= 65094)
      ) {
        break;
      }
      r.push(i);
      t += i >= 65536 ? 2 : 1;
    }
    return X.apply(undefined, r);
  };
}
class Q {
  constructor(e, t = {}) {
    this.message = e;
    this.position = {
      offset: 0,
      line: 1,
      column: 1,
    };
    this.ignoreTag = !!t.ignoreTag;
    this.locale = t.locale;
    this.requiresOtherClause = !!t.requiresOtherClause;
    this.shouldParseSkeletons = !!t.shouldParseSkeletons;
  }
  parse() {
    if (this.offset() !== 0) {
      throw Error("parser can only be used once");
    }
    return this.parseMessage(0, "", false);
  }
  parseMessage(e, t, r) {
    const n = [];
    while (!this.isEOF()) {
      const i = this.char();
      if (i === 123) {
        var o = this.parseArgument(e, r);
        if (o.err) {
          return o;
        }
        n.push(o.val);
      } else if (i === 125 && e > 0) {
        break;
      } else if (i === 35 && (t === "plural" || t === "selectordinal")) {
        const s = this.clonePosition();
        this.bump();
        n.push({
          type: c.pound,
          location: H(s, this.clonePosition()),
        });
      } else if (i !== 60 || this.ignoreTag || this.peek() !== 47) {
        if (i === 60 && !this.ignoreTag && ee(this.peek() || 0)) {
          var o = this.parseTag(e, t);
          if (o.err) {
            return o;
          }
          n.push(o.val);
        } else {
          var o = this.parseLiteral(e, t);
          if (o.err) {
            return o;
          }
          n.push(o.val);
        }
      } else if (!r) {
        return this.error(
          a.UNMATCHED_CLOSING_TAG,
          H(this.clonePosition(), this.clonePosition()),
        );
      } else {
        break;
      }
    }
    return {
      val: n,
      err: null,
    };
  }
  parseTag(e, t) {
    const r = this.clonePosition();
    this.bump();
    const n = this.parseTagName();
    this.bumpSpace();
    if (this.bumpIf("/>")) {
      return {
        val: {
          type: c.literal,
          value: "<".concat(n, "/>"),
          location: H(r, this.clonePosition()),
        },
        err: null,
      };
    }
    if (!this.bumpIf(">")) {
      return this.error(a.INVALID_TAG, H(r, this.clonePosition()));
    }
    const i = this.parseMessage(e + 1, t, true);
    if (i.err) {
      return i;
    }
    const i_val = i.val;
    const s = this.clonePosition();
    if (!this.bumpIf("</")) {
      return this.error(a.UNCLOSED_TAG, H(r, this.clonePosition()));
    }
    if (this.isEOF() || !ee(this.char())) {
      return this.error(a.INVALID_TAG, H(s, this.clonePosition()));
    }
    const u = this.clonePosition();
    if (n !== this.parseTagName()) {
      return this.error(a.UNMATCHED_CLOSING_TAG, H(u, this.clonePosition()));
    }
    this.bumpSpace();
    if (this.bumpIf(">")) {
      return {
        val: {
          type: c.tag,
          value: n,
          children: i_val,
          location: H(r, this.clonePosition()),
        },
        err: null,
      };
    }
    return this.error(a.INVALID_TAG, H(s, this.clonePosition()));
  }
  parseTagName() {
    let e;
    const t = this.offset();
    for (
      this.bump();
      !this.isEOF() &&
      ((e = this.char()) === 45 ||
        e === 46 ||
        (e >= 48 && e <= 57) ||
        e === 95 ||
        (e >= 97 && e <= 122) ||
        (e >= 65 && e <= 90) ||
        e == 183 ||
        (e >= 192 && e <= 214) ||
        (e >= 216 && e <= 246) ||
        (e >= 248 && e <= 893) ||
        (e >= 895 && e <= 8191) ||
        (e >= 8204 && e <= 8205) ||
        (e >= 8255 && e <= 8256) ||
        (e >= 8304 && e <= 8591) ||
        (e >= 11264 && e <= 12271) ||
        (e >= 12289 && e <= 55295) ||
        (e >= 63744 && e <= 64975) ||
        (e >= 65008 && e <= 65533) ||
        (e >= 65536 && e <= 983039));
    ) {
      this.bump();
    }
    return this.message.slice(t, this.offset());
  }
  parseLiteral(e, t) {
    const r = this.clonePosition();
    let n = "";
    while (true) {
      const i = this.tryParseQuote(t);
      if (i) {
        n += i;
        continue;
      }
      const o = this.tryParseUnquoted(e, t);
      if (o) {
        n += o;
        continue;
      }
      const a = this.tryParseLeftAngleBracket();
      if (a) {
        n += a;
        continue;
      }
      break;
    }
    const s = H(r, this.clonePosition());
    return {
      val: {
        type: c.literal,
        value: n,
        location: s,
      },
      err: null,
    };
  }
  tryParseLeftAngleBracket() {
    let e;
    if (
      this.isEOF() ||
      this.char() !== 60 ||
      (!this.ignoreTag && (ee((e = this.peek() || 0)) || e === 47))
    ) {
      return null;
    }
    this.bump();
    return "<";
  }
  tryParseQuote(e) {
    if (this.isEOF() || this.char() !== 39) {
      return null;
    }
    switch (this.peek()) {
      case 39:
        this.bump();
        this.bump();
        return "'";
      case 123:
      case 60:
      case 62:
      case 125:
        break;
      case 35:
        if (e === "plural" || e === "selectordinal") {
          break;
        }
        return null;
      default:
        return null;
    }
    this.bump();
    const t = [this.char()];
    for (this.bump(); !this.isEOF();) {
      const r = this.char();
      if (r === 39) {
        if (this.peek() === 39) {
          t.push(39);
          this.bump();
        } else {
          this.bump();
          break;
        }
      } else {
        t.push(r);
      }
      this.bump();
    }
    return X.apply(undefined, t);
  }
  tryParseUnquoted(e, t) {
    if (this.isEOF()) {
      return null;
    }
    const r = this.char();
    if (
      r === 60 ||
      r === 123 ||
      (r === 35 && (t === "plural" || t === "selectordinal")) ||
      (r === 125 && e > 0)
    ) {
      return null;
    }
    this.bump();
    return X(r);
  }
  parseArgument(e, t) {
    const r = this.clonePosition();
    this.bump();
    this.bumpSpace();
    if (this.isEOF()) {
      return this.error(
        a.EXPECT_ARGUMENT_CLOSING_BRACE,
        H(r, this.clonePosition()),
      );
    }
    if (this.char() === 125) {
      this.bump();
      return this.error(a.EMPTY_ARGUMENT, H(r, this.clonePosition()));
    }
    const value = this.parseIdentifierIfPossible().value;
    if (!value) {
      return this.error(a.MALFORMED_ARGUMENT, H(r, this.clonePosition()));
    }
    this.bumpSpace();
    if (this.isEOF()) {
      return this.error(
        a.EXPECT_ARGUMENT_CLOSING_BRACE,
        H(r, this.clonePosition()),
      );
    }
    switch (this.char()) {
      case 125:
        this.bump();
        return {
          val: {
            type: c.argument,
            value,
            location: H(r, this.clonePosition()),
          },
          err: null,
        };
      case 44:
        this.bump();
        this.bumpSpace();
        if (this.isEOF()) {
          return this.error(
            a.EXPECT_ARGUMENT_CLOSING_BRACE,
            H(r, this.clonePosition()),
          );
        }
        return this.parseArgumentOptions(e, t, value, r);
      default:
        return this.error(a.MALFORMED_ARGUMENT, H(r, this.clonePosition()));
    }
  }
  parseIdentifierIfPossible() {
    const e = this.clonePosition();
    const t = this.offset();
    const r = f(this.message, t);
    const n = t + r.length;
    this.bumpTo(n);
    return {
      value: r,
      location: H(e, this.clonePosition()),
    };
  }
  parseArgumentOptions(e, t, value_1, n) {
    let i;
    const o = this.clonePosition();
    const value = this.parseIdentifierIfPossible().value;
    const f = this.clonePosition();
    switch (value) {
      case "":
        return this.error(a.EXPECT_ARGUMENT_TYPE, H(o, f));
      case "number":
      case "date":
      case "time":
        this.bumpSpace();
        let l = null;
        if (this.bumpIf(",")) {
          this.bumpSpace();
          const p = this.clonePosition();
          var d = this.parseSimpleArgStyleIfPossible();
          if (d.err) {
            return d;
          }
          var style = Z(d.val);
          if (style.length === 0) {
            return this.error(
              a.EXPECT_ARGUMENT_STYLE,
              H(this.clonePosition(), this.clonePosition()),
            );
          }
          l = {
            style,
            styleLocation: H(p, this.clonePosition()),
          };
        }
        var v = this.tryParseArgumentClose(n);
        if (v.err) {
          return v;
        }
        const g = H(n, this.clonePosition());
        if (l && V(l == null ? undefined : l.style, "::", 0)) {
          const b = q(l.style.slice(2));
          if (value === "number") {
            var d = this.parseNumberSkeletonFromString(b, l.styleLocation);
            if (d.err) {
              return d;
            }
            return {
              val: {
                type: c.number,
                value: value_1,
                location: g,
                style: d.val,
              },
              err: null,
            };
          }
          if (b.length === 0) {
            return this.error(a.EXPECT_DATE_TIME_SKELETON, g);
          }
          let E;
          let pattern = b;
          if (this.locale) {
            pattern = ((e, t) => {
              let r = "";
              for (let n = 0; n < e.length; n++) {
                const i = e.charAt(n);
                if (i === "j") {
                  let o = 0;
                  while (n + 1 < e.length && e.charAt(n + 1) === i) {
                    o++;
                    n++;
                  }
                  let a = 1 + (1 & o);
                  let c = o < 2 ? 1 : 3 + (o >> 1);
                  const s = ((e) => {
                    let t;
                    let e_hourCycle = e.hourCycle;
                    if (
                      e_hourCycle === undefined &&
                      e.hourCycles &&
                      e.hourCycles.length
                    ) {
                      e_hourCycle = e.hourCycles[0];
                    }
                    if (e_hourCycle) {
                      switch (e_hourCycle) {
                        case "h24":
                          return "k";
                        case "h23":
                          return "H";
                        case "h12":
                          return "h";
                        case "h11":
                          return "K";
                        default:
                          throw Error("Invalid hourCycle");
                      }
                    }
                    const e_language = e.language;
                    if (e_language !== "root") {
                      t = e.maximize().region;
                    }
                    return (P[t || ""] ||
                      P[e_language || ""] ||
                      P["".concat(e_language, "-001")] ||
                      P["001"])[0];
                  })(t);
                  for ((s == "H" || s == "k") && (c = 0); c-- > 0;) {
                    r += "a";
                  }
                  while (a-- > 0) {
                    r = s + r;
                  }
                } else {
                  if (i === "J") {
                    r += "H";
                  } else {
                    r += i;
                  }
                }
              }
              return r;
            })(b, this.locale);
          }
          var style = {
            type: s.dateTime,
            pattern,
            location: l.styleLocation,
            parsedOptions: this.shouldParseSkeletons
              ? ((E = {}),
                pattern.replace(_, (e) => {
                  const e_length = e.length;
                  switch (e[0]) {
                    case "G":
                      E.era =
                        e_length === 4
                          ? "long"
                          : e_length === 5
                            ? "narrow"
                            : "short";
                      break;
                    case "y":
                      E.year = e_length === 2 ? "2-digit" : "numeric";
                      break;
                    case "Y":
                    case "u":
                    case "U":
                    case "r":
                      throw RangeError(
                        "`Y/u/U/r` (year) patterns are not supported, use `y` instead",
                      );
                    case "q":
                    case "Q":
                      throw RangeError(
                        "`q/Q` (quarter) patterns are not supported",
                      );
                    case "M":
                    case "L":
                      E.month = [
                        "numeric",
                        "2-digit",
                        "short",
                        "long",
                        "narrow",
                      ][e_length - 1];
                      break;
                    case "w":
                    case "W":
                      throw RangeError(
                        "`w/W` (week) patterns are not supported",
                      );
                    case "d":
                      E.day = ["numeric", "2-digit"][e_length - 1];
                      break;
                    case "D":
                    case "F":
                    case "g":
                      throw RangeError(
                        "`D/F/g` (day) patterns are not supported, use `d` instead",
                      );
                    case "E":
                      E.weekday =
                        e_length === 4
                          ? "short"
                          : e_length === 5
                            ? "narrow"
                            : "short";
                      break;
                    case "e":
                      if (e_length < 4) {
                        throw RangeError(
                          "`e..eee` (weekday) patterns are not supported",
                        );
                      }
                      E.weekday = ["short", "long", "narrow", "short"][
                        e_length - 4
                      ];
                      break;
                    case "c":
                      if (e_length < 4) {
                        throw RangeError(
                          "`c..ccc` (weekday) patterns are not supported",
                        );
                      }
                      E.weekday = ["short", "long", "narrow", "short"][
                        e_length - 4
                      ];
                      break;
                    case "a":
                      E.hour12 = true;
                      break;
                    case "b":
                    case "B":
                      throw RangeError(
                        "`b/B` (period) patterns are not supported, use `a` instead",
                      );
                    case "h":
                      E.hourCycle = "h12";
                      E.hour = ["numeric", "2-digit"][e_length - 1];
                      break;
                    case "H":
                      E.hourCycle = "h23";
                      E.hour = ["numeric", "2-digit"][e_length - 1];
                      break;
                    case "K":
                      E.hourCycle = "h11";
                      E.hour = ["numeric", "2-digit"][e_length - 1];
                      break;
                    case "k":
                      E.hourCycle = "h24";
                      E.hour = ["numeric", "2-digit"][e_length - 1];
                      break;
                    case "j":
                    case "J":
                    case "C":
                      throw RangeError(
                        "`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead",
                      );
                    case "m":
                      E.minute = ["numeric", "2-digit"][e_length - 1];
                      break;
                    case "s":
                      E.second = ["numeric", "2-digit"][e_length - 1];
                      break;
                    case "S":
                    case "A":
                      throw RangeError(
                        "`S/A` (second) patterns are not supported, use `s` instead",
                      );
                    case "z":
                      E.timeZoneName = e_length < 4 ? "short" : "long";
                      break;
                    case "Z":
                    case "O":
                    case "v":
                    case "V":
                    case "X":
                    case "x":
                      throw RangeError(
                        "`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead",
                      );
                  }
                  return "";
                }),
                E)
              : {},
          };
          return {
            val: {
              type: value === "date" ? c.date : c.time,
              value: value_1,
              location: g,
              style,
            },
            err: null,
          };
        }
        return {
          val: {
            type:
              value === "number"
                ? c.number
                : value === "date"
                  ? c.date
                  : c.time,
            value: value_1,
            location: g,
            style: (i = l == null ? undefined : l.style) != null ? i : null,
          },
          err: null,
        };
      case "plural":
      case "selectordinal":
      case "select":
        const T = this.clonePosition();
        this.bumpSpace();
        if (!this.bumpIf(",")) {
          return this.error(
            a.EXPECT_SELECT_ARGUMENT_OPTIONS,
            H(T, h.Cl({}, T)),
          );
        }
        this.bumpSpace();
        let S = this.parseIdentifierIfPossible();
        let offset = 0;
        if (value !== "select" && S.value === "offset") {
          if (!this.bumpIf(":")) {
            return this.error(
              a.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
              H(this.clonePosition(), this.clonePosition()),
            );
          }
          this.bumpSpace();
          var d = this.tryParseDecimalInteger(
            a.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
            a.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE,
          );
          if (d.err) {
            return d;
          }
          this.bumpSpace();
          S = this.parseIdentifierIfPossible();
          offset = d.val;
        }
        const x = this.tryParsePluralOrSelectOptions(e, value, t, S);
        if (x.err) {
          return x;
        }
        var v = this.tryParseArgumentClose(n);
        if (v.err) {
          return v;
        }
        const w = H(n, this.clonePosition());
        if (value === "select") {
          return {
            val: {
              type: c.select,
              value: value_1,
              options: W(x.val),
              location: w,
            },
            err: null,
          };
        }
        return {
          val: {
            type: c.plural,
            value: value_1,
            options: W(x.val),
            offset,
            pluralType: value === "plural" ? "cardinal" : "ordinal",
            location: w,
          },
          err: null,
        };
      default:
        return this.error(a.INVALID_ARGUMENT_TYPE, H(o, f));
    }
  }
  tryParseArgumentClose(e) {
    if (this.isEOF() || this.char() !== 125) {
      return this.error(
        a.EXPECT_ARGUMENT_CLOSING_BRACE,
        H(e, this.clonePosition()),
      );
    }
    this.bump();
    return {
      val: true,
      err: null,
    };
  }
  parseSimpleArgStyleIfPossible() {
    let e = 0;
    const t = this.clonePosition();
    while (!this.isEOF()) {
      switch (this.char()) {
        case 39:
          this.bump();
          const r = this.clonePosition();
          if (!this.bumpUntil("'")) {
            return this.error(
              a.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
              H(r, this.clonePosition()),
            );
          }
          this.bump();
          break;
        case 123:
          e += 1;
          this.bump();
          break;
        case 125:
          if (!(e > 0)) {
            return {
              val: this.message.slice(t.offset, this.offset()),
              err: null,
            };
          }
          e -= 1;
          break;
        default:
          this.bump();
      }
    }
    return {
      val: this.message.slice(t.offset, this.offset()),
      err: null,
    };
  }
  parseNumberSkeletonFromString(e, t) {
    let tokens = [];
    try {
      tokens = ((e) => {
        if (e.length === 0) {
          throw Error("Number skeleton cannot be empty");
        }
        for (
          var t = e.split(x).filter((e) => e.length > 0), r = [], n = 0;
          n < t.length;
          n++
        ) {
          const i = t[n].split("/");
          if (i.length === 0) {
            throw Error("Invalid number skeleton");
          }
          const stem = i[0];
          for (var options = i.slice(1), c = 0; c < options.length; c++) {
            if (options[c].length === 0) {
              throw Error("Invalid number skeleton");
            }
          }
          r.push({
            stem,
            options,
          });
        }
        return r;
      })(e);
    } catch (e) {
      return this.error(a.INVALID_NUMBER_SKELETON, t);
    }
    return {
      val: {
        type: s.number,
        tokens,
        location: t,
        parsedOptions: this.shouldParseSkeletons
          ? ((e) => {
              let t = {};
              for (let r = 0; r < e.length; r++) {
                const n = e[r];
                switch (n.stem) {
                  case "percent":
                  case "%":
                    t.style = "percent";
                    continue;
                  case "%x100":
                    t.style = "percent";
                    t.scale = 100;
                    continue;
                  case "currency":
                    t.style = "currency";
                    t.currency = n.options[0];
                    continue;
                  case "group-off":
                  case ",_":
                    t.useGrouping = false;
                    continue;
                  case "precision-integer":
                  case ".":
                    t.maximumFractionDigits = 0;
                    continue;
                  case "measure-unit":
                  case "unit":
                    t.style = "unit";
                    t.unit = n.options[0].replace(/^(.*?)-/, "");
                    continue;
                  case "compact-short":
                  case "K":
                    t.notation = "compact";
                    t.compactDisplay = "short";
                    continue;
                  case "compact-long":
                  case "KK":
                    t.notation = "compact";
                    t.compactDisplay = "long";
                    continue;
                  case "scientific":
                    t = h.Cl(
                      h.Cl(h.Cl({}, t), {
                        notation: "scientific",
                      }),
                      n.options.reduce(
                        (acc, option) => h.Cl(h.Cl({}, acc), M(option)),
                        {},
                      ),
                    );
                    continue;
                  case "engineering":
                    t = h.Cl(
                      h.Cl(h.Cl({}, t), {
                        notation: "engineering",
                      }),
                      n.options.reduce(
                        (acc, option) => h.Cl(h.Cl({}, acc), M(option)),
                        {},
                      ),
                    );
                    continue;
                  case "notation-simple":
                    t.notation = "standard";
                    continue;
                  case "unit-width-narrow":
                    t.currencyDisplay = "narrowSymbol";
                    t.unitDisplay = "narrow";
                    continue;
                  case "unit-width-short":
                    t.currencyDisplay = "code";
                    t.unitDisplay = "short";
                    continue;
                  case "unit-width-full-name":
                    t.currencyDisplay = "name";
                    t.unitDisplay = "long";
                    continue;
                  case "unit-width-iso-code":
                    t.currencyDisplay = "symbol";
                    continue;
                  case "scale":
                    t.scale = parseFloat(n.options[0]);
                    continue;
                  case "integer-width":
                    if (n.options.length > 1) {
                      throw RangeError(
                        "integer-width stems only accept a single optional option",
                      );
                    }
                    n.options[0].replace(k, (e, r, n, i, o, a) => {
                      if (r) {
                        t.minimumIntegerDigits = n.length;
                      } else if (i && o) {
                        throw Error(
                          "We currently do not support maximum integer digits",
                        );
                      } else if (a) {
                        throw Error(
                          "We currently do not support exact integer digits",
                        );
                      }
                      return "";
                    });
                    continue;
                }
                if (R.test(n.stem)) {
                  t.minimumIntegerDigits = n.stem.length;
                  continue;
                }
                if (w.test(n.stem)) {
                  if (n.options.length > 1) {
                    throw RangeError(
                      "Fraction-precision stems only accept a single optional option",
                    );
                  }
                  n.stem.replace(w, (e, r, n, i, o, a) => {
                    if (n === "*") {
                      t.minimumFractionDigits = r.length;
                    } else if (i && i[0] === "#") {
                      t.maximumFractionDigits = i.length;
                    } else if (o && a) {
                      t.minimumFractionDigits = o.length;
                      t.maximumFractionDigits = o.length + a.length;
                    } else {
                      t.minimumFractionDigits = r.length;
                      t.maximumFractionDigits = r.length;
                    }
                    return "";
                  });
                  const i = n.options[0];
                  if (i === "w") {
                    t = h.Cl(h.Cl({}, t), {
                      trailingZeroDisplay: "stripIfInteger",
                    });
                  } else if (i) {
                    t = h.Cl(h.Cl({}, t), B(i));
                  }
                  continue;
                }
                if (I.test(n.stem)) {
                  t = h.Cl(h.Cl({}, t), B(n.stem));
                  continue;
                }
                const o = C(n.stem);
                if (o) {
                  t = h.Cl(h.Cl({}, t), o);
                }
                const a = ((e) => {
                  let t;
                  if (e[0] === "E" && e[1] === "E") {
                    t = {
                      notation: "engineering",
                    };
                    e = e.slice(2);
                  } else if (e[0] === "E") {
                    t = {
                      notation: "scientific",
                    };
                    e = e.slice(1);
                  }
                  if (t) {
                    const r = e.slice(0, 2);
                    if (r === "+!") {
                      t.signDisplay = "always";
                      e = e.slice(2);
                    } else if (r === "+?") {
                      t.signDisplay = "exceptZero";
                      e = e.slice(2);
                    }
                    if (!R.test(e)) {
                      throw Error("Malformed concise eng/scientific notation");
                    }
                    t.minimumIntegerDigits = e.length;
                  }
                  return t;
                })(n.stem);
                if (a) {
                  t = h.Cl(h.Cl({}, t), a);
                }
              }
              return t;
            })(tokens)
          : {},
      },
      err: null,
    };
  }
  tryParsePluralOrSelectOptions(e, t, r, n) {
    let i;
    let o = false;
    const c = [];
    const s = new Set();
    let n_value = n.value;
    let n_location = n.location;
    while (true) {
      if (n_value.length === 0) {
        const h = this.clonePosition();
        if (t !== "select" && this.bumpIf("=")) {
          const l = this.tryParseDecimalInteger(
            a.EXPECT_PLURAL_ARGUMENT_SELECTOR,
            a.INVALID_PLURAL_ARGUMENT_SELECTOR,
          );
          if (l.err) {
            return l;
          }
          n_location = H(h, this.clonePosition());
          n_value = this.message.slice(h.offset, this.offset());
        } else {
          break;
        }
      }
      if (s.has(n_value)) {
        return this.error(
          t === "select"
            ? a.DUPLICATE_SELECT_ARGUMENT_SELECTOR
            : a.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
          n_location,
        );
      }
      if (n_value === "other") {
        o = true;
      }
      this.bumpSpace();
      const p = this.clonePosition();
      if (!this.bumpIf("{")) {
        return this.error(
          t === "select"
            ? a.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
            : a.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
          H(this.clonePosition(), this.clonePosition()),
        );
      }
      const d = this.parseMessage(e + 1, t, r);
      if (d.err) {
        return d;
      }
      const y = this.tryParseArgumentClose(p);
      if (y.err) {
        return y;
      }
      c.push([
        n_value,
        {
          value: d.val,
          location: H(p, this.clonePosition()),
        },
      ]);
      s.add(n_value);
      this.bumpSpace();
      n_value = (i = this.parseIdentifierIfPossible()).value;
      n_location = i.location;
    }
    if (c.length === 0) {
      return this.error(
        t === "select"
          ? a.EXPECT_SELECT_ARGUMENT_SELECTOR
          : a.EXPECT_PLURAL_ARGUMENT_SELECTOR,
        H(this.clonePosition(), this.clonePosition()),
      );
    }
    if (this.requiresOtherClause && !o) {
      return this.error(
        a.MISSING_OTHER_CLAUSE,
        H(this.clonePosition(), this.clonePosition()),
      );
    }
    return {
      val: c,
      err: null,
    };
  }
  tryParseDecimalInteger(e, t) {
    let r = 1;
    const n = this.clonePosition();
    if (!this.bumpIf("+")) {
      if (this.bumpIf("-")) {
        r = -1;
      }
    }
    let i = false;
    let o = 0;
    while (!this.isEOF()) {
      const a = this.char();
      if (a >= 48 && a <= 57) {
        i = true;
        o = 10 * o + (a - 48);
        this.bump();
      } else {
        break;
      }
    }
    const c = H(n, this.clonePosition());
    if (i) {
      if (K((o *= r))) {
        return {
          val: o,
          err: null,
        };
      }
      return this.error(t, c);
    }
    return this.error(e, c);
  }
  offset() {
    return this.position.offset;
  }
  isEOF() {
    return this.offset() === this.message.length;
  }
  clonePosition() {
    return {
      offset: this.position.offset,
      line: this.position.line,
      column: this.position.column,
    };
  }
  char() {
    const offset = this.position.offset;
    if (offset >= this.message.length) {
      throw Error("out of bound");
    }
    const t = z(this.message, offset);
    if (t === undefined) {
      throw Error(
        "Offset ".concat(offset, " is at invalid UTF-16 code unit boundary"),
      );
    }
    return t;
  }
  error(kind, t) {
    return {
      val: null,
      err: {
        kind,
        message: this.message,
        location: t,
      },
    };
  }
  bump() {
    if (!this.isEOF()) {
      const e = this.char();
      if (e === 10) {
        this.position.line += 1;
        this.position.column = 1;
        this.position.offset += 1;
      } else {
        this.position.column += 1;
        this.position.offset += e < 65536 ? 1 : 2;
      }
    }
  }
  bumpIf(e) {
    if (V(this.message, e, this.offset())) {
      for (let t = 0; t < e.length; t++) {
        this.bump();
      }
      return true;
    }
    return false;
  }
  bumpUntil(e) {
    const t = this.offset();
    const r = this.message.indexOf(e, t);
    if (r >= 0) {
      this.bumpTo(r);
      return true;
    }
    this.bumpTo(this.message.length);
    return false;
  }
  bumpTo(e) {
    if (this.offset() > e) {
      throw Error(
        "targetOffset "
          .concat(e, " must be greater than or equal to the current offset ")
          .concat(this.offset()),
      );
    }
    for (e = Math.min(e, this.message.length); ;) {
      const t = this.offset();
      if (t === e) {
        break;
      }
      if (t > e) {
        throw Error(
          "targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"),
        );
      }
      this.bump();
      if (this.isEOF()) {
        break;
      }
    }
  }
  bumpSpace() {
    while (!this.isEOF() && et(this.char())) {
      this.bump();
    }
  }
  peek() {
    if (this.isEOF()) {
      return null;
    }
    const e = this.char();
    const t = this.offset();
    const r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
    if (r != null) {
      return r;
    }
    return null;
  }
}
function ee(e) {
  return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
}
function et(e) {
  return (
    (e >= 9 && e <= 13) ||
    e === 32 ||
    e === 133 ||
    (e >= 8206 && e <= 8207) ||
    e === 8232 ||
    e === 8233
  );
}
export function qg(e, t = {}) {
  const r = new Q(
    e,
    (t = h.Cl(
      {
        shouldParseSkeletons: true,
        requiresOtherClause: true,
      },
      t,
    )),
  ).parse();
  if (r.err) {
    const n = SyntaxError(a[r.err.kind]);
    n.location = r.err.location;
    n.originalMessage = r.err.message;
    throw n;
  }
  if (!(t == null ? undefined : t.captureLocation)) {
    (function e(t) {
      t.forEach((t) => {
        delete t.location;
        if (Jp(t) || N6(t)) {
          for (const r in t.options) {
            delete t.options[r].location;
            e(t.options[r].value);
          }
        } else {
          if ((oF(t) && N1(t.style)) || ((tv(t) || Qh(t)) && Tu(t.style))) {
            delete t.style.location;
          } else if (xm(t)) {
            e(t.children);
          }
        }
      });
    })(r.val);
  }
  return r.val;
}
