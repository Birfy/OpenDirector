import a from "oa";
import o from "bk";
import i from "qa";
import r from "z8";
import "Vx";
import l from "Ix";
import s from "bT";
import c from "ED";
import u from "Lt";
import d from "Qey";
import m from "yw";
import p from "Du8";
import h from "xm3";
import _ from "wF";
import g from "lBB";
import v from "ET";
import x from "ByT";
import b from "IfdP";
import j from "SUV";
import y from "Yjo";
import animationUrl from "UiM";
import imageUrl from "JONF";
import k from "LVe";
const C = s.memo(function (e) {
  const title = s.useMemo(
    () => d.Ay.t("video_omni_reference_image_ref", {}, "引用参考"),
    [],
  );
  const description = s.useMemo(
    () =>
      d.Ay.t("image_prompt_atbutton_hover_tip", {}, "@参考内容，素材精准引用"),
    [],
  );
  return r.jsx(
    k.K,
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
export var U = c.PA(function (e) {
  const { entry = "toolbar", size, onVisibleChange } = e;
  const f = i._(e, ["entry", "size", "onVisibleChange"]);
  const { appearance } = s.useContext(p.R);
  const k = b.n();
  const { imageGeneratorManager, contentGeneratorManager } = _.h(h.V);
  const {
    data: { isMentionButtonBadgeDismissed },
    dismissMentionButtonBadge,
  } = contentGeneratorManager;
  const { unifiedEditManager, referenceMentionManager } = imageGeneratorManager;
  const { isModelSupportSubject } = unifiedEditManager;
  const options = x.a(referenceMentionManager);
  const [F, setF] = s.useState(false);
  const onVisibleChange_1 = s.useCallback(
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
      dismissMentionButtonBadge,
      onVisibleChange,
      referenceMentionManager,
      entry,
    ],
  );
  const onInsertOption = s.useCallback(
    (e) => {
      referenceMentionManager.insertOption(e, {
        entry,
      });
    },
    [referenceMentionManager, entry],
  );
  const content = s.useMemo(
    () => d.Ay.t("video_omni_reference_image_ref", {}, "引用参考"),
    [],
  );
  const icon = s.useMemo(() => {
    if (u.f(appearance) && !isMentionButtonBadgeDismissed) {
      return r.jsx(m.X7o, {
        className: y.A.firstUseIcon,
        size: 16,
      });
    }
    return r.jsx(m.jHH, {
      size: 16,
    });
  }, [appearance, isMentionButtonBadgeDismissed]);
  const triggerElement = s.useMemo(
    () =>
      r.jsx(j.y, {
        dot: true,
        count: u.f(appearance) || isMentionButtonBadgeDismissed ? 0 : 1,
        children: r.jsx(g.E, {
          icon,
          size,
        }),
      }),
    [appearance, icon, size, isMentionButtonBadgeDismissed],
  );
  if (k && isModelSupportSubject) {
    return r.jsx(
      C,
      o._(
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
          children: r.jsx(
            l.A,
            o._(
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
                children: r.jsx(
                  v.o,
                  o._(
                    a._(
                      {
                        triggerElement,
                      },
                      f,
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
