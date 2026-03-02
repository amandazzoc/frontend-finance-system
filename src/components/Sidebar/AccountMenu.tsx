import { ChevronDown } from "lucide-react";
import { Flex } from "../ui/Flex";
import { Text } from "../ui/Text";
import "./Sidebar.css";

export function AccountMenu() {
    return (
        <Flex gap={12} align="center" className="accountMenu">
            <img
                src="https://avatars.githubusercontent.com/u/100137341?s=96&v=4"
                alt="User Avatar"
                width={40}
                height={40}
                className="avatarIcon"
            />

            <Flex direction="column" justify="center">
                <Text size="lg" weight="bold" className="accountText">
                    Amanda Oliveira Costa
                </Text>

                <Text
                    size="sm"
                    className="accountText"
                    color="var(--text-muted-color)"
                >
                    amandaol7b@gmail.com
                </Text>
            </Flex>

            <ChevronDown size={20} color="var(--text-muted-color)" />
        </Flex>
    );
}