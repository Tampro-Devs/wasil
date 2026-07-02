import { Suspense } from "react";
import { LoadingContent } from "./shared/components/progress";
import { Route, Routes } from "react-router-dom";
import { router } from "./modules/router";
import NotFound from "./shared/components/not-found";

function renderRoutes(routeList: typeof router) {
  return routeList.map((route, index) => {
    if (route.children) {
      return (
        <Route key={index} path={route.path} element={route.element}>
          {renderRoutes(route.children)}
        </Route>
      );
    }
    return <Route key={index} path={route.path} element={route.element} />;
  });
}

function WasilApp() {
  return (
    <Suspense fallback={<LoadingContent />}>
      <Routes>
        {renderRoutes(router)}
        <Route path="*" element={<NotFound isContent={false} />} />
      </Routes>
    </Suspense>
  );
}

export default WasilApp;
