

const Location = () => {
  return (
    <section id="Location" className="py-24 scroll-mt-20 bg-[#faf9f7]">
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
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md bg-brown"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-5 h-5 text-[#bcaaa4]"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
              <div>
                <h3 className="text-lg mb-1 text-brown">Адреса</h3>
                <p className="text-sm leading-relaxed text-cream">вул. Соборності, 42 <br />
                  Полтава, 36000</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md bg-brown"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-5 h-5 text-[#bcaaa4]"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
              <div>
                <h3 className="text-lg mb-1 text-brown">Графік роботи студії</h3>
                <p className="text-sm leading-relaxed text-cream">Пн–Пт: 10:00 – 20:00 <br />
                  Сб–Нд: 11:00 – 18:00</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl text-sm leading-relaxed bg-[#faf9f7] text-[#6d4c41] border-[1.5] border-[#e8e0de]"><p>💡 Зручно розташовані в 10 хвилинах від центру міста. Поруч зупинка громадського транспорту</p></div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="/BaristaCourses/location.jpg" alt="Студія Barista School" className="w-full h-72 md:h-96 object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location