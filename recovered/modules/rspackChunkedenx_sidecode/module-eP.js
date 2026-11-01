export default !require("./module-X.js")(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});
