import r from "oa";
import o from "bk";
import n from "qa";
import a from "uoQ";
import s from "Cq";
import c from "o7";
import l from "UL0";
export class Z extends c.jG {
  transformPromptContentToNodes(e) {
    if (this._isTextContent(e) && e.text !== "") {
      return [
        {
          type: "text",
          text: e.text,
        },
      ];
    }
    return [];
  }
  transformNodeToPromptContents(e) {
    if (e.type === "text" && typeof e.text === "string") {
      return [this._createTextContent(e.text)];
    }
    return [];
  }
  constructor(...e) {
    var t;
    super(...e);
    t = this;
    this.transformPromptContentsToEditorDocument = (e) => {
      var t = this._splitPromptContentsToParagraphs(e);
      return {
        type: a.y.name,
        content: [
          ...t.map((e) =>
            r._(
              {
                type: s.f.name,
              },
              this._isParagraphContentEmpty(e)
                ? null
                : {
                    content: e.flatMap(this.transformPromptContentToNodes),
                  },
            ),
          ),
        ],
      };
    };
    this.transformEditorDocumentToPromptContents = (e) => {
      var t;
      var i;
      var r = (
        (t =
          (i = e.content) == null
            ? undefined
            : i.filter((e) => e.type === s.f.name)) != null
          ? t
          : []
      ).map((e) => {
        var t;
        return ((t = e.content) != null ? t : []).flatMap((e) =>
          this.transformNodeToPromptContents(e),
        );
      });
      return this._mergeConsecutiveTextContents(
        this._joinParagraphPromptContents(r, this._createTextContent("\n")),
      );
    };
    this._splitPromptContentsToParagraphs = function (e) {
      const i =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      const r =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      if (e.length === 0) {
        return [...r, i];
      }
      const [o, ...n] = e;
      if (t._isTextContent(o) && o.text.includes("\n")) {
        let a;
        const s = o.text.split("\n");
        const c = [...i, t._createTextContent(s[0])];
        const l = s.slice(1, -1).map((e) => [t._createTextContent(e)]);
        const u = [t._createTextContent((a = s.at(-1)) != null ? a : "")];
        return t._splitPromptContentsToParagraphs(n, u, [...r, c, ...l]);
      }
      return t._splitPromptContentsToParagraphs(n, [...i, o], r);
    };
    this._joinParagraphPromptContents = (e, t) =>
      e.reduce((acc, item, index) => {
        if (index < e.length - 1) {
          return [...acc, ...item, t];
        }
        return [...acc, ...item];
      }, []);
    this._mergeConsecutiveTextContents = (e) =>
      e.reduce((acc, item) => {
        var i = acc.at(-1);
        if (
          this._isTextContent(item) &&
          i &&
          this._isTextContent(i) &&
          this._canMergeTextContents(i, item)
        ) {
          return [
            ...acc.slice(0, -1),
            o._(r._({}, i), {
              text: "".concat(i.text).concat(item.text),
            }),
          ];
        }
        return [...acc, item];
      }, []);
    this._canMergeTextContents = (e, t) => {
      var { text } = e;
      var r = n._(e, ["text"]);
      var { text: text_1 } = t;
      var a = n._(t, ["text"]);
      return l.b(r, a);
    };
    this._isParagraphContentEmpty = (e) =>
      e.every((e) => this._isTextContent(e) && e.text === "");
    this._isTextContent = (e) => e.type === "text";
  }
}
