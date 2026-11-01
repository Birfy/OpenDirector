import i from "bT";
import l from "we1";
import a from "Po";
import { A as A_1 } from "./module-puV.js";
import u from "Kb";
import s from "loc";
import f from "X5f";
import p from "xs";
import d from "nnL";
import m from "Hl";
import v from "N8";
import { Et, Gv, Kg, Lm, Tn, b0, cy, hX } from "./module-Pl5.js";
import { Ay, QO } from "./module-ce.js";
import { tE } from "./module-rd_2.js";
import { A as A_2 } from "./module-hn.js";
import { A as A_3 } from "./module-Bd_2.js";
import Y from "zP7";
import eN from "M1s";
import { A as A_4 } from "./module-PO9.js";
import eT from "UC";
import ej from "usi";
import eR from "Uww";
import eI from "olG";
import ez from "soS";
import { A as A_5 } from "./module-Z6Q.js";
let r;
let o;
const g = (e, t, n, r) =>
  new (n || (n = Promise))(function (o, i) {
    function l(e) {
      try {
        c(r.next(e));
      } catch (error) {
        i(error);
      }
    }
    function a(e) {
      try {
        c(r.throw(e));
      } catch (error) {
        i(error);
      }
    }
    function c(e) {
      let t;
      if (e.done) {
        o(e.value);
      } else {
        ((t = e.value) instanceof n
          ? t
          : new n(function (e) {
              e(t);
            })
        ).then(l, a);
      }
    }
    c((r = r.apply(e, t || [])).next());
  });
