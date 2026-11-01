import r from "oa";
import o from "bk";
export let nM = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)",
  xxxl: "(min-width: 2000px)",
};
let l = [];
let s = -1;
let a = {};
export var Ay = {
  matchHandlers: {},
  dispatch: (e, t) => {
    a = e;
    return (
      !(l.length < 1) &&
      (l.forEach((e) => {
        e.func(a, t);
      }),
      true)
    );
  },
  subscribe(func) {
    if (l.length === 0) {
      this.register();
    }
    let token = (++s).toString();
    l.push({
      token,
      func,
    });
    func(a, null);
    return token;
  },
  unsubscribe(e) {
    if ((l = l.filter((t) => t.token !== e)).length === 0) {
      this.unregister();
    }
  },
  unregister() {
    Object.keys(nM).forEach((e) => {
      let t = nM[e];
      let n = this.matchHandlers[t];
      if (n && n.mql && n.listener) {
        n.mql.removeListener(n.listener);
      }
    });
  },
  register() {
    Object.keys(nM).forEach((e) => {
      let t = nM[e];
      let listener = ({ matches }) => {
        this.dispatch(
          o._(r._({}, a), {
            [e]: matches,
          }),
          e,
        );
      };
      let mql = window.matchMedia(t);
      mql.addListener(listener);
      this.matchHandlers[t] = {
        mql,
        listener,
      };
      listener(mql);
    });
  },
};
export const ye = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"];
