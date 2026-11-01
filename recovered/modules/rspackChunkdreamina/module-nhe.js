import { _, not, str } from "./module-uEg.js";
import { alwaysValidSchema, checkStrictMode } from "./module-c5o.js";
function i(e, t) {
  let r = e.schema[t];
  return r !== undefined && !alwaysValidSchema(e, r);
}
export default {
  keyword: "if",
  schemaType: ["object", "boolean"],
  trackErrors: true,
  error: {
    message: ({ params }) => (0, str)`must match "${params.ifClause}" schema`,
    params: ({ params }) => (0, _)`{failingKeyword: ${params.ifClause}}`,
  },
  code(e) {
    let t;
    let { gen, parentSchema, it } = e;
    if (parentSchema.then === undefined && parentSchema.else === undefined) {
      checkStrictMode(it, '"if" without "then" and "else" is ignored');
    }
    let l = i(it, "then");
    let d = i(it, "else");
    if (!l && !d) {
      return;
    }
    let c = gen.let("valid", true);
    let u = gen.name("_valid");
    t = e.subschema(
      {
        keyword: "if",
        compositeRule: true,
        createErrors: false,
        allErrors: false,
      },
      u,
    );
    e.mergeEvaluated(t);
    e.reset();
    if (l && d) {
      let ifClause = gen.let("ifClause");
      e.setParams({
        ifClause,
      });
      gen.if(u, f("then", ifClause), f("else", ifClause));
    } else {
      if (l) {
        gen.if(u, f("then"));
      } else {
        gen.if(not(u), f("else"));
      }
    }
    function f(t, s) {
      return () => {
        let i = e.subschema(
          {
            keyword: t,
          },
          u,
        );
        gen.assign(c, u);
        e.mergeValidEvaluated(i, c);
        if (s) {
          gen.assign(s, (0, _)`${t}`);
        } else {
          e.setParams({
            ifClause: t,
          });
        }
      };
    }
    e.pass(c, () => e.error(true));
  },
};
