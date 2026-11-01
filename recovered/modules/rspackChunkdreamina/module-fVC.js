export class W {
  constructor() {
    this._messageQueue = [];
  }
  static createLinkedPair() {
    let e = new W();
    let t = new W();
    e._otherTransport = t;
    t._otherTransport = e;
    return [e, t];
  }
  async start() {
    while (this._messageQueue.length > 0) {
      let e = this._messageQueue.shift();
      this.onmessage?.(e.message, e.extra);
    }
  }
  async close() {
    let _otherTransport = this._otherTransport;
    this._otherTransport = undefined;
    await _otherTransport?.close();
    this.onclose?.();
  }
  async send(message, t) {
    if (!this._otherTransport) {
      throw Error("Not connected");
    }
    if (this._otherTransport.onmessage) {
      this._otherTransport.onmessage(message, {
        authInfo: t?.authInfo,
      });
    } else {
      this._otherTransport._messageQueue.push({
        message,
        extra: {
          authInfo: t?.authInfo,
        },
      });
    }
  }
}
