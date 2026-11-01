export default require("./module-X_3.js")(function () {
  if (typeof ArrayBuffer === "function") {
    const t = new ArrayBuffer(8);
    if (Object.isExtensible(t)) {
      Object.defineProperty(t, "a", {
        value: 8,
      });
    }
  }
});
