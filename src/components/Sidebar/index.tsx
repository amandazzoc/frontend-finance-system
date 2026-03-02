import { Flex } from "../ui/Flex";
import "./Sidebar.module.css";
import { MenuList } from "./MenuList";

export function SideBar() {
    return (
        <aside>
            <Flex
                direction="column"
                justify="space-between"
                style={{ height: "100%" }}
            >
                <Flex direction="column" gap={60} align="center">
                    <img src="/images/logo.svg" alt="Logo" width={49.38} />

                    <MenuList />
                </Flex>

                <Flex direction="column" justify="space-between">
                    <Flex direction="column" gap={8}>
                        <hr />
                    </Flex>
                </Flex>
            </Flex>
        </aside>
    );
}
