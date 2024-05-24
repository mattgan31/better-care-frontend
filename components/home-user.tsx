"use client"
import { Button } from "@/components/ui/button";
import CardArticle from "@/components/ui/card-article";
import { NurseIcon } from "@/components/ui/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomeUser() {
    const router = useRouter()
    return (
        <main className="flex min-h-screen flex-col items-center">
            <Image src={'/banner.jpg'} alt=""
                className="mobile:w-full"
                width={0}
                height={0}
                sizes="100vw"
                objectFit="contain" />
            <div className="flex flex-row items-center tablet:justify-center mobile:py-6 mobile:px-4 space-x-2 tablet:w-full">
                <NurseIcon className="w-20" />
                <p className="font-bold mobile:text-lg tablet:text-3xl mobile:w-32 tablet:w-96">Caregiver On-Demand</p>
                <Button variant={'default'} size={'lg'} className="" onClick={() => router.push('search-assistant')}>BOOK NOW</Button>
            </div>
            <div className="mobile:px-4 tablet:w-full tablet:px-16">
                <h1 className="tablet:text-2xl">Artikel</h1>
                <div className="space-y-3 tablet:justify-center">
                    <CardArticle />
                    <CardArticle />
                    <CardArticle />
                </div>
            </div>
        </main>
    );
}
