

const Header = () => {
    return (
        <div id="Header" className="flex flex-col md:flex-row min-h-screen">
            <div className="md:hidden h-[60vh] relative overflow-hidden bg-brown">
                <video src="/video.MP4" autoPlay loop muted playsInline className="w-full h-full object-cover object-center opacity-85" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #18101000 50%, rgb(0 0 0 / 80%) 100%);" }}></div>
            </div>
            <div className="flex-1 flex flex-col justify-center px-6 md:px-14 lg:px-20 pt-10 md:pt-36 pb-14 md:pb-20 bg-[#faf9f7]">
                <div className="max-w-xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-10 bg-cream"></div>
                            <span className="text-xs uppercase tracking-[0.18em] text-cream">Barista School Poltava</span>
                        </div>
                    </div>
                    <h1 className="mb-6 leading-none title">Стань<br /> бариста,
                        <br /><span className="text-cream italic">якого&nbsp;всі&nbsp;люблять</span></h1>
                    <p className="mb-10 text-lg leading-relaxed text-[#8d6e63]">Курс для тих, хто втомився казати: «Я просто підробляю в кав'ярні». Навчимо розуміти каву, зварити ідеальний еспресо і малювати лате-арт.</p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-14">
                        <a href="#Form" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full cursor-pointer text-base bg-brown text-[#d7ccc8] transform-none button-first">Записатись на курс <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
                        <a href="#Courses" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full cursor-pointer text-base bg-transparent text-[rgb(109,76,65)] cursor-pointer button-second">Переглянути тарифи</a>
                    </div>
                    <div className="flex justify-center md:justify-start gap-8  pt-8 border-t border-[#e8e0de]">
                        <div>
                            <p className="text-2xl font-secondary text-brown font-bold">50+</p>
                            <p className="text-xs mt-0.5 uppercase tracking-wider text-[#a1887f]">Студентів</p>
                        </div>
                        <div>
                            <p className="text-2xl font-secondary text-brown font-bold">4</p>
                            <p className="text-xs mt-0.5 uppercase tracking-wider text-[#a1887f]">Курси</p>
                        </div>
                        <div>
                            <p className="text-2xl font-secondary text-brown font-bold">100%</p>
                            <p className="text-xs mt-0.5 uppercase tracking-wider text-[#a1887f]">Практика</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block relative bg-brown w-[44%]">
                <video src="/video.MP4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-75" />
                <div className="absolute inset-0 header-image"></div>
                <div className="absolute top-28 left-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm header-text">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        <p>Відкритий набір</p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 header-subtext">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="h-px flex-1 bg-[rgba(188,170,164,0.3)]"></div>
                        <span className="text-xs uppercase tracking-[0.15em] text-[#a1887f]">Сертифікат після курсу</span>
                        <div className="h-px flex-1 bg-[rgba(188,170,164,0.3)]"></div>
                    </div>
                    <p className="text-sm leading-relaxed text-[#bcaaa4]">Навчись малювати лате-арт, розуміти зерно та будувати кар'єру бариста з нуля — у Полтаві.</p>
                </div>
            </div>
        </div>
    )
}

export default Header