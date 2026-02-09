import './Header.css'
export default function Header({card})
{
    return(
        <header>
            {card}
        <nav className="navigation">
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Contact</a>
        </nav>
        </header>
    )
}