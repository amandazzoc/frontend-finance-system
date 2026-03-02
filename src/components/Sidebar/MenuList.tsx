import { MenuItem } from "./MenuItem";
import { MENU_ITEMS } from "@/constants/sidebar.constant";
import "./Sidebar.module.css"

export function MenuList() {
    return (
        <ul>
            {MENU_ITEMS.map((item) => (
                <MenuItem key={item.route} icon={item.icon} route={item.route} label={item.label} />
            ))}
        </ul>
    );
}