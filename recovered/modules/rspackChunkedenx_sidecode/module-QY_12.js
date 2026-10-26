export default require("./module-X_13.js")(function () {
  if (typeof ArrayBuffer === "function") {
    const J = new ArrayBuffer(8);
    if (Object.isExtensible(J)) {
      Object.defineProperty(J, "a", {
        value: 8,
      });
    }
  }
});
