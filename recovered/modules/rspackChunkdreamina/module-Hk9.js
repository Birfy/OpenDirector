import n from "oa";
import i from "bk";
import a from "qa";
import s from "z8";
import "HZH";
import o from "I7V";
import _c from "xb";
export var I = (e) => {
  var { className, children, triggerProps } = e;
  var d = a._(e, ["className", "children", "triggerProps"]);
  return s.jsx(
    o.A,
    i._(
      n._(
        {
          className: _c(className, "infoTooltip-rXHQPi"),
          showArrow: true,
          triggerProps: n._(
            {
              popupAlign: {
                bottom: 4,
              },
            },
            triggerProps,
          ),
        },
        d,
      ),
      {
        children,
      },
    ),
  );
};
