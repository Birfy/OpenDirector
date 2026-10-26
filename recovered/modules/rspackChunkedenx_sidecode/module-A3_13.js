const $ = require("./module-lN_12.js")("iterator");
let tt = false;
try {
  let te = 0;
  const tr = {
    next: function () {
      return {
        done: !!te++,
      };
    },
    return: function () {
      tt = true;
    },
  };
  tr[$] = function () {
    return this;
  };
  Array.from(tr, function () {
    throw 2;
  });
} catch (J) {}
export default function (J, Z) {
  try {
    if (!Z && !tt) {
      return false;
    }
  } catch (J) {
    return false;
  }
  let Q = false;
  try {
    const te = {};
    te[$] = function () {
      return {
        next: function () {
          return {
            done: (Q = true),
          };
        },
      };
    };
    J(te);
  } catch (J) {}
  return Q;
}
