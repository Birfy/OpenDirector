const r = function () {
  this.head = null;
  this.tail = null;
};
r.prototype = {
  add: function (item) {
    const r = {
      item,
      next: null,
    };
    const tail = this.tail;
    if (tail) {
      tail.next = r;
    } else {
      this.head = r;
    }
    this.tail = r;
  },
  get: function () {
    const head = this.head;
    if (head) {
      if ((this.head = head.next) === null) {
        this.tail = null;
      }
      return head.item;
    }
  },
};
export default r;
