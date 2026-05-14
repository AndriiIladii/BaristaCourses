"use client";

import { Clock, MapPin, Phone, Send } from 'lucide-react';
import { courses } from "@/data/courses"
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, type FormValues } from '../schema';

import { sendLeadToTelegram } from '@/actions/telegram';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const LeadFormContent = () => {
    const searchParams = useSearchParams();
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { errors, isSubmitting }
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            courseId: "",
            contactMethod: "telegram",
            contactValue: ""
        }
    });

    const contactMethod = watch("contactMethod");
    const contactValue = watch("contactValue");

    useEffect(() => {
        const course = searchParams.get('course');
        if (course) {
            setValue('courseId', course as FormValues['courseId']);
        }
    }, [searchParams, setValue]);

    useEffect(() => {
        if (contactMethod === "telegram" || contactMethod === "instagram") {
            if (!contactValue || contactValue.startsWith("+380")) {
                setValue("contactValue", "@");
            }
        } else if (contactMethod === "phone") {
            if (!contactValue || contactValue === "@") {
                setValue("contactValue", "+380");
            }
        }
    }, [contactMethod, setValue]);

    const onSubmit = async (data: FormValues) => {
        try {
            const result = await sendLeadToTelegram(data);
            if (result.success) {
                setIsSuccess(true)
                reset();
            } else {
                alert("Сталася помилка при відправці. Спробуйте пізніше.");
            }
        } catch (error) {
            alert("Сталася помилка при відправці. Спробуйте пізніше.");
        }
    };


    return (
        <section id="lead-form" className="py-24 bg-surface scroll-mt-10">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-10 bg-cream"></div>
                        <span className="text-xs uppercase tracking-[0.18em] text-cream">Зв'язатись з нами</span>
                    </div>
                    <h2 className="leading-tight text-h2 font-secondary tracking-[-0.02em]">Залишились питання?
                        <br /><span className="text-cream italic">Тицяй — ми відповімо ❤️</span></h2>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-5">
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
                    <div className='md:col-span-3 p-8 md:p-12 relative'>
                        <style>{`
                            @keyframes smoothEnter {
                                from { opacity: 0; transform: translateY(10px) scale(0.98); }
                                to { opacity: 1; transform: translateY(0) scale(1); }
                            }
                            .animate-smooth-enter {
                                animation: smoothEnter 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                            }
                        `}</style>
                        {isSuccess ? (
                            <div className="text-center py-12 animate-smooth-enter">
                                <div className="w-16 h-16 bg-[#eef5e6] text-[#6b8e23] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-secondary text-brown mb-2">Заявка прийнята!</h3>
                                <p className="text-brown-400 mb-8">Дякуємо за довіру. Ми зв'яжемося з тобою найближчим часом для уточнення деталей.</p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="text-sm uppercase tracking-wider text-brown-500 hover:text-brown transition-colors"
                                >
                                    Відправити ще одну
                                </button>
                            </div>
                        ) : (
                            <form className="flex flex-col gap-6 animate-smooth-enter" onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label className='block text-xs uppercase tracking-wider mb-2 text-brown-400'>Ім'я</label>
                                    <input type="text" {...register("name")} placeholder='Як тебе звати?' className="w-full px-4 py-[13px] rounded-xl border-[1.5px] border-brown-50 outline-none bg-white text-brown text-[0.95rem] transition-colors duration-200 font-primary focus:border-brown-300" />
                                    {errors.name && (
                                        <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                                    )}
                                </div>
                                <div>
                                    <label className='block text-xs uppercase tracking-wider mb-2 text-brown-400'>Виберіть курс</label>
                                    <select {...register("courseId")} className="w-full pl-4 pr-10 py-[13px] rounded-xl border-[1.5px] border-brown-50 outline-none bg-white text-brown text-[0.95rem] transition-colors duration-200 font-primary appearance-none bg-no-repeat focus:border-brown-300 bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238d6e63%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[position:right_1rem_center] bg-[length:1.2em_1.2em]">
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
                                    <label className='block text-xs uppercase tracking-wider mb-2 text-brown-400'>Як тобою зв'язатись?</label>
                                    <select {...register("contactMethod")} className="w-full pl-4 pr-10 py-[13px] rounded-xl border-[1.5px] border-brown-50 outline-none bg-white text-brown text-[0.95rem] transition-colors duration-200 font-primary appearance-none bg-no-repeat focus:border-brown-300 bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238d6e63%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[position:right_1rem_center] bg-[length:1.2em_1.2em]">
                                        <option value="" disabled className='hidden'>Оберіть спосіб зв'язку</option>
                                        <option className='text-brown-400' value="phone">Телефон</option>
                                        <option className='text-brown-400' value="telegram">Телеграм</option>
                                        <option className='text-brown-400' value="instagram">Інстаграм</option>

                                    </select>
                                </div>
                                <div>
                                    <label className='block text-xs uppercase tracking-wider mb-2 text-brown-400'>Telegram / Instagram / Телефон</label>
                                    <input type="text" {...register("contactValue")} placeholder="Вкажи контакт" className="w-full px-4 py-[13px] rounded-xl border-[1.5px] border-brown-50 outline-none bg-white text-brown text-[0.95rem] transition-colors duration-200 font-primary focus:border-brown-300" />
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