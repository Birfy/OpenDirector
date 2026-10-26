const Z = function () {
  this.head = null;
  this.tail = null;
};
Z.prototype = {
  add: function (item) {
    const Z = {
      item,
      next: null,
    };
    const tail = this.tail;
    if (tail) {
      tail.next = Z;
    } else {
      this.head = Z;
    }
    this.tail = Z;
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
export default Z;
