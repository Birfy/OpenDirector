import $ from "./module-X_13.js";
export default function (J, Z) {
  const Q = [][J];
  return (
    !!Q &&
    $(function () {
      Q.call(
        null,
        Z ||
          function () {
            return 1;
          },
        1,
      );
    })
  );
}
