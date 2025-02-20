'use client'
import { urlImageFor } from '@/lib/sanityClient'
import { deleteProduct, increaseProduct, reduceProduct } from '@/redux/orebiSlice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { ImCross } from 'react-icons/im'
import { useDispatch } from 'react-redux'
import { ProductProps } from '../../type'
import Price from './Price'

interface Props{
    item: ProductProps
}

const CartItem = ({item}: Props) => {
    const dispatch = useDispatch()

    const deleteItem =() => {
        const confirmDelete = window.confirm(`Are you sure you want to delete ${item.title}?`)
        confirmDelete && dispatch(deleteProduct(item._id))
        toast.success("Product deleted successfully")
    }
  return (
    <div className='w-full grid grid-cols-5 mb-4 border py-2'>
        <div className='flex col-span-5 md:col-span-2 items-center gap-4 ml-4'>
            <ImCross 
                // onClick={() => {dispatch(deleteProduct(item._id))
                // toast.success("Product deleted successfully")}}
                onClick={deleteItem}
                className='text-primeColor hover:text-red-600 cursor-pointer duration-300'
            />
            <Link href={`/product/${item?.slug?.current}`}>
                <Image 
                    src={urlImageFor(item?.image).url()} 
                    alt="item image" width={50} height={50}
                    className="w-32 h-32 object-contain"
                />
            </Link>
            <h1 className='font-semibold'>{item?.title}</h1>
        </div>
        <div className='col-span-5 md:col-span-3 flex items-center justify-between py-4 md:py-0 px-4 lg:px-0 gap-6'>
            <p className='flex w-1/3 items-center text-lg font-semibold'><Price amount={item?.price}/></p>
            <div className='flex w-1/3 items-center gap-6 text-lg'>
                <span 
                    onClick={() => {dispatch(reduceProduct({_id: item?._id}))
                    toast.success("Product reduced successfully")}}
                    className='w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300
                    border-[1px] border-gray-300 hover:border-gray-500'>
                    -
                </span>
                <p>{item?.quantity}</p>
                <span 
                    onClick={() => {dispatch(increaseProduct({_id: item?._id}))
                    toast.success("Product added successfully")}}
                    className='w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300
                    border-[1px] border-gray-300 hover:border-gray-500'>
                    +
                </span>
            </div>
            <div className='w-1/3 flex items-center font-titleFont font-bold text-lg'>
                <p>{item?.quantity * item?.price}</p>
            </div>
        </div>
        <Toaster
            position='bottom-right'
            toastOptions={{
                style:{
                    background: "#000",
                    color: "#fff"
                }
            }}
        />
    </div>
  )
}

export default CartItem