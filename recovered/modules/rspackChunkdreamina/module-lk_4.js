import o from "O6";
import {
  Component,
  cloneElement,
  createElement,
  isValidElement,
} from "./module-ND_2.js";
import { _K, ns, ze } from "./module-rU_6.js";
import { A } from "./module-nS.js";
const mode = "out-in";
const c = "in-out";
const d = (e, t, r) =>
  function () {
    let n;
    if (e.props[t]) {
      (n = e.props)[t].apply(n, arguments);
    }
    r();
  };
const h = {
  [mode]: function (e) {
    const e_current = e.current;
    const e_changeState = e.changeState;
    return cloneElement(e_current, {
      in: false,
      onExited: d(e_current, "onExited", () => {
        e_changeState(ns, null);
      }),
    });
  },
  [c]: function (e) {
    const e_current = e.current;
    const e_changeState = e.changeState;
    const e_children = e.children;
    return [
      e_current,
      cloneElement(e_children, {
        in: true,
        onEntered: d(e_children, "onEntered", () => {
          e_changeState(ns);
        }),
      }),
    ];
  },
};
const f = {
  [mode]: function (e) {
    const e_children = e.children;
    const e_changeState = e.changeState;
    return cloneElement(e_children, {
      in: true,
      onEntered: d(e_children, "onEntered", () => {
        e_changeState(
          _K,
          cloneElement(e_children, {
            in: true,
          }),
        );
      }),
    });
  },
  [c]: function (e) {
    const e_current = e.current;
    const e_children = e.children;
    const e_changeState = e.changeState;
    return [
      cloneElement(e_current, {
        in: false,
        onExited: d(e_current, "onExited", () => {
          e_changeState(
            _K,
            cloneElement(e_children, {
              in: true,
            }),
          );
        }),
      }),
      cloneElement(e_children, {
        in: true,
      }),
    ];
  },
};
var p = ((e) => {
  function t() {
    let t;
    for (var r = arguments.length, n = Array(r), a = 0; a < r; a++) {
      n[a] = arguments[a];
    }
    t = e.call.apply(e, [this].concat(n)) || this;
    t.state = {
      status: _K,
      current: null,
    };
    t.appeared = false;
    t.changeState = function (status, current = t.state.current) {
      t.setState({
        status,
        current,
      });
    };
    return t;
  }
  o.A(t, e);
  const t_prototype = t.prototype;
  t_prototype.componentDidMount = function () {
    this.appeared = true;
  };
  t.getDerivedStateFromProps = function (e, t) {
    let r;
    let n;
    if (e.children == null) {
      return {
        current: null,
      };
    }
    if (t.status === ns && e.mode === c) {
      return {
        status: ns,
      };
    }
    if (
      t.current &&
      !(
        (r = t.current) === (n = e.children) ||
        (isValidElement(r) &&
          isValidElement(n) &&
          r.key != null &&
          r.key === n.key)
      ) &&
      1
    ) {
      return {
        status: ze,
      };
    }
    return {
      current: cloneElement(e.children, {
        in: true,
      }),
    };
  };
  t_prototype.render = function () {
    let e;
    const props = this.props;
    const t_children = props.children;
    const t_mode = props.mode;
    const state = this.state;
    const a_status = state.status;
    const a_current = state.current;
    const c = {
      children: t_children,
      current: a_current,
      changeState: this.changeState,
      status: a_status,
    };
    switch (a_status) {
      case ns:
        e = f[t_mode](c);
        break;
      case ze:
        e = h[t_mode](c);
        break;
      case _K:
        e = a_current;
    }
    return createElement(
      A.Provider,
      {
        value: {
          isMounting: !this.appeared,
        },
      },
      e,
    );
  };
  return t;
})(Component);
p.propTypes = {};
p.defaultProps = {
  mode,
};
export { p as A };
