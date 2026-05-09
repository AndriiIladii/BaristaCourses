
import type { Course } from "@/data/courses"
import { CircleCheckBig, Clock, Users } from 'lucide-react';


interface CourseCardProps {
    course: Course;
    index: number;
}


const CourseCard = ({ course, index }: CourseCardProps) => {
    return (
        <div className="course-card relative flex flex-col rounded-3xl overflow-hidden">
            <div className="flex flex-col flex-1 p-6 gap-5">
                <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-brown-300">Курс {String(index + 1).padStart(2, '0')}</span>
                    <h3 className="mt-1 text-h3 font-secondary --text-h3--line-height text-brown">{course.courseName}</h3>
                    <p className="text-xs mt-1 text-cream">{course.courseSubname}</p>
                </div>
                <div className="flex flex-col gap-1.5">
                    <p className="flex items-center gap-2 text-xs text-cream"><Clock size={16} className="text-brown-400" />{course.duration}</p>
                    <p className="flex items-center gap-2 text-xs text-cream"><Users size={16} className="text-brown-400" />{course.forWho}</p>
                </div>
                <hr className="h-px border-t-0 text-transparent bg-brown-50" />
                <div className="flex-1">
                    <ul className="space-y-2.5">
                        {course.abilities.map((ability: string, index: number) => (
                            <li key={index} className="flex items-start gap-2.5 text-brown-500"><CircleCheckBig size={16} className="text-brown-400" /><p className="text-xs leading-snug">{ability}</p></li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-2xl p-4 course-price">
                    <div className="flex items-baseline gap-1 mb-3">
                        <span className="font-secondary font-bold text-[2rem] text-brown tracking-[-0.02em] ">{course.price}</span>
                        <span className="text-base text-brown-300">₴</span>
                    </div>
                    <button className="w-full py-2.5 rounded-full text-sm bg-brown text-brown-100 cursor-pointer normal-case transition-transform duration-300 ease-out hover:scale-[1.02]">Обрати курс</button>
                </div>
            </div>
        </div>
    )
}

export default CourseCard;