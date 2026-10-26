export default function (t) {
  const e = Math.round(t);
  if (e < 0) {
    return 0;
  }
  if (e > 255) {
    return 255;
  }
  return 255 & e;
}
