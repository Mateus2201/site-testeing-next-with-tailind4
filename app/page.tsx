'use client'

import { useRouter } from 'next/navigation'
import { React } from 'react'

export default function Page() {
    const router = useRouter()
    
    return <>
        <h1 className="text-sm  underline">
        Hello world!
        </h1>
        <button type="button" onClick={() => router.push('/login')}>
            Login
        </button>
    </>
}

