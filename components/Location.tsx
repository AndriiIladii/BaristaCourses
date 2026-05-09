import { Clock, MapPin } from 'lucide-react';
import Image from 'next/image';

const Location = () => {
  return (
    <section id="Location" className="py-24 scroll-mt-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-cream"></div>
            <span className="text-xs uppercase tracking-[0.18em] text-cream">Де ми знаходимось</span>
          </div>
          <h2 className="leading-tight text-h2 font-secondary tracking-[-0.02em]">Чекаємо тебе
            <br /><span className="text-cream italic">у Полтаві</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md bg-brown"><MapPin size={16} className="text-brown-200" /></div>
              <div>
                <h3 className="text-lg mb-1 text-brown">Адреса</h3>
                <p className="text-sm leading-relaxed text-cream">вул. Соборності, 42 <br />
                  Полтава, 36000</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md bg-brown"><Clock size={16} className="text-brown-200" /></div>
              <div>
                <h3 className="text-lg mb-1 text-brown">Графік роботи студії</h3>
                <p className="text-sm leading-relaxed text-cream">Пн–Пт: 10:00 – 20:00 <br />
                  Сб–Нд: 11:00 – 18:00</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl text-sm leading-relaxed bg-surface text-brown-500 border-[1.5px] border-brown-50"><p>💡 Зручно розташовані в 10 хвилинах від центру міста. Поруч зупинка громадського транспорту</p></div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/location.jpg`} alt="Студія Barista School" width={800} height={600} className="w-full h-72 md:h-96 object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location