import n from "./module-X_16.js";
export default function (r, t) {
  const e = [][r];
  return (
    !!e &&
    n(function () {
      e.call(
        null,
        t ||
          function () {
            return 1;
          },
        1,
      );
    })
  );
}
