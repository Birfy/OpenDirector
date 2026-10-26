import i from "z8";
import n from "bT";
import o from "gO";
var AContext = n.createContext({
  isHeroImage: false,
  isHeroVideo: false,
  onHeroImageLoad: (e) => {
    o.y.addEntry(e);
  },
});
export { AContext as r };
function useS(e) {
  const { children, value } = e;
  const { isHeroImage, isHeroVideo, onHeroImageLoad } =
    value != null ? value : {};
  const value_1 = n.useMemo(
    () => ({
      isHeroImage: isHeroImage == null || isHeroImage,
      isHeroVideo: isHeroVideo == null || isHeroVideo,
      onHeroImageLoad: onHeroImageLoad != null ? onHeroImageLoad : o.y.addEntry,
    }),
    [isHeroImage, isHeroVideo, onHeroImageLoad],
  );
  return i.jsx(AContext.Provider, {
    value: value_1,
    children,
  });
}
export { useS as o };
