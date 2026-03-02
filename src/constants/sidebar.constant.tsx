import {
    ChartLine,
    CreditCard,
    HandCoins,
    LayoutDashboard,
    TrendingDown,
    Wallet,
} from "lucide-react";
import { ROUTES } from "@/constants/router.constant";

export const MENU_ITEMS = [
    {
        icon: <LayoutDashboard size={24} />,
        route: ROUTES.DASHBOARD,
        label: "Dashboard",
    },
    {
        icon: <Wallet size={24} />,
        route: ROUTES.REVENUE,
        label: "Receita",
    },
    {
        icon: <HandCoins size={24} />,
        route: ROUTES.EXPENSES,
        label: "Despesas",
    },
    {
        icon: <CreditCard size={24} />,
        route: ROUTES.CARDS,
        label: "Cartões",
    },
    {
        icon: <TrendingDown size={24} />,
        route: ROUTES.DEBTS,
        label: "Dívidas",
    },
    {
        icon: <ChartLine size={24} />,
        route: ROUTES.REPORTS,
        label: "Relatórios",
    },
];
