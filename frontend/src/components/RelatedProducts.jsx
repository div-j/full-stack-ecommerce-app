import React from 'react'
import { ProductCard } from './ProductCard'
import POPULAR from '../assets/popular'

export default function RelatedProducts() {
  return (
    <section className='bg-primary'>
    <div className='max_padd_container py-12 xl:py-28 xl:w-[88%]'>
        <h3 className='h3 text-center'>Related Products</h3>
        <hr className=' h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16 ' />
        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
              {POPULAR.map((product) => (
        <ProductCard key={product.id} product={product} />
    ))}
        </div>
    </div>
  
</section>
  )
}
