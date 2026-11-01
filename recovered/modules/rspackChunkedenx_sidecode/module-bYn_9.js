import n from "./module-X_10.js";
export default function (t, e) {
  const r = [][t];
  return (
    !!r &&
    n(function () {
      r.call(
        null,
        e ||
          function () {
            return 1;
          },
        1,
      );
    })
  );
}
