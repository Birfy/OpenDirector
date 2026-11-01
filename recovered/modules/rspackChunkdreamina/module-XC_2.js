import a from "NY";
import r from "bT";
import o from "mL";
import i from "r5O";
import s from "bE";
import l from "z7R";
import c from "qO";
import d from "wF";
import u from "CaR";
import p from "rr";
export function P(e) {
  const {
    source = "vip_right_model_select",
    currentValue,
    options,
    getSceneOptions,
    onAllowedChange,
    onBlocked,
  } = e;
  const x = d.h(l.jV);
  const _ = d.h(s.c);
  const g = d.h(p.D);
  const { id } = r.useContext(c.b);
  const j = u.dK();
  const yRef = r.useRef();
  const kRef = r.useRef(currentValue);
  const MRef = r.useRef(options);
  const ARef = r.useRef(getSceneOptions);
  const CRef = r.useRef(id);
  kRef.current = currentValue;
  MRef.current = options;
  ARef.current = getSceneOptions;
  CRef.current = id;
  r.useEffect(() => {
    var e = () => {
      yRef.current = undefined;
    };
    var t = _.onDidLogin(e);
    var n = _.onDidLogout(e);
    var a = _.onDidChangeProfile(e);
    var r = g.onWorkspaceChange(e);
    return () => {
      e();
      t.dispose();
      n.dispose();
      a.dispose();
      r.dispose();
    };
  }, [_, g]);
  return (e) =>
    a._(function* () {
      let n;
      let r;
      let s;
      let l;
      const c = Symbol("commercial-model-select-change");
      yRef.current = c;
      const kRef_current = kRef.current;
      if (e !== kRef_current) {
        const u = MRef.current.find((t) => t.value === e);
        if (u && !u.disabled) {
          const p =
            (n = (r = ARef.current) == null ? undefined : r.call(ARef, e)) !=
            null
              ? n
              : u == null || (l = u.extra) == null || (s = l.commercial) == null
                ? undefined
                : s.sceneOptions;
          if (!p || j === "v0") {
            return void (yield onAllowedChange(e));
          }
          const sceneOptions = o.A(p);
          const v = {
            hasLogin: _.hasLogin,
            uniqueId: _.uniqueId,
          };
          const b = {
            selectedWorkspaceId: g.data.selectedWorkspaceId,
            isNewConversationMode: g.data.isNewConversationMode,
          };
          const w = CRef.current;
          const isCurrent = () => {
            var t;
            var n;
            var a;
            var r;
            var o = MRef.current.find((t) => t.value === e);
            var s =
              (t = (n = ARef.current) == null ? undefined : n.call(ARef, e)) !=
              null
                ? t
                : o == null ||
                    (r = o.extra) == null ||
                    (a = r.commercial) == null
                  ? undefined
                  : a.sceneOptions;
            return (
              !!(o && !o.disabled) &&
              yRef.current === c &&
              kRef.current === kRef_current &&
              _.hasLogin === v.hasLogin &&
              _.uniqueId === v.uniqueId &&
              g.data.selectedWorkspaceId === b.selectedWorkspaceId &&
              g.data.isNewConversationMode === b.isNewConversationMode &&
              CRef.current === w &&
              i.A(s, sceneOptions)
            );
          };
          const P = yield x.getInstance();
          if (isCurrent()) {
            if (P.getCommerceRightCanUse(sceneOptions)) {
              return void (yield onAllowedChange(e));
            }
            P.showVIPSubscribeModal({
              sceneOptions,
              source,
              enableSubscriptionGuide: true,
              hideCreditPurchaseEntry: true,
              resolveVipInterceptionContext: true,
              onSuccess: (t) =>
                a._(function* () {
                  if (
                    t &&
                    (yield t.recheck({
                      isCurrent,
                      check: () => P.getCommerceRightCanUse(sceneOptions),
                    })) &&
                    isCurrent()
                  ) {
                    yield onAllowedChange(e);
                  }
                })(),
              customReportParams: {
                trigger_model_key: u == null ? undefined : u.value,
                trigger_model_name: u == null ? undefined : u.label,
              },
            });
            if (onBlocked != null) {
              onBlocked(sceneOptions);
            }
          }
        }
      }
    })();
}
