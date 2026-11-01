import { Name, _, getProperty } from "./module-uEg.js";
import { _Code } from "./module-E2a.js";
export var Type;
let s;
export function checkUnknownRules(e, t = e.schema) {
  let { opts, self } = e;
  if (!opts.strictSchema || typeof t === "boolean") {
    return;
  }
  let keywords = self.RULES.keywords;
  for (let r in t) {
    if (!keywords[r]) {
      checkStrictMode(e, `unknown keyword: "${r}"`);
    }
  }
}
export const toHash = function (e) {
  let t = {};
  for (let r of e) {
    t[r] = true;
  }
  return t;
};
function l(e) {
  if (typeof e === "number") {
    return `${e}`;
  }
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
export function unescapeJsonPointer(e) {
  return e.replace(/~1/g, "/").replace(/~0/g, "~");
}
function c({ mergeNames, mergeToName, mergeValues, resultToName }) {
  return (s, o, n, l) => {
    let d =
      n === undefined
        ? o
        : n instanceof Name
          ? (o instanceof Name ? mergeNames(s, o, n) : mergeToName(s, o, n), n)
          : o instanceof Name
            ? (mergeToName(s, n, o), o)
            : mergeValues(o, n);
    if (l !== Name || d instanceof Name) {
      return d;
    }
    return resultToName(s, d);
  };
}
export function evaluatedPropsToName(e, t) {
  if (t === true) {
    return e.var("props", true);
  }
  let r = e.var("props", (0, _)`{}`);
  if (t !== undefined) {
    f(e, r, t);
  }
  return r;
}
function f(e, t, r) {
  Object.keys(r).forEach((r) => e.assign((0, _)`${t}${getProperty(r)}`, true));
}
export const alwaysValidSchema = function (e, t) {
  if (typeof t === "boolean") {
    return t;
  }
  return (
    Object.keys(t).length === 0 ||
    (checkUnknownRules(e, t),
    !((e, t) => {
      if (typeof e === "boolean") {
        return !e;
      }
      for (let r in e) {
        if (t[r]) {
          return true;
        }
      }
      return false;
    })(t, e.self.RULES.all))
  );
};
export const schemaHasRulesButRef = function (e, t) {
  if (typeof e === "boolean") {
    return !e;
  }
  for (let r in e) {
    if (r !== "$ref" && t.all[r]) {
      return true;
    }
  }
  return false;
};
export const schemaRefOrVal = function ({ topSchemaRef, schemaPath }, r, a, s) {
  if (!s) {
    if (typeof r === "number" || typeof r === "boolean") {
      return r;
    }
    if (typeof r === "string") {
      return (0, _)`${r}`;
    }
  }
  return (0, _)`${topSchemaRef}${schemaPath}${getProperty(a)}`;
};
export const unescapeFragment = function (e) {
  return unescapeJsonPointer(decodeURIComponent(e));
};
export const escapeFragment = function (e) {
  return encodeURIComponent(l(e));
};
export const eachItem = function (e, t) {
  if (Array.isArray(e)) {
    for (let r of e) {
      t(r);
    }
  } else {
    t(e);
  }
};
export const mergeEvaluated = {
  props: c({
    mergeNames: (e, t, r) =>
      e.if((0, _)`${r} !== true && ${t} !== undefined`, () => {
        e.if(
          (0, _)`${t} === true`,
          () => e.assign(r, true),
          () =>
            e
              .assign(r, (0, _)`${r} || {}`)
              .code((0, _)`Object.assign(${r}, ${t})`),
        );
      }),
    mergeToName: (e, t, r) =>
      e.if((0, _)`${r} !== true`, () => {
        if (t === true) {
          e.assign(r, true);
        } else {
          e.assign(r, (0, _)`${r} || {}`);
          f(e, r, t);
        }
      }),
    mergeValues: (e, t) =>
      e === true || {
        ...e,
        ...t,
      },
    resultToName: evaluatedPropsToName,
  }),
  items: c({
    mergeNames: (e, t, r) =>
      e.if((0, _)`${r} !== true && ${t} !== undefined`, () =>
        e.assign(r, (0, _)`${t} === true ? true : ${r} > ${t} ? ${r} : ${t}`),
      ),
    mergeToName: (e, t, r) =>
      e.if((0, _)`${r} !== true`, () =>
        e.assign(r, t === true || (0, _)`${r} > ${t} ? ${r} : ${t}`),
      ),
    mergeValues: (e, t) => e === true || Math.max(e, t),
    resultToName: (e, t) => e.var("items", t),
  }),
};
let p = {};
export function checkStrictMode(e, t, r = e.opts.strictSchema) {
  if (r) {
    t = `strict mode: ${t}`;
    if (r === true) {
      throw Error(t);
    }
    e.self.logger.warn(t);
  }
}
export const useFunc = function (e, ref) {
  return e.scopeValue("func", {
    ref,
    code: p[ref.code] || (p[ref.code] = new _Code(ref.code)),
  });
};
s = Type || (Type = {});
s[(s.Num = 0)] = "Num";
s[(s.Str = 1)] = "Str";
export const getErrorPath = function (e, t, r) {
  if (e instanceof Name) {
    let s = t === Type.Num;
    if (r) {
      if (s) {
        return (0, _)`"[" + ${e} + "]"`;
      }
      return (0, _)`"['" + ${e} + "']"`;
    }
    if (s) {
      return (0, _)`"/" + ${e}`;
    }
    return (0, _)`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
  }
  if (r) {
    return getProperty(e).toString();
  }
  return "/" + l(e);
};
