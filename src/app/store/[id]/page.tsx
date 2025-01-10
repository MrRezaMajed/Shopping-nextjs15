import Container from '@/components/Container'
import Image from 'next/image'
import React from 'react'

function Product() {
  return (
    <Container>
        <div className='grid grid-cols-12 mt-8 shadow-md'>
            <div className='col-span-9 rtl text-right p-4'>
                <h2 className='font-bold text-2xl'>Product 1</h2>
                <p className='text-gray-600 mt-4'>gfgfg gffdsgsgfs gsdgdsgds gdsgdsg gddgds</p>
                <p className='font-bold mt-6'>قیمت: <span>2000</span></p>
                <div className='mt-4'>
                    <button className='px-4 py-2 rounded bg-sky-500 text-white'>+</button>
                    <span className='mx-4'>3</span>
                    <button className='px-4 py-2 rounded bg-sky-500 text-white'>-</button>
                </div> 
            </div>
            <div className='col-span-3'>
                <Image src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg" width={300}
                height={300} alt="" />
            </div>
           
            
        </div>

    </Container>
  )
}

export default Product