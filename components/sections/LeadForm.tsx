"use client";

import { Send } from 'lucide-react';
import { courses } from "@/data/courses"
import { Suspense } from 'react';
import ContactSidebar from '../ui/ContactSidebar';
import SuccessMessage from '../ui/SuccessMessage';
import useLeadForm from '@/hooks/useLeadForm';
import SectionHeading from '../ui/SectionHeading';

const LeadFormContent = () => {

    const { register, handleSubmit, onSubmit, errors, isSubmitting, isSuccess, setIsSuccess } = useLeadForm();


    return (
        <section id="lead-form" className="py-16 md:py-24 bg-surface scroll-mt-10">
            <div className="container mx-auto px-4">
                <div data-aos="fade-up">
                    <SectionHeading 
                        label="Зв'язатись з нами" 
                        titleStart="Залишились питання?" 
                        titleItalic="Тицяй — ми відповімо ❤️" 
                    />
                </div>
                <div data-aos="fade-up" data-aos-delay="150">
                    <div className="rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-5">
                        <ContactSidebar />
                        <div className='md:col-span-3 p-8 md:p-12 relative'>
                            {isSuccess ? (
                                <SuccessMessage onReset={() => setIsSuccess(false)} />
                            ) : (
                                <form className="flex flex-col gap-6 animate-smooth-enter" onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <label htmlFor="name" className='block text-xs uppercase tracking-wider mb-2 text-brown-400'>Ім'я</label>
                                        <input id="name" type="text" {...register("name")} placeholder='Як тебе звати?' className="w-full px-4 py-[13px] rounded-xl border-[1.5px] border-brown-50 outline-none bg-white text-brown text-sm transition-colors duration-200 font-primary focus:border-brown-300" />
                                        {errors.name && (
                                            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="courseId" className='block text-xs uppercase tracking-wider mb-2 text-brown-400'>Виберіть курс</label>
                                        <select id="courseId" {...register("courseId")} className="w-full pl-4 pr-10 py-[13px] rounded-xl border-[1.5px] border-brown-50 outline-none bg-white text-brown text-sm transition-colors duration-200 font-primary appearance-none bg-no-repeat focus:border-brown-300 bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238d6e63%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[position:right_1rem_center] bg-[length:1.2em_1.2em]">
                                            <option value="" disabled className='hidden'>Оберіть курс</option>
                                            {courses.map((course) => (
                                                <option key={course.id} className='text-brown-400' value={course.id}>
                                                    {course.courseName}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.courseId && (
                                            <p className="text-red-500 text-xs mt-1">{errors.courseId.message}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="contactMethod" className='block text-xs uppercase tracking-wider mb-2 text-brown-400'>Як тобою зв'язатись?</label>
                                        <select id="contactMethod" {...register("contactMethod")} className="w-full pl-4 pr-10 py-[13px] rounded-xl border-[1.5px] border-brown-50 outline-none bg-white text-brown text-sm transition-colors duration-200 font-primary appearance-none bg-no-repeat focus:border-brown-300 bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238d6e63%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[position:right_1rem_center] bg-[length:1.2em_1.2em]">
                                            <option value="" disabled className='hidden'>Оберіть спосіб зв'язку</option>
                                            <option className='text-brown-400' value="phone">Телефон</option>
                                            <option className='text-brown-400' value="telegram">Телеграм</option>
                                            <option className='text-brown-400' value="instagram">Інстаграм</option>

                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="contactValue" className='block text-xs uppercase tracking-wider mb-2 text-brown-400'>Telegram / Instagram / Телефон</label>
                                        <input id="contactValue" type="text" {...register("contactValue")} placeholder="Вкажи контакт" className="w-full px-4 py-[13px] rounded-xl border-[1.5px] border-brown-50 outline-none bg-white text-brown text-sm transition-colors duration-200 font-primary focus:border-brown-300" />
                                        {errors.contactValue && (
                                            <p className="text-red-500 text-xs mt-1">{errors.contactValue.message}</p>
                                        )}
                                    </div>
                                    <button
                                        disabled={isSubmitting}
                                        className='flex items-center justify-center gap-3 py-4 rounded-2xl cursor-pointer text-sm mt-1 bg-brown text-[#D7CCD2] disabled:opacity-80 disabled:cursor-not-allowed transition-all duration-300 hover:bg-brown-600'
                                        type='submit'
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-[#D7CCD2]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Відправляємо...
                                            </>
                                        ) : (
                                            <>
                                                <Send className='lucide lucide-send w-4 h-4' /> Відправити заявку
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const LeadForm = () => {
    return (
        <Suspense fallback={<div className="py-24 text-center text-brown bg-surface">Завантаження форми...</div>}>
            <LeadFormContent />
        </Suspense>
    );
}

export default LeadForm;