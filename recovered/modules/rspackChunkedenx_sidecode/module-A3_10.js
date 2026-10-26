const n = require("./module-lN_9.js")("iterator");
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
export default function (t, e) {
  try {
    if (!e && !o) {
      return false;
    }
  } catch (t) {
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
    t(i);
  } catch (t) {}
  return r;
}
