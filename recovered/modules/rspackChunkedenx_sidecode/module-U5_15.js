import n from "./module-YR_15.js";
const o = (size) => ({
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
export default function (r) {
  const t = n("Set");
  try {
    new t()[r](o(0));
    try {
      new t()[r](o(-1));
      return false;
    } catch (r) {
      return true;
    }
  } catch (r) {
    return false;
  }
}
