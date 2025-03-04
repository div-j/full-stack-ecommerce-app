import React, { useContext } from 'react'
import { ShopContext } from './../context/ShopContext';
import { useParams } from 'react-router';
import ProductHd from '../components/ProductHd';
import ProductDisplay from '../components/ProductDisplay';
import ProductDescription from '../components/ProductDescription';
import RelatedProducts from '../components/RelatedProducts';

export default function Product() {
   const {all_products} = useContext(ShopContext)
   const {productId} = useParams()
   console.log(productId);
   
   const product = all_products.find(product => product.id === Number(productId))

   if (!product) {
     return <div>Product not found</div>
   }

  return (
    < section className='max_padd_container py-28'>
      <div>
          {/* <ProductHd product={product}/> */}
          <ProductDisplay product ={product}/>
          <ProductDescription/>
          <RelatedProducts/>
      </div>
    </section>
  )
}
