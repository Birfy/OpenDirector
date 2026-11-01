export default function (r) {
  const e = Math.round(r);
  if (e < 0) {
    return 0;
  }
  if (e > 255) {
    return 255;
  }
  return 255 & e;
}
