import React from 'react'
import { EmailIcon, HomeIcon, PaperIcon, ProfileIcon } from './icons'

export default function Navbar() {
    return (
        <nav className='flex flex-row justify-around py-2 px-3 fixed bottom-0 w-full z-50 bg-slate-100'>
            <HomeIcon className='w-16' />
            <PaperIcon className='w-16' />
            <EmailIcon className='w-16' />
            <ProfileIcon className='w-16' />
        </nav>
    )
}
