export default function (r) {
  try {
    return String(r);
  } catch (r) {
    return "Object";
  }
}
