import a from "oa";
import t from "bk";
import i from "z8";
import "yS";
import o from "gL";
import r from "pr";
import s from "Qey";
import c from "yw";
import * as d from "./module-b5V_2.js";
import { A as A_1 } from "./module-V5t_2.js";
function m(e) {
  let l;
  const {
    title,
    content,
    confirmText = s.Ay.t("web_common_popup_btn_confirm", {}, "确认"),
    cancelText = s.Ay.t("web_new_profile_edit_cancel", {}, "取消"),
    confirmButtonType = "primary",
    confirmButtonStatus,
    confirmLoading,
    onClickConfirm,
    onClickCancel,
    shouldCloseOnCancel,
    maskClosable = false,
    closable = true,
    className,
    style,
    wrapClassName,
    wrapStyle,
    maskStyle,
    getPopupContainer,
    escToExit,
    backspaceToExit,
    autoFocus,
    afterClose,
  } = e;
  const E = () => {
    if (
      (shouldCloseOnCancel == null ? undefined : shouldCloseOnCancel()) !==
      false
    ) {
      if (onClickCancel != null) {
        onClickCancel();
      }
      if (l != null) {
        l.close();
      }
      l = undefined;
    }
  };
  return (l = o.A.confirm(
    t._(
      a._(
        t._(
          a._(
            t._(
              a._(
                {},
                className === undefined
                  ? {}
                  : {
                      className,
                    },
                style === undefined
                  ? {}
                  : {
                      style,
                    },
              ),
              {
                wrapClassName: wrapClassName || A_1.deleteConfirmModal,
              },
            ),
            wrapStyle === undefined
              ? {}
              : {
                  wrapStyle,
                },
            maskStyle === undefined
              ? {}
              : {
                  maskStyle,
                },
            getPopupContainer === undefined
              ? {}
              : {
                  getPopupContainer,
                },
          ),
          {
            simple: false,
            icon: null,
            closable,
            maskClosable,
          },
        ),
        escToExit === undefined
          ? {}
          : {
              escToExit,
            },
        backspaceToExit === undefined
          ? {}
          : {
              backspaceToExit,
            },
        autoFocus === undefined
          ? {}
          : {
              autoFocus,
            },
        afterClose === undefined
          ? {}
          : {
              afterClose,
            },
      ),
      {
        closeIcon: i.jsx(c.gzW, {
          role: "button",
          tabIndex: 0,
          "aria-label": s.Ay.t("dreamina_web_common_close"),
          onKeyDown: r.q,
        }),
        title,
        content,
        onCancel: E,
        footer: i.jsx(d.j, {
          onClickConfirm,
          onClickCancel: E,
          confirmText,
          cancelText,
          confirmButtonType,
          confirmButtonStatus,
          confirmLoading,
        }),
      },
    ),
  ));
}
export { m as d };
