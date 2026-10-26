import { _, getProperty, stringify } from "./module-uEg.js";
import { checkStrictMode } from "./module-c5o.js";
function i(e, t, r) {
  let { gen, compositeRule, data, opts } = e;
  if (r === undefined) {
    return;
  }
  let d = (0, _)`${data}${getProperty(t)}`;
  if (compositeRule) {
    return void checkStrictMode(e, `default is ignored for: ${d}`);
  }
  let c = (0, _)`${d} === undefined`;
  if (opts.useDefaults === "empty") {
    c = (0, _)`${c} || ${d} === null || ${d} === ""`;
  }
  gen.if(c, (0, _)`${d} = ${stringify(r)}`);
}
export const assignDefaults = function (e, t) {
  let { properties, items } = e.schema;
  if (t === "object" && properties) {
    for (let t in properties) {
      i(e, t, properties[t].default);
    }
  } else {
    if (t === "array" && Array.isArray(items)) {
      items.forEach((t, r) => i(e, r, t.default));
    }
  }
};
