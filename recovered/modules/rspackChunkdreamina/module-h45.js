import r from "oa";
import o from "bk";
import i from "qa";
import l from "z8";
import s from "bT";
import { qD } from "./module-qV.js";
import { A } from "./module-d1.js";
import { TG } from "./module-tMn.js";
let c = [];
class p extends s.Component {
  render() {
    return l.jsx(TG, {
      children: this.renderIcon,
    });
  }
  constructor(...e) {
    super(...e);
    this.renderIcon = ({ getPrefixCls }) => {
      let props = this.props;
      let { className, spin, children, type } = props;
      let d = i._(props, ["className", "spin", "children", "type"]);
      let p = r._(
        {},
        {
          width: "1em",
          height: "1em",
          fill: "currentColor",
        },
        d,
      );
      let f = getPrefixCls("icon");
      p.className = A(
        f,
        type,
        {
          [`${f}-loading`]: spin,
        },
        className,
      );
      return l.jsx(
        "svg",
        o._(r._({}, p), {
          children,
        }),
      );
    };
  }
}
p.displayName = "Icon";
p.addFromIconFontCn = function (e = {}) {
  let { src, extraProps = {} } = e;
  if (!qD && typeof src === "string" && src.length && c.indexOf(src) === -1) {
    let e = document.createElement("script");
    e.setAttribute("src", src);
    e.setAttribute("data-namespace", src);
    c.push(src);
    document.body.appendChild(e);
  }
  let u = s.forwardRef((e, t) => {
    let children_1;
    let { type, children } = e;
    let d = i._(e, ["type", "children"]);
    let pRef = s.useRef();
    s.useImperativeHandle(t, () => pRef.current);
    if (type) {
      children_1 = l.jsx("use", {
        xlinkHref: `#${type}`,
      });
    }
    if (children) {
      children_1 = children;
    }
    return l.jsx(
      f,
      o._(
        r._(
          {
            type,
          },
          d,
          extraProps,
        ),
        {
          ref: (e) => {
            pRef.current = e;
          },
          children: children_1,
        },
      ),
    );
  });
  u.displayName = "Iconfont";
  return u;
};
var f = p;
export { f as A };
