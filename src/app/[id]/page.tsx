'use client'

import { useAppSelector } from '@/components/redux-hook'
import {useParams} from 'next/navigation'

export default function Home(){
    const id = useParams().id - 1
    const rout = useAppSelector((state)=>state.sliced.global[id] )
    console.log(rout)
    return <h1>hi {`${id}`}</h1>
}