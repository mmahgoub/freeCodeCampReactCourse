/**
 * Why React?
 * 
 * 1. Composable code
 * 2. It's declarative
 *  
 */

//Challenge 3
function Nav(){
    return (
        <nav>
            <h1>My Website</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
ReactDOM.render(
    <div>
        <Nav />
    </div>
    , document.getElementById("root"))