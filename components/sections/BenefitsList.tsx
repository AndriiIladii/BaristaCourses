import { benefits } from "@/data/benefits"
import type { Benefit } from "@/types"
import BenefitsCard from "../ui/BenefitsCard"
import SectionHeading from "../ui/SectionHeading"

const BenefitsList = () => {
    return (
        <section id="Benefits" className="py-16 md:py-24 bg-surface scroll-mt-20">
            <div className="container mx-auto px-4">
                <div data-aos="fade-up">
                    <SectionHeading 
                        label="Переваги навчання" 
                        titleStart="Що ти отримаєш" 
                        titleItalic="після курсу" 
                    />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    {benefits.map((benefit: Benefit, index: number) => (
                        <div key={benefit.id} data-aos="fade-up" data-aos-delay={index * 150} className="h-full">
                            <BenefitsCard benefit={benefit} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BenefitsList