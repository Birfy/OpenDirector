export default function (J) {
  try {
    return String(J);
  } catch (J) {
    return "Object";
  }
}
