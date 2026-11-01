import a from "zS";
import r from "bT";
import o from "qO";
import i from "xm3";
import s from "lj";
import l from "wF";
import c from "eVT";
import d from "n3";
var useU = (e) => {
  var { disabled, voiceInputManager } = e;
  var { promptEditorRef } = r.useContext(o.b);
  var p = l.h(i.V);
  var onBeforeStart = c.L({
    source: d.HH.VoiceInput,
  });
  var v = l.h(s.K);
  var hRef = r.useRef(promptEditorRef);
  hRef.current = promptEditorRef;
  r.useEffect(() => {
    voiceInputManager.setupAutoStop({
      onKeepAliveChange: (e) => v.onKeepAliveChange(e),
    });
    return () => {
      voiceInputManager.setupAutoStop();
    };
  }, [v, voiceInputManager]);
  r.useEffect(() => {
    var e = voiceInputManager.setupTranscriptApply(() => {
      var e;
      var t;
      if (
        (e =
          (t = p.contentGeneratorManager.visibleContentGeneratorInstance) ==
          null
            ? undefined
            : t.elements.promptEditorRef) != null
      ) {
        return e;
      }
      return hRef.current;
    });
    return () => {
      e.dispose();
    };
  }, [p, voiceInputManager]);
  return a.A(() => {
    var e;
    var a;
    var promptEditorRef_1 =
      (e =
        (a = p.contentGeneratorManager.visibleContentGeneratorInstance) == null
          ? undefined
          : a.elements.promptEditorRef) != null
        ? e
        : hRef.current;
    if (promptEditorRef_1) {
      voiceInputManager.handleVoiceInputToggle({
        disabled,
        promptEditorRef: promptEditorRef_1,
        onBeforeStart,
      });
    }
  });
};
export { useU as a };
