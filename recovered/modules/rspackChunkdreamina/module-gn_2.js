export var I = (e) => {
  var { promise, resolve } = Promise.withResolvers();
  var s = typeof e === "string" ? e : URL.createObjectURL(e);
  var i = document.createElement("audio");
  i.addEventListener("loadedmetadata", () => {
    resolve({
      duration: i.duration,
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
