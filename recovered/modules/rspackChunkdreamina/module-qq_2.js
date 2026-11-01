import r from "QWK";
import a from "o7";
import n from "nO5";
import o from "xi";
import { Q } from "./module-EkY.js";
import { L } from "./module-uj.js";
import l from "fHC";
import { WV } from "./module-sMA.js";
export class E extends a.jG {
  startListening() {
    const { methodId, signal } = this._config;
    o.V.info(this._logTag, "开始监听WebSocket消息，方法ID: ".concat(methodId));
    if (signal == null ? undefined : signal.aborted) {
      o.V.info(this._logTag, "监听已被取消，信号已中止");
      return Promise.resolve(false);
    }
    if (
      (signal == null || signal.addEventListener("abort", this._handleAbort),
      this._websocketService.state !== l.jj.OPEN)
    ) {
      o.V.warn(
        this._logTag,
        "WebSocket状态不是OPEN，当前状态: ".concat(
          this._websocketService.state,
        ),
      );
      this._fallbackToPolling("websocket state is not open");
    } else {
      this._closeHandlerDisposable = this._websocketService.onClose(
        this._handleWebsocketClose,
      );
      this._errorHandlerDisposable = this._websocketService.onError(
        this._handleWebsocketError,
      );
      this._setFallbackTimer();
      o.V.info(
        this._logTag,
        "设置降级超时定时器: ".concat(this._config.timeout, "ms"),
      );
      this._messageHandlerDisposable =
        this._websocketService.registerEventHandler(
          methodId,
          this._handleWebsocketMessage.bind(this),
        );
    }
    return this._taskBarrier.wait();
  }
  dispose() {
    o.V.info(this._logTag, "释放资源");
    this._clearFallbackTimer();
    this.disposeWebsocketHandlers();
    this._strategy.dispose();
    this._taskBarrier.open();
    super.dispose();
  }
  disposeWebsocketHandlers() {
    let e;
    let t;
    let i;
    o.V.info(this._logTag, "释放WebSocket处理器");
    if ((e = this._closeHandlerDisposable) != null) {
      e.dispose();
    }
    if ((t = this._errorHandlerDisposable) != null) {
      t.dispose();
    }
    if ((i = this._messageHandlerDisposable) != null) {
      i.dispose();
    }
  }
  _handleWebsocketMessage(e) {
    o.V.info(this._logTag, "收到WebSocket消息: ".concat(JSON.stringify(e)));
    if (
      this._hasFallbacked &&
      !this._strategy.canHandleMessageAfterFallback()
    ) {
      return void o.V.info(
        this._logTag,
        "已降级且策略不允许处理消息，忽略此消息",
      );
    }
    const t = this._config.websocketMessageHandler(e);
    o.V.info(
      this._logTag,
      "消息处理结果: accepted=".concat(t.accepted, ", done=").concat(t.done),
    );
    if (this._hasFallbacked) {
      return void this._strategy.handleMessage(e, t);
    }
    if (t.done) {
      o.V.info(this._logTag, "任务已完成，清理资源");
      this._clearFallbackTimer();
      this.disposeWebsocketHandlers();
      this._taskBarrier.open();
      return;
    }
    if (t.accepted) {
      o.V.info(this._logTag, "消息已接受，重置超时定时器");
      this._clearFallbackTimer();
      this._setFallbackTimer();
    }
  }
  _setFallbackTimer() {
    this._timeout = window.setTimeout(
      this._handleTimeout,
      this._config.timeout,
    );
  }
  _clearFallbackTimer() {
    if (this._timeout) {
      o.V.info(this._logTag, "清除降级超时定时器");
      clearTimeout(this._timeout);
      this._timeout = undefined;
    }
  }
  _fallbackToPolling(e) {
    if (this._hasFallbacked) {
      o.V.info(this._logTag, "已经降级到轮询，忽略此次降级请求");
    } else {
      this._hasFallbacked = true;
      o.V.warn(this._logTag, "降级到轮询，原因: ".concat(e));
      this._strategy.execute(e);
      this._strategy.onFallbackFinished(() => {
        this.dispose();
      });
    }
  }
  _createStrategy(e) {
    o.V.info(this._logTag, "创建降级策略: ".concat(e));
    switch (e) {
      case WV.RACING:
        return new Q(this, this._config);
      case WV.POLLING:
      default:
        return new L(this, this._config);
    }
  }
  constructor(e, t) {
    super();
    this._config = e;
    this._websocketService = t;
    this._hasFallbacked = false;
    this._taskBarrier = new n.W();
    this._handleWebsocketClose = () => {
      o.V.warn(this._logTag, "WebSocket连接已关闭");
      this._taskBarrier.open();
      this._clearFallbackTimer();
      this._fallbackToPolling("websocket closed");
    };
    this._handleWebsocketError = (e) => {
      o.V.warn(this._logTag, "WebSocket错误: ".concat(e));
      this._taskBarrier.open();
      this._clearFallbackTimer();
      this._fallbackToPolling("websocket error");
    };
    this._handleAbort = () => {
      var { signal } = this._config;
      o.V.info(this._logTag, "收到中止信号");
      if (signal != null) {
        signal.removeEventListener("abort", this._handleAbort);
      }
      this.disposeWebsocketHandlers();
      this._clearFallbackTimer();
      this._taskBarrier.open();
    };
    this._handleTimeout = () => {
      o.V.warn(
        this._logTag,
        "WebSocket超时（".concat(this._config.timeout, "ms），触发降级到轮询"),
      );
      this._clearFallbackTimer();
      this._fallbackToPolling("timeout");
    };
    this._logTag = "[WebsocketPollingManager:".concat(
      this._config.methodId,
      "]",
    );
    var i = e.fallbackStrategy || WV.RACING;
    this._strategy = this._createStrategy(i);
    o.V.info(this._logTag, "初始化完成，使用策略: ".concat(i));
  }
}
E = r.Cg(
  [
    r.Qj(1, l.dE),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      typeof WebsocketPollingConfig === "undefined"
        ? Object
        : WebsocketPollingConfig,
      l.dE === undefined ? Object : l.dE,
    ]),
  ],
  E,
);
