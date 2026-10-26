import t from "oa";
import i from "bk";
import o from "qa";
import r from "Qey";
import s from "lj";
import c from "M8X";
import d from "Hr";
let a;
class u {
  open(e, l) {
    Promise.all([
      require.e("9ed"),
      require.e("mo4"),
      require.e("46qd"),
      require.e("1sx"),
      require.e("uyh"),
      require.e("rle"),
      require.e("weo"),
      require.e("p1"),
      require.e("o5"),
      require.e("m0y"),
      require.e("p0z"),
      require.e("1mk"),
      require.e("af4"),
      require.e("7xh"),
    ])
      .then(require.bind(require, "e28"))
      .then((n) => {
        var { SkillPreviewDetailCoordinator } = n;
        if (!this._disposed) {
          this._coordinator = this._containerService.createInstance(
            SkillPreviewDetailCoordinator,
          );
          return this._coordinator.open(
            e,
            i._(t._({}, l), {
              onAfterClose: this._handleAfterClose,
            }),
          );
        }
      })
      .catch(() => {
        if (!(this._disposed || this._closed)) {
          d.l.warning(
            r.Ay.t(
              "skill_publish_msg_button_view_failed",
              {},
              "Couldn't view skill details. Please try again.",
            ),
          );
          this._handleAfterClose();
        }
      });
  }
  _release() {
    let e;
    this._routeChange.dispose();
    window.removeEventListener("popstate", this.dispose);
    if ((e = this._coordinator) != null) {
      e.dispose();
    }
    if (a === this) {
      a = undefined;
    }
  }
  constructor(e, l) {
    this._containerService = e;
    this._focusFallback = l;
    this._closed = false;
    this._disposed = false;
    this._trigger =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : undefined;
    this.dispose = () => {
      if (!this._disposed) {
        this._disposed = true;
        if (!this._closed) {
          this._release();
        }
      }
    };
    this._handleAfterClose = () => {
      if (!(this._disposed || this._closed)) {
        this._closed = true;
        this._release();
        queueMicrotask(() => {
          if (!this._disposed && !a) {
            var e;
            var l;
            var { activeElement } = document;
            if (
              !(
                activeElement &&
                activeElement !== document.body &&
                activeElement.isConnected
              )
            ) {
              if ((e = this._trigger) == null ? undefined : e.isConnected) {
                this._trigger.focus();
              } else if ((l = this._focusFallback) != null) {
                l.call(this);
              }
            }
          }
        });
      }
    };
    this._routeChange = c.cQ(e, s.K).onWouldRouteChange(this.dispose);
    window.addEventListener("popstate", this.dispose);
  }
}
export function X(e, l, n) {
  if (a != null) {
    a.dispose();
  }
  const { focusFallback } = n;
  const i = o._(n, ["focusFallback"]);
  const r = new u(e, focusFallback);
  a = r;
  r.open(l, i);
  return r;
}
