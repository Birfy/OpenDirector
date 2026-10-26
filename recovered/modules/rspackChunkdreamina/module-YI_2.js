export function h(e) {
  return (e == null ? undefined : e.uid) === "-1";
}
export function w(e) {
  if (h(e)) {
    return "official";
  }
  return "mine";
}
