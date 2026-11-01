import r from "z8";
import n from "bT";
import { y } from "./module-gO.js";
var OContext = n.createContext({
  isHeroImage: false,
  isHeroVideo: false,
  onHeroImageLoad: (e) => {
    y.addEntry(e);
  },
});
export { OContext as r };
function useS(e) {
  const { children, value } = e;
  const { isHeroImage, isHeroVideo, onHeroImageLoad } =
    value != null ? value : {};
  const value_1 = n.useMemo(
    () => ({
      isHeroImage: isHeroImage == null || isHeroImage,
      isHeroVideo: isHeroVideo == null || isHeroVideo,
      onHeroImageLoad: onHeroImageLoad != null ? onHeroImageLoad : y.addEntry,
    }),
    [isHeroImage, isHeroVideo, onHeroImageLoad],
  );
  return r.jsx(OContext.Provider, {
    value: value_1,
    children,
  });
}
export { useS as o };
