import n from "z8";
import "xj";
import a from "R8";
import o from "bT";
import * as i from "./module-loW.js";
import * as c from "./module-Ejy.js";
import { A } from "./module-oe0.js";
import { i as i_1 } from "./module-BCJ.js";
const l = o.memo(function () {
  return n.jsx(n.Fragment, {
    children: Array.from(
      {
        length: 3,
      },
      (e, t) =>
        n.jsx(
          "span",
          {
            className: A.projectSkeleton,
            "data-testid": "canvas-project-skeleton",
            "aria-hidden": "true",
          },
          t,
        ),
    ),
  });
});
var d = o.memo(function (e) {
  const {
    projects,
    hasMoreProjects,
    loading,
    onCreateProject,
    onOpenProject,
    onViewAll,
    renderProject,
  } = e;
  const f = i_1();
  const g = loading ? 1 : Math.max(1, 4 - Math.min(projects.length, 4));
  return n.jsxs("section", {
    className: A.recentProjects,
    "aria-label": f.section,
    children: [
      n.jsx("div", {
        className: A.actions,
        children: hasMoreProjects
          ? n.jsx(a.A, {
              htmlType: "button",
              type: "text",
              size: "small",
              className: A.viewAllButton,
              onClick: onViewAll,
              children: f.viewAll,
            })
          : null,
      }),
      n.jsxs("div", {
        className: A.projectGrid,
        "data-create-entry-span": g,
        children: [
          n.jsx(i.s, {
            onCreateProject,
          }),
          loading
            ? n.jsx(l, {})
            : projects.map((project) => {
                if (renderProject) {
                  return n.jsx(
                    o.Fragment,
                    {
                      children: renderProject(project),
                    },
                    project.id,
                  );
                }
                return n.jsx(
                  c.y,
                  {
                    project,
                    onOpen: onOpenProject,
                  },
                  project.id,
                );
              }),
        ],
      }),
    ],
  });
});
export { d as A };
