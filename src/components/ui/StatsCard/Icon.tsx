import "./StatsCard.css"

type Props = {
    icon: React.ReactNode,
    variant: "primary" | "secondary" | "success" | "danger" | "warning",
}

export function Icon({ icon, variant }: Props) {
    return (
        <div className={`cardIcon ${variant}`}>
            {icon}
        </div>
    )
}