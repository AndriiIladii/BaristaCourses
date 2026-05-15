

const HeroVideo = () => {
    return (
        <div className="md:hidden h-[60vh] relative overflow-hidden bg-brown">
            <video src="/video.webm" poster="/poster.jpg" preload="none" aria-hidden="true" tabIndex={-1} autoPlay loop muted playsInline className="w-full h-full object-cover object-center opacity-85" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #18101000 50%, rgb(0 0 0 / 80%) 100%)" }}></div>
        </div>
    )
}

export default HeroVideo