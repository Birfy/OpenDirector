export function A(t) {
  let e = false;
  return {
    promise: new Promise((resolve, reject) => {
      t.then((t) => !e && resolve(t)).catch((t) => !e && reject(t));
    }),
    cancel: function () {
      e = true;
    },
  };
}
