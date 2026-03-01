import type { HTMLAttributes, ReactNode, CSSProperties } from "react";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    direction?: CSSProperties["flexDirection"];
    justify?: CSSProperties["justifyContent"];
    align?: CSSProperties["alignItems"];
    wrap?: CSSProperties["flexWrap"];
    gap?: CSSProperties["gap"];
    flex?: CSSProperties["flex"];
}

export function Flex({
    children,
    direction = "row",
    justify = "flex-start",
    align = "stretch",
    wrap = "nowrap",
    gap,
    flex,
    style,
    ...rest
}: FlexProps) {
    const flexStyles: CSSProperties = {
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        gap: gap,
        flex: flex,
        ...style,
    };

    return (
        <div style={flexStyles} {...rest}>
            {children}
        </div>
    );
}
