import n from "bT";
const i = n && typeof n === "object" && "default" in n ? n.default : n;
const o = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);
export default function (t, e, r) {
  if (typeof t !== "function") {
    throw Error("Expected reducePropsToState to be a function.");
  }
  if (typeof e !== "function") {
    throw Error("Expected handleStateChangeOnClient to be a function.");
  }
  if (r !== undefined && typeof r !== "function") {
    throw Error(
      "Expected mapStateOnServer to either be undefined or a function.",
    );
  }
  return function (s) {
    if (typeof s !== "function") {
      throw Error("Expected WrappedComponent to be a React component.");
    }
    let A;
    let c = [];
    function u() {
      A = t(c.map((t) => t.props));
      if (l.canUseDOM) {
        e(A);
      } else if (r) {
        A = r(A);
      }
    }
    var l = ((t) => {
      function e() {
        return t.apply(this, arguments) || this;
      }
      e.prototype = Object.create(t.prototype);
      e.prototype.constructor = e;
      e.__proto__ = t;
      e.peek = function () {
        return A;
      };
      e.rewind = function () {
        if (e.canUseDOM) {
          throw Error(
            "You may only call rewind() on the server. Call peek() to read the current state.",
          );
        }
        const t = A;
        A = undefined;
        c = [];
        return t;
      };
      const e_prototype = e.prototype;
      e_prototype.UNSAFE_componentWillMount = function () {
        c.push(this);
        u();
      };
      e_prototype.componentDidUpdate = function () {
        u();
      };
      e_prototype.componentWillUnmount = function () {
        const t = c.indexOf(this);
        c.splice(t, 1);
        u();
      };
      e_prototype.render = function () {
        return i.createElement(s, this.props);
      };
      return e;
    })(n.PureComponent);
    l.displayName =
      "SideEffect(" + (s.displayName || s.name || "Component") + ")";
    l.canUseDOM = o;
    return l;
  };
}
