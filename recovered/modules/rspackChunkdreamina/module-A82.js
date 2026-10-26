import n from "o7";
export class U extends n.jG {
  listen(e) {
    const { el, getElementStyle, setElementStyle } = e;
    this.element = el;
    this.getElementStyle = getElementStyle;
    this.setElementStyle = setElementStyle;
  }
  stop() {
    this.element = undefined;
    this.getElementStyle = undefined;
    this.setElementStyle = undefined;
  }
  reset() {}
  activate() {}
  deactivated() {}
  constructor() {
    super();
    this.element = undefined;
    this.getElementStyle = undefined;
    this.getElementStyle = undefined;
  }
}
