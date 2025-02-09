// import axios from 'axios'
// import Image from 'next/image'
// import React, { useEffect, useState } from 'react'
// import { IProductItemProps } from './ProductItem'
// import AddToCart from './AddToCart'

// interface CartItemProps{
//   id: number,
//   qty: number
// }

// function CartItem({id,qty}: CartItemProps) {

//   const [data, setData] = useState({} as IProductItemProps)

//   useEffect(() => {
//     axios(`http://localhost:3004/products/${id}`).then(result => {
//       const {data} = result
//       setData(data)
//     })
//   },[])

//   return (
//     <div className="grid grid-cols-12 bg-slate-100 mb-4 rounded-xl"> 
//                 <div className="col-span-10 text-right p-4">
//                     <h2 className="text-xl font-bold">{data.title}</h2>
//                     <p>تعداد: <span>{qty}</span></p>
//                     <p>قیمت: <span>{data.price} تومان</span></p>
//                     <AddToCart id={id}/>
//                 </div>
//                 <Image className="col-span-2 rounded-e-xl w-full h-full" src={data.image} width={400} height={400} alt=""/>
//             </div>
//   )
// }
// export default CartItem

import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IProductItemProps } from './ProductItem'
import AddToCart from './AddToCart'
import { formatNumberWithCommas } from '@/utils/formatNumberWithCommas'

interface CartItemProps {
  id: number
  qty: number
}

function CartItem({ id, qty }: CartItemProps) {
  const [product, setProduct] = useState<IProductItemProps | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3004/products/${id}`)
        setProduct(response.data)
      } catch (err) {
        setError('خطا در دریافت اطلاعات محصول')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) return <div className="text-center py-4">در حال بارگذاری...</div>
  if (error) return <div className="text-center text-red-500 py-4">{error}</div>
  if (!product) return <div className="text-center py-4">محصول یافت نشد</div>

  return (
    <div className="grid grid-cols-12 bg-slate-100 mb-4 rounded-xl overflow-hidden">
      {/* Product Details */}
      <div className="col-span-10 text-right p-4">
        <h2 className="text-xl font-bold">{product.title}</h2>
        <p className="mt-2">
          تعداد: <span className="font-semibold">{formatNumberWithCommas(qty)}</span>
        </p>
        <p className="mt-2">
          قیمت: <span className="font-semibold">{formatNumberWithCommas(product.price)} تومان</span>
        </p>
        <div className="mt-4">
          <AddToCart id={id} />
        </div>
      </div>

      {/* Product Image */}
      <div className="col-span-2 relative">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  )
}

export default CartItem