
import { useState } from 'react'

function Page() {

    const [topTextVal, setTopTextVal] = useState('')
    const [bottomTextVal, setBottomTextVal] = useState('')

    function handelClick(e) {
        //e.preventDefault();
        
    }
    function onSubmit(e) {
        e.preventDefault();
        console.log(topTextVal, bottomTextVal)
    }

  return (
    <div className="App">
        <form onSubmit={onSubmit}>
            <div>
                <input 
                name="topText" 
                onChange={(e)=>setTopTextVal(e.target.value)} 
                type="text" 
                placeholder='Top text' />
            </div>
            <div>
                <input 
                name="bottomText" 
                onChange={(e)=>setBottomTextVal(e.target.value)} 
                type="text" 
                placeholder='Bottom text' />
            </div>
            <br />
            <button onClick={handelClick} type="submit">Get meme image 🖼️</button>
        </form>
        <br />
        <p>{topTextVal} {bottomTextVal}</p>
    </div>
  )
}

export default Page