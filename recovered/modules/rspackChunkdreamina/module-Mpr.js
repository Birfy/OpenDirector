import { usePattern } from "./module-gcE.js";
import { useFunc } from "./module-c5o.js";
import { _, str } from "./module-uEg.js";
export default {
  keyword: "pattern",
  type: "string",
  schemaType: "string",
  $data: true,
  error: {
    message: ({ schemaCode }) => (0, str)`must match pattern "${schemaCode}"`,
    params: ({ schemaCode }) => (0, _)`{pattern: ${schemaCode}}`,
  },
  code(e) {
    let { gen, data, $data, schema, schemaCode, it } = e;
    let c = it.opts.unicodeRegExp ? "u" : "";
    if ($data) {
      let { regExp } = it.opts.code;
      let o =
        regExp.code === "new RegExp"
          ? (0, _)`new RegExp`
          : useFunc(gen, regExp);
      let n = gen.let("valid");
      gen.try(
        () => gen.assign(n, (0, _)`${o}(${schemaCode}, ${c}).test(${data})`),
        () => gen.assign(n, false),
      );
      e.fail$data((0, _)`!${n}`);
    } else {
      let t = usePattern(e, schema);
      e.fail$data((0, _)`!${t}.test(${data})`);
    }
  },
};
