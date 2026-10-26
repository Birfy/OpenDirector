import r from "bT";
import o from "xi4";
import i from "PC";
export class A extends r.Component {
  componentDidMount() {
    if (r.isValidElement(this.props.children)) {
      this.createResizeObserver();
    } else {
      console.warn("The children of ResizeObserver is invalid.");
    }
  }
  componentDidUpdate() {
    if (!this.resizeObserver && i.findDOMNode(this)) {
      this.createResizeObserver();
    }
  }
  render() {
    return this.props.children;
  }
  constructor(...e) {
    super(...e);
    this.componentWillUnmount = () => {
      if (this.resizeObserver) {
        this.destroyResizeObserver();
      }
    };
    this.createResizeObserver = () => {
      this.resizeObserver = new o.default((e) => {
        let { onResize } = this.props;
        if (onResize) {
          onResize(e);
        }
      });
      this.resizeObserver.observe(i.findDOMNode(this));
    };
    this.destroyResizeObserver = () => {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
      this.resizeObserver = null;
    };
  }
}
