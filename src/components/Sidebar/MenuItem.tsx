import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import type { ROUTES } from "@/constants/router.constant";

type Props = {
    icon: React.ReactNode;
    route: typeof ROUTES[keyof typeof ROUTES];
    label: string;
}

const getNavClass = ({ isActive }: { isActive: boolean }) => {
    return isActive ? 'navLink active' : 'navLink';
};

export function MenuItem({ icon, route, label }: Props) {

    return (
        <li>
            <NavLink to={route} className={getNavClass}>
                {icon}
                {label}
            </NavLink>
        </li>
    );
}
