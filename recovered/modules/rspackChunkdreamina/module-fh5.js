import "yS";
import t from "gL";
import n from "Qey";
export function e() {
  const e = Promise.withResolvers();
  t.A.confirm({
    title: n.Ay.t(
      "web_generator_popup_title_paste_replace",
      {},
      "replace image",
    ),
    content: n.Ay.t(
      "web_generator_paste_will_replace_current_image",
      {},
      "This will replace the uploaded reference image.",
    ),
    onOk: () => {
      e.resolve(true);
    },
    onCancel: () => {
      e.resolve(false);
    },
  });
  return e.promise;
}
