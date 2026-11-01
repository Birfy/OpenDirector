import n from "NY";
import i from "z8";
import a from "bT";
import s from "CFa";
import o from "JZn";
import c from "CL";
import l from "P4p";
import { A } from "./module-Ry_2.js";
import u from "Yyo";
const useP = (e) => {
  var { ccpcPromoteResource, onBtnClick } = e;
  var n = a.useMemo(() => {
    if (
      (ccpcPromoteResource == null ? undefined : ccpcPromoteResource.popup) &&
      ccpcPromoteResource.canShow
    ) {
      return {
        title: ccpcPromoteResource.popup.title,
        desc: ccpcPromoteResource.popup.content,
        btnText: ccpcPromoteResource.popup.button,
        coverUrl: ccpcPromoteResource.popup.imageUrl,
        coverType: "image",
      };
    }
  }, [ccpcPromoteResource]);
  return i.jsx(l.i, {
    title: n == null ? undefined : n.title,
    desc: n == null ? undefined : n.desc,
    btnText: n == null ? undefined : n.btnText,
    wrapperClassName: A.wrapper,
    onBtnClick,
    coverUrl: n == null ? undefined : n.coverUrl,
    coverType: n == null ? undefined : n.coverType,
  });
};
export var V = (e) => {
  var {
    containerService,
    commerceCreditService,
    dreaminaFissionDataService,
    accountSnapshot,
    ccpcPromoteResource,
    onContentChange,
    onClose,
  } = e;
  var v = o.Y(containerService, s.u.CommercialLandingModal);
  var { hasLogin } = accountSnapshot;
  var afterClose = () => {
    if (v != null) {
      v.unmount();
    }
  };
  return {
    className: A.commerceDialog,
    afterOpen: () => {
      c.X(containerService, {
        action: "show",
      });
    },
    afterClose,
    isFirstShow:
      ccpcPromoteResource == null ? undefined : ccpcPromoteResource.canShow,
    content: i.jsx(useP, {
      ccpcPromoteResource,
      onBtnClick: () =>
        n._(function* () {
          c.X(containerService, {
            action: "click",
          });
          afterClose();
          onClose();
          if (!hasLogin) {
            return void (yield u.J(containerService));
          }
          let e;
          let n;
          const s = yield dreaminaFissionDataService.fetchDiversionReward({
            campaignKey: "pc_diversion_dreamina",
            subCampaignKey: "pc_diversion_dreamina",
          });
          if (s.ok) {
            commerceCreditService.syncRemoteCreditHistory();
            onContentChange(
              i.jsx("div", {
                className: A.ccpcInfoTooltip,
                children:
                  (n = s.value.resource) == null || (e = n.toast) == null
                    ? undefined
                    : e.content,
              }),
            );
          }
        })(),
    }),
  };
};
