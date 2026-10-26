import n from "oa";
import r from "bk";
import a from "SR";
import o from "Rb";
import s from "CR";
import { A } from "./module-L4.js";
import { c as c_1 } from "./module-kOD.js";
const u = {
  [a.NuroTaskStatus.none]: {
    statusCode: A.Init,
    recordStatus: o.DMLGenRecordStatus.Loading,
  },
  [a.NuroTaskStatus.running]: {
    statusCode: A.SubmitOk,
    recordStatus: o.DMLGenRecordStatus.Loading,
  },
  [a.NuroTaskStatus.finished]: {
    statusCode: A.FinalSuccess,
    recordStatus: o.DMLGenRecordStatus.Succeed,
  },
  [a.NuroTaskStatus.failed]: {
    statusCode: A.FinalGenerateFail,
    recordStatus: o.DMLGenRecordStatus.Failed,
    errorCode: s.Q.ErrAgenticSubmitFailed,
  },
  [a.NuroTaskStatus.cancelled]: {
    statusCode: A.FinalGenerateFail,
    recordStatus: o.DMLGenRecordStatus.Failed,
  },
};
const v = {
  statusCode: A.Unknown,
  recordStatus: o.DMLGenRecordStatus.Loading,
};
export function E(e) {
  let t;
  let i;
  let c;
  const m = e.promptMessages.find((e) => e instanceof a.NuroUserMessage);
  return r._(
    n._(
      {},
      (c = c_1(e.artifactMessages))
        ? {
            statusCode: A.FinalGenerateFail,
            recordStatus: o.DMLGenRecordStatus.Failed,
            errorCode:
              (i = c.errorCode) != null ? i : s.Q.ErrAgenticSubmitFailed,
            errorMsg: c.errorMessage,
          }
        : (t = u[e.taskStatus]) != null
          ? t
          : v,
    ),
    {
      timeModel: {
        createdTime: m ? Number(m.createTime) : 0,
      },
    },
  );
}
