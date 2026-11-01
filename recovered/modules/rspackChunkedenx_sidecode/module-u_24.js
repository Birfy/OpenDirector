const all = typeof document === "object" && document.all;
export default {
  all,
  IS_HTMLDDA: all === undefined && all !== undefined,
};
