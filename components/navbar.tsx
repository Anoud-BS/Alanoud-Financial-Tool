"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold">Brand</span>
        </Link>
        <nav className="ml-auto hidden gap-6 md:flex">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <div className="ml-auto md:ml-4 flex gap-2">
          <Button variant="outline" className="hidden md:inline-flex">
            Log In
          </Button>
          <Button className="hidden md:inline-flex">Sign Up</Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="w-full">
                Log In
              </Button>
              <Button className="w-full">Sign Up</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
