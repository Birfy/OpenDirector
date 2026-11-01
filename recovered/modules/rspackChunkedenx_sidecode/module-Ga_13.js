import $ from "./module-A_13.js";
import assign from "./module-Eu_13.js";
$(
  {
    target: "Object",
    stat: true,
    arity: 2,
    forced: Object.assign !== assign,
  },
  {
    assign,
  },
);
