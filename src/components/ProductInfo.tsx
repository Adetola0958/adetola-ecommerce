'use client'
import { addToCart } from '@/redux/orebiSlice'
import React from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { ProductProps } from '../../type'
import Price from './Price'

interface Props{
    product: ProductProps
}

const ProductInfo = ({product}: Props) => {
    const dispatch = useDispatch()
  return (
    <div className='flex flex-col gap-5'>
        <h2 className='text-4xl font-semibold'>{product?.title}</h2>
        <div className='flex items-center gap-4'>
            {product?.rowprice != null ?
                <p className='text-lg font-normal text-gray-500 line-through'>
                    <Price amount={product?.rowprice}/>
                </p> : null
            }
            <Price amount={product?.price} className='text-lg font-bold'/>
            {product?.rowprice != null ?
                <p className='text-lg font-normal text-gray-500 line-through'>
                    you saved{" "}<Price className='bg-green-700 text-white px-2 rounded-md' amount={product?.rowprice - product?.price}/>{" "}from this item
                </p> : <p>This is the cheapest price you can get anywhere</p>
            }
        </div>
        <p className='text-sm tracking-wide text-gray-600'>{product?.description}</p>
        <p className='text-sm text-gray-500'>Be the first to leave a review</p>
        <button 
            onClick={() => {dispatch(addToCart(product))
            toast.success("product added successfully")}}
            className='w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg text-md'>
                Add to cart
        </button>
        <p>
            <span>Category(ies):</span> Spring collection, Streetwear, Women Tags: featured SKU: N/A
        </p>
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

export default ProductInfo