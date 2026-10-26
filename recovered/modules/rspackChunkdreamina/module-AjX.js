import a from "z8";
import { R } from "./module-djg.js";
import i from "EHH";
import { L } from "./module-IQF.js";
export function W(e) {
  const { option } = e;
  const resource = option.extra.resource;
  return a.jsx(L, {
    className: "popover-KpFfm7",
    disabled: !!option.disabled || !resource.url,
    previewKey: ""
      .concat(resource.id, ":")
      .concat(resource.type, ":")
      .concat(resource.url),
    content: a.jsx(R, {
      item: resource,
      label: resource.name || option.label,
    }),
    children: a.jsx(i.n, {
      option,
    }),
  });
}
