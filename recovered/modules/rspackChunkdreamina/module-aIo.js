export default function (e, t) {
  const r = Array(arguments.length - 1);
  let n = 0;
  for (var i = 2, o = true; i < arguments.length;) {
    r[n++] = arguments[i++];
  }
  return new Promise((resolve, reject) => {
    r[n] = function (e) {
      if (o) {
        o = false;
        if (e) {
          reject(e);
        } else {
          for (var t = Array(arguments.length - 1), r = 0; r < t.length;) {
            t[r++] = arguments[r];
          }
          resolve.apply(null, t);
        }
      }
    };
    try {
      e.apply(t || null, r);
    } catch (error) {
      if (o) {
        o = false;
        reject(error);
      }
    }
  });
}
