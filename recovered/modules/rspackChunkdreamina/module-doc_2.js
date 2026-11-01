import n from "SR";
function r(e) {
  return typeof e === "object" && e !== null;
}
export function g(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    const i = e[t];
    if (i instanceof n.NuroAssistantMessage) {
      const a = ((e) => {
        if (typeof e === "boolean") {
          return e;
        }
        if (typeof e === "string") {
          if (e === "true") {
            return true;
          }
          if (e === "false") {
            return false;
          }
        }
      })(
        ((e) => {
          if (e instanceof Map) {
            if ((t = e.get("show_continue")) != null) {
              return t;
            }
            return e.get("showContinue");
          }
          if (r(e)) {
            if ((i = e.show_continue) != null) {
              return i;
            }
            return e.showContinue;
          }
          if (typeof e === "string") {
            try {
              var t;
              var i;
              let n;
              const a = JSON.parse(e);
              if (!r(a)) {
                return;
              }
              if ((n = a.show_continue) != null) {
                return n;
              }
              return a.showContinue;
            } catch (e) {
              return;
            }
          }
        })(i.extra),
      );
      if (a !== undefined) {
        return a;
      }
    }
  }
}
export function B(e) {
  let t;
  return (t = g(e)) != null && t;
}
