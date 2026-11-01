class e {
  constructor() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
  }
  setMaxListeners(t) {
    if (typeof t !== "number" || t < 0 || isNaN(t)) {
      throw TypeError("n must be a positive number");
    }
    this._maxListeners = t;
    return this;
  }
  emit(t) {
    let e;
    let f;
    let n;
    let a;
    let s;
    let o;
    if (!this._events) {
      this._events = {};
    }
    if (
      t === "error" &&
      (!this._events.error ||
        (i(this._events.error) && !this._events.error.length))
    ) {
      e = arguments[1];
      if (e instanceof Error) {
        throw e;
      }
      const h = Error('Uncaught, unspecified "error" event. (' + e + ")");
      h.context = e;
      throw h;
    }
    if ((f = this._events[t]) === undefined) {
      return false;
    }
    if (r(f)) {
      switch (arguments.length) {
        case 1:
          f.call(this);
          break;
        case 2:
          f.call(this, arguments[1]);
          break;
        case 3:
          f.call(this, arguments[1], arguments[2]);
          break;
        default:
          a = Array.prototype.slice.call(arguments, 1);
          f.apply(this, a);
      }
    } else if (i(f)) {
      a = Array.prototype.slice.call(arguments, 1);
      n = (o = f.slice()).length;
      for (s = 0; s < n; s++) {
        o[s].apply(this, a);
      }
    }
    return true;
  }
  addListener(t, f) {
    let n;
    if (!r(f)) {
      throw TypeError("listener must be a function");
    }
    if (!this._events) {
      this._events = {};
    }
    if (this._events.newListener) {
      this.emit("newListener", t, r(f.listener) ? f.listener : f);
    }
    if (this._events[t]) {
      if (i(this._events[t])) {
        this._events[t].push(f);
      } else {
        this._events[t] = [this._events[t], f];
      }
    } else {
      this._events[t] = f;
    }
    if (
      i(this._events[t]) &&
      !this._events[t].warned &&
      (n =
        this._maxListeners === undefined
          ? e.defaultMaxListeners
          : this._maxListeners) &&
      n > 0 &&
      this._events[t].length > n
    ) {
      this._events[t].warned = true;
      console.error(
        "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
        this._events[t].length,
      );
      if (typeof console.trace === "function") {
        console.trace();
      }
    }
    return this;
  }
  once(t, e) {
    if (!r(e)) {
      throw TypeError("listener must be a function");
    }
    let i = false;
    function f() {
      this.removeListener(t, f);
      if (!i) {
        i = true;
        e.apply(this, arguments);
      }
    }
    f.listener = e;
    this.on(t, f);
    return this;
  }
  removeListener(t, e) {
    let f;
    let n;
    let a;
    let s;
    if (!r(e)) {
      throw TypeError("listener must be a function");
    }
    if (!this._events || !this._events[t]) {
      return this;
    }
    a = (f = this._events[t]).length;
    n = -1;
    if (f === e || (r(f.listener) && f.listener === e)) {
      delete this._events[t];
      if (this._events.removeListener) {
        this.emit("removeListener", t, e);
      }
    } else if (i(f)) {
      for (s = a; s-- > 0;) {
        if (f[s] === e || (f[s].listener && f[s].listener === e)) {
          n = s;
          break;
        }
      }
      if (n < 0) {
        return this;
      }
      if (f.length === 1) {
        f.length = 0;
        delete this._events[t];
      } else {
        f.splice(n, 1);
      }
      if (this._events.removeListener) {
        this.emit("removeListener", t, e);
      }
    }
    return this;
  }
  removeAllListeners(t) {
    let e;
    let i;
    if (!this._events) {
      return this;
    }
    if (!this._events.removeListener) {
      if (arguments.length == 0) {
        this._events = {};
      } else if (this._events[t]) {
        delete this._events[t];
      }
      return this;
    }
    if (arguments.length == 0) {
      for (e in this._events) {
        if (e !== "removeListener") {
          this.removeAllListeners(e);
        }
      }
      this.removeAllListeners("removeListener");
      this._events = {};
      return this;
    }
    if (r((i = this._events[t]))) {
      this.removeListener(t, i);
    } else if (i) {
      while (i.length) {
        this.removeListener(t, i[i.length - 1]);
      }
    }
    delete this._events[t];
    return this;
  }
  listeners(t) {
    if (this._events && this._events[t]) {
      if (r(this._events[t])) {
        return [this._events[t]];
      }
      return this._events[t].slice();
    }
    return [];
  }
  listenerCount(t) {
    if (this._events) {
      const e = this._events[t];
      if (r(e)) {
        return 1;
      }
      if (e) {
        return e.length;
      }
    }
    return 0;
  }
  static listenerCount(t, e) {
    return t.listenerCount(e);
  }
}
function r(t) {
  return typeof t === "function";
}
function i(t) {
  return typeof t === "object" && t !== null;
}
export default e;
e.EventEmitter = e;
e.prototype._events = undefined;
e.prototype._maxListeners = undefined;
e.defaultMaxListeners = 10;
e.prototype.on = e.prototype.addListener;
