'use client'
import Container from '@/components/Container'
import ListProduct from '@/components/ListProduct'
import Product from '@/components/Product'
import { allProducts } from '@/lib/sanityClient'
import React, { useEffect, useState } from 'react'
import {BsGridFill} from 'react-icons/bs'
import {ImList} from 'react-icons/im'
import { ProductProps } from '../../../../type'

const ShopPage = () => {
  const [showGrid, setShowGrid] = useState(true)
  const [showList, setShowList] = useState(false)
  const [productData, setProductData] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      try {
        const data = await allProducts()
        setProductData(data)
      } catch (error) {
        console.error("Error fetching product data:", error)
      }
    }
    fetchData()
  }, [])
  return (
    <Container>
      <div className='flex item-center justify-between pb-10'>
        <h2 className='text-2xl text-primeColor font-bold'>All Products</h2>
        <div className='flex items-center gap-4'>
          <span 
            onClick={() => {setShowGrid(true); setShowList(false)}}
            className={`${showGrid ? 'bg-primeColor text-white' : 'border-1px border-gray-300 text-[#737373]'}
            w-8 h-8 text-lg flex items-center justify-center cursor-pointer`}>
            <BsGridFill/>
          </span>
          <span 
            onClick={() => {setShowGrid(false); setShowList(true)}}
            className={`${showList ? 'bg-primeColor text-white' : 'border-1px border-gray-300 text-[#737373]'}
            w-8 h-8 text-lg flex items-center justify-center cursor-pointer`}>
            <ImList/>
          </span>
        </div>
      </div>
      {
        showGrid ? 
          <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
            {productData?.map((product: ProductProps) => (
              <Product key={product?._id} product={product}/>
            ))}
          </div>
        :
          <div className='w-full grid grid-cols-1 gap-5'>
            {productData?.map((product: ProductProps) => (
              <ListProduct key={product?._id} product={product}/>
            ))}
          </div>
      }
    </Container>
  )
}

export default ShopPage