export default function (e) {
  try {
    return !!e();
  } catch (e) {
    return true;
  }
}
