import $ from "./module-YR_12.js";
const tt = (size) => ({
  size,
  has: function () {
    return false;
  },
  keys: function () {
    return {
      next: function () {
        return {
          done: true,
        };
      },
    };
  },
});
export default function (J) {
  const Z = $("Set");
  try {
    new Z()[J](tt(0));
    try {
      new Z()[J](tt(-1));
      return false;
    } catch (J) {
      return true;
    }
  } catch (J) {
    return false;
  }
}
