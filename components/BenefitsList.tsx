import { benefits } from "@/data/benefits"
import type { Benefit } from "@/data/benefits"
import BenefitsCard from "./BenefitsCard"

const BenefitsList = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="mb-16 max-w-xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-10 bg-cream"></div>
                        <span className="text-xs uppercase tracking-[0.18em] text-cream">Переваги навчання</span>
                    </div>
                    <h2 className="leading-tight text-h2 font-secondary tracking-[-0.02em]">Що ти отримаєш
                        <br /><span className="text-cream italic">після курсу</span></h2>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    {benefits.map((benefit: Benefit, index: number) => (
                        <BenefitsCard key={benefit.id} benefit={benefit} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BenefitsList