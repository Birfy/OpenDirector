let isUUID = RegExp.prototype.test.bind(
  /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu,
);
let isIPv4 = RegExp.prototype.test.bind(
  /^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u,
);
let a = RegExp.prototype.test.bind(/^\d*$/u);
let s = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu);
let i = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu);
let o = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:@/]$/u);
let n = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:@/?]$/u);
let l = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:]$/u);
let d = Array(256);
{
  let e = "0123456789ABCDEF";
  for (let t = 0; t < 256; t++) {
    d[t] = "%" + e[t >> 4] + e[15 & t];
  }
}
function c(e) {
  if (e < 2048) {
    return d[192 | (e >> 6)] + d[128 | (63 & e)];
  }
  if (e < 65536) {
    return d[224 | (e >> 12)] + d[128 | ((e >> 6) & 63)] + d[128 | (63 & e)];
  }
  return (
    d[240 | (e >> 18)] +
    d[128 | ((e >> 12) & 63)] +
    d[128 | ((e >> 6) & 63)] +
    d[128 | (63 & e)]
  );
}
let u = RegExp.prototype.test.bind(/^[\dA-Fa-f]{1,4}$/);
let f = RegExp.prototype.test.bind(
  /^[vV][\dA-Fa-f]+\.[A-Za-z\d\-._~!$&'()*+,;=:]+$/,
);
let p = RegExp.prototype.test.bind(/^[A-Za-z\d\-._~]$/);
let nonSimpleDomain = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
function m(e) {
  let t = -1;
  let r = 0;
  let a = -1;
  let s = 0;
  for (let i = 0; i < e.length; i++) {
    if (e[i] === "0") {
      if (a === -1) {
        a = i;
      }
      if (++s > r) {
        r = s;
        t = a;
      }
    } else {
      a = -1;
      s = 0;
    }
  }
  if (r < 2) {
    return e.join(":");
  }
  return e.slice(0, t).join(":") + "::" + e.slice(t + r).join(":");
}
function normalizeIPv6(host) {
  let error = host[0] === "[" && host[host.length - 1] === "]";
  if ((host[0] === "[" || host[host.length - 1] === "]") && !error) {
    return {
      host,
      isIPV6: false,
      error: true,
    };
  }
  let escapedHost = error ? host.slice(1, -1) : host;
  if (error && f(escapedHost)) {
    escapedHost = escapedHost.toLowerCase();
    return {
      host: `[${escapedHost}]`,
      escapedHost,
      isIPV6: false,
      isIPVFuture: true,
    };
  }
  if (
    ((e) => {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        if (e[r] === ":") {
          t++;
        }
      }
      return t;
    })(escapedHost) < 2
  ) {
    return {
      host,
      isIPV6: false,
      error,
    };
  }
  let i = "";
  let o = escapedHost.indexOf("%");
  if (o !== -1) {
    let t = escapedHost.slice(o, o + 3).toLowerCase() === "%25" ? 3 : 1;
    if (
      !((e) => {
        if (e.length === 0) {
          return false;
        }
        for (let t = 0; t < e.length; t++) {
          if (!p(e[t])) {
            if (e[t] === "%" && t + 2 < e.length && s(e.slice(t + 1, t + 3))) {
              t += 2;
              continue;
            }
            return false;
          }
        }
        return true;
      })((i = escapedHost.slice(o + t)))
    ) {
      return {
        host,
        isIPV6: false,
        error: true,
      };
    }
    escapedHost = escapedHost.slice(0, o);
  }
  let n = ((e) => {
    let t = e.indexOf("::");
    if (t !== -1 && e.indexOf("::", t + 1) !== -1) {
      return;
    }
    let a = t === -1 ? e.split(":") : e.slice(0, t).split(":");
    let s = t === -1 ? [] : e.slice(t + 2).split(":");
    if (t !== -1) {
      if (a.length === 1 && a[0] === "") {
        a.length = 0;
      }
      if (s.length === 1 && s[0] === "") {
        s.length = 0;
      }
    }
    let i = a.concat(s);
    let o = 0;
    for (let e = 0; e < i.length; e++) {
      let a = i[e];
      if (a === "") {
        return;
      }
      if (a.indexOf(".") !== -1) {
        if (e !== i.length - 1 || (t !== -1 && s.length === 0) || !isIPv4(a)) {
          return;
        }
        o += 2;
        continue;
      }
      if (!u(a)) {
        return;
      }
      i[e] = parseInt(a, 16).toString(16);
      o++;
    }
    if (t === -1) {
      if (o !== 8) {
        return;
      }
      return m(i);
    }
    if (o >= 8) {
      return;
    }
    let n = i.slice(0, a.length);
    for (let e = o; e < 8; e++) {
      n.push("0");
    }
    for (let e = a.length; e < i.length; e++) {
      n.push(i[e]);
    }
    return m(n);
  })(escapedHost);
  if (n === undefined) {
    return {
      host,
      isIPV6: false,
      error: true,
    };
  }
  return {
    host: n + (i ? "%" + i : ""),
    escapedHost: n + (i ? "%25" + i : ""),
    isIPV6: true,
  };
}
let y = {
  "@": "%40",
  "/": "%2F",
  "?": "%3F",
  "#": "%23",
  ":": "%3A",
};
let v = /[@/?#:]/g;
let _ = /[@/?#]/g;
function reescapeHostDelimiters(e, t) {
  let r = t ? _ : v;
  r.lastIndex = 0;
  return e.replace(r, (e) => y[e]);
}
function normalizePercentEncoding(e, t = false) {
  if (e.indexOf("%") === -1) {
    return e;
  }
  let r = "";
  for (let a = 0; a < e.length; a++) {
    if (e[a] === "%" && a + 2 < e.length) {
      let o = e.slice(a + 1, a + 3);
      if (s(o)) {
        let e = o.toUpperCase();
        let s = String.fromCharCode(parseInt(e, 16));
        if (t && i(s)) {
          r += s;
        } else {
          r += "%" + e;
        }
        a += 2;
        continue;
      }
    }
    r += e[a];
  }
  return r;
}
function b(e, t) {
  let r = "";
  for (let a = 0; a < e.length; a++) {
    let i = e[a];
    if (i === "%" && a + 2 < e.length) {
      let t = e.slice(a + 1, a + 3);
      if (s(t)) {
        r += "%" + t.toUpperCase();
        a += 2;
        continue;
      }
    }
    if (t(i)) {
      r += i;
    } else {
      let t = e.charCodeAt(a);
      if (t < 128) {
        r += d[t];
      } else if (t < 55296 || t > 57343) {
        r += c(t);
      } else if (t <= 56319 && a + 1 < e.length) {
        let s = e.charCodeAt(a + 1);
        if (s >= 56320 && s <= 57343) {
          r += c(65536 + ((t - 55296) << 10) + (s - 56320));
          a++;
        } else {
          r += c(65533);
        }
      } else {
        r += c(65533);
      }
    }
  }
  return r;
}
function encodeUserinfo(e) {
  return b(e, l);
}
function E(e) {
  return (
    (e >= 48 && e <= 57) ||
    (e >= 65 && e <= 90) ||
    (e >= 97 && e <= 122) ||
    e === 42 ||
    e === 43 ||
    e === 45 ||
    e === 46 ||
    e === 47 ||
    e === 64 ||
    e === 95
  );
}
export default {
  nonSimpleDomain,
  recomposeAuthority: function (e) {
    let t = [];
    if (e.userinfo !== undefined) {
      t.push(encodeUserinfo(e.userinfo));
      t.push("@");
    }
    if (e.host !== undefined) {
      let a = e.host;
      if (!isIPv4(a)) {
        let e = normalizeIPv6(a);
        if (e.isIPV6 !== true && e.isIPVFuture !== true) {
          e = normalizeIPv6((a = normalizePercentEncoding(a, true)));
        }
        a =
          e.isIPV6 === true || e.isIPVFuture === true
            ? `[${e.escapedHost}]`
            : reescapeHostDelimiters(a, false);
      }
      t.push(a);
    }
    if (typeof e.port === "number" || typeof e.port === "string") {
      let r = String(e.port);
      if (!a(r)) {
        throw TypeError("URI port is malformed.");
      }
      t.push(":");
      t.push(r);
    }
    if (t.length) {
      return t.join("");
    }
  },
  reescapeHostDelimiters,
  normalizePercentEncoding,
  normalizePathEncoding: function (e) {
    let t = "";
    for (let r = 0; r < e.length; r++) {
      let a = e[r];
      if (a === "%" && r + 2 < e.length) {
        let a = e.slice(r + 1, r + 3);
        if (s(a)) {
          let e = a.toUpperCase();
          let s = String.fromCharCode(parseInt(e, 16));
          if (s !== "." && i(s)) {
            t += s;
          } else {
            t += "%" + e;
          }
          r += 2;
          continue;
        }
      }
      if (o(a)) {
        t += a;
      } else {
        let s = e.charCodeAt(r);
        if (s < 128) {
          t += E(s) ? a : d[s];
        } else if (s < 55296 || s > 57343) {
          t += c(s);
        } else if (s <= 56319 && r + 1 < e.length) {
          let a = e.charCodeAt(r + 1);
          if (a >= 56320 && a <= 57343) {
            t += c(65536 + ((s - 55296) << 10) + (a - 56320));
            r++;
          } else {
            t += c(65533);
          }
        } else {
          t += c(65533);
        }
      }
    }
    return t;
  },
  serializePathEncoding: function (e, t = false) {
    let r = "";
    let a = t && e[0] !== "/";
    for (let t = 0; t < e.length; t++) {
      let i = e[t];
      if (i === "%" && t + 2 < e.length) {
        let a = e.slice(t + 1, t + 3);
        if (s(a)) {
          r += "%" + a.toUpperCase();
          t += 2;
          continue;
        }
      }
      if (i === "/") {
        a = false;
      }
      if (o(i) && (i !== ":" || !a)) {
        r += i;
      } else {
        let a = e.charCodeAt(t);
        if (a < 128) {
          r += d[a];
        } else if (a < 55296 || a > 57343) {
          r += c(a);
        } else if (a <= 56319 && t + 1 < e.length) {
          let s = e.charCodeAt(t + 1);
          if (s >= 56320 && s <= 57343) {
            r += c(65536 + ((a - 55296) << 10) + (s - 56320));
            t++;
          } else {
            r += c(65533);
          }
        } else {
          r += c(65533);
        }
      }
    }
    return r;
  },
  normalizeQueryFragmentEncoding: function (e) {
    let t = "";
    for (let r = 0; r < e.length; r++) {
      let a = e[r];
      if (a === "%" && r + 2 < e.length) {
        let a = e.slice(r + 1, r + 3);
        if (s(a)) {
          let e = a.toUpperCase();
          let s = String.fromCharCode(parseInt(e, 16));
          if (i(s)) {
            t += s;
          } else {
            t += "%" + e;
          }
          r += 2;
          continue;
        }
      }
      if (n(a)) {
        t += a;
      } else {
        let s = e.charCodeAt(r);
        if (s < 128) {
          t += E(s) ? a : d[s];
        } else if (s < 55296 || s > 57343) {
          t += c(s);
        } else if (s <= 56319 && r + 1 < e.length) {
          let a = e.charCodeAt(r + 1);
          if (a >= 56320 && a <= 57343) {
            t += c(65536 + ((s - 55296) << 10) + (a - 56320));
            r++;
          } else {
            t += c(65533);
          }
        } else {
          t += c(65533);
        }
      }
    }
    return t;
  },
  encodeUserinfo,
  encodeQuery: function (e) {
    return b(e, n);
  },
  encodeFragment: function (e) {
    return b(e, n);
  },
  escapePreservingEscapes: function (e) {
    let t = "";
    for (let r = 0; r < e.length; r++) {
      if (e[r] === "%" && r + 2 < e.length) {
        let a = e.slice(r + 1, r + 3);
        if (s(a)) {
          t += "%" + a.toUpperCase();
          r += 2;
          continue;
        }
      }
      t += escape(e[r]);
    }
    return t;
  },
  removeDotSegments: function (e) {
    let t = e;
    let r = [];
    let a = -1;
    let s = 0;
    while ((s = t.length)) {
      if (s === 1) {
        if (t === ".") {
          break;
        } else if (t === "/") {
          r.push("/");
          break;
        } else {
          r.push(t);
          break;
        }
      }
      if (s === 2) {
        if (t[0] === ".") {
          if (t[1] === ".") {
            break;
          } else if (t[1] === "/") {
            t = t.slice(2);
            continue;
          }
        } else if (t[0] === "/" && (t[1] === "." || t[1] === "/")) {
          r.push("/");
          break;
        }
      } else if (s === 3 && t === "/..") {
        if (r.length !== 0) {
          r.pop();
        }
        r.push("/");
        break;
      }
      if (t[0] === ".") {
        if (t[1] === ".") {
          if (t[2] === "/") {
            t = t.slice(3);
            continue;
          }
        } else if (t[1] === "/") {
          t = t.slice(2);
          continue;
        }
      } else if (t[0] === "/" && t[1] === ".") {
        if (t[2] === "/") {
          t = t.slice(2);
          continue;
        } else if (t[2] === "." && t[3] === "/") {
          t = t.slice(3);
          if (r.length !== 0) {
            r.pop();
          }
          continue;
        }
      }
      if ((a = t.indexOf("/", 1)) === -1) {
        r.push(t);
        break;
      }
      r.push(t.slice(0, a));
      t = t.slice(a);
    }
    return r.join("");
  },
  isIPv4,
  isUUID,
  normalizeIPv6,
  stringArrayToHexStripped: function (e) {
    let t = "";
    let r = 0;
    let a = 0;
    for (a = 0; a < e.length; a++) {
      if ((r = e[a].charCodeAt(0)) !== 48) {
        if (
          !(
            (r >= 48 && r <= 57) ||
            (r >= 65 && r <= 70) ||
            (r >= 97 && r <= 102)
          )
        ) {
          return "";
        }
        t += e[a];
        break;
      }
    }
    for (a += 1; a < e.length; a++) {
      if (
        !(
          ((r = e[a].charCodeAt(0)) >= 48 && r <= 57) ||
          (r >= 65 && r <= 70) ||
          (r >= 97 && r <= 102)
        )
      ) {
        return "";
      }
      t += e[a];
    }
    return t;
  },
};
