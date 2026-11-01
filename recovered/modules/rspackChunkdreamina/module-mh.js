import n from "bT";
import r from "wF";
import a from "Kt";
import { s as s_1 } from "./module-urA.js";
import s from "AX";
export var o = n.memo(function (e) {
  const { sceneOptions, children } = e;
  const containerService = r.h(a._);
  n.useEffect(() => {
    var e;
    if (
      (sceneOptions == null || (e = sceneOptions.reportParams) == null
        ? undefined
        : e.useVipFunctionDetailsReporterHoc) &&
      !sceneOptions.reportParams.reportVipFunctionDetailsOnKeyDownCapture
    ) {
      s_1({
        action: s.U.Show,
        sceneOptions,
        containerService,
      });
    }
  }, [sceneOptions, containerService]);
  const c = n.Children.only(Array.isArray(children) ? children[0] : children);
  const beforeClickCapture = n.useCallback(
    (e) => {
      var i;
      var n;
      var r;
      if ((i = (n = c.props).beforeClickCapture) != null) {
        i.call(n, e);
      }
      if (
        (sceneOptions == null || (r = sceneOptions.reportParams) == null
          ? undefined
          : r.useVipFunctionDetailsReporterHoc) &&
        !sceneOptions.reportParams.skipReportVipFunctionDetailsOnClickCapture
      ) {
        s_1({
          action: s.U.Click,
          sceneOptions,
          containerService,
        });
      }
    },
    [sceneOptions, containerService, c],
  );
  const beforeKeyDownCapture = n.useCallback(
    (e) => {
      var i;
      var n;
      var r;
      if ((i = (n = c.props).beforeKeyDownCapture) != null) {
        i.call(n, e);
      }
      if (
        (sceneOptions == null || (r = sceneOptions.reportParams) == null
          ? undefined
          : r.useVipFunctionDetailsReporterHoc) &&
        sceneOptions.reportParams.reportVipFunctionDetailsOnKeyDownCapture
      ) {
        s_1({
          action: s.U.Click,
          sceneOptions,
          containerService,
        });
      }
    },
    [sceneOptions, containerService, c],
  );
  if (n.Children.count(children) !== 1) {
    return children;
  }
  return n.cloneElement(c, {
    beforeClickCapture,
    beforeKeyDownCapture,
  });
});
