import r from "o7";
import o from "dw4";
class n {
  setProgress(e) {
    this.progress = e;
  }
  setLoading(e) {
    this.loading = e;
  }
  constructor() {
    this.progress = 0;
    this.loading = false;
    o.l_(this);
  }
}
class a extends r.jG {
  get data() {
    return this._progressStore;
  }
  dispose() {
    this._clearTimer();
    super.dispose();
  }
  _clearTimer() {
    if (this._timer) {
      clearInterval(this._timer);
      this._timer = null;
    }
  }
  _calculateDynamicIncrement(e) {
    const t = 0.7 + 0.6 * Math.random();
    return (100 - e) * (1 - this._baseRetentionRate ** t);
  }
  constructor(e) {
    super();
    this._options = e;
    this._progressStore = new n();
    this._timer = null;
    this._baseRetentionRate =
      0.01 ** (1 / Math.max(1, this._options.estimatedDuration / 200));
    this.start = () => {
      if (!this._timer) {
        this._progressStore.setProgress(0);
        this._progressStore.setLoading(true);
        this._timer = setInterval(() => {
          var progress = this._progressStore.progress;
          var t = this._calculateDynamicIncrement(progress);
          this._progressStore.setProgress(progress + t);
        }, 200);
      }
    };
    this.stop = () => {
      this._clearTimer();
      this._progressStore.setProgress(0);
      this._progressStore.setLoading(false);
    };
  }
}
export { a };
