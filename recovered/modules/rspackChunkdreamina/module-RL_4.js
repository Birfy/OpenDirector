import { Ln } from "./module-Tw_2.js";
import { y } from "./module-wx_2.js";
export class V extends y {
  requestHostCallback(e) {
    this._scheduledCallback = e;
    if (!this._disposable) {
      this._disposable = this._runWhenIdle(this._flushCallback);
    }
  }
  cancelHostCallback() {
    let e;
    if ((e = this._disposable) != null) {
      e.dispose();
    }
    this._scheduledCallback = undefined;
    this._disposable = undefined;
  }
  constructor() {
    super();
    this._flushCallback = () => {
      if (!this._scheduledCallback) {
        return;
      }
      let e = Ln();
      let t = e + this._yieldInterval;
      try {
        if (this._scheduledCallback(true, e, t)) {
          this._disposable = this._runWhenIdle(this._flushCallback);
        } else {
          this._scheduledCallback = undefined;
          this._disposable = undefined;
        }
      } catch (error) {
        this._disposable = this._runWhenIdle(this._flushCallback);
        throw error;
      }
    };
    if (
      typeof requestIdleCallback !== "function" ||
      typeof cancelIdleCallback !== "function"
    ) {
      this._runWhenIdle = (e) => {
        let t = false;
        setTimeout(() => {
          if (t) {
            return;
          }
          let r = Date.now() + 15;
          e(
            Object.freeze({
              didTimeout: true,
              timeRemaining: () => Math.max(0, r - Date.now()),
            }),
          );
        });
        return {
          dispose() {
            if (!t) {
              t = true;
            }
          },
        };
      };
    } else {
      this._runWhenIdle = (e, timeout) => {
        let r = requestIdleCallback(
          e,
          typeof timeout === "number"
            ? {
                timeout,
              }
            : undefined,
        );
        let a = false;
        return {
          dispose() {
            if (!a) {
              a = true;
              cancelIdleCallback(r);
            }
          },
        };
      };
    }
  }
}
