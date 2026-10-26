import r from "bT";
let String_raw = String.raw;
let n = (() => {
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
let a =
  typeof CSS !== "undefined" &&
  CSS.supports &&
  CSS.supports("line-height", "mod(1,1)");
let o =
  typeof matchMedia !== "undefined"
    ? matchMedia("(prefers-reduced-motion: reduce)")
    : null;
let l = "--_number-flow-d-opacity";
let c = "--_number-flow-d-width";
let u = "--_number-flow-dx";
let h = "--_number-flow-d";
let d = (() => {
  try {
    CSS.registerProperty({
      name: l,
      syntax: "<number>",
      inherits: false,
      initialValue: "0",
    });
    CSS.registerProperty({
      name: u,
      syntax: "<length>",
      inherits: true,
      initialValue: "0px",
    });
    CSS.registerProperty({
      name: c,
      syntax: "<number>",
      inherits: false,
      initialValue: "0",
    });
    CSS.registerProperty({
      name: h,
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
let m = `calc(${p} * 2)`;
let f = "var(--number-flow-mask-width, 0.5em)";
let v = `calc(${f} / var(--scale-x))`;
let g = "#000 0, transparent 71%";
let y = String_raw`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:1}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${c}) / var(--width));transform:translateX(var(${u})) scaleX(var(--scale-x));margin:0 calc(-1 * ${f});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${v},#000 calc(100% - ${v}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${m},#000 calc(100% - ${m}),transparent 100% ),radial-gradient(at bottom right,${g}),radial-gradient(at bottom left,${g}),radial-gradient(at top left,${g}),radial-gradient(at top right,${g});-webkit-mask-size:100% calc(100% - ${m} * 2),calc(100% - ${v} * 2) 100%,${v} ${m},${v} ${m},${v} ${m},${v} ${m};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${p} ${f};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${u})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${h})}.digit__num,.number .section::after{padding:${p} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${l}))}`;
let _ = HTMLElement;
String_raw`:host{display:inline-block;direction:ltr;white-space:nowrap;line-height:1}span{display:inline-block}:host([data-will-change]) span{will-change:transform}.number,.digit{padding:${p} 0}.symbol{white-space:pre}`;
let b = (t, e, i) => {
  let r = document.createElement(t);
  let [s, n] = Array.isArray(e) ? [undefined, e] : [e, i];
  if (s) {
    Object.assign(r, s);
  }
  if (n != null) {
    n.forEach((t) => r.appendChild(t));
  }
  return r;
};
let w = a && n && d;
class A extends _ {
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
  set animated(t) {
    let e;
    if (this.animated !== t) {
      this._animated = t;
      if ((e = this.shadowRoot) != null) {
        e.getAnimations().forEach((t) => t.finish());
      }
    }
  }
  set data(t) {
    let e;
    if (t == null) {
      return;
    }
    let { pre, integer, fraction, post, value } = t;
    if (this.created) {
      let l = this._data;
      this._data = t;
      this.computedTrend =
        typeof this.trend === "function"
          ? this.trend(l.value, value)
          : this.trend;
      this.computedAnimated =
        w &&
        this._animated &&
        (!this.respectMotionPreference || !(o != null && o.matches)) &&
        this.offsetWidth > 0 &&
        this.offsetHeight > 0 &&
        this.ownerDocument.visibilityState === "visible";
      if ((e = this.plugins) != null) {
        e.forEach((e) => {
          var i;
          if ((i = e.onUpdate) == null) {
            return undefined;
          }
          return i.call(e, t, l, this);
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
      this._data = t;
      this.attachShadow({
        mode: "open",
      });
      try {
        this._internals ?? (this._internals = this.attachInternals());
        this._internals.role = "img";
      } catch {}
      let e = document.createElement("style");
      if (this.nonce) {
        e.nonce = this.nonce;
      }
      e.textContent = y;
      this.shadowRoot.appendChild(e);
      this._pre = new C(this, pre, {
        justify: "right",
        part: "left",
      });
      this.shadowRoot.appendChild(this._pre.el);
      this._num = new k(this, integer, fraction);
      this.shadowRoot.appendChild(this._num.el);
      this._post = new C(this, post, {
        justify: "left",
        part: "right",
      });
      this.shadowRoot.appendChild(this._post.el);
      this.created = true;
    }
    try {
      this._internals.ariaLabel = t.valueAsString;
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
    let t = new AbortController();
    Promise.all(this.shadowRoot.getAnimations().map((t) => t.finished)).then(
      () => {
        if (!t.signal.aborted) {
          this.dispatchEvent(new Event("animationsfinish"));
          this._abortAnimationsFinish = undefined;
        }
      },
    );
    this._abortAnimationsFinish = t;
  }
}
A.defaultProps = {
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
  trend: (t, e) => Math.sign(e - t),
  respectMotionPreference: true,
  plugins: undefined,
  digits: undefined,
};
class k {
  constructor(t, e, i, { className, ...rest } = {}) {
    this.flow = t;
    this._integer = new E(t, e, {
      justify: "right",
      part: "integer",
    });
    this._fraction = new E(t, i, {
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
    let t = this.el.getBoundingClientRect();
    this._integer.didUpdate();
    this._fraction.didUpdate();
    let e = this._prevLeft - t.left;
    let offsetWidth = this.el.offsetWidth;
    let r = this._prevWidth - offsetWidth;
    this.el.style.setProperty("--width", String(offsetWidth));
    this.el.animate(
      {
        [u]: [`${e}px`, "0px"],
        [c]: [r, 0],
      },
      {
        ...this.flow.transformTiming,
        composite: "accumulate",
      },
    );
  }
}
class S {
  constructor(t, e, { justify, className, ...rest }, n) {
    this.flow = t;
    this.children = new Map();
    this.onCharRemove = (t) => () => {
      this.children.delete(t);
    };
    this.justify = justify;
    let a = e.map((t) => this.addChar(t).el);
    this.el = b(
      "span",
      {
        ...rest,
        className: `section section--justify-${justify} ${className ?? ""}`,
      },
      n ? n(a) : a,
    );
  }
  addChar(t, { startDigitsAtZero = false, ...rest } = {}) {
    let r =
      t.type === "integer" || t.type === "fraction"
        ? new R(this, t.type, startDigitsAtZero ? 0 : t.value, t.pos, {
            ...rest,
            onRemove: this.onCharRemove(t.key),
          })
        : new T(this, t.type, t.value, {
            ...rest,
            onRemove: this.onCharRemove(t.key),
          });
    this.children.set(t.key, r);
    return r;
  }
  unpop(t) {
    t.el.removeAttribute("inert");
    t.el.style.top = "";
    t.el.style[this.justify] = "";
  }
  pop(t) {
    t.forEach((t) => {
      var e;
      var i;
      t.el.style.top = `${t.el.offsetTop}px`;
      t.el.style[this.justify] =
        `${((e = t.el), this.justify === "left" ? e.offsetLeft : (((i = e.offsetParent instanceof HTMLElement ? e.offsetParent : null) == null ? undefined : i.offsetWidth) ?? 0) - e.offsetWidth - e.offsetLeft)}px`;
    });
    t.forEach((t) => {
      t.el.setAttribute("inert", "");
      t.present = false;
    });
  }
  addNewAndUpdateExisting(t) {
    let e = new Map();
    let i = new Map();
    let reverse = this.justify === "left";
    let s = reverse ? "prepend" : "append";
    ((t, e, { reverse = false } = {}) => {
      let t_length = t.length;
      for (
        let s = reverse ? t_length - 1 : 0;
        reverse ? s >= 0 : s < t_length;
        reverse ? s-- : s++
      ) {
        e(t[s], s);
      }
    })(
      t,
      (t) => {
        let r;
        if (this.children.has(t.key)) {
          r = this.children.get(t.key);
          i.set(t, r);
          this.unpop(r);
          r.present = true;
        } else {
          r = this.addChar(t, {
            startDigitsAtZero: true,
            animateIn: true,
          });
          e.set(t, r);
        }
        this.el[s](r.el);
      },
      {
        reverse,
      },
    );
    if (this.flow.computedAnimated) {
      let t = this.el.getBoundingClientRect();
      e.forEach((e) => {
        e.willUpdate(t);
      });
    }
    e.forEach((t, e) => {
      t.update(e.value);
    });
    i.forEach((t, e) => {
      t.update(e.value);
    });
  }
  willUpdate() {
    let t = this.el.getBoundingClientRect();
    this._prevOffset = t[this.justify];
    this.children.forEach((e) => e.willUpdate(t));
  }
  didUpdate() {
    let t = this.el.getBoundingClientRect();
    this.children.forEach((e) => e.didUpdate(t));
    let e = t[this.justify];
    let i = this._prevOffset - e;
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
class E extends S {
  update(t) {
    let e = new Map();
    this.children.forEach((i, r) => {
      if (!t.find((t) => t.key === r)) {
        e.set(r, i);
      }
      this.unpop(i);
    });
    this.addNewAndUpdateExisting(t);
    e.forEach((t) => {
      if (t instanceof R) {
        t.update(0);
      }
    });
    this.pop(e);
  }
}
class C extends S {
  update(t) {
    let e = new Map();
    this.children.forEach((i, r) => {
      if (!t.find((t) => t.key === r)) {
        e.set(r, i);
      }
    });
    this.pop(e);
    this.addNewAndUpdateExisting(t);
  }
}
class I {
  constructor(t, e, { onRemove, animateIn = false } = {}) {
    this.flow = t;
    this.el = e;
    this._present = true;
    this._remove = () => {
      var t;
      this.el.remove();
      if ((t = this._onRemove) != null) {
        t.call(this);
      }
    };
    this.el.classList.add("animate-presence");
    if (this.flow.computedAnimated && animateIn) {
      this.el.animate(
        {
          [l]: [-0.9999, 0],
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
  set present(t) {
    if (this._present !== t) {
      this._present = t;
      if (t) {
        this.el.removeAttribute("inert");
      } else {
        this.el.setAttribute("inert", "");
      }
      if (!this.flow.computedAnimated) {
        if (!t) {
          this._remove();
        }
        return;
      }
      this.el.style.setProperty("--_number-flow-d-opacity", t ? "0" : "-.999");
      this.el.animate(
        {
          [l]: t ? [-0.9999, 0] : [0.999, 0],
        },
        {
          ...this.flow.opacityTiming,
          composite: "accumulate",
        },
      );
      if (t) {
        this.flow.removeEventListener("animationsfinish", this._remove);
      } else {
        this.flow.addEventListener("animationsfinish", this._remove, {
          once: true,
        });
      }
    }
  }
}
class x extends I {
  constructor(t, e, i, r) {
    super(t.flow, i, r);
    this.section = t;
    this.value = e;
    this.el = i;
  }
}
class R extends x {
  constructor(t, e, i, r, s) {
    var n;
    var a;
    let length =
      (((a = (n = t.flow.digits) == null ? undefined : n[r]) == null
        ? undefined
        : a.max) ?? 9) + 1;
    let l = Array.from({
      length,
    }).map((t, e) => {
      let r = b(
        "span",
        {
          className: "digit__num",
        },
        [document.createTextNode(String(e))],
      );
      if (e !== i) {
        r.setAttribute("inert", "");
      }
      r.style.setProperty("--n", String(e));
      return r;
    });
    let c = b(
      "span",
      {
        part: `digit ${e}-digit`,
        className: "digit",
      },
      l,
    );
    c.style.setProperty("--current", String(i));
    c.style.setProperty("--length", String(length));
    super(t, i, c, s);
    this.pos = r;
    this._onAnimationsFinish = () => {
      this.el.classList.remove("is-spinning");
    };
    this._numbers = l;
    this.length = length;
  }
  willUpdate(t) {
    let e = this.el.getBoundingClientRect();
    this._prevValue = this.value;
    let i = e[this.section.justify] - t[this.section.justify];
    let r = e.width / 2;
    this._prevCenter = this.section.justify === "left" ? i + r : i - r;
  }
  update(t) {
    this.el.style.setProperty("--current", String(t));
    this._numbers.forEach((e, i) => {
      if (i === t) {
        return e.removeAttribute("inert");
      }
      return e.setAttribute("inert", "");
    });
    this.value = t;
  }
  didUpdate(t) {
    let e = this.el.getBoundingClientRect();
    let i = e[this.section.justify] - t[this.section.justify];
    let r = e.width / 2;
    let s = this.section.justify === "left" ? i + r : i - r;
    let n = this._prevCenter - s;
    if (n) {
      this.el.animate(
        {
          transform: [`translateX(${n}px)`, "none"],
        },
        {
          ...this.flow.transformTiming,
          composite: "accumulate",
        },
      );
    }
    let a = this.getDelta();
    if (a) {
      this.el.classList.add("is-spinning");
      this.el.animate(
        {
          [h]: [-a, 0],
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
    let t;
    if (this.flow.plugins) {
      for (let e of this.flow.plugins) {
        let i =
          (t = e.getDelta) == null
            ? undefined
            : t.call(e, this.value, this._prevValue, this);
        if (i != null) {
          return i;
        }
      }
    }
    let e = this.value - this._prevValue;
    let i = this.flow.computedTrend || Math.sign(e);
    if (i < 0 && this.value > this._prevValue) {
      return this.value - this.length - this._prevValue;
    }
    if (i > 0 && this.value < this._prevValue) {
      return this.length - this._prevValue + this.value;
    }
    return e;
  }
}
class T extends x {
  constructor(t, e, i, r) {
    let s = b("span", {
      className: "symbol__value",
      textContent: i,
    });
    super(
      t,
      i,
      b(
        "span",
        {
          part: `symbol ${e}`,
          className: "symbol",
        },
        [s],
      ),
      r,
    );
    this.type = e;
    this._children = new Map();
    this._onChildRemove = (t) => () => {
      this._children.delete(t);
    };
    this._children.set(
      i,
      new I(this.flow, s, {
        onRemove: this._onChildRemove(i),
      }),
    );
  }
  willUpdate(t) {
    if (this.type === "decimal") {
      return;
    }
    let e = this.el.getBoundingClientRect();
    this._prevOffset = e[this.section.justify] - t[this.section.justify];
  }
  update(t) {
    if (this.value !== t) {
      let e = this._children.get(this.value);
      if (e) {
        e.present = false;
      }
      let i = this._children.get(t);
      if (i) {
        i.present = true;
      } else {
        let e = b("span", {
          className: "symbol__value",
          textContent: t,
        });
        this.el.appendChild(e);
        this._children.set(
          t,
          new I(this.flow, e, {
            animateIn: true,
            onRemove: this._onChildRemove(t),
          }),
        );
      }
    }
    this.value = t;
  }
  didUpdate(t) {
    if (this.type === "decimal") {
      return;
    }
    let e =
      this.el.getBoundingClientRect()[this.section.justify] -
      t[this.section.justify];
    let i = this._prevOffset - e;
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
let $ = parseInt(r.version.match(/^(\d+)\./)?.[1]) >= 19;
class U extends A {
  attributeChangedCallback(t, e, i) {
    this[t] = JSON.parse(i);
  }
}
U.observedAttributes = $ ? [] : ["data", "digits"];
if (!customElements.get("number-flow-react")) {
  customElements.define("number-flow-react", U);
}
let P = {};
let M = $ ? (t) => t : JSON.stringify;
function N(props) {
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
class j extends r.Component {
  updateProperties(t) {
    if (!this.el) {
      return;
    }
    this.el.batched = !this.props.isolate;
    let [e] = N(this.props);
    Object.entries(e).forEach(([t, e]) => {
      this.el[t] = e ?? U.defaultProps[t];
    });
    if (t?.onAnimationsStart) {
      this.el.removeEventListener("animationsstart", t.onAnimationsStart);
    }
    if (this.props.onAnimationsStart) {
      this.el.addEventListener("animationsstart", this.props.onAnimationsStart);
    }
    if (t?.onAnimationsFinish) {
      this.el.removeEventListener("animationsfinish", t.onAnimationsFinish);
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
    if ($ && this.el) {
      this.el.digits = this.props.digits;
      this.el.data = this.props.data;
    }
  }
  getSnapshotBeforeUpdate(t) {
    this.updateProperties(t);
    if (t.data !== this.props.data) {
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
  componentDidUpdate(t, e, i) {
    i?.();
  }
  handleRef(t) {
    if (this.props.innerRef) {
      this.props.innerRef.current = t;
    }
    this.el = t;
  }
  render() {
    let [
      t,
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
    ] = N(this.props);
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
      digits: M(digits),
      data: M(data),
    });
  }
  constructor(t) {
    super(t);
    this.handleRef = this.handleRef.bind(this);
  }
}
export let Ay = r.forwardRef(function (
  { value, locales, format, prefix, suffix, ...rest },
  o,
) {
  r.useImperativeHandle(o, () => lRef.current, []);
  let lRef = r.useRef();
  let group = r.useContext(OContext);
  group?.useRegister(lRef);
  let u = r.useMemo(() => {
    if (locales) {
      return JSON.stringify(locales);
    }
    return "";
  }, [locales]);
  let h = r.useMemo(() => {
    if (format) {
      return JSON.stringify(format);
    }
    return "";
  }, [format]);
  let data = r.useMemo(
    () =>
      ((t, e, i, r) => {
        let s = e.formatToParts(t);
        if (i) {
          s.unshift({
            type: "prefix",
            value: i,
          });
        }
        if (r) {
          s.push({
            type: "suffix",
            value: r,
          });
        }
        let pre = [];
        let a = [];
        let fraction = [];
        let post = [];
        let c = {};
        let u = (t) => `${t}:${(c[t] = (c[t] ?? -1) + 1)}`;
        let valueAsString = "";
        let d = false;
        let p = false;
        for (let t of s) {
          valueAsString += t.value;
          let e =
            t.type === "minusSign" || t.type === "plusSign" ? "sign" : t.type;
          switch (e) {
            case "integer":
              d = true;
              a.push(
                ...t.value.split("").map((t) => ({
                  type: e,
                  value: parseInt(t),
                })),
              );
              break;
            case "group":
              a.push({
                type: e,
                value: t.value,
              });
              break;
            case "decimal":
              p = true;
              fraction.push({
                type: e,
                value: t.value,
                key: u(e),
              });
              break;
            case "fraction":
              fraction.push(
                ...t.value.split("").map((t) => ({
                  type: e,
                  value: parseInt(t),
                  key: u(e),
                  pos: -1 - c[e],
                })),
              );
              break;
            default:
              (d || p ? post : pre).push({
                type: e,
                value: t.value,
                key: u(e),
              });
          }
        }
        let integer = [];
        for (let t = a.length - 1; t >= 0; t--) {
          let e = a[t];
          integer.unshift(
            e.type === "integer"
              ? {
                  ...e,
                  key: u(e.type),
                  pos: c[e.type],
                }
              : {
                  ...e,
                  key: u(e.type),
                },
          );
        }
        return {
          pre,
          integer,
          fraction,
          post,
          valueAsString,
          value: typeof t === "string" ? parseFloat(t) : t,
        };
      })(
        value,
        (P[`${u}:${h}`] ??= new Intl.NumberFormat(locales, format)),
        prefix,
        suffix,
      ),
    [value, u, h, prefix, suffix],
  );
  return r.createElement(j, {
    ...rest,
    group,
    data,
    innerRef: lRef,
  });
});
let OContext = r.createContext(undefined);
export function rO({ children }) {
  let eRef = r.useRef(new Set());
  let iRef = r.useRef(false);
  let sRef = r.useRef(new WeakMap());
  let value = r.useMemo(
    () => ({
      useRegister(t) {
        r.useEffect(() => {
          eRef.current.add(t);
          return () => {
            eRef.current.delete(t);
          };
        }, []);
      },
      willUpdate() {
        if (!iRef.current) {
          iRef.current = true;
          eRef.current.forEach((t) => {
            let t_current = t.current;
            if (t_current && t_current.created) {
              t_current.willUpdate();
              sRef.current.set(t_current, true);
            }
          });
        }
      },
      didUpdate() {
        eRef.current.forEach((t) => {
          let t_current = t.current;
          if (t_current && sRef.current.get(t_current)) {
            t_current.didUpdate();
            sRef.current.delete(t_current);
          }
        });
        iRef.current = false;
      },
    }),
    [],
  );
  return r.createElement(
    OContext.Provider,
    {
      value,
    },
    children,
  );
}
((t = "") =>
  String_raw`:where(number-flow${t}){line-height:1}number-flow${t} > span{font-kerning:none;display:inline-block;padding:${m} 0}`)(
  "-react",
);
