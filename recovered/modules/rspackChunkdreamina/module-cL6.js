import n from "./module-aIo.js";
export default o;
const i = require("./module-Ekb.js")("fs");
function o(e, t, r) {
  if (typeof t === "function") {
    r = t;
    t = {};
  } else if (!t) {
    t = {};
  }
  if (r) {
    if (!t.xhr && i && i.readFile) {
      return i.readFile(e, function (n, i) {
        if (n && typeof XMLHttpRequest !== "undefined") {
          return o.xhr(e, t, r);
        }
        if (n) {
          return r(n);
        }
        return r(null, t.binary ? i : i.toString("utf8"));
      });
    }
    return o.xhr(e, t, r);
  }
  return n(o, this, e, t);
}
o.xhr = function (e, t, r) {
  const n = new XMLHttpRequest();
  n.onreadystatechange = function () {
    if (n.readyState === 4) {
      if (n.status !== 0 && n.status !== 200) {
        return r(Error("status " + n.status));
      }
      if (t.binary) {
        let e = n.response;
        if (!e) {
          e = [];
          for (let i = 0; i < n.responseText.length; ++i) {
            e.push(255 & n.responseText.charCodeAt(i));
          }
        }
        return r(
          null,
          typeof Uint8Array !== "undefined" ? new Uint8Array(e) : e,
        );
      }
      return r(null, n.responseText);
    }
  };
  if (t.binary) {
    if ("overrideMimeType" in n) {
      n.overrideMimeType("text/plain; charset=x-user-defined");
    }
    n.responseType = "arraybuffer";
  }
  n.open("GET", e);
  n.send();
};
