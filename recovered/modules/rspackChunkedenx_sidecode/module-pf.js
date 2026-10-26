class Z {
  constructor() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
  }
  setMaxListeners(J) {
    if (typeof J !== "number" || J < 0 || isNaN(J)) {
      throw TypeError("n must be a positive number");
    }
    this._maxListeners = J;
    return this;
  }
  emit(J) {
    let Z;
    let tt;
    let te;
    let tr;
    let tn;
    let ti;
    if (!this._events) {
      this._events = {};
    }
    if (
      J === "error" &&
      (!this._events.error ||
        ($(this._events.error) && !this._events.error.length))
    ) {
      Z = arguments[1];
      if (Z instanceof Error) {
        throw Z;
      }
      const to = Error('Uncaught, unspecified "error" event. (' + Z + ")");
      to.context = Z;
      throw to;
    }
    if ((tt = this._events[J]) === undefined) {
      return false;
    }
    if (Q(tt)) {
      switch (arguments.length) {
        case 1:
          tt.call(this);
          break;
        case 2:
          tt.call(this, arguments[1]);
          break;
        case 3:
          tt.call(this, arguments[1], arguments[2]);
          break;
        default:
          tr = Array.prototype.slice.call(arguments, 1);
          tt.apply(this, tr);
      }
    } else if ($(tt)) {
      tr = Array.prototype.slice.call(arguments, 1);
      te = (ti = tt.slice()).length;
      for (tn = 0; tn < te; tn++) {
        ti[tn].apply(this, tr);
      }
    }
    return true;
  }
  addListener(J, tt) {
    let te;
    if (!Q(tt)) {
      throw TypeError("listener must be a function");
    }
    if (!this._events) {
      this._events = {};
    }
    if (this._events.newListener) {
      this.emit("newListener", J, Q(tt.listener) ? tt.listener : tt);
    }
    if (this._events[J]) {
      if ($(this._events[J])) {
        this._events[J].push(tt);
      } else {
        this._events[J] = [this._events[J], tt];
      }
    } else {
      this._events[J] = tt;
    }
    if (
      $(this._events[J]) &&
      !this._events[J].warned &&
      (te =
        this._maxListeners === undefined
          ? Z.defaultMaxListeners
          : this._maxListeners) &&
      te > 0 &&
      this._events[J].length > te
    ) {
      this._events[J].warned = true;
      console.error(
        "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
        this._events[J].length,
      );
      if (typeof console.trace === "function") {
        console.trace();
      }
    }
    return this;
  }
  once(J, Z) {
    if (!Q(Z)) {
      throw TypeError("listener must be a function");
    }
    let $ = false;
    function tt() {
      this.removeListener(J, tt);
      if (!$) {
        $ = true;
        Z.apply(this, arguments);
      }
    }
    tt.listener = Z;
    this.on(J, tt);
    return this;
  }
  removeListener(J, Z) {
    let tt;
    let te;
    let tr;
    let tn;
    if (!Q(Z)) {
      throw TypeError("listener must be a function");
    }
    if (!this._events || !this._events[J]) {
      return this;
    }
    tr = (tt = this._events[J]).length;
    te = -1;
    if (tt === Z || (Q(tt.listener) && tt.listener === Z)) {
      delete this._events[J];
      if (this._events.removeListener) {
        this.emit("removeListener", J, Z);
      }
    } else if ($(tt)) {
      for (tn = tr; tn-- > 0;) {
        if (tt[tn] === Z || (tt[tn].listener && tt[tn].listener === Z)) {
          te = tn;
          break;
        }
      }
      if (te < 0) {
        return this;
      }
      if (tt.length === 1) {
        tt.length = 0;
        delete this._events[J];
      } else {
        tt.splice(te, 1);
      }
      if (this._events.removeListener) {
        this.emit("removeListener", J, Z);
      }
    }
    return this;
  }
  removeAllListeners(J) {
    let Z;
    let $;
    if (!this._events) {
      return this;
    }
    if (!this._events.removeListener) {
      if (arguments.length == 0) {
        this._events = {};
      } else if (this._events[J]) {
        delete this._events[J];
      }
      return this;
    }
    if (arguments.length == 0) {
      for (Z in this._events) {
        if (Z !== "removeListener") {
          this.removeAllListeners(Z);
        }
      }
      this.removeAllListeners("removeListener");
      this._events = {};
      return this;
    }
    if (Q(($ = this._events[J]))) {
      this.removeListener(J, $);
    } else if ($) {
      while ($.length) {
        this.removeListener(J, $[$.length - 1]);
      }
    }
    delete this._events[J];
    return this;
  }
  listeners(J) {
    if (this._events && this._events[J]) {
      if (Q(this._events[J])) {
        return [this._events[J]];
      }
      return this._events[J].slice();
    }
    return [];
  }
  listenerCount(J) {
    if (this._events) {
      const Z = this._events[J];
      if (Q(Z)) {
        return 1;
      }
      if (Z) {
        return Z.length;
      }
    }
    return 0;
  }
  static listenerCount(J, Z) {
    return J.listenerCount(Z);
  }
}
function Q(J) {
  return typeof J === "function";
}
function $(J) {
  return typeof J === "object" && J !== null;
}
export default Z;
Z.EventEmitter = Z;
Z.prototype._events = undefined;
Z.prototype._maxListeners = undefined;
Z.defaultMaxListeners = 10;
Z.prototype.on = Z.prototype.addListener;
