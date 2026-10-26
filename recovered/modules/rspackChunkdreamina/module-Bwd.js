export var F = {};
function X(Z, X, $) {
  if (!$) {
    $ = Error;
  }
  const ee = ((Z) => {
    function Q(Q, $, ee) {
      return Z.call(this, typeof X === "string" ? X : X(Q, $, ee)) || this;
    }
    Q.prototype = Object.create(Z.prototype);
    Q.prototype.constructor = Q;
    Q.__proto__ = Z;
    return Q;
  })($);
  ee.prototype.name = $.name;
  ee.prototype.code = Z;
  F[Z] = ee;
}
function $(Z, Q) {
  if (!Array.isArray(Z)) {
    return "of ".concat(Q, " ").concat(String(Z));
  }
  const Z_length = Z.length;
  Z = Z.map((Z) => String(Z));
  if (Z_length > 2) {
    return (
      "one of "
        .concat(Q, " ")
        .concat(Z.slice(0, Z_length - 1).join(", "), ", or ") + Z[Z_length - 1]
    );
  }
  if (Z_length === 2) {
    return "one of ".concat(Q, " ").concat(Z[0], " or ").concat(Z[1]);
  }
  return "of ".concat(Q, " ").concat(Z[0]);
}
X(
  "ERR_INVALID_OPT_VALUE",
  function (Z, Q) {
    return 'The value "' + Q + '" is invalid for option "' + Z + '"';
  },
  TypeError,
);
X(
  "ERR_INVALID_ARG_TYPE",
  function (Z, Q, X) {
    if (
      typeof Q === "string" &&
      ((ee = "not "), Q.substr(0, ee.length) === ee)
    ) {
      ei = "must not be";
      Q = Q.replace(/^not /, "");
    } else {
      ei = "must be";
    }
    et = " argument";
    if (er === undefined || er > Z.length) {
      er = Z.length;
    }
    if (Z.substring(er - et.length, er) === et) {
      ea = "The ".concat(Z, " ").concat(ei, " ").concat($(Q, "type"));
    } else {
      var ee;
      var et;
      var er;
      let en;
      var ei;
      var ea;
      const eo = (typeof en !== "number" && (en = 0),
      en + 1 > Z.length || Z.indexOf(".", en) === -1)
        ? "argument"
        : "property";
      ea = 'The "'
        .concat(Z, '" ')
        .concat(eo, " ")
        .concat(ei, " ")
        .concat($(Q, "type"));
    }
    return ea + `. Received type ${typeof X}`;
  },
  TypeError,
);
X("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
X("ERR_METHOD_NOT_IMPLEMENTED", function (Z) {
  return "The " + Z + " method is not implemented";
});
X("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
X("ERR_STREAM_DESTROYED", function (Z) {
  return "Cannot call " + Z + " after a stream was destroyed";
});
X("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
X("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
X("ERR_STREAM_WRITE_AFTER_END", "write after end");
X("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
X(
  "ERR_UNKNOWN_ENCODING",
  function (Z) {
    return "Unknown encoding: " + Z;
  },
  TypeError,
);
X("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
