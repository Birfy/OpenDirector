import n from "./module-YR_9.js";
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
export default function (t) {
  const e = n("Set");
  try {
    new e()[t](o(0));
    try {
      new e()[t](o(-1));
      return false;
    } catch (t) {
      return true;
    }
  } catch (t) {
    return false;
  }
}
