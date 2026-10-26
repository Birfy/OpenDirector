export function a(e) {
  switch (e) {
    case "agentic":
      return "agent_mode";
    case "image":
      return "aigc_image";
    case "video":
      return "aigc_video";
    case "digitalHuman":
      return "lip_sync";
    case "actionCopy":
      return "video_action_driver";
    case "audio":
      return "aigc_audio";
    case "music":
      return "aigc_music";
    default:
      return;
  }
}
