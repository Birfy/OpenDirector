import { _, getProperty, nil, or, regexpCode, str } from "./module-uEg.js";
export default {
  keyword: "format",
  type: ["number", "string"],
  schemaType: "string",
  $data: true,
  error: {
    message: ({ schemaCode }) => (0, str)`must match format "${schemaCode}"`,
    params: ({ schemaCode }) => (0, _)`{format: ${schemaCode}}`,
  },
  code(e, t) {
    let r;
    let s;
    let i;
    let o;
    let n;
    let l;
    let { gen, data, $data, schema, schemaCode, it } = e;
    let { opts, errSchemaPath, schemaEnv, self } = it;
    if (opts.validateFormats) {
      if ($data) {
        r = gen.scopeValue("formats", {
          ref: self.formats,
          code: opts.code.formats,
        });
        s = gen.const("fDef", (0, _)`${r}[${schemaCode}]`);
        i = gen.let("fType");
        o = gen.let("format");
        gen.if(
          (0, _)`typeof ${s} == "object" && !(${s} instanceof RegExp)`,
          () =>
            gen
              .assign(i, (0, _)`${s}.type || "string"`)
              .assign(o, (0, _)`${s}.validate`),
          () => gen.assign(i, (0, _)`"string"`).assign(o, s),
        );
        e.fail$data(
          or(
            opts.strictSchema === false ? nil : (0, _)`${schemaCode} && !${o}`,
            ((n = schemaEnv.$async
              ? (0, _)`(${s}.async ? await ${o}(${data}) : ${o}(${data}))`
              : (0, _)`${o}(${data})`),
            (l = (0,
            _)`(typeof ${o} == "function" ? ${n} : ${o}.test(${data}))`),
            (0, _)`${o} && ${o} !== true && ${i} === ${t} && !${l}`),
          ),
        );
      } else {
        (() => {
          let ref;
          let code;
          let i;
          let o = self.formats[schema];
          if (!o) {
            if (opts.strictSchema === false) {
              return self.logger.warn(n());
            }
            throw Error(n());
            function n() {
              return `unknown format "${schema}" ignored in schema at path "${errSchemaPath}"`;
            }
          }
          if (o === true) {
            return;
          }
          code =
            (ref = o) instanceof RegExp
              ? regexpCode(ref)
              : opts.code.formats
                ? (0, _)`${opts.code.formats}${getProperty(schema)}`
                : undefined;
          i = gen.scopeValue("formats", {
            key: schema,
            ref,
            code,
          });
          let [l, u, p] =
            typeof ref !== "object" || ref instanceof RegExp
              ? ["string", ref, i]
              : [ref.type || "string", ref.validate, (0, _)`${i}.validate`];
          if (l === t) {
            e.pass(
              (() => {
                if (
                  typeof o === "object" &&
                  !(o instanceof RegExp) &&
                  o.async
                ) {
                  if (!schemaEnv.$async) {
                    throw Error("async format in sync schema");
                  }
                  return (0, _)`await ${p}(${data})`;
                }
                if (typeof u === "function") {
                  return (0, _)`${p}(${data})`;
                }
                return (0, _)`${p}.test(${data})`;
              })(),
            );
          }
        })();
      }
    }
  },
};
