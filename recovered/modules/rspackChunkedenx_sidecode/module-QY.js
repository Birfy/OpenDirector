export default require("./module-X.js")(function () {
  if (typeof ArrayBuffer === "function") {
    const t = new ArrayBuffer(8);
    if (Object.isExtensible(t)) {
      Object.defineProperty(t, "a", {
        value: 8,
      });
    }
  }
});
