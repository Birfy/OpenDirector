import r from "NY";
import a from "QWK";
import n from "nO5";
import o from "o7";
import s from "xi";
import d from "fHC";
class l extends o.jG {
  getStatus() {
    return {
      retryCount: this.retryCount,
      nextRetryDelay: this.calculateDelay(),
      hasMoreRetries: this.canRetry(),
    };
  }
  canRetry() {
    return this.retryCount < this.options.maxRetries;
  }
  reset() {
    this.retryCount = 0;
    this.clearTimer();
  }
  scheduleRetry(e) {
    this.clearTimer();
    if (!this.canRetry()) {
      return this.getStatus();
    }
    const t = this.calculateDelay();
    this.timer = window.setTimeout(() => {
      this.retryCount++;
      e();
    }, t);
    return this.getStatus();
  }
  cancelRetry() {
    this.clearTimer();
  }
  dispose() {
    this.clearTimer();
    super.dispose();
  }
  calculateDelay() {
    const e = Math.min(
      this.options.initialDelay * this.options.factor ** this.retryCount,
      this.options.maxDelay,
    );
    if (this.options.jitter) {
      return e * (0.5 + Math.random());
    }
    return e;
  }
  clearTimer() {
    if (this.timer !== undefined) {
      clearTimeout(this.timer);
      this.timer = undefined;
    }
  }
  constructor(e) {
    var t;
    var i;
    var r;
    super();
    this.retryCount = 0;
    this.options = {
      maxRetries: e.maxRetries,
      initialDelay: e.initialDelay,
      maxDelay: (t = e.maxDelay) != null ? t : Infinity,
      factor: (i = e.factor) != null ? i : 2,
      jitter: (r = e.jitter) == null || r,
    };
  }
}
export class E extends o.jG {
  startListening() {
    const { signal } = this._config;
    if (signal == null || !signal.aborted) {
      if (signal != null) {
        signal.addEventListener("abort", this._handleAbort);
      }
      return this._connectWebsocket();
    }
  }
  dispose() {
    this._clearFallbackTimer();
    this._disposeWebsocketHandlers();
    this._stopPolling();
    this._taskBarrier.open();
    super.dispose();
  }
  _connectWebsocket() {
    if (this._websocketService.state !== d.jj.OPEN) {
      if (this._pollingIntervalId === undefined) {
        this._startPolling();
      }
      if ((i = this._retryManager) == null || !i.canRetry()) {
        if ((e = (t = this._config).onFallbackToPolling) != null) {
          e.call(t, "websocket connection unavailable, using polling");
        }
        return this._taskBarrier.wait();
      }
      if ((r = (a = this._config).onFallbackToPolling) != null) {
        r.call(a, "polling during websocket reconnection");
      }
      var e;
      var t;
      var i;
      var r;
      var a;
      let n;
      let o;
      const s = this._retryManager.scheduleRetry(() => {
        this._connectWebsocket();
      });
      if ((n = (o = this._config).onWebsocketRetry) != null) {
        n.call(o, s);
      }
      return this._taskBarrier.wait();
    }
    this._stopPolling();
    this._disposeWebsocketHandlers();
    this._closeHandlerDisposable = this._websocketService.onClose(
      this._handleWebsocketClose,
    );
    this._setFallbackTimer();
    this._messageHandlerDisposable =
      this._websocketService.registerEventHandler(
        this._config.methodId,
        this._handleWebsocketMessage.bind(this),
      );
    return this._taskBarrier.wait();
  }
  _initPollingInterval() {
    const { dynamicPollingInterval, pollingInterval } = this._config;
    if (dynamicPollingInterval) {
      this._currentPollingInterval = dynamicPollingInterval.minInterval;
    } else {
      this._currentPollingInterval =
        pollingInterval != null ? pollingInterval : 3000;
    }
    this._pollingCount = 0;
  }
  _handleWebsocketMessage(e) {
    return r
      ._(function* () {
        try {
          let t;
          const { accepted, done } = yield Promise.resolve(
            this._config.websocketMessageHandler(e),
          );
          if (done) {
            this._clearFallbackTimer();
            this._disposeWebsocketHandlers();
            this._stopPolling();
            this._taskBarrier.open();
            return;
          }
          if (accepted) {
            if ((t = this._retryManager) != null) {
              t.reset();
            }
            this._stopPolling();
            this._clearFallbackTimer();
            this._setFallbackTimer();
          }
        } catch (error) {
          s.V.error(
            "[websocket-polling-manager]: WebSocket message handler error:",
            error,
          );
          if (this._pollingIntervalId === undefined) {
            this._startPolling();
          }
          this._clearFallbackTimer();
          this._setFallbackTimer();
        }
      })
      .call(this);
  }
  _setFallbackTimer() {
    this._timeout = window.setTimeout(
      this._handleTimeout,
      this._config.timeout,
    );
  }
  _clearFallbackTimer() {
    clearTimeout(this._timeout);
    this._timeout = undefined;
  }
  _startPolling() {
    if (this._pollingIntervalId === undefined) {
      this._initPollingInterval();
      this._executePolling();
      this._scheduleNextPolling();
    }
  }
  _scheduleNextPolling() {
    if (this._pollingIntervalId !== undefined) {
      clearTimeout(this._pollingIntervalId);
      this._pollingIntervalId = undefined;
    }
    this._pollingIntervalId = window.setTimeout(() => {
      this._executePolling();
      if (!this._taskBarrier.isOpen()) {
        this._scheduleNextPolling();
      }
    }, this._currentPollingInterval);
  }
  _updatePollingInterval() {
    const e =
      arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    const { dynamicPollingInterval } = this._config;
    if (dynamicPollingInterval) {
      const { minInterval, maxInterval, step, resetOnChange } =
        dynamicPollingInterval;
      if (e && resetOnChange !== false) {
        this._currentPollingInterval = minInterval;
        this._pollingCount = 0;
        return;
      }
      this._pollingCount++;
      const o = Math.min(minInterval + step * this._pollingCount, maxInterval);
      this._currentPollingInterval = o;
    }
  }
  _executePolling() {
    return r
      ._(function* () {
        try {
          let e;
          const t = yield this._triggerSafePolling();
          this._updatePollingInterval(t.changed);
          if (t.done) {
            this._stopPolling();
            if (!this._taskBarrier.isOpen()) {
              this._taskBarrier.open();
            }
            if ((e = this._retryManager) != null) {
              e.cancelRetry();
            }
          }
        } catch (error) {
          s.V.error(
            "[websocket-polling-manager]: Polling execute error, will wait for next polling:",
            error,
          );
          this._pollingCount++;
          if (this._pollingCount > 10) {
            s.V.error(
              "[websocket-polling-manager]: Too many polling failures, stopping polling",
            );
            this._stopPolling();
            if (!this._taskBarrier.isOpen()) {
              this._taskBarrier.open();
            }
          }
        }
      })
      .call(this);
  }
  _triggerSafePolling() {
    return r
      ._(function* () {
        try {
          return yield this._config.pollingHandler();
        } catch (e) {
          return {
            accepted: false,
            done: false,
          };
        }
      })
      .call(this);
  }
  _stopPolling() {
    if (this._pollingIntervalId !== undefined) {
      clearTimeout(this._pollingIntervalId);
      this._pollingIntervalId = undefined;
    }
  }
  _disposeWebsocketHandlers() {
    let e;
    let t;
    if ((e = this._closeHandlerDisposable) != null) {
      e.dispose();
    }
    if ((t = this._messageHandlerDisposable) != null) {
      t.dispose();
    }
  }
  constructor(e, t) {
    super();
    this._config = e;
    this._websocketService = t;
    this._pollingCount = 0;
    this._taskBarrier = new n.W();
    this._handleWebsocketClose = () => {
      this._disposeWebsocketHandlers();
      this._clearFallbackTimer();
      this._startPolling();
      if ((i = this._retryManager) == null ? undefined : i.canRetry()) {
        if ((r = (a = this._config).onFallbackToPolling) != null) {
          r.call(a, "polling during websocket reconnection");
        }
        var e;
        var t;
        var i;
        var r;
        var a;
        var n;
        var o;
        var s = this._retryManager.scheduleRetry(() => {
          this._connectWebsocket();
        });
        if ((n = (o = this._config).onWebsocketRetry) != null) {
          n.call(o, s);
        }
      } else {
        if ((e = (t = this._config).onFallbackToPolling) != null) {
          e.call(t, "websocket closed and retry limit reached, using polling");
        }
        this._taskBarrier.open();
      }
    };
    this._handleAbort = () => {
      var { signal } = this._config;
      if (signal != null) {
        signal.removeEventListener("abort", this._handleAbort);
      }
      this._disposeWebsocketHandlers();
      this._clearFallbackTimer();
      this._stopPolling();
      this._taskBarrier.open();
    };
    this._handleTimeout = () => {
      this._clearFallbackTimer();
      this._startPolling();
      if ((i = this._retryManager) == null ? undefined : i.canRetry()) {
        if ((r = (a = this._config).onFallbackToPolling) != null) {
          r.call(a, "polling during websocket reconnection");
        }
        var e;
        var t;
        var i;
        var r;
        var a;
        var n;
        var o;
        var s = this._retryManager.scheduleRetry(() => {
          this._connectWebsocket();
        });
        if ((n = (o = this._config).onWebsocketRetry) != null) {
          n.call(o, s);
        }
      } else {
        if ((e = (t = this._config).onFallbackToPolling) != null) {
          e.call(
            t,
            "websocket timed out and retry limit reached, using polling",
          );
        }
        this._taskBarrier.open();
      }
    };
    if (this._config.websocketRetryOptions) {
      this._retryManager = new l(this._config.websocketRetryOptions);
      this._register(this._retryManager);
    }
    this._initPollingInterval();
  }
}
E = a.Cg(
  [
    a.Qj(1, d.dE),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof WebsocketPollingConfig === "undefined"
        ? Object
        : WebsocketPollingConfig,
      d.dE === undefined ? Object : d.dE,
    ]),
  ],
  E,
);
