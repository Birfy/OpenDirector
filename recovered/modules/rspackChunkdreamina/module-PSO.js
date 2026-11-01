import r from "bT";
import { xy } from "./module-Kg.js";
export function A({
  value,
  maxLength,
  onChange,
  onKeyDown,
  onPressEnter,
  beforeTriggerValueChangeCallback,
}) {
  let cRef = r.useRef(false);
  let [u, setU] = r.useState("");
  let triggerValueChangeCallback = (r, o) => {
    if (beforeTriggerValueChangeCallback) {
      beforeTriggerValueChangeCallback(r);
    }
    if (
      onChange &&
      r !== value &&
      (maxLength === undefined || r.length <= maxLength)
    ) {
      onChange(r, o);
    }
  };
  return {
    compositionValue: u,
    triggerValueChangeCallback,
    compositionHandler: (e) => {
      cRef.current = e.type !== "compositionend";
      if (!cRef.current) {
        setU(undefined);
        triggerValueChangeCallback(e.target.value, e);
      }
    },
    valueChangeHandler: (e) => {
      let value = e.target.value;
      if (cRef.current) {
        cRef.current = false;
        setU(value);
      } else {
        if (u) {
          setU(undefined);
        }
        triggerValueChangeCallback(value, e);
      }
    },
    keyDownHandler: (e) => {
      let t = e.keyCode || e.which;
      if (!cRef.current) {
        if (onKeyDown) {
          onKeyDown(e);
        }
        if (t === xy.code && onPressEnter) {
          onPressEnter(e);
        }
      }
    },
  };
}
