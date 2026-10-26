import n from "oa";
import r from "bk";
import a from "yMd";
import o from "hP";
import s from "gu";
import l from "fF";
const c = new Set([
  s.Sk.BasicVideoGenerateButton,
  s.Sk.VideoRegenerateButton,
  s.Sk.VideoEdit,
  s.Sk.VideoExtend,
]);
const u = new Set([s.Sk.ImageBasicGenerate, s.Sk.ImageRetryButton]);
export function eB(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : new Set();
  return Object.fromEntries(
    Object.entries(e).filter((e) => {
      var [i, n] = e;
      return n != null && (n !== "" || t.has(i));
    }),
  );
}
export function hX(e) {
  if (e.includes("/assets-canvas")) {
    return "canvas_homepage";
  }
  if (e.includes("/canvas")) {
    return "infinite_canvas";
  }
  if (e.includes("/octo")) {
    return "octo";
  }
  if (e.includes("/generate")) {
    return "generation";
  }
  if (e.includes("/asset")) {
    return "assets";
  }
  if (e.includes("/work-detail") || e === "/" || e.endsWith("/home")) {
    return "explore";
  }
}
function g(sceneOptions) {
  if (sceneOptions && "reportParams" in sceneOptions) {
    const { reportParams } = sceneOptions;
    if (reportParams && typeof reportParams === "object") {
      return reportParams;
    }
    return undefined;
  }
}
export function o3(e) {
  let t;
  let i;
  let N;
  let p;
  const {
    scene,
    sceneOptions,
    pathname = typeof location === "undefined" ? "" : location.pathname,
  } = e;
  const v =
    sceneOptions && "type" in sceneOptions && "scene" in sceneOptions
      ? sceneOptions
      : undefined;
  const I =
    (i = (t = g(sceneOptions)) == null ? undefined : t.cashierBusinessExtra) &&
    typeof i === "object"
      ? i
      : {};
  const page = (N = I.page) != null ? N : hX(pathname);
  const agentMode =
    I.is_agent_mode !== undefined
      ? I.is_agent_mode === 1
      : scene === s.Sk.AgenticGetCredit ||
        ((v == null ? undefined : v.type) === l.AZ.Image &&
          v.modelSwitchSource === l.AL.Agentic);
  const T = ((e) => {
    const { scene, page, agentMode, templateMode } = e;
    if (scene === s.Sk.Download || scene === s.Sk.ImageDownload) {
      return o.M.RemoveWatermark;
    }
    if (scene === s.Sk.QueueSpeed) {
      return o.M.QueueSpeed;
    }
    if (page === "infinite_canvas" || page === "canvas_homepage") {
      return o.M.Canva;
    }
    if (page === "octo") {
      return o.M.Octo;
    }
    if (agentMode) {
      return o.M.Agent;
    }
    if (templateMode) {
      if (scene === s.Sk.LipSync) {
        return o.M.TemplateCharacter;
      }
      if (scene === s.Sk.ActionCopy) {
        return o.M.TemplateVideoActionDriver;
      }
      if (c.has(scene)) {
        return o.M.TemplateVideo;
      }
      if (u.has(scene)) {
        return o.M.TemplateImage;
      }
      return undefined;
    }
    if (u.has(scene)) {
      return o.M.ToolImage;
    }
    if (c.has(scene)) {
      return o.M.ToolVideo;
    }
    if (scene === s.Sk.LipSync) {
      return o.M.Character;
    }
    if (scene === s.Sk.ActionCopy) {
      return o.M.VideoActionDriver;
    }
    if (scene === s.Sk.AudioTTSGenerate || scene === s.Sk.MusicBasicGenerate) {
      return o.M.AudioGeneration;
    }
  })({
    scene,
    page,
    agentMode,
    templateMode: !!(I.template_id || I.reference_template_id),
  });
  return eB(
    r._(
      n._(
        {
          page,
          gen_mode:
            scene === s.Sk.ActionCopy
              ? "video_action_driver"
              : scene === s.Sk.MusicBasicGenerate
                ? "ai_music"
                : undefined,
          generate_type: ((e) => {
            if (e) {
              if (e.type === l.AZ.Image) {
                return e.generateType;
              }
              if (e.type === l.AZ.Audio) {
                return a.ce.TTSGenerateAudio;
              }
              if (e.type === l.AZ.Music) {
                return a.ce.Text2Song;
              }
            }
          })(v),
          is_agent_mode: +!!agentMode,
        },
        I,
      ),
      {
        tool_id: (p = I.tool_id) != null ? p : T,
      },
    ),
    scene === s.Sk.QueueSpeed ? new Set(["generate_id"]) : undefined,
  );
}
export function t8(e) {
  let t;
  let i;
  const { scene, sceneOptions, existingReportParam, pathname } = e;
  const l =
    existingReportParam == null
      ? undefined
      : existingReportParam.business_extra;
  const activity_id =
    typeof (existingReportParam == null
      ? undefined
      : existingReportParam.activity_id) === "string"
      ? existingReportParam.activity_id
      : typeof (i =
            (t = g(sceneOptions)) == null ? undefined : t.cashierActivityId) ===
          "string"
        ? i
        : undefined;
  return n._(
    {
      business_extra:
        typeof l === "string"
          ? l
          : JSON.stringify(
              o3({
                scene,
                sceneOptions,
                pathname,
              }),
            ),
    },
    activity_id
      ? {
          activity_id,
        }
      : {},
  );
}
export function Sh(e) {
  const { scene, sceneOptions, customReportParams, pathname } = e;
  return n._(
    {},
    customReportParams,
    t8({
      scene,
      sceneOptions,
      existingReportParam: customReportParams,
      pathname,
    }),
  );
}
