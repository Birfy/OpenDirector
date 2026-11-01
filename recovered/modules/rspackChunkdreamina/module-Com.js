import i from "L8k";
import a from "RII";
export function PQ(e, t) {
  const r =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  const n = arguments.length > 3 ? arguments[3] : undefined;
  if (e) {
    const o = e.createInstance(new i.d(t, r));
    const s = o.getEventParams();
    const c = e.invokeFunction((e) => e.get(a.l));
    c.reportBusinessEvent(o.eventName, s, n);
    c.reportDevEvent(o.eventName, s);
  }
}
export function sq(e, t) {
  const r =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  const n = arguments.length > 3 ? arguments[3] : undefined;
  if (e) {
    const o = e.createInstance(new i.d(t, r));
    const s = o.getEventParams();
    e.invokeFunction((e) => {
      var t = e.get(a.l);
      t.reportDevEvent(o.eventName, s);
      t.reportBusinessEvent(o.eventName, s, n);
    });
  }
}
