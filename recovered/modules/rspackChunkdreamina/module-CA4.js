import t from "z8";
import "qrE";
import n from "RH";
import i from "zS";
import r from "bT";
import o from "sjN";
import { u as u_1, w } from "./module-Vb7.js";
import s from "pE";
import d from "j7B";
export var y = (e) => {
  var { currentScale } = e;
  var handleScaleUp = i.A(() => {
    u_1.scale = Math.min(Math.abs(2 * u_1.scale), s.Cm);
    return u_1.scale;
  });
  var handleScaleDown = i.A(() => {
    u_1.scale = Math.max(Math.abs(u_1.scale / 2), s.WN);
    return u_1.scale;
  });
  var { scaleArr } = d.k();
  var getScaleName = i.A((e) => {
    var u = Math.round(100 * e);
    return "".concat(Math.abs(u), "%");
  });
  var [v, setV] = r.useState(false);
  var dropdownStyle = r.useMemo(() => {
    if (v) {
      return {
        display: "block",
      };
    }
    return {
      display: "none",
    };
  }, [v]);
  var handleDropdownVisibleChange = i.A((e) => {
    setV(e);
  });
  var ERef = r.useRef(null);
  var f = i.A((u) => {
    var a;
    var t;
    var { value, resetOffset } = u;
    if (resetOffset) {
      u_1.resetOffset();
      w.resetMove();
    }
    if ((a = e.handleSelectScaleCallback) != null) {
      a.call(e, value);
    }
    setTimeout(() => {
      u_1.scale = value;
    });
    handleDropdownVisibleChange(false);
    if ((t = ERef.current) != null) {
      t.close();
    }
  });
  return {
    dropdownVisible: v,
    handleScaleUp,
    handleScaleDown,
    getScaleName,
    menu: t.jsx(n.A, {
      className: o.A.menu,
      selectedKeys: ["".concat(currentScale)],
      children: scaleArr.map((e) =>
        t.jsx(
          n.A.Item,
          {
            className: o.A.menuItem,
            onClick: () => f(e),
            children: e.name,
          },
          "".concat(e.value),
        ),
      ),
    }),
    dropdownStyle,
    dropdownRef: ERef,
    handleDropdownVisibleChange,
  };
};
