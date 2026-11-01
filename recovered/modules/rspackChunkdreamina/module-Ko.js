import a from "M8X";
import r from "aEB";
import { I } from "./module-vQi.js";
export function g(e, t, n) {
  const l = a.cQ(e, r.Ot);
  const acceptedFiles = [];
  const rejectionMessages = [];
  const s = new Set();
  for (const u of t) {
    const d = I(u, n);
    if (d.ok) {
      acceptedFiles.push(u);
      continue;
    }
    if (!s.has(d.msg)) {
      s.add(d.msg);
      rejectionMessages.push(d.msg);
    }
  }
  for (const m of rejectionMessages) {
    l.warning(m);
  }
  return {
    acceptedFiles,
    rejectionMessages,
  };
}
