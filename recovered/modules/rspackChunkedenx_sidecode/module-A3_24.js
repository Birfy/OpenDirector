const n = require("./module-lN_23.js")("iterator");
let o = false;
try {
  let i = 0;
  const a = {
    next: function () {
      return {
        done: !!i++,
      };
    },
    return: function () {
      o = true;
    },
  };
  a[n] = function () {
    return this;
  };
  Array.from(a, function () {
    throw 2;
  });
} catch (t) {}
export default function (t, r) {
  try {
    if (!r && !o) {
      return false;
    }
  } catch (t) {
    return false;
  }
  let e = false;
  try {
    const i = {};
    i[n] = function () {
      return {
        next: function () {
          return {
            done: (e = true),
          };
        },
      };
    };
    t(i);
  } catch (t) {}
  return e;
}
