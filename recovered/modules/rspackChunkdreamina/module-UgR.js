import i from "zD";
import s from "gKw";
export function UY(e) {
  return !!e.creativeModelEnabled && (!!e.isCanvas || !s.F);
}
export function DC(e) {
  const t = [];
  if (e.searchEnabled) {
    t.push(i.tc);
  }
  if (UY(e)) {
    t.push(i.O_);
  }
  if (e.labEnabled) {
    t.push(i.GZ);
  }
  if (e.seedanceVideoCreationEnabled) {
    t.push(i.jd);
  }
  if (t.length > 0) {
    return t;
  }
}
export function Tj(e) {
  return DC({
    searchEnabled: e.searchEnabled,
    creativeModelEnabled: e.creativeModelEnabled,
    isCanvas: !!e.idModel.projectId,
    seedanceVideoCreationEnabled: e.seedanceVideoCreationEnabled,
  });
}
