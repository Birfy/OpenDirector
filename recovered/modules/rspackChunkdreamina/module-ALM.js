import n from "NY";
import o from "b5";
import a from "M8X";
import l from "A7";
import r from "Ik";
import d from "D5";
export class P extends d.O {
  get loaded() {
    return !!this._instance;
  }
  get isFailed() {
    return this._isFailed;
  }
  getInstance() {
    return n
      ._(function* () {
        if (this._instance) {
          return this._instance;
        }
        yield this._sharedMutex.lock();
        if (this._instance) {
          this._sharedMutex.unLock();
          return this._instance;
        }
        try {
          this._isFailed = false;
          const e = yield this.createChild();
          this._instance = a.cQ(e, this._serviceId);
          yield this._execFlow(e);
          this._onLoad.fire();
          return this._instance;
        } catch (error) {
          this._isFailed = true;
          this._onFailure.fire(o.r(error));
          throw error;
        } finally {
          this._sharedMutex.unLock();
        }
      })
      .call(this);
  }
  getInstanceSync() {
    if (this._instance) {
      return this._instance;
    }
    return null;
  }
  constructor(...e) {
    super(...e);
    this._sharedMutex = new r.P();
    this._onLoad = new l.v();
    this.onLoad = this._onLoad.event;
    this._isFailed = false;
    this._onFailure = new l.v();
    this.onFailure = this._onFailure.event;
  }
}
