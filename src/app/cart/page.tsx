// "use client"
// import CartItem from "@/components/CartItem"
// import Container from "@/components/Container"
// import { IProductItemProps } from "@/components/ProductItem"
// import { useShoppingCartContext } from "@/context/ShoppingCartContext"
// import { formatNumberWithCommas } from "@/utils/formatNumberWithCommas"
// import axios from "axios"
// import { useEffect, useState } from "react"

// interface IDiscountData{
//   id: number
//   code: string
//   percentage: number
// }

// function Cart() {
//   const {cartItems} = useShoppingCartContext()

//   const [data,setData] = useState<IProductItemProps[]>([])

//   const [discountCode, setDiscountCode] = useState("")
//   const [finalPrice, setFinalPrice] = useState(0)
//   const [discountedPrice, setDiscountPrice] = useState(0)

//   useEffect(() => {
//     axios("http://localhost:3004/products").then((result) => {
//       const {data} = result
//       setData(data)
//     })
//   },[])

//   let totalPrice = cartItems.reduce((total, item) => {
//     let selectedProduct = data.find((product) => product.id == item.id)

//     return total + (selectedProduct?.price || 0) * item.qty
// }, 0)

//   const handleSubmitDiscount = () =>{
//     axios(`http://localhost:3004/discounts?code=${discountCode}`).then((result) => {
//       const data = result.data as IDiscountData[]
//       let discountedPrice = totalPrice * data[0].percentage / 100
//       let finalPrice = totalPrice - discountedPrice
//       setFinalPrice(finalPrice)
//       setDiscountPrice(discountedPrice)
//     })
//   }

//   return (
//     <Container>
//         <h1 className="text-right my-4">سبد خرید</h1>
//         <div className="">
//           {cartItems.map((item) => (
//             <CartItem key={item.id} {...item}/>
//           ))}  
//         </div>
//         <div className="border shadow-md text-right p-4">
//             <h3 > قیمت کل: <span>
//               {formatNumberWithCommas(totalPrice) } تومان</span></h3>
//             <h3 > تخفیف: <span>{formatNumberWithCommas(discountedPrice) } تومان</span></h3>
//             <h3 > قیمت نهایی: <span>{formatNumberWithCommas(finalPrice) } تومان</span></h3> 
//             <div>
//                 <button onClick={handleSubmitDiscount} className="bg-sky-600 text-white px-4 py-1 rounded">اعمال</button>
//                 <input className="text-right border" placeholder="کد تخفیف را وارد کنید" type="text" 
//                 onChange={(e) => setDiscountCode(e.target.value)}
//                 />
//             </div>
            
            
//         </div>
//     </Container>
//   )
// }

// export default Cart


// "use client"
// import CartItem from "@/components/CartItem"
// import Container from "@/components/Container"
// import { IProductItemProps } from "@/components/ProductItem"
// import { useShoppingCartContext } from "@/context/ShoppingCartContext"
// import { formatNumberWithCommas } from "@/utils/formatNumberWithCommas"
// import axios from "axios"
// import { useEffect, useState } from "react"

// interface IDiscountData {
//   id: number
//   code: string
//   percentage: number
// }

// function Cart() {
//   const { cartItems } = useShoppingCartContext()
//   const [products, setProducts] = useState<IProductItemProps[]>([])
//   const [discountCode, setDiscountCode] = useState("")
//   const [finalPrice, setFinalPrice] = useState(0)
//   const [discountedPrice, setDiscountedPrice] = useState(0)

//   useEffect(() => {
//     fetchProducts()
//   }, [])

//   const fetchProducts = async () => {
//     try {
//       const response = await axios("http://localhost:3004/products")
//       setProducts(response.data)
//     } catch (error) {
//       console.error("Error fetching products:", error)
//     }
//   }

//   const calculateTotalPrice = () => {
//     return cartItems.reduce((total, item) => {
//       const selectedProduct = products.find((product) => product.id === item.id)
//       return total + (selectedProduct?.price || 0) * item.qty
//     }, 0)
//   }

