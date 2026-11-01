import r from "oa";
import a from "QWK";
import { E } from "./module-jbD.js";
import o from "Kt";
import s from "o7";
export class I extends s.jG {
  watch() {
    this._createAndExecuteWebsocketPollingManager();
  }
  getMonitorConfig() {
    return {
      timeout: 180000,
      dynamicPollingInterval: {
        minInterval: 6000,
        maxInterval: 300000,
        step: 1000,
        resetOnChange: true,
      },
      websocketRetryOptions: {
        maxRetries: 5,
        initialDelay: 2000,
        maxDelay: 180000,
        factor: 2,
        jitter: true,
      },
    };
  }
  _createAndExecuteWebsocketPollingManager() {
    this._containerService
      .createInstance(
        E,
        r._(
          {
            methodId: this.websocketEventName,
            websocketMessageHandler: (e) => this.websocketMessageHandler(e),
            onFallbackToPolling: (e) => this.fallbackToPolling(e),
            pollingHandler: () => this.pollGenerateTask(),
          },
          this.getMonitorConfig(),
        ),
      )
      .startListening();
  }
  constructor(e) {
    super();
    this._containerService = e;
  }
}
I = a.Cg(
  [
    a.Qj(0, o._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [o._ === undefined ? Object : o._]),
  ],
  I,
);
