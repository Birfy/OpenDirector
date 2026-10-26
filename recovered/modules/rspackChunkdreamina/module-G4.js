import a from "bT";
export var E = typeof window === "undefined" ? a.useEffect : a.useLayoutEffect;
