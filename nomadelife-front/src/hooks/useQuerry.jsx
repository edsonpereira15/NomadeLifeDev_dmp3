import {uselocation} from 'react-roaster-dom'
import {useMEMO} from 'react'

export function UseQuerry(){
    const {search} = Uselocation()
    return useMemo(() => new URLSearchParams(search), [search])
}