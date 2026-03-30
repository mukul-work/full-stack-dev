export default function Header(){
    function handleBtnClick(){
        console.log("You clicked the header button");
    }
    return(
        <>
            <h1>Mukul Kashyap</h1>
            <button className="headerBtn" onClick={handleBtnClick}>Header Button</button>
        </>
    );
}