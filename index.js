/**
 * Why React?
 * 
 * 1. Composable code
 * 2. It's declarative
 *  
 */

function MainContent(){
    return (
        <div>
            <h1>Here geos our title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et minus amet officiis temporibus earum quod iusto, qui possimus? Expedita eaque temporibus in neque ipsa rerum ab vero nihil facere officia.</p>
        </div>
    )
}


ReactDOM.render(
<div>
    <MainContent />
</div>
, document.getElementById('root'))

// //Challenge 2
// const root = document.getElementById('root');
// const h1 = document.createElement('h1');
// h1.className = "header"
// h1.textContent = "Hi"
// root.appendChild(h1);
