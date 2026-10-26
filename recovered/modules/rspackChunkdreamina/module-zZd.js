import { _ } from "./module-uEg.js";
import { useFunc } from "./module-c5o.js";
import i from "./module-mcQ.js";
export default {
  keyword: "const",
  $data: true,
  error: {
    message: "must be equal to constant",
    params: ({ schemaCode }) => (0, _)`{allowedValue: ${schemaCode}}`,
  },
  code(e) {
    let { gen, data, $data, schemaCode, schema } = e;
    if ($data || (schema && typeof schema === "object")) {
      e.fail$data((0, _)`!${useFunc(gen, i)}(${data}, ${schemaCode})`);
    } else {
      e.fail((0, _)`${schema} !== ${data}`);
    }
  },
};
