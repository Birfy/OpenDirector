import n from "oa";
import i from "bk";
import a from "qa";
import s from "z8";
import "HZH";
import o from "I7V";
export var D = (e) => {
  var { children, color, className, triggerProps } = e;
  var d = a._(e, ["children", "color", "className", "triggerProps"]);
  return s.jsx(
    o.A,
    i._(
      n._(
        {
          color,
          className,
          triggerProps: n._(
            {
              popupAlign: {
                top: 9,
                left: 9,
                right: 9,
                bottom: 9,
              },
              mouseLeaveToClose: true,
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
