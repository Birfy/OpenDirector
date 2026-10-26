import r from "oa";
import n from "BDO";
import a from "Lg";
import o from "A3X";
import l from "en";
import s from "cSn";
import u from "EB4";
import d from "B5w";
import c from "Xx";
import m from "zl1";
import p from "XA";
import v from "EX7";
function f(e, t, i) {
  let o;
  const l =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  const projectId = (o = i.data.canvasInfo) == null ? undefined : o.projectId;
  const u = r._(
    {
      page: i.page,
      urlPath: i.urlPath,
      eventPage: n.S(i.data) ? "story" : "inspiration",
      enterScenario: a.ZU.Feed,
      drawType: a.zN.NoDraw,
      rank: i.index + 1,
    },
    i.context,
    i.tab === undefined
      ? {}
      : {
          tab: i.tab,
        },
    projectId === undefined
      ? {}
      : {
          projectId,
        },
    l,
  );
  e.createInstance(t, u, {
    data: i.data,
  }).report();
}
export function qq(e, t) {
  f(e, p.$, t);
}
export function _A(e, t, i) {
  f(e, v.D, t, {
    duration: i,
  });
}
export function jN(e, t, i) {
  f(e, d.k, t, {
    duration: i,
  });
}
export function nA(e, t) {
  f(e, u.y, t);
}
export function hp(e, t, action) {
  f(e, s.I, t, {
    action,
  });
}
export function Pq(e, t, i) {
  hp(e, t, i ? "like" : "cancel_like");
}
export function xb(e, t, i) {
  if (o.s(t.data)) {
    f(e, c.s, t, {
      action: "hover",
      playDuration: i,
    });
    if (n.S(t.data)) {
      f(e, l.v, t, {
        action: "hover_play",
        playDuration: i,
      });
    }
  }
}
export function tS(e, t, i) {
  if (o.s(t.data)) {
    f(e, m._, t, {
      action: "hover",
      playDuration: i,
    });
  }
}
