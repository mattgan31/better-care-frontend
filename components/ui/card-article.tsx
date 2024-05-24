import React from 'react'
import Image from "next/image";

export default function CardArticle() {
    return (
        <div className='flex flex-row space-x-2 justify-center'>
            <Image src={'/banner.jpg'}
                alt=""
                className="mobile:w-24"
                width={0}
                height={0}
                sizes="100vw"
                objectFit="contain" />
            <div className='flex flex-col'>
                <span className='mobile:text-[8pt] tablet:text-[12pt] bg-primary w-fit px-1 text-white'>HEALTH</span>
                <span className='mobile:text-[7pt] tablet:text-[11pt]'>12/05/2024 08:00 WIB</span>
                <div></div>
                <p className='mobile:text-[10pt] tablet:text-[16pt] font-bold'>Siapa Saja yang Tidak Boleh Minum Air Rebusan Daun Salam?</p>
            </div>
        </div>
    )
}
