
const BASE_ITEMS = ["LATTE ART", "ESPRESSO", "COLD BREW", "БАРИСТА", "LATTE ART FLOW", "COLD COFFEE LAB", "CONTENT FOR COFFEE"]

const Scroll = () => {
    return (
        <div className="overflow-hidden py-4 select-none border-t border-b border-[rgb(78,52,46)] bg-brown">
            <div className="marquee-track">
                {Array.from({ length: 3 }, () => BASE_ITEMS).flat().map((item, i) => (
                    <p key={i} className="flex items-center gap-0 flex-shrink-0">
                        <span className="text-xs uppercase tracking-[0.2em] px-6 text-[rgb(141,110,99)] whitespace-nowrap">{item}</span>
                        <span className="text-[rgb(78,52,46)] text-[1.1rem]">✦</span>
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Scroll