//   const applyDiscount = async () => {
//     try {
//       const response = await axios(`http://localhost:3004/discounts?code=${discountCode}`)
//       const discountData = response.data as IDiscountData[]
//       if (discountData.length > 0) {
//         const totalPrice = calculateTotalPrice()
//         const discountAmount = totalPrice * discountData[0].percentage / 100
//         const finalPrice = totalPrice - discountAmount
//         setFinalPrice(finalPrice)
//         setDiscountedPrice(discountAmount)
//       } else {
//         console.error("کد تخفیف موجود نیست.")
//       }
//     } catch (error) {
//       console.error("خطا در اعمال کد تخفیف: ", error)
//     }
//   }

//   const totalPrice = calculateTotalPrice()

//   return (
//     <Container>
//       <h1 className="text-right my-4">سبد خرید</h1>
//       <div>
//         {cartItems.map((item) => (
//           <CartItem key={item.id} {...item} />
//         ))}
//       </div>
//       <div className="border shadow-md text-right p-4">
//         <h3> قیمت کل: <span>{formatNumberWithCommas(totalPrice)} تومان</span></h3>
//         <h3> تخفیف: <span>{formatNumberWithCommas(discountedPrice)} تومان</span></h3>
//         <h3> قیمت نهایی: <span>{formatNumberWithCommas(finalPrice)} تومان</span></h3>
//         <div>
//           <input
//             className="text-right border"
//             placeholder="کد تخفیف را وارد کنید"
//             type="text"
//             onChange={(e) => setDiscountCode(e.target.value)}
//           />
//           <button onClick={applyDiscount} className="bg-sky-600 text-white px-4 py-1 rounded">اعمال</button>
//         </div>
//       </div>
//     </Container>
//   )
// }

// export default Cart

// "use client"
// import CartItem from "@/components/CartItem"
// import Container from "@/components/Container"
// import { IProductItemProps } from "@/components/ProductItem"
// import { useShoppingCartContext } from "@/context/ShoppingCartContext"
// import { formatNumberWithCommas } from "@/utils/formatNumberWithCommas"
// import axios from "axios"
// import { useEffect, useState } from "react"

// interface IDiscountData {
//   id: number
//   code: string
//   percentage: number
// }

// function Cart() {
//   const { cartItems } = useShoppingCartContext()
//   const [products, setProducts] = useState<IProductItemProps[]>([])
//   const [discountCode, setDiscountCode] = useState("")
//   const [finalPrice, setFinalPrice] = useState(0)
//   const [discountedPrice, setDiscountedPrice] = useState(0)
//   const [error, setError] = useState<string | null>(null) // State برای مدیریت خطا

//   useEffect(() => {
//     fetchProducts()
//   }, [])

//   const fetchProducts = async () => {
//     try {
//       const response = await axios("http://localhost:3004/products")
//       setProducts(response.data)
//     } catch (error) {
//       console.error("Error fetching products:", error)
//     }
//   }

//   const calculateTotalPrice = () => {
//     return cartItems.reduce((total, item) => {
//       const selectedProduct = products.find((product) => product.id === item.id)
//       return total + (selectedProduct?.price || 0) * item.qty
//     }, 0)
//   }

//   const applyDiscount = async () => {
//     try {
//       const response = await axios(`http://localhost:3004/discounts?code=${discountCode}`)
//       const discountData = response.data as IDiscountData[]
//       if (discountData.length > 0) {
//         const totalPrice = calculateTotalPrice()
//         const discountAmount = totalPrice * discountData[0].percentage / 100
//         const finalPrice = totalPrice - discountAmount
//         setFinalPrice(finalPrice)
//         setDiscountedPrice(discountAmount)
//         setError(null) // خطا را پاک کن اگر کد تخفیف معتبر بود
//       } else {
//         setError("کد تخفیف موجود نیست.") // تنظیم پیام خطا
//       }
//     } catch (error) {
//       console.error("خطا در اعمال کد تخفیف: ", error)
//       setError("خطا در اعمال کد تخفیف.") // تنظیم پیام خطا برای خطاهای دیگر
//     }
//   }

//   const totalPrice = calculateTotalPrice()

