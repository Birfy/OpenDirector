import i from "Ut";
import { zQ } from "./module-fRi.js";
export function E(e) {
  let t;
  const components = [];
  if (
    e.processFlows.some((e) =>
      e.curProcessFlows.includes(i.DAVideoProcessType.SubtitleErase),
    )
  ) {
    return {
      hasProcess: true,
      components,
    };
  }
  for (const a of zQ(e.draftContent)) {
    components.push(a);
    if (
      a.processType === i.DAVideoProcessType.SubtitleErase ||
      ((t = a.abilities) == null ? undefined : t.subtitleErase)
    ) {
      return {
        hasProcess: true,
        components,
      };
    }
  }
  return {
    hasProcess: false,
    components,
  };
}
function o(e) {
  try {
    return E(e).hasProcess;
  } catch (e) {
    return false;
  }
}
export { o };
