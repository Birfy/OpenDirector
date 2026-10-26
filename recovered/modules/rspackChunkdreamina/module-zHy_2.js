import a from "oa";
import t from "bk";
import i from "qa";
import o from "Dla";
export function K(e) {
  const {
    containerService,
    imageInfos,
    defaultValue,
    onIndexChange,
    wrapClassName,
    signal,
  } = e;
  const imagePreviewOptions = i._(e, [
    "containerService",
    "imageInfos",
    "defaultValue",
    "onIndexChange",
    "wrapClassName",
    "signal",
  ]);
  return o.H(containerService, {
    items: imageInfos.map((e) =>
      t._(a._({}, e), {
        type: "image",
      }),
    ),
    initialIndex: defaultValue,
    onIndexChange,
    className: wrapClassName,
    imagePreviewOptions,
    signal,
  });
}
