import React from 'react'

export default function ProductDescription() {
  return (
    <div className='mt-20'>
        <div className='flex gap-3 mb-4'>
            <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36 '>Description</button>
            <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36 '>Care Guide</button>
            <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36 '>Size Guide</button>
        </div>
        <div className='flex flex-col pb-16'>
            <p className='text-sm'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum ratione sunt quasi officia rerum voluptatibus assumenda excepturi, earum repellendus. Ut facilis ratione tenetur exercitationem quae molestias quisquam animi accusantium tempore.

            </p>
            <p className='text-sm'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi recusandae inventore voluptatum aliquam, nam assumenda molestias? Totam dolore accusantium quisquam mollitia. Qui, reiciendis sunt quidem accusantium saepe eaque molestias quia.
            </p>
        </div>
    </div>
  )
}
