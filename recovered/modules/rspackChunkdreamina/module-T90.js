import r from "oa";
import n from "bk";
import i from "z8";
import "yS";
import o from "gL";
import s from "pr";
import c from "Qey";
import l from "yw";
import * as d from "./module-b5V.js";
import { A as A_1 } from "./module-V5t.js";
function p(e) {
  let t;
  const {
    title,
    content,
    confirmText = c.Ay.t("web_common_popup_btn_confirm", {}, "确认"),
    cancelText = c.Ay.t("web_new_profile_edit_cancel", {}, "取消"),
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
  const P = () => {
    if (
      (shouldCloseOnCancel == null ? undefined : shouldCloseOnCancel()) !==
      false
    ) {
      if (onClickCancel != null) {
        onClickCancel();
      }
      if (t != null) {
        t.close();
      }
      t = undefined;
    }
  };
  return (t = o.A.confirm(
    n._(
      r._(
        n._(
          r._(
            n._(
              r._(
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
        closeIcon: i.jsx(l.gzW, {
          role: "button",
          tabIndex: 0,
          "aria-label": c.Ay.t("dreamina_web_common_close"),
          onKeyDown: s.q,
        }),
        title,
        content,
        onCancel: P,
        footer: i.jsx(d.j, {
          onClickConfirm,
          onClickCancel: P,
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
export { p as d };
