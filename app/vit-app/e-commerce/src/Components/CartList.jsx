import { CartCard } from "./CartCard";
export default function CartList({cartCount,  cart, removeFromCart, totalAmt }) {

  return(
        <div>
            <p>Cart Item Count: {cartCount}</p>
            {cart.map(cartItem => 
            <CartCard key={cartItem.id} cartItem = {cartItem} removeFromCart={removeFromCart}/>)}
            <h2>Total Cart Amount: {totalAmt}</h2>
            <form>
                <input type="text" placeholder="Street No."/>
                <input type="text" placeholder="Block"/>
                <input type="text" placeholder="City" />
                <input type="number" placeholder="Pincode"/>
            </form>
        </div>
    );
}

