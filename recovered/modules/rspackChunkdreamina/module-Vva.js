import o from "./module-sJv.js";
import s from "./module-PAh.js";
let n;
let i;
export default o;
o.codegen = require("./module-li7.js");
o.fetch = require("./module-cL6.js");
o.path = require("./module-S7N.js");
o.fs = o.inquire("fs");
o.toArray = function (e) {
  if (e) {
    for (var t = Object.keys(e), r = Array(t.length), n = 0; n < t.length;) {
      r[n] = e[t[n++]];
    }
    return r;
  }
  return [];
};
o.toObject = function (e) {
  const t = {};
  for (let r = 0; r < e.length;) {
    const n = e[r++];
    const i = e[r++];
    if (i !== undefined) {
      t[n] = i;
    }
  }
  return t;
};
const a = /\\/g;
const l = /"/g;
o.isReserved = function (e) {
  return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(
    e,
  );
};
o.safeProp = function (e) {
  if (!/^[$\w_]+$/.test(e) || o.isReserved(e)) {
    return '["' + e.replace(a, "\\\\").replace(l, '\\"') + '"]';
  }
  return "." + e;
};
o.ucFirst = function (e) {
  return e.charAt(0).toUpperCase() + e.substring(1);
};
const u = /_([a-z])/g;
o.camelCase = function (e) {
  return (
    e.substring(0, 1) + e.substring(1).replace(u, (e, t) => t.toUpperCase())
  );
};
o.compareFieldsById = function (e, t) {
  return e.id - t.id;
};
o.decorateType = function (e, t) {
  if (e.$type) {
    if (t && e.$type.name !== t) {
      o.decorateRoot.remove(e.$type);
      e.$type.name = t;
      o.decorateRoot.add(e.$type);
    }
    return e.$type;
  }
  if (!n) {
    n = require("./module-c0X.js");
  }
  const i = new n(t || e.name);
  o.decorateRoot.add(i);
  i.ctor = e;
  Object.defineProperty(e, "$type", {
    value: i,
    enumerable: false,
  });
  Object.defineProperty(e.prototype, "$type", {
    value: i,
    enumerable: false,
  });
  return i;
};
let f = 0;
o.decorateEnum = function (e) {
  if (e.$type) {
    return e.$type;
  }
  if (!i) {
    i = require("./module-Taa.js");
  }
  const t = new i(`Enum${f++}`, e);
  o.decorateRoot.add(t);
  Object.defineProperty(e, "$type", {
    value: t,
    enumerable: false,
  });
  return t;
};
o.setProperty = function (e, t, r, n) {
  if (typeof e !== "object") {
    throw TypeError("dst must be an object");
  }
  if (!t) {
    throw TypeError("path must be specified");
  }
  return (function e(t, r, i) {
    const o = r.shift();
    if (o === "__proto__" || o === "prototype") {
      return t;
    }
    if (r.length > 0) {
      t[o] = e(t[o] || {}, r, i);
    } else {
      const s = t[o];
      if (s && n) {
        return t;
      }
      if (s) {
        i = [].concat(s).concat(i);
      }
      t[o] = i;
    }
    return t;
  })(e, (t = t.split(".")), r);
};
Object.defineProperty(o, "decorateRoot", {
  get: function () {
    return s.decorated || (s.decorated = new (require("./module-B9J.js"))());
  },
});
