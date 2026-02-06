import './Header.css'
export default function Header(props)
{
    return(
        <header>
        <h1>{props.title}</h1>
        <nav className="navigation">
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Contact</a>
        </nav>
        </header>
    )
}