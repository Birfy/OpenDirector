import a from "SR";
import n from "Rb";
import o from "CR";
import s from "L4";
import m from "WY";
let i;
export function W(e) {
  let t;
  const r =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : (i = e.agentConversationSystemEvents) != null
        ? i
        : [];
  const l = m.Dx(r);
  return (
    !!l &&
    !!((e, t) => {
      const { recordStatus, errorCode } = e.statusModel;
      const a = recordStatus === n.DMLGenRecordStatus.Loading;
      if (t.kind === "success") {
        return a;
      }
      const o = recordStatus === n.DMLGenRecordStatus.Succeed;
      const s =
        recordStatus === n.DMLGenRecordStatus.Failed &&
        errorCode !== t.errorCode;
      return a || o || s;
    })(e, l) &&
    (l.kind === "failure"
      ? ((e.taskData.taskStatus = a.NuroTaskStatus.failed),
        (e.statusModel.recordStatus = n.DMLGenRecordStatus.Failed),
        (e.statusModel.statusCode = s.A.FinalGenerateFail),
        (e.statusModel.errorCode =
          (t = l.errorCode) != null ? t : o.Q.ErrAgenticSubmitFailed),
        (e.statusModel.errorMsg = l.errorMessage))
      : ((e.taskData.taskStatus = a.NuroTaskStatus.finished),
        (e.statusModel.recordStatus = n.DMLGenRecordStatus.Succeed),
        (e.statusModel.statusCode = s.A.FinalSuccess)),
    true)
  );
}
