import r from "IC";
import n from "htj";
export var Q = r.P.extend({
  name: n.t.ReferenceMentionTag,
  draggable: true,
  addAttributes: () => ({
    id: {
      default: null,
    },
  }),
  deleteTriggerWithBackspace: true,
});
