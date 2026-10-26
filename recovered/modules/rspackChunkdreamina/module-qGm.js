import i from "oa";
import r from "bk";
import a from "qa";
import o from "gu";
import l from "j6i";
export var C = (e) => {
  var { benefitCount = 1, imageInputNum = 1 } = e;
  var u = a._(e, ["benefitCount", "imageInputNum"]);
  return l.O(
    r._(i._({}, u), {
      scene: o.Sk.ImageSmartEdit,
      benefitCount,
      imageInputNum,
    }),
  );
};
Object.defineProperty(exports, "y", {
  enumerable: true,
  get: () => 1,
});
