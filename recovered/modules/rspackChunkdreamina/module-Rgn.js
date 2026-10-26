import { DataType, checkDataTypes, getSchemaTypes } from "./module-CPo.js";
import { _, str } from "./module-uEg.js";
import { useFunc } from "./module-c5o.js";
import o from "./module-mcQ.js";
export default {
  keyword: "uniqueItems",
  type: "array",
  schemaType: "boolean",
  $data: true,
  error: {
    message: ({ params: { i, j } }) =>
      (0,
      str)`must NOT have duplicate items (items ## ${j} and ${i} are identical)`,
    params: ({ params: { i, j } }) => (0, _)`{i: ${i}, j: ${j}}`,
  },
  code(e) {
    let { gen, data, $data, schema, parentSchema, schemaCode, it } = e;
    if (!$data && !schema) {
      return;
    }
    let f = gen.let("valid");
    let p = parentSchema.items ? getSchemaTypes(parentSchema.items) : [];
    e.block$data(
      f,
      function () {
        let i = gen.let("i", (0, _)`${data}.length`);
        let j = gen.let("j");
        e.setParams({
          i,
          j,
        });
        gen.assign(f, true);
        gen.if((0, _)`${i} > 1`, () =>
          (p.length > 0 && !p.some((e) => e === "object" || e === "array")
            ? function (i, o) {
                let n = gen.name("item");
                let l = checkDataTypes(
                  p,
                  n,
                  it.opts.strictNumbers,
                  DataType.Wrong,
                );
                let d = gen.const("indices", (0, _)`{}`);
                gen.for((0, _)`;${i}--;`, () => {
                  gen.let(n, (0, _)`${data}[${i}]`);
                  gen.if(l, (0, _)`continue`);
                  if (p.length > 1) {
                    gen.if(
                      (0, _)`typeof ${n} == "string"`,
                      (0, _)`${n} += "_"`,
                    );
                  }
                  gen
                    .if((0, _)`typeof ${d}[${n}] == "number"`, () => {
                      gen.assign(o, (0, _)`${d}[${n}]`);
                      e.error();
                      gen.assign(f, false).break();
                    })
                    .code((0, _)`${d}[${n}] = ${i}`);
                });
              }
            : function (a, n) {
                let l = useFunc(gen, o);
                let d = gen.name("outer");
                gen.label(d).for((0, _)`;${a}--;`, () =>
                  gen.for((0, _)`${n} = ${a}; ${n}--;`, () =>
                    gen.if((0, _)`${l}(${data}[${a}], ${data}[${n}])`, () => {
                      e.error();
                      gen.assign(f, false).break(d);
                    }),
                  ),
                );
              })(i, j),
        );
      },
      (0, _)`${schemaCode} === false`,
    );
    e.ok(f);
  },
};
