'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Truck, ChevronDown, Menu, X } from 'lucide-react'
import { Button } from '../ui/button'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Truck className="h-6 w-6 text-blue-600" />
          <span className="font-bold text-xl">AHS Driving</span>
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 right-0 bg-white md:relative md:top-0 md:bg-transparent md:flex md:items-center md:space-x-6 text-sm font-medium`}>
          <Link href="/about" className="block py-2 px-4 hover:text-blue-600 transition-colors md:p-0">About Us</Link>
          <div className="relative group">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center py-2 px-4 hover:text-blue-600 transition-colors focus:outline-none md:p-0"
            >
              Truck Courses <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {(isOpen || isMobileMenuOpen) && (
              <div className="md:absolute md:top-full md:left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link href="/courses/light-rigid" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600" role="menuitem">Light Rigid (LR)</Link>
                  <Link href="/courses/medium-rigid" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600" role="menuitem">Medium Rigid (MR)</Link>
                  <Link href="/courses/heavy-rigid" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600" role="menuitem">Heavy Rigid (HR)</Link>
                  <Link href="/courses/heavy-combination" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600" role="menuitem">Heavy Combination (HC)</Link>
                  <Link href="/courses/multi-combination" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600" role="menuitem">Multi Combination (MC)</Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/faq" className="block py-2 px-4 hover:text-blue-600 transition-colors md:p-0">FAQ's</Link>
          <Link href="/contact" className="block py-2 px-4 hover:text-blue-600 transition-colors md:p-0">Contact</Link>
        </nav>

        <Button className="hidden md:block" variant="default">Book A Course</Button>
      </div>
    </header>
  )
}