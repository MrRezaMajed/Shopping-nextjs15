import React from 'react'

interface IProductProps{
    id: string,
    image: string,
    title: string,
    description: string,
    price: number
}
function ProductItem({image,title,price}: IProductProps) {
  return (
    <div className='shadow-md rounded-xl'>
        <img src={image}  alt=""/>
        <div className='p-3 text-right rtl'>
            <h3>{title}</h3>
            <p>قیمت: <span>{price}$</span></p>
        </div>
    </div>
  )
}

export default ProductItem