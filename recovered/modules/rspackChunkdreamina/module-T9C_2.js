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
import h from "Dc";
import * as g from "./module-UYh.js";
var v = l.memo(
  l.forwardRef(function (e, ref) {
    const { label, url, dragging, onClick } = e;
    const _ = s._(e, ["label", "url", "dragging", "onClick"]);
    const containerService = c.h(d._);
    const [popupVisible, setPopupVisible] = l.useState(false);
    l.useEffect(() => {
      h.u();
    }, []);
    const icon = l.useMemo(() => o.jsx(g.o, {}), []);
    const content = l.useMemo(
      () =>
        o.jsx(h.L, {
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
                    type: "pdf",
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
            className: "popover-FoRq7H",
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
export { v as u };
