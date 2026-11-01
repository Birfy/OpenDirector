import { Buffer } from "./module-sTo.js";
const ee =
  Buffer.isEncoding ||
  function (Z) {
    switch ((Z = "" + Z) && Z.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return true;
      default:
        return false;
    }
  };
class et {
  constructor(Z) {
    let Q;
    this.encoding = ((Z) => {
      const Q = ((Z) => {
        let Q;
        if (!Z) {
          return "utf8";
        }
        while (true) {
          switch (Z) {
            case "utf8":
            case "utf-8":
              return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return "utf16le";
            case "latin1":
            case "binary":
              return "latin1";
            case "base64":
            case "ascii":
            case "hex":
              return Z;
            default:
              if (Q) {
                return;
              }
              Z = ("" + Z).toLowerCase();
              Q = true;
          }
        }
      })(Z);
      if (typeof Q !== "string" && (Buffer.isEncoding === ee || !ee(Z))) {
        throw Error("Unknown encoding: " + Z);
      }
      return Q || Z;
    })(Z);
    switch (this.encoding) {
      case "utf16le":
        this.text = ei;
        this.end = ea;
        Q = 4;
        break;
      case "utf8":
        this.fillLast = en;
        Q = 4;
        break;
      case "base64":
        this.text = eo;
        this.end = es;
        Q = 3;
        break;
      default:
        this.write = ef;
        this.end = eu;
        return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = Buffer.allocUnsafe(Q);
  }
  write(Z) {
    let Q;
    let X;
    if (Z.length === 0) {
      return "";
    }
    if (this.lastNeed) {
      if ((Q = this.fillLast(Z)) === undefined) {
        return "";
      }
      X = this.lastNeed;
      this.lastNeed = 0;
    } else {
      X = 0;
    }
    if (X < Z.length) {
      if (Q) {
        return Q + this.text(Z, X);
      }
      return this.text(Z, X);
    }
    return Q || "";
  }
  end(Z) {
    const Q = Z && Z.length ? this.write(Z) : "";
    if (this.lastNeed) {
      return Q + "\uFFFD";
    }
    return Q;
  }
  text(Z, Q) {
    const X = ((Z, Q, X) => {
      let $ = Q.length - 1;
      if ($ < X) {
        return 0;
      }
      let ee = er(Q[$]);
      if (ee >= 0) {
        if (ee > 0) {
          Z.lastNeed = ee - 1;
        }
        return ee;
      }
      if (--$ < X || ee === -2) {
        return 0;
      }
      if ((ee = er(Q[$])) >= 0) {
        if (ee > 0) {
          Z.lastNeed = ee - 2;
        }
        return ee;
      }
      if (--$ < X || ee === -2) {
        return 0;
      }
      if ((ee = er(Q[$])) >= 0) {
        if (ee > 0) {
          if (ee === 2) {
            ee = 0;
          } else {
            Z.lastNeed = ee - 3;
          }
        }
        return ee;
      }
      return 0;
    })(this, Z, Q);
    if (!this.lastNeed) {
      return Z.toString("utf8", Q);
    }
    this.lastTotal = X;
    const $ = Z.length - (X - this.lastNeed);
    Z.copy(this.lastChar, 0, $);
    return Z.toString("utf8", Q, $);
  }
  fillLast(Z) {
    if (this.lastNeed <= Z.length) {
      Z.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    Z.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, Z.length);
    this.lastNeed -= Z.length;
  }
}
function er(Z) {
  if (Z <= 127) {
    return 0;
  }
  if (Z >> 5 == 6) {
    return 2;
  }
  if (Z >> 4 == 14) {
    return 3;
  }
  if (Z >> 3 == 30) {
    return 4;
  }
  if (Z >> 6 == 2) {
    return -1;
  }
  return -2;
}
function en(Z) {
  const Q = this.lastTotal - this.lastNeed;
  const X = ((Z, Q) => {
    if ((192 & Q[0]) != 128) {
      Z.lastNeed = 0;
      return "\uFFFD";
    }
    if (Z.lastNeed > 1 && Q.length > 1) {
      if ((192 & Q[1]) != 128) {
        Z.lastNeed = 1;
        return "\uFFFD";
      }
      if (Z.lastNeed > 2 && Q.length > 2 && (192 & Q[2]) != 128) {
        Z.lastNeed = 2;
        return "\uFFFD";
      }
    }
  })(this, Z);
  if (X !== undefined) {
    return X;
  }
  if (this.lastNeed <= Z.length) {
    Z.copy(this.lastChar, Q, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  Z.copy(this.lastChar, Q, 0, Z.length);
  this.lastNeed -= Z.length;
}
function ei(Z, Q) {
  if ((Z.length - Q) % 2 == 0) {
    const X = Z.toString("utf16le", Q);
    if (X) {
      const $ = X.charCodeAt(X.length - 1);
      if ($ >= 55296 && $ <= 56319) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = Z[Z.length - 2];
        this.lastChar[1] = Z[Z.length - 1];
        return X.slice(0, -1);
      }
    }
    return X;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = Z[Z.length - 1];
  return Z.toString("utf16le", Q, Z.length - 1);
}
function ea(Z) {
  const Q = Z && Z.length ? this.write(Z) : "";
  if (this.lastNeed) {
    const X = this.lastTotal - this.lastNeed;
    return Q + this.lastChar.toString("utf16le", 0, X);
  }
  return Q;
}
function eo(Z, Q) {
  const X = (Z.length - Q) % 3;
  if (X === 0) {
    return Z.toString("base64", Q);
  }
  this.lastNeed = 3 - X;
  this.lastTotal = 3;
  if (X === 1) {
    this.lastChar[0] = Z[Z.length - 1];
  } else {
    this.lastChar[0] = Z[Z.length - 2];
    this.lastChar[1] = Z[Z.length - 1];
  }
  return Z.toString("base64", Q, Z.length - X);
}
function es(Z) {
  const Q = Z && Z.length ? this.write(Z) : "";
  if (this.lastNeed) {
    return Q + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
  }
  return Q;
}
function ef(Z) {
  return Z.toString(this.encoding);
}
function eu(Z) {
  if (Z && Z.length) {
    return this.write(Z);
  }
  return "";
}
export { et as I };
