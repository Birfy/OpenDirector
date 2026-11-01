import r from "oa";
import o from "bk";
import n from "qa";
import a from "K8";
import { T } from "./module-IHa.js";
export function y(e) {
  let t;
  let i;
  const { candidateTypes, materials } = e;
  const u = n._(e, ["candidateTypes", "materials"]);
  const d = candidateTypes.map((type) =>
    T(
      o._(r._({}, u), {
        materials: [
          ...materials,
          {
            type,
          },
        ],
      }),
    ),
  );
  if ((t = (i = d.find((e) => e.ok)) != null ? i : d.at(0)) != null) {
    return t;
  }
  return a.xz(-1, "");
}
