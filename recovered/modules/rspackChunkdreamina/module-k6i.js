import i from "xi";
class s {
  static getInstance() {
    if (!s.instance) {
      s.instance = new s();
    }
    return s.instance;
  }
  setReporter(e) {
    this._reporter = e;
  }
  setSlardarReporter(e) {
    this._slardarReporter = e;
  }
  setPcReporter(e) {
    this._pcReporter = e;
  }
  reportSlardarEvent(e, t) {
    let r;
    if ((r = this._slardarReporter) != null) {
      r.reportEvent(e, t);
    }
  }
  reportEvent() {
    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) {
      t[r] = arguments[r];
    }
    if (!this._reporter) {
      return void i.V.info("it unsupported report event before set reporter");
    }
    if (!(t.length <= 0)) {
      if (typeof t[0] !== "string") {
        const s = t[0];
        this._reporter.reportEvent(s.eventName, s.getEventParams());
        return;
      }
      this._reporter.reportEvent(t[0], t[1]);
    }
  }
  reportEventByPc(e, t) {
    let r;
    if ((r = this._pcReporter) != null) {
      r.reportEvent(e, t);
    }
  }
  createContext(e) {
    const t = {};
    this._contexts.set(e, t);
    return t;
  }
  getContext(e) {
    return this._contexts.get(e);
  }
  destroyContext(e) {
    this._contexts.delete(e);
  }
  getServerReportCustomString() {
    if (this._reporter) {
      return JSON.stringify(this._reporter.getTeaConfig());
    }
  }
  registerEventCollector(e, t) {
    this._collectorMap.set(e, t);
  }
  eventReportStart(e) {
    const t = this._collectorMap.get(e);
    if (t) {
      const r = new t();
      r.report = () => {
        this.reportEvent(r.eventName, r.getEventParams());
      };
      return r;
    }
  }
  constructor() {
    this._contexts = new Map();
    this._collectorMap = new Map();
  }
}
export class W {
  isAllowReportToSlardar() {
    return false;
  }
  report() {
    s.getInstance().reportEvent(this);
    if (this.isAllowReportToSlardar()) {
      s.getInstance().reportSlardarEvent(this.eventName, this.getEventParams());
    }
  }
  reportByPc() {
    const e = this.getEventParams();
    s.getInstance().reportEventByPc(this.eventName, e);
  }
}
