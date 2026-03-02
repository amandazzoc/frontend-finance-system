import { Flex } from "@/components/ui/Flex";
import { Header } from "@/components/ui/Header";

export const Debts = () => {
    return (
        <Flex direction="column" gap={33}>
            <Header
                title="Dívidas"
                subtitle="Acompanhe o progresso dos seus pagamentos e gerencie seus passivos."
            />
        </Flex>
    );
};
