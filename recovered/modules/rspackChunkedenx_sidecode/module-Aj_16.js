const n = require("./module-lN_15.js")("match");
export default function (r) {
  const t = /./;
  try {
    "/./"[r](t);
  } catch (e) {
    try {
      t[n] = false;
      return "/./"[r](t);
    } catch (r) {}
  }
  return false;
}
