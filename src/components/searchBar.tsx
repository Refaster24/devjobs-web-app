'use client'

import { useState } from "react"
import { useAppDispatch } from "./redux-hook"
import { payloadType } from "@/store/types"
import { filter } from "@/store/slice"

function checkbox(){
    const button = document.getElementById('fullTime') as HTMLButtonElement

    if(button.classList.contains('bg-[url("../assets/desktop/icon-check.svg")]')){
        button.classList.remove('bg-[url("../assets/desktop/icon-check.svg")]')
    } else{
        button.classList.add('bg-[url("../assets/desktop/icon-check.svg")]')
    }
}


function Search(){

    const dispatch = useAppDispatch()

    function searchHandel(){
        const titleInput = document.getElementById('title') as HTMLInputElement
        const locationInput = document.getElementById('location') as HTMLInputElement
        const button = document.getElementById('fullTime') as HTMLButtonElement
    
        let contract = false
    
        if(button.classList.contains('bg-[url("../assets/desktop/icon-check.svg")]')){
            contract = true
        }
    
        const payload :payloadType= {
            title    : titleInput.value,
            location : locationInput.value,
            contract :contract
        }

        dispatch(filter(payload))
    }


    return <button onClick={searchHandel} className="bg-[#5964e0] px-4 py-2 rounded-xl">Search</button>
}

function MobileSearchBar(){

    function filterButton(){
        const button = document.getElementById('moreFiltering') as HTMLButtonElement

        if(button.classList.contains('absolute')){
            button.classList.remove('absolute')
            button.classList.remove('invisible')
        } else{
            button.classList.add('absolute')
            button.classList.add('invisible')
        }
    }


    return (
<section className="flex items-center justify-between flex-wrap gap-2 mx-2 p-4 bg-[#19202d] rounded-xl relative -top-8">

    <div className="flex items-center gap-2 basis-[65%] w-full">
        <input id='title' placeholder="Filter by title" type="text" className="bg-transparent py-2 basis-full w-full border-r-2 border-gray-500 outline-none" />
        <button onClick={filterButton} className="bg-[url('../assets/mobile/icon-filter.svg')] bg-center bg-no-repeat p-4 rounded-xl active:scale-75"></button>
    </div>

    <Search/>

    <div id='moreFiltering' className="basis-full flex items-center gap-3 invisible absolute">

        <input id='location' placeholder="Filter by location" type="text" className="bg-transparent py-2 basis-[59%] w-full border-r-2 border-gray-500 outline-none" />

        <div onClick={checkbox}  className="!bg-none flex items-center gap-2">
            <button id='fullTime' className="bg-[#0b1527] bg-center bg-no-repeat p-4 rounded-xl  active:scale-75"></button>
            <p className="!bg-none text-xs cursor-pointer">Full Time Only</p>
        </div>

    </div>

</section>
    )
}


function DesktopSearchBar(){
    return(
<section className="flex justify-between items-center gap-6 p-4 mx-2 bg-[#19202d] rounded-xl relative -top-8">
    <div className="flex justify-start items-center gap-4 flex-wrap">
            <input id='title' placeholder="Filter by title" type="text" className="bg-transparent py-2 border-r-2 border-gray-500 outline-none" />

            <input id='location' placeholder="Filter by location" type="text" className="bg-transparent py-2 border-r-2 border-gray-500 outline-none" />
        <div onClick={checkbox}  className="!bg-none flex items-center gap-2">
            <button id='fullTime' className="bg-[#0b1527] bg-center bg-no-repeat p-4 rounded-xl  active:scale-75"></button>
            <p className="!bg-none  cursor-pointer">Full Time Only</p>
        </div>
    </div>

    <Search/>

</section>
    )
}



export default function SearchBar(){

    if(window == undefined) return null

    const [width,setWidth] = useState(window.innerWidth)

    window.addEventListener('resize',()=>{
        setWidth(window.innerWidth)
    })
    
    if(width > 790) return <DesktopSearchBar/>
    return <MobileSearchBar/>
}
