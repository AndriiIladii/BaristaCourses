
import type { Course } from "@/data/courses"


interface CourseCardProps {
    course: Course;
    index: number;
}


const CourseCard = ({ course, index }: CourseCardProps) => {
    return (
        <article className="flex flex-col flex-1 p-6 gap-5">
            <div>
                <span className="text-[10px] uppercase tracking-[0.2em]">Курс {String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-1 leading-snug">{course.courseName}</h3>
                <p className="text-xs mt-1">{course.courseSubname}</p>
            </div>
            <div className="flex flex-col gap-1.5">
                <p className="flex items-center gap-2 text-xs">{course.duration}</p>
                <p className="flex items-center gap-2 text-xs">{course.forWho}</p>
            </div>
            <hr className="border bg-[#E8E0DE]" />
            <div className="flex-1">
                <ul className="space-y-2.5">
                    {course.abilities.map((ability: string, index: number) => (
                        <li key={index}>{ability}</li>
                    ))}
                </ul>
            </div>
            <div className="rounded-2xl" >
                <div className="flex items-baseline gap-1 mb-3">
                    <span>{course.price}</span>
                    <span className="text-base">₴</span>
                </div>
                <button className="w-full py-2.5 rounded-full text-sm">Обрати курс</button>
            </div>
        </article>
    )
}

export default CourseCard;