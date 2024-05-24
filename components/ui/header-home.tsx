'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Header from './header'

export default function HeaderHome() {
    const pathname = usePathname()
    if (pathname === '/') {
        return (
            <div>
                <h1 className='mobile:text-3xl tablet:p-6 mobile:p-4 text-primary'>Better<span className='font-bold'>Care</span></h1>
            </div>
        )
    } else {
        return <Header />
    }
}
