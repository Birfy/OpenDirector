export default require("./module-X_15.js")(function () {
  if (typeof ArrayBuffer === "function") {
    const t = new ArrayBuffer(8);
    if (Object.isExtensible(t)) {
      Object.defineProperty(t, "a", {
        value: 8,
      });
    }
  }
});
