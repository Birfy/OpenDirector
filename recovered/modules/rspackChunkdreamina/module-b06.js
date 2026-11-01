import r from "HX";
export function W(e, t) {
  if (t.ok) {
    let i;
    const targetWorkspaceId =
      (i = t.value.find((e) => typeof e.idModel.workspaceId === "number")) ==
      null
        ? undefined
        : i.idModel.workspaceId;
    e.navigate(r.Du.AIGeneratedRecord, {
      state: {
        from: "content-generator",
        targetWorkspaceId,
      },
    });
  }
}
