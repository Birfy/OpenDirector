export default require("./module-X_8.js")(function () {
  if (typeof ArrayBuffer === "function") {
    const r = new ArrayBuffer(8);
    if (Object.isExtensible(r)) {
      Object.defineProperty(r, "a", {
        value: 8,
      });
    }
  }
});
