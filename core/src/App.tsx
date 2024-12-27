import React, { Suspense } from "react";
import { ErrorBoundary } from 'react-error-boundary';
import "./App.css";

const MFEComponent = React.lazy(
  () => import("mfe_component/MFEComponent").then(
    (module) => ({ default: module.default })
  )
);

function App() {
  return (
    <>
      <div className="outerlayer">
        <div className="corelayer">
          <h1>I'm the Core component.</h1>
        </div>

        <div>
          <ErrorBoundary fallback={<p>Something went wrong (is remoteEntry.js available?)</p>}>
            <Suspense fallback={<p>Loading Micro Frontend (fetching remoteEntry.js)</p>}>
              <MFEComponent />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
}

export default App;
