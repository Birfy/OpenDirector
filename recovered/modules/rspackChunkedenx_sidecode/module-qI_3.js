export default function (t, r) {
  try {
    if (arguments.length == 1) {
      console.error(t);
    } else {
      console.error(t, r);
    }
  } catch (t) {}
}
