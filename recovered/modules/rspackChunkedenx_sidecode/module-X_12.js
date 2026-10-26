export default function (r) {
  try {
    return !!r();
  } catch (r) {
    return true;
  }
}
