import React from 'react'
import Image from 'next/image'
import { IndonesianFlagIcon } from './ui/icons'

export default function DetailAssistant() {
    return (
        <div>
            <Image src={'/doctor.jpg'}
                alt=""
                className="mobile:w-full"
                width={0}
                height={0}
                sizes="100vw"
                objectFit="contain" />
            <div>
                <div>
                    <div>
                        <h3>Jessica</h3>
                        <p>Asisten Medis</p>
                    </div>
                    <div>
                        <IndonesianFlagIcon className='w-6' />
                    </div>
                    <div>
                        <p>20 tahun</p>
                        <p>99%</p>
                    </div>
                </div>
                <div>
                    <div>
                        {/* <Icon/> */}
                        <div>
                            <h4>Alumnus</h4>
                            <p>Universitas Indonesia Kedokteran</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
