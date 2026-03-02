import { Flex } from "@/components/ui/Flex";
import { Header } from "@/components/ui/Header";

export const Reports = () => {
    return (
        <Flex direction="column" gap={33}>
            <Header
                title="Relatórios"
                subtitle="Analise seu desempenho e visualize sua evolução financeira."
            />
        </Flex>
    );
};
