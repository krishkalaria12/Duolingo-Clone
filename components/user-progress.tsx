import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";
import { courses } from "@/db/schema";

type props = {
    activeCourse: typeof courses.$inferSelect;
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;
}

function UserProgress({
    activeCourse,
    hearts,
    points,
    hasActiveSubscription
}: props) {
    return (
        <div className="flex items-center justify-between gap-x-2">
            <Link href={"/courses"}>
                <Button variant={"ghost"}>
                    <Image className="rounded-md border" src={activeCourse.imageSrc} alt={activeCourse.title} width={32} height={32} />
                </Button>
            </Link>
            <Link href={"/shop"}>
                <Button variant={"ghost"} className="text-orange-500">
                    <Image className="mr-2" src={"/points.svg"} alt="Points" width={28} height={28} />
                    {points}
                </Button>
            </Link>
            <Link href={"/shop"}>
                <Button variant={"ghost"} className="text-rose-500">
                    <Image className="mr-2" src={"/heart.svg"} alt="Hearts" width={28} height={28} />
                    {hasActiveSubscription ? 
                    <InfinityIcon className="h-4 w-4 stroke-[3]" /> :
                    hearts}
                </Button>
            </Link>
        </div>
    )
}

export default UserProgress