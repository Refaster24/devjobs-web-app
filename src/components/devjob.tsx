'use client'

import Image from "next/image";
import { useAppSelector } from "./redux-hook";
import logo from '../assets/desktop/logo.svg'
import Link from "next/link";

export default function DevJob({id}:{id:number}){

    const job = useAppSelector(state => state.sliced.global[id])

    return(
        <Link href={`./${job.id}`}>
        <article className="bg-[#19202d] rounded-xl px-12 py-8 space-y-3 flex flex-col relative">
            <div style={{backgroundColor:job.logoBackground}}  className="p-2 rounded-xl absolute -top-4">
            <Image src={logo} alt={`${job.position}`} width={40} height={80}/>
            </div>
            <p className="text-gray-400">
                {job.postedAt} 
            <span className="inline-block mx-2 w-2 h-2 rounded-full bg-slate-300"></span>
                {job.contract}
            </p>
            <h2 className="text-2xl font-bold">{job.position}</h2>
            <p className="text-gray-400">{job.company}</p>
            <p className="text-[#5964e0] !mt-12">{job.location}</p>
        </article>
        </Link>
    )
}