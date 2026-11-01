import r from "oa";
import n from "bk";
import i from "qa";
import s from "z8";
import "yS";
import o from "gL";
import l from "pr";
import c from "Qey";
import _d from "xb";
import m from "yw";
import p from "wF";
import h from "e6r";
import g from "lq6";
import * as v from "./module-gQY.js";
import b from "bT";
import f from "WF";
const _ = b.memo(function (e) {
  const [t, setT] = b.useState();
  const r = p.h(f.z);
  b.useEffect(() => {
    var e = false;
    r.getInstance().then((t) => {
      if (!e) {
        setT(t);
      }
    });
    return () => {
      e = true;
    };
  }, [r]);
  return s.jsx("div", {
    className: "video-edit-modal-container-wpFbZV",
    children: t ? t.renderVideoEdit(e) : null,
  });
});
export function B(e) {
  const {
    containerService,
    onAfterClose,
    modalTitle,
    modalWidth = 800,
    maskClosable = false,
  } = e;
  const x = i._(e, [
    "containerService",
    "onAfterClose",
    "modalTitle",
    "modalWidth",
    "maskClosable",
  ]);
  const w = "editorContext" in x;
  var y = o.A.info({
    icon: null,
    title: s.jsx(p.Z, {
      instantiationService: containerService,
      children:
        modalTitle != null
          ? modalTitle
          : s.jsx(v.b, {
              title: g.X().title,
              description: c.Ay.t("web_edit_video_popup_desc"),
            }),
    }),
    style: {
      width: modalWidth,
      minHeight: 642,
    },
    footer: null,
    maskClosable,
    backspaceToExit: false,
    escToExit: false,
    focusLock: true,
    closeIcon: s.jsx(m.gzW, {
      role: "button",
      tabIndex: 0,
      "aria-label": c.Ay.t("dreamina_web_common_close"),
      onKeyDown: l.q,
      size: w ? 16 : 20,
    }),
    wrapClassName: _d("video-edit-modal-c5lHjm", {
      "video-edit-modal-advanced-edit-eYF7zt": w,
    }),
    afterClose: onAfterClose,
    content: s.jsx(p.Z, {
      instantiationService: containerService,
      children: s.jsx(h.B, {
        children: s.jsx(
          _,
          n._(r._({}, x), {
            onClose: () => {
              y.close();
            },
          }),
        ),
      }),
    }),
  });
  return y;
}
