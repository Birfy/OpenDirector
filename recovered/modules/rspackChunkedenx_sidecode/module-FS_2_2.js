export default function (J) {
  try {
    return {
      error: false,
      value: J(),
    };
  } catch (value) {
    return {
      error: true,
      value,
    };
  }
}
