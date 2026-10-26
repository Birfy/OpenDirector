export var T = (e) => {
  var { promise, resolve } = Promise.withResolvers();
  var n = typeof e === "string" ? e : URL.createObjectURL(e);
  var r = new Image();
  r.addEventListener("load", function () {
    resolve({
      width: r.width,
      height: r.height,
    });
  });
  r.addEventListener("error", () => {
    resolve(null);
  });
  r.src = n;
  r.crossOrigin = "anonymous";
  promise.finally(() => {
    if (typeof e !== "string") {
      URL.revokeObjectURL(n);
    }
  });
  return promise;
};
