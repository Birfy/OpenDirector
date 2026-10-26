import n from "z8";
export function A({ children, type }) {
  return n.jsx("div", {
    className: `react-pdf__message react-pdf__message--${type}`,
    children,
  });
}
