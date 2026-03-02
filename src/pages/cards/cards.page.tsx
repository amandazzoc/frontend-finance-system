import { Flex } from "@/components/ui/Flex";
import { Header } from "@/components/ui/Header";

export const Cards = () => {
    return (
        <Flex direction="column" gap={33}>
            <Header
                title="Cartões"
                subtitle="Gerencie limites, acompanhe gastos e visualize extratos."
            />
        </Flex>
    );
};
