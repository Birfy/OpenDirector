export default function (t) {
  const r = Math.round(t);
  if (r < 0) {
    return 0;
  }
  if (r > 255) {
    return 255;
  }
  return 255 & r;
}
