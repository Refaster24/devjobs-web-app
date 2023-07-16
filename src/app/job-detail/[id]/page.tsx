'use client'

import {useParams} from 'next/navigation'
import { useAppSelector } from '@/components/redux-hook'
import CompanyHeader from '@/components/job-detail/companyHeader'
import JobDescription from '@/components/job-detail/jobDescription'
import Footer from '@/components/job-detail/footer'

export default function Home(){
    const id = useParams().id - 1
    const job = useAppSelector((state)=>state.sliced.global[id] )

    return (
        <>
        <main className='grid place-items-center'>
            <CompanyHeader job={job}/>
            <JobDescription job={job}/>
        </main>
        <Footer job={job}/>
        </>
    )
}