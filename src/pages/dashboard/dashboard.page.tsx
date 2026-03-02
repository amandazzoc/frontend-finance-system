import { Flex } from "@/components/ui/Flex";
import { Header } from "@/components/ui/Header";

export const Dashboard = () => {
    return (
        <Flex direction="column" gap={33}>
            <Header
                title="Bem-vindo, Amanda! 👋​"
                subtitle="Saiba como está suas finanças aqui"
            />
        </Flex>
    );
};