import n from "./module-X_5.js";
export default function (t, r) {
  const e = [][t];
  return (
    !!e &&
    n(function () {
      e.call(
        null,
        r ||
          function () {
            return 1;
          },
        1,
      );
    })
  );
}
