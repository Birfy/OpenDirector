import i from "NY";
import a from "K8";
import n from "A7";
import o from "o7";
const s = [0, 1];
const c = [2, 3, 4];
export class e extends o.jG {
  get isStarted() {
    return this._taskStatus === 1;
  }
  start() {
    if ([0, 5].includes(this._taskStatus) && this.orderId) {
      this._taskStatus = 1;
      this._startPollingOrderStatus();
    }
  }
  stop() {
    if (!c.includes(this._taskStatus) || this._timer) {
      this._taskStatus = 5;
      this._onStop.fire();
      this._clearTimer();
    }
  }
  _clearTimer() {
    if (this._timer) {
      clearTimeout(this._timer);
      this._timer = undefined;
    }
  }
  _startPollingOrderStatus() {
    return i
      ._(function* () {
        yield this._queryOrderStatus();
        if (s.includes(this._taskStatus)) {
          this._timer = setTimeout(() => {
            this._startPollingOrderStatus();
          }, this._pollingInterval);
        }
      })
      .call(this);
  }
  _queryOrderStatus() {
    return i
      ._(function* () {
        const e = yield this._queryOrderFn({
          orderId: this.orderId,
        });
        if (e.ok) {
          this._queryOrderErrorCount = 0;
          this._orderStatus = e.value.status;
          const t = 1000 * e.value.expirationTime <= e.value.sysTime;
          if (this._orderStatus === "failed") {
            this._handleOrderFailed(e);
          } else if (this._orderStatus === "success") {
            this._handleOrderSuccess(e);
          } else if (t) {
            this._handleOrderExpired(e);
          } else {
            this._onProgress.fire(e.value);
          }
        } else {
          this._handleQueryOrderError(e);
        }
        return e;
      })
      .call(this);
  }
  _handleOrderSuccess(e) {
    this._taskStatus = 2;
    this._clearTimer();
    this._onSuccess.fire(e.value);
  }
  _handleOrderFailed(e) {
    this._taskStatus = 3;
    this._clearTimer();
    let t;
    const closeReason = e.value.closeReason;
    this._onError.fire(
      a.xz(
        (t = ((e) => {
          if (
            e !== undefined &&
            e !== "" &&
            (typeof e !== "string" || e.trim())
          ) {
            const t = Number(e);
            if (Number.isFinite(t)) {
              return t;
            }
            return undefined;
          }
        })(closeReason == null ? undefined : closeReason.code)) != null
          ? t
          : e.code,
        (closeReason == null ? undefined : closeReason.originReason) ||
          (closeReason == null ? undefined : closeReason.reason) ||
          `failed - order failed`,
        e,
      ),
    );
  }
  _handleOrderExpired(e) {
    this._taskStatus = 3;
    this._orderStatus = "failed";
    this._clearTimer();
    this._onError.fire(a.xz(e.code, `failed - order is expired`, e));
  }
  _handleQueryOrderError(e) {
    this._queryOrderErrorCount++;
    if (this._queryOrderErrorCount >= 5) {
      let t;
      this._orderStatus = "failed";
      this._taskStatus = 3;
      this._clearTimer();
      this._onError.fire(
        a.xz(e.code, e.msg, (t = e.errorInfo) != null ? t : e),
      );
    }
  }
  cancel() {
    return i
      ._(function* () {
        if (
          !c.includes(this._taskStatus) &&
          (this._clearTimer(), (this._taskStatus = 4), this._cancelOrderFn)
        ) {
          const e = yield this._cancelOrderFn({
            orderId: this.orderId,
          });
          if (e.ok) {
            this._onCancel.fire(e);
          } else {
            this._onError.fire(e);
          }
        }
      })
      .call(this);
  }
  dispose() {
    this.stop();
    super.dispose();
  }
  constructor(e, t, r, i = 500) {
    super();
    this.orderId = e;
    this._queryOrderFn = t;
    this._cancelOrderFn = r;
    this._pollingInterval = i;
    this._onProgress = this._store.add(new n.v());
    this.onProgress = this._onProgress.event;
    this._onError = this._store.add(new n.v());
    this.onError = this._onError.event;
    this._onSuccess = this._store.add(new n.v());
    this.onSuccess = this._onSuccess.event;
    this._onCancel = this._store.add(new n.v());
    this.onCancel = this._onCancel.event;
    this._onStop = this._store.add(new n.v());
    this.onStop = this._onStop.event;
    this._orderStatus = "init";
    this._taskStatus = 0;
    this._queryOrderErrorCount = 0;
  }
}
