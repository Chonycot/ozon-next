'use client'
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useState, Suspense } from "react"

function FilterContent() {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const updateFilter = (value: string) => {

        const params = new URLSearchParams(searchParams)

        if (value) {
            params.set('category', value)
        } else {
            params.delete('category')
        }

        router.replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div className="catalog-button">
            <button onClick={() =>
                setIsOpen(!isOpen)}
            >
                <span className="catalog-button_burger"></span><span className="catalog-button_text">Каталог</span>
            </button>
            <div className="catalog" style={{ display: isOpen ? 'block' : 'none' }}>
                <ul className="catalog-list">
                    <li onClick={() => {
                        updateFilter('Игровая приставка');
                        setIsOpen(false)
                    }}>Игровая приставка</li>
                    <li onClick={() => { updateFilter('Периферия для ПК'); setIsOpen(false) }}>Периферия для ПК</li>
                    <li onClick={() => { updateFilter('Игры и софт'); setIsOpen(false) }}>Игры и софт</li>
                </ul>
            </div>
        </div>
    )

}

export default function Filter() {
    return (
        <Suspense fallback={
            <div className="catalog-button">
                <button disabled>
                    <span className="catalog-button_burger"></span>
                    <span className="catalog-button_text">Каталог</span>
                </button>
            </div>
        }>
            <FilterContent />
        </Suspense>
    )
}