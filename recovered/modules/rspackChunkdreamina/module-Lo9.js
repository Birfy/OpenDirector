import n from "oa";
import r from "bk";
import a from "qa";
import o from "z8";
import s from "bT";
import l from "Wjp";
import { Sh } from "./module-guE.js";
const u = l.w;
export function L(e) {
  const { action, controller } = e;
  const l = a._(e, ["action", "controller"]);
  const decision = s.useMemo(
    () => ({
      get state() {
        return controller.getState(action);
      },
      recheck: () => controller.getState(action),
    }),
    [action, controller],
  );
  const reportParam = s.useMemo(() => {
    var e;
    return r._(n._({}, l.reportParam), {
      customReportParams: Sh({
        scene: l.scene,
        sceneOptions: l.sceneOptions,
        customReportParams:
          typeof ((e = l.reportParam) == null
            ? undefined
            : e.customReportParams) === "object" &&
          l.reportParam.customReportParams !== null
            ? l.reportParam.customReportParams
            : undefined,
      }),
    });
  }, [l.reportParam, l.scene, l.sceneOptions]);
  return o.jsx(
    u,
    r._(n._({}, l), {
      decision,
      reportParam,
    }),
  );
}
