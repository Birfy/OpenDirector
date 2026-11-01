export default function (t) {
  try {
    return {
      error: false,
      value: t(),
    };
  } catch (value) {
    return {
      error: true,
      value,
    };
  }
}
