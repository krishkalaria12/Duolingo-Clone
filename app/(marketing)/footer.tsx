import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export const Footer = () => {
    return (
        <footer className='hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2'>
            <div className='max-w-screen-lg mx-auto flex items-center justify-evenly h-full'>
                <Button size={"lg"} variant={"ghost"} className='w-full'>
                    <Image 
                    className='mr-4 rounded-md' 
                    alt='Croatian flag' 
                    src='/hr.svg' 
                    width={40} 
                    height={32} 
                    />
                    Croatian
                </Button>
                <Button size={"lg"} variant={"ghost"} className='w-full'>
                    <Image 
                    className='mr-4 rounded-md' 
                    alt='Spanish flag' 
                    src='/es.svg' 
                    width={40} 
                    height={32} 
                    />
                    Spanish
                </Button>
                <Button size={"lg"} variant={"ghost"} className='w-full'>
                    <Image 
                    className='mr-4 rounded-md' 
                    alt='French flag' 
                    src='/fr.svg' 
                    width={40} 
                    height={32} 
                    />
                    French
                </Button>
                <Button size={"lg"} variant={"ghost"} className='w-full'>
                    <Image 
                    className='mr-4 rounded-md' 
                    alt='Italian flag' 
                    src='/it.svg' 
                    width={40} 
                    height={32} 
                    />
                    Italian
                </Button>
                <Button size={"lg"} variant={"ghost"} className='w-full'>
                    <Image 
                    className='mr-4 rounded-md' 
                    alt='Japaneses flag' 
                    src='/jp.svg' 
                    width={40} 
                    height={32} 
                    />
                    Japanese
                </Button>
            </div>
        </footer>
    )
}