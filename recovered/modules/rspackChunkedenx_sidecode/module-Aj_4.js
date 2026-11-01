const n = require("./module-lN_3.js")("match");
export default function (t) {
  const r = /./;
  try {
    "/./"[t](r);
  } catch (e) {
    try {
      r[n] = false;
      return "/./"[t](r);
    } catch (t) {}
  }
  return false;
}
