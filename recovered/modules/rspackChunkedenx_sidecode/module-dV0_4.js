import n from "./module-A_5.js";
import i from "./module-J_5.js";
import o from "./module-Xy_2_4.js";
import s from "./module-O5_4.js";
const target = "WebAssembly";
const u = i[target];
const forced =
  Error("e", {
    cause: 7,
  }).cause !== 7;
const f = (t, r) => {
  const e = {};
  e[t] = s(t, r, forced);
  n(
    {
      global: true,
      constructor: true,
      arity: 1,
      forced,
    },
    e,
  );
};
const h = (t, r) => {
  if (u && u[t]) {
    const e = {};
    e[t] = s(target + "." + t, r, forced);
    n(
      {
        target,
        stat: true,
        constructor: true,
        arity: 1,
        forced,
      },
      e,
    );
  }
};
f("Error", function (t) {
  return function (r) {
    return o(t, this, arguments);
  };
});
f("EvalError", function (t) {
  return function (r) {
    return o(t, this, arguments);
  };
});
f("RangeError", function (t) {
  return function (r) {
    return o(t, this, arguments);
  };
});
f("ReferenceError", function (t) {
  return function (r) {
    return o(t, this, arguments);
  };
});
f("SyntaxError", function (t) {
  return function (r) {
    return o(t, this, arguments);
  };
});
f("TypeError", function (t) {
  return function (r) {
    return o(t, this, arguments);
  };
});
f("URIError", function (t) {
  return function (r) {
    return o(t, this, arguments);
  };
});
h("CompileError", function (t) {
  return function (r) {
    return o(t, this, arguments);
  };
});
h("LinkError", function (t) {
  return function (r) {
    return o(t, this, arguments);
  };
});
h("RuntimeError", function (t) {
  return function (r) {
    return o(t, this, arguments);
  };
});
