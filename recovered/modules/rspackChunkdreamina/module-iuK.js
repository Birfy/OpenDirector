import t from "NY";
import n from "Qey";
import i from "FOT";
import r from "sXT";
import o from "M8X";
import l from "Ymy";
import { a as a_1 } from "./module-oq_3.js";
const d = {
  title: {
    key: "video_seedance_2_face_check_title",
    defaultMessage: "安全确认",
  },
  content: {
    key: "video_seedance_2_face_check_text",
    defaultMessage:
      "请您使用本人照片/视频或取得充分授权，确保不存在违反法律法规、侵犯他人权益或违反公序良俗的内容。若因您不当使用本功能导致任何第三方权益受损，您将依法承担相应法律责任。",
  },
};
const c = {
  "": d,
  seedAudio: {
    title: {
      key: "web_audio_gen_seed_audio_1_5_compliance_title",
      defaultMessage: "",
    },
    content: {
      key: "web_audio_gen_seed_audio_1_5_compliance_desc",
      defaultMessage:
        "By continuing to use this service, you acknowledge and agree:\n• You are solely responsible for content generated based on your uploaded materials.\n• You confirm that you have all necessary rights and permission to use your uploaded content, and you will not infringe on any third-party rights. \n• You may not use CapCut tools to impersonate any individual, commit fraud, or misrepresent or violate the IP or publicity rights of others. \n• You will not upload sensitive personal information, and will not upload the voice or personal information of anyone else, especially a minor, without explicit authorization from that person or their legal guardian; and\n• The materials you provide may be pre-uploaded to, and/or processed on our servers to extract voice characteristics solely to provide this service per our <privacyPolicy>Privacy Policy</privacyPolicy>.",
    },
  },
};
let m = null;
function p(e) {
  return t._(function* () {
    let u;
    const { containerService, complianceGroupKey = "" } = e;
    const v = o.cQ(containerService, l.y);
    const F = yield v.getSettings();
    if (
      F.ok &&
      ((e, u) => {
        if (u) {
          let a;
          let t;
          return !!((t = e.complianceConfirmationMap) == null ||
          (a = t[u]) == null
            ? undefined
            : a.confirmed);
        }
        return !!e.aigcComplianceConfirmed;
      })(F.value, complianceGroupKey)
    ) {
      return true;
    }
    if (m) {
      return m;
    }
    const { promise, resolve } = Promise.withResolvers();
    m = promise;
    const { title, content } = (u = c[complianceGroupKey]) != null ? u : d;
    a_1.confirm({
      title: i.h(title),
      className: "aigc-compliance-confirmation-IvBU2O",
      content: n.Ay.t(
        content.key,
        {
          privacyPolicy: r.r,
        },
        content.defaultMessage,
      ),
      cancelText: n.Ay.t("video_seedance_2_face_check_reject", {}, "拒绝"),
      closable: false,
      maskClosable: false,
      onOk: () =>
        t._(function* () {
          if (complianceGroupKey) {
            yield v.updateSettings({
              complianceConfirmationMap: {
                [complianceGroupKey]: {
                  confirmed: true,
                },
              },
            });
          } else {
            yield v.updateSettings({
              aigcComplianceConfirmed: true,
            });
          }
          resolve(true);
        })(),
      onCancel: () => {
        resolve(false);
      },
      afterClose: () => {
        m = null;
      },
    });
    return promise;
  })();
}
export { p as i };
