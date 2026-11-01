export default function (J) {
  const Q = Math.round(J);
  if (Q < 0) {
    return 0;
  }
  if (Q > 255) {
    return 255;
  }
  return 255 & Q;
}
