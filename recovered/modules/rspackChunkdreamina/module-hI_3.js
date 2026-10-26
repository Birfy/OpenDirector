import n from "tl5";
export function m(e) {
  e.interceptors.response.use((e) => {
    if (typeof e.systime === "string") {
      n.w9(e.systime);
    }
    return e;
  });
}
