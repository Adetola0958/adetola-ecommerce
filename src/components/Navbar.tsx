"use client"
import React, { useState } from 'react'
import Image from '../../node_modules/next/image'
import Link from '../../node_modules/next/link'
import logo from "../assets/logoBlack.png"
import {FaSearch} from "react-icons/fa"
import {IoCloseOutline} from "react-icons/io5"
import {HiMenuAlt2} from "react-icons/hi"
import { usePathname } from '../../node_modules/next/navigation'
import { useSession, signOut } from 'next-auth/react'

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const pathname = usePathname()
    const {data:session} = useSession()
    const navBarList = [
        {
            title: "Home",
            url: "/"
        },
        {
            title: "Shop",
            url: "/shop"
        },
        {
            title: "Cart",
            url: "/cart"
        },
        {
            title: "Profile",
            url: "/profile"
        },
        {
            title: "Studio",
            url: "/studio"
        },
    ]
  return (
    <>

    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-400 sticky top-0 z-50'>
        <nav className='h-full max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center justify-between gap-2'>
            <Link href={"/"}>
                <Image src={logo} alt="Image logo" className='w-20'/> 
            </Link>
            <div className='relative w-full hidden md:inline-flex lg:w-[600px] h-10 text-base text-primeColor 
                border-[1px] border-black items-center gap-2 justify-between rounded-md px-6'>
                <input 
                    type="text"
                    placeholder='Search your products here' 
                    className='flex-1 h-full outline-none bg-transparent placeholder:text-gray-600'
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                />
                {
                    searchQuery ? 
                        <IoCloseOutline 
                            onClick={() => setSearchQuery("")}
                            className="w-5 h-5 hover:cursor-pointer hover:text-red-500 duration-200"
                        /> 
                    : 
                        <FaSearch className="w-5 h-5 hover:cursor-pointer"/>
                }
            </div>
            <div className='hidden md:inline-flex items-center gap-2'>
                {navBarList.map((item) => (
                    <Link href={item.url} key={item.url}
                        className={`flex hover:font-medium w-20 h-6 justify-center items-center px-12 text-gray-600 hover:underline underline-offset-4 
                            decoration-[1px] hover:text-gray-950 md:border-r-[2px] border-r-gray-5 00 duration-200 last:border-r-0
                            ${pathname === item?.url && "text-gray-950 underline"}`}>
                        {item.title}
                    </Link>
                ))}
                {session?.user && <button onClick={() => signOut()} className='flex hover:font-medium w-20 h-6 justify-center items-center px-12 text-gray-500 hover:underline underline-offset-4 decoration-[1px] hover:text-red-600 md:border-r-[2px] duration-200 last:border-r-0'>Logout</button>}
            </div>
            <HiMenuAlt2 className="inline-flex md:hidden cursor-pointer w-8 h-6 absolute" />
        </nav>
    </div>
    </>
  )
}

export default Navbar