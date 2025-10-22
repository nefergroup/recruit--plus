import React from 'react'
import { Link, useLocation } from 'react-router'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="bg-primary shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent-blue rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="font-heading text-xl font-bold text-primary">Recruit Plus</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className={`font-secondary text-lg font-medium transition-colors duration-200 ${
                location.pathname === '/' 
                  ? 'text-accent-blue border-b-2 border-accent-blue' 
                  : 'text-primary hover:text-accent-blue'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-secondary text-lg font-medium transition-colors duration-200 ${
                location.pathname === '/about' 
                  ? 'text-accent-blue border-b-2 border-accent-blue' 
                  : 'text-primary hover:text-accent-blue'
              }`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
