export default function (r, t) {
  try {
    if (arguments.length == 1) {
      console.error(r);
    } else {
      console.error(r, t);
    }
  } catch (r) {}
}
