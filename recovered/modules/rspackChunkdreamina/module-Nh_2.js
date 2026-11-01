import { xI } from "./module-p3K.js";
import { k8 } from "./module-s2v.js";
let o = (e, t) => {
  e.name = "$ZodError";
  Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: false,
  });
  Object.defineProperty(e, "issues", {
    value: t,
    enumerable: false,
  });
  Object.defineProperty(e, "message", {
    get: () => JSON.stringify(t, k8, 2),
    enumerable: true,
  });
  Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: false,
  });
};
export let a$ = xI("$ZodError", o);
export let Kd = xI("$ZodError", o, {
  Parent: Error,
});
export function JM(e, t = (e) => e.message) {
  let fieldErrors = {};
  let formErrors = [];
  for (let i of e.issues) {
    if (i.path.length > 0) {
      fieldErrors[i.path[0]] = fieldErrors[i.path[0]] || [];
      fieldErrors[i.path[0]].push(t(i));
    } else {
      formErrors.push(t(i));
    }
  }
  return {
    formErrors,
    fieldErrors,
  };
}
export function Wk(e, t) {
  let n = t || ((e) => e.message);
  let r = {
    _errors: [],
  };
  let i = (e) => {
    for (let t of e.issues) {
      if (t.code === "invalid_union" && t.errors.length) {
        t.errors.map((issues) =>
          i({
            issues,
          }),
        );
      } else if (t.code === "invalid_key") {
        i({
          issues: t.issues,
        });
      } else if (t.code === "invalid_element") {
        i({
          issues: t.issues,
        });
      } else if (t.path.length === 0) {
        r._errors.push(n(t));
      } else {
        let e = r;
        let i = 0;
        while (i < t.path.length) {
          let r = t.path[i];
          if (i === t.path.length - 1) {
            e[r] = e[r] || {
              _errors: [],
            };
            e[r]._errors.push(n(t));
          } else {
            e[r] = e[r] || {
              _errors: [],
            };
          }
          e = e[r];
          i++;
        }
      }
    }
  };
  i(e);
  return r;
}
