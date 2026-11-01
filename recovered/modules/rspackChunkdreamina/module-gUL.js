import r from "NY";
import a from "o7";
import { c2 } from "./module-sMA.js";
export class N extends a.jG {
  dispose() {
    this.stop();
    super.dispose();
  }
  start() {
    this._schedule();
  }
  stop() {
    if (this._timerId !== null) {
      window.clearTimeout(this._timerId);
      this._timerId = null;
    }
  }
  _schedule() {
    this._timerId = window.setTimeout(() => {
      this._executePolling();
    }, this._currentInterval);
  }
  _executePolling() {
    return r
      ._(function* () {
        try {
          if (yield this._businessHandler()) {
            this.stop();
            if (this._onPollingCompleted) {
              this._onPollingCompleted();
            }
          } else {
            this._adjustInterval();
            this._schedule();
          }
        } catch (error) {
          this._retryCount++;
          if (
            this._config.maxRetries &&
            this._retryCount >= this._config.maxRetries
          ) {
            if (this._onMaxRetriesExceeded) {
              this._onMaxRetriesExceeded(
                error instanceof Error ? error : Error(String(error)),
              );
            }
            return;
          }
          this._adjustInterval();
          this._schedule();
        }
      })
      .call(this);
  }
  _adjustInterval() {
    const {
      backoffStrategy = c2.LINEAR,
      intervalStep = 1000,
      backoffMultiplier = 1.2,
      maxInterval = 10000,
    } = this._config;
    switch (backoffStrategy) {
      case c2.LINEAR:
        this._currentInterval += intervalStep;
        break;
      case c2.EXPONENTIAL:
        this._currentInterval = Math.min(
          this._currentInterval * backoffMultiplier,
          maxInterval,
        );
    }
    this._currentInterval = Math.min(this._currentInterval, maxInterval);
  }
  constructor(e, t, i, r) {
    super();
    this._config = e;
    this._businessHandler = t;
    this._onPollingCompleted = i;
    this._onMaxRetriesExceeded = r;
    this._retryCount = 0;
    this._timerId = null;
    this._currentInterval = e.initialInterval;
  }
}
