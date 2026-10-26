export default require("./module-VV_4.js")(function () {
  if (typeof ArrayBuffer === "function") {
    const e = new ArrayBuffer(8);
    if (Object.isExtensible(e)) {
      Object.defineProperty(e, "a", {
        value: 8,
      });
    }
  }
});
