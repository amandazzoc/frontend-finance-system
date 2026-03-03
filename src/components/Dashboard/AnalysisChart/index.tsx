import { Card } from "@/components/ui/Card";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { CustomTooltip, type ChartData } from "./CustomTooltip";
import { Flex } from "@/components/ui/Flex";

const financialMockData: ChartData[] = [
    { month: "Janeiro 2026", entradas: 36000, saidas: 26000 },
    { month: "Fevereiro 2026", entradas: 27000, saidas: 34000 },
    { month: "Março 2026", entradas: 30000, saidas: 22000 },
    { month: "Abril 2026", entradas: 36000, saidas: 26000 },
    { month: "Maio 2026", entradas: 41000, saidas: 34000 },
    { month: "Junho 2026", entradas: 23000, saidas: 28000 },
    { month: "Julho 2026", entradas: 23000, saidas: 28000 },
    { month: "Agosto 2026", entradas: 23000, saidas: 28000 },
];

function CustomLegend() {
    return(
        <Flex justify="center" gap={6}>

        </Flex>
    )
}

export function AnalysisChart() {
    return (
        <Card title="Análise">
            <div style={{ width: "100%", height: 350 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={financialMockData}
                        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                        barGap={8}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke="#E5E7EB"
                        />

                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#9CA3AF", fontSize: 12 }}
                            dy={10}
                        />

                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#9CA3AF", fontSize: 12 }}
                            tickFormatter={(value) => `${value / 1000}k`} // Formata 40000 para 40k
                        />

                        <Tooltip cursor={{ fill: "transparent"}} content={<CustomTooltip />} />

                        <Legend
                            verticalAlign="top"
                            align="right"
                            iconType="circle"
                            wrapperStyle={{ paddingBottom: "20px" }}
                        />

                        <Bar
                            name="Entradas"
                            dataKey="entradas"
                            fill="var(--primary-color)"
                            radius={[4, 4, 0, 0]}
                            barSize={8}
                        />

                        <Bar
                            name="Saídas"
                            dataKey="saidas"
                            fill="var(--secondary-color)"
                            radius={[4, 4, 0, 0]}
                            barSize={8}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}