import { StatsCard } from "@/components/ui/StatsCard/StatsCard";
import { Frown, Laugh, Meh } from "lucide-react";

export type HealthStatus = "success" | "warning" | "danger";

type Props = {
    status: HealthStatus;
    value: number;
};

type StatusConfig = {
    [key in HealthStatus]: {
        icon: React.ReactNode;
        iconVariant: "primary" | "secondary" | "success" | "danger" | "warning";
        variant: "default" | "success" | "danger" | "warning";
    }
}

const statusConfig: StatusConfig = {
    success: {
        icon: <Laugh size={24} color="var(--base-color)" />,
        iconVariant: "success",
        variant: "success",
    },
    warning: {
        icon: <Meh size={24} color="var(--base-color)" />,
        iconVariant: "warning",
        variant: "warning",
    },
    danger: {
        icon: <Frown size={24} color="var(--base-color)" />,
        iconVariant: "danger",
        variant: "danger",
    },
};

export function HealthCard({ status, value }: Props) {
    const config = statusConfig[status];
    
    return (
        <StatsCard
            icon={config.icon}
            iconVariant={config.iconVariant}
            variant={config.variant}
            title="Saúde financeira"
            value={value}
        />
    )
}
