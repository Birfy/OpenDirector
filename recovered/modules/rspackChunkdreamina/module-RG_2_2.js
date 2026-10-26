const n = require("./module-Nt_3.js")("match");
export default function (e) {
  const t = /./;
  try {
    "/./"[e](t);
  } catch (r) {
    try {
      t[n] = false;
      return "/./"[e](t);
    } catch (e) {}
  }
  return false;
}
