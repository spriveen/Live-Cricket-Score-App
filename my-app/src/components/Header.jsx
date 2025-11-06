import React, { useState, useEffect } from 'react'
import { headerStyles } from '../assets/dummyStyles'
import logo from '../assets/logo.png'

const Header = ({ onSearch = () => {} }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [q, setQ] = useState('')

  // Load Eczar font (Google Fonts) once
  useEffect(() => {
    const id = 'eczar-google-font'
    if (document.getElementById(id)) return
    const link = document.createElement('link')
    link.id = id
    link.rel = 'stylesheet'
    link.href =
      'https://fonts.googleapis.com/css2?family=Eczar:wght@600;700&display=swap'
    document.head.appendChild(link)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(q.trim())
  }

  return (
    <header className={headerStyles.container}>
      <div className={headerStyles.innerContainer}>
        <div className={headerStyles.mainWrapper}>
          {/* LEFT */}
          <div className={headerStyles.logoContainer}>
            <div className={headerStyles.logoImage}>
              <img src={logo} alt='Logo' className={headerStyles.logoImage} />
            </div>
            <div className={headerStyles.logoText}>
              <div
                className={headerStyles.logoTitle}
                style={{ fontFamily: "'Eczar', serif" }}
              >
                Cricket Fever
              </div>
            </div>
          </div>

          {/* CENTER */}
          <form onSubmit={handleSearch} className={headerStyles.searchForm} role='search'>
            <div className={headerStyles.searchWrapper}>
              <label htmlFor='header-search' className='sr-only'>
                Search Matches
              </label>
              <div className='relative'>
                 <input id='header-serach' value={q} onChange={(e) => setQ(e.target.value)} placeholder='Search' className={headerStyles.searchInput} />
                 <button type='submit' className={headerStyles.searchButton}>
                  Search
                 </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header
