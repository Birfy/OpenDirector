const n = require("./module-lN_6.js")("iterator");
let o = false;
try {
  let a = 0;
  const i = {
    next: function () {
      return {
        done: !!a++,
      };
    },
    return: function () {
      o = true;
    },
  };
  i[n] = function () {
    return this;
  };
  Array.from(i, function () {
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
    const a = {};
    a[n] = function () {
      return {
        next: function () {
          return {
            done: (e = true),
          };
        },
      };
    };
    t(a);
  } catch (t) {}
  return e;
}
