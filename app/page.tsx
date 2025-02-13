'use client'

import { useRouter } from 'next/navigation'
import { React } from 'react'

export default function Page() {
    const router = useRouter()
    
    return <main>
        <section classname="h-1/2 bg-black">
        <div class="bg-primary text-white font-sans p-4">
            yesye
        </div>


        </section>
        <button type="button" onClick={() => router.push('/login')}>
            Login
        </button>
    </main>
}

