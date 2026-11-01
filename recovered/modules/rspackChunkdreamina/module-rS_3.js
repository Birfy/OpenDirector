import n from "kB";
import a from "M2";
import o from "dr";
import i from "O6";
import {
  Children,
  Component,
  cloneElement,
  createElement,
  isValidElement,
} from "./module-ND_2.js";
import { A } from "./module-nS.js";
function u(children, t) {
  const r = Object.create(null);
  if (children) {
    Children.map(children, function (e) {
      return e;
    }).forEach((e) => {
      r[e.key] = t && isValidElement(e) ? t(e) : e;
    });
  }
  return r;
}
function c(e, t, r) {
  if (r[t] != null) {
    return r[t];
  }
  return e.props[t];
}
const d = Object.values || ((e) => Object.keys(e).map((t) => e[t]));
const h = ((e) => {
  function t(t, r) {
    const n = e.call(this, t, r) || this;
    const handleExited = n.handleExited.bind(o.A(n));
    n.state = {
      contextValue: {
        isMounting: true,
      },
      handleExited,
      firstRender: true,
    };
    return n;
  }
  i.A(t, e);
  const t_prototype = t.prototype;
  t_prototype.componentDidMount = function () {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false,
      },
    });
  };
  t_prototype.componentWillUnmount = function () {
    this.mounted = false;
  };
  t.getDerivedStateFromProps = function (e, t) {
    let r;
    let n;
    const t_children = t.children;
    const t_handleExited = t.handleExited;
    return {
      children: t.firstRender
        ? u(e.children, function (t) {
            return cloneElement(t, {
              onExited: t_handleExited.bind(null, t),
              in: true,
              appear: c(t, "appear", e),
              enter: c(t, "enter", e),
              exit: c(t, "exit", e),
            });
          })
        : (Object.keys(
            (n = ((e, t) => {
              function r(r) {
                if (r in t) {
                  return t[r];
                }
                return e[r];
              }
              e = e || {};
              t = t || {};
              let n;
              const a = Object.create(null);
              let o = [];
              for (const i in e) {
                if (i in t) {
                  if (o.length) {
                    a[i] = o;
                    o = [];
                  }
                } else {
                  o.push(i);
                }
              }
              const l = {};
              for (const s in t) {
                if (a[s]) {
                  for (n = 0; n < a[s].length; n++) {
                    const u = a[s][n];
                    l[a[s][n]] = r(u);
                  }
                }
                l[s] = r(s);
              }
              for (n = 0; n < o.length; n++) {
                l[o[n]] = r(o[n]);
              }
              return l;
            })(t_children, (r = u(e.children)))),
          ).forEach((t) => {
            const i = n[t];
            if (isValidElement(i)) {
              const s = t in t_children;
              const u = t in r;
              const d = t_children[t];
              const h = isValidElement(d) && !d.props.in;
              if (u && (!s || h)) {
                n[t] = cloneElement(i, {
                  onExited: t_handleExited.bind(null, i),
                  in: true,
                  exit: c(i, "exit", e),
                  enter: c(i, "enter", e),
                });
              } else if (u || !s || h) {
                if (u && s && isValidElement(d)) {
                  n[t] = cloneElement(i, {
                    onExited: t_handleExited.bind(null, i),
                    in: d.props.in,
                    exit: c(i, "exit", e),
                    enter: c(i, "enter", e),
                  });
                }
              } else {
                n[t] = cloneElement(i, {
                  in: false,
                });
              }
            }
          }),
          n),
      firstRender: false,
    };
  };
  t_prototype.handleExited = function (e, t) {
    const r = u(this.props.children);
    if (!(e.key in r)) {
      if (e.props.onExited) {
        e.props.onExited(t);
      }
      if (this.mounted) {
        this.setState(function (t) {
          const children = a.A({}, t.children);
          delete children[e.key];
          return {
            children,
          };
        });
      }
    }
  };
  t_prototype.render = function () {
    const props = this.props;
    const e_component = props.component;
    const e_childFactory = props.childFactory;
    const a = n.A(props, ["component", "childFactory"]);
    const contextValue = this.state.contextValue;
    const i = d(this.state.children).map(e_childFactory);
    delete a.appear;
    delete a.enter;
    delete a.exit;
    if (e_component === null) {
      return createElement(
        A.Provider,
        {
          value: contextValue,
        },
        i,
      );
    }
    return createElement(
      A.Provider,
      {
        value: contextValue,
      },
      createElement(e_component, a, i),
    );
  };
  return t;
})(Component);
h.propTypes = {};
h.defaultProps = {
  component: "div",
  childFactory: function (e) {
    return e;
  },
};
var f = h;
export { f as A };
