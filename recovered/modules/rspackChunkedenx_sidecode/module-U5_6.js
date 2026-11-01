import n from "./module-YR_6.js";
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
  const r = n("Set");
  try {
    new r()[t](o(0));
    try {
      new r()[t](o(-1));
      return false;
    } catch (t) {
      return true;
    }
  } catch (t) {
    return false;
  }
}
