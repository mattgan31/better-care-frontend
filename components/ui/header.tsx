"use client"
import React from 'react'
import { BackIcon } from './icons'
import { useRouter } from 'next/navigation'

export default function Header() {
    const router = useRouter();
    return (
        <div className='flex flex-row items-center space-x-2 py-6 px-2'>
            <button className='' onClick={() => router.back()}><BackIcon className='w-8' /></button>
            <h1 className='text-xl'>Asisten</h1>
        </div>
    )
}
