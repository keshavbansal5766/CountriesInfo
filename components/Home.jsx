import { useState } from 'react'
import SearchBar from './SeacrhBar'
import SelectMenu from './SelectMenus'
import CountriesList from './CountriesList'
import { useTheme } from '../hooks/useTheme'

export default function Home() {
  const [query, setQuery] = useState('')
  const [isDark] = useTheme()
  return (
    <main className={`${isDark ? 'dark' : ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>
      <CountriesList query={query} />
    </main>
  )
}