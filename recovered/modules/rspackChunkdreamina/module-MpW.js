import _a from "./module-vGh.js";
const _a_isUUID = _a.isUUID;
let s = /^([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-./:;=@]|%[\da-f]{2})+)$/iu;
let i = ["http", "https", "ws", "wss", "urn", "urn:uuid"];
function wsIsSecure(e) {
  return (
    e.secure === true ||
    (e.secure !== false &&
      !!e.scheme &&
      e.scheme.length === 3 &&
      (e.scheme[0] === "w" || e.scheme[0] === "W") &&
      (e.scheme[1] === "s" || e.scheme[1] === "S") &&
      (e.scheme[2] === "s" || e.scheme[2] === "S"))
  );
}
function parse(e) {
  if (!e.host) {
    e.error = e.error || "HTTP URIs must have a host.";
  }
  return e;
}
function serialize(e) {
  let t = String(e.scheme).toLowerCase() === "https";
  if (e.port === (t ? 443 : 80) || e.port === "") {
    e.port = undefined;
  }
  if (!e.path) {
    e.path = "/";
  }
  return e;
}
let http = {
  scheme: "http",
  domainHost: true,
  parse,
  serialize,
};
let https = {
  scheme: "https",
  domainHost: http.domainHost,
  parse,
  serialize,
};
let ws = {
  scheme: "ws",
  domainHost: true,
  parse: function (e) {
    e.secure = wsIsSecure(e);
    e.resourceName = (e.path || "/") + (e.query ? "?" + e.query : "");
    e.path = undefined;
    e.query = undefined;
    return e;
  },
  serialize: function (e) {
    if (e.port === (wsIsSecure(e) ? 443 : 80) || e.port === "") {
      e.port = undefined;
    }
    if (typeof e.secure === "boolean") {
      e.scheme = e.secure ? "wss" : "ws";
      e.secure = undefined;
    }
    if (e.resourceName) {
      let t = e.resourceName.indexOf("?");
      let r = t === -1 ? e.resourceName : e.resourceName.slice(0, t);
      e.path = r && r !== "/" ? r : undefined;
      e.query = t === -1 ? undefined : e.resourceName.slice(t + 1);
      e.resourceName = undefined;
    }
    e.fragment = undefined;
    return e;
  },
};
let wss = {
  scheme: "wss",
  domainHost: ws.domainHost,
  parse: ws.parse,
  serialize: ws.serialize,
};
let SCHEMES = {
  http,
  https,
  ws,
  wss,
  urn: {
    scheme: "urn",
    parse: function (e, t) {
      if (!e.path) {
        e.error = "URN can not be parsed";
        return e;
      }
      let r = e.path.match(s);
      if (r && r[0] === e.path) {
        let a = t.scheme || e.scheme || "urn";
        e.nid = r[1].toLowerCase();
        e.nss = r[2];
        let s = getSchemeHandler(`${a}:${t.nid || e.nid}`);
        e.path = undefined;
        if (s) {
          e = s.parse(e, t);
        }
      } else {
        e.error = e.error || "URN can not be parsed.";
      }
      return e;
    },
    serialize: function (e, t) {
      if (e.nid === undefined) {
        throw Error("URN without nid cannot be serialized");
      }
      let r = t.scheme || e.scheme || "urn";
      let a = e.nid.toLowerCase();
      let s = getSchemeHandler(`${r}:${t.nid || a}`);
      if (s) {
        e = s.serialize(e, t);
      }
      let i = e;
      let e_nss = e.nss;
      i.path = `${a || t.nid}:${e_nss}`;
      t.skipEscape = true;
      return i;
    },
    skipNormalize: true,
  },
  "urn:uuid": {
    scheme: "urn:uuid",
    parse: function (e, t) {
      e.uuid = e.nss;
      e.nss = undefined;
      if (!(t.tolerant || (e.uuid && _a_isUUID(e.uuid)))) {
        e.error = e.error || "UUID is not valid.";
      }
      return e;
    },
    serialize: function (e) {
      e.nss = (e.uuid || "").toLowerCase();
      return e;
    },
    skipNormalize: true,
  },
};
function getSchemeHandler(e) {
  return (e && (SCHEMES[e] || SCHEMES[e.toLowerCase()])) || undefined;
}
Object.setPrototypeOf(SCHEMES, null);
export default {
  wsIsSecure,
  SCHEMES,
  isValidSchemeName: function (e) {
    return i.indexOf(e) !== -1;
  },
  getSchemeHandler,
};
