'use client'

import { courses } from "@/db/schema"
import { Card } from "./card";

type props = {
    courses: typeof courses.$inferSelect[];
    activeCourseId: number;
}

export const List = ({
    courses,
    activeCourseId,
}: props) => {
    return (
        <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
            {courses && courses.map((course) => (
                <Card
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    imageSrc={course.imageSrc}
                    onClick={() => {}}
                    disabled={false}
                    active={course.id === activeCourseId}
                />
            ))}
        </div>
    )
}