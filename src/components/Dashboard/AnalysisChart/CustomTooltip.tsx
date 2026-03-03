import "./AnalysisChart.css"
import { Text } from "@/components/ui/Text";
import { formatCurrency } from "@/utils/formatCurrency";

export type ChartData = {
    month: string,
    entradas: number,
    saidas: number,
};

type PayloadItem = {
    name: string,
    value: number,
    payload: ChartData,
    color: string,
};

type Props = {
    active?: boolean,
    payload?: PayloadItem[],
    label?: string,
};

export function CustomTooltip({ active, payload, label }: Props) {
    if (!active || !payload || payload.length === 0) {
        return null;
    }

    return (
        <div className="custom-tooltip">
            <Text size="sm" weight={600} color="var(--base-color)">{label}</Text>
            {payload.map((entry, index) => (
                <Text size="sm" weight={400} color="var(--base-color)" key={index}>
                    {entry.name}: {formatCurrency(entry.value)}
                </Text>
            ))}
        </div>
    );
}