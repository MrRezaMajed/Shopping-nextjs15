"use client"

import { useShoppingCartContext } from "@/context/ShoppingCartContext"

interface IAddToCartProps{
  id: string
}

function AddToCart({id}: IAddToCartProps) {

  const {cartItems, handleIncreaseProductQty, getProductQty, handleDecreaseProductQty, handleRemoveProduct} = useShoppingCartContext();

  return (
    <div>
      <div className='mt-4'>
        <button onClick={() => handleIncreaseProductQty(parseInt(id))} className='px-4 py-2 rounded bg-sky-500 text-white'>+</button>
        <span className='mx-4'>{getProductQty(parseInt(id))}</span>
        <button onClick={() => handleDecreaseProductQty(parseInt(id))} className='px-4 py-2 rounded bg-sky-500 text-white'>-</button>
      </div>
      <button onClick={() => handleRemoveProduct(parseInt(id))} className="bg-red-500 text-white rounded px-11 py-2 mt-2">حذف</button>
    </div>
    
  )
}

export default AddToCart