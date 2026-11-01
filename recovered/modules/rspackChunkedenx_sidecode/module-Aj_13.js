const $ = require("./module-lN_12.js")("match");
export default function (J) {
  const Z = /./;
  try {
    "/./"[J](Z);
  } catch (Q) {
    try {
      Z[$] = false;
      return "/./"[J](Z);
    } catch (J) {}
  }
  return false;
}
