import { redirect } from 'next/navigation'

import React from 'react'
import FeedWrapper from '@/components/feed-wrapper'
import StickyWrapper from '@/components/sticky-wrapper'
import Header from './header'
import UserProgress from '@/components/user-progress'
import { getUserProgress } from '@/db/queries'

async function Learn() {
    const userProgressData = await getUserProgress();
    
    if (!userProgressData || !userProgressData[0]?.activeCourse) {
        redirect("/courses");
    }

    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress
                    activeCourse={userProgressData[0]?.activeCourse}
                    hearts={userProgressData[0]?.hearts}
                    points={userProgressData[0]?.points}
                    hasActiveSubscription={false}
                />
            </StickyWrapper>
            <FeedWrapper>
                <Header title={userProgressData[0]?.activeCourse.title} />
            </FeedWrapper>
            </div>
    );
}

export default Learn