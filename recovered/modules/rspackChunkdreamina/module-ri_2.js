import { Ae } from "./module-Vc_3.js";
import l from "bT";
export let VH = l.createContext({});
export let Iw = l.createContext({});
export const Ky = (isBrowser = true, n) => {
  let t = {
    request: {},
    response: {},
  };
  return {
    isBrowser,
    routeManifest: n || (typeof window !== "undefined" && window[Ae]),
    requestContext: t,
    context: t,
  };
};
