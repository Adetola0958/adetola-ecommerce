'use client'
import React from 'react'
import Container from './Container'
import Slider from 'react-slick'
import Product from './Product'
import { ProductProps } from '../../type'
import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'

interface Props{
    products: ProductProps[]
}

const NewArrivals = ({products}:Props) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                breakpoints: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoints: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
                breakpoints: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
        ]
    }
  return (
    <Container className='-mt-60'>
        <div className="">
            <Slider {...settings}>
                {products?.map((product: ProductProps) => (
                    <div key={product?._id} className="px-2">
                        <Product product={product}/>
                    </div>
                ))}
            </Slider>
        </div>
    </Container>
  )
}

export default NewArrivals