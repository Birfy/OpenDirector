import n from "NY";
import r from "fe1";
export class $ extends r.n {
  get fallbackPromptText() {
    return this._fallbackPromptText;
  }
  setFallbackPromptText(e) {
    this._fallbackPromptText = e;
  }
  _getModule() {
    return n._(function* () {
      const { AICanvasContentGeneratorFeatureLoader } = yield Promise.all([
        require.e("9ed"),
        require.e("8o4"),
        require.e("mo4"),
        require.e("46qd"),
        require.e("1sx"),
        require.e("lb8"),
        require.e("rle"),
        require.e("b7h"),
        require.e("5ws"),
        require.e("84i"),
        require.e("x4o"),
        require.e("pvu"),
        require.e("h0h"),
        require.e(894),
        require.e("z9t"),
        require.e("dmi"),
        require.e("tj5a"),
        require.e("lsa"),
        require.e("uoi"),
        require.e("e7a"),
        require.e("72p"),
        require.e("zf5"),
        require.e("1gm"),
        require.e("dks"),
        require.e("59ls"),
        require.e("z4v"),
        require.e("2ej"),
        require.e("a8k"),
        require.e("eqf"),
        require.e("s1o"),
        require.e("as"),
        require.e("1w"),
        require.e("weo"),
        require.e("p1"),
        require.e("o5"),
        require.e("m0y"),
        require.e("p0z"),
        require.e("1mk"),
        require.e("0h7"),
        require.e("ez2"),
        require.e("l5"),
        require.e("adh"),
        require.e("p3"),
        require.e("wbo"),
        require.e("s9c"),
        require.e("pr5o"),
      ]).then(require.bind(require, "LVg"));
      return AICanvasContentGeneratorFeatureLoader;
    })();
  }
  _getStaticArgument() {
    return {};
  }
  constructor(...e) {
    super(...e);
    this._fallbackPromptText = "";
  }
}
