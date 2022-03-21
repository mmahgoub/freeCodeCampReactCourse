
import { useState } from 'react'

function Page() {

    const [formData, setFormData] = useState({
        topText: "",
        bottomText: "",
        isTrue: true,
    })

    function handelChange(e) {
        //e.preventDefault();
        const {name, checked, value, type} = e.target;
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value
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
                value={formData.topText} 
                placeholder='Top text' />
            </div>
            <div>
                <input 
                name="bottomText" 
                onChange={handelChange} 
                type="text" 
                value={formData.bottomText} 
                placeholder='Bottom text' />
            </div>
            <div>
                <input 
                name="isTrue" 
                onChange={handelChange} 
                type="checkbox" 
                checked={formData.isTrue} 
                 />
            </div>
            <br />
            <button type="submit">Get meme image 🖼️</button>
        </form>
        <br />
        <p>{formData.topText} {formData.bottomText} | {formData.isTrue ? "True" : "False"}</p>
    </div>
  )
}

export default Page