"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Container from './Container'

function Navbar() {

    const pathname = usePathname()
    const navLinks = [
        {
            href: "/",
            title: "Home"
        },
        {
            href: "/store",
            title: "Store"
        },
    ]
  return (
    <nav className='shadow p-4'>
        <Container>
            {navLinks.map((item => (
                <Link href={item.href} key={item.href}
                className={`mr-4 ${pathname === item.href ? "text-sky-500" : ""}`}>
                    {item.title}
                </Link>
            )))}
        </Container>
    </nav>
  )
}

export default Navbar