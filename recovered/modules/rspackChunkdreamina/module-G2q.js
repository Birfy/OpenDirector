import a from "oa";
import r from "bk";
import i from "qa";
import o from "z8";
import "Vx";
import l from "Ix";
import s from "bT";
import c from "Qey";
import u from "yw";
import d from "Hr";
import m from "VYe";
import p from "oKY";
export var V = s.memo(
  s.forwardRef(function (e, ref) {
    const { label, layerId, canvasEditor, dragging, onClick } = e;
    const b = i._(e, [
      "label",
      "layerId",
      "canvasEditor",
      "dragging",
      "onClick",
    ]);
    const icon = s.useMemo(() => o.jsx(u.UVZ, {}), []);
    const y = m.gH();
    const content = s.useMemo(
      () =>
        o.jsx("div", {
          ref: y,
          className: "tooltip-content-X96brP",
          children: label,
        }),
      [y, label],
    );
    const onClick_1 = s.useCallback(
      (e) => {
        if (onClick != null) {
          onClick(e);
        }
        if (canvasEditor && layerId) {
          if (!canvasEditor.isWidgetExist(layerId)) {
            return void d.l.warning(c.Ay.t("web_canva_frame_already_deleted"));
          }
          canvasEditor.fitContent({
            ids: [layerId],
            autoCenter: true,
            autoScale: true,
          });
        }
      },
      [canvasEditor, layerId, onClick],
    );
    return o.jsx(
      l.A,
      r._(
        a._(
          {
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
            p.m,
            r._(
              a._(
                {
                  ref,
                  icon,
                },
                b,
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
