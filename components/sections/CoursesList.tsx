import { courses } from "@/data/courses"
import type { Course } from "@/types"
import CourseCard from "../ui/CourseCard"
import SectionHeading from "../ui/SectionHeading"

const CoursesList = () => {
    return (
        <section id="Courses" className="py-16 md:py-24 bg-surface scroll-mt-20 text-brown">
            <div className="container mx-auto px-4">
                <div data-aos="fade-up">
                    <SectionHeading
                        label="Програми навчання"
                        titleStart="Обери свій шлях"
                        titleItalic="у світ кави"
                    />
                </div>
                <div className="flex flex-wrap justify-center gap-5">
                    {courses.map((course: Course, index: number) => (
                        <div key={course.id} data-aos="fade-up" data-aos-delay={index * 150} className="h-full w-full sm:basis-[min(48%,420px)] xl:basis-[min(31%,420px)]">
                            <CourseCard course={course} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CoursesList