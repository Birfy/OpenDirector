let r;
export function T() {
  if (r == null) {
    r = require
      .e("uyh")
      .then(require.bind(require, "WA"))
      .then((e) => {
        var { Lottie } = e;
        return Lottie;
      })
      .catch(() => undefined);
  }
  return r;
}
