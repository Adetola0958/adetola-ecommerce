import { urlImageFor } from '@/lib/sanityClient'
import React from 'react'
import Image from '../../node_modules/next/image'
import Link from '../../node_modules/next/link'
import { ProductProps } from '../../type'
import Price from './Price'

interface Props{
    products: ProductProps[]
}

const Onsale = ({products}:Props) => {
  return (
    <div>
        <h3 className='text-xl font-semibold mb-6 underline underline-offset-4 decoration-1px'>Products on sale</h3>
        <div className='flex flex-col gap-2 justify-normal'>
            {products?.map((product:ProductProps) => (
                <Link href={`/product/${product?.slug?.current}`} key={product._id} className='flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2'>   
                    <Image src={urlImageFor(product?.image).url()} alt="Product Image"
                        className='w-24 object-contain' width={200} height={200}
                    />
                   
                    <div className='flex flex-col gap-2'>
                        <p className='text-sm tracking-tighter font-medium'>{product?.title.substring(0,7)}</p>
                        <p className='text-sm font-semibold'>
                            <Price amount={product?.price}/>
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Onsale