import { lazy, Suspense } from "react";
import "./styles/base.css";

const CanvasWorkspace = lazy(() => import("./canvas/CanvasWorkspace"));

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="canvas-loading-screen" role="status">
          正在打开画布…
        </div>
      }
    >
      <CanvasWorkspace />
    </Suspense>
  );
}
