import a from "NY";
import t from "z8";
import i from "bT";
import o from "pr";
import r from "SU";
import { A } from "./module-V5t_2.js";
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
  const [v, setV] = i.useState(false);
  const loading = confirmLoading !== undefined ? confirmLoading : v;
  const onClick = i.useCallback(
    () =>
      a._(function* () {
        if (!loading) {
          const e = confirmLoading === undefined;
          if (e) {
            setV(true);
          }
          try {
            yield onClickConfirm();
          } finally {
            if (e) {
              setV(false);
            }
          }
        }
      })(),
    [loading, confirmLoading, onClickConfirm],
  );
  return t.jsxs("div", {
    className: A.buttonContainer,
    children: [
      t.jsx("div", {
        role: "button",
        tabIndex: 0,
        onKeyDown: o.q,
        className: A.cancelButton,
        onClick: onClickCancel,
        children: cancelText,
      }),
      t.jsx(r.K, {
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
