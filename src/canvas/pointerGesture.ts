/** Click eligibility belongs to the whole pointer gesture, not its final position or a timer. */
export class CanvasPointerGesture {
  private current: {
    pointerId: number;
    x: number;
    y: number;
    moved: boolean;
    cancelled: boolean;
    pan: boolean;
    surface: boolean;
    previousClick: boolean;
  } | null = null;
  active = false;

  begin(
    pointerId: number,
    x: number,
    y: number,
    surface: boolean,
    pan: boolean,
  ) {
    const previousClick = this.current !== null && !this.blocksClick(1);
    this.current = {
      pointerId,
      x,
      y,
      surface,
      pan,
      previousClick,
      moved: false,
      cancelled: false,
    };
    this.active = true;
  }

  move(pointerId: number, x: number, y: number) {
    const gesture = this.current;
    if (!this.active || !gesture || gesture.pointerId !== pointerId) return;
    // Preserve a drag even if it returns to its origin before release.
    gesture.moved ||= Math.hypot(x - gesture.x, y - gesture.y) > 4;
  }

  end(pointerId: number, x: number, y: number) {
    this.move(pointerId, x, y);
    if (this.current?.pointerId === pointerId) this.active = false;
  }

  cancel() {
    if (this.current && this.active) this.current.cancelled = true;
    this.active = false;
  }

  get moved() {
    return this.current?.moved ?? false;
  }

  get pointerId() {
    return this.current?.pointerId ?? null;
  }

  get cancelled() {
    return this.current?.cancelled ?? false;
  }

  blocksClick(detail: number) {
    // Keyboard / assistive activation has no pointer gesture to cancel.
    if (detail === 0 || !this.current?.surface) return false;
    return this.current.cancelled || this.current.moved;
  }

  blocksDoubleClick(allowPanNode = false) {
    return (
      this.blocksClick(1) ||
      Boolean(this.current?.surface && this.current.pan && !allowPanNode) ||
      Boolean(this.current?.surface && !this.current.previousClick)
    );
  }
}
