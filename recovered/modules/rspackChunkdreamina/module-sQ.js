import _r from "fyk";
import i from "wnX";
import a from "JO";
export function C(
  e,
  t,
  n = function (e) {
    return e;
  },
) {
  return function (r, l) {
    const u = _r(
      {
        unmountOnExit: true,
      },
      n(r),
      {
        visible: false,
        close: function () {},
      },
    );
    const c = "_" + (t || "ARCO_MASKING") + "_DIV_" + (r.key || "") + "_";
    const child = i.NJ(c, u.getContainer).child;
    let d = false;
    const render = new a.q(e, child, l).render;
    let m = _r({}, u, {
      getContainer: function () {
        return child;
      },
    });
    function close() {
      d = true;
      m.visible = false;
      render(m);
    }
    m.close = close;
    m.onClose = function (e) {
      if (u.onClose) {
        u.onClose(e);
      }
      if (u.unmountOnExit) {
        i.Nz(child);
      }
    };
    render(m);
    i.dY(function () {
      if (!d) {
        m.visible = true;
        render(m);
      }
    });
    return {
      close,
      update: function (e) {
        render((m = _r({}, m, n(e))));
      },
    };
  };
}
export function h(e, t) {
  return C(e, t);
}
