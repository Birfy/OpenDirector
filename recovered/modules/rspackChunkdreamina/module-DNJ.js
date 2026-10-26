import t from "QWK";
import n from "kF";
import i from "Dm";
import r from "Kt";
import o from "xL";
import l from "U7";
class s extends n.v {
  constructor(...e) {
    super(...e);
    this.eventName = "asynchronous_indicator_action";
  }
}
class d extends o.N {
  reportClickSideBar() {
    this._params.action = "click_side_bar";
    this._setTaskData();
    super.report();
  }
  reportClickGeneration() {
    this._params.action = "click_generation";
    this._setTaskData();
    super.report();
  }
  _validateParams(e) {
    ["action", "finished_tasks", "failed_tasks", "total_tasks"].forEach((u) => {
      i.F4(
        e[u],
        "[AsynchronousIndicatorActionReporter] ".concat(u, " is required"),
      );
    });
  }
  _getCollectorClass() {
    return s;
  }
  _reportBusinessEvent(e) {
    super._reportBusinessEvent(e, {
      immediately: true,
    });
  }
  _setTaskData() {
    const observableStore =
      this._generationTaskIndicatorService.observableStore;
    this._params.finishedTasks = observableStore.successTask;
    this._params.failedTasks = observableStore.failedTask;
    this._params.totalTasks = observableStore.totalTask;
  }
  constructor(e, u, a) {
    super(e, u);
    this._containerService = u;
    this._generationTaskIndicatorService = a;
  }
}
export { d as r };
d = t.Cg(
  [
    t.Qj(1, r._),
    t.Qj(2, l.P),
    t.Sn("design:type", Function),
    t.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      r._ === undefined ? Object : r._,
      l.P === undefined ? Object : l.P,
    ]),
  ],
  d,
);
