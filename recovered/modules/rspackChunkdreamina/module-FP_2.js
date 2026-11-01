import a from "bT";
import o from "GLW";
import { Az, fH } from "./module-Or_4.js";
import { dR, qg, u6 } from "./module-vCu_2.js";
import c from "vpF";
import u from "F0";
import { r as r_1 } from "./module-vf_2_2.js";
import { k as k_1 } from "./module-Psb.js";
import S from "wpb";
import "z8";
Object.defineProperty(exports, "My", {
  enumerable: true,
  get: () => eV.M,
});
Object.defineProperty(exports, "gx", {
  enumerable: true,
  get: () => eV.g,
});
function l(e, t = 0, r = true) {
  let a = c.unix(e).add(t, "day");
  if (r) {
    return a.format("YYYY年MM月DD日 HH:mm");
  }
  return a.format("YYYY年MM月DD日");
}
function m(e, t = 0) {
  return c.unix(e).format("YYYY-MM-DD HH:mm");
}
let s = ({ onContactSupport }) =>
  a.createElement(
    "div",
    {
      className: "contact-info",
    },
    a.createElement(
      "span",
      {
        className: "contact-text",
      },
      "如有问题，请联系",
    ),
    a.createElement(
      "span",
      {
        className: "contact-link",
        onClick: () => {
          onContactSupport?.();
        },
      },
      "官方客服",
    ),
  );
