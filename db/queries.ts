import { cache } from "react";
import db from "./drizzle";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { courses, userProgress, units } from "./schema";

export const getCourses = cache(async () => {
    const data = await db.query.courses.findMany();

    return data;
})

export const getUnits = cache(async () => {
    const userProgress = await getUserProgress();

    if (!userProgress || !userProgress[0]?.activeCourseId) {
        return [];
    }

    const data = await db.query.units.findMany({
        where: eq(units.courseId, userProgress[0].activeCourseId),
        with: {
            lesson: {
                with: {
                    challenges: {
                        with: {
                            challengeProgress: true
                        }
                    }
                }
            }
        }
    });

    const normalisedData = data.map((unit) => {
        const lessonWithCompletedStatus = unit.lesson.map((lesson) => {
            const allCompletedChallenges = lesson.challenges.every((challengeOptions) => {
                return challengeOptions.challengeProgress && challengeOptions.challengeProgress.length > 0 &&
                challengeOptions.challengeProgress.every((progress) => progress.completed)
            });

            return {...lesson, completed: allCompletedChallenges}
        });
        return {...units, lessons: lessonWithCompletedStatus};
    });

    return normalisedData;
});

export const getUserProgress = cache(async () => {
    const {userId} = await auth();

    if (!userId) {
        return null;
    }

    const data = await db.query.userProgress.findMany({
        where: eq(userProgress.userId, userId),
        with: {
            activeCourse: true,
        }
    });

    return data;
});

export const getCourseById = cache(async(courseId: number) => {
    const data = await db.query.courses.findFirst({
        where: eq(courses.id, courseId)
    })

    return data;
})