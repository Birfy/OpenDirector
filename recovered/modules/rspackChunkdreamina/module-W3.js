import o from "bT";
import i from "xi4";
import l from "PC";
let r;
r = function (e, t) {
  return (r =
    Object.setPrototypeOf ||
    ({
      __proto__: [],
    } instanceof Array &&
      function (e, t) {
        e.__proto__ = t;
      }) ||
    function (e, t) {
      for (const n in t) {
        if (Object.prototype.hasOwnProperty.call(t, n)) {
          e[n] = t[n];
        }
      }
    })(e, t);
};
const a = (e, t) => {
  if (typeof t !== "function" && t !== null) {
    throw TypeError(
      "Class extends value " + String(t) + " is not a constructor or null",
    );
  }
  function n() {
    this.constructor = e;
  }
  r(e, t);
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
};
export const A = ((e) => {
  function t() {
    const t = (e !== null && e.apply(this, arguments)) || this;
    t.componentWillUnmount = function () {
      if (t.resizeObserver) {
        t.destroyResizeObserver();
      }
    };
    t.createResizeObserver = function () {
      t.resizeObserver = new i.default(function (e) {
        const onResize = t.props.onResize;
        if (onResize) {
          onResize(e);
        }
      });
      t.resizeObserver.observe(l.findDOMNode(t));
    };
    t.destroyResizeObserver = function () {
      if (t.resizeObserver) {
        t.resizeObserver.disconnect();
      }
      t.resizeObserver = null;
    };
    return t;
  }
  a(t, e);
  t.prototype.componentDidMount = function () {
    if (o.isValidElement(this.props.children)) {
      this.createResizeObserver();
    } else {
      console.warn("The children of ResizeObserver is invalid.");
    }
  };
  t.prototype.componentDidUpdate = function () {
    if (!this.resizeObserver && l.findDOMNode(this)) {
      this.createResizeObserver();
    }
  };
  t.prototype.render = function () {
    return this.props.children;
  };
  return t;
})(o.Component);
