import { devJob } from "@/store/types";
import Image from "next/image";
import logo from '@/assets/desktop/logo.svg'

export default function CompanyHeader({job}:{job:devJob}){
    return(
<article className='bg-[#19202d] flex justify-between items-center gap-7 rounded-xl relative -top-6 w-[70vw] max-md:flex-col max-md:py-4 max-md:w-[90vw]'>
    <div className='flex gap-7 max-md:flex-col'>
        
        <div style={{backgroundColor:job.logoBackground}}  className="grid place-items-center rounded-tl-xl rounded-bl-xl max-md:rounded-xl">
            <Image className='mx-8 my-14' src={logo} alt={`${job.position}`} width={120} height={80}/>
        </div>

        <div className='self-center max-md:text-center'>
            <h2 className="text-2xl text-white font-bold">{job.company}</h2>
            <p className="text-gray-400">{job.website}</p>
        </div>

    </div>

    <button className="bg-[#eeeffc] text-[#5964e0] px-4 py-2 mr-6 rounded-xl max-md:mr-0 max-md:w-[90%]">Company Site</button>

</article>
    )
}