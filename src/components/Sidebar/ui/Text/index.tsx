import type { HTMLAttributes, ReactNode, CSSProperties, ElementType } from "react";

type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

const sizeMapping: Record<TextSize, string> = {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
};

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode;
    size?: TextSize;
    weight?: CSSProperties["fontWeight"];
    color?: CSSProperties["color"];
    align?: CSSProperties["textAlign"];
    type?: ElementType;
    htmlFor?: string;
}

export function Text({
    children,
    size = "md",
    weight = "normal",
    color = "inherit",
    align = "left",
    type: Component = "p",
    style,
    ...rest
}: TextProps) {
    const textStyles: CSSProperties = {
        fontSize: sizeMapping[size],
        fontWeight: weight,
        color: color,
        textAlign: align,
        margin: 0,
        ...style,
    };

    return (
        <Component style={textStyles} {...rest}>
            {children}
        </Component>
    );
}
