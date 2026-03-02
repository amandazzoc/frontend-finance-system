import { Flex } from "@/components/ui/Flex";
import { Header } from "@/components/ui/Header";

export const Expenses = () => {
    return (
        <Flex direction="column" gap={33}>
            <Header
                title="Despesas"
                subtitle="Acompanhe e gerencie seus gastos diários."
            />
        </Flex>
    );
};
