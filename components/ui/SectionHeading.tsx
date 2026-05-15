import React from "react";

interface SectionHeadingProps {
    label: string;
    titleStart: string;
    titleItalic: string;
    align?: "left" | "center";
    className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
    label,
    titleStart,
    titleItalic,
    align = "left",
    className = ""
}) => {
    return (
        <div className={`mb-12 md:mb-16 ${align === "center" ? "flex flex-col items-center text-center" : "max-w-xl"} ${className}`}>
            <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}>
                <div className="h-px w-10 bg-cream"></div>
                <span className="text-xs uppercase tracking-[0.18em] text-cream">{label}</span>
                {align === "center" && <div className="h-px w-10 bg-cream"></div>}
            </div>
            <h2 className="leading-tight text-h2 font-secondary tracking-[-0.02em]">
                {titleStart}
                <br />
                <span className="text-cream italic">{titleItalic}</span>
            </h2>
        </div>
    );
};

export default SectionHeading;
