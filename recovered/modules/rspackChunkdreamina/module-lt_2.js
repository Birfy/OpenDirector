export function I(e) {
  return e.flatMap((e) => {
    if (e.type === "subject" && "subject" in e) {
      return [e.subject];
    }
    return [];
  });
}
