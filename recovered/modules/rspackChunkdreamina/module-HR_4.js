export var H = (e) => {
  var { promise, resolve } = Promise.withResolvers();
  var s = typeof e === "string" ? e : URL.createObjectURL(e);
  var i = document.createElement("video");
  i.addEventListener("loadedmetadata", () => {
    resolve({
      duration: i.duration,
      width: i.videoWidth,
      height: i.videoHeight,
    });
  });
  i.addEventListener("error", () => {
    resolve(null);
  });
  i.src = s;
  i.preload = "metadata";
  promise.finally(() => {
    if (typeof e !== "string") {
      URL.revokeObjectURL(s);
    }
  });
  return promise;
};
