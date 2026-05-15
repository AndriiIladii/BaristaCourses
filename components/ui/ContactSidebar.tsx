import { Clock, MapPin, Phone } from 'lucide-react';

const ContactSidebar = () => {
    return (
        <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden bg-brown">
            <div className="absolute -bottom-8 -right-6 select-none pointer-events-none font-secondary text-[10rem] font-black text-[rgba(255,255,255,0.04)] leading-none">☕</div>
            <div>
                <p className="text-3xl mb-2 font-secondary italic text-brown-100 tracking-[-0.02em]">Barista School</p>
                <p className="text-sm text-brown-400">Полтава, Україна</p>
                <div className="mt-10 flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                        <div className='w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-brown-200 bg-white/5'><MapPin size={16} className="text-brown-200" /></div>
                        <div>
                            <p className='text-xs uppercase tracking-wider mb-1 text-brown-500'>Адреса</p>
                            <p className='text-sm leading-relaxed text-brown-200'>вул. Соборності, 42 <br />Полтава, 36000</p>
                        </div>

                    </div>
                    <div className="flex items-start gap-4">
                        <div className='w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-brown-200 bg-white/5'><Clock size={16} className="text-brown-200" /></div>
                        <div>
                            <p className='text-xs uppercase tracking-wider mb-1 text-brown-500'>Графік</p>
                            <p className='text-sm leading-relaxed text-brown-200'>8:00 до 19:00</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className='w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-brown-200 bg-white/5'><Phone size={16} className="text-brown-200" /></div>
                        <div>
                            <p className='text-xs uppercase tracking-wider mb-1 text-brown-500'>Контакт</p>
                            <a href='tel:+380990116084' className='text-sm leading-relaxed text-brown-200'>+380990116084</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSidebar