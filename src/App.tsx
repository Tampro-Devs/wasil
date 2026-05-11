import { Suspense } from "react";
import { LoadingContent } from "./shared/components/progress";
import AuthLoader from "./features/auth/components/auth.loader";
import { Route, Routes } from "react-router-dom";
import { router } from "./features/router";
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
      <AuthLoader>
        <Routes>
          {renderRoutes(router)}
          <Route path="*" element={<NotFound isContent={false} />} />
        </Routes>
      </AuthLoader>
    </Suspense>
  );
}

export default WasilApp;
