import { ArrowRight } from 'lucide-react';
import HeroVideo from '../ui/HeroVideo';
import HeroStats from '../ui/HeroStats';

const Header = () => {
    return (
        <section id="Header" className="flex flex-col md:flex-row min-h-screen">
            <HeroVideo />
            <div className="flex-1 flex flex-col justify-center px-6 md:px-14 lg:px-20 pt-10 md:pt-36 pb-14 md:pb-20 bg-surface">
                <div className="max-w-xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-10 bg-cream"></div>
                            <span className="text-xs uppercase tracking-[0.18em] text-cream">Barista School Poltava</span>
                        </div>
                    </div>
                    <h1 className="mb-6 leading-none title">Стань<br /> бариста,
                        <br /><span className="text-cream italic">якого&nbsp;всі&nbsp;люблять</span></h1>
                    <p className="mb-10 text-lg leading-relaxed text-brown-400">Курс для тих, хто втомився казати: «Я просто підробляю в кав'ярні». Навчимо розуміти каву, зварити ідеальний еспресо і малювати лате-арт.</p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-14">
                        <a href="#lead-form" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full cursor-pointer text-base bg-brown text-brown-100 transform-none button-first">Записатись на курс <ArrowRight /></a>
                        <a href="#Courses" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full cursor-pointer text-base bg-transparent text-brown-500 button-second">Переглянути тарифи</a>
                    </div>
                    <HeroStats />
                </div>
            </div>
            <div className="hidden md:block relative bg-brown w-[44%]">
                <video src="/video.webm" poster="/poster.jpg" preload="auto" aria-hidden="true" tabIndex={-1} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-75" />
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
                        <span className="text-xs uppercase tracking-[0.15em] text-brown-300">Сертифікат після курсу</span>
                        <div className="h-px flex-1 bg-[rgba(188,170,164,0.3)]"></div>
                    </div>
                    <p className="text-sm leading-relaxed text-brown-200">Навчись малювати лате-арт, розуміти зерно та будувати кар'єру бариста з нуля — у Полтаві.</p>
                </div>
            </div>
        </section>
    )
}

export default Header