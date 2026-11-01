export default function (t, e) {
  try {
    if (arguments.length == 1) {
      console.error(t);
    } else {
      console.error(t, e);
    }
  } catch (t) {}
}
