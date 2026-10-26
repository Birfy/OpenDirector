import r from "A7";
export class $ {
  get onFallbackFinished() {
    return this._fallbackFinishedEmitter.event;
  }
  handleMessage(e, t) {
    if (this.hasFallbacked && !this.canHandleMessageAfterFallback()) {
      return;
    }
  }
  dispose() {}
  markFallbackFinished() {
    this._fallbackFinishedEmitter.fire();
  }
  constructor(e, t) {
    this.manager = e;
    this.config = t;
    this.hasFallbacked = false;
    this._fallbackFinishedEmitter = new r.v();
  }
}
