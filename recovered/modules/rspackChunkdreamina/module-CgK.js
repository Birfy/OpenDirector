import o from "bT";
export const A = function (t, e) {
  o.useEffect(function () {
    const e = t();
    return function () {
      e.then((t) => {
        if (typeof t === "function") {
          t();
        }
      });
    };
  }, e);
};
