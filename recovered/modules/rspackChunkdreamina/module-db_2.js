import i from "bT";
import n from "X5";
import a from "wF";
import o from "gLs";
import c from "oh";
import { y } from "./module-ofP.js";
export var W = () => {
  var e = a.h(o.o);
  var t = a.h(c.$);
  var r = a.h(n.ICommercialTeamWorkspaceService);
  var { isOversea } = e;
  var [d, setD] = i.useState(y.CREDITS_RULE(true));
  var [f, setF] = i.useState(false);
  i.useEffect(() => {
    if (isOversea) {
      var e = function () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : t.displayInfo;
        setD((t) => {
          var r;
          if ((r = e.creditsRule) != null) {
            return r;
          }
          return t;
        });
      };
      e();
      var i = t.onDisplayInfoChange(e);
      return () => {
        i.dispose();
      };
    }
    var n = false;
    r.isTeamScene()
      .then((e) => {
        if (!n) {
          setF(e);
        }
      })
      .catch(() => {
        if (!n) {
          setF(false);
        }
      });
    return () => {
      n = true;
    };
  }, [t, isOversea, r]);
  if (isOversea) {
    return d;
  }
  if (f) {
    return y.TEAM_CREDITS_RULE(false);
  }
  return y.CREDITS_RULE(false);
};
