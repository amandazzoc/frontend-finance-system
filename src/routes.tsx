import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Cards, Dashboard, Debts, Expenses, Login, Reports, Revenue } from "./pages";
import { ROUTES } from "./constants/router.constant";

export function Router() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />} />

            <Route element={<Layout />}>
                <Route path={ROUTES.DASHBOARD} element={<Dashboard /> } />
                <Route path={ROUTES.REVENUE} element={<Revenue /> } />
                <Route path={ROUTES.EXPENSES} element={<Expenses /> } />
                <Route path={ROUTES.CARDS} element={<Cards /> } />
                <Route path={ROUTES.DEBTS} element={<Debts /> } />
                <Route path={ROUTES.REPORTS} element={<Reports /> } />
            </Route>
        </Routes>
      </BrowserRouter>
    );
}