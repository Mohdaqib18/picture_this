import React, {useContext,useState} from "react"
import {Context} from "../Context"
import CartElement from "../components/CartElement"

function Cart() {

    const {cartItems, emptyCart} = useContext(Context)
    const [buttonText , setButtonText] = useState("Place Order")

    const cartElements = cartItems.map(item => {
      return <CartElement key={item.id}  item={item} />
    })

    const totalCost = cartElements.length * 5.99;
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
   
    function handleButtonClick(){
        setButtonText("Ordering...")
        setTimeout(()=>{
            console.log("order placed");
            setButtonText("Place Order")
            emptyCart();
        }, 3000)
    }


    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartElements}
            <p className="total-cost">Total:{totalCostDisplay} </p>
            <div className="order-button">
            {cartItems.length !== 0 ?<button onClick={handleButtonClick}>{buttonText}</button> : <div><h4>Order Placed...No orders are pending</h4><p>Add items to your cart to place a new order</p></div>}
            </div>
        </main>
    )
}

export default Cart