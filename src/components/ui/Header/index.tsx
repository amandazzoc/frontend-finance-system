import { Flex } from "../Flex";
import { Text } from "../Text";

type Props = {
    title: string;
    subtitle: string;
}

export function Header({ title, subtitle }: Props) {
    return (
        <Flex direction="column" gap={6}>
            <Text size="2xl" weight="bold">
                {title}
            </Text>

            <Text size="md" color="var(--text-muted-color)">
                {subtitle}
            </Text>
        </Flex>
    );
}