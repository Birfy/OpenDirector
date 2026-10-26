export default function (t) {
  if (t === undefined) {
    throw ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }
  return t;
}
