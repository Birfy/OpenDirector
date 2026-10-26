import n from "kB";
import a from "O6";
import {
  Children,
  Component,
  cloneElement,
  createElement,
} from "./module-ND_2.js";
import i from "PC";
import { A } from "./module-nS.js";
import { F } from "./module-uP_3.js";
const u = "unmounted";
const c = "exited";
export var ns = "entering";
export var _K = "entered";
export var ze = "exiting";
export const Ay = ((e) => {
  function t(t, r) {
    let n;
    const a = e.call(this, t, r) || this;
    const o = r && !r.isMounting ? t.enter : t.appear;
    a.appearStatus = null;
    if (t.in) {
      if (o) {
        n = c;
        a.appearStatus = ns;
      } else {
        n = _K;
      }
    } else {
      n = t.unmountOnExit || t.mountOnEnter ? u : c;
    }
    a.state = {
      status: n,
    };
    a.nextCallback = null;
    return a;
  }
  a.A(t, e);
  t.getDerivedStateFromProps = function (e, t) {
    if (e.in && t.status === u) {
      return {
        status: c,
      };
    }
    return null;
  };
  const t_prototype = t.prototype;
  t_prototype.componentDidMount = function () {
    this.updateStatus(true, this.appearStatus);
  };
  t_prototype.componentDidUpdate = function (e) {
    let t = null;
    if (e !== this.props) {
      const r = this.state.status;
      if (this.props.in) {
        if (r !== ns && r !== _K) {
          t = ns;
        }
      } else if (r === ns || r === _K) {
        t = ze;
      }
    }
    this.updateStatus(false, t);
  };
  t_prototype.componentWillUnmount = function () {
    this.cancelNextCallback();
  };
  t_prototype.getTimeouts = function () {
    let exit;
    let enter;
    let appear;
    const timeout = this.props.timeout;
    appear = timeout;
    enter = timeout;
    exit = timeout;
    if (timeout != null && typeof timeout !== "number") {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }
    return {
      exit,
      enter,
      appear,
    };
  };
  t_prototype.updateStatus = function (e = false, t) {
    if (t !== null) {
      this.cancelNextCallback();
      if (t === ns) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          const r = this.props.nodeRef
            ? this.props.nodeRef.current
            : i.findDOMNode(this);
          if (r) {
            F(r);
          }
        }
        this.performEnter(e);
      } else {
        this.performExit();
      }
    } else {
      if (this.props.unmountOnExit && this.state.status === c) {
        this.setState({
          status: u,
        });
      }
    }
  };
  t_prototype.performEnter = function (e) {
    const t = this;
    const enter = this.props.enter;
    const n = this.context ? this.context.isMounting : e;
    const a = this.props.nodeRef ? [n] : [i.findDOMNode(this), n];
    const o = a[0];
    const l = a[1];
    const s = this.getTimeouts();
    const u = n ? s.appear : s.enter;
    if ((e || enter) && 1) {
      this.props.onEnter(o, l);
      this.safeSetState(
        {
          status: ns,
        },
        function () {
          t.props.onEntering(o, l);
          t.onTransitionEnd(u, function () {
            t.safeSetState(
              {
                status: _K,
              },
              function () {
                t.props.onEntered(o, l);
              },
            );
          });
        },
      );
    } else {
      this.safeSetState(
        {
          status: _K,
        },
        function () {
          t.props.onEntered(o);
        },
      );
    }
  };
  t_prototype.performExit = function () {
    const e = this;
    const exit = this.props.exit;
    const r = this.getTimeouts();
    const n = this.props.nodeRef ? undefined : i.findDOMNode(this);
    if (exit) {
      this.props.onExit(n);
      this.safeSetState(
        {
          status: ze,
        },
        function () {
          e.props.onExiting(n);
          e.onTransitionEnd(r.exit, function () {
            e.safeSetState(
              {
                status: c,
              },
              function () {
                e.props.onExited(n);
              },
            );
          });
        },
      );
    } else {
      this.safeSetState(
        {
          status: c,
        },
        function () {
          e.props.onExited(n);
        },
      );
    }
  };
  t_prototype.cancelNextCallback = function () {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  t_prototype.safeSetState = function (e, t) {
    t = this.setNextCallback(t);
    this.setState(e, t);
  };
  t_prototype.setNextCallback = function (e) {
    const t = this;
    let r = true;
    this.nextCallback = function (n) {
      if (r) {
        r = false;
        t.nextCallback = null;
        e(n);
      }
    };
    this.nextCallback.cancel = function () {
      r = false;
    };
    return this.nextCallback;
  };
  t_prototype.onTransitionEnd = function (e, t) {
    this.setNextCallback(t);
    const r = this.props.nodeRef
      ? this.props.nodeRef.current
      : i.findDOMNode(this);
    const n = e == null && !this.props.addEndListener;
    if (!r || n) {
      return void setTimeout(this.nextCallback, 0);
    }
    if (this.props.addEndListener) {
      const a = this.props.nodeRef
        ? [this.nextCallback]
        : [r, this.nextCallback];
      const o = a[0];
      const l = a[1];
      this.props.addEndListener(o, l);
    }
    if (e != null) {
      setTimeout(this.nextCallback, e);
    }
  };
  t_prototype.render = function () {
    const status = this.state.status;
    if (status === u) {
      return null;
    }
    const props = this.props;
    const t_children = props.children;
    props.in;
    props.mountOnEnter;
    props.unmountOnExit;
    props.appear;
    props.enter;
    props.exit;
    props.timeout;
    props.addEndListener;
    props.onEnter;
    props.onEntering;
    props.onEntered;
    props.onExit;
    props.onExiting;
    props.onExited;
    props.nodeRef;
    const a = n.A(props, [
      "children",
      "in",
      "mountOnEnter",
      "unmountOnExit",
      "appear",
      "enter",
      "exit",
      "timeout",
      "addEndListener",
      "onEnter",
      "onEntering",
      "onEntered",
      "onExit",
      "onExiting",
      "onExited",
      "nodeRef",
    ]);
    return createElement(
      A.Provider,
      {
        value: null,
      },
      typeof t_children === "function"
        ? t_children(status, a)
        : cloneElement(Children.only(t_children), a),
    );
  };
  return t;
})(Component);
function v() {}
Ay.contextType = A;
Ay.propTypes = {};
Ay.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: v,
  onEntering: v,
  onEntered: v,
  onExit: v,
  onExiting: v,
  onExited: v,
};
Ay.UNMOUNTED = u;
Ay.EXITED = c;
Ay.ENTERING = ns;
Ay.ENTERED = _K;
Ay.EXITING = ze;