let d = ({ config = {}, onBack, onRuleClick, className = "", style }) => {
  let {
    title = "会员售后服务",
    rulesText = "退款规则",
    showBack = true,
    showRules = true,
    backText = "",
    backIcon,
    customBackIcon,
  } = config;
  return a.createElement(
    "div",
    {
      className: `refund-header ${className}`,
      style,
    },
    a.createElement(
      "div",
      {
        className: "refund-header__content",
      },
      a.createElement(
        "div",
        {
          className: "refund-header__pre",
        },
        showBack &&
          a.createElement(
            "button",
            {
              className: "refund-header__back",
              onClick: () => {
                onBack?.();
              },
              type: "button",
            },
            customBackIcon ||
              backIcon ||
              a.createElement(
                "svg",
                {
                  width: "10",
                  height: "18",
                  viewBox: "0 0 10 18",
                  fill: "none",
                },
                a.createElement("path", {
                  d: "M9 1L1 9L9 17",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                }),
              ),
            backText &&
              a.createElement(
                "span",
                {
                  className: "refund-header__back-text",
                },
                backText,
              ),
          ),
      ),
      a.createElement(
        "div",
        {
          className: "refund-header__title",
        },
        a.createElement("h1", null, title),
      ),
      a.createElement(
        "div",
        {
          className: "refund-header__after",
        },
        showRules &&
          a.createElement(
            "button",
            {
              className: "refund-header__rules",
              onClick: () => {
                onRuleClick?.();
              },
              type: "button",
            },
            rulesText,
          ),
      ),
    ),
  );
};
d.displayName = "RefundHeader";
let C = {
  update: () => undefined,
  close: () => undefined,
  hide: () => undefined,
};
let v = (content) => {
  if (typeof content === "string") {
    return {
      content,
    };
  }
  return content;
};
let _ = (e) => {
  let t;
  if (typeof document === "undefined") {
    return C;
  }
  let r = v(e);
  let a = document.createElement("div");
  let o = document.createElement("div");
  a.className = "commerce-sdk-toast";
  a.setAttribute("role", "status");
  a.setAttribute("aria-live", "polite");
  o.className = "commerce-sdk-toast__content";
  o.textContent = r.content;
  a.appendChild(o);
  document.body.appendChild(a);
  let i = false;
  let n = () => {
    if (!i) {
      i = true;
      if (t !== undefined) {
        window.clearTimeout(t);
      }
      a.classList.remove("commerce-sdk-toast--visible");
      window.setTimeout(() => a.remove(), 300);
    }
  };
  let c = () => {
    if (i) {
      return;
    }
    a.classList.add("commerce-sdk-toast--visible");
    let e = r.duration ?? 3000;
    if (e > 0) {
      t = window.setTimeout(n, e);
    }
  };
  if (typeof window.requestAnimationFrame === "function") {
    window.requestAnimationFrame(c);
  } else {
    window.setTimeout(c, 16);
  }
  return {
    update: (e) => {
      if (!i) {
        o.textContent = v(e).content;
      }
    },
    close: n,
    hide: n,
  };
};
let HComponent = (e) => {
  let {
    value,
    onChange,
    errorMsg,
    onClickField,
    onSelectFile,
    uploadFileEventName,
  } = e;
  let [l, setL] = a.useState([]);
  let s = u.A(() => {
    onClickField?.();
    onSelectFile?.({
      fileType: "image",
      maxSelectNum: 9 - l.length,
    });
  });
  let d = (e) => {
    let t = [...l];
    e.forEach((e) => {
      let r = t.findIndex((t) => t.fileKey === e.fileKey);
      if (r >= 0) {
        t[r] = {
          ...t[r],
          ...e,
        };
      } else {
        t.push(e);
      }
    });
    setL(t);
    onChange(
      "remarkUrlList",
      t.map((e) => e.uri || ""),
    );
  };
  let C = u.A((e) => {
    if (e?.detail?.type !== k_1) {
      return;
    }
    let t = e?.detail?.payload?.data || e?.detail?.payload;
    if (t.action === "select") {
      d(
        (t?.params?.selectParam?.fileInfo ?? []).map((e) => ({
          fileKey: e.fileKey,
          loading: true,
        })),
      );
    }
    if (t.action === "base64Encode") {
      let { fileKey, base64 } = t?.params?.uploadParam ?? {};
      if (base64) {
        let t = r_1(base64, fileKey || "file_preview");
        let a = URL.createObjectURL(t);
        let o = l.find((t) => t.fileKey === fileKey);
        if (o) {
          o.previewUrl = a;
          o.loading = true;
          d([o]);
        }
      }
    }
    if (t.action === "complete") {
      let { fileKey, uri } = t?.params?.uploadParam ?? {};
      if (uri) {
        let t = l.find((t) => t.fileKey === fileKey);
        if (t) {
          t.uri = uri;
          t.loading = false;
          d([t]);
        }
      }
    }
    if (t.action === "error") {
      _({
        content: "文件上传失败",
      });
      let { fileKey } = t?.params?.uploadParam ?? {};
      setL((t) => t.filter((t) => t.fileKey !== fileKey));
    }
  });
  a.useEffect(() => {
    if (uploadFileEventName) {
      window.addEventListener(uploadFileEventName, C);
    }
    return () => {
      if (uploadFileEventName) {
        window.removeEventListener(uploadFileEventName, C);
      }
    };
  }, [uploadFileEventName, C]);
  let v = (fileKey) => {
    let t = l.find((t) => t.fileKey === fileKey);
    if (t?.previewUrl) {
      URL.revokeObjectURL(t.previewUrl);
    }
    let a = l.filter((t) => t.fileKey !== fileKey);
    setL(a);
    onChange(
      "remarkUrlList",
      a.map((e) => e.uri || ""),
    );
  };
  return a.createElement(
    "div",
    {
      className: "form-section image-upload-field",
    },
    a.createElement(
      "div",
      {
        className: "form-label",
      },
      a.createElement(
        "span",
        {
          className: "label-text",
        },
        `\u{4E0A}\u{4F20}\u{56FE}\u{7247}\u{FF08}${l.length}/9\u{FF09}`,
      ),
    ),
    a.createElement(
      "div",
      {
        className: `image-upload-grid${l.length > 2 ? " scroll" : ""}`,
      },
      l.map((e, t) =>
        a.createElement(
          "div",
          {
            key: e.fileKey,
            className: "image-preview-wrapper",
          },
          e.loading &&
            a.createElement(
              "div",
              {
                className: "loading-spinner",
              },
              a.createElement("div", {
                className: "css-loading-arc",
              }),
            ),
          a.createElement("img", {
            src: e.previewUrl,
            alt: `${t + 1}`,
            className: "image-preview",
          }),
          a.createElement(
            "button",
            {
              type: "button",
              className: "remove-image-btn",
              onClick: () => v(e.fileKey),
            },
            a.createElement("div", {
              className: "remove-image-btn-inner",
            }),
          ),
          a.createElement(
            "div",
            {
              className: "remove-image-btn-2",
              onClick: () => v(e.fileKey),
            },
            a.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
              },
              a.createElement("circle", {
                opacity: "0.5",
                cx: "12",
                cy: "12",
                r: "8",
                fill: "#171816",
              }),
              a.createElement("path", {
                d: "M14.6465 8.64648C14.8417 8.45122 15.1583 8.45122 15.3535 8.64648C15.5488 8.84175 15.5488 9.15825 15.3535 9.35352L12.707 12L15.3535 14.6465C15.5488 14.8417 15.5488 15.1583 15.3535 15.3535C15.1583 15.5488 14.8417 15.5488 14.6465 15.3535L12 12.707L9.35352 15.3535C9.15825 15.5488 8.84175 15.5488 8.64648 15.3535C8.45122 15.1583 8.45122 14.8417 8.64648 14.6465L11.293 12L8.64648 9.35352C8.45122 9.15825 8.45122 8.84175 8.64648 8.64648C8.84175 8.45122 9.15825 8.45122 9.35352 8.64648L12 11.293L14.6465 8.64648Z",
                fill: "white",
              }),
            ),
          ),
        ),
      ),
      l.length < 9 &&
        a.createElement(
          "label",
          {
            className: "upload-trigger",
            onClick: s,
          },
          a.createElement(
            "div",
            {
              className: "upload-icon",
            },
            a.createElement(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
              },
              a.createElement("path", {
                d: "M12 5V19M5 12H19",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
              }),
            ),
          ),
        ),
    ),
  );
};
let g = (e) => {
  let { visible, className, onClose, children, direction = "bottom" } = e;
  return a.createElement(
    S.zD,
    {
      className: `base-popup ${className}`,
      visible,
      close: onClose,
      direction,
    },
    a.createElement(
      "div",
      {
        className: "base-popup-content",
      },
      a.createElement(
        "div",
        {
          className: "drag-handle",
        },
        a.createElement("div", {
          className: "drag-bar",
        }),
      ),
      children,
    ),
  );
};
let y = a.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
  },
  a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 0C4.02943 0 0 4.02943 0 9C0 13.9706 4.02943 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02943 13.9706 0 9 0ZM11.7086 11.7005C12.0146 11.3954 12.0146 10.9004 11.7086 10.5944L10.1066 8.99241L11.7086 7.38951C12.0146 7.08441 12.0146 6.58041 11.7086 6.27441C11.4026 5.96751 10.9076 5.96751 10.5926 6.27441L8.99965 7.87551L7.39765 6.27441C7.08265 5.96751 6.58765 5.96751 6.28165 6.27441C5.97565 6.58041 5.97565 7.08441 6.28165 7.38951L7.88365 8.99241L6.28165 10.5854C5.97565 10.9004 5.97565 11.3954 6.28165 11.7005C6.43465 11.8535 6.64165 11.9354 6.83965 11.9354C7.04665 11.9354 7.24465 11.8535 7.39765 11.7005L8.99965 10.1084L10.6016 11.7005C10.7546 11.8634 10.9526 11.9354 11.1506 11.9354C11.3576 11.9354 11.5556 11.8535 11.7086 11.7005Z",
    fill: "#FF3355",
  }),
);
let w = a.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
  },
  a.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M19.6007 5.60107C19.9326 5.26912 19.9326 4.73093 19.6007 4.39899C19.2688 4.06704 18.7306 4.06704 18.3986 4.39898L11.9996 10.7979L5.60104 4.39932C5.26909 4.06737 4.7309 4.06737 4.39895 4.39932C4.06701 4.73126 4.06701 5.26945 4.39895 5.6014L10.7975 12L4.39886 18.3986C4.06692 18.7305 4.06691 19.2687 4.39886 19.6007C4.7308 19.9326 5.26899 19.9326 5.60094 19.6007L11.9996 13.2021L18.3986 19.6011C18.7306 19.933 19.2688 19.933 19.6007 19.6011C19.9326 19.2692 19.9326 18.731 19.6007 18.399L13.2017 12L19.6007 5.60107Z",
    fill: "var(--commercial-icon-color-main)",
  }),
);
let IComponent = (e) => {
  let {
    visible,
    onClose,
    orderAmount = 0,
    refundAmount,
    refundRemainCredits = 0,
    refundRemainTime = 0,
    sendLog,
    refundType,
  } = e;
  a.useEffect(() => {
    if (visible) {
      sendLog?.({
        eventName: "vip_related_page",
        action: u6.show,
        option: {
          current_page: qg.refundAmountInstructionsPopup,
        },
      });
    }
  }, [visible]);
  let d = () => {
    sendLog?.({
      eventName: "vip_related_page",
      action: u6.close,
      option: {
        current_page: qg.refundAmountInstructionsPopup,
      },
    });
    onClose();
  };
  return a.createElement(
    g,
    {
      className: "refund-amount-popup",
      visible,
      onClose: d,
      direction: "bottom",
    },
    a.createElement(
      "div",
      {
        className: "refund-amount-popup-container",
      },
      a.createElement(
        "div",
        {
          className: "popup-header",
        },
        a.createElement(
          "h3",
          {
            className: "popup-title",
          },
          "退款金额说明",
        ),
        a.createElement(
          "div",
          {
            className: "popup-close-icon",
            style: {
              width: 24,
              height: 24,
            },
            onClick: d,
          },
          w,
        ),
      ),
      a.createElement(
        "div",
        {
          className: "refund-popup-content",
        },
        a.createElement(
          "div",
          {
            className: "popup-content-item",
          },
          a.createElement(
            "div",
            {
              className: "label",
            },
            "订单实付金额",
          ),
          a.createElement(
            "div",
            {
              className: "value",
            },
            "￥",
            (Number(orderAmount) / 100).toFixed(2),
          ),
        ),
        refundType === "time"
          ? a.createElement(
              "div",
              {
                className: "popup-content-item",
              },
              a.createElement(
                "div",
                {
                  className: "label",
                },
                "订单剩余天数",
              ),
              a.createElement(
                "div",
                {
                  className: "value",
                },
                refundRemainTime?.toFixed?.(1),
              ),
            )
          : a.createElement(
              "div",
              {
                className: "popup-content-item",
              },
              a.createElement(
                "div",
                {
                  className: "label",
                },
                "剩余积分数",
              ),
              a.createElement(
                "div",
                {
                  className: "value",
                },
                refundRemainCredits,
              ),
            ),
        a.createElement(
          "div",
          {
            className: "popup-content-item",
          },
          a.createElement(
            "div",
            {
              className: "label",
            },
            "退款金额",
          ),
          a.createElement(
            "div",
            {
              className: "value",
            },
            "￥",
            (Number(refundAmount) / 100).toFixed(2),
          ),
        ),
        refundType === "time"
          ? a.createElement(
              "div",
              {
                className: "note",
              },
              "注：退款金额=（订单剩余时长/订单总时长）* 订单实付金额",
            )
          : a.createElement(
              "div",
              {
                className: "note",
              },
              "注：退款金额=订单金额/订单应发放总积分*剩余积分",
            ),
      ),
    ),
  );
};
let b = (e) => {
  let { value, required, onChange, errorMsg, onClickField } = e;
  return a.createElement(
    "div",
    {
      className: "form-section refund-description-field",
    },
    a.createElement(
      "div",
      {
        className: "form-label",
      },
      a.createElement(
        "span",
        {
          className: "label-text",
        },
        "补充描述",
      ),
      required &&
        a.createElement(
          "span",
          {
            className: "required-mark",
          },
          "*",
        ),
    ),
    a.createElement("textarea", {
      className: `form-textarea ${errorMsg ? "error" : ""}`,
      placeholder: "请详细描述退款原因",
      value,
      onChange: (e) => onChange("description", e.target.value),
      rows: 4,
      maxLength: 200,
      onBlur: () => onClickField?.(value),
    }),
    a.createElement(
      "div",
      {
        className: "char-count",
      },
      value?.length,
      "/200",
    ),
    errorMsg &&
      a.createElement(
        "div",
        {
          className: "error-message",
        },
        errorMsg,
      ),
  );
};
let JComponent = ({
  visible,
  initReason = "",
  refundReasonList = [],
  onClose,
  onConfirm,
  sendLog,
}) => {
  let [l, setL] = a.useState();
  let [s, setS] = a.useState(false);
  a.useRef(null);
  let u = (e, t) => {
    sendLog?.({
      eventName: "vip_related_page",
      action: e,
      option: {
        current_page: qg.refundReasonPopup,
        is_credits_refund: 1,
        ...(t || {}),
      },
    });
  };
  a.useEffect(() => {
    let a;
    if (visible) {
      let e = refundReasonList.find((e) => e.reason === initReason);
      setS(true);
      setL(e);
      u(u6.show);
    } else {
      setS(false);
      a = setTimeout(() => setL(undefined), 300);
    }
    return () => clearTimeout(a);
  }, [visible]);
  let p = () => {
    onClose();
    u(u6.close);
  };
  if (visible || s) {
    return a.createElement(
      g,
      {
        className: "refund-amount-popup",
        visible,
        onClose: p,
        direction: "bottom",
      },
      a.createElement(
        "div",
        {
          className: "popup-header",
        },
        a.createElement(
          "h3",
          {
            className: "popup-title",
          },
          "请选择退款原因",
        ),
        a.createElement(
          "div",
          {
            className: "popup-close-icon",
            style: {
              width: 24,
              height: 24,
            },
            onClick: p,
          },
          w,
        ),
      ),
      a.createElement(
        "div",
        {
          className: "popup-body",
        },
        a.createElement(
          "div",
          {
            className: "reason-list",
          },
          refundReasonList.map((e, t) =>
            a.createElement(
              "div",
              {
                key: t,
                className: `reason-item ${l?.reason === e.reason ? "selected" : ""}`,
                onClick: () => {
                  setL(e);
                  u(u6.clickReason, {
                    reason_of_refund: e?.reason || "",
                  });
                },
              },
              a.createElement(
                "span",
                {
                  className: "reason-text",
                },
                e.text,
              ),
              a.createElement("div", {
                className: "radio-icon",
              }),
            ),
          ),
        ),
      ),
      a.createElement(
        "div",
        {
          className: "popup-footer",
        },
        a.createElement(
          "button",
          {
            className: `confirm-btn ${l ? "active" : ""}`,
            onClick: (e) => {
              e.stopPropagation();
              if (l) {
                onConfirm(l);
                u(u6.clickKnow, {
                  reason_of_refund: l?.reason || "",
                });
              }
            },
            disabled: !l,
            type: "button",
          },
          "确认",
        ),
      ),
    );
  }
  return null;
};
const k =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuNjY2ODMgMi4zMzMzMUw5LjMzMzUgNi45OTk5OEw0LjY2NjgzIDExLjY2NjYiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1vcGFjaXR5PSIwLjUiIHN0cm9rZS13aWR0aD0iMC45OTE2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K";
let PComponent = ({
  value,
  refundReasonList,
  lineDisplay,
  onChange,
  errorMsg,
  onClickField,
  sendLog,
}) => {
  let [l, setL] = a.useState(false);
  let s = () => {
    setL(true);
  };
  let d = a.useMemo(
    () => refundReasonList?.find((t) => t.reason === value)?.text,
    [value, refundReasonList],
  );
  return a.createElement(
    a.Fragment,
    null,
    lineDisplay
      ? a.createElement(
          a.Fragment,
          null,
          a.createElement(
            "div",
            {
              className: "form-row refund-reason-field line-display",
              onClick: s,
            },
            a.createElement(
              "div",
              {
                className: "form-label",
              },
              a.createElement(
                "span",
                {
                  className: "label-text",
                },
                "退款原因",
              ),
              a.createElement(
                "span",
                {
                  className: "required-mark",
                },
                "*",
              ),
            ),
            a.createElement(
              "div",
              {
                className: "form-row",
                style: {
                  gap: 6,
                },
              },
              value
                ? a.createElement(
                    "div",
                    {
                      className: "form-value",
                    },
                    a.createElement(
                      "span",
                      {
                        className: "reason-value-text",
                      },
                      d || "",
                    ),
                    a.createElement(
                      "svg",
                      {
                        className: "arrow-icon",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                      },
                      a.createElement("path", {
                        d: "M6 4L10 8L6 12",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                      }),
                    ),
                  )
                : a.createElement(
                    "div",
                    {
                      className: "form-value placeholder",
                    },
                    "请选择退款原因",
                  ),
              a.createElement("img", {
                src: k,
                alt: "arrow-right-dark",
              }),
            ),
          ),
          errorMsg &&
            a.createElement(
              "div",
              {
                className: "error-message",
              },
              errorMsg,
            ),
        )
      : a.createElement(
          "div",
          {
            className: "form-row",
            onClick: s,
          },
          a.createElement(
            "div",
            {
              className: "form-section",
            },
            a.createElement(
              "div",
              {
                className: "form-label",
              },
              a.createElement(
                "span",
                {
                  className: "label-text",
                },
                "退款原因",
              ),
              a.createElement(
                "span",
                {
                  className: "required-mark",
                },
                "*",
              ),
            ),
            value
              ? a.createElement(
                  "div",
                  {
                    className: "form-value",
                  },
                  a.createElement(
                    "span",
                    {
                      className: "reason-value-text",
                    },
                    d || "",
                  ),
                  a.createElement(
                    "svg",
                    {
                      className: "arrow-icon",
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "none",
                    },
                    a.createElement("path", {
                      d: "M6 4L10 8L6 12",
                      stroke: "currentColor",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                    }),
                  ),
                )
              : a.createElement(
                  "div",
                  {
                    className: "form-value placeholder",
                  },
                  "请选择退款原因",
                ),
          ),
          a.createElement("img", {
            src: k,
            alt: "arrow-right-dark",
          }),
          errorMsg &&
            a.createElement(
              "div",
              {
                className: "error-message",
              },
              errorMsg,
            ),
        ),
    a.createElement(JComponent, {
      visible: l,
      initReason: value || "",
      refundReasonList,
      onClose: () => setL(false),
      onConfirm: (e) => {
        onChange("refundReason", e?.reason || "");
        onChange("refundAmount", e?.amount?.toString() || "");
        onClickField?.(e?.reason || "");
        setL(false);
      },
      sendLog,
    }),
  );
};
let x = "effect_not_match";
o.PA(
  a.forwardRef((e, t) => {
    let {
      loading,
      style,
      lineDisplay,
      refundType,
      orderInfo,
      refundReasonList,
      onContactSupport,
      onGoBack,
      onClickRules,
      onSubmit,
      sendLog,
      onSelectFile,
      uploadFileEventName,
    } = e;
    let [w, setW] = a.useState({
      orderId: orderInfo?.orderId || "",
      refundReason: "",
      refundAmount: 0,
      description: "",
      remarkUrlList: [],
    });
    let [M, setM] = a.useState({});
    let [D, setD] = a.useState(false);
    a.useImperativeHandle(t, () => ({
      updateRefundAmount: (refundAmount) => {
        setW((t) => ({
          ...t,
          refundAmount,
        }));
      },
    }));
    let E = (e) => {
      let { goodsType } = orderInfo || {};
      let is_credits_refund = +(goodsType === Az.Credit);
      sendLog?.({
        eventName: "vip_related_page",
        action: e,
        option: {
          current_page: qg.applyRefundPage,
          is_credits_refund,
          supplement_description: w.description,
          refund_reason: w.refundReason,
        },
      });
    };
    a.useEffect(() => {
      E(u6.show);
    }, []);
    let B = async (e) => {
      let t;
      e.preventDefault();
      E(u6.clickSubmit);
      t = {};
      if (!w.refundReason) {
        t.refundReason = "请选择退款原因";
      }
      if (w.refundReason !== x || w.description) {
        if (w.description.length > 200) {
          t.description = "补充描述不能超过200个字符";
        }
      } else {
        t.description = "补充描述不能为空";
      }
      setM(t);
      if (Object.keys(t).length === 0) {
        onSubmit?.(w);
      }
    };
    let onChange = (e, t) => {
      setW((r) => ({
        ...r,
        [e]: t,
      }));
    };
    let L = () => {
      E(u6.clickRefundAmount);
      setD(true);
    };
    let F = a.useMemo(
      () =>
        w.refundReason &&
        (w.refundReason !== x || (w.refundReason === x && w.description)),
      [w],
    );
    let J = a.useMemo(
      () => refundReasonList?.find((e) => e.reason === w.refundReason),
      [w.refundReason, refundReasonList],
    );
    return a.createElement(
      "div",
      {
        className: "user-refund-apply",
        style,
      },
      a.createElement(d, {
        config: {
          title: "申请退款",
        },
        onBack: () => {
          E(u6.close);
          onGoBack?.();
        },
        onRuleClick: () => {
          E(u6.clickRefundPolicy);
          onClickRules?.();
        },
      }),
      a.createElement(
        "div",
        {
          className: "user-refund-apply__content",
        },
        a.createElement(
          "div",
          null,
          a.createElement(
            "div",
            {
              className: "order-info-card",
            },
            a.createElement(
              "div",
              {
                className: "order-product",
              },
              orderInfo?.description || "",
            ),
            a.createElement(
              "div",
              {
                className: "order-date",
              },
              orderInfo?.payTime ? l(orderInfo?.payTime) : "",
            ),
          ),
          a.createElement(
            "div",
            {
              className: "refund-form-card",
            },
            a.createElement(
              "form",
              {
                onSubmit: B,
                className: "refund-form",
              },
              a.createElement(PComponent, {
                refundReasonList,
                value: w.refundReason,
                lineDisplay,
                errorMsg: M.refundReason,
                onChange,
                sendLog,
              }),
              a.createElement(b, {
                value: w.description,
                required: w.refundReason === x,
                errorMsg: M.description,
                onChange,
                onClickField: (e) => e && E(u6.description),
              }),
              a.createElement(HComponent, {
                value: w.remarkUrlList,
                onChange,
                errorMsg: M.remarkUrlList,
                onClickField: () => E(u6.clickUploadImage),
                onSelectFile,
                uploadFileEventName,
              }),
              lineDisplay
                ? a.createElement(
                    "div",
                    {
                      className: "form-row refund-amount-field",
                      onClick: L,
                    },
                    a.createElement(
                      "div",
                      {
                        className: "form-label",
                      },
                      a.createElement(
                        "span",
                        {
                          className: "label-text",
                        },
                        "退款金额",
                      ),
                      a.createElement(
                        "span",
                        {
                          className: "required-mark",
                        },
                        "*",
                      ),
                    ),
                    a.createElement(
                      "div",
                      {
                        className: "form-value",
                      },
                      a.createElement(
                        "span",
                        {
                          className: "value-text",
                        },
                        `\xa5${w.refundAmount / 100}`,
                      ),
                      a.createElement("img", {
                        src: k,
                        alt: "arrow-right-dark",
                      }),
                    ),
                  )
                : a.createElement(
                    "div",
                    {
                      className: "form-row refund-amount-field",
                      onClick: L,
                    },
                    a.createElement(
                      "div",
                      {
                        className: "form-section",
                      },
                      a.createElement(
                        "div",
                        {
                          className: "form-label",
                        },
                        a.createElement(
                          "span",
                          {
                            className: "label-text",
                          },
                          "退款金额",
                        ),
                        a.createElement(
                          "span",
                          {
                            className: "required-mark",
                          },
                          "*",
                        ),
                      ),
                      a.createElement(
                        "div",
                        {
                          className: "form-value",
                        },
                        a.createElement(
                          "span",
                          {
                            className: "value-text",
                          },
                          `\xa5${w.refundAmount / 100}`,
                        ),
                        a.createElement("img", {
                          src: k,
                          alt: "arrow-right-dark",
                        }),
                      ),
                    ),
                  ),
            ),
          ),
        ),
        a.createElement(
          "div",
          {
            className: "user-refund-apply__footer",
          },
          a.createElement(
            "div",
            {
              className: "user-refund-apply__action",
            },
            a.createElement(
              "button",
              {
                className: "submit-btn",
                onClick: B,
                disabled: !F || loading,
              },
              a.createElement(
                "div",
                {
                  className: "btn-content",
                },
                loading
                  ? a.createElement("span", {
                      className: "spinner",
                    })
                  : null,
                a.createElement("span", null, "确认提交"),
              ),
            ),
          ),
          a.createElement(
            "div",
            {
              className: "user-refund-apply__contact",
            },
            a.createElement(s, {
              onContactSupport: () => {
                E(u6.clickContact);
                onContactSupport?.();
              },
            }),
          ),
        ),
      ),
      a.createElement(IComponent, {
        visible: D,
        onClose: () => setD(false),
        orderAmount: orderInfo?.amount ?? 0,
        refundAmount: w?.refundAmount ?? 0,
        refundRemainCredits: J?.refundRemainCredits ?? 0,
        refundRemainTime: J?.trueRemainTime ?? 0,
        refundType,
        sendLog,
      }),
    );
  }),
);
let M = "refund_rule_popup_visible";
let A = {
  [fH.Empty]: {
    title: "提交申请",
    description: "已提交退款申请，预计在提交后的3个工作日内退回原支付账户",
  },
  [fH.SubmitSuccess]: {
    title: "受理成功",
    description: "预计在提交后的3个工作日内退回原支付账户",
  },
  [fH.SubmitFail]: {
    title: "退款中",
    description: "退款受理成功，预计在提交后的3个工作日内退回原支付账户",
  },
  [fH.RefundFail]: {
    title: "退款失败",
    description: "您申请的退款失败，请联系人工客服处理",
  },
  [fH.RefundSuccess]: {
    title: "退款成功",
    description: "您申请的金额已退回原支付账户，请注意查收",
  },
};
const D = require("Az");
let RComponent = ({ sendLog, activeTab, refundRules }) => {
  let [o, i] = D.A(M, {
    defaultValue: true,
  });
  let [c, setC] = a.useState(false);
  let m = a.useCallback(
    (r) => {
      let current_tab;
      current_tab = activeTab
        ? activeTab === "available"
          ? dR.serviceableOrders
          : dR.applicationHistory
        : "";
      sendLog?.({
        eventName: "vip_related_page",
        action: r,
        option: {
          current_page: qg.refundPolicyPopup,
          current_tab,
        },
      });
    },
    [activeTab],
  );
  a.useEffect(() => {
    if (o) {
      m(u6.show);
      setC(true);
    } else {
      setC(false);
    }
  }, [o]);
  let s = (e) => {
    i(false);
    m(e);
  };
  if (o || c) {
    return a.createElement(
      g,
      {
        visible: o,
        onClose: () => s(u6.close),
      },
      a.createElement(
        "div",
        {
          className: "refund-rule-popup",
        },
        a.createElement(
          "div",
          {
            className: "popup-header",
          },
          a.createElement(
            "div",
            {
              className: "popup-header-title",
            },
            "退款规则",
          ),
          a.createElement(
            "div",
            {
              className: "popup-close-icon",
              style: {
                width: 24,
                height: 24,
              },
              onClick: () => s(u6.close),
            },
            w,
          ),
        ),
        a.createElement(
          "div",
          {
            className: "popup-body",
          },
          a.createElement(
            "div",
            {
              className: "rule-list",
            },
            (
              refundRules || [
                "购买会员或者积分的用户可申请退款，审核通过后可退订单剩余金额（按 剩余积分的价值退款，退款金额=订单金额/订单应发放总积分*剩余积分）",
                "非即梦官方客户端/网页内购买，或账号存在异常/风险状态，无法退款",
                "同一用户每年最多退款3次",
                "促销（含买赠活动）、团购、联合会员、升级订单等特殊情况暂不支持退款",
                "苹果订单或其他特殊情况退款，可联系人工客服",
              ]
            ).map((e, t) =>
              a.createElement(
                "div",
                {
                  key: t,
                  className: "rule-item",
                },
                a.createElement(
                  "span",
                  {
                    className: "bullet",
                  },
                  "· ",
                ),
                a.createElement(
                  "span",
                  {
                    className: "rule-text",
                  },
                  e,
                ),
              ),
            ),
          ),
        ),
        a.createElement(
          "div",
          {
            className: "refund-popup-footer",
          },
          a.createElement(
            "button",
            {
              className: "popup-confirm-btn",
              onClick: () => s(u6.clickKnow),
            },
            "我知道了",
          ),
        ),
      ),
    );
  }
  return null;
};
const E = require("zE");
const B = require("wpe");
let N = ({ visible, onClose, children, className }) => {
  if (visible) {
    return a.createElement(
      S.L,
      {
        visible,
        close: onClose,
        onClose,
        mountOnEnter: true,
        unmountOnExit: true,
        contentAtCenter: true,
        maskClosable: true,
      },
      a.createElement(
        "div",
        {
          className: `modal-mask-content ${className}`,
        },
        children,
      ),
    );
  }
  return null;
};
let LComponent = ({ visible, onClose, sendLog }) => {
  let o = (e) => {
    sendLog?.({
      eventName: "vip_related_page",
      action: e,
      option: {
        current_page: qg.refundRequestLimitReachedPopup,
        current_tab: dR.serviceableOrders,
      },
    });
  };
  a.useEffect(() => {
    if (visible) {
      o(u6.show);
    }
  }, [visible]);
  let i = (e) => {
    o(e);
    onClose();
  };
  if (visible) {
    return a.createElement(
      N,
      {
        className: "refund-apply-modal",
        visible,
        onClose: () => i(u6.close),
      },
      a.createElement(
        "div",
        {
          className: "title",
        },
        "申请次数已达上限",
      ),
      a.createElement(
        "div",
        {
          className: "sub-text",
        },
        "您的账号操作退款次数已达上限，为保证账号安全，暂不支持自主申请退款，如有问题，请联系客服",
      ),
      a.createElement(
        "div",
        {
          className: "btn",
          onClick: () => i(u6.clickKnow),
        },
        "我知道了",
      ),
    );
  }
  return null;
};
const F = require("./module-vQ3.js");
let J = ({
  canRefundLoading,
  orders,
  refundTimes,
  maxRefundTimes,
  CDNPrefix,
  emptyImage,
  loadData,
  onApplyRefund,
  onContactSupport,
  sendLog,
}) => {
  let v = emptyImage || `${CDNPrefix}/commerce/images/refund-list-empty.png`;
  let [f, setF] = a.useState(false);
  let SRef = a.useRef(null);
  let g = B.A(async (e) => {
    e("loading");
    let t = await loadData?.(false);
    setTimeout(() => e(t?.hasMore ? "prepare" : "nomore"), 500);
  });
  let y = (e, t) => {
    sendLog?.({
      eventName: "vip_related_page",
      action: e,
      option: {
        current_page: qg.vipAftersaleServicePage,
        current_tab: dR.serviceableOrders,
        ...(t || {}),
      },
    });
  };
  a.useEffect(() => {
    y(u6.show);
  }, []);
  let w = () => {
    y(u6.clickContact);
    onContactSupport?.();
  };
  if (orders?.length) {
    return a.createElement(
      "div",
      {
        className: "can-refund-list",
        id: "scrollContainer_order_list",
        ref: SRef,
      },
      a.createElement(
        "div",
        {
          className: "order-card-container",
        },
        orders?.map((e) =>
          ((e) => {
            let { orderId, description, payTime = 0 } = e;
            return a.createElement(
              "div",
              {
                key: orderId,
                className: "order-card",
              },
              a.createElement(
                "div",
                {
                  className: "order-card__content",
                },
                a.createElement(
                  "div",
                  {
                    className: "order-info",
                  },
                  a.createElement(
                    "div",
                    {
                      className: "order-product",
                    },
                    a.createElement(
                      "span",
                      {
                        className: "product-name",
                      },
                      description,
                    ),
                  ),
                  a.createElement(
                    "div",
                    {
                      className: "order-date",
                    },
                    a.createElement(
                      "span",
                      {
                        className: "date-text",
                      },
                      l(payTime),
                    ),
                  ),
                ),
                a.createElement(
                  "div",
                  {
                    className: "order-action",
                  },
                  a.createElement(
                    "button",
                    {
                      className: `apply-refund-btn ${!e.amount ? "disabled" : ""}`,
                      onClick: () =>
                        ((e) => {
                          if (refundTimes >= maxRefundTimes) {
                            return void setF(true);
                          }
                          if (!e.amount) {
                            return void _({
                              content: "金额为0，不支持退款",
                            });
                          }
                          let {
                            goodsType,
                            level,
                            cycleUnit = "",
                            cycle = 0,
                            subscribeType = "",
                          } = e || {};
                          let s = +(goodsType === Az.Credit);
                          let d = F.o(cycleUnit, cycle, subscribeType);
                          y(u6.clickRefund, {
                            is_credits_refund: s,
                            refund_vip_type: level,
                            refund_vip_pay_type: s ? "" : d,
                          });
                          onApplyRefund(e);
                        })(e),
                    },
                    "申请退款",
                  ),
                ),
              ),
            );
          })(e),
        ),
        a.createElement(E.A, {
          className: `load-more ${!orders?.length ? "hide" : ""}`,
          getScrollContainer: () =>
            SRef.current ??
            document.getElementById("scrollContainer_order_list"),
          getDataAtFirst: false,
          getData: g,
          threshold: 0,
          prepareArea: null,
          noMoreArea: a.createElement(
            "div",
            {
              className: "no-more-text",
            },
            "没有更多数据了",
          ),
        }),
      ),
      a.createElement(
        "div",
        {
          className: "user-refund-list__footer",
        },
        a.createElement(s, {
          onContactSupport: w,
        }),
      ),
      a.createElement(LComponent, {
        visible: f,
        onClose: () => setF(false),
        sendLog,
      }),
    );
  }
  return a.createElement(
    "div",
    {
      className: "empty-container",
    },
    a.createElement(
      "div",
      {
        className: "empty-container__inner",
      },
      a.createElement("img", {
        className: "empty-image",
        src: v,
        alt: "empty",
      }),
      a.createElement(
        "span",
        {
          className: "empty-text",
        },
        canRefundLoading ? "加载中..." : "暂无可售后订单",
      ),
    ),
    a.createElement(
      "div",
      {
        className: "empty-container__footer",
      },
      a.createElement(s, {
        onContactSupport: w,
      }),
    ),
  );
};
const O = require("xb");
let QComponent = ({
  orders,
  CDNPrefix,
  emptyImage,
  loadData,
  onViewDetails,
  onContactSupport,
  sendLog,
}) => {
  let u = emptyImage ?? `${CDNPrefix}/commerce/images/refund-list-empty.png`;
  let pRef = a.useRef(null);
  let C = (e) => {
    sendLog?.({
      eventName: "vip_related_page",
      action: e,
      option: {
        current_page: qg.vipAftersaleServicePage,
        current_tab: dR.applicationHistory,
      },
    });
  };
  a.useEffect(() => {
    C(u6.show);
  }, []);
  let v = () => {
    C(u6.clickContact);
    onContactSupport?.();
  };
  let _ = B.A(async (e) => {
    e("loading");
    let t = await loadData?.(false);
    setTimeout(() => e(t?.hasMore ? "prepare" : "nomore"), 500);
  });
  if (orders?.length) {
    return a.createElement(
      "div",
      {
        className: "refund-record-list",
        id: "scrollContainer_record_list",
        ref: pRef,
      },
      a.createElement(
        "div",
        {
          className: "refund-record-list-container",
        },
        orders.map((e) => {
          var t;
          var r;
          let o;
          return a.createElement(
            "div",
            {
              key: e.refundRecordId,
              className: "record-card",
            },
            a.createElement(
              "div",
              {
                className: "record-card-line",
              },
              a.createElement(
                "div",
                {
                  className: "apply-time sub-text",
                },
                a.createElement(
                  "span",
                  {
                    className: "label",
                  },
                  "申请时间",
                ),
                a.createElement(
                  "span",
                  {
                    className: "time",
                  },
                  l(e.refundStartTime),
                ),
              ),
              a.createElement(
                "div",
                {
                  className: "sub-text",
                },
                "退款金额",
              ),
            ),
            a.createElement(
              "div",
              {
                className: "record-card-line",
              },
              a.createElement(
                "div",
                {
                  className: "main-text",
                },
                e?.orderRecordInfo?.description || "",
              ),
              a.createElement(
                "div",
                {
                  className: "main-text",
                },
                (t = e?.refundAmount)
                  ? a.createElement(
                      "span",
                      {
                        className: "font-montserrat",
                      },
                      `\u{FFE5}${(Number(t) / 100).toFixed(2)}`,
                    )
                  : "0.00",
              ),
            ),
            a.createElement(
              "div",
              {
                className: "record-card-line refund-status-line",
              },
              a.createElement(
                "div",
                {
                  className: "main-text",
                },
                a.createElement(
                  "span",
                  {
                    className: O("status-text", {
                      "status-success": e.refundStatus === fH.RefundSuccess,
                      "status-fail": e.refundStatus === fH.RefundFail,
                    }),
                  },
                  ((r = e.refundStatus),
                  (o = {
                    [fH.Empty]: "",
                    [fH.SubmitFail]: "提交失败",
                    [fH.SubmitSuccess]: "受理成功",
                    [fH.RefundFail]: "退款失败",
                    [fH.RefundSuccess]: "退款成功",
                  })[r] ?? o[fH.Empty]),
                ),
              ),
              a.createElement(
                "div",
                {
                  className: "action-buttons",
                },
                e.refundStatus === fH.RefundFail &&
                  a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(
                      "button",
                      {
                        className: "action-btn",
                        onClick: v,
                      },
                      "联系客服",
                    ),
                  ),
                a.createElement(
                  "button",
                  {
                    className: "action-btn",
                    onClick: () => {
                      C(u6.clickDetail);
                      onViewDetails?.(e);
                    },
                  },
                  "查看详情",
                ),
              ),
            ),
          );
        }),
        a.createElement(S.eq, {
          className: `load-more ${!orders?.length ? "hide" : ""}`,
          getScrollContainer: () =>
            pRef.current ??
            document.getElementById("scrollContainer_record_list"),
          getDataAtFirst: false,
          getData: _,
          threshold: 0,
          prepareArea: null,
        }),
      ),
      a.createElement(
        "div",
        {
          className: "user-refund-list__footer",
        },
        a.createElement(s, {
          onContactSupport: v,
        }),
      ),
    );
  }
  return a.createElement(
    "div",
    {
      className: "empty-container",
    },
    a.createElement("img", {
      className: "empty-image",
      src: u,
      alt: "empty",
    }),
    a.createElement(
      "span",
      {
        className: "empty-text",
      },
      "暂无退款记录",
    ),
  );
};
o.PA(
  ({
    headerConfig = {
      title: "会员售后服务",
    },
    canRefundList,
    refundTimes,
    maxRefundTimes,
    refundRecordList,
    canRefundLoading,
    loadCanRefundData,
    loadRefundRecordData,
    onApplyRefund,
    onViewDetails,
    onContactSupport,
    onGoBack,
    onClickRules,
    style,
    initTab = "available",
    tabAlign = "left",
    activeTab,
    onTabChange,
    CDNPrefix,
    emptyImage,
    refundRules,
    sendLog,
  }) => {
    let [j, setJ] = a.useState(initTab);
    let activeTab_1 = activeTab || j;
    let x = (e, activeTab) => {
      sendLog?.({
        eventName: "vip_related_page",
        action: e,
        option: {
          current_page: qg.vipAftersaleServicePage,
          current_tab:
            activeTab === "available"
              ? dR.serviceableOrders
              : dR.applicationHistory,
        },
      });
    };
    let M = (e) => {
      if (e !== activeTab_1) {
        setJ(e);
        if (activeTab) {
          onTabChange?.(e);
        }
        x(u6.changeTab, activeTab_1);
      }
    };
    return a.createElement(
      "div",
      {
        className: "user-refund-list commerce-sdk-arco-mobile",
        style,
      },
      a.createElement(d, {
        onBack: () => {
          x(u6.close, activeTab_1);
          onGoBack?.();
        },
        onRuleClick: () => {
          x(u6.clickRefundPolicy, activeTab_1);
          onClickRules?.();
        },
      }),
      a.createElement(
        "div",
        {
          className: "user-refund-list__tab-container",
        },
        a.createElement(
          "div",
          {
            className: `user-refund-list__tab-bar ${tabAlign === "center" ? "center" : ""}`,
          },
          a.createElement(
            "div",
            {
              className: `tab-item ${activeTab_1 === "available" ? "active" : ""}`,
              onClick: () => M("available"),
            },
            a.createElement(
              "div",
              {
                className: "tab-content",
              },
              a.createElement(
                "span",
                {
                  className: "tab-text",
                },
                "可售后订单",
              ),
            ),
          ),
          a.createElement(
            "div",
            {
              className: `tab-item ${activeTab_1 === "records" ? "active" : ""}`,
              onClick: () => M("records"),
            },
            a.createElement(
              "div",
              {
                className: "tab-content",
              },
              a.createElement(
                "span",
                {
                  className: "tab-text",
                },
                "申请记录",
              ),
            ),
          ),
        ),
        a.createElement(
          "div",
          {
            className: "user-refund-list__tips",
          },
          a.createElement(
            "span",
            {
              className: "tips-text",
            },
            "温馨提示：仅安卓支付的订单可自助申请退款，过期订单无法退款，促销（含买赠活动）、联合会员、升级订单等特殊情况暂不支持退款",
          ),
        ),
        a.createElement(
          "div",
          {
            className: "user-refund-list__content",
          },
          activeTab_1 === "available"
            ? a.createElement(J, {
                CDNPrefix,
                onApplyRefund,
                orders: canRefundList,
                refundTimes,
                maxRefundTimes,
                canRefundLoading,
                emptyImage,
                loadData: loadCanRefundData,
                onContactSupport,
                sendLog,
              })
            : a.createElement(QComponent, {
                CDNPrefix,
                emptyImage,
                orders: refundRecordList,
                loadData: loadRefundRecordData,
                onViewDetails,
                onContactSupport,
                sendLog,
              }),
        ),
      ),
      a.createElement(RComponent, {
        sendLog,
        activeTab: activeTab_1,
        refundRules,
      }),
    );
  },
);
const W = require("R8");
const U = require("JSF");
const q = require("gL");
let GComponent = (e) => {
  let { visible, onClose, onContactSupport, sendLog } = e;
  let c = (e) => {
    sendLog?.({
      eventName: "vip_related_page",
      action: e,
      option: {
        current_page: qg.refundRequestLimitReachedPopup,
        current_tab: dR.serviceableOrders,
      },
    });
  };
  a.useEffect(() => {
    if (visible) {
      c(u6.show);
    }
  }, [visible]);
  let l = (e) => {
    c(e);
    onClose();
  };
  return a.createElement(
    q.A,
    {
      className: "max-time-modal",
      visible,
      duration: 0,
      onCancel: () => l(u6.close),
      onOk: () => l(u6.clickKnow),
      title: "申请次数已达上限",
      okText: "我知道了",
      hideCancel: true,
      style: {
        background: "var(--commercial-bg-float)",
      },
      okButtonProps: {
        style: {
          backgroundColor:
            "var(--commercial-component-primary-button-bg-default)",
          color: "var(--commercial-component-primary-button-text-default)",
        },
      },
    },
    a.createElement(
      "div",
      {
        className: "max-time-modal-content",
      },
      a.createElement(
        "div",
        {
          className: "max-time-modal-item",
        },
        a.createElement(
          "span",
          null,
          "您的账号操作退款次数已达上限，为保证账号安全，暂不支持自主申请退款，如有问题，请联系",
        ),
        a.createElement(
          "span",
          {
            onClick: onContactSupport,
          },
          "官方客服",
        ),
      ),
    ),
  );
};
let VComponent = ({
  orders,
  refundTimes,
  maxRefundTimes,
  onApplyRefund,
  onContactSupport,
  sendLog,
}) => {
  let [s, setS] = a.useState(false);
  let u = (e, t) => {
    sendLog?.({
      eventName: "vip_related_page",
      action: e,
      option: {
        current_page: qg.vipAftersaleServicePage,
        current_tab: dR.serviceableOrders,
        ...(t || {}),
      },
    });
  };
  a.useEffect(() => {
    u(u6.show);
  }, []);
  let p = [
    {
      title: "商品名称",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "日期",
      dataIndex: "payTime",
      key: "payTime",
      render: (e) => l(Number(e)),
    },
    {
      title: "支付方式",
      dataIndex: "payChannelText",
      key: "payChannelText",
    },
    {
      title: "共计",
      dataIndex: "amount",
      key: "amount",
      render: (e) => {
        if (e) {
          return `\xa5${(Number(e) / 100).toFixed(2)}`;
        }
        return "";
      },
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: (e, c) =>
        a.createElement(
          W.A,
          {
            className: "action-btn",
            onClick: () =>
              ((e) => {
                if (refundTimes >= maxRefundTimes) {
                  return void setS(true);
                }
                let {
                  goodsType,
                  level = "",
                  cycleUnit = "",
                  cycle = 0,
                  subscribeType = "",
                } = e || {};
                let p = +(goodsType === Az.Credit);
                let C = F.o(cycleUnit, cycle, subscribeType);
                u(u6.clickRefund, {
                  is_credits_refund: p,
                  refund_vip_type: level,
                  refund_vip_pay_type: p ? "" : C,
                });
                onApplyRefund(e);
              })(c),
          },
          "申请退款",
        ),
    },
  ];
  let noDataElement = a.createElement(
    "div",
    {
      className: "no-data-element",
    },
    a.createElement(
      "div",
      {
        className: "no-data-text",
      },
      "暂无可退款订单",
    ),
  );
  return a.createElement(
    "div",
    {
      className: "can-refund-table-container",
    },
    a.createElement(U.A, {
      className: "can-refund-table",
      columns: p,
      data: orders,
      noDataElement,
      border: false,
      size: "middle",
      pagination: !!orders.length,
    }),
    s &&
      a.createElement(GComponent, {
        visible: s,
        onClose: () => setS(false),
        onContactSupport,
        sendLog,
      }),
  );
};
let H = ({ records, onViewDetails, onContactSupport, sendLog, loadData }) => {
  let [m, setM] = a.useState(false);
  let [d, setD] = a.useState(true);
  let C = (e) => {
    sendLog?.({
      eventName: "vip_related_page",
      action: e,
      option: {
        current_page: qg.vipAftersaleServicePage,
        current_tab: dR.applicationHistory,
      },
    });
  };
  let v = u.A(async () => {
    if (
      !m &&
      ((e = 0) => {
        let { scrollTop, scrollHeight, clientHeight } =
          document.documentElement;
        return scrollTop + clientHeight >= scrollHeight - e;
      })(20) &&
      d
    ) {
      setM(true);
      try {
        let e = await loadData?.(false);
        setD(e?.hasMore || false);
      } finally {
        setM(false);
      }
    }
  });
  a.useEffect(() => {
    C(u6.show);
    window.addEventListener("scroll", v, true);
    return () => {
      window.removeEventListener("scroll", v, true);
    };
  }, []);
  if (records?.length) {
    return a.createElement(
      "div",
      {
        className: "refund-record-list-web",
      },
      records.map((e) =>
        a.createElement(
          "div",
          {
            className: "refund-record-card",
          },
          a.createElement(
            "div",
            {
              className: "record-header",
            },
            a.createElement(
              "div",
              {
                className: "apply-time",
              },
              a.createElement(
                "span",
                {
                  className: "label",
                },
                "申请时间",
                ":",
              ),
              a.createElement(
                "span",
                {
                  className: "time",
                },
                l(e.refundStartTime),
              ),
            ),
            a.createElement(
              "div",
              {
                className: "status",
              },
              a.createElement(
                "span",
                {
                  className: "label",
                },
                "状态",
                ":",
              ),
              a.createElement(
                "span",
                {
                  className: "status-text",
                  style: {
                    color: ((e) => {
                      switch (e) {
                        case fH.RefundSuccess:
                          return "var(--commercial-brand-main-default)";
                        case fH.SubmitSuccess:
                          return "var(--commercial-inverse-bg)";
                        case fH.RefundFail:
                          return "var(--commercial-functional-error)";
                        default:
                          return "var(--commercial-inverse-bg)";
                      }
                    })(e.refundStatus),
                  },
                },
                ((e) => {
                  switch (e) {
                    case fH.RefundSuccess:
                      return "退款成功";
                    case fH.SubmitSuccess:
                      return "退款中";
                    case fH.RefundFail:
                      return "退款失败";
                    default:
                      return "未知状态";
                  }
                })(e.refundStatus),
              ),
            ),
          ),
          a.createElement("div", {
            className: "divider",
          }),
          a.createElement(
            "div",
            {
              className: "record-content",
            },
            a.createElement(
              "div",
              {
                className: "product-name",
              },
              e?.orderRecordInfo?.description,
            ),
            a.createElement(
              "div",
              {
                className: "refund-amount",
              },
              a.createElement(
                "span",
                {
                  className: "label",
                },
                "退款金额",
                ":",
              ),
              a.createElement(
                "span",
                {
                  className: "amount",
                },
                "¥",
                (Number(e?.refundAmount || 0) / 100).toFixed(2),
              ),
            ),
          ),
          a.createElement(
            "div",
            {
              className: "record-actions",
            },
            e.refundStatus === fH.RefundFail &&
              onContactSupport &&
              a.createElement(
                W.A,
                {
                  className: "action-btn contact-btn",
                  onClick: onContactSupport,
                },
                "联系客服",
              ),
            onViewDetails &&
              a.createElement(
                W.A,
                {
                  className: "action-btn details-btn",
                  onClick: () => {
                    C(u6.clickDetail);
                    onViewDetails?.(e);
                  },
                },
                "查看详情",
              ),
          ),
        ),
      ),
    );
  }
  return a.createElement(
    "div",
    {
      className: "refund-record-list-empty",
    },
    a.createElement(
      "div",
      {
        className: "empty-content",
      },
      a.createElement(
        "span",
        {
          className: "empty-text",
        },
        "暂无退款记录",
      ),
    ),
  );
};
require("R3a");
let z = ({ onContactSupport, onViewRules }) =>
  a.createElement(
    "div",
    {
      className: "contact-info-web",
    },
    a.createElement(
      "span",
      {
        className: "contact-text",
      },
      "如有问题，查看",
    ),
    a.createElement(
      "span",
      {
        className: "contact-link",
        onClick: () => onViewRules?.(),
      },
      "退款规则",
    ),
    a.createElement(
      "span",
      {
        className: "contact-text",
      },
      "或联系",
    ),
    a.createElement(
      "span",
      {
        className: "contact-link",
        onClick: () => {
          onContactSupport?.();
        },
      },
      "官方客服",
    ),
  );
