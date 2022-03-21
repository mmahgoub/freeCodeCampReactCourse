
import { useState } from 'react'

function Page() {

    const [formData, setFormData] = useState({
        topText: "",
        bottomText: "",
        isTrue: true,
        whyThis: ""
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
                <label htmlFor='isTrue'>Are you human?</label>
                <input 
                id="isTrue" 
                name="isTrue" 
                onChange={handelChange} 
                type="checkbox" 
                checked={formData.isTrue} 
                 />
            </div>
            <br />
            <fieldset>
                <legend>Why do want this?</legend>
                <div>
                    <label htmlFor='forFun'>For fun</label>
                    <input 
                    id="forFun" 
                    name="whyThis" 
                    onChange={handelChange} 
                    type="radio" 
                    value="For fun" 
                    checked={formData.whyThis === "For fun"} 
                    />
                </div>
                <div>
                    <label htmlFor='forWork'>For work</label>
                    <input 
                    id="forWork" 
                    name="whyThis" 
                    onChange={handelChange} 
                    type="radio" 
                    value="For work"
                    checked={formData.whyThis === "For work"} 
                    />
                </div>
            </fieldset>
            <br />
            <button type="submit">Get meme image 🖼️</button>
        </form>
        <br />
        <p>{formData.topText} {formData.bottomText} {formData.whyThis} |  {formData.isTrue ? "Human" : "Alien"}</p>
    </div>
  )
}

export default Page