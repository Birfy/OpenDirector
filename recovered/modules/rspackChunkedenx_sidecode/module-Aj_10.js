const n = require("./module-lN_9.js")("match");
export default function (t) {
  const e = /./;
  try {
    "/./"[t](e);
  } catch (r) {
    try {
      e[n] = false;
      return "/./"[t](e);
    } catch (t) {}
  }
  return false;
}
