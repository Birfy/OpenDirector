import i from "Qey";
import r from "K8";
const a = /(ftp|http|https):\/\/[^ "]+/;
export function f(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    allowEmpty = false,
    maxLength,
    allowUrls = false,
    emptyPromptErrorMessage,
    maxLengthExceededErrorMessage,
  } = t;
  if (!allowEmpty && !e.trim()) {
    return r.xz(
      -1,
      emptyPromptErrorMessage != null
        ? emptyPromptErrorMessage
        : i.Ay.t("web_cant_generate_toast", {}, "请输入提示词"),
    );
  }
  if (typeof maxLength === "number" && [...e].length > maxLength) {
    const d =
      maxLengthExceededErrorMessage != null
        ? maxLengthExceededErrorMessage
        : i.Ay.t(
            "web_new_image_paint_prompt_length_limit",
            {
              number: maxLength,
            },
            "文字描述超过了 ".concat(maxLength, " 字"),
          );
    return r.xz(-1, d);
  }
  if (!allowUrls && a.test(e)) {
    return r.xz(
      -1,
      i.Ay.t(
        "web_input_content_try",
        {},
        "当前暂不支持url链接输入，请修改后重试",
      ),
    );
  }
  return r.nj();
}
