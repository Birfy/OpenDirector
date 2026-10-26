import r from "bT";
import { xy } from "./module-uRm.js";
const i = (e, t) => {
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
export function A(e) {
  const e_value = e.value;
  const e_maxLength = e.maxLength;
  const e_onChange = e.onChange;
  const e_onKeyDown = e.onKeyDown;
  const e_onPressEnter = e.onPressEnter;
  const e_beforeTriggerValueChangeCallback = e.beforeTriggerValueChangeCallback;
  const sRef = r.useRef(false);
  const f = i(r.useState(""), 2);
  const compositionValue = f[0];
  const d = f[1];
  const triggerValueChangeCallback = function (e, r) {
    if (e_beforeTriggerValueChangeCallback) {
      e_beforeTriggerValueChangeCallback(e);
    }
    if (
      e_onChange &&
      e !== e_value &&
      (e_maxLength === undefined || e.length <= e_maxLength)
    ) {
      e_onChange(e, r);
    }
  };
  return {
    compositionValue,
    triggerValueChangeCallback,
    compositionHandler: function (e) {
      sRef.current = e.type !== "compositionend";
      if (!sRef.current) {
        d(undefined);
        triggerValueChangeCallback(e.target.value, e);
      }
    },
    valueChangeHandler: function (e) {
      const value = e.target.value;
      if (sRef.current) {
        sRef.current = false;
        d(value);
      } else {
        if (compositionValue) {
          d(undefined);
        }
        triggerValueChangeCallback(value, e);
      }
    },
    keyDownHandler: function (e) {
      const t = e.keyCode || e.which;
      if (!sRef.current) {
        if (e_onKeyDown) {
          e_onKeyDown(e);
        }
        if (t === xy.code && e_onPressEnter) {
          e_onPressEnter(e);
        }
      }
    },
  };
}
