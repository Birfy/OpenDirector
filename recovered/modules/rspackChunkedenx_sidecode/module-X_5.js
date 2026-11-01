export default function (t) {
  try {
    return !!t();
  } catch (t) {
    return true;
  }
}
