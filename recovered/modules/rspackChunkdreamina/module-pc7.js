export function N(t, e) {
  const i = e.trim();
  if (i) {
    return t.filter((t) => t.name.includes(i));
  }
  return [...t];
}
