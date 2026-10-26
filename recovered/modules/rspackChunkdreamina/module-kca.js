import { reportError } from "./module-erD.js";
import { _ } from "./module-uEg.js";
import i from "./module-drl.js";
let o = {
  message: "boolean schema is false",
};
function n(it, t) {
  let { gen, data } = it;
  reportError(
    {
      gen,
      keyword: "false schema",
      data,
      schema: false,
      schemaCode: false,
      schemaValue: false,
      params: {},
      it,
    },
    o,
    undefined,
    t,
  );
}
export const topBoolOrEmptySchema = function (e) {
  let { gen, schema, validateName } = e;
  if (schema === false) {
    n(e, false);
  } else if (typeof schema === "object" && schema.$async === true) {
    gen.return(i.data);
  } else {
    gen.assign((0, _)`${validateName}.errors`, null);
    gen.return(true);
  }
};
export const boolOrEmptySchema = function (e, t) {
  let { gen, schema } = e;
  if (schema === false) {
    gen.var(t, false);
    n(e);
  } else {
    gen.var(t, true);
  }
};
