import n from "oa";
import a from "bk";
import o from "Dm";
import { m } from "./module-vI1.js";
import { m as m_1 } from "./module-BUz.js";
import d from "HSE";
export function T(e) {
  o.X3(d.A(e.commonAttr.effectType), "data is not collection type");
  o.X3(e.collection, "collection is not exist");
  return a._(n._({}, m(e)), {
    collection: e.collection.itemList.map(m_1).filter(Boolean),
  });
}
