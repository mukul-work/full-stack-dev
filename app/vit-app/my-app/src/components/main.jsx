export default function Main(props)
{
    return(
        <>
            <form action="https://www.google.com" method="get">
            <input type="radio" name="vehicle1" value="Bike"></input>
            <label> I have a bike</label><br></br>
            <input type="radio" name="vehicle1" value="Car"></input>
            <label> I have a car</label><br></br>
            <input type="radio" name="vehicle1" value="Boat" ></input>
            <label> I have a boat</label><br></br>
            <input type="submit" value="Submit"></input>
            </form>
        </>
    )
}