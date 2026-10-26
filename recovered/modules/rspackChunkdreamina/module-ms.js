import n from "./module-VV_4.js";
export default function (e, t) {
  const r = [][e];
  return (
    !!r &&
    n(function () {
      r.call(
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
