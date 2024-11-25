'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          LOGO
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          <Link href="/news" className="text-white hover:text-gray-300">News</Link>
          <Link href="/course-registration" className="text-white hover:text-gray-300">Course registration</Link>
          <Link href="/festival" className="text-white hover:text-gray-300">Festival</Link>
          <Link href="/login" className="text-white hover:text-gray-300">Login</Link>
        </div>
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-2">
          <Link href="/" className="block text-white hover:text-gray-300 py-2">Home</Link>
          <Link href="/news" className="block text-white hover:text-gray-300 py-2">News</Link>
          <Link href="/course-registration" className="block text-white hover:text-gray-300 py-2">Course registration</Link>
          <Link href="/festival" className="block text-white hover:text-gray-300 py-2">Festival</Link>
          <Link href="/login" className="block text-white hover:text-gray-300 py-2">Login</Link>
        </div>
      )}
    </nav>
  )
}

