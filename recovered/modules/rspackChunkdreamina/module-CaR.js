import a from "bT";
import o from "TK";
import i from "VA";
import l from "wF";
export var qh = {
  Control: "v0",
  TextGuide: "v1",
  CardGuide: "v2",
};
const c = new Set(Object.values(qh));
const u = new Set([
  "super_resolute",
  "pro_hd",
  "multi_angle",
  "super_definition",
  "reprompt",
  "regenerate",
  "generate_video",
  "image_post_edit",
  "inpaint",
  "smart_edit_v2",
  "outpaint",
  "in_paint_remove",
  "lip_sync",
  "continue_generate",
  "image_edit",
  "lip_resync",
  "insert_frame",
  "super_resolution",
  "continuation",
  "video_bgm",
  "audio_effect",
  "video_edit",
  "partial_reshoot",
]);
function d(e) {
  if (typeof e === "string" && c.has(e)) {
    return e;
  }
  return "v0";
}
export function h4(e) {
  return e === "v0";
}
export function mo(e, n) {
  return !!n && !h4(e);
}
export function fc(e) {
  return typeof e === "string" && u.has(e);
}
export function dK() {
  const e =
    !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
  const n = l.h(o.a);
  const [t, setT] = a.useState(() => {
    if (e) {
      return d(
        n.abTestManager.getAbTestValueSync(
          i.ob.DreaminaWebCommerceInterceptFlow,
          "v0",
        ),
      );
    }
    return "v0";
  });
  a.useEffect(() => {
    if (e) {
      var t = false;
      n.abTestManager
        .getAbTestValue(i.ob.DreaminaWebCommerceInterceptFlow, "v0")
        .then((e) => {
          if (!t) {
            setT(d(e));
          }
        })
        .catch(() => {
          if (!t) {
            setT("v0");
          }
        });
      return () => {
        t = true;
      };
    }
  }, [n, e]);
  return t;
}
export function AN() {
  const e = dK();
  return a.useMemo(() => {
    var n = !h4(e);
    return {
      hideVipHoverGuide: n,
      reportParam: {
        enableSubscriptionGuide: n,
      },
    };
  }, [e]);
}
