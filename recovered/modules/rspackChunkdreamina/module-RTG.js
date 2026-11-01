import a from "z8";
import r from "gG";
import i from "VtY";
import o from "IjA";
import { L } from "./module-IQF.js";
const onEdit = () => undefined;
export function s(e) {
  const { subject, disabled } = e;
  return a.jsx(L, {
    disabled,
    previewKey: r.K(subject),
    content: a.jsx(o.L, {
      subject,
      label: subject.content.name,
      editable: false,
      onEdit,
    }),
    children: a.jsx(i.T, {
      subject,
      disabled,
    }),
  });
}
