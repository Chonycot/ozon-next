'use client'

import { useState, useEffect } from "react"
import { usePathname, useSearchParams, useRouter } from "next/navigation"

export default function Search() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

     const [search, updateSearch] = useState('')

    const updateFilter = (value: string) => {
        const params = new URLSearchParams(searchParams)

        if(value) {
            params.set('search', value)
        } else {
            params.delete('search')
        }

        router.replace(`${pathname} ?${params.toString()}`)
    }

    useEffect(() => {
        const params = new URLSearchParams(searchParams)
        const searchParam = params.get('search')

        if (searchParam) {
            updateSearch(searchParam)
        }else {
            updateSearch('')
        }

console.log(1)

    }, [searchParams])

    return (
        <div className="search">
            <div className="search-wrapper">
                <input className="search-wrapper_input" type="text" value={search} onChange={(event) => updateSearch(event.target.value)}/>
            </div>
            <div className="search-btn">
                <button onClick={() => updateFilter(search)}></button>
            </div>
        </div>
    )
}