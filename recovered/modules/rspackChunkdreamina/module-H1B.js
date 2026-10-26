export function y(e) {
  const t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  return new Promise((resolve, reject) => {
    var a = new Image();
    if (!t) {
      a.crossOrigin = "anonymous";
    }
    a.onload = function () {
      resolve(a);
    };
    a.onerror = function (e) {
      reject(e);
    };
    a.src = e;
  });
}
