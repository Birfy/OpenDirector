export default !require("./module-X_11.js")(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});
