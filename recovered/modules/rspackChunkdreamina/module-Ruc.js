import _r from "fyk";
import _i from "i0l";
import l from "bT";
import u from "zP7";
import c from "rJ";
const s = [
  "children",
  "type",
  "in",
  "timeout",
  "mountOnEnter",
  "unmountOnExit",
];
export function A(e) {
  const e_children = e.children;
  const n =
    e_children === undefined ? l.createElement("div", null) : e_children;
  const e_type = e.type;
  const i = e.in;
  const e_timeout = e.timeout;
  const timeout = e_timeout === undefined ? 300 : e_timeout;
  const e_mountOnEnter = e.mountOnEnter;
  const mountOnEnter = e_mountOnEnter === undefined || e_mountOnEnter;
  const e_unmountOnExit = e.unmountOnExit;
  const unmountOnExit = e_unmountOnExit === undefined || e_unmountOnExit;
  const g = _i(e, s);
  return l.createElement(c.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return l.createElement(
      u.A,
      _r(
        {
          in: i,
          timeout,
          classNames: e_prefixCls + "-" + e_type,
          mountOnEnter,
          unmountOnExit,
        },
        g,
      ),
      n,
    );
  });
}
