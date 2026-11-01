export function q(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "type" in e &&
    ("text" in e || "title" in e)
  );
}
