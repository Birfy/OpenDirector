const n = require("./module-Nt_3.js")("iterator");
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
} catch (e) {}
export default function (e, t) {
  try {
    if (!t && !o) {
      return false;
    }
  } catch (e) {
    return false;
  }
  let r = false;
  try {
    const i = {};
    i[n] = function () {
      return {
        next: function () {
          return {
            done: (r = true),
          };
        },
      };
    };
    e(i);
  } catch (e) {}
  return r;
}
