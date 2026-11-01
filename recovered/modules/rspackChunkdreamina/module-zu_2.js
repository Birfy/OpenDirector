import { A } from "./module-Y8.js";
import o from "./module-b4f.js";
export let Bd = typeof window !== "undefined";
let l = Bd && window.location.protocol === "file:";
export function ci(e) {
  return e != null;
}
export function mw(e) {
  return e instanceof ArrayBuffer;
}
export function qf(e) {
  A(Bd, "isBlob can only be used in a browser environment");
  return e instanceof Blob;
}
export function zL(e) {
  return typeof e === "string" && /^data:/.test(e);
}
export function jA(e) {
  A(zL(e), "Invalid data URI.");
  let [t = "", r = ""] = e.split(",");
  if (t.split(";").indexOf("base64") !== -1) {
    return atob(r);
  }
  return unescape(r);
}
export function mZ() {
  return (Bd && window.devicePixelRatio) || 1;
}
export function qC() {
  o(
    !l,
    "Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.",
  );
}
export function xL(e) {
  if (e == null ? undefined : e.cancel) {
    e.cancel();
  }
}
export function vS(e, t) {
  Object.defineProperty(e, "width", {
    get() {
      return this.view[2] * t;
    },
    configurable: true,
  });
  Object.defineProperty(e, "height", {
    get() {
      return this.view[3] * t;
    },
    configurable: true,
  });
  Object.defineProperty(e, "originalWidth", {
    get() {
      return this.view[2];
    },
    configurable: true,
  });
  Object.defineProperty(e, "originalHeight", {
    get() {
      return this.view[3];
    },
    configurable: true,
  });
  return e;
}
export function UT(e) {
  return e.name === "RenderingCancelledException";
}
export function h1(e) {
  return new Promise((resolve, reject) => {
    let n = new FileReader();
    n.onload = () => {
      if (!n.result) {
        return reject(Error("Error while reading a file."));
      }
      resolve(n.result);
    };
    n.onerror = (e) => {
      if (!e.target) {
        return reject(Error("Error while reading a file."));
      }
      let { error } = e.target;
      if (!error) {
        return reject(Error("Error while reading a file."));
      }
      switch (error.code) {
        case error.NOT_FOUND_ERR:
          return reject(Error("Error while reading a file: File not found."));
        case error.SECURITY_ERR:
          return reject(Error("Error while reading a file: Security error."));
        case error.ABORT_ERR:
          return reject(Error("Error while reading a file: Aborted."));
        default:
          return reject(Error("Error while reading a file."));
      }
    };
    n.readAsArrayBuffer(e);
  });
}
