import Image from 'next/image'
import React from 'react'

function CartItem() {
  return (
    <div className="grid grid-cols-12 bg-slate-100 mb-4 rounded-xl"> 
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
                <Image className="col-span-2 rounded-e-xl" src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg" width={400} height={400} alt=""/>
            </div>
  )
}
export default CartItem