//   return (
//     <Container>
//       <h1 className="text-right my-4">سبد خرید</h1>
//       <div>
//         {cartItems.map((item) => (
//           <CartItem key={item.id} {...item} />
//         ))}
//       </div>
//       <div className="border shadow-md text-right p-4">
//         <h3> قیمت کل: <span>{formatNumberWithCommas(totalPrice)} تومان</span></h3>
//         <h3> تخفیف: <span>{formatNumberWithCommas(discountedPrice)} تومان</span></h3>
//         <h3> قیمت نهایی: <span>{formatNumberWithCommas(finalPrice)} تومان</span></h3>
//         <div className="">
//           {error && <span className="text-red-500 text-sm mt-2">{error}</span>} {/* نمایش خطا */}

//           <button onClick={applyDiscount} className="bg-sky-600 text-white px-4 py-2 rounded">
//             اعمال
//           </button>
//           <input
//             className="text-right border p-2"
//             placeholder="کد تخفیف را وارد کنید"
//             type="text"
//             onChange={(e) => setDiscountCode(e.target.value)}
//           />

//         </div>
//       </div>
//     </Container>
//   )
// }

// export default Cart


// "use client"
// import CartItem from "@/components/CartItem"
// import Container from "@/components/Container"
// import { IProductItemProps } from "@/components/ProductItem"
// import { useShoppingCartContext } from "@/context/ShoppingCartContext"
// import { formatNumberWithCommas } from "@/utils/formatNumberWithCommas"
// import axios from "axios"
// import { useEffect, useState } from "react"

// interface IDiscountData {
//   id: number
//   code: string
//   percentage: number
// }

// function Cart() {
//   const { cartItems } = useShoppingCartContext()
//   const [products, setProducts] = useState<IProductItemProps[]>([])
//   const [discountCode, setDiscountCode] = useState("")
//   const [finalPrice, setFinalPrice] = useState(0)
//   const [discountedPrice, setDiscountedPrice] = useState(0)
//   const [error, setError] = useState<string | null>(null) // State برای مدیریت خطا

//   useEffect(() => {
//     fetchProducts()
//   }, [])

//   const fetchProducts = async () => {
//     try {
//       const response = await axios("http://localhost:3004/products")
//       setProducts(response.data)
//     } catch (error) {
//       console.error("Error fetching products:", error)
//     }
//   }

//   const calculateTotalPrice = () => {
//     return cartItems.reduce((total, item) => {
//       const selectedProduct = products.find((product) => product.id === item.id)
//       return total + (selectedProduct?.price || 0) * item.qty
//     }, 0)
//   }

//   const applyDiscount = async () => {
//     try {
//       const response = await axios(`http://localhost:3004/discounts?code=${discountCode}`)
//       const discountData = response.data as IDiscountData[]
//       if (discountData.length > 0) {
//         const totalPrice = calculateTotalPrice()
//         const discountAmount = totalPrice * discountData[0].percentage / 100
//         const finalPrice = totalPrice - discountAmount
//         setFinalPrice(finalPrice)
//         setDiscountedPrice(discountAmount)
//         setError(null) // خطا را پاک کن اگر کد تخفیف معتبر بود
//       } else {
//         setError("کد تخفیف موجود نیست.") // تنظیم پیام خطا
//       }
//     } catch (error) {
//       console.error("خطا در اعمال کد تخفیف: ", error)
//       setError("خطا در اعمال کد تخفیف.") // تنظیم پیام خطا برای خطاهای دیگر
//     }
//   }

//   const totalPrice = calculateTotalPrice()

//   return (
//     <Container>
//       <h1 className="text-right my-4">سبد خرید</h1>
//       <div>
//         {cartItems.map((item) => (
//           <CartItem key={item.id} {...item} />
//         ))}
//       </div>

//       {/* نمایش بخش مبلغ نهایی و تخفیف فقط اگر محصولی در سبد خرید باشد */}
//       {cartItems.length > 0 && (
//         <div className="border shadow-md text-right p-4">
//           <h3> قیمت کل: <span>{formatNumberWithCommas(totalPrice)} تومان</span></h3>
//           <h3> تخفیف: <span>{formatNumberWithCommas(discountedPrice)} تومان</span></h3>
//           <h3> قیمت نهایی: <span>{formatNumberWithCommas(finalPrice)} تومان</span></h3>

