import n from "./module-N_8.js";
import i from "./module-W_2_8.js";
const _default = function (t, r) {
  return i[t] || (i[t] = r !== undefined ? r : {});
};
export default _default;
_default("versions", []).push({
  version: "3.32.2",
  mode: n ? "pure" : "global",
  copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE",
  source: "https://github.com/zloirock/core-js",
});
