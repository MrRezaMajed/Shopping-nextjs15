import Container from '@/components/Container'
import ProductItem from '@/components/ProductItem'
import Link from 'next/link'
import React from 'react'

function Store() {

    const data = [
        {
            id: "1",
            image: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg",
            title: " محصول یک",
            describtion: "محصولی از برند اصلی",
            price: 2000
        },
        {
            id: "2",
            image: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg",
            title: "محصول دو",
            describtion: "محصولی از برند اصلی",
            price: 3000
        },
        {
            id: "3",
            image: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg",
            title: "محصول سه",
            describtion: "محصولی از برند اصلی",
            price: 4000
        },
        {
            id: "4",
            image: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg",
            title: "محصول چهار",
            describtion: "محصولی از برند اصلی",
            price: 5000
        },
        {
            id: "5",
            image: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg",
            title: "محصول پنج",
            describtion: "محصولی از برند اصلی",
            price: 6000
        }
    ]
  return (
    <Container>
        
        <h2 className='text-right py-4'>فروشگاه</h2>
        <div className='grid grid-cols-4 gap-4'>
        {
            data.map((item) => (
                <Link key={item.id} href={`/store/${item.id}`}>
                    <ProductItem {...item}/> 
                </Link>
                
            ))
        }
        
           
        </div>
    </Container>
  )
}

export default Store