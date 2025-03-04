import React from 'react'

export default function NewsLetter() {
  return (
    <div className='bg-white max_padd_container py-12 xl:py-28'>
        <section className='xl:w-[88%] mx-auto flexCenter flex-col gap-y-8 w-full max-w-[666px]'>
            <h3 className='h3'>Get Exclusive offers on your Email</h3>
            <h4 className='uppercase bold-18'>Subscibe to our newsletter and stay updated</h4>
            <div className='flexCenter rounded-full ring-1 ring-slate-900/15 bg-primary w-full max-w-[588px] '>
                <input type="email" placeholder='Your email Adrres'
                className='w-full bg-transparent outline-none ml-7 border-none regular-16'
                />
                <button className='btn_dark_rounded'>Subscribe</button>
            </div>
        </section>
    </div>
  )
}
