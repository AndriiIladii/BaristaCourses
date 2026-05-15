

const HeroStats = () => {
    return (
        <div className="flex justify-center md:justify-start gap-8  pt-8 border-t border-brown-50">
            <div>
                <p className="text-2xl font-secondary text-brown font-bold">50+</p>
                <p className="text-xs mt-0.5 uppercase tracking-wider text-brown-300">Студентів</p>
            </div>
            <div>
                <p className="text-2xl font-secondary text-brown font-bold">4</p>
                <p className="text-xs mt-0.5 uppercase tracking-wider text-brown-300">Курси</p>
            </div>
            <div>
                <p className="text-2xl font-secondary text-brown font-bold">100%</p>
                <p className="text-xs mt-0.5 uppercase tracking-wider text-brown-300">Практика</p>
            </div>
        </div>
    )
}

export default HeroStats