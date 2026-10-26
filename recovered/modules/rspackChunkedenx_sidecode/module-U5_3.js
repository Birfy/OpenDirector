import n from "./module-YR_3.js";
const i = (size) => ({
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
    new r()[t](i(0));
    try {
      new r()[t](i(-1));
      return false;
    } catch (t) {
      return true;
    }
  } catch (t) {
    return false;
  }
}
