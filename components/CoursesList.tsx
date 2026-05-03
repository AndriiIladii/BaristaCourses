import { courses } from "@/data/courses"
import type { Course } from "@/data/courses"
import CourseCard from "./CourseCard"

const CoursesList = () => {
    return (

        <section className="py-24 bg-white text-brown">
            <div className="container mx-auto px-4">
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-10 bg-cream"></div>
                        <span className="text-xs uppercase tracking-[0.18em] text-cream">Програми навчання</span>
                    </div>
                    <h2 className="leading-tight text-h2 font-secondary tracking-[-0.02em]">Обери свій шлях<br /><span className="text-cream italic">у світ кави</span></h2>
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
                    {courses.map((course: Course, index: number) => (
                        <CourseCard key={course.id} course={course} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CoursesList