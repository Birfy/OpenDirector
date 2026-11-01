import a from "f3";
export function P(t) {
  return t.source === a.fc.Platform || t.isContentAccessible;
}
