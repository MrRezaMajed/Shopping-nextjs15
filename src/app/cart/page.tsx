"use client"
import CartItem from "@/components/CartItem"
import Container from "@/components/Container"
import { IProductItemProps } from "@/components/ProductItem"
import { useShoppingCartContext } from "@/context/ShoppingCartContext"
import { formatNumberWithCommas } from "@/utils/formatNumberWithCommas"
import axios from "axios"
import { useEffect, useState } from "react"


function Cart() {
  const {cartItems} = useShoppingCartContext()

  const [data,setData] = useState<IProductItemProps[]>([])

  useEffect(() => {
    axios("http://localhost:3004/products").then((result) => {
      const {data} = result
      setData(data)
    })
  },[])
  return (
    <Container>
        <h1 className="text-right my-4">سبد خرید</h1>
        <div className="">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item}/>
          ))}  
        </div>
        <div className="border shadow-md text-right p-4">
            <h3 > قیمت کل: <span>
              {formatNumberWithCommas(
                cartItems.reduce((total, item) => {
                let selectedProduct = data.find((product) => product.id == item.id)

                return total + (selectedProduct?.price || 0) * item.qty
            }, 0)) } تومان</span></h3>
            <h3 > تخفیف: <span>275 تومان</span></h3>
            <h3 > قیمت نهایی: <span>255000 تومان</span></h3> 
            <div>
                <button className="bg-sky-600 text-white px-4 py-1 rounded">اعمال</button>
                <input className="text-right border" placeholder="کد تخفیف را وارد کنید" type="text" />
            </div>
            
            
        </div>
    </Container>
  )
}

export default Cart