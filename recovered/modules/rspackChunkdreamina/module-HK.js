import a from "z8";
import r from "ED";
import * as i from "./module-V99.js";
import o from "bR6";
export var y = r.PA(function (e) {
  const { children, references, activeTab, panelTabs } = e;
  const { references: references_1 } = o.Au(references, activeTab, {
    panelTabs,
  });
  return a.jsx(i.n, {
    resources: references_1,
    children,
  });
});
