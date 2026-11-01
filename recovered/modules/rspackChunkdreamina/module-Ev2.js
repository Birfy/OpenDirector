import a from "z8";
import n from "cO";
import o from "xb";
import u from "Kpt";
import d from "JP";
import r from "HX";
import s from "Egb";
import h from "h5";
import p from "lz";
export var H = {
  [u.N.PageRoute]: [
    {
      id: r.Du.Personal,
      path: s.ph[r.Du.Personal],
      isNeedCache: !h.Pe,
      skeleton: () => null,
    },
    {
      id: r.Du.GuestPerson,
      path: s.ph[r.Du.GuestPerson],
      isNeedCache: false,
    },
  ],
  [u.N.SideMenu]: [
    {
      id: r.Du.Personal,
      type: "custom",
      position: "bottom",
      order: 995,
      content: () => {
        var e = p.i();
        var i = (e == null ? undefined : e.ok) ? e.value.avatar : undefined;
        return a.jsx("div", {
          className: o("avatar-container-nwlnAP"),
          children: a.jsx("div", {
            className: "avatar-P0VYvA",
            children: a.jsx(d.x, {
              src: n.m(i, null, {
                logType: "js.href/src",
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
                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTBKb1dqSldla3d6%W14amJrNTJZbTFH-zB3elZuQk1WMD%yWW0x-WN*cD$O$EJqTTJob1kyMWtN$04z%FQwPQ",
              }),
              skeleton: true,
            }),
          }),
        });
      },
    },
  ],
};
