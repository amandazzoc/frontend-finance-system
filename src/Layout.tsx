import { Outlet } from "react-router-dom";
import { SideBar } from "./components/SideBar";

export function Layout() {
    return (
        <>
            <SideBar />
            <main>
                <Outlet />
            </main>
        </>
    )
}