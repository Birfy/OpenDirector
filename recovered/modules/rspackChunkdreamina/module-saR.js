import a from "./module-czf.js";
import { _, getProperty, operators, or, str } from "./module-uEg.js";
let i = operators;
let o = {
  formatMaximum: {
    okStr: "<=",
    ok: i.LTE,
    fail: i.GT,
  },
  formatMinimum: {
    okStr: ">=",
    ok: i.GTE,
    fail: i.LT,
  },
  formatExclusiveMaximum: {
    okStr: "<",
    ok: i.LT,
    fail: i.GTE,
  },
  formatExclusiveMinimum: {
    okStr: ">",
    ok: i.GT,
    fail: i.LTE,
  },
};
export var A = {
  keyword: Object.keys(o),
  type: "string",
  schemaType: "string",
  $data: true,
  error: {
    message: ({ keyword, schemaCode }) =>
      (0, str)`should be ${o[keyword].okStr} ${schemaCode}`,
    params: ({ keyword, schemaCode }) =>
      (0, _)`{comparison: ${o[keyword].okStr}, limit: ${schemaCode}}`,
  },
  code(e) {
    let t;
    let r;
    let { gen, data, schemaCode, keyword, it } = e;
    let { opts, self } = it;
    if (!opts.validateFormats) {
      return;
    }
    let p = new a.KeywordCxt(it, self.RULES.all.format.definition, "format");
    function h(e) {
      return (0, _)`${e}.compare(${data}, ${schemaCode}) ${o[keyword].fail} 0`;
    }
    if (p.$data) {
      t = gen.scopeValue("formats", {
        ref: self.formats,
        code: opts.code.formats,
      });
      r = gen.const("fmt", (0, _)`${t}[${p.schemaCode}]`);
      e.fail$data(
        or(
          (0, _)`typeof ${r} != "object"`,
          (0, _)`${r} instanceof RegExp`,
          (0, _)`typeof ${r}.compare != "function"`,
          h(r),
        ),
      );
    } else {
      (() => {
        let p_schema = p.schema;
        let ref = self.formats[p_schema];
        if (!ref || ref === true) {
          return;
        }
        if (
          typeof ref !== "object" ||
          ref instanceof RegExp ||
          typeof ref.compare !== "function"
        ) {
          throw Error(
            `"${keyword}": format "${p_schema}" does not define "compare" function`,
          );
        }
        let a = gen.scopeValue("formats", {
          key: p_schema,
          ref,
          code: opts.code.formats
            ? (0, _)`${opts.code.formats}${getProperty(p_schema)}`
            : undefined,
        });
        e.fail$data(h(a));
      })();
    }
  },
  dependencies: ["format"],
};
export default (e) => {
  e.addKeyword(A);
  return e;
};
