import r from "QWK";
import a from "Dm";
import n from "Kt";
import s from "kF";
class o extends s.v {
  constructor(...e) {
    super(...e);
    this.eventName = "perf_dual_channel_metrics_tracker";
  }
}
export class $ extends s.o {
  _getCollectorClass() {
    return o;
  }
  _validateParams(e) {
    ["status", "channel", "scene"].forEach((t) => {
      a.F4(
        e[t],
        "[PerfDualChannelMetricsTrackerReporter] ".concat(t, " is required"),
      );
    });
  }
  constructor(e, t) {
    super(e, t);
    this._containerService = t;
  }
}
$ = r.Cg(
  [
    r.Qj(1, n._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      n._ === undefined ? Object : n._,
    ]),
  ],
  $,
);
