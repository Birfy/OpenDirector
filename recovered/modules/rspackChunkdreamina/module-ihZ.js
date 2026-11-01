import r from "yMd";
const a = new Set([
  r.ce.Text2Image,
  r.ce.Blend,
  r.ce.SuperDefinition,
  r.ce.SuperResolution,
  r.ce.ProHD,
  r.ce.InPaint,
  r.ce.OutPaint,
  r.ce.InPaintRemove,
  r.ce.ViewControl,
]);
export var F = (e) => e !== undefined && a.has(e);
