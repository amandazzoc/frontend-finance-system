import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import type { ROUTES } from "@/constants/router.constant";

type Props = {
    icon: React.ReactNode;
    route: typeof ROUTES[keyof typeof ROUTES];
    label: string;
}

const getNavClass = ({ isActive }: { isActive: boolean }) => {
    return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
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
