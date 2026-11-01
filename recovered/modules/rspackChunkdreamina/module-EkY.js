import r from "NY";
import { $ } from "./module-LFd.js";
import { N } from "./module-gUL.js";
import { r7 } from "./module-sMA.js";
export class Q extends $ {
  execute(e) {
    if (!this.hasFallbacked) {
      this.hasFallbacked = true;
      this._hasResult = false;
      let t;
      let i;
      const a = () =>
        r
          ._(function* () {
            if (this._hasResult) {
              return true;
            }
            const e = yield this.config.pollingHandler();
            if (e && !this._hasResult) {
              this._hasResult = true;
              return true;
            }
            return e;
          })
          .call(this);
      const s = this.config.pollingConfig || r7;
      this._pollingScheduler = new N(
        s,
        a,
        this.markFallbackFinished.bind(this),
      );
      this._pollingScheduler.start();
      if ((t = (i = this.config).onFallbackToPolling) != null) {
        t.call(i, e);
      }
    }
  }
  handleMessage(e, t) {
    super.handleMessage(e, t);
    if (t.done && !this._hasResult) {
      this._hasResult = true;
      if (this._pollingScheduler) {
        this._pollingScheduler.stop();
      }
      this.markFallbackFinished();
    }
  }
  canHandleMessageAfterFallback() {
    return true;
  }
  dispose() {
    if (this._pollingScheduler) {
      this._pollingScheduler.dispose();
      this._pollingScheduler = null;
    }
    super.dispose();
  }
  constructor(...e) {
    super(...e);
    this._hasResult = false;
    this._pollingScheduler = null;
  }
}
