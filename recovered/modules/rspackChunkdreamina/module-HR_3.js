export var H = (e) => {
  var { promise, resolve } = Promise.withResolvers();
  var r = typeof e === "string" ? e : URL.createObjectURL(e);
  var n = document.createElement("video");
  n.addEventListener("loadedmetadata", () => {
    resolve({
      duration: n.duration,
      width: n.videoWidth,
      height: n.videoHeight,
    });
  });
  n.addEventListener("error", () => {
    resolve(null);
  });
  n.src = r;
  n.preload = "metadata";
  promise.finally(() => {
    if (typeof e !== "string") {
      URL.revokeObjectURL(r);
    }
  });
  return promise;
};
