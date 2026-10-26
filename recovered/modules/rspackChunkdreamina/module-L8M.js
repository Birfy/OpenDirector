export var v = (e) => {
  var t = e;
  if (t === undefined) {
    try {
      if (
        typeof navigator === "undefined" ||
        navigator.userAgent === undefined ||
        !navigator.userAgent
      ) {
        return false;
      }
      t = navigator.userAgent;
    } catch (e) {
      return false;
    }
  }
  var a = String(t).toLowerCase();
  return /micromessenger/i.test(a);
};
