import a from "oa";
import r from "bk";
import i from "qa";
import o from "z8";
import l from "bT";
import s from "Qey";
import c from "yw";
import u from "Hr";
import d from "oKY";
export var Z = l.memo(
  l.forwardRef(function (e, ref) {
    const { layerId, canvasEditor, onClick } = e;
    const v = i._(e, ["layerId", "canvasEditor", "onClick"]);
    const icon = l.useMemo(() => o.jsx(c.pmH, {}), []);
    const onClick_1 = l.useCallback(
      (e) => {
        if (onClick != null) {
          onClick(e);
        }
        if (canvasEditor && layerId) {
          if (!canvasEditor.isWidgetExist(layerId)) {
            return void u.l.warning(s.Ay.t("web_canva_frame_already_deleted"));
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
      d.m,
      r._(
        a._(
          {
            ref,
            icon,
          },
          v,
        ),
        {
          onClick: onClick_1,
        },
      ),
    );
  }),
);
