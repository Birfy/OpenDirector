import o from "bT";
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
const i = (e, t) => {
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
  function t(t) {
    const n = e.call(this, t) || this;
    n.add = function (e) {
      const id = (e == null ? undefined : e.id)
        ? e == null
          ? undefined
          : e.id
        : "arco_notice_id_" + Math.random().toFixed(10).slice(2);
      n.setState(function (r) {
        const r_notices = r.notices;
        if (e.id && ~r_notices.findIndex((t) => t.id === e.id)) {
          n.update(e);
          return r;
        }
        return {
          notices: r_notices.concat({
            ...e,
            id,
          }),
          position: e.position,
        };
      });
      return id;
    };
    n.update = function (e) {
      const t = n.state.notices.map((t) => {
        if (e.id === t.id) {
          e.update = true;
          return e;
        }
        return t;
      });
      n.setState(
        {
          notices: t,
        },
        function () {
          const t = n.state.notices.map((t) => {
            if (e.id === t.id && t.update) {
              delete t.update;
            }
            return t;
          });
          n.setState({
            notices: t,
          });
        },
      );
    };
    n.clear = function () {
      n.setState({
        notices: [],
      });
    };
    n.state = {
      notices: [],
      position: "topRight",
    };
    n.remove = n.remove.bind(n);
    return n;
  }
  i(t, e);
  t.prototype.remove = function (e) {
    const t = this.state.notices.filter((t) => t.id !== e);
    this.setState({
      notices: t,
    });
  };
  return t;
})(o.Component);
