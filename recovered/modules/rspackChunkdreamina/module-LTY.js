export function E(e) {
  return function (t) {
    t(e);
    return {
      dispose() {},
    };
  };
}
export function j(e) {
  return function (t) {
    let r = setTimeout(() => {
      t(e);
    }, 0);
    return {
      dispose() {
        clearTimeout(r);
      },
    };
  };
}
