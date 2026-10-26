import t from "NY";
import n from "jqd";
export function M(e) {
  return t._(function* () {
    try {
      (yield e.getInstance()).contentGeneratorManager.activateContentGenerator();
    } catch (e) {
      n.V.error("Failed to activate content generator");
    }
  })();
}
