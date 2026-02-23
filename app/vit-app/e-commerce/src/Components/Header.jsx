export default function Header({cartCount, searchTerm, setSearchTerm}){

    return(
        <>
            <h2>React Demo App</h2>
            <p>Cart Item Count: {cartCount}</p>
            <div className="search">
                    <input type="text" id = "productInput" name="product" placeholder="Enter a product" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>
        </>
    )
}