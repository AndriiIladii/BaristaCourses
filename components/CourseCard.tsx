
import type { Course } from "@/data/courses"


interface CourseCardProps {
    course: Course;
    index: number;
}


const CourseCard = ({ course, index }: CourseCardProps) => {
    return (
        <div className="course-card relative flex flex-col rounded-3xl overflow-hidden">
            <div className="flex flex-col flex-1 p-6 gap-5">
                <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#a1887f]">Курс {String(index + 1).padStart(2, '0')}</span>
                    <h3 className="mt-1 text-h3 font-secondary --text-h3--line-height text-brown">{course.courseName}</h3>
                    <p className="text-xs mt-1 text-cream">{course.courseSubname}</p>
                </div>
                <div className="flex flex-col gap-1.5">
                    <p className="flex items-center gap-2 text-xs text-cream"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-3.5 h-3.5 flex-shrink-0"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>{course.duration}</p>
                    <p className="flex items-center gap-2 text-xs text-cream"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-3.5 h-3.5 flex-shrink-0"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>{course.forWho}</p>
                </div>
                <hr className="h-px border-t-0 text-transparent bg-[#e8e0de]" />
                <div className="flex-1">
                    <ul className="space-y-2.5">
                        {course.abilities.map((ability: string, index: number) => (
                            <li key={index} className="flex items-start gap-2.5 text-[#6d4c41]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-cream"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><p className="text-xs leading-snug">{ability}</p></li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-2xl p-4 course-price">
                    <div className="flex items-baseline gap-1 mb-3">
                        <span className="font-secondary font-bold text-[2rem] text-brown tracking-[-0.02em] ">{course.price}</span>
                        <span className="text-base text-[#a1887f]">₴</span>
                    </div>
                    <button className="w-full py-2.5 rounded-full text-sm bg-brown text-[#d7ccc8] cursor-pointer normal-case transition-transform duration-300 ease-out hover:scale-[1.02]">Обрати курс</button>
                </div>
            </div>
        </div>
    )
}

export default CourseCard;