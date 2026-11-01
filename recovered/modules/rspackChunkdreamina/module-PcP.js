import n from "z8";
import s from "cO";
import a from "Qey";
import o from "yw";
import r from "Kpt";
import l from "Egb";
import c from "HX";
import "./module-qo_2.js";
export var b = {
  id: "SiderMenuStoryAgent",
  type: "icon",
  text: () => a.Ay.t("web_new_story_agent", {}, "Action"),
  tooltipProps: {
    disabled: true,
  },
  icon: () => n.jsx(o.s9I, {}),
  onClick: () => {
    window.open(
      s.m("".concat(l.Js).concat(l.a$.storyAgent), null, {
        logType: "js.window.location",
        reportOnly: "false",
        blackConfig: "{}",
        configMode: "merge",
        isCloseSSRReport: true,
        bid: "cc_dreamina",
        region: "cn",
        urlLimit: "-1",
        htmlLimit: "-1",
        isSaveValidUrl: false,
        isRuntimeLog: false,
        isDOMParser: false,
        escapeRule: "escape-report",
        reportUrl:
          "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
        htmlparserOptions: "{}",
        scmBranch: "-",
        scmName: "-",
        scmVersion: "-",
        webpackPluginVersion: "3.6.0",
        filename:
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZek5TZ*1OdWEz%lpWMlJzWW01%mRt%lhhM1JaTWpsM$dtMXNia3h1$W5wbFIwWj$Xak5XZWc9PQ",
      }),
      "_blank",
    );
  },
  position: "center",
  order: 2001,
};
export var H = {
  [r.N.PageRoute]: [
    {
      id: c.Du.StoryAgent,
      path: l.a$.storyAgent,
    },
  ],
  [r.N.SideMenu]: [],
};