let Component = ({ sendLog }) => {
  let [t, r] = D.A(M, {
    defaultValue: true,
  });
  let o = (t) => {
    sendLog?.({
      eventName: "vip_related_page",
      action: t,
      option: {
        current_page: qg.refundPolicyPopup,
        current_tab: dR.serviceableOrders,
      },
    });
  };
  a.useEffect(() => {
    if (t) {
      o(u6.show);
    }
  }, [t]);
  let i = (e) => {
    r(false);
    o(e);
  };
  if (t) {
    return a.createElement(
      q.A,
      {
        className: "refund-rule-modal",
        visible: true,
        duration: 0,
        onCancel: () => i(u6.close),
        onOk: () => i(u6.clickKnow),
        title: "退款规则",
        okText: "我知道了",
        hideCancel: true,
        style: {
          background: "var(--commercial-bg-float)",
        },
        okButtonProps: {
          style: {
            backgroundColor:
              "var(--commercial-component-primary-button-bg-default)",
            color: "var(--commercial-component-primary-button-text-default)",
          },
        },
      },
      a.createElement(
        "div",
        {
          className: "refund-rule-modal-content",
        },
        [
          "购买会员或者积分的用户可申请退款，审核通过后可退订单剩余金额（按 剩余积分的价值退款，退款金额=订单金额/订单应发放总积分*剩余积分）",
          "非即梦官方客户端/网页内购买，或账号存在异常/风险状态，无法退款",
          "同一用户每年最多退款3次",
          "促销（含买赠活动）、团购、联合会员、升级订单等特殊情况暂不支持退款",
          "苹果订单或其他特殊情况退款，可联系人工客服",
        ].map((e, t) =>
          a.createElement(
            "div",
            {
              key: t,
              className: "refund-rule-modal-item",
            },
            a.createElement("span", null, "·"),
            a.createElement("span", null, e),
          ),
        ),
      ),
    );
  }
  return null;
};
export let sq = ({
  CDNPrefix,
  canRefundList,
  refundTimes,
  maxRefundTimes,
  refundRecordList,
  onApplyRefund,
  onViewDetails,
  onContactSupport,
  onViewRules,
  initTab = "available",
  activeTab,
  style,
  onTabChange,
  sendLog,
  loadData,
}) => {
  let [f, setF] = a.useState(initTab);
  let S = activeTab || f;
  let g = a.useCallback(
    (e, t) => {
      let r = t ?? S;
      sendLog?.({
        eventName: "vip_related_page",
        action: e,
        option: {
          current_page: qg.vipAftersaleServicePage,
          current_tab:
            r === "available" ? dR.serviceableOrders : dR.applicationHistory,
        },
      });
    },
    [S],
  );
  a.useEffect(
    () => () => {
      g(u6.close);
    },
    [],
  );
  let y = (e) => {
    if (e !== S) {
      setF(e);
      if (activeTab) {
        onTabChange?.(e);
      }
      g(u6.changeTab, S);
    }
  };
  let w = () => {
    g(u6.clickContact, S);
    onContactSupport?.();
  };
  return a.createElement(
    "div",
    {
      className: "user-refund-list-web",
      style,
    },
    a.createElement(
      "div",
      {
        className: "refund-list-container",
      },
      a.createElement(
        "div",
        {
          className: "tab-navigation",
        },
        a.createElement(
          "div",
          {
            className: "tab-container",
          },
          a.createElement(
            "div",
            {
              className: `tab-item ${S === "available" ? "active" : ""}`,
              onClick: () => y("available"),
              onKeyDown: (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  y("available");
                }
              },
              tabIndex: 0,
              role: "tab",
              "aria-selected": S === "available",
            },
            a.createElement(
              "span",
              {
                className: "tab-text",
              },
              "可售后订单",
            ),
            a.createElement("div", {
              className: "tab-indicator",
            }),
          ),
          a.createElement(
            "div",
            {
              className: `tab-item ${S === "records" ? "active" : ""}`,
              onClick: () => y("records"),
              onKeyDown: (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  y("records");
                }
              },
              tabIndex: 0,
              role: "tab",
              "aria-selected": S === "records",
            },
            a.createElement(
              "span",
              {
                className: "tab-text",
              },
              "申请记录",
            ),
            a.createElement("div", {
              className: "tab-indicator",
            }),
          ),
        ),
      ),
      a.createElement(
        "div",
        {
          className: "tips-section",
        },
        a.createElement(
          "span",
          {
            className: "tips-text",
          },
          "温馨提示：仅安卓支付的订单可自助申请退款，过期订单无法退款，促销（含买赠活动）、联合会员、升级订单等特殊情况暂不支持退款",
        ),
      ),
      S === "available"
        ? a.createElement(VComponent, {
            orders: canRefundList,
            refundTimes,
            maxRefundTimes,
            onApplyRefund,
            onContactSupport: w,
            sendLog,
          })
        : a.createElement(H, {
            records: refundRecordList,
            onViewDetails,
            sendLog,
            loadData,
          }),
    ),
    a.createElement(
      "div",
      {
        className: "contact-link-container",
      },
      a.createElement(z, {
        onContactSupport: w,
        onViewRules: () => {
          g(u6.clickRefundPolicy, S);
          onViewRules?.();
        },
      }),
    ),
    a.createElement(Component, {
      sendLog,
    }),
  );
};
const Y = require("WQc");
export let XH = o.PA((e) => {
  let {
    className = "",
    style,
    refundOrder,
    onContactSupport,
    onViewRules,
    sendLog,
  } = e;
  let u = (e) => {
    sendLog?.({
      eventName: "vip_related_page",
      action: e,
      option: {
        current_page: qg.refundDetailPage,
        current_tab: dR.applicationHistory,
      },
    });
  };
  a.useEffect(() => {
    u(u6.show);
    return () => {
      u(u6.close);
    };
  }, []);
  let p = a.useMemo(() => {
    let { refundStatus } = refundOrder ?? {};
    return (
      {
        [fH.Empty]: 0,
        [fH.SubmitFail]: 1,
        [fH.SubmitSuccess]: 3,
        [fH.RefundFail]: 4,
        [fH.RefundSuccess]: 4,
      }[refundStatus] || 0
    );
  }, [refundOrder]);
  let C = a.useMemo(
    () => A[refundOrder?.refundStatus],
    [refundOrder.refundStatus],
  );
  return a.createElement(
    "div",
    {
      className: `user-refund-detail-web ${className}`,
      style,
    },
    a.createElement(
      "div",
      {
        className: "refund-detail-container",
      },
      a.createElement(
        "div",
        {
          className: "refund-status-card",
        },
        a.createElement(
          "div",
          {
            className: "refund-status-header",
          },
          a.createElement(
            "div",
            {
              className: "refund-status-title",
            },
            C?.title,
          ),
          a.createElement(
            "div",
            {
              className: "refund-status-desc",
            },
            C?.description,
          ),
        ),
        a.createElement(
          Y.A,
          {
            current: p,
            style: {
              marginTop: 24,
            },
            size: "small",
            customDot: (e, t) =>
              a.createElement(
                "div",
                {
                  className: "custom-dot",
                },
                refundOrder?.refundStatus === fH.RefundFail && p === 4
                  ? a.createElement(
                      "div",
                      {
                        className: "custom-dot-icon",
                      },
                      y,
                    )
                  : a.createElement(
                      "div",
                      {
                        className: "custom-dot-icon icon-text",
                      },
                      t?.index,
                    ),
              ),
          },
          a.createElement(Y.A.Step, {
            description: m(refundOrder?.refundStartTime),
            title: "提交申请",
          }),
          a.createElement(Y.A.Step, {
            description: p > 1 ? m(refundOrder?.refundAcceptTime) : "",
            title: "受理成功",
          }),
          p <= 3 &&
            a.createElement(Y.A.Step, {
              title: "退款中",
              status: p === 3 ? "finish" : "process",
              description: p === 3 ? m(Math.floor(Date.now() / 1000)) : "",
            }),
          refundOrder?.refundStatus === fH.RefundFail
            ? a.createElement(Y.A.Step, {
                title: "退款失败",
                status: "error",
                description: "",
              })
            : a.createElement(Y.A.Step, {
                description: p === 4 ? m(refundOrder?.refundEndTime) : "",
                title: "退款成功",
              }),
        ),
      ),
      a.createElement(
        "div",
        {
          className: "refund-amount-card",
        },
        a.createElement(
          "div",
          {
            className: "refund-amount-header",
          },
          a.createElement(
            "div",
            {
              className: "refund-amount-title",
            },
            "退款金额",
          ),
        ),
        a.createElement(
          "div",
          {
            className: "refund-amount-desc",
          },
          a.createElement("span", null, "共"),
          a.createElement(
            "span",
            {
              className: "refund-amount",
            },
            "¥",
            (Number(refundOrder?.refundAmount) / 100).toFixed(2),
            "，",
          ),
          a.createElement("span", null, "按实付金额计算，原路退回"),
        ),
      ),
      a.createElement(
        "div",
        {
          className: "refund-info-card",
        },
        a.createElement(
          "div",
          {
            className: "refund-info-header",
          },
          a.createElement(
            "div",
            {
              className: "refund-info-title",
            },
            "退款信息",
          ),
        ),
        a.createElement(
          "div",
          {
            className: "refund-info-details",
          },
          a.createElement(
            "div",
            {
              className: "refund-info-item",
            },
            refundOrder?.orderRecordInfo?.description,
          ),
          a.createElement(
            "div",
            {
              className: "refund-info-item",
            },
            a.createElement("span", null, "订单时间："),
            a.createElement(
              "span",
              null,
              l(Number(refundOrder?.orderRecordInfo?.payTime ?? 0)),
            ),
          ),
          a.createElement(
            "div",
            {
              className: "refund-info-item",
            },
            a.createElement("span", null, "退款原因："),
            a.createElement("span", null, refundOrder?.refundReason),
          ),
        ),
      ),
    ),
    a.createElement(z, {
      onContactSupport: () => {
        u(u6.clickContact);
        onContactSupport?.();
      },
      onViewRules: () => {
        u(u6.clickRefundPolicy);
        onViewRules?.();
      },
    }),
  );
});
let XComponent = ({
  visible,
  onCancel,
  orderInfo,
  orderAmount,
  refundAmount,
  refundRemainCredits,
  sendLog,
}) => {
  let m = (e) => {
    sendLog?.({
      eventName: "vip_related_page",
      action: e,
      option: {
        current_page: qg.refundAmountInstructionsPopup,
      },
    });
  };
  a.useEffect(() => {
    if (visible) {
      m(u6.show);
    }
  }, [visible]);
  let s = (e) => {
    m(e);
    onCancel();
  };
  return a.createElement(
    q.A,
    {
      className: "amount-rule-modal",
      visible,
      onCancel: () => s(u6.close),
      onOk: () => s(u6.clickKnow),
      title: "退款金额说明",
      closable: true,
      style: {
        background: "var(--commercial-bg-float)",
      },
      cancelText: null,
      cancelButtonProps: {
        style: {
          display: "none",
        },
      },
      okButtonProps: {
        style: {
          backgroundColor:
            "var(--commercial-component-primary-button-bg-default)",
          color: "var(--commercial-component-primary-button-text-default)",
        },
      },
      okText: "我知道了",
    },
    a.createElement(
      "div",
      {
        className: "modal-content",
      },
      a.createElement(
        "p",
        {
          className: "content-item",
        },
        a.createElement(
          "div",
          {
            className: "label",
          },
          "订单实付金额",
        ),
        a.createElement(
          "div",
          {
            className: "value",
          },
          "￥",
          (Number(orderAmount) / 100).toFixed(2),
        ),
      ),
      a.createElement(
        "p",
        {
          className: "content-item",
        },
        a.createElement(
          "div",
          {
            className: "label",
          },
          "剩余积分数",
        ),
        a.createElement(
          "div",
          {
            className: "value",
          },
          refundRemainCredits,
        ),
      ),
      a.createElement(
        "p",
        {
          className: "content-item",
        },
        a.createElement(
          "div",
          {
            className: "label",
          },
          "退款金额",
        ),
        a.createElement(
          "div",
          {
            className: "value",
          },
          "￥",
          (Number(refundAmount) / 100).toFixed(2),
        ),
      ),
      a.createElement(
        "p",
        {
          className: "content-description",
        },
        "注：退款金额=订单金额/订单应发放总积分*剩余积分",
      ),
    ),
  );
};
const ee = require("cB");
let EtComponent = ({ onChange, onUploadFile, onClickField }) => {
  let [o, setO] = a.useState([]);
  let n = u.A((t) => {
    let r = [...o];
    t.forEach((e) => {
      let t = r.findIndex((t) => t.filename === e.filename);
      if (t >= 0) {
        r[t] = {
          ...r[t],
          ...e,
        };
      } else {
        r.push(e);
      }
    });
    setO(r);
    onChange(
      "remarkUrlList",
      r.map((e) => e.uri || ""),
    );
  });
  let c = (filename) => {
    let r = o.find((e) => e.filename === filename);
    if (r?.previewUrl) {
      URL.revokeObjectURL(r.previewUrl);
    }
    let a = o.filter((e) => e.filename !== filename);
    setO(a);
    onChange(
      "remarkUrlList",
      a.map((e) => e.uri || ""),
    );
  };
  return a.createElement(
    "div",
    {
      className: "form-section-web",
    },
    a.createElement(
      "div",
      {
        className: "form-label",
        style: {
          paddingTop: 0,
        },
      },
      a.createElement(
        "span",
        {
          className: "label-text",
        },
        "上传照片",
      ),
    ),
    a.createElement(
      "div",
      {
        className: "upload-area",
      },
      a.createElement("input", {
        type: "file",
        id: "file-upload",
        accept: "image/*",
        multiple: true,
        style: {
          display: "none",
        },
        onChange: (e) => {
          let files = e.target.files;
          if (!files) {
            return;
          }
          let a = 9 - o.length;
          if (files.length > a) {
            ee.A.warning({
              content: "最多支持上传9张图片",
            });
          } else {
            n(
              Array.from(files).map((e) => ({
                filename: e.name,
                previewUrl: URL.createObjectURL(e),
                loading: true,
              })),
            );
            Array.from(files).forEach((e) => {
              onUploadFile?.(e, e.name)
                .then((e) => {
                  n([
                    {
                      ...e,
                      loading: false,
                    },
                  ]);
                })
                .catch((t) => {
                  let r = o.find((t) => t.filename === e.name);
                  if (r) {
                    c(r.filename);
                  }
                  ee.A.error({
                    content: "上传失败，请重试",
                  });
                });
            });
          }
        },
      }),
      o.length
        ? a.createElement(
            "div",
            {
              className: "upload-preview",
            },
            o.map((e, t) =>
              a.createElement(
                "div",
                {
                  key: t,
                  className: "upload-item",
                },
                e.loading
                  ? a.createElement(
                      "div",
                      {
                        className: "loading-spinner",
                      },
                      a.createElement("div", {
                        className: "css-loading-arc",
                      }),
                    )
                  : null,
                a.createElement("img", {
                  src: e.previewUrl || "",
                  alt: `\u{4E0A}\u{4F20}\u{56FE}\u{7247}${t + 1}`,
                  className: "upload-image",
                }),
                a.createElement(
                  "div",
                  {
                    className: "remove-btn",
                    onClick: () => c(e.filename),
                  },
                  a.createElement("div", {
                    className: "remove-icon",
                  }),
                ),
              ),
            ),
          )
        : null,
      o.length < 9 &&
        a.createElement(
          "button",
          {
            type: "button",
            className: "upload-btn",
            onClick: () => {
              document.getElementById("file-upload")?.click();
              onClickField?.();
            },
          },
          a.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "18",
              height: "18",
              viewBox: "0 0 18 18",
              fill: "none",
            },
            a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.79968 10.2003L7.8 17.4999C7.80001 17.776 8.02385 17.9998 8.29997 17.9998L9.69997 17.9999C9.97613 17.9999 10.2 17.776 10.2 17.4999L10.1997 10.2004L17.5 10.2007C17.7761 10.2007 18 9.97684 18 9.70068L17.9999 8.30068C17.9999 8.02455 17.7761 7.80071 17.4999 7.8007L10.1996 7.80039L10.1993 0.499885C10.1993 0.22376 9.97542 -8.12561e-05 9.69929 -9.31415e-05L8.29929 -0.000153095C8.02313 -0.000165476 7.79926 0.223709 7.79927 0.499868L7.79958 7.80029L0.49994 7.79997C0.223781 7.79996 -9.2771e-05 8.02383 -8.10015e-05 8.29999L-2.12162e-05 9.69999C-9.45727e-06 9.97612 0.223832 10.2 0.499957 10.2L7.79968 10.2003Z",
              fill: "var(--commercial-text-primary)",
            }),
          ),
        ),
      o.length > 0 &&
        a.createElement(
          "div",
          {
            className: "upload-count",
          },
          o.length,
          "/9",
        ),
    ),
  );
};
let er = "effect_not_match";
export let uF = o.PA((e) => {
  let {
    loading,
    style,
    orderInfo,
    refundReasonList,
    onContactSupport,
    onViewRules,
    onSubmit,
    onUploadFile,
    sendLog,
  } = e;
  let [v, setV] = a.useState(false);
  let [f, setF] = a.useState({
    orderId: orderInfo?.orderId || "",
    refundReason: "",
    refundAmount: 0,
    description: "",
    remarkUrlList: [],
  });
  let [S, setS] = a.useState({});
  let y = u.A((e, t) => {
    let {
      goodsType,
      cycleUnit = "",
      cycle = 0,
      subscribeType = "",
      level = "",
    } = orderInfo ?? {};
    let { refundReason = "", refundAmount = 0, description = "" } = f;
    let p = +(goodsType === Az.Credit);
    let v = F.o(cycleUnit, cycle, subscribeType);
    sendLog?.({
      eventName: "vip_related_page",
      action: e,
      option: {
        current_page: qg.applyRefundPage,
        refund_vip_type: level,
        refund_vip_pay_type: p ? "" : v,
        refund_amount: refundAmount.toString(),
        is_credits_refund: p,
        reason_of_refund: refundReason,
        supplement_description: description,
        ...(t || {}),
      },
    });
  });
  a.useEffect(() => {
    y(u6.show);
    return () => {
      y(u6.close);
    };
  }, []);
  let w = async (e) => {
    let t;
    e.preventDefault();
    t = {};
    if (!f.refundReason) {
      t.refundReason = "请选择退款原因";
    }
    if (f.refundReason !== er || f.description) {
      if (f.description.length > 200) {
        t.description = "补充描述不能超过200个字符";
      }
    } else {
      t.description = "补充描述不能为空";
    }
    setS(t);
    if (Object.keys(t).length === 0) {
      onSubmit?.(f);
    }
  };
  let I = (e, t) => {
    setF((r) => ({
      ...r,
      [e]: t,
    }));
  };
  let b = a.useMemo(
    () =>
      f.refundReason &&
      (f.refundReason !== er || (f.refundReason === er && f.description)),
    [f],
  );
  let j = a.useMemo(
    () => refundReasonList?.find((e) => e.reason === f.refundReason),
    [f.refundReason, refundReasonList],
  );
  return a.createElement(
    "div",
    {
      className: "user-refund-apply-web",
      style,
    },
    a.createElement(
      "div",
      {
        className: "refund-apply-container",
      },
      a.createElement(
        "div",
        {
          className: "order-info-card",
        },
        a.createElement(
          "div",
          {
            className: "product-name",
          },
          orderInfo?.description || "",
        ),
        a.createElement(
          "div",
          {
            className: "order-date",
          },
          orderInfo?.payTime ? l(orderInfo?.payTime) : "",
        ),
      ),
      a.createElement(
        "div",
        {
          className: "refund-form-card",
        },
        a.createElement(
          "form",
          {
            className: "refund-form",
          },
          a.createElement(
            "div",
            {
              className: "form-section-web",
            },
            a.createElement(
              "div",
              {
                className: "form-label",
              },
              a.createElement(
                "span",
                {
                  className: "label-text",
                },
                "退款原因",
              ),
              a.createElement(
                "span",
                {
                  className: "required-mark",
                },
                "*",
              ),
            ),
            a.createElement(
              "div",
              {
                className: "radio-group",
              },
              refundReasonList?.map((e) =>
                a.createElement(
                  "label",
                  {
                    key: e.reason,
                    className: "radio-item",
                  },
                  a.createElement("input", {
                    type: "radio",
                    name: "refund-reason",
                    value: e.reason,
                    checked: f.refundReason === e.reason,
                    onChange: (t) => {
                      I("refundReason", t.target.value || "");
                      I("refundAmount", e.amount?.toString() || "");
                      y(u6.clickReason, {
                        reason_of_refund: t.target.value || "",
                      });
                    },
                  }),
                  a.createElement(
                    "span",
                    {
                      className: "radio-text",
                    },
                    e.text,
                  ),
                ),
              ),
              S.refundReason &&
                a.createElement(
                  "div",
                  {
                    className: "error-message",
                  },
                  S.refundReason,
                ),
            ),
          ),
          a.createElement(
            "div",
            {
              className: "form-section-web",
            },
            a.createElement(
              "div",
              {
                className: "form-label",
                style: {
                  paddingTop: 0,
                },
              },
              a.createElement(
                "span",
                {
                  className: "label-text",
                },
                "补充描述",
              ),
              f.refundReason === er &&
                a.createElement(
                  "span",
                  {
                    className: "required-mark",
                  },
                  "*",
                ),
            ),
            a.createElement(
              "div",
              {
                className: "textarea-wrapper",
              },
              a.createElement("textarea", {
                placeholder: "为了更好的帮你解决问题，请您详细描述退款原因",
                value: f.description,
                onChange: (e) => I("description", e.target.value),
                maxLength: 200,
                className: `description-textarea ${S.description ? "error" : ""}`,
                onBlur: () =>
                  y(u6.description, {
                    supplement_description: f.description,
                  }),
              }),
              a.createElement(
                "div",
                {
                  className: "char-count",
                },
                f.description.length,
                "/200",
              ),
              S.description &&
                a.createElement(
                  "div",
                  {
                    className: "error-message",
                  },
                  S.description,
                ),
            ),
          ),
          a.createElement(EtComponent, {
            onChange: I,
            onUploadFile,
            onClickField: () => y(u6.clickUploadImage),
          }),
          a.createElement(
            "div",
            {
              className: "form-section-web",
              style: {
                alignItems: "center",
              },
              onClick: () => {
                y(u6.clickRefundAmount);
                setV(true);
              },
            },
            a.createElement(
              "div",
              {
                className: "form-label",
              },
              a.createElement(
                "span",
                {
                  className: "label-text",
                },
                "退款金额",
              ),
            ),
            a.createElement(
              "div",
              {
                className: "form-value",
              },
              a.createElement(
                "div",
                {
                  className: "amount-info",
                },
                a.createElement(
                  "span",
                  {
                    className: "amount-label",
                  },
                  "共",
                ),
                a.createElement(
                  "span",
                  {
                    className: "amount-value",
                  },
                  "¥",
                  Number(f?.refundAmount ?? 0) / 100,
                ),
              ),
              a.createElement(
                "div",
                {
                  className: "detail-link",
                  onClick: () => setV(true),
                },
                a.createElement(
                  "span",
                  {
                    className: "detail-text",
                  },
                  "详细说明",
                ),
                a.createElement(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "7",
                    height: "13",
                    viewBox: "0 0 7 13",
                    fill: "none",
                  },
                  a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.74284 6.79996C7.05082 6.48832 7.05082 5.98693 6.74284 5.67529L1.36901 0.237663C1.05844 -0.0765946 0.551921 -0.0795841 0.237663 0.230986C-0.076595 0.541557 -0.0795838 1.04808 0.230986 1.36234L5.04907 6.23762L0.230986 11.1129C-0.0795834 11.4272 -0.0765945 11.9337 0.237663 12.2443C0.551921 12.5548 1.05844 12.5518 1.36901 12.2376L6.74284 6.79996Z",
                    fill: "var(--commercial-text-placeholder)",
                    fillOpacity: "0.35",
                  }),
                  a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.74284 6.79996C7.05082 6.48832 7.05082 5.98693 6.74284 5.67529L1.36901 0.237663C1.05844 -0.0765946 0.551921 -0.0795841 0.237663 0.230986C-0.076595 0.541557 -0.0795838 1.04808 0.230986 1.36234L5.04907 6.23762L0.230986 11.1129C-0.0795834 11.4272 -0.0765945 11.9337 0.237663 12.2443C0.551921 12.5548 1.05844 12.5518 1.36901 12.2376L6.74284 6.79996Z",
                    fill: "var(--commercial-text-placeholder)",
                    fillOpacity: "0.35",
                  }),
                ),
              ),
            ),
          ),
        ),
      ),
      a.createElement(
        "div",
        {
          className: "submit-section",
        },
        a.createElement(
          "button",
          {
            className: "submit-btn",
            onClick: (e) => w(e),
            disabled: !b || loading,
          },
          a.createElement(
            "div",
            {
              className: "btn-content",
            },
            loading
              ? a.createElement("span", {
                  className: "spinner",
                })
              : null,
            a.createElement("span", null, "确认提交"),
          ),
        ),
      ),
    ),
    a.createElement(z, {
      onContactSupport: () => {
        y(u6.clickContact);
        onContactSupport?.();
      },
      onViewRules: () => {
        y(u6.clickRefundPolicy);
        onViewRules?.();
      },
    }),
    a.createElement(XComponent, {
      visible: v,
      onCancel: () => setV(false),
      orderAmount: orderInfo?.amount ?? 0,
      refundAmount: f?.refundAmount ?? 0,
      refundRemainCredits: j?.refundRemainCredits ?? 0,
      sendLog,
    }),
  );
});
const eo = require("./module-pS_2.js");
"https://lf3-cd%n-tos.draft%static.com/obj/ies-hot%soon-draft/vco/2079da7a-2c1d-4af3-9752-29d448004430.html".replace(
  /%/g,
  "",
);
let ei =
  "https://lf3-cd%n-tos.draft%static.com/obj/ies-hot%soon-draft/vco/859ae29c-be52-408f-9293-6601c4d6e360.html".replace(
    /%/g,
    "",
  );
