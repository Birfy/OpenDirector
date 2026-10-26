import { Buffer } from "wS";
import "./module-ak_2_2.js";
let n;
let i;
let a;
let o;
let s;
let A;
let c;
let u;
let l;
let h;
let f;
let g;
let d;
let p;
let m;
let y;
let b;
let v;
let I;
let w;
let C;
let B;
const S = {
  blackList: {
    a: ["folder"],
    meta: ["content"],
    iframe: ["srcdoc"],
    input: ["pattern"],
    vmlframe: ["xmlns"],
  },
  blackTags: [
    "script",
    "xml",
    "embed",
    "isindex",
    "object",
    "base",
    "set",
    "handler",
    "animate",
    "payload",
    "import",
    "selectedcontent",
  ],
  blackAttrs: [
    "charset",
    "ns",
    "namespace",
    "formaction",
    "xlink:href",
    "xmlns:xlink",
    "handler",
    "repeat",
    "repeat-start",
    "repeat-end",
  ],
  blackAttrRegExps: [/^on/],
  filterList: {
    param: ["value"],
    video: ["poster"],
    form: ["action"],
  },
  filterAttrs: [
    "href",
    "src",
    "background",
    "style",
    "dynsrc",
    "lowsrc",
    "content",
    "name",
  ],
};
const E = (t) => t && t.Math == Math && t;
const k =
  E(typeof globalThis === "object" && globalThis) ||
  E(typeof window === "object" && window) ||
  E(typeof self === "object" && self) ||
  E(typeof global === "object" && global) ||
  Function("return this")();
