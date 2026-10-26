import r from "oa";
import n from "bk";
import i from "qa";
import s from "z8";
import o from "bT";
import l from "wF";
import c from "Kt";
import d from "Dla";
import u from "oKY";
import m from "YK2";
import p from "nmh";
import { Y } from "./module-HF_4.js";
var g = o.memo(
  o.forwardRef(function (e, ref) {
    const {
      url,
      duration,
      label,
      size = "default",
      dragging,
      onClick,
      action,
      hidePreviewLabel = false,
      hoverPreviewDisabled = false,
    } = e;
    const k = i._(e, [
      "url",
      "duration",
      "label",
      "size",
      "dragging",
      "onClick",
      "action",
      "hidePreviewLabel",
      "hoverPreviewDisabled",
    ]);
    const containerService = l.h(c._);
    const [popupVisible, setPopupVisible] = o.useState(false);
    const content = o.useMemo(
      () =>
        s.jsx(p.D, {
          url,
          duration,
          label: hidePreviewLabel ? undefined : label,
          action,
        }),
      [url, duration, label, action, hidePreviewLabel],
    );
    const icon = o.useMemo(
      () =>
        s.jsx(Y, {
          size,
        }),
      [size],
    );
    const onClick_1 = o.useCallback(
      (e) => {
        if (onClick != null) {
          onClick(e);
        }
        setPopupVisible(false);
        if (!e.defaultPrevented && url) {
          ((e) => {
            const {
              audioInfo: { url, duration, title },
              containerService,
            } = e;
            d.H(containerService, {
              items: [
                {
                  type: "audio",
                  url,
                  duration,
                  name: title,
                },
              ],
            });
          })({
            containerService,
            audioInfo: {
              url,
              duration: duration != null ? duration : 0,
              title: label,
            },
          });
        }
      },
      [containerService, url, duration, label, onClick],
    );
    return s.jsx(
      m.n,
      n._(
        r._(
          {
            className: "popover-UI825K",
            disabled: !url || hoverPreviewDisabled,
            popupVisible,
            onVisibleChange: setPopupVisible,
            content,
          },
          dragging
            ? {
                popupVisible: false,
              }
            : null,
        ),
        {
          children: s.jsx(
            u.m,
            n._(
              r._(
                {
                  ref,
                  icon,
                },
                k,
              ),
              {
                label,
                size,
                dragging,
                onClick: onClick_1,
              },
            ),
          ),
        },
      ),
    );
  }),
);
export { g as i };
