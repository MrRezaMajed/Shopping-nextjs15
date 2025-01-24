import Image from 'next/image'
import React from 'react'

function CartItem() {
  return (
    <div className="grid grid-cols-12 bg-slate-100 mb-4"> 
                <div className="col-span-10 text-right p-4">
                    <h2 className="text-xl font-bold">Product Name</h2>
                    <p>تعداد: <span>3</span></p>
                    <p>قیمت: <span>2000تومان</span></p>
                    <div className='mt-4'>
                        <button className='px-4 py-2 rounded bg-sky-500 text-white'>+</button>
                        <span className='mx-4'>3</span>
                        <button className='px-4 py-2 rounded bg-sky-500 text-white'>-</button>
                    </div> 
                </div>
                <Image className="col-span-2" src="https://www.gfxdownload.ir/uploads/posts/2024-09/fox1.jpg" width={300} height={300} alt=""/>
            </div>
  )
}

export default CartItem