import { s } from "./module-gB6.js";
import { k } from "./module-ZnH.js";
import { q } from "./module-qxT.js";
export function m(t, e) {
  let i;
  let o;
  const l = {};
  l.title = e.commonAttr.title;
  l.authorId = (i = e.author) == null ? undefined : i.uid;
  l.isHideReference = q(
    (o = e.aigcImageParams) == null ? undefined : o.hideRefImages,
  );
  l.activityId = k();
  l.templateId = e.id;
  l.templateTypeId = s(e);
  t.setParams(l);
}
