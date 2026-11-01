import n from "oa";
import a from "bk";
import o from "qa";
import i from "z8";
import _c from "xb";
import l from "Qey";
import u from "aN";
import d from "G72";
const m = {
  home: {
    key: "web_home_generate_tagline_common",
    fallback: "Generate <highlight>anything</highlight> you imagine",
  },
  image: {
    key: "web_sidebar_entry_image_tagline",
    fallback: "Bring your <highlight>designs</highlight> to life",
  },
  video: {
    key: "web_sidebar_entry_video_tagline",
    fallback: "Direct your next <highlight>video</highlight>",
  },
  agentic: {
    key: "web_sidebar_entry_agent_tagline",
    fallback: "<highlight>Collaborate</highlight> on any idea",
  },
  canvas: {
    key: "web_mainframe_home_canvas_headline",
    fallback: "Your creative <highlight>workspace</highlight>",
  },
};
export function v(e) {
  const { scene, title, accentAnimationEnabled = true } = e;
  const p = o._(e, ["scene", "title", "accentAnimationEnabled"]);
  const h = m[scene];
  return i.jsx(
    u.Y,
    a._(n._({}, p), {
      mode: scene === "canvas" ? "canvas" : "chat",
      title:
        title !== undefined
          ? title
          : l.Ay.t(
              h.key,
              {
                highlight: (children) =>
                  i.jsx(
                    "span",
                    {
                      className: _c(
                        d.A.accent,
                        !accentAnimationEnabled && d.A.accentStatic,
                      ),
                      children,
                    },
                    "".concat(scene, "-highlight"),
                  ),
              },
              h.fallback,
            ),
    }),
  );
}
