const t = function (e, r, a) {
  if (typeof r === "function") {
    a = r;
    r = {};
  }
  const s = typeof (a = r.cb || a) === "function" ? a : a.pre || function () {};
  (function e(r, a, s, i, o, n, l, d, c, u) {
    if (i && typeof i === "object" && !Array.isArray(i)) {
      a(i, o, n, l, d, c, u);
      for (const f in i) {
        const p = i[f];
        if (Array.isArray(p)) {
          if (f in t.arrayKeywords) {
            for (let h = 0; h < p.length; h++) {
              e(r, a, s, p[h], o + "/" + f + "/" + h, n, o, f, i, h);
            }
          }
        } else if (f in t.propsKeywords) {
          if (p && typeof p === "object") {
            for (const m in p) {
              e(
                r,
                a,
                s,
                p[m],
                o + "/" + f + "/" + m.replace(/~/g, "~0").replace(/\//g, "~1"),
                n,
                o,
                f,
                i,
                m,
              );
            }
          }
        } else {
          if (f in t.keywords || (r.allKeys && !(f in t.skipKeywords))) {
            e(r, a, s, p, o + "/" + f, n, o, f, i);
          }
        }
      }
      s(i, o, n, l, d, c, u);
    }
  })(r, s, a.post || function () {}, e, "", e);
};
export default t;
t.keywords = {
  additionalItems: true,
  items: true,
  contains: true,
  additionalProperties: true,
  propertyNames: true,
  not: true,
  if: true,
  then: true,
  else: true,
};
t.arrayKeywords = {
  items: true,
  allOf: true,
  anyOf: true,
  oneOf: true,
};
t.propsKeywords = {
  $defs: true,
  definitions: true,
  properties: true,
  patternProperties: true,
  dependencies: true,
};
t.skipKeywords = {
  default: true,
  enum: true,
  const: true,
  required: true,
  maximum: true,
  minimum: true,
  exclusiveMaximum: true,
  exclusiveMinimum: true,
  multipleOf: true,
  maxLength: true,
  minLength: true,
  pattern: true,
  format: true,
  maxItems: true,
  minItems: true,
  uniqueItems: true,
  maxProperties: true,
  minProperties: true,
};
