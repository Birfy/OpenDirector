import _l from "fyk";
import c from "wnX";
import s from "bT";
import { FI, Wb } from "./module-rJ.js";
import _f from "i0l";
import m from "FR";
import p from "BCb";
import E from "Ejw";
let r;
let i;
let a;
let o;
const y = function () {};
const x = {
  getFieldValue: function (e) {
    return e;
  },
  getFieldsValue: function (e) {
    return {};
  },
  getFieldError: function (e) {
    return [];
  },
  setFieldValue: function (e, t) {
    return true;
  },
  setFieldsValue: function (e) {
    return true;
  },
  registerField: function (e, t) {
    return function () {};
  },
  resetFields: y,
  validateFields: y,
  submit: y,
  getInternalHooks: function () {
    return {
      registerField: y,
      setInitialValues: y,
      setCallbacks: y,
    };
  },
};
const C = function () {
  const e = this;
  this._formData = {};
  this._fieldsList = {};
  this._initialValues = {};
  this._callbacks = {};
  this.setFieldsValue = function (t) {
    e._formData = _l({}, e._formData, t);
    e.notifyField(t);
    Object.keys(t).forEach((t) => {
      if (t in e._fieldsList) {
        let n;
        if ((n = e._fieldsList[t]) != null) {
          n.onValueChange();
        }
      }
    });
    return true;
  };
  this.setFieldValue = function (t, n) {
    e._formData = _l({}, e._formData, {
      [t]: n,
    });
    const onValuesChange = e._callbacks.onValuesChange;
    if (onValuesChange) {
      onValuesChange(
        {
          [t]: n,
        },
        e._formData,
      );
    }
    e.notifyField({
      [t]: n,
    });
    return true;
  };
  this.notifyField = function (t) {
    Object.keys(t).map((n) => {
      let r;
      const i = ((r = e._fieldsList) == null ? undefined : r[n]) || null;
      if (i) {
        i.onValueChange(t[n]);
      }
    });
  };
  this.getFieldsValue = function (t) {
    if (t) {
      return t.map((t) => e.getFieldValue(t));
    }
    return e._formData;
  };
  this.getFieldValue = function (t) {
    let n;
    if ((n = e._formData) == null) {
      return undefined;
    }
    return n[t];
  };
  this.getFieldError = function (t) {
    let n;
    const r = ((n = e._fieldsList) == null ? undefined : n[t]) || null;
    if (r) {
      return r.getFieldError();
    }
    return [];
  };
  this.getFieldsError = function (t) {
    return (t || Object.keys(e._fieldsList)).reduce((acc, item) => {
      let r;
      const i = (r = e._fieldsList) == null ? undefined : r[item];
      if (i) {
        acc[item] = i == null ? undefined : i.getFieldError();
      }
      return acc;
    }, {});
  };
  this.isFieldTouched = function (t) {
    let n;
    const r = ((n = e._fieldsList) == null ? undefined : n[t]) || null;
    return !!r && r.isFieldTouched();
  };
  this.registerField = function (t, n) {
    e._fieldsList[t] = n;
    const initialValue = n.props.initialValue;
    if (initialValue !== undefined && t) {
      e._initialValues = _l({}, e._initialValues, {
        [t]: initialValue,
      });
      e.setFieldsValue(
        _l({}, e._formData, {
          [t]: initialValue,
        }),
      );
    }
    return function () {
      if (t in e._fieldsList) {
        delete e._fieldsList[t];
        delete e._formData[t];
      }
    };
  };
  this.setInitialValues = function (t) {
    e._initialValues = _l({}, t || {});
    e.setFieldsValue(t);
  };
  this.resetFields = function () {
    e.setFieldsValue(e._initialValues);
  };
  this.validateFields = function () {
    const t = [];
    Object.values(e._fieldsList).forEach((e) => {
      const n = e.validateField();
      t.push(n.then((e) => e));
    });
    return new Promise((resolve, reject) => {
      Promise.all(t).then((t) => {
        const r = t.filter((e) => {
          let t;
          if (e == null || (t = e.errors) == null) {
            return undefined;
          }
          return t.length;
        });
        if (r.length) {
          reject(r);
        } else {
          resolve(t);
        }
      });
    });
  };
  this.submit = p(
    E.mark(function* t() {
      e.validateFields()
        .then((t) => {
          const onSubmit = e._callbacks.onSubmit;
          if (onSubmit != null) {
            onSubmit(e._formData, t);
          }
        })
        .catch((t) => {
          const onSubmitFailed = e._callbacks.onSubmitFailed;
          if (onSubmitFailed) {
            onSubmitFailed(e._formData, t);
          }
        });
    }),
  );
  this.setCallbacks = function (t) {
    e._callbacks = t;
  };
  this.getMethods = function () {
    return {
      setFieldsValue: e.setFieldsValue,
      setFieldValue: e.setFieldValue,
      getFieldsValue: e.getFieldsValue,
      getFieldValue: e.getFieldValue,
      getFieldError: e.getFieldError,
      getFieldsError: e.getFieldsError,
      isFieldTouched: e.isFieldTouched,
      registerField: e.registerField,
      resetFields: e.resetFields,
      submit: e.submit,
      getInternalHooks: e.getInternalHooks,
      validateFields: e.validateFields,
    };
  };
  this.getInternalHooks = function () {
    return {
      registerField: e.registerField,
      setInitialValues: e.setInitialValues,
      setCallbacks: e.setCallbacks,
    };
  };
};
const KContext = s.createContext({
  form: x,
  layout: "horizontal",
});
r = a || (a = {});
r.Input = "Input";
r.Textarea = "Textarea";
r.Checkbox = "Checkbox";
r.CheckboxGroup = "CheckboxGroup";
r.DatePicker = "DatePicker";
r.Picker = "Picker";
r.Radio = "Radio";
r.RadioGroup = "RadioGroup";
r.Slider = "Slider";
r.Switch = "Switch";
r.ImagePicker = "ImagePicker";
r.Rate = "Rate";
r.Stepper = "Stepper";
i = o || (o = {});
i.Init = "init";
i.Error = "error";
i.Warning = "warning";
i.Validating = "validating";
i.Success = "success";
const w = (e) => {
  let errors = [];
  let warnings = [];
  let errorTypes = [];
  e.map((e) => {
    const e_message = e.message;
    const a = e_message === undefined ? [] : e_message;
    const e_validateLevel = e.validateLevel;
    const e_errorTypes = e.errorTypes;
    if (a != null && a.length) {
      if (
        (e_validateLevel === undefined ? "error" : e_validateLevel) ===
        "warning"
      ) {
        warnings = [].concat(warnings, a);
      } else {
        errors = [].concat(errors, a);
        errorTypes = [].concat(errorTypes, e_errorTypes);
      }
    }
  });
  return {
    warnings,
    errors,
    errorTypes,
  };
};
const F = [
  "label",
  "field",
  "disabled",
  "layout",
  "style",
  "extra",
  "requiredIcon",
  "rules",
  "className",
];
const T = ((e) => {
  function t(t, n) {
    let r;
    r = e.call(this, t) || this;
    r.context = undefined;
    r.destroyField = undefined;
    r._errors = [];
    r._touched = false;
    r.onValueChange = function (preStore, curStore) {
      r._touched = true;
      const shouldUpdate = r.props.shouldUpdate;
      if (typeof shouldUpdate === "function") {
        if (
          shouldUpdate({
            preStore,
            curStore,
          })
        ) {
          r.forceUpdate();
        }
        return;
      }
      r.forceUpdate();
    };
    r.getFieldError = function () {
      return r._errors;
    };
    r.isFieldTouched = function () {
      return r._touched;
    };
    r.validateField = function () {
      const validateMessages = r.context.validateMessages;
      const getFieldValue = r.context.form.getFieldValue;
      const r_props = r.props;
      const n_field = r_props.field;
      const n_rules = r_props.rules;
      const n_onValidateStatusChange = r_props.onValidateStatusChange;
      const l = getFieldValue(n_field);
      if (n_rules != null && n_rules.length && n_field) {
        const dom = r.props.getFormItemRef();
        const d = new c.Dr(
          {
            [n_field]: n_rules,
          },
          {
            validateMessages,
          },
        );
        return new Promise((resolve) => {
          d.validate(
            {
              [n_field]: l,
            },
            function (t) {
              const n = w((t == null ? undefined : t[n_field]) || []);
              const n_errors = n.errors;
              const n_warnings = n.warnings;
              const n_errorTypes = n.errorTypes;
              r._errors = n_errors;
              n_onValidateStatusChange({
                errors: r._errors,
                warnings: n_warnings,
                errorTypes: n_errorTypes,
              });
              return resolve({
                errors: r._errors,
                warnings: n_warnings,
                value: l,
                field: n_field,
                dom,
              });
            },
          );
        });
      }
      return Promise.resolve({
        errors: [],
        warnings: [],
        value: l,
        field: n_field,
        dom: null,
      });
    };
    r.setFieldData = function (e) {
      const field = r.props.field;
      r.context.form.setFieldValue(field, e);
      r.validateField();
    };
    r.innerTriggerFunction = function (e, t) {
      r.setFieldData(t);
      let n;
      let i;
      const r_props = r.props;
      const a_children = r_props.children;
      const a_trigger = r_props.trigger;
      const u = a_trigger === undefined ? "onChange" : a_trigger;
      if (u && (n = a_children.props) != null && n[u]) {
        for (
          var c = arguments.length, s = Array(c > 2 ? c - 2 : 0), d = 2;
          d < c;
          d++
        ) {
          s[d - 2] = arguments[d];
        }
        if ((i = a_children.props) != null) {
          i[u].apply(i, [e, t].concat(s));
        }
      }
    };
    r.innerTriggerFunctionWithValueFirst = function (e) {
      r.setFieldData(e);
      let t;
      let n;
      const r_props = r.props;
      const i_children = r_props.children;
      const i_trigger = r_props.trigger;
      const l = i_trigger === undefined ? "onChange" : i_trigger;
      if (l && (t = i_children.props) != null && t[l]) {
        for (
          var u = arguments.length, c = Array(u > 1 ? u - 1 : 0), s = 1;
          s < u;
          s++
        ) {
          c[s - 1] = arguments[s];
        }
        if ((n = i_children.props) != null) {
          n[l].apply(n, [e].concat(c));
        }
      }
    };
    r.innerClearFunction = function () {
      let e;
      let t;
      const children = r.props.children;
      r.setFieldData("");
      if ((e = children.props) != null && e.onClear) {
        for (var i = arguments.length, a = Array(i), o = 0; o < i; o++) {
          a[o] = arguments[o];
        }
        if ((t = children.props) != null) {
          t.onClear.apply(t, a);
        }
      }
    };
    r.destroyField = function () {};
    if (t != null && t.initialValue && t.field) {
      n.form.getInternalHooks().setInitialValues({
        [t.field]: t.initialValue,
      });
    }
    return r;
  }
  m(t, e);
  const t_prototype = t.prototype;
  t_prototype.componentDidMount = function () {
    const registerField = this.context.form.getInternalHooks().registerField;
    this.destroyField = registerField(this.props.field, this);
  };
  t_prototype.componentWillUnmount = function () {
    this.destroyField();
  };
  t_prototype.renderChildren = function () {
    let t;
    const n = this;
    const props = this.props;
    const r_children = props.children;
    const r_field = props.field;
    const r_trigger = props.trigger;
    const u = r_trigger === undefined ? "onChange" : r_trigger;
    const r_triggerPropsField = props.triggerPropsField;
    const r_displayType = props.displayType;
    const getFieldValue = this.context.form.getFieldValue;
    let v = {
      [r_triggerPropsField === undefined ? "value" : r_triggerPropsField]:
        getFieldValue(r_field),
      disabled: this.props.disabled,
    };
    switch (
      r_displayType ||
      ((t = r_children.type) == null ? undefined : t.displayName)
    ) {
      case a.Input:
      case a.Textarea:
        v = {
          value: getFieldValue(r_field) || "",
          onInput: this.innerTriggerFunction,
          onClear: this.innerClearFunction,
          disabled: this.props.disabled,
        };
        break;
      case a.Checkbox:
      case a.Radio:
      case a.Slider:
      case a.RadioGroup:
      case a.CheckboxGroup:
        v = {
          value: getFieldValue(r_field),
          onChange: this.innerTriggerFunctionWithValueFirst,
          disabled: this.props.disabled,
        };
        break;
      case a.DatePicker:
        v = {
          currentTs: getFieldValue(r_field),
          onChange: this.innerTriggerFunction,
          disabled: this.props.disabled,
        };
        break;
      case a.Picker:
        v = {
          data: getFieldValue(r_field),
          onPickerChange: this.innerTriggerFunction,
          disabled: this.props.disabled,
        };
        break;
      case a.Switch:
        v = {
          checked: !!getFieldValue(r_field),
          onChange: this.innerTriggerFunctionWithValueFirst,
          disabled: this.props.disabled,
        };
        break;
      case a.ImagePicker:
        v = {
          images: getFieldValue(r_field),
          onChange: this.innerTriggerFunctionWithValueFirst,
          disabled: this.props.disabled,
        };
        break;
      default:
        var m = r_children.props[u];
        v.error = this._errors;
        v[u] = function (e) {
          n.setFieldData(e);
          for (
            var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1;
            i < t;
            i++
          ) {
            r[i - 1] = arguments[i];
          }
          if (m) {
            m.apply(undefined, [e].concat(r));
          }
        };
    }
    return s.cloneElement(r_children, v);
  };
  t_prototype.render = function () {
    return this.renderChildren();
  };
  return t;
})(s.PureComponent);
T.contextType = KContext;
const Item = s.forwardRef(function (e, t) {
  let n;
  const e_label = e.label;
  const e_field = e.field;
  const e_disabled = e.disabled;
  const e_layout = e.layout;
  const e_style = e.style;
  const e_extra = e.extra;
  const e_requiredIcon = e.requiredIcon;
  const e_rules = e.rules;
  const e_className = e.className;
  const E = _f(e, F);
  const prefixCls = s.useContext(FI).prefixCls;
  const y = s.useContext(KContext);
  const y_layout = y.layout;
  const y_disabled = y.disabled;
  const w = s.useState(null);
  const N = w[0];
  const S = w[1];
  const R = s.useState(null);
  const D = R[0];
  const I = R[1];
  const A = s.useState([]);
  const V = A[0];
  const L = A[1];
  const ORef = s.useRef(null);
  const disabled = (e_disabled !== undefined && e_disabled) || y_disabled;
  const rules =
    E != null && E.required
      ? [
          {
            type: c.vb.String,
            required: true,
          },
        ].concat(e_rules || [])
      : e_rules;
  if ((n = e_rules) === undefined) {
    n = [];
  }
  const P =
    (n || []).some((e) => {
      if (e == null) {
        return undefined;
      }
      return e.required;
    }) || (E == null ? undefined : E.required);
  s.useImperativeHandle(t, function () {
    return {
      dom: ORef.current,
    };
  });
  return s.createElement(
    "div",
    {
      className: c.xF(
        prefixCls + "-form-item",
        prefixCls + "-form-item-" + (e_layout || y_layout),
        e_className === undefined ? "" : e_className,
        {
          disabled,
          [prefixCls + "-form-item-error"]: !!N,
          [prefixCls + "-form-item-warning"]: !!(!N && V),
          [prefixCls + "-form-item-error-" + D]: D,
        },
      ),
      style: e_style,
      ref: ORef,
    },
    s.createElement(
      "div",
      {
        className: c.xF(prefixCls + "-form-label-item"),
      },
      P
        ? e_requiredIcon ||
            s.createElement(
              "span",
              {
                className: c.xF(
                  prefixCls + "-form-label-item-required-asterisk",
                ),
              },
              "*",
            )
        : null,
      e_label,
    ),
    s.createElement(
      "div",
      {
        className: c.xF(prefixCls + "-form-item-control-wrapper"),
      },
      s.createElement(
        "div",
        {
          className: c.xF(prefixCls + "-form-item-control"),
        },
        s.createElement(
          T,
          _l({}, E, {
            rules,
            disabled,
            field: e_field,
            onValidateStatusChange: function (e) {
              const e_errors = e.errors;
              const e_warnings = e.warnings;
              const e_errorTypes = e.errorTypes;
              S(e_errors.length ? e_errors[0] : null);
              I(e_errorTypes.length ? e_errorTypes[0] : null);
              L(e_warnings);
            },
            getFormItemRef: function () {
              return ORef.current;
            },
          }),
        ),
      ),
      N &&
        s.createElement(
          "div",
          {
            className: c.xF(
              prefixCls +
                "-form-item-message " +
                prefixCls +
                "-form-item-error-message",
            ),
          },
          N,
        ),
      (V || []).map((e, key) => {
        if (typeof e === "string") {
          return s.createElement(
            "div",
            {
              className: c.xF(
                prefixCls +
                  "-form-item-message " +
                  prefixCls +
                  "-form-item-warning-message",
              ),
              key,
            },
            e,
          );
        }
        return e;
      }),
    ),
    e_extra,
  );
});
const S = s.forwardRef(function (e, t) {
  let n;
  let r;
  const e_className = e.className;
  const a = e_className === undefined ? "" : e_className;
  const e_style = e.style;
  const e_layout = e.layout;
  const e_initialValues = e.initialValues;
  const e_form = e.form;
  const e_children = e.children;
  const e_onValuesChange = e.onValuesChange;
  const e_onSubmit = e.onSubmit;
  const e_onSubmitFailed = e.onSubmitFailed;
  const e_disabled = e.disabled;
  const bRef = s.useRef(null);
  const y = ((n = s.useRef(x)),
  !(r = s.useRef(false)).current &&
    (e_form ? (n.current = e_form) : (n.current = new C().getMethods()),
    (r.current = true)),
  [n.current])[0];
  const w = y.getInternalHooks();
  const w_setCallbacks = w.setCallbacks;
  const w_setInitialValues = w.setInitialValues;
  w_setCallbacks({
    onValuesChange: e_onValuesChange,
    onSubmit: e_onSubmit,
    onSubmitFailed: e_onSubmitFailed,
  });
  s.useEffect(function () {
    w_setInitialValues(e_initialValues || {});
  }, []);
  s.useImperativeHandle(t, function () {
    return {
      dom: bRef.current,
      form: y,
    };
  });
  const N = {
    form: y,
    layout: e_layout === undefined ? "horizontal" : e_layout,
    disabled: e_disabled,
  };
  return s.createElement(Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    const e_locale = e.locale;
    const r = e_locale === undefined ? c.q : e_locale;
    return s.createElement(
      "form",
      {
        className: e_prefixCls + "-form " + a,
        style: e_style,
        ref: bRef,
        onSubmit: function (e) {
          e.preventDefault();
          e.stopPropagation();
          y.submit();
        },
      },
      s.createElement(
        KContext.Provider,
        {
          value: _l({}, N, {
            validateMessages: (r == null ? undefined : r.Form) || {},
          }),
        },
        e_children,
      ),
    );
  });
});
c.DU(S, {
  Item,
});
