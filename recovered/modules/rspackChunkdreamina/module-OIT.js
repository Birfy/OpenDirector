export function c(e) {
  if (e) {
    try {
      const t = JSON.parse(e);
      if (
        typeof t !== "object" ||
        t === null ||
        !("crowd_test_model_req_key" in t)
      ) {
        return;
      }
      const i = t.crowd_test_model_req_key;
      if (typeof i === "string" && i.trim()) {
        return i;
      }
      return undefined;
    } catch (e) {
      return;
    }
  }
}
