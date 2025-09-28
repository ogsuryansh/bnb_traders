import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Memberships', href: '#memberships' },
    { name: 'User Agreement', href: '#agreement' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact Us', href: '#contact' }
  ]

  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-40">
      {/* Top Banner */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-sm font-medium animate-pulse-slow">
        <p>⚠️ ONLINE FRAUD PUBLIC NOTICE →</p>
      </div>
      
      {/* SEBI Notice */}
      <div className="bg-blue-600 text-white py-1 px-4 text-center text-xs">
        <p>|| SEBI Registered Research Analyst No. INH000011006 ||</p>
      </div>

      {/* Main Header */}
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4 animate-slide-in-left">
            <img 
              src="/mail_logo.png" 
              alt="Bnb Trades Logo" 
              className="h-12 w-auto object-contain"
            />
            <h1 className="text-2xl font-bold text-white">
              Bnb Trades
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 animate-slide-in-right">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="py-4 space-y-2 border-t border-gray-700">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block py-2 px-4 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header