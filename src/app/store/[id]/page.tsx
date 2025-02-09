import AddToCart from '@/components/AddToCart';
import Container from '@/components/Container'
import { IProductItemProps } from '@/components/ProductItem'
import { formatNumberWithCommas } from '@/utils/formatNumberWithCommas';
import Image from 'next/image'
import React from 'react'

interface IProductProps{
    params: Promise<{id: number}>;
    searchParams: Promise<{}>;
}

async function Product({params}: IProductProps) {
    const {id} = await params;
    const result = await fetch(`http://localhost:3004/products/${id}`)
    const data = await result.json() as IProductItemProps
  return (
    <Container>
        <div className='grid grid-cols-12 mt-8 shadow-md rounded-lg'>
            <div className='col-span-9 text-right p-4'>
                <h2 className='font-bold text-2xl'>{data.title}</h2>
                <p className='text-gray-600 mt-4'>{data.description}</p>
                <p className='font-bold mt-6'>قیمت: <span>{formatNumberWithCommas(data.price)} تومان</span></p>
                <AddToCart id={id} />
            </div>
            <div className='col-span-3'>
                <Image className='w-full h-full' src={data.image} width={300}
                height={300} alt="" />
            </div>
           
            
        </div>

    </Container>
  )
}

export default Product