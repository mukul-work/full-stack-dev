import './Footer.css'
export default function Footer(props)
{
    return(
        <footer>
            <div>
                <p>© {props.year} MyWebsite. {props.statement}</p>
            </div>
        </footer>
    )
}