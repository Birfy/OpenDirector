import i from "wF";
import n from "bT";
import { b } from "./module-csY.js";
import o from "Iv";
export var S = () => {
  var e = i.h(o.sG);
  var [t, setT] = n.useState(e == null ? undefined : e.localCredit);
  var c = b();
  n.useEffect(() => {
    setT(e.localCredit);
    e.onLocalCreditChange(() => {
      setT(e.localCredit);
    });
  }, []);
  if (c || t < 0) {
    return 0;
  }
  return t;
};
