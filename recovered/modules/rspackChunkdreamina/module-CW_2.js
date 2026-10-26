import { DANode } from "./module-uR.js";
import a from "Rd";
const o =
  (this && this.__decorate) ||
  function (e, t, i, o) {
    let r;
    const arguments_length = arguments.length;
    let n =
      arguments_length < 3
        ? t
        : o === null
          ? (o = Object.getOwnPropertyDescriptor(t, i))
          : o;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
      n = Reflect.decorate(e, t, i, o);
    } else {
      for (let s = e.length - 1; s >= 0; s--) {
        if ((r = e[s])) {
          n =
            (arguments_length < 3
              ? r(n)
              : arguments_length > 3
                ? r(t, i, n)
                : r(t, i)) || n;
        }
      }
    }
    if (arguments_length > 3 && n) {
      Object.defineProperty(t, i, n);
    }
    return n;
  };
export class DALensRecipeInput extends DANode {
  constructor() {
    super(...arguments);
    this.lensRecipeKey = undefined;
    this.lensRecipeName = undefined;
    this.lensRecipeNameStarlingKey = undefined;
    this.strengthKey = undefined;
    this.strengthName = undefined;
    this.strengthNameStarlingKey = undefined;
  }
}
o(
  [a.serializable("lens_recipe_key")],
  DALensRecipeInput.prototype,
  "lensRecipeKey",
  undefined,
);
o(
  [a.serializable("lens_recipe_name")],
  DALensRecipeInput.prototype,
  "lensRecipeName",
  undefined,
);
o(
  [a.serializable("lens_recipe_name_starling_key")],
  DALensRecipeInput.prototype,
  "lensRecipeNameStarlingKey",
  undefined,
);
o(
  [a.serializable("strength_key")],
  DALensRecipeInput.prototype,
  "strengthKey",
  undefined,
);
o(
  [a.serializable("strength_name")],
  DALensRecipeInput.prototype,
  "strengthName",
  undefined,
);
o(
  [a.serializable("strength_name_starling_key")],
  DALensRecipeInput.prototype,
  "strengthNameStarlingKey",
  undefined,
);
