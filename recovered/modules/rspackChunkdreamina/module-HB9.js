import i from "oa";
import l from "bk";
import s from "qa";
import n from "z8";
import a from "bT";
import o from "cA";
import d from "Po";
import h from "Ww";
import u from "Kb";
import c from "loc";
import g from "X5f";
import p from "xs";
import m from "nnL";
import f from "Hl";
import F from "N8";
import v from "V9";
import k from "mY";
import j from "uRn";
import T from "Sc";
import I from "k6B";
import P from "zP7";
import W from "GZq";
import U from "M1s";
import Z from "D7";
import Q from "Hu";
import H from "jDd";
import J from "TUl";
import X from "P7";
function b(e) {
  return m.A(e, (e) => {
    if (!v.Gv(e) && !v.cy(e)) {
      return e;
    }
  });
}
function y(e, t, r) {
  f.A(e, t, b(r));
  return e;
}
function x(e, t = "") {
  let r = new Set();
  let i = (e, t = "") => {
    if (!e || r.has(e)) {
      return [];
    }
    r.add(e);
    return Object.keys(e).reduce((acc, key) => {
      if (
        (v.Gv(e[key]) || v.cy(e[key])) &&
        Object.keys(e[key]).length &&
        !a.isValidElement(e[key])
      ) {
        return [...acc, ...i(e[key], `${t + key}.`)];
      }
      return [...acc, t + key];
    }, []);
  };
  return i(e, t);
}
function C(e) {
  let t;
  return (
    (e == null || (t = e.constructor) == null ? undefined : t.name) ===
      "SyntheticEvent" ||
    (e == null ? undefined : e.nativeEvent) instanceof Event
  );
}
class $ extends Error {
  constructor(e) {
    super("form validate error, get errors by error.errors");
    this.errors = {};
    this.errors = e;
  }
}
class A {
  notifyWatchers() {
    this.registerWatchers.forEach((e) => {
      e();
    });
  }
  triggerValuesChange(e) {
    if (e && Object.keys(e).length) {
      let { onValuesChange } = this.callbacks;
      if (onValuesChange) {
        onValuesChange(e, this.getFields());
      }
    }
    this.notifyWatchers();
  }
  triggerTouchChange(e) {
    if (e && Object.keys(e).length) {
      let { onChange } = this.callbacks;
      if (onChange) {
        onChange(e, this.getFields());
      }
    }
  }
  _getIterativelyKeysByField(e) {
    if (!e) {
      return [];
    }
    let t = []
      .concat(e)
      .map((e) => x(y({}, e, undefined)))
      .reduce((acc, item) => acc.concat(item), []);
    return [e, ...t];
  }
  _inTouchFields(e) {
    return this._getIterativelyKeysByField(e).some((e) =>
      g.A(this.touchedFields, e),
    );
  }
  _popTouchField(e) {
    if (e === undefined) {
      this.touchedFields = {};
    }
    let t = this._getIterativelyKeysByField(e);
    this.touchedFields = p.A(this.touchedFields, t);
  }
  _pushTouchField(e) {
    [].concat(e).forEach((e) => {
      c.A(this.touchedFields, e, undefined, Object);
    });
  }
  constructor() {
    var e;
    this.registerFields = [];
    this.registerWatchers = [];
    this.touchedFields = {};
    this.store = {};
    this.initialValues = {};
    this.callbacks = {};
    this.innerSetCallbacks = (e) => {
      this.callbacks = e;
    };
    this.registerWatcher = (e) => {
      this.registerWatchers.push(e);
      return () => {
        this.registerWatchers = this.registerWatchers.filter((t) => t !== e);
      };
    };
    this.registerField = (e) => {
      this.registerFields.push(e);
      this.notifyWatchers();
      return () => {
        this.registerFields = this.registerFields.filter((t) => t !== e);
        this.notifyWatchers();
      };
    };
    this.getRegisteredFields = (e) => {
      if (e) {
        return this.registerFields.filter((e) => {
          var t;
          return (
            e.hasFieldProps() &&
            !((t = e.props) == null ? undefined : t.isFormList)
          );
        });
      }
      return this.registerFields;
    };
    this.getRegisteredField = (e) =>
      this.registerFields.filter((t) => t.props.field === e)[0];
    this.notify = (e, t) => {
      if (!(e !== "setFieldValue" && (e !== "innerSetValue" || t.ignore))) {
        this._pushTouchField(
          t.changeValues
            ? x(t.changeValues)
            : this._getIterativelyKeysByField(t.field),
        );
      }
      this.registerFields.forEach((r) => {
        if (r.onStoreChange) {
          r.onStoreChange(
            e,
            l._(i._({}, t), {
              current: this.store,
            }),
          );
        }
      });
    };
    this.innerSetInitialValues = (e) => {
      if (e) {
        this.initialValues = b(e);
        Object.keys(e).forEach((t) => {
          y(this.store, t, e[t]);
        });
      }
    };
    this.innerSetInitialValue = (e, t) => {
      if (e) {
        this.initialValues[e] = t;
        if (!this._inTouchFields(e)) {
          y(this.store, e, u.A(this.initialValues, e));
        }
      }
    };
    this.innerSetFieldValue = (e, t, r) => {
      if (!e) {
        return;
      }
      let s = b(this.store);
      y(this.store, e, t);
      this.triggerValuesChange({
        [e]: t,
      });
      this.triggerTouchChange({
        [e]: t,
      });
      this.notify(
        "innerSetValue",
        l._(
          i._(
            {
              prev: s,
              field: e,
            },
            r,
          ),
          {
            changeValues: {
              [e]: t,
            },
          },
        ),
      );
    };
    this.innerGetStore = () => this.store;
    this.getTouchedFields = () =>
      this.getRegisteredFields(true)
        .filter((e) => e.isTouched())
        .map((e) => e.props.field);
    this.setFieldValue = (e, t) => {
      if (e) {
        this.setFields({
          [e]: {
            value: t,
          },
        });
      }
    };
    this.setFieldsValue = (e) => {
      if (v.Gv(e)) {
        let t = Object.keys(e);
        let r = {};
        t.forEach((t) => {
          r[t] = {
            value: e[t],
          };
        });
        this.setFields(r);
      }
    };
    this.setFields = (e) => {
      let t = Object.keys(e);
      let r = {};
      t.forEach((t) => {
        let i = e[t];
        let l = b(this.store);
        if (i) {
          let e = {};
          if ("error" in i) {
            e.errors = i.error;
          }
          if ("warning" in i) {
            e.warnings = i.warning;
          }
          if ("touched" in i) {
            e.touched = i.touched;
          }
          if ("value" in i) {
            y(this.store, t, i.value);
            r[t] = i.value;
          }
          this.notify("setFieldValue", {
            data: e,
            prev: l,
            field: t,
            changeValues: {
              [t]: i.value,
            },
          });
        }
      });
      this.triggerValuesChange(r);
    };
    this.getFieldValue = (e) => b(u.A(this.store, e));
    this.getFieldError = (e) => {
      let t = this.getRegisteredField(e);
      if (t) {
        return t.getErrors();
      }
      return null;
    };
    this.getFieldsError = (e) => {
      let t = {};
      if (v.cy(e)) {
        e.map((e) => {
          let r = this.getFieldError(e);
          if (r) {
            t[e] = r;
          }
        });
      } else {
        this.getRegisteredFields(true).forEach((e) => {
          if (e.getErrors()) {
            t[e.props.field] = e.getErrors();
          }
        });
      }
      return t;
    };
    this.getFields = () => b(this.store);
    this.getFieldsValue = (e) => {
      let t = {};
      if (v.cy(e)) {
        e.forEach((e) => {
          y(t, e, this.getFieldValue(e));
        });
      } else {
        this.getRegisteredFields(true).forEach(({ props: { field } }) => {
          let r = u.A(this.store, field);
          y(t, field, r);
        });
      }
      return t;
    };
    this.resetFields = (e) => {
      let t = b(this.store);
      let r = v.Kg(e) ? [e] : e;
      if (r && v.cy(r)) {
        let e = {};
        r.forEach((t) => {
          y(this.store, t, this.initialValues[t]);
          e[t] = u.A(this.store, t);
        });
        this.triggerValuesChange(e);
        this.notify("reset", {
          prev: t,
          field: r,
        });
        this._popTouchField(r);
      } else {
        let e = {};
        let r = b(this.store);
        Object.keys(this.initialValues).forEach((t) => {
          y(e, t, this.initialValues[t]);
        });
        this.store = e;
        this.getRegisteredFields(true).forEach((e) => {
          let field = e.props.field;
          y(r, field, u.A(this.store, field));
        });
        this.triggerValuesChange(r);
        this._popTouchField();
        this.notify("reset", {
          prev: t,
          field: Object.keys(r),
        });
      }
    };
    this.validate = Object.defineProperty(
      function (...t) {
        if (typeof t[t.length - 1] !== "function") {
          return new Promise((resolve, reject) => {
            t[t.length] = (e, t) => {
              if (e) {
                return reject(new $(e));
              }
              resolve(t);
            };
            t.length++;
            e.apply(this, t);
          });
        }
        e.apply(this, t);
      },
      "name",
      {
        value: (e = (e, t) => {
          let r = () => {};
          let l = this.getRegisteredFields(true);
          if (v.cy(e) && e.length > 0) {
            l = l.filter((t) => e.indexOf(t.props.field) > -1);
            r = t || r;
          } else if (typeof e === "function") {
            r = e;
          }
          Promise.all(l.map((e) => e.validateField())).then((e) => {
            let t = {};
            let l = {};
            e.map((e) => {
              if (e.error) {
                t = i._({}, t, e.error);
              }
              y(l, e.field, e.value);
            });
            if (Object.keys(t).length) {
              let { onValidateFail } = this.callbacks;
              if (onValidateFail) {
                onValidateFail(t);
              }
              if (r) {
                r(t, b(l));
              }
            } else {
              if (r) {
                r(null, b(l));
              }
            }
          });
        }).name,
      },
    );
    this.submit = () => {
      this.validate((e, t) => {
        if (e) {
          let { onSubmitFailed } = this.callbacks;
          if (onSubmitFailed) {
            onSubmitFailed(e);
          }
        } else {
          let { onSubmit } = this.callbacks;
          if (onSubmit) {
            onSubmit(t);
          }
        }
      });
    };
    this.clearFields = (e) => {
      let t = b(this.store);
      let r = v.Kg(e) ? [e] : e;
      if (r && v.cy(r)) {
        let e = {};
        r.forEach((t) => {
          y(this.store, t, undefined);
          e[t] = u.A(this.store, t);
        });
        this.triggerValuesChange(e);
        this.notify("setFieldValue", {
          prev: t,
          field: r,
          data: {
            errors: null,
            warnings: null,
          },
        });
      } else {
        let e = {};
        this.store = {};
        this.getRegisteredFields(true).forEach((t) => {
          y(e, t.props.field, undefined);
        });
        this.triggerValuesChange(e);
        this.notify("setFieldValue", {
          prev: t,
          field: Object.keys(e),
          data: {
            errors: null,
            warnings: null,
          },
        });
      }
    };
  }
}
function useV(e) {
  let tRef = a.useRef(e);
  if (!tRef.current) {
    if (e) {
      tRef.current = e;
    } else {
      let e;
      tRef.current = {
        getFieldsValue: (e = new A()).getFieldsValue,
        getFieldValue: e.getFieldValue,
        getFieldError: e.getFieldError,
        getFieldsError: e.getFieldsError,
        getTouchedFields: e.getTouchedFields,
        getFields: e.getFields,
        setFieldValue: e.setFieldValue,
        setFieldsValue: e.setFieldsValue,
        setFields: e.setFields,
        resetFields: e.resetFields,
        clearFields: e.clearFields,
        submit: e.submit,
        validate: e.validate,
        scrollToField: () => {},
        getInnerMethods: (t) => {
          let r = {};
          if (t) {
            [
              "registerField",
              "registerWatcher",
              "innerSetInitialValues",
              "innerSetInitialValue",
              "innerSetCallbacks",
              "innerSetFieldValue",
              "innerGetStore",
            ].map((t) => {
              r[t] = e[t];
            });
          }
          return r;
        },
      };
    }
  }
  return [tRef.current];
}
let _Context = a.createContext({
  layout: "horizontal",
  labelCol: {
    span: 5,
    offset: 0,
  },
  labelAlign: "right",
  wrapperCol: {
    span: 19,
    offset: 0,
  },
  requiredSymbol: true,
  getFormElementId: () => "lv-",
  store: {
    getFieldsValue: j.tE,
    getFieldValue: j.tE,
    getFieldError: j.tE,
    getFieldsError: j.tE,
    getTouchedFields: j.tE,
    getFields: j.tE,
    setFieldValue: j.tE,
    setFieldsValue: j.tE,
    setFields: j.tE,
    resetFields: j.tE,
    submit: j.tE,
    validate: j.tE,
    scrollToField: j.tE,
    getInnerMethods: () => ({
      registerField: j.tE,
    }),
  },
});
let EContext = a.createContext({});
let WContext = a.createContext({});
let SContext = a.createContext({});
function N(e, t) {
  let r = t.replace(/[\[\.]/g, "_").replace(/\]/g, "");
  if (e) {
    return `${e}-${r}`;
  }
  return `${r}`;
}
let R = {
  layout: "horizontal",
  labelCol: {
    span: 5,
    offset: 0,
  },
  labelAlign: "left",
  wrapperCol: {
    span: 19,
    offset: 0,
  },
  requiredSymbol: true,
  wrapper: "form",
  validateTrigger: "onChange",
};
let O = a.forwardRef((e, t) => {
  var r;
  var u;
  let c = a.useContext(k.QO);
  let g = a.useContext(WContext);
  let pRef = a.useRef(null);
  let [m] = useV(e.form);
  let fRef = a.useRef();
  let F = I.A(e, R, (r = c.componentConfig) == null ? undefined : r.Form);
  let {
    layout,
    labelCol,
    wrapperCol,
    wrapper,
    id,
    requiredSymbol,
    labelAlign,
    disabled,
    colon,
    className,
    validateTrigger,
    prefixCls,
    validateMessages,
  } = F;
  let z = s._(F, [
    "layout",
    "labelCol",
    "wrapperCol",
    "wrapper",
    "id",
    "requiredSymbol",
    "labelAlign",
    "disabled",
    "colon",
    "className",
    "validateTrigger",
    "prefixCls",
    "validateMessages",
  ]);
  let q = prefixCls || c.getPrefixCls("form");
  let { rtl } = c;
  let size = "size" in F ? F.size : c.size;
  let K = m.getInnerMethods(true);
  if (!fRef.current) {
    K.innerSetInitialValues(F.initialValues);
  }
  a.useEffect(() => {
    fRef.current = true;
  }, []);
  a.useEffect(() => {
    let e;
    if (g.register) {
      e = g.register(F.id, m);
    }
    return e;
  }, [F.id, m]);
  a.useImperativeHandle(t, () => m);
  m.scrollToField = (e, t) => {
    let pRef_current = pRef.current;
    let { id } = F;
    if (!pRef_current) {
      return;
    }
    let s = pRef_current.querySelector(`#${N(id, e)}`);
    if (!s) {
      s = pRef_current.querySelector(`#${N(id, e)}_input`);
    }
    if (s) {
      o.A(
        s,
        i._(
          {
            behavior: "smooth",
            block: "nearest",
            scrollMode: "if-needed",
          },
          t,
        ),
      );
    }
  };
  K.innerSetCallbacks({
    onValuesChange: (e, t) => {
      if (F.onValuesChange) {
        F.onValuesChange(e, t);
      }
      if (g.onFormValuesChange) {
        g.onFormValuesChange(F.id, e);
      }
    },
    onChange: F.onChange,
    onValidateFail: (e) => {
      if (F.scrollToFirstError) {
        let t = v.Gv(F.scrollToFirstError) ? F.scrollToFirstError : {};
        m.scrollToField(Object.keys(e)[0], t);
      }
    },
    onSubmitFailed: F.onSubmitFailed,
    onSubmit: (e) => {
      if (F.onSubmit) {
        F.onSubmit(e);
      }
      if (g.onFormSubmit) {
        g.onFormSubmit(F.id, e);
      }
    },
  });
  let B = {
    requiredSymbol,
    labelAlign,
    disabled,
    colon,
    labelCol,
    wrapperCol,
    layout,
    store: m,
    prefixCls: q,
    validateTrigger,
    validateMessages: d.A(
      {},
      (u = c.locale.Form) == null ? undefined : u.validateMessages,
      validateMessages,
    ),
    getFormElementId: (e) => N(id, e),
  };
  return n.jsx(
    k.Ay,
    l._(i._({}, c), {
      size,
      children: n.jsx(_Context.Provider, {
        value: B,
        children: n.jsx(
          wrapper,
          l._(
            i._(
              {
                ref: pRef,
              },
              T.A(z, [
                "form",
                "size",
                "initialValues",
                "onValuesChange",
                "onChange",
                "wrapperProps",
                "scrollToFirstError",
                "onSubmit",
                "onSubmitFailed",
              ]),
              F.wrapperProps,
            ),
            {
              className: h.A(
                q,
                `${q}-${layout}`,
                `${q}-size-${size}`,
                {
                  [`${q}-rtl`]: rtl,
                },
                className,
              ),
              style: F.style,
              onSubmit: (e) => {
                e.preventDefault();
                e.stopPropagation();
                m.submit();
              },
              id,
              children: F.children,
            },
          ),
        ),
      }),
    }),
  );
});
O.displayName = "Form";
let LContext = a.createContext({});
let M = {
  span: 24,
};
function z(flex) {
  if (typeof flex === "string" && /\d+[px|%|em|rem|]{1}/.test(flex)) {
    return `0 0 ${flex}`;
  }
  return flex;
}
let Col_1 = a.forwardRef(function (e, t) {
  let r;
  let o;
  let { getPrefixCls, componentConfig, rtl } = a.useContext(k.QO);
  let g = I.A(
    e,
    M,
    componentConfig == null ? undefined : componentConfig["Grid.Col"],
  );
  let { gutter, div } = a.useContext(LContext);
  let {
    className,
    style,
    children,
    span,
    offset,
    order,
    pull,
    push,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    xxxl,
    flex,
  } = g;
  let R = s._(g, [
    "className",
    "style",
    "children",
    "span",
    "offset",
    "order",
    "pull",
    "push",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "xxl",
    "xxxl",
    "flex",
  ]);
  let O = getPrefixCls("col");
  let P = {
    [`${O}`]: !div,
    [`${O}-order-${order}`]: order,
    [`${O}-${span}`]: !div && !xs && !sm && !md && !lg && !xl && !xxl && !xxxl,
    [`${O}-offset-${offset}`]: offset,
    [`${O}-pull-${pull}`]: pull,
    [`${O}-push-${push}`]: push,
    [`${O}-rtl`]: rtl,
  };
  r = P;
  Object.keys(
    (o = {
      xs,
      sm,
      md,
      lg,
      xl,
      xxl,
      xxxl,
    }),
  ).forEach((e) => {
    let t = o[e];
    if (v.Et(t)) {
      if (t >= 0) {
        r[`${O}-${e}-${t}`] = true;
      }
    } else if (v.Gv(t)) {
      r[`${O}-${e}-${t.span}`] = t.span;
      r[`${O}-${e}-offset-${t.offset}`] = t.offset;
      r[`${O}-${e}-order-${t.order}`] = t.order;
      r[`${O}-${e}-pull-${t.pull}`] = t.pull;
      r[`${O}-${e}-push-${t.push}`] = t.push;
    }
  });
  P = r;
  let q = h.A(flex ? O : P, className);
  let W = {};
  if (Array.isArray(gutter) && !div) {
    let e = (gutter[0] && gutter[0] / 2) || 0;
    let t = (gutter[1] && gutter[1] / 2) || 0;
    if (e) {
      W.paddingLeft = e;
      W.paddingRight = e;
    }
    if (t) {
      W.paddingTop = t;
      W.paddingBottom = t;
    }
  }
  let G = a.useMemo(() => {
    if (z(flex)) {
      return {
        flex: z(flex),
      };
    }
    return {};
  }, [flex]);
  return n.jsx(
    "div",
    l._(
      i._(
        {
          ref: t,
        },
        R,
      ),
      {
        style: i._({}, style, W, G),
        className: q,
        children,
      },
    ),
  );
});
Col_1.displayName = "Col";
let G = {
  gutter: 0,
  align: "start",
  justify: "start",
};
let Row_1 = a.forwardRef(function (e, t) {
  let { getPrefixCls, componentConfig, rtl } = a.useContext(k.QO);
  let u = I.A(
    e,
    G,
    componentConfig == null ? undefined : componentConfig["Grid.Row"],
  );
  let { className, style, children, div, align, justify, gutter } = u;
  let b = s._(u, [
    "className",
    "style",
    "children",
    "div",
    "align",
    "justify",
    "gutter",
  ]);
  let [y, setY] = a.useState({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true,
    xxxl: true,
  });
  let CRef = a.useRef();
  function $(e) {
    let t = 0;
    if (typeof e === "object") {
      for (let r = 0; r < W.ye.length; r++) {
        let i = W.ye[r];
        if (y[i] && e[i] !== undefined) {
          t = e[i];
          break;
        }
      }
    } else {
      t = e;
    }
    return t;
  }
  a.useEffect(() => {
    CRef.current = W.Ay.subscribe((e) => {
      if (
        (!Array.isArray(gutter) && typeof gutter === "object") ||
        (Array.isArray(gutter) &&
          (typeof gutter[0] === "object" || typeof gutter[1] === "object"))
      ) {
        setY(e);
      }
    });
    return () => {
      W.Ay.unsubscribe(CRef.current);
    };
  }, []);
  let A = getPrefixCls("row");
  let V = h.A(
    {
      [`${A}`]: !div,
      [`${A}-align-${align}`]: align,
      [`${A}-justify-${justify}`]: justify,
      [`${A}-rtl`]: rtl,
    },
    className,
  );
  let j = {};
  let _ = $(Array.isArray(gutter) ? gutter[0] : gutter);
  let E = $(Array.isArray(gutter) ? gutter[1] : 0);
  if ((_ || E) && !div) {
    let e = -_ / 2;
    let t = -E / 2;
    if (e) {
      j.marginLeft = e;
      j.marginRight = e;
    }
    if (t) {
      j.marginTop = t;
      j.marginBottom = t;
    }
  }
  return n.jsx(
    "div",
    l._(
      i._(
        {
          ref: t,
        },
        T.A(b, ["gutter"]),
      ),
      {
        style: i._({}, style, j),
        className: V,
        children: n.jsx(LContext.Provider, {
          value: {
            gutter: [_, E],
            div,
          },
          children,
        }),
      },
    ),
  );
});
Row_1.displayName = "Row";
const B = {
  Col: Col_1,
  Row: Row_1,
};
let D = "error";
function Y(e, t) {
  let r = c.A({}, e, undefined, Object);
  return t.some((e) => g.A(r, e));
}
class ee extends a.Component {
  componentDidMount() {
    let { store } = this.context;
    if (store) {
      let t = store.getInnerMethods(true);
      this.removeRegisterField = t.registerField(this);
    }
    this.isDestroyed = false;
  }
  componentDidUpdate(e) {
    if (
      e.field !== this.props.field &&
      this.props._key &&
      e._key === this.props._key
    ) {
      this.updateFormItem();
      this.clearFormItemError(e.field);
    }
  }
  componentWillUnmount() {
    if (this.removeRegisterField) {
      this.removeRegisterField();
    }
    this.removeRegisterField = null;
    this.clearFormItemError();
    this.isDestroyed = true;
  }
  getValidateTrigger() {
    let e =
      this.props.validateTrigger || this.context.validateTrigger || "onChange";
    let t = this.props.rules || [];
    let r = [];
    t.map((t) => {
      r = r.concat(t.validateTrigger || e);
    });
    return Array.from(new Set(r));
  }
  renderControl(e, t) {
    let r;
    let {
      field,
      trigger = "onChange",
      triggerPropName = "value",
      validateStatus,
      formatter,
    } = this.props;
    let { store, disabled } = this.context;
    let c = "disabled" in this.props ? this.props.disabled : disabled;
    let g = a.Children.only(e);
    let p = {
      id: h.A(
        ((r = g.props) == null ? undefined : r.id) || {
          [`${t}_input`]: t,
        },
      ),
    };
    this.getValidateTrigger().forEach((e) => {
      p[e] = (t) => {
        this.validateField(e);
        if (g.props[e]) {
          g.props[e](t);
        }
      };
    });
    p[trigger] = this.handleTrigger;
    if (c !== undefined) {
      p.disabled = c;
    }
    let m = store.getFieldValue(field);
    if (v.Tn(formatter)) {
      m = formatter(m);
    }
    p[triggerPropName] = m;
    if (!validateStatus && this.errors) {
      p.error = true;
    }
    return a.cloneElement(g, p);
  }
  render() {
    let { noStyle, field, isFormList, hasFeedback } = this.props;
    let l = this.props.validateStatus || (this.errors ? "error" : "");
    let { prefixCls, getFormElementId } = this.context;
    let d = this.getChild();
    let id = this.hasFieldProps() ? getFormElementId(field) : undefined;
    if (this.hasFieldProps() && !isFormList && a.Children.count(d) === 1) {
      d = this.renderControl(d, id);
    }
    if (noStyle) {
      return d;
    }
    return n.jsx("div", {
      className: `${prefixCls}-item-control-wrapper`,
      children: n.jsx("div", {
        className: `${prefixCls}-item-control`,
        id,
        children: n.jsxs("div", {
          className: `${prefixCls}-item-control-children`,
          children: [
            d,
            l &&
              hasFeedback &&
              n.jsxs("div", {
                className: `${prefixCls}-item-feedback`,
                children: [
                  l === "warning" && n.jsx(Q.A, {}),
                  l === "success" && n.jsx(J.A, {}),
                  l === "error" && n.jsx(H.A, {}),
                  l === "validating" && n.jsx(X.A, {}),
                ],
              }),
          ],
        }),
      }),
    });
  }
  constructor(e, t) {
    super(e);
    this.errors = null;
    this.warnings = null;
    this.isDestroyed = false;
    this.childrenElement = null;
    this.getErrors = () => this.errors;
    this.isTouched = () => this.touched;
    this.hasFieldProps = () => !!this.props.field;
    this.clearFormItemError = (e = this.props.field) => {
      let { updateFormItem } = this.context;
      if (updateFormItem) {
        updateFormItem(e, {
          errors: null,
          warnings: null,
        });
      }
    };
    this.updateFormItem = () => {
      if (this.isDestroyed) {
        return;
      }
      this.forceUpdate();
      let { updateFormItem } = this.context;
      if (updateFormItem) {
        updateFormItem(this.props.field, {
          errors: this.errors,
          warnings: this.warnings,
        });
      }
    };
    this.onStoreChange = (e, t) => {
      let r = v.cy(t.field) ? t.field : [t.field];
      let { field, shouldUpdate, dependencies } = this.props;
      let a = (e) => {
        if (dependencies && shouldUpdate) {
          Z.A(true, "`shouldUpdate` of the `Form.Item` will be ignored.");
        }
        if (dependencies) {
          if (
            (v.cy(dependencies) || dependencies.some((e) => Y(e, r))) &&
            this.isTouched()
          ) {
            this.validateField();
          }
        } else {
          if (
            shouldUpdate &&
            (v.Tn(shouldUpdate)
              ? shouldUpdate(
                  t.prev,
                  t.current,
                  i._(
                    {
                      field: t.field,
                    },
                    e,
                  ),
                )
              : !U.A(t.prev, t.current))
          ) {
            this.updateFormItem();
          }
        }
      };
      switch (e) {
        case "reset":
          this.touched = false;
          this.errors = null;
          this.warnings = null;
          if (dependencies || shouldUpdate) {
            a();
          } else {
            this.updateFormItem();
          }
          break;
        case "innerSetValue":
          if (Y(field, r)) {
            this.touched = true;
            this.updateFormItem();
            return;
          }
          a({
            isInner: true,
            isFormList: t.isFormList,
          });
          break;
        case "setFieldValue":
          if (Y(field, r)) {
            this.touched = true;
            if (t.data && "touched" in t.data) {
              this.touched = t.data.touched;
            }
            if (t.data && "warnings" in t.data) {
              this.warnings = v.hX(t.data.warnings)
                ? []
                : [].concat(t.data.warnings);
            }
            if (t.data && "errors" in t.data) {
              this.errors = t.data.errors;
            } else if (!U.A(u.A(t.prev, field), u.A(t.current, field))) {
              this.errors = null;
            }
            this.updateFormItem();
            return;
          }
          a();
      }
    };
    this.innerSetFieldValue = (e, t) => {
      if (!e) {
        return;
      }
      let { store } = this.context;
      store.getInnerMethods(true).innerSetFieldValue(e, t);
      let l = {};
      f.A(l, e, t);
      if (this.props.onValuesChange) {
        this.props.onValuesChange(l, i._({}, store.getFieldsValue()));
      }
    };
    this.validateField = (e) => {
      let { store, validateTrigger, validateMessages } = this.context;
      let { field, rules, validateTrigger: validateTrigger_1 } = this.props;
      let o = store.getFieldValue(field);
      let d = e
        ? (rules || []).filter(
            (t) =>
              []
                .concat(
                  t.validateTrigger || validateTrigger_1 || validateTrigger,
                )
                .indexOf(e) > -1,
          )
        : rules;
      if (d && d.length && field) {
        let e;
        let t;
        return ((e = [...d]),
        (t = 0),
        new Promise((resolve) => {
          let warning = [];
          let a = (d) => {
            let h = () => {
              if (t < e.length - 1) {
                return a(e[++t]);
              }
              return resolve({
                error: null,
                warning,
              });
            };
            if (!d) {
              return h();
            }
            let u = i._({}, d);
            if (!(u.type || u.validator)) {
              u.type = "string";
            }
            new F.Sj(
              {
                [field]: [u],
              },
              {
                ignoreEmptyString: true,
                validateMessages,
              },
            ).validate(
              {
                [field]: o,
              },
              (error) => {
                if (error) {
                  if (d.validateLevel !== "warning") {
                    return resolve({
                      error,
                      warning,
                    });
                  } else {
                    warning.push(error[field].message);
                  }
                }
                return h();
              },
            );
          };
          a(e[t]);
        })).then(({ error, warning }) => {
          this.errors = error ? error[field] : null;
          this.warnings = warning || null;
          this.updateFormItem();
          return Promise.resolve({
            error,
            value: o,
            field,
          });
        });
      }
      if (this.errors) {
        this.errors = null;
        this.warnings = null;
        this.updateFormItem();
      }
      return Promise.resolve({
        error: null,
        value: o,
        field,
      });
    };
    this.handleTrigger = (e, ...t) => {
      let r = this.childrenElement || this.props.children;
      let { store } = this.context;
      let { field, trigger, normalize, getValueFromEvent } = this.props;
      let h = v.Tn(getValueFromEvent) ? getValueFromEvent(e, ...t) : e;
      let u = h;
      if (C(h)) {
        Z.A(
          true,
          "changed value missed, please check whether extra elements is outta input/select controled by Form.Item",
        );
        h.stopPropagation();
        return;
      }
      if (typeof normalize === "function") {
        u = normalize(
          h,
          store.getFieldValue(field),
          i._({}, store.getFieldsValue()),
        );
      }
      this.touched = true;
      this.innerSetFieldValue(field, u);
      this.validateField(trigger);
      if (a.isValidElement(r) && r.props && r.props[trigger]) {
        r.props[trigger](u, ...t);
      }
    };
    this.getChild = () => {
      let { children } = this.props;
      let { store } = this.context;
      let r = children;
      if (v.Tn(children)) {
        r = children(store.getFields(), i._({}, store));
      }
      this.childrenElement = r;
      return r;
    };
    if ("initialValue" in e && this.hasFieldProps()) {
      t.store
        .getInnerMethods(true)
        .innerSetInitialValue(e.field, e.initialValue);
    }
  }
}
ee.defaultProps = {
  trigger: "onChange",
  triggerPropName: "value",
};
ee.isFormControl = true;
ee.contextType = EContext;
const et = ({
  htmlFor,
  showColon,
  label,
  requiredSymbol,
  required,
  rules,
  prefix,
}) => {
  let o = v.cy(rules) && rules.some((e) => e && e.required);
  let d = v.Gv(requiredSymbol) ? requiredSymbol.position : "end";
  let h =
    (required || o) &&
    !!requiredSymbol &&
    n.jsx("strong", {
      className: `${prefix}-form-item-symbol`,
      children: n.jsx("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 8 7",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        children: n.jsx("path", {
          d: "M3.454 0.00399935L3.608 2.58L1.256 1.628L0.85 2.832L3.314 3.504L1.62 5.422L2.614 6.206L4.098 4.064L5.568 6.206L6.562 5.422L4.868 3.504L7.346 2.832L6.94 1.628L4.588 2.58L4.742 0.00399935H3.454Z",
        }),
      }),
    });
  if (label) {
    return n.jsxs("label", {
      htmlFor: htmlFor && `${htmlFor}_input`,
      children: [
        d !== "end" && h,
        " ",
        label,
        d === "end" &&
          n.jsx(n.Fragment, {
            children: h,
          }),
        showColon ? (showColon === true ? ":" : showColon) : "",
      ],
    });
  }
  return null;
};
let { Row } = B;
let { Col } = B;
let el = ({ prefixCls, help, errors, warnings }) => {
  let l = errors.map((e, t) => {
    if (e) {
      return n.jsx(
        "div",
        {
          role: "alert",
          children: e.message,
        },
        t,
      );
    }
  });
  let s = [];
  warnings.map((t, r) => {
    s.push(
      n.jsx(
        "div",
        {
          role: "alert",
          className: `${prefixCls}-message-help-warning`,
          children: t,
        },
        r,
      ),
    );
  });
  let a = !v.b0(help) || !!s.length;
  let o = a || !!l.length;
  return (
    o &&
    n.jsx(P.A, {
      in: o,
      appear: true,
      classNames: "formblink",
      timeout: 300,
      unmountOnExit: true,
      children: n.jsx("div", {
        className: h.A(`${prefixCls}-message`, {
          [`${prefixCls}-message-help`]: a,
        }),
        children: v.b0(help)
          ? n.jsxs(n.Fragment, {
              children: [l.length > 0 && l, s.length > 0 && s],
            })
          : help,
      }),
    })
  );
};
let es = a.forwardRef((e, t) => {
  var r;
  var o;
  let d;
  let u;
  let { getPrefixCls, prefixCls } = a.useContext(k.QO);
  let p = a.useContext(EContext);
  let f = a.useContext(SContext);
  let [F, setF] = a.useState(null);
  let [y, setY] = a.useState(null);
  let C = a.useContext(_Context);
  let $ = C.prefixCls || getPrefixCls("form");
  let A = e.layout || C.layout;
  let V = e.labelAlign || C.labelAlign;
  let jRef = a.useRef(false);
  let updateFormItem =
    v.Gv(e.noStyle) && e.noStyle.showErrorTip && p.updateFormItem
      ? p.updateFormItem
      : (e, t = {}) => {
          if (jRef.current) {
            return;
          }
          let { errors, warnings } = t || {};
          setF((t) => {
            let l = i._({}, t || {});
            if (errors) {
              l[e] = errors;
            } else {
              delete l[e];
            }
            return l;
          });
          setY((t) => {
            let r = i._({}, t || {});
            if (warnings && warnings.length) {
              r[e] = warnings;
            } else {
              delete r[e];
            }
            return r;
          });
        };
  a.useEffect(() => {
    jRef.current = false;
    return () => {
      jRef.current = true;
      setF(null);
      setY(null);
    };
  }, []);
  let I = l._(i._({}, C), {
    validateMessages:
      C.validateMessages &&
      ((d = C.validateMessages),
      (u = {
        label: e.label,
      }),
      m.A(d, (e) => {
        if (v.Tn(e)) {
          return (t) => e(t, u);
        }
      })),
    prefixCls: $,
    updateFormItem,
    disabled: "disabled" in e ? e.disabled : C.disabled,
  });
  let { label, extra, className, style, validateStatus, hidden } = e;
  let z = s._(e, [
    "label",
    "extra",
    "className",
    "style",
    "validateStatus",
    "hidden",
  ]);
  let q = h.A(`${$}-label-item`, {
    [`${$}-label-item-left`]: V === "left",
  });
  let errors = F ? Object.values(F) : [];
  let warnings = y
    ? Object.values(y).reduce((acc, item) => acc.concat(item), [])
    : [];
  let K = a.useMemo(
    () =>
      validateStatus ||
      (errors.length ? D : warnings.length ? "warning" : undefined),
    [F, y, validateStatus],
  );
  let B = a.useMemo(() => !v.b0(e.help) || warnings.length > 0, [e.help, y]);
  let U = h.A(
    `${$}-item`,
    {
      [`${$}-item-error`]: B || (!validateStatus && K === D),
      [`${$}-item-status-${K}`]: K,
      [`${$}-item-has-help`]: B,
      [`${$}-item-hidden`]: hidden,
      [`${$}-item-has-feedback`]: K && e.hasFeedback,
      [`${$}-item-extra`]: extra,
    },
    `${$}-layout-${A}`,
    className,
  );
  let Z = () => {
    let { field, children } = e;
    let disabled = "disabled" in e ? e.disabled : C.disabled;
    if (v.Tn(children)) {
      return n.jsx(
        ee,
        l._(
          i._(
            {
              disabled,
            },
            e,
            field
              ? {
                  key: field,
                  _key: field,
                }
              : {},
          ),
          {
            children: (...e) => children(...e),
          },
        ),
      );
    }
    if (v.cy(children)) {
      let t = a.Children.map(children, (e, t) => {
        let key = (v.Gv(e) && e.key) || t;
        let i = v.b0(disabled)
          ? {
              key,
            }
          : {
              key,
              disabled,
            };
        if (v.Gv(e)) {
          return a.cloneElement(e, i);
        }
        return e;
      });
      return n.jsx(
        ee,
        l._(i._({}, e), {
          field: undefined,
          children: t,
        }),
      );
    }
    if (a.Children.count(children) === 1) {
      var o;
      var d;
      if (field) {
        let n =
          (f == null || (o = f.getItemKey) == null
            ? undefined
            : o.call(f, field)) || field;
        return a.createElement(
          ee,
          l._(
            i._(
              {
                disabled,
              },
              e,
            ),
            {
              key: n,
              _key: n,
            },
          ),
          children,
        );
      }
      if (v.Gv(children)) {
        if ((d = children.type) == null ? undefined : d.isFormControl) {
          return children;
        }
        let t = v.b0(disabled)
          ? {}
          : {
              disabled,
            };
        return n.jsx(
          ee,
          l._(i._({}, e), {
            field: undefined,
            children: a.cloneElement(children, t),
          }),
        );
      }
    }
    return children;
  };
  let Q = i._({}, C);
  if (!e.noStyle) {
    Q.wrapperCol = undefined;
    Q.labelCol = undefined;
  }
  return n.jsx(_Context.Provider, {
    value: Q,
    children: n.jsx(EContext.Provider, {
      value: I,
      children: e.noStyle
        ? Z()
        : n.jsxs(
            Row,
            l._(
              i._(
                {
                  ref: t,
                },
                T.A(z, [
                  "children",
                  "prefixCls",
                  "store",
                  "initialValue",
                  "field",
                  "labelCol",
                  "wrapperCol",
                  "colon",
                  "disabled",
                  "rules",
                  "trigger",
                  "triggerPropName",
                  "validateTrigger",
                  "noStyle",
                  "required",
                  "hasFeedback",
                  "help",
                  "normalize",
                  "formatter",
                  "getValueFromEvent",
                  "shouldUpdate",
                  "field",
                  "isInner",
                  "labelAlign",
                  "layout",
                  "requiredSymbol",
                  "isFormList",
                ]),
              ),
              {
                className: U,
                div: A !== "horizontal",
                style,
                children: [
                  label
                    ? n.jsx(
                        Col,
                        l._(i._({}, e.labelCol || C.labelCol), {
                          className: h.A(
                            q,
                            (r = e.labelCol) == null ? undefined : r.className,
                            (o = C.labelCol) == null ? undefined : o.className,
                            {
                              [`${$}-label-item-flex`]:
                                !e.labelCol && !C.labelCol,
                            },
                          ),
                          children: n.jsx(et, {
                            htmlFor: e.field && C.getFormElementId(e.field),
                            label,
                            prefix: prefixCls,
                            requiredSymbol:
                              "requiredSymbol" in e
                                ? e.requiredSymbol
                                : C.requiredSymbol,
                            required: e.required,
                            rules: e.rules,
                            showColon: "colon" in e ? e.colon : C.colon,
                          }),
                        }),
                      )
                    : null,
                  n.jsxs(
                    Col,
                    l._(
                      i._(
                        {
                          className: h.A(`${$}-item-wrapper`, {
                            [`${$}-item-wrapper-flex`]:
                              !e.wrapperCol && !C.wrapperCol,
                          }),
                        },
                        e.wrapperCol || C.wrapperCol,
                      ),
                      {
                        children: [
                          Z(),
                          n.jsx(el, {
                            prefixCls: $,
                            help: e.help,
                            errors,
                            warnings,
                          }),
                          extra &&
                            n.jsx("div", {
                              className: `${$}-extra`,
                              children: extra,
                            }),
                        ],
                      },
                    ),
                  ),
                ],
              },
            ),
          ),
    }),
  });
});
es.defaultProps = {
  trigger: "onChange",
  triggerPropName: "value",
};
es.displayName = "FormItem";
let en = (e, t) => !v.b0(e) && e >= 0 && e < t.length;
let useEa = (e) => {
  let { field, children, initialValue } = e;
  let oRef = a.useRef({
    id: 0,
    keys: [],
  });
  let keys = oRef.current.keys;
  return n.jsx(SContext.Provider, {
    value: {
      getItemKey: (e) => {
        let r = e == null ? undefined : e.replace(/\[|\]/g, ".").split(".");
        let i = r.indexOf(field);
        let l = r[i + 1];
        return `${String(field)}_${keys.indexOf(l)}_${r.slice(i + 2).join("_")}`;
      },
    },
    children: n.jsx(
      es,
      l._(
        i._(
          {
            field,
          },
          "initialValue" in e
            ? {
                initialValue,
              }
            : {},
        ),
        {
          isFormList: true,
          noStyle: true,
          shouldUpdate: (e, r, i) =>
            (!i || !i.isInner || !!i.isFormList || i.field === field) &&
            !U.A(u.A(e, field), u.A(r, field)),
          children: (e, i) => {
            let { getFieldValue, getInnerMethods } = i;
            let { innerSetFieldValue } = getInnerMethods(true);
            let a = getFieldValue(field) || [];
            return (
              v.Tn(children) &&
              children(
                a.map((e, r) => {
                  let i = keys[r];
                  if (i === undefined) {
                    i = oRef.current.id;
                    keys.push(i);
                    oRef.current.id += 1;
                  }
                  return {
                    field: `${String(field)}[${r}]`,
                    key: i,
                  };
                }),
                {
                  add: function (e, r) {
                    if (C(e)) {
                      return void Z.A(
                        true,
                        "Form.List: The event object cannot be used as a parameter of the add method",
                      );
                    }
                    let i = oRef.current.id;
                    oRef.current.id += 1;
                    let s = getFieldValue(field) || [];
                    let a = s;
                    if (r !== undefined && r >= 0 && r <= s.length) {
                      keys.splice(r, 0, i);
                      a = [...s.slice(0, r), e, ...s.slice(r)];
                    } else {
                      keys.push(i);
                      a = [...s, e];
                    }
                    innerSetFieldValue(field, a, {
                      isFormList: true,
                      ignore: e === undefined,
                    });
                  },
                  remove: function (e) {
                    let r = (getFieldValue(field) || []).filter(
                      (t, r) => r !== e,
                    );
                    keys.splice(e, 1);
                    innerSetFieldValue(field, [...r], {
                      isFormList: true,
                    });
                  },
                  move: function (e, r) {
                    let i = getFieldValue(field) || [];
                    if (e === r || !en(e, i) || !en(r, i)) {
                      return;
                    }
                    let s = keys[e];
                    keys.splice(e, 1);
                    keys.splice(r, 0, s);
                    let a = i[e];
                    let o = [...i];
                    o.splice(e, 1);
                    o.splice(r, 0, a);
                    innerSetFieldValue(field, o, {
                      isFormList: true,
                    });
                  },
                },
              )
            );
          },
        },
      ),
    ),
  });
};
useEa.displayName = "FormList";
let eo = a.forwardRef((e, t) => {
  let rRef = a.useRef({});
  let register = a.useCallback((e, t) => {
    if (e) {
      rRef.current[e] = t;
    }
    return () => {
      delete rRef.current[e];
    };
  }, []);
  let onFormSubmit = a.useCallback(
    (t, i) => {
      if (e.onFormSubmit) {
        e.onFormSubmit(t, i, {
          forms: rRef.current,
        });
      }
    },
    [e.onFormSubmit],
  );
  let onFormValuesChange = a.useCallback(
    (t, i) => {
      if (e.onFormValuesChange) {
        e.onFormValuesChange(t, i, {
          forms: rRef.current,
        });
      }
    },
    [e.onFormValuesChange],
  );
  return n.jsx(WContext.Provider, {
    value: {
      onFormValuesChange,
      onFormSubmit,
      register,
    },
    children: e.children,
  });
});
eo.displayName = "FormProvider";
O.Provider = eo;
O.Item = es;
O.List = useEa;
O.Control = ee;
O.useForm = useV;
O.useFormContext = () => {
  let e = a.useContext(_Context);
  return {
    form: e.store,
    disabled: e.disabled,
  };
};
O.useWatch = (e, t) => {
  let r = a.useContext(_Context);
  let i = t || r.store;
  let [l, setL] = a.useState(() => {
    let t = i == null ? undefined : i.getFieldsValue([].concat(e));
    if (v.Kg(e)) {
      return u.A(t, e);
    }
    return t;
  });
  let nRef = a.useRef(e);
  nRef.current = e;
  let oRef = a.useRef(JSON.stringify(l));
  a.useEffect(() => {
    if (!i) {
      return void Z.A(true, "formInstance is not available");
    }
    let { registerWatcher } = i == null ? undefined : i.getInnerMethods(true);
    let t = () => {
      let nRef_current = nRef.current;
      let t = i.getFieldsValue([].concat(nRef_current));
      let r = t;
      if (!v.cy(nRef_current)) {
        r = u.A(t, nRef_current);
      }
      let l = JSON.stringify(r);
      if (oRef.current !== l) {
        setL(r);
        oRef.current = l;
      }
    };
    t();
    let r = registerWatcher && registerWatcher(t);
    return () => {
      if (r) {
        r();
      }
    };
  }, []);
  return l;
};
var ed = O;
export { ed as A };