const b = (e, t) => {
  let n;
  let r;
  let o;
  let i;
  let l = {
    label: 0,
    sent: function () {
      if (1 & o[0]) {
        throw o[1];
      }
      return o[1];
    },
    trys: [],
    ops: [],
  };
  i = {
    next: a(0),
    throw: a(1),
    return: a(2),
  };
  if (typeof Symbol === "function") {
    i[Symbol.iterator] = function () {
      return this;
    };
  }
  return i;
  function a(i) {
    return function (a) {
      let c = [i, a];
      if (n) {
        throw TypeError("Generator is already executing.");
      }
      while (l) {
        try {
          n = 1;
          if (
            r &&
            (o =
              2 & c[0]
                ? r.return
                : c[0]
                  ? r.throw || ((o = r.return) && o.call(r), 0)
                  : r.next) &&
            !(o = o.call(r, c[1])).done
          ) {
            return o;
          }
          r = 0;
          if (o) {
            c = [2 & c[0], o.value];
          }
          switch (c[0]) {
            case 0:
            case 1:
              o = c;
              break;
            case 4:
              l.label++;
              return {
                value: c[1],
                done: false,
              };
            case 5:
              l.label++;
              r = c[1];
              c = [0];
              continue;
            case 7:
              c = l.ops.pop();
              l.trys.pop();
              continue;
            default:
              if (
                !(o = (o = l.trys).length > 0 && o[o.length - 1]) &&
                (c[0] === 6 || c[0] === 2)
              ) {
                l = 0;
                continue;
              }
              if (c[0] === 3 && (!o || (c[1] > o[0] && c[1] < o[3]))) {
                l.label = c[1];
                break;
              }
              if (c[0] === 6 && l.label < o[1]) {
                l.label = o[1];
                o = c;
                break;
              }
              if (o && l.label < o[2]) {
                l.label = o[2];
                l.ops.push(c);
                break;
              }
              if (o[2]) {
                l.ops.pop();
              }
              l.trys.pop();
              continue;
          }
          c = t.call(e, l);
        } catch (error) {
          c = [6, error];
          r = 0;
        } finally {
          o = 0;
          n = 0;
        }
      }
      if (5 & c[0]) {
        throw c[1];
      }
      return {
        value: c[0] ? c[1] : undefined,
        done: true,
      };
    };
  }
};
const x = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const E = function (e, t, n) {
  if (n || arguments.length == 2) {
    var r;
    for (let o = 0, i = t.length; o < i; o++) {
      if (!(!r && o in t)) {
        if (!r) {
          r = Array.prototype.slice.call(t, 0, o);
        }
        r[o] = t[o];
      }
    }
  }
  return e.concat(r || Array.prototype.slice.call(t));
};
function C(e) {
  return d.A(e, function (e) {
    if (!Gv(e) && !cy(e)) {
      return e;
    }
  });
}
function w(e, t, n) {
  m.A(e, t, C(n));
  return e;
}
function O(e, t = "") {
  const n = new Set();
  const r = (e, t) => {
    if (t === undefined) {
      t = "";
    }
    if (!e || n.has(e)) {
      return [];
    }
    n.add(e);
    return Object.keys(e).reduce((acc, key) => {
      if (
        (Gv(e[key]) || cy(e[key])) &&
        Object.keys(e[key]).length &&
        !i.isValidElement(e[key])
      ) {
        return E(E([], x(acc), false), x(r(e[key], `${t + key}.`)), false);
      }
      return E(E([], x(acc), false), [t + key], false);
    }, []);
  };
  return r(e, t);
}
function S(e) {
  let t;
  return (
    ((t = e == null ? undefined : e.constructor) == null
      ? undefined
      : t.name) === "SyntheticEvent" ||
    (e == null ? undefined : e.nativeEvent) instanceof Event
  );
}
function P(e, t) {
  const n = s.A({}, e, undefined, Object);
  return t.some((e) => f.A(n, e));
}
const A = "_input";
r = function (e, t) {
  return (r =
    Object.setPrototypeOf ||
    ({
      __proto__: [],
    } instanceof Array &&
      function (e, t) {
        e.__proto__ = t;
      }) ||
    function (e, t) {
      for (const n in t) {
        if (Object.prototype.hasOwnProperty.call(t, n)) {
          e[n] = t[n];
        }
      }
    })(e, t);
};
const N = (e, t) => {
  if (typeof t !== "function" && t !== null) {
    throw TypeError(
      "Class extends value " + String(t) + " is not a constructor or null",
    );
  }
  function n() {
    this.constructor = e;
  }
  r(e, t);
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
};
const k = ((e) => {
  function t(t) {
    const n =
      e.call(this, "form validate error, get errors by error.errors") || this;
    n.errors = {};
    n.errors = t;
    return n;
  }
  N(t, e);
  return t;
})(Error);
const j = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const R = function (e, t, n) {
  if (n || arguments.length == 2) {
    var r;
    for (let o = 0, i = t.length; o < i; o++) {
      if (!(!r && o in t)) {
        if (!r) {
          r = Array.prototype.slice.call(t, 0, o);
        }
        r[o] = t[o];
      }
    }
  }
  return e.concat(r || Array.prototype.slice.call(t));
};
class I {
  constructor() {
    var e;
    var t = this;
    this.isSubmitting = false;
    this.registerFields = [];
    this.registerWatchers = [];
    this.registerStateWatchers = [];
    this.touchedFields = {};
    this.store = {};
    this.initialValues = {};
    this.callbacks = {};
    this.innerCollectFormState = function () {
      t.notifyStateWatchers();
    };
    this.innerSetCallbacks = function (e) {
      t.callbacks = e;
    };
    this.registerStateWatcher = function (e) {
      t.registerStateWatchers.push(e);
      return function () {
        t.registerStateWatchers = t.registerStateWatchers.filter(
          (t) => t !== e,
        );
      };
    };
    this.registerWatcher = function (e) {
      t.registerWatchers.push(e);
      return function () {
        t.registerWatchers = t.registerWatchers.filter((t) => t !== e);
      };
    };
    this.registerField = function (e) {
      t.registerFields.push(e);
      t.notifyWatchers();
      return function () {
        t.registerFields = t.registerFields.filter((t) => t !== e);
        t.notifyWatchers();
      };
    };
    this.getRegisteredFields = function (e, n) {
      if (e) {
        return t.registerFields.filter((e) => {
          let t;
          return (
            e.hasFieldProps() &&
            ((n == null ? undefined : n.containFormList) ||
              !((t = e.props) == null ? undefined : t.isFormList))
          );
        });
      }
      return t.registerFields;
    };
    this.getRegisteredField = function (e) {
      return t.registerFields.filter((t) => t.props.field === e)[0];
    };
    this.notify = function (e, n) {
      if (!(e !== "setFieldValue" && (e !== "innerSetValue" || n.ignore))) {
        t._pushTouchField(
          n.changeValues
            ? O(n.changeValues)
            : t._getIterativelyKeysByField(n.field),
        );
      }
      t.registerFields.forEach((r) => {
        if (r.onStoreChange) {
          r.onStoreChange(e, {
            ...n,
            current: t.store,
          });
        }
      });
    };
    this.innerSetInitialValues = function (e) {
      if (e) {
        t.initialValues = C(e);
        Object.keys(e).forEach((n) => {
          w(t.store, n, e[n]);
        });
      }
    };
    this.innerSetInitialValue = function (e, n) {
      if (e) {
        t.initialValues[e] = n;
        if (!t._inTouchFields(e)) {
          w(t.store, e, u.A(t.initialValues, e));
        }
      }
    };
    this.innerSetFieldValue = function (e, n, r) {
      if (e) {
        const a = C(t.store);
        w(t.store, e, n);
        t.triggerValuesChange({
          [e]: n,
        });
        t.triggerTouchChange({
          [e]: n,
        });
        t.notify("innerSetValue", {
          prev: a,
          field: e,
          ...r,
          changeValues: {
            [e]: n,
          },
        });
      }
    };
    this.innerGetStore = function () {
      return t.store;
    };
    this.innerGetFieldValue = function (e) {
      return u.A(t.store, e);
    };
    this.getTouchedFields = function () {
      return t
        .getRegisteredFields(true)
        .filter((e) => e.isTouched())
        .map((e) => e.props.field);
    };
    this.setFieldValue = function (e, n) {
      if (e) {
        t.setFields({
          [e]: {
            value: n,
          },
        });
      }
    };
    this.setFieldsValue = function (e) {
      if (Gv(e)) {
        const n = Object.keys(e);
        const r = {};
        n.forEach((t) => {
          r[t] = {
            value: e[t],
          };
        });
        t.setFields(r);
      }
    };
    this.setFields = function (e) {
      const n = Object.keys(e);
      const r = {};
      n.forEach((n) => {
        const i = e[n];
        const l = C(t.store);
        if (i) {
          const a = {};
          if ("error" in i) {
            a.errors = i.error;
          }
          if ("warning" in i) {
            a.warnings = i.warning;
          }
          if ("touched" in i) {
            a.touched = i.touched;
          }
          if ("value" in i) {
            w(t.store, n, i.value);
            r[n] = i.value;
          }
          t.notify("setFieldValue", {
            data: a,
            prev: l,
            field: n,
            changeValues: {
              [n]: i.value,
            },
          });
        }
      });
      t.triggerValuesChange(r);
    };
    this.getFieldValue = function (e) {
      return C(u.A(t.store, e));
    };
    this.getFieldError = function (e) {
      const n = t.getRegisteredField(e);
      if (n) {
        return n.getErrors();
      }
      return null;
    };
    this.getFieldsError = function (e) {
      const n = {};
      if (cy(e)) {
        e.map((e) => {
          const r = t.getFieldError(e);
          if (r) {
            n[e] = r;
          }
        });
      } else {
        t.getRegisteredFields(true, {
          containFormList: true,
        }).forEach((e) => {
          if (e.getErrors()) {
            n[e.props.field] = e.getErrors();
          }
        });
      }
      return n;
    };
    this.getFields = function () {
      return C(t.store);
    };
    this.getFieldsValue = function (e) {
      const n = {};
      if (cy(e)) {
        e.forEach((e) => {
          w(n, e, t.getFieldValue(e));
        });
      } else {
        t.getRegisteredFields(true).forEach((e) => {
          const field = e.props.field;
          const o = u.A(t.store, field);
          w(n, field, o);
        });
      }
      return n;
    };
    this.resetFields = function (e) {
      const n = C(t.store);
      const r = Kg(e) ? [e] : e;
      if (r && cy(r)) {
        const o = {};
        r.forEach((e) => {
          w(t.store, e, t.initialValues[e]);
          o[e] = u.A(t.store, e);
        });
        t.triggerValuesChange(o);
        t.notify("reset", {
          prev: n,
          field: r,
        });
        t._popTouchField(r);
      } else {
        const i = {};
        const l = C(t.store);
        Object.keys(t.initialValues).forEach((e) => {
          w(i, e, t.initialValues[e]);
        });
        t.store = i;
        t.getRegisteredFields(true).forEach((e) => {
          const field = e.props.field;
          w(l, field, u.A(t.store, field));
        });
        t.triggerValuesChange(l);
        t._popTouchField();
        t.notify("reset", {
          prev: n,
          field: Object.keys(l),
        });
      }
    };
    this.validate = Object.defineProperty(
      function () {
        const t = this;
        const n = [];
        for (let r = 0; r < arguments.length; r++) {
          n[r] = arguments[r];
        }
        if (typeof n[n.length - 1] !== "function") {
          return new Promise((resolve, reject) => {
            n[n.length] = function (e, t) {
              if (e) {
                return reject(new k(e));
              }
              resolve(t);
            };
            n.length++;
            e.apply(t, n);
          });
        }
        e.apply(this, n);
      },
      "name",
      {
        value: (e = function (e, n) {
          let r = function () {};
          let o = t.getRegisteredFields(true, {
            containFormList: true,
          });
          if (cy(e) && e.length > 0) {
            o = o.filter((t) => e.indexOf(t.props.field) > -1);
            r = n || r;
          } else if (typeof e === "function") {
            r = e;
          }
          Promise.all(o.map((e) => e.validateField())).then((e) => {
            let n = {};
            const o = {};
            e.map((e) => {
              let r;
              if (e.error) {
                n = {
                  ...n,
                  ...e.error,
                };
              }
              if (
                !((r = t.getRegisteredField(e.field).props) == null
                  ? undefined
                  : r.isFormList)
              ) {
                w(o, e.field, e.value);
              }
            });
            if (Object.keys(n).length) {
              const i = t.callbacks.onValidateFail;
              if (i) {
                i(n);
              }
              if (r) {
                r(n, C(o));
              }
            } else {
              if (r) {
                r(null, C(o));
              }
            }
          });
        }).name,
      },
    );
    this.toggleSubmitting = function () {
      t.isSubmitting = !t.isSubmitting;
      t.innerCollectFormState();
    };
    this.submit = function () {
      t.toggleSubmitting();
      t.validate(function (e, n) {
        let r;
        const t_callbacks = t.callbacks;
        const o_onSubmit = t_callbacks.onSubmit;
        const o_onSubmitFailed = t_callbacks.onSubmitFailed;
        if (!e && o_onSubmit) {
          r = o_onSubmit(n);
        }
        if (e && o_onSubmitFailed) {
          r = o_onSubmitFailed(e);
        }
        if (r && r.then) {
          r.then(t.toggleSubmitting, (e) => {
            t.toggleSubmitting();
            return Promise.reject(e);
          });
        } else {
          t.toggleSubmitting();
        }
      });
    };
    this.getFieldsState = function (e) {
      const n = {};
      const r = (e) => {
        if (!e) {
          return null;
        }
        const n = e.getErrors();
        return {
          errors: n ? [n] : [],
          warnings: e.getWarnings(),
          validateStatus: e.getValidateStatus(),
          isSubmitting: t.isSubmitting,
          isTouched: e.isTouched(),
        };
      };
      if (cy(e)) {
        e.forEach((e) => {
          n[e] = r(t.getRegisteredField(e));
        });
      } else {
        t.getRegisteredFields(true).forEach((e) => {
          n[e.props.field] = r(e);
        });
      }
      return n;
    };
    this.clearFields = function (e) {
      const n = C(t.store);
      const r = Kg(e) ? [e] : e;
      if (r && cy(r)) {
        const o = {};
        r.forEach((e) => {
          w(t.store, e, undefined);
          o[e] = u.A(t.store, e);
        });
        t.triggerValuesChange(o);
        t.notify("setFieldValue", {
          prev: n,
          field: r,
          data: {
            errors: null,
            warnings: null,
          },
        });
      } else {
        const i = {};
        t.store = {};
        t.getRegisteredFields(true).forEach((e) => {
          w(i, e.props.field, undefined);
        });
        t.triggerValuesChange(i);
        t.notify("setFieldValue", {
          prev: n,
          field: Object.keys(i),
          data: {
            errors: null,
            warnings: null,
          },
        });
      }
    };
  }
  notifyWatchers() {
    this.registerWatchers.forEach((e) => {
      e();
    });
  }
  notifyStateWatchers() {
    this.registerStateWatchers.forEach((e) => {
      e();
    });
  }
  triggerValuesChange(e) {
    if (e && Object.keys(e).length) {
      const t = this.callbacks.onValuesChange;
      if (t) {
        t(e, this.getFields());
      }
    }
    this.notifyWatchers();
  }
  triggerTouchChange(e) {
    if (e && Object.keys(e).length) {
      const t = this.callbacks.onChange;
      if (t) {
        t(e, this.getFields());
      }
    }
  }
  _getIterativelyKeysByField(e) {
    if (!e) {
      return [];
    }
    const t = []
      .concat(e)
      .map((e) => O(w({}, e, undefined)))
      .reduce((acc, item) => acc.concat(item), []);
    return R([e], j(t), false);
  }
  _inTouchFields(e) {
    const t = this;
    return this._getIterativelyKeysByField(e).some((e) =>
      f.A(t.touchedFields, e),
    );
  }
  _popTouchField(e) {
    if (e === undefined) {
      this.touchedFields = {};
    }
    const t = this._getIterativelyKeysByField(e);
    this.touchedFields = p.A(this.touchedFields, t);
  }
  _pushTouchField(e) {
    const t = this;
    [].concat(e).forEach((e) => {
      s.A(t.touchedFields, e, undefined, Object);
    });
  }
}
function useF(e) {
  let t;
  const nRef = i.useRef(e);
  if (!nRef.current) {
    if (e) {
      nRef.current = e;
    } else {
      nRef.current = {
        getFieldsValue: (t = new I()).getFieldsValue,
        getFieldValue: t.getFieldValue,
        getFieldError: t.getFieldError,
        getFieldsError: t.getFieldsError,
        getTouchedFields: t.getTouchedFields,
        getFields: t.getFields,
        setFieldValue: t.setFieldValue,
        setFieldsValue: t.setFieldsValue,
        setFields: t.setFields,
        resetFields: t.resetFields,
        clearFields: t.clearFields,
        submit: t.submit,
        validate: t.validate,
        scrollToField: function () {},
        getFieldsState: t.getFieldsState,
        getInnerMethods: function (e) {
          const n = {};
          if (e) {
            [
              "registerField",
              "registerWatcher",
              "registerStateWatcher",
              "innerSetInitialValues",
              "innerSetInitialValue",
              "innerSetCallbacks",
              "innerSetFieldValue",
              "innerGetStore",
              "innerGetFieldValue",
              "innerCollectFormState",
            ].map((e) => {
              n[e] = t[e];
            });
          }
          return n;
        },
      };
    }
  }
  return [nRef.current];
}
const VContext = i.createContext({
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
  getFormElementId: function () {
    return "arco-";
  },
  store: {
    clearFields: tE,
    getFieldsValue: tE,
    getFieldValue: tE,
    getFieldError: tE,
    getFieldsError: tE,
    getTouchedFields: tE,
    getFields: tE,
    setFieldValue: tE,
    setFieldsValue: tE,
    setFields: tE,
    resetFields: tE,
    submit: tE,
    validate: tE,
    getFieldsState: tE,
    scrollToField: tE,
    getInnerMethods: function () {
      return {
        registerField: tE,
        innerGetStore: tE,
        registerStateWatcher: tE,
        registerWatcher: tE,
      };
    },
  },
});
const DContext = i.createContext({});
const ZContext = i.createContext({});
const LContext = i.createContext({});
const B = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
function U(e, t) {
  const n = t.replace(/[\[\.]/g, "_").replace(/\]/g, "");
  if (e) {
    return e + "-" + n;
  }
  return "" + n;
}
const Q = {
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
  wrapper: "form",
  validateTrigger: "onChange",
};
const q = i.forwardRef(function (e, t) {
  let r;
  let o;
  const u = i.useContext(QO);
  const s = i.useContext(ZContext);
  const fRef = i.useRef(null);
  const store = B(useF(e.form), 1)[0];
  const dRef = i.useRef();
  const m = A_3(e, Q, (r = u.componentConfig) == null ? undefined : r.Form);
  const {
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
    ...rest
  } = m;
  const j = prefixCls || u.getPrefixCls("form");
  const u_rtl = u.rtl;
  const size = "size" in m ? m.size : u.size;
  const _ = store.getInnerMethods(true);
  if (!dRef.current) {
    _.innerSetInitialValues(m.initialValues);
  }
  i.useEffect(function () {
    dRef.current = true;
  }, []);
  i.useEffect(
    function () {
      let e;
      if (s.register) {
        e = s.register(m.id, store);
      }
      return e;
    },
    [m.id, store],
  );
  i.useImperativeHandle(t, function () {
    return store;
  });
  store.scrollToField = function (e, t) {
    const fRef_current = fRef.current;
    const r = m.id;
    if (fRef_current) {
      let o = fRef_current.querySelector("#" + U(r, e));
      if (!o) {
        o = fRef_current.querySelector("#" + U(r, e) + A);
      }
      if (o) {
        l.A(o, {
          behavior: "smooth",
          block: "nearest",
          scrollMode: "if-needed",
          ...t,
        });
      }
    }
  };
  _.innerSetCallbacks({
    onValuesChange: function (e, t) {
      if (m.onValuesChange) {
        m.onValuesChange(e, t);
      }
      if (s.onFormValuesChange) {
        s.onFormValuesChange(m.id, e);
      }
    },
    onChange: m.onChange,
    onValidateFail: function (e) {
      if (m.scrollToFirstError) {
        const t = Gv(m.scrollToFirstError) ? m.scrollToFirstError : {};
        store.scrollToField(Object.keys(e)[0], t);
      }
    },
    onSubmitFailed: m.onSubmitFailed,
    onSubmit: function (e) {
      const t = m.onSubmit && m.onSubmit(e);
      if (s.onFormSubmit) {
        s.onFormSubmit(m.id, e);
      }
      return t;
    },
  });
  const D = {
    requiredSymbol,
    labelAlign,
    disabled,
    colon,
    labelCol,
    wrapperCol,
    layout,
    store,
    prefixCls: j,
    validateTrigger,
    validateMessages: a.A(
      {},
      (o = u.locale.Form) == null ? undefined : o.validateMessages,
      validateMessages,
    ),
    getFormElementId: function (e) {
      return U(id, e);
    },
  };
  return i.createElement(
    Ay,
    {
      ...u,
      size,
    },
    i.createElement(
      VContext.Provider,
      {
        value: D,
      },
      i.createElement(
        wrapper,
        {
          ref: fRef,
          ...A_2(rest, [
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
          ...m.wrapperProps,
          className: A_1(
            j,
            j + "-" + layout,
            j + "-size-" + size,
            {
              [j + "-rtl"]: u_rtl,
            },
            className,
          ),
          style: m.style,
          onSubmit: function (e) {
            e.preventDefault();
            e.stopPropagation();
            store.submit();
          },
          id,
        },
        m.children,
      ),
    ),
  );
});
q.displayName = "Form";
const $Context = i.createContext({});
const XContext = i.createContext({});
const JContext = i.createContext({});
const et = {
  span: 24,
};
function en(flex) {
  if (typeof flex === "string" && /\d+[px|%|em|rem|]{1}/.test(flex)) {
    return "0 0 " + flex;
  }
  return flex;
}
const er = i.forwardRef(function (e, t) {
  let n;
  let r;
  const l = i.useContext(QO);
  const l_getPrefixCls = l.getPrefixCls;
  const l_componentConfig = l.componentConfig;
  const l_rtl = l.rtl;
  const f = A_3(
    e,
    et,
    l_componentConfig == null ? undefined : l_componentConfig["Grid.Col"],
  );
  const p = i.useContext($Context);
  const p_gutter = p.gutter;
  const p_div = p.div;
  const {
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
    ...rest
  } = f;
  const I = l_getPrefixCls("col");
  let F = {
    ["" + I]: !p_div,
    [I + "-order-" + order]: order,
    [I + "-" + span]:
      !p_div && !xs && !sm && !md && !lg && !xl && !xxl && !xxxl,
    [I + "-offset-" + offset]: offset,
    [I + "-pull-" + pull]: pull,
    [I + "-push-" + push]: push,
    [I + "-rtl"]: l_rtl,
  };
  n = F;
  Object.keys(
    (r = {
      xs,
      sm,
      md,
      lg,
      xl,
      xxl,
      xxxl,
    }),
  ).forEach((e) => {
    const t = r[e];
    if (Et(t)) {
      if (t >= 0) {
        n[I + "-" + e + "-" + t] = true;
      }
    } else if (Gv(t)) {
      n[I + "-" + e + "-" + t.span] = t.span;
      n[I + "-" + e + "-offset-" + t.offset] = t.offset;
      n[I + "-" + e + "-order-" + t.order] = t.order;
      n[I + "-" + e + "-pull-" + t.pull] = t.pull;
      n[I + "-" + e + "-push-" + t.push] = t.push;
    }
  });
  F = n;
  const _ = A_1(flex ? I : F, className);
  const V = {};
  if (Array.isArray(p_gutter) && !p_div) {
    const D = (p_gutter[0] && p_gutter[0] / 2) || 0;
    const z = (p_gutter[1] && p_gutter[1] / 2) || 0;
    if (D) {
      V.paddingLeft = D;
      V.paddingRight = D;
    }
    if (z) {
      V.paddingTop = z;
      V.paddingBottom = z;
    }
  }
  const L = i.useMemo(
    function () {
      if (en(flex)) {
        return {
          flex: en(flex),
        };
      }
      return {};
    },
    [flex],
  );
  return i.createElement(
    "div",
    {
      ref: t,
      ...rest,
      style: {
        ...style,
        ...V,
        ...L,
      },
      className: _,
    },
    children,
  );
});
er.displayName = "Col";
const ei = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"];
const el = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)",
  xxxl: "(min-width: 2000px)",
};
let ea = [];
let ec = -1;
let eu = {};
const es = {
  matchHandlers: {},
  dispatch: function (e, t) {
    eu = e;
    return (
      !(ea.length < 1) &&
      (ea.forEach((e) => {
        e.func(eu, t);
      }),
      true)
    );
  },
  subscribe: function (func) {
    if (ea.length === 0) {
      this.register();
    }
    const token = (++ec).toString();
    ea.push({
      token,
      func,
    });
    func(eu, null);
    return token;
  },
  unsubscribe: function (e) {
    if ((ea = ea.filter((t) => t.token !== e)).length === 0) {
      this.unregister();
    }
  },
  unregister: function () {
    const e = this;
    Object.keys(el).forEach((t) => {
      const n = el[t];
      const r = e.matchHandlers[n];
      if (r && r.mql && r.listener) {
        r.mql.removeListener(r.listener);
      }
    });
  },
  register: function () {
    const e = this;
    Object.keys(el).forEach((t) => {
      const n = el[t];
      const listener = function (n) {
        const n_matches = n.matches;
        e.dispatch(
          {
            ...eu,
            ...{
              [t]: n_matches,
            },
          },
          t,
        );
      };
      const mql = window.matchMedia(n);
      mql.addListener(listener);
      e.matchHandlers[n] = {
        mql,
        listener,
      };
      listener(mql);
    });
  },
};
const ed = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const em = {
  gutter: 0,
  align: "start",
  justify: "start",
};
const ev = i.forwardRef(function (e, t) {
  const r = i.useContext(QO);
  const r_getPrefixCls = r.getPrefixCls;
  const r_componentConfig = r.componentConfig;
  const r_rtl = r.rtl;
  const u = A_3(
    e,
    em,
    r_componentConfig == null ? undefined : r_componentConfig["Grid.Row"],
  );
  const { className, style, children, div, align, justify, gutter, ...rest } =
    u;
  const g = ed(
    i.useState({
      xs: true,
      sm: true,
      md: true,
      lg: true,
      xl: true,
      xxl: true,
      xxxl: true,
    }),
    2,
  );
  const b = g[0];
  const x = g[1];
  const ERef = i.useRef();
  function C(e) {
    let t = 0;
    if (typeof e === "object") {
      for (let n = 0; n < ei.length; n++) {
        const r = ei[n];
        if (b[r] && e[r] !== undefined) {
          t = e[r];
          break;
        }
      }
    } else {
      t = e;
    }
    return t;
  }
  i.useEffect(function () {
    ERef.current = es.subscribe(function (e) {
      if (
        (!Array.isArray(gutter) && typeof gutter === "object") ||
        (Array.isArray(gutter) &&
          (typeof gutter[0] === "object" || typeof gutter[1] === "object"))
      ) {
        x(e);
      }
    });
    return function () {
      es.unsubscribe(ERef.current);
    };
  }, []);
  const w = r_getPrefixCls("row");
  const O = A_1(
    {
      ["" + w]: !div,
      [w + "-align-" + align]: align,
      [w + "-justify-" + justify]: justify,
      [w + "-rtl"]: r_rtl,
    },
    className,
  );
  const S = {};
  const P = C(Array.isArray(gutter) ? gutter[0] : gutter);
  const A = C(Array.isArray(gutter) ? gutter[1] : 0);
  if ((P || A) && !div) {
    const N = -P / 2;
    const k = -A / 2;
    if (N) {
      S.marginLeft = N;
      S.marginRight = N;
    }
    if (k) {
      S.marginTop = k;
      S.marginBottom = k;
    }
  }
  return i.createElement(
    "div",
    {
      ref: t,
      ...A_2(rest, ["gutter"]),
      style: {
        ...style,
        ...S,
      },
      className: O,
    },
    i.createElement(
      $Context.Provider,
      {
        value: {
          gutter: [P, A],
          div,
        },
      },
      children,
    ),
  );
});
ev.displayName = "Row";
const eh = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const useEy = (e, t, n = false) => {
  const rRef = i.useRef();
  const o = eh(
    i.useState({
      xs: true,
      sm: true,
      md: true,
      lg: true,
      xl: true,
      xxl: true,
      xxxl: true,
    }),
    2,
  );
  const l = o[0];
  const a = o[1];
  i.useEffect(function () {
    rRef.current = es.subscribe(function (t) {
      if (Gv(e)) {
        a(t);
      }
    });
    return function () {
      es.unsubscribe(rRef.current);
    };
  }, []);
  return i.useMemo(
    function () {
      let r = t;
      if (Gv(e)) {
        for (let o = 0; o < ei.length; o++) {
          const i = ei[o];
          if ((l[i] || (i === "xs" && n)) && e[i] !== undefined) {
            r = e[i];
            break;
          }
        }
      } else {
        r = e;
      }
      return r;
    },
    [l, e, t, n],
  );
};
const eb = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const ex = (e) => {
  const t = typeof Symbol === "function" && Symbol.iterator;
  const n = t && e[t];
  let r = 0;
  if (n) {
    return n.call(e);
  }
  if (e && typeof e.length === "number") {
    return {
      next: function () {
        if (e && r >= e.length) {
          e = undefined;
        }
        return {
          value: e && e[r++],
          done: !e,
        };
      },
    };
  }
  throw TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
};
const eE = function (e, t, n) {
  if (n || arguments.length == 2) {
    var r;
    for (let o = 0, i = t.length; o < i; o++) {
      if (!(!r && o in t)) {
        if (!r) {
          r = Array.prototype.slice.call(t, 0, o);
        }
        r[o] = t[o];
      }
    }
  }
  return e.concat(r || Array.prototype.slice.call(t));
};
const eC = {
  collapsed: false,
  collapsedRows: 1,
  cols: 24,
  colGap: 0,
  rowGap: 0,
};
const ew = i.forwardRef(function (e, t) {
  const r = eb(i.useState(new Map()), 2);
  const o = r[0];
  const l = r[1];
  const a = i.useContext(QO);
  const a_getPrefixCls = a.getPrefixCls;
  const a_componentConfig = a.componentConfig;
  const a_rtl = a.rtl;
  const d = A_3(
    e,
    eC,
    a_componentConfig == null ? undefined : a_componentConfig.Grid,
  );
  const d_children = d.children;
  const d_className = d.className;
  const d_style = d.style;
  const d_cols = d.cols;
  const d_colGap = d.colGap;
  const d_rowGap = d.rowGap;
  const d_collapsed = d.collapsed;
  const d_collapsedRows = d.collapsedRows;
  const cols = useEy(d_cols, 24);
  const colGap = useEy(d_colGap, 0);
  const O = useEy(d_rowGap, 0);
  const S = a_getPrefixCls("grid");
  const P = {
    ["" + S]: true,
    [S + "-rtl"]: a_rtl,
  };
  const A = A_1(P, d_className);
  const N = ((e) => {
    const e_cols = e.cols;
    const e_collapsed = e.collapsed;
    const e_collapsedRows = e.collapsedRows;
    const e_itemDataList = e.itemDataList;
    let overflow = false;
    let displayIndexList = [];
    function a(e) {
      return Math.ceil(e / e_cols) > e_collapsedRows;
    }
    if (e_collapsed) {
      let c = 0;
      for (let u = 0; u < e_itemDataList.length; u++) {
        if (e_itemDataList[u].suffix) {
          c += e_itemDataList[u].span;
          displayIndexList.push(u);
        }
      }
      if (!a(c)) {
        for (let s = 0; s < e_itemDataList.length;) {
          const f = e_itemDataList[s];
          if (!f.suffix) {
            if (a((c += f.span))) {
              break;
            }
            displayIndexList.push(s);
          }
          s++;
        }
      }
      overflow = e_itemDataList.some(
        (e, t) => !e.suffix && !displayIndexList.includes(t),
      );
    } else {
      displayIndexList = e_itemDataList.map((e, t) => t);
    }
    return {
      overflow,
      displayIndexList,
    };
  })({
    cols,
    collapsed: d_collapsed,
    collapsedRows: d_collapsedRows,
    itemDataList: (() => {
      let e;
      let t;
      const n = [];
      try {
        for (var r = ex(o.entries()), i = r.next(); !i.done; i = r.next()) {
          const l = eb(i.value, 2);
          const a = l[0];
          const c = l[1];
          n[a] = c;
        }
      } catch (error) {
        e = {
          error,
        };
      } finally {
        try {
          if (i && !i.done && (t = r.return)) {
            t.call(r);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      return n;
    })(),
  });
  return i.createElement(
    "div",
    {
      ref: t,
      className: A,
      style: {
        gap: O + "px " + colGap + "px",
        gridTemplateColumns: "repeat(" + cols + ", minmax(0px, 1fr))",
        ...d_style,
      },
    },
    i.createElement(
      JContext.Provider,
      {
        value: {
          collectItemData: function (e, t) {
            o.set(e, t);
            l(new Map(eE([], eb(o), false)));
          },
          removeItemData: function (e) {
            o.delete(e);
            l(new Map(eE([], eb(o), false)));
          },
        },
      },
      i.createElement(
        XContext.Provider,
        {
          value: {
            cols,
            colGap,
            collapsed: d_collapsed,
            overflow: N.overflow,
            displayIndexList: N.displayIndexList,
          },
        },
        i.Children.map(d_children, function (e, __index__) {
          if (e) {
            const n = {
              __index__,
              ...e.props,
            };
            return i.cloneElement(e, n);
          }
          return null;
        }).filter((e) => u.A(e, "type.__ARCO_GRID_ITEM__")),
      ),
    ),
  );
});
ew.displayName = "Grid";
const eS = {
  suffix: false,
  offset: 0,
  span: 1,
};
const eP = i.forwardRef(function (e, t) {
  const r = i.useContext(QO);
  const r_getPrefixCls = r.getPrefixCls;
  const r_componentConfig = r.componentConfig;
  const r_rtl = r.rtl;
  const u = A_3(
    e,
    eS,
    r_componentConfig == null ? undefined : r_componentConfig["Grid.GridItem"],
  );
  const u_children = u.children;
  const u_className = u.className;
  const u_style = u.style;
  const u_offset = u.offset;
  const u_span = u.span;
  const u___index__ = u.__index__;
  const y = i.useContext(XContext);
  const g = i.useContext(JContext);
  const g_collectItemData = g.collectItemData;
  const g_removeItemData = g.removeItemData;
  const y_colGap = y.colGap;
  const y_cols = y.cols;
  const y_displayIndexList = y.displayIndexList;
  const y_overflow = y.overflow;
  const S = useEy(u_offset, 0);
  const span = useEy(u_span, 1);
  const A = r_getPrefixCls("grid-item");
  const N =
    y_displayIndexList == null
      ? undefined
      : y_displayIndexList.includes(u___index__);
  const k = {
    ["" + A]: true,
    [A + "-rtl"]: r_rtl,
  };
  const T = A_1(k, u_className);
  const j = i.useMemo(
    function () {
      let e;
      let t;
      let n;
      let r;
      let suffix;
      let i;
      let l;
      let a;
      e = y.cols;
      n = (t = {
        suffix: !!u.suffix,
        span,
        offset: S,
      }).span;
      r = t.offset;
      suffix = t.suffix;
      i = n != null ? n : 1;
      return {
        span: Math.min(
          (a = Math.min((l = r != null ? r : 0), e)) > 0 ? i + l : i,
          e,
        ),
        offset: a,
        suffix,
      };
    },
    [y.cols, u.suffix, span, S],
  );
  i.useEffect(
    function () {
      g_collectItemData(u___index__, j);
      return function () {
        g_removeItemData(u___index__);
      };
    },
    [u___index__, j],
  );
  const R = i.useMemo(
    function () {
      const j_offset = j.offset;
      const j_span = j.span;
      if (j_offset > 0) {
        return {
          marginLeft:
            `calc((${`(100% - ${y_colGap * (j_span - 1)}px) / `}` +
            j_span +
            " * " +
            j_offset +
            ") + " +
            y_colGap * j_offset +
            "px)",
        };
      }
      return {};
    },
    [j, y_colGap],
  );
  const I = i.useMemo(
    function () {
      const j_suffix = j.suffix;
      const j_span = j.span;
      if (j_suffix) {
        return `${y_cols - j_span + 1}`;
      }
      return "span " + j_span;
    },
    [j, y_cols],
  );
  const F =
    N && span !== 0
      ? {}
      : {
          display: "none",
        };
  const _ = {
    gridColumn: I + " / span " + span,
    ...R,
    ...F,
  };
  return i.createElement(
    "div",
    {
      ref: t,
      className: T,
      style: {
        ..._,
        ...u_style,
      },
    },
    Tn(u_children)
      ? u_children({
          overflow: y_overflow,
        })
      : i.Children.map(u_children, function (e) {
          if (e && y.collapsed && i.isValidElement(e) && !Kg(e.type)) {
            return i.cloneElement(e, {
              overflow: y_overflow,
              ...e.props,
            });
          }
          return e;
        }),
  );
});
eP.displayName = "GridItem";
eP.__ARCO_GRID_ITEM__ = true;
ew.Col = er;
ew.Row = ev;
ew.GridItem = eP;
const eA = "error";
o = function (e, t) {
  return (o =
    Object.setPrototypeOf ||
    ({
      __proto__: [],
    } instanceof Array &&
      function (e, t) {
        e.__proto__ = t;
      }) ||
    function (e, t) {
      for (const n in t) {
        if (Object.prototype.hasOwnProperty.call(t, n)) {
          e[n] = t[n];
        }
      }
    })(e, t);
};
const eF = (e, t) => {
  if (typeof t !== "function" && t !== null) {
    throw TypeError(
      "Class extends value " + String(t) + " is not a constructor or null",
    );
  }
  function n() {
    this.constructor = e;
  }
  o(e, t);
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
};
const e_ = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const eV = function (e, t, n) {
  if (n || arguments.length == 2) {
    var r;
    for (let o = 0, i = t.length; o < i; o++) {
      if (!(!r && o in t)) {
        if (!r) {
          r = Array.prototype.slice.call(t, 0, o);
        }
        r[o] = t[o];
      }
    }
  }
  return e.concat(r || Array.prototype.slice.call(t));
};
const eD = ((e) => {
  function t(t, n) {
    const r = e.call(this, t) || this;
    r.errors = null;
    r.warnings = null;
    r.isDestroyed = false;
    r.childrenElement = null;
    r.triggerStateCollect = function () {
      r.context.store.getInnerMethods(true).innerCollectFormState();
    };
    r.toggleValidateStatus = function (e) {
      r.validateStatus = e;
      r.triggerStateCollect();
    };
    r.toggleTouched = function (e) {
      r.touched = Lm(e) ? e : !r.touched;
      r.triggerStateCollect();
    };
    r.setWarnings = function (e) {
      r.warnings = e;
      r.triggerStateCollect();
    };
    r.setErrors = function (e) {
      r.errors = e;
      r.triggerStateCollect();
    };
    r.getErrors = function () {
      return r.errors;
    };
    r.getWarnings = function () {
      return r.warnings || [];
    };
    r.isTouched = function () {
      return r.touched;
    };
    r.getValidateStatus = function () {
      if (r.props.validateStatus) {
        return r.props.validateStatus;
      }
      return r.validateStatus;
    };
    r.hasFieldProps = function () {
      return !!r.props.field;
    };
    r.clearFormItemError = function (e = r.props.field) {
      const updateFormItem = r.context.updateFormItem;
      if (updateFormItem) {
        updateFormItem(e, {
          errors: null,
          warnings: null,
        });
      }
    };
    r.updateFormItem = function () {
      if (!r.isDestroyed) {
        r.forceUpdate();
        const e = r.context.updateFormItem;
        if (e) {
          e(r.props.field, {
            errors: r.errors,
            warnings: r.warnings,
          });
        }
      }
    };
    r.getFieldValue = function () {
      const field = r.props.field;
      const store = r.context.store;
      if (field) {
        return store.getInnerMethods(true).innerGetFieldValue(field);
      }
    };
    r.onStoreChange = function (e, t) {
      const n = cy(t.field) ? t.field : [t.field];
      const r_props = r.props;
      const o_field = r_props.field;
      const o_shouldUpdate = r_props.shouldUpdate;
      const o_dependencies = r_props.dependencies;
      const c = (e) => {
        if (o_dependencies && o_shouldUpdate) {
          A_4(true, "`shouldUpdate` of the `Form.Item` will be ignored.");
        }
        if (o_dependencies) {
          if (
            (cy(o_dependencies) || o_dependencies.some((e) => P(e, n))) &&
            r.isTouched()
          ) {
            r.validateField();
          }
        } else {
          if (
            o_shouldUpdate &&
            (Tn(o_shouldUpdate)
              ? o_shouldUpdate(t.prev, t.current, {
                  field: t.field,
                  ...e,
                })
              : !eN.A(t.prev, t.current))
          ) {
            r.updateFormItem();
          }
        }
      };
      switch (e) {
        case "reset":
          r.toggleTouched(false);
          r.toggleValidateStatus(undefined);
          r.setErrors(null);
          r.setWarnings(null);
          if (o_dependencies || o_shouldUpdate) {
            c();
          } else {
            r.updateFormItem();
          }
          break;
        case "innerSetValue":
          if (P(o_field, n)) {
            r.toggleTouched(true);
            r.updateFormItem();
            return;
          }
          c({
            isInner: true,
            isFormList: t.isFormList,
          });
          break;
        case "setFieldValue":
          if (P(o_field, n)) {
            r.toggleTouched(true);
            if (t.data && "touched" in t.data) {
              r.toggleTouched(t.data.touched);
            }
            if (t.data && "warnings" in t.data) {
              r.setWarnings(
                hX(t.data.warnings) ? [] : [].concat(t.data.warnings),
              );
            }
            if (t.data && "errors" in t.data) {
              r.setErrors(t.data.errors);
            } else if (!eN.A(u.A(t.prev, o_field), u.A(t.current, o_field))) {
              r.setErrors(null);
            }
            r.updateFormItem();
            return;
          }
          c();
      }
    };
    r.innerSetFieldValue = function (e, t) {
      if (e) {
        const n = r.context.store;
        n.getInnerMethods(true).innerSetFieldValue(e, t);
        const o = {};
        m.A(o, e, t);
        if (r.props.onValuesChange) {
          r.props.onValuesChange(o, {
            ...n.getFieldsValue(),
          });
        }
      }
    };
    r.validateField = function (e) {
      const r_context = r.context;
      const t_validateTrigger = r_context.validateTrigger;
      const t_validateMessages = r_context.validateMessages;
      const r_props = r.props;
      const i_field = r_props.field;
      const i_rules = r_props.rules;
      const i_validateTrigger = r_props.validateTrigger;
      const u = r.getFieldValue();
      const s = () => {
        let e;
        const t = r.errors || ((e = r.warnings) == null ? undefined : e.length);
        r.toggleValidateStatus("validating");
        r.setErrors(null);
        r.setWarnings(null);
        if (t) {
          r.updateFormItem();
        }
      };
      const f = e
        ? (i_rules || []).filter(
            (t) =>
              []
                .concat(
                  t.validateTrigger || i_validateTrigger || t_validateTrigger,
                )
                .indexOf(e) > -1,
          )
        : i_rules;
      if (f && f.length && i_field) {
        s();
        return (function (e, t, n, validateMessages) {
          return g(this, undefined, undefined, function () {
            let o;
            let i;
            const l = this;
            return b(this, (a) => {
              o = E([], x(n), false);
              i = 0;
              return [
                2,
                new Promise((resolve) =>
                  g(l, undefined, undefined, function () {
                    let warning;
                    let a;
                    const c = this;
                    return b(this, (u) => {
                      warning = [];
                      (a = function (u) {
                        return g(c, undefined, undefined, function () {
                          let c;
                          let s;
                          return b(this, (d) => {
                            c = function () {
                              if (i < o.length - 1) {
                                i++;
                                return a(o[i]);
                              }
                              return resolve({
                                error: null,
                                warning,
                              });
                            };
                            if (u) {
                              if (
                                !(
                                  (s = {
                                    ...u,
                                  }).type || s.validator
                                )
                              ) {
                                s.type = "string";
                              }
                              new v.Sj(
                                {
                                  [e]: [s],
                                },
                                {
                                  ignoreEmptyString: true,
                                  validateMessages,
                                },
                              ).validate(
                                {
                                  [e]: t,
                                },
                                function (t) {
                                  if (t) {
                                    if (u.validateLevel !== "warning") {
                                      return resolve({
                                        error: t,
                                        warning,
                                      });
                                    } else {
                                      warning.push(t[e].message);
                                    }
                                  }
                                  return c();
                                },
                              );
                              return [2];
                            }
                            return [2, c()];
                          });
                        });
                      })(o[i]);
                      return [2];
                    });
                  }),
                ),
              ];
            });
          });
        })(i_field, u, f, t_validateMessages).then((e) => {
          let t;
          const e_error = e.error;
          const e_warning = e.warning;
          r.setErrors(e_error ? e_error[i_field] : null);
          r.setWarnings(e_warning || null);
          r.toggleValidateStatus(
            r.errors
              ? "error"
              : ((t = r.warnings) == null ? undefined : t.length)
                ? "warning"
                : "success",
          );
          r.updateFormItem();
          return Promise.resolve({
            error: e_error,
            value: u,
            field: i_field,
          });
        });
      }
      s();
      return Promise.resolve({
        error: null,
        value: u,
        field: i_field,
      });
    };
    r.handleTrigger = function (e) {
      let t;
      const n = [];
      for (let o = 1; o < arguments.length; o++) {
        n[o - 1] = arguments[o];
      }
      const l = r.childrenElement || r.props.children;
      const store = r.context.store;
      const r_props = r.props;
      const c_field = r_props.field;
      const c_trigger = r_props.trigger;
      const c_normalize = r_props.normalize;
      const c_getValueFromEvent = r_props.getValueFromEvent;
      const d = Tn(c_getValueFromEvent)
        ? c_getValueFromEvent.apply(undefined, eV([e], e_(n), false))
        : e;
      let m = d;
      if (S(d)) {
        A_4(
          true,
          "changed value missed, please check whether extra elements is outta input/select controled by Form.Item",
        );
        d.stopPropagation();
        return;
      }
      if (typeof c_normalize === "function") {
        m = c_normalize(d, store.getFieldValue(c_field), {
          ...store.getFieldsValue(),
        });
      }
      r.toggleTouched(true);
      r.innerSetFieldValue(c_field, m);
      r.validateField(c_trigger);
      if (
        i.isValidElement(l) &&
        l.props &&
        l.props[c_trigger] &&
        !r.props.isFormList
      ) {
        (t = l.props)[c_trigger].apply(t, eV([m], e_(n), false));
      }
    };
    r.getChild = function () {
      const children = r.props.children;
      const store = r.context.store;
      let n = children;
      if (Tn(children)) {
        n = children(
          store.getFields(),
          {
            ...store,
          },
          r.props.isFormList && {
            value: r.getFieldValue(),
            onChange: r.handleTrigger,
          },
        );
      }
      r.childrenElement = n;
      return n;
    };
    if ("initialValue" in t && r.hasFieldProps()) {
      n.store
        .getInnerMethods(true)
        .innerSetInitialValue(t.field, t.initialValue);
    }
    return r;
  }
  eF(t, e);
  t.prototype.componentDidMount = function () {
    const store = this.context.store;
    if (store) {
      const t = store.getInnerMethods(true);
      this.removeRegisterField = t.registerField(this);
    }
    this.isDestroyed = false;
  };
  t.prototype.componentDidUpdate = function (e) {
    if (
      e.field !== this.props.field &&
      this.props._key &&
      e._key === this.props._key
    ) {
      this.updateFormItem();
      this.clearFormItemError(e.field);
    }
  };
  t.prototype.componentWillUnmount = function () {
    if (this.removeRegisterField) {
      this.removeRegisterField();
    }
    this.removeRegisterField = null;
    this.clearFormItemError();
    this.isDestroyed = true;
  };
  t.prototype.getValidateTrigger = function () {
    const e =
      this.props.validateTrigger || this.context.validateTrigger || "onChange";
    const t = this.props.rules || [];
    let n = [];
    t.map((t) => {
      n = n.concat(t.validateTrigger || e);
    });
    return Array.from(new Set(n));
  };
  t.prototype.renderControl = function (e, t) {
    let r;
    const o = this;
    const props = this.props;
    const l_field = props.field;
    const l_trigger = props.trigger;
    const l_triggerPropName = props.triggerPropName;
    const l_validateStatus = props.validateStatus;
    const l_formatter = props.formatter;
    const context = this.context;
    const m_store = context.store;
    const m_disabled = context.disabled;
    const g = "disabled" in this.props ? this.props.disabled : m_disabled;
    const b = i.Children.only(e);
    const x = {
      id: A_1(
        ((r = b.props) == null ? undefined : r.id) || {
          ["" + t + A]: t,
        },
      ),
    };
    this.getValidateTrigger().forEach((e) => {
      x[e] = function (t) {
        let n;
        let r;
        o.validateField(e);
        if ((n = b.props) == null ? undefined : n[e]) {
          if ((r = b.props) != null) {
            r[e](t);
          }
        }
      };
    });
    x[l_trigger === undefined ? "onChange" : l_trigger] = this.handleTrigger;
    if (g !== undefined) {
      x.disabled = g;
    }
    let E = u.A(m_store.getInnerMethods(true).innerGetStore(), l_field);
    if (Tn(l_formatter)) {
      E = l_formatter(E);
    }
    x[l_triggerPropName === undefined ? "value" : l_triggerPropName] = E;
    if (!l_validateStatus && this.errors) {
      x.error = true;
    }
    return i.cloneElement(b, x);
  };
  t.prototype.render = function () {
    const props = this.props;
    const e_noStyle = props.noStyle;
    const e_field = props.field;
    const e_isFormList = props.isFormList;
    const e_hasFeedback = props.hasFeedback;
    const l = this.getValidateStatus();
    const context = this.context;
    const a_prefixCls = context.prefixCls;
    const a_getFormElementId = context.getFormElementId;
    let s = this.getChild();
    const id = this.hasFieldProps() ? a_getFormElementId(e_field) : undefined;
    if (this.hasFieldProps() && !e_isFormList && i.Children.count(s) === 1) {
      s = this.renderControl(s, id);
    }
    if (e_noStyle) {
      return s;
    }
    return i.createElement(
      "div",
      {
        className: a_prefixCls + "-item-control-wrapper",
      },
      i.createElement(
        "div",
        {
          className: a_prefixCls + "-item-control",
          id,
        },
        i.createElement(
          "div",
          {
            className: a_prefixCls + "-item-control-children",
          },
          s,
          l &&
            e_hasFeedback &&
            i.createElement(
              "div",
              {
                className: a_prefixCls + "-item-feedback",
              },
              l === "warning" && i.createElement(eT.A, null),
              l === "success" && i.createElement(eR.A, null),
              l === "error" && i.createElement(ej.A, null),
              l === "validating" && i.createElement(eI.A, null),
            ),
        ),
      ),
    );
  };
  t.defaultProps = {
    trigger: "onChange",
    triggerPropName: "value",
  };
  t.isFormControl = true;
  t.contextType = DContext;
  return t;
})(i.Component);
const eG = (e, t) => {
  const n = {};
  for (var r in e) {
    if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
      n[r] = e[r];
    }
  }
  if (e != null && typeof Object.getOwnPropertySymbols === "function") {
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
      if (
        t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o])
      ) {
        n[r[o]] = e[r[o]];
      }
    }
  }
  return n;
};
const eW = function (e) {
  const e_htmlFor = e.htmlFor;
  const e_showColon = e.showColon;
  const e_label = e.label;
  const e_requiredSymbol = e.requiredSymbol;
  const e_required = e.required;
  const e_rules = e.rules;
  const e_prefix = e.prefix;
  const e_tooltip = e.tooltip;
  const f = cy(e_rules) && e_rules.some((e) => e && e.required);
  const p = Gv(e_requiredSymbol) ? e_requiredSymbol.position : "start";
  const d =
    (e_required || f) &&
    !!e_requiredSymbol &&
    i.createElement(
      "strong",
      {
        className: e_prefix + "-form-item-symbol",
      },
      i.createElement(
        "svg",
        {
          fill: "currentColor",
          viewBox: "0 0 1024 1024",
          width: "1em",
          height: "1em",
        },
        i.createElement("path", {
          d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z",
        }),
      ),
    );
  if (e_label) {
    return i.createElement(
      "label",
      {
        htmlFor: e_htmlFor && "" + e_htmlFor + A,
      },
      p !== "end" && d,
      " ",
      e_label,
      (() => {
        if (!e_tooltip) {
          return null;
        }
        const e = e_prefix + "-form-item-tooltip";
        let t = {};
        let n = i.createElement(ez.A, {
          className: e,
        });
        if (!Gv(e_tooltip) || i.isValidElement(e_tooltip)) {
          t = {
            content: e_tooltip,
          };
        } else {
          const r = e_tooltip.icon;
          t = eG(e_tooltip, ["icon"]);
          if (r) {
            n = i.isValidElement(r)
              ? i.cloneElement(r, {
                  className: A_1(e, r.props.className),
                })
              : r;
          }
        }
        return i.createElement(
          A_5,
          {
            ...t,
          },
          n,
        );
      })(),
      p === "end" && i.createElement(i.Fragment, null, " ", d),
      e_showColon ? (e_showColon === true ? ":" : e_showColon) : "",
    );
  }
  return null;
};
const eU = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const eQ = function (e, t, n) {
  if (n || arguments.length == 2) {
    var r;
    for (let o = 0, i = t.length; o < i; o++) {
      if (!(!r && o in t)) {
        if (!r) {
          r = Array.prototype.slice.call(t, 0, o);
        }
        r[o] = t[o];
      }
    }
  }
  return e.concat(r || Array.prototype.slice.call(t));
};
const ew_Row = ew.Row;
const ew_Col = ew.Col;
const e$ = function (e) {
  const e_prefixCls = e.prefixCls;
  const e_help = e.help;
  const e_errors = e.errors;
  const e_warnings = e.warnings;
  const a = e_errors.map((e, t) => {
    if (e) {
      return i.createElement(
        "div",
        {
          key: t,
          role: "alert",
        },
        e.message,
      );
    }
  });
  const u = [];
  e_warnings.map((e, t) => {
    u.push(
      i.createElement(
        "div",
        {
          key: t,
          role: "alert",
          className: e_prefixCls + "-message-help-warning",
        },
        e,
      ),
    );
  });
  const s = !b0(e_help) || !!u.length;
  const f = s || !!a.length;
  return (
    f &&
    i.createElement(
      Y.A,
      {
        in: f,
        appear: true,
        classNames: "formblink",
        timeout: 300,
        unmountOnExit: true,
      },
      i.createElement(
        "div",
        {
          className: A_1(e_prefixCls + "-message", {
            [e_prefixCls + "-message-help"]: s,
          }),
        },
        b0(e_help)
          ? i.createElement(
              i.Fragment,
              null,
              a.length > 0 && a,
              u.length > 0 && u,
            )
          : e_help,
      ),
    )
  );
};
const eX = i.forwardRef(function (e, t) {
  let n;
  let r;
  let s;
  let f;
  const p = i.useContext(QO);
  const p_getPrefixCls = p.getPrefixCls;
  const p_prefixCls = p.prefixCls;
  const y = i.useContext(DContext);
  const g = i.useContext(LContext);
  const b = eU(i.useState(null), 2);
  const x = b[0];
  const E = b[1];
  const C = eU(i.useState(null), 2);
  const w = C[0];
  const O = C[1];
  const S = i.useContext(VContext);
  const P = S.prefixCls || p_getPrefixCls("form");
  const A = e.layout || S.layout;
  const N = e.labelAlign || S.labelAlign;
  const kRef = i.useRef(false);
  const updateFormItem =
    Gv(e.noStyle) && e.noStyle.showErrorTip && y.updateFormItem
      ? y.updateFormItem
      : function (e, t = {}) {
          if (!kRef.current) {
            const n = t || {};
            const r = n.errors;
            const o = n.warnings;
            E(function (t) {
              const n = {
                ...(t || {}),
              };
              if (r) {
                n[e] = r;
              } else {
                delete n[e];
              }
              return n;
            });
            O(function (t) {
              const n = {
                ...(t || {}),
              };
              if (o && o.length) {
                n[e] = o;
              } else {
                delete n[e];
              }
              return n;
            });
          }
        };
  i.useEffect(function () {
    kRef.current = false;
    return function () {
      kRef.current = true;
      E(null);
      O(null);
    };
  }, []);
  const j = {
    ...S,
    validateMessages:
      S.validateMessages &&
      ((n = S.validateMessages),
      (r = {
        label: e.label,
      }),
      d.A(n, function (e) {
        if (Tn(e)) {
          return function (t) {
            return e(t, r);
          };
        }
      })),
    prefixCls: P,
    updateFormItem,
    disabled: "disabled" in e ? e.disabled : S.disabled,
  };
  const { label, extra, className, style, validateStatus, hidden, ...rest } = e;
  const K = A_1(P + "-label-item", {
    [P + "-label-item-left"]: N === "left",
  });
  const errors = x ? Object.values(x) : [];
  const warnings = w
    ? Object.values(w).reduce((acc, item) => acc.concat(item), [])
    : [];
  const Q = i.useMemo(
    function () {
      return (
        validateStatus ||
        (errors.length ? eA : warnings.length ? "warning" : undefined)
      );
    },
    [x, w, validateStatus],
  );
  const q = i.useMemo(
    function () {
      return !b0(e.help) || warnings.length > 0;
    },
    [e.help, w],
  );
  const Y = A_1(
    P + "-item",
    {
      [P + "-item-error"]: q || (!validateStatus && Q === eA),
      [P + "-item-status-" + Q]: Q,
      [P + "-item-has-help"]: q,
      [P + "-item-hidden"]: hidden,
      [P + "-item-has-feedback"]: Q && e.hasFeedback,
    },
    P + "-layout-" + A,
    className,
  );
  const $ = () => {
    let t;
    let n;
    const e_field = e.field;
    const e_children = e.children;
    const disabled = "disabled" in e ? e.disabled : S.disabled;
    if (Tn(e_children)) {
      return i.createElement(
        eD,
        {
          disabled,
          ...e,
          ...(e_field
            ? {
                key: e_field,
                _key: e_field,
              }
            : {}),
        },
        function () {
          const e = [];
          for (let t = 0; t < arguments.length; t++) {
            e[t] = arguments[t];
          }
          return e_children.apply(undefined, eQ([], eU(e), false));
        },
      );
    }
    if (cy(e_children)) {
      const a = i.Children.map(e_children, function (e, t) {
        const n = (Gv(e) && e.key) || t;
        const r = b0(disabled)
          ? {
              key: n,
            }
          : {
              key: n,
              disabled,
            };
        if (Gv(e)) {
          return i.cloneElement(e, r);
        }
        return e;
      });
      return i.createElement(
        eD,
        {
          ...e,
          field: undefined,
        },
        a,
      );
    }
    if (i.Children.count(e_children) === 1) {
      if (e_field) {
        const c =
          ((t = g == null ? undefined : g.getItemKey) == null
            ? undefined
            : t.call(g, e_field)) || e_field;
        return i.createElement(
          eD,
          {
            disabled,
            ...e,
            key: c,
            _key: c,
          },
          e_children,
        );
      }
      if (Gv(e_children)) {
        if ((n = e_children.type) == null ? undefined : n.isFormControl) {
          return e_children;
        }
        const u = b0(disabled)
          ? {}
          : {
              disabled,
            };
        return i.createElement(
          eD,
          {
            ...e,
            field: undefined,
          },
          i.cloneElement(e_children, u),
        );
      }
    }
    return e_children;
  };
  const X = {
    ...S,
  };
  if (!e.noStyle) {
    X.wrapperCol = undefined;
    X.labelCol = undefined;
  }
  return i.createElement(
    VContext.Provider,
    {
      value: X,
    },
    i.createElement(
      DContext.Provider,
      {
        value: j,
      },
      e.noStyle
        ? $()
        : i.createElement(
            ew_Row,
            {
              ref: t,
              ...A_2(rest, [
                "tooltip",
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
              className: Y,
              div: A !== "horizontal",
              style,
            },
            label
              ? i.createElement(
                  ew_Col,
                  {
                    ...(e.labelCol || S.labelCol),
                    className: A_1(
                      K,
                      (s = e.labelCol) == null ? undefined : s.className,
                      (f = S.labelCol) == null ? undefined : f.className,
                      {
                        [P + "-label-item-flex"]: !e.labelCol && !S.labelCol,
                      },
                    ),
                  },
                  i.createElement(eW, {
                    tooltip: e.tooltip,
                    htmlFor: e.field && S.getFormElementId(e.field),
                    label,
                    prefix: p_prefixCls,
                    requiredSymbol:
                      "requiredSymbol" in e
                        ? e.requiredSymbol
                        : S.requiredSymbol,
                    required: e.required,
                    rules: e.rules,
                    showColon: "colon" in e ? e.colon : S.colon,
                  }),
                )
              : null,
            i.createElement(
              ew_Col,
              {
                className: A_1(P + "-item-wrapper", {
                  [P + "-item-wrapper-flex"]: !e.wrapperCol && !S.wrapperCol,
                }),
                ...(e.wrapperCol || S.wrapperCol),
              },
              $(),
              i.createElement(e$, {
                prefixCls: P,
                help: e.help,
                errors,
                warnings,
              }),
              extra &&
                i.createElement(
                  "div",
                  {
                    className: P + "-extra",
                  },
                  extra,
                ),
            ),
          ),
    ),
  );
});
eX.defaultProps = {
  trigger: "onChange",
  triggerPropName: "value",
};
eX.displayName = "FormItem";
const eZ = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const e0 = function (e, t, n) {
  if (n || arguments.length == 2) {
    var r;
    for (let o = 0, i = t.length; o < i; o++) {
      if (!(!r && o in t)) {
        if (!r) {
          r = Array.prototype.slice.call(t, 0, o);
        }
        r[o] = t[o];
      }
    }
  }
  return e.concat(r || Array.prototype.slice.call(t));
};
const e1 = (e, t) => !b0(e) && e >= 0 && e < t.length;
const useE2 = function (e) {
  const e_field = e.field;
  const e_children = e.children;
  const e_initialValue = e.initialValue;
  const oRef = i.useRef({
    id: 0,
    keys: [],
  });
  const l =
    "initialValue" in e
      ? {
          initialValue: e_initialValue,
        }
      : {};
  const keys = oRef.current.keys;
  return i.createElement(
    LContext.Provider,
    {
      value: {
        getItemKey: function (e) {
          const n = e == null ? undefined : e.replace(/\[|\]/g, ".").split(".");
          const r = n.indexOf(e_field);
          const o = n[r + 1];
          return (
            e_field + "_" + keys.indexOf(o) + "_" + n.slice(r + 2).join("_")
          );
        },
      },
    },
    i.createElement(
      eX,
      {
        field: e_field,
        ...l,
        isFormList: true,
        rules: e.rules,
        wrapperCol: {
          span: 24,
        },
        noStyle: "noStyle" in e ? e.noStyle : !e.rules,
        shouldUpdate: function (e, n, r) {
          let o;
          let i;
          return (
            !!(r && !r.isInner && P(r.field, [e_field])) &&
            ((o = u.A(e, e_field)) == null ? undefined : o.length) !==
              ((i = u.A(n, e_field)) == null ? undefined : i.length)
          );
        },
      },
      function (e, r, i) {
        const i_value = i.value;
        const i_onChange = i.onChange;
        return (
          Tn(e_children) &&
          e_children(
            (i_value || []).map((e, n) => {
              let r = keys[n];
              if (r === undefined) {
                r = oRef.current.id;
                keys.push(r);
                oRef.current.id += 1;
              }
              return {
                field: e_field + "[" + n + "]",
                key: r,
              };
            }),
            {
              add: function (e, n) {
                if (S(e)) {
                  return void A_4(
                    true,
                    "Form.List: The event object cannot be used as a parameter of the add method",
                  );
                }
                let i;
                const l =
                  ((i = r.getInnerMethods(true)) == null
                    ? undefined
                    : i.innerGetFieldValue(e_field)) || [];
                const u = oRef.current.id;
                oRef.current.id += 1;
                const s = l || [];
                let f = s;
                if (n !== undefined && n >= 0 && n <= s.length) {
                  keys.splice(n, 0, u);
                  f = e0(
                    e0(e0([], eZ(s.slice(0, n)), false), [e], false),
                    eZ(s.slice(n)),
                    false,
                  );
                } else {
                  keys.push(u);
                  f = e0(e0([], eZ(s), false), [e], false);
                }
                i_onChange(f, {
                  isFormList: true,
                  ignore: e === undefined,
                });
              },
              remove: function (e) {
                let n;
                const o = (
                  ((n = r.getInnerMethods(true)) == null
                    ? undefined
                    : n.innerGetFieldValue(e_field)) || []
                ).filter((t, n) => n !== e);
                keys.splice(e, 1);
                i_onChange(e0([], eZ(o), false), {
                  isFormList: true,
                });
              },
              move: function (e, n) {
                let o;
                const i =
                  ((o = r.getInnerMethods(true)) == null
                    ? undefined
                    : o.innerGetFieldValue(e_field)) || [];
                if (e !== n && e1(e, i) && e1(n, i)) {
                  const l = keys[e];
                  keys.splice(e, 1);
                  keys.splice(n, 0, l);
                  const u = i[e];
                  const s = e0([], eZ(i), false);
                  s.splice(e, 1);
                  s.splice(n, 0, u);
                  i_onChange(s, {
                    isFormList: true,
                  });
                }
              },
            },
          )
        );
      },
    ),
  );
};
useE2.displayName = "FormList";
const e3 = i.forwardRef(function (e, t) {
  const nRef = i.useRef({});
  const register = i.useCallback(function (e, t) {
    if (e) {
      nRef.current[e] = t;
    }
    return function () {
      delete nRef.current[e];
    };
  }, []);
  const onFormSubmit = i.useCallback(
    function (t, r) {
      if (e.onFormSubmit) {
        e.onFormSubmit(t, r, {
          forms: nRef.current,
        });
      }
    },
    [e.onFormSubmit],
  );
  const onFormValuesChange = i.useCallback(
    function (t, r) {
      if (e.onFormValuesChange) {
        e.onFormValuesChange(t, r, {
          forms: nRef.current,
        });
      }
    },
    [e.onFormValuesChange],
  );
  return i.createElement(
    ZContext.Provider,
    {
      value: {
        onFormValuesChange,
        onFormSubmit,
        register,
      },
    },
    e.children,
  );
});
e3.displayName = "FormProvider";
const e4 = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const e6 = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const e5 = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
q.Provider = e3;
q.Item = eX;
q.List = useE2;
q.Control = eD;
q.useForm = useF;
q.useFormContext = function () {
  const e = i.useContext(VContext);
  const e_store = e.store;
  const n = e6(i.useState(false), 2);
  const isSubmitting = n[0];
  const o = n[1];
  const l = i.useCallback(function () {
    let e;
    const n = e_store == null ? undefined : e_store.getFieldsState();
    o(
      (e = n == null ? undefined : n[Object.keys(n)[0]]) == null
        ? undefined
        : e.isSubmitting,
    );
  }, []);
  i.useEffect(function () {
    if (!e_store) {
      return void A_4(true, "formInstance is not available");
    }
    const registerStateWatcher = (
      e_store == null ? undefined : e_store.getInnerMethods(true)
    ).registerStateWatcher;
    const n = function () {
      return l();
    };
    n();
    const r = registerStateWatcher && registerStateWatcher(n);
    return function () {
      if (r) {
        r();
      }
    };
  }, []);
  return {
    form: e_store,
    disabled: e.disabled,
    isSubmitting,
  };
};
q.useWatch = function (e, t) {
  const n = i.useContext(VContext);
  const r = t || n.store;
  const o = e4(
    i.useState(function () {
      const t = r == null ? undefined : r.getFieldsValue([].concat(e));
      if (Kg(e)) {
        return u.A(t, e);
      }
      return t;
    }),
    2,
  );
  const l = o[0];
  const a = o[1];
  const cRef = i.useRef(e);
  cRef.current = e;
  const sRef = i.useRef(JSON.stringify(l));
  i.useEffect(function () {
    if (!r) {
      return void A_4(true, "formInstance is not available");
    }
    const registerWatcher = (r == null ? undefined : r.getInnerMethods(true))
      .registerWatcher;
    const t = function () {
      const cRef_current = cRef.current;
      const t = r.getFieldsValue([].concat(cRef_current));
      let n = t;
      if (!cy(cRef_current)) {
        n = u.A(t, cRef_current);
      }
      const o = JSON.stringify(n);
      if (sRef.current !== o) {
        a(n);
        sRef.current = o;
      }
    };
    t();
    const n = registerWatcher && registerWatcher(t);
    return function () {
      if (n) {
        n();
      }
    };
  }, []);
  return l;
};
q.useFormState = function (e, t) {
  const n = i.useContext(VContext);
  const r = t || n.store;
  const oRef = i.useRef(e);
  oRef.current = e;
  const l = i.useCallback(function () {
    const oRef_current = oRef.current;
    const t = r.getFieldsState([oRef_current]);
    if (t == null) {
      return undefined;
    }
    return t[oRef_current];
  }, []);
  const a = e5(i.useState(l), 2);
  const c = a[0];
  const u = a[1];
  const sRef = i.useRef(c);
  i.useEffect(function () {
    if (!r) {
      return void A_4(true, "formInstance is not available");
    }
    const registerStateWatcher = (
      r == null ? undefined : r.getInnerMethods(true)
    ).registerStateWatcher;
    const t = function () {
      const e = l();
      if (!eN.A(sRef.current, e)) {
        u(e);
        sRef.current = e;
      }
    };
    t();
    const n = registerStateWatcher && registerStateWatcher(t);
    return function () {
      if (n) {
        n();
      }
    };
  }, []);
  return c;
};
var e7 = q;
export { e7 as A };
