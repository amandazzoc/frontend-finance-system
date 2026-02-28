import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home, Login } from "./pages";
import { ROUTES } from "./constants/router.constant";

export function Router() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />} />

            <Route element={<Layout />}>
                <Route path={ROUTES.HOME} element={<Home /> } />
            </Route>
        </Routes>
      </BrowserRouter>
    );
}