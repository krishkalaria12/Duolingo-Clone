import React from 'react'
import { Loader } from 'lucide-react'

function Loading() {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <Loader className='h-6 w-6 animate-spin text-muted-foreground' />
        </div>
    )
}

export default Loading