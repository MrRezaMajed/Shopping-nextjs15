import { formatNumberWithCommas } from '@/utils/formatNumberWithCommas'
import Image from 'next/image'
import React from 'react'

export interface IProductItemProps{
    id: number,
    image: string,
    title: string,
    description: string,
    price: number
}
function ProductItem({image,title,price}: IProductItemProps) {
  return (
    <div className='shadow-md rounded-xl hover:shadow-green-500'>
        <Image className='w-full h-[200px] rounded-t-xl' src={image} width={300} height={300} alt=""/>
        <div className='p-3 text-right rtl'>
            <h3>{title}</h3>
            <p className='mt-4'>قیمت: <span>{formatNumberWithCommas(price)} تومان</span></p>
        </div>
    </div>
  )
}

export default ProductItem