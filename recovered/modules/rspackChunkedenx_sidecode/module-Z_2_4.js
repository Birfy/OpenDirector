export default function (t) {
  try {
    return String(t);
  } catch (t) {
    return "Object";
  }
}
