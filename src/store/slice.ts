import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { devJob, initialStateType , payloadType } from "./types";


const initialState : initialStateType = {
    global:[],
    filter:[],
    load:  'false'
}

const slice = createSlice({
    name:'devJobs',
    initialState,
    reducers:{
        filter(state,actions:PayloadAction<payloadType>){
            state.filter = []
            const { payload } = actions
            state.global.forEach(job =>{
                if(job.position.toLowerCase().includes(payload.title.toLowerCase()) && job.location.toLowerCase().includes(payload.location.toLowerCase())){
                    state.filter.push(job)
                    if(payload.contract === true && job.contract !== 'Full Time') state.filter.pop()
                }

            })
        },
        loadDevJobs(state,actions:PayloadAction<devJob[]>){
            state.global = actions.payload
            state.load = 'ok'
        }
    }
})

export const {filter ,loadDevJobs} = slice.actions
export default slice.reducer