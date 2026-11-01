const t = function () {
  this.head = null;
  this.tail = null;
};
t.prototype = {
  add: function (item) {
    const t = {
      item,
      next: null,
    };
    const tail = this.tail;
    if (tail) {
      tail.next = t;
    } else {
      this.head = t;
    }
    this.tail = t;
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
export default t;
