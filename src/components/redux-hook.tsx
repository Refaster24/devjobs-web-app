'use client'

import { Provider, useDispatch , useSelector , TypedUseSelectorHook } from 'react-redux'
import { store } from '@/store/store'
import { AppDispatch , RootState} from '@/store/store'
import { loadDevJobs } from '@/store/slice'

import data from '../data.json'

export const storeState = store.getState()

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

function InitialData(){
  useAppDispatch()(loadDevJobs(data))
  return null
}

export default function ReduxProvider({
    children,
  }: {
    children: React.ReactNode
  }) {

    
    return (
      <Provider store={store}>
        <InitialData/>
        {children}
    </Provider>
  )
}