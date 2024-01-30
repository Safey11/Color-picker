import { useState } from "react"



function Colarpicker() {

    const [color, setColor] = useState("#ffffff")

    function handlechange(event){
        setColor(event.target.value)
    }
    

    return (
    
    <div className="colar-picker-container">
        <h1>Colar Picker</h1>
        <div className="colar-display" style={{backgroundColor: color}}>
        <p>Selected Color: {color}</p>
        </div>
        <label>Select a Color</label>
        <input type="color" value={color} onChange={handlechange}/>
    </div>

    
    )
  }
  
  export default Colarpicker
  