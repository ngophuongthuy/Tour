// App.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserRoutes, adminRoutes } from "./router/router.routers";
import MainLayout from "./components/layout/MainLayout";
import "./App.css";
import MainAdmin from "./components/admin/MainAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {UserRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<MainLayout>{route.element}</MainLayout>}
          />
        ))}
        {adminRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<MainAdmin>{route.element}</MainAdmin>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
