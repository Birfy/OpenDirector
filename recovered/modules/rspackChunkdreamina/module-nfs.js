import n from "Ut";
export var Z = (e) => {
  if (e) {
    var t = new n.DALensRecipeInput();
    t.lensRecipeKey = e.lensRecipeKey;
    t.lensRecipeName = e.lensRecipeName;
    t.lensRecipeNameStarlingKey = e.lensRecipeNameStarlingKey;
    t.strengthKey = e.strengthKey;
    t.strengthName = e.strengthName;
    t.strengthNameStarlingKey = e.strengthNameStarlingKey;
    return t;
  }
};
export var M = (e) => {
  if (e == null ? undefined : e.lensRecipeKey) {
    return {
      lensRecipeKey: e.lensRecipeKey,
      lensRecipeName: e.lensRecipeName,
      lensRecipeNameStarlingKey: e.lensRecipeNameStarlingKey,
      strengthKey: e.strengthKey,
      strengthName: e.strengthName,
      strengthNameStarlingKey: e.strengthNameStarlingKey,
    };
  }
};
