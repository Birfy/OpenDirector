import { _, str } from "./module-uEg.js";
import { Type, alwaysValidSchema, checkStrictMode } from "./module-c5o.js";
export default {
  keyword: "contains",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  trackErrors: true,
  error: {
    message: ({ params: { min, max } }) => {
      if (max === undefined) {
        return (0, str)`must contain at least ${min} valid item(s)`;
      }
      return (0,
      str)`must contain at least ${min} and no more than ${max} valid item(s)`;
    },
    params: ({ params: { min, max } }) => {
      if (max === undefined) {
        return (0, _)`{minContains: ${min}}`;
      }
      return (0, _)`{minContains: ${min}, maxContains: ${max}}`;
    },
  },
  code(e) {
    let min;
    let max;
    let { gen, schema, parentSchema, data, it } = e;
    let { minContains, maxContains } = parentSchema;
    if (it.opts.next) {
      min = minContains === undefined ? 1 : minContains;
      max = maxContains;
    } else {
      min = 1;
    }
    let f = gen.const("len", (0, _)`${data}.length`);
    e.setParams({
      min,
      max,
    });
    if (max === undefined && min === 0) {
      return void checkStrictMode(
        it,
        '"minContains" == 0 without "maxContains": "contains" keyword ignored',
      );
    }
    if (max !== undefined && min > max) {
      checkStrictMode(it, '"minContains" > "maxContains" is always invalid');
      e.fail();
      return;
    }
    if (alwaysValidSchema(it, schema)) {
      let s = (0, _)`${f} >= ${min}`;
      if (max !== undefined) {
        s = (0, _)`${s} && ${f} <= ${max}`;
      }
      e.pass(s);
      return;
    }
    it.items = true;
    let p = gen.name("valid");
    function h() {
      let e = gen.name("_valid");
      let s = gen.let("count", 0);
      m(e, () =>
        gen.if(e, () => {
          var e;
          e = s;
          gen.code((0, _)`${e}++`);
          if (max === undefined) {
            gen.if((0, _)`${e} >= ${min}`, () => gen.assign(p, true).break());
          } else {
            gen.if((0, _)`${e} > ${max}`, () => gen.assign(p, false).break());
            if (min === 1) {
              gen.assign(p, true);
            } else {
              gen.if((0, _)`${e} >= ${min}`, () => gen.assign(p, true));
            }
          }
        }),
      );
    }
    function m(t, r) {
      gen.forRange("i", 0, f, (dataProp) => {
        e.subschema(
          {
            keyword: "contains",
            dataProp,
            dataPropType: Type.Num,
            compositeRule: true,
          },
          t,
        );
        r();
      });
    }
    if (max === undefined && min === 1) {
      m(p, () => gen.if(p, () => gen.break()));
    } else if (min === 0) {
      gen.let(p, true);
      if (max !== undefined) {
        gen.if((0, _)`${data}.length > 0`, h);
      }
    } else {
      gen.let(p, false);
      h();
    }
    e.result(p, () => e.reset());
  },
};
