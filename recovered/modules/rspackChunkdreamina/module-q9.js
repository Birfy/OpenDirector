import r from "NY";
import n from "oa";
import i from "bk";
import s from "qa";
import o from "z8";
import l from "bT";
import c from "wF";
import d from "Kt";
import u from "Dla";
import m from "oKY";
import p from "YK2";
import h from "uW5";
import * as g from "./module-Bdo_3.js";
export var E = l.memo(
  l.forwardRef(function (e, ref) {
    const { label, url, dragging, onClick } = e;
    const _ = s._(e, ["label", "url", "dragging", "onClick"]);
    const containerService = c.h(d._);
    const [popupVisible, setPopupVisible] = l.useState(false);
    l.useEffect(() => {
      h.y();
    }, []);
    const icon = l.useMemo(() => o.jsx(g.a, {}), []);
    const content = l.useMemo(
      () =>
        o.jsx(h.f, {
          label,
          url,
        }),
      [label, url],
    );
    const N = l.useCallback(
      () =>
        r._(function* () {
          setPopupVisible(false);
          if (url) {
            yield ((e) => {
              const { containerService, url } = e;
              return u.H(containerService, {
                items: [
                  {
                    type: "docx",
                    url,
                  },
                ],
              });
            })({
              containerService,
              url,
            });
          }
        })(),
      [containerService, url],
    );
    const onClick_1 = l.useCallback(
      (e) => {
        if (onClick != null) {
          onClick(e);
        }
        N();
      },
      [onClick, N],
    );
    return o.jsx(
      p.n,
      i._(
        n._(
          {
            className: "popover-oG1m6j",
            disabled: !url,
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
          children: o.jsx(
            m.m,
            i._(
              n._(
                {
                  ref,
                  icon,
                },
                _,
              ),
              {
                label,
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
