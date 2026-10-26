import i from "M8X";
import n from "Iv";
import a from "hag";
import o from "EYk";
import c from "bo";
export var F = (e) => {
  var t = i.cQ(e, n.sG);
  var r = i.cQ(e, a.F);
  var l = i.cQ(e, o.a);
  if (r.getSnapshot().hasLogin && !l.isInFreemiumStage && l.isReady) {
    t.creditReceiveManager.receiveCredit(c.og());
  }
};
