import { U } from "./module-qta.js";
import o from "A7";
import { w as w_1 } from "./module-uVZ.js";
import v from "oa";
import m from "bk";
import b from "Gr9";
import C from "Qey";
class n {
  bind() {
    const e = this._getBindContainer();
    const _listener = this._listener;
    this._getEvents().forEach((i) => {
      var n = _listener[i];
      if (i === "mouseup" || i === "mousemove") {
        var s =
          i === "mouseup"
            ? "onpointerup" in window
              ? "pointerup"
              : "mouseup"
            : "mousemove";
        window.addEventListener(s, n);
      } else {
        e.addEventListener(i, n);
      }
    });
  }
  unbind() {
    const e = this._getBindContainer();
    const _listener = this._listener;
    this._getEvents().forEach((i) => {
      var n = _listener[i];
      if (i === "mouseup" || i === "mousemove") {
        var s =
          i === "mouseup"
            ? "onpointerup" in window
              ? "pointerup"
              : "mouseup"
            : "mousemove";
        window.removeEventListener(s, n);
      } else {
        e.removeEventListener(i, n);
      }
    });
  }
  _getBindContainer() {
    return this._view.getListenerLayer();
  }
  _getEvents() {
    return Object.keys(this._listener);
  }
  constructor(e) {
    this._listener = {};
    var { view, controller } = e;
    this._view = view;
    this._controller = controller;
    this._listener.mousedown = controller.handleMousedown.bind(controller);
    this._listener.mousemove = controller.handleMousemove.bind(controller);
    this._listener.mouseup = controller.handleMouseup.bind(controller);
    this._listener.mouseover = controller.handleMouseover.bind(controller);
    this._listener.mouseout = controller.handleMouseout.bind(controller);
  }
}
class s {
  changeBrushSize(e) {
    this._controller.handleBrushSize(e);
  }
  changeBrushColor(e) {
    this._controller.handleBrushColor(e);
  }
  getBrushColor() {
    const e = this._controller.getBrushColor();
    if (typeof e === "string") {
      return e;
    }
    return "";
  }
  constructor(e) {
    var { controller } = e;
    this._controller = controller;
  }
}
class r {
  constructor(e) {
    var { container } = e;
    this._container = container;
  }
}
const h = {
  brush: "xor",
  eraser: "destination-out",
  move: "xor",
  select: "xor",
  box_select: "xor",
};
class c {
  get firstScreenContent() {
    return this._firstScreenContent;
  }
  clearRect() {
    this._view.clearRect();
  }
  readSnapshotData() {
    const { canvasElement } = this._view;
    return canvasElement.toDataURL("image/png", 1);
  }
  drawMask(e) {
    if (e) {
      const { originImageData } = e;
      const image = document.createElement("canvas");
      image.width = originImageData.width;
      image.height = originImageData.height;
      image.getContext("2d").putImageData(originImageData, 0, 0);
      this._view.clearRect();
      this._view.drawImage({
        image,
      });
      image.width = 0;
      image.height = 0;
    }
  }
  drawPaths(e) {
    if (e) {
      const { paths } = e;
      this.drawMask(this._firstScreenContent);
      this._view.drawPaths(paths);
    }
  }
  recordFirstScreen(originImageData) {
    if (!this._firstScreenContent) {
      this._firstScreenContent = {
        originImageData,
      };
    }
  }
  synchronizeCommandData() {
    try {
      const e = {
        paths: [...this._model.paths, this._view.path],
        selection: this._model.currentSelection || undefined,
      };
      this._model.paths.push(this._view.path);
      this._model.commandMangerModel.execute(e);
    } catch (e) {}
  }
  execUndo() {
    const e = this._model.commandMangerModel.undo();
    if (e) {
      this._model.paths = [...e.paths];
    } else {
      this._model.paths = [];
    }
    this._model.clearCurrentSelection();
    const _firstScreenContent = this._firstScreenContent;
    if (!e && _firstScreenContent) {
      return void this.drawMask(_firstScreenContent);
    }
    this.execClear();
    if (e) {
      this.drawPaths(e);
      this._restoreSelection(e.selection);
      return;
    }
  }
  execRedo() {
    const e = this._model.commandMangerModel.redo();
    if (e) {
      this._model.clearCurrentSelection();
      this.execClear();
      if (e) {
        this._model.paths = [...e.paths];
        this.drawPaths(e);
        this._restoreSelection(e.selection);
      }
    }
  }
  execClear() {
    const e =
      arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    if (e) {
      const t = this._firstScreenContent;
      this.drawMask(t);
      this._model.paths = [];
      this._model.commandMangerModel.clearStack();
    } else {
      this.clearRect();
    }
  }
  clearFirstScreen() {
    this._firstScreenContent = undefined;
  }
  getCommandData() {
    const { redoStack, undoStack } = this._model.commandMangerModel;
    return {
      redoStack,
      undoStack,
    };
  }
  _restoreSelection(e) {
    if (e) {
      this._model.setSelection(e);
      const t = this._model.currentSelection;
      if (t) {
        this._view.drawBoxSelect(t);
      }
    }
  }
  constructor(e) {
    var { model, view } = e;
    this._model = model;
    this._view = view;
  }
}
class d {
  getCanvasElement() {
    return this._view.canvasElement;
  }
  getCanvasContext2D() {
    return this._view.context2D;
  }
  getOfflineCanvas() {
    return this._view.offlineCanvas;
  }
  getPaths() {
    return this._model.paths;
  }
  handleEndDrawing() {
    if (this._isDrawing) {
      this._onPaintActionEvent.fire({
        action: "endPaint",
      });
      this._isDrawing = false;
    }
    this._model.brushModel.isDraw = false;
  }
  updateDrawAction(e) {
    this._view.updateDrawAction(e);
    if (e === "box_select") {
      this._view.roundMouse.changeVisible(false);
      this._view.setCrosshairCursor();
      this.clearPaths();
    } else {
      if (this._model.currentSelection) {
        this.clearSelection();
      }
      this._view.resetCursor();
      this._view.selectionBorder.destroy();
      this._view.roundMouse.changeVisible(true);
    }
  }
  handleMousedown(e) {
    if (this._view.actionType === "box_select") {
      const { offsetX, offsetY } = e;
      if (!this._view.isPointInImageBounds(offsetX, offsetY)) {
        return;
      }
      this.clearSelection();
      this.commandMangerController.clearFirstScreen();
      this._view.setPaintContainerCrosshairCursor();
      this._model.startSelection(offsetX, offsetY);
      this._onPaintActionEvent.fire({
        action: "startPaint",
      });
      return;
    }
    this._onPaintActionEvent.fire({
      action: "startPaint",
    });
    this._view.resetPath();
    this._isDrawing = true;
    this._model.brushModel.isDraw = true;
    this._model.brushModel.lastPosition = {
      lastX: e.offsetX,
      lastY: e.offsetY,
    };
    this._view.beginPath();
    this._view.moveTo(e.offsetX, e.offsetY);
  }
  handleMousemove(e) {
    const { offsetX, offsetY } = this._calculateOffset(e);
    if (this._view.actionType === "box_select" && this._model.isSelecting) {
      if (!this._view.isPointInImageBounds(offsetX, offsetY)) {
        return;
      }
      this._model.updateSelection(offsetX, offsetY);
      this._view.clearRect();
      const { currentSelection } = this._model;
      if (currentSelection) {
        this._view.drawBoxSelect(currentSelection);
      }
      return;
    }
    if (e.target === this._view.getListenerLayer()) {
      this._view.drawLine(e.offsetX, e.offsetY);
    }
  }
  handleMouseup(e) {
    const { offsetX, offsetY } = this._calculateOffset(e);
    if (this._view.actionType === "box_select" && this._model.isSelecting) {
      const n = this._view.clampToImageBounds(offsetX, offsetY);
      this._model.updateSelection(n.x, n.y);
      this._model.endSelection();
      const s = this._model.currentSelection;
      if (s) {
        this._view.clearRect();
        this._view.drawBoxSelect(s);
      }
      this._view.resetPaintContainerCursor();
      this._onPaintActionEvent.fire({
        action: "endPaint",
      });
      this.commandMangerController.synchronizeCommandData();
      return;
    }
    if (this._model.brushModel.isDraw) {
      const { lastX, lastY } = this._model.brushModel.lastPosition;
      if (offsetX === lastX && offsetY === lastY) {
        this._view.drawLine(offsetX, offsetY);
      }
      this._view.closePath();
      this.handleEndDrawing();
      this.commandMangerController.synchronizeCommandData();
    }
  }
  handleMouseover(e) {
    if (this._view.actionType !== "box_select") {
      this._view.roundMouse.changeVisible(true);
      this._model.brushModel.lastPosition = {
        lastX: e.offsetX,
        lastY: e.offsetY,
      };
    }
  }
  getInnerContainer() {
    return this._view.innerContainer;
  }
  handleMouseout() {
    if (this._view.actionType !== "box_select") {
      this._view.roundMouse.changeVisible(false);
    }
  }
  getContainerSize() {
    return this._view.containerSize;
  }
  handleDomScaleChange(e) {
    this._model.domScale = Math.abs(e);
  }
  handleCanvasVisible(e) {
    this._model.isVisible = e;
  }
  destroy() {
    this._view.selectionBorder.destroy();
  }
  handleSelectionBorderVisible(e) {
    this._view.selectionBorder.changeVisible(e);
  }
  handleBoxSelectGuideVisible(e) {
    this._model.boxSelectModel.isGuideVisible = e;
  }
  handleBrushSize(e) {
    this._model.brushModel.brushSize = e;
  }
  handleBrushColor(e) {
    this._model.brushModel.brushColor = e;
  }
  getBrushColor() {
    return this._model.brushModel.brushColor;
  }
  generatePaintContent() {
    const e =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.8;
    const { offscreenCanvas } = this.getOriginSizeCanvas();
    return offscreenCanvas.toDataURL("image/png", e);
  }
  getImageData() {
    const canvasElement = this._view.canvasElement;
    return this._view.context2D.getImageData(
      0,
      0,
      canvasElement.width,
      canvasElement.height,
    );
  }
  getOriginSizeCanvas() {
    const { firstScreenContent } = this.commandMangerController;
    const offscreenCanvas = document.createElement("canvas");
    const offscreenCtx = offscreenCanvas.getContext("2d");
    if (!offscreenCtx) {
      throw Error("Failed to get 2D context from offscreen canvas");
    }
    offscreenCanvas.width = this._model.canvasOriginSize.width;
    offscreenCanvas.height = this._model.canvasOriginSize.height;
    if (firstScreenContent) {
      const { originImageData } = firstScreenContent;
      offscreenCanvas.width = originImageData.width;
      offscreenCanvas.height = originImageData.height;
      if (originImageData instanceof HTMLImageElement) {
        offscreenCtx.drawImage(originImageData, 0, 0);
      } else {
        offscreenCtx.putImageData(originImageData, 0, 0);
      }
    }
    offscreenCtx.strokeStyle = this._view.context2D.strokeStyle;
    this._model.paths.forEach((e) => {
      var { points, type, lineWidth, lineCap, strokeStyle, lineJoin } = e;
      offscreenCtx.beginPath();
      offscreenCtx.save();
      offscreenCtx.globalCompositeOperation = h[type];
      var c = this._view.canvasElement.width / offscreenCanvas.width;
      offscreenCtx.lineWidth =
        lineWidth *
        (this._view.canvasElement.width /
          parseFloat(this._view.canvasElement.style.width)) *
        (1 / c);
      offscreenCtx.lineJoin = lineJoin;
      offscreenCtx.lineCap = lineCap;
      offscreenCtx.strokeStyle = strokeStyle;
      if (type === "eraser") {
        offscreenCtx.strokeStyle = "#ffffff";
      }
      for (var d = 0; d < points.length; d++) {
        var point = points[d];
        var _ = point[0] * offscreenCanvas.width;
        var v = point[1] * offscreenCanvas.height;
        if (d === 0) {
          offscreenCtx.moveTo(_, v);
        } else {
          offscreenCtx.lineTo(_, v);
        }
      }
      offscreenCtx.stroke();
      offscreenCtx.restore();
    });
    const { currentSelection } = this._model;
    if (currentSelection) {
      const { startX, startY, endX, endY } = currentSelection;
      const d = this._view.canvasElement.width / offscreenCanvas.width;
      const { containerSize } = this._view;
      const startX_1 = startX / containerSize.width;
      const startY_1 = startY / containerSize.height;
      const m = endX / containerSize.width;
      const g = endY / containerSize.height;
      const p = w_1({
        startX: startX_1,
        startY: startY_1,
        endX: m,
        endY: g,
      });
      const b = p.x * offscreenCanvas.width;
      const S = p.y * offscreenCanvas.height;
      const C = p.width * offscreenCanvas.width;
      const w = p.height * offscreenCanvas.height;
      offscreenCtx.save();
      offscreenCtx.lineWidth = 0;
      offscreenCtx.strokeStyle = "transparent";
      offscreenCtx.beginPath();
      offscreenCtx.roundRect(b, S, C, w, 2 / d);
      offscreenCtx.stroke();
      offscreenCtx.fillStyle = this._view.context2D.strokeStyle;
      offscreenCtx.fill();
      offscreenCtx.restore();
    }
    return {
      offscreenCanvas,
      offscreenCtx,
    };
  }
  getOriginSnapshotImageData() {
    let e;
    if ((e = this.commandMangerController.firstScreenContent) == null) {
      return undefined;
    }
    return e.originImageData;
  }
  changeCanvasSize(e) {
    this._view.changeCanvasSize(e);
  }
  changeCanvasContainerSize(e) {
    this._view.changeCanvasContainerSize(e);
  }
  onCommandMangerModel(e, t) {
    if (e === "undoStack") {
      this._model.commandMangerModel.onUndoStackChange(t);
    } else {
      this._model.commandMangerModel.onRedoStackChange(t);
    }
  }
  drawImage(e) {
    this._view.drawImage(e);
    this._onDrawImageEvent.fire(e);
  }
  drawPaths(e) {
    this._view.drawPaths(e);
  }
  drawBoxSelection(e) {
    this._view.drawBoxSelect(e);
  }
  recordFirstScreen(e) {
    this.commandMangerController.recordFirstScreen(e);
  }
  clearCanvas() {
    const e =
      arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    this.commandMangerController.execClear(e);
  }
  updateMousePosition(e) {
    this._model.brushModel.mousePosition = e;
  }
  getCurrentSelection() {
    return this._model.currentSelection;
  }
  clearPaths() {
    this._view.resetPath();
    this._model.paths = [];
    this._view.clearRect();
  }
  clearSelection() {
    this._model.clearCurrentSelection();
    this._view.clearRect();
  }
  _calculateOffset(e) {
    const t = this._view.getListenerLayer().getBoundingClientRect();
    return {
      offsetX: (e.clientX - t.left) / this._model.domScale,
      offsetY: (e.clientY - t.top) / this._model.domScale,
    };
  }
  constructor(e) {
    this._onPaintActionEvent = new o.v();
    this._onDrawImageEvent = new o.v();
    this.onPaintAction = this._onPaintActionEvent.event;
    this.onDrawImage = this._onDrawImageEvent.event;
    var { model, view } = e;
    this._model = model;
    this._view = view;
    this.commandMangerController = new c(e);
    this._isDrawing = false;
  }
}
class u {
  get undoStack() {
    return this._undoStack;
  }
  set undoStack(e) {
    this._undoStack = e;
    this._onUndoStackChangeEvent.fire(e);
  }
  get redoStack() {
    return this._redoStack;
  }
  set redoStack(e) {
    this._redoStack = e;
    this._onRedoStackChangeEvent.fire(e);
  }
  get undoCount() {
    return this.undoStack.length;
  }
  get redoCount() {
    return this.redoStack.length;
  }
  execute(e) {
    this.undoStack = [...this.undoStack, e];
    this.redoStack = [];
  }
  undo() {
    const e = this.undoStack.pop();
    this.undoStack = [...this.undoStack];
    if (e) {
      this.redoStack = [...this.redoStack, e];
      return this.undoStack.at(-1);
    }
  }
  redo() {
    const e = this.redoStack.pop();
    this.redoStack = [...this.redoStack];
    if (e) {
      this.undoStack = [...this.undoStack, e];
      return e;
    }
  }
  reset() {}
  clearStack() {
    this.redoStack = [];
    this.undoStack = [];
  }
  constructor(e = {}) {
    this._undoStack = [];
    this._redoStack = [];
    this._onUndoStackChangeEvent = new o.v();
    this.onUndoStackChange = this._onUndoStackChangeEvent.event;
    this._onRedoStackChangeEvent = new o.v();
    this.onRedoStackChange = this._onRedoStackChangeEvent.event;
    var { limit = 100 } = e;
    this._limit = limit;
  }
}
class _ {
  get brushSize() {
    return this._brushSize;
  }
  set brushSize(e) {
    this._brushSize = e;
    this._brushSizeChangeEvent.fire(e);
  }
  get brushColor() {
    return this._brushColor;
  }
  set brushColor(e) {
    this._brushColor = e;
    this._brushColorChangeEvent.fire(e);
  }
  get lastPosition() {
    return this._lastPosition;
  }
  set lastPosition(e) {
    this._lastPosition = e;
  }
  get mousePosition() {
    return this._mousePosition;
  }
  set mousePosition(e) {
    this._mousePosition = e;
    this._mousePositionChangeEvent.fire(e);
  }
  get isDraw() {
    return this._isDraw;
  }
  set isDraw(e) {
    this._isDraw = e;
  }
  constructor() {
    this._brushSize = 1;
    this._brushColor = "#000000";
    this._lastPosition = {
      lastX: 0,
      lastY: 0,
    };
    this._mousePosition = {
      offsetX: "50%",
      offsetY: "50%",
    };
    this._isDraw = false;
    this._brushSizeChangeEvent = new o.v();
    this._brushColorChangeEvent = new o.v();
    this._mousePositionChangeEvent = new o.v();
    this.onBrushSizeChange = this._brushSizeChangeEvent.event;
    this.onBrushColorChange = this._brushColorChangeEvent.event;
    this.onMousePositionChange = this._mousePositionChangeEvent.event;
  }
}
class g {
  get isGuideVisible() {
    return this._isGuideVisible;
  }
  set isGuideVisible(e) {
    this._isGuideVisible = e;
    this._guideVisibleChangeEvent.fire(e);
  }
  get isSelecting() {
    return this._isSelecting;
  }
  get currentSelection() {
    return this._currentSelection;
  }
  startSelection(e, t) {
    this._updateCurrentSelection(
      {
        startX: e,
        startY: t,
        endX: e,
        endY: t,
      },
      true,
    );
  }
  updateSelection(e, t) {
    if (this._currentSelection) {
      const i = m._(v._({}, this._currentSelection), {
        endX: e,
        endY: t,
      });
      this._updateCurrentSelection(i);
    }
  }
  endSelection() {
    this._isSelecting = false;
  }
  clearCurrentSelection() {
    this._updateCurrentSelection(null, false);
  }
  setSelection(e) {
    if (!e) {
      return void this.clearCurrentSelection();
    }
    const t = {
      startX: e.startX,
      startY: e.startY,
      endX: e.endX,
      endY: e.endY,
    };
    this._updateCurrentSelection(t, false);
  }
  _updateCurrentSelection(e, t) {
    this._currentSelection = e;
    if (t !== undefined) {
      this._isSelecting = t;
    }
    this._onSelectionChangeEvent.fire(this._currentSelection);
  }
  constructor() {
    this._isGuideVisible = false;
    this._isSelecting = false;
    this._currentSelection = null;
    this._guideVisibleChangeEvent = new o.v();
    this._onSelectionChangeEvent = new o.v();
    this.onGuideVisibleChange = this._guideVisibleChangeEvent.event;
    this.onSelectionChange = this._onSelectionChangeEvent.event;
  }
}
class p {
  get onSelectionChange() {
    return this.boxSelectModel.onSelectionChange;
  }
  get container() {
    return this._container;
  }
  get paths() {
    return this._paths;
  }
  set paths(e) {
    this._paths = e;
  }
  get isVisible() {
    return this._isVisible;
  }
  set isVisible(e) {
    this._isVisible = e;
    this._onVisibleChangeEvent.fire(e);
  }
  get canvasOriginScale() {
    return this._canvasOriginScale;
  }
  set canvasOriginScale(e) {
    this._canvasOriginScale = e;
  }
  get canvasOriginSize() {
    return this._canvasOriginSize;
  }
  set canvasOriginSize(e) {
    this._canvasOriginSize = e;
  }
  get domScale() {
    return this._domScale;
  }
  set domScale(e) {
    this._domScale = e;
    this._onDomScaleChangeEvent.fire(e);
  }
  get isSelecting() {
    return this.boxSelectModel.isSelecting;
  }
  get currentSelection() {
    return this.boxSelectModel.currentSelection;
  }
  startSelection(e, t) {
    this.boxSelectModel.startSelection(e, t);
  }
  updateSelection(e, t) {
    this.boxSelectModel.updateSelection(e, t);
  }
  endSelection() {
    this.boxSelectModel.endSelection();
  }
  clearCurrentSelection() {
    this.boxSelectModel.clearCurrentSelection();
  }
  setSelection(e) {
    this.boxSelectModel.setSelection(e);
  }
  constructor(e) {
    this._paths = [];
    this._isVisible = false;
    this._canvasOriginScale = 1;
    this._canvasOriginSize = {
      width: 0,
      height: 0,
    };
    this._onVisibleChangeEvent = new o.v();
    this.onVisibleChange = this._onVisibleChangeEvent.event;
    this._domScale = 1;
    this._onDomScaleChangeEvent = new o.v();
    this.onDomScaleChange = this._onDomScaleChangeEvent.event;
    var { container } = e;
    this._container = container;
    this.brushModel = new _();
    this.boxSelectModel = new g();
    this.commandMangerModel = new u();
  }
}
function S(e, t) {
  Object.assign(e.style, t);
}
class w {
  _updateBoxSelectGuideVisibility(e) {
    S(this._boxSelectGuideContainer, {
      display: e ? "block" : "none",
    });
  }
  _initContainer(e) {
    const { boxSelectGuideContainer } = e;
    S(boxSelectGuideContainer, {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      zIndex: "10",
      borderRadius: "12px",
      background: "var(--component-toast)",
      padding: "12px 16px",
      color: "var(--text-primary)",
      fontSize: "13px",
      fontWeight: "500",
      lineHeight: "20px",
      whiteSpace: "nowrap",
      display: "none",
    });
  }
  _initListener() {
    this._model.onGuideVisibleChange((e) => {
      this._updateBoxSelectGuideVisibility(e);
    });
  }
  constructor(e) {
    var { model, innerContainer } = e;
    this._model = model;
    var boxSelectGuideContainer = document.createElement("div");
    boxSelectGuideContainer.id = "box-select-guide-container";
    boxSelectGuideContainer.textContent = C.Ay.t(
      "dreamina_image4_select_area_note",
      {},
    );
    this._initContainer({
      boxSelectGuideContainer,
    });
    this._boxSelectGuideContainer = boxSelectGuideContainer;
    innerContainer.appendChild(boxSelectGuideContainer);
    this._initListener();
  }
}
class x {
  updateMouseUIPosition(e) {
    const _roundMouseElement = this._roundMouseElement;
    let { offsetX, offsetY } = e;
    if (typeof offsetX === "number") {
      offsetX = "".concat(offsetX, "px");
    }
    if (typeof offsetY === "number") {
      offsetY = "".concat(offsetY, "px");
    }
    S(_roundMouseElement, {
      left: offsetX,
      top: offsetY,
    });
  }
  handleInnerContainer(e) {
    S(e, {
      cursor: "none",
    });
  }
  updateRoundSize(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : this._roundMouseElement;
    const i = 2 * e;
    S(t, {
      width: "".concat(i, "px"),
      height: "".concat(i, "px"),
    });
  }
  changeVisible(e) {
    this._roundMouseElement.style.display = e ? "block" : "none";
  }
  changeRoundMouseScale(e) {
    S(this._roundMouseElement, {
      border: `${1 / e}px solid var(--text-secondary)`,
    });
  }
  _initUI() {
    this.updateMouseUIPosition(this._model.brushModel.mousePosition);
  }
  _initListener() {
    this._model.brushModel.onMousePositionChange((e) => {
      this.updateMouseUIPosition(e);
    });
  }
  constructor(e) {
    var { radius, innerContainer, model } = e;
    this._model = model;
    var s = document.createElement("div");
    S(s, {
      position: "absolute",
      borderRadius: "50%",
      border: "1px solid var(--text-secondary)",
      background:
        "radial-gradient(50% 50% at 50% 50%, rgba(235, 248, 255, 0.12) 0%, rgba(235, 248, 255, 0.60) 80.67%)",
      transform: "translate(-50%, -50%)",
    });
    this.updateRoundSize(radius, s);
    innerContainer.appendChild(s);
    this.handleInnerContainer(innerContainer);
    this._roundMouseElement = s;
    this._initUI();
    this._initListener();
  }
}
class y {
  get isVisible() {
    return this._isVisible;
  }
  changeVisible(e) {
    this._isVisible = e;
    if (e && this._model.currentSelection) {
      this._showBorder(this._model.currentSelection);
    } else {
      this._hideBorder();
    }
  }
  destroy() {
    if (this._borderElement) {
      let e;
      if ((e = this._listenerLayer.parentElement) != null) {
        e.removeChild(this._borderElement);
      }
      this._borderElement = null;
    }
    this._isVisible = false;
  }
  _initListener() {
    this._model.onSelectionChange((e) => {
      this._updateBorder(e);
    });
  }
  _updateBorder(e) {
    if (e) {
      this._showBorder(e);
    } else {
      this._hideBorder();
    }
  }
  _showBorder(e) {
    if (!this._borderElement) {
      this._createBorderElement();
    }
    const { startX, startY, endX, endY } = e;
    const a = Math.min(startX, endX);
    const r = Math.min(startY, endY);
    const o = Math.abs(endX - startX);
    const l = Math.abs(endY - startY);
    S(this._borderElement, {
      left: "".concat(a, "px"),
      top: "".concat(r, "px"),
      width: "".concat(o, "px"),
      height: "".concat(l, "px"),
      display: "block",
    });
    this._isVisible = true;
  }
  _hideBorder() {
    if (this._borderElement) {
      S(this._borderElement, {
        display: "none",
      });
    }
    this._isVisible = false;
  }
  _createBorderElement() {
    let e;
    const t = document.createElement("div");
    S(t, {
      position: "absolute",
      border: "2px dashed #00CAE0",
      backgroundColor: "transparent",
      boxSizing: "border-box",
      borderRadius: "2px",
      pointerEvents: "none",
      zIndex: "2",
      display: "none",
    });
    if ((e = this._listenerLayer.parentElement) != null) {
      e.appendChild(t);
    }
    this._borderElement = t;
  }
  constructor(e) {
    this._borderElement = null;
    this._isVisible = false;
    var { model, listenerLayer } = e;
    this._model = model;
    this._listenerLayer = listenerLayer;
    this._initListener();
  }
}
const f = () => ({
  type: "brush",
  points: [],
  lineWidth: 1,
  lineCap: "round",
  strokeStyle: "",
  lineJoin: "round",
});
class M {
  get canvasElement() {
    return this._canvasElement;
  }
  get context2D() {
    return this._context2D;
  }
  get path() {
    return this._path;
  }
  get offlineCanvas() {
    return this._offlineCanvas;
  }
  get actionType() {
    return this._actionType;
  }
  updateDrawAction(e) {
    this._actionType = e;
  }
  changeCanvasSize(e) {
    const { _canvasElement } = this;
    _canvasElement.width = e.width;
    _canvasElement.height = e.height;
    this._reduceCanvasSize(e);
    this.initContext();
  }
  changeCanvasContainerSize(e) {
    const { _canvasElement, _listenerLayer } = this;
    this.containerSize = e;
    const { width, height } = e;
    S(this.innerContainer, {
      width: "".concat(width, "px"),
      height: "".concat(height, "px"),
    });
    _canvasElement.style.width = "".concat(width, "px");
    _canvasElement.style.height = "".concat(height, "px");
    _listenerLayer.style.width = "".concat(width, "px");
    _listenerLayer.style.height = "".concat(height, "px");
    this.changeCanvasScale(_canvasElement.width / width);
  }
  changeCanvasScale(e) {
    const _scaleRatio = this._scaleRatio;
    if (_scaleRatio > 0) {
      this._context2D.scale(1 / _scaleRatio, 1 / _scaleRatio);
    }
    const i = Math.round(100 * e) / 100;
    this._context2D.scale(i, i);
    this._scaleRatio = i;
  }
  initContext() {
    this._context2D.lineCap = this._lineCap;
    this._context2D.lineJoin = this._lineJoin;
  }
  resetPath() {
    this._path = f();
  }
  updatePathType(e) {
    this._path.type = e;
  }
  changeLineWidth(e) {
    this._context2D.lineWidth = 2 * e;
    this._lineWidth = 2 * e;
  }
  changeStrokeStyle(e) {
    this._context2D.strokeStyle = e;
    this._strokeStyle = e;
  }
  moveTo(e, t) {
    this._context2D.moveTo(e, t);
    const { width, height } = this.containerSize;
    this.path.points.push([e / width, t / height]);
    Object.assign(this.path, {
      type: this._actionType,
      strokeStyle: this._strokeStyle,
      lineWidth: this._lineWidth,
      lineCap: this._lineCap,
      lineJoin: this._lineJoin,
    });
  }
  beginPath() {
    this._context2D.beginPath();
  }
  closePath() {
    this._context2D.closePath();
  }
  drawLine(e, t) {
    this._model.brushModel.mousePosition = {
      offsetX: e,
      offsetY: t,
    };
    const { brushModel } = this._model;
    const _context2D = this._context2D;
    const { isDraw } = brushModel;
    if (isDraw) {
      _context2D.save();
      _context2D.globalCompositeOperation = h[this._actionType];
      _context2D.lineWidth = this._lineWidth;
      _context2D.strokeStyle = this._strokeStyle;
      _context2D.lineTo(e, t);
      _context2D.stroke();
      _context2D.restore();
      const { width, height } = this.containerSize;
      this.path.points.push([e / width, t / height]);
      Object.assign(this.path, {
        type: this._actionType,
        strokeStyle: this._strokeStyle,
        lineWidth: this._lineWidth,
        lineCap: this._lineCap,
        lineJoin: this._lineJoin,
      });
      brushModel.lastPosition = {
        lastX: e,
        lastY: t,
      };
    }
  }
  drawImage(e) {
    const { containerSize } = this;
    const {
      image,
      x = 0,
      y = 0,
      width = containerSize.width,
      height = containerSize.height,
    } = e;
    const _context2D = this._context2D;
    _context2D.save();
    _context2D.imageSmoothingEnabled = true;
    _context2D.imageSmoothingQuality = "high";
    _context2D.globalCompositeOperation = "xor";
    _context2D.drawImage(image, x, y, width, height);
    _context2D.restore();
  }
  drawPaths(e) {
    const _context2D = this._context2D;
    const { width, height } = this.containerSize;
    e.forEach((e) => {
      var { points, type, lineWidth, strokeStyle, lineCap, lineJoin } = e;
      _context2D.save();
      _context2D.globalCompositeOperation = h[type];
      _context2D.lineWidth = lineWidth;
      _context2D.strokeStyle = strokeStyle;
      _context2D.lineCap = lineCap;
      _context2D.lineJoin = lineJoin;
      _context2D.beginPath();
      for (var d = 0; d < points.length; d++) {
        var point = points[d];
        var _ = point[0] * width;
        var v = point[1] * height;
        if (d === 0) {
          _context2D.moveTo(_, v);
        } else {
          _context2D.lineTo(_, v);
          _context2D.stroke();
        }
      }
      _context2D.restore();
    });
  }
  changeInnerContainerVisible(e) {
    S(this.innerContainer, {
      display: e ? "block" : "none",
    });
  }
  clearRect() {
    const { width, height } = this.containerSize;
    this._context2D.clearRect(0, 0, width, height);
  }
  getListenerLayer() {
    return this._listenerLayer;
  }
  drawBoxSelect(e) {
    const _context2D = this._context2D;
    const { x, y, width, height } = w_1(e);
    _context2D.save();
    _context2D.lineWidth = 0;
    _context2D.strokeStyle = "transparent";
    _context2D.beginPath();
    _context2D.roundRect(x, y, width, height, 2);
    _context2D.stroke();
    _context2D.fillStyle = this._strokeStyle;
    _context2D.fill();
    _context2D.restore();
  }
  setCrosshairCursor() {
    this._listenerLayer.style.cursor = "crosshair";
  }
  resetCursor() {
    this._listenerLayer.style.cursor = "none";
  }
  setPaintContainerCrosshairCursor() {
    const e = this.getPaintContainer();
    if (e) {
      e.style.cursor = "crosshair";
    }
  }
  resetPaintContainerCursor() {
    const e = this.getPaintContainer();
    if (e) {
      e.style.cursor = "default";
    }
  }
  getPaintContainer() {
    return document.querySelector("#paint-container");
  }
  isPointInImageBounds(e, t) {
    const i = this._canvasElement.getBoundingClientRect();
    const { domScale } = this._model;
    const s = i.width / domScale;
    const a = i.height / domScale;
    return e >= 0 && t >= 0 && e <= s && t <= a;
  }
  clampToImageBounds(e, t) {
    const i = this._canvasElement.getBoundingClientRect();
    const { domScale } = this._model;
    return {
      x: Math.max(0, Math.min(e, i.width / domScale)),
      y: Math.max(0, Math.min(t, i.height / domScale)),
    };
  }
  isPointInPaintContainer(e, t) {
    const i = this.getPaintContainer();
    if (!i) {
      return false;
    }
    const n = i.getBoundingClientRect();
    return e >= n.left && e <= n.right && t >= n.top && t <= n.bottom;
  }
  isPointInListenerLayer(e, t) {
    const i = this.getListenerLayer().getBoundingClientRect();
    const { domScale } = this._model;
    const s = i.width / domScale;
    const a = i.height / domScale;
    return e >= 0 && e <= s && t >= 0 && t <= a;
  }
  _reduceCanvasSize(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : this._canvasElement;
    this._model.canvasOriginScale = ((e) => {
      var { width, height } = e;
      var n = Math.max(width, height);
      var s = 1;
      if (n > 1024) {
        s = 1024 / n;
      }
      return s;
    })({
      width: e.width,
      height: e.height,
    });
    t.width = e.width * this._model.canvasOriginScale;
    t.height = e.height * this._model.canvasOriginScale;
    this._model.canvasOriginSize = {
      width: e.width,
      height: e.height,
    };
  }
  _createDivElement(e) {
    const t = document.createElement("div");
    if (e) {
      t.id = e;
    }
    return t;
  }
  _createCanvasElement() {
    this._offlineCanvas = new b.Y(0, 0);
    return {
      canvasElement: this._offlineCanvas.element,
      context2D: this._offlineCanvas.element.getContext("2d"),
    };
  }
  _initInnerContainer(e, t) {
    const { containerSize, innerContainer } = e;
    const { container } = t;
    S(innerContainer, {
      position: "relative",
      width: "".concat(containerSize.width, "px"),
      height: "".concat(containerSize.height, "px"),
    });
    container.appendChild(innerContainer);
  }
  _initCanvasElement(e, t) {
    const { canvasElement, innerContainer } = e;
    const { container } = t;
    const a = container.getBoundingClientRect();
    this._reduceCanvasSize(a, canvasElement);
    innerContainer.appendChild(canvasElement);
  }
  _initListenerLayer(e) {
    const { containerSize, listenerLayer, innerContainer } = e;
    S(listenerLayer, {
      width: "".concat(containerSize.width, "px"),
      height: "".concat(containerSize.height, "px"),
      position: "absolute",
      top: "0px",
      left: "0px",
    });
    innerContainer.appendChild(listenerLayer);
  }
  _initListener() {
    this._model.brushModel.onBrushSizeChange((e) => {
      this.changeLineWidth(e);
      this.roundMouse.updateRoundSize(e);
    });
    this._model.onVisibleChange((e) => {
      this.changeInnerContainerVisible(e);
    });
    this._model.brushModel.onBrushColorChange((e) => {
      this.changeStrokeStyle(e);
    });
    this._model.onDomScaleChange((e) => {
      this._changeRoundMouseScale(e);
    });
  }
  _changeRoundMouseScale(e) {
    this.roundMouse.changeRoundMouseScale(e);
  }
  constructor(e) {
    this._scaleRatio = -1;
    this._path = f();
    this._actionType = "brush";
    this._lineWidth = 1;
    this._lineCap = "round";
    this._lineJoin = "round";
    this._strokeStyle = "";
    var { model, container } = e;
    this._model = model;
    var n = container.getBoundingClientRect();
    var containerSize = {
      width: Math.round(n.width),
      height: Math.round(n.height),
    };
    this.containerSize = containerSize;
    var innerContainer = this._createDivElement();
    this._initInnerContainer(
      {
        containerSize,
        innerContainer,
      },
      e,
    );
    this.innerContainer = innerContainer;
    var { canvasElement, context2D } = this._createCanvasElement();
    this._initCanvasElement(
      {
        canvasElement,
        innerContainer,
      },
      e,
    );
    this._canvasElement = canvasElement;
    this._context2D = context2D;
    this.initContext();
    this.roundMouse = new x({
      radius: model.brushModel.brushSize,
      innerContainer,
      model,
    });
    var listenerLayer = this._createDivElement("listener-layer");
    this._initListenerLayer({
      containerSize,
      listenerLayer,
      innerContainer,
    });
    this._listenerLayer = listenerLayer;
    this.selectionBorder = new y({
      model,
      listenerLayer,
    });
    this.boxSelect = new w({
      model: model.boxSelectModel,
      innerContainer,
    });
    this._initListener();
  }
}
class E extends r {
  getCanvasElement() {
    return this._controller.getCanvasElement();
  }
  getCanvasContext2D() {
    return this._controller.getCanvasContext2D();
  }
  show() {
    this._controller.handleCanvasVisible(true);
    this._controller.handleSelectionBorderVisible(true);
  }
  hide() {
    this._controller.handleCanvasVisible(false);
    this._controller.handleSelectionBorderVisible(false);
  }
  redo() {
    this._controller.commandMangerController.execRedo();
  }
  undo() {
    this._controller.commandMangerController.execUndo();
  }
  generatePaintContent() {
    return this._controller.generatePaintContent(1);
  }
  getImageData() {
    return this._controller.getImageData();
  }
  getOriginSnapshotImageData() {
    return this._controller.getOriginSnapshotImageData();
  }
  getPaths() {
    return this._controller.getPaths();
  }
  getContainerSize() {
    return this._controller.getContainerSize();
  }
  changeCanvasSize(e) {
    this._controller.changeCanvasSize(e);
  }
  changeCanvasContainerSize(e) {
    this._controller.changeCanvasContainerSize(e);
  }
  drawImage(e) {
    this._controller.drawImage(e);
  }
  drawPaths(e) {
    this._controller.drawPaths(e);
  }
  drawBoxSelection(e) {
    this._controller.drawBoxSelection(e);
  }
  recordFirstScreen(e) {
    this._controller.recordFirstScreen(e);
  }
  clearCanvas() {
    const e =
      arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    this._controller.clearCanvas(e);
  }
  onCommandMangerModel(e, t) {
    this._controller.onCommandMangerModel(e, t);
  }
  onPaintAction(e) {
    this._controller.onPaintAction(e);
  }
  onDrawImage(e) {
    this._controller.onDrawImage(e);
  }
  updateMousePosition(e) {
    this._controller.updateMousePosition(e);
  }
  updateDrawAction(e) {
    this._controller.updateDrawAction(e);
  }
  changeDomScale(e) {
    this._controller.handleDomScaleChange(e);
  }
  showBoxSelectGuide() {
    this._controller.handleBoxSelectGuideVisible(true);
  }
  hideBoxSelectGuide() {
    this._controller.handleBoxSelectGuideVisible(false);
  }
  getCommandData() {
    return this._controller.commandMangerController.getCommandData();
  }
  getModel() {
    return this._model;
  }
  destroy() {
    this._bindListener.unbind();
    let e;
    const _container = this._container;
    const i = this._controller.getInnerContainer();
    U(_container, i);
    if ((e = this._controller.getOfflineCanvas()) != null) {
      e.destroy();
    }
    this._controller.destroy();
  }
  constructor(e) {
    super(e);
    var { container } = e;
    var model = new p({
      container,
    });
    var view = new M({
      model,
      container,
    });
    var controller = new d({
      model,
      view,
    });
    this._controller = controller;
    this._model = model;
    this._bindListener = new n({
      controller,
      view,
    });
    this._bindListener.bind();
    this.brush = new s({
      controller: this._controller,
    });
  }
}
export { E as y };
