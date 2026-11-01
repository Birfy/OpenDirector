import r from "xi";
export function k(e) {
  try {
    const t = JSON.parse(e != null ? e : "[]").prompts;
    if (Array.isArray(t)) {
      return t;
    }
    return [];
  } catch (error) {
    r.V.error("extractGeneratePrompts", error);
    return [];
  }
}
