export function ProductCard({product, addToCart, removeFromCart}){
    return(
        <div className="productCard">
            <div className="top">
                <img src={product.image} alt={product.name} />
            </div>

            <div className="bottom">
                <h4>{product.name}</h4>
                <p>${product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
            
        </div>
    );
}