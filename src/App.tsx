import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage";
import { MainLayout } from "./layout/MainLayout";

export const ROUTES = {
  HOME: "/",
  ALL: "*",
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={
            <MainLayout>
              <Homepage />
            </MainLayout>
          }
        />
        <Route path={ROUTES.ALL} element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
