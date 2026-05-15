
import { NAV_LINKS } from "@/constants/links"
import { SOCIAL_LINKS } from "@/constants/socials"
import { Coffee } from 'lucide-react';

const Footer = () => {
    return (
        <div className="relative overflow-hidden bg-brown">
            <div className="absolute -right-16 -bottom-10 select-none pointer-events-none font-secondary text-[22rem] font-black leading-none text-[rgba(255, 255, 255, 0.024)]"></div>
            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="grid md:grid-cols-3 gap-12 mb-6">
                    <div>
                        <div className="flex items-center gap-2.5 mb-4">
                            <Coffee className="text-brown-100" />
                            <span className='text-brown-100 font-secondary text-[1.05rem] tracking-[-0.01em]'>Barista School</span>
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs text-brown-500">Школа бариста у Полтаві. Навчаємо з любовʼю до кави та людей.</p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-[0.18em] mb-5 text-brown-500">Навігація</p>
                        <ul className="flex flex-col gap-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.text}><a className="text-sm transition-colors text-brown-400 link" href={link.href}>{link.text}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-[0.18em] mb-5 text-brown-500">Соціальні мережі</p>
                        <div className="flex gap-3 mb-6">
                            {SOCIAL_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-white/5 border border-brown-200/10 text-brown-400 hover:bg-white/10 hover:-translate-y-1 hover:text-brown-100"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs border-t border-[rgba(188, 170, 164, 0.1)] text-brown-800">
                    <span>© 2026 Barista School Poltava. Всі права захищені.</span>
                    <span>Made with ❤️ and ☕ in Poltava</span>
                </div>
            </div>

        </div>
    )
}


export default Footer;