import React from 'react'
import Hero from '../components/Hero'
import Popular_products from '../components/Product_list'
import Offer from '../components/Offer'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Popular_products/>
      <Offer/>
    </div>
  )
}
