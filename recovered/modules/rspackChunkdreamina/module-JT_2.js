import { Ln } from "./module-Tw_2.js";
import { y } from "./module-wx_2.js";
export class H extends y {
  requestHostCallback(e) {
    this._scheduledCallback = e;
    if (!this._isMessageLoopRunning) {
      this._isMessageLoopRunning = true;
      this._channel.port2.postMessage(null);
    }
  }
  cancelHostCallback() {
    this._scheduledCallback = undefined;
  }
  constructor() {
    super();
    this._isMessageLoopRunning = false;
    this._channel = new MessageChannel();
    this._flushCallback = () => {
      if (!this._scheduledCallback) {
        this._isMessageLoopRunning = false;
        return;
      }
      let e = Ln();
      let t = e + this._yieldInterval;
      try {
        if (this._scheduledCallback(true, e, t)) {
          this._channel.port2.postMessage(null);
        } else {
          this._isMessageLoopRunning = false;
          this._scheduledCallback = undefined;
        }
      } catch (error) {
        this._channel.port2.postMessage(null);
        throw error;
      }
    };
    this._channel.port1.onmessage = () => {
      this._flushCallback();
    };
  }
}
