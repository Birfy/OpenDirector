import $ from "./module-A_13.js";
import tt from "./module-J_13.js";
import te from "./module-Xy_3_2.js";
import tr from "./module-O5_12.js";
const target = "WebAssembly";
const ti = tt[target];
const forced =
  Error("e", {
    cause: 7,
  }).cause !== 7;
const ta = (J, Z) => {
  const Q = {};
  Q[J] = tr(J, Z, forced);
  $(
    {
      global: true,
      constructor: true,
      arity: 1,
      forced,
    },
    Q,
  );
};
const ts = (J, Z) => {
  if (ti && ti[J]) {
    const Q = {};
    Q[J] = tr(target + "." + J, Z, forced);
    $(
      {
        target,
        stat: true,
        constructor: true,
        arity: 1,
        forced,
      },
      Q,
    );
  }
};
ta("Error", function (J) {
  return function (Z) {
    return te(J, this, arguments);
  };
});
ta("EvalError", function (J) {
  return function (Z) {
    return te(J, this, arguments);
  };
});
ta("RangeError", function (J) {
  return function (Z) {
    return te(J, this, arguments);
  };
});
ta("ReferenceError", function (J) {
  return function (Z) {
    return te(J, this, arguments);
  };
});
ta("SyntaxError", function (J) {
  return function (Z) {
    return te(J, this, arguments);
  };
});
ta("TypeError", function (J) {
  return function (Z) {
    return te(J, this, arguments);
  };
});
ta("URIError", function (J) {
  return function (Z) {
    return te(J, this, arguments);
  };
});
ts("CompileError", function (J) {
  return function (Z) {
    return te(J, this, arguments);
  };
});
ts("LinkError", function (J) {
  return function (Z) {
    return te(J, this, arguments);
  };
});
ts("RuntimeError", function (J) {
  return function (Z) {
    return te(J, this, arguments);
  };
});
