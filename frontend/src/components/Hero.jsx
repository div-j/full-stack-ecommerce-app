import React from 'react'

import { MdOutlineLocalOffer, MdStar } from "react-icons/md"
import { Link, NavLink } from 'react-router'

export default function Hero() {
  return (
    <div className='bg-hero bg-cover bg-center h-screen flex items-center justify-center '>
        <section className='w-[90%] h-[90%]  flex items-center '>
            <div className='flex w-[60%] flex-col justify-start space-y-4 '>
                <h1 className='font-bold text-6xl h1 max-w-[33rem]'>Digital Shopping Hub Junction</h1>
                <p className='text-xs text-gray-50 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni amet tempora vitae incidunt laborum autem suscipit, id vero ullam vel voluptatibus voluptatem ratione aut laudantium optio reprehenderit consequatur eos. Aliquam.</p>
                <div className='flex flex-col  sm:flex-row gap-4'>
                    <div className='flex gap-1 '>
                        <MdStar/>
                        <MdStar/>
                        <MdStar/>
                        <MdStar/>
                    </div>
                    <p className='text-gray-50'><span className='font-bold text-black'>198k</span> Excellent Reviews</p>
                </div>
                <div className='flex flex-col  sm:flex-row gap-4'>
                    <Link className='btn_dark_rounded text-center'>Shop Now</Link>
                    <Link className='btn_dark_rounded rounded-3xl flexCenter gap-x-2'><MdOutlineLocalOffer/> Offers</Link>
                </div>
            </div>
        </section>
    </div>
  )
}
