import type { Benefit } from "@/types"

interface BenefitCardProps {
    benefit: Benefit;
    index: number;
}

const BenefitsCard = ({ benefit, index }: BenefitCardProps) => {
    const Icon = benefit.icon;
    return (
        <div className="relative overflow-hidden rounded-2xl p-8 group border-[1.5] border-brown-50 bg-white benefit-card">
            <span className="absolute -top-4 right-4 select-none pointer-events-none font-secondary text-[#e8e0de] text-[9rem] font-black text-brown-50 leading-[1] benefit-span">{String(index + 1).padStart(2, '0')}</span>
            <div className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-brown">
                <Icon className="text-brown-100 w-6 h-6" />
            </div>
            <h3 className="relative z-10 mb-3 text-[1.2rem] text-brown font-secondary tracking-[-0.01em]">{benefit.BenefitName}</h3>
            <p className="relative z-10 leading-relaxed text-sm text-brown-400">{benefit.BenefitInfo}</p>
        </div>
    )
}

export default BenefitsCard