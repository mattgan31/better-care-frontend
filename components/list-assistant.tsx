"use client"
import React from 'react'
import { Button } from './ui/button'
import CardAssistant from './ui/card-assistant'
import { useRouter } from 'next/navigation'

export default function ListAssistant() {
    const router = useRouter()
    return (
        <div className='pb-20'>
            <div className='flex flex-row items-center mobile:justify-between mobile:px-4 mobile:py-2 bg-slate-100 mobile:mx-4 rounded-md'>
                <p className='mobile:text-xs tablet:text-base'>
                    Jumat, 15 Sep - 09:00 - 6 jam
                </p>
                <Button variant={'link'} className='px-0'>ubah</Button>
            </div>
            <div className='grid grid-cols-2 auto-rows-max gap-2 p-2'>
                <CardAssistant className="w-full cursor-pointer" onClick={() => router.push('detail-assistant')} />
                <CardAssistant className="w-full" />
                <CardAssistant className="w-full" />
                <CardAssistant className="w-full" />
                <CardAssistant className="w-full" />
            </div>
        </div>
    )
}