let en =
  "https://lf3-s.vlabst%atic.com/obj/vilab-sta%tic/ies/image_web_lv/image/resource/ticket.bfb8b396..png".replace(
    /%/g,
    "",
  );
let ec = {
  [eo.VD.personal]: "个人",
  [eo.VD.enterprise]: "企业单位",
  [eo.VD.institution]: "非企业单位",
};
ec[eo.VD.enterprise];
eo.VD.enterprise;
ec[eo.VD.personal];
eo.VD.personal;
ec[eo.VD.institution];
eo.VD.institution;
let el = {
  [eo.eo.electronicLegacy]: "增值税电子普通发票",
  [eo.eo.electronic]: "电子发票（普通发票）",
  [eo.eo.electronicSpecial]: "电子发票（增值税专用发票）",
};
let em = {
  [eo.Sx.applying]: "开票中",
  [eo.Sx.applied]: "已开票",
  [eo.Sx.failed]: "开票失败",
  [eo.Sx.refunding]: "退票中",
  [eo.Sx.refunded]: "已退票",
  [eo.Sx.creditMemo]: "已红冲",
};
eo.VD.enterprise;
eo.VD.personal;
eo.VD.institution;
const es = require("sdc");
const ed = require("RE");
const eu = require("JXb");
const ep = require("yU");
const eC = require("oY");
const ev =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAADzlJREFUeAHt3UtsXNUZwPHv3HFezmtcaEmV10RUalVQ46qPVOqCREiwoYS0hD4WJWHBiiqpumi7KHHoqpWqGNFVF1BQN7RJEyibZpNQdUHYNEglKlJFJiSpUgj12JDESTz39HzXc+2J4zDj8fjO/W7+P+kwYzM2Q2L/fe6Z63OdGHJ4pLI1lngwimRz3ceDTlw5vLvS9JCaF18N76+Kd29FEh3fMVA9LgAKwUnOaaQkih+PvX8kvFmWuauF/8sjUVx6kXgBtuU2WBoq7+r7vMjW9H3jl7xcqE7If09PyIUwRj+oS+39evLvli53YUTJ7V2VPtl472JZE2717SZh5iX7vzNw9vcCwJzcBSuEajCE6kAaKo1U9e3r8uZrl5NIjV+K5/LppBLCtXnb0mQ0qUa+tC3MuKoCwIxcBevw6IY94dBvWO9rqE6ESJ147cqcIzWb8mdKct93l98Qrsi5oR2r39svAEzIRbDCrKocZlWH01mVzqhefW5s6nCvm2YJ15Ew29odZls1AZBrPQ9WiFUldvVj0ni176/Pf5zMrBaaRktHA4eIgAE9DVZzrPQQ8KWnR5J1qqys2dQnj/20HGZdkb5JtICci6SH6m7icLip1N6P5Xc/+V+msVL639NI6n9fn4c+Hz08FQC51LNghQX2A07cYDqzWoj1qnbof/ePv6oli/z6fOKovk8A5FJPgnVoZP2u8GrgXr1/NKxZ9SpWKZ1pvfrbsck3vOw9OLL+EQGQO5kHS9etwlQmmcW8/vIlOXnsiuTBv05cnVrsd05e4NAQyJ/Mg9U45ErWrTRYeaLPp7GeVY4l3isAciXTYCWzKy+79P7fchYrpetYU4eGzu9hlgXkS6bBShe0dRaTl0PBmar/vJacuCrMsoDcyfaQ0E+eyZ7H2VWzN//SOHGVWRaQK5kFq/HKWyXPs6tU9e1ryeGhTG5nMygAciGzYLlItuvtmRCDvNNYvfPm1eR+XSY4xQHIiewOCRuHg++cyH+wlK5lKefcdgGQC5kEq7EOVNH7F6rXxYIzb089zwrrWEA+ZBKsCZlI1oH0UKvXZ7W3S59nYx1LVQRAz/VJBiJxFb3V7Y0t0Wjpjg7LS3ff7/3pEQHySc921jUMfTXrcljGsPWNNgcZrWG5ihike8ar2I+vEiC/9PtYd6QcCGOt9/6OMDKZjGQt0/OwRo0cDqbSQ8JYrhEsWLIijM+GaBXu67an+2EBWDD6vT0QorVaCiSrYCX7petluCxZ/ZmSAMaVizTTyqggPgnW6k/bDECfW3VOALtWF2VNK5NgRVI6qbeNvdPN0Auxqv6+NQQLluk33h1SAFkVpKr/0Kswl40cZunzTK8avbG085QAti0Nsyzza9aZ/A80rvlX1fsb71kkFtzVmF05WXRu3eLtYwLYt1KMy+6Xn717RW/10vEWfGHLkuR2kSx/Q4BiWCrGZRasusRH9PbzX19i4tXCdCa4Mtp0VIBiML/wnlk5+qTvpBNX03WhvB8W6mXsdQ1LDwfvW/kKwUJREKx26TpW3cfP6v0t3+qXPEsvYc/hIJAvmR6bhVnWsM6yKmGGlde1rHR2pTYt/v6wAMiNTIPVPMt6+KmVuVzLSmdXi6V88J5lP+f8KyBHMi9GOsvSWUwah7zQ55OuXTG7AvIn82DpLCv2frfe3/LQsuRVwzzQQ8E0oKuiu4eZXQH505NjskcHzh7x3ieHhtt/tErWbOrtq4Y6q3rwiclz6pZEdz5//8qjBwVA7jjpEd0n3bv4mBc/qDt7vvR0rSfbJ2usfvhMObnt8yv+/XD51PfCu/Mx7cPtTi/d9FHjtiucc2fEsJ6teuuhofPRjvBHWE2jkfVMS7c/fvI3n0piVZIlF+7t/8XPhFghP/Rr8U7ha3JKz2ZYqTDTqsRhpiXiK/r26y9fSsZC+8ZD/fLAEyuS+7rI/uUVv3yqUvrBBwLkj86wLkoXWJ9h9TxYSg8PY1d/IdxNLlr61rHxJFoLcYios6mHw7pZpXG2fUmWvfGVZb9+ct3i7eZ/MRSFdl66gGB10Z9G1g1Fzu1L3+5muPScL31VckuYWaXbxix3G555cNXfn288ZK0A+UWwJGfBUjMPEZWGS0d6NeZ2aaR0nUpDtfGexVOh0lnV2kUPPPPV/uea97kiWMgzgiU5DFbq0Mj6XZLMtqbDpVex0WsbngnhunB6Qq5e9sn7xi/Fyb/Xwz3dhlkjdVcYumNoGimlobqz9LXhb674w2y/I0iwkGcES3IcrFQ4TNzqxO0Kf9DbQ7zmfMl4J6Wxkqw8ekfpSwdvEaoUwUKeESwxEKxmGq9Ioq3i/OYQsYpPLiE/HTF9tc/5aCxyy04tc+VT/dGGUy0i1YxgIc8IlhgL1my89xulOwgW8oxgCRdSBWAIwQJgBsECYAbBAmAGwQJgBsECYAbBAmAGwQJgBsECYAbBAmAGwQJgBsECYAbBAmAGwQJgBsECYAbBAmAGwQJgBsECYAbBAmAGwQJgBsECYAbBAmAGwQJgBsECYAbBAmAGwQJgBsECYAbBAmAGwQJgBsECYAbBAmAGwQJgBsECYAbBAmAGwQJgBsECYAbBAmAGwQJgBsECYAbBAmBGn6CoFoVREn4oWTQeRiy4CcEqHg3VmjD6BZaNhvFhGNcFUwhWsWis1jdurzYG7NGZ8VKZ/MFzVjCFYBWLzqo0VvrT+YLAOv271HCNCxIEq1hWNG7HBEWgh4N1wRQWZIsl/ftk3aM4WHxvQrAAmEGwAJhBsACYQbAAmEGwAJhBsACYQbAAmEGwAJhBsACYwa/mAGjLodF1+8S7veHu8ciXfrxjoFqVeTo8umFP7P1QuFsLn3Nbq8/JDAtAS4dHKoMhVkPhbjmMR2JXPxbeV5F50ACGWA03PmelLvXhVh9DsAC0ozbj7cp8otWYrQ01v89FMtLq4wgWgJb0UC3MhvbPeHdH0ZotViFX1Sgu7W/1sQQLQFt2Dpwbmm+0bhkrH21rZ02MYAFo23yiNd9YKYIFYE5aRKs828d0I1aKYAGYs1tFqy4TQzMfm8y8uhArRbAAdGT2aLlK64/sLFaKYAHo2HS0XE1DVJLS3pmPaX6F0SUnnXYWq8bH2+a93yjdsVbs00t86ZVz3hX2dS+a89IFzrkzYhgzLABmECwAZhAsAGYQLABmsL0MgHlJt4jx4qsl37djtlcAu7U1DTMsAB1r3iLGiRuUKN438zHd3JqGYAHoyGy/bhOLn+2h1Rlvd7w1DcECMGdz2SImHP7VurU1DcECMCed/CJzN7amUQQLQNvms+tCN6JFsAC0pRtbxHSyNU0zggWgpW5uETOXrWlmIlgA2jFj9tP5FjGq061pCBaAlkKYTnrvn9X7890iJtXO1jQzsb3MNLaXQZ6xvYwwwwJgCMECYAbBAmAGwQJgBtvLIE8WhVESfpCOi/4eMW5CsJAHGqo1MvkKJyaNhvGh8GrvDQgWek1jtb5xe7Uxbnc6y1wqkxE/K5hCsNBrOqvSWOmM4oKgmf65aLjGBQmChV5b0bgdE8ykh4N1wRReJUSvpV+DrNXMjsX3JgQLgBkEC4AZBAuAGQQLgBkEC4AZBAuAGQQLgBkEC4AZBAuAGQQLgBkEC4AZBAuAGQQLgBkEC4AZBAuAGQQLgBkEC4AZBAuAGQQLgBkEC4AZBAuAGQQLgBkEC4AZBAuAGQQLgBkEC4AZBAuAGQQLgBkEC4AZBAuAGQQLgBkEC4AZBAuAGQQLgBkEC4AZBAuAGQQLgBkEC4AZBAuAGQQLgBkEC4AZBAuAGQQLgBkEC4AZBAuAGQQLgBkEC4AZBAuAGfMK1uGRSlmHAEAGOg7Wn8c2PB67+ukwRvS+AMAC6zhYcSx7w00yu/KxHxIAWGAdB8uJ51AQQKZYdAdgBsECYAbBAmAGwQJgBsECYAbBAmAGwQJgBsECYEbHwfLevzLbfQBYKB0H69GBc3u9lx2x99v0vgDAAuuTeXh04OwRAYCM9DW2h2n5e4E7BqpVaVO7nzOohc9bEwBoQ59uESNtxOVQbX217uMdjw2cP/lJjwuxqoTP+Q9pL1i6Tc2ub69670UBgBZ0DavdXRcqi6LSnlYP8hIPzeFzsjUNgLbNadE9juWtVo+pS1yVuXByXACgDX3e+2dLUbS61QMn4vjMzoGzw60et3Pg3NChkQ21KJLNrR5bj+PRku8bEgBogxPjQnA3SnesFfvWh9EfxrthXBcbLD7nXjgvXeCcOyOGcaY7ADM6Pg8rvBo46F39QCy+HHu/u9WrhwAwXx3PsOoufsGLbHXiBvtcdEAAYIF15SIUIVwVAYAFxhoWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAz5nHiqFSb3jguyINY7LH4nNEjHf8uofOl3bFMJBefKMgWMVfDWCK2EaxiuiZIsL3MNI3VnWKbbtOi27X8J4yPxAaLzzlrF2XyB+q8sb1McegXhH5hWP5pdjmMD8NYLnZYfM5Z0a/FrsWqCJhhFdNAGFfCGBc7LD5nc6zPsOZ1XULk1ojYY/E5I2McEgIwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg90ablYKY3Hjtig+FqAACNaNloWxSYoVK6UbwZ0WttqFcQTrRhtkMlZjYdSlGDTCS8NYF8a7AhhGsKatkMlDQY2V6V0ZZ/FFYQtiFACL7jcrysyqGVemQSEQLABmECwAZhAsAGYQLABmECwAZhAsAGYQLABmECwAZnCm+7T09+z0jHD9dZainECqZ+8vCuO6AMYRrGkarJEwBsL4nBTPBwIYR7BudC6MSzIZraLQmaKGeEwA4wjWzUYaA0DOsOgOwAyCBcAMggXADIIFwAyCBcCMIgRrQgC0w/zOs0UIVhG3NAYWgvmrJhUhWOMCoB1XxLgiBIszuIH2XBbjzAfLOafH5VcFwCe5FL5XzK/3FuVVwovCpayAW9HvjZoUQCGC1fjJMSoAZjNahNmVKsx5WOEvRNeyiBZwo1rje6MQnBSM935VuFktnBSL25seBo4WKVaqcMFSIVq6bU5ZJncPBW43+iLUxaIcBjYrZLBSjXD1N4ZuE8ysC0WkYdITqPWcxLHGK+cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOTB/wGJKdH2tQ0DXgAAAABJRU5ErkJggg==";
let EComponent = ({
  data,
  loading,
  hasMore,
  allowApplyInvoice = true,
  blockReason = "",
  emptyImage,
  onLoadMore,
  selectedRowKeys,
  onSelectionChange,
  onSendLog,
}) => {
  let uRef = a.useRef(null);
  let pRef = a.useRef(false);
  a.useEffect(() => {
    onSendLog?.({
      action: eo.S1.Show,
      current_page: eo.YI.InvoiceManagePage,
      current_tab: eo.tT.ToApply,
    });
  }, []);
  a.useEffect(() => {
    pRef.current = loading;
  }, [loading]);
  a.useEffect(() => {
    let e = uRef.current?.querySelector(".arco-table-body");
    if (!e) {
      return;
    }
    let t = (e) => {
      let { scrollTop, scrollHeight, clientHeight } = e.target;
      if (
        scrollHeight - scrollTop - clientHeight < 50 &&
        hasMore &&
        !pRef.current
      ) {
        onLoadMore();
      }
    };
    e.addEventListener("scroll", t);
    return () => {
      e.removeEventListener("scroll", t);
    };
  }, [hasMore, onLoadMore]);
  let C = [
    {
      title: "名称",
      width: 232,
      dataIndex: "description",
      render: (e) => a.createElement("span", null, e),
    },
    {
      title: "日期",
      width: 232,
      dataIndex: "payTime",
      render: (e) => {
        let t = Number(e);
        let r = t > 1000000000000 ? c(t) : c.unix(t);
        return a.createElement("span", null, r.format("YYYY-MM-DD HH:mm:ss"));
      },
    },
    {
      title: "支付方式",
      width: 120,
      dataIndex: "payChannelText",
      render: (e) => a.createElement("span", null, e),
    },
    {
      title: "共计",
      width: 120,
      dataIndex: "amount",
      align: "right",
      render: (e) =>
        a.createElement("span", null, `\xa5${(Number(e) / 100).toFixed(2)}`),
    },
  ];
  if (!loading && data.length === 0) {
    return a.createElement(
      "div",
      {
        className: "invoice-applied-list-empty",
      },
      a.createElement("img", {
        className: "empty-image",
        src: emptyImage ?? ev,
        alt: "empty",
      }),
      a.createElement(
        "span",
        {
          className: "empty-text",
        },
        "暂无待申请发票",
      ),
    );
  }
  let v = loading && data.length === 0;
  let _ = loading && data.length > 0;
  return a.createElement(
    "div",
    {
      className: "invoice-pending-list",
      ref: uRef,
    },
    a.createElement(
      "div",
      {
        className: `invoice-tips${allowApplyInvoice ? "" : " invoice-tips--blocked"}`,
      },
      "温馨提示：",
      allowApplyInvoice
        ? "个人支付订单仅支持开具普票，如有疑问可联系人工客服"
        : blockReason,
    ),
    a.createElement(ep.A, {
      columns: C,
      data,
      rowKey: "orderId",
      rowSelection: {
        type: "checkbox",
        selectedRowKeys,
        columnWidth: 38,
        onChange: (e, t) => {
          if (e.length > selectedRowKeys.length) {
            onSendLog?.({
              action: eo.S1.ClickOrder,
              current_page: eo.YI.InvoiceManagePage,
              current_tab: eo.tT.ToApply,
            });
          }
          onSelectionChange(e, t);
        },
      },
      pagination: false,
      scroll: {
        y: "calc(100% - 40px)",
      },
      border: false,
      noDataElement: v
        ? a.createElement(
            "div",
            {
              className: "invoice-pending-list-loading",
            },
            a.createElement(eC.A, null),
            " 加载中...",
          )
        : a.createElement("div", null, "暂无数据"),
      footer: _
        ? () =>
            a.createElement(
              "div",
              {
                style: {
                  textAlign: "center",
                  padding: 10,
                },
              },
              a.createElement(eC.A, null),
              " 加载中...",
            )
        : undefined,
    }),
  );
};
const ef = require("HtE");
const eh = require("aNn");
const eT = require("UN2s");
const eS = require("Xl");
const eg = require("LeJ");
const ey = require("LTg");
let Item = eS.A.Item;
let EIComponent = ({
  visible,
  initialEmail,
  onCancel,
  onOk,
  loading,
  onSendLog,
}) => {
  let [c] = eS.A.useForm();
  a.useEffect(() => {
    if (visible) {
      c.setFieldsValue({
        email: initialEmail,
      });
      onSendLog?.({
        action: eo.S1.Show,
        current_page: eo.YI.InvoiceAgainPopup,
        invoice_status: eo.Sx.applied,
      });
    }
  }, [visible, initialEmail, c]);
  let l = async () => {
    try {
      onSendLog?.({
        action: eo.S1.ClickSendMailAgain,
        current_page: eo.YI.InvoiceAgainPopup,
      });
      let e = await c.validate();
      await onOk(e.email);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };
  return a.createElement(
    eg.A,
    {
      className: "send-email-modal",
      title: "再次发送至邮箱",
      visible,
      onOk: l,
      onCancel: () => {
        c.resetFields();
        onCancel();
        onSendLog?.({
          action: eo.S1.Close,
          current_page: eo.YI.InvoiceAgainPopup,
          invoice_status: eo.Sx.applied,
        });
      },
      confirmLoading: loading,
      okText: "再次发送至邮箱",
      okButtonProps: {
        style: {
          background: "var(--commercial-component-primary-button-bg-default)",
          color:
            "var(--commercial-component-primary-button-text-default, #000)",
          fontWeight: 500,
        },
      },
      cancelButtonProps: {
        style: {
          background:
            "var(--commercial-component-secondary-button-bg-default, rgba(255, 255, 255, 0.08))",
          color: "var(--commercial-component-secondary-button-text-default)",
        },
      },
      maskStyle: {
        background: "rgba(0,0,0,0.80)",
      },
    },
    a.createElement(
      eS.A,
      {
        form: c,
        layout: "vertical",
        autoComplete: "off",
      },
      a.createElement(
        Item,
        {
          label: "",
          field: "email",
          rules: [
            {
              required: true,
              message: "请输入邮箱",
            },
            {
              type: "email",
              message: "请输入有效的邮箱地址",
            },
          ],
        },
        a.createElement(ey.A, {
          size: "large",
          placeholder: "用于向你发送电子发票",
          autoFocus: false,
        }),
      ),
    ),
  );
};
let { Text } = ef.A;
let EjComponent = ({
  data,
  loading,
  hasMore,
  emptyImage,
  onLoadMore,
  onViewDetail,
  onReInvoice,
  onReSendEmail,
  onSendLog,
}) => {
  let dRef = a.useRef(null);
  let uRef = a.useRef(false);
  let [p, setP] = a.useState(false);
  let [v, setV] = a.useState(null);
  let [loading_1, setF] = a.useState(false);
  let S = (e) => {
    onSendLog?.({
      current_page: eo.YI.InvoiceManagePage,
      current_tab: eo.tT.AppliedFor,
      ...e,
    });
  };
  a.useEffect(() => {
    S?.({
      action: eo.S1.Show,
    });
  }, []);
  a.useEffect(() => {
    uRef.current = loading;
  }, [loading]);
  a.useEffect(() => {
    let dRef_current = dRef.current;
    if (!dRef_current) {
      return;
    }
    let t = (e) => {
      let { scrollTop, scrollHeight, clientHeight } = e.target;
      if (
        scrollHeight - scrollTop - clientHeight < 50 &&
        hasMore &&
        !uRef.current
      ) {
        onLoadMore();
      }
    };
    dRef_current.addEventListener("scroll", t);
    return () => {
      dRef_current.removeEventListener("scroll", t);
    };
  }, [hasMore, onLoadMore]);
  let g = async (e) => {
    if (v) {
      try {
        setF(true);
        await onReSendEmail(v.id, e);
        setP(false);
        setV(null);
      } catch (error) {
        console.error("Failed to send email:", error);
      } finally {
        setF(false);
      }
    }
  };
  if (loading || data.length !== 0) {
    return a.createElement(
      "div",
      {
        className: "invoice-applied-list",
        ref: dRef,
      },
      data.map((e) =>
        a.createElement(
          "div",
          {
            key: e.invoiceId,
            className: "invoice-applied-item",
          },
          a.createElement(
            "div",
            {
              className: "invoice-applied-item-header",
            },
            a.createElement(
              "div",
              {
                className: "invoice-info",
              },
              a.createElement(
                Text,
                {
                  className: "invoice-name",
                },
                a.createElement("span", null, "付费服务:"),
                a.createElement("span", null, el[e.invoiceType]),
              ),
              a.createElement(
                eh.A,
                null,
                a.createElement(
                  Text,
                  {
                    className: "invoice-label",
                  },
                  a.createElement("span", null, "状态:"),
                  a.createElement(
                    "span",
                    {
                      className: O("invoice-status", {
                        green: eo.Sx.applied === e.invoiceStatus,
                        red: eo.Sx.failed === e.invoiceStatus,
                      }),
                    },
                    em[e.invoiceStatus],
                  ),
                ),
              ),
            ),
          ),
          a.createElement(eT.A, {
            style: {
              margin: "16px 0",
              borderColor:
                "var(--commercial-bg-block-fill, rgba(255, 255, 255, 0.04))",
            },
          }),
          a.createElement(
            "div",
            {
              className: "invoice-applied-item-content",
            },
            e.payChannelText &&
              a.createElement(
                "div",
                {
                  className: "info-row",
                },
                a.createElement(
                  Text,
                  {
                    className: "info-label",
                  },
                  "支付方式:",
                ),
                a.createElement(
                  Text,
                  {
                    className: "info-value",
                  },
                  e.payChannelText,
                ),
              ),
            a.createElement(
              "div",
              {
                className: "info-row",
              },
              a.createElement(
                "div",
                {
                  className: "info-row",
                  style: {
                    margin: 0,
                  },
                },
                a.createElement(
                  Text,
                  {
                    className: "info-label",
                  },
                  "申请时间:",
                ),
                a.createElement(
                  Text,
                  {
                    className: "info-label",
                  },
                  c(e.submitTime).format("YYYY-MM-DD HH:mm:ss"),
                ),
              ),
              a.createElement(
                "div",
                {
                  className: "info-row",
                  style: {
                    margin: 0,
                  },
                },
                a.createElement(
                  Text,
                  {
                    className: "info-label",
                  },
                  "开票金额:",
                ),
                a.createElement(
                  Text,
                  {
                    className: "info-value amount",
                  },
                  "￥",
                  Number(e.totalAmount / 100).toFixed(2),
                ),
              ),
            ),
            a.createElement(
              "div",
              {
                className: "action-row",
              },
              a.createElement(
                ed.A,
                {
                  type: "secondary",
                  onClick: () => {
                    onViewDetail(e.invoiceId);
                    S?.({
                      action: eo.S1.ClickDetail,
                    });
                  },
                },
                "查看详情",
              ),
              eo.Sx.refunded === e.invoiceStatus
                ? a.createElement(
                    ed.A,
                    {
                      type: "secondary",
                      onClick: () => {
                        onReInvoice(e.invoiceId);
                        S?.({
                          action: eo.S1.ClickInvoiceAgain,
                        });
                      },
                    },
                    "申请开票",
                  )
                : null,
              eo.Sx.applied === e.invoiceStatus
                ? a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(
                      ed.A,
                      {
                        type: "secondary",
                        onClick: () => {
                          onReInvoice(e.invoiceId);
                          S?.({
                            action: eo.S1.ClickInvoiceAgain,
                          });
                        },
                      },
                      "重新开票",
                    ),
                    a.createElement(
                      ed.A,
                      {
                        type: "secondary",
                        onClick: () => {
                          setV({
                            id: e.invoiceId,
                            email: e.email || "",
                          });
                          setP(true);
                          S?.({
                            action: eo.S1.ClickSendAgain,
                          });
                        },
                      },
                      "再次发送",
                    ),
                  )
                : null,
            ),
          ),
        ),
      ),
      loading &&
        a.createElement(
          "div",
          {
            className: "loading-container",
          },
          a.createElement(eC.A, null),
          " 加载中...",
        ),
      a.createElement(EIComponent, {
        visible: p,
        initialEmail: v?.email || "",
        onCancel: () => {
          setP(false);
          setV(null);
        },
        onOk: g,
        loading: loading_1,
        onSendLog,
      }),
    );
  }
  return a.createElement(
    "div",
    {
      className: "invoice-applied-list-empty",
    },
    a.createElement("img", {
      className: "empty-image",
      src: emptyImage ?? ev,
      alt: "empty",
    }),
    a.createElement(
      "span",
      {
        className: "empty-text",
      },
      "暂无已申请发票",
    ),
  );
};
export let Bo = ({
  visible = true,
  onClose,
  className,
  style,
  emptyImage,
  activeTab = "pending",
  unInvoicedRecords = [],
  historyRecords = [],
  allowApplyInvoice = true,
  blockReason = "",
  applyDisabled = false,
  loading = false,
  hasMore = false,
  onTabChange,
  onLoadMore,
  handleGoApply,
  onSelectionChange,
  onViewDetail,
  onReInvoice,
  onReSendEmail,
  onSendLog,
}) => {
  let [w, setW] = a.useState([]);
  let b = new Set(w.map((e) => e.orderId));
  let j = unInvoicedRecords.filter((e) => b.has(e.orderId));
  let k = activeTab === "pending" && applyDisabled;
  let P = JSON.stringify(j);
  let xRef = a.useRef("[]");
  let M = (e) => {
    let t = JSON.stringify(e);
    if (t !== xRef.current) {
      xRef.current = t;
      onSelectionChange?.(e);
    }
  };
  let onSelectionChange_1 = (e, t) => {
    setW(t);
    M(t);
  };
  let D = () => onSelectionChange_1([], []);
  a.useEffect(() => {
    if (j.length !== w.length) {
      setW(j);
    }
    M(j);
  }, [P, onSelectionChange]);
  a.useEffect(() => {
    D();
  }, [activeTab, visible]);
  let R = (e) => {
    onSendLog?.({
      current_page: eo.YI.InvoiceManagePage,
      current_tab: activeTab === "pending" ? eo.tT.ToApply : eo.tT.AppliedFor,
      ...e,
    });
  };
  if (visible) {
    return a.createElement(
      "div",
      {
        className: O("invoice-pc-list", className),
        style,
      },
      a.createElement(
        "div",
        {
          className: "invoice-pc-list-header",
        },
        a.createElement(
          "div",
          {
            className: "invoice-title",
          },
          "发票管理",
        ),
        a.createElement(
          "div",
          {
            className: "close-btn",
            onClick: () => {
              D();
              onClose?.();
              R?.({
                action: eo.S1.Close,
              });
            },
          },
          a.createElement(eu.A, {
            style: {
              width: 20,
              height: 20,
            },
          }),
        ),
      ),
      a.createElement(
        "div",
        {
          className: "invoice-pc-list-tabs",
        },
        a.createElement(
          "div",
          {
            className: "custom-tabs",
          },
          a.createElement(
            "div",
            {
              className: O("custom-tab-item", {
                active: activeTab === "pending",
              }),
              onClick: () => {
                if (activeTab !== "pending") {
                  D();
                  onTabChange?.("pending");
                  onSendLog?.({
                    action: eo.S1.ChangeTab,
                    current_page: eo.YI.InvoiceManagePage,
                    current_tab: eo.tT.AppliedFor,
                    change_tab: eo.tT.ToApply,
                  });
                }
              },
            },
            "待申请",
          ),
          a.createElement(
            "div",
            {
              className: O("custom-tab-item", {
                active: activeTab === "applied",
              }),
              onClick: () => {
                if (activeTab !== "applied") {
                  D();
                  onTabChange?.("applied");
                  onSendLog?.({
                    action: eo.S1.ChangeTab,
                    current_page: eo.YI.InvoiceManagePage,
                    current_tab: eo.tT.ToApply,
                    change_tab: eo.tT.AppliedFor,
                  });
                }
              },
            },
            "已申请",
          ),
        ),
      ),
      a.createElement(
        "div",
        {
          className: "invoice-pc-list-content",
        },
        activeTab === "pending"
          ? a.createElement(EComponent, {
              data: unInvoicedRecords,
              loading,
              hasMore,
              allowApplyInvoice,
              blockReason,
              emptyImage,
              onLoadMore: () => onLoadMore?.(),
              selectedRowKeys: j.map((e) => e.orderId || ""),
              onSelectionChange: onSelectionChange_1,
              onSendLog,
            })
          : a.createElement(EjComponent, {
              data: historyRecords,
              loading,
              hasMore,
              emptyImage,
              onLoadMore: () => onLoadMore?.(),
              onViewDetail,
              onReInvoice,
              onReSendEmail,
              onSendLog,
            }),
      ),
      a.createElement(
        "div",
        {
          className: "invoice-pc-list-footer",
        },
        a.createElement("div", {
          className: "footer-mask",
        }),
        a.createElement(
          "div",
          {
            className: "selected-items",
          },
          a.createElement("span", null, "已选择 ", j.length, " 个订单，共计"),
          a.createElement(
            "span",
            {
              className: "total-amount",
            },
            `\xa5${(j.reduce((acc, item) => acc + Number(item.amount || 0), 0) / 100).toFixed(2)}`,
          ),
        ),
        a.createElement(
          ed.A,
          {
            className: `apply-btn ${j.length > 0 && !k ? "can-refund" : ""}`,
            disabled: k,
            onClick: () => {
              if (activeTab === "applied") {
                D();
                onTabChange?.("pending");
                onSendLog?.({
                  action: eo.S1.ChangeTab,
                  current_page: eo.YI.InvoiceManagePage,
                  current_tab: eo.tT.AppliedFor,
                  change_tab: eo.tT.ToApply,
                });
                return;
              }
              if (j.length !== 0 && !k) {
                if (!allowApplyInvoice) {
                  return void es.A.warning("退票流程未完成，暂无法申请");
                }
                handleGoApply?.(j);
                R?.({
                  action: eo.S1.ClickInvoice,
                });
              }
            },
            size: "large",
          },
          "去开票",
        ),
      ),
    );
  }
  return null;
};
const eP = require("QPc");
const ex = require("aa6");
const eM = require("ag2");
const eA = require("t0G");
const eD = require("bc");
let { Text: Text_1 } = ef.A;
let Item_1 = eS.A.Item;
let eB = /^[0-9-]*$/;
let eN = [eo.VD.enterprise, eo.VD.personal, eo.VD.institution];
let eL = ({
  titleType,
  value,
  onChange,
  searchCompanyList,
  showDropdown,
  onSearch,
  onSelect,
  onDropdownClose,
  disabled = false,
}) =>
  a.createElement(
    a.Fragment,
    null,
    a.createElement(ey.A, {
      value,
      disabled,
      placeholder:
        titleType === eo.VD.enterprise
          ? "请填写完整的企业名称"
          : titleType === eo.VD.personal
            ? "内容不可含「公司」二字"
            : "请填写完整的单位名称",
      size: "large",
      onFocus: () => {
        if (value) {
          onSearch(value);
        }
      },
      onBlur: onDropdownClose,
      onChange: (e) => {
        onChange?.(e);
        onSearch(e);
      },
      maxLength: 50,
    }),
    !disabled &&
      showDropdown &&
      a.createElement(
        "div",
        {
          className: "search-dropdown",
        },
        searchCompanyList?.map((e, t) =>
          a.createElement(
            "div",
            {
              key: t,
              className: "search-item",
              onClick: () => onSelect(e),
            },
            e?.companyName || "",
          ),
        ),
      ),
  );
