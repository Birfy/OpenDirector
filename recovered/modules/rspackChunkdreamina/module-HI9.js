import _a from "./module-vGh.js";
import _m from "./module-MpW.js";
const _a_normalizeIPv6 = _a.normalizeIPv6;
const _a_removeDotSegments = _a.removeDotSegments;
const _a_recomposeAuthority = _a.recomposeAuthority;
const _a_normalizePercentEncoding = _a.normalizePercentEncoding;
const _a_normalizePathEncoding = _a.normalizePathEncoding;
const _a_serializePathEncoding = _a.serializePathEncoding;
const _a_normalizeQueryFragmentEncoding = _a.normalizeQueryFragmentEncoding;
const _a_encodeQuery = _a.encodeQuery;
const _a_encodeFragment = _a.encodeFragment;
const _a_reescapeHostDelimiters = _a.reescapeHostDelimiters;
const _a_isIPv4 = _a.isIPv4;
const _a_nonSimpleDomain = _a.nonSimpleDomain;
const _m_SCHEMES = _m.SCHEMES;
const _m_getSchemeHandler = _m.getSchemeHandler;
let y = /^[A-Za-z][A-Za-z0-9+.-]*$/u;
let v = "URI scheme is malformed.";
function _(scheme) {
  let t = unescape(String(scheme));
  if (!y.test(t)) {
    throw TypeError(v);
  }
  return t;
}
function resolveComponent(e, t, r, a) {
  let i = {};
  if (!a) {
    e = parse(serialize(e, r), r);
    t = parse(serialize(t, r), r);
  }
  if (!(r = r || {}).tolerant && t.scheme) {
    i.scheme = t.scheme;
    i.userinfo = t.userinfo;
    i.host = t.host;
    i.port = t.port;
    i.path = _a_removeDotSegments(t.path || "");
    i.query = t.query;
  } else {
    if (
      t.userinfo !== undefined ||
      t.host !== undefined ||
      t.port !== undefined
    ) {
      i.userinfo = t.userinfo;
      i.host = t.host;
      i.port = t.port;
      i.path = _a_removeDotSegments(t.path || "");
      i.query = t.query;
    } else {
      if (t.path) {
        if (t.path[0] === "/") {
          i.path = _a_removeDotSegments(t.path);
        } else {
          if (
            (e.userinfo === undefined &&
              e.host === undefined &&
              e.port === undefined) ||
            e.path
          ) {
            if (e.path) {
              i.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path;
            } else {
              i.path = t.path;
            }
          } else {
            i.path = "/" + t.path;
          }
          i.path = _a_removeDotSegments(i.path);
        }
        i.query = t.query;
      } else {
        i.path = e.path;
        if (t.query !== undefined) {
          i.query = t.query;
        } else {
          i.query = e.query;
        }
      }
      i.userinfo = e.userinfo;
      i.host = e.host;
      i.port = e.port;
    }
    i.scheme = e.scheme;
  }
  i.fragment = t.fragment;
  return i;
}
function serialize(e, t) {
  let r = {
    host: e.host,
    scheme: e.scheme,
    userinfo: e.userinfo,
    port: e.port,
    path: e.path,
    query: e.query,
    nid: e.nid,
    nss: e.nss,
    uuid: e.uuid,
    fragment: e.fragment,
    reference: e.reference,
    resourceName: e.resourceName,
    secure: e.secure,
    error: "",
  };
  let a = {
    ...t,
  };
  let n = [];
  if (r.scheme) {
    r.scheme = _(r.scheme);
  }
  let d = _m_getSchemeHandler(a.scheme || r.scheme);
  if (d && d.serialize) {
    d.serialize(r, a);
  }
  let f =
    r.userinfo !== undefined || r.host !== undefined || r.port !== undefined;
  let p = !a.skipEscape && r.scheme === undefined && !f;
  if (r.path !== undefined) {
    if (a.skipEscape) {
      r.path = _a_normalizePercentEncoding(r.path);
    } else {
      r.path = _a_serializePathEncoding(r.path, p);
    }
  }
  if (a.reference !== "suffix" && r.scheme) {
    r.scheme = _(r.scheme);
    n.push(r.scheme, ":");
  }
  let h = _a_recomposeAuthority(r);
  if (h !== undefined) {
    if (a.reference !== "suffix") {
      n.push("//");
    }
    n.push(h);
    if (r.path && r.path[0] !== "/") {
      n.push("/");
    }
  }
  if (r.path !== undefined) {
    let e = r.path;
    if (!(a.absolutePath || (d && d.absolutePath))) {
      e = _a_removeDotSegments(e);
    }
    if (p) {
      e = _a_serializePathEncoding(e, true);
    }
    if (h === undefined && e[0] === "/" && e[1] === "/") {
      e = "/%2F" + e.slice(2);
    }
    n.push(e);
  }
  if (r.query !== undefined) {
    n.push("?", _a_encodeQuery(r.query));
  }
  if (r.fragment !== undefined) {
    n.push("#", _a_encodeFragment(r.fragment));
  }
  return n.join("");
}
let b =
  /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
