import r from "fg";
import n from "jC8";
export var m = () => {
  if (typeof window !== "undefined") {
    var e = window.__beta_test__;
    if (e) {
      return n.X(r.o(e));
    }
  }
  return null;
};
