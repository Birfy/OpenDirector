class a {
  constructor(e, t = null, r = null) {
    this.value = e;
    this.next = t;
    this.prev = r;
  }
}
export class w {
  get size() {
    return this._count;
  }
  get firstNode() {
    return this._head;
  }
  isEmpty() {
    return this._head === null;
  }
  clear() {
    let _head = this._head;
    while (_head !== null) {
      let t = _head.next;
      _head.prev = null;
      _head.next = null;
      _head = t;
    }
    this._head = null;
    this._tail = null;
    this._count = 0;
  }
  unshift(e) {
    let t = new a(e);
    if (this.isEmpty()) {
      this._head = t;
      this._tail = t;
    } else {
      let e = this._head;
      this._head = t;
      t.next = e;
      e.prev = t;
    }
    this._count++;
    return this;
  }
  push(e) {
    let t = new a(e);
    if (this.isEmpty()) {
      this._head = t;
      this._tail = t;
    } else {
      let e = this._tail;
      this._tail = t;
      t.prev = e;
      e.next = t;
    }
    this._count++;
    return this;
  }
  shift() {
    if (this.isEmpty()) {
      return null;
    }
    let _head = this._head;
    let e_value = _head.value;
    this._remove(_head);
    return e_value;
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    let _tail = this._tail;
    let e_value = _tail.value;
    this._remove(_tail);
    return e_value;
  }
  toArray() {
    let e = [];
    for (let t of this) {
      e.push(t);
    }
    return e;
  }
  *[Symbol.iterator]() {
    let _head = this._head;
    while (_head !== null) {
      yield _head.value;
      _head = _head.next;
    }
  }
  _remove(e) {
    if (
      e.prev !== null ||
      e.next !== null ||
      e === this._head ||
      e === this._tail
    ) {
      if (e === this._head) {
        this._head = e.next;
        if (this._head) {
          this._head.prev = null;
        }
      }
      if (e === this._tail) {
        this._tail = e.prev;
        if (this._tail) {
          this._tail.next = null;
        }
      }
      if (e.prev) {
        e.prev.next = e.next;
      }
      if (e.next) {
        e.next.prev = e.prev;
      }
      e.prev = null;
      e.next = null;
      this._count--;
    }
  }
  constructor() {
    this._head = null;
    this._tail = null;
    this._count = 0;
  }
}
