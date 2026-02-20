import { CartCard } from "./CartCard";
export default function CartList({cart, removeFromCart, totalAmt}){
    return(
        <div>
            {cart.map(cartItem => 
            <CartCard key={cartItem.id} cartItem = {cartItem} removeFromCart={removeFromCart}/>)}
            <h2>Total Cart Amount: {totalAmt}</h2>
        </div>
    );
}