//           {/* نمایش بخش کد تخفیف فقط اگر محصولی در سبد خرید باشد */}
//           <div className="">
//             {error && <span className="text-red-500 text-sm mt-2">{error}</span>} {/* نمایش خطا */}

//             <button onClick={applyDiscount} className="bg-sky-600 text-white px-4 py-2 rounded">
//               اعمال
//             </button>
//             <input
//               className="text-right border p-2"
//               placeholder="کد تخفیف را وارد کنید"
//               type="text"
//               onChange={(e) => setDiscountCode(e.target.value)}
//             />
//           </div>
//         </div>
//       )}
//     </Container>
//   )
// }

// export default Cart


"use client"
import CartItem from "@/components/CartItem"
import Container from "@/components/Container"
import { IProductItemProps } from "@/components/ProductItem"
import { useShoppingCartContext } from "@/context/ShoppingCartContext"
import { formatNumberWithCommas } from "@/utils/formatNumberWithCommas"
import axios from "axios"
import { useEffect, useState } from "react"

interface IDiscountData {
  id: number
  code: string
  percentage: number
}

// کامپوننت مجزا برای نمایش بخش قیمت‌ها
const PriceSection = ({ label, value }: { label: string; value: number }) => (
  <h3 className="text-right mb-2">
    <span>{label}: </span>
    <span className="font-semibold">
      {formatNumberWithCommas(value)} تومان
    </span>
  </h3>
)

function Cart() {
  const { cartItems } = useShoppingCartContext()
  const [products, setProducts] = useState<IProductItemProps[]>([])
  const [discountCode, setDiscountCode] = useState("")
  const [finalPrice, setFinalPrice] = useState(0)
  const [discountedPrice, setDiscountedPrice] = useState(0)
  const [error, setError] = useState<string | null>(null)

  // هوک سفارشی برای دریافت محصولات
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3004/products")
      setProducts(data)
    } catch (error) {
      console.error("خطا در دریافت محصولات:", error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  // محاسبه قیمت کل با استفاده از useMemo برای بهینه‌سازی
  const totalPrice = cartItems.reduce((total, item) => {
    const product = products.find(p => p.id === item.id)
    return total + (product?.price || 0) * item.qty
  }, 0)

  // مدیریت اعمال کد تخفیف
  const handleDiscount = async () => {
    if (!discountCode.trim()) {
      setError("لطفا کد تخفیف را وارد کنید")
      return
    }

    try {
      const { data } = await axios.get<IDiscountData[]>(
        `http://localhost:3004/discounts?code=${discountCode}`
      )

      if (data.length === 0) {
        setError("کد تخفیف معتبر نیست")
        return
      }

      const discount = data[0]
      const discountAmount = totalPrice * (discount.percentage / 100)
      
      setDiscountedPrice(discountAmount)
      setFinalPrice(totalPrice - discountAmount)
      setError(null)
    } catch (error) {
      console.error("خطا در اعمال تخفیف:", error)
      setError("خطا در ارتباط با سرور")
    }
  }

  return (
    <Container className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-right mb-8">سبد خرید شما</h1>

      {/* لیست محصولات */}
      <div className="space-y-4 mb-8">
        {cartItems.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      {/* بخش قیمت‌ها و تخفیف */}
      {cartItems.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className=" mb-6">
            <PriceSection label="قیمت کل" value={totalPrice} />
            <PriceSection label="تخفیف" value={discountedPrice} />
            <PriceSection label="قیمت نهایی" value={finalPrice} />
          </div>

          {/* فرم تخفیف */}
          <div className="">
            <div className="text-right">
            {error && (
              <span className="text-red-600 text-sm text-right animate-pulse">
                {error}
              </span>
            )}
            <button
                onClick={handleDiscount}
                className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-colors"
              >
                اعمال کد
              </button>
              <input
                type="text"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                placeholder="کد تخفیف خود را وارد کنید"
                className="flex-1 border rounded-lg p-3 text-right focus:ring-2 focus:ring-sky-500"
              />
              
            </div>
          </div>
        </div>
      )}

      {/* حالت سبد خالی */}
      {cartItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">سبد خرید شما خالی است</p>
        </div>
      )}
    </Container>
  )
}

export default Cart