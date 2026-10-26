import n from "bT";
import { SS as reason, cS } from "./module-Ic_2.js";
function useI(t) {
  let eRef = n.useRef(t);
  eRef.current = n.useMemo(() => t, [t]);
  let rRef = n.useRef();
  if (!rRef.current) {
    rRef.current = function (...t) {
      return eRef.current.apply(this, t);
    };
  }
  return rRef.current;
}
async function o() {
  return new Promise((resolve) => {
    let e = document.createElement("script");
    e.src = cS;
    e.async = true;
    e.addEventListener("load", () => resolve(true));
    e.addEventListener("error", () => resolve(false));
    document.body.appendChild(e);
  });
}
async function s() {
  if (typeof window === "undefined") {
    return {
      success: false,
      reason: "no window",
    };
  }
  if (document.querySelector(`script[src="${cS}"]`)) {
    return {
      success: true,
      reason: "already exist",
    };
  }
  if (document.readyState !== "loading") {
    let t = await o();
    return {
      success: t,
      reason: t ? undefined : "load script failed",
    };
  }
  return new Promise((resolve) => {
    document.addEventListener("DOMContentLoaded", () => {
      o().then((e) => {
        resolve({
          success: e,
          reason: e ? undefined : "load script failed",
        });
      });
    });
  });
}
let A = {
  cancel_on_tap_outside: false,
  use_fedcm_for_prompt: true,
  auto_select: true,
  itp_support: true,
};
export function PQ(t) {
  let {
    onMoment,
    onResult,
    resultStorage,
    autoPrompt = true,
    autoDisableAutoSelect = true,
    ...rest
  } = t;
  let callback = useI((t) => {
    console.debug("[GSI RESULT]", t);
    try {
      if (typeof resultStorage === "string" && resultStorage.length) {
        window.localStorage.setItem(resultStorage, JSON.stringify(t));
      }
      if (autoDisableAutoSelect) {
        window.google.accounts.id.disableAutoSelect();
      }
    } catch (t) {}
    if (typeof onResult === "function") {
      onResult(t);
    }
  });
  let f = useI((t) => {
    console.debug("[GSI MOMENT]", t);
    if (typeof onMoment !== "function") {
      return;
    }
    let duration = window.performance.now();
    let type = t.getMomentType();
    switch (true) {
      case t.isDismissedMoment():
        return onMoment({
          type,
          duration,
          reason: t.getDismissedReason() || reason,
        });
      case t.isSkippedMoment():
        return onMoment({
          type,
          duration,
          reason: t.getSkippedReason() || reason,
        });
      case t.isDisplayed():
        return onMoment({
          type,
          duration,
          reason,
        });
      case t.isNotDisplayed():
        return onMoment({
          type,
          duration,
          reason: t.getNotDisplayedReason() || reason,
        });
    }
  });
  n.useEffect(() => {
    let t = () => {
      if (window.google !== undefined) {
        window.google.accounts.id.initialize({
          ...A,
          ...rest,
          callback,
        });
        if (autoPrompt) {
          window.google.accounts.id.prompt(f);
        }
      }
    };
    if (window.google === undefined) {
      s().then(({ success, reason }) => {
        if (!success) {
          return console.error(`[GCI] Load script error: ${reason}`);
        }
        setTimeout(t);
      });
    } else {
      t();
    }
  }, []);
  return null;
}
