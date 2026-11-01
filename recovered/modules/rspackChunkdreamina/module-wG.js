export default function (e) {
  try {
    return {
      error: false,
      value: e(),
    };
  } catch (value) {
    return {
      error: true,
      value,
    };
  }
}
