import n from "./module-A_19.js";
import o from "./module-J_19.js";
import i from "./module-Xy_2_18.js";
import a from "./module-O5_18.js";
const target = "WebAssembly";
const u = o[target];
const forced =
  Error("e", {
    cause: 7,
  }).cause !== 7;
const f = (r, t) => {
  const e = {};
  e[r] = a(r, t, forced);
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
const h = (r, t) => {
  if (u && u[r]) {
    const e = {};
    e[r] = a(target + "." + r, t, forced);
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
f("Error", function (r) {
  return function (t) {
    return i(r, this, arguments);
  };
});
f("EvalError", function (r) {
  return function (t) {
    return i(r, this, arguments);
  };
});
f("RangeError", function (r) {
  return function (t) {
    return i(r, this, arguments);
  };
});
f("ReferenceError", function (r) {
  return function (t) {
    return i(r, this, arguments);
  };
});
f("SyntaxError", function (r) {
  return function (t) {
    return i(r, this, arguments);
  };
});
f("TypeError", function (r) {
  return function (t) {
    return i(r, this, arguments);
  };
});
f("URIError", function (r) {
  return function (t) {
    return i(r, this, arguments);
  };
});
h("CompileError", function (r) {
  return function (t) {
    return i(r, this, arguments);
  };
});
h("LinkError", function (r) {
  return function (t) {
    return i(r, this, arguments);
  };
});
h("RuntimeError", function (r) {
  return function (t) {
    return i(r, this, arguments);
  };
});
