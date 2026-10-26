export function Q(e) {
  if (e.includes(".")) {
    let t;
    return (
      ((t = e.split(".").pop()) == null ? undefined : t.toLowerCase()) ||
      undefined
    );
  }
}
