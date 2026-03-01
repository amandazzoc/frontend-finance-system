import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/router.constant";
import "./Sidebar.module.css";
import { Flex } from "./ui/Flex";

export function SideBar() {
    return (
        <aside>
            <Flex>
                
                <ul>
                    <li>
                        <Link to={ROUTES.HOME}>Home</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.LOGIN}>Login</Link>
                    </li>
                </ul>
            </Flex>
        </aside>
    );
}
