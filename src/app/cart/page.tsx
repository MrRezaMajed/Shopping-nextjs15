import CartItem from "@/components/CartItem"
import Container from "@/components/Container"


function Cart() {
  return (
    <Container>
        <h1 className="text-right my-4">سبد خرید</h1>
        <div className="">
            <CartItem />
            <CartItem />
            <CartItem />
            
        </div>
        <div className="border shadow-md text-right p-4">
            <h3 > قیمت کل: <span>275000 تومان</span></h3>
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