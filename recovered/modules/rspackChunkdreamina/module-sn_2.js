import n from "z8";
import r from "bT";
import _a from "xb";
import s from "Qey";
import l from "yw";
import { j } from "./module-OzP.js";
import u from "IDu";
export var x = r.memo(function (e) {
  const { getPopupContainer } = e;
  const { handleLocalUpload, handleAssetAdd } = j();
  const onMouseDown = r.useCallback((e) => {
    e.preventDefault();
  }, []);
  return n.jsx(u.S, {
    onLocalUpload: handleLocalUpload,
    onAssetAdd: handleAssetAdd,
    localAccept: undefined,
    position: "right",
    getPopupContainer,
    triggerProps: {
      popupAlign: {
        right: 8,
      },
    },
    children: n.jsx("div", {
      className: _a("creator-button-R2vhly", "lv-select-option"),
      role: "button",
      onMouseDown,
      children: n.jsxs("div", {
        className: "creator-button-content-ekQf5w",
        children: [
          n.jsx("div", {
            className: "icon-N47Pu6",
            children: n.jsx(l.xZp, {
              size: 20,
            }),
          }),
          n.jsx("span", {
            className: "label-ZiGGdo",
            children: s.F2.t("subject_panel_create_btn", {}, "创建主体"),
          }),
        ],
      }),
    }),
  });
});
