import a from "oa";
import r from "bk";
import o from "qa";
import i from "z8";
import "Vx";
import s from "Ix";
import l from "bT";
import c from "ED";
import d from "Lt";
import u from "Qey";
import p from "yw";
import m from "Du8";
import v from "xm3";
import h from "wF";
import f from "lBB";
import x from "ET";
import { a as a_1 } from "./module-ByT.js";
import g from "IfdP";
import b from "SUV";
import j from "Yjo";
import imageUrl from "JONF";
import animationUrl from "UiM";
import M from "LVe";
const A = l.memo(function (e) {
  const title = l.useMemo(
    () => u.Ay.t("video_omni_reference_image_ref", {}, "引用参考"),
    [],
  );
  const description = l.useMemo(
    () =>
      u.Ay.t(
        "video_omni_reference_image_ref_desc",
        {},
        "选择参考，可增强视频生成的参考效果",
      ),
    [],
  );
  return i.jsx(
    M.K,
    a._(
      {
        imageUrl,
        animationUrl,
        title,
        description,
      },
      e,
    ),
  );
});
export var z = c.PA(function (e) {
  const { entry = "toolbar", size, onVisibleChange } = e;
  const y = o._(e, ["entry", "size", "onVisibleChange"]);
  const { appearance } = l.useContext(m.R);
  const M = g.n();
  const { videoGeneratorManager, contentGeneratorManager } = h.h(v.V);
  const {
    data: { isMentionButtonBadgeDismissed },
    dismissMentionButtonBadge,
  } = contentGeneratorManager;
  const { featureManager, referenceMentionManager } = videoGeneratorManager;
  const {
    data: { isOmniReferenceLikeEngaged },
  } = featureManager;
  const options = a_1(referenceMentionManager);
  const [F, setF] = l.useState(false);
  const onVisibleChange_1 = l.useCallback(
    (e) => {
      if (onVisibleChange != null) {
        onVisibleChange(e);
      }
      setF(e);
      if (e) {
        dismissMentionButtonBadge();
        referenceMentionManager.openPanel({
          entry,
        });
      }
    },
    [
      onVisibleChange,
      dismissMentionButtonBadge,
      referenceMentionManager,
      entry,
    ],
  );
  const onInsertOption = l.useCallback(
    (e) => {
      referenceMentionManager.insertOption(e, {
        entry,
      });
    },
    [referenceMentionManager, entry],
  );
  const content = l.useMemo(
    () => u.Ay.t("video_omni_reference_image_ref", {}, "引用参考"),
    [],
  );
  const icon = l.useMemo(() => {
    if (d.f(appearance) && !isMentionButtonBadgeDismissed) {
      return i.jsx(p.X7o, {
        className: j.A.firstUseIcon,
        size: 16,
      });
    }
    return i.jsx(p.jHH, {
      size: 16,
    });
  }, [appearance, isMentionButtonBadgeDismissed]);
  const triggerElement = l.useMemo(
    () =>
      i.jsx(b.y, {
        dot: true,
        count: d.f(appearance) || isMentionButtonBadgeDismissed ? 0 : 1,
        children: i.jsx(f.E, {
          icon,
          size,
        }),
      }),
    [appearance, icon, size, isMentionButtonBadgeDismissed],
  );
  if (M && isOmniReferenceLikeEngaged) {
    return i.jsx(
      A,
      r._(
        a._(
          {
            disabled: isMentionButtonBadgeDismissed,
          },
          F
            ? {
                popupVisible: false,
              }
            : null,
        ),
        {
          children: i.jsx(
            s.A,
            r._(
              a._(
                {
                  content,
                  disabled: !isMentionButtonBadgeDismissed,
                },
                F
                  ? {
                      popupVisible: false,
                    }
                  : null,
              ),
              {
                children: i.jsx(
                  x.o,
                  r._(
                    a._(
                      {
                        triggerElement,
                      },
                      y,
                    ),
                    {
                      options,
                      onInsertOption,
                      onVisibleChange: onVisibleChange_1,
                    },
                  ),
                ),
              },
            ),
          ),
        },
      ),
    );
  }
  return null;
});
