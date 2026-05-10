import Image from "next/image";

const Gallery = () => {
    return (
        <section id="Gallery" className="py-24 scroll-mt-20 bg-surface">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-10 bg-cream"></div>
                            <span className="text-xs uppercase tracking-[0.18em] text-cream">Роботи студентів</span>
                        </div>
                        <h2 className="leading-tight text-h2 font-secondary tracking-[-0.02em]">Ось що роблять<br /><span className="text-cream italic">після нашого курсу</span></h2>
                    </div>
                    <p className="text-sm max-w-xs leading-relaxed md:text-right text-cream">Кожна робота — результат навчання.<br />Кожна чашка — маленька перемога.</p>
                </div>
                <div className="gallery-grid">
                    <div className="photo-card md:[grid-row:1/3] grid-auto"><Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/gallery/gallery-1.png`} alt="Latte art — серце" width={800} height={800} className="photo-card-img w-full h-full object-cover" />
                        <div className="photo-card-overlay flex items-end p-[1.25rem] absolute opacity-0 inset-0">
                            <span className="text-sm px-3 py-1 rounded-full photo-card-span">Heart Pour</span>
                        </div>
                    </div>
                    <div className="photo-card"><Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/gallery/gallery-2.png`} alt="Бариста наливає молоко" width={800} height={800} className="photo-card-img w-full h-full object-cover" />
                        <div className="photo-card-overlay flex items-end p-[1.25rem] absolute opacity-0 inset-0">
                            <span className="text-sm px-3 py-1 rounded-full photo-card-span">Milk Pour</span>
                        </div></div>
                    <div className="photo-card"><Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/gallery/gallery-3.png`} alt="Latte art — тюльпан" width={800} height={800} className="photo-card-img w-full h-full object-cover" />
                        <div className="photo-card-overlay flex items-end p-[1.25rem] absolute opacity-0 inset-0">
                            <span className="text-sm px-3 py-1 rounded-full photo-card-span">Tulip</span>
                        </div></div>
                    <div className="photo-card md:[grid-column:2/4] col-auto"><Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/gallery/gallery-4.png`} alt="Кавові зерна спешелті" width={1200} height={800} className="photo-card-img w-full h-full object-cover" />
                        <div className="photo-card-overlay flex items-end p-[1.25rem] absolute opacity-0 inset-0">
                            <span className="text-sm px-3 py-1 rounded-full photo-card-span">Coffee Beans</span>
                        </div></div>
                </div>
            </div>
        </section>
    )
}

export default Gallery