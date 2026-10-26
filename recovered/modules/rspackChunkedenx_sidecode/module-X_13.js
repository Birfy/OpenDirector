export default function (J) {
  try {
    return !!J();
  } catch (J) {
    return true;
  }
}