function D(t, e) {
  if (!(t instanceof e)) {
    throw TypeError("Cannot call a class as a function");
  }
}
function x(t, e) {
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    n.enumerable = n.enumerable || false;
    n.configurable = true;
    if ("value" in n) {
      n.writable = true;
    }
    Object.defineProperty(t, n.key, n);
  }
}
function F(t, e, r) {
  if (e) {
    x(t.prototype, e);
  }
  if (r) {
    x(t, r);
  }
  return t;
}
class N {
  constructor() {
    this.collect = undefined;
    this.collect = {
      blackList: {},
      blackTags: [],
      blackAttrs: [],
      blackAttrRegExps: [],
      filterAttrs: [],
      filterList: {},
      filterProtocol: [],
      forceRemove: [],
      escapeAttrs: [],
      escapeText: [],
      invalidAttrs: [],
    };
  }
  initCollect() {
    this.collect = {
      blackList: {},
      blackTags: [],
      blackAttrs: [],
      blackAttrRegExps: [],
      filterAttrs: [],
      filterList: {},
      filterProtocol: [],
      forceRemove: [],
      escapeAttrs: [],
      escapeText: [],
      invalidAttrs: [],
    };
  }
  removeCollect() {
    const t = this.getReportCollect();
    const t_count = t.count;
    const t_ret = t.ret;
    this.collect = {
      blackList: {},
      blackTags: [],
      blackAttrs: [],
      blackAttrRegExps: [],
      filterAttrs: [],
      filterList: {},
      filterProtocol: [],
      forceRemove: [],
      escapeAttrs: [],
      escapeText: [],
      invalidAttrs: [],
    };
    return {
      collectKey: t_count === 0 ? "" : JSON.stringify(t_ret),
      collectMode: "black",
    };
  }
  getReportCollect() {
    const collect = this.collect;
    let count = 0;
    let r = true;
    let n = false;
    let i;
    try {
      let a;
      for (
        var o = P.keys(collect)[Symbol.iterator]();
        !(r = (a = o.next()).done);
        r = true
      ) {
        (() => {
          const a_value = a.value;
          if (Array.isArray(collect[a_value])) {
            if (collect[a_value].length === 0) {
              delete collect[a_value];
            } else {
              collect[a_value] = P.from(P.uniq(collect[a_value]));
              count += collect[a_value].length;
            }
          } else if (P.keys(collect[a_value]).length === 0) {
            delete collect[a_value];
          } else {
            P.keys(collect[a_value]).forEach((n) => {
              collect[a_value][n] = P.from(P.uniq(collect[a_value][n]));
              count += collect[a_value][n].length;
            });
          }
        })();
      }
    } catch (error) {
      n = true;
      i = error;
    } finally {
      try {
        if (!(r || o.return == null)) {
          o.return();
        }
      } finally {
        if (n) {
          throw i;
        }
      }
    }
    return {
      count,
      ret: collect,
    };
  }
}
const R = new ((() => {
  function t() {
    D(this, t);
    this.batchData = [];
    this.uniqKeys = new Set();
    this.timeout = 2000;
    this.lock = false;
  }
  F(t, [
    {
      key: "upload",
      value: function (t) {
        const e = this;
        if (!t || !t.isCloseSSRReport || (k == null ? undefined : k.document)) {
          let r = t.reportUrl || "";
          if (r === "-" && k.xssReportUrl) {
            r = k.xssReportUrl;
          }
          if (!this.lock && r && this.batchData.length !== 0 && r !== "-") {
            this.lock = true;
            setTimeout(() => {
              try {
                const n = e.batchData.slice(0, 100);
                e.batchData = e.batchData.slice(100);
                k.fetch(r, {
                  method: "post",
                  body: JSON.stringify(n),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }).catch((t) => {
                  console.warn("xss defense report error", t);
                });
              } catch (t) {}
              e.lock = false;
              e.upload(t);
            }, this.timeout);
          }
        }
      },
    },
    {
      key: "generateKey",
      value: function (t) {
        if (t.collectKey) {
          return [t.collectMode, t.collectKey].join("___");
        }
        return "";
      },
    },
    {
      key: "push",
      value: function (t, e) {
        this.batchData.push(t);
        this.upload(e);
      },
    },
    {
      key: "sampling",
      value: function (t) {
        if (k.argusConfig) {
          let e;
          const r = k.argusConfig.xss;
          if (r) {
            const n = r.sample;
            if (n) {
              for (var i = P.keys(n), a = 0; a < i.length; ++a) {
                ((r) => {
                  const a = i[r];
                  const o = n[a];
                  const s = o.find((e) => t[a] && t[a].includes(e.target));
                  const A = o.find(
                    (e) => t.body && t.body[a] && t.body[a].includes(e.target),
                  );
                  if (s && s.ratio && typeof s.ratio === "number") {
                    e = s.ratio;
                  }
                  if (A && A.ratio && typeof A.ratio === "number") {
                    e = typeof e === "number" && e > A.ratio ? e : A.ratio;
                  }
                })(a);
              }
              if (
                typeof e === "number" &&
                Math.floor(10000 * Math.random()) > e
              ) {
                return true;
              }
            }
          }
        }
      },
    },
    {
      key: "report",
      value: function (body, e) {
        const r = this.generateKey(body);
        if (k.fetch && body.collectKey) {
          let url = "SSR";
          if (
            k !== undefined &&
            k.location !== undefined &&
            k.location.href !== undefined
          ) {
            url = k.location.href;
          }
          body.documentUrl = url;
          let i = body.documentUrl;
          if (i && typeof i.split === "function") {
            i = i.split("?")[0];
          }
          let a = "";
          if (k == null ? undefined : k.gfdatav1) {
            const o = k.gfdatav1;
            a = "".concat(o.env, "_").concat(o.region, "_").concat(o.ver);
          }
          const s = {
            age: Math.floor(Date.now()),
            type: "xss",
            url,
            body,
            "user-agent": "",
          };
          const A = Z();
          s.url = "".concat(r, "___").concat(i);
          if (A) {
            s.body.type = "".concat(s.body.type, "_remote_close");
          }
          s.body.type = "".concat(s.body.type, "_").concat(a);
          if (url === "SSR") {
            s.url = "SSR___".concat(s.url);
            s.body.ssr = true;
          }
          s.url = "".concat(body.scene, "__").concat(s.url);
          try {
            if (this.sampling(s) === true) {
              return;
            }
          } catch (t) {}
          this.push(s, e);
        }
      },
    },
  ]);
  return t;
})())();
const collecter = new N();
function G(t, e, r) {
  if (e in t) {
    Object.defineProperty(t, e, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    t[e] = r;
  }
  return t;
}
const Y = function (t) {
  const e =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
  const r = Number(e);
  return r !== -1 && r.toString() !== "NaN" && !!(t.length >= r);
};
const U = function (t) {
  const e =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
  const r = Number(e);
  return r !== -1 && r.toString() !== "NaN" && !!(t.length >= r);
};
const W = (t) => {
  if (typeof t === "string") {
    return t
      .replace(/'/g, '"')
      .replace('=""', "")
      .replace(/\s+/g, "")
      .toLowerCase();
  }
  return "";
};
const M = function (t) {
  const e = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  const r = t.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  if (e) {
    return r.replace(/"/g, "&quot;");
  }
  return r;
};
const J = function () {
  const t =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    blackList: t.blackList || {},
    blackTags: t.blackTags || [],
    blackAttrs: t.blackAttrs || [],
    blackAttrRegExps: t.blackAttrRegExps || [],
    filterList: t.filterList || {},
    filterAttrs: t.filterAttrs || [],
  };
};
const L = (t, e) => {
  const r = t && t.logType ? t.logType : "-";
  return "".concat(r, "_error_").concat(e);
};
const H = (t) => {
  const e = t.e;
  const t_sourceText = t.sourceText;
  const t_config = t.config;
  const t_type = t.type;
  const t_disposition = t.disposition;
  const t_sceneType = t.sceneType;
  try {
    const collectData =
      e && (e.name || e.message)
        ? "".concat(e.name || "", ":").concat(e.message || "")
        : String(e);
    R.report(
      {
        type: L(t_config, t_sceneType),
        disposition: t_disposition,
        sourceText: z(String(t_sourceText || "").replace(/'/g, '"')),
        filterText: z(collectData.replace(/'/g, '"')),
        collectKey: "exception",
        collectData,
        collectMode: "black",
        scene: "".concat(t_sceneType, "_").concat(t_type, "_exception"),
        filename: t_config && t_config.filename,
      },
      t_config,
    );
  } catch (t) {}
};
var Z = () => {
  let t = false;
  if (typeof k.useWebSecsdkApi === "function") {
    const e = k.useWebSecsdkApi("compiler");
    if (e && e.enableXssFilter === false) {
      t = true;
    }
  }
  if (
    k.argusConfig &&
    k.argusConfig.xss &&
    k.argusConfig.xss.enableXssFilter === false
  ) {
    t = true;
  }
  if (k.__msite_app_conf && k.__msite_app_conf.enable_xss_filter === false) {
    t = true;
  }
  if (k.tccAppConfig && k.tccAppConfig.enable_xss_filter === false) {
    t = true;
  }
  return t;
};
const j = (t) => {
  if (Z()) {
    return "report";
  }
  const t_reportOnly = t.reportOnly;
  const r = t_reportOnly === undefined || t_reportOnly;
  if (r === false || r === "false") {
    return "enforce";
  }
  return "report";
};
var P = {
  forEach: function (t, e, r) {
    let n;
    let i;
    n = 0;
    for (i = t.length; n < i; n++) {
      e.call(r, t[n], n, t);
    }
  },
  some: function (t, e, r) {
    let n;
    let i;
    n = 0;
    for (i = t.length; n < i; n++) {
      if (e.call(r, t[n], n, t)) {
        return true;
      }
    }
    return false;
  },
  includes: function (t, e) {
    if (typeof t === "string") {
      return t.indexOf(e) !== -1;
    }
    for (let r = 0; r < t.length; r++) {
      if (t[r] === e) {
        return true;
      }
    }
    return false;
  },
  uniq: function (t) {
    const e = {};
    const r = [];
    for (let n = 0; n < t.length; n++) {
      if (!e[t[n]]) {
        r.push(t[n]);
        e[t[n]] = true;
      }
    }
    return r;
  },
  from: function (t) {
    const e = [];
    for (let r = 0; r < t.length; r++) {
      e.push(t[r]);
    }
    return e;
  },
  keys: function (t) {
    const e = [];
    for (const r in t) {
      e.push(r);
    }
    return e;
  },
};
const q = (t) => {
  if (t != null) {
    try {
      return String(t);
    } catch (t) {
      return;
    }
  }
};
const V = (t) => {
  const t_sourceText = t.sourceText;
  const t_config = t.config;
  const t_callback = t.callback;
  const i = q(t_sourceText);
  if (
    typeof i !== "string" ||
    Y(i, Number(t_config.urlLimit)) ||
    (function () {
      let t;
      let e =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      const r = arguments.length > 1 ? arguments[1] : undefined;
      if (typeof e !== "string") {
        return true;
      }
      if (
        (e =
          (t = (t = (t = (t = (t = e).replace(/&colon;/gi, ":")).replace(
            /&tab;/gi,
            "",
          )).replace(/&newline;/gi, "")).replace(/(\t|\n|\r)/g, "")).indexOf(
            "&#",
          ) === -1
            ? t.trim().toLowerCase()
            : t
                .trim()
                .replace(/&#(?:(x)([0-9a-f]+)|([0-9]+));?/gi, (t, e, r, n) =>
                  String.fromCharCode(e ? parseInt(r, 16) : parseInt(n)),
                )
                .replace(/(\t|\n|\r)/g, "")
                .toLowerCase()) === "currentscript"
      ) {
        if (r) {
          r("currentScript");
        }
        return false;
      }
      if (
        P.includes(e, "base64") &&
        !((t) => {
          if (t === "" || t.trim() === "") {
            return true;
          }
          try {
            return !P.includes(t, "data:text/html;base64");
          } catch (t) {
            return true;
          }
        })(e)
      ) {
        if (r) {
          r("data:text/html;base64");
        }
        return false;
      }
      const n = ["expression(", "view-source:"];
      if (
        P.some(n, function (t) {
          return e.indexOf(t) !== -1;
        })
      ) {
        P.forEach(n, function (t) {
          if (e.indexOf(t) !== -1 && r) {
            r(t);
          }
        });
        return false;
      }
      const i = e.replace(/\/\*[\s\S]*?\*\//g, "");
      if (/(^|[;{}])behavior:/.test(i)) {
        if (r) {
          r("behavior:");
        }
        return false;
      }
      const a = [
        "data:application",
        "data:javascript",
        "data:text/html",
        "data:texthtml",
      ];
      if (
        P.some(a, function (t) {
          return e.indexOf(t) !== -1;
        })
      ) {
        P.forEach(a, function (t) {
          if (e.indexOf(t) !== -1 && r) {
            r(t);
          }
        });
        return false;
      }
      if (e.indexOf("javascript:") > 0) {
        if (r) {
          r("javascript:");
        }
        return false;
      }
      if (/^javascript:/i.test(e)) {
        const o = e.slice(11).replace(/\s/g, "").trim();
        return (
          !!P.some(
            ["void", "void(0)", "void0", "false", "undefined", ";"],
            function (t) {
              return t === o;
            },
          ) || (r && r("javascript:"), false)
        );
      }
      return true;
    })(i, t_callback)
  ) {
    return t_sourceText;
  }
  try {
    if (t_config.isSaveValidUrl === true) {
      const a = new URL(i);
      return a.origin + a.pathname;
    }
  } catch (error) {
    console.log(error);
  }
  return "#";
};
const X = (t, e) => {
  const r = {};
  const n = P.keys(t);
  let i = true;
  let a = false;
  let o;
  try {
    let s;
    for (var A = n[Symbol.iterator](); !(i = (s = A.next()).done); i = true) {
      const c = s.value;
      if (Array.isArray(t[c])) {
        r[c] = P.from(t[c]);
      } else {
        r[c] = X({}, t[c]);
      }
    }
  } catch (error) {
    a = true;
    o = error;
  } finally {
    try {
      if (!(i || A.return == null)) {
        A.return();
      }
    } finally {
      if (a) {
        throw o;
      }
    }
  }
  const u = P.keys(e);
  let l = true;
  let h = false;
  let f;
  try {
    let g;
    for (var d = u[Symbol.iterator](); !(l = (g = d.next()).done); l = true) {
      const p = g.value;
      if (p in t) {
        if (Array.isArray(t[p])) {
          r[p] = t[p].concat(e[p]);
        } else {
          r[p] = X(t[p], e[p]);
        }
      } else if (Array.isArray(e[p])) {
        r[p] = P.from(e[p]);
      } else {
        r[p] = X({}, e[p]);
      }
    }
  } catch (error) {
    h = true;
    f = error;
  } finally {
    try {
      if (!(l || d.return == null)) {
        d.return();
      }
    } finally {
      if (h) {
        throw f;
      }
    }
  }
  return r;
};
function z(t) {
  let e;
  let r;
  let n;
  let i;
  let a;
  let o;
  let s;
  const A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let c = "";
  let u = 0;
  for (
    t = ((t) => {
      t = t.replace(/rn/g, "n");
      let e = "";
      for (let r = 0; r < t.length; r++) {
        const n = t.charCodeAt(r);
        if (n < 128) {
          e += String.fromCharCode(n);
        } else {
          if (n > 127 && n < 2048) {
            e += String.fromCharCode((n >> 6) | 192);
          } else {
            e += String.fromCharCode((n >> 12) | 224);
            e += String.fromCharCode(((n >> 6) & 63) | 128);
          }
          e += String.fromCharCode((63 & n) | 128);
        }
      }
      return e;
    })(t);
    u < t.length;
  ) {
    e = t.charCodeAt(u++);
    r = t.charCodeAt(u++);
    n = t.charCodeAt(u++);
    i = e >> 2;
    a = ((3 & e) << 4) | (r >> 4);
    o = ((15 & r) << 2) | (n >> 6);
    s = 63 & n;
    if (isNaN(r)) {
      s = 64;
      o = 64;
    } else if (isNaN(n)) {
      s = 64;
    }
    c = c + A.charAt(i) + A.charAt(a) + A.charAt(o) + A.charAt(s);
  }
  return c;
}
function _(t) {
  for (
    let e = [
        "scmVersion",
        "scmName",
        "scmBranch",
        "webpackPluginVersion",
        "filename",
      ],
      r = 0;
    r < e.length;
    ++r
  ) {
    if (!t[e[r]]) {
      t[e[r]] = "-";
    }
  }
}
const $ = (t) => {
  const t_scmVersion = t.scmVersion;
  const t_scmName = t.scmName;
  const t_webpackPluginVersion = t.webpackPluginVersion;
  const t_reportOnly = t.reportOnly;
  const a = "".concat(t_scmName, "___").concat(t_scmVersion);
  const o = {
    webpackPluginVersion: t_webpackPluginVersion,
    reportOnly: t_reportOnly,
  };
  if (!(k.xssV3 && k.xssV3[a])) {
    if (k.xssV3) {
      if (!k.xssV3[a]) {
        k.xssV3[a] = o;
      }
    } else {
      k.xssV3 = G({}, a, o);
    }
  }
};
let tt = new Map([
  [0, 65533],
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376],
]);
let te =
  (d = String.fromCodePoint) != null
    ? d
    : (t) => {
        let e = "";
        if (t > 65535) {
          t -= 65536;
          e += String.fromCharCode(((t >>> 10) & 1023) | 55296);
          t = 56320 | (1023 & t);
        }
        return (e += String.fromCharCode(t));
      };
function tn(t) {
  let e =
    typeof atob === "function"
      ? atob(t)
      : typeof Buffer.from === "function"
        ? Buffer.from(t, "base64").toString("binary")
        : new Buffer(t, "base64").toString("binary");
  let r = -2 & e.length;
  let n = new Uint16Array(r / 2);
  for (let t = 0, i = 0; t < r; t += 2) {
    let r = e.charCodeAt(t);
    let a = e.charCodeAt(t + 1);
    n[i++] = r | (a << 8);
  }
  return n;
}
let ti = tn(
  "QR08ALkAAgH6AYsDNQR2BO0EPgXZBQEGLAbdBxMISQrvCmQLfQurDKQNLw4fD4YPpA+6D/IPAAAAAAAAAAAAAAAAKhBMEY8TmxUWF2EYLBkxGuAa3RsJHDscWR8YIC8jSCSIJcMl6ie3Ku8rEC0CLjoupS7kLgAIRU1hYmNmZ2xtbm9wcnN0dVQAWgBeAGUAaQBzAHcAfgCBAIQAhwCSAJoAoACsALMAbABpAGcAO4DGAMZAUAA7gCYAJkBjAHUAdABlADuAwQDBQHIiZXZlAAJhAAFpeW0AcgByAGMAO4DCAMJAEGRyAADgNdgE3XIAYQB2AGUAO4DAAMBA8CFoYZFj4SFjcgBhZAAAoFMqAAFncIsAjgBvAG4ABGFmAADgNdg43fAlbHlGdW5jdGlvbgCgYSBpAG4AZwA7gMUAxUAAAWNzpACoAHIAAOA12Jzc6SFnbgCgVCJpAGwAZABlADuAwwDDQG0AbAA7gMQAxEAABGFjZWZvcnN1xQDYANoA7QDxAPYA+QD8AAABY3LJAM8AayNzbGFzaAAAoBYidgHTANUAAKDnKmUAZAAAoAYjeQARZIABY3J0AOAA5QDrAGEidXNlAACgNSLuI291bGxpcwCgLCFhAJJjcgAA4DXYBd1wAGYAAOA12Dnd5SF2ZdhiYwDyAOoAbSJwZXEAAKBOIgAHSE9hY2RlZmhpbG9yc3UXARoBHwE6AVIBVQFiAWQBZgGCAakB6QHtAfIBYwB5ACdkUABZADuAqQCpQIABY3B5ACUBKAE1AfUhdGUGYWmg0iJ0KGFsRGlmZmVyZW50aWFsRAAAoEUhbCJleXMAAKAtIQACYWVpb0EBRAFKAU0B8iFvbgxhZABpAGwAO4DHAMdAcgBjAAhhbiJpbnQAAKAwIm8AdAAKYQABZG5ZAV0BaSJsbGEAuGB0I2VyRG90ALdg8gA5AWkAp2NyImNsZQAAAkRNUFRwAXQBeQF9AW8AdAAAoJkiaSJudXMAAKCWIuwhdXMAoJUiaSJtZXMAAKCXIm8AAAFjc4cBlAFrKndpc2VDb250b3VySW50ZWdyYWwAAKAyImUjQ3VybHkAAAFEUZwBpAFvJXVibGVRdW90ZQAAoB0gdSJvdGUAAKAZIAACbG5wdbABtgHNAdgBbwBuAGWgNyIAoHQqgAFnaXQAvAHBAcUB8iJ1ZW50AKBhIm4AdAAAoC8i7yV1ckludGVncmFsAKAuIgABZnLRAdMBAKACIe8iZHVjdACgECJuLnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbAAAoDMi7yFzcwCgLypjAHIAAOA12J7ccABDoNMiYQBwAACgTSKABURKU1phY2VmaW9zAAsCEgIVAhgCGwIsAjQCOQI9AnMCfwNvoEUh9CJyYWhkAKARKWMAeQACZGMAeQAFZGMAeQAPZIABZ3JzACECJQIoAuchZXIAoCEgcgAAoKEhaAB2AACg5CoAAWF5MAIzAvIhb24OYRRkbAB0oAciYQCUY3IAAOA12AfdAAFhZkECawIAAWNtRQJnAvIjaXRpY2FsAAJBREdUUAJUAl8CYwJjInV0ZQC0YG8AdAFZAloC2WJiJGxlQWN1dGUA3WJyImF2ZQBgYGkibGRlANxi7yFuZACgxCJmJWVyZW50aWFsRAAAoEYhcAR9AgAAAAAAAIECjgIAABoDZgAA4DXYO91EoagAhQKJAm8AdAAAoNwgcSJ1YWwAAKBQIuIhbGUAA0NETFJVVpkCqAK1Au8C/wIRA28AbgB0AG8AdQByAEkAbgB0AGUAZwByAGEA7ADEAW8AdAKvAgAAAACwAqhgbiNBcnJvdwAAoNMhAAFlb7kC0AJmAHQAgAFBUlQAwQLGAs0CciJyb3cAAKDQIekkZ2h0QXJyb3cAoNQhZQDlACsCbgBnAAABTFLWAugC5SFmdAABQVLcAuECciJyb3cAAKD4J+kkZ2h0QXJyb3cAoPon6SRnaHRBcnJvdwCg+SdpImdodAAAAUFU9gL7AnIicm93AACg0iFlAGUAAKCoInAAQQIGAwAAAAALA3Iicm93AACg0SFvJHduQXJyb3cAAKDVIWUlcnRpY2FsQmFyAACgJSJuAAADQUJMUlRhJAM2AzoDWgNxA3oDciJyb3cAAKGTIUJVLAMwA2EAcgAAoBMpcCNBcnJvdwAAoPUhciJldmUAEWPlIWZ00gJDAwAASwMAAFIDaSVnaHRWZWN0b3IAAKBQKWUkZVZlY3RvcgAAoF4p5SJjdG9yQqC9IWEAcgAAoFYpaSJnaHQA1AFiAwAAaQNlJGVWZWN0b3IAAKBfKeUiY3RvckKgwSFhAHIAAKBXKWUAZQBBoKQiciJyb3cAAKCnIXIAcgBvAPcAtAIAAWN0gwOHA3IA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YwAAoN8i4SFycnCgtiEAoD0pgKIqImJjZG9zACsVMBU6FT4VQRVyImNhcAAAoEgqAAFhdTQVNxVwAACgRipwAACgSipvAHQAAKCNInIAAKBFKgDgKiIA/gACYWxydksVURVuFXMVcgByAG2gtyEAoDwpeQCAAWV2dwBYFWUVaRVxAHACXxUAAAAAYxVyAGUA4wAXFXUA4wAZFWUAZQAAoM4iZSJkZ2UAAKDPImUAbgA7gKQApEBlI2Fycm93AAABbHJ7FX8V5SFmdACgtiFpImdodAAAoLchZQDkAG0VAAFjaYsVkRVvAG4AaQBuAPQAkwFuAHQAAKAxImwiY3R5AACgLSOACUFIYWJjZGVmaGlqbG9yc3R1d3oAuBW7Fb8V1RXgFegV+RUKFhUWHxZUFlcWZRbFFtsW7xb7FgUXChdyAPIAtAJhAHIAAKBlKQACZ2xyc8YVyhXOFdAV5yFlcgCgICDlIXRoAKA4IfIA9QxoAHagECAAoKMiawHZFd4VYSJyb3cAAKAPKWEA4wBfAgABYXnkFecV8iFvbg9hNGQAoUYhYW/tFfQVAAFnciEC8RVyAACgyiF0InNlcQAAoHcqgAFnbG0A/xUCFgUWO4CwALBAdABhALRjcCJ0eXYAAKCxKQABaXIOFhIW8yFodACgfykA4DXYId1hAHIAAAFschsWHRYAoMMhAKDCIYACYWVnc3YAKBauAjYWOhY+Fm0AAKHEIm9zLhY0Fm4AZABzoMQi9SFpdACgZiZhIm1tYQDdY2kAbgAAoPIiAKH3AGlvQxZRFmQAZQAAgfcAO29KFksW90BuI3RpbWVzAACgxyJuAPgAUBZjAHkAUmRjAG8CXhYAAAAAYhZyAG4AAKAeI28AcAAAoA0jgAJscHR1dwBuFnEWdRaSFp4W7CFhciRgZgAA4DXYVd0AotkCZW1wc30WhBaJFo0WcQBkoFAibwB0AACgUSJpIm51cwAAoDgi7CF1cwCgFCLxInVhcmUAoKEiYgBsAGUAYgBhAHIAdwBlAGQAZwDlANcAbgCAAWFkaAClFqoWtBZyAHIAbwD3APUMbwB3AG4AYQByAHIAbwB3APMA8xVhI3Jwb29uAAABbHK8FsAWZQBmAPQAHBZpAGcAaAD0AB4WYgHJFs8WawBhAHIAbwD3AJILbwLUFgAAAADYFnIAbgAAoB8jbwBwAACgDCOAAWNvdADhFukW7BYAAXJ55RboFgDgNdi53FVkbAAAoPYp8iFvaxFhAAFkcvMW9xZvAHQAAKDxImkA5qC/JVsSAAFhaP8WAhdyAPIANQNhAPIA1wvhIm5nbGUAoKYpAAFjaQ4XEBd5AF9k5yJyYXJyAKD/JwAJRGFjZGVmZ2xtbm9wcXJzdHV4MRc4F0YXWxcyBF4XaRd5F40XrBe0F78X2RcVGCEYLRg1GEAYAAFEbzUXgRZvAPQA+BUAAWNzPBdCF3UAdABlADuA6QDpQPQhZXIAoG4qAAJhaW95TRdQF1YXWhfyIW9uG2FyAGOgViI7gOoA6kDsIW9uAKBVIk1kbwB0ABdhAAFEcmIXZhdvAHQAAKBSIgDgNdgi3XKhmipuF3QXYQB2AGUAO4DoAOhAZKCWKm8AdAAAoJgqgKGZKmlscwCAF4UXhxfuInRlcnMAoOcjAKATIWSglSpvAHQAAKCXKoABYXBzAJMXlheiF2MAcgATYXQAeQBzogUinxcAAAAAoRdlAHQAAKAFInAAMaADIDMBqRerFwCgBCAAoAUgAAFnc7AXsRdLYXAAAKACIAABZ3C4F7sXbwBuABlhZgAA4DXYVt2AAWFscwDFF8sXzxdyAHOg1SJsAACg4yl1AHMAAKBxKmkAAKG1A2x21RfYF28AbgC1Y/VjAAJjc3V24BfoF/0XEBgAAWlv5BdWF3IAYwAAoFYiaQLuFwAAAADwF+0ADQThIW50AAFnbPUX+Rd0AHIAAKCWKuUhc3MAoJUqgAFhZWkAAxgGGAoYbABzAD1gcwB0AACgXyJ2AESgYSJEAACgeCrwImFyc2wAoOUpAAFEYRkYHRhvAHQAAKBTInIAcgAAoHEpgAFjZGkAJxgqGO0XcgAAoC8hbwD0AIwCAAFhaDEYMhi3YzuA8ADwQAABbXI5GD0YbAA7gOsA60BvAACgrCCAAWNpcABGGEgYSxhsACFgcwD0ACwEAAFlb08YVxhjAHQAYQB0AGkAbwDuABoEbgBlAG4AdABpAGEAbADlADME4Ql1GAAAgRgAAIMYiBgAAAAAoRilGAAAqhgAALsYvhjRGAAA1xgnGWwAbABpAG4AZwBkAG8AdABzAGUA8QBlF3kARGRtImFsZQAAoEAmgAFpbHIAjRiRGJ0Y7CFpZwCgA/tpApcYAAAAAJoYZwAAoAD7aQBnAACgBPsA4DXYI93sIWlnAKAB++whaWcA4GYAagCAAWFsdACvGLIYthh0AACgbSZpAGcAAKAC+24AcwAAoLElbwBmAJJh8AHCGAAAxhhmAADgNdhX3QABYWvJGMwYbADsAGsEdqDUIgCg2SphI3J0aW50AACgDSoAAWFv2hgiGQABY3PeGB8ZsQPnGP0YBRkSGRUZAAAdGbID7xjyGPQY9xj5GAAA+xg7gL0AvUAAoFMhO4C8ALxAAKBVIQCgWSEAoFshswEBGQAAAxkAoFQhAKBWIbQCCxkOGQAAAAAQGTuAvgC+QACgVyEAoFwhNQAAoFghtgEZGQAAGxkAoFohAKBdITgAAKBeIWwAAKBEIHcAbgAAoCIjYwByAADgNdi73IAIRWFiY2RlZmdpamxub3JzdHYARhlKGVoZXhlmGWkZkhmWGZkZnRmgGa0ZxhnLGc8Z4BkjGmygZyIAoIwqgAFjbXAAUBlTGVgZ9SF0ZfVhbQBhAOSgswM6FgCghipyImV2ZQAfYQABaXliGWUZcgBjAB1hM2RvAHQAIWGAoWUibHFzAMYEcBl6GfGhZSLOBAAAdhlsAGEAbgD0AN8EgKF+KmNkbACBGYQZjBljAACgqSpvAHQAb6CAKmyggioAoIQqZeDbIgD+cwAAoJQqcgAA4DXYJN3noGsirATtIWVsAKA3IWMAeQBTZIChdyJFYWoApxmpGasZAKCSKgCgpSoAoKQqAAJFYWVztBm2Gb0ZwhkAoGkicABwoIoq8iFveACgiipxoIgq8aCIKrUZaQBtAACg5yJwAGYAAOA12FjdYQB2AOUAYwIAAWNp0xnWGXIAAKAKIW0AAKFzImVs3BneGQCgjioAoJAqAIM+ADtjZGxxco0E6xn0GfgZ/BkBGgABY2nvGfEZAKCnKnIAAKB6Km8AdAAAoNci0CFhcgCglSl1ImVzdAAAoHwqgAJhZGVscwAKGvQZFhrVBCAa8AEPGgAAFBpwAHIAbwD4AFkZcgAAoHgpcQAAAWxxxAQbGmwAZQBzAPMASRlpAO0A5AQAAWVuJxouGnIjdG5lcXEAAOBpIgD+xQAsGgAFQWFiY2Vma29zeUAaQxpmGmoabRqDGocalhrCGtMacgDyAMwCAAJpbG1yShpOGlAaVBpyAHMA8ABxD2YAvWBpAGwA9AASBQABZHJYGlsaYwB5AEpkAKGUIWN3YBpkGmkAcgAAoEgpAKCtIWEAcgAAoA8h6SFyYyVhgAFhbHIAcxp7Gn8a8iF0c3WgZSZpAHQAAKBlJuwhaXAAoCYg4yFvbgCguSJyAADgNdgl3XMAAAFld4wakRphInJvdwAAoCUpYSJyb3cAAKAmKYACYW1vcHIAnxqjGqcauhq+GnIAcgAAoP8h9CFodACgOyJrAAABbHKsGrMaZSRmdGFycm93AACgqSHpJGdodGFycm93AKCqIWYAAOA12Fnd4iFhcgCgFSCAAWNsdADIGswa0BpyAADgNdi93GEAcwDoAGka8iFvaydhAAFicNca2xr1IWxsAKBDIOghZW4AoBAg4Qr2GgAA/RoAAAgbExsaGwAAIRs7GwAAAAA+G2IbmRuVG6sbAACyG80b0htjAHUAdABlADuA7QDtQAChYyBpeQEbBhtyAGMAO4DuAO5AOGQAAWN4CxsNG3kANWRjAGwAO4ChAKFAAAFmcssCFhsA4DXYJt1yAGEAdgBlADuA7ADsQIChSCFpbm8AJxsyGzYbAAFpbisbLxtuAHQAAKAMKnQAAKAtIuYhaW4AoNwpdABhAACgKSHsIWlnM2GAAWFvcABDG1sbXhuAAWNndABJG0sbWRtyACthgAFlbHAAcQVRG1UbaQBuAOUAyAVhAHIA9AByBWgAMWFmAACgtyJlAGQAtWEAoggiY2ZvdGkbbRt1G3kb4SFyZQCgBSFpAG4AdKAeImkAZQAAoN0pZABvAPQAWxsAoisiY2VscIEbhRuPG5QbYQBsAACguiIAAWdyiRuNG2UAcgDzACMQ4wCCG2EicmhrAACgFyryIW9kAKA8KgACY2dwdJ8boRukG6gbeQBRZG8AbgAvYWYAAOA12FrdYQC5Y3UAZQBzAHQAO4C/AL9AAAFjabUbuRtyAADgNdi+3G4AAKIIIkVkc3bCG8QbyBvQAwCg+SJvAHQAAKD1Inag9CIAoPMiaaBiIOwhZGUpYesB1hsAANkbYwB5AFZkbAA7gO8A70AAA2NmbW9zdeYb7hvyG/Ub+hsFHAABaXnqG+0bcgBjADVhOWRyAADgNdgn3eEhdGg3YnAAZgAA4DXYW93jAf8bAAADHHIAAOA12L/c8iFjeVhk6yFjeVRkAARhY2ZnaGpvcxUcGhwiHCYcKhwtHDAcNRzwIXBhdqC6A/BjAAFleR4cIRzkIWls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ZmdobG1vcHJzdHV3CiwNLBEsHSwnLDEsQCxLLFIsYix6LIQsjyzLLOgs7Sz/LAotcgDyAAkDYQByAACgYykAAWNyFSwbLHUAdABlADuA+gD6QPIACQ1yAOMBIywAACUseQBeZHYAZQBtYQABaXkrLDAscgBjADuA+wD7QENkgAFhYmgANyw6LD0scgDyANEO7CFhY3FhYQDyAOAOAAFpckQsSCzzIWh0AKB+KQDgNdgy3XIAYQB2AGUAO4D5APlAYQFWLF8scgAAAWxyWixcLACgvyEAoL4hbABrAACggCUAAWN0Zix2LG8CbCwAAAAAcyxyAG4AZaAcI3IAAKAcI28AcAAAoA8jcgBpAACg+CUAAWFsfiyBLGMAcgBrYTuAqACoQAABZ3CILIssbwBuAHNhZgAA4DXYZt0AA2FkaGxzdZksniynLLgsuyzFLHIAcgBvAPcACQ1vAHcAbgBhAHIAcgBvAPcA2A5hI3Jwb29uAAABbHKvLLMsZQBmAPQAWyxpAGcAaAD0AF0sdQDzAKYOaQAAocUDaGzBLMIs0mNvAG4AxWPwI2Fycm93cwCgyCGAAWNpdADRLOEs5CxvAtcsAAAAAN4scgBuAGWgHSNyAACgHSNvAHAAAKAOI24AZwBvYXIAaQAAoPklYwByAADgNdjK3IABZGlyAPMs9yz6LG8AdAAAoPAi7CFkZWlhaQBmoLUlAKC0JQABYW0DLQYtcgDyAMosbAA7gPwA/EDhIm5nbGUAoKcpgAdBQkRhY2RlZmxub3Byc3oAJy0qLTAtNC2bLZ0toS2/LcMtxy3TLdgt3C3gLfwtcgDyABADYQByAHag6CoAoOkqYQBzAOgA/gIAAW5yOC08LechcnQAoJwpgANla25wcnN0AJkpSC1NLVQtXi1iLYItYQBwAHAA4QAaHG8AdABoAGkAbgDnAKEXgAFoaXIAoSmzJFotbwBwAPQAdCVooJUh7wD4JgABaXVmLWotZwBtAOEAuygAAWJwbi14LXMjZXRuZXEAceCKIgD+AODLKgD+cyNldG5lcQBx4IsiAP4A4MwqAP4AAWhyhi2KLWUAdADhABIraSNhbmdsZQAAAWxyki2WLeUhZnQAoLIiaSJnaHQAAKCzInkAMmThIXNoAKCiIoABZWxyAKcttC24LWKiKCKuLQAAAACyLWEAcgAAoLsicQAAoFoi7CFpcACg7iIAAWJ0vC1eD2EA8gBfD3IAAOA12DPddAByAOkAlS1zAHUAAAFicM0t0C0A4IIi0iAA4IMi0iBwAGYAAOA12GfdcgBvAPAAWQt0AHIA6QCaLQABY3XkLegtcgAA4DXYy9wAAWJw7C30LW4AAAFFZXUt8S0A4IoiAP5uAAABRWV/LfktAOCLIgD+6SJnemFnAKCaKYADY2Vmb3BycwANLhAuJS4pLiMuLi40LukhcmN1YQABZGkULiEuAAFiZxguHC5hAHIAAKBfKmUAcaAnIgCgWSLlIXJwAKAYIXIAAOA12DTdcABmAADgNdho3WWgQCJhAHQA6ABqD2MAcgAA4DXYzNzjCuQRUC4AAFQuAABYLmIuAAAAAGMubS5wLnQuAAAAAIguki4AAJouJxIqEnQAcgDpAB0ScgAA4DXYNd0AAUFhWy5eLnIA8gDnAnIA8gCTB75jAAFBYWYuaS5yAPIA4AJyAPIAjAdhAPAAeh5pAHMAAKD7IoABZHB0APgReS6DLgABZmx9LoAuAOA12GnddQDzAP8RaQBtAOUABBIAAUFhiy6OLnIA8gDuAnIA8gCaBwABY3GVLgoScgAA4DXYzdwAAXB0nS6hLmwAdQDzACUScgDpACASAARhY2VmaW9zdbEuvC7ELsguzC7PLtQu2S5jAAABdXm2LrsudABlADuA/QD9QE9kAAFpecAuwy5yAGMAd2FLZG4AO4ClAKVAcgAA4DXYNt1jAHkAV2RwAGYAAOA12GrdYwByAADgNdjO3AABY23dLt8ueQBOZGwAO4D/AP9AAAVhY2RlZmhpb3N38y73Lv8uAi8MLxAvEy8YLx0vIi9jInV0ZQB6YQABYXn7Lv4u8iFvbn5hN2RvAHQAfGEAAWV0Bi8KL3QAcgDmAB8QYQC2Y3IAAOA12DfdYwB5ADZk5yJyYXJyAKDdIXAAZgAA4DXYa91jAHIAAOA12M/cAAFqbiYvKC8AoA0gagAAoAwg",
);
let ta = tn("AAJhZ2xxBwARABMAFQBtAg0AAAAAAA8AcAAmYG8AcwAnYHQAPmB0ADxg9SFvdCJg");
function to(t) {
  return t >= m.ZERO && t <= m.NINE;
}
n = p || (p = {});
n[(n.VALUE_LENGTH = 49152)] = "VALUE_LENGTH";
n[(n.FLAG13 = 8192)] = "FLAG13";
n[(n.BRANCH_LENGTH = 8064)] = "BRANCH_LENGTH";
n[(n.JUMP_TABLE = 127)] = "JUMP_TABLE";
i = m || (m = {});
i[(i.NUM = 35)] = "NUM";
i[(i.SEMI = 59)] = "SEMI";
i[(i.EQUALS = 61)] = "EQUALS";
i[(i.ZERO = 48)] = "ZERO";
i[(i.NINE = 57)] = "NINE";
i[(i.LOWER_A = 97)] = "LOWER_A";
i[(i.LOWER_F = 102)] = "LOWER_F";
i[(i.LOWER_X = 120)] = "LOWER_X";
i[(i.LOWER_Z = 122)] = "LOWER_Z";
i[(i.UPPER_A = 65)] = "UPPER_A";
i[(i.UPPER_F = 70)] = "UPPER_F";
i[(i.UPPER_Z = 90)] = "UPPER_Z";
a = y || (y = {});
a[(a.EntityStart = 0)] = "EntityStart";
a[(a.NumericStart = 1)] = "NumericStart";
a[(a.NumericDecimal = 2)] = "NumericDecimal";
a[(a.NumericHex = 3)] = "NumericHex";
a[(a.NamedEntity = 4)] = "NamedEntity";
o = b || (b = {});
o[(o.Legacy = 0)] = "Legacy";
o[(o.Strict = 1)] = "Strict";
o[(o.Attribute = 2)] = "Attribute";
class ts {
  constructor(t, e, r) {
    this.decodeTree = t;
    this.emitCodePoint = e;
    this.errors = r;
    this.state = y.EntityStart;
    this.consumed = 1;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.decodeMode = b.Strict;
    this.runConsumed = 0;
  }
  startEntity(t) {
    this.decodeMode = t;
    this.state = y.EntityStart;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.consumed = 1;
    this.runConsumed = 0;
  }
  write(t, e) {
    switch (this.state) {
      case y.EntityStart:
        if (t.charCodeAt(e) === m.NUM) {
          this.state = y.NumericStart;
          this.consumed += 1;
          return this.stateNumericStart(t, e + 1);
        }
        this.state = y.NamedEntity;
        return this.stateNamedEntity(t, e);
      case y.NumericStart:
        return this.stateNumericStart(t, e);
      case y.NumericDecimal:
        return this.stateNumericDecimal(t, e);
      case y.NumericHex:
        return this.stateNumericHex(t, e);
      case y.NamedEntity:
        return this.stateNamedEntity(t, e);
    }
  }
  stateNumericStart(t, e) {
    if (e >= t.length) {
      return -1;
    }
    if ((32 | t.charCodeAt(e)) === m.LOWER_X) {
      this.state = y.NumericHex;
      this.consumed += 1;
      return this.stateNumericHex(t, e + 1);
    }
    this.state = y.NumericDecimal;
    return this.stateNumericDecimal(t, e);
  }
  stateNumericHex(t, e) {
    while (e < t.length) {
      let r;
      let n = t.charCodeAt(e);
      if (
        !to(n) &&
        (!((r = n) >= m.UPPER_A) || !(r <= m.UPPER_F)) &&
        (!(r >= m.LOWER_A) || !(r <= m.LOWER_F))
      ) {
        return this.emitNumericEntity(n, 3);
      }
      {
        let t = n <= m.NINE ? n - m.ZERO : (32 | n) - m.LOWER_A + 10;
        this.result = 16 * this.result + t;
        this.consumed++;
        e++;
      }
    }
    return -1;
  }
  stateNumericDecimal(t, e) {
    while (e < t.length) {
      let r = t.charCodeAt(e);
      if (!to(r)) {
        return this.emitNumericEntity(r, 2);
      }
      this.result = 10 * this.result + (r - m.ZERO);
      this.consumed++;
      e++;
    }
    return -1;
  }
  emitNumericEntity(t, e) {
    let r;
    let n;
    let i;
    if (this.consumed <= e) {
      if ((r = this.errors) != null) {
        r.absenceOfDigitsInNumericCharacterReference(this.consumed);
      }
      return 0;
    }
    if (t === m.SEMI) {
      this.consumed += 1;
    } else if (this.decodeMode === b.Strict) {
      return 0;
    }
    this.emitCodePoint(
      ((n = this.result) >= 55296 && n <= 57343) || n > 1114111
        ? 65533
        : (i = tt.get(n)) != null
          ? i
          : n,
      this.consumed,
    );
    if (this.errors) {
      if (t !== m.SEMI) {
        this.errors.missingSemicolonAfterCharacterReference();
      }
      this.errors.validateNumericCharacterReference(this.result);
    }
    return this.consumed;
  }
  stateNamedEntity(t, e) {
    let { decodeTree } = this;
    let n = decodeTree[this.treeIndex];
    let i = (n & p.VALUE_LENGTH) >> 14;
    while (e < t.length) {
      if (i === 0 && (n & p.FLAG13) != 0) {
        let a = (n & p.BRANCH_LENGTH) >> 7;
        if (this.runConsumed === 0) {
          let r = n & p.JUMP_TABLE;
          if (t.charCodeAt(e) !== r) {
            if (this.result === 0) {
              return 0;
            }
            return this.emitNotTerminatedNamedEntity();
          }
          e++;
          this.excess++;
          this.runConsumed++;
        }
        while (this.runConsumed < a) {
          if (e >= t.length) {
            return -1;
          }
          let n = this.runConsumed - 1;
          let i = decodeTree[this.treeIndex + 1 + (n >> 1)];
          let a = n % 2 == 0 ? 255 & i : (i >> 8) & 255;
          if (t.charCodeAt(e) !== a) {
            this.runConsumed = 0;
            if (this.result === 0) {
              return 0;
            }
            return this.emitNotTerminatedNamedEntity();
          }
          e++;
          this.excess++;
          this.runConsumed++;
        }
        this.runConsumed = 0;
        this.treeIndex += 1 + (a >> 1);
        i = ((n = decodeTree[this.treeIndex]) & p.VALUE_LENGTH) >> 14;
      }
      if (e >= t.length) {
        break;
      }
      let a = t.charCodeAt(e);
      if (a === m.SEMI && i !== 0 && (n & p.FLAG13) != 0) {
        return this.emitNamedEntityData(
          this.treeIndex,
          i,
          this.consumed + this.excess,
        );
      }
      this.treeIndex = ((t, e, r, n) => {
        let i = (e & p.BRANCH_LENGTH) >> 7;
        let a = e & p.JUMP_TABLE;
        if (i === 0) {
          if (a !== 0 && n === a) {
            return r;
          }
          return -1;
        }
        if (a) {
          let e = n - a;
          if (e < 0 || e >= i) {
            return -1;
          }
          return t[r + e] - 1;
        }
        let o = (i + 1) >> 1;
        let s = 0;
        let A = i - 1;
        while (s <= A) {
          let e = (s + A) >>> 1;
          let i = (t[r + (e >> 1)] >> ((1 & e) * 8)) & 255;
          if (i < n) {
            s = e + 1;
          } else {
            if (!(i > n)) {
              return t[r + o + e];
            }
            A = e - 1;
          }
        }
        return -1;
      })(decodeTree, n, this.treeIndex + Math.max(1, i), a);
      if (this.treeIndex < 0) {
        if (
          this.result === 0 ||
          (this.decodeMode === b.Attribute &&
            (i === 0 ||
              ((t) => {
                let e;
                return (
                  t === m.EQUALS ||
                  ((e = t) >= m.UPPER_A && e <= m.UPPER_Z) ||
                  (e >= m.LOWER_A && e <= m.LOWER_Z) ||
                  to(e)
                );
              })(a)))
        ) {
          return 0;
        }
        return this.emitNotTerminatedNamedEntity();
      }
      if (
        (i = ((n = decodeTree[this.treeIndex]) & p.VALUE_LENGTH) >> 14) != 0
      ) {
        if (a === m.SEMI) {
          return this.emitNamedEntityData(
            this.treeIndex,
            i,
            this.consumed + this.excess,
          );
        }
        if (this.decodeMode !== b.Strict && (n & p.FLAG13) == 0) {
          this.result = this.treeIndex;
          this.consumed += this.excess;
          this.excess = 0;
        }
      }
      e++;
      this.excess++;
    }
    return -1;
  }
  emitNotTerminatedNamedEntity() {
    let t;
    let { result, decodeTree } = this;
    let n = (decodeTree[result] & p.VALUE_LENGTH) >> 14;
    this.emitNamedEntityData(result, n, this.consumed);
    if ((t = this.errors) != null) {
      t.missingSemicolonAfterCharacterReference();
    }
    return this.consumed;
  }
  emitNamedEntityData(t, e, r) {
    let { decodeTree } = this;
    this.emitCodePoint(
      e === 1
        ? decodeTree[t] & ~(p.VALUE_LENGTH | p.FLAG13)
        : decodeTree[t + 1],
      r,
    );
    if (e === 3) {
      this.emitCodePoint(decodeTree[t + 2], r);
    }
    return r;
  }
  end() {
    let t;
    switch (this.state) {
      case y.NamedEntity:
        if (
          this.result !== 0 &&
          (this.decodeMode !== b.Attribute || this.result === this.treeIndex)
        ) {
          return this.emitNotTerminatedNamedEntity();
        }
        return 0;
      case y.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case y.NumericHex:
        return this.emitNumericEntity(0, 3);
      case y.NumericStart:
        if ((t = this.errors) != null) {
          t.absenceOfDigitsInNumericCharacterReference(this.consumed);
        }
        return 0;
      case y.EntityStart:
        return 0;
    }
  }
}
function tA(t) {
  return (
    t === v.Space ||
    t === v.NewLine ||
    t === v.Tab ||
    t === v.FormFeed ||
    t === v.CarriageReturn
  );
}
function tc(t) {
  return t === v.Slash || t === v.Gt || tA(t);
}
s = v || (v = {});
s[(s.Tab = 9)] = "Tab";
s[(s.NewLine = 10)] = "NewLine";
s[(s.FormFeed = 12)] = "FormFeed";
s[(s.CarriageReturn = 13)] = "CarriageReturn";
s[(s.Space = 32)] = "Space";
s[(s.ExclamationMark = 33)] = "ExclamationMark";
s[(s.Number = 35)] = "Number";
s[(s.Amp = 38)] = "Amp";
s[(s.SingleQuote = 39)] = "SingleQuote";
s[(s.DoubleQuote = 34)] = "DoubleQuote";
s[(s.Dash = 45)] = "Dash";
s[(s.Slash = 47)] = "Slash";
s[(s.Zero = 48)] = "Zero";
s[(s.Nine = 57)] = "Nine";
s[(s.Semi = 59)] = "Semi";
s[(s.Lt = 60)] = "Lt";
s[(s.Eq = 61)] = "Eq";
s[(s.Gt = 62)] = "Gt";
s[(s.Questionmark = 63)] = "Questionmark";
s[(s.UpperA = 65)] = "UpperA";
s[(s.LowerA = 97)] = "LowerA";
s[(s.UpperF = 70)] = "UpperF";
s[(s.LowerF = 102)] = "LowerF";
s[(s.UpperZ = 90)] = "UpperZ";
s[(s.LowerZ = 122)] = "LowerZ";
s[(s.LowerX = 120)] = "LowerX";
s[(s.OpeningSquareBracket = 91)] = "OpeningSquareBracket";
A = I || (I = {});
A[(A.Text = 1)] = "Text";
A[(A.BeforeTagName = 2)] = "BeforeTagName";
A[(A.InTagName = 3)] = "InTagName";
A[(A.InSelfClosingTag = 4)] = "InSelfClosingTag";
A[(A.BeforeClosingTagName = 5)] = "BeforeClosingTagName";
A[(A.InClosingTagName = 6)] = "InClosingTagName";
A[(A.AfterClosingTagName = 7)] = "AfterClosingTagName";
A[(A.BeforeAttributeName = 8)] = "BeforeAttributeName";
A[(A.InAttributeName = 9)] = "InAttributeName";
A[(A.AfterAttributeName = 10)] = "AfterAttributeName";
A[(A.BeforeAttributeValue = 11)] = "BeforeAttributeValue";
A[(A.InAttributeValueDq = 12)] = "InAttributeValueDq";
A[(A.InAttributeValueSq = 13)] = "InAttributeValueSq";
A[(A.InAttributeValueNq = 14)] = "InAttributeValueNq";
A[(A.BeforeDeclaration = 15)] = "BeforeDeclaration";
A[(A.InDeclaration = 16)] = "InDeclaration";
A[(A.InProcessingInstruction = 17)] = "InProcessingInstruction";
A[(A.BeforeComment = 18)] = "BeforeComment";
A[(A.CDATASequence = 19)] = "CDATASequence";
A[(A.InSpecialComment = 20)] = "InSpecialComment";
A[(A.InCommentLike = 21)] = "InCommentLike";
A[(A.BeforeSpecialS = 22)] = "BeforeSpecialS";
A[(A.BeforeSpecialT = 23)] = "BeforeSpecialT";
A[(A.SpecialStartSequence = 24)] = "SpecialStartSequence";
A[(A.InSpecialTag = 25)] = "InSpecialTag";
A[(A.InEntity = 26)] = "InEntity";
c = w || (w = {});
c[(c.NoValue = 0)] = "NoValue";
c[(c.Unquoted = 1)] = "Unquoted";
c[(c.Single = 2)] = "Single";
c[(c.Double = 3)] = "Double";
let tu = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  CdataEnd: new Uint8Array([93, 93, 62]),
  CommentEnd: new Uint8Array([45, 45, 62]),
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]),
  XmpEnd: new Uint8Array([60, 47, 120, 109, 112]),
};
class tl {
  constructor({ xmlMode = false, decodeEntities = true }, r) {
    this.cbs = r;
    this.state = I.Text;
    this.buffer = "";
    this.sectionStart = 0;
    this.index = 0;
    this.entityStart = 0;
    this.baseState = I.Text;
    this.isSpecial = false;
    this.running = true;
    this.offset = 0;
    this.currentSequence = undefined;
    this.sequenceIndex = 0;
    this.xmlMode = xmlMode;
    this.decodeEntities = decodeEntities;
    this.entityDecoder = new ts(xmlMode ? ta : ti, (t, e) =>
      this.emitCodePoint(t, e),
    );
  }
  reset() {
    this.state = I.Text;
    this.buffer = "";
    this.sectionStart = 0;
    this.index = 0;
    this.baseState = I.Text;
    this.currentSequence = undefined;
    this.running = true;
    this.offset = 0;
  }
  write(t) {
    this.offset += this.buffer.length;
    this.buffer = t;
    this.parse();
  }
  end() {
    if (this.running) {
      this.finish();
    }
  }
  pause() {
    this.running = false;
  }
  resume() {
    this.running = true;
    if (this.index < this.buffer.length + this.offset) {
      this.parse();
    }
  }
  stateText(t) {
    if (t === v.Lt || (!this.decodeEntities && this.fastForwardTo(v.Lt))) {
      if (this.index > this.sectionStart) {
        this.cbs.ontext(this.sectionStart, this.index);
      }
      this.state = I.BeforeTagName;
      this.sectionStart = this.index;
    } else if (this.decodeEntities && t === v.Amp) {
      this.startEntity();
    }
  }
  stateSpecialStartSequence(t) {
    let e = this.sequenceIndex === this.currentSequence.length;
    if (e ? tc(t) : (32 | t) === this.currentSequence[this.sequenceIndex]) {
      if (!e) {
        return void this.sequenceIndex++;
      }
    } else {
      this.isSpecial = false;
    }
    this.sequenceIndex = 0;
    this.state = I.InTagName;
    this.stateInTagName(t);
  }
  stateInSpecialTag(t) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (t === v.Gt || tA(t)) {
        let e = this.index - this.currentSequence.length;
        if (this.sectionStart < e) {
          let t = this.index;
          this.index = e;
          this.cbs.ontext(this.sectionStart, e);
          this.index = t;
        }
        this.isSpecial = false;
        this.sectionStart = e + 2;
        this.stateInClosingTagName(t);
        return;
      }
      this.sequenceIndex = 0;
    }
    if ((32 | t) === this.currentSequence[this.sequenceIndex]) {
      this.sequenceIndex += 1;
    } else if (this.sequenceIndex === 0) {
      if (this.currentSequence === tu.TitleEnd) {
        if (this.decodeEntities && t === v.Amp) {
          this.startEntity();
        }
      } else if (this.fastForwardTo(v.Lt)) {
        this.sequenceIndex = 1;
      }
    } else {
      this.sequenceIndex = Number(t === v.Lt);
    }
  }
  stateCDATASequence(t) {
    if (t === tu.Cdata[this.sequenceIndex]) {
      if (++this.sequenceIndex === tu.Cdata.length) {
        this.state = I.InCommentLike;
        this.currentSequence = tu.CdataEnd;
        this.sequenceIndex = 0;
        this.sectionStart = this.index + 1;
      }
    } else {
      this.sequenceIndex = 0;
      this.state = I.InDeclaration;
      this.stateInDeclaration(t);
    }
  }
  fastForwardTo(t) {
    while (++this.index < this.buffer.length + this.offset) {
      if (this.buffer.charCodeAt(this.index - this.offset) === t) {
        return true;
      }
    }
    this.index = this.buffer.length + this.offset - 1;
    return false;
  }
  stateInCommentLike(t) {
    if (t === this.currentSequence[this.sequenceIndex]) {
      if (++this.sequenceIndex === this.currentSequence.length) {
        if (this.currentSequence === tu.CdataEnd) {
          this.cbs.oncdata(this.sectionStart, this.index, 2);
        } else {
          this.cbs.oncomment(this.sectionStart, this.index, 2);
        }
        this.sequenceIndex = 0;
        this.sectionStart = this.index + 1;
        this.state = I.Text;
      }
    } else if (this.sequenceIndex === 0) {
      if (this.fastForwardTo(this.currentSequence[0])) {
        this.sequenceIndex = 1;
      }
    } else if (t !== this.currentSequence[this.sequenceIndex - 1]) {
      this.sequenceIndex = 0;
    }
  }
  isTagStartChar(t) {
    if (this.xmlMode) {
      return !tc(t);
    }
    return (t >= v.LowerA && t <= v.LowerZ) || (t >= v.UpperA && t <= v.UpperZ);
  }
  startSpecial(t, e) {
    this.isSpecial = true;
    this.currentSequence = t;
    this.sequenceIndex = e;
    this.state = I.SpecialStartSequence;
  }
  stateBeforeTagName(t) {
    if (t === v.ExclamationMark) {
      this.state = I.BeforeDeclaration;
      this.sectionStart = this.index + 1;
    } else if (t === v.Questionmark) {
      this.state = I.InProcessingInstruction;
      this.sectionStart = this.index + 1;
    } else if (this.isTagStartChar(t)) {
      let e = 32 | t;
      this.sectionStart = this.index;
      if (this.xmlMode) {
        this.state = I.InTagName;
      } else if (e === tu.ScriptEnd[2]) {
        this.state = I.BeforeSpecialS;
      } else if (e === tu.TitleEnd[2] || e === tu.XmpEnd[2]) {
        this.state = I.BeforeSpecialT;
      } else {
        this.state = I.InTagName;
      }
    } else {
      if (t === v.Slash) {
        this.state = I.BeforeClosingTagName;
      } else {
        this.state = I.Text;
        this.stateText(t);
      }
    }
  }
  stateInTagName(t) {
    if (tc(t)) {
      this.cbs.onopentagname(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.state = I.BeforeAttributeName;
      this.stateBeforeAttributeName(t);
    }
  }
  stateBeforeClosingTagName(t) {
    if (!tA(t)) {
      if (t === v.Gt) {
        this.state = I.Text;
      } else {
        this.state = this.isTagStartChar(t)
          ? I.InClosingTagName
          : I.InSpecialComment;
        this.sectionStart = this.index;
      }
    }
  }
  stateInClosingTagName(t) {
    if (t === v.Gt || tA(t)) {
      this.cbs.onclosetag(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.state = I.AfterClosingTagName;
      this.stateAfterClosingTagName(t);
    }
  }
  stateAfterClosingTagName(t) {
    if (t === v.Gt || this.fastForwardTo(v.Gt)) {
      this.state = I.Text;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeAttributeName(t) {
    if (t === v.Gt) {
      this.cbs.onopentagend(this.index);
      if (this.isSpecial) {
        this.state = I.InSpecialTag;
        this.sequenceIndex = 0;
      } else {
        this.state = I.Text;
      }
      this.sectionStart = this.index + 1;
    } else if (t === v.Slash) {
      this.state = I.InSelfClosingTag;
    } else if (!tA(t)) {
      this.state = I.InAttributeName;
      this.sectionStart = this.index;
    }
  }
  stateInSelfClosingTag(t) {
    if (t === v.Gt) {
      this.cbs.onselfclosingtag(this.index);
      this.state = I.Text;
      this.sectionStart = this.index + 1;
      this.isSpecial = false;
    } else if (!tA(t)) {
      this.state = I.BeforeAttributeName;
      this.stateBeforeAttributeName(t);
    }
  }
  stateInAttributeName(t) {
    if (t === v.Eq || tc(t)) {
      this.cbs.onattribname(this.sectionStart, this.index);
      this.sectionStart = this.index;
      this.state = I.AfterAttributeName;
      this.stateAfterAttributeName(t);
    }
  }
  stateAfterAttributeName(t) {
    if (t === v.Eq) {
      this.state = I.BeforeAttributeValue;
    } else if (t === v.Slash || t === v.Gt) {
      this.cbs.onattribend(w.NoValue, this.sectionStart);
      this.sectionStart = -1;
      this.state = I.BeforeAttributeName;
      this.stateBeforeAttributeName(t);
    } else if (!tA(t)) {
      this.cbs.onattribend(w.NoValue, this.sectionStart);
      this.state = I.InAttributeName;
      this.sectionStart = this.index;
    }
  }
  stateBeforeAttributeValue(t) {
    if (t === v.DoubleQuote) {
      this.state = I.InAttributeValueDq;
      this.sectionStart = this.index + 1;
    } else if (t === v.SingleQuote) {
      this.state = I.InAttributeValueSq;
      this.sectionStart = this.index + 1;
    } else if (!tA(t)) {
      this.sectionStart = this.index;
      this.state = I.InAttributeValueNq;
      this.stateInAttributeValueNoQuotes(t);
    }
  }
  handleInAttributeValue(t, e) {
    if (t === e || (!this.decodeEntities && this.fastForwardTo(e))) {
      this.cbs.onattribdata(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.cbs.onattribend(
        e === v.DoubleQuote ? w.Double : w.Single,
        this.index + 1,
      );
      this.state = I.BeforeAttributeName;
    } else if (this.decodeEntities && t === v.Amp) {
      this.startEntity();
    }
  }
  stateInAttributeValueDoubleQuotes(t) {
    this.handleInAttributeValue(t, v.DoubleQuote);
  }
  stateInAttributeValueSingleQuotes(t) {
    this.handleInAttributeValue(t, v.SingleQuote);
  }
  stateInAttributeValueNoQuotes(t) {
    if (tA(t) || t === v.Gt) {
      this.cbs.onattribdata(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.cbs.onattribend(w.Unquoted, this.index);
      this.state = I.BeforeAttributeName;
      this.stateBeforeAttributeName(t);
    } else if (this.decodeEntities && t === v.Amp) {
      this.startEntity();
    }
  }
  stateBeforeDeclaration(t) {
    if (t === v.OpeningSquareBracket) {
      this.state = I.CDATASequence;
      this.sequenceIndex = 0;
    } else {
      this.state = t === v.Dash ? I.BeforeComment : I.InDeclaration;
    }
  }
  stateInDeclaration(t) {
    if (t === v.Gt || this.fastForwardTo(v.Gt)) {
      this.cbs.ondeclaration(this.sectionStart, this.index);
      this.state = I.Text;
      this.sectionStart = this.index + 1;
    }
  }
  stateInProcessingInstruction(t) {
    if (t === v.Gt || this.fastForwardTo(v.Gt)) {
      this.cbs.onprocessinginstruction(this.sectionStart, this.index);
      this.state = I.Text;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeComment(t) {
    if (t === v.Dash) {
      this.state = I.InCommentLike;
      this.currentSequence = tu.CommentEnd;
      this.sequenceIndex = 2;
      this.sectionStart = this.index + 1;
    } else {
      this.state = I.InDeclaration;
    }
  }
  stateInSpecialComment(t) {
    if (t === v.Gt || this.fastForwardTo(v.Gt)) {
      this.cbs.oncomment(this.sectionStart, this.index, 0);
      this.state = I.Text;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeSpecialS(t) {
    let e = 32 | t;
    if (e === tu.ScriptEnd[3]) {
      this.startSpecial(tu.ScriptEnd, 4);
    } else if (e === tu.StyleEnd[3]) {
      this.startSpecial(tu.StyleEnd, 4);
    } else {
      this.state = I.InTagName;
      this.stateInTagName(t);
    }
  }
  stateBeforeSpecialT(t) {
    switch (32 | t) {
      case tu.TitleEnd[3]:
        this.startSpecial(tu.TitleEnd, 4);
        break;
      case tu.TextareaEnd[3]:
        this.startSpecial(tu.TextareaEnd, 4);
        break;
      case tu.XmpEnd[3]:
        this.startSpecial(tu.XmpEnd, 4);
        break;
      default:
        this.state = I.InTagName;
        this.stateInTagName(t);
    }
  }
  startEntity() {
    this.baseState = this.state;
    this.state = I.InEntity;
    this.entityStart = this.index;
    this.entityDecoder.startEntity(
      this.xmlMode
        ? b.Strict
        : this.baseState === I.Text || this.baseState === I.InSpecialTag
          ? b.Legacy
          : b.Attribute,
    );
  }
  stateInEntity() {
    let t = this.index - this.offset;
    let e = this.entityDecoder.write(this.buffer, t);
    if (e >= 0) {
      this.state = this.baseState;
      if (e === 0) {
        this.index -= 1;
      }
    } else {
      if (t < this.buffer.length && this.buffer.charCodeAt(t) === v.Amp) {
        this.state = this.baseState;
        this.index -= 1;
        return;
      }
      this.index = this.offset + this.buffer.length - 1;
    }
  }
  cleanup() {
    if (this.running && this.sectionStart !== this.index) {
      if (
        this.state === I.Text ||
        (this.state === I.InSpecialTag && this.sequenceIndex === 0)
      ) {
        this.cbs.ontext(this.sectionStart, this.index);
        this.sectionStart = this.index;
      } else if (
        this.state === I.InAttributeValueDq ||
        this.state === I.InAttributeValueSq ||
        this.state === I.InAttributeValueNq
      ) {
        this.cbs.onattribdata(this.sectionStart, this.index);
        this.sectionStart = this.index;
      }
    }
  }
  shouldContinue() {
    return this.index < this.buffer.length + this.offset && this.running;
  }
  parse() {
    while (this.shouldContinue()) {
      let t = this.buffer.charCodeAt(this.index - this.offset);
      switch (this.state) {
        case I.Text:
          this.stateText(t);
          break;
        case I.SpecialStartSequence:
          this.stateSpecialStartSequence(t);
          break;
        case I.InSpecialTag:
          this.stateInSpecialTag(t);
          break;
        case I.CDATASequence:
          this.stateCDATASequence(t);
          break;
        case I.InAttributeValueDq:
          this.stateInAttributeValueDoubleQuotes(t);
          break;
        case I.InAttributeName:
          this.stateInAttributeName(t);
          break;
        case I.InCommentLike:
          this.stateInCommentLike(t);
          break;
        case I.InSpecialComment:
          this.stateInSpecialComment(t);
          break;
        case I.BeforeAttributeName:
          this.stateBeforeAttributeName(t);
          break;
        case I.InTagName:
          this.stateInTagName(t);
          break;
        case I.InClosingTagName:
          this.stateInClosingTagName(t);
          break;
        case I.BeforeTagName:
          this.stateBeforeTagName(t);
          break;
        case I.AfterAttributeName:
          this.stateAfterAttributeName(t);
          break;
        case I.InAttributeValueSq:
          this.stateInAttributeValueSingleQuotes(t);
          break;
        case I.BeforeAttributeValue:
          this.stateBeforeAttributeValue(t);
          break;
        case I.BeforeClosingTagName:
          this.stateBeforeClosingTagName(t);
          break;
        case I.AfterClosingTagName:
          this.stateAfterClosingTagName(t);
          break;
        case I.BeforeSpecialS:
          this.stateBeforeSpecialS(t);
          break;
        case I.BeforeSpecialT:
          this.stateBeforeSpecialT(t);
          break;
        case I.InAttributeValueNq:
          this.stateInAttributeValueNoQuotes(t);
          break;
        case I.InSelfClosingTag:
          this.stateInSelfClosingTag(t);
          break;
        case I.InDeclaration:
          this.stateInDeclaration(t);
          break;
        case I.BeforeDeclaration:
          this.stateBeforeDeclaration(t);
          break;
        case I.BeforeComment:
          this.stateBeforeComment(t);
          break;
        case I.InProcessingInstruction:
          this.stateInProcessingInstruction(t);
          break;
        case I.InEntity:
          this.stateInEntity();
      }
      this.index++;
    }
    this.cleanup();
  }
  finish() {
    if (this.state === I.InEntity) {
      this.entityDecoder.end();
      this.state = this.baseState;
    }
    this.handleTrailingData();
    this.cbs.onend();
  }
  handleTrailingData() {
    let t = this.buffer.length + this.offset;
    if (!(this.sectionStart >= t)) {
      if (this.state === I.InCommentLike) {
        if (this.currentSequence === tu.CdataEnd) {
          this.cbs.oncdata(this.sectionStart, t, 0);
        } else {
          this.cbs.oncomment(this.sectionStart, t, 0);
        }
      } else if (
        !(
          this.state === I.InTagName ||
          this.state === I.BeforeAttributeName ||
          this.state === I.BeforeAttributeValue ||
          this.state === I.AfterAttributeName ||
          this.state === I.InAttributeName ||
          this.state === I.InAttributeValueSq ||
          this.state === I.InAttributeValueDq ||
          this.state === I.InAttributeValueNq ||
          this.state === I.InClosingTagName
        )
      ) {
        this.cbs.ontext(this.sectionStart, t);
      }
    }
  }
  emitCodePoint(t, e) {
    if (this.baseState !== I.Text && this.baseState !== I.InSpecialTag) {
      if (this.sectionStart < this.entityStart) {
        this.cbs.onattribdata(this.sectionStart, this.entityStart);
      }
      this.sectionStart = this.entityStart + e;
      this.index = this.sectionStart - 1;
      this.cbs.onattribentity(t);
    } else {
      if (this.sectionStart < this.entityStart) {
        this.cbs.ontext(this.sectionStart, this.entityStart);
      }
      this.sectionStart = this.entityStart + e;
      this.index = this.sectionStart - 1;
      this.cbs.ontextentity(t, this.sectionStart);
    }
  }
}
let th = new Set([
  "input",
  "option",
  "optgroup",
  "select",
  "button",
  "datalist",
  "textarea",
]);
let tf = new Set(["p"]);
let tg = new Set(["thead", "tbody"]);
let td = new Set(["dd", "dt"]);
let tp = new Set(["rt", "rp"]);
let tm = new Map([
  ["tr", new Set(["tr", "th", "td"])],
  ["th", new Set(["th"])],
  ["td", new Set(["thead", "th", "td"])],
  ["body", new Set(["head", "link", "script"])],
  ["li", new Set(["li"])],
  ["p", tf],
  ["h1", tf],
  ["h2", tf],
  ["h3", tf],
  ["h4", tf],
  ["h5", tf],
  ["h6", tf],
  ["select", th],
  ["input", th],
  ["output", th],
  ["button", th],
  ["datalist", th],
  ["textarea", th],
  ["option", new Set(["option"])],
  ["optgroup", new Set(["optgroup", "option"])],
  ["dd", td],
  ["dt", td],
  ["address", tf],
  ["article", tf],
  ["aside", tf],
  ["blockquote", tf],
  ["details", tf],
  ["div", tf],
  ["dl", tf],
  ["fieldset", tf],
  ["figcaption", tf],
  ["figure", tf],
  ["footer", tf],
  ["form", tf],
  ["header", tf],
  ["hr", tf],
  ["main", tf],
  ["nav", tf],
  ["ol", tf],
  ["pre", tf],
  ["section", tf],
  ["table", tf],
  ["ul", tf],
  ["rt", tp],
  ["rp", tp],
  ["tbody", tg],
  ["tfoot", tg],
]);
let ty = new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);
let tb = new Set(["math", "svg"]);
let tv = new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignobject",
  "desc",
  "title",
]);
let tI = /\s|\//;
class tw {
  constructor(t, e = {}) {
    var r;
    var n;
    var i;
    var a;
    var o;
    var s;
    this.options = e;
    this.startIndex = 0;
    this.endIndex = 0;
    this.openTagStart = 0;
    this.tagname = "";
    this.attribname = "";
    this.attribvalue = "";
    this.attribs = null;
    this.stack = [];
    this.buffers = [];
    this.bufferOffset = 0;
    this.writeIndex = 0;
    this.ended = false;
    this.cbs = t != null ? t : {};
    this.htmlMode = !this.options.xmlMode;
    this.lowerCaseTagNames = (r = e.lowerCaseTags) != null ? r : this.htmlMode;
    this.lowerCaseAttributeNames =
      (n = e.lowerCaseAttributeNames) != null ? n : this.htmlMode;
    this.recognizeSelfClosing =
      (i = e.recognizeSelfClosing) != null ? i : !this.htmlMode;
    this.tokenizer = new ((a = e.Tokenizer) != null ? a : tl)(
      this.options,
      this,
    );
    this.foreignContext = [!this.htmlMode];
    if ((s = (o = this.cbs).onparserinit) != null) {
      s.call(o, this);
    }
  }
  ontext(t, e) {
    let r;
    let n;
    let i = this.getSlice(t, e);
    this.endIndex = e - 1;
    if ((n = (r = this.cbs).ontext) != null) {
      n.call(r, i);
    }
    this.startIndex = e;
  }
  ontextentity(t, e) {
    let r;
    let n;
    this.endIndex = e - 1;
    if ((n = (r = this.cbs).ontext) != null) {
      n.call(r, te(t));
    }
    this.startIndex = e;
  }
  isVoidElement(t) {
    return this.htmlMode && ty.has(t);
  }
  onopentagname(t, e) {
    this.endIndex = e;
    let r = this.getSlice(t, e);
    if (this.lowerCaseTagNames) {
      r = r.toLowerCase();
    }
    this.emitOpenTag(r);
  }
  emitOpenTag(t) {
    let e;
    let r;
    let n;
    let i;
    this.openTagStart = this.startIndex;
    this.tagname = t;
    let a = this.htmlMode && tm.get(t);
    if (a) {
      while (this.stack.length > 0 && a.has(this.stack[0])) {
        let t = this.stack.shift();
        if ((r = (e = this.cbs).onclosetag) != null) {
          r.call(e, t, true);
        }
      }
    }
    if (!this.isVoidElement(t)) {
      this.stack.unshift(t);
      if (this.htmlMode) {
        if (tb.has(t)) {
          this.foreignContext.unshift(true);
        } else if (tv.has(t)) {
          this.foreignContext.unshift(false);
        }
      }
    }
    if ((i = (n = this.cbs).onopentagname) != null) {
      i.call(n, t);
    }
    if (this.cbs.onopentag) {
      this.attribs = {};
    }
  }
  endOpenTag(t) {
    let e;
    let r;
    this.startIndex = this.openTagStart;
    if (this.attribs) {
      if ((r = (e = this.cbs).onopentag) != null) {
        r.call(e, this.tagname, this.attribs, t);
      }
      this.attribs = null;
    }
    if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
      this.cbs.onclosetag(this.tagname, true);
    }
    this.tagname = "";
  }
  onopentagend(t) {
    this.endIndex = t;
    this.endOpenTag(false);
    this.startIndex = t + 1;
  }
  onclosetag(t, e) {
    let r;
    let n;
    let i;
    let a;
    let o;
    let s;
    let A;
    let c;
    this.endIndex = e;
    let u = this.getSlice(t, e);
    if (this.lowerCaseTagNames) {
      u = u.toLowerCase();
    }
    if (this.htmlMode && (tb.has(u) || tv.has(u))) {
      this.foreignContext.shift();
    }
    if (this.isVoidElement(u)) {
      if (this.htmlMode && u === "br") {
        if ((a = (i = this.cbs).onopentagname) != null) {
          a.call(i, "br");
        }
        if ((s = (o = this.cbs).onopentag) != null) {
          s.call(o, "br", {}, true);
        }
        if ((c = (A = this.cbs).onclosetag) != null) {
          c.call(A, "br", false);
        }
      }
    } else {
      let t = this.stack.indexOf(u);
      if (t !== -1) {
        for (let e = 0; e <= t; e++) {
          let i = this.stack.shift();
          if ((n = (r = this.cbs).onclosetag) != null) {
            n.call(r, i, e !== t);
          }
        }
      } else {
        if (this.htmlMode && u === "p") {
          this.emitOpenTag("p");
          this.closeCurrentTag(true);
        }
      }
    }
    this.startIndex = e + 1;
  }
  onselfclosingtag(t) {
    this.endIndex = t;
    if (this.recognizeSelfClosing || this.foreignContext[0]) {
      this.closeCurrentTag(false);
      this.startIndex = t + 1;
    } else {
      this.onopentagend(t);
    }
  }
  closeCurrentTag(t) {
    let e;
    let r;
    let tagname = this.tagname;
    this.endOpenTag(t);
    if (this.stack[0] === tagname) {
      if ((r = (e = this.cbs).onclosetag) != null) {
        r.call(e, tagname, !t);
      }
      this.stack.shift();
    }
  }
  onattribname(t, e) {
    this.startIndex = t;
    let r = this.getSlice(t, e);
    this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r;
  }
  onattribdata(t, e) {
    this.attribvalue += this.getSlice(t, e);
  }
  onattribentity(t) {
    this.attribvalue += te(t);
  }
  onattribend(t, e) {
    let r;
    let n;
    this.endIndex = e;
    if ((n = (r = this.cbs).onattribute) != null) {
      n.call(
        r,
        this.attribname,
        this.attribvalue,
        t === w.Double
          ? '"'
          : t === w.Single
            ? "'"
            : t === w.NoValue
              ? undefined
              : null,
      );
    }
    if (
      this.attribs &&
      !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)
    ) {
      this.attribs[this.attribname] = this.attribvalue;
    }
    this.attribvalue = "";
  }
  getInstructionName(t) {
    let e = t.search(tI);
    let r = e < 0 ? t : t.substr(0, e);
    if (this.lowerCaseTagNames) {
      r = r.toLowerCase();
    }
    return r;
  }
  ondeclaration(t, e) {
    this.endIndex = e;
    let r = this.getSlice(t, e);
    if (this.cbs.onprocessinginstruction) {
      let t = this.getInstructionName(r);
      this.cbs.onprocessinginstruction(`!${t}`, `!${r}`);
    }
    this.startIndex = e + 1;
  }
  onprocessinginstruction(t, e) {
    this.endIndex = e;
    let r = this.getSlice(t, e);
    if (this.cbs.onprocessinginstruction) {
      let t = this.getInstructionName(r);
      this.cbs.onprocessinginstruction(`?${t}`, `?${r}`);
    }
    this.startIndex = e + 1;
  }
  oncomment(t, e, r) {
    let n;
    let i;
    let a;
    let o;
    this.endIndex = e;
    if ((i = (n = this.cbs).oncomment) != null) {
      i.call(n, this.getSlice(t, e - r));
    }
    if ((o = (a = this.cbs).oncommentend) != null) {
      o.call(a);
    }
    this.startIndex = e + 1;
  }
  oncdata(t, e, r) {
    let n;
    let i;
    let a;
    let o;
    let s;
    let A;
    let c;
    let u;
    let l;
    let h;
    this.endIndex = e;
    let f = this.getSlice(t, e - r);
    if (!this.htmlMode || this.options.recognizeCDATA) {
      if ((i = (n = this.cbs).oncdatastart) != null) {
        i.call(n);
      }
      if ((o = (a = this.cbs).ontext) != null) {
        o.call(a, f);
      }
      if ((A = (s = this.cbs).oncdataend) != null) {
        A.call(s);
      }
    } else {
      if ((u = (c = this.cbs).oncomment) != null) {
        u.call(c, `[CDATA[${f}]]`);
      }
      if ((h = (l = this.cbs).oncommentend) != null) {
        h.call(l);
      }
    }
    this.startIndex = e + 1;
  }
  onend() {
    let t;
    let e;
    if (this.cbs.onclosetag) {
      this.endIndex = this.startIndex;
      for (let t = 0; t < this.stack.length; t++) {
        this.cbs.onclosetag(this.stack[t], true);
      }
    }
    if ((e = (t = this.cbs).onend) != null) {
      e.call(t);
    }
  }
  reset() {
    let t;
    let e;
    let r;
    let n;
    if ((e = (t = this.cbs).onreset) != null) {
      e.call(t);
    }
    this.tokenizer.reset();
    this.tagname = "";
    this.attribname = "";
    this.attribs = null;
    this.stack.length = 0;
    this.startIndex = 0;
    this.endIndex = 0;
    if ((n = (r = this.cbs).onparserinit) != null) {
      n.call(r, this);
    }
    this.buffers.length = 0;
    this.foreignContext.length = 0;
    this.foreignContext.unshift(!this.htmlMode);
    this.bufferOffset = 0;
    this.writeIndex = 0;
    this.ended = false;
  }
  parseComplete(t) {
    this.reset();
    this.end(t);
  }
  getSlice(t, e) {
    while (t - this.bufferOffset >= this.buffers[0].length) {
      this.shiftBuffer();
    }
    let r = this.buffers[0].slice(t - this.bufferOffset, e - this.bufferOffset);
    while (e - this.bufferOffset > this.buffers[0].length) {
      this.shiftBuffer();
      r += this.buffers[0].slice(0, e - this.bufferOffset);
    }
    return r;
  }
  shiftBuffer() {
    this.bufferOffset += this.buffers[0].length;
    this.writeIndex--;
    this.buffers.shift();
  }
  write(t) {
    let e;
    let r;
    if (this.ended) {
      if ((r = (e = this.cbs).onerror) != null) {
        r.call(e, Error(".write() after done!"));
      }
      return;
    }
    this.buffers.push(t);
    if (this.tokenizer.running) {
      this.tokenizer.write(t);
      this.writeIndex++;
    }
  }
  end(t) {
    let e;
    let r;
    if (this.ended) {
      if ((r = (e = this.cbs).onerror) != null) {
        r.call(e, Error(".end() after done!"));
      }
      return;
    }
    if (t) {
      this.write(t);
    }
    this.ended = true;
    this.tokenizer.end();
  }
  pause() {
    this.tokenizer.pause();
  }
  resume() {
    for (
      this.tokenizer.resume();
      this.tokenizer.running && this.writeIndex < this.buffers.length;
    ) {
      this.tokenizer.write(this.buffers[this.writeIndex++]);
    }
    if (this.ended) {
      this.tokenizer.end();
    }
  }
  parseChunk(t) {
    this.write(t);
  }
  done(t) {
    this.end(t);
  }
}
u = C || (C = {});
u.Root = "root";
u.Text = "text";
u.Directive = "directive";
u.Comment = "comment";
u.Script = "script";
u.Style = "style";
u.Tag = "tag";
u.CDATA = "cdata";
u.Doctype = "doctype";
C.Root;
C.Text;
C.Directive;
C.Comment;
C.Script;
C.Style;
C.Tag;
C.CDATA;
C.Doctype;
new Map(
  [
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "textPath",
  ].map((t) => [t.toLowerCase(), t]),
);
new Map(
  [
    "definitionURL",
    "attributeName",
    "attributeType",
    "baseFrequency",
    "baseProfile",
    "calcMode",
    "clipPathUnits",
    "diffuseConstant",
    "edgeMode",
    "filterUnits",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "kernelMatrix",
    "kernelUnitLength",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "limitingConeAngle",
    "markerHeight",
    "markerUnits",
    "markerWidth",
    "maskContentUnits",
    "maskUnits",
    "numOctaves",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "refX",
    "refY",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "specularConstant",
    "specularExponent",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stitchTiles",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textLength",
    "viewBox",
    "viewTarget",
    "xChannelSelector",
    "yChannelSelector",
    "zoomAndPan",
  ].map((t) => [t.toLowerCase(), t]),
);
l = B || (B = {});
l[(l.DISCONNECTED = 1)] = "DISCONNECTED";
l[(l.PRECEDING = 2)] = "PRECEDING";
l[(l.FOLLOWING = 4)] = "FOLLOWING";
l[(l.CONTAINS = 8)] = "CONTAINS";
l[(l.CONTAINED_BY = 16)] = "CONTAINED_BY";
const tC = ["alt"];
const tB = [
  "img",
  "br",
  "hr",
  "area",
  "base",
  "basefont",
  "input",
  "link",
  "meta",
];
const tS = function (t) {
  if (
    (e = RegExp) != null &&
    typeof Symbol !== "undefined" &&
    e[Symbol.hasInstance]
      ? !!e[Symbol.hasInstance](t)
      : t instanceof e
  ) {
    return t;
  }
  var e;
  const r = String(t || "");
  const n = r.match(/^\/(.*)\/([a-z]*)$/i);
  if (n) {
    return new RegExp(n[1], n[2]);
  }
  return new RegExp(r);
};
h = function (t) {
  const t_sourceText = t.sourceText;
  const t_config = t.config;
  const t_collecter = t.collecter;
  if (!t_sourceText || typeof t_sourceText !== "string") {
    return t_sourceText;
  }
  let i = S;
  const a =
    typeof t_config.blackConfig === "string"
      ? JSON.parse(t_config.blackConfig || "{}")
      : t_config.blackConfig || {};
  if (a.blackAttrRegExps) {
    a.blackAttrRegExps = a.blackAttrRegExps.map(tS);
  }
  if (P.includes(t_config.configMode, "override")) {
    i = a;
  }
  if (P.includes(t_config.configMode, "merge")) {
    i = X(i, a);
  }
  i = J(i);
  let o = "";
  let s = false;
  let A = 0;
  o = "";
  s = false;
  A = 0;
  const c = {
    onopentag: function (t, e) {
      let a;
      if (s) {
        return void A++;
      }
      if (P.includes(i.blackTags, t)) {
        s = true;
        A = 1;
        t_collecter.collect.blackTags.push(t);
        return;
      }
      o += "<" + t;
      a = function (e, a) {
        if (i.blackAttrs.length && P.includes(i.blackAttrs, a)) {
          return void t_collecter.collect.blackAttrs.push(a);
        }
        if (i.blackList[t] && P.includes(i.blackList[t], a)) {
          t_collecter.collect.blackList[t] =
            t_collecter.collect.blackList[t] || [];
          t_collecter.collect.blackList[t].push(a);
          return;
        }
        if (
          i.blackAttrRegExps.length &&
          i.blackAttrRegExps.some((t) => t.test(a))
        ) {
          return void t_collecter.collect.blackAttrRegExps.push(a);
        }
        if (i.filterList && i.filterList[t] && P.includes(i.filterList[t], a)) {
          const s = V({
            sourceText: e,
            config: t_config,
            callback: function (t) {
              return t_collecter.collect.filterProtocol.push(t);
            },
          });
          if (s !== e) {
            t_collecter.collect.filterList[t] =
              t_collecter.collect.filterList[t] || [];
            t_collecter.collect.filterList[t].push(a);
          }
          e = s;
        }
        if (i.filterAttrs && i.filterAttrs.includes(a)) {
          const A = V({
            sourceText: e,
            config: t_config,
            callback: function (t) {
              return t_collecter.collect.filterProtocol.push(t);
            },
          });
          if (A !== e) {
            t_collecter.collect.filterAttrs.push(a);
          }
          e = A;
        }
        o += " " + a;
        if (e && e.length) {
          const c = M(e, true);
          if (c !== e) {
            t_collecter.collect.escapeAttrs =
              t_collecter.collect.escapeAttrs || [];
            t_collecter.collect.escapeAttrs.push(a);
          }
          o += '="' + c + '"';
        } else {
          if (tC.includes(a)) {
            o += '=""';
          }
        }
      };
      if (e) {
        Object.keys(e).forEach((t) => {
          a(e[t], t);
        });
      }
      if (tB.indexOf(t) !== -1) {
        o += " />";
      } else {
        o += ">";
      }
    },
    ontext: function (t) {
      if (!s) {
        const e = M(t);
        if (e !== t) {
          t_collecter.collect.escapeText = t_collecter.collect.escapeText || [];
          t_collecter.collect.escapeText.push("text");
        }
        o += e;
      }
    },
    onclosetag: function (t, e) {
      if (s) {
        if (!--A) {
          s = false;
        }
        return;
      }
      if (tB.indexOf(t) === -1) {
        o += "</" + t + ">";
      }
    },
  };
  const u =
    (t_config.htmlparserOptions || "").length > 2
      ? new tw(c, JSON.parse(t_config.htmlparserOptions))
      : new tw(c);
  u.write(t_sourceText);
  u.end();
  return o;
};
f = "sanitize";
var tE = function (t, e, r) {
  try {
    _(r);
    const n = j(r);
    try {
      $({
        ...r,
        disposition: n,
      });
    } catch (t) {}
    const i = W(t);
    const a = t;
    if (typeof r.beforeFilterHTML === "function") {
      const o = r.beforeFilterHTML(t, r);
      const s = o.filterText;
      if (o.isUse && W(s) !== i) {
        R.report(
          {
            type: r.logType,
            disposition: n,
            sourceText: z(a.replace(/'/g, '"')),
            filterText: z(s.replace(/'/g, '"')),
            collectKey: "-",
            collectData: "-",
            collectMode: "black",
            scene: "before_".concat(f),
            filename: r.filename,
          },
          r,
        );
        if (n === "enforce") {
          return s;
        }
        return a;
      }
      t = s;
    }
    if (!t || typeof t !== "string" || U(t, Number(r.htmlLimit))) {
      return t;
    }
    collecter.initCollect();
    const A = h({
      sourceText: t,
      config: r,
      collecter,
    });
    let c = W(A);
    if (typeof r.afterFilterHTML === "function") {
      const u = r.afterFilterHTML(A, r).filterText;
      if ((c = W(u)) !== i) {
        R.report(
          {
            type: r.logType,
            disposition: n,
            sourceText: z(a.replace(/'/g, '"')),
            filterText: z(u.replace(/'/g, '"')),
            collectKey: "-",
            collectData: "-",
            collectMode: "black",
            scene: "".concat(f, "_after"),
            filename: r.filename,
          },
          r,
        );
        if (n === "enforce") {
          return u;
        }
        return a;
      }
    }
    let l = collecter.removeCollect();
    if (!l || !l.collectKey) {
      if (a.toLowerCase().indexOf("frameset") === -1) {
        return a;
      }
      l = {
        collectKey: "default",
        collectMode: "black",
      };
    }
    if (i !== c) {
      if (r.isRuntimeLog && n === "enforce") {
        console.warn("当前页面部分数据被「Argus XSS」过滤");
      }
      R.report(
        {
          type: r.logType,
          disposition: n,
          ...l,
          sourceText: z(a.replace(/'/g, '"')),
          filterText: z(A.replace(/'/g, '"')),
          scene: f,
          filename: r.filename,
        },
        r,
      );
    }
    if (n === "enforce") {
      return A;
    }
    return a;
  } catch (error) {
    let g = "report";
    try {
      g = j(r || {});
    } catch (t) {}
    H({
      e: error,
      sourceText: t,
      config: r,
      type: f,
      disposition: g,
      sceneType: "html",
    });
    return t;
  }
};
export { tE as t };
g = "sanitize";
var tk = function (t, e, r) {
  try {
    _(r);
    const n = t;
    const i = j(r);
    try {
      $({
        ...r,
        disposition: i,
      });
    } catch (t) {}
    if (typeof r.beforeFilterUrl === "function") {
      const a = r.beforeFilterUrl(t, r);
      const o = a.filterText;
      if (a.isUse && o !== n) {
        R.report(
          {
            type: r.logType,
            disposition: i,
            sourceText: z((q(n) || "").replace(/'/g, '"')),
            filterText: z((q(o) || "").replace(/'/g, '"')),
            collectKey: "-",
            collectData: "-",
            collectMode: "black",
            scene: "before_".concat(g),
            filename: r.filename,
          },
          r,
        );
        if (i === "enforce") {
          return o;
        }
        return n;
      }
      t = o;
    }
    const s = q(t);
    if (!s || Y(s, Number(r.htmlLimit))) {
      return t;
    }
    let A = [];
    const c = V({
      sourceText: t,
      config: r,
      callback: function (t) {
        A.push(t);
      },
    });
    A = P.from(P.uniq(A));
    if (typeof r.afterFilterUrl === "function") {
      const u = r.afterFilterUrl(c, r).filterText;
      if (c !== n) {
        R.report(
          {
            type: r.logType,
            disposition: i,
            sourceText: z((q(n) || "").replace(/'/g, '"')),
            filterText: z((q(u) || "").replace(/'/g, '"')),
            collectKey: "-",
            collectData: "-",
            collectMode: "black",
            scene: "".concat(g, "_after"),
            filename: r.filename,
          },
          r,
        );
        if (i === "enforce") {
          return u;
        }
        return n;
      }
    }
    if (n !== c) {
      if (r.isRuntimeLog && i === "enforce") {
        console.warn("当前页面部分数据被「Argus XSS」过滤");
      }
      R.report(
        {
          type: r.logType,
          disposition: i,
          collectKey: A.join("___"),
          collectData: "-",
          collectMode: "black",
          sourceText: z((q(n) || "").replace(/'/g, '"')),
          filterText: z((q(c) || "").replace(/'/g, '"')),
          scene: g,
          filename: r.filename,
        },
        r,
      );
    }
    if (i === "enforce") {
      return c;
    }
    return n;
  } catch (error) {
    let l = "report";
    try {
      l = j(r || {});
    } catch (t) {}
    H({
      e: error,
      sourceText: t,
      config: r,
      type: g,
      disposition: l,
      sceneType: "url",
    });
    return t;
  }
};
export { tk as m };
