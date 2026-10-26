import r from "yMd";
import { Y } from "./module-UHP.js";
import n from "aS";
export function Q(e) {
  if (Y(e)) {
    return false;
  }
  const { generateType } = e;
  return !(
    ![
      r.ce.LipSync,
      r.ce.Text2Video,
      r.ce.CreationAgent,
      r.ce.VideoTemplate,
      r.ce.Text2Image,
      r.ce.Text2Song,
      r.ce.Blend,
      r.ce.Text2Instrumental,
    ].includes(generateType) ||
    (n.g(e) && e.processFlows.length > 1)
  );
}
