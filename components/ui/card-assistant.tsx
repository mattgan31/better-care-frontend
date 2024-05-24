import React from 'react'
import { Button } from './button'
import Image from 'next/image'
import { IndonesianFlagIcon } from './icons'
import Link from 'next/link'

export default function CardAssistant({ className }: any) {
    return (
        <Link href={'/detail-assistant'}>
            <div className={`${className} flex flex-col p-2 shadow rounded-md`}>
                <div className='p-1 w-full relative mobile:h-40 tablet:h-full tablet:h-96'>
                    <Image src={`/doctor.jpg`}
                        alt=''
                        className="mobile:w-full mobile:h-full object-cover aspect-square rounded-md"
                        layout='fill' />
                </div>
                <div className='space-y-2 mobile:p-1 tablet:p-2'>
                    <h2 className='mobile:text-base tablet:text-xl font-bold'>Jessica</h2>
                    <div className='flex flex-row space-x-2'>
                        <p className='mobile:text-sm tablet:text-base'>Bahasa:</p>
                        <IndonesianFlagIcon className='w-6 shadow' />
                    </div>
                </div>
            </div>
        </Link>
    )
}
