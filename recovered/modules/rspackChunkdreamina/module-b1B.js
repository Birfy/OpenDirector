import i from "oa";
import a from "bk";
import n from "Ut";
import o from "HzX";
export class O extends o.P {
  _getExtends(e) {
    const t = e.findRootComponent();
    return {
      templateId: this._templateId,
      rootModel: this._getRootModel(t),
      workspaceId: this._workspaceId,
      infiniteCanvasExtend: this._infiniteCanvasExtend,
    };
  }
  _decorateExtends(e) {
    let t;
    if (this._subjectMaterialEditOption) {
      return a._(i._({}, e), {
        subject_material_edit_option: {
          submit_id: (t = this._subjectMaterialEditOption).submitId,
          conversation_id: t.conversationId,
          turn_uuid: t.turnUuid,
          record_unique_key: t.recordUniqueKey,
          item_id: t.itemId,
          parent_message_id: t.parentMessageId,
          agent_scene: t.agentScene,
          select: t.selectGeneratedVersion,
          client_op_id: t.clientOpId,
        },
      });
    }
    return e;
  }
  _getRootModel(e) {
    if (e instanceof n.DAImageBaseComponent) {
      let t;
      let r;
      let i;
      let a;
      let o;
      let s;
      let m;
      if (
        (t =
          (a = e.abilities) == null ||
          (i = a.generate) == null ||
          (r = i.coreParam) == null
            ? undefined
            : r.model) != null
      ) {
        return t;
      }
      if (
        (m = e.abilities) == null ||
        (s = m.blend) == null ||
        (o = s.coreParam) == null
      ) {
        return undefined;
      }
      return o.model;
    }
  }
  constructor(e) {
    super(e);
    this._subjectMaterialEditOption = e.subjectMaterialEditOption;
  }
}
