export var T = (e) => {
  var { promise, resolve } = Promise.withResolvers();
  var r = typeof e === "string" ? e : URL.createObjectURL(e);
  var n = new Image();
  n.addEventListener("load", function () {
    resolve({
      width: n.width,
      height: n.height,
    });
  });
  n.addEventListener("error", () => {
    resolve(null);
  });
  n.src = r;
  n.crossOrigin = "anonymous";
  promise.finally(() => {
    if (typeof e !== "string") {
      URL.revokeObjectURL(r);
    }
  });
  return promise;
};
