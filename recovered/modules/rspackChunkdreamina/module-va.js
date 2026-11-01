import r from "oa";
import o from "z8";
import i from "bT";
import l from "PC";
class s extends i.Component {
  componentDidMount() {
    this.createContainer();
    this.timer = setTimeout(() => {
      if (!this.container) {
        this.createContainer();
      }
    });
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  createContainer() {
    let { getContainer } = this.props;
    this.container = getContainer && getContainer();
    this.forceUpdate();
  }
  render() {
    let { children } = this.props;
    if (this.container) {
      return l.createPortal(children, this.container);
    }
    return null;
  }
  constructor(...e) {
    super(...e);
    this.container = null;
  }
}
export class A extends i.Component {
  componentWillUnmount() {
    this.instance = null;
  }
  render() {
    let { forceRender, visible } = this.props;
    if (forceRender || visible || this.instance) {
      return o.jsx(
        s,
        r._(
          {
            ref: (e) => (this.instance = e),
          },
          this.props,
        ),
      );
    }
    return null;
  }
}
A.displayName = "Portal";
A.defaultProps = {
  getContainer: () => document.body,
};
