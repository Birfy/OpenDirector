var indexOf = function (J, Z) {
  if (J.indexOf) {
    return J.indexOf(Z);
  }
  for (let Q = 0; Q < J.length; Q++) {
    if (J[Q] === Z) {
      return Q;
    }
  }
  return -1;
};
var Object_keys = function (J) {
  if (Object.keys) {
    return Object.keys(J);
  }
  const Z = [];
  for (const Q in J) {
    Z.push(Q);
  }
  return Z;
};
var forEach = function (J, Z) {
  if (J.forEach) {
    return J.forEach(Z);
  }
  for (let Q = 0; Q < J.length; Q++) {
    Z(J[Q], Q, J);
  }
};
var defineProp = (() => {
  try {
    Object.defineProperty({}, "_", {});
    return function (J, Z, Q) {
      Object.defineProperty(J, Z, {
        writable: true,
        enumerable: false,
        configurable: true,
        value: Q,
      });
    };
  } catch (J) {
    return function (J, Z, Q) {
      J[Z] = Q;
    };
  }
})();
var globals = [
  "Array",
  "Boolean",
  "Date",
  "Error",
  "EvalError",
  "Function",
  "Infinity",
  "JSON",
  "Math",
  "NaN",
  "Number",
  "Object",
  "RangeError",
  "ReferenceError",
  "RegExp",
  "String",
  "SyntaxError",
  "TypeError",
  "URIError",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "undefined",
  "unescape",
];
function Context() {}
Context.prototype = {};
var Script = (exports.Script = function (J) {
  if (!(this instanceof Script)) {
    return new Script(J);
  }
  this.code = J;
});
Script.prototype.runInContext = function (J) {
  if (!(J instanceof Context)) {
    throw TypeError("needs a 'context' argument.");
  }
  const Z = document.createElement("iframe");
  if (!Z.style) {
    Z.style = {};
  }
  Z.style.display = "none";
  document.body.appendChild(Z);
  const Q = Z.contentWindow;
  let $ = Q.eval;
  const tt = Q.execScript;
  if (!$ && tt) {
    tt.call(Q, "null");
    $ = Q.eval;
  }
  forEach(Object_keys(J), function (Z) {
    Q[Z] = J[Z];
  });
  forEach(globals, function (Z) {
    if (J[Z]) {
      Q[Z] = J[Z];
    }
  });
  const te = Object_keys(Q);
  const tr = $.call(Q, this.code);
  forEach(Object_keys(Q), function (Z) {
    if (Z in J || indexOf(te, Z) === -1) {
      J[Z] = Q[Z];
    }
  });
  forEach(globals, function (Z) {
    if (!(Z in J)) {
      defineProp(J, Z, Q[Z]);
    }
  });
  document.body.removeChild(Z);
  return tr;
};
Script.prototype.runInThisContext = function () {
  return eval(this.code);
};
Script.prototype.runInNewContext = function (J) {
  const Z = Script.createContext(J);
  const Q = this.runInContext(Z);
  if (J) {
    forEach(Object_keys(Z), function (Q) {
      J[Q] = Z[Q];
    });
  }
  return Q;
};
forEach(Object_keys(Script.prototype), function (J) {
  exports[J] = Script[J] = function (Z) {
    const Q = Script(Z);
    return Q[J].apply(Q, [].slice.call(arguments, 1));
  };
});
exports.isContext = function (J) {
  return J instanceof Context;
};
exports.createScript = function (J) {
  return exports.Script(J);
};
exports.createContext = Script.createContext = function (J) {
  const Z = new Context();
  if (typeof J === "object") {
    forEach(Object_keys(J), function (Q) {
      Z[Q] = J[Q];
    });
  }
  return Z;
};
