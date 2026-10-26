import { eachItem } from "./module-c5o.js";
import s from "./module-Wwf.js";
import i from "./module-V3r.js";
let o = new Set([
  "type",
  "format",
  "pattern",
  "maxLength",
  "minLength",
  "maxProperties",
  "minProperties",
  "maxItems",
  "minItems",
  "maximum",
  "minimum",
  "uniqueItems",
  "multipleOf",
  "required",
  "enum",
  "const",
]);
export const inlineRef = function (e, t = true) {
  return (
    typeof e === "boolean" ||
    (t === true
      ? !(function e(t) {
          for (let r in t) {
            if (n.has(r)) {
              return true;
            }
            let a = t[r];
            if (
              (Array.isArray(a) && a.some(e)) ||
              (typeof a === "object" && e(a))
            ) {
              return true;
            }
          }
          return false;
        })(e)
      : !!t &&
        (function e(t) {
          let r = 0;
          for (let s in t) {
            if (
              s === "$ref" ||
              (r++,
              !o.has(s) &&
                (typeof t[s] === "object" && eachItem(t[s], (t) => (r += e(t))),
                Infinity === r))
            ) {
              return Infinity;
            }
          }
          return r;
        })(e) <= t)
  );
};
let n = new Set([
  "$ref",
  "$recursiveRef",
  "$recursiveAnchor",
  "$dynamicRef",
  "$dynamicAnchor",
]);
export function getFullPath(e, t = "", r) {
  if (r !== false) {
    t = normalizeId(t);
  }
  let a = e.parse(t);
  return _getFullPath(e, a);
}
export function _getFullPath(e, t) {
  return e.serialize(t).split("#")[0] + "#";
}
let c = /#\/?$/;
export function normalizeId(e) {
  if (e) {
    return e.replace(c, "");
  }
  return "";
}
export const resolveUrl = function (e, t, r) {
  r = normalizeId(r);
  return e.resolve(t, r);
};
let f = /^[a-z_][-a-z0-9._]*$/i;
export const getSchemaRefs = function (e, t) {
  if (typeof e === "boolean") {
    return {};
  }
  let { schemaId, uriResolver } = this.opts;
  let o = normalizeId(e[schemaId] || t);
  let n = {
    "": o,
  };
  let d = getFullPath(uriResolver, o, false);
  let c = {};
  let p = new Set();
  i(
    e,
    {
      allKeys: true,
    },
    (e, t, a, s) => {
      if (s === undefined) {
        return;
      }
      let i = d + t;
      let o = n[s];
      function l(t) {
        let resolve = this.opts.uriResolver.resolve;
        t = normalizeId(o ? resolve(o, t) : t);
        if (p.has(t)) {
          throw m(t);
        }
        p.add(t);
        let a = this.refs[t];
        if (typeof a === "string") {
          a = this.refs[a];
        }
        if (typeof a === "object") {
          h(e, a.schema, t);
        } else {
          if (t !== normalizeId(i)) {
            if (t[0] === "#") {
              h(e, c[t], t);
              c[t] = e;
            } else {
              this.refs[t] = i;
            }
          }
        }
        return t;
      }
      function g(e) {
        if (typeof e === "string") {
          if (!f.test(e)) {
            throw Error(`invalid anchor "${e}"`);
          }
          l.call(this, `#${e}`);
        }
      }
      if (typeof e[schemaId] === "string") {
        o = l.call(this, e[schemaId]);
      }
      g.call(this, e.$anchor);
      g.call(this, e.$dynamicAnchor);
      n[t] = o;
    },
  );
  return c;
  function h(e, t, r) {
    if (t !== undefined && !s(e, t)) {
      throw m(r);
    }
  }
  function m(e) {
    return Error(`reference "${e}" resolves to more than one schema`);
  }
};
