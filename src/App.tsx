import { lazy, Suspense } from "react";
import "./styles/base.css";
import { useT } from "./i18n/I18nProvider";

const CanvasWorkspace = lazy(() => import("./canvas/CanvasWorkspace"));

function LoadingScreen() {
  const t = useT();
  return (
    <div className="canvas-loading-screen" role="status">
      {t("app.loading")}
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <CanvasWorkspace />
    </Suspense>
  );
}
