import { AnalysisChart } from "@/components/Dashboard/AnalysisChart";
import { HealthCard } from "@/components/Dashboard/HealthCard";
import { Flex } from "@/components/ui/Flex";
import { Header } from "@/components/ui/Header";
import { StatsCard } from "@/components/ui/StatsCard/StatsCard";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

export const Dashboard = () => {
    return (
        <Flex direction="column" gap={33}>
            <Header
                title="Bem-vindo, Amanda! 👋​"
                subtitle="Saiba como está suas finanças aqui."
            />

            <Flex justify="space-between" gap={24}>
                <StatsCard
                    icon={<ArrowDownLeft size={24} color="var(--base-color)" />}
                    iconVariant="secondary"
                    title="Total de receita"
                    value={632000}
                />

                <StatsCard
                    icon={<ArrowUpRight size={24} color="var(--base-color)" />}
                    title="Total de despesas"
                    value={632000}
                />

                <HealthCard status="warning" value={85} />
            </Flex>

            <Flex>
                <AnalysisChart />
            </Flex>
        </Flex>
    );
};