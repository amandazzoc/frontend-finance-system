import { Outlet } from "react-router-dom";
import { SideBar } from "@/components/Sidebar";

export function Layout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <SideBar />
      <main style={{ flex: 1, backgroundColor: "var(--background-color)" }}>
        <Outlet />
      </main>
    </div>
  );
}
