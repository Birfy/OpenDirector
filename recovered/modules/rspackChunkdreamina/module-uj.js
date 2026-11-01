import { r7 } from "./module-sMA.js";
import { $ } from "./module-LFd.js";
import { N } from "./module-gUL.js";
export class L extends $ {
  execute(e) {
    if (!this.hasFallbacked) {
      this.hasFallbacked = true;
      this.manager.disposeWebsocketHandlers();
      let t;
      let i;
      const a = this.config.pollingConfig || r7;
      this._pollingScheduler = new N(
        a,
        this.config.pollingHandler,
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
  }
  canHandleMessageAfterFallback() {
    return false;
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
    this._pollingScheduler = null;
  }
}