let k = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
let E = /^(?:[^#/:?]+:)?([/\\\t\n\r]*)/;
function S(e) {
  if (e === undefined) {
    return false;
  }
  let t = e.indexOf("%");
  while (t !== -1) {
    if (t + 2 >= e.length || !/^[\da-f]{2}$/iu.test(e.slice(t + 1, t + 3))) {
      return true;
    }
    t = e.indexOf("%", t + 3);
  }
  return false;
}
function T(e) {
  return e[0] === "[" && e[e.length - 1] === "]";
}
function P(e, t, r, a) {
  if (
    !t.unicodeSupport &&
    (!r || !r.unicodeSupport) &&
    e.host &&
    !T(e.host) &&
    (t.domainHost || (r && r.domainHost)) &&
    a === false &&
    _a_nonSimpleDomain(e.host)
  ) {
    try {
      e.host = new URL("http://" + e.host).hostname;
    } catch (error) {
      e.error =
        e.error || "Host's domain name can not be converted to ASCII: " + error;
      return true;
    }
  }
  return false;
}
function I(e, t) {
  let r = {
    ...t,
  };
  let parsed = {
    scheme: undefined,
    userinfo: undefined,
    host: "",
    port: undefined,
    path: "",
    query: undefined,
    fragment: undefined,
  };
  let malformedAuthorityOrPort = false;
  let malformedPercentEncoding = false;
  let malformedSchemeSpecific = false;
  let malformedHost = false;
  let h = false;
  let malformedScheme = false;
  let $ = false;
  if (r.reference === "suffix") {
    e = r.scheme ? r.scheme + ":" + e : "//" + e;
  }
  let w = e.match(k);
  if (w !== null && w[1].indexOf("\\") !== -1) {
    parsed.error = "URI authority must not contain a literal backslash.";
    malformedAuthorityOrPort = true;
  }
  let I = e.match(E);
  if (I !== null) {
    let e = I[1];
    let t = e.replace(/[\t\n\r]/g, "");
    if (t.length >= 2) {
      if (t.slice(0, 2) !== "//") {
        parsed.error =
          parsed.error || "URI authority must not contain a literal backslash.";
        malformedAuthorityOrPort = true;
      } else if (e.length !== t.length) {
        parsed.error =
          parsed.error ||
          "URI authority introducer must not contain whitespace.";
        malformedAuthorityOrPort = true;
      }
    }
  }
  let x = e.match(b);
  if (x) {
    let t;
    parsed.scheme = x[1];
    parsed.userinfo = x[3];
    parsed.host = x[4];
    parsed.port = parseInt(x[5], 10);
    parsed.path = x[6] || "";
    parsed.query = x[7];
    parsed.fragment = x[8];
    if (parsed.scheme !== undefined) {
      let e = unescape(parsed.scheme);
      if (y.test(e)) {
        parsed.scheme = e.toLowerCase();
      } else {
        parsed.error = parsed.error || v;
        malformedScheme = true;
      }
    }
    t = x[4];
    if (
      (malformedPercentEncoding =
        S(x[3]) ||
        (t !== undefined && !T(t) && S(t)) ||
        S(x[6]) ||
        S(x[7]) ||
        S(x[8]))
    ) {
      parsed.error = parsed.error || "URI contains malformed percent-encoding.";
    }
    if (isNaN(parsed.port)) {
      parsed.port = x[5];
    }
    let w =
      x[2] !== undefined && parsed.path && parsed.path[0] !== "/"
        ? 'URI path must start with "/" when authority is present.'
        : typeof parsed.port === "number" &&
            (parsed.port < 0 || parsed.port > 65535)
          ? "URI port is malformed."
          : undefined;
    if (w !== undefined) {
      parsed.error = parsed.error || w;
      malformedAuthorityOrPort = true;
    }
    if (parsed.host) {
      if (_a_isIPv4(parsed.host) === false) {
        let e = T(parsed.host);
        let t =
          parsed.host.indexOf("[") !== -1 || parsed.host.indexOf("]") !== -1;
        let r = _a_normalizeIPv6(parsed.host);
        $ = r.isIPV6 || r.isIPVFuture === true;
        h = t && (!e || r.error === true);
        parsed.host = $ ? r.host : r.host.toLowerCase();
        if (h) {
          parsed.error = parsed.error || "URI host is malformed.";
          malformedAuthorityOrPort = true;
        }
      } else {
        $ = true;
      }
    }
    if (
      parsed.scheme !== undefined ||
      parsed.userinfo !== undefined ||
      parsed.host !== undefined ||
      parsed.port !== undefined ||
      parsed.query !== undefined ||
      parsed.path
    ) {
      if (parsed.scheme === undefined) {
        parsed.reference = "relative";
      } else if (parsed.fragment === undefined) {
        parsed.reference = "absolute";
      } else {
        parsed.reference = "uri";
      }
    } else {
      parsed.reference = "same-document";
    }
    if (
      r.reference &&
      r.reference !== "suffix" &&
      r.reference !== parsed.reference
    ) {
      parsed.error =
        parsed.error || "URI is not a " + r.reference + " reference.";
    }
    let b = _m_getSchemeHandler(r.scheme || parsed.scheme);
    if (!h) {
      malformedHost = P(parsed, r, b, $);
    }
    if (!b || (b && !b.skipNormalize)) {
      if (e.indexOf("%") !== -1 && parsed.host !== undefined && !h) {
        let e = $
          ? parsed.host
          : _a_normalizePercentEncoding(parsed.host, true);
        parsed.host = _a_reescapeHostDelimiters(e, $);
      }
      if (parsed.path) {
        parsed.path = _a_normalizePathEncoding(parsed.path);
      }
      if (parsed.query) {
        parsed.query = _a_normalizeQueryFragmentEncoding(parsed.query);
      }
      if (parsed.fragment) {
        parsed.fragment = _a_normalizeQueryFragmentEncoding(parsed.fragment);
      }
    }
    if (b && b.parse) {
      b.parse(parsed, r);
      if (b === _m_SCHEMES.urn && parsed.nid === undefined) {
        malformedSchemeSpecific = true;
      }
    }
  } else {
    parsed.error = parsed.error || "URI can not be parsed.";
  }
  return {
    parsed,
    malformedAuthorityOrPort,
    malformedPercentEncoding,
    malformedSchemeSpecific,
    malformedHost,
    malformedScheme,
  };
}
function parse(e, t) {
  return I(e, t).parsed;
}
function j(e, t) {
  let {
    parsed,
    malformedAuthorityOrPort,
    malformedPercentEncoding,
    malformedSchemeSpecific,
    malformedHost,
    malformedScheme,
  } = I(e, t);
  return {
    normalized:
      malformedAuthorityOrPort ||
      malformedPercentEncoding ||
      malformedSchemeSpecific ||
      malformedHost ||
      malformedScheme
        ? e
        : serialize(parsed, t),
    malformedAuthorityOrPort,
    malformedPercentEncoding,
    malformedSchemeSpecific,
    malformedHost,
    malformedScheme,
  };
}
function R(e, t) {
  let r;
  if (typeof e !== "string" && typeof e !== "object") {
    return;
  }
  try {
    r = typeof e === "string" ? e : serialize(e, t);
  } catch {
    return;
  }
  let {
    normalized,
    malformedAuthorityOrPort,
    malformedPercentEncoding,
    malformedSchemeSpecific,
    malformedHost,
    malformedScheme,
  } = j(r, t);
  if (
    malformedAuthorityOrPort ||
    malformedPercentEncoding ||
    malformedSchemeSpecific ||
    malformedHost ||
    malformedScheme
  ) {
    return undefined;
  }
  return normalized;
}
export let fastUri = {
  SCHEMES: _m_SCHEMES,
  normalize: function (e, t) {
    if (typeof e === "string") {
      e = j(e, t).normalized;
    } else if (typeof e === "object") {
      e = parse(serialize(e, t), t);
    }
    return e;
  },
  resolve: function (e, t, r) {
    let s = r
      ? {
          scheme: "null",
          ...r,
        }
      : {
          scheme: "null",
        };
    let {
      parsed,
      malformedAuthorityOrPort,
      malformedPercentEncoding,
      malformedSchemeSpecific,
      malformedHost,
      malformedScheme,
    } = I(e, s);
    let {
      parsed: parsed_1,
      malformedAuthorityOrPort: malformedAuthorityOrPort_1,
      malformedPercentEncoding: malformedPercentEncoding_1,
      malformedSchemeSpecific: malformedSchemeSpecific_1,
      malformedHost: malformedHost_1,
      malformedScheme: malformedScheme_1,
    } = I(t, s);
    if (
      malformedAuthorityOrPort ||
      malformedAuthorityOrPort_1 ||
      malformedPercentEncoding ||
      malformedPercentEncoding_1 ||
      malformedSchemeSpecific ||
      malformedSchemeSpecific_1 ||
      malformedHost ||
      malformedHost_1 ||
      malformedScheme ||
      malformedScheme_1
    ) {
      throw Error(parsed.error || parsed_1.error || "URI is malformed.");
    }
    let _ = resolveComponent(parsed, parsed_1, s, true);
    let b = _m_getSchemeHandler((r && r.scheme) || _.scheme);
    let __host = _.host;
    P(
      _,
      r || {},
      b,
      __host !== undefined &&
        __host !== "" &&
        (_a_isIPv4(__host) || _a_normalizeIPv6(__host).isIPV6),
    );
    let E = __host && __host.indexOf("%") !== -1 && !/\P{ASCII}/u.test(__host);
    if (_.error && !E) {
      throw Error(_.error);
    }
    s.skipEscape = true;
    return serialize(_, s);
  },
  resolveComponent,
  equal: function (e, t, r) {
    let a = R(e, r);
    let s = R(t, r);
    return a !== undefined && s !== undefined && a === s;
  },
  serialize,
  parse,
};
fastUri;
export default fastUri;
fastUri.fastUri = fastUri;
