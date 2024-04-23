import { Button } from '@/components/ui/button'
import { 
    ClerkLoaded, 
    ClerkLoading, 
    SignInButton, 
    SignedIn, 
    SignedOut, 
    UserButton 
} from '@clerk/nextjs'
import { Loader } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const Header = () => {
    return (
        <header className='h-20 w-full border-slate-200 border-b-2 px-4'>
            <div className='lg:max-w-screen-lg mx-auto flex justify-between items-center'>
                <div className='p-5 flex items-center gap-x-3'>
                    <Image src={"/mascot.svg"} width={40} height={40} alt='Mascot' />
                    <h1 className='tracking-wide text-2xl text-green-600 font-extrabold'>Lingo</h1>
                </div>
                <ClerkLoading>
                    <Loader className='h-5 w-5 animate-spin text-muted-foreground' />
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <UserButton
                        afterSignOutUrl='/' />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode='modal' 
                        signUpFallbackRedirectUrl={"/learn"}
                        signUpForceRedirectUrl={"/learn"}
                        forceRedirectUrl={"/learn"}
                        fallbackRedirectUrl={"/learn"}
                        >
                            <Button size={"lg"} variant={"ghost"}> 
                                Login
                            </Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
            </div>
        </header>
    )
}