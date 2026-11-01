export default function (e) {
  try {
    return String(e);
  } catch (e) {
    return "Object";
  }
}
