import r from "oa";
import n from "bk";
import i from "qa";
import s from "z8";
import o from "bT";
import l from "wF";
import c from "Kt";
import d from "zHy";
import u from "oKY";
import m from "YK2";
import p from "fjo";
import { R as R_1 } from "./module-Zb_3.js";
export var V = o.memo(
  o.forwardRef(function (e, ref) {
    const {
      url,
      width,
      height,
      label,
      size = "default",
      resolutionUrlMap,
      cacheKey,
      hidePreviewLabel = false,
      loadingSkeleton = false,
      hoverPreviewDisabled = false,
      dragging,
      onClick,
    } = e;
    const T = i._(e, [
      "url",
      "width",
      "height",
      "label",
      "size",
      "resolutionUrlMap",
      "cacheKey",
      "hidePreviewLabel",
      "loadingSkeleton",
      "hoverPreviewDisabled",
      "dragging",
      "onClick",
    ]);
    const containerService = l.h(c._);
    const [popupVisible, setPopupVisible] = o.useState(false);
    const [$, set$] = o.useState(width && height ? width / height : 1);
    const content = o.useMemo(
      () =>
        s.jsx(p.C, {
          url,
          aspectRatio: $,
          label: hidePreviewLabel ? undefined : label,
          resolutionUrlMap,
          cacheKey,
        }),
      [url, $, label, resolutionUrlMap, cacheKey, hidePreviewLabel],
    );
    const icon = o.useMemo(
      () =>
        s.jsx(R_1, {
          url,
          resolutionUrlMap,
          cacheKey,
          size,
          onAspectRatioChange: set$,
          loadingSkeleton,
        }),
      [url, resolutionUrlMap, cacheKey, size, loadingSkeleton],
    );
    const onClick_1 = o.useCallback(
      (e) => {
        if (onClick != null) {
          onClick(e);
        }
        setPopupVisible(false);
        if (!e.defaultPrevented && url) {
          d.K({
            containerService,
            imageInfos: [
              {
                url,
                width,
                height,
              },
            ],
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
            className: "popover-EgWPaK",
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
                T,
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
