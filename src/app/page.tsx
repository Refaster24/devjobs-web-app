'use client'

import { useAppSelector } from "@/components/redux-hook"
import SearchBar from "@/components/searchBar"
import DevJob from "@/components/devjob"

export default function Home() {

  const global = useAppSelector(state => state.sliced.global)
  const filter = useAppSelector(state => state.sliced.filter)
  
  let devJobs = global
  if(filter.length > 0){
    devJobs = filter
  }

  return (
    <>
    <main className="text-white flex flex-col items-center">
      <h1 className="invisible absolute">devjob</h1>
      <SearchBar/>
      <section className="grid mb-4 mx-4 gap-12 grid-flow-row auto-rows-fr grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {
          devJobs.map((job , id)=>{
            return <div key={id}> <DevJob id={job.id - 1}/> </div>
          })
        }
      </section>
    </main>
    </>
  )
}
