export class W3 extends Error {
  constructor(e, t) {
    super("Asset query session ".concat(e, " was disposed during ").concat(t));
    this.name = "AssetQuerySessionDisposedError";
  }
}
export function QO(e) {
  return e instanceof W3;
}
