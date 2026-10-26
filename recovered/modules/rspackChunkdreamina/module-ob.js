export default function (e) {
  const r = Math.round(e);
  if (r < 0) {
    return 0;
  }
  if (r > 255) {
    return 255;
  }
  return 255 & r;
}
