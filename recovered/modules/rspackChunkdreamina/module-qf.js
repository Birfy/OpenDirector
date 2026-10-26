import $ from "rCO";
export default global.process && global.process.browser
  ? "utf-8"
  : global.process && global.process.version
    ? parseInt($.version.split(".")[0].slice(1), 10) >= 6
      ? "utf-8"
      : "binary"
    : "utf-8";
