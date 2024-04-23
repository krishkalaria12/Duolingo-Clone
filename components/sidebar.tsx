import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import SidebarItem from './sidebar-item';
import {
    ClerkLoading,
    ClerkLoaded,
    UserButton,
} from "@clerk/nextjs"
import { Loader } from 'lucide-react';

type Props = {
    className?: string;
}

function Sidebar({className} : Props) {
    return (
        <div className={cn('lg:fixed flex lg:w-[256px] h-full left-0 top-0 px-4 flex-col border-r-2', className)}>
            <Link href={"/learn"}>
                <div className='p-5 flex items-center gap-x-3'>
                    <Image 
                        src={"/mascot.svg"}
                        width={40} 
                        height={40} 
                        alt='Mascot' 
                    />
                    <h1 className='tracking-wide text-2xl text-green-600 font-extrabold'>Lingo</h1>
                </div>
            </Link>
            <div className='flex flex-col gap-y-2 flex-1'>
                <SidebarItem 
                    iconSrc='/learn.svg' 
                    label='Learn' 
                    href='/learn' 
                />
                <SidebarItem 
                    iconSrc='/leaderboard.svg' 
                    label='LeaderBoard' 
                    href='/leaderboard' 
                />
                <SidebarItem 
                    iconSrc='/quests.svg' 
                    label='Quests' 
                    href='/quests' 
                />
                <SidebarItem 
                    iconSrc='/shop.svg' 
                    label='Shop' 
                    href='/shop' 
                />
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className='h-5 w-5 text-muted-foreground animate-spin' />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl='/' />
                </ClerkLoaded>
            </div>
        </div>
    )
}

export default Sidebar