export let xH = ({
  visible = true,
  onBack,
  invoiceContents,
  initialData,
  onSubmit,
  submitting = false,
  className,
  style,
  selectedRecords = [],
  invoiceTypeOptions,
  salesTypeOptions,
  readonlyInvoiceHeads,
  requiredEinInvoiceTypes,
  getInvoiceHeadWarning,
  onInvoiceTypeChange,
  searchCompanyList = [],
  onSearchCompany,
  onLinkClick,
  onSendLog,
  onAgreementClick,
  defaultAgreementChecked = false,
}) => {
  let [w] = eS.A.useForm();
  let I = invoiceTypeOptions?.length ? invoiceTypeOptions : undefined;
  let b = salesTypeOptions?.length ? salesTypeOptions : eN;
  let initialValue = I?.includes(eo.eo.electronic)
    ? eo.eo.electronic
    : (I?.[0] ?? eo.eo.electronic);
  let k = b.includes(eo.VD.enterprise) ? eo.VD.enterprise : b[0];
  let [P, setP] = a.useState(initialValue);
  let MRef = a.useRef("");
  let ARef = a.useRef("");
  let DRef = a.useRef(false);
  let RRef = a.useRef(onSearchCompany);
  RRef.current = onSearchCompany;
  let [E, setE] = a.useState(eo.VD.enterprise);
  let [N, setN] = a.useState(false);
  let [F, setF] = a.useState(false);
  let [showDropdown, setShowDropdown] = a.useState(false);
  let [U, setU] = a.useState(defaultAgreementChecked);
  let [G, setG] = a.useState("");
  let H = Object.prototype.hasOwnProperty.call(readonlyInvoiceHeads ?? {}, P);
  let z = readonlyInvoiceHeads?.[P] ?? "";
  let $ = I?.join(",");
  let K = b.join(",");
  let Y = selectedRecords.reduce(
    (acc, selectedRecord) => acc + (selectedRecord.amount || 0),
    0,
  );
  let Z = (e) => {
    onSendLog?.({
      current_page: eo.YI.InvoiceCompletePage,
      invoice_status: initialData?.invoiceStatus,
      ...e,
    });
  };
  a.useEffect(() => {
    Z?.({
      action: eo.S1.Show,
    });
  }, []);
  a.useEffect(() => {
    if (initialData || I || salesTypeOptions) {
      let e =
        initialData?.invoiceType && I?.includes(initialData.invoiceType)
          ? initialData.invoiceType
          : initialValue;
      let salesType =
        initialData?.salesType && b.includes(initialData.salesType)
          ? initialData.salesType
          : k;
      w.setFieldsValue({
        ...initialData,
        salesType,
        ...(I
          ? {
              invoiceType: e,
            }
          : {}),
      });
      setP(e);
      setE(salesType);
      setG(initialData?.invoiceHead || "");
      MRef.current = initialData?.invoiceHead || "";
      ARef.current = initialData?.ein || "";
    }
  }, [initialData, w, $, K]);
  a.useEffect(() => {
    if (H) {
      w.setFieldValue("invoiceHead", z);
      setG(z);
      setShowDropdown(false);
    }
  }, [H, z, initialData, w]);
  let X = visible && H && P === eo.eo.electronicSpecial;
  a.useEffect(() => {
    if (X) {
      DRef.current = false;
      w.setFieldValue(
        "ein",
        z.trim() && MRef.current.trim() === z.trim() ? ARef.current : "",
      );
      if (z.trim()) {
        RRef.current?.(z.trim());
      }
    }
  }, [X, z, initialData, w]);
  a.useEffect(() => {
    if (!X || !z.trim() || DRef.current || w.getFieldValue("ein")) {
      return;
    }
    let e = new Set(
      searchCompanyList
        .filter((e) => e.companyName?.trim() === z.trim())
        .map((e) => e.ein?.trim())
        .filter((e) => !!e),
    );
    if (e.size === 1) {
      w.setFieldValue("ein", Array.from(e)[0]);
    }
  }, [X, z, initialData, searchCompanyList, w]);
  let ee = E === eo.VD.institution && G.includes("公司");
  let et = getInvoiceHeadWarning?.({
    invoiceType: P,
    invoiceHead: G,
  });
  let required =
    E === eo.VD.enterprise || !!requiredEinInvoiceTypes?.includes(P);
  if (visible) {
    return a.createElement(
      "div",
      {
        className: O("invoice-pc-apply", className),
        style,
      },
      a.createElement(
        "div",
        {
          className: "invoice-pc-apply-header",
        },
        a.createElement(
          "div",
          {
            className: "back-btn",
            onClick: () => {
              onBack?.();
              Z?.({
                action: eo.S1.Close,
              });
            },
          },
          a.createElement(eM.A, {
            style: {
              color: "rgba(255, 255, 255, 0.50)",
              width: 20,
              height: 20,
            },
          }),
        ),
        a.createElement(
          "div",
          {
            className: "invoice-title",
          },
          "发票信息填写",
        ),
      ),
      a.createElement(
        "div",
        {
          className: "invoice-pc-apply-content",
        },
        a.createElement(
          "div",
          {
            className: "invoice-pc-apply-content_inner",
          },
          a.createElement(
            eS.A,
            {
              form: w,
              layout: "horizontal",
              initialValues: {
                salesType: eo.VD.enterprise,
                ...initialData,
              },
              onValuesChange: (e) => {
                if ("invoiceHead" in e) {
                  setG(e.invoiceHead || "");
                }
              },
            },
            I
              ? a.createElement(
                  Item_1,
                  {
                    label: "发票类型",
                    field: "invoiceType",
                    initialValue,
                  },
                  a.createElement(
                    eP.A.Group,
                    {
                      onChange: (e) => {
                        if (!H) {
                          MRef.current = String(
                            w.getFieldValue("invoiceHead") ?? "",
                          );
                          ARef.current = String(w.getFieldValue("ein") ?? "");
                        }
                        let t = Object.prototype.hasOwnProperty.call(
                          readonlyInvoiceHeads ?? {},
                          e,
                        )
                          ? (readonlyInvoiceHeads?.[e] ?? "")
                          : MRef.current;
                        setP(e);
                        w.setFieldsValue({
                          invoiceType: e,
                          invoiceHead: t,
                        });
                        if (
                          H &&
                          !Object.prototype.hasOwnProperty.call(
                            readonlyInvoiceHeads ?? {},
                            e,
                          )
                        ) {
                          w.setFieldValue("ein", ARef.current);
                        }
                        setG(t);
                        setShowDropdown(false);
                        onInvoiceTypeChange?.(e);
                      },
                    },
                    I.map((e) =>
                      a.createElement(
                        eP.A,
                        {
                          key: e,
                          value: e,
                        },
                        el[e],
                      ),
                    ),
                  ),
                )
              : a.createElement(
                  "div",
                  {
                    className: "static-field",
                  },
                  a.createElement(
                    Text_1,
                    {
                      className: "label",
                    },
                    "发票类型",
                  ),
                  a.createElement(
                    Text_1,
                    {
                      className: "value",
                    },
                    "增值税电子普通发票",
                  ),
                ),
            a.createElement(
              "div",
              {
                className: "static-field",
              },
              a.createElement(
                Text_1,
                {
                  className: "label",
                },
                "发票内容",
              ),
              a.createElement(
                Text_1,
                {
                  className: "value",
                },
                invoiceContents,
              ),
            ),
            a.createElement(
              Item_1,
              {
                label: "抬头类型",
                field: "salesType",
                style: {
                  alignItems: "center",
                },
              },
              a.createElement(
                eP.A.Group,
                {
                  onChange: (e) => setE(e),
                  style: {
                    height: 36,
                    lineHeight: "36px",
                  },
                },
                b.map((e) =>
                  a.createElement(
                    eP.A,
                    {
                      key: e,
                      value: e,
                    },
                    ec[e],
                  ),
                ),
              ),
            ),
            a.createElement(
              Item_1,
              {
                label: "发票抬头",
                field: "invoiceHead",
                required: true,
                className: "required",
                rules: [
                  {
                    required: true,
                    message: "请填写发票抬头",
                  },
                  {
                    validator: (e, t) => {
                      if (E === eo.VD.personal && e?.includes("公司")) {
                        return t("内容不可含「公司」二字");
                      }
                      t();
                    },
                  },
                ],
                style: {
                  position: "relative",
                },
              },
              a.createElement(
                a.Fragment,
                null,
                a.createElement(eL, {
                  titleType: E,
                  value: G,
                  disabled: H,
                  onChange: (e) => {
                    setG(e);
                    w.setFieldValue("invoiceHead", e);
                  },
                  searchCompanyList,
                  showDropdown,
                  onSearch: (e) => {
                    if (!H) {
                      if (!e) {
                        return void setShowDropdown(false);
                      }
                      setShowDropdown(true);
                      onSearchCompany?.(e);
                    }
                  },
                  onSelect: (e) => {
                    if (!H) {
                      w.setFieldValue("ein", e.ein || "");
                      w.setFieldValue("invoiceHead", e.companyName || "");
                      setG(e.companyName || "");
                      w.validate(["invoiceHead"]);
                      setShowDropdown(false);
                    }
                  },
                  onDropdownClose: () =>
                    setTimeout(() => setShowDropdown(false), 200),
                }),
                ee
                  ? a.createElement(
                      "div",
                      {
                        className: "invoice-head-weak-tip",
                      },
                      "您填写的发票抬头包含「公司」二字，抬头类型可能有误，如有税号请选择「企业单位」，若无税号，请忽略提醒继续操作",
                    )
                  : null,
                et
                  ? a.createElement(
                      "div",
                      {
                        className: "invoice-head-warning",
                        role: "status",
                      },
                      et,
                    )
                  : null,
              ),
            ),
            E !== eo.VD.personal &&
              a.createElement(
                Item_1,
                {
                  label: "税号",
                  field: "ein",
                  required,
                  className: required ? "required" : "",
                  rules: [
                    {
                      required,
                      message: "请填写纳税人识别号",
                    },
                    {
                      validator: (e, t) => {
                        var r;
                        r = e || "";
                        let a =
                          /^([A-Z\d]{15}|[A-Z\d]{17,18}|[A-Z\d]{20})$/.test(r);
                        if (e && !a) {
                          t(
                            "税号输入不合法，税号必须是15、17、18、20位的大写字母或数字哦～",
                          );
                        }
                        t();
                      },
                    },
                  ],
                },
                a.createElement(ey.A, {
                  "aria-required": required,
                  onChange: () => {
                    if (X) {
                      DRef.current = true;
                    }
                  },
                  placeholder: required
                    ? "请填写纳税人识别号(必填)"
                    : "请填写纳税人识别号(选填)",
                  size: "large",
                  maxLength: 24,
                }),
              ),
            a.createElement(
              Item_1,
              {
                label: "电子邮箱",
                field: "email",
                required: true,
                className: "required",
                rules: [
                  {
                    required: true,
                    message: "请填写电子邮箱",
                  },
                  {
                    type: "email",
                    message: "请输入正确的邮箱格式",
                  },
                ],
              },
              a.createElement(ey.A, {
                placeholder: "用于向你发送电子发票(必填)",
                size: "large",
                maxLength: 50,
              }),
            ),
            a.createElement(
              "div",
              {
                className: "amount-section",
              },
              a.createElement(
                "div",
                {
                  className: "amount-header",
                  onClick: () => setF(!F),
                },
                a.createElement(
                  Text_1,
                  {
                    className: "label",
                  },
                  "开票金额",
                ),
                a.createElement(
                  "div",
                  {
                    className: "amount-value-wrapper",
                  },
                  a.createElement(
                    "div",
                    {
                      className: "flex-row",
                      style: {
                        gap: 4,
                      },
                    },
                    selectedRecords.length,
                    " 个订单，共",
                    a.createElement(
                      Text_1,
                      {
                        className: "amount",
                      },
                      "¥",
                      (Y / 100).toFixed(2),
                    ),
                  ),
                  F ? a.createElement(eA.A, null) : a.createElement(eD.A, null),
                ),
              ),
              F &&
                a.createElement(
                  "div",
                  {
                    className: "amount-details",
                  },
                  selectedRecords.map((e) =>
                    a.createElement(
                      "div",
                      {
                        key: e.id,
                        className: "detail-item",
                      },
                      a.createElement(
                        Text_1,
                        {
                          className: "item-name",
                        },
                        e.description,
                      ),
                      a.createElement(
                        Text_1,
                        {
                          className: "item-price",
                        },
                        "¥",
                        (e.amount / 100).toFixed(2),
                      ),
                    ),
                  ),
                ),
            ),
            a.createElement(
              "div",
              {
                className: "expand-section",
              },
              E !== eo.VD.personal
                ? a.createElement(
                    "div",
                    {
                      className: "expand-header",
                      onClick: () => setN(!N),
                    },
                    a.createElement(
                      "div",
                      {
                        className: "label",
                      },
                      "备注信息",
                    ),
                    a.createElement(
                      "div",
                      {
                        className: "flex-row",
                        style: {
                          flex: 1,
                          justifyContent: "space-between",
                        },
                      },
                      a.createElement(
                        "div",
                        {
                          className: "flex-row",
                          style: {
                            gap: 4,
                          },
                        },
                        a.createElement(
                          Text_1,
                          {
                            className: "example",
                          },
                          "开户行、账号等信息(选填)，将打印于发票备注处",
                        ),
                        a.createElement(
                          "div",
                          {
                            className: "example-link",
                            onClick: (e) => {
                              e.stopPropagation();
                              onLinkClick?.(en);
                            },
                          },
                          "查看示例",
                        ),
                      ),
                      N
                        ? a.createElement(eA.A, null)
                        : a.createElement(eD.A, null),
                    ),
                  )
                : null,
              E !== eo.VD.personal &&
                N &&
                a.createElement(
                  "div",
                  {
                    className: "expand-content",
                  },
                  a.createElement(
                    Item_1,
                    {
                      label: "注册地址",
                      field: "registerAddress",
                    },
                    a.createElement(ey.A, {
                      placeholder: "请填写公司注册地址",
                      maxLength: 40,
                    }),
                  ),
                  a.createElement(
                    Item_1,
                    {
                      label: "注册电话",
                      field: "registerPhone",
                      rules: [
                        {
                          validator: (e, t) => {
                            if (!eB.test(e || "")) {
                              return t("只能是数字或半角-");
                            }
                            t();
                          },
                        },
                      ],
                    },
                    a.createElement(ey.A, {
                      placeholder: "请填写公司注册电话",
                      maxLength: 20,
                    }),
                  ),
                  a.createElement(
                    Item_1,
                    {
                      label: "开户行",
                      field: "bank",
                    },
                    a.createElement(ey.A, {
                      placeholder: "请填写开户行",
                      maxLength: 35,
                    }),
                  ),
                  a.createElement(
                    Item_1,
                    {
                      label: "开户账号",
                      field: "bankAccount",
                    },
                    a.createElement(ey.A, {
                      placeholder: "请填写开户行账号",
                      maxLength: 30,
                    }),
                  ),
                  a.createElement(
                    Item_1,
                    {
                      label: "备注",
                      field: "remark",
                    },
                    a.createElement(ey.A, {
                      placeholder: "请填写备注信息",
                      maxLength: 50,
                    }),
                  ),
                ),
            ),
          ),
        ),
      ),
      a.createElement(
        "div",
        {
          className: "invoice-pc-apply-footer",
        },
        a.createElement("div", {
          className: "footer-mask",
        }),
        a.createElement(
          "div",
          {
            className: "footer-content",
          },
          a.createElement(
            "div",
            {
              className: "agreement",
            },
            a.createElement(
              ex.A,
              {
                checked: U,
                onChange: (e) => {
                  setU(e);
                  Z?.({
                    action: eo.S1.ClickAgree,
                  });
                },
              },
              a.createElement("span", null, "我已阅读并同意"),
            ),
            a.createElement(
              "span",
              {
                className: "agreement-link",
                onClick: () => {
                  if (onAgreementClick) {
                    onAgreementClick();
                  } else {
                    onLinkClick?.(ei);
                  }
                },
              },
              "《增值税电子普通发票确认书》",
            ),
          ),
          a.createElement(
            "div",
            {
              className: "actions",
            },
            a.createElement(
              ed.A,
              {
                type: "primary",
                onClick: () => {
                  onBack?.();
                  Z?.({
                    action: eo.S1.ClickBack,
                  });
                },
                className: "go-back",
                style: {
                  background:
                    "var(--commercial-component-secondary-button-bg-default, rgba(255, 255, 255, 0.08))",
                  color:
                    "var(--commercial-component-secondary-button-text-default, #0f1419)",
                },
              },
              "上一步",
            ),
            a.createElement(
              ed.A,
              {
                type: "primary",
                loading: submitting,
                onClick: () => {
                  Z?.({
                    action: eo.S1.ClickNext,
                  });
                  if (U) {
                    w.validate()
                      .then((e) => {
                        let t = String(w.getFieldValue("registerPhone") ?? "");
                        if (eB.test(t)) {
                          onSubmit?.({
                            ...e,
                            ...(I
                              ? {
                                  invoiceType: P,
                                }
                              : {}),
                            ...(H
                              ? {
                                  invoiceHead: z,
                                }
                              : {}),
                          });
                        } else {
                          es.A.warning({
                            content: a.createElement(
                              "span",
                              {
                                style: {
                                  color: "#fff",
                                },
                              },
                              "只能是数字或半角-",
                            ),
                            style: {
                              backgroundColor: "#1f1f1f",
                              border: 0,
                            },
                          });
                        }
                      })
                      .catch((e) => {
                        console.error("Validation failed:", e);
                      });
                  } else {
                    es.A.warning({
                      content: a.createElement(
                        "span",
                        {
                          style: {
                            color: "#fff",
                          },
                        },
                        "请先阅读并勾选确认书",
                      ),
                      style: {
                        backgroundColor: "#1f1f1f",
                        border: 0,
                      },
                    });
                  }
                },
                className: "go-next",
                style: {
                  background:
                    "var(--commercial-component-primary-button-bg-default)",
                  color:
                    "var(--commercial-component-primary-button-text-default, #000)",
                },
              },
              "下一步",
            ),
          ),
        ),
      ),
    );
  }
  return null;
};
const eJ = require("c9J");
let EOComponent = ({ visible, onCancel, onOk, onSendLog }) => {
  a.useEffect(() => {
    if (visible) {
      onSendLog?.({
        action: eo.S1.Show,
        current_page: eo.YI.RefundApplyPopup,
        invoice_status: eo.Sx.applied,
      });
    }
  }, [visible]);
  let i = async () => {
    onOk?.();
    onSendLog?.({
      action: eo.S1.ClickConfirm,
      current_page: eo.YI.RefundApplyPopup,
      invoice_status: eo.Sx.applied,
    });
  };
  return a.createElement(
    eg.A,
    {
      className: "invoice-detail-modal",
      title: "申请退票流程",
      visible,
      onOk: i,
      onCancel: () => {
        onCancel();
        onSendLog?.({
          action: eo.S1.Close,
          current_page: eo.YI.RefundApplyPopup,
        });
      },
      autoFocus: false,
      focusLock: true,
      cancelText: "取消",
      okText: "确定",
      style: {
        background: "var(--commercial-bg-overlay, #1f1f1f)",
      },
      simple: true,
      okButtonProps: {
        style: {
          backgroundColor:
            "var(--commercial-component-primary-button-bg-default, #adf01d)",
          color:
            "var(--commercial-component-primary-button-text-default, #000)",
          fontWeight: 500,
        },
      },
      cancelButtonProps: {
        style: {
          background:
            "var(--commercial-component-secondary-button-bg-default, rgba(255, 255, 255, 0.08))",
          color:
            "var(--commercial-component-secondary-button-text-default, #fff)",
        },
      },
      maskStyle: {
        background: "var(--commercial-bg-mask-80, rgba(0,0,0,0.80))",
      },
    },
    a.createElement(
      "div",
      {
        className: "refund-rules",
      },
      a.createElement(
        "span",
        null,
        "1. 您提交的请求将由人工审核,人工审核的时间有可能较长",
      ),
      a.createElement("span", null, "2. 审核通过后,该发票将作废,无法进行报销"),
      a.createElement(
        "span",
        null,
        "3. 审核通过后,该发票对应的订单将可以被重新选择并提交开票",
      ),
    ),
  );
};
let { Text: Text_2 } = ef.A;
export let fU = ({
  pageTitle,
  showProcess,
  onBack,
  invoiceContents,
  initialData,
  onSubmit,
  submitting = false,
  className,
  style,
  selectedRecords = [],
  onApplyRefundInvoice,
  onReSendInvoice,
  onUpdateInvoice,
  onLinkClick,
  onSendLog,
  onAgreementClick,
  defaultAgreementChecked = false,
}) => {
  let [S, setS] = a.useState(false);
  let [y, setY] = a.useState(false);
  let [I, setI] = a.useState(defaultAgreementChecked);
  let [j, setJ] = a.useState(false);
  let [P, setP] = a.useState(false);
  let M = initialData?.invoiceId || "";
  let A = selectedRecords.reduce(
    (acc, selectedRecord) => acc + (selectedRecord.amount || 0),
    0,
  );
  let D = a.useMemo(() => {
    if (
      [eo.Sx.applying, eo.Sx.refunding].includes(
        initialData?.invoiceStatus || eo.Sx.applying,
      )
    ) {
      return 2;
    }
    return 3;
  }, [initialData]);
  let title = a.useMemo(() => {
    if (
      [eo.Sx.refunded, eo.Sx.refunding].includes(
        initialData?.invoiceStatus || eo.Sx.applying,
      )
    ) {
      return "退票受理";
    }
    return "开票受理";
  }, [initialData?.invoiceStatus]);
  let description = a.useMemo(() => {
    if (
      initialData?.invoiceStatus === eo.Sx.applying ||
      initialData?.invoiceStatus === eo.Sx.refunding
    ) {
      return c().format("YYYY-MM-DD HH:mm");
    }
    if (initialData?.invoiceStatus === eo.Sx.refunded) {
      return c(initialData?.refundFinishTime || 0).format("YYYY-MM-DD HH:mm");
    }
    if (
      initialData?.invoiceStatus &&
      [eo.Sx.applied, eo.Sx.failed, eo.Sx.creditMemo].includes(
        initialData?.invoiceStatus,
      )
    ) {
      return c(initialData?.applyFinishTime || 0).format("YYYY-MM-DD HH:mm");
    }
    if (initialData?.applyStartTime) {
      return c(initialData?.applyStartTime).format("YYYY-MM-DD HH:mm");
    }
    return "";
  }, [initialData]);
  let B = (e) => {
    onSendLog?.({
      ...e,
      current_page: showProcess
        ? eo.YI.InvoiceDetailPage
        : eo.YI.ConfirmInvoicePage,
      invoice_status: initialData?.invoiceStatus,
    });
  };
  a.useEffect(() => {
    B({
      action: eo.S1.Show,
    });
  }, []);
  return a.createElement(
    "div",
    {
      className: O("invoice-pc-preview", className),
      style,
    },
    a.createElement(
      "div",
      {
        className: "invoice-pc-preview-header",
      },
      a.createElement(
        "div",
        {
          className: "back-btn",
          onClick: () => {
            onBack?.();
            B({
              action: eo.S1.Close,
            });
          },
        },
        a.createElement(eM.A, {
          style: {
            color: "var(--commercial-text-secondary, rgba(255, 255, 255, 0.5))",
            width: 20,
            height: 20,
          },
        }),
      ),
      a.createElement(
        "div",
        {
          className: "invoice-title",
        },
        pageTitle || "确认发票信息",
      ),
    ),
    a.createElement(
      "div",
      {
        className: "invoice-pc-preview-content",
      },
      a.createElement(
        "div",
        {
          className: "invoice-pc-preview-content_inner",
        },
        showProcess &&
          a.createElement(
            a.Fragment,
            null,
            a.createElement(
              "div",
              {
                className: "step-header",
              },
              em[initialData?.invoiceStatus || eo.Sx.applying],
            ),
            a.createElement(
              "div",
              {
                className: "step-header-sub",
              },
              ((e, t) => {
                switch (e) {
                  case eo.Sx.applying:
                    return "您申请的发票预计在提交后的3个工作日内发送到您的邮箱，请耐心等待";
                  case eo.Sx.applied:
                    return "您申请的发票已经发送至邮箱，请注意查收。";
                  case eo.Sx.failed:
                    if (t.reasonDetail) {
                      return `\u{5931}\u{8D25}\u{539F}\u{56E0}\u{FF1A}${t.reasonDetail}`;
                    }
                    return "开票失败：部分订单退款导致开具失败，您可重新选择有效的订单开票；";
                  case eo.Sx.refunding:
                    return "退票预计在5个工作日内完成";
                  case eo.Sx.refunded:
                    if (t.refundReason === eo.bG.Refund) {
                      return "已完成退票，您可重新申请开票";
                    }
                    if (t.refundReason === eo.bG.OrderRefund) {
                      return "由于开票的订单存在退款，已进行红冲处理";
                    }
                    if (t.refundReason === eo.bG.RefundUpdate) {
                      return "已完成退票，您可重新申请开票";
                    }
                    return "";
                  case eo.Sx.creditMemo:
                  default:
                    return "";
                }
              })(initialData?.invoiceStatus || eo.Sx.applying, {
                refundReason: initialData?.refundReason || eo.bG.Refund,
                reasonDetail: initialData?.failedReason ?? "",
              }),
              eo.Sx.applied === initialData?.invoiceStatus &&
                a.createElement(
                  "span",
                  {
                    onClickCapture: () => {
                      onLinkClick?.(initialData?.fileUrl || "");
                    },
                    style: {
                      color: "var(--commercial-text-brand, #adf01d)",
                      cursor: "pointer",
                    },
                  },
                  "开票预览",
                ),
            ),
            a.createElement(
              eJ.A,
              {
                current: D,
              },
              a.createElement(eJ.A.Step, {
                title: "提交申请",
                description: c(
                  initialData?.applyStartTime || initialData?.refundStartTime,
                ).format("YYYY-MM-DD HH:mm:ss"),
                icon: a.createElement(
                  "div",
                  {
                    className: O("step-dot", {
                      active: D >= 1,
                    }),
                  },
                  "1",
                ),
              }),
              a.createElement(eJ.A.Step, {
                title,
                description: c(
                  initialData?.applyStartTime || initialData?.refundStartTime,
                ).format("YYYY-MM-DD HH:mm:ss"),
                icon: a.createElement(
                  "div",
                  {
                    className: O("step-dot", {
                      active: D >= 2,
                    }),
                  },
                  "2",
                ),
              }),
              a.createElement(eJ.A.Step, {
                title: em[initialData?.invoiceStatus || eo.Sx.applying],
                description,
                icon: a.createElement(
                  "div",
                  {
                    className: O("step-dot", {
                      active: D >= 3,
                      failed: initialData?.invoiceStatus === eo.Sx.failed,
                    }),
                  },
                  "3",
                ),
              }),
            ),
            a.createElement(eT.A, {
              style: {
                margin: "16px 0",
                borderColor:
                  "var(--commercial-stroke-tertiary, rgba(255, 255, 255, 0.04))",
              },
            }),
          ),
        a.createElement(
          "div",
          {
            className: "static-field",
            style: {
              marginTop: 4,
            },
          },
          a.createElement(
            Text_2,
            {
              className: "label",
            },
            "发票类型",
          ),
          a.createElement(
            Text_2,
            {
              className: "value",
            },
            initialData?.invoiceType
              ? el[initialData.invoiceType]
              : "增值税电子普通发票",
          ),
        ),
        a.createElement(
          "div",
          {
            className: "static-field",
          },
          a.createElement(
            Text_2,
            {
              className: "label",
            },
            "发票内容",
          ),
          a.createElement(
            Text_2,
            {
              className: "value",
            },
            invoiceContents,
          ),
        ),
        a.createElement(
          "div",
          {
            className: "static-field",
          },
          a.createElement(
            Text_2,
            {
              className: "label",
            },
            "抬头类型",
          ),
          a.createElement(
            Text_2,
            {
              className: "value",
            },
            ((e) => {
              switch (e) {
                case eo.VD.enterprise:
                  return "企业单位";
                case eo.VD.personal:
                  return "个人";
                case eo.VD.institution:
                  return "非企业单位";
                default:
                  return "";
              }
            })(initialData?.salesType),
          ),
        ),
        a.createElement(
          "div",
          {
            className: "static-field",
          },
          a.createElement(
            Text_2,
            {
              className: "label",
            },
            "发票抬头",
          ),
          a.createElement(
            Text_2,
            {
              className: "value",
            },
            initialData?.invoiceHead,
          ),
        ),
        initialData?.salesType !== eo.VD.personal &&
          a.createElement(
            "div",
            {
              className: "static-field",
            },
            a.createElement(
              Text_2,
              {
                className: "label",
              },
              "税号",
            ),
            a.createElement(
              Text_2,
              {
                className: "value",
              },
              initialData?.ein,
            ),
          ),
        a.createElement(
          "div",
          {
            className: "static-field",
          },
          a.createElement(
            Text_2,
            {
              className: "label",
            },
            "电子邮箱",
          ),
          a.createElement(
            Text_2,
            {
              className: "value",
            },
            initialData?.email,
          ),
        ),
        a.createElement(
          "div",
          {
            className: "amount-section",
          },
          a.createElement(
            "div",
            {
              className: "amount-header",
              onClick: () => setY(!y),
            },
            a.createElement(
              Text_2,
              {
                className: "label",
              },
              "开票金额",
            ),
            a.createElement(
              "div",
              {
                className: "amount-value-wrapper",
              },
              a.createElement(
                "div",
                {
                  className: "flex-row",
                  style: {
                    gap: 4,
                  },
                },
                selectedRecords.length,
                " 个订单，共",
                a.createElement(
                  Text_2,
                  {
                    className: "amount",
                  },
                  "¥",
                  (A / 100).toFixed(2),
                ),
              ),
              y ? a.createElement(eA.A, null) : a.createElement(eD.A, null),
            ),
          ),
          y &&
            a.createElement(
              "div",
              {
                className: "amount-details",
              },
              selectedRecords.map((e) =>
                a.createElement(
                  "div",
                  {
                    key: e.id,
                    className: "detail-item",
                  },
                  a.createElement(
                    Text_2,
                    {
                      className: "item-name",
                    },
                    e.description,
                  ),
                  a.createElement(
                    Text_2,
                    {
                      className: "item-price",
                    },
                    "¥",
                    (e.amount / 100).toFixed(2),
                  ),
                ),
              ),
            ),
        ),
        a.createElement(
          "div",
          {
            className: "expand-section",
          },
          initialData?.salesType !== eo.VD.personal
            ? a.createElement(
                "div",
                {
                  className: "expand-header",
                  onClick: () => setS(!S),
                },
                a.createElement(
                  "div",
                  {
                    className: "label",
                  },
                  "备注信息",
                ),
                a.createElement(
                  "div",
                  {
                    className: "flex-row",
                    style: {
                      flex: 1,
                      justifyContent: "space-between",
                    },
                  },
                  a.createElement(
                    "div",
                    {
                      className: "flex-row",
                      style: {
                        gap: 4,
                      },
                    },
                    a.createElement(
                      Text_2,
                      {
                        className: "example",
                      },
                      "开户行、账号等信息(选填)，将打印于发票备注处",
                    ),
                    a.createElement(
                      "div",
                      {
                        className: "example-link",
                        onClick: (e) => {
                          e.stopPropagation();
                          onLinkClick?.(en);
                        },
                      },
                      "查看示例",
                    ),
                  ),
                  S ? a.createElement(eA.A, null) : a.createElement(eD.A, null),
                ),
              )
            : null,
          S &&
            a.createElement(
              "div",
              {
                className: "expand-content",
              },
              a.createElement(
                "div",
                {
                  className: "static-field",
                },
                a.createElement(
                  Text_2,
                  {
                    className: "label",
                  },
                  "注册地址",
                ),
                a.createElement(
                  Text_2,
                  {
                    className: "value",
                  },
                  initialData?.registerAddress || "-",
                ),
              ),
              a.createElement(
                "div",
                {
                  className: "static-field",
                },
                a.createElement(
                  Text_2,
                  {
                    className: "label",
                  },
                  "注册电话",
                ),
                a.createElement(
                  Text_2,
                  {
                    className: "value",
                  },
                  initialData?.registerPhone || "-",
                ),
              ),
              a.createElement(
                "div",
                {
                  className: "static-field",
                },
                a.createElement(
                  Text_2,
                  {
                    className: "label",
                  },
                  "开户行",
                ),
                a.createElement(
                  Text_2,
                  {
                    className: "value",
                  },
                  initialData?.bank || "-",
                ),
              ),
              a.createElement(
                "div",
                {
                  className: "static-field",
                },
                a.createElement(
                  Text_2,
                  {
                    className: "label",
                  },
                  "开户账号",
                ),
                a.createElement(
                  Text_2,
                  {
                    className: "value",
                  },
                  initialData?.bankAccount || "-",
                ),
              ),
              a.createElement(
                "div",
                {
                  className: "static-field",
                },
                a.createElement(
                  Text_2,
                  {
                    className: "label",
                  },
                  "备注",
                ),
                a.createElement(
                  Text_2,
                  {
                    className: "value",
                  },
                  initialData?.remark || "-",
                ),
              ),
            ),
        ),
      ),
    ),
    showProcess
      ? a.createElement(
          "div",
          {
            className: "invoice-pc-preview-footer",
          },
          eo.Sx.applied === initialData?.invoiceStatus
            ? a.createElement("div", {
                className: "footer-mask",
              })
            : null,
          a.createElement(
            "div",
            {
              className: "actions",
            },
            eo.Sx.applied === initialData?.invoiceStatus
              ? a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(
                    ed.A,
                    {
                      type: "primary",
                      onClick: () => {
                        setP(true);
                        B({
                          action: eo.S1.ClickRequestRefund,
                          current_page: eo.YI.InvoiceDetailPage,
                        });
                      },
                      style: {
                        background:
                          "var(--commercial-component-secondary-button-bg-default, rgba(255, 255, 255, 0.08))",
                        color:
                          "var(--commercial-component-secondary-button-text-default, #0f1419)",
                      },
                    },
                    "申请退票",
                  ),
                  a.createElement(
                    ed.A,
                    {
                      type: "primary",
                      onClick: () => {
                        onUpdateInvoice?.("");
                        B({
                          action: eo.S1.ClickInvoiceAgain,
                          current_page: eo.YI.InvoiceDetailPage,
                        });
                      },
                      style: {
                        background:
                          "var(--commercial-component-secondary-button-bg-default, rgba(255, 255, 255, 0.08))",
                        color:
                          "var(--commercial-component-secondary-button-text-default, #0f1419)",
                      },
                    },
                    "重新开票",
                  ),
                  a.createElement(
                    ed.A,
                    {
                      type: "primary",
                      loading: submitting,
                      onClick: () => {
                        setJ(true);
                        B({
                          action: eo.S1.ClickSendAgain,
                          current_page: eo.YI.InvoiceDetailPage,
                        });
                      },
                      style: {
                        background:
                          "var(--commercial-component-primary-button-bg-default)",
                        color:
                          "var(--commercial-component-primary-button-text-default, #000)",
                      },
                    },
                    "再次发送至邮箱",
                  ),
                )
              : null,
            eo.Sx.failed === initialData?.invoiceStatus ||
              eo.Sx.refunded === initialData?.invoiceStatus
              ? a.createElement(
                  ed.A,
                  {
                    type: "primary",
                    onClick: () => {
                      onUpdateInvoice?.(M);
                      B({
                        action: eo.S1.ClickInvoiceAgain,
                        current_page: eo.YI.InvoiceDetailPage,
                      });
                    },
                    style: {
                      background:
                        "var(--commercial-component-secondary-button-bg-default, rgba(255, 255, 255, 0.08))",
                      color:
                        "var(--commercial-component-secondary-button-text-default, #0f1419)",
                    },
                  },
                  "申请开票",
                )
              : null,
          ),
        )
      : a.createElement(
          "div",
          {
            className: "invoice-pc-preview-footer",
            style: {
              justifyContent: "space-between",
            },
          },
          a.createElement("div", {
            className: "footer-mask",
          }),
          a.createElement(
            "div",
            {
              className: "agreement",
            },
            a.createElement(
              ex.A,
              {
                checked: I,
                onChange: (e) => {
                  setI(e);
                  B({
                    action: eo.S1.ClickAgree,
                  });
                },
              },
              a.createElement("span", null, "我已阅读并同意"),
            ),
            a.createElement(
              "span",
              {
                className: "agreement-link",
                onClick: () => {
                  if (onAgreementClick) {
                    onAgreementClick();
                  } else {
                    onLinkClick?.(ei);
                  }
                },
              },
              "《增值税电子普通发票确认书》",
            ),
          ),
          a.createElement(
            "div",
            {
              className: "actions",
            },
            a.createElement(
              ed.A,
              {
                type: "primary",
                onClick: () => {
                  onBack?.();
                  B({
                    action: eo.S1.ClickChangeAgain,
                  });
                },
                style: {
                  background:
                    "var(--commercial-component-secondary-button-bg-default, rgba(255, 255, 255, 0.08))",
                  color:
                    "var(--commercial-component-secondary-button-text-default, #0f1419)",
                },
              },
              "返回修改",
            ),
            a.createElement(
              ed.A,
              {
                type: "primary",
                loading: submitting,
                onClick: () => {
                  B({
                    action: eo.S1.ClickInvoiceConfirm,
                  });
                  if (I) {
                    if (onSubmit && initialData) {
                      onSubmit(initialData);
                    }
                  } else {
                    es.A.warning({
                      content: a.createElement(
                        "span",
                        {
                          style: {
                            color: "var(--commercial-text-primary, #fff)",
                          },
                        },
                        "请先阅读并勾选确认书",
                      ),
                      style: {
                        backgroundColor: "var(--commercial-bg-page, #1f1f1f)",
                        border: 0,
                      },
                    });
                  }
                },
                style: {
                  background:
                    "var(--commercial-component-primary-button-bg-default)",
                  color:
                    "var(--commercial-component-primary-button-text-default, #000)",
                },
              },
              "确认开票",
            ),
          ),
        ),
    a.createElement(EIComponent, {
      visible: j,
      initialEmail: initialData?.email || "",
      onCancel: () => setJ(false),
      onOk: (e) => {
        onReSendInvoice?.(e);
        setJ(false);
      },
      loading: submitting,
      onSendLog,
    }),
    a.createElement(EOComponent, {
      visible: P,
      onOk: () => {
        onApplyRefundInvoice?.(M);
        setP(false);
      },
      onCancel: () => {
        setP(false);
      },
      onSendLog,
    }),
  );
};
const eU = require("./module-QV_2.js");
let eq = 0;
export let g1 = ({ theme, themeData, children }) => {
  let oRef = a.useRef("");
  if (!oRef.current) {
    oRef.current = `commercial-dynamic-theme-${Date.now().toString(36)}-${++eq}`;
  }
  a.useEffect(() => {
    let r;
    let oRef_current = oRef.current;
    let i = document.getElementById(oRef_current);
    if (!i) {
      i = document.createElement("style");
      i.id = oRef_current;
      document.head.appendChild(i);
    }
    r = theme === "light" ? eU.t : eU.P;
    let n = themeData
      ? ((...e) => {
          let t = {
            colors: {},
          };
          e.forEach((e) => {
            if (e) {
              t.colors = {
                ...t.colors,
                ...(e.colors || {}),
              };
              if (e.spacing) {
                t.spacing = {
                  ...(t.spacing || {}),
                  ...e.spacing,
                };
              }
              if (e.typography) {
                t.typography = {
                  ...(t.typography || {}),
                  ...e.typography,
                };
              }
              if (e.shadows) {
                t.shadows = {
                  ...(t.shadows || {}),
                  ...e.shadows,
                };
              }
            }
          });
          return t;
        })(r, themeData)
      : r;
    let c = {};
    if (n.colors) {
      Object.entries(n.colors).forEach(([e, t]) => {
        c[`--commercial-${e}`] = t;
      });
    }
    if (n?.spacing) {
      Object.entries(n.spacing).forEach(([e, t]) => {
        c[`--commercial-${e}`] = t;
      });
    }
    let l = `
      body {
        ${Object.entries(c)
          .map(([e, t]) => `${e}: ${t};`)
          .join("\n")}
      }
    `;
    i.textContent = l;
    return () => {
      let e = document.getElementById(oRef_current);
      if (e && e.parentNode) {
        e.parentNode.removeChild(e);
      }
    };
  }, [themeData, theme]);
  return a.createElement(a.Fragment, null, children);
};
var eV = require("./module-Cge.js");
