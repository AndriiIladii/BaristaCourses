import type { Course } from "@/data/courses"
import { CircleCheckBig, Clock, Users } from 'lucide-react';
import Link from 'next/link';

interface CourseCardProps {
    course: Course;
    index: number;
}


const CourseCard = ({ course, index }: CourseCardProps) => {
    const isTopChoice = course.id === 'basic-barista';

    return (
        <div className={`course-card relative flex flex-col rounded-3xl overflow-hidden ${isTopChoice ? 'bg-brown text-brown-100 shadow-xl' : 'bg-white'}`}>
            {isTopChoice && (
                <div className="absolute top-5 right-4 z-10">
                    <div className="flex items-center px-3 py-1.5 rounded-full text-xs font-medium tracking-wide bg-white/10 text-white border border-white/20 backdrop-blur-md">
                        Топ вибір
                    </div>
                </div>
            )}
            <div className="flex flex-col flex-1 p-6 gap-5">
                <div>
                    <span className={`text-[10px] uppercase tracking-[0.2em] ${isTopChoice ? 'text-brown-200' : 'text-brown-300'}`}>Курс {String(index + 1).padStart(2, '0')}</span>
                    <h3 className={`mt-1 text-h3 font-secondary --text-h3--line-height ${isTopChoice ? 'text-white' : 'text-brown'}`}>{course.courseName}</h3>
                    <p className={`text-xs mt-1 ${isTopChoice ? 'text-brown-200' : 'text-cream'}`}>{course.courseSubname}</p>
                </div>
                <div className="flex flex-col gap-1.5">
                    <p className={`flex items-center gap-2 text-xs ${isTopChoice ? 'text-brown-200' : 'text-cream'}`}><Clock size={16} className={isTopChoice ? "text-brown-300" : "text-brown-400"} />{course.duration}</p>
                    <p className={`flex items-center gap-2 text-xs ${isTopChoice ? 'text-brown-200' : 'text-cream'}`}><Users size={16} className={isTopChoice ? "text-brown-300" : "text-brown-400"} />{course.forWho}</p>
                </div>
                <hr className={`h-px border-t-0 text-transparent ${isTopChoice ? 'bg-white/10' : 'bg-brown-50'}`} />
                <div className="flex-1">
                    <ul className="space-y-2.5">
                        {course.abilities.map((ability: string, idx: number) => (
                            <li key={idx} className={`flex items-start gap-2.5 ${isTopChoice ? 'text-brown-100' : 'text-brown-500'}`}><CircleCheckBig size={16} className={isTopChoice ? "text-brown-300" : "text-brown-400"} /><p className="text-xs leading-snug">{ability}</p></li>
                        ))}
                    </ul>
                </div>
                <div className={`rounded-2xl p-4 course-price ${isTopChoice ? 'bg-white/5' : ''}`}>
                    <div className="flex items-baseline gap-1 mb-3">
                        <span className={`font-secondary font-bold text-[2rem] tracking-[-0.02em] ${isTopChoice ? 'text-white' : 'text-brown'}`}>{course.price}</span>
                        <span className={`text-base ${isTopChoice ? 'text-brown-300' : 'text-brown-300'}`}>₴</span>
                    </div>
                    <Link href={`?course=${course.id}#lead-form`} className={`flex items-center justify-center w-full py-2.5 rounded-full text-sm cursor-pointer normal-case transition-all duration-300 ease-out hover:scale-[1.02] ${isTopChoice ? 'bg-white text-brown hover:bg-brown-50' : 'bg-brown text-brown-100 hover:bg-brown-600'}`}>
                        Обрати курс
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CourseCard;