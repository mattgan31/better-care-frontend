"use client"
import React from 'react'
// import { Input } from './ui/input'
import { Input } from "@nextui-org/input";
import { Select, Textarea } from '@nextui-org/react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export default function SearchAssistant() {
    const router = useRouter();
    return (
        <main className='pb-20'>
            <div className='flex flex-col items-center'>
                <h1 className='text-3xl font-bold'>Asisten</h1>
                <p className='text-sm'>Temukan asisten medic sesuai kriteria anda</p>
            </div>
            <div className='mobile:p-4'>
                <form className='space-y-2' method='POST' action={'/list-assistant'} onSubmit={() => router.push('list-assistant')}>
                    <div className='space-y-2'>
                        <h2 className='text-lg font-bold text-primary'>Data Pasien</h2>
                        <div>
                            <Input name='namaPasien' label='Nama pasien' />
                        </div>
                        <div className='flex space-x-2'>
                            <div className='flex-1'>
                                <Input name='age' label='Usia' />
                            </div>
                            <div className='flex-1'>
                                <Input name='weight' label='Berat' />
                            </div>
                            <div className='flex-1'>
                                <Input name='height' label='Tinggi' />
                            </div>
                        </div>
                        <div>
                            <Input name='phone' label='No. Telepon' />
                        </div>
                        <div>
                            <Input name='address' label='Pilih alamat' />
                            {/* <Select></Select> */}
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <h2 className='text-lg font-bold text-primary'>Waktu & Durasi</h2>
                        <div className='flex space-x-2'>
                            <div className='flex-1'>
                                <Input name='date' label='Tanggal' />
                            </div>
                            <div className='flex-1'>
                                <Input name='time' label='Jam' />
                            </div>
                        </div>
                        <div>
                            <Input name='duration' label='Durasi    ' />
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <h2 className='text-lg font-bold text-primary'>Kategori Asisten</h2>
                        <div className='flex space-x-2'>
                            <Input name='gender' label='Jenis kelamin asisten' />
                        </div>
                        <div>
                            <Input name='category' label='Kategori asisten' />
                        </div>
                        <div>
                            <Input name='language' label='Bahasa' />
                        </div>
                        <div>
                            <Input name='typeNeeded' label='Jenis keperluan' />
                        </div>
                        <div>
                            <Textarea name='notes' label='Catatan' />
                        </div>
                    </div>
                    <div>
                        <Button className='w-full' type='submit' size={'lg'} onClick={() => router.push('list-assistant')}>
                            Cari Asisten
                        </Button>
                    </div>
                </form>
            </div>
        </main>
    )
}
