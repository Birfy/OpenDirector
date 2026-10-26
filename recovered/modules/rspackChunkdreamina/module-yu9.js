import a from "z8";
import { G } from "./module-Cl8.js";
import { P } from "./module-AyY.js";
let r;
function o(e) {
  const { source, errorCode } = e;
  const { entryRef, onEntryClick } = G({
    source,
    error_code: errorCode,
  });
  return a.jsx(P, {
    entryRef,
    onClick: onEntryClick,
  });
}
r = l || {};
r[(r.InputTextIpBlock = 2047)] = "InputTextIpBlock";
r[(r.InputImageCopyright = 2048)] = "InputImageCopyright";
r[(r.OutputImageCopyright = 2049)] = "OutputImageCopyright";
r[(r.InputTextCopyright = 2050)] = "InputTextCopyright";
r[(r.InputVideoCopyright = 2051)] = "InputVideoCopyright";
r[(r.OutputAudioCopyright = 2052)] = "OutputAudioCopyright";
r[(r.OutputVideoCopyright = 2053)] = "OutputVideoCopyright";
r[(r.OutputTextCopyright = 2054)] = "OutputTextCopyright";
r[(r.InputAudioCopyright = 2055)] = "InputAudioCopyright";
var l = r;
const c = new Set(Object.values(l).filter((e) => typeof e === "number"));
export function AC(e) {
  return e !== undefined && c.has(e);
}
export function YI(e) {
  const { errorCode, visible, source } = e;
  if (visible && errorCode !== undefined && AC(errorCode)) {
    return a.jsx(o, {
      source,
      errorCode,
    });
  }
  return null;
}
