'use client'

import { useRouter } from 'next/navigation'
import { React } from 'react'

export default function Page() {
    const router = useRouter()
    
    return <main className='d-flex'>
        <section className="container bg-primary vh-100 d-flex">
            teste

        </section>
        <section className="container bg-secondary vh-100 d-flex flex-column justify-content-center align-items-center">
            <div>
                testw
            </div>
            <div>
                <button type="button" className='h-25' onClick={() => router.push('/login')}>
                    Login
                </button>
            </div>
        </section>
        
    </main>
}

