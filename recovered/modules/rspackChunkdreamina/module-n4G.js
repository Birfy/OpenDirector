import r from "AUo";
import o from "oXm";
import n from "gG";
import { f } from "./module-uoE.js";
export function G(e) {
  const {
    resources = [],
    resourceMaterialMapper = r.A,
    subjects = [],
    subjectMaterialPicker = o.A(f),
  } = e;
  const l = new Map(subjects.map((e) => [n.K(e), e]));
  return [
    ...resources.map(resourceMaterialMapper),
    ...[...l.values()].flatMap(subjectMaterialPicker),
  ];
}
