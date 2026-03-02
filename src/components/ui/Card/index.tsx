import { Flex } from "../Flex";
import { Text } from "../Text";
import "./Card.css";

export type cardVariant = "default" | "success" | "danger" | "warning";

type Props = {
    title?: string,
    extraHeader?: string,
    children: React.ReactNode,
    variant?: cardVariant,
    className?: string;
}

export function Card({
    title,
    extraHeader,
    children,
    variant= 'default',
    className,
}: Props) {
    return (
        <Flex direction="column" className={`cardContainer ${variant} ${className}`}>
            <Flex justify="space-between">
                {title && (
                    <Text type="h2" size="2xl">
                        {title}
                    </Text>
                )}

                {extraHeader && extraHeader}
            </Flex>

            {children}
        </Flex>
    );
}