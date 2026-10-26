export function q(e) {
  if (
    !(
      e.defaultPrevented ||
      e.target !== e.currentTarget ||
      e.repeat ||
      (e.key !== "Enter" && e.key !== " ")
    )
  ) {
    e.preventDefault();
    if (
      !e.currentTarget.matches('[aria-disabled="true"], [aria-busy="true"]')
    ) {
      e.stopPropagation();
      if (e.currentTarget instanceof HTMLElement) {
        e.currentTarget.click();
      } else {
        e.currentTarget.dispatchEvent(
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          }),
        );
      }
    }
  }
}
