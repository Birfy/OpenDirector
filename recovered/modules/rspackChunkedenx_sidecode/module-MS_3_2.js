import { Buffer } from "./module-Um.js";
const tt =
  Buffer.isEncoding ||
  function (J) {
    switch ((J = "" + J) && J.toLowerCase()) {
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
class te {
  constructor(J) {
    let Z;
    this.encoding = ((J) => {
      const Z = ((J) => {
        let Z;
        if (!J) {
          return "utf8";
        }
        while (true) {
          switch (J) {
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
              return J;
            default:
              if (Z) {
                return;
              }
              J = ("" + J).toLowerCase();
              Z = true;
          }
        }
      })(J);
      if (typeof Z !== "string" && (Buffer.isEncoding === tt || !tt(J))) {
        throw Error("Unknown encoding: " + J);
      }
      return Z || J;
    })(J);
    switch (this.encoding) {
      case "utf16le":
        this.text = ti;
        this.end = to;
        Z = 4;
        break;
      case "utf8":
        this.fillLast = tn;
        Z = 4;
        break;
      case "base64":
        this.text = ta;
        this.end = ts;
        Z = 3;
        break;
      default:
        this.write = tf;
        this.end = tu;
        return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = Buffer.allocUnsafe(Z);
  }
  write(J) {
    let Z;
    let Q;
    if (J.length === 0) {
      return "";
    }
    if (this.lastNeed) {
      if ((Z = this.fillLast(J)) === undefined) {
        return "";
      }
      Q = this.lastNeed;
      this.lastNeed = 0;
    } else {
      Q = 0;
    }
    if (Q < J.length) {
      if (Z) {
        return Z + this.text(J, Q);
      }
      return this.text(J, Q);
    }
    return Z || "";
  }
  end(J) {
    const Z = J && J.length ? this.write(J) : "";
    if (this.lastNeed) {
      return Z + "\uFFFD";
    }
    return Z;
  }
  text(J, Z) {
    const Q = ((J, Z, Q) => {
      let $ = Z.length - 1;
      if ($ < Q) {
        return 0;
      }
      let tt = tr(Z[$]);
      if (tt >= 0) {
        if (tt > 0) {
          J.lastNeed = tt - 1;
        }
        return tt;
      }
      if (--$ < Q || tt === -2) {
        return 0;
      }
      if ((tt = tr(Z[$])) >= 0) {
        if (tt > 0) {
          J.lastNeed = tt - 2;
        }
        return tt;
      }
      if (--$ < Q || tt === -2) {
        return 0;
      }
      if ((tt = tr(Z[$])) >= 0) {
        if (tt > 0) {
          if (tt === 2) {
            tt = 0;
          } else {
            J.lastNeed = tt - 3;
          }
        }
        return tt;
      }
      return 0;
    })(this, J, Z);
    if (!this.lastNeed) {
      return J.toString("utf8", Z);
    }
    this.lastTotal = Q;
    const $ = J.length - (Q - this.lastNeed);
    J.copy(this.lastChar, 0, $);
    return J.toString("utf8", Z, $);
  }
  fillLast(J) {
    if (this.lastNeed <= J.length) {
      J.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    J.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, J.length);
    this.lastNeed -= J.length;
  }
}
function tr(J) {
  if (J <= 127) {
    return 0;
  }
  if (J >> 5 == 6) {
    return 2;
  }
  if (J >> 4 == 14) {
    return 3;
  }
  if (J >> 3 == 30) {
    return 4;
  }
  if (J >> 6 == 2) {
    return -1;
  }
  return -2;
}
function tn(J) {
  const Z = this.lastTotal - this.lastNeed;
  const Q = ((J, Z) => {
    if ((192 & Z[0]) != 128) {
      J.lastNeed = 0;
      return "\uFFFD";
    }
    if (J.lastNeed > 1 && Z.length > 1) {
      if ((192 & Z[1]) != 128) {
        J.lastNeed = 1;
        return "\uFFFD";
      }
      if (J.lastNeed > 2 && Z.length > 2 && (192 & Z[2]) != 128) {
        J.lastNeed = 2;
        return "\uFFFD";
      }
    }
  })(this, J);
  if (Q !== undefined) {
    return Q;
  }
  if (this.lastNeed <= J.length) {
    J.copy(this.lastChar, Z, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  J.copy(this.lastChar, Z, 0, J.length);
  this.lastNeed -= J.length;
}
function ti(J, Z) {
  if ((J.length - Z) % 2 == 0) {
    const Q = J.toString("utf16le", Z);
    if (Q) {
      const $ = Q.charCodeAt(Q.length - 1);
      if ($ >= 55296 && $ <= 56319) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = J[J.length - 2];
        this.lastChar[1] = J[J.length - 1];
        return Q.slice(0, -1);
      }
    }
    return Q;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = J[J.length - 1];
  return J.toString("utf16le", Z, J.length - 1);
}
function to(J) {
  const Z = J && J.length ? this.write(J) : "";
  if (this.lastNeed) {
    const Q = this.lastTotal - this.lastNeed;
    return Z + this.lastChar.toString("utf16le", 0, Q);
  }
  return Z;
}
function ta(J, Z) {
  const Q = (J.length - Z) % 3;
  if (Q === 0) {
    return J.toString("base64", Z);
  }
  this.lastNeed = 3 - Q;
  this.lastTotal = 3;
  if (Q === 1) {
    this.lastChar[0] = J[J.length - 1];
  } else {
    this.lastChar[0] = J[J.length - 2];
    this.lastChar[1] = J[J.length - 1];
  }
  return J.toString("base64", Z, J.length - Q);
}
function ts(J) {
  const Z = J && J.length ? this.write(J) : "";
  if (this.lastNeed) {
    return Z + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
  }
  return Z;
}
function tf(J) {
  return J.toString(this.encoding);
}
function tu(J) {
  if (J && J.length) {
    return this.write(J);
  }
  return "";
}
export { te as I };
