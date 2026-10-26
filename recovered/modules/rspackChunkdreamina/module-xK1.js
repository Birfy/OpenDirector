import i from "NY";
import n from "M8X";
import a from "EYk";
var o = (e) => {
  var { containerService } = e;
  return i._(function* () {
    const e = n.cQ(containerService, a.a);
    return yield e.forceUpdateBenefitStrategy();
  })();
};
export { o as i };
