import n from "bT";
export var u = n.createContext({
  scrollContainerRef: n.createRef(),
  isReachBottom: false,
  scrollTop: 0,
  element: null,
  scrollTo: (e) => {
    console.error("scrollTo not implemented");
    return {
      dispose() {
        console.error("scrollTo not implemented");
      },
    };
  },
  onReachBottom: (e) => {
    console.error("onReachBottom not implemented");
    return {
      dispose() {
        console.error("onReachBottom not implemented");
      },
    };
  },
  onScroll: (e) => {
    console.error("onScroll not implemented");
    return {
      dispose() {
        console.error("onScroll not implemented");
      },
    };
  },
});
