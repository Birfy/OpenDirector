import i from "./module-sJv.js";
export default c;
let n;
const i_LongBits = i.LongBits;
const i_base64 = i.base64;
const i_utf8 = i.utf8;
function l(e, t, r) {
  this.fn = e;
  this.len = t;
  this.next = undefined;
  this.val = r;
}
function u() {}
function f(e) {
  this.head = e.head;
  this.tail = e.tail;
  this.len = e.len;
  this.next = e.states;
}
function c() {
  this.len = 0;
  this.head = new l(u, 0, 0);
  this.tail = this.head;
  this.states = null;
}
const p = () => {
  if (i.Buffer) {
    return function () {
      return (c.create = function () {
        return new n();
      })();
    };
  }
  return function () {
    return new c();
  };
};
function d(e, t, r) {
  t[r] = 255 & e;
}
function h(e, t) {
  this.len = e;
  this.next = undefined;
  this.val = t;
}
function m(e, t, r) {
  while (e.hi) {
    t[r++] = (127 & e.lo) | 128;
    e.lo = ((e.lo >>> 7) | (e.hi << 25)) >>> 0;
    e.hi >>>= 7;
  }
  while (e.lo > 127) {
    t[r++] = (127 & e.lo) | 128;
    e.lo = e.lo >>> 7;
  }
  t[r++] = e.lo;
}
function y(e, t, r) {
  t[r] = 255 & e;
  t[r + 1] = (e >>> 8) & 255;
  t[r + 2] = (e >>> 16) & 255;
  t[r + 3] = e >>> 24;
}
c.create = p();
c.alloc = function (e) {
  return new i.Array(e);
};
if (i.Array !== Array) {
  c.alloc = i.pool(c.alloc, i.Array.prototype.subarray);
}
c.prototype._push = function (e, t, r) {
  this.tail = this.tail.next = new l(e, t, r);
  this.len += t;
  return this;
};
h.prototype = Object.create(l.prototype);
h.prototype.fn = function (e, t, r) {
  while (e > 127) {
    t[r++] = (127 & e) | 128;
    e >>>= 7;
  }
  t[r] = e;
};
c.prototype.uint32 = function (e) {
  this.len += (this.tail = this.tail.next =
    new h(
      (e >>>= 0) < 128
        ? 1
        : e < 16384
          ? 2
          : e < 2097152
            ? 3
            : e < 268435456
              ? 4
              : 5,
      e,
    )).len;
  return this;
};
c.prototype.int32 = function (e) {
  if (e < 0) {
    return this._push(m, 10, i_LongBits.fromNumber(e));
  }
  return this.uint32(e);
};
c.prototype.sint32 = function (e) {
  return this.uint32(((e << 1) ^ (e >> 31)) >>> 0);
};
c.prototype.uint64 = function (e) {
  const t = i_LongBits.from(e);
  return this._push(m, t.length(), t);
};
c.prototype.int64 = c.prototype.uint64;
c.prototype.sint64 = function (e) {
  const t = i_LongBits.from(e).zzEncode();
  return this._push(m, t.length(), t);
};
c.prototype.bool = function (e) {
  return this._push(d, 1, +!!e);
};
c.prototype.fixed32 = function (e) {
  return this._push(y, 4, e >>> 0);
};
c.prototype.sfixed32 = c.prototype.fixed32;
c.prototype.fixed64 = function (e) {
  const t = i_LongBits.from(e);
  return this._push(y, 4, t.lo)._push(y, 4, t.hi);
};
c.prototype.sfixed64 = c.prototype.fixed64;
c.prototype.float = function (e) {
  return this._push(i.float.writeFloatLE, 4, e);
};
c.prototype.double = function (e) {
  return this._push(i.float.writeDoubleLE, 8, e);
};
const v = i.Array.prototype.set
  ? function (e, t, r) {
      t.set(e, r);
    }
  : function (e, t, r) {
      for (let n = 0; n < e.length; ++n) {
        t[r + n] = e[n];
      }
    };
c.prototype.bytes = function (e) {
  let t = e.length >>> 0;
  if (!t) {
    return this._push(d, 1, 0);
  }
  if (i.isString(e)) {
    const r = c.alloc((t = i_base64.length(e)));
    i_base64.decode(e, r, 0);
    e = r;
  }
  return this.uint32(t)._push(v, t, e);
};
c.prototype.string = function (e) {
  const t = i_utf8.length(e);
  if (t) {
    return this.uint32(t)._push(i_utf8.write, t, e);
  }
  return this._push(d, 1, 0);
};
c.prototype.fork = function () {
  this.states = new f(this);
  this.head = this.tail = new l(u, 0, 0);
  this.len = 0;
  return this;
};
c.prototype.reset = function () {
  if (this.states) {
    this.head = this.states.head;
    this.tail = this.states.tail;
    this.len = this.states.len;
    this.states = this.states.next;
  } else {
    this.head = this.tail = new l(u, 0, 0);
    this.len = 0;
  }
  return this;
};
c.prototype.ldelim = function () {
  const head = this.head;
  const tail = this.tail;
  const len = this.len;
  this.reset().uint32(len);
  if (len) {
    this.tail.next = head.next;
    this.tail = tail;
    this.len += len;
  }
  return this;
};
c.prototype.finish = function () {
  for (
    var e = this.head.next, t = this.constructor.alloc(this.len), r = 0;
    e;
  ) {
    e.fn(e.val, t, r);
    r += e.len;
    e = e.next;
  }
  return t;
};
c._configure = function (e) {
  n = e;
  c.create = p();
  n._configure();
};
