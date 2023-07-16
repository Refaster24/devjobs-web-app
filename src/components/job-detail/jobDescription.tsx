import { devJob } from "@/store/types";

export default function JobDescription({job}:{job:devJob}){
    console.log(job)
    return(
<section className="bg-[#19202d] text-gray-400 w-[70vw] mb-8 space-y-6 px-6 py-8 rounded-xl max-md:w-[90vw]">

    <div className="flex justify-between items-center gap-4 max-md:flex-col max-md:items-start">

        <div className="space-y-3">

            <p className="">
            {job.postedAt} 
            <span className="inline-block mx-2 w-2 h-2 rounded-full bg-slate-300"></span>
                {job.contract}
            </p>
            <h1 className="text-2xl text-white font-bold">{job.position}</h1>
            <p className="text-[#5964e0]">{job.location}</p>

        </div>

    <button className="bg-[#5964e0] text-[#eeeffc] px-4 py-2 rounded-xl max-md:w-full">Apply Now</button>

    </div>

    <p>{job.description}</p>

    <h2 className="text-xl text-white font-bold">Requirements</h2>

    <p>{job.requirements.content}</p>

    <ol className="pl-4 list-disc">
    {job.requirements.items.map((item,id)=>{
        if(item == undefined) return null
        return (
            <li key={id} className="pl-2">{item}</li>
        )
    })}
    </ol>

    <h2 className="text-xl text-white font-bold">What You Will Do</h2>

    <p>{job.role.content}</p>

    <ol className="pl-4 list-decimal">
    {job.role.items.map((item,id)=>{
        if(item == undefined) return null
        return (
            <li key={id} className="pl-2 marker:text-[#5964e0]">{item}</li>
        )
    })}
    </ol>


</section>
    )
}