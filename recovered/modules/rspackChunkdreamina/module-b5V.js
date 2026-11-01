import r from "NY";
import n from "z8";
import i from "bT";
import o from "pr";
import s from "SU";
import { A } from "./module-V5t.js";
export var j = i.memo(function (e) {
  const {
    onClickConfirm,
    onClickCancel,
    confirmText,
    cancelText,
    confirmButtonType = "primary",
    confirmButtonStatus,
    confirmLoading,
  } = e;
  const [h, setH] = i.useState(false);
  const loading = confirmLoading !== undefined ? confirmLoading : h;
  const onClick = i.useCallback(
    () =>
      r._(function* () {
        if (!loading) {
          const e = confirmLoading === undefined;
          if (e) {
            setH(true);
          }
          try {
            yield onClickConfirm();
          } finally {
            if (e) {
              setH(false);
            }
          }
        }
      })(),
    [loading, confirmLoading, onClickConfirm],
  );
  return n.jsxs("div", {
    className: A.buttonContainer,
    children: [
      n.jsx("div", {
        role: "button",
        tabIndex: 0,
        onKeyDown: o.q,
        className: A.cancelButton,
        onClick: onClickCancel,
        children: cancelText,
      }),
      n.jsx(s.K, {
        className: A.deleteButton,
        type: confirmButtonType,
        status: confirmButtonStatus,
        loading,
        onClick,
        children: confirmText,
      }),
    ],
  });
});
