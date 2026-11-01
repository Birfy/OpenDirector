import n from "z8";
import "Vx";
import "wy";
import "qrE";
import "Su";
import t from "Ix";
import o from "h7y";
import r from "RH";
import s from "MzS";
import l from "bT";
import _c from "xb";
const m = "item-mIcy0t";
const p = "compact-item-Zkieug";
const u = "disabled-R3btE4";
const className = "item-content-or5W6V";
export function g(e) {
  const { data, children, position = "br", variant = "default" } = e;
  const [x, setX] = l.useState(false);
  const b = variant === "compact";
  const droplist = n.jsx(r.A, {
    className: _c("menu-ZccKbb", b && "compact-menu-OzXODC"),
    onClick: (e) => e.stopPropagation(),
    children: data.items.map((e) => {
      if (e.kind === "separator") {
        return n.jsx(
          "div",
          {
            className: _c("separator-A_q3Ax", b && "compact-separator-DbMPdS"),
            role: "separator",
          },
          e.key,
        );
      }
      if (e.kind === "placeholder") {
        return n.jsx(
          r.A.Item,
          {
            className: _c(m, b && p, u),
            disabled: true,
            "aria-disabled": "true",
            children: n.jsxs("span", {
              className,
              children: [
                e.icon,
                n.jsx("span", {
                  children: e.label,
                }),
              ],
            }),
          },
          e.key,
        );
      }
      var children_1 = n.jsxs("span", {
        className: _c(
          className,
          e.kind === "switch" && "switch-item-content-SiVYSZ",
        ),
        children: [
          e.icon,
          e.kind === "switch"
            ? n.jsx(t.A, {
                content: e.label,
                checkOverflow: true,
                position: "top",
                children: n.jsx("span", {
                  className: "switch-label-Fhclu7",
                  children: e.label,
                }),
              })
            : n.jsx("span", {
                children: e.label,
              }),
        ],
      });
      var content = e.kind === "action" ? e.tooltip : undefined;
      return n.jsxs(
        r.A.Item,
        {
          className: _c(
            m,
            b && p,
            e.kind === "action" && e.danger && "danger-VbDPY2",
            e.disabled && u,
            content && "tooltip-item-bkO2cn",
          ),
          disabled: e.disabled,
          onClick: (i) => {
            i.stopPropagation();
            if (!e.disabled) {
              if (e.kind === "switch") {
                e.onToggle(!e.checked);
              } else {
                e.onSelect();
              }
              setX(false);
            }
          },
          children: [
            content
              ? n.jsx(t.A, {
                  content,
                  position: "top",
                  children: n.jsx("span", {
                    className: "tooltip-trigger-LoODy5",
                    children: children_1,
                  }),
                })
              : children_1,
            e.kind === "switch"
              ? n.jsx("span", {
                  className: "switch-control-oXZKJ6",
                  children: n.jsx(o.A, {
                    size: "small",
                    checked: e.checked,
                    disabled: e.disabled,
                  }),
                })
              : null,
          ],
        },
        e.key,
      );
    }),
  });
  return n.jsx(s.A, {
    position,
    trigger: "click",
    droplist,
    popupVisible: x,
    onVisibleChange: setX,
    children: l.cloneElement(children, {
      "aria-expanded": x,
      "aria-haspopup": "menu",
    }),
  });
}
