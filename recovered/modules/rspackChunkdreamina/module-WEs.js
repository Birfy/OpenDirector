import r from "oa";
import n from "bk";
import i from "qa";
import s from "z8";
import o from "bT";
import l from "wF";
import c from "Kt";
import { K } from "./module-Peq.js";
import u from "oKY";
import m from "YK2";
import p from "tp";
import * as h from "./module-Z7a.js";
export var N = o.memo(
  o.forwardRef(function (e, ref) {
    const {
      url,
      coverUrl,
      width,
      height,
      duration,
      hidePreviewLabel = false,
      hoverPreviewDisabled = false,
      label,
      size = "default",
      dragging,
      onClick,
    } = e;
    const N = i._(e, [
      "url",
      "coverUrl",
      "width",
      "height",
      "duration",
      "hidePreviewLabel",
      "hoverPreviewDisabled",
      "label",
      "size",
      "dragging",
      "onClick",
    ]);
    const containerService = l.h(c._);
    const [popupVisible, setPopupVisible] = o.useState(false);
    const content = o.useMemo(
      () =>
        s.jsx(p.w, {
          url,
          coverUrl,
          width,
          height,
          duration,
          label: hidePreviewLabel ? undefined : label,
        }),
      [url, coverUrl, width, height, duration, label, hidePreviewLabel],
    );
    const icon = o.useMemo(
      () =>
        s.jsx(h.d, {
          originUrl: url,
          coverUrl,
          size,
        }),
      [url, coverUrl, size],
    );
    const onClick_1 = o.useCallback(
      (e) => {
        if (onClick != null) {
          onClick(e);
        }
        setPopupVisible(false);
        if (!e.defaultPrevented && url) {
          K({
            containerService,
            videoInfo: {
              url,
              width,
              height,
            },
          });
        }
      },
      [containerService, url, width, height, onClick],
    );
    return s.jsx(
      m.n,
      n._(
        r._(
          {
            className: "popover-n0Kk6l",
            disabled: !url || hoverPreviewDisabled,
            popupVisible,
            onVisibleChange: setPopupVisible,
          },
          dragging
            ? {
                popupVisible: false,
              }
            : null,
        ),
        {
          content,
          children: s.jsx(
            u.m,
            n._(
              r._(
                {
                  ref,
                  icon,
                },
                N,
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
