import n from "M2";
import a from "kB";
import o from "O6";
import i from "gIT";
import l from "HQL";
import { Component, createElement } from "./module-ND_2.js";
import { Ay } from "./module-rU_6.js";
import { F } from "./module-uP_3.js";
const d = (e, t) => e && t && t.split(" ").forEach((t) => l.A(e, t));
export var A = ((e) => {
  function t() {
    let t;
    for (var r = arguments.length, n = Array(r), a = 0; a < r; a++) {
      n[a] = arguments[a];
    }
    t = e.call.apply(e, [this].concat(n)) || this;
    t.appliedClasses = {
      appear: {},
      enter: {},
      exit: {},
    };
    t.onEnter = function (e, r) {
      const n = t.resolveArguments(e, r);
      const a = n[0];
      const o = n[1];
      t.removeClasses(a, "exit");
      t.addClass(a, o ? "appear" : "enter", "base");
      if (t.props.onEnter) {
        t.props.onEnter(e, r);
      }
    };
    t.onEntering = function (e, r) {
      const n = t.resolveArguments(e, r);
      const a = n[0];
      const o = n[1];
      t.addClass(a, o ? "appear" : "enter", "active");
      if (t.props.onEntering) {
        t.props.onEntering(e, r);
      }
    };
    t.onEntered = function (e, r) {
      const n = t.resolveArguments(e, r);
      const a = n[0];
      const o = n[1] ? "appear" : "enter";
      t.removeClasses(a, o);
      t.addClass(a, o, "done");
      if (t.props.onEntered) {
        t.props.onEntered(e, r);
      }
    };
    t.onExit = function (e) {
      const r = t.resolveArguments(e)[0];
      t.removeClasses(r, "appear");
      t.removeClasses(r, "enter");
      t.addClass(r, "exit", "base");
      if (t.props.onExit) {
        t.props.onExit(e);
      }
    };
    t.onExiting = function (e) {
      const r = t.resolveArguments(e)[0];
      t.addClass(r, "exit", "active");
      if (t.props.onExiting) {
        t.props.onExiting(e);
      }
    };
    t.onExited = function (e) {
      const r = t.resolveArguments(e)[0];
      t.removeClasses(r, "exit");
      t.addClass(r, "exit", "done");
      if (t.props.onExited) {
        t.props.onExited(e);
      }
    };
    t.resolveArguments = function (e, r) {
      if (t.props.nodeRef) {
        return [t.props.nodeRef.current, e];
      }
      return [e, r];
    };
    t.getClassNames = function (e) {
      const classNames = t.props.classNames;
      const n = typeof classNames === "string";
      const a = n && classNames ? classNames + "-" : "";
      const baseClassName = n ? "" + a + e : classNames[e];
      const activeClassName = n
        ? baseClassName + "-active"
        : classNames[e + "Active"];
      const doneClassName = n
        ? baseClassName + "-done"
        : classNames[e + "Done"];
      return {
        baseClassName,
        activeClassName,
        doneClassName,
      };
    };
    return t;
  }
  o.A(t, e);
  const t_prototype = t.prototype;
  t_prototype.addClass = function (e, t, r) {
    let n;
    let a = this.getClassNames(t)[r + "ClassName"];
    const doneClassName = this.getClassNames("enter").doneClassName;
    if (t === "appear" && r === "done" && doneClassName) {
      a += " " + doneClassName;
    }
    if (r === "active" && e) {
      F(e);
    }
    if (a) {
      this.appliedClasses[t][r] = a;
      n = a;
      if (e && n) {
        n.split(" ").forEach((t) => i.A(e, t));
      }
    }
  };
  t_prototype.removeClasses = function (e, t) {
    const r = this.appliedClasses[t];
    const r_base = r.base;
    const r_active = r.active;
    const r_done = r.done;
    this.appliedClasses[t] = {};
    if (r_base) {
      d(e, r_base);
    }
    if (r_active) {
      d(e, r_active);
    }
    if (r_done) {
      d(e, r_done);
    }
  };
  t_prototype.render = function () {
    const props = this.props;
    props.classNames;
    const t = a.A(props, ["classNames"]);
    return createElement(
      Ay,
      n.A({}, t, {
        onEnter: this.onEnter,
        onEntered: this.onEntered,
        onEntering: this.onEntering,
        onExit: this.onExit,
        onExiting: this.onExiting,
        onExited: this.onExited,
      }),
    );
  };
  return t;
})(Component);
A.defaultProps = {
  classNames: "",
};
A.propTypes = {};
