import React from 'react'
import Link from '../../node_modules/next/link'
import Image from '../../node_modules/next/image'
import logo from "../assets/logoLight.png"
import {IoReturnDownBack} from "react-icons/io5"

const StudioHeader = (props:any) => {
  return (
    <div>
        <div className='p-5 bg-black text-gray-100 flex items-center justify-between'>
            <Link href={"/"} className="flex items-center gap-3 font-semibold hover:text-blue-600 duration-200">
                <IoReturnDownBack className="text-2xl"/>Go back to websiate
            </Link>
            <Image src={logo} alt="logo" className='w-24'/>
            <p className='text-small'>Admin Studio for Adetola Online Shopping</p>
        </div>
        {props.renderDefault(props)}
    </div>
  )
}

export default StudioHeader