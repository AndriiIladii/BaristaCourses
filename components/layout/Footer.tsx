
import { links } from "@/data/links"
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
                        <p className="text-sm leading-relaxed max-w-xs text-brown-500">Школа бариста у Полтаві від Діани Рохманько. Навчаємо з любов'ю до кави та людей.</p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-[0.18em] mb-5 text-brown-500">Навігація</p>
                        <ul className="flex flex-col gap-3">
                            {links.map((link) => (
                                <li key={link.text}><a className="text-sm transition-colors text-brown-400 link" href={link.href}>{link.text}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-[0.18em] mb-5 text-brown-500">Соціальні мережі</p>
                        <div className="flex gap-3 mb-6">
                            <a href="https://www.instagram.com/diana_rokhmanko?igsh=MTdienB6cHBjZTNncg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-white/5 border border-brown-200/10 text-brown-400 hover:bg-white/10 hover:-translate-y-1 hover:text-brown-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
                            <a href="https://t.me/diana_rokhmanko" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-white/5 border border-brown-200/10 text-brown-400 hover:bg-white/10 hover:-translate-y-1 hover:text-brown-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send w-4 h-4"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg></a>
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

export default Footer