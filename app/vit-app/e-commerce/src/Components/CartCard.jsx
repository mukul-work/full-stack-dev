export function CartCard({cartItem, removeFromCart}){
    return(
        <>
            <img src={cartItem.image} alt={cartItem.name} />
            <h4>{cartItem.name}</h4>
            <p>${cartItem.price}</p>
            <button onClick={() => removeFromCart(cartItem.id)}>Remove from Cart</button>
        </>
    );
}