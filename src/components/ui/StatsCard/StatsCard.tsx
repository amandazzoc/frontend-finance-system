import { formatCurrency } from "@/utils/formatCurrency";
import { Card, type cardVariant } from "../Card";
import { Flex } from "../Flex";
import { Text } from "../Text";
import { Icon } from "./Icon";

type Props = {
    icon: React.ReactNode,
    variant?: cardVariant,
    iconVariant?: "primary" | "secondary" | "success" | "danger" | "warning",
    title: string,
    value: number,
}

const titleColorMap: Record<NonNullable<Props["variant"]>, string> = {
    default: "var(--text-muted-color)",
    success: "var(--success-muted-color)",
    danger: "var(--danger-muted-color)",
    warning: "var(--warning-muted-color)",
};

export function StatsCard({ icon, variant, iconVariant= "primary", title, value }: Props) {
    return (
        <Card variant={variant} className="statsCardContainer">
            <Flex gap={24} align="center">
                <Icon icon={icon} variant={iconVariant}/>

                <Flex direction="column" gap={4}>
                    <Text color={titleColorMap[variant || "default"]}>
                        {title}
                    </Text>

                    <Text size="xl" weight="bold">
                        {formatCurrency(value)}
                    </Text>
                </Flex>
            </Flex>
        </Card>
    )
}