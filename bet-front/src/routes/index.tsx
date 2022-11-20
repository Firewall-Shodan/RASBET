import { BrowserRouter, Routes, Route } from 'react-router-dom';

import paths from './paths';
import RouteWrapper from './routeWrapper';

const RoutesWrapper = () => (
  <BrowserRouter>
    <Routes>{paths.map((path) => build(path))}</Routes>
  </BrowserRouter>
);

const build = (route: IRoutesPath) => {
  if (!route.outlets) {
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          <RouteWrapper isPrivate={route.private} element={route.element} />
        }
      />
    );
  }

  return (
    <Route
      key={route.path}
      path={route.path}
      element={
        <RouteWrapper isPrivate={route.private} element={route.element} />
      }
    >
      {route.outlets.map((outlet) => build(outlet))}
    </Route>
  );
};

export default RoutesWrapper;
