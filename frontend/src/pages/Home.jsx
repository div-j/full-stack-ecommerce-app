import React from 'react'
import Hero from '../components/Hero'
import Popular_products from '../components/Product_list'
import Offer from '../components/Offer'
import NewCollections from '../components/NewCollections'
import NewsLetter from '../components/NewsLetter'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Popular_products/>
      <Offer/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}
