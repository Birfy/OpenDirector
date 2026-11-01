import a from "z8";
import "Vx";
import t from "Ix";
import i from "bT";
import _o from "xb";
import { A } from "./module-ELg_2.js";
export function y(e) {
  const { actions, leadingAction } = e;
  const onMouseDown = i.useCallback((e) => {
    e.preventDefault();
  }, []);
  const onKeyDown = i.useCallback((e) => {
    if (e.code === "Enter" || e.code === "Space") {
      e.preventDefault();
      e.currentTarget.click();
    }
  }, []);
  if (actions.length !== 0 || leadingAction) {
    return a.jsxs("div", {
      className: _o(A.dropdownFooter, "skill-select-dropdown-footer"),
      children: [
        a.jsx("div", {
          className: A.dropdownDivider,
        }),
        a.jsxs("div", {
          className: A.dropdownActions,
          children: [
            leadingAction,
            actions.map((e) =>
              a.jsx(
                "div",
                {
                  className: _o(A.dropdownAction, "lv-select-option"),
                  role: "button",
                  tabIndex: 0,
                  onClick: e.onClick,
                  onMouseDown,
                  onKeyDown,
                  children: a.jsx(t.A, {
                    content: e.label,
                    checkOverflow: true,
                    children: a.jsx("span", {
                      className: A.dropdownActionLabel,
                      children: a.jsxs("span", {
                        className: A.dropdownActionLabelContent,
                        children: [
                          a.jsx("span", {
                            className: A.dropdownActionIcon,
                            children: e.icon,
                          }),
                          a.jsx("span", {
                            className: A.dropdownActionLabelText,
                            children: e.label,
                          }),
                        ],
                      }),
                    }),
                  }),
                },
                e.key,
              ),
            ),
          ],
        }),
      ],
    });
  }
  return null;
}
