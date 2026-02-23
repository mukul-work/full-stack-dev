import '../assets/css/Components.css'

export default function Header({searchTerm, setSearchTerm}){

    return(
        <div className='header'>
            <div className='heading'>
                <img src="https://imgs.search.brave.com/Ms4aZWUvWUh5b8Vxg_5pDkZm31keZQWBTt-qtR3IPfY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvaW1hZ2VzL2hv/bWUtbG9nb3MvQ2xl/YW5pbmctbG9nby0t/LXdhdGVyLWRyb3At/aW4tYS1oZXhhZ29u/LXNoYXBlLmpwZw" alt="" />
                <h2>React Demo App</h2>
            </div>

            <div className="search">
                <p>Search Items: </p>
                <input type="text" id="productInput" name="product" placeholder="Enter a product" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>
        </div>
    )
}