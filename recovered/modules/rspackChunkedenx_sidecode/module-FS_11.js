export default function (r) {
  try {
    return {
      error: false,
      value: r(),
    };
  } catch (value) {
    return {
      error: true,
      value,
    };
  }
}
