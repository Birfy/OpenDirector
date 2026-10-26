const n = require("./module-lN_18.js")("iterator");
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
} catch (r) {}
export default function (r, t) {
  try {
    if (!t && !o) {
      return false;
    }
  } catch (r) {
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
    r(i);
  } catch (r) {}
  return e;
}
