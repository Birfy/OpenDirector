import a from "NY";
import r from "b5";
import i from "M8X";
import o from "A7";
import l from "Ik";
import { O } from "./module-D5_2.js";
export class P extends O {
  get loaded() {
    return !!this._instance;
  }
  get isFailed() {
    return this._isFailed;
  }
  getInstance() {
    return a
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
          this._instance = i.cQ(e, this._serviceId);
          yield this._execFlow(e);
          this._onLoad.fire();
          return this._instance;
        } catch (error) {
          this._isFailed = true;
          this._onFailure.fire(r.r(error));
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
    this._sharedMutex = new l.P();
    this._onLoad = new o.v();
    this.onLoad = this._onLoad.event;
    this._isFailed = false;
    this._onFailure = new o.v();
    this.onFailure = this._onFailure.event;
  }
}
