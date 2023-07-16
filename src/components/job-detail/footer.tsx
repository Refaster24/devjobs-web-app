import { devJob } from "@/store/types";

export default function Footer({job}:{job:devJob}) {
    return(
        <footer className="bg-[#19202d] grid place-items-center">

        <div className="flex items-center justify-between gap-7 p-4 w-[70vw] max-md:w-[90vw] max-md:flex-col">
            <div className='max-md:text-center'>
                <h2 className="text-2xl text-white font-bold">{job.position}</h2>
                <p className="text-gray-400">{job.company}</p>
            </div>

            <button className="bg-[#5964e0] text-[#eeeffc] px-4 py-2 rounded-xl">Apply Now</button>
        </div>

        </footer>
    )
}