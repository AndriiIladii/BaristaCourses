import { Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
import SectionHeading from '../ui/SectionHeading';

const Location = () => {
  return (
    <section id="Location" className="py-16 md:py-24 scroll-mt-20 bg-white">
      <div className="container mx-auto px-4">
                <div data-aos="fade-up">
                    <SectionHeading 
                        label="Де ми знаходимось" 
                        titleStart="Чекаємо тебе" 
                        titleItalic="у Полтаві" 
                    />
                </div>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div data-aos="fade-up" data-aos-delay="150" className="space-y-6">
                        <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md bg-brown"><MapPin size={16} className="text-brown-200" /></div>
                        <div>
                            <h3 className="text-lg mb-1 text-brown">Адреса</h3>
                            <p className="text-sm leading-relaxed text-cream">Володимира Вʼязуна, 64Б <br />
                            Полтава, 36000</p>
                        </div>
                        </div>
                        <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md bg-brown"><Clock size={16} className="text-brown-200" /></div>
                        <div>
                            <h3 className="text-lg mb-1 text-brown">Графік роботи студії</h3>
                            <p className="text-sm leading-relaxed text-cream">8:00 до 19:00</p>
                        </div>
                        </div>
                        <div className="p-5 rounded-2xl text-sm leading-relaxed bg-surface text-brown-500 border-[1.5px] border-brown-50"><p>💡 Зручно розташовані в 10 хвилинах від центру міста. Поруч зупинка громадського транспорту</p></div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" className="rounded-2xl overflow-hidden shadow-xl">
                        <Image src="/location.jpg" alt="Студія Barista School" width={800} height={600} className="w-full h-72 md:h-96 object-cover" />
                    </div>
                </div>
      </div>
    </section>
  )
}

export default Location