import r from "oa";
import o from "bk";
import i from "bT";
export class A extends i.Component {
  remove(e) {
    this.setState((t) => ({
      notices: t.notices.filter((t) => t.id !== e),
    }));
  }
  constructor(e) {
    super(e);
    this.add = (e) => {
      let id = (e == null ? undefined : e.id)
        ? e == null
          ? undefined
          : e.id
        : `arco_notice_id_${Math.random().toFixed(10).slice(2)}`;
      this.setState((n) => {
        let n_notices = n.notices;
        if (e.id && ~n_notices.findIndex((t) => t.id === e.id)) {
          this.update(e);
          return n;
        }
        return {
          notices: n_notices.concat(
            o._(r._({}, e), {
              id,
            }),
          ),
          position: e.position,
        };
      });
      return id;
    };
    this.update = (e) => {
      this.setState(
        (t) => ({
          notices: t.notices.map((t) => {
            if (e.id === t.id) {
              e.update = true;
              return e;
            }
            return t;
          }),
        }),
        () => {
          let notices = this.state.notices.map((t) => {
            if (e.id === t.id && t.update) {
              delete t.update;
            }
            return t;
          });
          this.setState({
            notices,
          });
        },
      );
    };
    this.clear = () => {
      this.setState({
        notices: [],
      });
    };
    this.state = {
      notices: [],
      position: "topRight",
    };
    this.remove = this.remove.bind(this);
  }
}
