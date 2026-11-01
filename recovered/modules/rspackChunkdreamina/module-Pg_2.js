import r from "bT";
let String_raw = String.raw;
let a = (() => {
  try {
    document.createElement("div").animate(
      {
        opacity: 0,
      },
      {
        easing: "linear(0, 1)",
      },
    );
  } catch {
    return false;
  }
  return true;
})();
let o =
  typeof CSS !== "undefined" &&
  CSS.supports &&
  CSS.supports("line-height", "mod(1,1)");
let s =
  typeof matchMedia !== "undefined"
    ? matchMedia("(prefers-reduced-motion: reduce)")
    : null;
let c = "--_number-flow-d-opacity";
let l = "--_number-flow-d-width";
let d = "--_number-flow-dx";
let u = "--_number-flow-d";
let h = (() => {
  try {
    CSS.registerProperty({
      name: c,
      syntax: "<number>",
      inherits: false,
      initialValue: "0",
    });
    CSS.registerProperty({
      name: d,
      syntax: "<length>",
      inherits: true,
      initialValue: "0px",
    });
    CSS.registerProperty({
      name: l,
      syntax: "<number>",
      inherits: false,
      initialValue: "0",
    });
    CSS.registerProperty({
      name: u,
      syntax: "<number>",
      inherits: true,
      initialValue: "0",
    });
    return true;
  } catch {
    return false;
  }
})();
let p = "round(nearest, calc(var(--number-flow-mask-height, 0.25em) / 2), 1px)";
let v = `calc(${p} * 2)`;
let m = "var(--number-flow-mask-width, 0.5em)";
let g = `calc(${m} / var(--scale-x))`;
let f = "#000 0, transparent 71%";
let y = String_raw`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:1}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${l}) / var(--width));transform:translateX(var(${d})) scaleX(var(--scale-x));margin:0 calc(-1 * ${m});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${g},#000 calc(100% - ${g}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${v},#000 calc(100% - ${v}),transparent 100% ),radial-gradient(at bottom right,${f}),radial-gradient(at bottom left,${f}),radial-gradient(at top left,${f}),radial-gradient(at top right,${f});-webkit-mask-size:100% calc(100% - ${v} * 2),calc(100% - ${g} * 2) 100%,${g} ${v},${g} ${v},${g} ${v},${g} ${v};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${p} ${m};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${d})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${u})}.digit__num,.number .section::after{padding:${p} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${c}))}`;
let _ = HTMLElement;
String_raw`:host{display:inline-block;direction:ltr;white-space:nowrap;line-height:1}span{display:inline-block}:host([data-will-change]) span{will-change:transform}.number,.digit{padding:${p} 0}.symbol{white-space:pre}`;
let b = (e, t, i) => {
  let r = document.createElement(e);
  let [n, a] = Array.isArray(t) ? [undefined, t] : [t, i];
  if (n) {
    Object.assign(r, n);
  }
  if (a != null) {
    a.forEach((e) => r.appendChild(e));
  }
  return r;
};
let w = o && a && h;
class S extends _ {
  constructor() {
    super();
    this.created = false;
    this.batched = false;
    let { animated, ...rest } = this.constructor.defaultProps;
    this._animated = this.computedAnimated = animated;
    Object.assign(this, rest);
  }
  get animated() {
    return this._animated;
  }
  set animated(e) {
    let t;
    if (this.animated !== e) {
      this._animated = e;
      if ((t = this.shadowRoot) != null) {
        t.getAnimations().forEach((e) => e.finish());
      }
    }
  }
  set data(e) {
    let t;
    if (e == null) {
      return;
    }
    let { pre, integer, fraction, post, value } = e;
    if (this.created) {
      let c = this._data;
      this._data = e;
      this.computedTrend =
        typeof this.trend === "function"
          ? this.trend(c.value, value)
          : this.trend;
      this.computedAnimated =
        w &&
        this._animated &&
        (!this.respectMotionPreference || !(s != null && s.matches)) &&
        this.offsetWidth > 0 &&
        this.offsetHeight > 0 &&
        this.ownerDocument.visibilityState === "visible";
      if ((t = this.plugins) != null) {
        t.forEach((t) => {
          var i;
          if ((i = t.onUpdate) == null) {
            return undefined;
          }
          return i.call(t, e, c, this);
        });
      }
      if (!this.batched) {
        this.willUpdate();
      }
      this._pre.update(pre);
      this._num.update({
        integer,
        fraction,
      });
      this._post.update(post);
      if (!this.batched) {
        this.didUpdate();
      }
    } else {
      this._data = e;
      this.attachShadow({
        mode: "open",
      });
      try {
        this._internals ?? (this._internals = this.attachInternals());
        this._internals.role = "img";
      } catch {}
      let t = document.createElement("style");
      if (this.nonce) {
        t.nonce = this.nonce;
      }
      t.textContent = y;
      this.shadowRoot.appendChild(t);
      this._pre = new P(this, pre, {
        justify: "right",
        part: "left",
      });
      this.shadowRoot.appendChild(this._pre.el);
      this._num = new C(this, integer, fraction);
      this.shadowRoot.appendChild(this._num.el);
      this._post = new P(this, post, {
        justify: "left",
        part: "right",
      });
      this.shadowRoot.appendChild(this._post.el);
      this.created = true;
    }
    try {
      this._internals.ariaLabel = e.valueAsString;
    } catch {}
  }
  willUpdate() {
    this._pre.willUpdate();
    this._num.willUpdate();
    this._post.willUpdate();
  }
  didUpdate() {
    if (!this.computedAnimated) {
      return;
    }
    if (this._abortAnimationsFinish) {
      this._abortAnimationsFinish.abort();
    } else {
      this.dispatchEvent(new Event("animationsstart"));
    }
    this._pre.didUpdate();
    this._num.didUpdate();
    this._post.didUpdate();
    let e = new AbortController();
    Promise.all(this.shadowRoot.getAnimations().map((e) => e.finished)).then(
      () => {
        if (!e.signal.aborted) {
          this.dispatchEvent(new Event("animationsfinish"));
          this._abortAnimationsFinish = undefined;
        }
      },
    );
    this._abortAnimationsFinish = e;
  }
}
S.defaultProps = {
  transformTiming: {
    duration: 900,
    easing:
      "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)",
  },
  spinTiming: undefined,
  opacityTiming: {
    duration: 450,
    easing: "ease-out",
  },
  animated: true,
  trend: (e, t) => Math.sign(t - e),
  respectMotionPreference: true,
  plugins: undefined,
  digits: undefined,
};
class C {
  constructor(e, t, i, { className, ...rest } = {}) {
    this.flow = e;
    this._integer = new j(e, t, {
      justify: "right",
      part: "integer",
    });
    this._fraction = new j(e, i, {
      justify: "left",
      part: "fraction",
    });
    this._inner = b(
      "span",
      {
        className: "number__inner",
      },
      [this._integer.el, this._fraction.el],
    );
    this.el = b(
      "span",
      {
        ...rest,
        part: "number",
        className: `number ${className ?? ""}`,
      },
      [this._inner],
    );
  }
  willUpdate() {
    this._prevWidth = this.el.offsetWidth;
    this._prevLeft = this.el.getBoundingClientRect().left;
    this._integer.willUpdate();
    this._fraction.willUpdate();
  }
  update({ integer, fraction }) {
    this._integer.update(integer);
    this._fraction.update(fraction);
  }
  didUpdate() {
    let e = this.el.getBoundingClientRect();
    this._integer.didUpdate();
    this._fraction.didUpdate();
    let t = this._prevLeft - e.left;
    let offsetWidth = this.el.offsetWidth;
    let r = this._prevWidth - offsetWidth;
    this.el.style.setProperty("--width", String(offsetWidth));
    this.el.animate(
      {
        [d]: [`${t}px`, "0px"],
        [l]: [r, 0],
      },
      {
        ...this.flow.transformTiming,
        composite: "accumulate",
      },
    );
  }
}
class A {
  constructor(e, t, { justify, className, ...rest }, a) {
    this.flow = e;
    this.children = new Map();
    this.onCharRemove = (e) => () => {
      this.children.delete(e);
    };
    this.justify = justify;
    let o = t.map((e) => this.addChar(e).el);
    this.el = b(
      "span",
      {
        ...rest,
        className: `section section--justify-${justify} ${className ?? ""}`,
      },
      a ? a(o) : o,
    );
  }
  addChar(e, { startDigitsAtZero = false, ...rest } = {}) {
    let r =
      e.type === "integer" || e.type === "fraction"
        ? new E(this, e.type, startDigitsAtZero ? 0 : e.value, e.pos, {
            ...rest,
            onRemove: this.onCharRemove(e.key),
          })
        : new R(this, e.type, e.value, {
            ...rest,
            onRemove: this.onCharRemove(e.key),
          });
    this.children.set(e.key, r);
    return r;
  }
  unpop(e) {
    e.el.removeAttribute("inert");
    e.el.style.top = "";
    e.el.style[this.justify] = "";
  }
  pop(e) {
    e.forEach((e) => {
      var t;
      var i;
      e.el.style.top = `${e.el.offsetTop}px`;
      e.el.style[this.justify] =
        `${((t = e.el), this.justify === "left" ? t.offsetLeft : (((i = t.offsetParent instanceof HTMLElement ? t.offsetParent : null) == null ? undefined : i.offsetWidth) ?? 0) - t.offsetWidth - t.offsetLeft)}px`;
    });
    e.forEach((e) => {
      e.el.setAttribute("inert", "");
      e.present = false;
    });
  }
  addNewAndUpdateExisting(e) {
    let t = new Map();
    let i = new Map();
    let reverse = this.justify === "left";
    let n = reverse ? "prepend" : "append";
    ((e, t, { reverse = false } = {}) => {
      let e_length = e.length;
      for (
        let n = reverse ? e_length - 1 : 0;
        reverse ? n >= 0 : n < e_length;
        reverse ? n-- : n++
      ) {
        t(e[n], n);
      }
    })(
      e,
      (e) => {
        let r;
        if (this.children.has(e.key)) {
          r = this.children.get(e.key);
          i.set(e, r);
          this.unpop(r);
          r.present = true;
        } else {
          r = this.addChar(e, {
            startDigitsAtZero: true,
            animateIn: true,
          });
          t.set(e, r);
        }
        this.el[n](r.el);
      },
      {
        reverse,
      },
    );
    if (this.flow.computedAnimated) {
      let e = this.el.getBoundingClientRect();
      t.forEach((t) => {
        t.willUpdate(e);
      });
    }
    t.forEach((e, t) => {
      e.update(t.value);
    });
    i.forEach((e, t) => {
      e.update(t.value);
    });
  }
  willUpdate() {
    let e = this.el.getBoundingClientRect();
    this._prevOffset = e[this.justify];
    this.children.forEach((t) => t.willUpdate(e));
  }
  didUpdate() {
    let e = this.el.getBoundingClientRect();
    this.children.forEach((t) => t.didUpdate(e));
    let t = e[this.justify];
    let i = this._prevOffset - t;
    if (i && this.children.size) {
      this.el.animate(
        {
          transform: [`translateX(${i}px)`, "none"],
        },
        {
          ...this.flow.transformTiming,
          composite: "accumulate",
        },
      );
    }
  }
}
class j extends A {
  update(e) {
    let t = new Map();
    this.children.forEach((i, r) => {
      if (!e.find((e) => e.key === r)) {
        t.set(r, i);
      }
      this.unpop(i);
    });
    this.addNewAndUpdateExisting(e);
    t.forEach((e) => {
      if (e instanceof E) {
        e.update(0);
      }
    });
    this.pop(t);
  }
}
class P extends A {
  update(e) {
    let t = new Map();
    this.children.forEach((i, r) => {
      if (!e.find((e) => e.key === r)) {
        t.set(r, i);
      }
    });
    this.pop(t);
    this.addNewAndUpdateExisting(e);
  }
}
class I {
  constructor(e, t, { onRemove, animateIn = false } = {}) {
    this.flow = e;
    this.el = t;
    this._present = true;
    this._remove = () => {
      var e;
      this.el.remove();
      if ((e = this._onRemove) != null) {
        e.call(this);
      }
    };
    this.el.classList.add("animate-presence");
    if (this.flow.computedAnimated && animateIn) {
      this.el.animate(
        {
          [c]: [-0.9999, 0],
        },
        {
          ...this.flow.opacityTiming,
          composite: "accumulate",
        },
      );
    }
    this._onRemove = onRemove;
  }
  get present() {
    return this._present;
  }
  set present(e) {
    if (this._present !== e) {
      this._present = e;
      if (e) {
        this.el.removeAttribute("inert");
      } else {
        this.el.setAttribute("inert", "");
      }
      if (!this.flow.computedAnimated) {
        if (!e) {
          this._remove();
        }
        return;
      }
      this.el.style.setProperty("--_number-flow-d-opacity", e ? "0" : "-.999");
      this.el.animate(
        {
          [c]: e ? [-0.9999, 0] : [0.999, 0],
        },
        {
          ...this.flow.opacityTiming,
          composite: "accumulate",
        },
      );
      if (e) {
        this.flow.removeEventListener("animationsfinish", this._remove);
      } else {
        this.flow.addEventListener("animationsfinish", this._remove, {
          once: true,
        });
      }
    }
  }
}
class k extends I {
  constructor(e, t, i, r) {
    super(e.flow, i, r);
    this.section = e;
    this.value = t;
    this.el = i;
  }
}
class E extends k {
  constructor(e, t, i, r, n) {
    var a;
    var o;
    let length =
      (((o = (a = e.flow.digits) == null ? undefined : a[r]) == null
        ? undefined
        : o.max) ?? 9) + 1;
    let c = Array.from({
      length,
    }).map((e, t) => {
      let r = b(
        "span",
        {
          className: "digit__num",
        },
        [document.createTextNode(String(t))],
      );
      if (t !== i) {
        r.setAttribute("inert", "");
      }
      r.style.setProperty("--n", String(t));
      return r;
    });
    let l = b(
      "span",
      {
        part: `digit ${t}-digit`,
        className: "digit",
      },
      c,
    );
    l.style.setProperty("--current", String(i));
    l.style.setProperty("--length", String(length));
    super(e, i, l, n);
    this.pos = r;
    this._onAnimationsFinish = () => {
      this.el.classList.remove("is-spinning");
    };
    this._numbers = c;
    this.length = length;
  }
  willUpdate(e) {
    let t = this.el.getBoundingClientRect();
    this._prevValue = this.value;
    let i = t[this.section.justify] - e[this.section.justify];
    let r = t.width / 2;
    this._prevCenter = this.section.justify === "left" ? i + r : i - r;
  }
  update(e) {
    this.el.style.setProperty("--current", String(e));
    this._numbers.forEach((t, i) => {
      if (i === e) {
        return t.removeAttribute("inert");
      }
      return t.setAttribute("inert", "");
    });
    this.value = e;
  }
  didUpdate(e) {
    let t = this.el.getBoundingClientRect();
    let i = t[this.section.justify] - e[this.section.justify];
    let r = t.width / 2;
    let n = this.section.justify === "left" ? i + r : i - r;
    let a = this._prevCenter - n;
    if (a) {
      this.el.animate(
        {
          transform: [`translateX(${a}px)`, "none"],
        },
        {
          ...this.flow.transformTiming,
          composite: "accumulate",
        },
      );
    }
    let o = this.getDelta();
    if (o) {
      this.el.classList.add("is-spinning");
      this.el.animate(
        {
          [u]: [-o, 0],
        },
        {
          ...(this.flow.spinTiming ?? this.flow.transformTiming),
          composite: "accumulate",
        },
      );
      this.flow.addEventListener("animationsfinish", this._onAnimationsFinish, {
        once: true,
      });
    }
  }
  getDelta() {
    let e;
    if (this.flow.plugins) {
      for (let t of this.flow.plugins) {
        let i =
          (e = t.getDelta) == null
            ? undefined
            : e.call(t, this.value, this._prevValue, this);
        if (i != null) {
          return i;
        }
      }
    }
    let t = this.value - this._prevValue;
    let i = this.flow.computedTrend || Math.sign(t);
    if (i < 0 && this.value > this._prevValue) {
      return this.value - this.length - this._prevValue;
    }
    if (i > 0 && this.value < this._prevValue) {
      return this.length - this._prevValue + this.value;
    }
    return t;
  }
}
class R extends k {
  constructor(e, t, i, r) {
    let n = b("span", {
      className: "symbol__value",
      textContent: i,
    });
    super(
      e,
      i,
      b(
        "span",
        {
          part: `symbol ${t}`,
          className: "symbol",
        },
        [n],
      ),
      r,
    );
    this.type = t;
    this._children = new Map();
    this._onChildRemove = (e) => () => {
      this._children.delete(e);
    };
    this._children.set(
      i,
      new I(this.flow, n, {
        onRemove: this._onChildRemove(i),
      }),
    );
  }
  willUpdate(e) {
    if (this.type === "decimal") {
      return;
    }
    let t = this.el.getBoundingClientRect();
    this._prevOffset = t[this.section.justify] - e[this.section.justify];
  }
  update(e) {
    if (this.value !== e) {
      let t = this._children.get(this.value);
      if (t) {
        t.present = false;
      }
      let i = this._children.get(e);
      if (i) {
        i.present = true;
      } else {
        let t = b("span", {
          className: "symbol__value",
          textContent: e,
        });
        this.el.appendChild(t);
        this._children.set(
          e,
          new I(this.flow, t, {
            animateIn: true,
            onRemove: this._onChildRemove(e),
          }),
        );
      }
    }
    this.value = e;
  }
  didUpdate(e) {
    if (this.type === "decimal") {
      return;
    }
    let t =
      this.el.getBoundingClientRect()[this.section.justify] -
      e[this.section.justify];
    let i = this._prevOffset - t;
    if (i) {
      this.el.animate(
        {
          transform: [`translateX(${i}px)`, "none"],
        },
        {
          ...this.flow.transformTiming,
          composite: "accumulate",
        },
      );
    }
  }
}
let T = parseInt(r.version.match(/^(\d+)\./)?.[1]) >= 19;
class x extends S {
  attributeChangedCallback(e, t, i) {
    this[e] = JSON.parse(i);
  }
}
x.observedAttributes = T ? [] : ["data", "digits"];
if (!customElements.get("number-flow-react")) {
  customElements.define("number-flow-react", x);
}
let M = {};
let N = T ? (e) => e : JSON.stringify;
function L(props) {
  let {
    transformTiming,
    spinTiming,
    opacityTiming,
    animated,
    respectMotionPreference,
    trend,
    plugins,
    ...rest
  } = props;
  return [
    {
      transformTiming,
      spinTiming,
      opacityTiming,
      animated,
      respectMotionPreference,
      trend,
      plugins,
    },
    rest,
  ];
}
class F extends r.Component {
  updateProperties(e) {
    if (!this.el) {
      return;
    }
    this.el.batched = !this.props.isolate;
    let [t] = L(this.props);
    Object.entries(t).forEach(([e, t]) => {
      this.el[e] = t ?? x.defaultProps[e];
    });
    if (e?.onAnimationsStart) {
      this.el.removeEventListener("animationsstart", e.onAnimationsStart);
    }
    if (this.props.onAnimationsStart) {
      this.el.addEventListener("animationsstart", this.props.onAnimationsStart);
    }
    if (e?.onAnimationsFinish) {
      this.el.removeEventListener("animationsfinish", e.onAnimationsFinish);
    }
    if (this.props.onAnimationsFinish) {
      this.el.addEventListener(
        "animationsfinish",
        this.props.onAnimationsFinish,
      );
    }
  }
  componentDidMount() {
    this.updateProperties();
    if (T && this.el) {
      this.el.digits = this.props.digits;
      this.el.data = this.props.data;
    }
  }
  getSnapshotBeforeUpdate(e) {
    this.updateProperties(e);
    if (e.data !== this.props.data) {
      if (this.props.group) {
        this.props.group.willUpdate();
        return () => this.props.group?.didUpdate();
      }
      if (!this.props.isolate) {
        this.el?.willUpdate();
        return () => this.el?.didUpdate();
      }
    }
    return null;
  }
  componentDidUpdate(e, t, i) {
    i?.();
  }
  handleRef(e) {
    if (this.props.innerRef) {
      this.props.innerRef.current = e;
    }
    this.el = e;
  }
  render() {
    let [
      e,
      {
        innerRef,
        className,
        data,
        nonce,
        willChange,
        isolate,
        group,
        digits,
        onAnimationsStart,
        onAnimationsFinish,
        ...rest
      },
    ] = L(this.props);
    return r.createElement("number-flow-react", {
      ref: this.handleRef,
      "data-will-change": willChange ? "" : undefined,
      class: className,
      nonce,
      ...rest,
      dangerouslySetInnerHTML: {
        __html: "",
      },
      suppressHydrationWarning: true,
      digits: N(digits),
      data: N(data),
    });
  }
  constructor(e) {
    super(e);
    this.handleRef = this.handleRef.bind(this);
  }
}
export let Ay = r.forwardRef(function (
  { value, locales, format, prefix, suffix, ...rest },
  s,
) {
  r.useImperativeHandle(s, () => cRef.current, []);
  let cRef = r.useRef();
  let group = r.useContext($Context);
  group?.useRegister(cRef);
  let d = r.useMemo(() => {
    if (locales) {
      return JSON.stringify(locales);
    }
    return "";
  }, [locales]);
  let u = r.useMemo(() => {
    if (format) {
      return JSON.stringify(format);
    }
    return "";
  }, [format]);
  let data = r.useMemo(
    () =>
      ((e, t, i, r) => {
        let n = t.formatToParts(e);
        if (i) {
          n.unshift({
            type: "prefix",
            value: i,
          });
        }
        if (r) {
          n.push({
            type: "suffix",
            value: r,
          });
        }
        let pre = [];
        let o = [];
        let fraction = [];
        let post = [];
        let l = {};
        let d = (e) => `${e}:${(l[e] = (l[e] ?? -1) + 1)}`;
        let valueAsString = "";
        let h = false;
        let p = false;
        for (let e of n) {
          valueAsString += e.value;
          let t =
            e.type === "minusSign" || e.type === "plusSign" ? "sign" : e.type;
          switch (t) {
            case "integer":
              h = true;
              o.push(
                ...e.value.split("").map((e) => ({
                  type: t,
                  value: parseInt(e),
                })),
              );
              break;
            case "group":
              o.push({
                type: t,
                value: e.value,
              });
              break;
            case "decimal":
              p = true;
              fraction.push({
                type: t,
                value: e.value,
                key: d(t),
              });
              break;
            case "fraction":
              fraction.push(
                ...e.value.split("").map((e) => ({
                  type: t,
                  value: parseInt(e),
                  key: d(t),
                  pos: -1 - l[t],
                })),
              );
              break;
            default:
              (h || p ? post : pre).push({
                type: t,
                value: e.value,
                key: d(t),
              });
          }
        }
        let integer = [];
        for (let e = o.length - 1; e >= 0; e--) {
          let t = o[e];
          integer.unshift(
            t.type === "integer"
              ? {
                  ...t,
                  key: d(t.type),
                  pos: l[t.type],
                }
              : {
                  ...t,
                  key: d(t.type),
                },
          );
        }
        return {
          pre,
          integer,
          fraction,
          post,
          valueAsString,
          value: typeof e === "string" ? parseFloat(e) : e,
        };
      })(
        value,
        (M[`${d}:${u}`] ??= new Intl.NumberFormat(locales, format)),
        prefix,
        suffix,
      ),
    [value, d, u, prefix, suffix],
  );
  return r.createElement(F, {
    ...rest,
    group,
    data,
    innerRef: cRef,
  });
});
let $Context = r.createContext(undefined);
export function rO({ children }) {
  let tRef = r.useRef(new Set());
  let iRef = r.useRef(false);
  let nRef = r.useRef(new WeakMap());
  let value = r.useMemo(
    () => ({
      useRegister(e) {
        r.useEffect(() => {
          tRef.current.add(e);
          return () => {
            tRef.current.delete(e);
          };
        }, []);
      },
      willUpdate() {
        if (!iRef.current) {
          iRef.current = true;
          tRef.current.forEach((e) => {
            let e_current = e.current;
            if (e_current && e_current.created) {
              e_current.willUpdate();
              nRef.current.set(e_current, true);
            }
          });
        }
      },
      didUpdate() {
        tRef.current.forEach((e) => {
          let e_current = e.current;
          if (e_current && nRef.current.get(e_current)) {
            e_current.didUpdate();
            nRef.current.delete(e_current);
          }
        });
        iRef.current = false;
      },
    }),
    [],
  );
  return r.createElement(
    $Context.Provider,
    {
      value,
    },
    children,
  );
}
((e = "") =>
  String_raw`:where(number-flow${e}){line-height:1}number-flow${e} > span{font-kerning:none;display:inline-block;padding:${v} 0}`)(
  "-react",
);
