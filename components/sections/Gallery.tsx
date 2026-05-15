import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";

const Gallery = () => {
    return (
        <section id="Gallery" className="py-16 md:py-24 scroll-mt-20 bg-white">
            <div className="container mx-auto px-4">
                <div data-aos="fade-up">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <SectionHeading 
                            label="Роботи студентів" 
                            titleStart="Ось що роблять" 
                            titleItalic="після нашого курсу" 
                            className="!mb-0"
                        />
                        <p className="text-sm max-w-xs leading-relaxed md:text-right text-cream">Кожна робота — результат навчання.<br />Кожна чашка — маленька перемога.</p>
                    </div>
                </div>
                <div className="gallery-grid">
                    <div data-aos="fade-up" data-aos-delay="150" className="photo-card md:[grid-row:1/3] grid-auto">
                        <Image src="/gallery/gallery-2.jpg" alt="Пролив кави" width={800} height={800} sizes="(max-width: 768px) 100vw, 50vw" className="photo-card-img w-full h-full object-cover" />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" className="photo-card">
                        <Image src="/gallery/gallery-1.jpg" alt="Темпер та кава" width={800} height={800} sizes="(max-width: 768px) 100vw, 50vw" className="photo-card-img w-full h-full object-cover" />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="450" className="photo-card">
                        <Image src="/gallery/gallery-3.jpg" alt="Latte art — тюльпан" width={800} height={800} sizes="(max-width: 768px) 100vw, 50vw" className="photo-card-img w-full h-full object-cover" />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600" className="photo-card md:[grid-column:2/4] col-auto">
                        <Image src="/gallery/gallery-4.jpg" alt="Змелена кава" sizes="(max-width: 768px) 100vw, 66vw" width={1200} height={800} className="photo-card-img w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery