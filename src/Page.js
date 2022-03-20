
import { useState } from 'react'

function Page() {

    const [formData, setFormData] = useState({})

    function handelChange(e) {
        //e.preventDefault();
        setFormData(prevData => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
        
    }
    function onSubmit(e) {
        e.preventDefault();
        console.log(formData.topText, formData.bottomText)
    }

  return (
    <div className="App">
        <form onSubmit={onSubmit}>
            <div>
                <input 
                name="topText" 
                onChange={handelChange} 
                type="text" 
                placeholder='Top text' />
            </div>
            <div>
                <input 
                name="bottomText" 
                onChange={handelChange} 
                type="text" 
                placeholder='Bottom text' />
            </div>
            <br />
            <button type="submit">Get meme image 🖼️</button>
        </form>
        <br />
        <p>{formData.topText} {formData.bottomText}</p>
    </div>
  )
}

export default Page