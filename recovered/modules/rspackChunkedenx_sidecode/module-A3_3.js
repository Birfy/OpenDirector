const n = require("./module-lN_2.js")("iterator");
let i = false;
try {
  let o = 0;
  const s = {
    next: function () {
      return {
        done: !!o++,
      };
    },
    return: function () {
      i = true;
    },
  };
  s[n] = function () {
    return this;
  };
  Array.from(s, function () {
    throw 2;
  });
} catch (t) {}
export default function (t, r) {
  try {
    if (!r && !i) {
      return false;
    }
  } catch (t) {
    return false;
  }
  let e = false;
  try {
    const o = {};
    o[n] = function () {
      return {
        next: function () {
          return {
            done: (e = true),
          };
        },
      };
    };
    t(o);
  } catch (t) {}
  return e;
}
