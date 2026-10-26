if (require.j == "wl4") var a = require("./module-Vj_2.js");
if (require.j == "wl4") var o = require("./module-J2_2.js");
if (require.j == "wl4") var i = require("./module-Yb_3.js");
class n {
  invoke(...e) {
    this._callback.call(this._callbackThis, ...e);
  }
  constructor(e, t) {
    this._callback = e;
    this._callbackThis = t;
  }
}
class c {
  constructor(e, t, r) {
    this.emitter = e;
    this.listener = t;
    this.event = r;
  }
}
class l {
  get size() {
    return this._queue.size;
  }
  push(e, t, r) {
    this._queue.push(new c(e, t, r));
  }
  clear(e) {
    let t = new o.w();
    for (let r of this._queue) {
      if (r.emitter !== e) {
        t.push(r);
      }
    }
    this._queue = t;
  }
  deliver() {
    while (this._queue.size > 0) {
      let e = this._queue.shift();
      try {
        e.listener.invoke(...e.event);
      } catch (error) {
        this._onListenerError(error);
      }
    }
  }
  constructor(e = i.IG) {
    this._onListenerError = e;
    this._queue = new o.w();
  }
}
export class v {
  get event() {
    if (!this._event) {
      this._event = (e, t) => {
        var r;
        let i = new n(e, t);
        if (!this._listeners) {
          this._listeners = new o.w();
        }
        let c = this._listeners.pushAndGetDisposableNode(i);
        if ((r = this._options) == null ? undefined : r.onAddListener) {
          this._options.onAddListener(this, e, t);
        }
        let l = () => {
          if (!this._disposed) {
            var r;
            c();
            if ((r = this._options) == null ? undefined : r.onRemoveListener) {
              this._options.onRemoveListener(this, e, t);
            }
          }
        };
        return a.IZ(l);
      };
    }
    return this._event;
  }
  dispose() {
    let e;
    let t;
    if (!this._disposed) {
      this._disposed = true;
      if ((e = this._listeners) != null) {
        e.clear();
      }
      if ((t = this._deliveryQueue) != null) {
        t.clear(this);
      }
    }
  }
  fire(...e) {
    let t;
    let r;
    if (this._listeners && this._listeners.size !== 0) {
      if (this._listeners.size === 1) {
        let t = this._listeners.firstNode;
        try {
          t.value.invoke(...e);
        } catch (error) {
          if ((r = this._options) == null ? undefined : r.onListenerError) {
            this._options.onListenerError(error);
          } else {
            i.IG(error);
          }
        }
        return;
      }
      for (let r of (this._deliveryQueue != null ||
        (this._deliveryQueue = new l(
          (t = this._options) == null ? undefined : t.onListenerError,
        )),
      this._listeners)) {
        this._deliveryQueue.push(this, r, e);
      }
      this._deliveryQueue.deliver();
    }
  }
  constructor(e) {
    this._disposed = false;
    this._options = e;
  }
}
