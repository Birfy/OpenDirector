import { _, or } from "./module-uEg.js";
import { useFunc } from "./module-c5o.js";
import i from "./module-mcQ.js";
export default {
  keyword: "enum",
  schemaType: "array",
  $data: true,
  error: {
    message: "must be equal to one of the allowed values",
    params: ({ schemaCode }) => (0, _)`{allowedValues: ${schemaCode}}`,
  },
  code(e) {
    let t;
    let r;
    let { gen, data, $data, schema, schemaCode, it } = e;
    if (!$data && schema.length === 0) {
      throw Error("enum must have non-empty array");
    }
    let f = schema.length >= it.opts.loopEnum;
    let p = () => {
      if (t != null) {
        return t;
      }
      return (t = useFunc(gen, i));
    };
    if (f || $data) {
      r = gen.let("valid");
      e.block$data(r, function () {
        gen.assign(r, false);
        gen.forOf("v", schemaCode, (e) =>
          gen.if((0, _)`${p()}(${data}, ${e})`, () =>
            gen.assign(r, true).break(),
          ),
        );
      });
    } else {
      if (!Array.isArray(schema)) {
        throw Error("ajv implementation error");
      }
      let e = gen.const("vSchema", schemaCode);
      r = or(
        ...schema.map((t, r) => {
          var s;
          var i;
          let o;
          s = e;
          if (typeof (o = schema[(i = r)]) === "object" && o !== null) {
            return (0, _)`${p()}(${data}, ${s}[${i}])`;
          }
          return (0, _)`${data} === ${o}`;
        }),
      );
    }
    e.pass(r);
  },
};
