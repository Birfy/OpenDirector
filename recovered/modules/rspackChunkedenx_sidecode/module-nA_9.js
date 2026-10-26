const e = function () {
  this.head = null;
  this.tail = null;
};
e.prototype = {
  add: function (item) {
    const e = {
      item,
      next: null,
    };
    const tail = this.tail;
    if (tail) {
      tail.next = e;
    } else {
      this.head = e;
    }
    this.tail = e;
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
export default e;
