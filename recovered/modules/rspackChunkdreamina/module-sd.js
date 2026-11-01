let n;
export function T() {
  if (n == null) {
    n = require
      .e("uyh")
      .then(require.bind(require, "WA"))
      .then((e) => {
        var { Lottie } = e;
        return Lottie;
      })
      .catch(() => undefined);
  }
  return n;
}
