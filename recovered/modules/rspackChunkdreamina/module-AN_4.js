export default function (e, t) {
  try {
    if (arguments.length == 1) {
      console.error(e);
    } else {
      console.error(e, t);
    }
  } catch (e) {}
}
