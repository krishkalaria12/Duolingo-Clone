"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs/server"

import db from "@/db/drizzle";
import { getCourseById, getUserProgress } from "@/db/queries";
import { userProgress } from "@/db/schema";

export const upsertUserProgress = async (courseId: number) => {
    const {userId} = await auth();
    const user = await currentUser();

    if (!userId || !user) {
        throw new Error("Unauthorized access")
    }

    const courses = await getCourseById(courseId);

    if (!courses) {
        throw new Error("Course not found")
    }

    // if (!courses.units.length || !courses.units[0].leasons.length) {
    //     throw new Error("Course is empty")
    // }

    const existingUserProgress = await getUserProgress();
    
    if (existingUserProgress?.length!=0) {
        await db.update(userProgress).set({
            activeCourseId: courseId,
            userName: user.firstName || "User",
            userImageSrc: user.imageUrl || "/mascot.svg"
        })

        revalidatePath("/courses");
        revalidatePath("/learn");
        redirect("/learn");
    }
    
    
    await db.insert(userProgress).values({
        userId,
        activeCourseId: courseId,
        userName: user.firstName || "User",
        userImageSrc: user.imageUrl || "/mascot.svg"
    })
    
    revalidatePath("/courses");
    revalidatePath("/learn");
    redirect("/learn");
}