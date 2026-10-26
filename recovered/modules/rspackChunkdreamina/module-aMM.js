if (require.j == "wl4") var a = require("./module-L8k.js");
if (require.j == "wl4") var o = require("./module-jY_3.js");
export function P(e, t, r = []) {
  if (!e) {
    return;
  }
  let n = e.createInstance(new a.d(t, r));
  let c = n.getEventParams();
  e.invokeFunction((e) => {
    let t = e.get(o.P);
    t.reportDevEvent(n.eventName, c);
    t.reportBusinessEvent(n.eventName, c);
  });
}
