import r from "K8";
import a from "ssl";
import n from "fOZ";
import o from "yMd";
import s from "QWK";
import d from "Kt";
import l from "Y6";
import u from "KV";
import c from "x5f";
import { U } from "./module-XgG.js";
import g from "NY";
import h from "SR";
import p from "o7";
import v from "xi";
import I from "CR";
import _ from "T1B";
import { I as I_1 } from "./module-Hm7.js";
class f extends p.jG {
  submitGenerateTask() {
    return g
      ._(function* () {
        try {
          let e;
          let t;
          let i;
          let a;
          let n;
          let o;
          let s;
          let d;
          const l = yield (e = (t = this._options)
            .processInputParamsConverter) == null
            ? undefined
            : e.call(t);
          if (!l) {
            return r.xz(
              I.Q.ErrClientCommon,
              "processInputParamsConverter is required",
            );
          }
          if (!l.ok) {
            return l;
          }
          const {
            conversationId,
            userMessage,
            projectId,
            postEditCapabilities,
            infiniteCanvasParam,
          } = l.value;
          const _ = h.NuroMessageConverter.convertMessage(
            userMessage,
            [],
            conversationId,
            projectId,
          ).toJSONString();
          if (!_) {
            return r.xz(I.Q.ErrClientCommon, "User chat message is required");
          }
          const f = yield (i = (a = this._options).processSubmitQueryParams) ==
          null
            ? undefined
            : i.call(a);
          const b = yield this._infiniteCanvasAgentEditDataService.submitTask(
            {
              messages: [JSON.parse(_)],
              projectId,
              conversationId,
              postEditCapabilities,
              infiniteCanvasParam,
            },
            f,
          );
          if (!b.ok) {
            v.V.error("[TaskSubmission] Submit agent edit task failed:", b);
            if ((s = (d = this._options).onSubmitFailed) != null) {
              s.call(d, I.Q.ErrClientCommon, "Submit agent edit task failed");
            }
            return b;
          }
          if ((n = (o = this._options).onSubmitSuccess) != null) {
            n.call(o);
          }
          return r.nj();
        } catch (error) {
          v.V.error("[TaskSubmission] Submit agent edit task failed:", error);
          return r.xz(
            I.Q.ErrClientCommon,
            "Submit agent edit task failed: ".concat(error),
          );
        }
      })
      .call(this);
  }
  constructor(e, t) {
    super();
    this._options = e;
    this._infiniteCanvasAgentEditDataService = t;
  }
}
f = s.Cg(
  [
    s.Qj(1, _.c),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      typeof TaskSubmissionOptions === "undefined"
        ? Object
        : TaskSubmissionOptions,
      _.c === undefined ? Object : _.c,
    ]),
  ],
  f,
);
class b extends U {
  get id() {
    return this.model.uniqueKey;
  }
  get conversationId() {
    return this.model.conversationId;
  }
  retryFailureTask() {}
  _getDomainModelType() {
    return l.$.AIGCData;
  }
  _disposeTaskResources() {
    let e;
    if ((e = this._taskSubmission) != null) {
      e.dispose();
    }
  }
  _submitGenerateTask() {
    this._taskSubmission = this._containerService.createInstance(f, {
      processInputParamsConverter: this._processInputParamsConverter,
      processSubmitQueryParams: () => this._submitQueryParams,
    });
    this._taskSubmission.submitGenerateTask();
  }
  _createAndExecuteStatusMonitor() {}
  constructor(e, t, i, r) {
    super(e, t, i, r);
    this._bootstrap();
  }
}
b = s.Cg(
  [
    s.Qj(1, d._),
    s.Qj(2, u.j),
    s.Qj(3, c.R),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      typeof ContentGeneratorTaskParams === "undefined"
        ? Object
        : ContentGeneratorTaskParams,
      d._ === undefined ? Object : d._,
      u.j === undefined ? Object : u.j,
      c.R === undefined ? Object : c.R,
    ]),
  ],
  b,
);
export function J(e, t) {
  return e.createInstance(b, {
    mockDataCreator: () =>
      I_1(e, t, {
        generateType: o.ce.CreationAgent,
      }),
    processInputParamsConverter: () => r.TZ(new n.A(t).convert()),
    submitQueryParams: {
      babiParam: a.y({
        editType: "canva",
      }),
    },
  });
}
