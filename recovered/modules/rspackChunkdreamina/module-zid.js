import n from "NT";
import a from "JSz";
import o from "xi";
import r from "Jhy";
import l from "TC6";
class d {
  addProcessor(e) {
    const { stage } = e;
    const i = this._processorsMap.get(stage) || [];
    this._processorsMap.set(stage, [...i, e]);
    return this;
  }
  addProcessors(e) {
    for (const t of e) {
      this.addProcessor(t);
    }
    return this;
  }
  executeFormatting(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : a.uR();
    const i =
      arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    var d = {
      inputData: n.G(e),
      outputData: undefined,
      errors: [],
      updateInputData: (e) => {
        r.A(d.inputData, e);
      },
      updateOutputData: (e) => {
        if (!d.outputData) {
          d.outputData = n.G(e);
          return;
        }
        r.A(d.outputData, e);
      },
    };
    this._runStage("validate", d);
    this._runStage("preprocess", d);
    this._runStage("format", d);
    if (!d.outputData) {
      d.errors.push(Error("Format error. Cause output is nil."));
    }
    if (d.errors.length > 0 || !d.outputData) {
      const u = AggregateError(d.errors);
      if (!i) {
        o.V.error(
          "FormattedDataPipeline["
            .concat(this._name, "][summary][")
            .concat(t, "]\n"),
          l.A(d, ["inputData", "outputData"]),
        );
        d.errors.forEach((e) => {
          o.V.error(
            "FormattedDataPipeline[".concat(this._name, "][").concat(t, "]\n"),
            e,
          );
        });
      }
      throw u;
    }
    return d.outputData;
  }
  _runStage(e, t) {
    for (const i of this._processorsMap.get(e) || []) {
      try {
        i.execute(t);
      } catch (error) {
        const n = error instanceof Error ? error : Error(String(error));
        n.message = "FormattedDataPipeline["
          .concat(this._name, "][")
          .concat(e, "][")
          .concat(i.constructor.name, "]: \n")
          .concat(n.message);
        t.errors.push(n);
      }
    }
  }
  constructor(e) {
    this._name = e;
    this._processorsMap = new Map();
  }
}
export { d as l };
