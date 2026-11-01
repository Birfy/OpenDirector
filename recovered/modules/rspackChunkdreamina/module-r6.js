export class H {
  insert(e) {
    this._heap.push(e);
    this._siftUp();
  }
  peek() {
    if (this._heap.length > 0) {
      return this._heap[0];
    }
    return null;
  }
  remove() {
    if (this._heap.length === 0) {
      return null;
    }
    if (this._heap.length === 1) {
      return this._heap.pop();
    }
    let e = this._heap[0];
    this._heap[0] = this._heap.pop();
    this._siftDown();
    return e;
  }
  size() {
    return this._heap.length;
  }
  clear() {
    this._heap.length = 0;
  }
  _getLeftChildIndex(e) {
    return 2 * e + 1;
  }
  _getRightChildIndex(e) {
    return 2 * e + 2;
  }
  _getParentIndex(e) {
    return Math.floor((e - 1) / 2);
  }
  _swap(e, t) {
    [this._heap[e], this._heap[t]] = [this._heap[t], this._heap[e]];
  }
  _siftUp() {
    let e = this._heap.length - 1;
    while (
      e > 0 &&
      this._compare(this._heap[this._getParentIndex(e)], this._heap[e]) > 0
    ) {
      let t = this._getParentIndex(e);
      this._swap(e, t);
      e = t;
    }
  }
  _siftDown() {
    let e = 0;
    let t = this._getLeftChildIndex(e);
    while (t < this._heap.length) {
      let r = this._getRightChildIndex(e);
      if (
        r < this._heap.length &&
        this._compare(this._heap[r], this._heap[t]) < 0
      ) {
        t = r;
      }
      if (this._compare(this._heap[e], this._heap[t]) <= 0) {
        break;
      }
      this._swap(e, t);
      e = t;
      t = this._getLeftChildIndex(e);
    }
  }
  constructor(e) {
    this._heap = [];
    if (e) {
      this._compare = e;
    } else {
      this._compare = (e, t) => {
        if (e < t) {
          return -1;
        }
        return +(e > t);
      };
    }
  }
}
