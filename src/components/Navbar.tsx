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
            title: "خانه "
        },
        {
            href: "/store",
            title: "فروشگاه "
        },
    ]
  return (
    <nav className='shadow p-4'>
        <Container>
            <div className='flex flex-row-reverse justify-between'>
                <div className=''>
                    {navLinks.map((item => (
                        <Link href={item.href} key={item.href}
                        className={`mr-4 ${pathname === item.href ? "text-sky-500" : ""}`}>
                            {item.title}
                        </Link>
                    )))}
                </div>
                <div className=''>
                    <Link href="/cart">
                        <span>سبد خرید</span>
                    </Link>
                </div>
            </div>
        </Container>
    </nav>
  )
}

export default Navbar